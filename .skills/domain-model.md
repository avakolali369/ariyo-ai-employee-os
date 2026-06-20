# Ariyo Domain Model Skill

Version: 1.0.0
Product: Ariyo
Purpose:
Act as the Domain Architect, Product Model Guardian, Data Contract Owner, and Entity Lifecycle Reviewer for Ariyo.
Audience:
Codex Agents and AI-assisted product, frontend, backend, AI, analytics, and operations development tools.
Priority:
Non-negotiable.

Dependencies:
- product-strategy.md
- ai-employee-architecture.md
- backend-architecture.md
- knowledge-rag.md
- workflow-automation.md
- ai-safety-evaluation.md
- monetization-billing.md
- product-analytics-growth.md
- deployment-ops.md
- coding-standards.md

If conflicts exist:
- product-strategy.md wins for product positioning, customer promise, and product scope.
- domain-model.md wins for entity definitions, lifecycle states, relationships, naming, ownership, and product vocabulary.
- ai-employee-architecture.md wins for AI employee behavior, autonomy, role boundaries, and employee-specific policies.
- knowledge-rag.md wins for internal knowledge retrieval, indexing, citation, and grounding mechanics.
- workflow-automation.md wins for workflow execution behavior and automation rules.
- backend-architecture.md wins for backend service boundaries, persistence, async jobs, and system architecture.
- monetization-billing.md wins for plans, entitlements, billing state, and revenue rules.
- coding-standards.md wins for implementation quality and code-level rules.

Domain concepts that are ambiguous, duplicated, or inconsistently named are not production-ready.

---

# Core Domain Principle

Ariyo must have one shared product language across frontend, backend, AI, billing, analytics, operations, and customer-facing copy.

Ariyo is an AI Employee Operating System.

Ariyo is not a chatbot builder, prompt playground, generic agent framework, or plugin marketplace.

The domain model must make Ariyo's product truth explicit:

```text id="domain-001"
Organizations hire AI employees.

AI employees work inside bounded business roles.

AI employees use business context, knowledge sources, workflows, channels, tools, and integrations.

AI employees may act with different autonomy levels.

High-risk actions require permission, review, auditability, and server confirmation.

Every important state must be explicit, measurable, and safe.
```

If two parts of the product use different definitions for the same concept, the product will become unsafe and hard to scale.

---

# Domain Model Mission

The domain model must define:

```text id="domain-002"
canonical entities

entity ownership

entity relationships

entity lifecycle states

allowed transitions

permission boundaries

organization scoping

state ownership

analytics meaning

billing meaning

auditability

frontend-safe representations

backend internal representations

AI execution boundaries

forbidden terminology

forbidden data modeling shortcuts
```

The goal is to prevent architectural drift.

---

# Canonical Product Vocabulary

Use these canonical terms across product, code, APIs, analytics, billing, and documentation:

```text id="domain-003"
Organization
Workspace
Member
Role
Permission
AI Employee
Employee Template
Employee Profile
Employee Deployment
Business Context
Knowledge Source
Channel
Integration
Workflow
Workflow Version
Task
Activity
Conversation
Message
Review
Tool
Tool Call
AI Execution
Evaluation
AI Cost
Billing Plan
Entitlement
Invoice
Audit Log
Incident
```

Do not casually introduce synonyms.

Forbidden unless explicitly backend-internal:

```text id="domain-004"
agent
bot
plugin
assistant bot
prompt chain
tenant in user-facing UI
embedding in user-facing UI
vector index in user-facing UI
Celery task in user-facing UI
LLM run in user-facing UI
model invocation in user-facing UI
```

Backend-internal terms may exist in internal modules, but they must be mapped to product language before reaching the frontend.

---

# Product Entity Map

Ariyo's core domain can be understood as:

```text id="domain-005"
Organization
  owns Workspaces
  owns Members
  owns Business Context
  hires AI Employees
  connects Knowledge Sources
  connects Integrations
  creates Workflows
  receives Activities
  manages Billing
  owns Audit Logs

AI Employee
  is based on Employee Template
  has Employee Profile
  has Knowledge Access Policy
  has Tool Policy
  has Channel Policy
  has Autonomy Level
  may have Deployments
  may execute Tasks
  may require Reviews
  generates Activities
  produces AI Cost

Workflow
  belongs to Organization
  references AI Employee
  uses Triggers, Conditions, Actions
  has Versions
  creates Workflow Runs
  may require Reviews
  creates Audit Logs
```

All entities must be organization-scoped unless explicitly global.

---

# Entity Ownership Rule

Every entity must have a clear owner.

Examples:

```text id="domain-006"
Employee Template:
owned by Ariyo platform, visible in Marketplace.

AI Employee:
owned by Organization after hiring.

Knowledge Source:
owned by Organization.

Workflow:
owned by Organization.

Workflow Version:
owned by Workflow.

Tool Call:
owned by AI Execution.

AI Cost:
derived from AI Execution and Billing context.

Audit Log:
owned by Organization and immutable.
```

No entity may exist without an explicit ownership model.

---

# Organization

An Organization is the top-level business account in Ariyo.

It owns business data, members, employees, knowledge, workflows, integrations, billing, and audit history.

## Organization Must Define

```text id="domain-007"
id
name
slug or display identifier
status
createdAt
updatedAt
billingAccountId
primaryWorkspaceId if applicable
settings
security policies
business context reference
```

## Organization Status

Allowed statuses:

```text id="domain-008"
active
suspended
archived
pending_setup
```

Definitions:

```text id="domain-009"
active:
Organization can use Ariyo normally.

pending_setup:
Organization exists but activation setup is incomplete.

suspended:
Organization access is restricted due to billing, security, or admin action.

archived:
Organization is no longer active and should not run employees or workflows.
```

Unknown organization status must never be treated as active.

---

# Workspace

A Workspace is an optional organizational subdivision for teams, departments, use cases, or operating contexts.

Ariyo should support Workspaces only when they create meaningful separation.

Examples:

```text id="domain-010"
Support Workspace
Sales Workspace
Marketing Workspace
Operations Workspace
Finance Workspace
```

A Workspace may scope:

```text id="domain-011"
employees
channels
workflows
knowledge access
members
analytics views
activity feeds
```

