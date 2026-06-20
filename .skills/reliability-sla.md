# Ariyo Reliability & SLA Skill

## 1. Purpose

This skill defines how Ariyo must design, build, operate, measure, communicate, and continuously improve reliability for a production AI Employee Operating System.

Ariyo is not a static dashboard.

Ariyo is an operational system where AI employees may answer customers, trigger workflows, access knowledge, connect integrations, request approvals, update business systems, and influence real customer outcomes.

Therefore, reliability in Ariyo must cover more than application uptime. It must cover safe degradation, workflow continuity, AI execution reliability, integration resilience, data consistency, queue health, fallback behavior, customer communication, support readiness, incident response, and SLA honesty.

This file is a product and engineering operating contract.

It is not a public SLA, legal commitment, or customer-facing contractual guarantee unless reviewed and approved by leadership, operations, security, and qualified legal counsel.

---

## 2. Core Contract

Ariyo reliability is not only uptime.

Ariyo reliability is the ability of AI employees, workflows, knowledge systems, integrations, review gates, billing, admin controls, and customer-facing experiences to keep operating safely, predictably, transparently, and recoverably under real-world failure.

Ariyo must never promise reliability that the architecture, monitoring, support process, incident response, staffing, and evidence cannot support.

If a system cannot be measured, it cannot be promised.

If a failure cannot be detected, it cannot be reliably recovered.

If a degraded state cannot be explained to the customer, it cannot be considered enterprise-ready.

---

## 3. Dependencies

This skill depends on and must remain consistent with:

- `product-strategy.md`
- `backend-architecture.md`
- `deployment-ops.md`
- `security-threat-model.md`
- `data-governance-privacy.md`
- `compliance-legal-risk.md`
- `enterprise-readiness.md`
- `model-provider-strategy.md`
- `ai-cost-control.md`
- `ai-safety-evaluation.md`
- `workflow-automation.md`
- `knowledge-rag.md`
- `integration-ecosystem.md`
- `human-review-governance.md`
- `admin-permissions.md`
- `frontend-performance.md`
- `frontend-testing.md`
- `quality-assurance-system.md`
- `product-analytics-growth.md`

Reliability cannot be implemented in isolation.

It must be built across architecture, product, AI behavior, infrastructure, UX, support, governance, and customer communication.

---

## 4. Reliability Philosophy

Ariyo must follow these reliability principles:

1. Reliability must be designed before launch, not patched after failure.
2. Every critical system must have an owner.
3. Every critical path must have observability.
4. Every critical workflow must have retry, timeout, idempotency, and recovery behavior.
5. Every external dependency must have a degraded mode.
6. Every AI execution path must have a safe failure mode.
7. Every SLA promise must be backed by measurements.
8. Every incident must improve the system.
9. Every customer-facing outage must be communicated clearly.
10. Every automated action must fail safely.

Ariyo must optimize for trust, not vanity uptime.

---

## 5. Reliability Scope

Reliability applies to the following Ariyo systems:

- Authentication and session access
- Organization and workspace access
- Admin and permission enforcement
- AI employee availability
- AI execution pipeline
- Model provider gateway
- Prompt and tool orchestration
- Workflow execution
- Human review queues
- Knowledge retrieval and sync
- Vector search and RAG
- Integrations and webhooks
- Channel delivery, including website chat, email, Telegram, WhatsApp, SMS, or future channels
- Billing and entitlement checks
- Usage metering and cost controls
- Notification delivery
- Audit logging
- Analytics ingestion
- File upload and processing
- Background jobs
- Customer dashboards
- Admin console
- API endpoints
- Deployment and rollback systems
- Support and incident response processes

No feature that affects customer operations may be treated as reliability-neutral.

---

## 6. Reliability Taxonomy

Ariyo must distinguish between the following reliability categories.

### 6.1 Availability

Whether a service is reachable and usable.

Examples:

- Can the customer log in?
- Can the dashboard load?
- Can an AI employee receive a message?
- Can a workflow start?

### 6.2 Correctness

Whether the system produces the intended result.

Examples:

- Does permission enforcement work correctly?
- Does the AI employee use the correct knowledge source?
- Does the workflow execute the right action?
- Does billing meter usage correctly?

### 6.3 Durability

Whether important data survives failure.

Examples:

- Are audit logs preserved?
- Are workflow events persisted?
- Are review decisions stored?
- Are billing events not lost?

### 6.4 Recoverability

Whether Ariyo can recover from failure safely.

Examples:

- Can failed jobs be retried?
- Can a deployment be rolled back?
- Can an integration resync?
- Can an AI employee resume after provider outage?

### 6.5 Degradability

Whether Ariyo can operate in reduced mode instead of fully failing.

Examples:

- If Smart reasoning is unavailable, can Pro-level model fallback run?
- If provider A fails, can provider B be used?
- If integration sync is delayed, can cached knowledge be used with freshness warnings?

### 6.6 Transparency

Whether customers understand what is happening.

Examples:

- Is degraded mode visible?
- Is delayed sync explained?
- Are failed actions shown clearly?
- Are incident updates available?

### 6.7 Safety

Whether failures avoid dangerous or unauthorized outcomes.

Examples:

- Failed approval must not auto-approve.
- Failed billing check must not grant unauthorized entitlements.
- Failed permission check must deny by default.
- Failed tool call must not be shown as successful.

