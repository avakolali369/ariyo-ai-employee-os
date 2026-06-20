# Ariyo Data Governance & Privacy Skill

Version: 1.0.0

Product: Ariyo

Purpose:
Act as a Data Governance Architect, Privacy Engineer, Security Product Lead, AI Data Policy Guardian, and Compliance-Aware Product Reviewer for Ariyo.

Audience:
Codex Agents and AI-assisted development tools building Ariyo.

Priority:
Non-negotiable.

Dependencies:
- product-strategy.md
- domain-model.md
- api-contracts.md
- backend-architecture.md
- ai-employee-architecture.md
- knowledge-rag.md
- workflow-automation.md
- ai-safety-evaluation.md
- prompt-tool-orchestration.md
- integration-ecosystem.md
- admin-permissions.md
- quality-assurance-system.md
- deployment-ops.md
- monetization-billing.md

If conflicts exist:
- data-governance-privacy.md wins for data handling, privacy, retention, deletion, export, consent, PII, AI data usage, auditability, and data minimization.
- admin-permissions.md wins for who may access data.
- backend-architecture.md wins for backend implementation architecture.
- ai-safety-evaluation.md wins for AI output safety gates.
- knowledge-rag.md wins for retrieval and knowledge sync mechanics, but this file wins for privacy constraints around knowledge data.
- deployment-ops.md wins for production operations mechanics, but this file wins for privacy and governance obligations.

---

# Core Contract

Ariyo data governance is not a compliance appendix.

Ariyo data governance is the trust architecture that decides what data may be collected, where it may live, who may access it, how long it may be retained, how AI employees may use it, how customers may export or delete it, and how every sensitive access can be audited.

Ariyo must never become a system where business knowledge, customer conversations, private files, integration data, billing data, AI traces, prompts, embeddings, or workflow outputs are copied, retained, logged, or reused without clear ownership and policy.

Ariyo must be privacy-by-design, organization-scoped, permission-aware, retention-aware, audit-ready, AI-safe, and deletion-capable from the beginning.

---

# Purpose

This skill defines how Ariyo must govern data across:

```text id="privacy-001"
organizations
workspaces
members
AI employees
business context
knowledge sources
uploaded files
retrieval indexes
embeddings
workflow executions
review queues
conversations
messages
tool calls
integrations
billing
analytics
logs
evaluation datasets
backups
exports
deletions
incident response
```

Ariyo handles business-critical and potentially sensitive organizational data.

Codex must design every data feature with privacy, ownership, minimization, retention, and auditability in mind.

---

# Core Governance Principle

Every piece of data in Ariyo must have:

```text id="privacy-002"
a clear owner
an organization scope
a purpose
a classification
a source
a retention policy
an access policy
a deletion policy
an export policy
an audit policy
an AI usage policy
```

If any of these are unclear, the data model is incomplete.

---

# Privacy-by-Design Principle

Privacy must be part of architecture, not added later.

Codex must prefer:

```text id="privacy-003"
collect less data
store less data
retain data for less time
expose less data in APIs
log less sensitive content
send less data to analytics
pass less data to AI models
persist less client state
use scoped access
use explicit purposes
make deletion possible
make export possible
make auditing possible
```

Data minimization is a product quality requirement.

---

# Data Ownership Rule

Every Ariyo data object must belong to an organization unless explicitly global.

Organization-scoped examples:

```text id="privacy-004"
AI employees
deployments
business context
knowledge sources
files
chunks
embeddings
channels
integrations
workflows
workflow executions
reviews
messages
activity logs
AI cost records
billing usage records
member roles
audit logs
```

Global examples must be rare:

```text id="privacy-005"
public marketplace templates
public plan definitions
static system configuration
approved global feature flags
```

Global data must never accidentally contain private customer data.

---

# Organization Isolation Rule

Ariyo must enforce strict organization isolation.

This applies to:

```text id="privacy-006"
database queries
API responses
query keys
background jobs
Celery tasks
Redis cache keys
vector indexes
file storage paths
logs
analytics events
billing records
webhooks
integration tokens
audit logs
exports
backups
AI traces
evaluation data
```

Forbidden:

```text id="privacy-007"
querying data without organization scope
caching organization data under global keys
using shared vector indexes without tenant filtering
including private organization data in global analytics payloads
showing previous organization state after organization switch
using unscoped background tasks for tenant data
```

Organization boundary failures are critical incidents.

---

# Workspace Scope Rule

