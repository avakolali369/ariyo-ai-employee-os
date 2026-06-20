# Ariyo AI Agent Incident Response Skill

## 1. Purpose

This skill defines how Ariyo detects, triages, contains, investigates, communicates, remediates, and learns from incidents caused by or involving AI employees.

Ariyo AI employees can reason, retrieve knowledge, call tools, interact with integrations, draft messages, trigger workflows, spend AI budget, use memory, and influence customer operations. This makes normal incident response insufficient.

AI employee incidents require a specialized operating model that covers:

- unsafe AI output
- hallucinated answer
- wrong tool call
- unauthorized action attempt
- approved-but-harmful action
- data exposure
- prompt injection
- memory leakage
- RAG leakage
- integration misuse
- workflow loop
- cost spike
- model/provider degradation
- marketplace template failure
- customer escalation
- trust-impacting AI behavior

This file is the incident response contract for AI employee failures and abuse cases.

---

## 2. Core Contract

Ariyo AI incidents are not ordinary bugs.

AI incidents are failures where an AI employee, model, prompt, memory, retrieval system, tool, workflow, integration, approval policy, or automation path creates or risks customer harm, business harm, data exposure, trust loss, cost loss, unsafe action, or incorrect operational outcome.

Every Ariyo AI incident must be detectable, containable, explainable, reversible where possible, customer-safe, evidence-preserving, and reviewable.

Ariyo must respond to AI incidents with speed, honesty, discipline, and proof.

---

## 3. Relationship to Other Ariyo Skills

This skill depends on and must be consistent with:

- `ai-employee-architecture.md`
- `prompt-tool-orchestration.md`
- `ai-safety-evaluation.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-memory-context.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-simulation-sandbox.md`
- `human-review-governance.md`
- `security-threat-model.md`
- `data-governance-privacy.md`
- `knowledge-rag.md`
- `workflow-automation.md`
- `integration-ecosystem.md`
- `quality-assurance-system.md`
- `reliability-sla.md`
- `observability-analytics-events.md`
- `operations-command-center.md`
- `internal-admin-backoffice.md`
- `feature-flags-rollout-system.md`
- `trust-center-public-status.md`
- `legal-pages-policy-system.md`
- `customer-success-playbooks.md`
- `knowledge-base-support-system.md`

No AI incident response flow may bypass security, privacy, permission, legal, customer communication, or audit requirements.

---

## 4. Definition of an AI Incident

An AI incident occurs when an AI employee or AI-powered subsystem causes, attempts, enables, or materially contributes to one or more of the following:

1. wrong customer-facing answer with business impact
2. hallucinated information presented as fact
3. citation or source misuse
4. unauthorized tool call
5. wrong integration action
6. unsafe automation
7. workflow runaway loop
8. data leakage across organizations, workspaces, users, customers, or channels
9. exposure of private customer data
10. prompt injection success
11. RAG retrieval boundary failure
12. memory leakage or poisoned memory reuse
13. model provider failure causing degraded AI behavior
14. cost spike caused by AI behavior
15. repeated low-quality AI responses affecting trust
16. AI-generated message sent to wrong recipient
17. AI action performed without required human review
18. approval decision recorded incorrectly
19. system failed to stop a forbidden action
20. AI content violates product, brand, legal, or safety policy

Ariyo must treat near-misses seriously. If an AI employee nearly caused harm but was stopped by review, sandbox, or policy, it must still be logged and classified.

---

## 5. Incident Principles

### 5.1 Containment First

The first priority is to stop further harm.

Containment may include:

- disable AI employee
- pause workflow
- revoke tool grant
- switch to review-only mode
- disable integration
- block provider route
- activate kill switch
- reduce model autonomy
- freeze memory retrieval
- disable marketplace asset
- stop outbound messages
- throttle organization usage

### 5.2 Preserve Evidence

Ariyo must preserve the evidence needed to understand what happened.

Evidence includes:

- prompt version
- model provider
- model name/version
- retrieved context
- memory items used
- tool calls proposed
- tool calls executed
- permission decision
- approval decision
- integration response
- workflow trace
- customer-facing output
- logs
- timestamps
- involved users
- organization/workspace scope
- feature flags active at time
- cost generated

Evidence must be privacy-safe and access-controlled.

### 5.3 Never Hide AI Uncertainty

Customer communication must be honest, careful, and non-alarmist.

Ariyo must not overclaim certainty during early investigation.

### 5.4 Blameless Internally, Accountable Externally

Internal investigation should focus on systems and controls.

Customer-facing accountability should be clear and responsible.

### 5.5 Prevent Recurrence

Every significant AI incident must produce at least one durable improvement:

- evaluation case
- prompt fix
- retrieval boundary fix
- permission rule change
- human review rule change
- feature flag rollout change
- simulation scenario
- monitoring alert
- product UX change
- documentation update
- support playbook update

---

## 6. Incident Severity Levels

Ariyo must classify AI incidents by severity.

### SEV-0: Critical AI Safety, Data, or Business Harm

Examples:

- cross-tenant data exposure
- AI employee executes harmful irreversible action
- unauthorized payment or billing action
- sensitive customer data sent externally
- prompt injection enables tool misuse
- widespread unsafe AI behavior across many organizations
- public trust/security incident
- legal/regulatory exposure

Required response:

- immediate containment
- executive notification
- security/privacy/legal review
- incident commander assigned
- customer impact assessment
- public/trust-center consideration
- postmortem required

### SEV-1: High Customer or Operational Impact

Examples:

- AI sends incorrect customer message at scale
- workflow loop causes repeated actions
- model route creates repeated hallucinations
- integration action fails silently with customer impact
- AI cost spike affects customer budget
- approval gate bypass for medium/high-risk action

Required response:

- containment within defined SLA
- customer support alert
- customer-specific notification when impacted
- root cause analysis
- remediation tracking

### SEV-2: Moderate AI Behavior Failure

Examples:

- repeated hallucination in one AI employee
- incorrect retrieval source used
- poor tool choice blocked by human review
- failed workflow dry-run missed issue
- incorrect cost attribution
- customer-visible but reversible issue

Required response:

- triage
- fix or mitigation
- add evaluation/regression case
- customer follow-up if visible

### SEV-3: Low Risk / Near Miss

Examples:

- unsafe output blocked before sending
- wrong tool call proposed but denied
- suspicious prompt injection attempt blocked
- hallucinated draft saved but not sent
- evaluation regression caught before release

Required response:

- log event
- classify pattern
- monitor trend
- optionally add eval case

---

## 7. AI Incident Categories

### 7.1 Hallucination Incident

Occurs when AI generates false information as if true.

Risk factors:

- unsupported claims
- fabricated policy
- fabricated pricing
- fabricated legal/security statement
- fabricated customer data
- wrong product capability
- fake source/citation

Required controls:

- source grounding check
- confidence marking
- citation verification
- answer policy update
- RAG retrieval evaluation
- prompt guardrails

### 7.2 Wrong Tool Call Incident

Occurs when AI calls, attempts to call, or recommends the wrong tool.

Examples:

- wrong customer updated
- wrong CRM record modified
- wrong email sent
- wrong integration target selected
- wrong workflow triggered

Required controls:

- runtime permission review
- tool confirmation UX
- tool schema validation
- action preview
- idempotency checks
- approval gates

### 7.3 Unauthorized Action Incident

Occurs when AI attempts or completes an action outside allowed scope.

Required controls:

- policy engine audit
- role/plan/org scope verification
- delegated authority review
- temporary permission check
- kill switch if systemic

### 7.4 Prompt Injection Incident

Occurs when external or user-provided content manipulates AI behavior.

Examples:

- document tells AI to ignore rules
- webpage injects hidden instruction
- email attempts tool misuse
- support ticket contains malicious command

Required controls:

- isolate untrusted content
- instruction hierarchy enforcement
- retrieval sanitization
- tool call risk scoring
- eval case creation
- affected memory cleanup

