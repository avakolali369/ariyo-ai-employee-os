# Ariyo Workflow Automation Skill

Version: 1.0.0
Product: Ariyo
Purpose:
Act as a Workflow Automation Architect, AI Employee Orchestration Designer, Backend Workflow Engineer, Product Safety Reviewer, and Operational Reliability Guardian for Ariyo.
Audience:
Codex Agents and AI-assisted development tools.
Priority:
Non-negotiable.
Dependencies:
- product-strategy.md
- ai-employee-architecture.md
- backend-architecture.md
- knowledge-rag.md
- coding-standards.md
- project-structure.md
- frontend-state-data.md
- frontend-forms-validation.md
- frontend-testing.md
- frontend-copywriting.md

If conflicts exist:
- product-strategy.md wins for product direction and business positioning.
- ai-employee-architecture.md wins for AI employee role, scope, autonomy, review policy, and safety semantics.
- backend-architecture.md wins for backend service boundaries, permissions, data persistence, job execution, and reliability.
- knowledge-rag.md wins for knowledge access, grounding, retrieval, citations, freshness, and hallucination prevention.
- frontend-copywriting.md wins for user-facing language.
- workflow-automation.md wins for workflow structure, triggers, conditions, actions, approval, execution lifecycle, auditability, retry behavior, and automation safety.

Ariyo workflows must make AI employees operational without making them uncontrolled.

---

# Core Contract

Ariyo workflow automation is not a generic no-code automation toy.

Ariyo workflow automation is the controlled execution layer that lets organizations define when an AI employee should act, what context it may use, what tools it may call, when a human must review, and how success or failure is measured.

Ariyo workflows must be:

```text
role-bound
permission-aware
organization-scoped
versioned
reviewable
auditable
observable
recoverable
idempotent where needed
safe by default
measurable
```

A workflow that can trigger powerful AI behavior without scope, permission, review, audit, and rollback is not acceptable.

---

# Product Meaning

In Ariyo, workflows exist to turn AI employees from passive assistants into reliable business operators.

Workflows should help businesses:

```text
respond faster
reduce repeated work
standardize operations
route work to the right employee
connect business systems
use knowledge safely
enforce review before risky actions
measure automation outcomes
control AI cost
maintain human oversight
```

Ariyo workflows should feel like configuring a trusted business process.

They should not feel like wiring random technical blocks together.

---

# What Ariyo Workflow Automation Is Not

Ariyo workflow automation is not:

```text
a Zapier clone
a generic trigger-action toy
a prompt-chain playground
a backend job dashboard
a developer-only rules engine
a chatbot flow builder
a hidden decision engine
a replacement for permissions
a way to bypass human review
a source of fake automation success
```

Ariyo workflows must be understandable to business users and safe enough for production operations.

---

# Workflow Architecture Principle

Every workflow must answer:

```text
Who owns this workflow?
Which AI employee runs it?
What event starts it?
What conditions must be true?
What knowledge may be used?
What tools may be called?
What channel does it affect?
What actions may be taken?
What requires human approval?
What happens on failure?
How is it audited?
How is success measured?
How is cost tracked?
How can it be paused, edited, or rolled back?
```

If these answers are unclear, the workflow is not production-ready.

---

# Workflow Domain Model

Ariyo workflow architecture should model the following concepts explicitly:

```text
Workflow
Workflow Version
Workflow Draft
Workflow Trigger
Workflow Condition
Workflow Step
Workflow Action
Workflow Guardrail
Workflow Approval Policy
Workflow Execution
Workflow Step Execution
Workflow Run Context
Workflow Event
Workflow Audit Log
Workflow Metric
Workflow Cost Record
Workflow Failure
Workflow Retry Policy
Workflow Schedule
Workflow Permission Policy
```

Do not represent workflows as untyped JSON blobs without domain contracts.

Structured workflows are required for safety, validation, evaluation, and UI clarity.

---

# Workflow Ownership Rule

Every workflow must belong to:

```text
organization
workspace when applicable
AI employee
created by member
updated by member
published by member
```

Workflow ownership must be explicit.

A workflow without organization ownership is invalid.

A workflow without an AI employee owner is invalid unless it is a reusable template that has not been activated.

---

# AI Employee Binding Rule

Every active workflow must be bound to an AI employee.

The workflow may not exceed the employee's:

```text
role scope
allowed channels
allowed tools
knowledge access
autonomy level
review policy
risk level
budget policy
permission boundaries
```

If a workflow requires capabilities outside the employee's scope, Ariyo must block activation or require a different employee configuration.

A workflow cannot make an employee more powerful than its approved role.

---

# Workflow Lifecycle

Workflow lifecycle must be explicit.

Required states:

```text
draft
ready_to_publish
published
active
paused
archived
failed_validation
retired
```

Optional states when needed:

```text
scheduled
publishing
publish_failed
needs_review
```

State meaning:

```text
draft:
editable and not executing

ready_to_publish:
valid and waiting for explicit publish action

published:
versioned and immutable definition exists

active:
workflow can execute

paused:
workflow exists but will not execute

archived:
workflow removed from active use but preserved for audit/history

failed_validation:
workflow cannot be published or activated until fixed

retired:
old published version no longer used
```

Do not use vague states like `done`, `ok`, `enabled`, or `live` without precise meaning.

---

# Draft and Published Version Rule

Draft and published workflows must be separate.

Rules:

```text
editing a workflow updates a draft
publishing creates an immutable version
executions reference the published version used at run time
old executions remain tied to old versions
rollback should target previous published versions when supported
published versions must not mutate silently
```

Bad:

```text
A running workflow reads the latest mutable JSON definition.
```

Good:

