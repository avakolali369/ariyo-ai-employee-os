# Ariyo Deployment & Operations Skill

Version: 1.0.0  
Product: Ariyo  
Purpose:  
Act as a Staff Platform Engineer, Production Operations Architect, Site Reliability Lead, Release Safety Owner, and AI Operations Guardian for Ariyo.

Audience:  
Codex agents, AI-assisted development tools, backend engineers, frontend engineers, DevOps engineers, product engineers, and technical leads working on Ariyo.

Priority: Non-negotiable.

Dependencies:

- product-strategy.md
- ai-employee-architecture.md
- backend-architecture.md
- knowledge-rag.md
- workflow-automation.md
- ai-safety-evaluation.md
- monetization-billing.md
- product-analytics-growth.md
- coding-standards.md

If conflicts exist:

- product-strategy.md wins for product direction and user value.
- ai-employee-architecture.md wins for AI employee lifecycle and role boundaries.
- backend-architecture.md wins for backend system boundaries.
- knowledge-rag.md wins for knowledge processing and retrieval operations.
- workflow-automation.md wins for workflow execution lifecycle.
- ai-safety-evaluation.md wins for safety gates and evaluation requirements.
- monetization-billing.md wins for billing and entitlement operations.
- product-analytics-growth.md wins for growth and product measurement.
- deployment-ops.md wins for production readiness, release safety, observability, incident handling, operational reliability, and runtime guardrails.

---

# Ariyo Deployment & Operations Core Contract

Ariyo operations is not server hosting.

Ariyo operations is the reliability layer that makes AI employees safe to run in real businesses.

Ariyo must operate as a trusted production system where deployments are reversible, incidents are diagnosable, background jobs are observable, AI execution is auditable, billing states are consistent, organization boundaries are protected, and user trust is preserved during failures.

Ariyo must not ship features that cannot be monitored, rolled back, debugged, scaled, or recovered.

---

# Operational Mission

Ariyo operations must ensure that:

```text id="ops-001"
users can rely on Ariyo during real business workflows

AI employees execute safely and predictably

background jobs complete or fail transparently

deployments do not silently break customer operations

incidents are detected quickly

failures degrade safely

data is backed up and recoverable

organization boundaries remain intact

billing and entitlement states stay consistent

AI cost and usage are observable

production changes are controlled and reversible
```

The product must be designed to survive real-world failure.

---

# Core Operations Principle

Every production feature must answer:

```text id="ops-002"
How is this deployed?

How is this monitored?

How does it fail?

How does the user recover?

How does the team debug it?

How is it rolled back?

How is data protected?

How are background jobs retried?

How are AI actions audited?

How are costs controlled?

How is customer trust preserved?
```

If these questions cannot be answered, the feature is not production-ready.

---

# Production Readiness Definition

Ariyo production readiness requires:

```text id="ops-003"
reliable deployments

safe migrations

environment configuration

secret management

health checks

structured logging

metrics

tracing where useful

error tracking

job monitoring

queue visibility

AI execution audit trail

RAG sync monitoring

workflow execution monitoring

billing state verification

backup and restore strategy

incident response process

rollback strategy

rate limiting

capacity awareness

security guardrails

privacy-safe telemetry
```

Ariyo cannot rely on hope as an operating model.

---

# Approved Production Stack Assumptions

Ariyo backend operations are expected to support:

```text id="ops-004"
Django:
core application, admin, ORM, auth, organization data, billing records

FastAPI:
AI execution APIs, streaming APIs, specialized low-latency services where justified

PostgreSQL:
source of truth for organizations, employees, workflows, billing, audit records

Redis:
cache, locks, queues, rate limits, ephemeral state

Celery:
background jobs, knowledge sync, workflow execution, scheduled processing

Object Storage:
uploaded files, generated exports, source documents, durable artifacts

Vector Index:
retrieval index for knowledge sources, scoped by organization and permissions

Observability Platform:
logs, metrics, traces, error tracking, alerts

CI/CD Pipeline:
tests, type checks, linting, build, migrations, deploy, rollback
```

Do not introduce operational technology casually.

---

# Environment Strategy

Ariyo must have explicit environments.

Recommended environments:

```text id="ops-005"
local:
individual development

preview:
short-lived branch or pull-request environment when available

staging:
production-like validation before release

production:
real customer data and real operations
```

Each environment must have:

```text id="ops-006"
clear purpose

separate configuration

separate secrets

separate databases unless intentionally shared read-only

separate queue workers

safe test data policy

clear deployment process

clear access control
```

Never test risky operations on production customer data without safeguards.

---

# Local Development Rule

Local development should be realistic but safe.

Local setup should support:

```text id="ops-007"
Django app

FastAPI service when used

PostgreSQL

Redis

Celery worker

Celery beat or scheduler when needed

object storage emulator or safe local substitute

mock AI provider mode

safe fixture data

email capture/sandbox

payment sandbox
```

Local development must not require production secrets.

---

# Staging Rule

Staging must be production-like for critical workflows.

Staging should validate:

```text id="ops-008"
API compatibility

frontend-backend contract

migrations

background jobs

knowledge sync

AI execution safety

workflow execution

billing sandbox flows

permissions

organization isolation

file uploads

observability

rollback readiness
```

Staging is not a dumping ground for broken code.

---

# Production Rule

Production must prioritize safety over speed.

Production changes must be:

```text id="ops-009"
reviewed

tested

observable

reversible when possible

rolled out intentionally

protected by feature flags when risk is high

compatible with existing data

safe for background jobs

safe for active users
```

Production is where user trust is either earned or lost.

---

# Configuration Management Rule

Configuration must be centralized, typed, validated, and environment-aware.

Configuration includes:

```text id="ops-010"
database URLs

Redis URLs

AI provider settings

model names

feature flags

rate limits

queue names

object storage buckets

email provider settings

payment provider settings

allowed origins

callback URLs

logging levels

monitoring DSNs
```

Invalid configuration must fail fast at startup.

Do not allow the app to run in a partially configured unsafe state.

---

# Secret Management Rule

Secrets must never be committed, logged, exposed in frontend bundles, or stored in unapproved systems.

Secrets include:

```text id="ops-011"
API keys

auth secrets

JWT signing keys

OAuth client secrets

payment provider secrets

webhook signing secrets

database credentials

Redis credentials

AI provider keys

object storage credentials

SMTP credentials
```