---

## 7. Reliability Levels

Ariyo must classify systems by reliability criticality.

### 7.1 Tier 0: Safety-Critical Systems

Failure may create security, privacy, legal, financial, or customer harm.

Examples:

- Authentication
- Authorization
- Organization isolation
- Admin permissions
- Billing entitlement enforcement
- Data deletion/export systems
- Audit logs
- Human review gates
- AI tool approval controls
- Secret and credential storage
- Security kill switches

Tier 0 systems must fail closed.

### 7.2 Tier 1: Customer-Operational Systems

Failure materially disrupts customer operations.

Examples:

- AI employee execution
- Workflow execution
- Message channels
- Knowledge retrieval
- Integration actions
- Webhooks
- Notification delivery
- Admin console

Tier 1 systems must support retry, degradation, monitoring, and incident response.

### 7.3 Tier 2: Productivity Systems

Failure reduces productivity but does not immediately create severe harm.

Examples:

- Analytics dashboards
- Reports
- Non-critical recommendations
- Marketplace browsing
- Non-critical settings pages

Tier 2 systems may degrade gracefully and recover asynchronously.

### 7.4 Tier 3: Enhancement Systems

Failure affects polish but not core operations.

Examples:

- Advanced animations
- Non-critical visual enhancements
- Optional previews
- Suggested templates

Tier 3 systems must never block Tier 0 or Tier 1 systems.

---

## 8. SLA vs SLO vs SLI

Ariyo must use the following definitions internally.

### 8.1 SLI: Service Level Indicator

A metric that measures reliability.

Examples:

- API success rate
- Workflow completion rate
- AI execution success rate
- Message delivery success rate
- P95 latency
- Job queue delay
- Integration sync freshness
- Provider error rate

### 8.2 SLO: Service Level Objective

An internal target for an SLI.

Examples:

- 99.9% dashboard API availability
- 99.5% workflow execution success rate
- P95 AI response orchestration latency under target threshold
- 99.9% audit log persistence success

### 8.3 SLA: Service Level Agreement

A customer-facing contractual commitment.

SLA promises must never be added casually.

Ariyo must only offer an SLA if:

- The underlying SLI is measured.
- The SLO is historically achievable.
- Monitoring and alerting exist.
- Incident response exists.
- Support ownership exists.
- Exclusions are defined.
- Legal review is complete.
- Customer communication process exists.

No UI, pricing page, landing page, sales deck, proposal, or contract may promise uptime without operational approval.

---

## 9. SLA Promise Rules

Ariyo must follow these rules before making reliability promises.

### 9.1 Do Not Overclaim

Do not claim:

- `always available`
- `never down`
- `zero downtime`
- `unbreakable`
- `guaranteed AI accuracy`
- `fully autonomous without failure`
- `no data loss` unless technically and contractually defensible
- `instant response` unless measured and bounded

### 9.2 State What Is Covered

Every SLA must define covered services.

Examples:

- Dashboard access
- API availability
- AI employee runtime
- Workflow execution engine
- Message delivery system
- Knowledge retrieval
- Admin console

### 9.3 State What Is Excluded

Every SLA must define exclusions.

Examples:

- Customer misconfiguration
- Third-party provider outages
- Customer internet/network issues
- Force majeure
- Beta features
- Scheduled maintenance
- External integration provider downtime
- AI model provider outage when outside Ariyo control
- Customer exceeding plan limits
- Unsupported custom implementation

### 9.4 Do Not Mix Platform Uptime With AI Outcome Guarantees

Ariyo may measure platform availability.

Ariyo must not promise that every AI output will be correct, complete, or commercially successful.

AI output quality belongs to evaluation, safety, review, and customer configuration, not uptime SLA.

---

## 10. Plan-Aware Reliability

Ariyo may offer different reliability features by plan, but core safety protections must apply to all plans.

### 10.1 Basic Reliability

Basic should provide:

- Reliable access to core product
- Standard shared infrastructure
- Standard monitoring
- Standard retry behavior
- Standard degraded-mode notices
- Standard email support or in-app support flow
- Basic incident transparency
- Safe failure behavior
- No advanced SLA commitment unless explicitly included

Basic must not include:

- Custom uptime SLA
- Dedicated support engineer
- Dedicated infrastructure
- Enterprise status reporting
- Custom incident communication channel
- Custom recovery objectives

### 10.2 Pro Reliability

Pro should provide:

- Stronger operational visibility
- More detailed AI employee health indicators
- Workflow failure visibility
- Integration sync status
- Usage and cost reliability alerts
- Higher automation limits
- More resilient workflow retries
- Priority support queue where commercially supported
- Better recovery guidance
- More detailed incident notifications

Pro may include standard uptime targets, but only if approved by operations and legal.

### 10.3 Smart Reliability

Smart should provide the fullest reliability experience:

- Advanced AI employee health dashboard
- Advanced workflow observability
- Deeper model provider fallback behavior
- Smarter degraded-mode routing
- Higher priority queues where supported
- Advanced anomaly detection
- Advanced cost/runaway protection
- Premium incident communication where commercially supported
- Enterprise-style reporting options where available
- Optional SLA add-on if operationally supported

Smart must not mean unlimited or uncontrolled reliability cost.