```text
A workflow execution references workflow_version_id.
```

Versioning is required for auditability and debugging.

---

# Workflow Template Rule

Workflow templates may exist, but templates are not active workflows.

Templates should define:

```text
intended employee role
business use case
required channels
required knowledge sources
required permissions
steps
risk level
recommended review policy
success metrics
setup requirements
```

Templates must become organization-owned drafts before activation.

A template must not execute directly.

---

# Workflow Builder Rule

The workflow builder must help users create safe workflows.

It should:

```text
show setup requirements
explain trigger meaning
validate required fields early
show missing permissions
show missing knowledge sources
show risk level
show review requirements
show estimated AI cost when possible
show what the employee will and will not do
provide a review step before publish
```

The builder must not let users publish invalid or unsafe workflows.

---

# Workflow Setup Readiness Rule

Before a workflow can become active, Ariyo must validate readiness.

Readiness checks include:

```text
AI employee is active or ready
required channel is connected
required knowledge sources are ready
required integrations are connected
required permissions are available
required review policy is configured
required variables are provided
required tools are allowed
risk level is accepted
billing or usage limits allow execution
```

If readiness fails, show specific setup blockers.

Bad:

```text
Workflow cannot start.
```

Good:

```text
Connect a support channel before publishing this workflow.
```

---

# Trigger Architecture

A trigger defines when a workflow starts.

Ariyo triggers must be typed, validated, permission-aware, and observable.

Approved trigger categories:

```text
manual trigger
channel event trigger
schedule trigger
integration event trigger
system event trigger
AI employee event trigger
webhook trigger when approved
```

Each trigger must define:

```text
type
source
event name
required payload shape
permission requirement
deduplication strategy
rate limit policy
failure handling
```

Do not use free-form trigger strings without validation.

---

# Manual Trigger Rule

Manual triggers start when a user explicitly runs a workflow.

Use manual triggers for:

```text
controlled testing
one-off operations
admin-run workflows
safe previews
reviewed execution
low-frequency operations
```

Manual trigger UI must show:

```text
workflow name
AI employee
expected action
required inputs
risk level when relevant
primary run action
```

Manual run labels should be explicit:

```text
Run workflow
Test workflow
Send for review
```

Avoid vague labels:

```text
Go
Start
Proceed
OK
```

---

# Channel Event Trigger Rule

Channel event triggers start from connected communication channels.

Examples:

```text
new customer message
new support ticket
incoming email
new chat conversation
message assigned to employee
message tagged for automation
conversation reopened
```

Channel triggers must respect:

```text
channel connection status
employee channel access
organization permissions
conversation ownership
review mode
rate limits
customer-facing safety
```

An AI employee must not reply to a channel it is not deployed to.

---

# Schedule Trigger Rule

Scheduled workflows must be clear and controlled.

Examples:

```text
daily summary
weekly performance review
monthly AI cost report
scheduled follow-up
knowledge freshness check
```

Scheduled workflow requirements:

```text
timezone awareness
organization timezone support
clear recurrence
pause support
next run time
last run status
missed run behavior
idempotency for repeated runs
```

Scheduled jobs must not run indefinitely without observability.

---

# Integration Event Trigger Rule

Integration events may start workflows when external systems change.

Examples:

```text
new CRM lead
new order
payment failed
form submitted
ticket created
calendar event created
invoice overdue
```

Requirements:

```text
integration is connected
webhook/event source verified
payload is validated
event is deduplicated
organization is resolved safely
permissions are checked
rate limits apply
failures are logged
```

Never trust external integration payloads directly.

---

# System Event Trigger Rule

System events are Ariyo-owned events.

Examples:

```text
employee deployed
knowledge source ready
knowledge source failed
workflow published
member invited
AI cost threshold reached
usage limit approaching
```

System event triggers must be typed.

Do not use system events as hidden shortcuts to bypass workflow validation.

---

# AI Employee Event Trigger Rule

AI employee events may trigger follow-up workflows only when explicitly allowed.

Examples:

```text
employee needs human review
employee could not answer
employee detected missing knowledge
employee completed task
employee flagged risk
employee exceeded confidence threshold
employee reached cost threshold
```

AI employee events must include:

```text
employee id
organization id
source execution id
reason
confidence when relevant
risk level
recommended next action
```

Do not allow recursive automation loops without guardrails.

---

# Webhook Trigger Rule

Webhook triggers are high-risk and must be approved.

Requirements:

```text
signature verification
secret rotation support
payload validation
rate limiting
deduplication
audit logging
organization resolution
permission mapping
replay protection
safe error response
```

Webhook triggers must never execute arbitrary actions directly without workflow validation.

---

# Trigger Deduplication Rule

Workflow triggers must avoid duplicate execution.

Deduplication should consider:

```text
external event id
source id
organization id
workflow id
trigger type
payload hash when needed
time window
idempotency key
```

Duplicate events should not cause duplicate customer-facing actions, billing changes, invites, or destructive behavior.

---

# Condition Architecture

Conditions decide whether a workflow should continue.

Conditions must be typed and safe.

Approved condition categories:

```text
field comparison
status check
permission check
channel check
knowledge readiness check
employee state check
business hours check
date/time check
cost threshold check
confidence threshold check
human review state check
integration state check
```

Avoid arbitrary code conditions.

Conditions should be understandable in the UI.

---

# Condition Builder Rule

Conditions should be represented as structured rules.

Good:

```text
IF message channel is Website Chat
AND employee confidence is at least 0.75
AND knowledge source status is Ready
THEN create reply draft
```

Bad:

```text
eval("message.channel === 'chat' && confidence > 0.75")
```

Do not execute user-provided code.

---