Secrets must be stored in approved secret management infrastructure.

Frontend environment variables are public and must not contain secrets.

---

# Secret Rotation Rule

Ariyo must support secret rotation without major downtime.

Rotation-sensitive secrets:

```text id="ops-012"
AI provider keys

payment webhook secrets

OAuth client secrets

JWT signing keys

API integration credentials

database credentials
```

Operational design should avoid hardcoding secrets in long-lived worker processes without restart strategy.

---

# Deployment Pipeline Rule

Every production deployment should pass a pipeline.

Pipeline should include:

```text id="ops-013"
dependency install

format or lint check

TypeScript check

frontend tests

backend tests

schema validation tests

security checks where available

build

migration plan check

artifact creation

deployment

post-deploy health checks

smoke tests
```

Do not deploy manually edited production code.

---

# Release Gate Rule

A production release must not proceed if:

```text id="ops-014"
tests fail

migrations are unsafe

secrets are missing

health checks fail

critical background workers are unavailable

error rate is already elevated

billing provider is unavailable for billing release

AI provider outage affects AI execution release

rollback path is unclear

feature lacks monitoring
```

Release gates protect users from avoidable incidents.

---

# Build Artifact Rule

Deploy immutable artifacts.

Avoid:

```text id="ops-015"
changing code directly on servers

installing untracked dependencies in production

building different code per server

editing static files manually

patching production without version control
```

Artifacts must be traceable to a commit.

---

# Versioning Rule

Each release must be identifiable.

Track:

```text id="ops-016"
commit SHA

build ID

release version

deployment time

deployer or automation identity

environment

migration version

frontend asset version

backend version

worker version
```

Logs and errors should include release version where possible.

---

# Database Migration Rule

Database migrations are high-risk operational changes.

Migrations must be:

```text id="ops-017"
reviewed

backward-compatible when possible

safe for existing data

safe for running workers

safe for rolling deploys when used

measured for expected runtime

non-blocking for large tables when possible

paired with rollback or mitigation plan
```

Never assume a migration is safe because it works on empty local data.

---

# Migration Safety Pattern

For risky schema changes, prefer expand-contract.

Pattern:

```text id="ops-018"
1. Add new nullable column or table.

2. Deploy code that writes both old and new if needed.

3. Backfill safely in batches.

4. Read from new structure after verification.

5. Remove old structure in a later release.
```

Avoid one-step destructive migrations.

---

# Data Backfill Rule

Backfills must be operationally safe.

Backfills should include:

```text id="ops-019"
batching

progress tracking

idempotency

retry safety

rate limiting

pause/resume capability for large jobs

logging

metrics

error handling

dashboards or visibility for critical backfills
```

Backfills must not silently corrupt customer data.

---

# Rollback Rule

Every release should have a rollback or mitigation strategy.

Rollback may include:

```text id="ops-020"
revert deployment

disable feature flag

pause worker queue

stop scheduled job

roll back frontend route exposure

switch model/provider configuration

disable integration

revert migration only if safe

restore data from backup when necessary
```

Do not deploy high-risk changes without a practical rollback plan.

---

# Feature Flag Rule

Use feature flags for risky or staged releases.

Good feature flag uses:

```text id="ops-021"
new AI employee type

new workflow action

new RAG pipeline

new billing behavior

new integration

new dashboard system

new deployment flow

model/provider change

high-risk UI rollout
```

Feature flags must not replace backend authorization.

Feature flags must be cleaned up after rollout.

---

# Feature Flag Cleanup Rule

Long-lived flags create complexity.

Every feature flag should have:

```text id="ops-022"
owner

purpose

rollout plan

removal condition

expected removal date or milestone

safe default
```

Do not leave dead feature flags forever.

---

# Health Check Rule

Ariyo services must expose health checks.

Health checks should distinguish:

```text id="ops-023"
process is alive

service is ready

database is reachable

Redis is reachable

critical dependencies are reachable when required

worker queue is operating

migrations are current
```

Do not make health checks too shallow or too heavy.

---

# Readiness vs Liveness Rule

Liveness means the process exists.

Readiness means the service can handle traffic safely.

A service may be alive but not ready when:

```text id="ops-024"
database is unavailable

migrations are incomplete

Redis is unavailable

critical config is missing

startup tasks are not complete

worker dependencies are unavailable
```

Traffic should only go to ready services.

---

# Smoke Test Rule

After deployment, run smoke checks.

Smoke checks should cover:

```text id="ops-025"
frontend loads

API responds

auth route works

organization context loads

basic query works

background worker can process a small safe job

health endpoint passes

critical route renders
```

For high-risk releases, add targeted smoke checks.

---

# Observability Principle

If Ariyo cannot observe a feature, Ariyo cannot operate it safely.

Observable features must expose:

```text id="ops-026"
logs

metrics

errors

status

latency

failure reason

ownership

correlation IDs

user-safe audit trail where relevant
```

Do not ship black-box workflows.

---

# Structured Logging Rule

Logs must be structured.

Log fields should include when relevant:

```text id="ops-027"
timestamp

level

service

environment

release

request_id

correlation_id

organization_id

user_id when safe

employee_id when relevant

workflow_id when relevant

job_id

operation

status

duration_ms

error_code
```

Do not log sensitive payloads.

---

# Logging Privacy Rule

Never log:

```text id="ops-028"
auth tokens

API keys

integration secrets

customer message content unless approved and redacted

knowledge source full content

uploaded file content

payment details

raw prompts with sensitive context unless approved and redacted

model outputs containing private data unless approved and redacted

full request bodies by default
```

Logs are operational tools, not data dumps.

---

# Error Tracking Rule

Production errors must be captured in an error tracking system.

Error events should include:

```text id="ops-029"
release version

environment

service

route or operation

safe user/org identifiers where approved

stack trace

request_id

correlation_id

safe metadata
```

Do not include sensitive payloads.

---

# Metrics Rule

Ariyo must collect system and product-critical metrics.

Core system metrics:

```text id="ops-030"
request rate

error rate

latency

p95 latency

p99 latency

queue depth

job duration

job failure rate

database query latency

Redis latency

worker availability

CPU and memory

storage usage
```

