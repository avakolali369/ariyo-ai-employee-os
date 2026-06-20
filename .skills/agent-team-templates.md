# Ariyo Agent Team Templates Skill

## 1. Purpose

This skill defines the official team-template system for Ariyo AI Employees.

Ariyo should not force customers to design multi-agent systems from scratch. Customers should be able to install, configure, test, govern, and deploy proven AI Employee teams that map to real business functions.

This file converts the multi-agent orchestration system into reusable team templates such as Sales Team, Support Team, Customer Success Team, GEO Growth Team, Operations Team, Security Review Team, Finance Team, and Marketplace Team.

These templates must be safe enough for real customers, simple enough for onboarding, and powerful enough for Pro and Smart customers.

---

## 2. Dependencies

This skill depends on:

- `product-strategy.md`
- `ai-employee-architecture.md`
- `multi-agent-orchestration-system.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-memory-context.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-simulation-sandbox.md`
- `ai-agent-incident-response.md`
- `ai-agent-observability-tracing.md`
- `ai-agent-versioning-change-management.md`
- `workflow-automation.md`
- `human-review-governance.md`
- `knowledge-rag.md`
- `integration-ecosystem.md`
- `model-provider-strategy.md`
- `ai-cost-control.md`
- `pricing-packaging-strategy.md`
- `customer-success-playbooks.md`
- `sales-crm-pipeline-system.md`
- `content-marketing-engine.md`
- `security-threat-model.md`
- `operations-command-center.md`
- `internal-admin-backoffice.md`

---

## 3. Core Contract

Ariyo Agent Team Templates are not bundles of random prompts.

Ariyo Agent Team Templates are governed, versioned, measurable, installable operating units that combine specialist AI employees, model profiles, tools, memory boundaries, permissions, workflows, approvals, integrations, evaluation suites, cost controls, and business KPIs for a specific business function.

Every Agent Team Template must answer:

- What business outcome does this team produce?
- Which AI employees are inside the team?
- Which agent is the supervisor?
- Which agents are specialists?
- Which model profile does each agent use?
- Which tools can each agent access?
- Which actions require human approval?
- Which data can each agent read or write?
- Which integrations are required?
- Which plan can use the team?
- Which KPI proves value?
- Which failure modes must be prevented?
- How is the team simulated, evaluated, deployed, monitored, upgraded, and rolled back?

---

## 4. Non-Negotiable Rules

Agent teams must never be treated as simple prompt packs.

Agent teams must be:

- organization-scoped
- workspace-aware
- plan-aware
- permission-aware
- integration-aware
- memory-scoped
- model-profile-aware
- cost-controlled
- human-review-aware
- traceable
- evaluable
- versioned
- rollback-safe
- marketplace-ready
- customer-understandable

If an agent team cannot be audited, it cannot be deployed.

If an agent team cannot be simulated, it cannot be recommended.

If an agent team cannot explain its actions, it cannot be trusted.

---

## 5. Team Template Object Model

Every team template must be represented as a structured object.

```ts
type AgentTeamTemplate = {
  id: string;
  slug: string;
  name: string;
  category: AgentTeamCategory;
  description: string;
  target_customer: TargetCustomerSegment[];
  plan_availability: PlanAvailability;
  business_outcomes: BusinessOutcome[];
  required_integrations: IntegrationRequirement[];
  optional_integrations: IntegrationRequirement[];
  required_knowledge_sources: KnowledgeRequirement[];
  agents: AgentTemplateMember[];
  orchestration_policy: TeamOrchestrationPolicy;
  permission_policy: TeamPermissionPolicy;
  memory_policy: TeamMemoryPolicy;
  cost_policy: TeamCostPolicy;
  review_policy: TeamReviewPolicy;
  evaluation_policy: TeamEvaluationPolicy;
  simulation_policy: TeamSimulationPolicy;
  observability_policy: TeamObservabilityPolicy;
  rollout_policy: TeamRolloutPolicy;
  kpis: TeamKPI[];
  risks: TeamRisk[];
  setup_steps: SetupStep[];
  demo_scenarios: DemoScenario[];
  marketplace_policy?: MarketplaceTemplatePolicy;
  version: string;
  status: 'draft' | 'internal_review' | 'sandbox_ready' | 'beta' | 'published' | 'deprecated' | 'retired';
};
```

