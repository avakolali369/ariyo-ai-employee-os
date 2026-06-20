# Ariyo AI Agent Versioning & Change Management Skill

## 1. Purpose

This skill defines how Ariyo versions, changes, tests, deploys, rolls back, audits, and governs AI Employee behavior.

Ariyo AI Employees are not static features. They are living operational workers composed of model profiles, prompts, tools, policies, permissions, memory rules, retrieval rules, workflows, integrations, evaluation suites, cost settings, and release gates.

This file exists so every AI Employee change is intentional, measurable, reversible, safe, and explainable.

This skill is especially important because frontier AI model behavior changes over time across providers. Ariyo must never depend on vague model names, undocumented assumptions, or untested upgrades.

---

## 2. Core Contract

Ariyo AI Employee versioning is not prompt history.

Ariyo AI Employee versioning is the governance system that controls every behavior-changing dependency of an AI Employee: model, provider, prompt, memory, tools, permissions, workflow, knowledge, evaluation, policy, cost, and runtime safety.

Every meaningful AI Employee change must be versioned, evaluated, rolled out safely, monitored in production, and reversible.

Ariyo must treat model changes as operational changes, not invisible infrastructure updates.

---

## 3. Non-Negotiable Principles

1. No unversioned AI behavior in production.
2. No direct provider model calls outside Ariyo Model Gateway.
3. No evergreen model alias may be used for production-critical behavior without snapshot tracking or drift monitoring.
4. No model upgrade may ship without evaluation comparison against the current version.
5. No prompt, policy, tool, memory schema, retrieval rule, or model profile may change silently.
6. No AI Employee version may execute tools beyond its approved runtime permission contract.
7. No rollback should require code redeploy if the change was controlled by configuration.
8. Every AI Employee execution must be traceable to an exact version bundle.
9. Customer-visible behavior changes must have release notes or in-product explanation when material.
10. Provider deprecations must be tracked as roadmap risks, not discovered during outages.

---

## 4. What Must Be Versioned

Ariyo must version the complete AI Employee behavior bundle.

### 4.1 AI Employee Version Bundle

Each AI Employee version must include:

```ts
export interface AIAgentVersionBundle {
  agentVersionId: string;
  agentId: string;
  organizationScope: 'global' | 'workspace' | 'organization' | 'customer_specific';
  lifecycleState: AgentVersionLifecycleState;
  createdAt: string;
  createdByUserId: string;
  approvedByUserId?: string;
  releaseNotes: string;
  modelProfileVersionId: string;
  promptVersionId: string;
  systemPolicyVersionId: string;
  toolPolicyVersionId: string;
  memoryPolicyVersionId: string;
  retrievalPolicyVersionId: string;
  workflowPolicyVersionId?: string;
  costPolicyVersionId: string;
  safetyPolicyVersionId: string;
  evaluationSuiteVersionId: string;
  rolloutPolicyVersionId: string;
  observabilityPolicyVersionId: string;
  rollbackTargetVersionId?: string;
}
```

### 4.2 Versioned Components

Ariyo must version:

- AI Employee persona and role definition
- system prompts
- developer prompts
- task prompts
- response templates
- tool schemas
- tool access policy
- tool execution policy
- approval policy
- delegated authority rules
- model provider
- model ID
- model snapshot
- model alias mapping
- reasoning settings
- temperature and generation parameters
- structured output schema
- memory schema
- memory retention rules
- RAG retrieval strategy
- embedding model
- chunking strategy
- reranking policy
- knowledge freshness policy
- workflow graph
- escalation rules
- cost policy
- throttling policy
- safety classifier thresholds
- evaluation datasets
- benchmark expectations
- rollout policy
- rollback policy
- observability trace schema
- customer-facing release notes

---

## 5. Model Provider Strategy in Versioning

Ariyo must maintain a provider-aware `ModelProfileRegistry`.

The model profile is not only a model name. It is an operational contract that describes what the model is allowed to do, where it is strong, where it is weak, what provider constraints apply, and how it should be evaluated.

