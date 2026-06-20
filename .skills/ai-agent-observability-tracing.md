# Ariyo AI Agent Observability & Tracing Skill

## Purpose

This skill defines the official observability and tracing system for Ariyo AI Employees.

Ariyo AI Employees are not simple request-response chatbots. They may read business context, retrieve knowledge, reason, call tools, use integrations, request approvals, execute workflows, spend AI budget, access memory, and affect real customers. Because of that, Ariyo must be able to trace exactly how an AI Employee reached an output or action without leaking sensitive data or exposing unsafe internals to unauthorized users.

This skill must be used when designing, implementing, reviewing, testing, or debugging:

- AI Employee execution traces
- prompt traces
- model traces
- tool call traces
- workflow traces
- RAG and retrieval traces
- memory/context traces
- permission and approval traces
- integration action traces
- cost and token traces
- latency and performance traces
- error and incident traces
- customer-visible AI explanations
- internal admin debugging views
- incident response evidence
- AI evaluation replay and regression analysis

## Core Contract

Ariyo AI observability is not logging prompts.

Ariyo AI observability is the secure traceability layer that explains how an AI Employee perceived context, selected knowledge, used memory, chose tools, followed permissions, spent cost, generated outputs, requested approvals, executed actions, and affected business outcomes.

Every AI Employee execution must be traceable enough to debug, evaluate, audit, improve, and respond to incidents.

Every trace must be privacy-safe, organization-scoped, permission-gated, retention-aware, and protected from unnecessary exposure.

Ariyo must be able to answer:

- What did the AI Employee do?
- Why did it do that?
- What context did it use?
- What knowledge did it retrieve?
- What tools did it call?
- What permissions allowed or blocked the action?
- What model and provider were used?
- What did it cost?
- How long did it take?
- What changed in the customer system?
- Was the behavior safe, expected, and reproducible?

## Related Skills

This skill depends on and must stay consistent with:

- `ai-employee-architecture.md`
- `prompt-tool-orchestration.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-memory-context.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-simulation-sandbox.md`
- `ai-agent-incident-response.md`
- `knowledge-rag.md`
- `workflow-automation.md`
- `integration-ecosystem.md`
- `human-review-governance.md`
- `observability-analytics-events.md`
- `security-threat-model.md`
- `data-governance-privacy.md`
- `internal-admin-backoffice.md`
- `operations-command-center.md`
- `model-provider-strategy.md`
- `ai-cost-control.md`

## Observability Philosophy

Ariyo must observe AI behavior at the level of business execution, not only infrastructure.

Classic observability tracks logs, metrics, and traces.

Ariyo AI observability must track:

- user intent
- employee role
- task goal
- prompt version
- policy version
- retrieved knowledge
- selected memory
- tool eligibility
- tool execution
- approval path
- model behavior
- output confidence
- safety checks
- cost impact
- customer impact
- follow-up outcome

The goal is not to collect everything.

The goal is to collect the minimum necessary evidence required to explain, debug, audit, improve, and protect AI Employee behavior.

## Observability Principles

### 1. Trace the Decision Path

Ariyo must capture the path from input to outcome.

A trace must show:

- trigger
- request context
- selected AI Employee
- active policies
- prompt template
- model profile
- retrieval result
- memory usage
- tool decision
- approval decision
- output generation
- action result
- final customer-visible outcome

### 2. Separate Sensitive Content from Metadata

Ariyo must distinguish:

- trace metadata
- redacted input/output previews
- sensitive raw content
- protected payloads
- customer-visible explanations
- internal debugging evidence

Raw prompts, retrieved chunks, customer messages, documents, and tool payloads must not be widely exposed.

### 3. Every Trace Must Be Scoped

Every trace must belong to:

- organization
- workspace
- AI Employee
- workflow
- user or system trigger
- request/session
- plan tier
- environment
- retention policy

No trace may exist without tenant scope.

### 4. Observability Must Support Trust

Observability must support:

- customer trust
- internal debugging
- AI safety review
- compliance evidence
- incident response
- release quality
- cost control
- enterprise procurement

### 5. Observability Must Not Create a Data Leak

Observability itself can become a sensitive data surface.

Trace systems must obey:

- least privilege access
- redaction by default
- encryption at rest
- retention limits
- access logging
- support access governance
- export controls
- incident handling

