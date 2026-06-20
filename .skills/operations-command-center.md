# Ariyo Operations Command Center Skill

## 1. Purpose

This skill defines how Ariyo must design, build, govern, and operate its internal and customer-facing Operations Command Center.

The Operations Command Center is the real-time control layer for Ariyo's AI Employee Operating System. It gives authorized users a trustworthy operational view of AI employees, workflows, integrations, knowledge systems, model providers, costs, incidents, customer health, revenue signals, security alerts, human review queues, and platform reliability.

This skill must be used whenever Ariyo designs or implements:

- Internal operations dashboards
- Customer admin command centers
- Executive dashboards
- AI employee monitoring views
- Workflow monitoring views
- Incident management views
- Security alert views
- Cost control dashboards
- Customer health dashboards
- Revenue operations dashboards
- Human review control panels
- Reliability and SLA monitoring screens
- Admin alerting and notification systems
- Operational APIs for real-time status
- AI operations assistants

The Command Center must not be a decorative dashboard. It must help real operators detect what matters, understand why it matters, decide what to do next, and act safely.

---

## 2. Dependencies

This skill depends on and must be consistent with:

- `product-strategy.md`
- `domain-model.md`
- `api-contracts.md`
- `backend-architecture.md`
- `ai-employee-architecture.md`
- `workflow-automation.md`
- `knowledge-rag.md`
- `prompt-tool-orchestration.md`
- `human-review-governance.md`
- `admin-permissions.md`
- `integration-ecosystem.md`
- `ai-cost-control.md`
- `reliability-sla.md`
- `observability-analytics-events.md`
- `security-threat-model.md`
- `data-governance-privacy.md`
- `customer-success-playbooks.md`
- `customer-lifecycle-automation.md`
- `revenue-operations-system.md`
- `finance-accounting-controls.md`
- `quality-assurance-system.md`
- `deployment-ops.md`
- `frontend-design.md`
- `frontend-components.md`
- `frontend-performance.md`
- `frontend-responsive.md`
- `frontend-copywriting.md`

If these skills conflict, the stricter rule must win for security, privacy, billing, reliability, and AI safety.

---

## 3. Core Contract

Ariyo Operations Command Center is not a dashboard.

Ariyo Operations Command Center is the live operating layer that helps authorized humans understand, supervise, intervene, and improve the system across AI employees, workflows, customers, revenue, costs, reliability, security, billing, and growth.

Every command center view must answer four questions:

1. What is happening?
2. Why does it matter?
3. What should be done next?
4. Who is allowed to do it?

Ariyo must never show operational data without context, permission boundaries, severity, source, timestamp, owner, and safe action paths.

---

## 4. Command Center Philosophy

The Command Center exists to reduce operational uncertainty.

It must prioritize:

- Signal over noise
- Action over vanity metrics
- Root cause over surface symptoms
- Safety over speed
- Permission-aware intervention over unrestricted control
- Customer impact over internal technical detail
- Plan-aware operations over one-size-fits-all dashboards
- Auditability over convenience
- Recovery over blame
- Trust over spectacle

Ariyo must avoid the common SaaS mistake of creating many dashboards that look impressive but do not help anyone operate the business.

---

## 5. Command Center Personas

### 5.1 Founder / Executive Operator

Needs:

- Company-wide health
- Revenue overview
- Customer risk
- AI cost exposure
- Major incidents
- Platform reliability
- Growth signals
- Upgrade opportunities
- Strategic bottlenecks

Must not be forced into low-level logs.

### 5.2 Operations Manager

Needs:

- AI employee status
- Workflow throughput
- Failed jobs
- Human review queues
- Integration health
- Customer onboarding progress
- Incident workload
- SLA risk

Must be able to act or route work.

### 5.3 Customer Success Manager

Needs:

- Account health
- Activation status
- Adoption gaps
- Risk signals
- Expansion opportunities
- Support issues
- Education progress
- Marketplace usage

Must understand why a customer is healthy or at risk.

### 5.4 Support Agent

Needs:

- Customer issue context
- Known incidents
- Recent errors
- Plan and entitlement limits
- Related AI employee executions
- Support article suggestions
- Escalation path