```ts
export interface ModelProfile {
  modelProfileId: string;
  provider: 'openai' | 'anthropic' | 'google_gemini' | 'deepseek' | 'self_hosted' | 'other';
  providerModelId: string;
  providerSnapshotId?: string;
  aliasUsed?: string;
  aliasResolvedAt?: string;
  modelFamily: string;
  capabilityTier: 'economy' | 'balanced' | 'frontier' | 'specialist';
  primarySpecialties: ModelSpecialty[];
  forbiddenUseCases: string[];
  recommendedUseCases: string[];
  maxInputTokens?: number;
  maxOutputTokens?: number;
  multimodalInputs: Array<'text' | 'image' | 'audio' | 'video' | 'file'>;
  supportedOutputs: Array<'text' | 'json' | 'tool_call' | 'image' | 'audio'>;
  toolCalling: ToolCallingCapability;
  structuredOutputCapability: StructuredOutputCapability;
  reasoningMode: ReasoningModeCapability;
  contextCachingSupport: boolean;
  groundingSupport: GroundingCapability;
  dataResidencySupport: DataResidencyCapability;
  costClass: 'low' | 'medium' | 'high' | 'premium';
  latencyClass: 'fast' | 'moderate' | 'slow' | 'long_running';
  safetyNotes: string[];
  providerPolicyNotes: string[];
  deprecationDate?: string;
  lastVerifiedAt: string;
}
```

---

## 6. Influential Model Profiles by Specialty

Ariyo must not define “best model” globally. Ariyo must define the best model per task, risk level, cost class, latency target, language, modality, and customer plan.

The following profile matrix must be used as a starting point and reviewed monthly.

### 6.1 OpenAI Model Strategy

Use OpenAI frontier models when Ariyo needs strong general reasoning, professional work quality, coding, tool orchestration, structured outputs, multimodal input, and broad tool ecosystem support.

Recommended Ariyo specialties:

- high-stakes professional reasoning
- complex business writing
- code generation and code review
- structured output extraction
- tool-calling agents
- RAG answer synthesis
- data analysis explanation
- product strategy assistance
- long-context professional workflows
- multi-step AI Employee planning

Operational policy:

- Use pinned snapshots when available for production-critical AI Employees.
- If using an alias, store the resolved snapshot and compare output drift daily.
- Reasoning effort must be explicit for production AI Employees.
- Tool availability must be represented in the model profile, not assumed.
- Long-context usage must trigger cost and latency guards.
- Model upgrades must pass regression, hallucination, tool-use, cost, and latency gates.

OpenAI-specific versioning fields:

```ts
export interface OpenAIModelVersionPolicy {
  provider: 'openai';
  modelId: string;
  snapshotId?: string;
  reasoningEffort?: 'none' | 'low' | 'medium' | 'high' | 'xhigh';
  responsesApiRequired: boolean;
  toolsAllowed: Array<
    | 'web_search'
    | 'file_search'
    | 'code_interpreter'
    | 'computer_use'
    | 'mcp'
    | 'skills'
    | 'hosted_shell'
    | 'image_generation'
  >;
  structuredOutputsRequired: boolean;
  maxContextPolicy: 'normal' | 'long_context_review_required';
  driftMonitoringRequired: boolean;
}
```

Do not use OpenAI frontier models for low-value repetitive tasks when a cheaper model meets quality and safety requirements.

### 6.2 Anthropic Claude Model Strategy

Use Claude models when Ariyo needs excellent long-form reasoning, high-quality written communication, careful instruction following, agentic coding, nuanced customer-facing responses, and strong enterprise/cloud deployment options.

Recommended Ariyo specialties:

- human-like customer support drafts
- complex business policy interpretation
- long-horizon coding tasks
- careful summarization
- nuanced writing and tone control
- enterprise workflows requiring AWS, Vertex AI, or Microsoft Foundry deployment paths
- long-context review
- agent planning where readability and judgment matter

Operational policy:

- Treat each Claude model ID as pinned when the provider defines it as a pinned snapshot.
- Do not assume aliases are evergreen-safe unless model docs confirm behavior.
- Track Opus/Sonnet/Haiku role separation:
  - Opus/Fable-class for highest capability and complex autonomy.
  - Sonnet-class for balanced speed/intelligence production work.
  - Haiku-class for fast, low-latency, lower-cost work.
