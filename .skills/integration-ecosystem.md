# Ariyo Integration Ecosystem Skill

Version: 1.0.0  
Product: Ariyo  
Purpose: Act as an Integration Architect, API Platform Designer, Security Reviewer, AI Tooling Architect, Workflow Reliability Engineer, and Product Experience Guardian for Ariyo integrations.  
Audience: Codex Agents and AI-assisted development tools.  
Priority: Non-negotiable.

---

# Core Contract

Ariyo integrations are not plugin decorations.

Ariyo integrations are controlled business capability bridges that allow AI employees to read trusted context, receive events, act inside approved channels, update business systems, and produce measurable outcomes without violating permissions, privacy, cost controls, or organization boundaries.

Every Ariyo integration must be organization-scoped, permission-aware, lifecycle-managed, failure-tolerant, observable, auditable, revocable, rate-limit-safe, and AI-safe.

If an integration cannot be safely scoped, monitored, disconnected, retried, and explained to users, it is not production-ready.

---

# Dependencies

This skill depends on and must remain consistent with:

```text
product-strategy.md
ai-employee-architecture.md
domain-model.md
api-contracts.md
backend-architecture.md
knowledge-rag.md
workflow-automation.md
ai-safety-evaluation.md
human-review-governance.md
prompt-tool-orchestration.md
frontend-state-data.md
frontend-forms-validation.md
frontend-testing.md
frontend-performance.md
deployment-ops.md
monetization-billing.md
```

When conflicts exist:

```text
product-strategy.md wins for product positioning.
domain-model.md wins for entity names and lifecycle definitions.
api-contracts.md wins for public API shape and error contracts.
backend-architecture.md wins for service boundaries and persistence.
knowledge-rag.md wins for knowledge ingestion and retrieval.
workflow-automation.md wins for workflow triggers and actions.
ai-safety-evaluation.md wins for AI safety gates.
human-review-governance.md wins for review and approval policy.
prompt-tool-orchestration.md wins for tool calling and model execution.
deployment-ops.md wins for runtime operations and incidents.
monetization-billing.md wins for entitlements and plan limits.
integration-ecosystem.md wins for integration lifecycle, scopes, sync, webhooks, connection safety, and integration capability boundaries.
```

---

# Purpose

This document defines how Ariyo must design, implement, expose, operate, and govern integrations.

Ariyo integrations may connect to:

```text
communication channels
knowledge repositories
CRM systems
helpdesk systems
email platforms
chat platforms
calendar systems
file storage providers
internal business APIs
analytics systems
billing systems
webhooks
custom tools
third-party SaaS products
```

Integrations are part of the trusted execution surface of Ariyo AI employees.

They must never be treated as simple external links.

---

# Integration Philosophy

Ariyo integrations should make AI employees useful inside real business operations.

Integrations exist to provide:

```text
trusted context
action capability
communication channels
business events
workflow triggers
reviewable outputs
measurable outcomes
operational visibility
```

They must not create uncontrolled automation.

They must not expose secrets.

They must not bypass human review.

They must not give AI employees broad access by default.

---

# Integration Is a Capability Boundary

Every integration defines what Ariyo can access or do.

An integration must answer:

```text
What external system is connected?
Which organization owns the connection?
Who connected it?
What scopes were granted?
What data can be read?
What actions can be performed?
Which AI employees may use it?
Which workflows may use it?
Which channels does it affect?
What is the current connection state?
When was it last verified?
When was it last synced?
What failures occurred?
How can it be disconnected?
What data remains after disconnect?
```

If these answers are not explicit, the integration is incomplete.

---

# Integration Categories

Ariyo integrations must be categorized by product capability.

Approved categories:

```text
Communication Channel
Knowledge Source
CRM and Sales
Support and Helpdesk
Collaboration
Calendar and Scheduling
File and Document Storage
Internal Business System
Webhook and Event Source
Action Tool
Analytics and Reporting
Billing and Payment
Developer API
Custom Integration
```

Do not use vague categories such as:

```text
App
Plugin
Bot connector
AI tool
Misc
Other
```

unless no product-specific category is possible.

---

# Integration Type Definitions

## Communication Channel

A system where AI employees can receive or send messages.

Examples:

```text
website chat
email inbox
WhatsApp
Telegram
Slack
Microsoft Teams
Instagram DM
helpdesk conversations
```

Communication channels are high-trust because they may affect real customers.

They require:

```text
clear send permission
review mode policy
message audit trail
human handoff
rate limits
outbound safety checks
identity clarity
channel-specific tone rules
```

---

## Knowledge Source

A system or file that provides business context to AI employees.

Examples:

```text
Google Drive
Notion
Confluence
company website
PDF files
DOCX files
TXT files
FAQs
internal knowledge base
policy documents
product catalog
```

Knowledge source integrations must follow `knowledge-rag.md`.

They require:

```text
sync lifecycle
freshness status
permission filtering
chunking policy
retrieval visibility
source attribution
prompt-injection defense
outdated content handling
```

---

## Action Tool

A system where Ariyo can perform actions.

Examples:

```text
create CRM lead
update ticket
send reply
schedule meeting
create task
assign conversation
update order status
trigger internal webhook
```

Action tools require:

```text
tool schema
permission check
risk classification
preconditions
idempotency strategy
human review when needed
audit log
failure safe state
```

AI employees must never call action tools without orchestration safeguards.

---

## Event Source

A system that sends events into Ariyo.

Examples:

```text
new message received
new lead created
ticket updated
invoice paid
file updated
calendar event created
workflow webhook received
```

Event sources require:

```text
signature verification
idempotency key
event type validation
organization mapping
ordering assumptions
retry behavior
dead-letter queue
observability
```

---

# Core Integration Entities

Ariyo integration architecture should distinguish these entities:

```text
Integration Provider
Integration Connection
Integration Account
Integration Scope
Integration Capability
Integration Tool
Integration Event
Integration Sync Job
Integration Webhook Endpoint
Integration Health State
Integration Audit Event
```

Do not collapse these into one generic `Integration` object.

---

# Integration Provider

An Integration Provider is the external product or system Ariyo supports.

Examples:

```text
Google Drive
Notion
Slack
HubSpot
Zendesk
Gmail
Stripe
Custom Webhook
```

Provider data should include:

```text
provider id
provider name
category
logo/icon metadata
connection method
supported scopes
supported capabilities
supported events
rate limit policy
security requirements
setup instructions
known limitations
```

Provider definitions are product/platform configuration.

They are not organization-specific.

---

# Integration Connection

An Integration Connection is an organization-owned connection to a provider.

A connection belongs to one organization.

It may be connected by one member but used by approved employees or workflows.

Connection data should include:

```text
connection id
organization id
provider id
connected by member id
connection status
granted scopes
capabilities
external account identifier
last verified at
last synced at
needs reauthorization reason
health state
created at
updated at
disconnected at
```

Secrets must not be exposed in API responses.

---

# Integration Capability

A capability is a safe product-level description of what the connection can do.

Examples:

```text
read_files
sync_documents
receive_messages
send_messages
create_ticket
update_ticket
create_lead
schedule_meeting
trigger_webhook
read_calendar
write_calendar
```

Capabilities must be mapped to product language in UI.

Bad UI copy:

```text
Scope: crm.objects.contacts.write
```

Good UI copy:

```text
Can create and update CRM contacts.
```

---

# Integration Tool

An Integration Tool is a callable action exposed to Ariyo orchestration.

Every tool must define:

```text
tool id
provider
capability
input schema
output schema
risk level
required scopes
required permissions
idempotency behavior
rate limit behavior
human review requirement
safe failure state
audit event shape
```

Tools are not raw API endpoints.

Tools are safe product actions.

---

# Integration Lifecycle

Every integration connection must follow a clear lifecycle.

Approved lifecycle states:

```text
available
not_connected
connecting
connected
active
syncing
needs_setup
needs_reauthorization
degraded
paused
failed
disconnecting
disconnected
archived
```

Do not invent one-off statuses in UI or backend.

---

# Lifecycle State Meanings

## available

The provider is available in Ariyo but not connected by this organization.

## not_connected

The organization has not connected this provider.

## connecting

A connection process has started but is not complete.

## connected

A connection exists and credentials are valid, but specific capabilities may not yet be active.

## active

The connection is usable by approved employees or workflows.

## syncing

A sync process is currently running.

## needs_setup

Connection exists but required configuration is missing.

## needs_reauthorization

Credentials, scopes, or account authorization must be renewed.

## degraded

Connection is partially working but one or more capabilities are failing.

## paused

Connection is intentionally paused by user, admin, system, billing, or safety policy.

## failed

Connection is not usable due to a recoverable or unrecoverable failure.

## disconnecting

Disconnect process is running.

## disconnected

Connection is no longer usable.

## archived

Historical connection record is preserved for audit but not active.

---

# Status Safety Rule

Unknown integration states must not default to active.

Bad:

```text
unknown → active
```

Good:

```text
unknown → needs_review
unknown → unavailable
unknown → refresh connection
```

When uncertain, Ariyo must choose a safe state.

---

# Connection Flow Rule

Connection flow must be explicit and safe.

Required steps:

```text
show provider value
show requested access
show security note when relevant
start authorization
complete authorization server-side
verify scopes
create connection
run initial health check
run initial sync when needed
show connected state
show next setup action
```

Do not show connected state before backend confirms the connection.

---

# OAuth Connection Rule

OAuth flows must be backend-controlled.

Frontend must not:

```text
store OAuth codes
log callback URLs
show raw OAuth errors
store access tokens
store refresh tokens
parse provider secrets
send OAuth tokens to analytics
```

Backend must:

```text
verify state parameter
exchange code securely
store secrets encrypted
verify scopes
map connection to organization
handle callback errors safely
emit audit events
```

---

# API Key Connection Rule

API key integrations are high-risk.

If API keys are supported:

```text
collect key through secure form
send only to backend over HTTPS
never store key in frontend state beyond form submit
never persist key in localStorage/sessionStorage
mask key after save
support rotation
support revocation
validate key server-side
show safe error copy
```

Frontend must never display full secret after save.

---

# Webhook Connection Rule

Webhook integrations must define:

```text
endpoint URL
secret/signature strategy
event types
payload schema
retry policy
idempotency policy
security requirements
sample payload
last received event
health status
```

Webhook secrets must be treated as secrets.

Do not display webhook signing secrets casually.

---

# Scope Principle

Use least privilege.

Only request scopes needed for the selected capability.

Bad:

```text
Request full admin access because it is easier.
```

Good:

```text
Request read-only document access for knowledge sync.
Request send-message permission only when outbound replies are enabled.
```

Scopes must match product value.

---

# Scope Transparency Rule

Users must understand what Ariyo can access.

Good copy:

```text
Ariyo can read selected folders to keep employee knowledge up to date.
```

```text
Ariyo can send replies only from channels you deploy an employee to.
```

Bad copy:

```text
Grant required scopes.
```

```text
Allow integration access.
```

---

# Scope Expansion Rule

If Ariyo needs more access later, request additional scopes explicitly.

Do not silently expand access.

Scope expansion must explain:

```text
why access is needed
what changes
which employee/workflow needs it
what user can do after granting it
how to revoke it
```

---

# Connection Ownership Rule

Every connection must be organization-scoped.

A connection may also track:

```text
connected by member
external account owner
connection admin
last updated by member
```

But the connection must belong to the organization, not an individual user only, unless product design explicitly supports personal connections.

---

# Personal vs Organization Connection Rule

Ariyo must distinguish personal and organization connections.

Personal connection examples:

```text
personal calendar
personal inbox
personal Slack account
```

Organization connection examples:

```text
company helpdesk
company Google Drive
company CRM
company website chat
company billing provider
```

Personal connections require stricter privacy boundaries.

Do not expose personal data as organization-wide context by default.

---

# Organization Boundary Rule

Integration data must never leak across organizations.

All integration records, sync jobs, webhook events, tool calls, and logs must be scoped by organization.

Required scoping:

```text
connection.organization_id
sync_job.organization_id
webhook_event.organization_id
tool_call.organization_id
audit_event.organization_id
knowledge_source.organization_id
workflow_execution.organization_id
```

Cross-organization leakage is a critical incident.

---

# Employee Access Rule

AI employees do not automatically get access to every integration.

Access must be granted by:

```text
employee role
employee deployment
channel assignment
workflow configuration
knowledge source configuration
permission policy
integration capability policy
human review policy
```

Bad:

```text
All employees can use all connected integrations.
```

Good:

```text
Customer Support Employee can read support knowledge sources and reply only in the connected support channel after review policy is satisfied.
```

---

# Tool Access Rule

Every tool exposed to an AI employee must be explicitly allowed.

Tool access must include:

```text
tool id
employee id
connection id
capability
allowed action scope
risk level
review requirement
rate limit
validity window when needed
```

A model should never decide it has a tool merely because the tool exists.

---

# Channel Assignment Rule

Deploying an employee to a channel must require explicit channel assignment.

Required:

```text
selected channel
reply mode
review mode
tone/channel rules
fallback owner
human handoff path
send permission
rate limits
activity logging
```

Connected channel is not the same as deployed employee.

---

# Knowledge Source Assignment Rule

Connected knowledge source is not automatically usable by all AI employees.

Knowledge access should be assigned by:

```text
employee role
business function
department
permission policy
source owner
workflow need
risk level
```

Permission filtering must be enforced during retrieval.

---

# Integration Sync Architecture

Syncable integrations must support a clear sync model.

Sync types:

```text
initial sync
incremental sync
manual sync
scheduled sync
webhook-triggered sync
backfill sync
repair sync
permission resync
metadata-only sync
content sync
```

Each sync job must be observable.

---

# Sync Job Contract

Every sync job should include:

```text
sync job id
organization id
connection id
source id when applicable
sync type
status
started at
finished at
cursor/version
items discovered
items synced
items skipped
items failed
error code
safe error message
retry count
next retry at
triggered by
```

Sync jobs are operational entities.

They should not be hidden inside generic background tasks.

---

# Sync Statuses

Approved sync statuses:

```text
queued
running
succeeded
partial_success
failed
cancelled
paused
needs_reauthorization
rate_limited
```

Do not show backend terms such as:

```text
Celery running
worker failed
embedding job crashed
vector update pending
```

User-facing copy must use product language.

---

# Sync Freshness Rule

Users must understand freshness when it affects trust.

Good:

```text
Source ready. Last synced 12 minutes ago.
```