Smart must still respect rate limits, budgets, provider outages, maintenance windows, security controls, and safe failure rules.

---

## 11. Suggested Internal Reliability Targets

The following targets are internal starting points, not public commitments.

They must be validated with production data before being used externally.

### 11.1 Authentication

- Availability: very high
- Failure mode: deny unsafe access
- Alerting: immediate for elevated errors
- Recovery: prioritized

### 11.2 Authorization and Tenant Isolation

- Correctness target: effectively mandatory
- Failure mode: deny by default
- Public SLA: not expressed as uptime; treated as security requirement

### 11.3 Dashboard/API

- Availability target: high
- Latency: measured by endpoint class
- Degraded mode: show partial UI where possible

### 11.4 AI Employee Runtime

- Availability target: high
- Failure mode: explain, queue, retry, or route to human review
- Must not silently drop work

### 11.5 Workflow Engine

- Success measured by completed workflow attempts, retries, and failed terminal states
- Must support idempotency
- Must persist execution state
- Must support replay or manual recovery where safe

### 11.6 Knowledge Retrieval

- Must track retrieval latency
- Must track stale source age
- Must distinguish retrieval failure from no relevant result
- Must not hallucinate freshness

### 11.7 Integrations

- Must track provider-level failures
- Must distinguish Ariyo failure from third-party failure
- Must show reauthorization requirements
- Must support webhook replay protection

### 11.8 Audit Logs

- Must be durable
- Must be append-only where feasible
- Must not be silently dropped
- Must not depend on non-critical analytics pipeline

### 11.9 Billing and Entitlements

- Must fail safely
- Must never grant unauthorized access because billing service is temporarily unreachable
- Must support reconciliation

---

## 12. Uptime Calculation Rules

If Ariyo offers uptime reporting, it must define the calculation clearly.

### 12.1 Uptime Formula

Uptime may be calculated as:

```text
Uptime = (Total Minutes - Downtime Minutes) / Total Minutes
```

But this formula is only meaningful if downtime is defined.

### 12.2 Downtime Definition

Downtime may include:

- Core API unavailable
- Dashboard unavailable
- AI employee runtime unavailable
- Workflow execution unavailable
- Critical authentication unavailable

Downtime may exclude:

- Scheduled maintenance
- Customer-side configuration errors
- Third-party provider outages outside Ariyo control
- Beta features
- Minor UI bugs that do not prevent core use
- Plan limit enforcement
- Customer network issues

### 12.3 Partial Downtime

Ariyo must distinguish:

- Full outage
- Regional outage
- Feature-specific outage
- Provider-specific outage
- Integration-specific outage
- Customer-specific outage
- Degraded performance

Partial downtime must not be hidden behind global uptime averages.

---

## 13. Degraded Mode Strategy

Ariyo must degrade safely instead of failing mysteriously.

### 13.1 Degraded Mode Examples

If model provider is degraded:

- Use fallback provider if allowed.
- Use lower-cost/lower-latency model if safe.
- Queue non-urgent tasks.
- Route high-risk tasks to human review.
- Show clear degraded-state copy.

If knowledge sync is delayed:

- Use last known indexed knowledge if allowed.
- Display freshness warning.
- Prevent high-risk claims based on stale data.
- Allow manual resync.

If integration provider is down:

- Pause outbound actions.
- Continue internal draft generation.
- Mark action as pending.
- Retry with backoff.
- Notify admin if persistent.

If workflow engine is overloaded:

- Prioritize critical workflows.
- Delay non-critical jobs.
- Show queue state.
- Prevent duplicate execution.

If analytics pipeline is degraded:

- Do not block core product.
- Buffer events where feasible.
- Preserve billing and audit events separately.

### 13.2 Degraded Mode Requirements

Every degraded mode must define:

- Trigger condition
- Customer-visible message
- Internal alert
- Recovery condition
- Retry policy
- Data consistency rule
- Safety restriction
- Audit behavior

### 13.3 Degraded Mode Copy Rules

Degraded copy must be clear and calm.

Bad:

```text
Something went wrong.
```

Better:

```text
This AI employee is temporarily using a limited mode because one provider is unavailable. Drafting is still available, but automated actions are paused until the service recovers.
```

---

## 14. Failure Modes

Ariyo must explicitly model failure modes.

### 14.1 AI Provider Failure

Examples:

- Timeout
- Rate limit
- Provider outage
- Invalid response
- Safety refusal
- Structured output failure
- Tool-calling failure

Required behavior:

- Apply timeout.
- Retry only when safe.
- Use fallback model when permitted.
- Validate structured output.
- Do not pretend completion.
- Log provider error class.
- Attribute cost correctly.

### 14.2 Workflow Failure

Examples:

- Step timeout
- External API error
- Invalid transition
- Permission failure
- Missing data
- Tool failure

Required behavior:

- Persist state.
- Prevent duplicate side effects.
- Mark failed step clearly.
- Allow retry where safe.
- Route to human review where needed.
- Preserve audit trail.

### 14.3 Integration Failure

Examples:

- Expired token
- Revoked permission
- Provider quota exceeded
- Webhook signature invalid
- Provider schema change
- API unavailable

Required behavior:

- Mark connection status accurately.
- Stop unsafe actions.
- Request reauthorization where needed.
- Retry with backoff.
- Alert admin.
- Do not expose raw provider secrets or errors.

