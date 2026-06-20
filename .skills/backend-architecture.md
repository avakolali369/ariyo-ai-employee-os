# Ariyo Backend Architecture Skill

Version: 1.0.0  
Product: Ariyo  
Purpose: Act as a Principal Backend Architect, Staff Platform Engineer, Security Reviewer, AI Systems Architect, and Production Reliability Guardian for Ariyo.  
Audience: Codex Agents and AI-assisted development tools.  
Priority: Non-negotiable.

Depends on:

- product-strategy.md
- ai-employee-architecture.md
- coding-standards.md
- frontend-state-data.md
- frontend-forms-validation.md
- frontend-testing.md
- frontend-performance.md

If conflicts exist:

- product-strategy.md wins for product direction and market positioning.
- ai-employee-architecture.md wins for AI employee role, lifecycle, autonomy, safety, and evaluation semantics.
- backend-architecture.md wins for backend service boundaries, persistence, jobs, API design, security enforcement, reliability, and operational architecture.

---

# 1. Core Backend Mission

Ariyo backend exists to power a safe, measurable, multi-tenant AI Employee Operating System.

The backend must support:

```text
organizations
workspaces
members
roles
permissions
AI employees
employee lifecycle
knowledge sources
RAG pipelines
workflow automation
integrations
channels
activity logs
AI execution
review queues
billing and usage
AI cost tracking
auditing
observability
background processing
reliable APIs
```

Ariyo backend must not be treated as a simple CRUD API.

It is the trust, safety, state, automation, and execution layer of the product.

---

# 2. Backend Architecture Principle

The backend must be boring where correctness matters and flexible where product intelligence evolves.

Use stable, explicit architecture for:

```text
authentication
authorization
organization boundaries
billing
deployment state
knowledge source state
workflow execution state
audit trails
background jobs
API contracts
data persistence
security
```

Use modular, evolvable architecture for:

```text
AI providers
retrieval strategies
evaluation pipelines
tool execution
workflow capabilities
integration adapters
channel adapters
model routing
cost optimization
```

Never mix experimental AI logic directly into core business models without boundaries.

---

# 3. Official Backend Stack

Ariyo backend stack:

```text
Python
Django
Django REST Framework or equivalent HTTP API layer where appropriate
FastAPI for high-throughput, async, AI execution, streaming, or specialized service boundaries
PostgreSQL
Redis
Celery
Object storage for uploaded files and generated artifacts
Vector storage or vector-capable service for retrieval when approved
Structured logging
OpenTelemetry-compatible tracing when available
```

Default ownership:

```text
Django:
core product domain, admin, ORM, auth, permissions, multi-tenancy, billing, organization data

FastAPI:
AI execution surfaces, streaming endpoints, specialized async APIs, internal model gateway services when needed

Celery:
background jobs, knowledge sync, ingestion, embedding, workflow execution, scheduled checks, notifications, retries

Redis:
broker, cache, locks, rate limits, short-lived coordination, idempotency helpers

PostgreSQL:
source of truth for product state

Object storage:
large files, knowledge source uploads, generated exports, durable artifacts
```

Do not introduce additional backend frameworks casually.

---

# 4. Backend Product Contract

The backend must protect product truth.

The frontend may show state, but backend owns state validity.

Backend must be the authority for:

```text
who belongs to an organization
who can do what
which employees are hired
which employees are deployed
which employees are active
which knowledge sources are connected
which sources are ready
which workflows are published
which actions were executed
which AI outputs were reviewed
which billing plan is active
which usage was incurred
which data belongs to which organization
```

Frontend must never need to invent these truths.

---

# 5. Backend Layering Rule

Ariyo backend should use clear layers.

Recommended domain app structure:

```text
apps/
  accounts/
  organizations/
  members/
  permissions/
  employees/
  deployments/
  knowledge/
  retrieval/
  workflows/
  executions/
  integrations/
  channels/
  conversations/
  reviews/
  billing/
  usage/
  analytics/
  notifications/
  audit/
  platform/
```

Recommended layer types inside apps:

```text
models.py or models/
selectors.py
services.py or services/
serializers.py or schemas.py
api.py or views.py
tasks.py
permissions.py
validators.py
events.py
tests/
```

Layer responsibilities:

```text
Models:
persistence and invariants that belong close to data

Selectors:
read/query logic

Services:
write operations and business workflows

API/View layer:
HTTP validation, authentication, permission checks, response shaping

Tasks:
background job orchestration

Events:
domain event creation and dispatch

Permissions:
authorization policy

Serializers/Schemas:
API contract validation and shaping
```

Do not put complex business workflows directly in views.

Do not put HTTP behavior directly in models.

---

# 6. Domain-First Design Rule

Name backend concepts using Ariyo product language.

Preferred terms:

```text
Employee
AIEmployee
KnowledgeSource
BusinessContext
Deployment
Workflow
Channel
Integration
Review
Activity
Usage
AICost
Organization
Workspace
Member
Role
Permission
```

Avoid product-facing backend names like:

