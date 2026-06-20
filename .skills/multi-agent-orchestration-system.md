# Ariyo Multi-Agent Orchestration System Skill

## Purpose

This skill defines the official orchestration system for multiple Ariyo AI Employees and specialist agents.

It governs how agents are selected, routed, supervised, delegated, evaluated, traced, versioned, approved, and prevented from acting in conflict with each other.

This file must be used whenever Ariyo designs or implements:

- multi-agent workflows
- supervisor agents
- specialist AI employees
- agent handoffs
- parallel agent execution
- agent-as-tool execution
- debate or critic patterns
- task decomposition
- shared context
- conflict resolution
- AI employee collaboration
- model routing by specialty
- tool access by agent role
- customer-facing AI team behavior

## Core Contract

Ariyo multi-agent orchestration is not multiple chatbots talking to each other.

Ariyo multi-agent orchestration is the governed operating system that assigns the right specialist AI employee to the right task, with the right model profile, the right tools, the right context, the right permissions, the right cost budget, the right approval policy, and the right traceability.

Every agent must have a clear role, owner, scope, authority, model policy, tool policy, memory boundary, escalation rule, success metric, failure mode, and rollback path.

No Ariyo agent may act outside its delegated authority.

No Ariyo agent may silently override another agent's decision.

No Ariyo agent may use shared context without permission, purpose, and auditability.

---

## Dependencies

This skill depends on and must not contradict:

- `ai-employee-architecture.md`
- `prompt-tool-orchestration.md`
- `model-provider-strategy.md`
- `ai-agent-versioning-change-management.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-memory-context.md`
- `ai-agent-observability-tracing.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-simulation-sandbox.md`
- `ai-agent-incident-response.md`
- `workflow-automation.md`
- `human-review-governance.md`
- `integration-ecosystem.md`
- `security-threat-model.md`
- `data-governance-privacy.md`
- `ai-cost-control.md`
- `feature-flags-rollout-system.md`
- `operations-command-center.md`

---

## Strategic Principle

Ariyo should use multiple agents only when specialization creates measurable value.

Do not split work into multiple agents just because the architecture supports it.

Use multi-agent orchestration when at least one of these is true:

- the task requires distinct professional specialties
- the task has high risk and needs independent review
- the task benefits from parallel research or validation
- the task requires tool separation or permission isolation
- the task would overflow one agent's context window
- the task needs a supervisor/worker pattern
- the task needs a planner/executor/critic loop
- the task requires different model profiles for cost, quality, or latency
- the task must produce an auditable decision trail

Do not use multi-agent orchestration for simple single-turn answers, simple summaries, single-tool calls, or low-risk tasks that one well-configured agent can perform safely.

---

## Influential Agent Patterns Extracted Into Ariyo Policy

Ariyo does not copy external agent frameworks blindly.

Ariyo extracts the highest-value operating policies from influential agent systems and adapts them into a controlled business-grade orchestration model.

### OpenAI-Inspired Agent Policy

Use this policy when Ariyo needs server-owned orchestration with strong tool control, handoffs, guardrails, tracing, and sandbox execution.

Best suited for:

- high-control orchestrators
- tool-heavy workflows
- business process automation
- multi-agent handoffs
- human review gates
- structured traceability
- sandbox execution
- production AI employee workflows

Ariyo extraction:

- agents must be defined with explicit instructions
- tools must be typed and governed
- handoffs must identify ownership of the next action
- guardrails must block or pause risky work
- traces must record model calls, tool calls, handoffs, guardrails, and custom spans
- sandbox execution must be used for file, code, or package operations
- production orchestration must live on Ariyo servers, not inside uncontrolled client sessions

Ariyo rule:

OpenAI-style orchestration is the preferred pattern for Ariyo production AI employees that need tool execution, auditability, human review, and workflow control.

### Claude-Inspired Subagent Policy

Use this policy when Ariyo needs specialist agents with isolated context windows, specialized prompts, specific tool access, independent permissions, and controlled delegation.

Best suited for:

- code reviewer agents
- debugger agents
- data analyst agents
- research agents
- long-context review agents
- parallel investigation workers
- context-heavy side tasks
- expert critique loops

Ariyo extraction:

- each subagent must have a narrow specialty
- each subagent must run in an isolated context unless explicit shared context is granted
- each subagent must have specific tool access
- each subagent must return a structured summary, not dump raw context
- automatic delegation must be based on explicit agent descriptions
- nested subagents must be limited by depth and budget
- foreground/background execution must be observable
- hooks may be used to intercept behavior and enforce policy
- checkpointing is required for file-changing or irreversible tasks

Ariyo rule:

Claude-style subagents are the preferred pattern for expert workers that should not pollute the main customer conversation or supervisor context.

### Gemini-Inspired Managed Agent Policy

Use this policy when Ariyo needs sandboxed execution, web/file/code capabilities, research workflows, multimodal workflows, or controlled network access.

Best suited for:

- deep research agents
- GEO research agents
- market intelligence agents
- code execution agents
- file analysis agents
- multimodal analysis agents
- sandboxed exploratory agents
- agents that need managed tools

Ariyo extraction:

- managed agents must run in sandboxed environments
- outbound network access must be restricted with allowlists for sensitive workflows
- credentials must be scoped to the minimum required capability
- external tools must be trusted and permission-scoped
- preview or beta agent capabilities must require extra review before production dependency
- all sandbox outputs must be reviewed before sensitive use
- long-running tasks must be resumable, traceable, and cancellable

Ariyo rule:

Gemini-style managed agents are useful for research and sandbox workflows, but Ariyo must not allow unrestricted network or credential access in production customer workflows.

### DeepSeek-Inspired Reasoning/Cost Policy

Use this policy when Ariyo needs cost-aware reasoning, long context, structured output, tool calls, and optional thinking mode.

Best suited for:

- cost-efficient reasoning workers
- batch analysis agents
- internal classification agents
- structured extraction agents
- long-context document review
- code support tasks
- non-customer-facing reasoning tasks

Ariyo extraction:

- thinking mode must be enabled only when task complexity justifies cost and latency
- reasoning traces must be handled according to provider requirements and not exposed to customers
- tool-call state must be preserved correctly across turns
- context caching should be used when cost savings are material
- structured JSON output must be validated before use
- reasoning workers must be supervised when output drives business action

Ariyo rule:

DeepSeek-style reasoning agents may be used as cost-efficient specialists, but Ariyo must validate outputs, preserve tool-call state correctly, and avoid using unreviewed reasoning output for high-risk customer actions.

---

## Ariyo Agent Classes

Ariyo agents must be registered as one of the following classes.

### 1. Supervisor Agent

Purpose:

Owns task decomposition, routing, conflict resolution, progress control, and final response assembly.

Responsibilities:

- understand user/customer goal
- classify task type
- select specialists
- define task plan
- assign work packages
- enforce scope boundaries
- request approvals
- merge specialist outputs
- decide whether confidence is sufficient
- escalate to human when needed

Must not:

- execute high-risk tools directly unless explicitly allowed
- ignore specialist disagreement
- hide uncertainty
- bypass approval gates
- change business records without policy checks

Recommended model profile:

- high reasoning quality
- strong instruction following
- structured output reliability
- strong tool orchestration
- high safety behavior
- moderate-to-high cost allowed for Pro/Smart workflows

### 2. Planner Agent

Purpose:

Breaks ambiguous goals into executable plans.

Best for:

- implementation roadmaps
- workflow plans
- multi-step business actions
- complex onboarding
- customer success plans
- project execution planning

Required outputs:

- objective
- assumptions
- steps
- dependencies
- risk level
- required tools
- required approvals
- exit criteria

Must not execute tools unless explicitly delegated.

### 3. Specialist Worker Agent

Purpose:

Performs a narrow domain task.

Examples:

- Sales Specialist
- Support Specialist
- Finance Specialist
- Compliance Specialist
- Security Specialist
- GEO Specialist
- RAG Specialist
- Workflow Specialist
- Frontend Specialist
- Backend Specialist

Required contract:

- specialty
- allowed inputs
- allowed tools
- forbidden actions
- output schema
- confidence score
- evidence requirement
- escalation criteria

### 4. Critic / Reviewer Agent

Purpose:

Finds risks, errors, missing evidence, unsafe assumptions, policy violations, or weak reasoning.

Best for:

- high-risk AI outputs
- legal/privacy/security reviews
- pricing decisions
- customer-facing proposals
- marketplace listings
- workflow automations
- code review
- incident postmortems

Must not become the final authority unless assigned as decision owner.

### 5. Evaluator Agent

Purpose:

Scores outputs using rubric-based evaluation.