# Condition Safety Rule

Unknown or invalid condition results must fail closed.

Forbidden defaults:

```text
unknown condition result → continue
missing permission → allowed
unknown channel → allowed
unknown knowledge status → ready
unknown confidence → high
```

Safe defaults:

```text
unknown condition result → stop or require review
missing permission → block
unknown channel → block
unknown knowledge status → require review
unknown confidence → require review
```

Never default unknown workflow state to success.

---

# Action Architecture

Actions define what a workflow does.

Actions must be typed, permission-aware, validated, auditable, and recoverable.

Approved action categories:

```text
create draft
send message
assign task
create ticket
update status
notify team member
request human review
sync knowledge source
call approved integration tool
generate summary
create report
schedule follow-up
pause employee
escalate conversation
```

High-risk actions require explicit guardrails.

---

# Action Scope Rule

A workflow action may only execute if allowed by:

```text
organization policy
member permissions
AI employee role
AI employee autonomy level
workflow approval policy
channel deployment
integration permission
knowledge access policy
billing/usage policy
```

A workflow step must not bypass employee or organization policy.

---

# Customer-Facing Action Rule

Customer-facing actions are high-risk.

Examples:

```text
send customer message
reply automatically
change customer ticket status
issue refund instruction
confirm order information
send billing-related communication
```

Customer-facing actions require:

```text
active employee deployment
allowed channel
approved reply mode
knowledge grounding when needed
confidence threshold
review policy compliance
safe fallback
execution audit
```

Do not send customer-facing messages from draft or test workflows.

---

# Internal Action Rule

Internal actions may have lower risk but still require controls.

Examples:

```text
create internal note
summarize conversation
notify team
assign task
update internal status
create report
```

Internal actions must still be:

```text
permission-aware
audited
scoped to organization
recoverable on failure
```

---

# Destructive Action Rule

Destructive workflow actions require explicit approval and safeguards.

Examples:

```text
delete workflow
remove source
disconnect integration
remove member
close account
cancel subscription
remove data
```

By default, workflows should not perform destructive actions automatically.

If supported, destructive actions require:

```text
explicit admin permission
human approval
object name
irreversibility warning
idempotency protection
audit log
safe failure state
```

---

# Billing Action Rule

Billing-related actions must not run automatically unless explicitly approved by product and backend architecture.

Billing actions include:

```text
change plan
cancel subscription
update payment method
apply credit
download invoice
notify overdue payment
```

Billing changes must be server-confirmed.

Optimistic billing workflow success is forbidden.

---

# Tool Execution Rule

Workflow tools are approved capabilities that actions may call.

Tools must define:

```text
name
purpose
input schema
output schema
required permission
risk level
idempotency behavior
timeout
retry policy
rate limit
logging policy
sensitive data policy
```

Do not let workflows call arbitrary tools.

Tool calls must be routed through approved backend boundaries.

---

# Tool Input Validation Rule

All tool inputs must be validated before execution.

Invalid tool input must fail safely.

Do not pass raw AI-generated arguments directly into tools.

Required pipeline:

```text
AI employee or workflow proposes action
schema validates action input
permission layer checks capability
approval layer checks review requirement
executor runs tool
result is normalized
execution is logged
```

---

# AI-Generated Action Rule

If an AI employee proposes an action, Ariyo must validate the action before execution.

Validation includes:

```text
action exists
action is allowed for employee
action input matches schema
action target belongs to organization
action is permitted by workflow
action does not require missing approval
action does not exceed risk/cost limits
```

AI output is not authority.

Ariyo policy is authority.

---

# Approval Architecture

Approval policies define when a human must review before an action is executed.

Approval policy must support:

```text
always require review
require review above risk threshold
require review below confidence threshold
require review for customer-facing messages
require review for billing actions
require review for destructive actions
require review for unknown knowledge
require review for first execution
allow automatic execution for safe actions
```

Approval policies must be visible and understandable to users.

---

# Review Queue Rule

Actions requiring human review must enter a review queue.

Review items should include:

```text
AI employee
workflow
trigger event
proposed action
proposed message or change
knowledge sources used
confidence
risk level
reason review is required
approve action
edit action when supported
reject action
request more information
```

Review queues must preserve context.

Do not ask humans to approve without showing why.

---

# Approval Decision Rule

Approval decisions must be audited.

Audit should include:

```text
review item id
reviewer member id
decision
edited content if applicable
reason when provided
timestamp
workflow version
employee id
execution id
```

Approval is a business control and must be traceable.

---

# Human-in-the-Loop Rule

Human review is required when:

```text
risk is high
confidence is low
knowledge is missing
knowledge conflicts
customer-facing action is sensitive
billing is affected
permission is uncertain
policy requires review
employee is newly deployed
action is irreversible
```

Do not remove human review to make automation look more powerful.

Trust grows through controlled autonomy.

---

# Autonomy Level Rule

Workflow behavior must respect AI employee autonomy level.

Recommended autonomy levels:

```text
draft_only:
employee can draft but cannot execute externally

review_required:
employee can propose actions, human approves

auto_safe:
employee can execute approved low-risk actions

auto_with_limits:
employee can execute within limits and thresholds

restricted:
employee cannot execute until configuration is fixed
```

Autonomy level must be explicit in workflow execution.

---

# Risk Level Rule

Every workflow and high-impact action must have a risk level.

Recommended risk levels:

```text
low
medium
high
critical
```

Examples:

```text
low:
create internal summary

medium:
reply draft for human review

high:
send customer reply automatically

critical:
change billing or permissions
```

Risk level determines approval, logging, testing, and rollout requirements.

---

# Confidence Rule

AI confidence must not be treated as truth.