```text
Agent
Bot
PromptBot
LLMThing
VectorJob
EmbeddingObject
CeleryTaskRecord
TenantThing
```

Technical names may exist inside infrastructure boundaries, but domain APIs must remain product-first.

---

# 7. Monolith-First Modular Architecture

Ariyo should begin as a modular backend, not a distributed system by default.

Preferred starting architecture:

```text
Django modular monolith
PostgreSQL source of truth
Celery workers
Redis broker/cache
FastAPI service boundary only where justified
```

Do not split into microservices prematurely.

Create service boundaries through modules first.

Extract services later only when:

```text
scaling requires it
security isolation requires it
AI execution throughput requires it
team ownership requires it
release cadence requires it
operational cost is justified
```

A modular monolith with clean boundaries is better than premature distributed complexity.

---

# 8. Multi-Tenancy Rule

Ariyo is organization-scoped by default.

Every organization-owned model must include organization ownership directly or through a strict parent chain.

Examples:

```text
Employee belongs to Organization
KnowledgeSource belongs to Organization
Workflow belongs to Organization
Integration belongs to Organization
Channel belongs to Organization
Conversation belongs to Organization
UsageRecord belongs to Organization
BillingAccount belongs to Organization
```

Every query for organization-owned data must scope by organization.

Bad:

```python
Employee.objects.get(id=employee_id)
```

Good:

```python
Employee.objects.get(id=employee_id, organization=organization)
```

Never trust IDs alone.

---

# 9. Organization Boundary Enforcement

Organization boundaries must be enforced at:

```text
API permission layer
selector layer
service layer
background task layer
integration callbacks
webhooks
file access layer
retrieval layer
analytics layer
billing layer
```

Background jobs must include organization context and validate it.

Webhook handlers must resolve and validate organization ownership before changing state.

Retrieval must never return chunks from another organization.

---

# 10. ID Strategy

Use stable, non-guessable public IDs for externally exposed entities.

Recommended:

```text
UUIDs
prefixed IDs where useful for debugging and product clarity
```

Examples:

```text
org_...
employee_...
source_...
workflow_...
deployment_...
conversation_...
```

Never expose auto-increment integer IDs in public APIs if avoidable.

Database primary keys may be internal.

Public identifiers must be safe for URLs and logs.

---

# 11. Time and State Rule

All persisted timestamps must be timezone-aware.

Use UTC internally.

Important timestamps:

```text
created_at
updated_at
deleted_at
last_synced_at
deployed_at
activated_at
failed_at
paused_at
reviewed_at
executed_at
billed_at
```

Do not use naive datetimes.

Do not infer lifecycle state from timestamps alone when explicit state is required.

---

# 12. Lifecycle State Machine Rule

High-trust objects must use explicit lifecycle states.

Employee deployment states:

```text
not_ready
ready_to_deploy
deploying
active
failed
paused
archived
```

Knowledge source states:

```text
not_connected
connected
syncing
ready
needs_review
failed
outdated
archived
```

Workflow states:

```text
draft
validating
ready_to_publish
published
paused
failed
archived
```

Review states:

```text
pending
approved
rejected
expired
escalated
```

Never store lifecycle as arbitrary strings.

Use enums, constraints, and explicit transition services.

---

# 13. State Transition Rule

State changes must happen through services, not scattered assignments.

Bad:

```python
deployment.status = "active"
deployment.save()
```

Good:

```python
activate_employee_deployment(deployment=deployment, actor=actor)
```

Transition services must:

```text
validate current state
validate permissions
apply state change
write audit record
emit domain event when needed
invalidate or update dependent state
schedule follow-up jobs when needed
```

State transitions are product behavior.

---

# 14. Permission Architecture

Ariyo permissions must be explicit and product-oriented.

Permission examples:

```text
can_view_employees
can_hire_employee
can_deploy_employee
can_pause_employee
can_manage_knowledge_sources
can_manage_workflows
can_publish_workflow
can_manage_integrations
can_manage_billing
can_invite_members
can_manage_roles
can_view_ai_cost
can_view_activity_logs
```

Permission checks must happen on the backend.

Frontend permission UI is a convenience, not enforcement.

---

# 15. Authorization Rule

Every write operation must check:

```text
authenticated user
organization membership
required role/permission
object ownership
object lifecycle state
plan/usage entitlement when relevant
risk policy when relevant
```

Do not rely on endpoint naming or hidden frontend actions.

Do not assume organization membership from request path alone.

---

# 16. Authentication Rule

Authentication must be centralized.

Feature code must not manually parse tokens, set auth headers, or implement ad hoc auth.

Approved auth layer must handle:

```text
session or token validation
user lookup
organization membership
current organization selection
session expiration
safe logout
CSRF if cookie-based auth is used
```

Auth logic must not be duplicated across apps.

---

# 17. API Design Principle

Ariyo APIs must be product APIs, not database APIs.

Good API resources:

```text
/employees
/employees/{employee_id}
/employees/{employee_id}/deployment
/knowledge-sources
/knowledge-sources/{source_id}/sync
/workflows
/workflows/{workflow_id}/publish
/billing/summary
/usage/ai-cost
```