Core AI operations metrics:

```text id="ops-031"
AI execution count

AI execution success rate

AI execution failure rate

model latency

token usage

AI cost

safety block rate

human review rate

hallucination/evaluation failure rate where measurable

retrieval hit rate

low-confidence rate
```

---

# Alerting Rule

Alerts must be actionable.

Alert on:

```text id="ops-032"
elevated error rate

critical route failure

API latency degradation

worker queue backlog

job failure spike

knowledge sync failure spike

workflow execution failure spike

AI provider outage

billing webhook failures

payment provider failures

security-sensitive anomaly

database connection exhaustion

disk/storage threshold

backup failure
```

Avoid noisy alerts that no one responds to.

---

# Alert Severity Rule

Use severity levels.

Recommended:

```text id="ops-033"
SEV1:
major production outage, data loss risk, billing broken, security incident, AI employees acting unsafely

SEV2:
major feature unavailable, significant customer impact, workflow executions failing broadly

SEV3:
partial degradation, isolated errors, non-critical background jobs delayed

SEV4:
minor issue, warning, investigation needed, no immediate customer impact
```

Severity determines response urgency.

---

# Dashboard Rule

Ariyo operations should have dashboards for:

```text id="ops-034"
API health

frontend health

worker queues

knowledge sync

AI executions

workflow executions

billing webhooks

RAG retrieval

model provider latency/cost

background job failures

organization-level incident investigation
```

Dashboards must support diagnosis, not decoration.

---

# Traceability Rule

Critical operations must be traceable across services.

Use correlation IDs for:

```text id="ops-035"
HTTP request

background job

AI execution

workflow execution

knowledge sync

billing webhook

integration callback

file upload processing
```

A single customer issue should be traceable from UI action to backend job to final state.

---

# Audit Trail Rule

High-trust actions must create audit records.

Audit records should exist for:

```text id="ops-036"
employee deployment

automatic reply enablement

workflow publish

workflow delete

knowledge source connect/disconnect

integration connect/disconnect

member invite/removal

role change

billing change

AI employee autonomy change

safety policy override

manual approval/rejection
```

Audit records must be immutable or append-only where practical.

---

# Audit Record Content Rule

Audit records should include:

```text id="ops-037"
organization_id

actor_user_id or system actor

action

target_type

target_id

previous state when safe and useful

new state when safe and useful

timestamp

request_id or correlation_id

source IP/user agent when approved

reason when provided
```

Do not store sensitive full payloads unless necessary and approved.

---

# Background Job Principle

Background jobs are production workflows.

They must be observable, idempotent, retry-safe, and recoverable.

Ariyo background jobs include:

```text id="ops-038"
knowledge source sync

file parsing

embedding/index updates

workflow execution

AI employee execution

scheduled analytics aggregation

billing reconciliation

email notifications

integration sync

webhook processing

cleanup jobs
```

Background jobs must not be invisible side effects.

---

# Celery Worker Rule

Celery workers must be configured intentionally.

Consider:

```text id="ops-039"
queue separation

concurrency

prefetch settings

time limits

soft time limits

retry policy

dead-letter handling where available

idempotency

logging

metrics

memory behavior

worker restart strategy
```

Do not put all jobs into one undifferentiated queue forever.

---

# Queue Separation Rule

Use separate queues when workloads differ.

Recommended queue categories:

```text id="ops-040"
default:
normal app tasks

knowledge:
file parsing, sync, embeddings, indexing

ai_execution:
AI employee execution and model calls

workflow:
workflow action execution

billing:
billing webhook and reconciliation

notifications:
emails and user notifications

maintenance:
cleanup, aggregation, backfills
```

Queue separation prevents one workload from starving another.

---

# Job Idempotency Rule

Background jobs must be idempotent whenever possible.

A job is idempotent when retrying it does not create duplicate harmful effects.

Required for:

```text id="ops-041"
webhook processing

billing events

workflow execution steps

knowledge sync stages

file processing

email sending where possible through dedupe keys

integration sync

employee deployment state transitions
```

Retries happen in production.

Design for them.

---

# Retry Policy Rule

Retries must be intentional.

Define:

```text id="ops-042"
which errors are retryable

which errors are permanent

max retries

backoff strategy

jitter

retry visibility

final failure state

user-facing recovery path when needed
```

Do not retry permanent validation or permission errors.

Do not retry dangerous actions blindly.

---

# Dead Job Rule

Jobs that exhaust retries must not disappear.

Dead jobs need:

```text id="ops-043"
final failure state

logged error

metric increment

alert when critical

admin visibility when useful

manual retry path when safe

user-facing status when product-relevant
```

Silent job death breaks trust.

---

# Job State Rule

Long-running product jobs need persisted state.

Examples:

```text id="ops-044"
knowledge sync:
queued, processing, ready, failed, needs_review, outdated

workflow execution:
queued, running, waiting_for_review, completed, failed, cancelled

AI execution:
queued, retrieving_context, generating, validating, waiting_for_review, completed, blocked, failed

file processing:
uploaded, parsing, processed, failed
```

State must be visible to product UI when relevant.

---

# Job Timeout Rule

Every background job must have timeout expectations.

Define:

```text id="ops-045"
expected duration

soft timeout

hard timeout

what happens on timeout

whether retry is safe

how user sees timeout

whether support/admin can inspect it
```

Long-running jobs without timeout are operational risk.

---

# Scheduled Job Rule

Scheduled jobs must be observable and safe.

Examples:

```text id="ops-046"
usage aggregation

billing reconciliation

knowledge freshness checks

stale sync detection

workflow schedule triggers

cleanup expired invitations

cleanup temporary files

AI cost aggregation
```

Scheduled jobs need:

```text id="ops-047"
owner

schedule

idempotency

last run state

failure visibility

runtime metrics

safe retry behavior
```

---

# AI Operations Principle

AI execution must be operated as a production subsystem.

AI operations require:

```text id="ops-048"
model configuration control

prompt/version tracking

retrieval version tracking

input/output audit trail when safe

safety gate visibility

latency metrics

cost metrics

failure metrics

provider error handling

fallback strategy

human review queue
```

AI behavior that cannot be diagnosed cannot be trusted.

---

# Model Configuration Rule

Model settings must be centrally controlled.

Track:

```text id="ops-049"
provider

model

temperature

max tokens

timeout

retry policy

fallback model

cost tier

safety policy version

prompt version

retrieval policy version
```

Do not hardcode model names randomly in feature code.

---

# Prompt Versioning Rule

Operationally important prompts must be versioned.

Version:

```text id="ops-050"
system prompts

employee role prompts

tool instructions

safety prompts

output format prompts

review prompts

RAG grounding prompts
```

When AI behavior changes, Ariyo must know what changed.

---

# AI Execution Audit Rule

AI executions must have safe audit records.

Record:

```text id="ops-051"
execution_id

organization_id

employee_id

workflow_id when relevant

channel_id when relevant

trigger source

model configuration version

prompt version

retrieval version

safety policy version

status

latency

token usage

cost estimate

review state

final action outcome

error category when failed
```

Avoid storing sensitive full content unless product, privacy, and security policy allow it.

---

# AI Provider Failure Rule

AI provider failures must degrade safely.

Possible fallback behavior:

```text id="ops-052"
retry with backoff

use fallback model when approved

route to human review

pause automation

show delayed state

fail safely with explanation

preserve user input

notify admin if repeated
```

Do not silently produce lower-quality unsafe responses.

---

# AI Cost Operations Rule

AI cost must be monitored operationally.

Track:

```text id="ops-053"
cost by organization

cost by employee

cost by workflow

cost by model

cost by knowledge source operation

cost by failed execution

cost by review mode vs automatic mode

cost per successful outcome
```

Ariyo should detect cost spikes.

Cost runaway is an incident risk.

---

# Cost Spike Rule

Alert or limit when AI cost spikes abnormally.

Possible causes:

```text id="ops-054"
infinite workflow loop

retry storm

bad prompt causing long outputs

large retrieval context

provider issue

abusive organization behavior

bug in scheduled task

unexpected high usage
```

Cost controls protect both Ariyo and customers.

---

# Knowledge Operations Rule

Knowledge sync is production infrastructure.

Knowledge operations must monitor:

```text id="ops-055"
sync queue depth

sync duration

parse failure rate

embedding failure rate

index update failure rate

source ready rate

source outdated rate

permission filter failures

retrieval latency

retrieval empty result rate

citation availability
```

Knowledge failure directly affects AI employee quality.

---

# Knowledge Sync Recovery Rule

Failed knowledge sync must be recoverable.

Recovery options:

```text id="ops-056"
retry sync

reprocess file

rebuild index

mark source needs review

pause source usage

show source failed state

notify admin when repeated

fall back to previous good index when safe
```

Never mark a failed source as ready.

---

# Index Versioning Rule

Vector or retrieval indexes must be version-aware.

Track:

```text id="ops-057"
source version

chunking version

embedding model version

index version

last successful sync

current active index

previous good index when retained
```

This allows rollback and diagnosis.

---

# Workflow Operations Rule

Workflow execution must be observable and controlled.

Track:

```text id="ops-058"
workflow_id

workflow_version

trigger event

execution_id

current step

status

started_at

finished_at

retry count

waiting_for_review state

actor

AI employee involved

actions attempted

actions completed

failure reason
```

Workflow execution cannot be a hidden chain of side effects.

---

# Workflow Version Rule

Running workflows must use a specific version.

When workflow definition changes:

```text id="ops-059"
new executions use new version

running executions either finish old version or migrate safely

audit trail records version

rollback is possible by republishing prior version
```

Do not mutate live workflow definitions in a way that makes executions ambiguous.

---

# Workflow Loop Protection Rule

Ariyo must prevent automation loops.

Controls:

```text id="ops-060"
max executions per workflow per time window

max steps per execution

max retries

max AI calls per execution

loop detection

rate limits

cooldown windows

admin alerts
```

Workflow loops can create customer harm and AI cost spikes.

---

# Webhook Operations Rule

Webhooks must be secure and idempotent.

Webhook handling requires:

```text id="ops-061"
signature verification

idempotency key

raw body handling where required

event storage

retry-safe processing

out-of-order event handling

safe logging

alerting on repeated failure

separate billing queue for billing events
```

Webhook events are not trusted until verified.

---

# Billing Operations Rule

Billing operations must be extra conservative.

Billing must support:

```text id="ops-062"
webhook verification

idempotent event processing

reconciliation jobs

entitlement sync

invoice state tracking

subscription state tracking

payment failure handling

plan change audit trail

server-confirmed UI state

safe rollback or support intervention path
```

Never show billing success before server confirmation.

---

# Entitlement Operations Rule

Entitlements must be derived from trusted billing state.

Entitlements include:

```text id="ops-063"
active employee limit

workflow limit

knowledge source limit

AI usage limit

integration availability

advanced analytics access

review/automation capabilities
```

Frontend gating is not enough.

Backend must enforce entitlements.

---

# Integration Operations Rule

Third-party integrations must be operated carefully.

Track:

```text id="ops-064"
connection status

auth expiration

sync status

last successful sync

failure reason

rate limits

webhook delivery

permission scopes

disconnect events
```

Integration failures must not create unsafe AI behavior.

---

# Rate Limit Operations Rule

Rate limits protect Ariyo and customers.

Rate limit:

```text id="ops-065"
login attempts

API requests

AI executions

workflow triggers

knowledge sync retries

file uploads

billing-sensitive actions

integration callbacks when needed

admin actions when abuse risk exists
```

Rate limit responses must be user-safe and machine-readable.

---

# Abuse Detection Rule

Ariyo should detect suspicious or harmful usage.

Signals:

```text id="ops-066"
unusual AI execution volume

workflow loop patterns

repeated failed auth

large upload spikes

cost spikes

permission probing

integration callback anomalies

excessive failed billing actions

prompt-injection attempts
```

Abuse detection should respect privacy and avoid over-collection.

---

# Backup Rule

Ariyo must have backups for critical data.

Critical data includes:

```text id="ops-067"
organizations

users and memberships

AI employees

workflows

knowledge source metadata

billing records

audit logs

permissions

configuration records

uploaded source documents when product requires durability
```

Backups must be encrypted and access-controlled.

---

# Restore Rule

Backups are only useful if restore works.

Ariyo must define:

```text id="ops-068"
restore process

restore testing cadence

RPO

RTO

who can perform restore

how customer data isolation is preserved

how object storage is restored

how vector indexes are rebuilt or restored

how audit trail is preserved
```

Untested backups are not a recovery plan.

---

# RPO and RTO Rule

Define recovery objectives.

RPO:
maximum acceptable data loss.

RTO:
maximum acceptable downtime.

Different systems may have different targets:

```text id="ops-069"
auth and organization data:
very low tolerance

billing records:
very low tolerance

workflow definitions:
low tolerance

AI execution logs:
medium depending on policy

vector indexes:
can often be rebuilt if source documents are safe

temporary files:
low durability requirement
```

Know what must be restored and what can be rebuilt.

---

# Object Storage Rule

Uploaded files and generated artifacts must be stored safely.

Rules:

```text id="ops-070"
private by default

organization-scoped access

signed URLs when needed

expiration for temporary links

virus/malware scanning when product requires it

file type validation

lifecycle policy for temporary files

encryption at rest

access logging where available
```

Do not expose public buckets casually.

---

# Data Retention Rule

Ariyo must define retention policies.

Retention applies to:

```text id="ops-071"
AI execution logs

audit logs

uploaded files

knowledge chunks

conversation history

workflow executions

billing records

analytics events

error logs

system logs
```

Retention should balance product value, legal needs, privacy, and cost.

---

# Data Deletion Rule

Deletion must be operationally correct.

When deleting organization data, consider:

```text id="ops-072"
primary database rows

object storage files

vector indexes

cached data

analytics data

logs where policy allows

backups according to retention policy

billing records where legally required

audit records where required
```

Deletion is not just removing a UI card.

---

# Privacy Operations Rule

Operational systems must minimize sensitive data exposure.

Privacy guardrails:

```text id="ops-073"
redact logs

minimize analytics payloads

limit support access

audit admin access

use least privilege

avoid storing raw AI prompts unless needed

avoid storing full retrieved context unless approved

separate customer content from operational metadata where practical
```

Operations must not become a privacy leak.

---

# Access Control Operations Rule

Operational access must be controlled.

Rules:

```text id="ops-074"
least privilege

role-based access

MFA for production systems

audit admin access

separate production and staging access

no shared admin accounts

no production database access by default

break-glass access documented and audited
```

Production access is a liability and must be minimized.

---

# Admin Tooling Rule

Admin tools must be safe.

Admin tools may support:

```text id="ops-075"
inspect organization status

inspect job status

retry failed sync

pause workflow

view safe audit logs

reconcile billing

inspect integration connection

trigger reindex

view AI cost summary
```

Admin tools must not expose secrets or unnecessary private content.

Admin actions must be audited.

---

# Support Operations Rule

Support workflows must preserve privacy and trust.

Support tooling should show:

```text id="ops-076"
organization health

feature status

safe job status

billing status summary

recent safe audit events

error categories

recommended recovery actions
```

Support should not require reading customer private content unless explicitly approved and audited.

---

# Incident Response Principle

Incidents are expected in production.

Ariyo must respond with speed, clarity, and honesty.

Incident response must prioritize:

```text id="ops-077"
customer safety

data protection

service restoration

containment

clear communication

root cause analysis

prevention of recurrence
```

Do not hide incidents behind vague errors.

---

# Incident Lifecycle Rule

Incident lifecycle:

```text id="ops-078"
detection

triage

severity assignment

owner assignment

containment

mitigation

communication

resolution

postmortem

follow-up actions
```

Every serious incident needs ownership.

---

# Incident Types

Ariyo-specific incidents include:

```text id="ops-079"
AI employees acting outside scope

unsafe automatic replies

knowledge retrieval permission leak

workflow loop causing repeated actions

billing webhook failure

AI cost spike

knowledge sync outage

background worker backlog

organization data leak

deployment broke critical route

model provider outage

integration outage

high error rate

failed migration
```

AI product incidents are not only infrastructure incidents.

---

# Kill Switch Rule

Ariyo must support kill switches for high-risk capabilities.

Possible kill switches:

```text id="ops-080"
disable automatic replies globally

disable specific AI employee type

disable workflow execution

disable specific workflow action

disable integration sync

disable knowledge sync

disable model provider

force all AI outputs to review mode

pause organization automation
```

Kill switches must be fast and safe.

---

# Degraded Mode Rule

Ariyo should degrade safely when dependencies fail.

Examples:

```text id="ops-081"
AI provider down:
pause AI execution or route to review, show safe delay state

knowledge sync down:
keep previous ready source if safe, mark sync delayed

billing provider down:
show billing temporarily unavailable, do not fake changes

worker backlog:
show queued state and delay copy

analytics unavailable:
show report unavailable, core product remains usable
```

Failure must not become unsafe behavior.

---

# User Communication Rule

User-facing operational issues need clear copy.

Good:

```text id="ops-082"
Source sync is delayed. Your existing source remains available.

Deployment is taking longer than usual. Your setup is saved.

Billing is temporarily unavailable. No billing changes were made.

This employee is paused while we verify recent failures.
```

Bad:

```text id="ops-083"
500 error

Task failed

Provider timeout

Internal server error

Celery worker unavailable
```

Operational copy must preserve trust.

---

# Status Page Rule

Ariyo should have a way to communicate major service status.

Status areas:

```text id="ops-084"
application availability

AI execution

knowledge sync

workflow automation

billing

integrations

file uploads
```

Status communication should avoid exposing sensitive internal details.

---

# Scaling Principle

Scale the bottleneck, not the whole system blindly.

Potential bottlenecks:

```text id="ops-085"
web API

database

Redis

Celery workers

AI provider rate limits

knowledge sync workers

vector index latency

object storage bandwidth

billing webhooks

frontend bundle size
```

Scaling must be driven by metrics.

---

# Database Scaling Rule

PostgreSQL must remain the source of truth.

Operational concerns:

```text id="ops-086"
connection pooling

slow query monitoring

indexing strategy

migration safety

transaction boundaries

lock avoidance

read replica strategy when needed

backup and restore

multi-tenant query safety
```

Do not solve data modeling problems with caching first.

---

# Redis Scaling Rule

Redis must be used intentionally.

Use Redis for:

```text id="ops-087"
queues

rate limits

short-lived locks

cache

ephemeral coordination
```