## Trace Object Model

### AITrace

Represents one full AI Employee execution.

Fields:

```json
{
  "trace_id": "trace_01HT...",
  "organization_id": "org_123",
  "workspace_id": "ws_123",
  "environment": "production",
  "ai_employee_id": "emp_support_001",
  "ai_employee_version": "2026.06.18.4",
  "plan": "smart",
  "trigger_type": "user_message|workflow_event|integration_event|scheduled_job|admin_test|sandbox_replay",
  "trigger_id": "msg_123",
  "correlation_id": "corr_abc",
  "session_id": "sess_abc",
  "status": "completed|failed|blocked|awaiting_review|cancelled|degraded",
  "started_at": "2026-06-18T12:00:00Z",
  "completed_at": "2026-06-18T12:00:04Z",
  "latency_ms": 4210,
  "total_cost_usd": 0.0123,
  "risk_level": "low|medium|high|critical",
  "visibility": "customer_safe|internal_restricted|security_restricted",
  "retention_class": "standard|short_lived|incident_evidence|customer_exportable"
}
```

### TraceStep

Represents a single step within a trace.

Step types:

```text
trigger_received
context_loaded
memory_selected
knowledge_retrieved
prompt_composed
model_called
output_parsed
policy_checked
tool_considered
tool_called
tool_result_received
approval_requested
approval_decided
workflow_advanced
integration_action_submitted
integration_action_confirmed
safety_check_completed
cost_check_completed
response_sent
incident_flagged
```

### ModelTrace

Captures model execution metadata.

```json
{
  "model_trace_id": "mtrace_123",
  "trace_id": "trace_123",
  "provider": "openai|anthropic|google|deepseek|self_hosted|fallback",
  "model": "provider_model_name",
  "model_profile": "fast|balanced|premium|reasoning|embedding|classifier",
  "routing_reason": "default_policy|fallback|cost_optimized|quality_required|customer_configured",
  "prompt_version": "support_reply_v12",
  "temperature": 0.2,
  "input_tokens": 1432,
  "output_tokens": 312,
  "cached_tokens": 900,
  "cost_usd": 0.0062,
  "latency_ms": 1510,
  "finish_reason": "stop|length|tool_call|content_filter|error",
  "safety_flags": ["none"],
  "raw_prompt_stored": false,
  "redacted_preview_available": true
}
```

### PromptTrace

Captures prompt composition without exposing sensitive data by default.

```json
{
  "prompt_trace_id": "ptrace_123",
  "trace_id": "trace_123",
  "prompt_template_id": "support_answer_template",
  "prompt_template_version": "v12",
  "system_instruction_hash": "sha256:...",
  "developer_instruction_hash": "sha256:...",
  "customer_context_summary": "redacted summary",
  "included_sections": [
    "employee_role",
    "business_context",
    "retrieved_knowledge",
    "policy_constraints",
    "output_format"
  ],
  "prompt_risk_flags": ["contains_customer_data"],
  "redaction_status": "redacted|fully_hidden|customer_safe"
}
```

### RetrievalTrace

Captures RAG and knowledge retrieval.

```json
{
  "retrieval_trace_id": "rtrace_123",
  "trace_id": "trace_123",
  "knowledge_source_ids": ["ks_help_center", "ks_policy_docs"],
  "query_text_redacted": "refund policy enterprise plan",
  "embedding_model": "embedding_profile_v3",
  "top_k_requested": 8,
  "top_k_used": 4,
  "filters_applied": {
    "organization_id": "org_123",
    "workspace_id": "ws_123",
    "permission_scope": "support_public",
    "freshness_required": true
  },
  "retrieved_chunk_refs": [
    {
      "chunk_id": "chunk_001",
      "document_id": "doc_refund_policy",
      "score": 0.91,
      "used_in_answer": true,
      "sensitivity": "internal",
      "citation_allowed": true
    }
  ],
  "retrieval_quality_score": 0.87,
  "staleness_flags": []
}
```

### ToolTrace

Captures tool and integration behavior.