Avoid leaking backend implementation:

```text
/celery-tasks
/vector-indexes
/embedding-jobs
/agent-runtimes
/tenant-records
```

Product APIs should expose what users understand.

---

# 18. API Contract Rule

Every API endpoint must define:

```text
request schema
response schema
authentication requirement
permission requirement
organization scope
success response
validation errors
permission errors
not found behavior
rate limit behavior if relevant
idempotency behavior for high-risk writes
```

Do not create endpoints with ambiguous payloads or loose dictionaries.

---

# 19. API Response Shape Rule

Ariyo API responses should be consistent.

Recommended success shape for resource endpoints:

```json
{
  "data": {},
  "meta": {}
}
```

Recommended list shape:

```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "page_size": 20,
    "total": 120
  },
  "meta": {}
}
```

Recommended error shape:

```json
{
  "error": {
    "code": "employee_not_ready",
    "message": "This employee is not ready to deploy.",
    "fields": {},
    "request_id": "req_..."
  }
}
```

Do not return inconsistent ad hoc error shapes.

---

# 20. Error Code Rule

Backend errors must expose stable product-safe error codes.

Examples:

```text
permission_denied
organization_not_found
employee_not_found
employee_not_ready
knowledge_source_sync_failed
workflow_invalid
billing_update_failed
rate_limited
validation_failed
integration_connection_failed
```

Do not expose raw exception names.

Do not expose stack traces.

Frontend should map stable error codes to product copy.

---

# 21. Validation Rule

All input must be validated at the API boundary and service boundary when needed.

Validate:

```text
IDs
strings
emails
URLs
file types
file sizes
enums
pagination
sort keys
filters
date ranges
money values
role names
permission changes
workflow definitions
AI employee configuration
integration settings
```

Never trust frontend validation.

Frontend validation improves UX.

Backend validation enforces correctness.

---

# 22. Selector Rule

Read logic should live in selectors or query services.

Selectors should:

```text
apply organization scope
apply permissions when relevant
optimize related data loading
centralize filtering
centralize sorting
centralize pagination
avoid duplication across views/tasks
```

Bad:

```python
# repeated in many views
Employee.objects.filter(organization=request.organization, status="active")
```

Good:

```python
list_employees_for_organization(organization=organization, filters=filters)
```

Selectors make reads safe and consistent.

---

# 23. Service Rule

Write logic must live in service functions or service classes.

Services should:

```text
validate permissions
validate lifecycle state
perform database transaction
write audit logs
emit events
schedule tasks
return product domain objects
```

Bad:

```python
class DeployEmployeeView(APIView):
    def post(self, request):
        # 200 lines of deployment logic
```

Good:

```python
deploy_employee(
    organization=organization,
    employee=employee,
    actor=request.user,
    payload=payload,
)
```

Views should orchestrate HTTP.

Services should own business behavior.

---

# 24. Transaction Rule

Use database transactions for multi-step writes.

Required for:

```text
deployment state changes
workflow publish
billing changes
role changes
member removal
integration connection updates
knowledge source status changes
usage accounting
review approval/rejection
destructive actions
```

Use transactions to avoid partial product state.

Do not schedule external side effects before durable state is committed unless explicitly safe.

---

# 25. Idempotency Rule

High-risk write operations should be idempotent where practical.

High-risk actions:

```text
deploy employee
publish workflow
send invite
connect integration
sync knowledge source
update billing
remove member
execute workflow action
```

Use idempotency keys for external-facing operations when duplicate requests can cause harm.

Idempotency should prevent duplicate side effects.

---

# 26. Background Job Principle

Background jobs must be reliable, observable, idempotent, and recoverable.

Celery tasks must not be hidden side effects without product state.

Every important background job should have:

```text
job purpose
owning organization
owning entity
idempotency behavior
retry policy
timeout
failure state
user-visible state when relevant
audit or activity record when relevant
structured logs
metrics
```

Background jobs are product operations.

---

# 27. Celery Task Rule

Celery tasks must be thin orchestration wrappers.

Bad:

```python
@app.task
def sync_source(source_id):
    # 400 lines of ingestion, permissions, parsing, embedding, state changes
```

Good:

```python
@app.task(bind=True)
def sync_knowledge_source_task(self, source_id: str, organization_id: str):
    return sync_knowledge_source(
        source_id=source_id,
        organization_id=organization_id,
        task_id=self.request.id,
    )
```

Business logic belongs in services.

Tasks call services.

---

# 28. Job State Rule

Long-running user-visible jobs must have durable state.

Examples:

```text
knowledge source sync
deployment
workflow publish
integration import
report generation
large file processing
```

Durable state should include:

```text
status
started_at
finished_at
failed_at
error_code
retry_count
last_progress_message when useful
owning organization
owning entity
```

Do not rely on Celery task status as the only product state.

---

# 29. Retry Rule

Retries must be intentional.

Retry appropriate failures:

```text
timeouts
transient provider errors
rate limits with backoff
network failures
temporary storage failures
```

Do not blindly retry:

```text
validation failures
permission failures
billing card failures
destructive actions
invalid configuration
unsupported file types
unknown unsafe states
```

Retries must not duplicate side effects.

---

# 30. Scheduled Job Rule

Scheduled jobs must be explicit and observable.

Examples:

```text
refresh stale knowledge sources
check deployment health
sync integration metadata
compute usage summaries
generate billing usage rollups
expire old reviews
cleanup temporary files
send safe notifications
```

Scheduled jobs must have:

```text
owner
frequency
purpose
idempotency
failure alerting
safe query scope
```

Do not create scheduled jobs that scan all data without scoping and batching.

---

# 31. Locking Rule

Use Redis or database locks for operations that must not run concurrently.

Examples:

```text
sync same knowledge source
publish same workflow
deploy same employee
billing plan update
usage rollup
integration import
```

Concurrent jobs must not corrupt state.

Prefer idempotency plus locks for high-risk operations.

---

# 32. Event Architecture Rule

Use domain events for important product changes.

Examples:

```text
employee_hired
employee_deployment_started
employee_activated
employee_paused
knowledge_source_connected
knowledge_source_sync_started
knowledge_source_ready
knowledge_source_sync_failed
workflow_published
review_approved
billing_plan_changed
usage_recorded
```

Events can trigger:

```text
audit logs
activity feed
notifications
analytics
cache invalidation
background jobs
billing usage tracking
```

Events must be product-domain events, not technical implementation leaks.

---

# 33. Audit Log Rule

Audit logs are required for high-trust actions.

Audit:

```text
who did it
what changed
when it happened
organization
affected entity
before/after for sensitive state when appropriate
request_id
source channel if relevant
```

Required audit actions:

```text
member invited
member removed
role changed
billing changed
employee deployed
employee paused
knowledge source connected/disconnected
workflow published/deleted
integration connected/disconnected
permission changed
```

Audit logs are not the same as analytics.

Audit logs are trust and compliance artifacts.

---

# 34. Activity Feed Rule

Activity feed should show product-relevant events to users.

Activity is user-facing.

Good activity examples:

```text
Customer Support Employee was deployed.
Knowledge source “Help Center” is ready.
Workflow “Lead Qualification” was published.
Sync failed for “Pricing Docs”.
```

Avoid technical activity:

```text
Celery task completed.
Vector index updated.
Embedding batch failed.
```

User-facing activity must use Ariyo product language.

---

# 35. AI Employee Backend Model Rule

AI employee backend model must support:

```text
identity
role
description
category
status
capabilities
risk level
autonomy level
review mode
allowed channels
allowed tools
allowed knowledge scopes
business context
owner organization
configuration version
lifecycle state
created_at
updated_at
```

Do not represent AI employees as prompt strings only.

An AI employee is a product entity with lifecycle, permissions, and measurement.

---

# 36. AI Employee Configuration Versioning

Employee configuration must be versioned when changes affect behavior.

Versioned fields may include:

```text
instructions
role scope
autonomy level
tool access
knowledge access
channel access
workflow bindings
review rules
safety policy
```

Executions should reference the configuration version used.

This enables debugging, rollback, evaluation, and audit.

---

# 37. AI Execution Rule

Every AI employee execution must record:

```text
organization
employee
configuration version
trigger source
channel
workflow if any
input summary
knowledge sources used
retrieval references
model/provider used
cost estimate or actual cost
latency
output status
review status
safety checks
final action taken
error code if failed
```

Do not execute AI actions without traceability.

---

# 38. AI Provider Boundary Rule

AI provider calls must go through a provider abstraction.

Provider boundary should handle:

```text
model selection
credentials
request shaping
response parsing
timeouts
retries
rate limits
cost calculation
logging without sensitive content
provider errors
fallback model policy when approved
```

Do not call provider SDKs directly from product services.

AI providers are infrastructure dependencies, not domain logic.

---

# 39. Model Routing Rule

Model selection must be explicit and policy-driven.

Routing may consider:

```text
task type
risk level
latency requirement
cost budget
language
required reasoning quality
context length
review mode
organization plan
```

Do not hardcode model names throughout the codebase.

Use a model routing service or configuration boundary.

---

# 40. Prompt and Instruction Rule

System instructions and employee instructions must be versioned and controlled.

Rules:

```text
do not scatter prompts across random files
separate product instructions from customer configuration
track prompt/config versions
avoid storing secrets in prompts
avoid exposing internal policy to end users
support evaluation against prompt changes
```

Prompt changes are product changes.

Treat them like code.

---

# 41. Tool Execution Rule

AI tools must be registered, typed, permissioned, and auditable.

Every tool must define:

```text
name
purpose
input schema
output schema
permission requirement
risk level
allowed employee roles
idempotency behavior
side effect level
rate limit
logging policy
failure behavior
human review requirement when applicable
```

Do not let employees call arbitrary backend functions.

Tool access must be explicit.

---

# 42. Tool Risk Levels

Classify tools by risk.

```text
read_only:
fetch safe information

low_risk_write:
update reversible preferences or drafts

medium_risk_write:
create internal objects, drafts, or tasks

high_risk_write:
send customer-facing messages, publish workflows, change billing, remove data, update permissions
```