---

## 6. Agent Team Categories

Ariyo must support the following team categories:

```ts
type AgentTeamCategory =
  | 'sales'
  | 'support'
  | 'customer_success'
  | 'geo_growth'
  | 'marketing'
  | 'operations'
  | 'security'
  | 'finance'
  | 'compliance'
  | 'product'
  | 'engineering'
  | 'marketplace'
  | 'executive_ops'
  | 'custom';
```

Each category must have standard agents, default model profiles, default tools, default approvals, and default KPIs.

---

## 7. Standard Agent Roles Inside Teams

### 7.1 Supervisor Agent

The Supervisor Agent coordinates the team.

Responsibilities:

- receive the business goal
- decompose work
- choose specialist agents
- enforce scope
- route approvals
- monitor progress
- prevent duplicate work
- resolve conflicts or escalate
- summarize team output
- hand off final decisions to humans when required

The Supervisor Agent should usually use the strongest reasoning-safe model available to the customer plan.

### 7.2 Planner Agent

The Planner Agent converts goals into an execution plan.

Responsibilities:

- define steps
- detect missing context
- identify required tools
- estimate cost and time
- identify risk level
- recommend whether execution should be automatic, reviewed, or blocked

### 7.3 Specialist Agent

Specialist Agents perform domain-specific work.

Examples:

- Sales Research Agent
- Support Triage Agent
- GEO Analyst Agent
- Security Review Agent
- Finance Reconciliation Agent
- Customer Success Health Agent

### 7.4 Tool Executor Agent

The Tool Executor Agent is allowed to perform approved actions.

Responsibilities:

- call tools
- execute integration actions
- write updates
- trigger workflow steps
- verify tool outputs
- report success/failure

Tool Executor Agents must have the strictest permission policies.

### 7.5 Reviewer / Critic Agent

The Reviewer Agent checks outputs before escalation or execution.

Responsibilities:

- detect hallucination
- verify source grounding
- review policy compliance
- check tone and brand alignment
- flag missing context
- check cost/risk
- recommend human review where needed

### 7.6 Evaluator Agent

The Evaluator Agent scores results against expected outcomes.

Responsibilities:

- quality scoring
- task completion scoring
- risk scoring
- retrieval quality scoring
- customer value scoring
- regression comparison

### 7.7 Memory Steward Agent

The Memory Steward Agent manages what may be remembered.

Responsibilities:

- decide if information is memory-worthy
- apply retention policy
- classify sensitivity
- prevent memory leakage
- support deletion/export

This agent must never operate without strict policy enforcement.

---

## 8. Model Policy by Agent Role

Ariyo must select model profiles by role, risk, cost, latency, and plan.

### 8.1 Supervisor Agent Model Policy

Use for:

- planning
- delegation
- conflict resolution
- complex decisions
- cross-functional reasoning

Recommended provider profile:

```ts
model_profile: {
  preferred: ['openai_reasoning_high', 'claude_reasoning_high'];
  fallback: ['gemini_reasoning_long_context', 'deepseek_reasoning_cost_optimized'];
  requires_structured_output: true;
  requires_tool_planning: true;
  max_temperature: 0.4;
}
```

### 8.2 Customer-Facing Agent Model Policy

Use for:

- support replies
- sales replies
- customer education
- onboarding guidance

Recommended provider profile:

```ts
model_profile: {
  preferred: ['claude_customer_facing', 'openai_structured_assistant'];
  fallback: ['gemini_grounded_response'];
  requires_tone_control: true;
  requires_brand_policy: true;
  max_temperature: 0.5;
}
```

### 8.3 Research Agent Model Policy

Use for:

- GEO research
- competitor analysis
- market research
- documentation synthesis

Recommended provider profile:

```ts
model_profile: {
  preferred: ['gemini_grounded_search', 'openai_web_research'];
  fallback: ['claude_long_context_analysis'];
  requires_citations: true;
  requires_source_tracking: true;
  max_temperature: 0.3;
}
```

### 8.4 Coding / Technical Agent Model Policy