If Ariyo supports workspaces inside an organization, workspace scope must be explicit.

Workspace-scoped data may include:

```text id="privacy-008"
workspace employees
workspace workflows
workspace channels
workspace knowledge sources
workspace members
workspace analytics
workspace permissions
```

Do not assume organization-wide access when workspace boundaries exist.

Workspace scope must be reflected in:

```text id="privacy-009"
API contracts
query keys
backend permissions
frontend state
analytics events
workflow execution
AI employee knowledge access
```

---

# Data Classification Rule

Every data type should be classified.

Recommended classifications:

```text id="privacy-010"
public
internal
customer_confidential
personal_data
sensitive_personal_data
credential_or_secret
billing_sensitive
AI_sensitive
operational_sensitive
audit_sensitive
```

Classification affects:

```text id="privacy-011"
access
logging
analytics
retention
export
deletion
AI model usage
support visibility
backup handling
incident severity
```

Unknown classification must default to more restricted handling.

---

# Personal Data Rule

Personal data may include:

```text id="privacy-012"
name
email
phone number
IP address
organization membership
role
activity history
conversation content
review decisions
support messages
billing contact details
integration account identifiers
```

Personal data must be:

```text id="privacy-013"
collected for a clear purpose
visible only to authorized users
excluded from unnecessary analytics
excluded from casual logs
exportable when appropriate
deletable or anonymizable when appropriate
retained only as long as needed
```

Do not treat member emails or customer messages as harmless metadata.

---

# Sensitive Data Rule

Sensitive data includes:

```text id="privacy-014"
auth tokens
refresh tokens
API keys
OAuth secrets
webhook secrets
integration credentials
payment details
private files
business documents
customer conversations
internal policies
legal documents
pricing contracts
security settings
raw AI prompts with private context
AI execution traces with private context
embeddings derived from private documents
```

Sensitive data must not be:

```text id="privacy-015"
logged casually
sent to analytics
stored in localStorage
exposed in URLs
included in frontend error messages
copied into test fixtures
used in demos
shown to unauthorized support users
used for model training without explicit policy
```

---

# Data Minimization Rule

Collect only what is required to deliver the product value.

Bad:

```text id="privacy-016"
collecting full company documents when a summary or selected source is enough
sending full employee profile data to a component that only needs name and status
including full message content in analytics events
storing entire API responses in audit logs
persisting full deployment payloads in browser storage
```

Good:

```text id="privacy-017"
store source metadata separately from content
send summary objects to list views
store redacted audit metadata where content is not needed
pass minimum required fields to AI tools
use IDs and counts in analytics instead of raw content
```

Data minimization reduces risk and improves product discipline.

---

# Purpose Limitation Rule

Data collected for one purpose must not be reused for another without policy.

Examples:

```text id="privacy-018"
knowledge source content used to answer organization questions must not automatically be used for global model training
customer conversations used for workflow execution must not automatically become marketing analytics content
billing contact details must not become growth analytics identifiers
support access logs must not become product usage metrics without governance
```

If a new purpose is needed, define it explicitly.

---

# AI Data Usage Policy

AI employees may use organization data only inside approved scope.

AI usage must respect:

```text id="privacy-019"
organization boundary
workspace boundary
employee role
employee scope
knowledge source permissions
channel permissions
workflow permissions
review policy
risk level
business context policy
retention policy
customer consent where relevant
```

The model must not receive data merely because it exists.

It may receive data only because the execution requires it and policy allows it.

---

# AI Training Policy Rule

Ariyo must distinguish:

```text id="privacy-020"
using customer data for that customer's AI employee execution
using customer data for retrieval inside that customer's organization
using anonymized aggregate metrics for product analytics
using customer data for evaluation
using customer data to improve global models
```

Default rule:

```text id="privacy-021"
Customer content must not be used to train or improve global models unless explicitly permitted by contract, settings, and policy.
```

Evaluation datasets must be redacted, synthetic, or explicitly approved.

---

# Prompt and Trace Privacy Rule

AI prompts, tool inputs, retrieved chunks, model outputs, and execution traces may contain sensitive data.

They must be governed as private operational data.

Rules:

```text id="privacy-022"
do not expose raw prompts to normal users by default
do not send raw traces to analytics
do not log full retrieved content unless required and protected
redact secrets from traces
restrict support access to traces
define retention for traces
include organization scope in trace records
make traces audit-ready when used for critical decisions
```

AI observability must not become a privacy leak.

---