```json
{
  "tool_trace_id": "ttrace_123",
  "trace_id": "trace_123",
  "tool_name": "create_support_ticket",
  "tool_category": "support|crm|billing|email|workflow|integration|admin",
  "tool_version": "v4",
  "decision": "called|considered|blocked|requires_approval|skipped",
  "authorization_result": "allowed|denied|review_required|policy_error",
  "risk_level": "medium",
  "input_schema_version": "2026-06-18",
  "input_payload_stored": false,
  "input_payload_hash": "sha256:...",
  "output_status": "success|failed|timeout|partial|blocked",
  "external_resource_id": "ticket_789",
  "idempotency_key": "idem_123",
  "latency_ms": 840,
  "cost_usd": 0.0,
  "side_effect": true
}
```

### PermissionTrace

Captures runtime authorization decisions.

```json
{
  "permission_trace_id": "permtrace_123",
  "trace_id": "trace_123",
  "actor_type": "ai_employee",
  "actor_id": "emp_support_001",
  "requested_action": "send_customer_email",
  "resource_type": "integration.email",
  "resource_id": "gmail_connection_123",
  "policy_version": "runtime_policy_v9",
  "decision": "allowed|denied|requires_review",
  "decision_reasons": [
    "employee_has_email_tool_grant",
    "message_is_customer_support_reply",
    "risk_below_review_threshold"
  ],
  "plan_constraints": ["smart_allows_auto_send_with_policy"],
  "review_policy_applied": false,
  "decision_latency_ms": 34
}
```

### ApprovalTrace

Captures human review decisions.

```json
{
  "approval_trace_id": "apptrace_123",
  "trace_id": "trace_123",
  "approval_request_id": "apr_123",
  "requested_by": "ai_employee",
  "reviewer_user_id": "user_admin_123",
  "review_policy_id": "high_risk_send_policy",
  "status": "requested|approved|rejected|expired|cancelled",
  "decision_reason": "approved after edit",
  "diff_available": true,
  "approved_at": "2026-06-18T12:03:00Z",
  "audit_log_id": "audit_123"
}
```

### MemoryTrace

Captures memory selection and usage.

```json
{
  "memory_trace_id": "memtrace_123",
  "trace_id": "trace_123",
  "memory_items_considered": 12,
  "memory_items_used": 3,
  "memory_scope": "organization|workspace|user|employee|customer",
  "authorization_status": "allowed",
  "sensitivity_levels": ["business_internal"],
  "freshness_status": "fresh|stale|conflicting",
  "memory_item_refs": [
    {
      "memory_id": "mem_001",
      "used": true,
      "reason": "customer preference relevant to response tone",
      "redacted": true
    }
  ]
}
```

### CostTrace

Captures cost and budget decisions.

```json
{
  "cost_trace_id": "costtrace_123",
  "trace_id": "trace_123",
  "plan": "smart",
  "budget_scope": "organization|workspace|employee|workflow|customer",
  "budget_id": "budget_org_monthly_ai",
  "estimated_cost_usd": 0.014,
  "actual_cost_usd": 0.0123,
  "cost_components": {
    "model": 0.0062,
    "embedding": 0.0011,
    "retrieval": 0.0003,
    "tool": 0.0,
    "workflow": 0.0047
  },
  "budget_decision": "allowed|throttled|downgraded|blocked|approval_required",
  "optimization_applied": ["prompt_cache", "model_profile_balanced"]
}
```

## Correlation ID Rules

Every AI Employee execution must include a correlation chain.

Required IDs:

- `trace_id`
- `correlation_id`
- `request_id`
- `session_id` when applicable
- `workflow_run_id` when applicable
- `integration_event_id` when applicable
- `approval_request_id` when applicable
- `incident_id` when applicable
- `billing_usage_id` when applicable
- `customer_event_id` when applicable

Correlation must connect:

- frontend interaction
- backend API request
- queue job
- model call
- retrieval call
- tool call
- integration action
- billing usage record
- audit log
- customer-visible event

## Trace Lifecycle

```text
created
collecting
completed
failed
partially_collected
redacted
archived
expired
incident_preserved
exported
purged
```

## Trace Visibility Levels

### Customer Safe

May be shown to customer admins.

Examples:

- high-level explanation
- used knowledge article titles
- workflow step summary
- action status
- approval history
- cost estimate summary

### Internal Restricted

Available only to authorized Ariyo operators.

Examples:

- redacted prompt preview
- model routing metadata
- retrieval score details
- tool payload hashes
- decision reasons

### Security Restricted

Available only to security/trust staff with purpose-bound access.

Examples:

- incident evidence
- raw malicious prompt
- suspected exfiltration attempt
- policy bypass trace
- sensitive payload metadata

### Raw Sensitive

Should be avoided by default.

If stored, it must require:

- explicit retention reason
- encryption
- access approval
- access logging
- expiration
- incident or audit justification

## Customer-Facing AI Explanations

Ariyo should provide customer-facing explanations without exposing raw internal chain-of-thought or sensitive prompt content.

Customer-facing explanation may include:

- which AI Employee handled the task
- what business context category was used
- which knowledge sources were referenced
- what action was taken
- whether a policy allowed or blocked it
- whether human approval was required
- whether output was generated from retrieved knowledge
- cost class when relevant

Customer-facing explanation must not include:

- hidden prompts
- provider raw outputs
- private chain-of-thought
- sensitive memory values
- raw customer data from other scopes
- security policy internals
- secrets or tokens

## Production Debugging Workflows

### Debug a Bad Answer

Required trace views:

- model trace
- prompt version
- retrieval trace
- used knowledge chunks
- memory trace
- output parser trace
- evaluation score
- user feedback

Questions:

- Did the AI retrieve the wrong source?
- Was the source stale?
- Was the prompt version wrong?
- Did the model ignore policy?
- Did memory conflict with knowledge?
- Was the answer unsupported?

### Debug a Wrong Tool Call

Required trace views:

- tool decision trace
- permission trace
- runtime policy version
- action risk score
- approval trace
- tool payload hash
- integration result

Questions:

- Why was the tool considered?
- Why was it allowed?
- Was approval required?
- Was idempotency enforced?
- Did integration return unexpected data?

### Debug a Cost Spike

Required trace views:

- cost trace
- model trace
- retrieval trace
- workflow run trace
- retry trace
- cache status
- budget decision

Questions:

- Which AI Employee spent the cost?
- Was there a runaway loop?
- Did retries multiply cost?
- Was model routing too expensive?
- Was caching missed?
- Did Smart features trigger premium reasoning?

### Debug a Customer Complaint

Required trace views:

- customer session trace
- AI trace summary
- knowledge sources used
- action timeline
- support ticket linkage
- review history
- audit log

Questions:

- What did the customer see?
- What did Ariyo do?
- What can be safely disclosed?
- Is customer recovery needed?

## Replay and Reproducibility

Ariyo should support trace replay where safe.

Replay modes:

```text
metadata_only_replay
redacted_prompt_replay
sandbox_context_replay
model_version_replay
tool_sandbox_replay
workflow_replay
incident_replay
```

Replay must never execute real side effects unless explicitly authorized in a controlled environment.

Replay must record:

- original model profile
- new model profile
- prompt version
- policy version
- retrieval snapshot
- memory snapshot state
- tool sandbox state
- output differences
- cost differences
- safety differences

## Plan-Aware Observability

### Basic

Basic should provide simple, customer-safe visibility.

Customer-facing features:

- recent AI Employee activity
- high-level action history
- basic success/failure status
- simple cost usage summary
- limited explanation: “used knowledge”, “required review”, “blocked by policy”

Internal observability still must be complete enough for safety.

### Pro

Pro should provide operational observability.

Customer-facing features:

- workflow run timeline
- integration action status
- knowledge source usage summary
- approval trace
- per-employee activity
- per-workflow cost
- error reason categories
- exportable audit summaries

### Smart

Smart should provide advanced AI observability.

Customer-facing features:

- advanced AI Employee trace view
- RAG quality indicators
- cost and latency breakdown
- model behavior summary
- policy decision explanations
- advanced workflow trace
- anomaly detection
- AI performance trends
- evaluation-linked trace insights
- proactive recommendations

Smart must still protect raw sensitive internals.

Smart is deeper visibility, not unrestricted access.

## Advanced KPI System

Ariyo must track observability KPIs at multiple levels.

### AI Trace Coverage KPIs

- Percentage of AI executions with complete trace
- Percentage of model calls linked to trace ID
- Percentage of tool calls linked to permission decision
- Percentage of workflow runs linked to AI trace
- Percentage of incidents with preserved trace evidence

### Debuggability KPIs

- Mean time to diagnose AI issue
- Percentage of bad-answer reports with retrievable evidence
- Percentage of tool incidents with complete action timeline
- Percentage of cost spikes explainable by trace
- Percentage of customer complaints resolved without engineering escalation