### 7.5 RAG Data Exposure Incident

Occurs when retrieval returns information outside the allowed boundary.

Examples:

- another organization document retrieved
- unauthorized workspace content included
- stale deleted document used
- sensitive data exposed in answer

Required controls:

- retrieval permission boundary audit
- embedding index scope review
- deletion propagation check
- metadata filter validation
- affected vector chunks quarantine

### 7.6 Memory Leakage Incident

Occurs when AI memory is used across wrong scope or without valid permission.

Examples:

- user-specific preference applied to another user
- customer-specific memory used for another customer
- deleted memory resurfaces
- poisoned memory influences future decisions

Required controls:

- memory item quarantine
- memory scope validation
- memory deletion audit
- memory freshness review
- memory evaluation case

### 7.7 Human Review Failure Incident

Occurs when a review gate fails to stop or correctly classify a risky action.

Examples:

- action should have required review but did not
- reviewer approved without seeing critical context
- approval log missing diff
- approved action differed from shown preview

Required controls:

- review policy audit
- reviewer UX audit
- approval snapshot preservation
- review training update
- policy simulation tests

### 7.8 Workflow Runaway Incident

Occurs when an AI-driven workflow loops, repeats, escalates, or triggers unintended downstream actions.

Examples:

- repeated customer messages
- repeated API calls
- repeated workflow restarts
- auto-retry storm
- event feedback loop

Required controls:

- workflow pause
- idempotency review
- retry limit review
- trigger dependency graph audit
- event deduplication fix

### 7.9 AI Cost Spike Incident

Occurs when AI usage cost grows abnormally due to model, workflow, retrieval, tool, retry, or abuse behavior.

Examples:

- runaway reasoning loop
- repeated large-context calls
- expensive model route used incorrectly
- Smart-tier automation exceeds expected budget
- provider retry storm

Required controls:

- cost kill switch
- model downgrade
- queue pause
- budget enforcement audit
- anomaly detection update
- customer billing protection review

### 7.10 Provider Degradation Incident

Occurs when model provider latency, quality, safety, citation behavior, or availability degrades.

Required controls:

- provider route fallback
- degraded mode
- model profile switch
- customer impact note if visible
- provider postmortem attachment

### 7.11 Marketplace Asset Incident

Occurs when a marketplace template, workflow, prompt pack, knowledge pack, or integration bundle causes unsafe or low-quality behavior.

Required controls:

- unlist or quarantine asset
- disable installs
- notify affected customers
- creator review
- install rollback path
- marketplace trust score update

---

## 8. Incident Lifecycle

Every AI incident must follow a lifecycle.

```text
reported
triaged
classified
contained
investigating
customer_impact_assessed
remediating
monitoring
resolved
postmortem_required
postmortem_completed
regression_prevention_added
closed
```

Ariyo must not mark an incident closed before containment, customer impact assessment, and recurrence prevention are completed or explicitly waived by an authorized owner.

---

## 9. Incident Detection Sources

AI incidents may be detected from:

- user reports
- customer support tickets
- human reviewer flags
- admin/operator flags
- AI safety monitor
- observability alerts
- cost anomaly alerts
- model quality regression
- workflow failure alerts
- integration failure alerts
- RAG leakage detection
- prompt injection detection
- memory policy violation
- audit log anomaly
- post-release monitoring
- customer health decline
- churn/cancellation reason
- sales/customer success escalation

Ariyo must not rely only on customer reports.

---

## 10. Incident Intake Schema

Every incident report should capture:

```json
{
  "incident_id": "inc_01HZX...",
  "reported_at": "2026-06-18T12:00:00Z",
  "reported_by_type": "customer|user|reviewer|support|system|security|ai_monitor",
  "organization_id": "org_123",
  "workspace_id": "ws_123",
  "ai_employee_id": "emp_123",
  "workflow_id": "wf_123",
  "conversation_id": "conv_123",
  "integration_id": "int_123",
  "category": "hallucination|wrong_tool_call|data_exposure|prompt_injection|cost_spike|workflow_runaway|memory_leak|rag_leak|provider_degradation|marketplace_asset",
  "severity": "sev_0|sev_1|sev_2|sev_3",
  "status": "triaged",
  "summary": "AI employee sent incorrect customer reply",
  "customer_visible": true,
  "data_exposure_suspected": false,
  "action_executed": true,
  "containment_required": true,
  "evidence_refs": ["trace_123", "audit_456"],
  "owner_user_id": "user_internal_123"
}
```

---

## 11. Immediate Containment Actions

Ariyo must support fast containment actions from the Operations Command Center and Internal Admin.

Containment actions include:

```text
pause_ai_employee
switch_ai_employee_to_review_only
disable_tool
revoke_tool_grant
pause_workflow
disable_integration
disable_provider_route
activate_kill_switch
freeze_memory_access
quarantine_memory_item
quarantine_rag_source
quarantine_marketplace_asset
pause_outbound_messages
pause_billing_action
pause_customer_account_automation
force_model_downgrade
block_prompt_template_version
rollback_prompt_version
rollback_workflow_version
rollback_marketplace_asset_version
```

Containment must be audited.

---

## 12. Plan-Aware Incident Response

### 12.1 Basic

Basic customers receive:

- core incident protection
- automatic containment for severe incidents
- basic support communication
- review-only fallback where available
- standard incident explanation when impacted

Basic must be safe even with limited features.

### 12.2 Pro

Pro customers receive:

- faster operational incident response
- organization-level incident dashboard
- workflow-level incident history
- configurable admin notifications
- stronger review escalation
- incident-driven recommendations

Pro must help teams understand and manage incidents.

### 12.3 Smart

Smart customers receive:

- advanced AI incident analytics
- predictive anomaly detection
- AI behavior drift detection
- advanced cost incident prevention
- custom incident webhooks
- detailed AI trace inspection
- simulation replay
- executive incident summaries
- enterprise-ready evidence packs where applicable

Smart must provide the deepest operational visibility and control, but still within privacy and security boundaries.

---

## 13. Incident Commander Model

For SEV-0 and SEV-1 incidents, Ariyo must assign an Incident Commander.

Responsibilities:

- own incident timeline
- coordinate engineering, security, AI, support, CS, legal, and leadership
- make containment decisions
- ensure evidence preservation
- approve customer communication draft
- confirm resolution criteria
- assign postmortem owner

Incident Commander must not be the only engineer investigating root cause.

---

## 14. Roles and Responsibilities

### Engineering

- reproduce issue
- identify root cause
- implement fix
- verify rollback
- add tests

### AI/Product Safety

- classify AI behavior risk
- update safety policy
- add eval cases
- review prompt/model/tool behavior

### Security

- investigate data exposure, abuse, injection, access control failure
- define containment for security risk
- coordinate responsible disclosure if needed

### Privacy/Legal

- determine notification obligation
- review customer-facing statements
- assess data processing impact

### Support

- respond to customer tickets
- collect customer evidence
- prevent inconsistent answers

### Customer Success

- manage affected customer trust
- coordinate follow-up
- help restore adoption

### Revenue/Billing

- handle credits/refunds if AI cost or billing impact occurred
- update revenue risk

### Leadership

- decide escalation for material customer, legal, reputational, or business impact

---

## 15. Evidence and AI Trace Requirements

For every AI incident, Ariyo must preserve an AI trace when available.

AI trace should include:

```json
{
  "trace_id": "trace_123",
  "ai_employee_id": "emp_123",
  "prompt_version": "prompt_support_v14",
  "model_profile": "smart_reasoning_high",
  "model_provider": "openai|anthropic|google|deepseek|other",
  "retrieved_sources": [
    {
      "source_id": "doc_123",
      "scope": "organization",
      "permission_result": "allowed",
      "sensitivity": "internal"
    }
  ],
  "memory_items_used": [
    {
      "memory_id": "mem_123",
      "scope": "customer",
      "freshness": "current"
    }
  ],
  "tool_calls": [
    {
      "tool_name": "send_email",
      "decision": "executed",
      "risk_level": "medium",
      "approval_required": true,
      "approval_id": "approval_123"
    }
  ],
  "output_hash": "sha256:...",
  "cost_estimate": 0.048,
  "latency_ms": 4200,
  "policy_checks": ["permission_allowed", "pii_check_passed"]
}
```