# Embeddings Privacy Rule

Embeddings derived from private customer data are sensitive derived data.

Treat embeddings as customer data.

Rules:

```text id="privacy-023"
embeddings must be organization-scoped
vector indexes must enforce tenant filtering
embedding records must map to source/chunk/version
embedding deletion must follow source deletion
embedding rebuild must respect permissions
embedding storage must not be globally reused across customers
embedding metadata must not leak private source names unnecessarily
```

Deleting a knowledge source must delete or invalidate associated derived indexes.

---

# Knowledge Source Privacy Rule

Knowledge sources may contain confidential business information.

Each knowledge source must define:

```text id="privacy-024"
source owner
organization scope
workspace scope if any
source type
content classification
allowed AI employees
allowed workflows
allowed channels
sync status
freshness status
retention policy
deletion policy
export policy
audit events
```

Do not allow every AI employee to access every source by default.

Knowledge access must be intentionally granted.

---

# Business Context Privacy Rule

Business Context may include sensitive operational knowledge.

Examples:

```text id="privacy-025"
pricing policy
refund policy
customer segmentation
internal escalation rules
brand rules
sales qualification logic
support policy
forbidden claims
```

Business Context must be:

```text id="privacy-026"
versioned
permission-controlled
organization-scoped
AI-usage scoped
reviewable
auditable
excluded from public outputs unless appropriate
```

Do not expose internal business rules to customers unless intended.

---

# Conversation and Message Privacy Rule

Conversation and message data may contain personal and confidential information.

Rules:

```text id="privacy-027"
store only what is needed
scope by organization/channel/customer where appropriate
restrict access by role
avoid raw content in analytics
redact where possible for support and debugging
support retention/deletion policies
separate message content from metadata when useful
protect customer identifiers
```

Customer-facing channels require extra care.

---

# Review Queue Privacy Rule

Human review items may contain sensitive data.

Review access must be permission-controlled.

Review records must include:

```text id="privacy-028"
review item ID
organization ID
AI employee ID
risk level
reviewer ID
review decision
timestamp
action taken
safe summary
links to protected underlying content
```

Avoid exposing full sensitive content in review lists when a summary is enough.

---

# Audit Log Rule

Audit logs must be trustworthy and privacy-aware.

Audit logs should record:

```text id="privacy-029"
who acted
what action occurred
which organization/resource was affected
when it happened
source of action
permission context
result
safe metadata
```

Audit logs should not record unnecessary raw sensitive content.

Bad:

```text id="privacy-030"
full customer message body in every audit row
full API token in integration audit event
full billing payload in billing audit event
```

Good:

```text id="privacy-031"
integration_connected provider=slack account_id=redacted
workflow_published workflow_id=workflow_123 version=7
employee_deployed employee_id=employee_123 deployment_id=deployment_456
```

Audit logs must be tamper-resistant in production architecture.

---

# Logging Privacy Rule

Logs must not leak sensitive data.

Forbidden in logs:

```text id="privacy-032"
auth tokens
API keys
OAuth codes
webhook secrets
payment details
full customer messages
full knowledge source content
full prompts with private context
full retrieved chunks
private files
raw request bodies for sensitive endpoints
raw third-party webhook payloads with secrets
```

Use structured logs with safe metadata.

Good:

```text id="privacy-033"
knowledge_sync_failed organization_id=org_123 source_id=source_456 reason=timeout
```

Bad:

```text id="privacy-034"
knowledge_sync_failed payload={full_document_text...}
```

---

# Analytics Privacy Rule

Product analytics must use safe event payloads.

Allowed by default:

```text id="privacy-035"
feature used
event timestamp
organization plan tier
safe counts
safe category
success/failure state
latency bucket
cost bucket
risk level
activation step
```

Forbidden by default:

```text id="privacy-036"
message content
file content
knowledge chunks
prompt text
retrieved context
full email addresses unless approved
billing payment details
integration secrets
raw error bodies
```

Analytics must measure behavior without becoming a data warehouse of private customer content.

---

# Consent and Notice Rule

Users must understand when Ariyo processes sensitive data.

Sensitive moments requiring clear product communication:

```text id="privacy-037"
connecting integrations
uploading knowledge sources
syncing documents
enabling automatic replies
allowing AI employee to access a channel
enabling workflow automation
exporting data
deleting data
inviting members
changing billing
```

Copy must be clear, calm, and specific.

Do not hide data consequences in fine print.

---

# Data Retention Rule

