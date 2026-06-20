# Ariyo Quality Assurance System Skill

Version: 1.0.0  
Product: Ariyo  
Purpose: Act as a Staff Quality Architect, QA Lead, AI Evaluation Owner, Release Gatekeeper, and Production Trust Guardian for Ariyo.  
Audience: Codex agents, AI-assisted development tools, frontend engineers, backend engineers, product engineers, QA engineers, and release owners.  
Priority: Non-negotiable.

Dependencies:
- product-strategy.md
- domain-model.md
- api-contracts.md
- ai-employee-architecture.md
- knowledge-rag.md
- workflow-automation.md
- ai-safety-evaluation.md
- backend-architecture.md
- deployment-ops.md
- frontend-testing.md
- frontend-performance.md
- frontend-forms-validation.md
- frontend-state-data.md
- coding-standards.md

If conflicts exist:
- product-strategy.md wins for product intent and business outcomes.
- domain-model.md wins for canonical entities, states, lifecycle, and ownership.
- api-contracts.md wins for API shapes, errors, async jobs, webhooks, and frontend-safe responses.
- ai-safety-evaluation.md wins for AI safety gates, evaluation, review, and release criteria.
- deployment-ops.md wins for operational release, observability, rollback, and incident behavior.
- frontend-testing.md wins for frontend test implementation details.
- quality-assurance-system.md wins for cross-product quality strategy, release gates, QA coverage, quality scoring, regression prevention, and end-to-end readiness.

Ariyo quality is not a testing phase.

Ariyo quality is the operating system that decides whether a product change is safe, useful, measurable, accessible, secure, reliable, and ready for real organizations.

---

# Core QA Principle

Ariyo must not ship features that only work in the happy path.

Ariyo quality must prove that the product works under:

```text
real users
real organizations
real permissions
real AI uncertainty
real knowledge gaps
real billing constraints
real network failures
real integration failures
real background jobs
real mobile devices
real accessibility needs
real production data volume
real operational incidents
```

A feature is production-ready only when it is verified across product behavior, engineering correctness, AI safety, data integrity, accessibility, performance, security, observability, and recovery.

---

# Quality Mission

The quality system must protect:

```text
user trust
business outcomes
AI employee reliability
organization boundaries
customer data
billing accuracy
knowledge freshness
workflow safety
review governance
release confidence
engineering velocity
```

QA must make Ariyo faster to improve, not slower to ship.

Good QA prevents expensive failures before customers experience them.

---

# Ariyo Quality Dimensions

Every meaningful Ariyo change must be evaluated across these dimensions:

```text
1. Product correctness
2. Domain correctness
3. API contract correctness
4. AI behavior correctness
5. Knowledge/RAG correctness
6. Workflow correctness
7. Human review correctness
8. Permission and security correctness
9. Billing and entitlement correctness
10. Frontend UX correctness
11. Accessibility correctness
12. Performance correctness
13. Reliability and operations correctness
14. Analytics correctness
15. Regression safety
```

If any dimension is not applicable, it may be skipped intentionally.

If it is applicable and unverified, the change is not release-ready.

---

# Quality Ownership Rule

Quality is owned by every layer.

```text
Product:
defines expected outcome, user value, risk, success metrics.

Design:
defines usable, accessible, responsive, clear experience.

Frontend:
implements typed, accessible, state-complete, testable UI.

Backend:
enforces domain rules, permissions, data integrity, async jobs, and API contracts.

AI/RAG:
ensures grounded, bounded, evaluated, safe outputs.

Ops:
ensures release safety, monitoring, rollback, incident handling, and recovery.

Analytics:
ensures product behavior is measurable without privacy leaks.
```

No layer may assume another layer will fix its quality gaps.

---

# Quality Is Not Just Tests

Tests are required, but QA is broader.

Ariyo QA includes:

```text
requirements clarity
acceptance criteria
domain model review
API contract review
schema validation
unit tests
component tests
integration tests
E2E tests
AI evaluation datasets
RAG retrieval tests
workflow execution tests
permission matrix tests
billing safety tests
accessibility audits
performance checks
security checks
observability checks
release gates
post-release monitoring
incident review
regression prevention
```

A passing test suite does not prove product quality if the wrong behavior was tested.

---

# Quality Strategy Hierarchy

Use the smallest reliable verification method that protects the risk.

```text
Pure rule or transformation:
unit test

UI state or interaction:
component test

Feature behavior across hooks/API mocks:
integration test

Critical user journey:
E2E test

AI employee behavior:
evaluation dataset + trace review + safety gate

Knowledge retrieval:
retrieval evaluation + citation/freshness checks

Workflow execution:
workflow simulation + job/idempotency tests

Billing or permission:
contract tests + backend enforcement tests + UI state tests

Release safety:
CI gates + smoke tests + observability checks
```

Do not overuse E2E tests for logic that can be tested more cheaply.

Do not rely on unit tests for behavior that only fails when systems interact.

---

# Definition of Quality Done

A change is quality-done only when:

```text
acceptance criteria are clear
product behavior matches intended outcome
domain entities and states are correct
API contracts are respected
server-side enforcement exists where required
UI states are complete
forms validate safely
AI outputs are bounded and evaluated when applicable
RAG uses correct knowledge and permissions when applicable
workflows handle success, failure, retry, and audit when applicable
permissions are honest in UI and enforced in backend
billing states are server-confirmed
accessibility is acceptable
performance is acceptable
security guardrails are respected
analytics events are correct and privacy-safe
tests are meaningful
release risks are known
rollback or mitigation exists for risky changes
```

A feature with unknown behavior is not done.

---

# Acceptance Criteria Rule

Every non-trivial task must have acceptance criteria.

Good acceptance criteria are:

```text
observable
product-specific
testable
state-aware
permission-aware
failure-aware
measurable when relevant
```

Bad:

```text
Build employee deployment.
```

Good:

```text
Admin can deploy an employee only after required channel and knowledge source are connected.
Deployment shows pending state, prevents duplicate submit, waits for server-confirmed active state, handles failure with safe-state copy, and writes audit activity.
```

Codex must infer missing acceptance criteria from Ariyo skills when the task is underspecified.

---

# Risk Classification Rule

Every change must be classified by risk.

## Low Risk

Examples:

```text
copy-only changes
small visual polish
safe empty state update
local UI preference
minor non-critical component refactor
```

Required QA:

```text
code review
basic type/lint checks
relevant targeted test if behavior changes
```

## Medium Risk

Examples:

```text
form changes
API query changes
new dashboard section
new marketplace flow
new settings screen
knowledge source UI changes
```

Required QA:

```text
unit/component/integration tests
loading/empty/error/success review
accessibility review
API contract review when applicable
```

## High Risk

Examples:

```text
deploy employee
billing changes
permission changes
workflow publish
integration connection/disconnection
knowledge sync pipeline
AI tool execution
customer-facing AI replies
member removal
organization switch behavior
```

Required QA:

```text
backend enforcement test
frontend state test
contract test
failure test
permission test
audit/log check
safe rollback or mitigation
release gate approval
```

## Critical Risk

Examples:

```text
authentication architecture
billing provider integration
AI autonomy upgrade
automatic customer-facing actions
cross-organization data access
RAG permission filtering
workflow execution engine
production migration affecting core data
```

Required QA:

```text
architecture review
security review
AI safety review when applicable
E2E coverage
observability plan
rollback plan
manual release approval
post-release monitoring
```

---

# Release Gate Model

Ariyo release readiness must pass gates.

```text
Gate 1: Requirements and risk clarity
Gate 2: Domain/API contract correctness
Gate 3: Implementation quality
Gate 4: Automated tests
Gate 5: AI/RAG/workflow evaluation when applicable
Gate 6: Accessibility/performance/security checks
Gate 7: Observability and rollback readiness
Gate 8: Final release approval for high-risk changes
Gate 9: Post-release monitoring
```