```text
Source may be outdated. Last synced 14 days ago.
```

```text
Sync failed. The previous version is still available.
```

Do not show stale data as fresh.

---

# Rate Limit Rule

Integrations must respect provider rate limits.

Backend must support:

```text
rate limit detection
backoff
retry-after handling
queue throttling
per-provider limits
per-organization limits
per-connection limits
safe user messaging
```

Frontend must not repeatedly trigger actions that violate rate limits.

---

# Retry Rule

Retries must be safe.

Safe retry candidates:

```text
read sync
metadata fetch
status check
idempotent webhook processing
retryable network failure
```

Dangerous retry candidates:

```text
send message
create lead
charge billing
delete record
publish workflow
invite member
```

Dangerous retries require idempotency keys and careful policy.

---

# Idempotency Rule

All integration actions that create or modify external state should use idempotency when possible.

Required for:

```text
send message
create ticket
create lead
schedule meeting
trigger external webhook
publish workflow action
billing-related integration action
```

If idempotency is not supported by provider, Ariyo must implement deduplication safeguards.

---

# Webhook Event Processing Rule

Webhook processing must be safe and observable.

Required:

```text
signature verification
event schema validation
organization resolution
connection resolution
idempotency key
processed status
retry count
error handling
dead-letter queue
audit logging
```

Never trust webhook payloads without verification.

---

# Webhook Ordering Rule

Webhook ordering is not guaranteed unless provider explicitly guarantees it.

Ariyo must handle:

```text
duplicate events
out-of-order events
missing events
delayed events
replayed events
partial payloads
```

State transitions must be robust.

---

# Dead-Letter Queue Rule

Failed webhook events and sync jobs must be diagnosable.

DLQ entries should include:

```text
event/job id
provider
connection id
organization id
failure reason
payload reference, not raw sensitive payload when avoidable
retry count
first failed at
last failed at
manual replay eligibility
```

Sensitive payloads must be protected.

---

# Integration Health Rule

Every active connection must have health state.

Health dimensions:

```text
auth health
scope health
sync health
webhook health
action health
rate limit health
latency health
error rate
last successful operation
```

Health is not just connected/disconnected.

---

# Health States

Approved health states:

```text
healthy
degraded
needs_attention
needs_reauthorization
failing
paused
unknown
```

Unknown must not be treated as healthy.

---

# User-Facing Failure Copy Rule

Integration failures must explain safe state and recovery.

Good:

```text
Could not sync Google Drive. The previous source version is still available.
```

```text
Slack needs reauthorization before this employee can reply there.
```

```text
Could not send the message. No message was sent.
```

Bad:

```text
OAuth error.
```

```text
Webhook failed.
```

```text
500 provider error.
```

---

# Disconnect Rule

Disconnecting an integration is high-trust.

Disconnect flow must explain:

```text
what will stop working
which employees are affected
which workflows are affected
which knowledge sources are affected
whether data remains
whether history remains
whether reconnect is possible
```

Good:

```text
Disconnect Slack

Customer Support Employee will stop receiving and sending Slack messages. Existing activity history will remain available.
```

---

# Disconnect Safety Rule

Disconnect must handle dependent entities safely.

Potential dependent entities:

```text
employee deployments
workflow triggers
workflow actions
knowledge sources
channels
scheduled sync jobs
webhook subscriptions
tool permissions
review queue items
```

Do not leave orphaned active workflows after disconnect.

---

# Reauthorization Rule

Reauthorization must preserve user trust.

When reauthorization is needed, show:

```text
provider name
reason
what is affected
last successful operation
reauthorize action
safe state
```

Good:

```text
Google Drive needs reauthorization. Employees can still use the last synced version, but new changes will not sync until access is restored.
```

---

# Integration Security Rule

Integration security is mandatory.

Required:

```text
secrets stored server-side only
secrets encrypted at rest
least privilege scopes
provider signature verification
no tokens in frontend
no sensitive payloads in logs
safe error messages
permission checks before action
organization scoping
connection-level audit logs
revocation support
```

Do not weaken integration security for faster setup.

---

# Secret Storage Rule

Secrets must never be returned to frontend after save.

Forbidden:

```text
access tokens in API responses
refresh tokens in API responses
API keys in frontend state
webhook secrets in logs
integration credentials in analytics
provider tokens in localStorage
```

Secrets belong to the backend security layer.

---

# Logging Rule

Integration logs must be useful but safe.

Log:

```text
operation id
provider
connection id
organization id
capability
timing
status
error code
retry count
```

Do not log:

```text
access tokens
refresh tokens
API keys
full message content by default
full document content
payment details
customer private data
raw webhook payloads without protection
```

---

# Audit Trail Rule

Integration actions must produce audit events.

Audit-worthy events:

```text
connection created
connection reauthorized
connection disconnected
scope changed
sync started
sync failed
sync completed
tool action executed
message sent
workflow triggered by integration
webhook received
secret rotated
connection paused
connection resumed
```