High-risk tools require stricter permissions and review policy.

---

# 43. Human Review Rule

Human review must be enforced by backend policy.

Review required when:

```text
employee autonomy level requires review
action is high-risk
confidence is low
knowledge evidence is insufficient
policy check fails softly
organization settings require review
channel requires approval
billing/permission/destructive action is involved
```

Frontend review UI is not enforcement.

Backend must prevent unreviewed high-risk actions.

---

# 44. Review Queue Rule

Review queue items must include:

```text
organization
employee
execution
proposed action
proposed output
reason review is required
supporting knowledge references
risk indicators
created_at
expires_at when relevant
reviewer
review decision
decision reason
final action result
```

Review must be auditable.

---

# 45. Knowledge Architecture Boundary

Knowledge/RAG logic must have clear boundaries.

Recommended apps:

```text
knowledge:
source management, file metadata, sync state

retrieval:
chunking, embeddings, indexing, retrieval, references

executions:
AI employee runtime usage of retrieved context
```

Do not mix upload handling, parsing, embedding, retrieval, and answer generation in one function.

---

# 46. Knowledge Source Rule

Knowledge source backend must track:

```text
organization
source type
name
connection metadata
status
sync status
last_synced_at
freshness policy
permission scope
owner
file metadata when applicable
error code
version
```

Do not expose raw technical pipeline state to users unless mapped to product state.

---

# 47. Retrieval Permission Rule

Retrieval must respect organization and source permissions.

A retrieval query must include:

```text
organization scope
employee allowed knowledge scope
user/member permission if relevant
source status
freshness constraints when relevant
channel/workflow constraints when relevant
```

Never retrieve chunks across organizations.

Never retrieve from sources an employee is not allowed to use.

---

# 48. Knowledge Freshness Rule

Knowledge freshness must be tracked.

Important concepts:

```text
last synced
outdated
needs review
sync failed
source ready
source disconnected
```

AI employee execution must be able to know when knowledge may be stale.

Do not present stale knowledge as fresh.

---

# 49. RAG Evidence Rule

When AI outputs depend on knowledge, execution records should preserve evidence.

Evidence may include:

```text
source IDs
chunk IDs
document version
retrieval score
retrieval timestamp
short citation metadata
```

This supports review, debugging, evaluation, and trust.

Do not rely on model output without traceable evidence for knowledge-grounded tasks.

---

# 50. Workflow Architecture Rule

Workflows are product automation definitions, not arbitrary scripts.

Workflow backend must support:

```text
trigger
conditions
actions
employee binding
channel binding
review policy
permissions
status
version
publish state
execution history
failure handling
```

Workflow definitions must be validated before publishing.

Published workflows must be versioned.

---

# 51. Workflow Execution Rule

Workflow executions must be durable and traceable.

Record:

```text
workflow
workflow version
organization
trigger event
employee
input data summary
steps executed
AI calls
tool calls
review outcomes
final status
errors
cost
latency
```

Do not execute workflows as untracked background code.

---

# 52. Integration Architecture Rule

Integrations must be adapter-based.

Every integration adapter should define:

```text
provider name
auth method
connection flow
permission requirements
webhook handling
sync behavior
rate limits
error mapping
secret storage policy
disconnect behavior
health check
```

Do not scatter provider-specific logic across product services.

---

# 53. Secret Handling Rule

Secrets must never be stored in plaintext application code or frontend env.

Secrets include:

```text
API keys
OAuth tokens
refresh tokens
webhook secrets
provider credentials
encryption keys
payment secrets
```

Secrets must be stored using approved secret management and encrypted at rest when persisted.

Never log secrets.

Never expose secrets in API responses.

---

# 54. Webhook Rule

Webhook endpoints must verify authenticity.

Required:

```text
signature validation when provider supports it
idempotency
replay protection when possible
organization/account resolution
safe error handling
structured logs
no raw secret logging
bounded processing time
background task handoff for heavy work
```

Do not trust webhook payloads.

---

# 55. Billing Architecture Rule

Billing is high-trust and must be server-authoritative.

Backend owns:

```text
plan
subscription status
usage limits
invoices
AI cost accounting
billing provider state
entitlements
upgrade/downgrade state
payment status
```

Frontend must not compute billing truth.

Billing changes must wait for provider/server confirmation.

---

# 56. Usage Tracking Rule

Track usage as durable records.

Usage examples:

```text
AI execution tokens
model cost
employee actions
workflow executions
knowledge sync jobs
integration calls
storage usage
seat usage
```

Usage records should include:

```text
organization
employee when applicable
workflow when applicable
source action
provider/model when applicable
quantity
cost
timestamp
billing period
metadata safe for storage
```

Do not rely only on logs for billing-relevant usage.

---

# 57. AI Cost Rule

AI cost must be tracked transparently.

Track:

```text
provider
model
input tokens
output tokens
cached tokens when applicable
estimated cost
actual cost when available
employee
workflow
organization
execution
```

Cost calculations should be centralized.