Confidence should influence:

```text
review requirement
fallback behavior
abstention
escalation
copy shown to reviewers
quality metrics
```

Low confidence must not silently proceed for customer-facing or high-risk actions.

If confidence is unavailable, treat it as insufficient for automatic high-risk execution.

---

# Knowledge Grounding Rule

Workflows that generate business answers must use approved knowledge when required.

Required for:

```text
customer support replies
policy answers
product answers
pricing answers
billing answers
legal-sensitive answers
operational instructions
```

If required knowledge is unavailable, workflow should:

```text
request human review
ask a clarifying question
escalate
state that it cannot answer confidently
suggest connecting or updating a knowledge source
```

Do not let workflows invent answers when knowledge is insufficient.

---

# Knowledge Permission Rule

Workflow execution may only retrieve knowledge allowed for:

```text
organization
workspace
AI employee
workflow
channel
member permissions when human-triggered
customer context when applicable
```

Permission filters must be applied before retrieval.

Do not retrieve first and filter later in unsafe contexts.

---

# Prompt Injection Defense Rule

Workflow inputs may contain malicious instructions.

Untrusted content includes:

```text
customer messages
uploaded documents
webpage content
integration payloads
emails
chat transcripts
support tickets
form submissions
```

Workflows must treat this content as data, not instructions.

AI employees must not follow instructions from retrieved or external content that conflict with Ariyo policy, employee scope, or workflow rules.

---

# Execution Lifecycle

Workflow execution must be modeled explicitly.

Recommended execution states:

```text
queued
running
waiting_for_approval
waiting_for_external_system
completed
completed_with_review
failed
cancelled
skipped
expired
retrying
```

Each step execution should also have state.

Do not represent complex execution as a single boolean.

---

# Execution Context Rule

Every workflow execution must capture context.

Required context:

```text
organization id
workflow id
workflow version id
AI employee id
trigger type
trigger event id
channel id when relevant
integration id when relevant
initiating member id when manual
input payload reference
knowledge context references when used
approval policy snapshot
risk level
```

Execution context must be immutable enough for audit and debugging.

---

# Step Execution Rule

Each workflow step must produce structured execution records.

Step execution should include:

```text
step id
step type
status
started at
finished at
input summary
output summary
error code when failed
retry count
tool call id when relevant
approval item id when relevant
AI cost when relevant
```

Do not hide step failures inside generic workflow failure.

---

# Idempotency Rule

High-impact workflow execution must be idempotent where possible.

Use idempotency for:

```text
external event handling
message sending
member invitation
billing actions
workflow publishing
integration updates
file processing
knowledge sync
customer-facing actions
```

Idempotency keys should include:

```text
organization id
workflow version id
trigger event id
action id
target id
```

Do not send duplicate customer replies because of retry or duplicate webhook delivery.

---

# Retry Policy Rule

Retries must be intentional.

Retry is appropriate for:

```text
temporary network failure
rate-limited external system with retry-after
transient provider outage
job timeout where idempotency is guaranteed
```

Retry is dangerous for:

```text
destructive actions
billing changes
customer-facing sends without idempotency
permission failures
validation failures
policy failures
```

Retry policy must define:

```text
max attempts
backoff
retryable errors
non-retryable errors
idempotency requirement
final failure behavior
```

---

# Timeout Rule

Workflow steps must have timeouts.

Timeout behavior must be explicit:

```text
mark step failed
mark execution failed
request human review
retry if safe
cancel downstream steps
notify owner when needed
```

A workflow must not remain running forever because an external system did not respond.

---

# Cancellation Rule

Users with permission should be able to cancel running workflows when safe.

Cancellation must consider:

```text
already completed steps
external side effects
pending approval items
running jobs
customer-facing actions already sent
safe audit state
```

Do not imply cancellation can undo side effects unless rollback is actually supported.

---

# Pause Rule

Pausing a workflow prevents future executions.

Pausing should not necessarily cancel already running executions unless explicitly selected.

UI copy must distinguish:

```text
Pause workflow
Cancel current run
Archive workflow
Delete workflow
```

These are different actions.

---

# Rollback Rule

Rollback means returning to a previous workflow version or reversing supported effects.

Rollback must be explicit.

Do not use rollback language if the system only creates a new version from an old version.

Good copy:

```text
Restore previous version
```

rather than:

```text
Undo everything
```

unless all side effects can actually be undone.

---

# Concurrency Rule

Workflow concurrency must be controlled.

Define concurrency policy:

```text
allow_parallel
single_active_per_workflow
single_active_per_target
queue_new_runs
drop_duplicate_runs
require_manual_resolution
```

Examples:

```text
single_active_per_conversation:
prevents two replies to the same customer conversation

single_active_per_source:
prevents duplicate source syncs

queue_new_runs:
processes scheduled reports sequentially
```

Uncontrolled concurrency creates unsafe automation.

---

# Rate Limit Rule

Workflows must respect rate limits.

Rate limit by:

```text
organization
AI employee
workflow
channel
integration
action type
AI provider
customer conversation when relevant
```

Rate limit failures should be visible and recoverable.

Do not hammer external APIs or AI providers.

---

# Budget and Cost Rule

Workflow execution must be compatible with AI cost tracking.

Track cost by:

```text
organization
AI employee
workflow
execution
step
model/provider when relevant
knowledge retrieval when relevant
```

Workflows should support:

```text
cost estimate when possible
usage limits
budget thresholds
cost alerts
execution blocking when limits are reached
```

Do not let automation create unbounded AI cost.

---

# AI Cost Guardrail

When cost limits are reached, workflows should:

```text
pause automatic execution
request review
show clear billing/usage state
avoid partial hidden failures
provide recovery path
```