A failed gate blocks release or requires explicit risk acceptance.

---

# Gate 1 — Requirements and Risk Clarity

Before implementation, verify:

```text
What user problem is solved?
What business outcome is expected?
What domain entities are involved?
What risk level applies?
What permissions are required?
What data is sensitive?
What failure modes matter?
What acceptance criteria define done?
What metrics should be observed?
```

Do not build high-risk behavior from vague requirements.

---

# Gate 2 — Domain and API Contract Correctness

Before coding against data, verify:

```text
entities match domain-model.md
states are valid lifecycle states
ownership is clear
organization scoping is enforced
API response shape is frontend-safe
errors follow api-contracts.md
async jobs have clear lifecycle
webhooks are idempotent when relevant
DTOs map to product domain terms
unknown statuses fail safely
```

If the contract is unclear, fix the contract before patching UI logic.

---

# Gate 3 — Implementation Quality

Implementation must follow:

```text
coding-standards.md
project-structure.md
frontend-state-data.md
frontend-forms-validation.md
frontend-performance.md
backend-architecture.md
security guardrails
```

Reject implementations with:

```text
raw fetch in UI
unsafe casts
mock data in production
hidden permission assumptions
manual duplicate state
unbounded rendering
unsafe HTML
untracked side effects
unhandled async failures
```

---

# Gate 4 — Automated Tests

Automated tests must cover relevant risk.

Required test types by area:

```text
schemas:
unit tests

mappers:
unit tests

query keys:
unit tests when complex

forms:
component/integration tests

API behavior:
contract/integration tests

permissions:
backend enforcement + UI state tests

billing:
backend + contract + UI failure tests

AI execution:
evaluation + trace validation + tool contract tests

RAG:
retrieval evaluation + permission/freshness tests

workflows:
execution simulation + idempotency + audit tests

critical user flows:
E2E tests
```

Tests must protect behavior, not implementation details.

---

# Gate 5 — AI, RAG, and Workflow Evaluation

Any change that affects AI employee behavior must pass specialized quality gates.

Evaluate:

```text
role scope
prompt changes
tool selection
tool arguments
retrieval quality
citation correctness
knowledge freshness
confidence policy
review routing
refusal behavior
fallback behavior
cost impact
latency impact
safety policy compliance
```

Never release AI behavior changes based only on “looks good” manual inspection.

---

# Gate 6 — Accessibility, Performance, and Security

Before release, verify:

```text
keyboard access
screen reader naming
focus management
form labels/errors
color contrast
mobile usability
reduced motion
bundle impact
large list/table strategy
query performance
background job impact
sensitive data handling
unsafe HTML absence
permission enforcement
billing/deployment server confirmation
```

Accessibility, performance, and security are release blockers when risk is meaningful.

---

# Gate 7 — Observability and Rollback Readiness

For high-risk changes, verify:

```text
logs exist for critical actions
metrics exist for success/failure
alerts exist for failure spikes
AI traces are auditable
workflow executions are traceable
background jobs are visible
billing webhooks are monitored
kill switch exists when needed
feature flag exists when needed
rollback plan exists
migration rollback or forward-fix plan exists
```

A production system that cannot be observed cannot be trusted.

---

# Gate 8 — Release Approval

High-risk and critical-risk releases require explicit approval.

Approval must confirm:

```text
known risks
quality evidence
test evidence
evaluation evidence
security review when needed
ops readiness
rollback plan
customer impact
monitoring owner
```

Do not silently release critical changes.

---

# Gate 9 — Post-Release Monitoring

After release, monitor:

```text
error rate
latency
failed jobs
failed AI executions
workflow failure rate
review queue spikes
knowledge sync failures
billing webhook failures
permission denied spikes
customer support signals
conversion or activation impact
cost changes
```

If quality degrades, rollback, disable, or mitigate quickly.

---