### 14.4 Knowledge Failure

Examples:

- Source unavailable
- Sync failed
- Embedding failed
- Vector index stale
- Permission mismatch
- Retrieval returns no context

Required behavior:

- Do not hallucinate source content.
- Show freshness or availability state.
- Allow resync.
- Respect permissions.
- Log retrieval quality issue.

### 14.5 Billing Failure

Examples:

- Payment provider unavailable
- Usage meter delayed
- Subscription status stale
- Entitlement check timeout

Required behavior:

- Do not grant unauthorized plan access.
- Do not double-charge.
- Preserve usage events.
- Support reconciliation.
- Show fair customer messaging.

### 14.6 Frontend Failure

Examples:

- Page crash
- Empty state missing
- Infinite loading
- API error unhandled
- Offline state

Required behavior:

- Show meaningful error.
- Preserve user input where feasible.
- Provide retry.
- Do not expose stack traces.
- Do not block unrelated sections.

---

## 15. Retry Policy

Retries must be deliberate.

Retries can improve reliability.

Retries can also create duplicate actions, runaway costs, provider abuse, or customer harm.

### 15.1 Safe Retry Candidates

Retries may be used for:

- Transient network errors
- Provider 5xx errors
- Queue worker restart
- Temporary rate limits with backoff
- Idempotent reads
- Idempotent writes with idempotency keys
- Sync jobs

### 15.2 Unsafe Retry Candidates

Retries must be restricted for:

- Payment actions
- Sending messages to customers
- Updating CRM records
- Creating tickets
- Sending emails
- Deleting data
- External side effects
- Approval-dependent actions

### 15.3 Retry Requirements

Every retryable operation must define:

- Maximum attempts
- Backoff strategy
- Idempotency key
- Timeout
- Error classes
- Final failed state
- User-visible status
- Cost attribution

### 15.4 Retry Backoff

Default retry pattern should use exponential backoff with jitter.

No system may retry aggressively without rate-limit awareness.

---

## 16. Timeout Policy

Every external call must have a timeout.

No AI provider, integration provider, database query, webhook handler, or internal API call may wait indefinitely.

Timeouts must be set by operation type:

- UI request timeout
- AI generation timeout
- Background workflow timeout
- Webhook processing timeout
- Sync job timeout
- File processing timeout
- Export timeout

Timeouts must produce actionable states, not silent failures.

---

## 17. Idempotency Policy

All side-effecting operations must use idempotency where possible.

Idempotency is required for:

- Workflow steps
- Integration actions
- Webhook processing
- Message sending
- Billing usage events
- Payment-related operations
- Knowledge sync jobs
- File ingestion
- AI tool calls that trigger external actions

Ariyo must prevent duplicate side effects during retries, webhook replays, queue redelivery, provider timeouts, and worker restarts.

---

## 18. Queue Reliability

Ariyo depends on background work.

Queue reliability is therefore product reliability.

### 18.1 Queue Use Cases

Queues may be used for:

- AI execution jobs
- Workflow steps
- Knowledge sync
- File processing
- Integration sync
- Webhook processing
- Notification delivery
- Analytics ingestion
- Billing usage aggregation
- Evaluation jobs

### 18.2 Queue Requirements

Every queue must define:

- Owner
- Purpose
- Priority
- Retry policy
- Dead-letter behavior
- Max job age
- Visibility timeout
- Concurrency limit
- Rate limit
- Monitoring
- Alert threshold

### 18.3 Queue Priority

Suggested priority order:

1. Security and audit events
2. Billing and entitlement-critical events
3. Customer-facing AI employee tasks
4. Workflow execution
5. Human review notifications
6. Integration sync
7. Knowledge indexing
8. Analytics enrichment
9. Non-critical recommendations

Analytics must never starve operational work.

### 18.4 Dead Letter Queues

Failed jobs must not disappear.

Dead-letter queues must be monitored.

Ariyo must have runbooks for replaying, inspecting, and safely resolving dead-letter jobs.

---

## 19. Data Consistency

Reliability requires knowing when data is fresh, stale, partial, or unavailable.

### 19.1 Consistency Labels

Ariyo should label operational data as:

```text
fresh
stale
syncing
partially_synced
failed
unknown
```

### 19.2 Stale Data Rules

When data is stale:

- Show freshness where relevant.
- Avoid high-risk decisions.
- Prefer review for sensitive actions.
- Trigger resync if allowed.
- Do not claim real-time freshness.

### 19.3 Eventual Consistency

If a feature is eventually consistent, the UI and API contract must reflect that.

Examples:

- Analytics may lag.
- Knowledge indexing may lag.
- Integration sync may lag.
- Billing reconciliation may lag.

Eventual consistency must not be hidden when users depend on recency.

---

## 20. AI Reliability

AI reliability is not only provider uptime.

Ariyo must track whether AI employees complete useful work safely.

### 20.1 AI Execution SLIs

Suggested AI reliability indicators:

- AI execution success rate
- AI execution timeout rate
- Structured output validation failure rate
- Tool call failure rate
- Human review escalation rate
- Provider fallback rate
- Safety block rate
- RAG no-context rate
- RAG stale-context rate
- Cost per successful AI task
- Retry count per AI task

### 20.2 AI Output Reliability

Ariyo must distinguish:

- Successful generation
- Valid structured output
- Safe output
- Useful output
- Customer-approved output
- Action-completed output

A generated answer is not automatically a successful business outcome.

### 20.3 AI Fallback

Fallback must consider:

- Model capability
- Safety profile
- Customer plan
- Data sensitivity
- Cost budget
- Latency tolerance
- Tool-calling support
- Structured output support

Do not fallback to a model that cannot safely complete the task.

### 20.4 AI Degraded Mode

When AI quality or provider availability is degraded, Ariyo may:

- Disable autonomous actions
- Keep drafting enabled
- Require human review
- Use cached knowledge
- Use lower-cost model for low-risk work
- Delay Smart-level reasoning
- Notify admins

---

## 21. RAG Reliability

Knowledge reliability affects AI reliability.

### 21.1 RAG Reliability Indicators

Ariyo must track:

- Source sync success rate
- Index freshness
- Embedding job failure rate
- Retrieval latency
- No-result rate
- Permission-filter rejection rate
- Stale-source usage rate
- Citation/source availability rate

### 21.2 RAG Failure Rules

If retrieval fails:

- The AI employee must not pretend it used knowledge.
- The system must distinguish no context from technical failure.
- Sensitive actions should route to review.
- Admins should see knowledge health.

### 21.3 Knowledge Freshness

For customer-facing AI employees, stale knowledge must be visible or operationally handled.

The product must support freshness-aware answers where needed.

---

## 22. Integration Reliability

Integrations are external dependencies.

Ariyo must not let external provider failure appear as random Ariyo failure.

### 22.1 Integration SLIs

Track:

- Connection health
- Reauthorization rate
- Sync success rate
- Webhook success rate
- Webhook invalid signature rate
- Provider error rate
- Provider rate-limit rate
- Action success rate
- Action latency
- Dead-letter event count

### 22.2 Integration Statuses

Use statuses consistent with `integration-ecosystem.md`:

```text
available
setup_required
connecting
connected
needs_reauth
degraded
failed
disconnected
disabled
revoked
```

### 22.3 Integration Customer Copy

Do not show raw provider errors.

Example:

```text
Google Drive needs to be reconnected before this AI employee can use the latest documents.
```

Not:

```text
OAuth refresh token invalid_grant error.
```

---

## 23. Human Review Reliability

Human review is part of Ariyo reliability.

If a high-risk action requires approval, review failure must not become silent automation failure.

### 23.1 Review SLIs

Track:

- Review queue latency
- Pending review count
- Expired review count
- Approval success rate
- Rejection rate
- Reviewer notification delivery rate
- Escalation rate

### 23.2 Review Failure Rules

If review cannot be completed:

- Action must not execute.
- Status must remain clear.
- Reviewer must be notified where possible.
- Escalation may occur.
- Expiration must be explicit.

---

## 24. Security Reliability

Security controls must remain reliable under stress.

### 24.1 Security-Critical Reliability Rules

- Permission checks must fail closed.
- Tenant isolation must not depend on frontend logic.
- Security audit logs must not be optional analytics events.
- Kill switches must remain available during incidents.
- Secret rotation must not break silently.
- Rate limits must protect against abuse.

### 24.2 Security Incident Reliability

During security incidents, Ariyo must be able to:

- Disable AI employees
- Disable tool calls
- Disable integrations
- Revoke sessions
- Rotate secrets
- Preserve evidence
- Notify affected parties where required
- Recover safely

---

## 25. Billing Reliability

Billing reliability protects customer trust and Ariyo margin.

### 25.1 Billing SLIs

Track:

- Usage event ingestion success
- Usage reconciliation delay
- Payment webhook success
- Subscription status freshness
- Entitlement check success
- Plan change propagation time
- Failed payment handling accuracy

### 25.2 Billing Failure Rules

Ariyo must not:

- Double-charge
- Lose usage events silently
- Grant unauthorized Smart usage
- Cut off customers unfairly due to temporary payment provider error
- Hide billing state changes

Billing must have reconciliation and support workflows.

---

## 26. Maintenance Windows

Scheduled maintenance must be controlled.

### 26.1 Maintenance Requirements

Before planned maintenance:

- Define affected systems.
- Define expected impact.
- Define customer-facing message.
- Define rollback plan.
- Define maintenance window.
- Notify customers where required.
- Pause risky workflows if needed.

### 26.2 Maintenance Copy

Good:

```text
Ariyo will perform scheduled maintenance on the workflow engine from 01:00 to 01:30 UTC. Drafting and dashboard access should remain available, but automated workflow execution may be delayed.
```

Bad:

```text
We are updating things.
```

---

## 27. Incident Classification

Ariyo must classify incidents consistently.

### 27.1 SEV0: Critical Incident

Criteria:

- Security breach or suspected breach
- Tenant isolation failure
- Data loss or unauthorized access
- Billing overcharge at scale
- System-wide outage of critical services
- AI employees executing unauthorized actions

Required response:

- Immediate incident command
- Executive notification
- Security/legal involvement where applicable
- Customer communication where applicable
- Kill switch evaluation
- Postmortem required

### 27.2 SEV1: Major Incident

Criteria:

- Major customer-facing outage
- AI employee runtime broadly unavailable
- Workflow engine unavailable
- Authentication outage
- Critical integration system failure
- Widespread degraded performance

Required response:

- Incident owner assigned
- Status update cadence
- Customer communication
- Engineering response
- Postmortem required

### 27.3 SEV2: Moderate Incident

Criteria:

- Partial feature outage
- Specific provider degraded
- Specific integration sync issues
- Elevated error rates
- Delayed workflows

Required response:

- Triage
- Internal updates
- Customer updates when impact is visible
- Root cause review

### 27.4 SEV3: Minor Incident

Criteria:

- Small bug with workaround
- Non-critical UI degradation
- Delayed analytics
- Isolated customer issue

Required response:

- Track and resolve
- Support response where needed
- No formal postmortem unless repeated

---

## 28. Incident Lifecycle

Every incident must move through clear stages.

```text
detected
triaged
classified
owner_assigned
mitigation_in_progress
customer_communication_active
resolved
monitoring
postmortem_required
postmortem_completed
actions_tracked
```

No incident may be considered complete until follow-up actions are assigned or explicitly rejected.

---

## 29. Incident Roles

Ariyo must define incident roles.

### 29.1 Incident Commander

Owns coordination, priority, and timeline.

### 29.2 Technical Lead

Owns diagnosis and mitigation.

### 29.3 Communications Lead

Owns customer/internal updates.

### 29.4 Support Lead

Owns customer tickets and impacted accounts.

### 29.5 Security/Legal Lead

Required for security, privacy, data, compliance, or contractual incidents.

### 29.6 Product Lead

Owns product impact, workaround, and customer-facing decisions.

---

## 30. Incident Communication

Communication is part of reliability.

### 30.1 Internal Incident Updates

Internal updates should include:

- Current status
- Customer impact
- Systems affected
- Suspected cause
- Mitigation progress
- Next update time
- Owner

### 30.2 Customer Updates

Customer updates should include:

- What is affected
- Who is affected if known
- What still works
- Workaround if available
- Estimated next update, not unsupported ETA
- Resolution confirmation

Do not speculate publicly.

Do not blame providers without confirmation.

Do not expose sensitive technical details.

### 30.3 Status Page

Ariyo should eventually maintain a status page for enterprise trust.

Status page components may include:

- Dashboard
- API
- AI employee runtime
- Workflow engine
- Knowledge sync
- Integrations
- Billing
- Notifications
- Model provider routing

Status page must not reveal sensitive security details.

---

## 31. Postmortem Policy

Postmortems must be blameless but accountable.

### 31.1 Required Postmortems

Postmortems are required for:

- SEV0
- SEV1
- Repeated SEV2 incidents
- Security incidents
- Data loss incidents
- Billing incidents with customer financial impact
- AI employee unsafe action incidents

### 31.2 Postmortem Template

Each postmortem must include:

```text
Incident title
Severity
Date/time range
Customer impact
Systems affected
Detection source
Timeline
Root cause
Contributing factors
What worked
What failed
Immediate remediation
Long-term prevention
Owner for each action item
Due dates
Customer communication summary
Evidence links
```

### 31.3 Postmortem Rules

A postmortem must not end with vague actions.

Bad:

```text
Improve monitoring.
```

Good:

```text
Add alert when workflow queue age exceeds 5 minutes for 3 consecutive checks. Owner: Backend. Due: YYYY-MM-DD.
```

---

## 32. Recovery Objectives

Ariyo must define internal recovery objectives.

### 32.1 RTO: Recovery Time Objective

How quickly a system should be restored.

### 32.2 RPO: Recovery Point Objective

How much data loss is acceptable.

### 32.3 Suggested Internal Expectations

Tier 0 systems should have the strictest RTO/RPO expectations.

Examples:

- Audit logs: very low data loss tolerance
- Billing events: very low data loss tolerance
- Workflow state: low data loss tolerance
- Analytics: higher tolerance may be acceptable
- Non-critical recommendations: higher tolerance may be acceptable

Public RTO/RPO commitments must be legal and operationally approved.

---

## 33. Backup and Restore

Backups are not enough.

Restore must be tested.

### 33.1 Backup Requirements

Ariyo must define backups for:

- Primary database
- Object storage
- Audit logs
- Configuration
- Secrets metadata, not plaintext secrets
- Workflow state
- Billing records
- Knowledge source metadata

### 33.2 Restore Testing

Restore tests must verify:

- Data integrity
- Tenant isolation
- Permission integrity
- Audit log consistency
- Billing event consistency
- Workflow state consistency

Untested backups are not reliable backups.

---

## 34. Deployment Reliability

Every deployment can create reliability risk.

### 34.1 Deployment Requirements

Production releases must support:

- CI checks
- Automated tests
- Migration safety review
- Feature flags
- Rollback plan
- Monitoring after deploy
- Error budget awareness
- Security gate where relevant

### 34.2 Feature Flags

Feature flags should be used for:

- AI behavior changes
- Model provider changes
- Workflow engine changes
- Billing logic changes
- Integration provider changes
- Admin permission changes
- Enterprise features

Feature flags must be auditable for critical controls.

### 34.3 Rollback Rules

Rollback must be possible for:

- Frontend release
- Backend release
- AI prompt version
- Model routing change
- Workflow template change
- Integration adapter change
- Billing config change

Rollback must not corrupt customer data.

---

## 35. Error Budgets

Ariyo may use error budgets internally.