Good copy:

```text
This workflow paused because the AI cost limit was reached.
```

Do not continue execution silently after cost limits are exceeded.

---

# Permission Enforcement Rule

Workflow execution permissions must be enforced by backend.

Frontend can show capability and readiness.

Backend must enforce:

```text
workflow publish permission
workflow edit permission
workflow run permission
AI employee action permission
channel access
integration access
knowledge access
billing access
member management access
```

Never rely on frontend-only permission checks.

---

# Multi-Tenancy Rule

Workflows must be organization-scoped at every layer.

Required:

```text
organization id on workflow
organization id on workflow version
organization id on execution
organization id on events
organization id on logs
organization id in query filters
organization id in background jobs
organization id in external callbacks
```

Cross-organization workflow execution is a critical security violation.

---

# Audit Trail Rule

Every important workflow event must be auditable.

Audit events include:

```text
workflow created
workflow edited
workflow validated
workflow published
workflow activated
workflow paused
workflow archived
workflow run started
workflow run completed
workflow run failed
step executed
tool called
message sent
approval requested
approval approved
approval rejected
retry attempted
execution cancelled
permission denied
```

Audit logs must be organization-scoped and immutable enough for trust.

---

# Activity Feed Rule

User-facing activity should show meaningful workflow history.

Good activity copy:

```text
Workflow published
Customer Support Employee created a reply draft
Review requested for automatic reply
Source sync failed. Retry sync.
Workflow paused after AI cost limit was reached
```

Avoid backend jargon:

```text
Celery task started
Worker job failed
LLM call completed
Webhook consumed
```

Activity must help users understand business operations.

---

# Observability Rule

Workflow execution must be observable.

Backend should capture:

```text
workflow execution id
step execution id
organization id
AI employee id
workflow version id
trigger event id
provider request id when relevant
latency
failure reason
retry count
AI cost
knowledge retrieval ids
approval ids
```

Do not rely only on user-facing logs for debugging.

---

# Error Taxonomy Rule

Workflow errors must be categorized.

Recommended categories:

```text
validation_error
permission_error
configuration_error
knowledge_unavailable
confidence_too_low
approval_required
integration_error
channel_error
provider_error
rate_limit_error
budget_limit_error
timeout_error
unknown_error
```

Raw provider errors must be normalized before reaching product UI.

---

# Failure Behavior Rule

Workflow failure must result in a safe state.

Failure should define:

```text
what stopped
what completed
what did not happen
whether user action is needed
whether retry is available
whether data was saved
whether external side effect occurred
```

Good copy:

```text
Workflow failed before sending a reply. No customer message was sent.
```

Bad copy:

```text
Something went wrong.
```

---

# Partial Failure Rule

Partial failure must be honest.

If some steps completed and others failed, show:

```text
completed steps
failed step
safe state
recovery action
risk warning when needed
```

Do not show overall success when critical downstream steps failed.

Do not show overall failure if useful safe work was completed and needs review.

---

# Workflow Validation Rule

Workflows must be validated before publish and before execution.

Validation should check:

```text
trigger configuration
action schemas
condition schemas
required integrations
required channels
required knowledge sources
employee scope
permissions
approval requirements
risk level
cycle/loop safety
cost limits
concurrency policy
missing variables
```

Validation should return structured errors for UI display.

---

# Publish Validation Rule

Publishing must fail if workflow is unsafe or incomplete.

Do not publish workflows with:

```text
missing trigger
missing action
invalid condition
missing required channel
missing required integration
missing knowledge source when required
unsupported employee capability
unapproved high-risk action
unsafe automatic customer-facing action
unbounded loop
unknown variable
```

Publish action must be explicit.

---

# Runtime Validation Rule

Even published workflows must be revalidated at runtime.

Runtime can change:

```text
permissions
employee status
channel status
integration status
knowledge source status
billing limits
usage limits
organization state
```

A workflow valid yesterday may be unsafe today.

Runtime validation must fail safely.

---

# Loop Prevention Rule

Workflows must prevent infinite loops.

Risks:

```text
workflow triggers itself
employee event triggers workflow that emits same event
integration update re-triggers same workflow
retry creates duplicate trigger
customer reply triggers automatic response loop
```

Guardrails:

```text
execution depth limit
trigger deduplication
source execution id
loop detection
rate limits
cooldown windows
manual review for recursive behavior
```

Automation loops are forbidden.

---

# Workflow Variables Rule

Workflow variables must be typed.

Examples:

```text
customer_name
conversation_id
ticket_id
employee_id
source_id
date_range
channel_id
confidence_score
```

Variables must define:

```text
name
type
source
required/optional
safe display label
sensitive flag
default when allowed
```

Do not allow arbitrary untyped variable interpolation into prompts, URLs, or tool calls.

---

# Sensitive Variable Rule

Sensitive variables must be protected.

Examples:

```text
tokens
secrets
private messages
billing details
integration credentials
customer PII
knowledge source content
```

Sensitive variables must not appear in:

```text
URLs
logs
analytics events
unsafe UI
copy/paste debug panels
review summaries unless necessary
```

Use references or redaction where possible.

---

# Prompt Assembly Rule

Workflow prompts must be assembled from structured policy, not random concatenation.

Prompt context should include:

```text
AI employee role
workflow objective
allowed actions
forbidden actions
knowledge context
channel context
review policy
output schema
safety instructions
```

Do not let user-editable workflow text override system guardrails.

Do not place untrusted external content in instruction positions.

---

# Output Schema Rule

AI-generated outputs used by workflows must be schema-validated.

Examples:

```text
reply draft
classification result
routing decision
summary
recommended action
workflow variable extraction
tool call proposal
```