Workspace must not replace Organization.

Organization remains the security and billing owner.

## Workspace Status

Allowed statuses:

```text id="domain-012"
active
inactive
archived
```

---

# Member

A Member is a human user belonging to an Organization.

Members may configure employees, approve reviews, manage knowledge, publish workflows, view analytics, or manage billing depending on role and permissions.

## Member Must Define

```text id="domain-013"
id
organizationId
userId
email
name
status
roles
permissions
invitedBy
joinedAt
lastActiveAt
```

## Member Status

Allowed statuses:

```text id="domain-014"
invited
active
suspended
removed
```

Definitions:

```text id="domain-015"
invited:
Invitation sent but not accepted.

active:
Member can access according to permissions.

suspended:
Member exists but access is temporarily blocked.

removed:
Member no longer has organization access.
```

Removed members must not retain access to organization data.

---

# Role

A Role is a named permission bundle.

Default product roles may include:

```text id="domain-016"
Owner
Admin
Manager
Reviewer
Member
Viewer
Billing Admin
Developer
```

Roles must be product-facing.

Avoid backend-only role names in frontend UI.

Forbidden in user-facing role copy:

```text id="domain-017"
superuser
tenant_admin
staff
role_level_5
permission_bitmask
```

---

# Permission

A Permission is a specific capability granted to a Member or Role.

Permissions must be explicit and action-oriented.

Examples:

```text id="domain-018"
canHireEmployee
canDeployEmployee
canPauseEmployee
canManageKnowledgeSources
canConnectIntegration
canPublishWorkflow
canReviewAiOutput
canManageBilling
canInviteMembers
canManageRoles
canViewAiCost
canViewAuditLogs
```

Permission must be enforced by the backend.

Frontend permission checks improve UX but are not security authority.

---

# Business Context

Business Context is the structured understanding of an Organization that AI employees use to behave correctly.

Business Context is not the same as Knowledge Source.

Business Context describes the business.

Knowledge Sources provide documents, facts, policies, pages, and connected content.

## Business Context May Include

```text id="domain-019"
company description
brand voice
industry
products and services
customer types
pricing rules
support policy
sales policy
refund policy
working hours
allowed claims
forbidden claims
escalation rules
compliance notes
language preferences
regional rules
```

Business Context should be treated as organization-private data.

---

# Employee Template

An Employee Template is a marketplace blueprint created by Ariyo.

It defines the role, promise, required setup, recommended knowledge, allowed tools, risk level, and expected value of an AI employee before an organization hires it.

Examples:

```text id="domain-020"
Customer Support Employee
Sales Qualification Employee
Instagram DM Employee
Appointment Scheduling Employee
Knowledge Assistant Employee
Lead Follow-Up Employee
Invoice Reminder Employee
```

## Employee Template Must Define

```text id="domain-021"
id
name
category
summary
roleDescription
businessPromise
setupRequirements
requiredKnowledgeTypes
recommendedIntegrations
allowedChannels
allowedTools
riskLevel
autonomyOptions
successMetrics
estimatedTimeToValue
pricingImpact
status
```

## Template Status

Allowed statuses:

```text id="domain-022"
draft
published
deprecated
archived
```

Organizations can only hire published templates unless internal/admin mode allows otherwise.

---

# AI Employee

An AI Employee is an organization-owned instance of an Employee Template.

It is the core Ariyo domain object.

An AI Employee is not a prompt.

An AI Employee is not just a model configuration.

An AI Employee is a bounded business role.

## AI Employee Must Define

```text id="domain-023"
id
organizationId
workspaceId optional
templateId
name
role
profile
status
autonomyLevel
riskLevel
knowledgeAccessPolicy
toolPolicy
channelPolicy
reviewPolicy
permissions
businessContextPolicy
createdBy
hiredAt
updatedAt
lastActiveAt
```

## AI Employee Status

Allowed statuses:

```text id="domain-024"
hired
setup_required
ready_to_deploy
deploying
active
paused
failed
archived
```

Definitions:

```text id="domain-025"
hired:
Employee has been added to the organization but setup may not be complete.

setup_required:
Required configuration is missing.

ready_to_deploy:
Required setup is complete and employee can be deployed.

deploying:
Deployment is in progress and not yet confirmed active.

active:
Employee is deployed and allowed to perform configured work.

paused:
Employee is intentionally stopped but can be resumed.

failed:
Employee is not operating due to setup, integration, safety, or system failure.

archived:
Employee is no longer active or available for work.
```

Unknown employee status must map to a safe non-active state.

Never default to active.

---

# Employee Profile

Employee Profile is the human-readable product identity of an AI Employee.

It exists to help users understand what the employee does.

## Employee Profile May Include

```text id="domain-026"
name
role title
avatar or icon
short description
responsibilities
what it can do
what it cannot do
required setup
connected knowledge
connected channels
success metrics
activity summary
risk and review mode
```

Profile is not the same as configuration.

Profile explains the employee.

Configuration controls the employee.

---

# Employee Deployment

Employee Deployment is the act and state of enabling an AI Employee in a real operating context.

Deployment may connect the employee to:

```text id="domain-027"
channel
workflow
integration
workspace
business context
knowledge sources
autonomy policy
review queue
```

## Deployment Must Define

```text id="domain-028"
id
organizationId
employeeId
channelId optional
workflowId optional
status
configurationSnapshot
reviewPolicySnapshot
knowledgePolicySnapshot
deployedBy
deployedAt
activatedAt
pausedAt
failedAt
failureReason
```

## Deployment Status

Allowed statuses:

```text id="domain-029"
not_ready
ready
queued
deploying
active
paused
failed
stopped
```

Definitions:

```text id="domain-030"
not_ready:
Required setup is missing.

ready:
Deployment can start.

queued:
Deployment request accepted but not yet running.

deploying:
System is enabling the employee.

active:
Employee is live in the configured context.

paused:
Deployment is temporarily paused.

failed:
Deployment did not complete or cannot operate.

stopped:
Deployment was intentionally stopped.
```

Active deployment must be server-confirmed.

Frontend must never fake active deployment.

---

# Autonomy Level

Autonomy Level defines how independently an AI Employee may act.

Allowed levels:

```text id="domain-031"
draft_only
suggest_with_review
act_with_review
act_with_guardrails
autonomous_limited
```

Definitions:

```text id="domain-032"
draft_only:
Employee can draft outputs only. Human must copy/send manually.

suggest_with_review:
Employee suggests actions or responses for human review.

act_with_review:
Employee prepares an action that must be approved before execution.

act_with_guardrails:
Employee may act automatically inside strict rules and low-risk contexts.

autonomous_limited:
Employee may act automatically within a narrow, measurable, reversible scope.
```

Higher autonomy requires stronger safety, evaluation, monitoring, and rollback.

---

# Risk Level

Risk Level describes the potential business impact of an employee, workflow, action, or tool call.

Allowed levels:

```text id="domain-033"
low
medium
high
critical
```

Examples:

```text id="domain-034"
low:
internal summary, draft note, safe classification.

medium:
customer-facing draft, knowledge answer with citation, routine follow-up.

high:
automatic customer reply, workflow publish, integration action.

critical:
billing change, permission change, destructive action, legal/financial/compliance-sensitive action.
```

Risk must influence review requirements.

---

# Knowledge Source

A Knowledge Source is a connected source of business knowledge that AI Employees may use.

Examples:

```text id="domain-035"
PDF document
website
FAQ page
Google Drive folder
Notion workspace
help center
internal policy document
product catalog
pricing document
support manual
```

## Knowledge Source Must Define

```text id="domain-036"
id
organizationId
workspaceId optional
name
type
status
visibility
accessPolicy
syncPolicy
freshnessPolicy
connectedBy
connectedAt
lastSyncedAt
lastSuccessfulSyncAt
needsReviewReason
failureReason
```

## Knowledge Source Status

Allowed statuses:

```text id="domain-037"
not_connected
connected
syncing
ready
needs_review
failed
outdated
disconnected
archived
```

Definitions:

```text id="domain-038"
not_connected:
Source setup has not been completed.

connected:
Source connection exists but content may not be ready.

syncing:
A sync is currently running.

ready:
Source is available for grounded use.

needs_review:
Source exists but requires user review before safe use.

failed:
Source sync or access failed.

outdated:
Source has not synced within freshness policy.

disconnected:
Connection was removed.

archived:
Source is no longer active.
```

Ready must be server-confirmed.

Do not show source as ready before sync confirms.

---

# Knowledge Document

A Knowledge Document is an internal representation of content inside a Knowledge Source.

It may represent a file, page, article, note, record, or synced object.

User-facing UI may call this a document, page, article, or item depending on source type.

## Knowledge Document Must Define

```text id="domain-039"
id
organizationId
knowledgeSourceId
title
sourceUrl optional
contentType
status
version
lastSyncedAt
metadata
```

Knowledge Documents inherit organization and source permissions.

---

# Knowledge Chunk

Knowledge Chunk is a backend/RAG internal concept.

It should not be a normal user-facing product term.

Frontend should not expose chunk, embedding, or vector terminology unless showing developer/admin diagnostics.

## Knowledge Chunk Must Define Internally

```text id="domain-040"
id
organizationId
knowledgeSourceId
knowledgeDocumentId
contentHash
chunkText
position
embeddingVersion
indexVersion
metadata
createdAt
```

Chunks must never bypass organization or permission filtering.

---

# Channel

A Channel is a place where an AI Employee communicates or receives work.

Examples:

```text id="domain-041"
website chat
email
Instagram DM
WhatsApp
Telegram
Slack
support inbox
CRM conversation
internal dashboard
```

## Channel Must Define

```text id="domain-042"
id
organizationId
integrationId optional
name
type
status
settings
connectedAt
lastActivityAt
```

## Channel Status

Allowed statuses:

```text id="domain-043"
not_connected
connected
active
paused
failed
disconnected
```

Channels should be distinct from Integrations.

Integration is the technical connection.

Channel is the product-facing communication surface.

---

# Integration

An Integration is a connection between Ariyo and an external system.

Examples:

```text id="domain-044"
Google Drive
Notion
Slack
Gmail
WhatsApp provider
Telegram bot
CRM
Helpdesk
Payment provider
Calendar
Website widget
```

## Integration Must Define

```text id="domain-045"
id
organizationId
provider
name
status
scopes
connectedBy
connectedAt
lastVerifiedAt
failureReason
```

## Integration Status

Allowed statuses:

```text id="domain-046"
not_connected
connecting
connected
needs_reauthorization
failed
disconnected
```

Integration secrets must never be exposed to frontend domain objects.

---

# Workflow

A Workflow defines when and how an AI Employee should act.

A Workflow is not the same as an AI Employee.

The employee owns role behavior.

The workflow owns automation logic.

## Workflow Must Define

```text id="domain-047"
id
organizationId
workspaceId optional
name
description
status
currentVersionId
draftVersionId optional
createdBy
updatedBy
createdAt
updatedAt
publishedAt
```

## Workflow Status

Allowed statuses:

```text id="domain-048"
draft
ready
published
paused
failed
archived
```

Definitions:

```text id="domain-049"
draft:
Workflow is being edited and does not run.

ready:
Workflow passes validation and can be published.

published:
Workflow can execute according to triggers.

paused:
Workflow is temporarily disabled.

failed:
Workflow cannot execute due to configuration, integration, or system issue.

archived:
Workflow is no longer active.
```

Published workflows must be versioned.

---

# Workflow Version

A Workflow Version is an immutable snapshot of workflow logic at a point in time.

Publishing creates a new version.

Execution must reference the version that ran.

## Workflow Version Must Define

```text id="domain-050"
id
workflowId
organizationId
versionNumber
status
trigger
conditions
actions
employeeId
reviewPolicy
createdBy
createdAt
publishedBy
publishedAt
```

Workflow runs must reference workflowVersionId, not just workflowId.

This preserves auditability.

---

# Trigger

A Trigger defines what starts a workflow.

Examples:

```text id="domain-051"
message_received
form_submitted
source_synced
schedule_reached
manual_run
integration_event
customer_tag_added
deal_stage_changed
invoice_overdue
```

Triggers must be typed and validated.

No free-form trigger strings in production code.

---

# Condition

A Condition determines whether a workflow should continue.

Examples:

```text id="domain-052"
message contains topic
customer is new
business hours match
employee confidence above threshold
knowledge source available
permission allows action
AI cost budget available
human review required
```

Conditions must be structured.

Do not execute arbitrary user code.

---

# Action

An Action is a workflow step that does something.

Examples:

```text id="domain-053"
draft_reply
send_reply
create_task
assign_review
call_tool
sync_source
notify_member
update_crm
pause_employee
escalate_to_human
```

Actions must define:

```text id="domain-054"
type
input schema
required permissions
risk level
idempotency key strategy
retry policy
review policy
success result
failure behavior
```

High-risk actions must be explicit, permission-checked, auditable, and server-confirmed.

---

# Workflow Run

A Workflow Run is one execution instance of a Workflow Version.

## Workflow Run Must Define

```text id="domain-055"
id
organizationId
workflowId
workflowVersionId
employeeId optional
triggerEventId
status
startedAt
completedAt
failedAt
failureReason
reviewId optional
costSummary
```

## Workflow Run Status

Allowed statuses:

```text id="domain-056"
queued
running
waiting_for_review
completed
failed
canceled
skipped
```

Workflow Run status must be observable.

---

# Task

A Task is a unit of work assigned to an AI Employee or human reviewer.

Tasks may be created manually, by workflow, by integration event, or by AI execution.

## Task Must Define

```text id="domain-057"
id
organizationId
workspaceId optional
employeeId optional
assignedToMemberId optional
workflowRunId optional
title
description
status
priority
dueAt optional
createdBy
createdAt
completedAt
```

## Task Status

Allowed statuses:

```text id="domain-058"
queued
in_progress
needs_review
completed
failed
canceled
```

Tasks are work objects.

Activities are history objects.

Do not confuse them.

---

# Activity

Activity is a chronological product event shown to users.

Activities explain what happened.

Examples:

```text id="domain-059"
Employee deployed
Source synced
Workflow published
Reply drafted
Reply approved
Reply sent
Review requested
Integration disconnected
Billing updated
```

## Activity Must Define

```text id="domain-060"
id
organizationId
workspaceId optional
actorType
actorId
subjectType
subjectId
type
title
description
metadata
createdAt
```

Activity should be user-understandable.

It should not expose raw backend internals.

---

# Audit Log

Audit Log is immutable security and compliance history.

Audit Log is not the same as Activity.

Activity is product-facing timeline.

Audit Log is trust and accountability record.

## Audit Log Must Define

```text id="domain-061"
id
organizationId
actorType
actorId
action
resourceType
resourceId
before optional
after optional
ipAddress optional
userAgent optional
createdAt
```

Audit logs must be append-only.

Do not edit or delete audit logs through normal product flows.

---

# Conversation

A Conversation is an exchange between an AI Employee, human, customer, or channel.

Examples:

```text id="domain-062"
website chat conversation
email thread
Instagram DM thread
support inbox ticket
internal assistant conversation
```

## Conversation Must Define

```text id="domain-063"
id
organizationId
channelId
employeeId optional
customerId optional
status
lastMessageAt
assignedReviewId optional
createdAt
```

## Conversation Status

Allowed statuses:

```text id="domain-064"
open
waiting_for_review
waiting_for_customer
resolved
closed
archived
```

Conversation state must not be inferred only from message count.

---

# Message

A Message is one communication item inside a Conversation.

## Message Must Define

```text id="domain-065"
id
organizationId
conversationId
senderType
senderId optional
content
status
createdAt
sentAt optional
```

## Sender Type

Allowed sender types:

```text id="domain-066"
customer
member
ai_employee
system
integration
```

## Message Status

Allowed statuses:

```text id="domain-067"
draft
pending_review
approved
sent
delivered
failed
blocked
```

AI-generated customer-facing messages must not be marked sent until delivery is confirmed.

---

# Review

A Review is a human decision point for AI output, workflow action, or high-risk operation.

## Review Must Define

```text id="domain-068"
id
organizationId
resourceType
resourceId
requestedByType
requestedById
assignedToMemberId optional
status
riskLevel
reason
requestedAt
reviewedAt optional
decision optional
```

## Review Status

Allowed statuses:

```text id="domain-069"
requested
approved
rejected
changes_requested
expired
canceled
```

Review status must be explicit.

Do not encode review status inside message text.

---

# Tool

A Tool is an approved capability that an AI Employee may request or execute.

Examples:

```text id="domain-070"
search_knowledge
send_message
create_task
update_crm
schedule_meeting
sync_source
create_invoice_reminder
notify_member
```

## Tool Must Define

```text id="domain-071"
id
name
description
inputSchema
outputSchema
riskLevel
requiredPermission
allowedEmployeeRoles
requiresReviewDefault
idempotencySupport
status
```

Tools must be permission-aware and risk-scored.

---

# Tool Call

A Tool Call is a specific attempted use of a Tool.

## Tool Call Must Define

```text id="domain-072"
id
organizationId
aiExecutionId
toolId
status
input
validatedInput
output optional
failureReason optional
riskLevel
reviewId optional
startedAt
completedAt
```

## Tool Call Status

Allowed statuses:

```text id="domain-073"
proposed
approved
running
succeeded
failed
blocked
canceled
```

Tool calls must be auditable.

High-risk tool calls require review or explicit policy allowance.

---

# AI Execution

AI Execution is one model-assisted reasoning or generation operation inside Ariyo.

It may retrieve knowledge, call tools, draft output, score risk, or classify intent.

## AI Execution Must Define

```text id="domain-074"
id
organizationId
employeeId optional
workflowRunId optional
conversationId optional
taskId optional
purpose
status
model
inputSummary
outputSummary
riskLevel
confidence
cost
startedAt
completedAt
failureReason optional
```

## AI Execution Status

Allowed statuses:

```text id="domain-075"
queued
running
needs_review
completed
failed
blocked
canceled
```

AI Execution is backend/internal but should support user-facing activity, cost, audit, and evaluation.

---

# Evaluation

An Evaluation measures quality, safety, correctness, groundedness, usefulness, or policy compliance of AI behavior.

## Evaluation Must Define

```text id="domain-076"
id
organizationId optional
employeeId optional
evaluationSetId
targetType
targetId
status
score
failureCategories
createdAt
```