Use for:

- frontend implementation guidance
- API contract review
- debugging
- test generation
- schema design

Recommended provider profile:

```ts
model_profile: {
  preferred: ['openai_coding_high', 'claude_code_agent'];
  fallback: ['deepseek_coding_cost_optimized'];
  requires_diff_awareness: true;
  requires_test_generation: true;
  max_temperature: 0.2;
}
```

### 8.5 Finance Agent Model Policy

Use for:

- reconciliation support
- revenue reporting explanation
- invoice anomaly triage
- payout review

Recommended provider profile:

```ts
model_profile: {
  preferred: ['openai_structured_reasoning', 'claude_policy_safe_analysis'];
  fallback: ['deepseek_reasoning_cost_optimized'];
  requires_calculation_verification: true;
  requires_audit_log: true;
  max_temperature: 0.1;
}
```

Finance agents must never finalize accounting entries without human or system approval.

### 8.6 Security Agent Model Policy

Use for:

- incident triage
- threat review
- permission anomaly detection
- prompt injection analysis
- unsafe tool-call detection

Recommended provider profile:

```ts
model_profile: {
  preferred: ['openai_reasoning_high', 'claude_security_review'];
  fallback: ['gemini_long_context_security_analysis'];
  requires_evidence_preservation: true;
  requires_policy_strictness: true;
  max_temperature: 0.1;
}
```

Security agents must prefer false-positive escalation over silent false negatives.

### 8.7 GEO / AI SEO Agent Model Policy

Use for:

- content scoring
- AI visibility monitoring
- query monitoring
- competitor citation analysis
- AI answer simulation

Recommended provider profile:

```ts
model_profile: {
  preferred: ['gemini_grounded_search', 'openai_web_research', 'claude_longform_analysis'];
  fallback: ['deepseek_cost_optimized_analysis'];
  requires_query_matrix: true;
  requires_provider_comparison: true;
  requires_evidence_links: true;
  max_temperature: 0.3;
}
```

GEO agents must not promise guaranteed citations.

---

## 9. Plan-Based Team Availability

### 9.1 Basic

Basic should provide simple, safe, low-cost teams.

Allowed:

- single-supervisor lightweight teams
- limited specialist agents
- basic support and sales assistant templates
- limited workflows
- limited memory
- limited integrations
- manual review by default
- low-cost model profiles
- basic KPI dashboard

Not allowed:

- autonomous multi-step execution
- advanced multi-agent coordination
- high-cost deep research
- background autonomous teams
- security-sensitive automation
- finance automation beyond summaries

### 9.2 Pro

Pro should provide operational teams for real business use.

Allowed:

- supervisor + specialist + reviewer teams
- workflow automation
- CRM/helpdesk integrations
- human review queues
- operational dashboards
- plan-aware cost budgets
- scenario simulation
- advanced support/sales/CS teams
- moderate RAG and memory

Requires:

- clear setup checklist
- permission configuration
- approval routing
- cost alerts
- team evaluation score

### 9.3 Smart

Smart should provide full-option, intelligent, advanced multi-agent teams.

Allowed:

- multi-specialist agent teams
- background operations
- advanced reasoning
- GEO visibility teams
- security review teams
- finance insight teams
- predictive customer success teams
- cross-team orchestration
- advanced memory and context
- model routing optimization
- simulation and replay
- custom team builder
- advanced KPI command center

Requires:

- stricter observability
- stricter cost governance
- stricter approval policies
- advanced auditability
- rollback-ready versioning
- anomaly detection
- customer-visible team health

Smart is more powerful, not uncontrolled.

---

## 10. Team Template: Sales Team

### 10.1 Purpose

The Sales Team helps businesses turn leads into qualified opportunities, demos, pilots, and paid customers.

### 10.2 Default Agents

```ts
agents: [
  'Sales Supervisor Agent',
  'Lead Research Agent',
  'Discovery Agent',
  'Demo Preparation Agent',
  'Proposal Drafting Agent',
  'Objection Handling Agent',
  'CRM Tool Executor Agent',
  'Sales Reviewer Agent'
]
```

### 10.3 Business Outcomes