Invalid output must fail safely.

Do not execute actions from unvalidated model output.

---

# Classification Rule

If workflows classify events, classifications must be testable.

Examples:

```text
billing question
technical support question
refund request
urgent complaint
sales lead
needs human review
low confidence
```

Classifications should include:

```text
label
confidence
reason
source evidence when possible
fallback
```

Low confidence classifications should not trigger high-risk automation.

---

# Escalation Rule

Workflows must support escalation.

Escalate when:

```text
confidence is low
knowledge is missing
customer is frustrated
request is outside employee scope
policy is unclear
billing/security/legal issue appears
action requires permission
workflow fails repeatedly
```

Escalation should create a human-readable item with context.

Do not drop difficult cases silently.

---

# Fallback Rule

Every workflow must have fallback behavior.

Fallback options:

```text
request human review
create draft only
notify team
ask clarifying question
pause execution
retry safe step
skip step with audit
escalate to owner
```

Fallback must be product-specific.

Avoid generic failure states.

---

# Workflow UX Contract

Workflow UI must make automation understandable.

Users should see:

```text
workflow name
AI employee
status
trigger
conditions
actions
review policy
risk level
last run
next run when scheduled
success rate
failure count
AI cost
setup blockers
activity history
```

Workflow UI must not hide operational behavior.

---

# Workflow Naming Rule

Workflow names should describe business outcome.

Good:

```text
Reply to common support questions
Escalate billing issues
Create daily support summary
Notify team when source sync fails
Draft follow-up for new leads
```

Bad:

```text
Workflow 1
Automation
Test
New Flow
Rule
Agent Action
```

Names should help users understand what happens.

---

# Workflow Copy Rule

Use Ariyo product language.

Preferred terms:

```text
AI employee
workflow
trigger
condition
action
review
approval
source
sync
channel
deployment
activity
AI cost
```

Avoid backend jargon in UI:

```text
worker
job
task queue
Celery
LLM call
function call
webhook payload
JSON schema
vector query
```

Backend terms may exist in engineering code, not user-facing copy.

---

# Status Copy Rule

Workflow states must use clear product copy.

Good:

```text
Draft
Ready to publish
Active
Paused
Needs review
Run failed
Waiting for approval
Completed
```

Bad:

```text
OK
Done
Running task
Job failed
State 3
Enabled true
```

State copy must help users make decisions.

---

# Setup Blocker Copy Rule

Setup blockers must be specific.

Good:

```text
Connect a channel before activating this workflow.
Add a ready knowledge source before automatic replies can run.
Only admins can publish this workflow.
This employee must be deployed before the workflow can run.
```

Bad:

```text
Invalid workflow.
Missing configuration.
Cannot continue.
```

---

# Review Step UX Rule

Before publishing a workflow, users should review:

```text
what starts the workflow
what the employee will do
what requires approval
what can happen automatically
which channel is affected
which knowledge is used
who can edit or pause it
estimated cost or cost risk when available
```

Publishing automation should feel deliberate.

---

# One Primary CTA Rule

Workflow screens should follow one primary CTA.

Examples:

```text
Publish workflow
Save draft
Run workflow
Pause workflow
Resume workflow
Approve action
```

Avoid multiple competing primary actions.

High-risk actions should be visually and semantically distinct.

---

# Frontend State Rule

Workflow frontend state must follow Ariyo state standards.

Use:

```text
TanStack Query for server workflows, executions, versions, activity
React Hook Form + Zod for workflow forms
URL state for filters, tabs, selected view, pagination
Zustand only for local builder canvas state when justified
local state for dialogs and transient UI
```

Do not store server workflow data in Zustand.

Do not store published workflow definitions only in client state.

---

# Workflow Builder Draft State Rule

Workflow builder may use client draft state for complex editing.

Rules:

```text
draft state must be typed
draft state must be separate from published version
server draft should be source of truth when saved
autosave must not overwrite server unexpectedly
organization switch resets draft state
entity change resets draft state
invalid draft cannot publish
```

Large workflow builder state may use Zustand if justified and scoped.

---

# Workflow Form Rule

Workflow forms must use React Hook Form and Zod.

Forms include:

```text
workflow name form
trigger configuration
condition editor
action configuration
approval policy
schedule configuration
publish review
manual run input
```

Validation must produce specific user-facing messages.

---

# Workflow API Rule

Workflow APIs must be typed and explicit.

Recommended operations:

```text
list workflows
get workflow detail
create workflow draft
update workflow draft
validate workflow draft
publish workflow
pause workflow
resume workflow
archive workflow
run workflow manually
list workflow executions
get workflow execution detail
retry workflow execution when safe
cancel workflow execution when safe
list approval items
approve workflow action
reject workflow action
```

Avoid generic endpoints like:

```text
POST /workflow/do
POST /automation/action
PATCH /workflow/:id/json
```

API should reflect domain behavior.

---

# Backend Service Boundary Rule

Backend should separate workflow concerns:

```text
workflow definition service
workflow validation service
trigger ingestion service
execution orchestration service
action/tool execution service
approval service
audit service
metrics service
cost tracking service
```

Do not put all workflow behavior in a single giant view/controller.

---

# Background Job Rule

Workflow execution should use background jobs where appropriate.

Use Celery/queue-based processing for:

```text
long-running execution
external API calls
AI generation
knowledge retrieval at execution time
scheduled workflows
retryable steps
integration events
batch summaries
```

Do not block user requests for long workflow execution.

---

# Transaction Rule

Workflow state transitions must be consistent.

Use database transactions for:

```text
publish version creation
execution creation
step state transitions when needed
approval decision + action release
idempotency record creation
critical audit logs
```