## Evaluation Status

Allowed statuses:

```text id="domain-077"
pending
running
passed
failed
needs_review
```

Evaluation is not vanity scoring.

Evaluation must connect to safety, release gates, autonomy upgrades, and product quality.

---

# AI Cost

AI Cost is the measured cost of AI usage associated with employees, workflows, conversations, tasks, and organizations.

AI Cost must be understandable and auditable.

## AI Cost Must Define

```text id="domain-078"
id
organizationId
employeeId optional
workflowRunId optional
aiExecutionId optional
period
model
inputUnits
outputUnits
retrievalUnits optional
toolUnits optional
estimatedCost
actualCost optional
currency
createdAt
```

AI Cost should be shown as business context, not fear.

Never fabricate cost data.

---

# Billing Plan

A Billing Plan defines commercial access to Ariyo capabilities.

Plans may include:

```text id="domain-079"
active employee limit
member limit
knowledge source limit
workflow limit
AI usage allowance
integration availability
support level
audit retention
advanced safety features
analytics depth
```

Billing Plan is product/commercial.

Entitlement is enforcement.

Do not confuse them.

---

# Entitlement

An Entitlement is a concrete capability allowed by subscription, plan, add-on, or contract.

Examples:

```text id="domain-080"
maxActiveEmployees
maxKnowledgeSources
canUseAdvancedWorkflows
canUseCustomIntegrations
canUseHumanReviewQueue
canExportAuditLogs
monthlyAiUsageLimit
```

Entitlements must be server-owned.

Frontend may display them but must not enforce them alone.

---

# Subscription

A Subscription is the active commercial relationship between Organization and Ariyo.

## Subscription Status

Allowed statuses:

```text id="domain-081"
trialing
active
past_due
paused
canceled
expired
```

Unknown subscription status must not grant paid capabilities.

---

# Invoice

An Invoice is a billing document.

## Invoice Status

Allowed statuses:

```text id="domain-082"
draft
open
paid
void
failed
refunded
```

Invoice data must be server-confirmed.

Frontend must not create fake invoice states.

---

# Incident

An Incident is an operational or safety event affecting reliability, trust, AI behavior, billing, security, or workflow execution.

## Incident Must Define

```text id="domain-083"
id
organizationId optional
severity
status
category
summary
startedAt
resolvedAt optional
owner
impact
```

## Incident Severity

Allowed severities:

```text id="domain-084"
low
medium
high
critical
```

## Incident Status

Allowed statuses:

```text id="domain-085"
investigating
identified
mitigating
resolved
postmortem_required
```

Incidents that affect AI employees must be connected to kill switches, rollbacks, and auditability.

---

# Domain ID Rules

Use stable, opaque, prefixed IDs.

Recommended examples:

```text id="domain-086"
org_...
wrk_...
mem_...
emp_tpl_...
emp_...
dpl_...
src_...
doc_...
chn_...
int_...
wfl_...
wfl_ver_...
run_...
task_...
act_...
conv_...
msg_...
rev_...
tool_...
tool_call_...
ai_exec_...
eval_...
invoice_...
audit_...
```

Frontend must not rely on database integer IDs.

IDs must not reveal sensitive business information.

---

# Organization Scoping Rule

Every organization-owned entity must include organization scope.

Required for:

```text id="domain-087"
AI Employee
Knowledge Source
Workflow
Conversation
Message
Task
Activity
Tool Call
AI Execution
AI Cost
Audit Log
Integration
Channel
Billing objects where applicable
```

Cross-organization access must be impossible through frontend or backend shortcuts.

Query keys, API routes, database queries, background jobs, and analytics events must preserve organization scope.

---

# Global vs Organization-Owned Entities

Global entities:

```text id="domain-088"
Employee Template
Tool definition
Provider definition
Plan definition
System evaluation templates
Public documentation metadata
```

Organization-owned entities:

```text id="domain-089"
AI Employee
Employee Deployment
Business Context
Knowledge Source
Workflow
Workflow Run
Channel
Integration connection
Conversation
Message
Review
Task
Activity
Audit Log
AI Cost
Subscription
Invoice
```

Do not store organization-specific state on global templates.

---

# DTO vs Domain vs View Model Rule

Ariyo must separate:

```text id="domain-090"
Backend DTO:
raw API or database-facing shape.

Domain Model:
product-safe canonical object.

View Model:
screen-specific rendering shape.
```

Example:

```text id="domain-091"
Backend DTO may say:
agent_runtime_status = "live"

Domain Model must say:
employee.status = "active"

UI may show:
Active
```

Backend terms must be mapped before UI rendering.

---

# Frontend-Safe Response Rule

Frontend responses must not include secrets or unnecessary sensitive internals.

Do not send:

```text id="domain-092"
provider access tokens
refresh tokens
full integration secrets
raw prompt templates with secrets
full internal traces
private model configuration if not needed
raw embeddings
raw vector IDs
raw task queue IDs
billing provider secrets
```

Send only what the frontend needs to render product experience.

---

# State Ownership Rule

Server owns high-trust domain states.

Server-owned states include:

```text id="domain-093"
employee status
deployment status
knowledge source status
workflow status
workflow run status
message sent status
review status
tool call status
billing status
permission state
integration status
subscription state
AI cost records
```

Frontend may display these states.

Frontend must not invent them.

---

# Domain State Transition Rule

State transitions must be explicit and validated.

Example Employee Status transitions:

```text id="domain-094"
hired → setup_required
hired → ready_to_deploy
setup_required → ready_to_deploy
ready_to_deploy → deploying
deploying → active
deploying → failed
active → paused
paused → active
active → failed
failed → setup_required
failed → ready_to_deploy
active → archived
paused → archived
```

Forbidden:

```text id="domain-095"
setup_required → active without deployment
failed → active without recovery/deployment confirmation
archived → active without restore flow
unknown → active
```

---

# Knowledge Source Transition Rule

Allowed common transitions:

```text id="domain-096"
not_connected → connected
connected → syncing
syncing → ready
syncing → failed
ready → syncing
ready → outdated
outdated → syncing
failed → syncing
ready → needs_review
needs_review → ready
connected → disconnected
ready → disconnected
```

Forbidden:

```text id="domain-097"
not_connected → ready
failed → ready without successful sync
outdated → ready without refresh or explicit acceptance
unknown → ready
```

---

# Workflow Transition Rule

Allowed common transitions:

```text id="domain-098"
draft → ready
ready → published
published → paused
paused → published
published → failed
failed → draft
failed → ready
published → archived
paused → archived
```

Publishing must create an immutable Workflow Version.

---

# Review Transition Rule

Allowed common transitions:

```text id="domain-099"
requested → approved
requested → rejected
requested → changes_requested
requested → expired
requested → canceled
changes_requested → requested
```

Forbidden:

```text id="domain-100"
approved → requested without new review
rejected → approved without new review
expired → approved
```

---

# Safe Unknown State Rule

Unknown states must fail safe.

Never default unknown to:

```text id="domain-101"
active
ready
published
paid
allowed
approved
sent
completed
```

Safe fallbacks:

```text id="domain-102"
needs_review
unavailable
failed
blocked
not_ready
unknown with retry
```

Unknown state should create observability signal.

---

# Domain Invariants

These invariants must hold:

```text id="domain-103"
An AI Employee cannot be active without an active deployment.

A Knowledge Source cannot be ready without successful sync.

A Workflow cannot execute without a published version.

A Workflow Run must reference the exact Workflow Version used.

A Tool Call must belong to an AI Execution.

A Review must reference a reviewable resource.

A Message cannot be sent before approval when review is required.

Billing capabilities must come from server-owned entitlements.

AI Cost must be tied to measured execution, not fabricated.

Audit Logs must be append-only.

Organization-owned data must never cross organization boundaries.
```

Breaking invariants is a product safety issue.

---

# Permission Invariants

Permission-sensitive actions require backend validation.

Examples:

```text id="domain-104"
Hiring employee requires canHireEmployee.

Deploying employee requires canDeployEmployee.

Publishing workflow requires canPublishWorkflow.

Connecting knowledge source requires canManageKnowledgeSources.

Approving AI output requires canReviewAiOutput.

Changing billing requires canManageBilling.

Inviting members requires canInviteMembers.
```

Frontend must show permission state clearly.

Backend must enforce permission.

---

# Billing Invariants

Billing state must be server-confirmed.

```text id="domain-105"
Plan change is not active until confirmed by billing system/backend.

Subscription past_due may restrict capabilities according to entitlement policy.

AI usage limits must be enforced server-side.

Invoices must not be fabricated by frontend.

Payment status must not be inferred from button click.
```

Billing is high-trust.

Never use optimistic billing success.

---

# AI Employee Marketplace Relationship

Marketplace displays Employee Templates.

Hiring creates an AI Employee instance.

Do not treat a template as an employee.

```text id="domain-106"
Employee Template:
Customer Support Employee blueprint.

AI Employee:
The organization's hired Customer Support Employee.

Deployment:
That employee running in website chat with selected knowledge sources and review policy.
```

This distinction must be preserved in code, API, analytics, and copy.

---

# Business Context vs Knowledge Source Rule

Business Context and Knowledge Source must not be confused.

```text id="domain-107"
Business Context:
structured organization-level operating assumptions.

Knowledge Source:
connected content used for grounding.
```

Example:

```text id="domain-108"
Business Context says:
We sell premium denim products and use a calm professional support tone.

Knowledge Source says:
Return policy PDF states customers may return unused items within 7 days.
```

AI Employees may need both.

---

# Activity vs Audit Log Rule

Do not confuse Activity and Audit Log.

```text id="domain-109"
Activity:
user-facing operational timeline.

Audit Log:
immutable accountability and security record.
```

Example:

```text id="domain-110"
Activity:
Customer Support Employee replied to a customer.

Audit Log:
AI Employee emp_123 executed send_message tool call tool_call_456 approved by member mem_789.
```

Both may be created for the same event.

---

# Task vs Workflow Run Rule

Do not confuse Task and Workflow Run.

```text id="domain-111"
Task:
a work item assigned to AI or human.

Workflow Run:
an execution instance of automation logic.
```

A Workflow Run may create a Task.

A Task may be completed by an AI Employee.

But they are not the same entity.

---

# Conversation vs Activity Rule

Conversation contains messages.

Activity summarizes events.

Do not use Activity as a message store.

Do not use Conversation as a general event log.

---

# Review vs Approval Rule

Review is the process/entity.

Approval is one possible decision.

Do not name review queues `ApprovalQueue` if they may include rejection or changes requested.

Use:

```text id="domain-112"
Review
Review Queue
Review Decision
Review Status
```

---

# Domain Event Taxonomy

Domain events are structured facts that something happened.

Recommended examples:

```text id="domain-113"
organization.created
member.invited
member.joined
employee.hired
employee.setup_completed
employee.deployment_requested
employee.deployment_succeeded
employee.deployment_failed
employee.paused
knowledge_source.connected
knowledge_source.sync_started
knowledge_source.sync_succeeded
knowledge_source.sync_failed
workflow.created
workflow.published
workflow.run_started
workflow.run_completed
workflow.run_failed
review.requested
review.approved
review.rejected
tool_call.blocked
tool_call.succeeded
message.drafted
message.sent
billing.plan_changed
billing.payment_failed
incident.created
```

Events should be stable, typed, and analytics-safe.

---

# Analytics Event Relationship

Analytics events must derive from domain meaning.

Do not track vague UI-only events as primary metrics.

Bad:

```text id="domain-114"
button_clicked
modal_opened
data_loaded
card_seen
```

Good:

```text id="domain-115"
employee_hired
employee_deployment_started
employee_deployment_failed
knowledge_source_connected
first_employee_activated
workflow_published
review_approved
ai_employee_task_completed
```

Analytics must measure product value and trusted outcomes.

---

# Domain Data Classification

Every domain field should be considered under data classification.

Recommended classes:

```text id="domain-116"
public_platform:
public template metadata and marketing-safe content.

organization_private:
organization-owned operational data.

sensitive:
billing, customer, member, support, workflow, and knowledge details.

secret:
tokens, credentials, API keys, provider secrets.

restricted_internal:
internal traces, raw prompts, debug output, provider internals.
```

Frontend-safe models must not include secret data.

---

# Sensitive Domain Fields