Must not see sensitive customer data beyond support permissions.

### 5.5 Security Operator

Needs:

- Suspicious activity
- Privilege changes
- Authentication anomalies
- Tool abuse
- Prompt injection indicators
- Webhook failures
- API abuse
- Data export events
- Incident response actions

Must have emergency containment paths.

### 5.6 Finance / RevOps Operator

Needs:

- Revenue health
- Failed payments
- refund exposure
- marketplace payouts
- commission status
- AI cost-to-revenue
- plan margin risk
- billing reconciliation status

Must not modify product behavior unless authorized.

### 5.7 Customer Admin

Needs:

- Own organization's AI employee status
- Usage and cost
- workflow health
- integration health
- review queue status
- user access
- plan limits
- audit trail
- upgrade recommendations

Must never see cross-tenant data.

---

## 6. Command Center Types

Ariyo must support multiple command center surfaces.

### 6.1 Internal Ariyo Command Center

Used by Ariyo team to operate the platform.

Includes:

- Global platform health
- All customer health summaries
- Incident command
- AI provider health
- infrastructure status
- revenue and billing health
- support load
- security alerts
- marketplace integrity

### 6.2 Customer Organization Command Center

Used by customer admins and operators.

Includes only the customer's own organization data:

- AI employees
- workflows
- knowledge sources
- integrations
- costs
- review queues
- audit logs
- plan usage
- support status

### 6.3 Executive Command Center

High-level leadership view.

Includes:

- North Star metrics
- MRR/ARR movement
- activation and retention
- AI employee adoption
- cost margin risk
- top customer risks
- major incidents
- launch and growth metrics

### 6.4 Incident Command Center

War-room mode for active incidents.

Includes:

- incident timeline
- impacted services
- impacted customers
- owner and responders
- severity
- mitigation steps
- customer communication state
- rollback and recovery actions
- postmortem link

### 6.5 AI Employee Command Center

Focused supervision layer for AI employees.

Includes:

- status
- task queue
- success/failure rate
- blocked actions
- review queue
- tool usage
- model usage
- cost
- safety flags
- customer outcomes

---

## 7. Core Operating Objects

The Command Center must aggregate and display operational objects from across Ariyo.

### 7.1 OperationalSignal

Represents a meaningful operational signal.

Fields:

```json
{
  "id": "sig_123",
  "organization_id": "org_123",
  "scope": "platform|organization|employee|workflow|customer|billing|security|integration",
  "category": "reliability|cost|security|customer_health|revenue|ai_safety|workflow|integration|support",
  "severity": "info|low|medium|high|critical",
  "status": "open|acknowledged|investigating|mitigating|resolved|dismissed",
  "title": "Workflow failure rate increased",
  "summary": "Customer support triage workflow failed 18 times in the last hour.",
  "source": "workflow_monitor",
  "source_object_type": "workflow",
  "source_object_id": "wf_123",
  "detected_at": "2026-06-18T10:30:00Z",
  "last_seen_at": "2026-06-18T10:41:00Z",
  "owner_user_id": "user_123",
  "recommended_actions": [],
  "links": [],
  "audit_id": "audit_123"
}
```

### 7.2 OperationalAction

Represents a safe action that can be taken from the Command Center.

Examples:

- Pause AI employee
- Retry workflow
- Disable integration
- Reauthorize connection
- Escalate incident
- Send customer update
- Create support ticket
- Apply temporary rate limit
- Trigger rollback
- Assign reviewer
- Approve safe action
- Block unsafe action

Every action must have:

- permission check
- risk level
- confirmation policy
- audit log
- rollback or recovery path when applicable

### 7.3 OperationalSnapshot

Point-in-time status summary.

Used for:

- health history
- incident analysis
- executive reporting
- SLA evidence
- customer review

### 7.4 CommandCenterView

Saved view configuration.

Fields:

```json
{
  "id": "view_123",
  "name": "Smart Plan Cost Risk",
  "visibility": "private|team|organization|platform",
  "owner_user_id": "user_123",
  "filters": {
    "plan": ["smart"],
    "severity": ["high", "critical"],
    "category": ["cost", "ai_usage"]
  },
  "widgets": [],
  "refresh_interval_seconds": 60
}
```