Do not scatter cost math across tasks and services.

---

# 58. Rate Limiting Rule

Rate limiting is required for sensitive or expensive operations.

Rate limit:

```text
AI executions
knowledge sync
file uploads
invites
login/auth endpoints
webhook processing where appropriate
workflow triggers
integration calls
billing attempts
```

Rate limits should be organization-aware and user-aware where needed.

Return product-safe rate limit errors.

---

# 59. File Storage Rule

Uploaded files must be stored safely.

Backend must track:

```text
organization
uploader
file name
safe file name
content type
size
storage key
checksum when useful
scan status if applicable
processing status
source association
created_at
```

Do not trust file names.

Do not execute uploaded files.

Use object storage for large files.

---

# 60. File Validation Rule

Validate uploaded files server-side.

Validate:

```text
file size
file type
file extension
MIME type
empty file
malformed file
duplicate file when relevant
organization quota
source permission
```

Frontend validation is not enough.

Backend validation is mandatory.

---

# 61. Database Design Rule

PostgreSQL is the source of truth.

Database design must prioritize:

```text
correctness
organization scoping
constraints
indexes
query performance
auditability
migration safety
explicit lifecycle states
referential integrity
```

Do not rely on application code for everything that the database can safely enforce.

---

# 62. Database Constraint Rule

Use database constraints for critical invariants.

Examples:

```text
unique organization slug
unique member per organization
valid lifecycle state choices
non-null required ownership
unique active billing subscription per organization
unique integration provider per organization when required
foreign keys for ownership
```

Constraints protect against bugs and concurrency issues.

---

# 63. Index Rule

Add indexes for common query patterns.

Common indexes:

```text
organization_id
organization_id + status
organization_id + created_at
organization_id + updated_at
employee_id + created_at
workflow_id + status
source_id + status
billing_period + organization_id
```

Do not add indexes blindly.

Index based on real access patterns.

---

# 64. Migration Rule

Migrations must be safe and reversible when possible.

For production data:

```text
avoid destructive migrations without plan
backfill in batches
avoid long locks
separate schema and data migrations when needed
provide defaults carefully
handle nullability transitions safely
```

Never casually drop columns or data.

---

# 65. Soft Delete Rule

Use soft delete for important business objects when recovery/audit matters.

Candidates:

```text
employees
workflows
knowledge sources
integrations
members
channels
```

Hard delete may be appropriate for:

```text
temporary files
expired drafts
privacy deletion flows when required
short-lived tokens
```

Deletion behavior must match product copy.

---

# 66. Privacy Deletion Rule

Privacy deletion must be explicit and reliable.

If product supports data deletion, backend must handle:

```text
ownership verification
cascade policy
audit policy
retention policy
billing/legal exceptions
background deletion
user-visible status
```

Do not implement privacy deletion as a simple ad hoc delete call.

---

# 67. Caching Rule

Cache only when ownership and invalidation are clear.

Good cache candidates:

```text
safe configuration
permission summaries with short TTL
rate limit counters
expensive read-only metadata
provider model lists
feature flags
```

Avoid caching:

```text
billing truth without clear invalidation
permissions indefinitely
organization-sensitive data without scoping
high-risk lifecycle state
secret values
```

Cache keys must include organization scope when data is organization-specific.

---

# 68. Redis Rule

Redis may be used for:

```text
Celery broker/result backend when configured
short-lived cache
rate limiting
locks
idempotency keys
session/cache support if approved
```

Do not use Redis as the source of truth for product state.

Durable product state belongs in PostgreSQL.

---

# 69. Observability Rule

Backend must be observable.

Every important operation should produce:

```text
structured logs
request ID
organization ID when safe
actor ID when safe
entity IDs
operation name
status
latency
error code
```

Sensitive data must not be logged.

Logs must help debug without leaking private content.

---

# 70. Request ID Rule

Every request should have a request ID.

Request IDs should flow through:

```text
API logs
service logs
Celery task logs
provider calls
audit records when useful
error responses
```

Expose safe request ID in API errors.

This helps support and debugging.

---

# 71. Metrics Rule

Track backend metrics for:

```text
request latency
request errors
job success/failure
job duration
AI provider latency
AI provider errors
retrieval latency
knowledge sync duration
workflow execution duration
billing webhook failures
rate limit hits
usage events
```

Metrics must be product and reliability oriented.

---

# 72. Tracing Rule

For complex flows, trace across boundaries.

Trace:

```text
API request
service call
DB operations where appropriate
Celery task
AI provider call
retrieval call
tool execution
webhook handling
```

Tracing helps debug AI workflows and background jobs.

---

# 73. Security Logging Rule

Security-sensitive events must be logged or audited.

Examples:

```text
failed login
permission denied
role change
billing change
integration connected
integration disconnected
webhook signature failure
rate limit exceeded
suspicious file upload
unknown status fallback
```

Do not log secrets or sensitive payloads.

---

# 74. API Security Rule

Every API endpoint must enforce:

```text
authentication when required
authorization
organization scoping
input validation
rate limiting when sensitive
safe error responses
CSRF protection if cookie-based
CORS policy through configuration
```