Treat these as sensitive:

```text id="domain-117"
customer message content
knowledge source content
member emails when not needed
billing details
permission assignments
workflow action payloads
AI prompt inputs
AI generated private drafts
tool call inputs and outputs
integration metadata
source URLs when private
```

Do not persist or log sensitive data casually.

---

# Product Copy Mapping Rule

Domain statuses must map to product-friendly copy.

Example:

```text id="domain-118"
setup_required → Setup required
ready_to_deploy → Ready to deploy
deploying → Deploying employee
active → Active
paused → Paused
failed → Needs attention
```

Do not show raw enum strings to users.

Do not expose backend statuses directly.

---

# Persian Product Term Mapping

Persian UI should use official product terms:

```text id="domain-119"
Organization → سازمان
Workspace → فضای کاری
Member → عضو
Role → نقش
Permission → دسترسی
AI Employee → کارمند هوش مصنوعی
Employee → کارمند
Employee Deployment → راه‌اندازی کارمند
Knowledge Source → منبع دانش
Business Context → زمینه کسب‌وکار
Channel → کانال
Integration → یکپارچه‌سازی
Workflow → جریان کاری
Task → کار
Activity → فعالیت
Review → بازبینی
AI Cost → هزینه هوش مصنوعی
Billing → صورتحساب
```

Avoid transliterated technical terms unless product strategy approves them.

---

# API Domain Naming Rule

API resources should use canonical domain names.

Preferred resource names:

```text id="domain-120"
organizations
workspaces
members
roles
permissions
employee-templates
employees
employee-deployments
business-context
knowledge-sources
channels
integrations
workflows
workflow-versions
workflow-runs
tasks
activities
conversations
messages
reviews
tools
tool-calls
ai-executions
evaluations
ai-costs
billing-plans
entitlements
invoices
audit-logs
incidents
```

Do not create API resources named `agents`, `bots`, `plugins`, or `llm-runs` for user-facing contracts.

---

# Frontend Route Naming Rule

Routes should use product language.

Preferred:

```text id="domain-121"
/employees
/employees/:employeeId
/marketplace
/knowledge-sources
/workflows
/activity
/reviews
/billing
/settings/members
/settings/permissions
```

Avoid:

```text id="domain-122"
/agents
/bots
/plugins
/vector-index
/llm-runs
/celery-tasks
```

Developer/admin-only diagnostics may have separate protected routes.

---

# Database Modeling Guidance

Backend database models may use technical tables, but domain boundaries must remain clear.

Recommended model groups:

```text id="domain-123"
identity and organization
employee and deployment
knowledge and retrieval
workflow and execution
conversation and messaging
review and governance
tools and AI execution
billing and entitlements
analytics and cost
audit and operations
```

Avoid giant generic tables that hide domain meaning.

Forbidden by default:

```text id="domain-124"
GenericObject
Entity
Item
DataBlob
AgentThing
PluginConfig
JsonEverything
```

JSON fields may be used for flexible metadata, but core domain state must be typed and queryable.

---

# Domain Validation Rule

Domain objects must be validated at boundaries.

Validation layers:

```text id="domain-125"
API request validation
API response serialization
backend model constraints
service-level invariants
frontend Zod parsing when necessary
workflow action schema validation
tool input/output schema validation
storage and URL parsing
```

Do not trust raw data because it came from an internal service.

---

# Domain Service Rule

Complex domain behavior belongs in backend domain services, not controllers/views/components.

Examples:

```text id="domain-126"
hireEmployee
completeEmployeeSetup
requestEmployeeDeployment
activateDeployment
connectKnowledgeSource
syncKnowledgeSource
publishWorkflow
requestReview
approveReview
executeToolCall
calculateAiCost
applyEntitlementChange
```

Domain services should enforce invariants.

---

# Employee Lifecycle Rule

Employee lifecycle must be clear and measurable.

Recommended lifecycle:

```text id="domain-127"
discovered in marketplace
hired by organization
setup started
required setup completed
ready to deploy
deployment requested
deployed and active
monitored through activity and metrics
paused or adjusted
archived when no longer needed
```

Analytics and onboarding should align with this lifecycle.

---

# Knowledge Lifecycle Rule

Knowledge lifecycle must be clear.

Recommended lifecycle:

```text id="domain-128"
source selected
connection authorized
sync started
content processed
source ready
employee granted access
source used in answer/action
source refreshed or marked outdated
source reviewed or disconnected
```

Do not use knowledge before ready unless product explicitly allows limited behavior.

---

# Workflow Lifecycle Rule

Workflow lifecycle must be clear.

Recommended lifecycle:

```text id="domain-129"
draft created
trigger configured
conditions configured
actions configured
validation passed
published as version
runs executed
runs monitored
failures reviewed
workflow paused or updated
new version published
archived when no longer used
```

Draft and published versions must be separate.

---

# Review Lifecycle Rule

Review lifecycle must support accountability.

Recommended lifecycle:

```text id="domain-130"
review requested
review assigned
review opened
approved, rejected, or changes requested
action executed if approved
activity and audit log recorded
```

Review decisions should be immutable after final action unless a new review is created.

---

# Billing Lifecycle Rule

Billing lifecycle must be server-confirmed.

Recommended lifecycle:

```text id="domain-131"
trial started
plan selected
subscription active
usage measured
invoice generated
payment succeeded or failed
entitlements updated
billing issue resolved or subscription restricted
```

Frontend must not fake subscription or entitlement transitions.

---

# Activity Feed Rule

Activity feed must be derived from meaningful domain events.

Activity should answer:

```text id="domain-132"
What happened?
Who or what did it?
Which employee/source/workflow was involved?
Was it successful?
Does the user need to act?
When did it happen?
```

Activity feed should not show raw system logs.

---

# Audit Trail Rule

Audit trail must answer:

```text id="domain-133"
Who did what?
To which resource?
When?
From where?
What changed?
Was AI involved?
Was a human review involved?
```

Audit trail must preserve trust and accountability.

---

# Domain Metrics Rule

Metrics must be connected to domain outcomes.

Examples:

```text id="domain-134"
Employee activation rate
First employee deployed
Knowledge source ready rate
Workflow publish rate
Review approval rate
AI task completion rate
Automation success rate
Escalation rate
AI cost per completed task
Failed sync rate
Deployment failure rate
```