### 7.5 AlertRule

Defines automatic alerting.

Fields:

- metric
- threshold
- comparison
- window
- audience
- channel
- severity
- suppression policy
- escalation policy
- auto-action policy

---

## 8. Command Center Navigation Structure

Ariyo should use a clear navigation model.

Recommended primary sections:

```text
Overview
AI Employees
Workflows
Incidents
Customers
Revenue
Costs
Security
Integrations
Knowledge
Human Review
Support
Marketplace
System Health
Audit Logs
Settings
```

Customer-facing command centers may show fewer sections depending on plan and permissions.

---

## 9. Global Overview

The Overview screen must show a concise operational status.

### 9.1 Required Cards

- Platform health
- Active incidents
- AI employee health
- Workflow success rate
- Human review backlog
- Integration health
- AI cost burn
- Security alerts
- Customer health
- Revenue signals
- Support load
- SLA risk

### 9.2 Required Rules

Overview must not become a wall of numbers.

Each card must show:

- status
- metric
- change from previous period
- severity
- business impact
- next action

Bad:

```text
1,482 workflow executions
```

Good:

```text
Workflow success rate is 98.6%. Down 1.4% from yesterday. Two Smart customers are impacted by integration timeouts. Review required.
```

---

## 10. AI Employee Operations

The Command Center must make AI employees observable and controllable.

### 10.1 AI Employee Statuses

```text
draft
training
ready
active
busy
waiting_for_review
blocked
paused
degraded
failed
disabled
archived
```

### 10.2 AI Employee Health Metrics

- task success rate
- failed task rate
- blocked task count
- review required count
- average completion time
- tool call success rate
- model error rate
- knowledge retrieval quality
- hallucination risk flags
- cost per task
- cost per outcome
- customer satisfaction signal
- business outcome count

### 10.3 Required AI Employee Actions

- pause employee
- resume employee
- send to review mode
- disable risky tool
- change model profile
- reduce autonomy
- retry failed task
- inspect recent executions
- view related knowledge sources
- view related workflows
- create incident
- create improvement task

### 10.4 AI Employee Safety Guardrails

The Command Center must not allow uncontrolled intervention.

Examples:

- A support operator may pause an AI employee but may not change billing settings.
- A customer admin may disable their own AI employee but not inspect another customer's logs.
- A security operator may revoke a tool permission but must provide an audit reason.
- Smart plan may show deeper AI reasoning telemetry if allowed by privacy settings, but sensitive prompt content must be redacted by default.

---

## 11. Workflow Operations

The Command Center must support workflow supervision.

### 11.1 Workflow Statuses

```text
draft
ready
active
running
waiting_for_review
waiting_for_integration
retrying
partially_failed
failed
paused
disabled
completed
```

### 11.2 Workflow Metrics

- executions
- success rate
- failure rate
- retry count
- queue depth
- average latency
- step-level error rate
- approval wait time
- integration wait time
- model cost per execution
- value outcome per execution

### 11.3 Workflow Views

Each workflow must show:

- current health
- last execution
- failure trend
- high-risk steps
- approval requirements
- integration dependencies
- cost trend
- responsible owner
- audit trail

### 11.4 Workflow Actions

- pause workflow
- resume workflow
- retry failed execution
- cancel execution
- reassign review
- skip non-critical step if allowed
- disable integration step
- create fix task
- create customer update

---

## 12. Incident Operations

The Command Center must include a serious incident management layer.

### 12.1 Incident Severity Levels

```text
SEV0: Critical platform-wide outage or major security incident
SEV1: Major customer-impacting outage or unsafe AI behavior
SEV2: Significant degradation impacting multiple customers
SEV3: Limited issue impacting one customer or one component
SEV4: Minor issue, warning, or non-urgent operational anomaly
```

### 12.2 Incident Object