- Explicitly store extended/adaptive thinking settings when supported.
- For sensitive enterprise workloads, track cloud endpoint type and data routing posture.

Claude-specific versioning fields:

```ts
export interface ClaudeModelVersionPolicy {
  provider: 'anthropic';
  modelId: string;
  modelTier: 'haiku' | 'sonnet' | 'opus' | 'fable' | 'mythos' | 'other';
  pinnedSnapshot: boolean;
  extendedThinkingEnabled?: boolean;
  adaptiveThinkingEnabled?: boolean;
  effort?: 'low' | 'medium' | 'high' | 'provider_default';
  cloudSurface?: 'anthropic_api' | 'aws_bedrock' | 'vertex_ai' | 'microsoft_foundry';
  endpointRouting?: 'global' | 'regional' | 'multi_region' | 'unknown';
  toolUseAllowed: boolean;
  promptCachingAllowed: boolean;
  modelDeprecationWatchRequired: boolean;
}
```

Do not use Claude high-capability tiers for bulk classification unless evaluation proves they are required.

### 6.3 Google Gemini Model Strategy

Use Gemini models when Ariyo needs very long context, Google Search grounding, multimodal capabilities, function calling, Google ecosystem integrations, URL/file context, code execution, and large-scale content intelligence.

Recommended Ariyo specialties:

- GEO visibility and grounded answer checks
- long-context document analysis
- multimodal understanding
- Google Search grounded research
- URL context workflows
- content QA and SEO/GEO workflows
- large knowledge pack analysis
- high-volume Flash-class tasks
- tool-combination agent workflows

Operational policy:

- Use `thinking_level` or equivalent current controls explicitly when reasoning behavior matters.
- Use Search Grounding only when freshness or citation quality is required.
- Track billable grounding/tool calls separately from token cost.
- For Gemini 3-style behavior, prompts should be concise and direct.
- If a Gemini model supports large context, do not automatically use it; apply context compression and retrieval ranking first.
- Version tool combination behavior because provider support may differ by model generation.

Gemini-specific versioning fields:

```ts
export interface GeminiModelVersionPolicy {
  provider: 'google_gemini';
  modelId: string;
  thinkingLevel?: 'minimal' | 'low' | 'medium' | 'high' | 'provider_default';
  googleSearchGroundingAllowed: boolean;
  urlContextAllowed: boolean;
  fileSearchAllowed: boolean;
  codeExecutionAllowed: boolean;
  functionCallingAllowed: boolean;
  builtInToolCombinationAllowed: boolean;
  contextCachingAllowed: boolean;
  groundingCostMeteringRequired: boolean;
  promptStyle: 'concise_direct' | 'guided' | 'legacy_verbose_allowed';
}
```

Do not route private customer data to grounding workflows unless data policy permits it and the grounding behavior is understood.

### 6.4 DeepSeek Model Strategy

Use DeepSeek models when Ariyo needs cost-sensitive reasoning, coding, agentic reasoning experiments, long-context processing, and OpenAI/Anthropic-compatible integration paths.

Recommended Ariyo specialties:

- cost-efficient reasoning tasks
- code analysis
- math/logic-heavy internal tasks
- benchmark comparison against frontier providers
- non-customer-facing draft reasoning
- internal planning where latency/cost tradeoff is acceptable
- long-context tasks when provider terms and data policy allow

Operational policy:

- Track model-name deprecations aggressively.
- Do not assume legacy names such as `deepseek-chat` or `deepseek-reasoner` will remain stable.
- Thinking and non-thinking modes must be explicit.
- If a reasoning model exposes chain-of-thought-like content, Ariyo must treat it as sensitive internal diagnostic material and must not expose it to customers by default.
- Do not rely on function calling for DeepSeek reasoning modes when provider docs mark it unsupported.
- Always evaluate final-answer quality separately from reasoning trace availability.

DeepSeek-specific versioning fields:

```ts
export interface DeepSeekModelVersionPolicy {
  provider: 'deepseek';
  modelId: string;
  mode: 'thinking' | 'non_thinking';
  apiCompatibility: Array<'openai_chat_completions' | 'anthropic_api'>;
  chainOfThoughtReturned?: boolean;
  exposeReasoningToUser: false;
  functionCallingAllowed: boolean;
  jsonOutputAllowed: boolean;
  deprecationDate?: string;
  replacementModelId?: string;
  migrationRequired: boolean;
}
```

Do not use DeepSeek reasoning traces as customer-facing explanations. Use separate customer-safe summaries.

---

## 7. Model Specialization Matrix

Ariyo must route by task type, not by hype.

| Task type | Preferred model class | Example provider profile | Required checks |
|---|---|---|---|
| Customer-facing answer synthesis | Balanced/frontier writing model | Claude Sonnet/Opus, OpenAI GPT frontier | hallucination, tone, source grounding, safety |
| Long-horizon coding | Frontier coding/reasoning model | OpenAI GPT-5.5, Claude Opus/Fable, DeepSeek reasoning | test pass, diff quality, security scan |
| GEO/API grounded visibility | Grounding-capable model | Gemini with Google Search Grounding, OpenAI Web Search | citation quality, query reproducibility, cost |
| Low-cost classification | Economy or mini model | OpenAI mini, Gemini Flash/Lite, Claude Haiku, DeepSeek Flash | accuracy floor, latency, cost |
| High-risk tool execution planning | Frontier reasoning + policy engine | OpenAI/Claude frontier | permission simulation, approval gate |
| Bulk summarization | Balanced/fast model | Sonnet/Haiku, Flash, mini | compression loss, entity preservation |
| Sensitive internal analysis | Provider with approved data posture | configured per customer | data processing, retention, logging |
| Multimodal analysis | Multimodal model | OpenAI/Gemini/Claude supported vision | input sensitivity, citation when needed |
| Long-context legal or policy review | Long-context careful model | Claude Fable/Opus, Gemini Pro, OpenAI frontier | source trace, legal disclaimer, review |
| Cost-sensitive reasoning | Efficient reasoning model | DeepSeek thinking, lower-cost frontier alternatives | no unsafe reasoning exposure, eval score |

---

## 8. AI Employee Change Types

Ariyo must classify every change.

```ts
export type AIAgentChangeType =
  | 'model_provider_change'
  | 'model_id_change'
  | 'model_snapshot_change'
  | 'model_parameter_change'
  | 'prompt_change'
  | 'system_policy_change'
  | 'tool_schema_change'
  | 'tool_permission_change'
  | 'memory_schema_change'
  | 'retrieval_policy_change'
  | 'knowledge_source_change'
  | 'workflow_graph_change'
  | 'approval_policy_change'
  | 'cost_policy_change'
  | 'safety_threshold_change'
  | 'evaluation_suite_change'
  | 'rollout_policy_change'
  | 'customer_specific_override'
  | 'emergency_hotfix';
```

### 8.1 Low-Risk Changes

Examples:

- typo fix in customer-safe copy
- minor logging metadata addition
- dashboard label change
- non-behavioral UI copy change

Requirements:

- version bump
- audit entry
- no full eval required unless behavior may change

### 8.2 Medium-Risk Changes

Examples:

- prompt wording change
- model parameter change
- retrieval ranking adjustment
- response format change
- added tool description
- new support workflow

Requirements:

- offline evaluation
- sampled regression test
- staging rollout
- production canary
- rollback target

### 8.3 High-Risk Changes

Examples:

- model provider change
- model snapshot change for production agents
- tool execution policy change
- memory schema change
- approval bypass policy
- integration write-action enablement
- billing or payment action tool enablement
- security, legal, or financial AI Employee changes

Requirements:

- full evaluation suite
- adversarial tests
- runtime permission simulation
- human approval
- staged rollout
- incident rollback plan
- release notes
- customer communication if behavior changes materially

### 8.4 Critical Changes

Examples:

- emergency safety patch
- provider outage migration
- security incident containment
- prompt injection defense patch
- deprecation-driven forced migration

Requirements:

- incident/change link
- emergency approver
- immediate traceability
- post-change review
- retroactive full evaluation