# Test Coverage Strategy

Ariyo does not chase vanity coverage.

Ariyo prioritizes meaningful coverage.

High-priority coverage areas:

```text
auth and permissions
organization scoping
billing and entitlements
AI employee lifecycle
deployment lifecycle
knowledge sync lifecycle
RAG permission filtering
workflow execution
human review
integration lifecycle
forms and validation
API error handling
critical onboarding
customer-facing automation
```

Low-value coverage:

```text
snapshot-only page tests
CSS class assertion tests
trivial render tests
implementation detail tests
mock-only happy path tests
```

Coverage must map to risk.

---

# Regression Prevention Rule

Every production bug should create regression protection when practical.

Regression protection may be:

```text
unit test
component test
integration test
E2E test
AI evaluation example
RAG retrieval test
workflow simulation
monitoring alert
lint rule
schema guard
release checklist item
```

A bug fixed only by code is more likely to return.

---

# Quality Score Model

Ariyo may use a quality score for features and releases.

Score each applicable dimension from 0 to 3:

```text
0 = missing or unsafe
1 = partial / fragile
2 = acceptable
3 = strong / production-ready
```

Dimensions:

```text
Product clarity
Domain correctness
API correctness
Frontend state completeness
Backend enforcement
AI safety
RAG quality
Workflow reliability
Permission safety
Billing safety
Accessibility
Performance
Security
Testing
Observability
Rollback readiness
```

Release rules:

```text
Low-risk release:
no 0s in applicable dimensions

Medium-risk release:
all applicable dimensions at least 2

High-risk release:
all critical dimensions at least 2, safety/security/permissions at 3

Critical-risk release:
manual approval required, no unresolved critical dimension below 3
```

Do not use quality score as bureaucracy.

Use it to expose risk clearly.

---

# AI Evaluation System

AI behavior must be evaluated systematically.

Evaluation cases should include:

```text
common successful requests
ambiguous requests
out-of-scope requests
permission-restricted requests
missing knowledge
conflicting knowledge
stale knowledge
prompt injection attempts
unsafe tool requests
billing-sensitive actions
customer-facing response drafting
human review routing
low confidence fallback
cost-sensitive routing
```

Each case should define:

```text
input
employee role
available knowledge
allowed tools
expected behavior
forbidden behavior
risk level
review expectation
success criteria
```

Ariyo must not rely on subjective model fluency as proof of quality.

---

# AI Evaluation Pass Criteria

AI evaluation passes only when:

```text
employee stays in role
retrieves when required
uses only permitted knowledge
does not invent unsupported claims
does not reveal private data
routes to review when risk requires
refuses unsafe/out-of-scope requests
uses tools only when authorized
validates structured outputs
handles low confidence safely
preserves brand/business context
keeps cost within expected range
produces auditable trace
```

Failure in a high-risk scenario blocks release.

---

# RAG Quality Gates

RAG changes must verify:

```text
retrieval relevance
permission filtering
organization scoping
source freshness
citation correctness
chunk quality
no cross-customer leakage
no stale source treated as fresh
fallback when insufficient evidence
prompt injection resistance
latency and cost impact
```

RAG quality must be evaluated before AI employee autonomy increases.

---

# Workflow Quality Gates

Workflow changes must verify:

```text
trigger correctness
condition correctness
action authorization
idempotency
retry behavior
failure state
review routing
audit trail
versioning
published vs draft separation
rollback or pause ability
execution observability
```

A workflow that cannot be audited is not production-ready.

---

# Human Review Quality Gates

Review-governed changes must verify:

```text
correct review queue routing
reviewer eligibility
clear review payload
source evidence visible when needed
approve/reject/edit behavior
execution revalidation after approval
concurrency handling
expiration behavior
audit trail
notification behavior
```

Human review must add trust, not friction without clarity.

---

# Billing Quality Gates

Billing changes must verify:

```text
server-confirmed billing state
entitlement enforcement
plan limits
upgrade/downgrade behavior
invoice states
payment failure handling
no optimistic billing success
webhook idempotency
customer-safe error copy
no sensitive payment data leakage
analytics privacy
```

Billing failures must always preserve trust.

---

# Permission Quality Gates

Permission changes must verify:

```text
backend enforcement
frontend explanation
organization boundary
workspace/resource scope
self-lockout prevention
reviewer authority
billing admin restrictions
audit log
permission denied state
not found vs forbidden behavior
```

Permission cannot be validated only through hidden UI.

---

# Integration Quality Gates

Integration changes must verify:

```text
connection lifecycle
scope display
OAuth/API key safety
webhook verification
rate limit handling
sync job behavior
disconnect behavior
reauthorization behavior
failure recovery
AI tool access boundaries
audit logs
kill switch readiness
```

An integration must fail safely.

---

# Onboarding Quality Gates

Onboarding changes must verify:

```text
first value path clarity
time to value impact
recommended employee correctness
business context readiness
knowledge source connection
channel connection
deployment readiness
permission-aware steps
stalled onboarding recovery
mobile usability
activation metrics
```

Onboarding quality is measured by trusted activation, not completed steps.

---

# Customer Success Quality Gates

Customer-success product features must verify:

```text
health score correctness
risk signals
expansion signals
ROI evidence
playbook recommendation accuracy
customer segmentation
intervention triggers
privacy-safe analytics
account-level visibility
```

Customer success insights must not be vanity metrics.

---

# Manual QA Strategy

Manual QA is useful for judgment-heavy areas.

Manual QA should focus on:

```text
product clarity
trust perception
copy quality
edge-case flows
complex permissions
AI output usefulness
review experience
mobile usability
accessibility sanity
integration failure recovery
billing confidence
```

Manual QA must not replace automated regression coverage for critical behavior.

---

# Exploratory Testing Rule

Use exploratory testing for new high-complexity features.

Explore:

```text
unexpected order of actions
browser back/forward
refresh during pending state
organization switch mid-flow
permission change mid-flow
network failure mid-submit
large data sets
empty data
invalid URL params
slow background jobs
integration disconnection
AI low-confidence responses
```

Exploratory testing should produce new automated tests when it finds bugs.

---

# E2E Test Strategy

E2E tests should cover critical journeys.

Priority Ariyo E2E flows:

```text
sign up and create organization
complete onboarding to first value
hire first AI employee
connect first knowledge source
connect first channel or integration
deploy employee in review mode
review and approve AI output
handle failed deployment safely
create and publish workflow
permission denied for restricted member
upgrade or view billing state
integration disconnect and recovery
```

E2E tests should be stable, minimal, and high-value.

Do not use E2E for every small component.

---

# Smoke Test Strategy

Every production deployment should have smoke tests.

Smoke tests should verify:

```text
app loads
login works
organization context loads
core API health works
employee list loads
knowledge source list loads
billing state loads
feature flags load
critical background worker health visible
no obvious console/runtime fatal error
```

High-risk releases should include feature-specific smoke tests.

---

# Contract Testing Strategy

Contract tests protect boundaries.

Use contract tests for:

```text
frontend-backend API responses
webhook payloads
async job status responses
AI execution trace schemas
workflow execution result schemas
billing provider webhook mapping
integration provider event mapping
RAG retrieval response shapes
```

Contract drift creates product bugs.

---

# Data Integrity QA

Data integrity must be verified for:

```text
organization scoping
entity ownership
status lifecycle transitions
published vs draft workflows
review decisions
billing entitlements
AI cost records
audit logs
background job results
knowledge source sync versions
integration connection state
```

Data integrity bugs are high-risk even if UI looks correct.

---

# Migration QA

Database migrations must be reviewed for:

```text
backward compatibility
runtime safety
data backfill strategy
large table impact
rollback or forward-fix strategy
index creation safety
nullable vs required fields
default values
status migration correctness
organization scoping
```