Audit logs must be organization-scoped and immutable enough for trust.

---

# AI Employee Tool Call Audit Rule

When an AI employee uses an integration tool, record:

```text
employee id
organization id
workflow execution id when applicable
connection id
tool id
input summary
output summary
risk level
review status
approved by when applicable
executed at
result status
error code if failed
AI cost when applicable
```

Never hide tool calls behind generic AI activity.

---

# Human Review Integration Rule

Some integration actions require human review.

Review required examples:

```text
send outbound customer reply in high-risk context
create or modify external customer record
issue refund or billing-related action
publish external content
delete external object
send mass message
change appointment time without confirmation
```

Review policy must be explicit and configurable within safe limits.

---

# Channel Messaging Safety Rule

Outbound messages through integrations must pass safety gates.

Required checks:

```text
employee deployed to channel
send permission exists
reply mode allows send
human review satisfied when required
recipient is valid
message is within scope
content passes safety validation
rate limits not exceeded
audit event created
```

Do not allow the model to send directly to external channels without orchestration.

---

# Human Handoff Rule

Communication channel integrations must support human handoff where applicable.

Handoff should include:

```text
reason
conversation context
AI employee summary
last suggested response
assigned human/team
handoff timestamp
status
```

AI employees must know when to stop and hand off.

---

# Inbound Message Rule

Inbound messages from channels must be normalized before AI processing.

Normalize:

```text
sender identity
channel
thread/conversation id
message id
timestamp
content
attachments
metadata
organization mapping
customer context if available
```

Do not pass raw provider payloads directly into model prompts.

---

# Attachment Rule

Attachments from integrations are untrusted.

Requirements:

```text
file type validation
size limits
malware scanning if architecture supports it
safe storage
permission checks
preview safety
knowledge ingestion policy if used
no automatic trust
```

Attachments should not become knowledge automatically without policy.

---

# CRM Integration Rule

CRM integrations are business-critical.

Actions may include:

```text
read contact
create contact
update contact
create lead
update deal
add note
create task
```

Required safeguards:

```text
clear field mapping
duplicate detection
idempotency
permission checks
human review for high-impact changes
safe failure copy
audit logs
no hallucinated field values
```

AI employees must not invent CRM facts.

---

# Helpdesk Integration Rule

Helpdesk integrations affect customer support quality.

Required:

```text
ticket identity
conversation history access policy
reply permission
internal note vs public reply distinction
assignment rules
escalation rules
SLA awareness when available
human review mode
safe send behavior
```

Public replies and internal notes must never be confused.

---

# Calendar Integration Rule

Calendar integrations affect real schedules.

Required:

```text
availability read permission
event creation permission
participant confirmation
timezone handling
conflict detection
cancellation policy
human confirmation when needed
audit log
safe failure copy
```

Never schedule meetings without clear user/customer confirmation when required.

---

# File Storage Integration Rule

File storage integrations often power knowledge sources.

Required:

```text
folder/file selection
permission inheritance awareness
sync status
file type support
freshness indicator
content extraction failure states
source attribution
permission filtering
revoke handling
```

Do not sync entire drives by default.

Use explicit selection.

---

# Internal API Integration Rule

Custom internal API integrations are powerful and risky.

Required:

```text
explicit endpoint registry
schema validation
auth strategy
allowed actions
rate limits
timeout policy
idempotency
safe error mapping
sandbox/test mode
audit logs
owner contact
```

Do not let users paste arbitrary endpoints that AI employees can call freely.

---

# Custom Webhook Action Rule

Custom webhook actions must be controlled.

Required:

```text
URL validation
HTTPS requirement
method control
header allowlist
secret signing
payload schema
retry policy
idempotency key
response validation
human review for high-risk actions
```

Forbidden by default:

```text
arbitrary user-defined JavaScript
arbitrary dynamic headers with secrets exposed
plaintext HTTP endpoints
unbounded retries
```

---

# Integration Entitlement Rule

Integrations may be limited by plan.

Entitlement examples:

```text
number of active integrations
premium providers
custom webhooks
write actions
real-time sync
advanced workflow triggers
high-volume message channels
enterprise connectors
```

Billing restrictions must be enforced backend-side.

Frontend should explain upgrade paths clearly.

---

# Plan Limit Copy Rule

When a plan blocks integration usage, copy must be clear.

Good:

```text
Custom webhooks are available on the Growth plan.
```

```text
Upgrade to connect more than 3 active integrations.
```

Bad:

```text
Limit exceeded.
```

```text
403.
```

---

# Integration Directory Rule

The integration directory must help users choose safely.

Each provider card should show:

```text
provider name
category
business value
connection status
required access summary
supported capabilities
setup complexity
used by employees/workflows
plan availability
health when connected
```

Do not present integrations as decorative app icons only.

---

# Setup Requirements Rule

Each integration must define setup requirements.

Examples:

```text
admin account required
OAuth authorization required
specific scopes required
select folder required
choose default channel required
configure webhook secret
verify domain
map fields
choose reply mode
```

Setup requirements must be visible before users get stuck.

---

# Integration Readiness Rule

Connected does not always mean ready.

Readiness may require:

```text
scopes verified
initial sync completed
channel selected
field mapping configured
webhook verified
employee assigned
workflow enabled
review policy configured
billing entitlement active
```

UI must distinguish connected from ready.

---

# Employee Deployment Dependency Rule

Employee deployment must validate integration dependencies.

Required checks:

```text
required channel connected
channel ready
required knowledge sources ready or acceptable fallback exists
required action tools connected
permissions granted
review policy configured
billing entitlement active
```

Do not deploy employees into broken integrations.

---

# Workflow Dependency Rule

Workflows must validate integration dependencies before publish.

Validation should check:

```text
trigger connection active
action connection active
required scopes present
field mappings complete
rate limit policy acceptable
review required if action risk is high
fallback path exists
```

Invalid workflows must not be published.

---

# Integration API Contract Rule

Integration APIs must follow `api-contracts.md`.

Responses must be frontend-safe.

Do not expose:

```text
provider secret payloads
raw token data
raw webhook secrets
raw provider errors
unmapped backend exceptions
```

Return product-safe fields.

---

# Integration Error Codes

Use stable product error codes.

Examples:

```text
INTEGRATION_NOT_CONNECTED
INTEGRATION_NEEDS_REAUTHORIZATION
INTEGRATION_SCOPE_MISSING
INTEGRATION_RATE_LIMITED
INTEGRATION_SYNC_FAILED
INTEGRATION_ACTION_FAILED
INTEGRATION_WEBHOOK_INVALID_SIGNATURE
INTEGRATION_PROVIDER_UNAVAILABLE
INTEGRATION_PERMISSION_DENIED
INTEGRATION_PLAN_LIMIT_REACHED
```

Do not depend on raw provider error codes in frontend.

---

# Error Mapping Rule

Provider errors must be mapped to safe Ariyo errors.

Bad:

```text
invalid_grant: Token has been expired or revoked.
```

Good:

```text
Google Drive needs reauthorization before new files can sync.
```

Raw provider errors may be kept in internal logs with sensitive fields redacted.

---

# Provider Limitation Rule

Known provider limitations must be represented honestly.

Examples:

```text
sync delay
limited webhook support
read-only provider
no folder-level permissions
rate limit constraints
attachment type limitations
message length limits
```

Do not hide limitations until failure.

---

# Sandbox and Test Mode Rule

Integrations should support test mode when feasible.

Test mode should allow:

```text
verify connection
send test event
run sample sync
simulate trigger
preview payload
validate field mapping
confirm webhook signature
```

Test mode must be clearly marked.

Do not send real customer messages in test mode.

---

# Preview Rule

Before enabling risky integration actions, Ariyo should preview what will happen.

Examples:

```text
preview outbound reply
preview CRM field update
preview webhook payload
preview ticket note
preview calendar invite
```

Preview does not replace permission checks or review.

---

# Integration Data Retention Rule

Each integration must define data retention behavior.

Questions:

```text
What data is stored in Ariyo?
How long is synced data kept?
What happens after disconnect?
What remains for audit?
What can be deleted?
What must be retained for billing/security/audit?
```

Do not leave retention ambiguous.

---

# Deletion and Revocation Rule

When users disconnect or delete integration data, Ariyo must handle:

```text
secret revocation
webhook unsubscription
sync job cancellation
tool access removal
workflow deactivation or warning
knowledge source status update
audit retention
cache invalidation
```

Disconnect must be more than hiding the connection.

---

# Reconnect Rule

Reconnect should preserve safe configuration when appropriate.

May preserve:

```text
employee assignments
workflow mappings
folder selections
field mappings
review policies
```

Must revalidate:

```text
scopes
permissions
external account identity
source availability
webhook subscriptions
capabilities
```

Do not assume reconnect equals previous readiness.

---

# Multi-Account Rule

Some providers may allow multiple connections per organization.

Examples:

```text
multiple inboxes
multiple Slack workspaces
multiple Google Drive folders/accounts
multiple CRM portals
multiple webhook endpoints
```

UI and backend must distinguish connections clearly.

Use names like:

```text
Support Inbox
Sales HubSpot Portal
Marketing Drive
```

not only provider name.

---

# Field Mapping Rule

Integrations that write to external systems require field mapping.

Field mapping must be:

```text
explicit
typed
validated
previewable
versioned when needed
tested with sample payload
safe on missing fields
```

AI employees must not invent field mappings at runtime.

---

# Data Normalization Rule

Provider data must be normalized into Ariyo domain models.

Do not leak provider-specific models everywhere.

Bad:

```text
SlackMessagePayload rendered directly in UI
HubSpotContactDto passed into employee prompt
ZendeskTicketResponse stored as generic activity
```