Every data category must have a retention policy.

Retention should define:

```text id="privacy-038"
how long data is kept
whether retention is configurable
what triggers deletion
what happens after account closure
whether backups retain it temporarily
whether derived data is deleted
whether audit logs are retained longer
```

Data without retention policy is not production-ready.

---

# Recommended Retention Categories

Ariyo should distinguish:

```text id="privacy-039"
account data
organization configuration
business context
knowledge source content
knowledge chunks
embeddings
AI execution traces
conversation messages
review decisions
workflow execution logs
billing records
analytics events
audit logs
support access logs
error logs
backups
```

Different categories require different retention rules.

Do not use one blanket retention rule for everything.

---

# Deletion Rule

Deletion must include primary and derived data where appropriate.

Deleting a knowledge source should address:

```text id="privacy-040"
source metadata
source content
parsed text
chunks
embeddings
retrieval index entries
sync job records where appropriate
AI access permissions
source references in employee configuration
source references in workflow configuration
```

If some records remain for audit or legal reasons, the product must reflect that policy.

---

# Soft Delete vs Hard Delete Rule

Ariyo must distinguish:

```text id="privacy-041"
archive:
remove from active use, can restore

soft delete:
hide from active UI, retained temporarily or for audit

hard delete:
permanently remove where technically and legally allowed

anonymize:
remove identifying link while preserving aggregate value
```

Do not use “delete” when the action only archives.

---

# Data Export Rule

Customers should be able to export relevant organization data according to plan, role, and policy.

Exports may include:

```text id="privacy-042"
organization settings
members and roles
AI employee configurations
knowledge source metadata
business context versions
workflow definitions
review decisions
activity history
AI cost summaries
billing invoices
```

Sensitive exports must:

```text id="privacy-043"
require permission
be audited
show export scope
avoid including secrets
use safe file generation
expire download links
protect generated files
```

---

# Data Deletion Request Rule

Ariyo should support deletion or anonymization workflows for applicable data.

Deletion request handling should include:

```text id="privacy-044"
requester identity
permission check
data scope
estimated effect
confirmation
execution job
status tracking
audit log
completion proof
failure recovery
```

Deletion is not a simple frontend action.

It is a governed lifecycle.

---

# Backup Privacy Rule

Backups must be governed.

Define:

```text id="privacy-045"
backup retention
backup encryption
restore access
backup deletion delay
whether deleted data may remain in backups temporarily
who can restore backups
restore audit logs
cross-region storage policy
```

Product copy should not promise instant permanent deletion from backups unless true.

---

# Support Access Rule

Support access to customer data must be controlled.

Support access should be:

```text id="privacy-046"
permission-gated
purpose-limited
time-limited
audited
visible to customer when appropriate
redacted by default
approved for sensitive access
```

Support users should not have unrestricted database visibility.

---

# Internal Admin Access Rule

Internal admin access is high-risk.

Requirements:

```text id="privacy-047"
least privilege
strong authentication
audit logs
break-glass procedure
reason capture
sensitive field redaction
limited duration
approval for elevated access
incident review for misuse
```

Internal convenience must not override customer privacy.

---

# Integration Data Privacy Rule

Integration data belongs to the connected organization.

Rules:

```text id="privacy-048"
do not store integration data beyond necessary purpose
respect provider scopes
respect disconnect requests
revoke tokens on disconnect when possible
remove synced data according to policy
avoid logging webhook payloads
redact provider secrets
scope integration data to organization/workspace
```

Integration sync must not become uncontrolled data ingestion.

---

# Webhook Privacy Rule

Webhook payloads may contain sensitive data.

Rules:

```text id="privacy-049"
verify signature before processing
log only safe metadata
store only necessary payload fields
redact secrets
scope to organization
handle replay/idempotency
respect retention policy
```

Webhook debugging must not expose raw sensitive payloads to unauthorized users.

---

# Billing Privacy Rule

Billing data is sensitive.

Frontend and backend must not expose:

```text id="privacy-050"
full payment details
provider secrets
raw payment method data
private billing provider payloads
full webhook payloads
invoice data to unauthorized members
```

Billing UI must use server-confirmed, permission-safe responses.

Billing exports must be permission-gated and audited.

---

# AI Cost Privacy Rule

AI cost data can reveal business activity patterns.

AI cost data must be:

```text id="privacy-051"
organization-scoped
role-controlled
aggregated when appropriate
excluded from public/shared surfaces
handled carefully in analytics
connected to billing permissions when sensitive
```