```json
{
  "id": "inc_123",
  "severity": "SEV1",
  "status": "open|investigating|identified|mitigating|monitoring|resolved|postmortem_required|closed",
  "title": "AI provider latency causing workflow delays",
  "summary": "Model provider latency increased workflow completion time for Smart customers.",
  "impacted_services": ["ai_execution", "workflow_engine"],
  "impacted_plans": ["smart"],
  "impacted_customers_count": 18,
  "started_at": "2026-06-18T11:00:00Z",
  "detected_at": "2026-06-18T11:04:00Z",
  "resolved_at": null,
  "owner_user_id": "user_123",
  "status_page_public": true,
  "customer_updates": [],
  "timeline": []
}
```

### 12.3 Incident Command View

Must show:

- severity
- impact
- owner
- timeline
- responders
- affected customers
- affected services
- related metrics
- mitigation options
- customer communication status
- postmortem requirement

### 12.4 Incident Actions

- declare incident
- update status
- assign commander
- add responder
- notify customers
- publish status page update
- trigger rollback
- activate fallback provider
- pause affected workflows
- disable risky tool
- create postmortem

---

## 13. Cost Operations

The Command Center must make AI costs visible and controllable.

### 13.1 Cost Views

Required views:

- total AI spend
- spend by organization
- spend by plan
- spend by AI employee
- spend by workflow
- spend by model provider
- spend by integration
- spend by RAG retrieval
- spend by GEO tracking
- margin risk
- forecasted monthly spend

### 13.2 Plan-Aware Cost Operations

#### Basic

Show:

- simple usage meter
- remaining allowance
- upgrade recommendation
- hard caps
- safe throttling

Do not overwhelm with deep cost analytics.

#### Pro

Show:

- per-employee cost
- per-workflow cost
- budget alerts
- monthly forecast
- cost attribution
- overage warnings

#### Smart

Show:

- predictive cost risk
- model mix analysis
- ROI by automation
- anomaly detection
- cost-to-revenue insights
- optimization recommendations
- approval gates for high-cost actions

### 13.3 Cost Actions

- throttle usage
- downgrade model profile
- pause high-cost workflow
- adjust budget
- enable cache optimization
- require approval for expensive action
- notify billing admin
- recommend plan upgrade

---

## 14. Security Operations

The Command Center must support security awareness and response.

### 14.1 Security Signals

- failed login spike
- suspicious API usage
- privilege escalation
- new admin added
- unusual data export
- prompt injection suspected
- tool abuse attempt
- webhook signature failures
- integration token failure
- anomalous model usage
- marketplace fraud signal
- repeated billing failures with suspicious behavior

### 14.2 Security Alert Requirements

Every security alert must show:

- severity
- affected organization
- affected user or service account
- event source
- timestamp
- related audit logs
- recommended containment
- required permission to act
- whether customer notification may be required

### 14.3 Security Actions

- lock user
- revoke session
- revoke API key
- disable integration
- pause AI employee
- block tool
- require password reset
- force reauthentication
- create incident
- export evidence packet

### 14.4 Forbidden Security UX

Never show:

- raw secrets
- full tokens
- unredacted customer PII
- sensitive prompt content by default
- cross-tenant security data to customers
- vague labels like `suspicious` without evidence

---

## 15. Customer Health Operations

The Command Center must help Ariyo detect customer risk and opportunity.

### 15.1 Health Dimensions

- activation
- adoption
- AI employee usage
- workflow success
- knowledge quality
- integration health
- support load
- billing health
- cost comfort
- education completion
- review queue backlog
- customer sentiment
- expansion potential

### 15.2 Health Statuses

```text
healthy
watch
at_risk
critical
expansion_ready
unknown
```

### 15.3 Customer Health Actions

- send activation nudge
- assign CSM
- recommend academy lesson
- create success playbook
- schedule check-in
- open support ticket
- recommend Pro or Smart upgrade
- trigger cost review
- trigger trust recovery playbook
- trigger renewal playbook

---

## 16. Revenue Operations View

The Command Center must include revenue operational signals.

### 16.1 Required Revenue Metrics

- MRR
- ARR
- new MRR
- expansion MRR
- contraction MRR
- churned MRR
- trial-to-paid conversion
- Basic to Pro upgrades
- Pro to Smart upgrades
- failed payments
- renewal risk
- marketplace revenue
- partner revenue
- AI cost-to-revenue ratio

### 16.2 Revenue Actions