Sensitive content must be redacted for broad internal access.

---

## 16. Customer Impact Assessment

Ariyo must assess:

- which organizations were affected
- which users saw the issue
- which external customers were impacted
- whether data was exposed
- whether business actions occurred
- whether messages were sent
- whether costs were incurred
- whether trust center/status update is required
- whether legal notice is required
- whether billing credit is appropriate
- whether customer success follow-up is needed

Customer impact assessment must be documented before closure.

---

## 17. Communication Rules

### 17.1 Internal Communication

Internal incident updates must include:

- severity
- current status
- known impact
- unknowns
- containment actions
- next update time
- owner
- customer communication status

### 17.2 Customer Communication

Customer communication must be:

- factual
- specific enough to build trust
- privacy-safe
- free of blame-shifting
- clear about what happened
- clear about impact
- clear about action taken
- clear about next steps

Do not say:

```text
The AI made a mistake and we cannot explain why.
```

Say:

```text
We identified an issue in how the AI employee selected context for this workflow. We paused the affected workflow, reviewed the impacted outputs, and are applying a fix before re-enabling it.
```

### 17.3 Public Communication

Public status or trust center communication may be required for:

- SEV-0 incidents
- broad service impact
- confirmed data exposure
- significant AI behavior incident affecting many customers
- security incident
- provider outage affecting core AI employee operation

Public communication must be coordinated with legal, security, and leadership.

---

## 18. Customer-Facing Incident Templates

### 18.1 Initial Notice

```text
We detected an issue affecting [AI employee/workflow/integration].

Current status: [contained/investigating/monitoring].

Known impact: [summary].

Immediate action taken: [action].

We are reviewing the affected activity and will provide an update when the investigation is complete.
```

### 18.2 Resolution Notice

```text
The issue affecting [AI employee/workflow/integration] has been resolved.

What happened: [plain-language summary].

Impact: [customer-specific impact].

What we changed: [remediation].

Prevention: [future prevention].

Recommended customer action: [none/action].
```

### 18.3 AI Output Correction

```text
Ariyo previously generated an answer that may have included incorrect or unsupported information.

The corrected information is: [corrected answer].

We have updated the related AI employee behavior and added additional checks to reduce recurrence.
```

---

## 19. Remediation Types

Remediation may include:

- prompt patch
- prompt rollback
- model route change
- tool permission fix
- approval policy update
- workflow rule update
- integration connector fix
- RAG metadata filter fix
- memory item deletion/quarantine
- evaluation suite update
- simulation scenario update
- product UX change
- customer documentation update
- support article update
- billing credit
- marketplace asset removal
- feature flag rollback
- kill switch improvement

---

## 20. Postmortem Requirements

SEV-0 and SEV-1 require postmortems.

SEV-2 may require postmortem based on pattern or customer sensitivity.

Postmortem must include:

```text
Summary
Timeline
Customer impact
Detection source
What failed
Why controls did not prevent it
Containment actions
Root cause
Contributing factors
What worked
What did not work
Remediation
Prevention tasks
Owner and due date
Evaluation/test additions
Monitoring additions
Customer communication summary
Open risks
```

Postmortems must avoid vague statements like:

```text
The model hallucinated.
```

Instead:

```text
The AI employee answered without requiring a retrieved source for a pricing question because the prompt policy allowed unsupported fallback answers in this route.
```

---

## 21. Regression Prevention

Every material AI incident must create regression prevention.

Possible regression artifacts:

- golden set case
- adversarial prompt injection case
- workflow simulation scenario
- RAG retrieval boundary test
- memory leakage test
- tool permission test
- cost spike simulation
- human review policy simulation
- provider fallback test
- marketplace asset validation test