Not every member should necessarily see cost breakdowns.

---

# File Storage Privacy Rule

Uploaded files must be protected.

Rules:

```text id="privacy-052"
organization-scoped storage paths
private object access
signed URLs with expiration
virus/malware scanning where required
file size/type restrictions
safe filename handling
metadata/content separation
deletion of derived data
access audit for downloads when needed
```

Never expose raw file storage URLs if they bypass access control.

---

# Client-Side Privacy Rule

The browser is not a safe place for sensitive persistence.

Forbidden by default:

```text id="privacy-053"
auth tokens in localStorage
knowledge source content in localStorage
business context drafts in localStorage unless explicitly safe and encrypted/approved
billing data in localStorage
integration secrets in client state
full customer messages in persisted client stores
AI prompts or traces in browser storage
```

Client persistence should be limited to safe UI preferences.

---

# URL Privacy Rule

URLs are logged, shared, and stored in browser history.

Do not put sensitive values in URLs.

Forbidden:

```text id="privacy-054"
tokens
OAuth codes after processing
invite secrets after acceptance
message content
file content
billing details
private customer data
raw JSON payloads
knowledge source text
```

Safe URL state:

```text id="privacy-055"
filters
pagination
sort
tab
view mode
safe IDs where route design requires them
```

---

# Secret Handling Rule

Secrets must be handled only by approved backend/security layers.

Secrets include:

```text id="privacy-056"
API keys
OAuth client secrets
webhook secrets
encryption keys
provider tokens
payment secrets
model provider keys
internal service credentials
```

Never expose secrets through:

```text id="privacy-057"
frontend env variables
client bundles
logs
analytics
test fixtures
public docs
error messages
browser storage
```

---

# Encryption Rule

Encryption is an architecture requirement for sensitive data.

Sensitive data should be protected:

```text id="privacy-058"
in transit
at rest
in backups
in file storage
in secret storage
in provider tokens
```

Do not implement ad hoc encryption in feature code.

Use approved infrastructure and security libraries.

---

# Data Access API Rule

APIs must return only data the caller is allowed to see.

Do not rely on frontend filtering to hide sensitive fields.

Bad:

```json id="privacy-059"
{
  "id": "member_123",
  "email": "admin@example.com",
  "role": "admin",
  "privateSecurityNotes": "...",
  "providerToken": "..."
}
```

Good:

```json id="privacy-060"
{
  "id": "member_123",
  "displayName": "Mina Rahimi",
  "email": "mina@example.com",
  "role": "admin"
}
```

Frontend-safe DTOs are mandatory.

---

# Redaction Rule

Use redaction when full data is not needed.

Examples:

```text id="privacy-061"
mina@example.com → m***@example.com
API key → ••••••••1234
card → •••• 4242
integration account → Slack workspace connected
```

Redaction must not break usability.

Use full values only for authorized workflows that require them.

---

# Anonymization and Pseudonymization Rule

Ariyo must distinguish:

```text id="privacy-062"
anonymized:
cannot reasonably identify the person or organization

pseudonymized:
identifier replaced but re-identification may be possible

redacted:
sensitive parts hidden but record remains identifiable
```

Do not claim anonymization when data is only pseudonymized.

---

# Evaluation Dataset Privacy Rule

AI evaluation datasets must be privacy-safe.

Preferred sources:

```text id="privacy-063"
synthetic examples
redacted examples
approved customer examples
internal demo organizations
public documentation
customer-consented datasets
```

Forbidden by default:

```text id="privacy-064"
raw customer conversations
raw uploaded documents
private business context
integration payloads
billing data
support tickets with PII
```

Evaluation quality must not require privacy violations.

---

# Prompt Injection Data Boundary Rule

Data retrieved from knowledge sources or integrations may be malicious or instruction-like.

Ariyo must treat external content as data, not instructions.

Rules:

```text id="privacy-065"
retrieved content cannot override system policy
retrieved content cannot grant permissions
retrieved content cannot request secrets
retrieved content cannot alter retention
retrieved content cannot disable review
retrieved content cannot expand tool access
```

This is both AI safety and data governance.

---

# Data Lifecycle Rule

Every important data object must define lifecycle states.

Examples:

```text id="privacy-066"
created
active
inactive
archived
pending_deletion
deleting
deleted
anonymized
retained_for_audit
```

Lifecycle must be represented consistently across backend, frontend, APIs, jobs, and audit logs.

---

