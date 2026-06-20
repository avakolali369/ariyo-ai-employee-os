# Ariyo API Contracts Skill

Version: 1.0.0
Product: Ariyo
Purpose:
Act as a Principal API Architect, Backend Contract Guardian, Frontend Integration Reviewer, and AI Systems Boundary Designer for Ariyo.
Audience:
Codex Agents and AI-assisted development tools.
Priority:
Non-negotiable.

Dependencies:
- product-strategy.md
- domain-model.md
- backend-architecture.md
- ai-employee-architecture.md
- knowledge-rag.md
- workflow-automation.md
- ai-safety-evaluation.md
- monetization-billing.md
- deployment-ops.md
- frontend-state-data.md
- frontend-forms-validation.md
- coding-standards.md

If conflicts exist:
- product-strategy.md wins for product positioning and user value.
- domain-model.md wins for entity names, lifecycle states, ownership, and invariants.
- backend-architecture.md wins for backend service boundaries and infrastructure ownership.
- ai-employee-architecture.md wins for AI employee role behavior and lifecycle semantics.
- knowledge-rag.md wins for knowledge source, retrieval, and grounding behavior.
- workflow-automation.md wins for workflow trigger/action/execution semantics.
- ai-safety-evaluation.md wins for risk, review, safety gate, and evaluation requirements.
- monetization-billing.md wins for billing, entitlements, plan, invoice, usage, and AI cost semantics.
- deployment-ops.md wins for operational, observability, release, webhook, and incident safety.
- api-contracts.md wins for HTTP/API shape, request/response structure, errors, pagination, idempotency, webhooks, versioning, and integration contracts.

---

# Core Contract

Ariyo APIs are product contracts, not transport details.

An Ariyo API must be:

```text id="api-001"
explicit
stable
typed
version-aware
organization-scoped
permission-safe
frontend-safe
AI-safe
observable
idempotent where needed
recoverable
consistent across domains
aligned with the Ariyo domain model
```

APIs must not expose backend implementation details to frontend, customers, analytics, or AI employees.

Ariyo APIs must enable frontend and AI systems to understand:

```text id="api-002"
what happened
what state the resource is in
what the user can do next
what failed
what is safe
what needs review
what requires permission
what is still processing
what is server-confirmed
```

A working endpoint with unclear state, unsafe error shape, inconsistent naming, or leaky backend terminology is not production-ready.

---

# API Philosophy

Ariyo is an AI Employee Operating System.

The API must support:

```text id="api-003"
organizations and workspaces
members and permissions
AI employees
employee marketplace templates
employee deployments
business context
knowledge sources
channels and integrations
workflow automation
AI executions
human review
activity and audit history
AI cost and usage
billing and entitlements
operations and incident safety
```

The API must make dangerous behavior hard to trigger accidentally.

The API must make safe product states easy to render.

The API must make frontend code simple, not force frontend code to interpret backend internals.

---

# Official API Style

Ariyo should use resource-oriented HTTP APIs for product surfaces.

Default style:

```text id="api-004"
REST-like resource endpoints
JSON request and response bodies
standard HTTP methods
stable URL paths
server-owned IDs
structured errors
cursor pagination by default for dynamic lists
idempotency keys for high-risk mutations
webhooks for external event ingestion
background jobs for long-running work
server-confirmed lifecycle states
```

RPC-style endpoints are allowed only for domain actions that are not natural CRUD operations.

Examples of valid action endpoints:

```text id="api-005"
POST /employees/{employee_id}/deploy
POST /deployments/{deployment_id}/pause
POST /knowledge-sources/{source_id}/sync
POST /workflows/{workflow_id}/publish
POST /reviews/{review_id}/approve
POST /billing/subscription/change-plan
```

Do not force complex business actions into fake CRUD.

---

# Transport Boundary Rule

Frontend components must never depend on raw transport details.

Raw API details belong in:

```text id="api-006"
shared API client
feature API service files
query hooks
mutation hooks
DTO mappers
error mappers
schema validators
```

Frontend components should consume product-ready hooks and domain types.

Bad:

```tsx id="api-007"
const response = await fetch(`/api/v1/organizations/${organizationId}/employees`);
const employees = await response.json();
```

Good:

```tsx id="api-008"
const employeesQuery = useEmployeesQuery(filters);
```

---

# Base Path Rule

Use explicit versioned base paths.

Preferred:

```text id="api-009"
/api/v1
```

Examples:

```text id="api-010"
GET /api/v1/organizations/{organization_id}/employees
GET /api/v1/organizations/{organization_id}/knowledge-sources
POST /api/v1/organizations/{organization_id}/employees/{employee_id}/deploy
```

Do not use unversioned production APIs.

Avoid:

```text id="api-011"
/api/employees
/backend/employees
/django/employees
/fastapi/run-agent
```

Versioning is part of long-term product safety.

---

# Resource Naming Rule

Use product domain names from `domain-model.md`.

Preferred resource names:

```text id="api-012"
organizations
workspaces
members
roles
permissions
employees
employee-templates
deployments
knowledge-sources
business-context
channels
integrations
workflows
workflow-runs
tasks
activities
reviews
tool-calls
ai-executions
ai-cost
billing
entitlements
audit-logs
incidents
```

Avoid backend or implementation terms:

```text id="api-013"
agents
bots
celery-tasks
vector-indexes
embeddings
chunks as primary user-facing resources
llm-runs
prompts
workers
tenants
```

Backend terms may exist internally but must not leak into product API contracts unless the caller is an internal admin/ops service.

---

# URL Naming Rule

Use lowercase kebab-case path segments.

Good:

```text id="api-014"
/knowledge-sources
/employee-templates
/workflow-runs
/ai-executions
/ai-cost
```

Bad:

```text id="api-015"
/knowledgeSources
/KnowledgeSources
/knowledge_sources
/agentRuntime
```

URL names must be readable, stable, and product-aligned.

---

# HTTP Method Rule

Use HTTP methods consistently.

```text id="api-016"
GET:
read resource or list

POST:
create resource or execute business action

PATCH:
partial update

PUT:
replace full resource only when truly full replacement

DELETE:
delete, remove, or disconnect when irreversible/resource removal semantics apply
```

Do not use GET for state-changing operations.

Forbidden:

```text id="api-017"
GET /employees/{id}/deploy
GET /billing/change-plan
GET /knowledge-sources/{id}/sync
```

---

# Organization Scoping Rule

Organization-scoped resources must include organization scope in the path or be securely inferred by backend context.