Required dimensions:

- correctness
- completeness
- groundedness
- safety
- permission compliance
- privacy compliance
- customer usefulness
- business value
- cost efficiency
- latency acceptability

### 6. Tool Executor Agent

Purpose:

Executes approved tool calls and records results.

Must be highly constrained.

Rules:

- must validate tool input schema
- must check runtime permission
- must check approval state
- must enforce idempotency
- must emit tool trace
- must never infer permission from user wording alone

### 7. Research Agent

Purpose:

Collects information from approved sources and produces evidence summaries.

Rules:

- must separate facts from assumptions
- must cite or reference source IDs where available
- must flag stale or uncertain sources
- must not use unapproved scraping
- must not expose hidden chain-of-thought

### 8. Customer-Facing Agent

Purpose:

Communicates with end users or customer customers.

Rules:

- must be concise and helpful
- must follow brand voice
- must not mention internal agents
- must not expose internal traces
- must not overpromise
- must escalate when confidence is low or policy requires human review

### 9. Background Operations Agent

Purpose:

Runs scheduled or event-triggered operational tasks.

Examples:

- lifecycle automation
- renewal checks
- health score updates
- anomaly detection
- integration sync monitoring
- marketplace quality checks

Rules:

- must be idempotent
- must be cancellable
- must be rate-limited
- must have run history
- must not send external communication without consent and policy checks

---

## Specialist Agent Registry

Every Ariyo agent must be registered in `AgentRegistry`.

```json
{
  "agent_id": "agt_support_resolution_specialist",
  "name": "Support Resolution Specialist",
  "class": "specialist_worker",
  "specialty": "customer_support",
  "description": "Resolves product support questions using grounded knowledge, account context, and support escalation policy.",
  "default_model_profile": "fast_grounded_customer_support",
  "fallback_model_profile": "high_reasoning_support_escalation",
  "allowed_tools": ["knowledge_search", "ticket_read", "ticket_update_draft"],
  "forbidden_tools": ["billing_refund_execute", "integration_disconnect", "user_impersonate"],
  "allowed_memory_scopes": ["organization_support_context", "product_public_knowledge"],
  "approval_policy": "required_for_customer_commitments",
  "risk_tolerance": "medium",
  "output_schema": "support_resolution_v1",
  "owner_team": "customer_success",
  "status": "active"
}
```

---

## Agent Specialty Matrix

### Product Strategy Agent

Use for:

- product direction
- MVP decisions
- prioritization
- feature scope
- market positioning

Preferred model traits:

- strong reasoning
- strategic synthesis
- long-context understanding
- structured output

Do not use for:

- legal decisions
- final financial forecasts
- unsupported market claims

### Sales Agent

Use for:

- discovery questions
- demo preparation
- objection handling
- plan recommendation
- follow-up drafts

Preferred model traits:

- persuasive but accurate communication
- customer context understanding
- CRM-safe structured output
- brand voice compliance

Required policy:

- may draft sales communication
- may not promise pricing exceptions unless approved
- may not invent customer proof
- must distinguish Basic/Pro/Smart clearly

### Customer Success Agent

Use for:

- health interpretation
- lifecycle recommendations
- activation recovery
- expansion readiness
- renewal preparation

Preferred model traits:

- customer state reasoning
- empathy
- operational planning
- evidence-based recommendations

Required policy:

- must use customer health evidence
- must not blame customer
- must flag churn risk and trust issues

### Support Agent

Use for:

- help center answers
- troubleshooting
- ticket classification
- escalation suggestions

Preferred model traits:

- fast grounded response
- citation discipline
- low hallucination
- escalation awareness

Required policy:

- must use current support knowledge
- must escalate security, billing, privacy, and legal issues
- must not guess account-specific facts without permission

### GEO / AI SEO Agent

Use for:

- AI visibility analysis
- content readiness scoring
- query monitoring
- competitor citation analysis
- content optimization

Preferred model traits:

- web-aware research
- structured scoring
- citation detection
- entity extraction
- content rewrite quality

Required policy:

- must not guarantee AI citations
- must use approved provider APIs or permitted connectors
- must track model/provider/date/query snapshot

### RAG / Knowledge Agent

Use for:

- source ingestion
- chunk quality
- retrieval evaluation
- freshness checks
- knowledge gap detection

Preferred model traits:

- document understanding
- entity clarity
- source-grounded reasoning
- retrieval diagnostics

Required policy:

- must enforce organization scope
- must not retrieve across tenants
- must flag stale or conflicting knowledge

### Workflow Automation Agent

Use for:

- workflow planning
- step mapping
- trigger/action design
- automation review

Preferred model traits:

- tool planning
- sequence reasoning
- failure mode awareness
- policy compliance

Required policy:

- must simulate before high-risk execution
- must enforce idempotency
- must route risky actions to human review

### Security Agent

Use for:

- threat modeling
- suspicious behavior review
- incident triage
- access control review
- prompt injection risk

Preferred model traits:

- adversarial reasoning
- security policy awareness
- conservative escalation
- evidence preservation

Required policy:

- may recommend containment
- may not delete evidence
- must escalate potential breach

### Compliance / Legal Risk Agent

Use for:

- policy mapping
- legal page consistency checks
- privacy risk review
- AI disclosure checks

Preferred model traits:

- careful reasoning
- policy consistency
- uncertainty handling
- citation discipline

Required policy:

- must state not legal counsel
- must route final legal text to qualified counsel
- must not invent compliance status

### Finance / Billing Agent

Use for:

- invoice support
- reconciliation suggestions
- refund review
- payout review
- cost-to-revenue analysis

Preferred model traits:

- numerical accuracy
- audit trail awareness
- structured financial reasoning
- low-risk action discipline

Required policy:

- may draft recommendations
- may not issue refunds without approval
- may not alter revenue records without authorized workflow

### Engineering Agent

Use for:

- code architecture
- implementation planning
- bug investigation
- refactoring plans
- test generation

Preferred model traits:

- code understanding
- tool execution discipline
- repository context handling
- diff reasoning

Required policy:

- must run in sandbox for code execution
- must request review for destructive commands
- must produce patches with tests

### UX / Conversion Agent

Use for:

- landing page structure
- pricing page clarity
- CTA optimization
- conversion experiment ideas
- accessibility review

Preferred model traits:

- conversion psychology
- design system awareness
- clarity-first copy
- accessibility discipline

Required policy:

- must not sacrifice trust for short-term conversion
- must preserve Ariyo brand messaging
- must respect performance and accessibility budgets

---

## Model Profile Routing Policy

Ariyo must route agents to model profiles, not hardcoded models.

Model profiles define desired behavior and operational limits.

```json
{
  "model_profile_id": "high_reasoning_supervisor_v1",
  "purpose": "Complex orchestration, risky decisions, multi-agent synthesis",
  "required_traits": ["strong_reasoning", "tool_orchestration", "structured_output", "safety"],
  "preferred_providers": ["openai", "anthropic"],
  "fallback_providers": ["google", "deepseek"],
  "max_latency_ms": 30000,
  "max_cost_tier": "high",
  "requires_evaluation_gate": true,
  "allowed_plans": ["pro", "smart"],
  "human_review_required_for": ["external_action", "billing_change", "security_decision"]
}
```

### Routing Dimensions

Every routing decision must consider:

- task specialty
- risk level
- customer plan
- latency budget
- cost budget
- tool complexity
- required context length
- need for browsing/research
- need for structured output
- need for code execution
- need for multimodal analysis
- need for citations
- provider availability
- customer data policy
- evaluation history
- current incident state

### Model Profile Types

#### `fast_customer_response`

Use for:

- low-risk support responses
- simple product questions
- short customer replies

Required:

- low latency
- low cost
- grounded knowledge
- safe fallback

#### `high_reasoning_supervisor`

Use for:

- multi-agent planning
- conflict resolution
- high-risk synthesis
- policy-sensitive decisions

Required:

- strong reasoning
- structured output
- high instruction fidelity
- deep traceability

#### `coding_specialist`

Use for:

- code review
- debugging
- refactoring
- test generation

Required:

- repository awareness
- tool execution control
- sandbox compatibility
- patch discipline

#### `deep_research_specialist`

Use for:

- market analysis
- GEO monitoring
- competitor discovery
- technical research

Required:

- web/source grounding
- citation handling
- long task support
- source freshness checks

#### `cost_efficient_batch_reasoner`

Use for:

- background classification
- batch enrichment
- internal scoring
- long document triage

Required:

- low cost
- structured output
- high throughput
- fallback supervision

#### `safety_critic`

Use for:

- risky outputs
- prompt injection review
- policy checks
- customer-facing confidence review

Required:

- conservative judgment
- risk detection
- refusal/escalation discipline
- evidence summary

---

## Orchestration Patterns

### 1. Supervisor → Specialist → Reviewer

Use when output matters and risk is moderate/high.

Flow:

1. Supervisor receives task
2. Supervisor classifies specialty and risk
3. Specialist performs task
4. Reviewer checks output
5. Supervisor merges result
6. Approval gate triggers if needed
7. Final output/action is produced

Best for:

- customer-facing proposals
- security recommendations
- workflow creation
- pricing recommendations
- AI employee deployment

### 2. Planner → Parallel Specialists → Synthesizer

Use when task benefits from multiple perspectives.

Flow:

1. Planner decomposes work
2. Specialists work in parallel
3. Each returns structured result
4. Synthesizer merges outputs
5. Critic checks contradictions
6. Supervisor approves final response

Best for:

- GTM strategy
- customer health diagnosis
- enterprise readiness review
- product roadmap planning
- investor narrative

### 3. Research → Critic → Writer

Use when content quality and evidence matter.

Best for:

- GEO content
- landing pages
- investor material
- legal/compliance drafts
- academy content

Rules:

- Research Agent gathers evidence
- Critic Agent checks accuracy and positioning
- Writer Agent produces final customer-facing copy
- No copy may include unsupported trust claims

### 4. Tool Agent as Controlled Executor

Use when a tool/action must be separated from reasoning.

Flow:

1. Reasoning agent proposes action
2. Policy engine validates authority
3. Approval gate validates human or automated permission
4. Tool Executor performs action
5. Trace captures result
6. Supervisor evaluates outcome

Best for:

- CRM updates
- billing adjustments
- integration changes
- workflow execution
- marketplace publishing

### 5. Debate / Consensus Pattern

Use only for high-value decisions.

Best for:

- strategic positioning
- high-risk security decision
- enterprise contract interpretation
- product architecture tradeoff

Rules:

- agents must have distinct viewpoints
- arguments must be evidence-based
- final decision owner must be explicit
- disagreement must be preserved in trace

### 6. Shadow Agent Pattern

Use for safe evaluation.

Flow:

- production agent handles real workflow
- shadow agent evaluates or proposes alternative
- shadow output never reaches customer automatically
- evaluator compares quality, cost, latency, risk

Best for:

- model upgrades
- prompt revisions
- new specialist rollout
- evaluation benchmarking

### 7. Fallback Agent Pattern

Use when provider or specialist fails.

Rules:

- fallback must be pre-approved
- fallback must preserve safety constraints
- fallback must not broaden tool access
- fallback must emit degradation event
- customer-facing response must avoid overclaiming

---

## Agent Handoff Rules

A handoff is allowed only when:

- the next agent's specialty matches the task
- the next agent has required permissions
- the handoff includes a structured brief
- the handoff includes constraints and success criteria
- the handoff includes allowed context only
- the handoff is logged

Handoff payload:

```json
{
  "handoff_id": "hnd_01J...",
  "from_agent_id": "agt_supervisor",
  "to_agent_id": "agt_security_reviewer",
  "reason": "Potential prompt injection risk detected in customer-provided workflow instructions.",
  "task": "Assess whether the workflow instructions contain prompt injection or unsafe tool escalation.",
  "allowed_context_refs": ["ctx_workflow_draft_123", "ctx_policy_security_v4"],
  "forbidden_context_refs": ["ctx_customer_billing_records"],
  "allowed_tools": ["policy_check", "prompt_injection_classifier"],
  "deadline_ms": 20000,
  "output_schema": "security_review_v1",
  "risk_level": "high"
}
```

---

## Shared Context Policy

Shared context is dangerous by default.

Agents may receive only the minimum context required.

Context types:

- public product context
- organization context
- workspace context
- user context
- AI employee context
- task context
- workflow context
- integration context
- customer support context
- billing context
- security incident context
- legal/compliance context

Rules:

- billing context requires finance or admin permission
- security incident context requires security role
- legal/compliance context must be restricted and audited
- customer PII must be redacted unless needed
- tenant context must never cross organization boundaries
- retrieved knowledge must include source, freshness, and permission metadata

---

## Conflict Resolution

Agents may disagree.

Ariyo must treat disagreement as signal, not failure.

Conflict types:

- factual conflict
- policy conflict
- tool authority conflict
- cost/risk tradeoff conflict
- customer value conflict
- safety conflict
- legal/compliance conflict

Resolution order:

1. Security policy
2. Privacy policy
3. Legal/compliance policy
4. Customer permission and consent
5. Human review policy
6. Reliability and cost policy
7. Product strategy
8. Conversion or growth goal

If unresolved, escalate to human owner.

---

## Runtime Permission Rules

Multi-agent orchestration must never expand permissions by combining agents.

Forbidden:

- Agent A has customer data access and Agent B has write tool access, so together they perform a write neither should perform alone.
- Supervisor passes sensitive context to a worker that lacks access.
- Reviewer sees private content only because it is useful.
- A delegated agent executes a tool using supervisor authority without explicit runtime grant.

Required:

- per-agent permission checks
- per-tool permission checks
- per-action risk scoring
- approval state validation
- traceable delegated authority
- expiration of temporary grants

---

## Multi-Agent State Machine

```text
created
planned
delegating
running_parallel
running_sequential
awaiting_specialist
awaiting_review
awaiting_approval
synthesizing
blocked
failed
completed
cancelled
rolled_back
```

A run may not move to `completed` if:

- required specialist output is missing
- required review failed
- required approval is missing
- high-risk disagreement is unresolved
- output schema is invalid
- tool execution failed without recovery
- cost exceeded budget
- security incident is attached

---

## API Contract

### Create Multi-Agent Run

`POST /api/v1/agent-orchestration/runs`

```json
{
  "organization_id": "org_123",
  "workspace_id": "ws_456",
  "ai_employee_id": "emp_sales_001",
  "goal": "Prepare a Pro plan demo for a logistics customer and identify objections.",
  "mode": "supervised",
  "risk_level": "medium",
  "allowed_agent_classes": ["supervisor", "specialist_worker", "critic"],
  "required_specialties": ["sales", "product", "security"],
  "max_cost_units": 120,
  "max_duration_ms": 90000,
  "require_human_review": false,
  "output_schema": "sales_demo_plan_v1"
}
```

Response:

```json
{
  "run_id": "mor_01J...",
  "status": "planned",
  "selected_agents": [
    {
      "agent_id": "agt_supervisor_gtm",
      "role": "supervisor",
      "model_profile_id": "high_reasoning_supervisor_v1"
    },
    {
      "agent_id": "agt_sales_specialist",
      "role": "specialist_worker",
      "model_profile_id": "customer_revenue_specialist_v1"
    },
    {
      "agent_id": "agt_security_reviewer",
      "role": "critic",
      "model_profile_id": "safety_critic_v1"
    }
  ],
  "trace_id": "trc_01J...",
  "estimated_cost_units": 78,
  "requires_approval": false
}
```

### Read Run Trace

`GET /api/v1/agent-orchestration/runs/{run_id}/trace`

Response:

```json
{
  "run_id": "mor_01J...",
  "trace_id": "trc_01J...",
  "steps": [
    {
      "step_id": "stp_001",
      "agent_id": "agt_supervisor_gtm",
      "type": "planning",
      "status": "completed",
      "duration_ms": 3920,
      "cost_units": 12
    },
    {
      "step_id": "stp_002",
      "agent_id": "agt_sales_specialist",
      "type": "specialist_work",
      "status": "completed",
      "duration_ms": 8400,
      "cost_units": 31
    }
  ],
  "redactions_applied": true,
  "privacy_level": "internal_restricted"
}
```

### Cancel Run

`POST /api/v1/agent-orchestration/runs/{run_id}/cancel`

```json
{
  "reason": "Customer requested cancellation before final output.",
  "cancel_pending_tools": true,
  "preserve_trace": true
}
```

### Simulate Orchestration

`POST /api/v1/agent-orchestration/simulations`

```json
{
  "scenario_id": "scn_enterprise_support_escalation",
  "agents": ["agt_support", "agt_security_reviewer", "agt_supervisor"],
  "use_fake_integrations": true,
  "inject_failures": ["tool_timeout", "conflicting_specialist_outputs"],
  "evaluate_against": "enterprise_support_rubric_v2"
}
```

---

## Frontend Requirements

Ariyo UI must not expose multi-agent complexity unnecessarily.

Customer-facing UI should show:

- current AI employee status
- whether another specialist is assisting
- whether human review is needed
- whether action is simulated or real
- confidence and limitations when appropriate
- next step