# Data Provenance Rule

Ariyo should know where important data came from.

Track provenance for:

```text id="privacy-067"
knowledge chunks
business context entries
AI outputs
workflow decisions
tool results
integration records
billing usage records
evaluation examples
```

Provenance helps with trust, citations, deletion, debugging, and compliance.

---

# Data Freshness Rule

Data freshness affects AI correctness and privacy.

Ariyo must track freshness for:

```text id="privacy-068"
knowledge sources
business context
integration sync data
permissions
billing entitlements
workflow versions
AI employee configurations
```

Stale data must not be silently treated as current.

---

# Data Export Product UX Rule

Export UI must explain:

```text id="privacy-069"
what data will be included
who can request it
how long export generation may take
when the link expires
whether sensitive data is included
how the export is protected
```

Do not use vague copy like:

```text id="privacy-070"
Export all data
```

without scope and consequence.

---

# Data Deletion Product UX Rule

Deletion UI must explain:

```text id="privacy-071"
what will be deleted
what will be retained
what derived data will be removed
whether the action is reversible
how long deletion may take
what systems are affected
```

Good copy:

```text id="privacy-072"
Delete knowledge source

This removes the source from employee answers and deletes its searchable knowledge after processing completes. Audit records may be retained.
```

Avoid false promises.

---

# Privacy Settings Rule

Privacy-related settings must be clear and permission-controlled.

Settings may include:

```text id="privacy-073"
AI data usage policy
retention preferences
export permissions
support access policy
knowledge source access policy
automation review policy
analytics sharing preference
integration data retention
```

Settings must not imply control that backend does not enforce.

---

# Data Governance Review Checklist

Before shipping a data-related feature, verify:

```text id="privacy-074"
Is the data classified?
Is the organization scope clear?
Is workspace scope needed?
Is access controlled on backend?
Is the API response frontend-safe?
Is data minimized?
Is retention defined?
Is deletion behavior defined?
Is export behavior defined?
Is derived data covered?
Is AI usage allowed and scoped?
Are logs safe?
Are analytics safe?
Are URLs safe?
Is client storage safe?
Are secrets protected?
Is support access controlled?
Is audit logging appropriate?
Is product copy truthful?
Are tests needed for privacy behavior?
```

If any answer is no, the feature is not ready.

---

# Data Governance Decision Tree

Ask:

### Is this data customer-owned?

Scope it to organization and enforce access.

### Is this data personal or sensitive?

Minimize, protect, redact, and define retention.

### Will AI use this data?

Check employee scope, knowledge permissions, retrieval policy, and AI usage policy.

### Will this data be logged?

Log safe metadata only.

### Will this data be sent to analytics?

Send safe event fields only.

### Will this data be stored in browser?

Avoid unless it is safe UI preference data.

### Will this data appear in a URL?

Avoid unless it is safe navigation state.

### Can the customer delete it?

Define deletion and derived data behavior.

### Can the customer export it?

Define export scope and permissions.

### Is this data used for evaluation or training?

Use synthetic, redacted, or explicitly approved data.

---

# Forbidden Data Governance Patterns

Never ship:

```text id="privacy-075"
organization data without organization scope
shared vector index without tenant filtering
customer content in analytics events
customer content in casual logs
raw prompts in product analytics
raw retrieved chunks in logs
billing details in localStorage
knowledge source content in client storage
integration tokens in frontend code
secrets in frontend env variables
sensitive data in URLs
OAuth codes left in URLs after processing
raw webhook payloads logged
full API responses returned to unauthorized users
frontend-only permission filtering for sensitive fields
mock fixtures copied from real customer data
AI evaluation datasets with raw customer PII by default
embeddings retained after source deletion without policy
business context exposed to customers unintentionally
delete action that only archives without saying so
export all data without scope explanation
support access without audit
internal admin access without reason/audit
unknown classification treated as public
```

---

# Ariyo Data Governance Golden Rule

Customer data must be useful to the customer, not casually available to the system.

---

# Senior Privacy Rule

Do not ask “Can we store this?” first.

Ask “Why do we need this, who owns it, who may access it, how long do we need it, and how will we delete it?”

---

# Final Rule

Ariyo data governance is production-ready only when every sensitive data flow is organization-scoped, purpose-limited, permission-controlled, minimized, retention-aware, exportable where appropriate, deletable or anonymizable where appropriate, audit-ready, AI-usage-scoped, analytics-safe, logging-safe, and truthful in the product experience.