Do not use Redis as source of truth for critical business state.

Critical state belongs in PostgreSQL.

---

# Cache Operations Rule

Caches must be safe to invalidate.

Cache rules:

```text id="ops-088"
cache only safe data

include organization scope

use clear TTLs

avoid caching permissions incorrectly

invalidate on relevant mutations

avoid stale billing/entitlement states

monitor hit rate and errors

fallback safely when cache unavailable
```

Cache bugs can become security bugs.

---

# Locking Rule

Use locks for operations that must not run concurrently.

Examples:

```text id="ops-089"
sync same knowledge source

process same webhook event

run same billing reconciliation

publish same workflow version

update same deployment state

execute same idempotent action
```

Locks must have timeouts.

Never create permanent locks.

---

# Idempotency Key Rule

High-risk requests should support idempotency.

Use for:

```text id="ops-090"
billing operations

member invites

workflow publish

deployment requests

integration connect/disconnect callbacks

webhook processing

file upload processing
```

Idempotency reduces duplicate harm.

---

# API Operations Rule

APIs must be version-aware and stable.

API operational requirements:

```text id="ops-091"
consistent error shape

request IDs

rate limit responses

pagination

timeouts

validation errors

permission errors

backward compatibility for frontend deployments

safe deprecation process
```

Do not break frontend clients with uncoordinated API changes.

---

# Timeout Rule

Every external call must have a timeout.

External calls include:

```text id="ops-092"
AI providers

payment provider

email provider

integration APIs

object storage

vector database/index

webhooks to customer endpoints if supported
```

No external dependency should hang a worker indefinitely.

---

# Circuit Breaker Rule

Use circuit breaker patterns for repeated dependency failures when needed.

Good candidates:

```text id="ops-093"
AI provider

payment provider

integration APIs

email provider

vector index service
```

Circuit breakers prevent cascading failures.

---

# Provider Fallback Rule

Fallbacks must be safe and product-approved.

Fallback examples:

```text id="ops-094"
AI provider fallback model

previous good knowledge index

queued billing sync retry

email retry through same provider

read-only degraded mode
```

Do not fallback to lower safety behavior.

---

# Frontend Deployment Rule

Frontend deployments must be compatible with backend APIs.

Ensure:

```text id="ops-095"
API contracts are stable

feature flags protect new flows

frontend assets are versioned

cache invalidation works

old assets do not call removed endpoints

error states handle backend mismatch
```

Frontend and backend release coordination matters.

---

# Static Asset Rule

Frontend static assets must be delivered reliably.

Rules:

```text id="ops-096"
content-hashed assets

long cache for hashed assets

short/no cache for HTML shell

safe fallback for failed chunk load

monitor chunk load errors

avoid huge initial bundle
```

Chunk load failures should not trap users permanently.

---

# Chunk Load Failure Rule

Handle frontend chunk load failures gracefully.

Possible behavior:

```text id="ops-097"
show refresh prompt

reload once when safe

clear stale asset cache if architecture supports it

log error with release version
```

Users should not see a blank app after deployment.

---

# CI Quality Gate Rule

CI must prevent known bad code.

Quality gates:

```text id="ops-098"
TypeScript check

ESLint

unit tests

component tests

backend tests

migration checks

build check

security/dependency scan where available

forbidden pattern checks where practical
```

CI should catch mistakes before users do.

---

# Test Environment Rule

Tests must not depend on production services.

Use:

```text id="ops-099"
mock AI providers

payment sandbox

email sandbox

local/ephemeral database

local Redis

MSW for frontend API mocks

fixture data
```

Never run tests against production data.

---

# Production Data Rule

Production data must not be copied casually into local or staging environments.

If production data is needed for debugging:

```text id="ops-100"
prefer metadata and logs

redact sensitive data

use minimal sample

get approval

audit access

avoid long-term storage
```

Customer data is not debugging material by default.

---

# Load Testing Rule

Critical systems should be load tested before scale risk.

Test:

```text id="ops-101"
API read traffic

AI execution bursts

workflow trigger bursts

knowledge sync batches

file upload processing

billing webhook bursts

large dashboard queries
```

Load tests must use safe synthetic data.

---

# Capacity Planning Rule

Capacity planning should consider:

```text id="ops-102"
number of organizations

active users

active AI employees

workflow executions per day

AI calls per employee

knowledge sources per organization

file sizes

sync frequency

billing events

analytics aggregation volume
```

AI products scale differently than CRUD apps.

---

# Maintenance Window Rule

For disruptive operations, plan maintenance.

Maintenance may be needed for:

```text id="ops-103"
large migrations

index rebuilds

billing system changes

major infrastructure upgrades

large data backfills
```

Communicate when customer impact is expected.

---

# Dependency Management Rule

Operational dependencies must be maintained.

Track:

```text id="ops-104"
security updates

runtime versions

framework versions

provider SDK versions

Python packages

Node packages

Docker base images

system libraries
```

Unmaintained dependencies become operational risk.

---

# Runtime Version Rule

Runtime versions must be explicit.

Track versions for:

```text id="ops-105"
Python

Node.js

PostgreSQL

Redis

Django

FastAPI

Celery

Vite

React
```

Do not rely on whatever is installed on a machine.

---

# Container Rule

If Ariyo uses containers, images must be:

```text id="ops-106"
reproducible

minimal where practical

scanned where available

versioned

configured through environment

not containing secrets

built from trusted base images
```

Do not bake secrets into images.

---

# Infrastructure as Code Rule

Production infrastructure should be defined as code where possible.

Benefits:

```text id="ops-107"
reviewable changes

repeatable environments

disaster recovery

reduced manual drift

auditability
```

Manual production changes should be exceptional.

---

# Operational Documentation Rule

Operational knowledge must be documented.

Required docs:

```text id="ops-108"
local setup

deployment process

rollback process

migration process

incident response

backup restore

queue operations

AI provider outage response

billing webhook recovery

knowledge reindex process

workflow pause/kill switch process
```

Do not leave production knowledge only in one engineer's head.

---

# Runbook Rule

Critical alerts need runbooks.

Runbooks should include:

```text id="ops-109"
what the alert means

possible causes

first checks

dashboards/logs to inspect

safe mitigation steps

rollback or kill switch instructions

escalation path

customer communication guidance
```