Preferred explicit scope for product APIs:

```text id="api-018"
/api/v1/organizations/{organization_id}/employees
/api/v1/organizations/{organization_id}/knowledge-sources
/api/v1/organizations/{organization_id}/workflows
/api/v1/organizations/{organization_id}/billing/subscription
```

All organization-scoped responses must be authorized by backend.

Frontend must never rely on client-side filtering to enforce organization boundaries.

Bad:

```text id="api-019"
GET /api/v1/employees
```

returning employees from all organizations and expecting frontend to filter.

---

# Workspace Scope Rule

Use workspace scope only when workspace has meaningful product semantics.

Examples:

```text id="api-020"
/api/v1/organizations/{organization_id}/workspaces/{workspace_id}/employees
/api/v1/organizations/{organization_id}/workspaces/{workspace_id}/knowledge-sources
```

Do not introduce workspace path depth if Ariyo product has not established workspace-level isolation.

Organization scope is mandatory.

Workspace scope is conditional.

---

# ID Rule

IDs must be opaque, stable, and server-owned.

Preferred visible ID style:

```text id="api-021"
org_...
workspace_...
member_...
employee_...
employee_template_...
deployment_...
source_...
workflow_...
workflow_run_...
review_...
tool_call_...
ai_execution_...
invoice_...
```

Rules:

```text id="api-022"
frontend must not infer meaning from ID internals
IDs must not expose database sequence numbers
IDs must not contain sensitive data
IDs must be unique within expected scope
IDs in URLs must be validated
IDs in responses must match resource type
```

Bad:

```text id="api-023"
/organizations/1/employees/2
```

unless internal admin-only system and still protected.

---

# Timestamp Rule

Use ISO 8601 timestamps in UTC.

Preferred:

```json id="api-024"
{
  "created_at": "2026-06-17T15:42:31Z",
  "updated_at": "2026-06-17T16:01:10Z"
}
```

Rules:

```text id="api-025"
all timestamps are UTC
response field names use snake_case at API boundary
frontend maps to domain if needed
do not return localized formatted dates from API
include timezone only for user/business settings where relevant
```

Frontend formats dates for users.

API returns machine-safe timestamps.

---

# Field Naming Rule

API JSON fields use snake_case.

Example:

```json id="api-026"
{
  "employee_id": "employee_123",
  "display_name": "Customer Support Employee",
  "deployment_status": "active",
  "last_active_at": "2026-06-17T15:42:31Z"
}
```

Frontend domain objects may map to camelCase:

```ts id="api-027"
type Employee = {
  id: EmployeeId;
  displayName: string;
  deploymentStatus: DeploymentStatus;
  lastActiveAt: string | null;
};
```

API contracts should be consistent.

Mapping belongs in DTO mappers.

---

# DTO vs Domain Rule

API responses are DTOs.

Frontend UI consumes domain types.

Backend DTOs may include transport-level naming.

Frontend domain models must use product language.

Example DTO:

```ts id="api-028"
type EmployeeDto = {
  employee_id: string;
  display_name: string;
  deployment_status: "not_ready" | "ready" | "deploying" | "active" | "failed";
};
```

Example domain:

```ts id="api-029"
type Employee = {
  id: EmployeeId;
  name: string;
  deploymentStatus: EmployeeDeploymentStatus;
};
```

Never render DTOs directly in UI.

---

# Response Shape Rule

Use predictable response shapes.

Single resource:

```json id="api-030"
{
  "data": {
    "employee_id": "employee_123",
    "display_name": "Customer Support Employee"
  }
}
```

List response:

```json id="api-031"
{
  "data": [
    {
      "employee_id": "employee_123",
      "display_name": "Customer Support Employee"
    }
  ],
  "page": {
    "next_cursor": "cursor_abc",
    "previous_cursor": null,
    "has_next_page": true
  }
}
```

Mutation response:

```json id="api-032"
{
  "data": {
    "deployment_id": "deployment_123",
    "status": "deploying"
  }
}
```

Do not randomly switch between raw arrays, nested objects, and mixed envelopes.

---

# Empty List Rule

Empty lists return an empty array, not null.

Good:

```json id="api-033"
{
  "data": [],
  "page": {
    "next_cursor": null,
    "previous_cursor": null,
    "has_next_page": false
  }
}
```

Bad:

```json id="api-034"
{
  "data": null
}
```

Frontend empty states depend on reliable list semantics.

---

# Nullable Field Rule

Use null only for intentionally absent values.

Example:

```json id="api-035"
{
  "last_synced_at": null
}
```

Avoid omitting fields unpredictably.

Rules:

```text id="api-036"
required field with no value: null
optional field not part of this response contract: omit intentionally
lists: [] not null
objects: null only when absence is meaningful
booleans: false not null unless unknown is meaningful
```

Ambiguous missing data creates unsafe UI.

---

# Pagination Rule

Use cursor pagination by default for dynamic lists.

Preferred query:

```text id="api-037"
GET /employees?cursor=cursor_abc&limit=25
```

Preferred response:

```json id="api-038"
{
  "data": [],
  "page": {
    "next_cursor": null,
    "previous_cursor": "cursor_prev",
    "has_next_page": false
  }
}
```

Use offset pagination only for stable admin/reporting use cases where it is intentional.

Avoid unbounded list endpoints.

Forbidden:

```text id="api-039"
GET /employees/all
```

for production product UI.

---

# Limit Rule

List endpoints must enforce server-side limits.

Rules:

```text id="api-040"
default limit must exist
maximum limit must exist
invalid limit must return validation error or safe default
large exports must use export jobs, not huge list responses
```

Example:

```text id="api-041"
?limit=25
max_limit=100
```

Do not allow frontend to request unlimited records.

---

# Filtering Rule

Filters must be explicit, validated, and included in query keys on frontend.

Example:

```text id="api-042"
GET /employees?status=active&category=support&query=refund
```

Rules:

```text id="api-043"
unknown filters are rejected or ignored consistently
invalid values return validation error when user-correctable
filter names use product language
filters are documented
server applies permission filters
server never depends on frontend filtering for security
```

---

# Sorting Rule

Sorting must use allowlisted fields.

Example:

```text id="api-044"
GET /employees?sort=last_active_at:desc
```

Rules:

```text id="api-045"
only allowed sort fields
sort direction is asc or desc
invalid sort returns validation error or safe default
sorting must be stable when paginated
```

Do not allow arbitrary SQL-like sort expressions.