An error budget defines how much unreliability is acceptable before feature velocity must slow down.

If a system exceeds its error budget:

- Freeze risky releases.
- Prioritize reliability work.
- Review incidents.
- Improve monitoring.
- Reduce operational complexity.

Do not continue shipping high-risk features while core reliability is below target.

---

## 36. Observability Requirements

Reliability requires observability.

Ariyo must observe:

- API errors
- API latency
- Frontend errors
- AI execution failures
- Model provider errors
- Workflow failures
- Queue depth and age
- Integration sync failures
- Webhook failures
- Knowledge sync failures
- Billing webhook failures
- Permission denials
- Audit log persistence
- Rate limits
- Cost anomalies
- Security anomalies

Observability must be actionable, not decorative.

---

## 37. Alerting Policy

Alerts must be meaningful.

### 37.1 Alert Rules

Alert when action is needed.

Do not alert for noisy, non-actionable conditions.

Every alert must have:

- Owner
- Severity
- Runbook
- Trigger threshold
- Escalation rule
- Suppression rule

### 37.2 Example Alerts

Alert examples:

- Authentication error rate above threshold
- Authorization error spike
- AI provider timeout rate above threshold
- Workflow queue age above threshold
- Payment webhook failure above threshold
- Audit log write failure
- Integration webhook signature failures spike
- Tenant isolation anomaly
- Smart plan cost anomaly
- Dead-letter queue growth

---

## 38. Runbooks

Every critical system must have a runbook.

### 38.1 Runbook Template

```text
System name
Owner
Customer impact if down
Symptoms
Dashboards
Alerts
Common causes
Immediate mitigations
Rollback steps
Escalation contacts
Customer communication guidance
Post-incident checks
```

### 38.2 Required Runbooks

Ariyo should maintain runbooks for:

- API outage
- Authentication outage
- AI provider outage
- Workflow queue backlog
- Integration outage
- Knowledge sync failures
- Billing webhook failures
- Database performance issue
- Deployment rollback
- Security incident
- Cost runaway incident
- Data export/delete failure

---

## 39. Customer-Facing Reliability UX

The frontend must communicate reliability states clearly.

### 39.1 Required UI States

Use visible states for:

- Operational
- Degraded
- Delayed
- Retrying
- Failed
- Needs reauthorization
- Waiting for review
- Paused
- Disabled
- Resolved

### 39.2 Do Not Hide Operational Truth

Do not show everything as `Active` if:

- Knowledge sync is failing
- Integration token expired
- Workflow is paused
- AI provider is degraded
- Billing entitlement is blocked
- Review is pending

### 39.3 Reliability Copy Examples

Good:

```text
This workflow is delayed because the connected CRM is rate-limiting requests. Ariyo will retry automatically.
```

Good:

```text
This AI employee can still draft responses, but publishing is paused until a reviewer approves the action.
```

Bad:

```text
Error.
```

---

## 40. API Reliability Contract

APIs must return reliable errors.

### 40.1 Error Response Requirements

API errors should include:

- Stable error code
- Safe message
- Request ID
- Retryability indicator where useful
- Field-specific validation errors where relevant

Do not expose secrets, stack traces, provider internals, or raw sensitive errors.

### 40.2 Retryability

APIs should distinguish:

```text
retryable
not_retryable
requires_user_action
requires_admin_action
requires_reauth
requires_review
```

---

## 41. Reliability Testing

Reliability must be tested.

### 41.1 Required Reliability Tests

Test:

- API timeout handling
- Provider fallback
- Queue retry
- Dead-letter behavior
- Workflow idempotency
- Webhook replay
- Integration rate limit
- Expired token
- Permission failure
- Billing webhook retry
- AI structured output failure
- RAG stale knowledge
- Frontend error states
- Feature flag rollback
- Database migration rollback

### 41.2 Chaos and Failure Injection

For mature environments, Ariyo should test controlled failure scenarios:

- AI provider unavailable
- Redis unavailable
- Queue worker crash
- External integration 500 errors
- Vector database slow
- Payment provider webhook delay
- Database read replica lag
- High API latency

Failure testing must be safe and not harm customer data.

---

## 42. Reliability Acceptance Criteria

A new feature is not production-ready unless reliability behavior is defined.

Every critical feature must answer:

- What happens if the database is slow?
- What happens if the AI provider times out?
- What happens if the integration fails?
- What happens if the user loses permission mid-flow?
- What happens if a queue job retries?
- What happens if a webhook is delivered twice?
- What happens if a deployment is rolled back?
- What customer-visible state appears?
- What alert fires?
- What audit log is written?

---

## 43. Reliability and Cost Control

Reliability and cost are connected.

Retry storms can create AI cost spikes.

Fallback models can increase cost.

Smart plan automation can generate expensive cascades.

Therefore:

- Retries must be cost-aware.
- Fallback must respect budget.
- Smart workflows must have runaway protection.
- Failed AI calls must be attributed.
- Provider outage must not cause uncontrolled retry spending.
- Cost anomalies must be treated as reliability signals.

---

## 44. Reliability and Compliance

Reliability failures may create compliance risk.

Examples:

- Data export unavailable
- Data deletion fails
- Audit logs missing
- Consent status not enforced
- Customer communication not sent
- Unauthorized access due to degraded permission system

Compliance-critical operations must be Tier 0 or Tier 1 depending on impact.