No fix should be considered complete without a future prevention mechanism.

---

## 22. Advanced KPI System

Ariyo must track AI incident response KPIs.

### 22.1 Detection KPIs

- AI incident detection rate
- customer-reported vs system-detected ratio
- prompt injection blocked rate
- unsafe output blocked rate
- RAG leakage near-miss rate
- memory violation near-miss rate
- cost anomaly detection lead time

### 22.2 Response KPIs

- mean time to acknowledge (MTTA)
- mean time to contain (MTTC)
- mean time to customer impact assessment
- mean time to resolution (MTTR)
- containment success rate
- rollback success rate
- incident commander assignment time

### 22.3 Quality KPIs

- recurring AI incident rate
- incident reopened rate
- postmortem completion rate
- prevention action completion rate
- evaluation coverage added per incident
- regression escape rate

### 22.4 Customer Trust KPIs

- impacted customer recovery rate
- post-incident churn risk
- support escalation volume
- customer satisfaction after incident
- customer trust restoration completion
- renewal risk after AI incident

### 22.5 Cost and Business KPIs

- cost loss from AI incidents
- credits/refunds issued
- revenue at risk from AI incidents
- Smart-tier cost incident rate
- provider-related incident cost
- workflow runaway cost prevented

---

## 23. Operations Command Center Requirements

The command center must show:

- active AI incidents
- severity
- affected organizations
- affected AI employees
- containment status
- current owner
- customer visibility
- data exposure suspicion
- cost impact
- open actions
- timeline
- related feature flags
- related model provider
- related prompt versions
- related marketplace asset
- next update deadline

Operators must be able to trigger authorized containment actions from the incident view.

---

## 24. Internal Admin Requirements

Internal Admin must support:

- create incident
- classify incident
- assign severity
- assign owner
- link AI traces
- link customer tickets
- link affected organizations
- apply containment actions
- create customer communication draft
- create postmortem
- track remediation tasks
- close incident with checklist

All actions must be audited.

---

## 25. API Contract

### 25.1 Create Incident

```http
POST /api/internal/ai-incidents
Authorization: Bearer <internal_token>
Content-Type: application/json
```

```json
{
  "organization_id": "org_123",
  "ai_employee_id": "emp_123",
  "category": "wrong_tool_call",
  "severity": "sev_1",
  "summary": "AI employee sent message to wrong CRM contact",
  "customer_visible": true,
  "action_executed": true,
  "evidence_refs": ["trace_123", "event_456"]
}
```

Response:

```json
{
  "incident_id": "inc_123",
  "status": "triaged",
  "created_at": "2026-06-18T12:00:00Z",
  "required_actions": [
    "assign_incident_commander",
    "apply_containment",
    "assess_customer_impact"
  ]
}
```

### 25.2 Apply Containment

```http
POST /api/internal/ai-incidents/{incident_id}/containment-actions
```

```json
{
  "action": "switch_ai_employee_to_review_only",
  "target_type": "ai_employee",
  "target_id": "emp_123",
  "reason": "Prevent additional external messages while investigation is active"
}
```

Response:

```json
{
  "containment_action_id": "contain_123",
  "status": "applied",
  "applied_at": "2026-06-18T12:04:00Z",
  "audit_log_id": "audit_123"
}
```

### 25.3 Attach AI Trace

```http
POST /api/internal/ai-incidents/{incident_id}/evidence
```

```json
{
  "evidence_type": "ai_trace",
  "ref_id": "trace_123",
  "privacy_level": "restricted",
  "notes": "Trace includes retrieved context and executed tool call"
}
```

### 25.4 Update Incident Status

```http
PATCH /api/internal/ai-incidents/{incident_id}
```

```json
{
  "status": "monitoring",
  "severity": "sev_1",
  "customer_impact_summary": "Three customer conversations were affected; no data exposure confirmed"
}
```

### 25.5 Create Postmortem