- increase qualified demos
- reduce lead response time
- improve demo preparation
- improve follow-up quality
- improve plan recommendation accuracy
- increase conversion from demo to pilot
- increase pilot to paid conversion

### 10.4 Required Integrations

- CRM
- email
- calendar

Optional:

- website forms
- LinkedIn/manual lead import
- call notes
- billing system

### 10.5 Tools

Allowed:

- read lead
- score lead
- draft email
- create CRM note
- schedule follow-up draft
- recommend plan
- generate proposal draft

Requires approval:

- send external email
- change deal stage
- create discount
- submit proposal
- mark deal lost

Forbidden:

- promise pricing not configured
- promise security/compliance without evidence
- send legal terms without approval
- manipulate CRM forecast without trace

### 10.6 Model Policy

- Supervisor: reasoning model
- Lead research: grounded research model
- Follow-up writing: customer-facing model
- CRM execution: structured low-temperature model

### 10.7 KPIs

- speed to lead
- lead qualification accuracy
- demo booking rate
- demo no-show rate
- follow-up completion rate
- proposal acceptance rate
- plan recommendation accuracy
- pilot conversion rate
- sales cycle length
- revenue influenced

---

## 11. Team Template: Support Team

### 11.1 Purpose

The Support Team helps customers resolve issues quickly, safely, and accurately.

### 11.2 Default Agents

```ts
agents: [
  'Support Supervisor Agent',
  'Ticket Triage Agent',
  'Knowledge Retrieval Agent',
  'Troubleshooting Agent',
  'Customer Reply Agent',
  'Escalation Agent',
  'Support Reviewer Agent'
]
```

### 11.3 Business Outcomes

- reduce first response time
- increase self-serve resolution
- reduce support load
- improve answer consistency
- detect product issues faster
- improve customer trust

### 11.4 Required Integrations

- helpdesk
- knowledge base
- product event stream

Optional:

- status page
- internal admin
- customer success platform

### 11.5 Tools

Allowed:

- read ticket
- search knowledge base
- classify issue
- draft reply
- recommend escalation
- link relevant article

Requires approval:

- send customer reply for high-risk issue
- access customer-sensitive logs
- apply account-level changes
- issue credit/refund
- disclose incident status

Forbidden:

- invent troubleshooting steps
- claim outage resolution without status source
- expose internal logs
- access another organization’s data

### 11.6 Model Policy

- Triage: fast structured model
- Retrieval: RAG-focused model
- Reply: customer-facing model
- Escalation: reasoning model

### 11.7 KPIs

- first response time
- time to resolution
- deflection rate
- escalation accuracy
- hallucination rate
- customer satisfaction
- article usefulness
- repeat contact rate
- support cost per account

---

## 12. Team Template: Customer Success Team

### 12.1 Purpose

The Customer Success Team helps customers activate, adopt, expand, renew, and avoid churn.

### 12.2 Default Agents

```ts
agents: [
  'CS Supervisor Agent',
  'Customer Health Agent',
  'Activation Recovery Agent',
  'Adoption Recommendation Agent',
  'Expansion Opportunity Agent',
  'Renewal Risk Agent',
  'CS Playbook Agent'
]
```

### 12.3 Business Outcomes

- increase activation
- increase usage quality
- reduce churn
- improve renewal readiness
- detect expansion opportunities
- increase AI employee adoption

### 12.4 Required Integrations

- product analytics
- billing
- CRM
- customer lifecycle automation

Optional:

- helpdesk
- academy
- marketplace

### 12.5 Tools

Allowed:

- calculate health score
- recommend playbook
- draft customer success email
- summarize account risk
- recommend expansion path

Requires approval:

- send executive outreach
- change customer success stage
- trigger discount/retention offer
- escalate to leadership

Forbidden:

- pressure customers with misleading ROI
- hide churn risk
- recommend expansion without value proof

### 12.6 KPIs

- activation rate
- time to first value
- feature adoption
- health score movement
- churn risk reduction
- expansion readiness
- renewal forecast accuracy
- customer outcome proof count

---

## 13. Team Template: GEO Growth Team

### 13.1 Purpose

The GEO Growth Team helps customers optimize content for AI-generated answers and track visibility across AI models.