---

# Search Rule

Search parameters must be safe and bounded.

Example:

```text id="api-046"
GET /knowledge-sources?query=refund%20policy
```

Rules:

```text id="api-047"
minimum query length when needed
maximum query length
debounced frontend calls
server-side escaping
permission-aware results
no raw query logs containing sensitive text unless policy allows
```

Search text can contain sensitive business information.

Handle carefully.

---

# Include Expansion Rule

Use expansions carefully.

Example:

```text id="api-048"
GET /employees/{employee_id}?include=deployment,knowledge_health
```

Rules:

```text id="api-049"
includes are allowlisted
includes must not bypass permissions
includes must not create huge responses
avoid deeply nested includes
prefer dedicated endpoints for heavy sections
```

Do not return the entire product graph by default.

---

# Sparse Fields Rule

Sparse fieldsets are optional and should be added only when needed.

If used:

```text id="api-050"
GET /employees?fields=employee_id,display_name,deployment_status
```

Rules:

```text id="api-051"
fields are allowlisted
required identity fields should remain available
permission logic still applies
frontend must not rely on missing fields accidentally
```

Use sparingly.

---

# Error Shape Rule

All errors must use a consistent Ariyo error shape.

Preferred:

```json id="api-052"
{
  "error": {
    "code": "permission_denied",
    "message": "You do not have permission to deploy employees.",
    "category": "permission",
    "request_id": "req_123",
    "details": null
  }
}
```

Fields:

```text id="api-053"
code:
stable machine-readable error code

message:
safe user-facing or frontend-safe message

category:
one of validation, permission, authentication, not_found, conflict, rate_limit, server, unavailable, billing, safety

request_id:
traceable request identifier

details:
structured details when safe
```

Do not return random error formats per endpoint.

---

# Error Code Rule

Error codes must be stable and machine-readable.

Good:

```text id="api-054"
permission_denied
authentication_required
employee_not_found
validation_failed
billing_plan_limit_reached
deployment_not_ready
knowledge_source_sync_failed
workflow_publish_blocked
rate_limit_exceeded
idempotency_conflict
```

Bad:

```text id="api-055"
Error
Failed
Bad Request
403
DjangoError
CeleryTaskFailed
Exception
```

Frontend should switch on stable codes, not raw messages.

---

# Validation Error Rule

Validation errors must support field-level display.

Preferred:

```json id="api-056"
{
  "error": {
    "code": "validation_failed",
    "category": "validation",
    "message": "Review the highlighted fields.",
    "request_id": "req_123",
    "details": {
      "fields": {
        "reply_mode": [
          {
            "code": "invalid_choice",
            "message": "Choose a valid reply mode."
          }
        ],
        "knowledge_source_ids": [
          {
            "code": "required_for_automatic_replies",
            "message": "Add a knowledge source before enabling automatic replies."
          }
        ]
      },
      "form": []
    }
  }
}
```

Rules:

```text id="api-057"
field names match request payload fields
messages are safe and product-friendly
codes are stable
form-level errors supported
nested fields supported when needed
```

Do not return validation as a single unstructured string.

---

# Permission Error Rule

Permission errors must be distinct from empty data and generic failures.

Preferred:

```json id="api-058"
{
  "error": {
    "code": "permission_denied",
    "category": "permission",
    "message": "Only admins can deploy employees.",
    "request_id": "req_123",
    "details": {
      "required_permission": "deploy_employee"
    }
  }
}
```

Do not return empty lists for permission denial.

Do not expose sensitive role internals unless safe.

---

# Not Found Rule

Not found errors must be safe.

Preferred:

```json id="api-059"
{
  "error": {
    "code": "employee_not_found",
    "category": "not_found",
    "message": "This employee may have been removed or you may not have access.",
    "request_id": "req_123",
    "details": null
  }
}
```

When revealing existence is unsafe, backend may return not_found for unauthorized resources.

Frontend copy must remain safe.

---

# Conflict Error Rule

Use conflict errors for state conflicts.

Examples:

```text id="api-060"
deployment_already_active
workflow_version_conflict
source_sync_already_running
billing_subscription_change_in_progress
member_role_changed
```

Preferred:

```json id="api-061"
{
  "error": {
    "code": "workflow_version_conflict",
    "category": "conflict",
    "message": "This workflow changed since you opened it. Refresh before publishing.",
    "request_id": "req_123",
    "details": {
      "current_version": 8
    }
  }
}
```

Conflicts must help users recover safely.

---

# Rate Limit Error Rule

Rate limit errors must include retry information when available.

Preferred:

```json id="api-062"
{
  "error": {
    "code": "rate_limit_exceeded",
    "category": "rate_limit",
    "message": "Too many requests. Wait a moment and try again.",
    "request_id": "req_123",
    "details": {
      "retry_after_seconds": 60
    }
  }
}
```

Use HTTP 429.

Do not let frontend guess retry timing when backend knows it.

---

# HTTP Status Code Rule

Use status codes consistently.

```text id="api-063"
200:
successful read or action with immediate result

201:
resource created

202:
accepted async job/action

204:
successful no-content delete/update only when frontend does not need data

400:
malformed request

401:
authentication required/session expired

403:
authenticated but not permitted

404:
not found or hidden by access policy

409:
conflict/current state prevents action

422:
validation failed

429:
rate limited

500:
unexpected server error

503:
service unavailable/dependency unavailable
```

Do not use 200 for errors.

---

# Authentication Rule

Authentication must be handled by approved backend/API client architecture.

API contracts must define:

```text id="api-064"
how unauthenticated requests fail
how expired sessions fail
whether cookies or bearer tokens are used
how CSRF is handled when cookies are used
how frontend receives current user/session state
```

Feature endpoints must not require frontend components to manually attach auth headers.

---

# Current User Endpoint Rule

Provide a stable current user/session endpoint.

Example:

```text id="api-065"
GET /api/v1/me
```

Response should include safe session context:

```json id="api-066"
{
  "data": {
    "member_id": "member_123",
    "email": "user@example.com",
    "display_name": "Morteza",
    "organizations": [
      {
        "organization_id": "org_123",
        "name": "Ariyo Demo",
        "role": "owner"
      }
    ]
  }
}
```

Do not include secrets or raw permission internals unless needed.

---

# Permission Contract Rule

Frontend needs permission-aware UI.

Provide permissions in a stable product-oriented shape.

Example:

```json id="api-067"
{
  "data": {
    "organization_id": "org_123",
    "permissions": {
      "can_hire_employee": true,
      "can_deploy_employee": true,
      "can_manage_knowledge_sources": true,
      "can_publish_workflow": false,
      "can_manage_billing": false,
      "can_invite_members": true
    }
  }
}
```

Rules:

```text id="api-068"
frontend permissions are for UX only
backend still enforces every action
unknown permission defaults to false
permission response must be organization-scoped
permission changes should invalidate relevant frontend cache
```

---

# Entitlement Contract Rule

Billing entitlements must be separate from permissions.

Permissions answer:

```text id="api-069"
Is this user allowed?
```

Entitlements answer:

```text id="api-070"
Does this organization plan allow this capability?
```

Example:

```json id="api-071"
{
  "data": {
    "active_employee_limit": 10,
    "active_employee_count": 7,
    "knowledge_source_limit": 50,
    "workflow_limit": 25,
    "ai_usage_limit": {
      "included_credits": 1000000,
      "used_credits": 425000
    },
    "features": {
      "advanced_workflows": true,
      "human_review_queue": true,
      "custom_integrations": false
    }
  }
}
```

Do not mix entitlements into role permissions.

---

# Async Job Rule

Long-running operations must use async job patterns.

Examples:

```text id="api-072"
knowledge source sync
file processing
employee deployment
workflow publish validation
large export
bulk invitation
billing provider sync
large AI evaluation run
```

Start response:

```json id="api-073"
{
  "data": {
    "job_id": "job_123",
    "resource_id": "source_123",
    "resource_type": "knowledge_source",
    "status": "queued"
  }
}
```

HTTP status: 202 when accepted for processing.

---

# Job Status Rule

Provide status endpoints for async jobs or resource-level status fields.

Example:

```text id="api-074"
GET /api/v1/organizations/{organization_id}/jobs/{job_id}
```

Response:

```json id="api-075"
{
  "data": {
    "job_id": "job_123",
    "status": "running",
    "started_at": "2026-06-17T15:42:31Z",
    "finished_at": null,
    "progress": null,
    "safe_message": "Syncing source..."
  }
}
```

Rules:

```text id="api-076"
progress must not be fake
status must be finite
terminal states must stop polling
resource state must eventually reflect job result
errors must be safe
```

---

# Async Status Values Rule

Use finite async states.

Preferred:

```text id="api-077"
queued
running
succeeded
failed
cancelled
expired
```

For product resources, use product-specific lifecycle states from `domain-model.md`.

Do not expose Celery states directly to product frontend.

Forbidden:

```text id="api-078"
PENDING
STARTED
RETRY
FAILURE
SUCCESS
```

as user-facing states.

---

# Idempotency Rule

High-risk or retry-prone mutations must support idempotency.

Required for:

```text id="api-079"
deploy employee
invite member
change billing plan
create payment session
publish workflow
connect integration callback
submit review decision
start source sync
large file upload finalize
```

Request header:

```text id="api-080"
Idempotency-Key: idem_...
```

Rules:

```text id="api-081"
same key + same request returns same result
same key + different request returns idempotency_conflict
keys are scoped to organization/user/action where appropriate
server stores idempotency result for defined window
frontend disables duplicate submit anyway
```

Idempotency protects users and infrastructure.

---

# Mutation Response Rule

Mutations should return the updated resource or operation state needed by frontend.

Good:

```json id="api-082"
{
  "data": {
    "deployment_id": "deployment_123",
    "employee_id": "employee_123",
    "status": "deploying",
    "started_at": "2026-06-17T15:42:31Z"
  }
}
```

Avoid returning only:

```json id="api-083"
{
  "success": true
}
```

unless no product state update is needed.

Frontend needs confirmed state, not vague success.

---

# Server Confirmation Rule

API must support server-confirmed high-trust states.

States requiring server confirmation:

```text id="api-084"
employee active
source ready
workflow published
billing updated
integration connected
member invited
review approved
AI action sent
file processed
subscription changed
```

Frontend must not infer these from request start.

API must return or expose confirmed state.

---

# Optimistic Update Rule

API contract must identify operations where optimistic UI is unsafe.

Unsafe by default:

```text id="api-085"
billing changes
deployment activation
knowledge source readiness
workflow publish
permission changes
member removal
integration connection/disconnection
automatic reply enablement
AI action sent externally
```

Safe candidates:

```text id="api-086"
dismiss banner
collapse sidebar
change view preference
local favorite when reversible
```

Frontend must wait for server confirmation for high-trust states.

---

# Resource Lifecycle Rule

Resources with lifecycle states must expose state explicitly.

Example employee deployment:

```json id="api-087"
{
  "data": {
    "deployment_id": "deployment_123",
    "employee_id": "employee_123",
    "status": "ready_to_deploy",
    "blocking_reasons": []
  }
}
```

Rules:

```text id="api-088"
state values are finite
state names are product language
transitions are validated by backend
unknown states fail safely on frontend
blocking reasons are structured when user-actionable
```

---

# Blocking Reasons Rule

When an action cannot proceed, API should return structured blocking reasons.

Example:

```json id="api-089"
{
  "data": {
    "can_deploy": false,
    "blocking_reasons": [
      {
        "code": "missing_channel",
        "message": "Connect a channel before deploying this employee.",
        "action": "connect_channel"
      },
      {
        "code": "missing_knowledge_source",
        "message": "Add a knowledge source before enabling automatic replies.",
        "action": "add_knowledge_source"
      }
    ]
  }
}
```

Do not force frontend to rediscover backend readiness rules.

---

# Safe Message Rule

API may return safe product messages, but frontend copy may still map codes to final UX copy.

Rules:

```text id="api-090"
messages must not expose internals
codes must remain stable
frontend may localize or rewrite messages
server messages are fallback-safe
high-risk safe-state messages must be accurate
```

Do not return raw exception messages.

---

# Employee API Contract

Employee APIs must reflect product lifecycle.

Core endpoints:

```text id="api-091"
GET /organizations/{organization_id}/employees
GET /organizations/{organization_id}/employees/{employee_id}
GET /organizations/{organization_id}/employee-templates
GET /organizations/{organization_id}/employee-templates/{template_id}
POST /organizations/{organization_id}/employees
PATCH /organizations/{organization_id}/employees/{employee_id}
POST /organizations/{organization_id}/employees/{employee_id}/deploy
POST /organizations/{organization_id}/employees/{employee_id}/pause
POST /organizations/{organization_id}/employees/{employee_id}/resume
```