---

## 9. Lifecycle States

```ts
export type AgentVersionLifecycleState =
  | 'draft'
  | 'ready_for_internal_review'
  | 'evaluation_running'
  | 'evaluation_failed'
  | 'ready_for_approval'
  | 'approved'
  | 'staged'
  | 'canary'
  | 'progressive_rollout'
  | 'active'
  | 'paused'
  | 'rollback_pending'
  | 'rolled_back'
  | 'deprecated'
  | 'retired'
  | 'archived';
```

No version may move from `draft` to `active` directly.

---

## 10. Version Numbering

Ariyo must use semantic AI behavior versioning.

```text
MAJOR.MINOR.PATCH+build
```

### MAJOR

Use when behavior meaningfully changes or customer outcomes may change.

Examples:

- model provider migration
- major prompt architecture redesign
- new tool autonomy level
- changed approval policy
- memory behavior redesigned

### MINOR

Use when capability improves without changing the core role.

Examples:

- better response structure
- improved retrieval ranking
- new read-only tool
- new safe template
- expanded marketplace workflow

### PATCH

Use for bug fixes and narrow corrections.

Examples:

- format fix
- prompt typo
- schema validation repair
- narrow hallucination fix

---

## 11. Version Bundle Fingerprint

Every AI execution must store a deterministic version fingerprint.

```ts
export interface AIAgentVersionFingerprint {
  agentVersionId: string;
  modelProfileVersionId: string;
  promptVersionId: string;
  toolPolicyVersionId: string;
  memoryPolicyVersionId: string;
  retrievalPolicyVersionId: string;
  safetyPolicyVersionId: string;
  costPolicyVersionId: string;
  checksum: string;
}
```

The checksum must change when any behavior-affecting dependency changes.

---

## 12. Model Change Management

### 12.1 Model Upgrade Checklist

Before changing a model:

- identify current model profile
- identify candidate model profile
- classify the change risk
- compare cost
- compare latency
- compare context behavior
- compare tool-use reliability
- compare structured output reliability
- compare refusal/safety behavior
- compare hallucination rate
- compare RAG citation quality
- compare plan-tier impact
- check provider policy changes
- check provider data processing posture
- check regional availability
- check deprecation timelines
- run regression suite
- run adversarial suite
- run production shadow test when applicable
- prepare rollback target

### 12.2 Model Downgrade Checklist

Before downgrading:

- confirm quality floor is preserved
- define affected tasks
- identify customer-facing behavior changes
- check support ticket risk
- check upgrade/plan messaging
- monitor churn or complaint signals
- preserve high-risk task routing to stronger models

### 12.3 Model Migration Modes

```ts
export type ModelMigrationMode =
  | 'silent_internal_only'
  | 'canary_customers'
  | 'plan_specific'
  | 'task_specific'
  | 'customer_opt_in'
  | 'forced_deprecation_migration'
  | 'emergency_provider_failover';
```

---

## 13. Prompt Change Management

Every prompt version must include:

```ts
export interface PromptVersion {
  promptVersionId: string;
  agentId: string;
  promptType: 'system' | 'developer' | 'task' | 'tool' | 'response_template' | 'safety' | 'customer_safe_explanation';
  version: string;
  contentHash: string;
  authorId: string;
  changeReason: string;
  expectedBehaviorChange: string;
  linkedEvaluationSuiteId: string;
  rollbackPromptVersionId?: string;
  approvedAt?: string;
}
```

Prompt changes must not be described as “minor” unless they are tested.

---

## 14. Policy Change Management

Policy changes are more dangerous than prompt changes because they may change what AI Employees are allowed to do.

Policies that require strict versioning:

- tool access policy
- runtime permission policy
- human review policy
- data access policy
- memory policy
- RAG policy
- cost policy
- safety policy
- escalation policy
- customer communication policy
- incident policy

Policy changes must include simulation outputs showing affected scenarios.

---

## 15. Tool and Integration Change Management

Tool changes must be treated as action-surface changes.

Tool schema versioning must include:

```ts
export interface ToolVersion {
  toolVersionId: string;
  toolName: string;
  toolCategory: 'read' | 'write' | 'external_action' | 'billing' | 'security' | 'admin' | 'communication';
  schemaHash: string;
  permissionScope: string[];
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  idempotencyRequired: boolean;
  humanReviewRequired: boolean;
  rollbackBehavior: string;
  testFixtureVersionId: string;
}
```

Any write-capable integration tool must pass:

- permission simulation
- idempotency test
- failure test
- rate-limit test
- audit-log test
- human-review test when high risk

---

## 16. Memory and Context Change Management

Memory schema changes must be backward-compatible unless a migration plan exists.

Versioned memory fields:

- memory type
- owner scope
- retention rule
- deletion rule
- sensitivity class
- retrieval rule
- conflict resolution rule
- freshness rule
- prompt injection defense

Memory changes must be tested for:

- cross-tenant leakage
- stale memory usage
- sensitive data exposure
- personalization overreach
- conflicting memory resolution
- deletion correctness

---

## 17. RAG and Knowledge Change Management

RAG changes must be versioned as behavior changes.

Versioned RAG components:

- source connector version
- ingestion parser version
- chunking strategy
- embedding model
- vector index schema
- reranker model
- retrieval top-k
- freshness threshold
- citation rules
- answer synthesis model
- fallback behavior

RAG changes must be tested for:

- citation accuracy
- retrieval relevance
- stale source handling
- permission filtering
- hallucination rate
- source attribution
- customer data boundaries

---

## 18. Release Candidate Requirements

```ts
export interface AIAgentReleaseCandidate {
  releaseCandidateId: string;
  agentId: string;
  targetVersionId: string;
  sourceVersionId: string;
  changeTypes: AIAgentChangeType[];
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  targetPlans: Array<'basic' | 'pro' | 'smart' | 'enterprise'>;
  targetCustomers?: string[];
  evaluationReportId: string;
  rolloutPlanId: string;
  rollbackPlanId: string;
  approvalStatus: 'pending' | 'approved' | 'rejected';
}
```

A release candidate may not be approved without a linked evaluation report.

---

## 19. Evaluation Gates

Each release candidate must pass gates based on risk.

### Low Risk Gate

- smoke test
- schema validation
- trace fingerprint check

### Medium Risk Gate

- golden set pass
- latency within threshold
- cost within threshold
- no new critical hallucinations
- structured output validation

### High Risk Gate

- full regression benchmark
- adversarial test
- tool-use test
- permission test
- RAG citation test
- safety test
- rollback test
- human approval

### Critical Gate

- emergency approval
- containment justification
- post-release evaluation required
- incident timeline required

---

## 20. Rollout Strategy

Ariyo must support:

- internal dogfood rollout
- sandbox rollout
- demo environment rollout
- canary customer rollout
- plan-based rollout
- organization-specific rollout
- percentage rollout
- geography-aware rollout
- vertical/industry rollout
- emergency rollback

```ts
export interface AIRolloutPlan {
  rolloutPlanId: string;
  versionId: string;
  rolloutType: 'internal' | 'sandbox' | 'canary' | 'percentage' | 'plan_based' | 'customer_specific' | 'global';
  phases: AIRolloutPhase[];
  guardrailMetrics: string[];
  autoPauseConditions: string[];
  rollbackTargetVersionId: string;
}
```

---

## 21. Rollback Requirements

Rollback must restore:

- model profile
- prompt versions
- policies
- tool schemas
- memory schema compatibility
- retrieval policy
- cost policy
- rollout flags
- customer-facing behavior when possible

Rollback must not silently delete evidence.

---

## 22. Plan-Aware Change Management

### 22.1 Basic

Basic AI Employees should receive stable, safe, cost-controlled behavior changes.

Rules:

- no experimental autonomy
- no high-cost model upgrades without plan upgrade
- simple rollback path
- no advanced memory behavior by default
- no customer-specific model routing unless needed for safety

### 22.2 Pro

Pro AI Employees can receive operational upgrades.

Rules:

- staged rollout
- workflow impact analysis
- integration tests required
- customer admin notifications for material changes
- detailed version history in admin console

### 22.3 Smart