### 13.2 Default Agents

```ts
agents: [
  'GEO Supervisor Agent',
  'Content Optimization Agent',
  'AI Visibility Tracking Agent',
  'Query Monitoring Agent',
  'Competitor Citation Agent',
  'Rewrite Recommendation Agent',
  'GEO Reviewer Agent'
]
```

### 13.3 Business Outcomes

- improve GEO readiness
- increase AI visibility
- identify competitor citations
- improve content structure
- produce better answer-ready pages
- track model-specific visibility

### 13.4 Required Integrations

- website URL ingestion
- content CMS
- analytics

Optional:

- Search Console
- Ahrefs/Semrush-style SEO data
- custom GEO API

### 13.5 Tools

Allowed:

- analyze content
- score GEO readiness
- monitor target queries
- compare model responses
- detect citations/paraphrases
- draft content recommendations

Requires approval:

- publish CMS changes
- rewrite high-traffic page
- modify legal/trust claims
- submit content for public release

Forbidden:

- promise guaranteed AI citation
- fabricate visibility data
- scrape AI platforms without permission
- produce misleading competitor comparisons

### 13.6 Model Policy

- Research: grounded search-capable model
- Analysis: long-context reasoning model
- Rewrite: brand-aware writing model
- Detection: structured evaluator model

### 13.7 KPIs

- GEO readiness score
- AI visibility score
- citation frequency
- paraphrase appearance rate
- competitor displacement rate
- query coverage
- content recommendation implementation rate
- traffic/conversion lift from optimized pages

---

## 14. Team Template: Operations Team

### 14.1 Purpose

The Operations Team monitors daily system health, workflows, integrations, customer health, and operational risk.

### 14.2 Default Agents

```ts
agents: [
  'Operations Supervisor Agent',
  'Workflow Health Agent',
  'Integration Health Agent',
  'Cost Anomaly Agent',
  'Incident Triage Agent',
  'Command Center Summary Agent'
]
```

### 14.3 Business Outcomes

- detect issues early
- reduce operational downtime
- reduce cost spikes
- improve response time
- coordinate internal action

### 14.4 Required Integrations

- observability system
- workflow system
- integration health system
- command center

### 14.5 Tools

Allowed:

- read system health
- summarize incidents
- detect anomalies
- recommend runbook
- create internal alert draft

Requires approval:

- disable integration
- trigger kill switch
- rollback feature
- notify customers
- pause AI employee team

Forbidden:

- auto-disable production capability without policy
- hide incident impact
- clear alerts without resolution evidence

### 14.6 KPIs

- mean time to detect
- mean time to acknowledge
- mean time to resolve
- incident recurrence rate
- integration degradation time
- workflow failure rate
- cost anomaly time to containment

---

## 15. Team Template: Security Review Team

### 15.1 Purpose

The Security Review Team detects, investigates, and escalates security-sensitive AI and product risks.

### 15.2 Default Agents

```ts
agents: [
  'Security Supervisor Agent',
  'Threat Triage Agent',
  'Prompt Injection Review Agent',
  'Permission Anomaly Agent',
  'Data Exposure Review Agent',
  'Incident Evidence Agent',
  'Security Reviewer Agent'
]
```

### 15.3 Business Outcomes

- detect security risks earlier
- reduce unsafe AI actions
- preserve evidence
- support incident response
- protect tenant isolation
- improve security release readiness

### 15.4 Required Integrations

- security event stream
- audit logs
- AI traces
- permission system
- incident response system

### 15.5 Tools

Allowed:

- read security alerts
- classify risk
- inspect redacted traces
- recommend containment
- create incident summary

Requires approval:

- access sensitive logs
- quarantine customer data
- disable AI employee
- revoke integration
- notify customer

Forbidden:

- expose secrets
- share raw sensitive traces broadly
- suppress high-risk alert
- act across tenant boundary

### 15.6 KPIs

- high-risk detection rate
- false negative rate
- prompt injection detection rate
- permission violation prevention
- data exposure containment time
- audit completeness
- incident recurrence rate

---

## 16. Team Template: Finance Operations Team

### 16.1 Purpose