Dangerous migrations require ops review.

---

# Observability QA

Quality includes verifying that failures are visible.

For critical features, ensure logs/metrics/traces capture:

```text
organization id
resource id
operation type
status
failure reason code
latency
job id
workflow execution id
AI execution id
review id
integration provider
billing event id
```

Do not log sensitive content.

Use IDs and safe metadata.

---

# Analytics QA

Analytics must be correct and privacy-safe.

Verify:

```text
event name follows taxonomy
event fires once
important properties exist
sensitive data is excluded
organization/user IDs follow approved format
success/failure events are distinct
activation events match definitions
AI cost/revenue metrics are not double-counted
funnels can be reconstructed
```

Bad analytics leads to bad product decisions.

---

# Accessibility QA

Accessibility QA must include:

```text
keyboard-only path
focus states
focus management in overlays
form labels
field errors
button/link semantics
screen reader accessible names
color contrast
mobile touch targets
reduced motion
chart/table alternatives
```

For critical flows, accessibility is a release gate.

---

# Performance QA

Performance QA must include:

```text
initial route load
large list/table behavior
chart rendering
query refetch behavior
background refresh flicker
bundle impact
mobile responsiveness
slow network states
image sizes
animation cost
worker/job latency for async features
```

Performance must be tested with realistic data volume.

---

# Security QA

Security QA must include:

```text
permission enforcement
organization scoping
unsafe HTML absence
safe URL handling
file upload validation
storage validation
sensitive data not logged
sensitive data not sent to analytics
auth/session error handling
CSRF/CORS architecture compliance when applicable
billing data safety
integration token safety
```

Security shortcuts block release.

---

# QA for AI Employee Lifecycle

AI employee lifecycle QA must verify:

```text
template is valid
employee can be hired
setup requirements are clear
business context is attached correctly
knowledge sources are attached correctly
channels are attached correctly
permissions are enforced
deploy readiness is correct
deployment is server-confirmed
status transitions are valid
activity is recorded
metrics are updated
cost is tracked
pause/resume works when supported
failure is recoverable
```

AI employee lifecycle is core product quality.

---

# QA for Knowledge Source Lifecycle

Knowledge source QA must verify:

```text
connect/upload validation
sync pending state
sync success state
sync failure state
needs review state
outdated state
permission filtering
source versioning
last synced display
retry behavior
disconnect behavior
RAG retrieval visibility
no backend jargon in UI
```

Knowledge quality directly affects AI quality.

---

# QA for Deployment Lifecycle

Deployment QA must verify:

```text
setup incomplete state
ready to deploy state
pending deployment state
active state
failed state
paused state when supported
duplicate submit prevention
server confirmation
safe failure copy
cache invalidation
activity/audit log
polling stop condition
rollback/pause where relevant
```

Deployment cannot be faked or optimistic.

---

# QA for Workflow Lifecycle

Workflow QA must verify:

```text
draft creation
validation
simulation
publish
versioning
trigger handling
condition evaluation
action execution
review routing
failure handling
retry/idempotency
audit trail
pause/disable
metrics
```

Workflows are automation infrastructure and must be tested as such.

---

# QA for Human Review Lifecycle

Human review QA must verify:

```text
review item creation
queue visibility
reviewer permissions
approval
rejection
edit-and-approve
expiration
concurrency conflicts
execution after approval
safe failure after approval
audit history
metrics
```

Review UI and review backend must agree.

---

# QA for Billing Lifecycle

Billing QA must verify:

```text
plan display
entitlement display
upgrade flow
downgrade flow
payment failure
invoice list
invoice download
billing permission
usage limit warning
overage behavior
webhook handling
server-confirmed state
no optimistic success
```

Billing QA protects revenue and trust.

---

# QA for Integration Lifecycle

Integration QA must verify:

```text
connect
callback
scope display
health state
sync
webhooks
rate limits
reauthorization
disconnect
credential rotation
permission denial
provider outage
kill switch
```