Smart AI Employees may use the most advanced models, deeper reasoning, richer memory, advanced workflows, and GEO/API intelligence.

Rules:

- frontier model upgrades require benchmark comparison
- advanced reasoning must be cost-governed
- customer-specific model policies allowed
- deeper observability required
- admin-visible version controls required
- opt-in to beta agent profiles may be supported

---

## 23. Customer-Facing Version UX

Customers should not see raw prompt diffs unless they are enterprise/admin users with permission.

Customer-facing release notes must explain:

- what improved
- what may behave differently
- whether cost may change
- whether new permissions are required
- whether human review rules changed
- whether the customer must take action

Example:

```text
Your Support AI Employee was upgraded to improve answer accuracy and reduce unsupported claims.
No new integrations were enabled.
No billing permissions changed.
Human review rules remain unchanged.
```

---

## 24. Internal Admin Requirements

Internal Admin must show:

- active AI Employee versions
- pending release candidates
- provider/model mapping
- prompt version history
- policy version history
- rollout phase
- evaluation report
- cost delta
- incident links
- rollback button for authorized users
- deprecation warnings
- affected customer list

---

## 25. API Contract

### 25.1 List AI Employee Versions

`GET /api/v1/ai-agents/{agentId}/versions`

Response:

```json
{
  "agent_id": "agent_support_001",
  "active_version_id": "agv_2_4_0",
  "versions": [
    {
      "version_id": "agv_2_4_0",
      "version": "2.4.0",
      "state": "active",
      "model_profile": "openai_gpt_55_frontier_v1",
      "risk_level": "medium",
      "released_at": "2026-06-18T10:00:00Z"
    }
  ]
}
```

### 25.2 Create Release Candidate

`POST /api/v1/ai-agents/{agentId}/release-candidates`

Request:

```json
{
  "source_version_id": "agv_2_3_1",
  "target_components": {
    "model_profile_version_id": "mpv_openai_gpt55_20260423",
    "prompt_version_id": "prv_support_20260618",
    "tool_policy_version_id": "tpv_support_readonly_8"
  },
  "change_reason": "Improve support answer accuracy and reduce unsupported claims.",
  "target_plans": ["pro", "smart"],
  "risk_level": "medium"
}
```

### 25.3 Run Evaluation

`POST /api/v1/ai-agents/release-candidates/{releaseCandidateId}/evaluations`

Response:

```json
{
  "evaluation_report_id": "evalr_123",
  "status": "running",
  "required_gates": [
    "golden_set",
    "hallucination",
    "tool_use",
    "cost_delta",
    "latency"
  ]
}
```

### 25.4 Approve Release Candidate

`POST /api/v1/ai-agents/release-candidates/{releaseCandidateId}/approve`

Request:

```json
{
  "approval_note": "Evaluation passed. Canary rollout approved for Pro customers.",
  "approved_by": "user_admin_123"
}
```

### 25.5 Start Rollout

`POST /api/v1/ai-agents/release-candidates/{releaseCandidateId}/rollout`

Request:

```json
{
  "rollout_type": "canary",
  "initial_percentage": 5,
  "auto_pause_conditions": [
    "hallucination_rate_delta_gt_1_percent",
    "cost_delta_gt_20_percent",
    "customer_negative_feedback_spike"
  ]
}
```

### 25.6 Rollback

`POST /api/v1/ai-agents/{agentId}/rollback`

Request:

```json
{
  "from_version_id": "agv_2_4_0",
  "to_version_id": "agv_2_3_1",
  "reason": "Increased unsupported claims during canary.",
  "incident_id": "inc_ai_789"
}
```

---

## 26. Events

Ariyo must emit:

```text
ai_agent.version.created
ai_agent.release_candidate.created
ai_agent.evaluation.started
ai_agent.evaluation.completed
ai_agent.release.approved
ai_agent.rollout.started
ai_agent.rollout.phase_advanced
ai_agent.rollout.paused
ai_agent.version.activated
ai_agent.version.rollback_started
ai_agent.version.rollback_completed
ai_agent.version.deprecated
ai_agent.provider_deprecation.detected
ai_agent.model_drift.detected
ai_agent.policy_change.approved
```