Employee responses should include:

```text id="api-092"
employee_id
name
role/category
description
status
deployment_status
risk_level
autonomy_level
review_policy
knowledge_health summary
primary channel summary
performance summary when lightweight
permissions/available actions when useful
```

Do not expose prompt internals or raw model configuration in normal employee responses.

---

# Employee Template API Rule

Marketplace employee templates are product resources.

Template response should include:

```text id="api-093"
template_id
name
category
business_promise
recommended_use_cases
required_setup
required_integrations
required_knowledge
risk_level
estimated_time_to_value
success_metrics
pricing_impact if relevant
preview capabilities
```

Do not call templates bots, plugins, or agents.

---

# Deployment API Rule

Deployment is high-trust.

Deploy request example:

```json id="api-094"
{
  "channel_id": "channel_123",
  "reply_mode": "require_review",
  "knowledge_source_ids": ["source_123"],
  "workflow_ids": ["workflow_123"]
}
```

Deploy response example:

```json id="api-095"
{
  "data": {
    "deployment_id": "deployment_123",
    "employee_id": "employee_123",
    "status": "deploying",
    "review_policy": "require_review",
    "started_at": "2026-06-17T15:42:31Z"
  }
}
```

Rules:

```text id="api-096"
validate readiness on backend
prevent duplicate deployment
support idempotency
return server-confirmed status
return safe errors
never return active until active
```

---

# Knowledge Source API Contract

Knowledge source APIs must be permission-aware and lifecycle-aware.

Core endpoints:

```text id="api-097"
GET /organizations/{organization_id}/knowledge-sources
POST /organizations/{organization_id}/knowledge-sources
GET /organizations/{organization_id}/knowledge-sources/{source_id}
PATCH /organizations/{organization_id}/knowledge-sources/{source_id}
DELETE /organizations/{organization_id}/knowledge-sources/{source_id}
POST /organizations/{organization_id}/knowledge-sources/{source_id}/sync
GET /organizations/{organization_id}/knowledge-sources/{source_id}/health
```

Source statuses:

```text id="api-098"
not_connected
connected
syncing
ready
needs_review
failed
outdated
disconnected
```

Do not expose embedding/index internals as product states.

---

# Knowledge Source Response Rule

Knowledge source response should include:

```text id="api-099"
source_id
name
type
status
last_synced_at
sync_started_at
sync_finished_at
health
connected_by
permission_scope
used_by_employees_count
blocking_reason when relevant
```

Do not include full source content in list responses.

Do not expose confidential document content unless endpoint explicitly requests it and user is authorized.

---

# RAG Retrieval API Rule

Retrieval APIs are internal by default.

Normal frontend should not call raw retrieval endpoints.

Internal retrieval contract must include:

```text id="api-100"
organization_id
employee_id
allowed source IDs
permission context
query
retrieval purpose
max results
freshness requirement
risk level
trace ID
```

Retrieval results must include:

```text id="api-101"
source reference
chunk reference
score
freshness metadata
permission metadata
citation-safe label
content excerpt when allowed
```

Prompt-injection and permission filtering must happen before model use.

---

# Workflow API Contract

Workflow APIs must support draft, validation, publish, execution, and audit.

Core endpoints:

```text id="api-102"
GET /organizations/{organization_id}/workflows
POST /organizations/{organization_id}/workflows
GET /organizations/{organization_id}/workflows/{workflow_id}
PATCH /organizations/{organization_id}/workflows/{workflow_id}
POST /organizations/{organization_id}/workflows/{workflow_id}/validate
POST /organizations/{organization_id}/workflows/{workflow_id}/publish
POST /organizations/{organization_id}/workflows/{workflow_id}/pause
GET /organizations/{organization_id}/workflow-runs
GET /organizations/{organization_id}/workflow-runs/{run_id}
```

Workflow publish is high-trust and must be server-validated.

---

# Workflow Version Rule

Workflows must be versioned.

Responses should include:

```json id="api-103"
{
  "workflow_id": "workflow_123",
  "draft_version": 7,
  "published_version": 6,
  "status": "draft"
}
```

Publish request should include expected version:

```json id="api-104"
{
  "expected_draft_version": 7
}
```

If stale:

```json id="api-105"
{
  "error": {
    "code": "workflow_version_conflict",
    "category": "conflict",
    "message": "This workflow changed since you opened it. Refresh before publishing.",
    "request_id": "req_123",
    "details": {
      "current_draft_version": 8
    }
  }
}
```

Version conflicts protect users from overwriting automation.

---

# Workflow Run Rule

Workflow run responses must be auditable.

Include:

```text id="api-106"
run_id
workflow_id
workflow_version
employee_id
trigger type
status
started_at
finished_at
steps summary
review required flag
failure reason when safe
AI cost summary when available
```

Statuses:

```text id="api-107"
queued
running
waiting_for_review
succeeded
failed
cancelled
skipped
```

Do not expose worker internals.

---

# Review API Contract

Human review APIs must be explicit and auditable.

Core endpoints:

```text id="api-108"
GET /organizations/{organization_id}/reviews
GET /organizations/{organization_id}/reviews/{review_id}
POST /organizations/{organization_id}/reviews/{review_id}/approve
POST /organizations/{organization_id}/reviews/{review_id}/request-changes
POST /organizations/{organization_id}/reviews/{review_id}/reject
```

Review actions must support idempotency.

Review response should include:

```text id="api-109"
review_id
employee_id
workflow_run_id or ai_execution_id
status
risk_level
submitted_output
supporting_sources
requested_action
created_at
reviewed_by
reviewed_at
```

Do not allow approval without backend permission and state validation.

---

# AI Execution API Contract

AI execution APIs are high-risk internal/product boundaries.

AI execution records should include:

```text id="api-110"
ai_execution_id
organization_id
employee_id
purpose
risk_level
input summary
retrieval summary
model family or class when safe
status
review_policy
output state
tool calls summary
cost summary
created_at
completed_at
```

Do not expose raw prompts by default.

Prompt visibility requires explicit admin/debug permission and redaction policy.

---

# Tool Call API Contract

Tool calls must be auditable.

Tool call records should include:

```text id="api-111"
tool_call_id
ai_execution_id
tool_name
risk_level
status
requested_at
completed_at
input summary
output summary
safe error
idempotency key when applicable
```

Never expose secrets in tool call logs.

Tool call execution must validate:

```text id="api-112"
employee permission
tool permission
organization scope
input schema
risk policy
review requirement
idempotency
```

---

# Billing API Contract

Billing APIs are high-trust.

Core endpoints:

```text id="api-113"
GET /organizations/{organization_id}/billing/subscription
GET /organizations/{organization_id}/billing/entitlements
GET /organizations/{organization_id}/billing/usage
GET /organizations/{organization_id}/billing/invoices
POST /organizations/{organization_id}/billing/subscription/change-plan
POST /organizations/{organization_id}/billing/portal-session
```

Rules:

```text id="api-114"
no optimistic billing success
billing changes are server-confirmed
provider errors are normalized
payment SDK secrets never exposed
billing data is organization-scoped
billing endpoints require billing permission
```

---

# AI Cost API Contract

AI cost APIs must be transparent and honest.

Example:

```text id="api-115"
GET /organizations/{organization_id}/ai-cost?from=2026-06-01&to=2026-06-17&group_by=employee
```

Response should include:

```text id="api-116"
period
currency or credit unit
total cost or estimated cost
estimated flag when relevant
breakdown by employee/workflow/model/purpose when allowed
not enough data state when relevant
last updated
```

Do not fabricate cost data.

Do not show stale cost as fresh.

---

# Activity API Contract

Activity is product history, not debug logs.

Core endpoint:

```text id="api-117"
GET /organizations/{organization_id}/activities
```

Activity event should include:

```text id="api-118"
activity_id
type
actor
subject
timestamp
summary
metadata safe for UI
related resource links
```

Examples:

```text id="api-119"
employee_deployed
source_synced
workflow_published
review_approved
billing_plan_changed
member_invited
```

Do not expose raw logs in activity feed.

---

# Audit Log API Contract

Audit logs are security records.

Core endpoint:

```text id="api-120"
GET /organizations/{organization_id}/audit-logs
```

Audit log response should include:

```text id="api-121"
audit_log_id
actor_id
actor_type
action
resource_type
resource_id
timestamp
ip or device metadata if policy allows
result
request_id
safe metadata
```

Audit logs require permission.

Audit logs must not expose secrets.

---

# File Upload API Contract

Uploads must use safe staged contracts.

Preferred flow:

```text id="api-122"
1. create upload intent
2. upload file to approved storage target
3. finalize upload
4. create/process knowledge source
5. poll source/job status
```

Create upload intent response:

```json id="api-123"
{
  "data": {
    "upload_id": "upload_123",
    "upload_url": "https://storage.example/upload",
    "method": "PUT",
    "headers": {
      "content-type": "application/pdf"
    },
    "expires_at": "2026-06-17T16:42:31Z",
    "max_size_bytes": 20971520
  }
}
```

Rules:

```text id="api-124"
validate file type
validate size
authorize organization
scan/process asynchronously
never trust frontend file metadata only
return safe processing states
```

---

# Webhook Contract Rule

Webhooks must be explicit, signed, idempotent, and observable.

Webhook sources:

```text id="api-125"
billing provider
integration providers
channel providers
file processing service
AI provider callbacks if used
```

Requirements:

```text id="api-126"
signature verification
replay protection
idempotency
raw payload storage policy
safe logging
event normalization
retry handling
dead-letter handling
alerting for repeated failure
```

Webhook processing must not trust provider payload blindly.

---

# Webhook Event Naming Rule

Normalize external webhook events into Ariyo domain events.

Good:

```text id="api-127"
billing_subscription_updated
billing_payment_failed
integration_connection_revoked
channel_message_received
knowledge_file_processed
```

Avoid leaking provider-specific names across product code.

Provider event names belong in integration adapters.

---

# Webhook Response Rule

Webhook endpoints should return quickly.

Rules:

```text id="api-128"
verify signature
store/normalize event
enqueue processing job
return 2xx once accepted
handle duplicates safely
```

Do not perform long-running business logic directly in webhook request path.

---

# API Versioning Rule

Use API versions for breaking changes.

Rules:

```text id="api-129"
non-breaking additive fields may stay in same version
removing fields requires versioning
renaming fields requires versioning
changing semantics requires versioning
changing error codes requires migration plan
changing state values requires migration plan
```

Frontend should tolerate unknown additive fields.

Frontend should fail safely on unknown state values.

---

# Deprecation Rule

Deprecation must be explicit.

API deprecation requires:

```text id="api-130"
replacement endpoint
migration period
logging of old usage
frontend migration plan
removal date when possible
no silent behavior change
```

Do not remove or change active API contracts casually.

---

# Backward Compatibility Rule

APIs should be backward-compatible when possible.

Safe changes:

```text id="api-131"
add optional response field
add new error code only when frontend fallback exists
add new enum value only if frontend has safe unknown fallback
add new endpoint
add new filter with default behavior unchanged
```

Unsafe changes:

```text id="api-132"
rename field
remove field
change type
change state meaning
change default sort unexpectedly
change pagination semantics
change permission behavior without rollout
```

---

# Internal vs Public API Rule

Separate internal service APIs from product frontend APIs.

Product APIs:

```text id="api-133"
frontend-safe
product language
permission-aware
stable
user-state oriented
```

Internal APIs:

```text id="api-134"
service-to-service
debuggable
may use technical terminology
must still be secure
generally not consumed by frontend
```

Do not expose internal AI/RAG/workflow execution endpoints to frontend unless intentionally designed.

---

# FastAPI and Django Boundary Rule

If Ariyo uses Django and FastAPI:

```text id="api-135"
Django may own core product CRUD, auth, organizations, billing, admin, persistence.
FastAPI may own AI execution, retrieval orchestration, streaming, evaluation, specialized model-facing APIs.
```

Contracts between them must be explicit.

Do not let frontend care which backend framework serves an endpoint.

Frontend API contracts must remain product-oriented.

---

# Streaming API Rule

Streaming is optional and must be justified.

Use streaming for:

```text id="api-136"
AI draft generation preview
long answer preview
live execution log for internal/admin views
```

Do not use streaming for high-trust final states.

Rules:

```text id="api-137"
streamed output is draft until finalized
final state must be server-confirmed
errors must be recoverable
partial output must be labeled
review policy still applies
```

A streamed message is not necessarily approved, sent, or complete.

---

# Real-Time Updates Rule

Use polling, server-sent events, or websockets intentionally.

Good candidates:

```text id="api-138"
deployment status
knowledge sync status
workflow run progress
review queue updates
channel message arrival
```

Rules:

```text id="api-139"
stop polling on terminal states
scope updates by organization
respect permissions
avoid noisy updates
support reconnect/fallback
avoid leaking data across organizations
```

---

# Request ID Rule

Every API response should include or expose request ID.

Options:

```text id="api-140"
X-Request-ID header
request_id in error body
request_id in debug-safe metadata
```

Request IDs connect frontend errors, backend logs, job logs, and incidents.

Do not expose stack traces.

Expose request IDs.

---

# Correlation ID Rule

Complex flows should carry correlation IDs.

Examples:

```text id="api-141"
deployment flow
knowledge sync
workflow run
billing webhook
AI execution
review approval
```

Correlation IDs help operations trace multi-step behavior.

---

# Observability Metadata Rule

API should provide safe metadata when useful.

Allowed:

```text id="api-142"
request_id
job_id
run_id
last_updated_at
source freshness
cache freshness
safe status
```

Forbidden in normal frontend responses:

```text id="api-143"
stack traces
SQL queries
raw prompts
provider secrets
internal hostnames
Celery worker names
Redis keys
embedding vector IDs
```

---

# Caching Contract Rule

Server and frontend caching must be compatible.

API should define:

```text id="api-144"
which resources are cacheable
which are high-trust and short-lived
which mutations invalidate which resources
which responses must not be cached
```

Frontend query keys must mirror API resource identity and filters.

Do not let stale permission/billing/deployment states drive unsafe UI.

---

# ETag and Conditional Requests Rule

Use ETags or version fields where concurrency matters.

Good candidates:

```text id="api-145"
workflow draft
business context
employee configuration
organization settings
long editable documents
```

Example:

```text id="api-146"
If-Match: "version_8"
```

or payload:

```json id="api-147"
{
  "expected_version": 8,
  "changes": {}
}
```

Concurrency must not silently overwrite user work.

---

# Security Header Rule

API should support secure browser integration through approved backend config.

Relevant concerns:

```text id="api-148"
CORS
CSRF
secure cookies
same-site policy
content security policy where applicable
rate limiting
request size limits
```

Frontend contracts must not work around security headers.

---

# Request Size Rule

APIs must enforce request size limits.

Large content should use:

```text id="api-149"
file upload flow
async import
chunked processing
background job
```

Do not accept massive JSON payloads for documents, logs, or knowledge content.

---

# Rate Limit Contract Rule

High-cost endpoints must have rate limits.

Examples:

```text id="api-150"
AI execution
knowledge retrieval
source sync
file upload
workflow publish validation
billing portal session creation
invites
search
```

Rate limit responses must be structured and user-recoverable.

---

# AI Cost Contract Rule

AI-consuming endpoints must be cost-aware.

Contracts should support:

```text id="api-151"
estimated cost before high-cost execution when useful
actual cost after execution
usage attribution
organization usage limit check
employee/workflow attribution
billing period
cost category
```

Do not hide expensive AI behavior behind vague endpoints.

---

# Safety Gate Contract Rule

AI/action endpoints must expose review or blocked states.

Example:

```json id="api-152"
{
  "data": {
    "ai_execution_id": "ai_execution_123",
    "status": "waiting_for_review",
    "risk_level": "high",
    "review_id": "review_123",
    "reason": "Automatic reply requires approval for this channel."
  }
}
```

Do not return success when action is waiting for review.

---

# Confidence Contract Rule

When AI confidence affects user trust, expose it as product-safe state.

Preferred product states:

```text id="api-153"
confident
needs_review
insufficient_context
blocked
```

Avoid exposing raw model scores directly to normal users unless product-defined.

Raw scores may be internal/evaluation metadata.

---

# Citation Contract Rule

When AI answers use knowledge, API should support citations.

Citation fields:

```text id="api-154"
source_id
source_name
source_type
excerpt when allowed
retrieved_at
last_synced_at
section title when available
confidence/freshness state when product-defined
```

Citations must be permission-filtered.

Do not cite sources the user cannot access.

---

# Prompt Injection Contract Rule

Knowledge and message ingestion APIs must preserve security metadata.

Contracts should support:

```text id="api-155"
content origin
trusted/untrusted source classification
source type
sync timestamp
sanitization status
injection risk signals
allowed use
```

AI execution should not treat retrieved user content as system instructions.

API contracts must support that separation.

---

# Integration Contract Rule

Integration APIs must expose connection lifecycle safely.

Core endpoints:

```text id="api-156"
GET /organizations/{organization_id}/integrations
POST /organizations/{organization_id}/integrations/{provider}/connect
POST /organizations/{organization_id}/integrations/{integration_id}/disconnect
GET /organizations/{organization_id}/integrations/{integration_id}/status
```

Statuses:

```text id="api-157"
not_connected
connecting
connected
needs_reauthorization
failed
disconnected
```

Do not expose tokens, secrets, or raw OAuth callback data.

---

# Channel Contract Rule

Channels represent where employees can communicate or act.

Channel responses should include:

```text id="api-158"
channel_id
type
name
status
connected_integration
allowed_employee_count
review requirement
last_activity_at
```

Channel actions must respect permissions and entitlements.

---

# External Message Contract Rule

Messages from external channels are untrusted.

Message ingestion must include:

```text id="api-159"
channel_id
external_message_id
sender metadata
received_at
content
attachments metadata
signature/verification state when provider supports it
```

Processing must be idempotent by external message ID.

Do not process duplicate provider messages as new customer messages.

---

# Public API Exposure Rule

If Ariyo later exposes customer-facing public APIs, they must have separate contracts.

Public API requirements:

```text id="api-160"
API keys or OAuth
scopes
rate limits
audit logs
versioning
webhook signing
idempotency
developer documentation
breaking change policy
```

Do not treat internal product APIs as public APIs accidentally.

---

# Admin API Rule

Admin/ops APIs must be isolated and strongly permissioned.

Admin APIs may expose operational details but must still protect:

```text id="api-161"
secrets
customer data
raw prompts
private knowledge content
billing provider data
internal infrastructure details
```

Admin API is not a shortcut for normal product UI.

---

# Frontend Error Mapping Rule

API errors must map cleanly to frontend states.

Frontend categories:

```text id="api-162"
validation → form field/form error
permission → permission state
not_found → not found state
conflict → refresh/retry state
rate_limit → wait and retry state
billing → billing safe-state error
safety → review/blocked state
server → recoverable error state
unavailable → service unavailable state
```

If API errors cannot be mapped, API contract is incomplete.

---