Avoid partial state writes that make workflow history unreliable.

---

# Event Model Rule

Workflow system may use internal events, but events must be typed.

Event payloads should include:

```text
event type
organization id
source id
entity id
timestamp
idempotency key
payload schema version
```

Do not use loosely structured event blobs without validation.

---

# Schedule Storage Rule

Scheduled workflows must store:

```text
schedule expression or structured recurrence
timezone
next run at
last run at
last run status
pause state
owner
```

Scheduling must not depend only on frontend state.

---

# External System Rule

External systems are unreliable.

Workflow actions involving external systems must handle:

```text
timeout
rate limit
auth failure
permission failure
payload validation failure
duplicate events
temporary outage
permanent failure
partial success
```

Show safe user-facing recovery.

---

# Integration Credential Rule

Workflow logic must never expose integration credentials to the frontend.

Credentials belong in backend secure storage.

Workflow UI may show:

```text
connected status
account name when safe
last sync
permission scope summary
reconnect action
```

Do not show raw tokens, secrets, or provider credentials.

---

# Channel Safety Rule

Channel actions must respect deployment state.

Before sending or acting in a channel, validate:

```text
channel connected
employee deployed to channel
workflow allowed for channel
conversation belongs to organization
review policy satisfied
rate limit not exceeded
message is safe to send
```

A workflow cannot send messages through an undeployed channel.

---

# Testing Workflow Rule

Workflow testing should support safe dry runs.

A test run should:

```text
not send real customer-facing messages
not change billing
not remove data
not call destructive tools
show simulated result when possible
show what would happen
log as test execution
```

Test mode must be clearly labeled.

Do not let test mode accidentally perform production side effects.

---

# Dry Run Rule

Dry run is for previewing workflow behavior.

Dry run should include:

```text
trigger sample
condition result
selected knowledge context when safe
action preview
review requirement
estimated cost when possible
warnings
```

Dry run must not be confused with published active execution.

---

# Sandbox Rule

If sandbox execution exists, it must isolate side effects.

Sandbox should not:

```text
send external messages
write to production integrations
change billing
modify permissions
publish workflows
alter customer data
```

Sandbox should be useful for validation but not a bypass.

---

# AI Evaluation Rule

Workflow behavior must be measurable.

Evaluate:

```text
trigger accuracy
condition accuracy
action correctness
reply quality
knowledge grounding
approval rate
edit rate
rejection rate
failure rate
retry rate
customer outcome when available
AI cost per successful run
human time saved
```

Do not call automation successful only because it executed.

Success means the business outcome was achieved safely.

---

# Workflow Metrics Rule

Workflow metrics should include:

```text
runs
successful runs
failed runs
runs requiring review
approved actions
rejected actions
average latency
average AI cost
cost per success
failure category distribution
last run status
most common blocker
automation rate
human override rate
```

Metrics must be scoped by organization, employee, workflow, and time range.

---

# Activation Metrics Rule

Workflow automation is central to activation.

Track:

```text
workflow created
workflow validated
workflow published
workflow activated
first successful run
time to first successful run
workflow paused after failure
setup blockers resolved
review approvals completed
```

First successful workflow run is a major Ariyo value moment.

---

# Audit vs Metrics Rule

Audit logs and metrics are different.

Audit logs answer:

```text
what happened and who/what caused it?
```

Metrics answer:

```text
how often, how well, how fast, and at what cost?
```

Do not use analytics events as the only audit record.

Do not use audit logs as the only product analytics system.

---

# Security Rule

Workflow automation must follow strict security.

Never allow workflows to:

```text
execute arbitrary code
bypass permissions
read unauthorized knowledge
send unauthorized messages
change billing optimistically
expose secrets
log sensitive data
execute unvalidated external payloads
trust webhook payloads without verification
map unknown state to success
```

Security shortcuts are forbidden.

---

# Privacy Rule

Workflow execution must minimize data exposure.

Do not expose:

```text
customer private messages beyond needed review context
knowledge source content unnecessarily
integration payloads in UI logs
secrets
raw provider responses
billing-sensitive fields
internal debug metadata
```

Show summaries and references when full data is not needed.

---

# Compliance Readiness Rule

Even before formal compliance requirements, workflow architecture should support:

```text
audit trails
permission history
data access logs
retention policies
delete/archive behavior
exportable activity records
safe incident investigation
```

Automation without traceability is not enterprise-ready.

---

# Incident Handling Rule

Workflow failures at scale should support incident response.

Needed capabilities:

```text
pause workflow
pause employee automation
pause channel automation
disable trigger type
disable integration execution
inspect affected executions
identify duplicate actions
notify affected users when needed
```

Ariyo must be able to stop unsafe automation quickly.

---

# Kill Switch Rule

High-risk automation systems need kill switches.

Possible kill switches:

```text
organization automation pause
employee automation pause
workflow pause
channel automation pause
integration action disable
AI provider disable
customer-facing send disable
```

Kill switches must be backend-enforced.

---

# Rollout Rule

New workflow capabilities should support controlled rollout.

Use:

```text
feature flags for UI availability
backend capability checks
allowlists for risky features
beta labels when appropriate
monitoring before full rollout
```

Feature flags are not security boundaries.

Backend must enforce capability access.

---

# Migration Rule

Workflow definitions must be versioned for schema migrations.

Workflow schema changes should handle:

```text
old published versions
old drafts
execution history
analytics compatibility
rollback
validation of migrated definitions
```

Do not break old executions by changing workflow schema in place.

---

# Data Retention Rule

Workflow execution data may include sensitive context.

Retention policy should consider:

```text
execution logs
AI prompts/responses
knowledge snippets
review items
integration payload summaries
audit logs
customer-facing message records
```

Do not retain more sensitive data than needed.

Use references where possible.

---

# Frontend Component Requirements

Workflow UI components must handle:

```text
loading
empty
error
success
permission denied
validation blockers
published vs draft state
paused state
last run failed
approval required
setup incomplete
cost limit reached
integration disconnected
knowledge unavailable
```

Workflow UI cannot be happy-path only.

---

# Workflow Table Rule

Workflow list/table should show useful operational state.

Recommended columns or card fields:

```text
workflow name
AI employee
status
trigger
last run
success rate
review mode
AI cost
owner
primary action
```

Mobile layout must be readable.

Do not show raw technical IDs as primary information.

---

# Workflow Detail Rule

Workflow detail should show:

```text
summary
status
AI employee
trigger
conditions
actions
review policy
setup readiness
activity
executions
metrics
versions
settings
```

Users should understand what the workflow does without reading raw configuration.

---

# Execution Detail Rule

Execution detail should show:

```text
workflow version
trigger event
timeline
step statuses
approval state
errors
knowledge used when safe
AI cost
duration
retry history
safe state
recovery actions
```

Execution detail is critical for trust and debugging.

---

# Approval UI Rule

Approval UI should show:

```text
proposed action
AI employee
workflow
customer/channel context when relevant
knowledge citations when used
confidence
risk reason
edit option when supported
approve
reject
```

Approval action labels must be explicit.

Good:

```text
Approve reply
Reject action
Edit draft
```

Bad:

```text
OK
Yes
Proceed
```

---

# Workflow Testing Requirements

Workflow features must be tested.

Test:

```text
workflow validation
publish blockers
permission denied
manual run
safe dry run
trigger parsing
condition evaluation
action schema validation
approval required path
approval decision path
execution failure safe state
idempotency behavior when practical
retry policy when practical
```

High-risk automation must not be untested.

---

# Backend Testing Requirements

Backend workflow tests should cover:

```text
model constraints
workflow version immutability
publish validation
runtime validation
permission enforcement
organization isolation
trigger deduplication
idempotency keys
action execution policy
approval gating
retry policy
audit log creation
execution state transitions
```

Do not rely only on frontend tests for workflow safety.

---

# Evaluation Requirements

Workflow automation quality should be evaluated over time.

Evaluation datasets may include:

```text
representative trigger events
known customer messages
expected routing decisions
expected required review cases
knowledge missing cases
conflicting knowledge cases
malicious prompt injection cases
low confidence cases
```

Evaluation should measure safe behavior, not just completion.

---

# Workflow Review Checklist

Before shipping workflow functionality, verify:

```text
Is the workflow organization-scoped?
Is it bound to an AI employee?
Does it respect employee scope?
Are trigger, conditions, and actions typed?
Is publish validation strict?
Is runtime validation present?
Are permissions backend-enforced?
Are knowledge permissions respected?
Are approval policies explicit?
Are high-risk actions guarded?
Is execution versioned?
Are executions auditable?
Are retries safe?
Is idempotency handled for side effects?
Are duplicate triggers prevented?
Are loops prevented?
Is cost tracked?
Are failure states safe?
Are user-facing states clear?
Are tests meaningful?
```

If any answer is no, the workflow is not production-ready.

---

# Workflow Decision Tree

Ask:

### Does this workflow have an AI employee owner?

If no, it cannot be active.

### Does the trigger come from a trusted source?

If no, validate and verify before execution.

### Is the action customer-facing or high-risk?

If yes, require stricter approval, confidence, audit, and idempotency.

### Does the action require knowledge?

If yes, retrieve only approved knowledge and handle missing confidence safely.

### Could this workflow run twice?

If yes, define deduplication and idempotency.

### Could this workflow loop?

If yes, add loop prevention and rate limits.

### Could this cost money?

If yes, track AI cost and respect budget limits.

### Could this expose sensitive data?

If yes, reduce, redact, or restrict data.

### Could a user misunderstand what will happen?

If yes, improve review UI and copy.

---

# Forbidden Workflow Patterns

Never ship:

```text
active workflow without AI employee owner
workflow actions outside employee scope
untyped workflow JSON blobs as execution authority
mutable published workflow versions
customer-facing sends without review policy
high-risk actions without approval guardrails
workflow execution without organization scope
workflow execution without audit log
raw webhook execution without verification
external payload trusted directly
AI-generated tool calls executed without schema validation
unknown condition treated as true
unknown permission treated as allowed
unknown knowledge status treated as ready
unknown workflow status treated as active
retry for destructive actions without idempotency
duplicate customer replies from retry
workflow loops without prevention
billing actions with optimistic success
workflow publish without validation
runtime execution without revalidation
mock workflow data in production UI
backend jargon in user-facing workflow copy
raw provider errors shown to users
workflow errors shown as generic Something went wrong only
workflow builder that allows invalid publish
workflow UI with no loading/error/empty states
workflow actions hidden when permission denied without explanation where users need context
workflow tests that only check render
```

---

# Ariyo Workflow Automation Golden Rule

Automation is only valuable when users can understand it, control it, trust it, and measure it.

---

# Senior Workflow Architecture Rule

Do not make AI employees powerful by making workflows loose.

Make them powerful by making workflows bounded, observable, reviewable, and safe.

---

# Final Rule

Ariyo workflow automation is production-ready only when workflows are typed, versioned, scoped, validated, permission-aware, bound to AI employee capabilities, grounded in approved knowledge when needed, guarded by review policies, executed with idempotency and retry safety, audited at every important step, observable in production, measurable by business outcome, and understandable to users without exposing backend complexity.