Good:

```text
ChannelMessage
CustomerRecord
SupportConversation
IntegrationActivity
```

DTOs belong at boundaries.

---

# Attachment and File Normalization Rule

Provider files should normalize to Ariyo file/source models.

Include:

```text
file id
provider file id
name
mime type
size
source provider
permission metadata
last modified at
sync state
content extraction state
```

Do not rely on provider file shape across the product.

---

# Permission Filtering Rule

If provider permissions are relevant to content visibility, Ariyo must preserve and enforce them.

Required for knowledge integrations:

```text
folder/file access metadata
source owner
visibility rules
organization/member access
employee access policy
retrieval-time filtering
```

Do not retrieve content for an employee that should not access it.

---

# AI Prompt Injection Defense Rule

Content from integrations is untrusted.

Risky sources:

```text
documents
web pages
customer messages
emails
ticket content
Slack messages
webhook payloads
CRM notes
```

Ariyo must treat integration content as data, not instructions.

Follow `knowledge-rag.md` and `prompt-tool-orchestration.md`.

---

# Cost Rule

Integrations can create cost.

Cost sources:

```text
sync jobs
embedding generation
retrieval
AI execution
outbound messages
webhook processing
workflow execution
third-party API usage
storage
```

Ariyo must track and expose meaningful cost where relevant.

Do not allow runaway sync or execution loops.

---

# Loop Prevention Rule

Integrations can create automation loops.

Examples:

```text
AI sends message → webhook receives message → AI replies again
workflow updates CRM → CRM webhook triggers same workflow
sync writes metadata → provider event retriggers sync
```

Ariyo must prevent loops through:

```text
source markers
idempotency keys
event origin tracking
workflow run guards
cooldowns
max execution depth
loop detection alerts
```

---

# Backpressure Rule

When provider or Ariyo capacity is constrained, apply backpressure.

Examples:

```text
queue throttling
pause non-critical sync
prioritize high-value jobs
delay low-priority backfills
stop polling when rate-limited
surface degraded status
```

Do not allow integration queues to collapse the system.

---

# Priority Rule

Integration jobs should have priority classes.

Suggested priority:

```text
critical outbound action
customer-facing workflow
webhook event processing
manual user-triggered sync
initial source sync
scheduled incremental sync
backfill
analytics enrichment
low-priority repair
```

Priority must align with business impact.

---

# Observability Rule

Every integration must be observable.

Track:

```text
connection health
sync success rate
sync latency
action success rate
action latency
webhook success rate
rate limit events
reauthorization frequency
failure reasons
DLQ count
AI tool call outcomes
cost per connection
```

No black-box integrations.

---

# Alerting Rule

Alert on integration failures that affect users.

Alert candidates:

```text
high webhook failure rate
provider auth failures spike
sync jobs stuck
outbound action failure spike
DLQ growth
rate limit sustained
billing webhook failures
critical provider outage
cross-organization mapping anomaly
```

Do not alert noisily on isolated recoverable failures.

---

# Incident Rule

Integration incidents must be diagnosable and recoverable.

Incident data should include:

```text
provider
affected organizations
affected connections
affected employees
affected workflows
affected actions
time window
failure class
customer-visible impact
mitigation
recovery
post-incident prevention
```

AI employee impact must be clear.

---

# Kill Switch Rule

Ariyo must support kill switches for risky integration behavior.

Kill switch examples:

```text
disable outbound sends for provider
disable specific tool
disable workflow trigger
disable sync for provider
pause connection
pause employee channel deployment
require review for all sends
```

Kill switches must preserve auditability.

---

# Integration Testing Rule

Integrations require strong tests.

Test:

```text
connection lifecycle
scope validation
error mapping
sync job transitions
webhook signature verification
webhook idempotency
tool schema validation
permission checks
disconnect dependency handling
reauthorization state
rate limit handling
safe user copy
```

Mock provider behavior realistically.

---

# Contract Testing Rule

Provider contracts must be tested where feasible.

Test:

```text
expected webhook payloads
API response mapping
rate limit response handling
auth error handling
pagination behavior
scope missing behavior
provider downtime behavior
```

Provider assumptions must be documented.

---

# Frontend Integration UX Rule

Frontend integration screens must show:

```text
connection status
health state
last sync
used by employees/workflows
required attention
available actions
safe disconnect
reauthorize action
retry sync action
plan limits when relevant
```

Do not hide integration health in settings only if it affects deployed employees.

---

# Integration Card Rule

Integration cards should include:

```text
provider name
category
status
short business value
connected account label
health indicator with text
primary action
secondary action when relevant
used-by count
last activity when useful
```

Status must not be color-only.

---

# Integration Detail Rule

Integration detail pages should show:

```text
status and health
connected account
scopes/access summary
capabilities
used by employees
used by workflows
sync history
recent events
recent errors
security information
disconnect action
reauthorize action when needed
```