```http
POST /api/internal/ai-incidents/{incident_id}/postmortem
```

```json
{
  "root_cause": "Prompt route allowed unsupported CRM contact inference before tool execution",
  "customer_impact": "One incorrect outbound message was sent",
  "remediation": [
    "Added recipient confirmation gate",
    "Added tool permission regression test",
    "Updated sales AI employee evaluation suite"
  ],
  "owners": ["eng_ai", "product_safety"]
}
```

---

## 26. Event Taxonomy

Required events:

```text
ai_incident.reported
ai_incident.triaged
ai_incident.severity_changed
ai_incident.containment_applied
ai_incident.customer_impact_assessed
ai_incident.communication_sent
ai_incident.root_cause_identified
ai_incident.remediation_started
ai_incident.resolved
ai_incident.postmortem_created
ai_incident.regression_case_added
ai_incident.closed
```

Each event must include:

- incident_id
- organization_id if applicable
- workspace_id if applicable
- severity
- category
- actor_type
- actor_id
- timestamp
- correlation_id
- privacy classification

---

## 27. Security and Privacy Rules

Ariyo must:

- restrict incident evidence access by role
- redact sensitive customer data in broad views
- preserve full evidence only in restricted audit storage
- log every internal access to incident evidence
- prevent unauthorized impersonation during investigation
- separate customer-visible summaries from internal details
- protect legal/security privileged analysis
- avoid exporting raw prompts with sensitive data unless authorized

Never include sensitive customer data in incident titles.

---

## 28. AI Support Assistant Rules During Incidents

If an AI support assistant helps with incidents, it must:

- never invent incident details
- only use approved incident fields
- mark unknowns clearly
- not send customer communication without approval
- not expose internal-only notes
- not summarize sensitive evidence to unauthorized staff
- not recommend legal conclusions
- escalate uncertainty

AI may draft.

Humans approve customer-facing incident communication.

---

## 29. Customer Success Recovery Playbooks

After an AI incident, CS may need to run recovery:

- explain what happened
- restore customer confidence
- reconfigure AI employee
- replay corrected workflow
- add review gates
- provide credit if appropriate
- schedule success review
- monitor health score
- update renewal risk

Customer recovery is part of incident closure for significant customer-visible incidents.

---

## 30. AI Incident Release Gates

A fix for an AI incident must not ship unless:

- root cause is documented
- regression test exists
- affected workflow/employee tested in sandbox
- rollout controlled by feature flag if risky
- monitoring alert exists if recurrence detectable
- customer communication prepared if needed
- rollback path exists
- incident owner approves

---

## 31. Forbidden Patterns

Never allow:

```text
closing AI incident without customer impact assessment
blaming the model without root cause
deleting evidence before investigation
shipping incident fix without regression test
customer communication without approved facts
silent containment for customer-visible incident
AI assistant sending incident communication without human approval
raw sensitive evidence visible to all admins
unscoped incident search across organizations
unlogged internal access to incident data
postmortem without prevention tasks
manual database edits as undocumented remediation
same AI incident recurring without escalation
unsafe AI employee re-enabled without review
prompt injection incident handled as normal support bug
cost spike incident handled only as billing issue
RAG leakage incident handled only as search bug
memory leakage incident handled only as personalization bug
marketplace asset incident handled only by creator support
```

---

## 32. Done Criteria

An AI incident response system is ready when:

- incidents can be reported from product, support, monitoring, and admin
- severity and category are standardized
- containment actions are fast and audited
- AI traces are preserved
- customer impact can be assessed
- customer communication can be generated safely
- postmortems can be created
- regression cases can be linked
- KPIs are visible
- role-based access works
- privacy redaction works
- kill switches are connected
- simulation sandbox can replay key cases
- command center shows active incidents

---

## 33. Golden Rule

If Ariyo cannot explain, contain, and learn from an AI employee failure, Ariyo is not ready to automate that behavior at scale.

---

## 34. Final Rule

Ariyo must treat AI incident response as a core product capability, not an emergency process invented after something goes wrong.