Internal UI should show:

- supervisor plan
- selected specialists
- handoff chain
- permission checks
- approval gates
- cost per agent
- latency per agent
- model profile used
- tool calls
- memory/retrieval sources
- conflicts
- final decision owner

---

## Advanced KPI System

### Orchestration Quality KPIs

- specialist selection accuracy
- handoff success rate
- conflict resolution success rate
- output schema validity rate
- reviewer catch rate
- escalation appropriateness
- human override rate

### Business Impact KPIs

- customer task success rate
- AI employee outcome completion rate
- first-response improvement
- time saved per multi-agent workflow
- Pro/Smart feature adoption influenced by multi-agent workflows
- revenue influenced by sales/customer success agents

### Safety KPIs

- unauthorized tool attempt blocked rate
- high-risk action approval compliance
- prompt injection caught rate
- memory leakage blocked rate
- cross-tenant context prevention rate
- unsafe specialist output blocked rate

### Cost KPIs

- average cost per orchestration run
- cost by specialist
- cost by plan tier
- cost saved by routing to cheaper specialist
- runaway run prevention count
- Smart premium usage margin

### Reliability KPIs

- orchestration completion rate
- specialist timeout rate
- fallback activation rate
- provider failure impact rate
- queue delay per agent class

### Evaluation KPIs

- regression pass rate
- benchmark delta by agent version
- shadow-agent win rate
- critic precision and recall
- customer-facing quality score

---

## Basic / Pro / Smart Orchestration Policy

### Basic

Basic should use simple orchestration.

Allowed:

- one primary AI employee
- limited specialist assistance
- support and onboarding specialists
- low-cost model profiles
- low-risk tool access
- simple approval flows

Not allowed by default:

- complex parallel multi-agent workflows
- high-cost reasoning supervisors
- autonomous multi-step execution
- advanced debate/critic loops
- broad integration actions

### Pro

Pro should support operational multi-agent workflows.

Allowed:

- supervisor + specialist + reviewer patterns
- workflow automation specialists
- support/sales/ops specialists
- moderate-cost reasoning
- plan-aware tool access
- human review for risky actions
- run history and trace summary

### Smart

Smart should unlock advanced orchestration.

Allowed:

- multi-specialist parallel workflows
- deep research agents
- GEO/AI SEO agents
- critic/evaluator loops
- advanced simulation
- agent teams
- cost-aware smart routing
- higher reasoning budgets
- richer trace visibility
- predictive escalation

Smart is more powerful, not uncontrolled.

Smart still requires:

- budget enforcement
- approval gates
- security controls
- memory isolation
- action authority checks
- audit logs
- kill switches

---

## Security & Privacy Requirements

- Agent context must be scoped by organization and workspace.
- Agents must not share raw sensitive context unless required.
- Tool credentials must never be visible to agents unless explicitly designed and sandboxed.
- Network access must be restricted for research/sandbox agents in sensitive workflows.
- Agent traces must be redacted before customer-facing display.
- Multi-agent runs must support incident attachment.
- All handoffs must be auditable.
- Agent-generated recommendations must be labeled as recommendations until approved.

---

## Testing Requirements

Every multi-agent workflow must be tested for:

- correct specialist selection
- incorrect specialist rejection
- handoff payload correctness
- context boundary enforcement
- permission inheritance prevention
- tool access restriction
- disagreement handling
- reviewer escalation
- cost budget enforcement
- timeout recovery
- fallback behavior
- trace completeness
- customer-facing clarity
- incident containment

---

## Forbidden Patterns

Do not:

- create agent swarms without business need
- allow agents to communicate without trace
- allow agents to inherit supervisor permissions automatically
- allow shared context by default
- let multiple agents execute the same irreversible action
- use debate loops for low-value tasks
- expose internal agent disagreement to customers in raw form
- allow one specialist to silently override another
- skip human review because multiple agents agreed
- route high-risk tasks to cheap models only to save cost
- use provider agent previews for sensitive production workflows without review
- hide fallback model changes from trace
- let Smart plan mean unlimited execution
- allow external web research without source and policy controls
- run background agents without cancellation and audit

---

## Golden Rule

Ariyo multi-agent orchestration must make AI employees more capable without making them less governable.

Specialization is valuable only when ownership, authority, context, cost, safety, and accountability remain clear.