- create upgrade opportunity
- assign sales owner
- trigger renewal workflow
- review failed payment
- open expansion playbook
- review margin risk
- notify finance
- reconcile invoice

---

## 17. Integration Operations

The Command Center must make integrations operationally transparent.

### 17.1 Integration Health Statuses

```text
healthy
setup_required
syncing
degraded
rate_limited
needs_reauth
failed
disabled
revoked
```

### 17.2 Integration Metrics

- sync success rate
- webhook delivery rate
- API error rate
- rate limit events
- last successful sync
- reauth required count
- affected workflows
- affected AI employees
- affected customers

### 17.3 Integration Actions

- retry sync
- pause sync
- reauthorize
- disable integration
- rotate credential
- view webhook logs
- create customer notification
- switch fallback provider if supported

---

## 18. Knowledge and RAG Operations

The Command Center must expose knowledge quality and freshness.

### 18.1 Knowledge Metrics

- connected sources
- ingestion status
- indexing status
- embedding status
- retrieval quality
- citation coverage
- stale documents
- permission conflicts
- failed ingestion jobs
- unresolved knowledge gaps

### 18.2 RAG Health Signals

- high no-answer rate
- low citation confidence
- stale source used
- hallucination risk flag
- permission-filter mismatch
- source unavailable
- query volume spike

### 18.3 Knowledge Actions

- reindex source
- pause source
- refresh embeddings
- fix permission mapping
- request customer upload
- mark source stale
- create knowledge gap task

---

## 19. Human Review Operations

The Command Center must make human review queues visible and manageable.

### 19.1 Review Metrics

- pending reviews
- overdue reviews
- average review time
- approval rate
- rejection rate
- high-risk pending actions
- reviewer workload
- customer impact of waiting reviews

### 19.2 Review Actions

- assign reviewer
- escalate review
- bulk prioritize low-risk items
- request more context
- approve if authorized
- reject if authorized
- pause related AI employee

### 19.3 Review Safety

The Command Center must not encourage rubber-stamp approval.

Review items must show:

- proposed action
- risk level
- source evidence
- affected customer
- affected data
- rollback path
- confidence level
- policy reason

---

## 20. Support Operations

The Command Center must connect product telemetry to support work.

### 20.1 Support Signals

- ticket volume
- ticket severity
- first response time
- resolution time
- known issue match
- affected plan
- affected feature
- customer health impact
- SLA risk

### 20.2 Support Actions

- create ticket
- link incident
- suggest article
- escalate to engineering
- send customer update
- attach diagnostic context
- assign support owner

---

## 21. Marketplace Operations

The Command Center must track marketplace integrity and performance.

### 21.1 Marketplace Signals

- asset installs
- asset failures
- asset refund requests
- creator quality score
- suspicious listing activity
- payout status
- review queue
- reported asset
- sponsored listing performance

### 21.2 Marketplace Actions

- suspend listing
- request creator fix
- approve listing
- reject listing
- pause payout
- issue refund
- investigate fraud
- promote high-quality asset

---

## 22. Plan-Aware Command Center

Ariyo must expose Command Center capabilities based on plan and permission.

### 22.1 Basic

Basic customer command center should include:

- simple AI employee status
- basic usage meter
- basic workflow status
- basic integration status
- basic help links
- simple alerts
- upgrade suggestions

Basic must not expose advanced admin complexity.

### 22.2 Pro

Pro customer command center should include:

- AI employee health
- workflow monitoring
- integration health
- review queue
- cost attribution
- team usage
- support status
- customer-facing audit log
- operational alerts

### 22.3 Smart

Smart customer command center should include:

- advanced AI employee telemetry
- predictive risk signals
- cost optimization recommendations
- workflow bottleneck analysis
- GEO/API visibility operations if enabled
- advanced automation health
- expansion insights
- custom views
- advanced alerts
- exportable executive reports

Smart is fuller and smarter, but never unrestricted.

---

## 23. Alerting System

The Command Center must support actionable alerting.

### 23.1 Alert Channels

- in-app notification
- email
- Slack or team integration
- webhook
- support ticket
- incident page
- mobile push if available

### 23.2 Alert Rules

Alerts must have:

- owner
- severity
- condition
- window
- suppression rule
- escalation path
- recommended action
- audit log

### 23.3 Alert Quality Rules

Ariyo must prevent alert fatigue.

Forbidden:

- alerts without action
- duplicate alerts
- noisy low-priority alerts
- alerts without owner
- alerts without business impact
- alerts that expose sensitive data

---

## 24. AI Operations Assistant

Ariyo may include an AI Operations Assistant inside the Command Center.

### 24.1 Allowed Capabilities

The AI Operations Assistant may:

- summarize operational state
- explain trends
- identify likely root causes
- recommend next actions
- draft incident updates
- draft customer updates
- group related alerts
- generate executive summaries
- suggest optimization actions

### 24.2 Restricted Capabilities

The AI Operations Assistant must not:

- execute high-risk actions without approval
- hide uncertainty
- invent root causes
- expose cross-tenant data
- reveal secrets
- bypass permissions
- alter billing or security settings without authorization
- declare incidents autonomously without configured policy

### 24.3 Required AI Output Format

AI recommendations must include:

- confidence
- evidence
- affected scope
- risk
- suggested action
- required permission
- whether human approval is required

---

## 25. Command Center API

### 25.1 List Signals

```http
GET /api/v1/operations/signals?severity=high&status=open&category=cost
Authorization: Bearer <token>
```

Response:

```json
{
  "data": [
    {
      "id": "sig_123",
      "category": "cost",
      "severity": "high",
      "status": "open",
      "title": "Smart plan AI cost spike",
      "summary": "AI spend increased 240% in the last 6 hours for one organization.",
      "detected_at": "2026-06-18T10:30:00Z",
      "recommended_actions": [
        {
          "id": "act_123",
          "label": "Require approval for high-cost actions",
          "risk_level": "medium",
          "requires_confirmation": true
        }
      ]
    }
  ],
  "pagination": {
    "next_cursor": null
  }
}
```

### 25.2 Get Command Center Overview

```http
GET /api/v1/operations/overview
Authorization: Bearer <token>
```

Response:

```json
{
  "data": {
    "overall_status": "watch",
    "platform_health": "healthy",
    "active_incidents": 1,
    "critical_signals": 2,
    "ai_employee_health": {
      "active": 182,
      "degraded": 4,
      "paused": 7
    },
    "workflow_health": {
      "success_rate": 0.982,
      "failed_last_hour": 42
    },
    "cost_health": {
      "status": "watch",
      "forecasted_monthly_ai_cost": 18420.7
    },
    "security_health": {
      "open_alerts": 3,
      "critical_alerts": 0
    }
  }
}
```

### 25.3 Execute Operational Action

```http
POST /api/v1/operations/actions/{action_id}/execute
Authorization: Bearer <token>
Content-Type: application/json
```

Request:

```json
{
  "reason": "Cost spike detected for Smart customer. Temporary approval gate required.",
  "confirmation": true
}
```

Response:

```json
{
  "data": {
    "action_id": "act_123",
    "status": "executed",
    "audit_id": "audit_456",
    "executed_at": "2026-06-18T11:15:00Z"
  }
}
```

### 25.4 Create Alert Rule

```http
POST /api/v1/operations/alert-rules
Authorization: Bearer <token>
Content-Type: application/json
```

Request:

```json
{
  "name": "Smart AI cost anomaly",
  "metric": "ai_cost.hourly_spend",
  "condition": {
    "operator": "greater_than_percent_baseline",
    "value": 200,
    "window_minutes": 60
  },
  "severity": "high",
  "channels": ["in_app", "email", "webhook"],
  "suppression_minutes": 120,
  "owner_role": "billing_admin"
}
```

---

## 26. Frontend Requirements

### 26.1 Design Principles

Command Center UI must be:

- calm
- dense but readable
- action-oriented
- role-aware
- severity-aware
- mobile usable for urgent monitoring
- accessible
- fast

### 26.2 UI Components

Use existing Ariyo component standards for:

- metric cards
- severity badges
- timelines
- data tables
- filters
- command actions
- confirmation dialogs
- drawers
- audit trail panels
- status pills
- empty states
- skeleton loading

### 26.3 Severity Colors