Avoid vanity metrics disconnected from domain value.

---

# Domain Error Rule

Errors should map to domain meaning.

Examples:

```text id="domain-135"
Employee setup incomplete
Knowledge source not ready
Permission required
Workflow validation failed
Review required
Integration disconnected
Billing limit reached
Deployment failed
Source sync failed
AI output blocked
```

Do not expose raw backend error categories to users.

---

# Domain Permission Error Rule

Permission errors must say what capability is missing.

Good:

```text id="domain-136"
Only admins can deploy employees.

You need billing access to change this plan.

You do not have permission to publish workflows.
```

Bad:

```text id="domain-137"
403
Unauthorized
Forbidden
Permission denied
```

---

# Domain Not Found Rule

Not found may mean removed or inaccessible.

Safe copy:

```text id="domain-138"
This employee may have been removed or you may not have access.
```

Do not reveal existence of private resources if backend intentionally hides them.

---

# Domain Boundaries for AI

AI should operate only through domain-approved objects.

AI must not directly mutate arbitrary records.

AI actions should go through:

```text id="domain-139"
Tool
Tool Call
Workflow Action
Review
Audit Log
Domain Service
```

AI must not bypass domain invariants.

---

# Prompt Context Domain Rule

Prompt context should use canonical domain concepts.

Good:

```text id="domain-140"
You are the Customer Support Employee for this organization.
You may answer using approved Business Context and ready Knowledge Sources.
If confidence is low, request review.
```

Bad:

```text id="domain-141"
You are an agent with tools and vector search.
```

AI instructions should reinforce product model.

---

# Tool Permission Domain Rule

Tools must declare domain constraints.

Each Tool must define:

```text id="domain-142"
who may use it
which employee roles may use it
which autonomy levels allow it
which review policy applies
which organization scope applies
which risk level applies
which audit logs are created
```

No unscoped tool calls.

---

# Memory Domain Rule

If Ariyo supports memory, memory must have domain ownership.

Memory must define:

```text id="domain-143"
owner
scope
source
retention policy
visibility
editable/deletable status
sensitivity
usage policy
```

Do not create hidden global AI memory without user control.

---

# Domain-Driven Folder Guidance

Frontend and backend folders should follow domain boundaries.

Recommended feature domains:

```text id="domain-144"
organizations
members
employees
marketplace
knowledge-sources
business-context
integrations
channels
workflows
reviews
activity
conversations
billing
analytics
audit
settings
```

Avoid feature folders named after implementation details:

```text id="domain-145"
agents
bots
prompts
vectors
llm
celery
plugins
```

---

# Domain API Boundary Guidance

API boundaries should map backend internals to product domain.

Example:

```text id="domain-146"
Backend internal:
AgentRuntime.status = RUNNING

API/domain response:
employee.status = active

UI copy:
Active
```

Do not let internal runtime state leak into product objects unless needed for admin diagnostics.

---

# Domain Testing Requirements

Domain logic must be tested when it defines:

```text id="domain-147"
state transitions
permission checks
DTO mapping
status mapping
workflow validation
knowledge readiness
employee deployment readiness
billing entitlements
review decisions
tool call risk policy
AI cost calculation
```

Test domain invariants.

Do not test only UI rendering.

---

# Domain Review Checklist

Before adding or changing a domain concept, verify:

```text id="domain-148"
Is the entity clearly named?

Is ownership clear?

Is organization scope clear?

Are lifecycle states explicit?

Are state transitions safe?

Are permissions defined?

Are high-risk actions guarded?

Is frontend-safe representation defined?

Are backend internals shielded?

Is analytics meaning clear?

Is billing meaning clear if relevant?

Is auditability clear?

Is sensitive data classified?

Are unknown states safe?

Are copy mappings product-friendly?

Are Persian terms considered?

Are tests required?
```

If any answer is no, the model is incomplete.

---

# Domain Decision Tree

Ask:

### Is this a new thing users understand?

Create or extend a domain entity.

### Is this just a screen-specific shape?

Create a view model, not a new domain object.

### Is this backend-only implementation detail?

Keep it internal and map it before frontend.

### Does this entity belong to an organization?

Scope it by organization.

### Does this entity change state?

Define lifecycle statuses and transitions.

### Does this action affect business behavior?

Define permission, risk, audit, and review requirements.

### Does this state imply success?

Require server confirmation.

### Does this involve AI behavior?

Connect it to AI Employee, Tool Call, Review, Evaluation, and AI Cost where applicable.

### Does this appear in analytics?

Use domain event naming.

### Is this unknown or ambiguous?

Fail safe and require review.

---

# Forbidden Domain Patterns

Never introduce:

```text id="domain-149"
Agent as user-facing replacement for Employee

Bot as product entity

Plugin as employee/integration replacement

Generic Entity model for core product objects

Status as free-form string

Unknown status mapped to active/ready/success

Template treated as hired employee

Deployment treated as employee itself

Knowledge Source treated as Business Context

Activity treated as Audit Log

Task treated as Workflow Run

Review treated as Approval only

Channel treated as Integration

Billing Plan treated as Entitlement

Frontend-created server-owned lifecycle states

Organization data without organization scope

Cross-organization query keys

Secret data in frontend-safe models

Raw backend DTOs rendered in UI

Embeddings/vector/chunk terminology in normal UI

Workflow publish without versioning

Tool call without auditability

AI action without risk level

Customer-facing message sent without confirmed state

Billing success before server confirmation

Knowledge source ready before server confirmation

Employee active before deployment confirmation
```

---

# Ariyo Domain Model Golden Rule

Every important Ariyo concept must have one name, one owner, one lifecycle, one source of truth, and one safe product meaning.

---

# Senior Domain Architecture Rule

Do not model Ariyo around implementation convenience.

Model Ariyo around business trust, product clarity, operational safety, and long-term extensibility.

---

# Final Rule

Ariyo's domain model is production-ready only when every core entity, relationship, lifecycle state, permission boundary, organization scope, AI behavior, billing meaning, analytics meaning, and user-facing term is explicit, consistent, safe by default, and shared across frontend, backend, AI, operations, and product strategy.