Do not add public endpoints casually.

---

# 75. CORS and CSRF Rule

CORS and CSRF must be handled centrally.

Do not solve CORS in feature code.

Do not use insecure `no-cors` workarounds.

If cookie-based auth is used, CSRF must be correctly configured and tested.

---

# 76. Sensitive Data Rule

Sensitive data must be protected.

Sensitive data:

```text
tokens
secrets
customer messages
knowledge source content
uploaded documents
billing data
payment data
private organization data
integration credentials
AI prompts with confidential context
```

Rules:

```text
never log sensitive data
never send sensitive data to analytics casually
never expose secrets in API responses
minimize data returned to frontend
mask secrets when displayed
store secrets securely
```

---

# 77. Data Minimization Rule

API responses must return only what the frontend needs.

Bad:

```json
{
  "employee": {
    "id": "employee_1",
    "name": "Support Employee",
    "internal_prompt": "...",
    "provider_secret": "...",
    "raw_runtime_config": {}
  }
}
```

Good:

```json
{
  "employee": {
    "id": "employee_1",
    "name": "Support Employee",
    "status": "active",
    "category": "customer_support"
  }
}
```

Do not expose internal runtime configuration unless required and safe.

---

# 78. Admin Boundary Rule

Django admin is an internal tool, not a product UI replacement.

Admin may be used for:

```text
internal support
safe operational inspection
limited manual corrections
configuration review
```

Admin must not bypass critical invariants casually.

Sensitive admin actions should still use services or validated admin actions.

---

# 79. Testing Architecture Rule

Backend tests must cover:

```text
models and constraints
selectors
services
permissions
API endpoints
background tasks
state transitions
webhooks
billing behavior
AI execution boundaries
knowledge sync
workflow publish/execution
security guardrails
```

Tests must not only test happy paths.

---

# 80. Service Test Rule

Service tests must verify:

```text
valid action succeeds
invalid state fails
permission denied fails
organization boundary is enforced
audit record created
event emitted when needed
transaction behavior
background task scheduled when needed
safe error behavior
```

Services are the most important backend test target.

---

# 81. API Test Rule

API tests must verify:

```text
authentication required
permission required
organization scoping
valid request
invalid payload
not found
permission denied
safe error shape
response shape
side effects
```

Do not test only HTTP 200.

---

# 82. Background Job Test Rule

Celery tasks/services must be tested for:

```text
success
transient failure
non-retryable failure
idempotency
state transition
error code
organization scoping
safe logging
```

Do not leave background jobs untested if they affect product state.

---

# 83. AI Test Rule

AI-related backend must use deterministic tests where possible.

Test:

```text
prompt/config assembly
model routing policy
tool permission policy
retrieval filtering
review requirement logic
cost tracking
execution record creation
provider error mapping
fallback behavior
```

Do not require real model calls in normal unit tests.

Use provider fakes.

---

# 84. Webhook Test Rule

Webhook tests must verify:

```text
signature validation
invalid signature rejection
idempotency
safe account mapping
expected state update
unknown event handling
no secret logging
```

Webhook endpoints are high-risk.

---

# 85. Performance Rule

Backend performance must consider real product scale.

Avoid:

```text
N+1 queries
unbounded list endpoints
full-table scans
loading all organization data into memory
synchronous heavy file processing in request
AI provider calls inside DB transactions
long-running HTTP requests where background job is better
```

Use pagination, indexes, async jobs, and efficient selectors.

---

# 86. Pagination Rule

List endpoints must be paginated by default.

Paginate:

```text
employees
knowledge sources
workflows
activity logs
executions
reviews
members
usage records
invoices
conversations
```

Do not return unbounded lists.

---

# 87. N+1 Query Rule

Avoid N+1 queries.

Use:

```text
select_related
prefetch_related
annotate
batch loading
optimized selectors
```

API performance must be tested or reviewed for list endpoints.

---

# 88. Streaming Rule

Streaming should be used intentionally.

Potential use cases:

```text
AI draft generation preview
long-running assistant response where product requires it
real-time execution logs for internal operations
```

Do not stream high-risk final actions without review and persistence.

Streaming outputs still need safety, audit, and cost tracking.

---

# 89. Real-Time Updates Rule

Real-time updates are optional and should be justified.

Use polling first when simpler and sufficient.

Real-time candidates:

```text
knowledge sync progress
deployment progress
review queue updates
workflow execution status
conversation updates
```

If WebSockets/SSE are introduced, they must enforce auth, organization scope, and resource permissions.

---

# 90. API Versioning Rule

API versioning should be deliberate.

Do not break frontend contracts casually.

When changing response shape:

```text
coordinate frontend changes
maintain compatibility when needed
add migration path
update schema/tests
update SDK/client types if any
```

Stable product APIs reduce frontend fragility.

---

# 91. Backend-to-Frontend Contract Rule

The backend must provide frontend-friendly states and fields.

Good:

```json
{
  "status": "syncing",
  "status_label": "Syncing",
  "can_retry": true,
  "last_synced_at": null
}
```