Integration QA must include provider failure paths.

---

# Quality Artifacts

For important features, maintain quality artifacts:

```text
acceptance criteria
risk classification
test plan
E2E checklist
AI evaluation set when applicable
RAG evaluation set when applicable
manual QA checklist
release checklist
observability plan
rollback plan
known limitations
```

These artifacts can be lightweight but must be explicit for high-risk work.

---

# QA Checklist Template

Use this template for feature QA:

```text
Feature:
Owner:
Risk level:
Related skills:
Domain entities:
Permissions:
Sensitive data:
Primary user flow:
Failure modes:
Acceptance criteria:
Automated tests:
Manual QA:
Accessibility checks:
Performance checks:
Security checks:
AI/RAG evaluation:
Analytics events:
Observability:
Rollback plan:
Known risks:
Release decision:
```

Do not use the template as paperwork.

Use it to expose risk.

---

# Release Checklist Template

Before release:

```text
Requirements clear
Risk classified
Domain model reviewed
API contracts stable
Backend enforcement verified
Frontend states complete
Tests passing
AI eval passing when applicable
RAG eval passing when applicable
Workflow simulation passing when applicable
Accessibility acceptable
Performance acceptable
Security acceptable
Analytics verified
Observability ready
Rollback ready
Stakeholder approval for high-risk changes
```

After release:

```text
Smoke tests passed
Metrics monitored
Error rates checked
Job queues checked
AI execution failures checked
Billing/webhook failures checked
Support signals monitored
Rollback threshold defined
```

---

# Quality Anti-Patterns

Never accept:

```text
QA only after development is finished
happy-path-only testing
tests that only check render
manual QA with no automation for critical paths
AI behavior approved by vibes
RAG quality judged by one example
billing changes without failure tests
permission changes without backend enforcement tests
workflow changes without idempotency checks
integration changes without provider failure handling
release without rollback plan for high-risk features
analytics events with sensitive data
accessibility ignored until the end
performance tested only with mock-small data
production bugs fixed without regression protection
```

---

# Codex QA Behavior

When Codex implements or modifies Ariyo code, it must:

```text
identify risk level
identify affected domain entities
use relevant skill files
add or update tests when behavior changes
preserve existing tests
avoid weakening tests
handle loading/empty/error/success states
avoid unsafe shortcuts
state what was verified
state what was not verified
be honest about tests not run
suggest regression protection for bugs
```

Codex must not claim production readiness without evidence.

---

# Quality Review Questions

Before accepting any AI-generated code, ask:

```text
Did it understand the domain?
Did it respect organization boundaries?
Did it enforce permissions in the right layer?
Did it handle failure states?
Did it avoid fake AI/billing/deployment success?
Did it create maintainable tests?
Did it avoid unsafe casts and mock data?
Did it preserve accessibility?
Did it keep performance realistic?
Did it add observability for critical actions?
```

AI-generated code requires strong quality review because it can look correct while hiding risk.

---

# Forbidden QA Patterns

Never ship with:

```text
known failing tests hidden or skipped
critical tests deleted to pass CI
AI eval failures ignored
RAG permission failures ignored
billing webhook failures ignored
manual-only coverage for critical automation
no rollback path for high-risk release
no monitoring for background job changes
console errors ignored in tests
unhandled network requests in tests
shared dirty test state
mock data treated as real behavior
quality signoff based only on screenshots
```

---

# Ariyo Quality Golden Rule

Quality means Ariyo can be trusted when the user is not watching the internals and the system is under real-world stress.

---

# Senior QA Rule

Do not ask, “Does it work?”

Ask, “How can it fail, who is harmed, how do we know, how do we recover, and how do we prevent it from returning?”

---

# Final Rule

Ariyo quality assurance is production-ready only when product behavior, domain rules, API contracts, AI safety, RAG grounding, workflow execution, human review, permissions, billing, accessibility, performance, security, analytics, observability, rollback, and regression prevention are verified as one integrated system.