The page must help users understand operational impact.

---

# Empty State Rule

Integration empty states should guide setup.

Good:

```text
No integrations connected yet.
Connect a channel or knowledge source so employees can work with your business systems.
```

Bad:

```text
No integrations.
```

---

# Marketplace Relationship Rule

AI Employee Marketplace templates may require integrations.

Template requirements should show:

```text
required integrations
optional integrations
why each integration is needed
setup complexity
deploy readiness impact
plan requirements
```

Do not let users hire employees they cannot realistically deploy without explanation.

---

# Recommended Integrations Rule

Ariyo may recommend integrations based on selected employee/use case.

Recommendations must be helpful, not noisy.

Good:

```text
Connect your helpdesk so Customer Support Employee can respond from existing tickets.
```

Bad:

```text
Install more integrations.
```

---

# Integration Analytics Rule

Measure integration product success.

Key metrics:

```text
connection started
connection completed
connection failed
initial sync completed
initial sync failed
time to ready
integration used by employee
integration used by workflow
action success rate
sync freshness
reauthorization rate
disconnect rate
integration-driven activation
integration-driven retention
```

Do not measure only connection count.

Measure useful connected capability.

---

# Privacy Analytics Rule

Integration analytics must not include sensitive content.

Do not send:

```text
message bodies
document text
customer private data
OAuth tokens
API keys
raw webhook payloads
billing data
private file names when sensitive
```

Use safe metadata.

---

# Integration Documentation Rule

Every provider should have internal documentation:

```text
provider overview
connection method
scopes
capabilities
webhook events
rate limits
known failure modes
sync behavior
security considerations
test strategy
runbook links
```

No integration should rely only on tribal knowledge.

---

# Runbook Rule

Critical integrations require runbooks.

Runbook should include:

```text
common failures
how to identify impact
how to pause provider
how to replay events
how to re-run sync
how to rotate secrets
how to recover stuck jobs
how to communicate user impact
```

Operations must be prepared before incidents.

---

# Integration Review Checklist

Before shipping an integration, verify:

```text
Is it organization-scoped?
Are secrets backend-only?
Are scopes least-privilege?
Are user-facing access descriptions clear?
Is connection lifecycle implemented?
Is readiness different from connected?
Are sync jobs observable?
Are webhooks verified?
Is idempotency handled?
Are rate limits handled?
Are errors safely mapped?
Are disconnect consequences clear?
Are employee/workflow dependencies handled?
Are tool permissions explicit?
Is human review required for risky actions?
Are audit events emitted?
Are logs redacted?
Are tests included?
Are runbooks ready for critical providers?
```

If any answer is no, the integration is not production-ready.

---

# Integration Decision Tree

Ask:

### Does this integration provide context, channel, event, or action?

Classify it correctly.

### Does it require secrets?

Store and use them only backend-side.

### Does it read business data?

Define sync, freshness, permissions, and retention.

### Does it perform actions?

Define tool schema, risk level, idempotency, review, and audit.

### Does it receive events?

Verify signatures, validate payloads, deduplicate, and observe failures.

### Can an AI employee use it?

Grant access explicitly through role, deployment, workflow, and permission policy.

### Can it fail?

Show safe state and recovery.

### Can it affect customers?

Require stronger safety gates.

### Can it affect billing or permissions?

Do not allow optimistic success.

### Can it create loops?

Implement loop prevention.

---

# Forbidden Integration Patterns

Never ship:

```text
tokens in frontend
API keys in localStorage
refresh tokens in Zustand
raw provider errors shown to users
raw webhook payloads trusted without verification
webhooks without idempotency
provider data used without organization scoping
all employees get all integration access by default
connected treated as ready
unknown status treated as active
sync failures hidden
outbound messages sent without permission checks
action tools exposed directly to model without orchestration
custom webhook actions without schema/signature policy
unbounded retries for external actions
polling without stop condition
provider rate limits ignored
disconnect that leaves active workflows broken silently
integration errors shown as generic Something went wrong
backend DTOs rendered directly in UI
secrets logged
sensitive content sent to analytics
OAuth callback params logged
integration data leaked across organizations
file storage sync of entire drive by default
knowledge content retrieved without permission filtering
AI employee using integration content as instructions
billing-sensitive integration action with optimistic success
```

---

# Ariyo Integration Golden Rule

An integration is safe only when Ariyo can explain what it can access, what it can do, who allowed it, which employees use it, what happened through it, what failed, and how to stop it.

---

# Senior Integration Rule

Do not connect systems just because the API allows it.

Connect only the business capability Ariyo can safely govern, observe, and measure.

---

# Final Rule

Ariyo integration ecosystem is production-ready only when every connection is organization-scoped, permission-aware, capability-based, lifecycle-managed, failure-tolerant, auditable, secure, rate-limit-safe, AI-tool-safe, human-review-aware, observable, disconnectable, and aligned with real business outcomes rather than generic plugin access.