The Finance Operations Team helps monitor invoices, refunds, revenue, payouts, commissions, and AI cost-to-revenue.

### 16.2 Default Agents

```ts
agents: [
  'Finance Supervisor Agent',
  'Invoice Integrity Agent',
  'Refund Review Agent',
  'Revenue Reconciliation Agent',
  'Payout Reconciliation Agent',
  'AI Margin Agent',
  'Finance Reviewer Agent'
]
```

### 16.3 Business Outcomes

- reduce billing errors
- improve revenue visibility
- reconcile payouts
- detect refund anomalies
- protect gross margin
- support month-end close

### 16.4 Required Integrations

- billing provider
- payment provider
- accounting export
- finance controls

### 16.5 Tools

Allowed:

- detect invoice anomaly
- summarize revenue movements
- reconcile payout status
- calculate AI cost-to-revenue
- draft finance report

Requires approval:

- issue refund
- apply credit
- change subscription
- adjust commission
- export accounting data

Forbidden:

- alter financial records without authorization
- hide reconciliation mismatch
- calculate taxes without configured tax system
- override revenue recognition rules

### 16.6 KPIs

- invoice error rate
- refund approval accuracy
- payout reconciliation completion
- revenue reconciliation variance
- AI gross margin
- month-end close readiness
- finance support ticket rate

---

## 17. Team Template: Marketplace Operations Team

### 17.1 Purpose

The Marketplace Operations Team reviews marketplace assets, partner quality, creator payouts, listing performance, and trust controls.

### 17.2 Default Agents

```ts
agents: [
  'Marketplace Supervisor Agent',
  'Listing Review Agent',
  'Template Quality Agent',
  'Security Review Agent',
  'Partner Quality Agent',
  'Payout Review Agent',
  'Marketplace Growth Agent'
]
```

### 17.3 Business Outcomes

- improve marketplace quality
- reduce unsafe templates
- increase install conversion
- protect customer trust
- improve partner monetization
- detect fraud

### 17.4 Required Integrations

- marketplace system
- partner portal
- payout system
- trust review queue

### 17.5 Tools

Allowed:

- review listing metadata
- score template quality
- detect suspicious listing behavior
- recommend ranking adjustment
- draft partner feedback

Requires approval:

- publish listing
- delist asset
- approve payout hold
- change revenue share
- assign trust badge

Forbidden:

- auto-approve high-risk assets
- hide sponsored ranking
- alter payout without evidence
- publish templates with unsafe tool access

### 17.6 KPIs

- listing approval time
- rejected listing rate
- template install success
- partner quality score
- marketplace refund/dispute rate
- unsafe template detection
- marketplace revenue
- creator payout accuracy

---

## 18. Team Template: Product & Engineering Team

### 18.1 Purpose

The Product & Engineering Team helps triage product issues, analyze feedback, write PRDs, review API contracts, and generate implementation support.

### 18.2 Default Agents

```ts
agents: [
  'Product Supervisor Agent',
  'Feedback Analysis Agent',
  'PRD Drafting Agent',
  'API Review Agent',
  'Frontend Review Agent',
  'Testing Agent',
  'Engineering Reviewer Agent'
]
```

### 18.3 Business Outcomes

- improve product clarity
- reduce engineering ambiguity
- improve requirement quality
- improve release quality
- reduce regression risk

### 18.4 Required Integrations

- issue tracker
- documentation
- code repository metadata
- product analytics

### 18.5 Tools

Allowed:

- summarize feedback
- draft PRD
- review API contract
- generate test cases
- recommend acceptance criteria

Requires approval:

- create production ticket
- change roadmap priority
- modify API contract
- create pull request
- change release gate

Forbidden:

- merge code automatically
- bypass QA gates
- ignore security/privacy dependencies
- create unsupported product claims

### 18.6 KPIs

- requirement completeness
- ambiguity reduction
- acceptance criteria coverage
- defect escape rate
- PRD-to-shipped cycle time
- regression prevention rate

---

## 19. Team Template Installation Flow

Every team template must support a guided installation flow.

### Step 1: Select business goal

Example:

- Improve sales response
- Reduce support tickets
- Track AI visibility
- Prevent churn
- Monitor security incidents