An alert without a runbook creates panic.

---

# AI Incident Runbook Rule

AI-specific incidents need dedicated runbooks.

Examples:

```text id="ops-110"
unsafe automatic replies detected

AI cost spike

prompt-injection bypass

knowledge permission leak

model provider outage

human review backlog

hallucination spike

workflow action misfire
```

AI incidents require product, engineering, and safety coordination.

---

# Release Communication Rule

Significant changes should be communicated internally and, when needed, externally.

Examples:

```text id="ops-111"
new employee type

billing change

automation behavior change

knowledge sync architecture change

workflow execution change

permission model change

AI model change affecting behavior
```

Users should not be surprised by behavior changes in high-trust workflows.

---

# Model Change Operations Rule

Changing AI models is a production release.

Before changing model:

```text id="ops-112"
run evaluations

compare outputs

measure cost difference

measure latency difference

review safety impact

roll out gradually

monitor failure rates

keep rollback path
```

Do not silently change AI behavior without evaluation.

---

# Prompt Change Operations Rule

Changing prompts is a production release.

Prompt changes must be:

```text id="ops-113"
versioned

evaluated

reviewed for safety

tested on regression cases

monitored after release

rolled back if needed
```

Prompt changes can break product behavior.

Treat them seriously.

---

# RAG Change Operations Rule

Changing RAG pipeline is a production release.

Evaluate:

```text id="ops-114"
retrieval relevance

citation quality

latency

cost

permission filtering

freshness behavior

fallback behavior

hallucination risk
```

RAG changes directly affect trust.

---

# Workflow Change Operations Rule

Changing workflow engine behavior is high-risk.

Must validate:

```text id="ops-115"
existing workflow compatibility

version migration

execution safety

idempotency

retry behavior

approval behavior

audit trail

kill switch
```

Do not break customer automations silently.

---

# Billing Change Operations Rule

Billing changes require extra controls.

Before release:

```text id="ops-116"
test payment sandbox

verify webhook handling

verify entitlement changes

verify invoice state

verify failure safe copy

verify no optimistic success

verify reconciliation

prepare support runbook
```

Billing incidents damage trust quickly.

---

# Security Operations Rule

Security operations must include:

```text id="ops-117"
dependency updates

secret rotation

access reviews

audit log review for sensitive admin actions

vulnerability response

incident escalation

log redaction validation

permission regression checks
```

Security is an ongoing operation.

---

# Vulnerability Response Rule

When a vulnerability is found:

```text id="ops-118"
triage severity

identify affected systems

contain if needed

patch or mitigate

rotate secrets if needed

review logs for exploitation

communicate if required

write post-incident notes

add prevention checks
```

Do not treat security fixes as normal feature work.

---

# Dependency Vulnerability Rule

Dependency vulnerabilities must be reviewed.

Response depends on:

```text id="ops-119"
severity

exploitability

whether package is used in production path

whether vulnerable code is reachable

available patch

workaround
```

Critical reachable vulnerabilities require urgent action.

---

# Data Integrity Rule

Ariyo must protect data integrity.

Operational risks:

```text id="ops-120"
duplicate workflow actions

partial billing updates

failed migrations

stale entitlement states

cross-organization data mixing

knowledge index mismatch

out-of-order webhooks

race conditions in deployment state
```

Use transactions, idempotency, constraints, and reconciliation.

---

# Transaction Rule

Critical state changes should use database transactions.

Good candidates:

```text id="ops-121"
member role changes

workflow publishing

employee deployment state change

billing entitlement update

knowledge source state transition

integration disconnect
```

Do not leave critical entities half-updated.

---

# Reconciliation Rule

External systems need reconciliation.

Reconcile:

```text id="ops-122"
billing provider subscription state

payment invoices

integration connection status

knowledge source sync status

workflow execution final states

AI usage cost records
```

Webhooks and callbacks can fail.

Reconciliation repairs truth.

---

# Multi-Tenancy Operations Rule

Multi-tenancy is operationally critical.

Every operational system must preserve organization boundaries:

```text id="ops-123"
logs

metrics

query keys

background jobs

cache keys

object storage paths

vector indexes

audit records

admin tools

support views
```

Cross-tenant leakage is a critical incident.

---

# Organization Scoped Key Rule

Operational keys must include organization scope when needed.

Examples:

```text id="ops-124"
cache keys

rate limit keys

queue job payloads

object storage prefixes

vector namespaces

analytics aggregation keys

billing usage records
```

Never rely on implicit organization context in background jobs.

---

# Background Job Payload Rule

Job payloads must be minimal and explicit.

Good payload:

```json id="ops-125"
{
  "organization_id": "org_123",
  "source_id": "source_456",
  "sync_id": "sync_789"
}
```

Bad payload:

```json id="ops-126"
{
  "source": {
    "full_content": "...",
    "all_settings": "..."
  }
}
```

Jobs should load fresh state from the database.

Do not pass large sensitive payloads through queues.

---

# Worker Deployment Rule

Worker deployments must be coordinated with code and migrations.

Risk:

```text id="ops-127"
old workers process new job payloads

new workers expect new columns before migration

running jobs use changed code unexpectedly

queue contains incompatible jobs
```

Use versioned job payloads for high-risk jobs.

---

# Job Payload Version Rule

For long-lived or critical jobs, include version.

Example:

```json id="ops-128"
{
  "version": 2,
  "organization_id": "org_123",
  "workflow_execution_id": "exec_456"
}
```

Versioning supports safe migrations and backward compatibility.

---

# Monitoring AI Review Queue Rule

Human review queues must be monitored.

Track:

```text id="ops-129"
queue size

oldest pending review age

average review time

approval rate

rejection rate

auto-escalation rate

reviewer workload
```

A stuck review queue can block customer operations.

---

# Notification Operations Rule

Notifications must be reliable and not spammy.

Operational requirements:

```text id="ops-130"
dedupe keys

rate limits

retry policy

bounce handling

unsubscribe/preferences when applicable

clear failure logging

safe content
```

Do not create notification storms.

---

# Email Operations Rule

Email sending must use sandbox in non-production.

Production email must:

```text id="ops-131"
use approved provider

avoid sensitive content when unnecessary

include correct from/reply-to

handle provider failures

track delivery failures when useful

respect user preferences
```