### RAG Trace KPIs

- Retrieval trace completeness
- Source attribution completeness
- Stale-source detection rate
- Unsupported answer detection rate
- Citation mismatch rate
- Knowledge chunk usage distribution

### Tool Trace KPIs

- Tool call success rate
- Tool authorization denial rate
- Review-required rate
- Unauthorized tool attempt blocked rate
- Idempotency protection rate
- Tool timeout rate
- Integration failure correlation rate

### Cost Trace KPIs

- Cost attribution completeness
- Budget decision trace completeness
- Model downgrade trace rate
- Cache hit trace rate
- Retry cost amplification rate
- Smart premium reasoning cost visibility

### Safety Trace KPIs

- Prompt injection detection trace rate
- Policy bypass attempt trace rate
- Memory leakage blocked trace rate
- Data exposure incident trace completeness
- Human review trace completeness
- Kill switch trace coverage

### Customer Trust KPIs

- Customer-visible explanation availability
- Admin audit summary usage
- Trace-based support resolution rate
- Customer trust center evidence requests satisfied
- Customer-facing explanation satisfaction

## API Contract

### Create Trace

```http
POST /api/v1/ai-traces
Authorization: Bearer <token>
Content-Type: application/json
```

Request:

```json
{
  "organization_id": "org_123",
  "workspace_id": "ws_123",
  "ai_employee_id": "emp_support_001",
  "trigger_type": "user_message",
  "trigger_id": "msg_123",
  "correlation_id": "corr_abc",
  "environment": "production"
}
```

Response:

```json
{
  "trace_id": "trace_123",
  "status": "created",
  "created_at": "2026-06-18T12:00:00Z"
}
```

### Add Trace Step

```http
POST /api/v1/ai-traces/{trace_id}/steps
```

Request:

```json
{
  "step_type": "tool_called",
  "step_name": "create_support_ticket",
  "status": "completed",
  "started_at": "2026-06-18T12:00:02Z",
  "completed_at": "2026-06-18T12:00:03Z",
  "metadata": {
    "tool_name": "create_support_ticket",
    "authorization_result": "allowed",
    "risk_level": "medium"
  }
}
```

### Get Customer-Safe Trace

```http
GET /api/v1/ai-traces/{trace_id}/customer-view
```

Response:

```json
{
  "trace_id": "trace_123",
  "ai_employee_name": "Support AI Employee",
  "status": "completed",
  "summary": "The AI employee answered using your approved help center knowledge and created a support ticket.",
  "knowledge_sources_used": [
    {
      "title": "Refund Policy",
      "source_type": "help_center",
      "citation_allowed": true
    }
  ],
  "actions": [
    {
      "type": "support_ticket_created",
      "status": "success",
      "requires_human_review": false
    }
  ],
  "cost_summary": {
    "cost_class": "low",
    "plan": "pro"
  }
}
```

### Get Internal Trace

```http
GET /api/v1/internal/ai-traces/{trace_id}
```

Rules:

- Requires internal permission.
- Access must be logged.
- Sensitive fields must be redacted unless explicitly authorized.

### Search Traces

```http
GET /api/v1/internal/ai-traces?organization_id=org_123&status=failed&from=2026-06-01&to=2026-06-18
```

Filters:

- organization
- workspace
- employee
- workflow
- provider
- model profile
- status
- risk level
- incident ID
- cost threshold
- latency threshold
- tool name
- policy decision

### Export Trace Evidence

```http
POST /api/v1/internal/ai-traces/{trace_id}/evidence-export
```

Request:

```json
{
  "purpose": "incident_response",
  "include_raw_sensitive": false,
  "format": "json",
  "retention_override": "incident_evidence"
}
```

## Event Taxonomy

Required events:

```text
ai_trace.created
ai_trace.completed
ai_trace.failed
ai_trace.redacted
ai_trace.preserved_for_incident
ai_trace.customer_view_opened
ai_trace.internal_view_opened
ai_trace.exported
ai_trace.purged

ai_model.called
ai_model.completed
ai_model.failed
ai_model.fallback_used
ai_model.cost_recorded

ai_prompt.composed
ai_prompt.redacted
ai_prompt.version_used

ai_retrieval.started
ai_retrieval.completed
ai_retrieval.low_confidence
ai_retrieval.stale_source_detected

ai_tool.considered
ai_tool.called
ai_tool.blocked
ai_tool.failed
ai_tool.completed

ai_permission.checked
ai_permission.allowed
ai_permission.denied
ai_permission.review_required

ai_memory.considered
ai_memory.used
ai_memory.blocked
ai_memory.conflict_detected

ai_cost.estimated
ai_cost.recorded
ai_cost.budget_blocked
ai_cost.throttled

ai_trace.anomaly_detected
ai_trace.incident_linked
```

## Frontend Requirements

### Customer Trace View

Must show:

- AI Employee name
- task status
- human-readable timeline
- knowledge sources used
- actions taken
- approval status
- error category if failed
- safe cost summary
- next recommended action

Must not show:

- raw prompts
- raw chain-of-thought
- hidden policy internals
- secrets
- unrelated customer data

### Internal Trace Viewer

Must show:

- full trace timeline
- step durations
- model calls
- prompt versions
- retrieval evidence
- tool calls
- permission decisions
- approval decisions
- cost breakdown
- error stack references
- incident links

Must include:

- redaction controls
- purpose-of-access banner
- audit logging
- copy-safe summaries
- export permission gate

### Operations Command Center Integration

The command center must surface:

- failed trace spikes
- high-latency AI traces
- cost anomalies
- tool failure clusters
- provider degradation
- retrieval quality drops
- policy denial spikes
- prompt injection attempts
- support-impacting incidents

## Backend Requirements

Backend must:

- generate trace IDs centrally
- propagate correlation IDs across services
- attach traces to queue jobs
- attach traces to model calls
- attach traces to tool calls
- attach traces to audit logs
- attach traces to billing usage
- attach traces to incident records
- redact sensitive values before storage where possible
- encrypt sensitive trace payloads
- enforce retention policies
- support asynchronous trace collection
- tolerate partial trace failure without breaking user workflows

## Data Retention Rules

Default retention should vary by trace class.

Example:

```text
standard_ai_trace: 90 days
customer_audit_summary: plan-dependent
security_restricted_trace: 180 days or incident policy
incident_evidence_trace: legal/security retention policy
raw_sensitive_trace_payload: shortest possible retention
sandbox_trace: 30 days unless promoted to eval set
```

Retention must be configurable by enterprise policy where applicable.

## Security & Privacy Rules

- Never store secrets in traces.
- Never expose raw provider API keys.
- Never expose raw OAuth tokens.
- Never expose raw hidden prompts to customers.
- Never expose private chain-of-thought.
- Redact PII where full content is not needed.
- Log every internal access to sensitive traces.
- Scope trace search by organization and permission.
- Prevent cross-tenant trace access.
- Encrypt sensitive trace payloads.
- Treat trace export as a privileged action.

## Incident Response Integration

AI incidents must link to traces.

Incident record should include:

- primary trace ID
- related trace IDs
- affected organization IDs
- affected AI Employees
- prompt version
- model provider
- tool calls
- data exposure indicators
- containment actions
- customer communication status
- postmortem link

## Evaluation Integration

Traces must support evaluation workflows.

Evaluation uses:

- production trace samples
- failed traces
- customer-reported traces
- high-cost traces
- safety-blocked traces
- tool error traces
- RAG low-confidence traces

Traces may be promoted into eval sets only after:

- privacy review
- redaction
- customer scope validation
- retention classification

## Forbidden Patterns

Do not:

- log raw prompts everywhere by default
- expose chain-of-thought to customers
- store secrets in trace payloads
- allow internal staff to browse traces without audit logging
- create traces without organization scope
- create model calls without trace IDs
- create tool calls without permission trace
- debug AI incidents from screenshots only
- treat logs as sufficient observability
- store sensitive payloads forever
- mix tenant traces in one shared view
- allow support agents to access raw customer content without purpose
- use traces for model training without explicit policy
- show provider error messages directly to customers
- ignore partial trace collection failures
- make Smart plan mean raw unrestricted trace access

## Golden Rule

If Ariyo cannot trace an AI Employee action, Ariyo cannot responsibly trust, debug, explain, audit, or improve that action.

## Final Rule

AI observability must make Ariyo safer, clearer, faster to debug, easier to trust, and harder to misuse.

It must never become a second source of customer data exposure.