---

## 45. Reliability and Enterprise Readiness

Enterprise customers expect proof.

Ariyo should be able to provide:

- Uptime history where available
- Incident process summary
- Backup and restore process summary
- Security monitoring summary
- SLA terms if approved
- Subprocessor/dependency transparency where relevant
- Audit export capability
- Support escalation process
- Disaster recovery posture

Do not provide unsupported enterprise claims.

---

## 46. Customer Support Reliability

Support is part of reliability.

A reliable product with no support path is not enterprise-ready.

Ariyo should define:

- Support channels by plan
- Response expectations by severity
- Escalation paths
- Incident communication templates
- Customer-specific impact lookup
- Admin notification policy
- Support access governance

Support staff must not bypass security controls during incidents.

---

## 47. Status and Health Model

Ariyo should model system health in product and backend.

### 47.1 Health Statuses

```text
operational
degraded
partial_outage
major_outage
maintenance
unknown
```

### 47.2 Resource Health

Resources should expose health where useful:

- AI employee health
- Workflow health
- Integration health
- Knowledge source health
- Billing health
- Channel health

### 47.3 Health Must Be Computed From Signals

Do not rely only on manual status toggles.

Health should derive from telemetry, errors, queue age, provider state, sync freshness, and configuration validity.

---

## 48. Reliability Data Model

Ariyo should consider entities such as:

- `ServiceComponent`
- `ReliabilityIncident`
- `IncidentUpdate`
- `IncidentImpact`
- `ServiceHealthSnapshot`
- `SLOTarget`
- `SLIObservation`
- `MaintenanceWindow`
- `Runbook`
- `ErrorBudget`
- `ReliabilityAlert`
- `CustomerImpactRecord`
- `RecoveryAction`
- `Postmortem`

These entities should be organization-safe and not leak other customers' data.

---

## 49. Reliability Event Taxonomy

Ariyo analytics and observability should capture events such as:

```text
service_degraded
service_recovered
incident_created
incident_severity_changed
incident_customer_notified
maintenance_scheduled
maintenance_started
maintenance_completed
workflow_retry_scheduled
workflow_dead_lettered
ai_provider_fallback_used
ai_execution_timed_out
integration_reauth_required
knowledge_sync_stale
billing_webhook_retry_failed
audit_log_write_failed
queue_backlog_threshold_crossed
rollback_started
rollback_completed
```

Reliability events must be separated from vanity product analytics.

---

## 50. Disaster Recovery

Ariyo must plan for major failures.

Disaster recovery planning should include:

- Database failure
- Region failure if multi-region exists
- Object storage failure
- Provider outage
- Security incident
- Corrupt deployment
- Data migration failure
- Billing provider incident
- Major integration provider outage

Disaster recovery must define:

- Decision owner
- Recovery steps
- Communication steps
- Data integrity checks
- Customer impact analysis
- Post-recovery validation

---

## 51. Reliability Roadmap

Ariyo should mature reliability in stages.

### Stage 1: MVP Reliability

- Basic monitoring
- Error tracking
- Safe failure states
- Retry for background jobs
- Manual incident process
- Basic rollback
- Critical logs

### Stage 2: Operational Reliability

- Component health model
- Queue dashboards
- Provider fallback
- Integration health
- Workflow recovery
- Status page draft
- Runbooks
- Postmortems

### Stage 3: Enterprise Reliability

- SLOs
- Error budgets
- SLA readiness
- Support escalation
- Backup restore tests
- Incident automation
- Customer impact analysis
- Reliability reports

### Stage 4: Advanced Reliability

- Predictive anomaly detection
- Automated mitigation
- Multi-provider smart routing
- Advanced disaster recovery
- Enterprise SLA add-ons
- Reliability score per customer/account

---

## 52. Forbidden Reliability Patterns

Ariyo must avoid these patterns:

```text
claiming 100% uptime
promising zero downtime without architecture support
using uptime claims without measurement
hiding degraded mode from users
showing all systems as active when sync is failing
retrying side effects without idempotency
retrying AI calls without cost controls
retrying provider calls aggressively without backoff
failing open on permission errors
marking external action as successful before provider confirmation
losing failed jobs silently
using analytics pipeline as audit log pipeline
showing raw provider errors to customers
using one generic error state for all failures
blocking core product because analytics is down
deploying critical features without rollback
running database migrations without recovery plan
ignoring queue backlog
not monitoring dead-letter queues
not testing backup restore
not communicating customer-facing incidents
not writing postmortems for severe incidents
confusing AI generation success with business task success
using SLA language in sales before legal/ops approval
blaming third-party providers without verified evidence
allowing Smart plan automation to create runaway retries
letting reliability alerts become noisy and ignored
```

---

## 53. Golden Rule

Ariyo must be reliable in the way customers experience work, not only in the way infrastructure reports uptime.

If an AI employee cannot safely complete, delay, explain, retry, escalate, or recover from a task, the system is not reliable enough for that task.

---

## 54. Final Rule

Every Ariyo feature must define its failure behavior before it is considered production-ready.

A feature without failure design is incomplete.

A workflow without retry and recovery design is incomplete.

An AI employee without degraded mode is incomplete.

An integration without health and reauthorization behavior is incomplete.

An SLA without measurement is not a promise.

It is a liability.