Every event must include:

- organization_id
- workspace_id when applicable
- agent_id
- version_id
- release_candidate_id when applicable
- actor_user_id or system_actor
- change_type
- risk_level
- correlation_id
- timestamp

---

## 27. Advanced KPI System

Ariyo must track versioning KPIs.

### 27.1 Release Safety KPIs

- AI release pass rate
- high-risk change approval rate
- rollback rate by change type
- post-release incident rate
- evaluation failure rate
- canary auto-pause rate

### 27.2 Model Performance KPIs

- model upgrade quality delta
- hallucination rate delta
- tool-use accuracy delta
- RAG citation accuracy delta
- structured output validity delta
- reasoning cost delta
- latency delta

### 27.3 Business Impact KPIs

- customer activation change after release
- support ticket change after release
- plan upgrade impact
- churn-risk movement
- Smart plan usage uplift
- workflow completion improvement

### 27.4 Governance KPIs

- unreviewed change count
- emergency change count
- expired provider model count
- deprecated model exposure
- customer-specific override count
- policy drift incidents

---

## 28. Security and Privacy Rules

- Prompt diffs may contain sensitive business logic and must be permission-gated.
- Model reasoning traces must not be customer-visible by default.
- Provider migration must be reviewed for data processing and residency impact.
- Version history must be immutable.
- Rollbacks must preserve audit logs.
- Customer-specific prompts must not leak into global agent versions.
- Evaluation datasets must be scrubbed of unnecessary PII.

---

## 29. Provider Deprecation Management

Ariyo must maintain a provider deprecation watcher.

Deprecation record:

```ts
export interface ProviderDeprecationRecord {
  provider: string;
  modelId: string;
  deprecationAnnouncedAt: string;
  retirementDate: string;
  replacementModelId?: string;
  affectedAgents: string[];
  affectedCustomers: string[];
  migrationOwnerId: string;
  migrationStatus: 'not_started' | 'evaluating' | 'canary' | 'complete' | 'blocked';
}
```

No model within 30 days of retirement may be used for new production agents.

---

## 30. Forbidden Patterns

Never do the following:

```text
use raw model names directly in business logic
use unpinned aliases for critical agents without drift monitoring
change prompts without versioning
change models without evaluation
upgrade models only because they are newer
hide model changes from internal operators
ship high-risk tool policy changes without approval
expose chain-of-thought reasoning to customers by default
allow customer-specific prompt changes to become global accidentally
remove rollback targets during rollout
delete version history
skip provider deprecation monitoring
allow AI agent behavior to change due to dependency updates without traceability
run Smart-level reasoning cost for Basic plan users without entitlement
route sensitive data to a provider not approved by the customer policy
use one benchmark score to justify all use cases
ignore latency and cost regressions if answer quality improves
```

---

## 31. Golden Rule

Ariyo must treat every AI Employee version like an operational release, not a prompt edit.

If the change can affect customer trust, business outcome, cost, security, data, or autonomy, it must be versioned, evaluated, approved, rolled out, observed, and rollback-ready.

---

## 32. Source-Informed Provider Notes

This skill was designed with awareness of current public provider documentation as of 2026-06-18.

Reference sources to review during implementation:

- OpenAI API model documentation: https://developers.openai.com/api/docs/models/gpt-5.5
- Anthropic Claude models overview: https://platform.claude.com/docs/en/about-claude/models/overview
- Anthropic extended thinking docs: https://platform.claude.com/docs/en/build-with-claude/extended-thinking
- Google Gemini 3 developer guide: https://ai.google.dev/gemini-api/docs/gemini-3
- Google Gemini Grounding with Google Search: https://ai.google.dev/gemini-api/docs/google-search
- DeepSeek V4 Preview release: https://api-docs.deepseek.com/news/news260424
- DeepSeek reasoning model docs: https://api-docs.deepseek.com/guides/reasoning_model

Provider documentation changes frequently. Ariyo must not hardcode these notes as permanent truth. The ModelProfileRegistry must be reviewed monthly and whenever a provider announces a model, API, pricing, safety, data, rate-limit, deprecation, or capability change.