### Step 2: Recommend team

Ariyo must recommend a team based on:

- industry
- plan
- customer maturity
- connected integrations
- business goals
- available data
- risk tolerance

### Step 3: Show team preview

Preview must show:

- included AI employees
- required integrations
- permissions
- estimated cost
- approval rules
- expected outcomes
- limits by plan

### Step 4: Connect data and tools

Ariyo must guide customers to connect required sources.

### Step 5: Simulate before deployment

Ariyo must run sandbox simulation for:

- sample scenario
- tool actions
- cost estimate
- approval flow
- expected output

### Step 6: Configure review policy

Customers must set:

- automatic actions
- review-required actions
- blocked actions
- reviewer roles

### Step 7: Deploy gradually

Team rollout must begin in controlled mode.

```ts
rollout_mode:
  | 'preview_only'
  | 'human_review_required'
  | 'limited_auto_execution'
  | 'full_policy_governed_execution';
```

### Step 8: Monitor team health

After deployment, Ariyo must show:

- task completion
- cost
- errors
- review queue
- customer outcomes
- safety alerts

---

## 20. Team Template Versioning

Every team template must be versioned.

Versioned components:

- team definition
- included agents
- agent prompts
- model profiles
- tools
- permissions
- workflows
- knowledge requirements
- approval rules
- evaluation suites
- KPI definitions
- cost budgets
- rollout rules

A team version must never silently change production behavior.

---

## 21. Team Template Evaluation

Before publishing, every team must pass:

- role clarity evaluation
- permission evaluation
- tool-use evaluation
- RAG grounding evaluation
- hallucination evaluation
- prompt injection evaluation
- cost evaluation
- latency evaluation
- failure-mode evaluation
- customer-facing quality evaluation
- plan compatibility evaluation

Team templates with high-risk tools require human review before marketplace publication.

---

## 22. Team Template Marketplace Rules

If a team template is published in marketplace, it must include:

- clear outcome claim
- setup requirements
- required integrations
- plan compatibility
- security review status
- data access summary
- estimated cost profile
- human review requirements
- creator identity
- version history
- support contact
- refund/dispute policy

Marketplace team templates must not hide tool permissions.

---

## 23. Advanced KPI System

Every team template must define at least four KPI categories.

### 23.1 Outcome KPIs

Examples:

- revenue influenced
- support deflection
- activation rate
- GEO visibility lift
- workflow completion
- cost savings

### 23.2 Quality KPIs

Examples:

- answer quality score
- tool-use accuracy
- retrieval precision
- review rejection rate
- escalation accuracy

### 23.3 Safety KPIs

Examples:

- unauthorized action attempts
- policy violations
- prompt injection detections
- memory leakage incidents
- unsafe output blocks

### 23.4 Cost KPIs

Examples:

- cost per completed task
- cost per AI employee
- cost per workflow
- cost per successful resolution
- Smart team cost utilization

### 23.5 Reliability KPIs

Examples:

- team execution success rate
- failed workflow rate
- integration timeout rate
- retry rate
- mean time to recover

---

## 24. API Contract

### 24.1 List Team Templates

```http
GET /api/v1/agent-team-templates
```

Response:

```json
{
  "data": [
    {
      "id": "team_tpl_sales_001",
      "slug": "sales-growth-team",
      "name": "Sales Growth Team",
      "category": "sales",
      "plan_availability": ["pro", "smart"],
      "agents_count": 8,
      "required_integrations": ["crm", "email", "calendar"],
      "status": "published"
    }
  ]
}
```

### 24.2 Get Team Template

```http
GET /api/v1/agent-team-templates/{template_id}
```

### 24.3 Install Team Template

```http
POST /api/v1/organizations/{organization_id}/agent-teams/install
```

Request:

```json
{
  "template_id": "team_tpl_support_001",
  "workspace_id": "ws_123",
  "rollout_mode": "human_review_required",
  "reviewer_role_ids": ["role_support_manager"],
  "integration_connection_ids": ["int_zendesk_123"],
  "cost_budget": {
    "monthly_limit_cents": 5000,
    "alert_threshold_percent": 80
  }
}
```