# Frontend Query Key Contract Rule

Each list/detail endpoint should map to a query key structure.

Example:

```ts id="api-163"
export const employeeQueryKeys = {
  all: (organizationId: OrganizationId) => ["organizations", organizationId, "employees"] as const,
  list: (organizationId: OrganizationId, filters: EmployeeFilters) =>
    [...employeeQueryKeys.all(organizationId), "list", filters] as const,
  detail: (organizationId: OrganizationId, employeeId: EmployeeId) =>
    [...employeeQueryKeys.all(organizationId), "detail", employeeId] as const,
};
```

API contract changes must consider query invalidation and cache identity.

---

# Mutation Invalidation Contract Rule

Mutations should define affected resources.

Example deploy employee affects:

```text id="api-164"
employee detail
employee list
deployment detail
activities
AI cost maybe later
entitlements maybe if active employee count changes
```

Codex must not blindly invalidate everything.

Contract should guide scoped invalidation.

---

# API Client Rule

Shared API client must handle:

```text id="api-165"
base URL
credentials/auth integration
JSON serialization
query param encoding
request IDs
error normalization
timeouts
abort signals
response parsing
retry policy where safe
```

Feature services should not duplicate these concerns.

---

# Timeout Rule

API client must support timeouts for user-facing requests.

Long-running work should use async job pattern, not huge request timeout.

Rules:

```text id="api-166"
normal API request should fail recoverably
AI/knowledge/workflow long jobs should return 202
frontend should show status and retry path
```

---

# Abort Signal Rule

Frontend API services must support request cancellation through abort signals where practical.

Example:

```ts id="api-167"
listEmployees(filters: EmployeeFilters, signal?: AbortSignal)
```

TanStack Query can pass signals.

Cancellation prevents stale responses and wasted work.

---

# Retry Rule

Retries must be safe.

Automatic retries are acceptable for:

```text id="api-168"
GET list/detail requests
transient 503
network failures
```

Avoid automatic retries for:

```text id="api-169"
billing mutations
deployment mutations
destructive actions
external sends
review decisions
member invitations
```

Use idempotency and explicit user retry for high-risk actions.

---

# API Documentation Rule

Every production endpoint must have a clear contract.

Minimum documentation:

```text id="api-170"
method
path
purpose
permission required
entitlement required when relevant
request schema
response schema
error codes
side effects
idempotency behavior
async behavior
cache/invalidation notes
security notes
```

Undocumented endpoints become unsafe dependencies.

---

# OpenAPI Rule

Ariyo should generate or maintain OpenAPI contracts when practical.

OpenAPI should reflect:

```text id="api-171"
request/response schemas
error schemas
auth requirements
pagination
validation errors
resource enums
versioning
```

Generated clients are allowed only if they preserve Ariyo frontend architecture and do not leak DTOs into UI.

---

# Contract Testing Rule

API contracts must be tested.

Test:

```text id="api-172"
response schemas
error shapes
validation errors
permission errors
idempotency behavior
pagination
filtering
sorting
webhook signature validation
async job lifecycle
state transitions
unknown status handling
```

Contract tests protect frontend/backend alignment.

---

# Mock Contract Rule

Frontend mocks must match API contracts.

Mock responses must use:

```text id="api-173"
realistic IDs
realistic lifecycle states
same error shape
same pagination shape
same nullability
same permission behavior
same async behavior when relevant
```

Do not create mocks that pass tests but cannot exist in production.

---

# API Review Checklist

Before shipping or consuming an endpoint, verify:

```text id="api-174"
Does the endpoint use product language?
Is organization scope explicit or safely inferred?
Is permission enforced by backend?
Are entitlements enforced when relevant?
Is the response shape consistent?
Are IDs opaque and typed?
Are timestamps ISO UTC?
Are fields named consistently?
Is pagination bounded?
Are filters/sorts validated?
Is error shape standardized?
Are validation errors field-mappable?
Are permission errors not empty states?
Are high-risk mutations idempotent?
Are long-running operations async?
Are lifecycle states finite?
Are blocking reasons structured?
Are backend internals hidden?
Are raw prompts/secrets excluded?
Are DTOs mappable to domain types?
Does frontend know what to invalidate?
Are tests/mocks aligned with contract?
```

If any answer is no, the API contract is not production-ready.

---

# API Decision Tree

Ask:

### Is this a resource?

Use REST-like resource endpoint.

### Is this a domain action?

Use explicit action endpoint with POST.

### Is this long-running?

Return 202 and expose job/resource status.

### Is this high-risk?

Require permission, idempotency, safe errors, and server confirmation.

### Is this organization-scoped?

Include or enforce organization scope.

### Is this list large or dynamic?

Use cursor pagination and bounded limits.

### Can validation fail?

Return structured field/form errors.

### Can permission fail?

Return permission error, not empty data.

### Does frontend need state?

Return updated product state, not only success true.

### Does this expose backend internals?

Map to product language before returning.

---

# Forbidden API Patterns

Never ship:

```text id="api-175"
unversioned production APIs
GET endpoints that mutate state
200 responses for errors
random error shapes
raw backend exception messages
raw Django/FastAPI/Celery errors in product API
raw arrays for paginated lists
unbounded list endpoints
frontend-only organization filtering
sequential database IDs exposed publicly
permission denied returned as empty list
validation errors as one generic string
billing/deployment/source ready success before server confirmation
optimistic high-trust mutation contracts
long-running work hidden behind blocking requests
polling endpoints with no terminal states
Celery task states exposed as product states
embedding/vector internals exposed as user states
raw prompts returned by default
secrets in responses
sensitive data in URLs
unsafe external URLs
webhooks without signature validation
webhooks without idempotency
public APIs without rate limits
feature APIs that depend on frontend auth header hacks
DTOs rendered directly in UI
mock API shapes that differ from production
breaking contract changes without versioning/migration
```

---

# Ariyo API Golden Rule

An API response should tell the product the truth in a safe, stable, typed, and user-actionable shape.

---

# Senior API Rule

Do not make the frontend reverse-engineer backend behavior.

Encode product state, permissions, validation, recovery, and lifecycle semantics directly into the API contract.

---

# Final Rule

Ariyo API contracts are production-ready only when every endpoint is organization-scoped, permission-safe, typed, version-aware, frontend-safe, AI-safe, observable, recoverable, and aligned with the domain model; high-risk actions require idempotency and server confirmation; errors are structured and user-recoverable; and backend internals never leak into the product experience.