Avoid requiring frontend to infer product state from technical internals.

Frontend should not parse Celery state, vector status, or provider-specific errors.

---

# 92. Internal vs Public API Rule

Separate public product APIs from internal service APIs.

Internal APIs must still enforce security.

Do not expose internal execution endpoints to normal frontend routes unless product requires it.

Internal endpoints should be documented and protected.

---

# 93. Configuration Rule

Configuration must be centralized and typed.

Config includes:

```text
environment
API base URLs
provider settings
model routing defaults
storage buckets
Celery settings
rate limits
feature flags
billing provider config
```

Do not read environment variables randomly across modules.

Do not put secrets in frontend-visible config.

---

# 94. Feature Flag Rule

Feature flags may control rollout but not security.

Feature flags can:

```text
enable beta UI
enable integration options
enable experimental AI behavior for allowed orgs
roll out workflow features
```

Feature flags cannot replace:

```text
permissions
authorization
billing enforcement
organization boundaries
```

Backend must still enforce access.

---

# 95. Release Safety Rule

Production releases must protect data and state.

Before release, verify:

```text
migrations are safe
background jobs are compatible
API changes are backward compatible or coordinated
feature flags are set correctly
no debug endpoints exposed
no mock data enabled
no secrets logged
new permissions are seeded
billing changes are tested
```

Do not ship backend changes that require manual guesswork to operate.

---

# 96. Failure Mode Rule

Every important backend flow must define failure behavior.

For each flow, define:

```text
what can fail
what state is persisted
whether user can retry
whether operation is safe to retry
what error code is returned
what activity/audit is recorded
what alert is triggered if needed
```

Silent failure is forbidden.

---

# 97. Ariyo Critical Flows

Critical backend flows:

```text
organization creation
member invitation
role/permission change
employee hire
employee configuration update
employee deployment
employee pause/resume
knowledge source connection
knowledge source sync
workflow creation
workflow publish
workflow execution
review approval/rejection
integration connection
webhook processing
billing update
usage recording
AI execution
```

These flows require extra architecture discipline, tests, logs, and safety.

---

# 98. Backend Review Checklist

Before shipping backend code, verify:

```text
Is organization scope enforced?
Are permissions checked?
Are inputs validated?
Are lifecycle transitions explicit?
Are writes inside transactions when needed?
Are background jobs idempotent?
Are errors product-safe?
Are API response shapes consistent?
Are sensitive values protected?
Are audit logs created for high-trust actions?
Are events emitted when needed?
Are query patterns indexed and efficient?
Are tests added for success and failure?
Are frontend contracts stable and clear?
Are AI/provider/tool boundaries respected?
Are billing/deployment/knowledge states server-confirmed?
```

If any answer is no, backend code is not production-ready.

---

# 99. Backend Decision Tree

Ask:

### Is this organization-owned data?

Scope every query by organization.

### Is this a write operation?

Use a service and check permissions.

### Is this a lifecycle state change?

Use explicit transition service and audit.

### Is this long-running?

Use Celery and durable product state.

### Is this high-risk?

Use transactions, idempotency, audit, and safe errors.

### Is this AI execution?

Record execution, cost, model, evidence, safety, and result.

### Is this knowledge retrieval?

Enforce organization, source permission, freshness, and evidence.

### Is this integration/webhook?

Verify authenticity, idempotency, and organization mapping.

### Is this billing?

Wait for server/provider confirmation and protect sensitive data.

### Is this data returned to frontend?

Minimize, shape, and use product language.

---

# 100. Forbidden Backend Patterns

Never ship:

```text
unscoped organization queries
permission checks only in frontend
business logic inside views
raw SQL without strong justification
unbounded list endpoints
manual token handling in feature code
secrets in logs
sensitive data in API responses
raw backend errors shown to frontend
lifecycle states as arbitrary strings
state changes by scattered assignment
Celery task state as product source of truth
background jobs without idempotency
retries for non-retryable failures
AI provider calls scattered across services
AI executions without records
knowledge retrieval without organization scope
workflow execution without durable history
billing success before provider/server confirmation
fake deployment active state
source ready state without sync confirmation
webhooks without signature validation when available
file uploads without server-side validation
unsafe uploaded file previews
cache keys missing organization scope
large feature flags used as authorization
mock data in production
migrations that destroy data casually
console/log statements with private payloads
```

---

# 101. Ariyo Backend Golden Rule

The backend is the source of truth for trust.

If the backend cannot prove who did what, with which data, under which permission, at what cost, and with what result, the feature is not production-ready.

---

# 102. Senior Backend Rule

Do not build Ariyo as a collection of endpoints.

Build Ariyo as a reliable operating system for safe, measurable AI employees.

---

# 103. Final Rule

Ariyo backend architecture is production-ready only when organization boundaries are enforced, permissions are authoritative, lifecycle states are explicit, long-running work is durable, AI execution is traceable, knowledge retrieval is scoped, workflow automation is auditable, billing is server-confirmed, APIs are product-shaped, errors are safe, tests cover critical flows, and operational visibility exists before scale demands it.