Response:

```json
{
  "agent_team_id": "team_987",
  "status": "installed_pending_simulation",
  "next_required_step": "run_sandbox_simulation"
}
```

### 24.4 Run Team Simulation

```http
POST /api/v1/agent-teams/{team_id}/simulate
```

Request:

```json
{
  "scenario_id": "scenario_support_refund_question",
  "dry_run": true,
  "include_cost_estimate": true,
  "include_permission_trace": true
}
```

Response:

```json
{
  "simulation_id": "sim_456",
  "result": "passed_with_warnings",
  "estimated_cost_cents": 18,
  "approval_required_actions": 2,
  "blocked_actions": 0,
  "warnings": [
    {
      "code": "missing_knowledge_article",
      "message": "Refund policy article was not found in connected knowledge base."
    }
  ]
}
```

### 24.5 Deploy Team

```http
POST /api/v1/agent-teams/{team_id}/deploy
```

Request:

```json
{
  "deployment_mode": "limited_auto_execution",
  "start_percentage": 10,
  "rollback_on": ["cost_spike", "policy_violation", "error_rate_threshold"]
}
```

---

## 25. Frontend Requirements

### 25.1 Team Gallery

Must show:

- team name
- category
- outcome
- plan requirement
- setup difficulty
- required integrations
- estimated cost profile
- trust badges
- install CTA

### 25.2 Team Detail Page

Must show:

- included agents
- workflow diagram
- permissions
- approval rules
- data access
- KPIs
- demo scenario
- plan compatibility
- marketplace creator if applicable

### 25.3 Team Configuration Wizard

Must include:

- goal selection
- integration connection
- knowledge setup
- permission setup
- review setup
- budget setup
- simulation
- deployment

### 25.4 Team Health Dashboard

Must show:

- active agents
- successful tasks
- failed tasks
- review queue
- cost
- safety alerts
- customer value metrics
- last version deployed

---

## 26. Backend Requirements

Backend must support:

- team template registry
- team installation
- team versioning
- permission policy binding
- model profile binding
- workflow binding
- tool access binding
- memory scope binding
- simulation engine
- evaluation engine
- deployment engine
- observability trace linkage
- rollback
- marketplace publication

---

## 27. Security and Privacy Rules

Agent teams must never:

- share memory between organizations
- inherit tools without explicit grants
- access integrations by default
- use sensitive data without scope
- bypass approval because another agent approved it
- hide agent-to-agent handoffs
- publish templates with unsafe default tools

All team actions must be tied to:

- organization ID
- workspace ID
- agent ID
- team ID
- version ID
- trace ID
- user or system initiator
- permission decision

---

## 28. Customer-Facing Copy Rules

Ariyo must describe teams in outcome language.

Good:

- “Deploy a Support Team that triages tickets, retrieves answers, drafts responses, and escalates risky cases.”
- “Install a GEO Growth Team that monitors how your pages appear in AI answers.”
- “Use a Sales Team that researches leads, prepares demos, and drafts follow-ups.”

Bad:

- “Run multiple LLM agents.”
- “Autonomous AI workforce with no limits.”
- “Set and forget your business operations.”

---

## 29. Forbidden Patterns

Do not:

- sell team templates as prompt packs
- deploy teams without simulation
- allow agent teams to inherit broad permissions
- hide required integrations
- hide cost profile
- hide approval requirements
- use one model for every agent role
- allow agents to approve each other for high-risk actions
- allow customer-facing output without review policy
- publish marketplace teams without security review
- deploy Smart-level autonomy into Basic plan
- use vague outcome claims
- remove traceability to reduce storage cost
- allow team version changes without changelog
- allow unsafe team rollback gaps

---

## 30. Golden Rule

Ariyo Agent Team Templates must make AI employees easier to adopt without making them harder to govern.

The customer should feel that they are installing a trusted business capability, not experimenting with uncontrolled AI behavior.

---

## 31. Final Rule

When building or modifying Ariyo agent team templates, always ask:

> Does this team produce a measurable business outcome with clear roles, safe permissions, scoped memory, appropriate models, visible cost, human review where needed, and full traceability?

If the answer is no, the team is not ready for customers.
