# Ariyo AI Agent Simulation Sandbox Skill

## Purpose

This skill defines the simulation sandbox system for Ariyo AI Employees.

The simulation sandbox is the safe execution environment where AI employees, workflows, tools, integrations, approvals, knowledge retrieval, memory usage, cost behavior, and customer-facing actions can be tested before anything affects real customers, real systems, real data, real invoices, real channels, or real integrations.

This skill must be used whenever Ariyo designs or implements:

- AI employee test mode
- Dry-run execution
- Workflow simulation
- Tool sandboxing
- Fake integration adapters
- Scenario replay
- Customer journey replay
- Approval simulation
- Human review simulation
- RAG simulation
- Memory simulation
- Cost simulation
- Safety testing
- Release readiness testing
- Pilot testing
- Marketplace template testing
- Partner solution validation
- Demo environments
- Internal QA environments
- Enterprise proof-of-concept environments

The simulation sandbox must make it possible to answer one critical question before deployment:

> If this AI employee were allowed to operate in production, what would it try to do, what would it cost, what would it touch, what risks would appear, and who would need to approve it?

---

## Core Contract

Ariyo AI employees must not be tested directly on real customers, real integrations, real payments, real production workflows, or irreversible business actions.

Every meaningful AI employee behavior must be testable inside a controlled sandbox that simulates context, tools, permissions, approvals, failures, latency, costs, safety policies, and expected outcomes.

The sandbox must show what the AI employee would do without allowing it to cause real-world harm.

AI employees may rehearse in simulation.

AI employees may act in production only after simulation, evaluation, permission checks, cost checks, safety checks, and release gates pass.

---

## Related Skills

This skill depends on and must stay consistent with:

- `product-strategy.md`
- `ai-employee-architecture.md`
- `prompt-tool-orchestration.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-memory-context.md`
- `ai-agent-evaluation-benchmarking.md`
- `workflow-automation.md`
- `human-review-governance.md`
- `integration-ecosystem.md`
- `knowledge-rag.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `ai-safety-evaluation.md`
- `ai-cost-control.md`
- `quality-assurance-system.md`
- `reliability-sla.md`
- `observability-analytics-events.md`
- `feature-flags-rollout-system.md`
- `internal-admin-backoffice.md`
- `customer-success-playbooks.md`
- `customer-education-academy.md`

If this skill conflicts with security, privacy, runtime permissions, or human review governance, the stricter rule wins.

---

## Sandbox Philosophy

The sandbox is not a toy demo.

The sandbox is a production-readiness safety layer.

Ariyo must treat simulation as a required discipline for AI employee deployment because AI employees can:

- Generate customer-facing content
- Trigger workflows
- Use tools
- Read knowledge
- Use memory
- Access integrations
- Send messages
- Recommend business decisions
- Consume AI budget
- Request approvals
- Modify records
- Create support or sales outputs
- Affect customer trust

The sandbox must make these behaviors visible before deployment.

---

## What the Sandbox Must Prove

Before an AI employee, workflow, template, or automation is deployed, Ariyo must be able to prove:

1. The AI employee understood the task.
2. The AI employee used the correct knowledge.
3. The AI employee did not retrieve unauthorized memory or data.
4. The AI employee selected allowed tools only.
5. The AI employee respected plan, role, and organization permissions.
6. The AI employee followed human review rules.
7. The AI employee handled failures safely.
8. The AI employee did not hallucinate critical facts.
9. The AI employee did not expose sensitive data.
10. The AI employee stayed inside cost and usage budgets.
11. The AI employee produced observable, auditable output.
12. The AI employee can be stopped or rolled back.
13. The AI employee meets release gates.

---

## Sandbox Modes

Ariyo must support multiple sandbox modes.

### 1. Dry-Run Mode

Dry-run mode simulates an AI employee execution without performing real actions.

Required behavior:

- Generate intended tool calls
- Show intended action payloads
- Show approval requirements
- Show risk score
- Show estimated cost
- Show retrieved knowledge sources
- Show memory items considered
- Show final output preview
- Block all side effects

Dry-run must never:

- Send real messages
- Create real tickets
- Update real CRM records
- Charge payment methods
- Trigger real webhooks
- Modify production data
- Notify external users

### 2. Preview Mode

Preview mode lets a user see what the AI employee would say or do in a specific scenario.

Examples:

- Preview customer support reply
- Preview sales follow-up
- Preview workflow outcome
- Preview knowledge-grounded answer
- Preview marketplace template behavior
- Preview channel response

Preview output must clearly indicate:

- This is not sent
- This is not executed
- This is not visible to customers
- This may require review before deployment

### 3. Tool Sandbox Mode

Tool sandbox mode replaces production tools with fake or safe tool adapters.

Examples:

- Fake CRM adapter
- Fake helpdesk adapter
- Fake email adapter
- Fake WhatsApp adapter
- Fake billing adapter
- Fake calendar adapter
- Fake webhook endpoint
- Fake marketplace install adapter

The AI employee should believe it is calling a tool, but the system must route the call to a simulated adapter.

### 4. Workflow Simulation Mode

Workflow simulation mode executes a full workflow path using simulated triggers, state transitions, approvals, tool calls, and outcomes.

It must support:

- Trigger simulation
- Branch simulation
- Delay simulation
- Retry simulation
- Failure simulation
- Human review simulation
- Rollback simulation
- Cost simulation
- Audit trail simulation

### 5. Scenario Replay Mode

Scenario replay mode re-runs historical or synthetic customer scenarios against a new AI employee version, prompt version, model profile, workflow version, or knowledge version.

It must support:

- Replay production-like events safely
- Compare old vs new behavior
- Detect regressions
- Detect changed tool calls
- Detect changed cost
- Detect changed safety behavior
- Detect changed latency
- Detect changed review requirements

Scenario replay must use redacted or synthetic data unless explicitly allowed by privacy policy and customer agreement.

### 6. Customer Journey Sandbox Mode

Customer journey sandbox mode simulates an end-to-end customer path.

Examples:

- Sign up
- Pick plan
- Hire AI employee
- Add business context
- Connect knowledge
- Test employee
- Review output
- Deploy to a channel
- Observe first outcome
- Upgrade plan

This mode is important for onboarding, sales demos, QA, customer education, and partner certification.

### 7. Approval Simulation Mode

Approval simulation mode tests how an AI employee behaves when actions require human approval.

It must simulate:

- Reviewer assignment
- Reviewer permission checks
- Approval timeout
- Approval rejection
- Approval modification
- Approval escalation
- Multi-reviewer approval
- Risk-based review
- Cost-based review
- Billing/security/legal review

### 8. Failure Injection Mode

Failure injection mode intentionally introduces failures to verify safe behavior.

Failure types:

- Model timeout
- Provider outage
- Tool unavailable
- Integration auth expired
- Rate limit exceeded
- Permission denied
- Knowledge source stale
- Retrieval returns low-confidence data
- Webhook signature invalid
- Billing limit reached
- Review timeout
- Memory conflict
- Prompt injection attempt
- Policy violation

Failure injection must verify that the AI employee degrades safely.

### 9. Marketplace Template Simulation Mode

Marketplace template simulation mode validates AI employee templates, workflow templates, knowledge packs, integration bundles, and industry solution bundles before listing or installation.

It must test:

- Install readiness
- Required permissions
- Required integrations
- Required plan
- Expected costs
- Risk profile
- Customer setup requirements
- Abuse potential
- Support burden
- Quality score

### 10. Sales Demo Sandbox Mode

Sales demo sandbox mode gives sales teams a controlled demonstration environment.

Rules:

- Must use synthetic accounts
- Must use fake customer data
- Must show realistic outcomes
- Must never expose real customer data
- Must make plan limitations clear
- Must not fake unsupported capabilities
- Must not imply guaranteed outcomes

---

## Sandbox Environment Types

Ariyo must distinguish between environment types.

```text
local
preview
sandbox
staging
demo
pilot
production_shadow
production
```

### local

Developer-only environment.

Allowed:

- Unit testing
- Mocked model responses
- Mocked tools
- Synthetic data

Not allowed:

- Real customer data
- Real provider credentials
- Real external actions

### preview

Temporary environment for reviewing UI/product changes.

Allowed:

- Preview pages
- Simulated flows
- Non-production credentials

Not allowed:

- Real AI action execution
- Production integrations

### sandbox

Official AI behavior testing environment.

Allowed:

- Dry-runs
- Tool sandboxing
- Scenario replay
- Workflow simulation
- Evaluation datasets

Not allowed:

- Real external side effects
- Production credentials
- Unredacted customer data unless approved

### staging

Pre-production release validation environment.

Allowed:

- Full release gate testing
- Safe production-like configuration
- End-to-end tests

Not allowed:

- Real customer-facing messages
- Real billing operations

### demo

Sales and education environment.

Allowed:

- Synthetic demo accounts
- Safe scripted scenarios
- Controlled AI outputs

Not allowed:

- Real customer data
- Misleading capabilities

### pilot

Controlled customer trial environment.

Allowed:

- Customer-approved test data
- Limited tool actions
- Human review required
- Strict monitoring

Not allowed:

- Unapproved external actions
- Unlimited AI spend
- Broad access

### production_shadow

Production-adjacent evaluation mode where AI observes or simulates without acting.

Allowed:

- Shadow predictions
- Comparison against human actions
- Cost/quality evaluation
- No customer-visible effects

Not allowed:

- Acting on real systems
- Sending messages
- Writing records

### production

Live customer environment.

Actions are allowed only if all gates pass.

---

## Simulation Entities

Ariyo must model simulation explicitly.

### SimulationRun

Represents one simulation execution.

Required fields:

```json
{
  "id": "sim_run_123",
  "organization_id": "org_123",
  "workspace_id": "ws_123",
  "ai_employee_id": "emp_123",
  "simulation_type": "workflow_simulation",
  "environment": "sandbox",
  "status": "completed",
  "scenario_id": "scenario_123",
  "initiated_by_user_id": "user_123",
  "started_at": "2026-06-18T10:00:00Z",
  "completed_at": "2026-06-18T10:01:42Z",
  "risk_score": 42,
  "estimated_cost": {
    "amount": 0.18,
    "currency": "USD"
  },
  "release_gate_result": "passed_with_warnings"
}
```

### SimulationScenario

Represents a reusable test scenario.

Required fields:

```json
{
  "id": "scenario_123",
  "name": "Refund request from upset customer",
  "scenario_type": "support",
  "industry": "ecommerce",
  "input_events": [],
  "expected_outcomes": [],
  "risk_tags": ["customer_facing", "refund", "billing"],
  "required_tools": ["helpdesk.read", "billing.refund.preview"],
  "created_by": "user_123",
  "version": 3
}
```

### SimulatedToolCall

Represents a tool call that would have happened.

Required fields:

```json
{
  "id": "sim_tool_call_123",
  "simulation_run_id": "sim_run_123",
  "tool_name": "crm.update_contact",
  "mode": "simulated",
  "input_payload": {},
  "simulated_output": {},
  "would_have_side_effect": true,
  "blocked_reason": "dry_run_mode",
  "permission_result": "allowed_in_simulation_only",
  "risk_score": 35
}
```

### SimulatedAction

Represents a business action the AI employee wanted to execute.

Required fields:

```json
{
  "id": "sim_action_123",
  "simulation_run_id": "sim_run_123",
  "action_type": "send_email",
  "target_system": "email",
  "customer_visible": true,
  "requires_human_review": true,
  "approval_policy": "review_before_send",
  "status": "simulated_only",
  "preview": "Draft response text..."
}
```

### SimulationFinding

Represents an issue discovered during simulation.

Required fields:

```json
{
  "id": "finding_123",
  "simulation_run_id": "sim_run_123",
  "severity": "high",
  "category": "permission_violation",
  "title": "AI employee attempted unauthorized refund action",
  "evidence": {},
  "recommended_fix": "Restrict billing.refund.execute to human-approved actions only",
  "blocks_release": true
}
```

### SimulationSnapshot

Stores historical simulation results for comparison.

Required fields:

```json
{
  "id": "sim_snapshot_123",
  "entity_type": "ai_employee",
  "entity_id": "emp_123",
  "version": "prompt:v14-model:gpt-4.1-profile:smart",
  "score_summary": {},
  "created_at": "2026-06-18T10:00:00Z"
}
```

---

## Simulation Statuses

Simulation runs must use clear lifecycle states.

```text
created
queued
running
waiting_for_mock_input
waiting_for_simulated_approval
completed
completed_with_warnings
failed
cancelled
expired
blocked
```

Definitions:

- `created`: Simulation exists but has not started.
- `queued`: Simulation is waiting for execution resources.
- `running`: Simulation is actively executing.
- `waiting_for_mock_input`: Simulation needs a fake user/system response.
- `waiting_for_simulated_approval`: Simulation is paused at an approval step.
- `completed`: Simulation completed without blocking findings.
- `completed_with_warnings`: Simulation completed but produced warnings.
- `failed`: Simulation failed because the test system failed.
- `cancelled`: User or system cancelled the run.
- `expired`: Simulation exceeded maximum allowed time.
- `blocked`: Simulation identified a release-blocking issue.

---

## Release Gate Results

Simulation must produce release gate outcomes.

```text
passed
passed_with_warnings
blocked_by_quality
blocked_by_safety
blocked_by_permission
blocked_by_cost
blocked_by_reliability
blocked_by_privacy
blocked_by_security
blocked_by_missing_review
inconclusive
```

No AI employee behavior should move to production if the result is blocked.

---

## Plan-Aware Simulation: Basic / Pro / Smart

Simulation must respect customer plan differences.

### Basic

Basic sandbox should support:

- Simple dry-run preview
- Basic AI employee reply preview
- Limited workflow simulation
- Limited knowledge simulation
- Basic cost estimate
- Basic safety warnings
- Limited scenario library
- Manual test runs

Basic sandbox must not include:

- Advanced scenario replay
- Bulk simulation
- Production shadow mode
- Deep benchmark comparisons
- Advanced fake integrations
- Advanced compliance simulation
- Custom evaluation suites

### Pro

Pro sandbox should support:

- Full dry-run mode
- Workflow simulation
- Tool sandbox mode
- Integration simulation
- Approval simulation
- Failure simulation
- Historical comparison
- Team-shared scenario library
- Cost and latency estimates
- Simulation reports
- Release readiness checks
- Scheduled test runs

Pro sandbox should be suitable for daily operational teams.

### Smart

Smart sandbox should support full-option simulation:

- Production shadow evaluation
- Scenario replay at scale
- Synthetic customer journey generation
- Advanced adversarial simulations
- Multi-agent simulation
- Marketplace template simulation
- AI-generated test scenario suggestions
- Predictive risk scoring
- Advanced benchmark comparison
- Cost optimization simulation
- Prompt injection simulation
- Memory leakage simulation
- Compliance policy simulation
- Automated release recommendation
- Executive simulation dashboards

Smart may use stronger models and deeper evaluation, but must enforce cost controls.

---

## Simulation Capability Matrix

| Capability | Basic | Pro | Smart |
|---|---:|---:|---:|
| Reply preview | Yes | Yes | Yes |
| Dry-run tool preview | Limited | Yes | Yes |
| Workflow simulation | Limited | Yes | Advanced |
| Fake integrations | No/limited | Yes | Advanced |
| Approval simulation | Limited | Yes | Advanced |
| Failure injection | No | Yes | Advanced |
| Scenario replay | No | Limited | Full |
| Production shadow mode | No | Limited add-on | Yes |
| Multi-agent simulation | No | No | Yes |
| Cost simulation | Basic | Detailed | Predictive |
| Safety simulation | Basic | Advanced | Adversarial |
| Memory leakage simulation | No | Limited | Yes |
| Prompt injection simulation | No | Yes | Advanced |
| Marketplace template simulation | No | Yes | Advanced |
| Simulation API | Limited | Yes | Full |
| Custom scenario library | No | Yes | Yes |
| Automated release recommendation | No | Limited | Yes |

---

## Simulation Scoring

Every simulation run should produce a structured score.

### Required score categories

```text
quality_score
safety_score
permission_score
cost_score
latency_score
reliability_score
privacy_score
retrieval_score
memory_score
tool_use_score
approval_score
customer_experience_score
release_readiness_score
```

### Score scale

Use a 0 to 100 scale.

```text
90-100 = excellent
75-89 = acceptable
60-74 = warning
40-59 = high risk
0-39 = blocked
```

### Release readiness formula

Release readiness should be calculated using weighted scores.

Default weights:

```json
{
  "safety_score": 0.18,
  "permission_score": 0.16,
  "quality_score": 0.14,
  "privacy_score": 0.12,
  "tool_use_score": 0.10,
  "retrieval_score": 0.08,
  "cost_score": 0.08,
  "reliability_score": 0.06,
  "latency_score": 0.04,
  "approval_score": 0.04
}
```

Security, privacy, and permission failures must override the weighted score.

A high average score cannot compensate for a critical safety failure.

---

## Advanced KPI System

The sandbox must provide advanced KPIs for internal teams, customers, and Smart-plan users.

### Simulation Coverage KPIs

- Percentage of AI employee capabilities covered by simulations
- Percentage of workflows with at least one simulation scenario
- Percentage of integrations covered by fake adapter tests
- Percentage of high-risk actions covered by approval simulation
- Percentage of marketplace assets tested before listing

### Release Safety KPIs

- Simulation pass rate
- Release-blocking finding rate
- Safety regression rate
- Permission regression rate
- Tool-use regression rate
- Memory leakage detection rate
- Prompt injection failure rate
- Human review bypass attempt rate

### Quality KPIs

- Average response quality score
- Expected vs actual outcome match rate
- Grounding accuracy rate
- Hallucination detection rate
- Unsupported claim rate
- Low-confidence answer rate
- Customer-facing output readiness rate

### Cost KPIs

- Estimated AI cost per simulation
- Estimated AI cost per workflow execution
- Cost delta vs previous version
- Cost spike detection rate
- Smart reasoning cost multiplier
- Cost saved through model downgrade simulation
- Cost saved through caching simulation

### Reliability KPIs

- Simulation completion rate
- Simulation timeout rate
- Simulated tool failure handling rate
- Retry behavior correctness rate
- Degraded mode success rate
- Recovery path correctness rate

### Operational KPIs

- Average time to simulation completion
- Average time to fix blocking findings
- Number of scenarios per AI employee
- Number of simulations run before deployment
- Percentage of releases with sandbox evidence
- Number of production incidents that should have been caught by simulation

### Customer-Facing Sandbox KPIs

- First test run completion rate
- Time to first safe preview
- Customer confidence score after sandbox test
- Deployment after successful simulation rate
- Simulation-to-activation conversion rate

---

## Tool Sandbox Requirements

Ariyo must never rely on production tool adapters during sandbox testing.

Every tool must define a sandbox adapter.

### Tool adapter contract

Each tool adapter must define:

```json
{
  "tool_name": "crm.update_contact",
  "production_adapter": "CrmUpdateContactAdapter",
  "sandbox_adapter": "SandboxCrmUpdateContactAdapter",
  "side_effect_level": "external_write",
  "supports_dry_run": true,
  "supports_preview": true,
  "supports_failure_injection": true,
  "requires_human_review_in_production": false,
  "sandbox_response_schema": {}
}
```

### Side effect levels

```text
none
internal_read
internal_write
external_read
external_write
customer_visible
financial
security_sensitive
irreversible
```

Sandbox must block or simulate anything above `internal_read` unless explicitly configured.

---

## Fake Integration Adapters

Fake integration adapters must mimic realistic behavior without touching real systems.

Examples:

### Fake CRM

Should support:

- Read fake contacts
- Update fake records
- Create fake notes
- Simulate permission denied
- Simulate duplicate records
- Simulate stale CRM data

### Fake Helpdesk

Should support:

- Read fake tickets
- Draft fake replies
- Change fake status
- Simulate angry customer thread
- Simulate escalation
- Simulate missing context

### Fake Email

Should support:

- Draft email
- Preview recipients
- Block sending
- Simulate bounce
- Simulate wrong recipient risk

### Fake Billing

Should support:

- Preview invoice
- Preview refund
- Simulate payment failure
- Simulate tax calculation unavailable
- Block real charges/refunds

### Fake Calendar

Should support:

- Preview availability
- Simulate invite creation
- Simulate conflict
- Block real invitations

### Fake Webhook

Should support:

- Signature validation simulation
- Event replay
- Duplicate event simulation
- Invalid payload simulation
- Dead-letter behavior

---

## Knowledge/RAG Simulation

Knowledge simulation must test retrieval quality before deployment.

Required tests:

- Correct source retrieval
- Wrong source detection
- Stale knowledge detection
- Missing knowledge detection
- Conflicting knowledge handling
- Citation correctness
- Unsupported claim detection
- Access-scoped retrieval
- Tenant isolation
- Low-confidence fallback

RAG simulation output must show:

```json
{
  "retrieved_sources": [],
  "excluded_sources": [],
  "source_confidence": 0.86,
  "citation_quality_score": 91,
  "unsupported_claims": [],
  "missing_knowledge_gaps": [],
  "permission_filtered_results": []
}
```

---

## Memory Simulation

Memory simulation must verify that AI employees use memory safely.

Required tests:

- Memory retrieval authorization
- Memory freshness
- Memory conflict resolution
- Memory deletion enforcement
- Organization boundary enforcement
- Workspace boundary enforcement
- Customer boundary enforcement
- Sensitive memory redaction
- Memory poisoning detection
- Memory leakage detection

Memory simulation must answer:

- What memory was considered?
- What memory was used?
- What memory was excluded?
- Why was it excluded?
- Was the memory allowed for this action?
- Was the memory stale or conflicting?

---

## Prompt Injection Simulation

The sandbox must include prompt injection tests.

Prompt injection scenarios:

- Customer says ignore previous instructions
- Knowledge document contains malicious instructions
- Website content contains hidden instructions
- Email thread asks AI to reveal secrets
- Uploaded file asks AI to bypass permissions
- Tool output contains malicious instruction
- Marketplace template contains hidden prompt instructions

Required behavior:

- Detect hostile instructions
- Preserve system and policy hierarchy
- Avoid revealing sensitive data
- Avoid unauthorized tool calls
- Log the attempt
- Continue safely or escalate

---

## Cost Simulation

The sandbox must estimate cost before deployment.

Cost simulation must include:

- Model cost
- Reasoning cost
- RAG cost
- Embedding cost
- Tool cost
- Integration API cost
- Workflow retry cost
- Human review cost estimate
- Marketplace template cost impact
- Expected monthly cost impact

Cost simulation must support:

- Basic budget estimation
- Pro workflow cost reports
- Smart predictive cost forecasting

Cost findings should include:

```json
{
  "estimated_cost_per_run": 0.21,
  "estimated_monthly_cost": 148.50,
  "cost_driver": "deep_reasoning_model",
  "optimization_recommendations": [
    "Use cached retrieval for repeated knowledge lookup",
    "Downgrade summarization step to standard model",
    "Limit retry count to 2"
  ],
  "blocks_release": false
}
```

---

## Human Review Simulation

The sandbox must simulate human review paths.

Required review scenarios:

- Approve as-is
- Reject
- Edit then approve
- Escalate
- Timeout
- Reviewer lacks permission
- Review conflict
- Multi-step approval
- High-risk action requiring admin approval
- Billing-sensitive action requiring finance approval
- Security-sensitive action requiring security approval

Review simulation must verify:

- Correct reviewer assignment
- Correct review UI data
- Correct audit log
- Correct post-approval execution path
- Correct blocked behavior when rejected

---

## Multi-Agent Simulation

Smart plan and internal advanced testing should support multi-agent simulation.

Examples:

- Support AI employee hands off to Billing AI employee
- Sales AI employee collaborates with GEO AI employee
- Operations AI employee escalates to Human Review Coordinator
- Customer Success AI employee triggers Lifecycle Automation

Multi-agent simulation must test:

- Handoff correctness
- Context transfer limits
- Permission transfer limits
- Data minimization
- Conflicting actions
- Duplicate work
- Cost amplification
- Infinite loop prevention

---

## Production Shadow Evaluation

Production shadow evaluation allows an AI employee to observe production-like tasks without acting.

Rules:

- Must not be customer-visible
- Must not trigger actions
- Must not write external records
- Must be clearly labeled as shadow mode
- Must use privacy-compliant data handling
- Must log cost separately
- Must be disabled by kill switch

Use cases:

- Compare AI reply to human reply
- Test new prompt version
- Test model provider routing
- Test workflow branch logic
- Test Smart automation before enabling execution

---

## API Contract

### Create Simulation Scenario

`POST /api/v1/simulation-scenarios`

Request:

```json
{
  "name": "High-value lead asks for enterprise pricing",
  "scenario_type": "sales",
  "industry": "saas",
  "plan_context": "pro",
  "input_events": [
    {
      "type": "inbound_message",
      "channel": "website_chat",
      "body": "We have 80 employees and need AI support automation. What plan fits us?"
    }
  ],
  "expected_outcomes": [
    "Recommend Pro or Smart based on automation depth",
    "Ask discovery question",
    "Offer demo booking"
  ],
  "risk_tags": ["pricing", "sales", "customer_facing"]
}
```

Response:

```json
{
  "scenario": {
    "id": "scenario_456",
    "name": "High-value lead asks for enterprise pricing",
    "version": 1,
    "status": "active"
  }
}
```

### Run Simulation

`POST /api/v1/simulations`

Request:

```json
{
  "ai_employee_id": "emp_sales_123",
  "scenario_id": "scenario_456",
  "simulation_type": "dry_run",
  "environment": "sandbox",
  "mode": "no_side_effects",
  "options": {
    "simulate_tools": true,
    "simulate_approvals": true,
    "simulate_cost": true,
    "inject_failures": false
  }
}
```

Response:

```json
{
  "simulation_run": {
    "id": "sim_run_456",
    "status": "queued",
    "created_at": "2026-06-18T10:00:00Z"
  }
}
```

### Get Simulation Result

`GET /api/v1/simulations/{simulation_run_id}`

Response:

```json
{
  "simulation_run": {
    "id": "sim_run_456",
    "status": "completed_with_warnings",
    "scores": {
      "quality_score": 88,
      "safety_score": 94,
      "permission_score": 100,
      "cost_score": 76,
      "release_readiness_score": 86
    },
    "estimated_cost": {
      "amount": 0.14,
      "currency": "USD"
    },
    "retrieved_sources": [],
    "simulated_tool_calls": [],
    "simulated_actions": [],
    "findings": [
      {
        "severity": "warning",
        "category": "cost",
        "title": "Smart reasoning model used for simple qualification step",
        "recommended_fix": "Use standard model for first qualification branch"
      }
    ],
    "release_gate_result": "passed_with_warnings"
  }
}
```

### Compare Simulation Runs

`POST /api/v1/simulations/compare`

Request:

```json
{
  "baseline_run_id": "sim_run_old",
  "candidate_run_id": "sim_run_new",
  "comparison_focus": ["quality", "cost", "safety", "tool_use"]
}
```

Response:

```json
{
  "comparison": {
    "quality_delta": 6,
    "cost_delta_percent": 18,
    "safety_delta": 0,
    "tool_call_changes": [],
    "regressions": [],
    "recommendation": "approve_with_cost_monitoring"
  }
}
```

### Run Scenario Replay

`POST /api/v1/simulations/replay`

Request:

```json
{
  "ai_employee_id": "emp_support_123",
  "scenario_collection_id": "collection_support_regression",
  "candidate_version": "prompt_v22",
  "baseline_version": "prompt_v21"
}
```

Response:

```json
{
  "replay_job": {
    "id": "replay_123",
    "status": "queued",
    "scenario_count": 250
  }
}
```

### Create Sandbox Webhook

`POST /api/v1/simulation-webhooks`

Request:

```json
{
  "url": "https://example.com/webhooks/ariyo-simulation",
  "events": [
    "simulation.completed",
    "simulation.blocked",
    "simulation.finding.created",
    "simulation.release_gate.failed"
  ],
  "secret": "whsec_example"
}
```

Response:

```json
{
  "webhook": {
    "id": "sim_wh_123",
    "status": "active"
  }
}
```

---

## Webhook Events

Required simulation webhook events:

```text
simulation.created
simulation.queued
simulation.started
simulation.completed
simulation.completed_with_warnings
simulation.failed
simulation.blocked
simulation.finding.created
simulation.release_gate.passed
simulation.release_gate.failed
simulation.cost_threshold_exceeded
simulation.security_issue_detected
simulation.permission_violation_detected
simulation.memory_leakage_detected
simulation.prompt_injection_detected
simulation.replay.completed
```

Webhook payload example:

```json
{
  "event": "simulation.blocked",
  "created_at": "2026-06-18T10:00:00Z",
  "data": {
    "simulation_run_id": "sim_run_123",
    "organization_id": "org_123",
    "ai_employee_id": "emp_123",
    "release_gate_result": "blocked_by_permission",
    "blocking_findings": ["finding_123"]
  }
}
```

---

## Frontend Requirements

Simulation UI must be clear, safe, and confidence-building.

Required screens:

- Simulation dashboard
- Scenario library
- Create scenario flow
- Run simulation flow
- Simulation result detail
- Tool call preview
- Action preview
- Human review simulation panel
- Cost simulation panel
- Safety findings panel
- Release gate summary
- Version comparison view
- Scenario replay dashboard
- Marketplace template test report

### Required UI labels

Use explicit labels:

- `Simulation only`
- `No real action taken`
- `Would require approval`
- `Would be blocked in production`
- `Safe to deploy`
- `Deploy blocked`
- `Review required`
- `Cost warning`
- `Privacy warning`

### Forbidden UI labels

Do not use vague labels:

- `Tested`
- `Looks good`
- `AI approved`
- `Probably safe`
- `Ready` without evidence
- `Run live` without review context

---

## Backend Requirements

Backend must enforce sandbox boundaries.

Required services:

- `SimulationService`
- `ScenarioService`
- `SandboxToolRouter`
- `FakeIntegrationRegistry`
- `SimulationEvaluator`
- `ScenarioReplayService`
- `FailureInjectionService`
- `SimulationCostEstimator`
- `SimulationAuditLogger`
- `ReleaseGateEvaluator`
- `SandboxWebhookDispatcher`

Backend must guarantee:

- No production adapter is called in sandbox mode
- No real external side effects occur
- No production credentials are exposed
- No unauthorized customer data is used
- All simulated actions are auditable
- All release gates are deterministic and explainable

---

## Security Requirements

Simulation sandbox must be secure by design.

Rules:

- Sandbox data must be isolated from production data.
- Sandbox credentials must never access production systems.
- Production credentials must never be used in sandbox.
- Simulation logs must redact secrets and sensitive data.
- Simulation runs must be permission-scoped.
- Only authorized users can run simulations involving sensitive scenarios.
- Scenario replay using customer-derived data must require privacy approval.
- Sandbox must not create a bypass around runtime permissions.
- Sandbox findings must not expose sensitive customer data to unauthorized users.

---

## Privacy Requirements

Simulation must minimize data exposure.

Rules:

- Prefer synthetic data.
- Use redacted production data only when necessary.
- Require customer agreement for customer-specific pilot simulation.
- Do not use sensitive customer data in demo environments.
- Do not store raw sensitive prompts longer than necessary.
- Honor deletion requests in simulation datasets.
- Separate customer-specific scenarios by organization.
- Do not reuse one organization's scenario data for another organization.

---

## Audit Requirements

Every simulation must be auditable.

Audit log must include:

- Who ran the simulation
- What AI employee was tested
- What version was tested
- What scenario was used
- What data sources were used
- What tools were simulated
- What actions would have occurred
- What approvals were required
- What findings were generated
- What release gate result was produced
- Whether deployment followed the simulation result

---

## Integration With Release Gates

Simulation must feed release readiness.

A release must be blocked if:

- Critical safety finding exists
- Unauthorized tool call attempted
- Memory leakage detected
- Prompt injection succeeded
- Customer-visible action bypassed review
- Cost exceeds allowed budget
- RAG retrieval violates permissions
- Integration action has no sandbox test
- Financial action lacks approval simulation
- Security-sensitive action lacks failure simulation

---

## Integration With AI Evaluation

Simulation and evaluation are related but not identical.

Evaluation answers:

- Did the AI produce a good output?
- Was the answer correct?
- Did it hallucinate?
- Did it follow policy?

Simulation answers:

- What would happen in an operational environment?
- What tools would be used?
- What would be approved?
- What would fail?
- What would it cost?
- What would be visible to customers?
- What real-world risk exists?

Both are required for production readiness.

---

## Integration With Customer Education

Customer education should teach users how to use sandbox safely.

Academy lessons should cover:

- How to test an AI employee before deployment
- How to read simulation results
- How to interpret cost warnings
- How to fix knowledge gaps
- How to configure approvals
- How to understand release readiness
- How Basic, Pro, and Smart sandbox capabilities differ

---

## Integration With Sales Demo

Sales demos should use sandbox to build trust.

Demo script should show:

1. Hire AI employee.
2. Add business context.
3. Run simulation.
4. Show what AI would do.
5. Show approval gate.
6. Show cost estimate.
7. Show safe deployment readiness.

This proves Ariyo is not just generating text. Ariyo governs AI labor.

---

## Internal Admin Requirements

Internal admin must support simulation operations.

Required admin capabilities:

- View organization simulation history
- View failed simulations
- Inspect blocking findings
- Re-run scenario safely
- Disable risky scenario collection
- Manage global fake integration adapters
- Manage release gate thresholds
- Enable/disable production shadow mode
- View simulation KPI dashboard
- Export simulation evidence for enterprise customers

All admin actions must be audited.

---

## Marketplace Requirements

Marketplace assets must pass simulation before listing.

Required marketplace checks:

- Template installs successfully in sandbox
- Required permissions are visible
- Required integrations are simulated
- Tool calls are safe
- Costs are estimated
- Customer-visible outputs are acceptable
- Abuse scenarios are tested
- Setup instructions are complete
- Support burden is estimated

Marketplace listing must show relevant trust indicators:

- Tested in sandbox
- Last simulation date
- Supported plans
- Required integrations
- Expected cost profile
- Review requirements

---

## Observability Events

Required events:

```text
simulation_run_created
simulation_run_started
simulation_run_completed
simulation_run_blocked
simulation_finding_created
simulation_tool_call_previewed
simulation_action_previewed
simulation_cost_estimated
simulation_release_gate_passed
simulation_release_gate_failed
simulation_replay_started
simulation_replay_completed
sandbox_adapter_called
failure_injection_triggered
prompt_injection_simulated
memory_leakage_simulated
production_shadow_started
production_shadow_stopped
```

All events must include:

- `organization_id`
- `workspace_id`
- `ai_employee_id`
- `simulation_run_id`
- `scenario_id`
- `environment`
- `plan`
- `actor_user_id`
- `correlation_id`

---

## Testing Requirements

Simulation system itself must be tested.

Required tests:

- Sandbox never calls production adapter
- Dry-run blocks side effects
- Fake integrations return expected schema
- Failure injection triggers correct behavior
- Release gate blocks critical findings
- Scenario replay compares versions correctly
- Simulation cost estimate is generated
- Webhooks are signed
- Audit logs are created
- Permission checks apply to simulations
- Sensitive data is redacted
- Production shadow mode cannot execute actions

---

## Forbidden Patterns

Do not implement these patterns:

```text
sandbox using production credentials
sandbox calling production integrations
simulation that sends real messages
simulation that modifies production records
simulation without audit logs
dry-run that hides intended tool calls
fake integration adapters returning unrealistic success only
scenario replay using customer data without privacy controls
production shadow mode that can execute actions
simulation results without release gate meaning
simulation score hiding critical failures
AI employee deployment without simulation evidence
marketplace listing without sandbox validation
sales demo using real customer data
cost simulation ignored during deployment
approval simulation skipped for high-risk actions
memory simulation skipped for personalized AI employees
prompt injection simulation treated as optional
simulation findings manually deleted without audit
```

---

## Golden Rule

Ariyo must make AI employees rehearse before they act.

The sandbox must expose risk before customers experience risk.

---

## Final Rule

If an AI employee cannot be safely simulated, explained, audited, and stopped, it is not ready to operate in Ariyo.