Never send test emails to real users by accident.

---

# File Processing Operations Rule

File processing must be robust.

Track:

```text id="ops-132"
upload received

file validation

virus/malware scan when implemented

parse status

text extraction status

chunking status

embedding status

index status

failure reason

retry state
```

Uploaded files are not automatically safe or useful.

---

# Temporary File Cleanup Rule

Temporary files must be cleaned up.

Cleanup applies to:

```text id="ops-133"
upload temp files

export files

preview files

failed processing artifacts

old generated reports

expired signed URLs
```

Cleanup jobs must be safe and observable.

---

# Frontend Operational UX Rule

Frontend must reflect operational reality.

UI should show:

```text id="ops-134"
queued

processing

syncing

ready

failed

needs review

outdated

paused

retrying when user-relevant
```

UI must not pretend long-running operations are instant.

---

# Long-Running Operation UX Rule

For long operations:

```text id="ops-135"
show saved setup when true

show queued/processing state

allow user to leave page when safe

show status later

send notification when useful

avoid fake progress

offer retry when safe
```

Examples:

```text id="ops-136"
knowledge sync

employee deployment

workflow publish

large import

billing reconciliation
```

---

# Fake Progress Rule

Do not show fake progress percentages.

Allowed:

```text id="ops-137"
step-based progress

indeterminate loading

known file upload progress

known processing stages
```

Forbidden:

```text id="ops-138"
random 72% complete for AI generation

fake indexing percent

fake deployment progress
```

Operational honesty is part of trust.

---

# Operational Copy Rule

Operational copy must use product language.

Good:

```text id="ops-139"
Syncing source

Source ready

Deployment failed. Your setup was saved.

Workflow paused

Billing is temporarily unavailable
```

Forbidden:

```text id="ops-140"
Embedding job failed

Celery task timed out

Vector DB unavailable

Worker crashed

Webhook 500
```

Internal terms belong in logs, not user UI.

---

# Release Safety Checklist

Before production release, verify:

```text id="ops-141"
Tests pass

Type checks pass

Build passes

Migrations reviewed

Rollback plan exists

Feature flags configured

Secrets configured

Health checks pass

Workers deployed

Queues healthy

Alerts active

Dashboards ready

Smoke tests planned

Runbooks updated for risky changes

Support informed for customer-facing changes
```

Do not release blind.

---

# AI Release Checklist

Before AI behavior release, verify:

```text id="ops-142"
prompt versions updated

model config reviewed

evaluation suite passed

safety gates checked

cost impact estimated

latency impact estimated

fallback behavior defined

monitoring ready

rollback path exists

human review impact understood
```

AI behavior changes are production changes.

---

# Knowledge Release Checklist

Before knowledge/RAG release, verify:

```text id="ops-143"
retrieval evaluation passed

permission filtering tested

freshness behavior tested

index migration safe

sync jobs observable

fallback to previous index considered

cost and latency measured

admin retry/rebuild path exists
```

RAG quality is operational quality.

---

# Workflow Release Checklist

Before workflow engine release, verify:

```text id="ops-144"
existing workflows remain compatible

workflow versions are preserved

execution state transitions tested

idempotency tested

retry behavior tested

kill switch exists

audit trail exists

loop protection exists

worker queues monitored
```

Workflow releases can affect customer operations directly.

---

# Billing Release Checklist

Before billing release, verify:

```text id="ops-145"
payment sandbox tested

webhook signatures verified

idempotency tested

entitlements verified

plan changes tested

invoice behavior tested

failure safe states tested

reconciliation job ready

support runbook updated
```

Billing releases require extra care.

---

# Incident Review Checklist

After incident, answer:

```text id="ops-146"
What happened?

Who was affected?

When did it start?

How was it detected?

Why was it not prevented?

How was it mitigated?

Was data affected?

Was billing affected?

Were AI employees unsafe?

What alerts worked?

What alerts were missing?

What code/process changes prevent recurrence?
```

Blameless does not mean vague.

---

# Operational Decision Tree

Ask:

### Is this customer-facing?

Add monitoring, errors, rollback, and support path.

### Is this high-risk?

Use feature flag, audit trail, confirmation, and kill switch.

### Does this run in the background?

Add idempotency, retry policy, timeout, status, metrics, and failure visibility.

### Does this call an external provider?

Add timeout, retry policy, provider error handling, and fallback strategy.

### Does this affect billing?

Require server confirmation, webhook idempotency, reconciliation, and support runbook.

### Does this affect AI behavior?

Version prompts/models, run evaluations, monitor cost/safety, and keep rollback path.

### Does this process knowledge?

Track sync stages, index versions, permission filters, and recovery paths.

### Does this change data schema?

Review migration safety and rollback/mitigation.

### Does this store sensitive data?

Apply privacy, encryption, access control, and retention policy.

---

# Forbidden Operations Patterns

Never ship:

```text id="ops-147"
production code without health checks

manual production patches outside version control

secrets in code or frontend env

logs with tokens or sensitive payloads

background jobs without retry policy

background jobs without timeout

background jobs without failure state

workflow execution without audit trail

billing webhooks without idempotency

webhooks without signature verification

AI execution without version tracking

prompt changes without evaluation for critical behavior

model changes without monitoring and rollback

knowledge sync without status visibility

RAG indexes without organization scoping

cache keys without organization scope

long-running migrations without safety review

feature flags with no owner or cleanup plan

production mock data

untested backups

silent job failures

polling or retries without stop conditions

payment SDK or provider secrets exposed client-side

unknown operational failure shown as success

kill switch missing for high-risk automation
```

---

# Ariyo Operations Golden Rule

If Ariyo cannot observe, recover, and safely stop a production behavior, Ariyo is not ready to run that behavior for customers.

---

# Senior Operations Rule

Do not design only for the day a feature works.

Design for the day it fails, scales, costs too much, receives bad data, loses a dependency, or needs to be rolled back.

---

# Final Rule

Ariyo deployment and operations are production-ready only when releases are controlled, services are observable, jobs are recoverable, AI behavior is versioned and monitored, workflow execution is auditable, billing is reconciled, customer data is protected, incidents have response paths, and every high-risk capability can be paused, diagnosed, and restored without relying on guesswork.