Do not rely on color alone.

Always combine:

- label
- icon
- text
- status
- accessible contrast

### 26.4 Required Empty States

Empty states must be useful.

Example:

```text
No critical signals right now.
Ariyo is monitoring AI employees, workflows, integrations, costs, and security activity.
```

### 26.5 Required Error States

Error states must not say only `Something went wrong`.

They must explain:

- what failed
- whether data may be stale
- what the user can do
- whether operations are affected

---

## 27. Backend Requirements

The backend must provide:

- centralized signal generation
- metrics aggregation
- permission-filtered APIs
- tenant-safe queries
- audit logging
- alert evaluation
- event ingestion
- real-time updates when needed
- idempotent action execution
- safe rollback hooks
- incident timeline storage
- operational snapshots

The frontend must never compute sensitive operational truth from raw data it should not own.

---

## 28. Data Privacy and Security Rules

The Command Center must be privacy-safe by default.

Rules:

- redact PII unless explicitly needed and authorized
- redact secrets always
- default to summaries over raw payloads
- scope all data by organization
- enforce row-level and object-level permissions
- log all sensitive views
- log all operational actions
- support break-glass access only with justification
- never expose cross-tenant operational data to customer admins

---

## 29. Observability Requirements

The Command Center itself must be observable.

Track:

- command center page views
- signal acknowledgement
- action execution
- alert rule changes
- incident updates
- dashboard load performance
- permission denied events
- stale data incidents
- false positive alerts
- missed alerts

---

## 30. Quality Assurance

### 30.1 Required Tests

- permission filtering tests
- cross-tenant isolation tests
- action authorization tests
- audit log tests
- alert threshold tests
- incident workflow tests
- cost spike simulation
- AI employee failure simulation
- workflow retry simulation
- security alert simulation
- stale data warning tests
- mobile responsive tests
- accessibility tests
- performance tests

### 30.2 Command Center Release Gate

Do not release a Command Center feature unless:

- permissions are tested
- audit logs are verified
- action execution is reversible or safely constrained
- customer data isolation is proven
- loading and error states exist
- metrics have definitions
- alert noise risk is reviewed
- documentation exists

---

## 31. Metrics Catalog

Recommended top-level metrics:

```text
platform_health_score
ai_employee_health_score
workflow_success_rate
integration_health_score
knowledge_freshness_score
human_review_backlog
incident_count_open
security_alert_count_open
ai_cost_burn_rate
customer_health_score_average
mrr_at_risk
expansion_ready_accounts
support_ticket_pressure
marketplace_integrity_score
command_center_action_rate
```

---

## 32. Forbidden Patterns

Never implement:

```text
raw logs as command center
cross-tenant data leakage
operational actions without permissions
actions without audit logs
alerts without owners
alerts without recommended actions
metrics without definitions
customer-facing dashboards with internal-only data
incident updates without timestamps
security alerts exposing secrets
AI assistant executing high-risk actions without approval
cost dashboards without plan context
revenue dashboards without source attribution
support context exposing unnecessary PII
workflow retry buttons without idempotency
pause buttons without confirmation for high-impact actions
real-time dashboards showing stale data without warning
vanity metrics as primary health signals
unbounded filtering over sensitive datasets
manual refresh as the only operational model
hardcoded thresholds without configuration
unreviewed alert noise
```

---

## 33. Golden Rules

1. Show the operational truth, not a decorative summary.
2. Every signal must have a source, severity, owner, and action path.
3. Every action must be permissioned, audited, and safe.
4. Customer-facing views must be tenant-isolated.
5. Internal views must still follow least privilege.
6. AI assistance must explain, not secretly control.
7. Cost, security, reliability, customer health, and revenue belong in one operating picture.
8. Dashboards must reduce decision time, not increase cognitive load.
9. Stale data must be clearly marked.
10. Trust is built when operations are visible, controlled, and recoverable.

---

## 34. Final Rule

When building the Ariyo Operations Command Center, never ask only:

```text
What metrics should we show?
```

Always ask:

```text
What operational decision must this help someone make, what evidence do they need, what risk exists, what action is allowed, and how will Ariyo prove that action was safe?
```
