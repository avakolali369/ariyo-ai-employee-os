# Ariyo Model Provider Strategy Skill

## 1. Purpose

This skill defines how Ariyo selects, routes, evaluates, governs, upgrades, and monitors AI model providers across the product.

Ariyo is an AI Employee Operating System. Its AI employees must not depend on a single model assumption, a single vendor behavior, or a single prompt pattern. Model providers are infrastructure dependencies that affect product quality, safety, cost, latency, privacy, reliability, compliance, and customer trust.

This file exists so that every Ariyo feature using AI follows a controlled provider strategy instead of directly calling a model from UI code, backend views, workflow code, or one-off scripts.

## 2. Core Contract

Ariyo model providers are not interchangeable magic APIs.

Every model provider used by Ariyo must be routed through a governed provider abstraction that controls purpose, data exposure, model selection, cost, latency, fallback, evaluation, safety, logging, compliance, and upgrade behavior.

Ariyo must never let product-critical AI behavior depend on an untested direct provider call.

## 3. Related Skills

This skill must be used together with:

- `product-strategy.md`
- `ai-employee-architecture.md`
- `prompt-tool-orchestration.md`
- `ai-safety-evaluation.md`
- `knowledge-rag.md`
- `workflow-automation.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`
- `quality-assurance-system.md`
- `deployment-ops.md`
- `product-analytics-growth.md`
- `monetization-billing.md`
- `enterprise-readiness.md`

## 4. Model Provider Philosophy

Ariyo must treat model choice as a product architecture decision, not as a developer preference.

The model provider strategy must optimize for:

1. Customer trust
2. Business outcome quality
3. AI employee reliability
4. Safety and policy compliance
5. Data minimization
6. Latency tolerance
7. Cost control
8. Provider resilience
9. Upgrade stability
10. Explainable operational behavior

Ariyo must avoid model-provider lock-in at the architecture level, even if one provider is preferred operationally.

## 5. Provider Abstraction Requirement

No Ariyo feature may call a model provider directly unless routed through the approved model gateway or provider abstraction.

Forbidden direct calls include:

```txt
frontend -> provider API
React component -> model API
workflow step -> provider SDK directly
Celery task -> provider SDK directly without gateway
admin script -> provider API without logging/evaluation
RAG retriever -> embedding provider without tenant/context policy
AI employee -> arbitrary provider endpoint
```

Every model call must pass through a model gateway that can enforce:

- organization scope
- AI employee scope
- user permission context
- data classification
- provider eligibility
- model selection
- prompt template version
- safety profile
- budget profile
- latency class
- retry policy
- fallback policy
- logging policy
- redaction policy
- evaluation hooks
- incident controls

## 6. Provider Categories

Ariyo may use multiple provider categories.

### 6.1 Primary LLM Providers

Used for core AI employee reasoning, drafting, classification, summarization, tool planning, and workflow support.

Must support:

- stable API access
- commercial usage
- predictable latency
- sufficient context window
- structured output support or reliable JSON generation
- safety controls
- contractual data handling clarity
- monitoring and error classification

### 6.2 Specialized Reasoning Providers

Used for high-complexity tasks, planning, analysis, or multi-step reasoning.

Must be used only when the task requires higher quality than the default model.

Examples of eligible work:

- complex workflow planning
- multi-document analysis
- high-stakes business recommendation drafting
- contract/questionnaire analysis
- data interpretation
- escalation explanation

### 6.3 Fast/Low-Cost Providers

Used for simple and high-volume tasks.

Examples:

- classification
- routing
- intent detection
- short rewriting
- language normalization
- tagging
- low-risk summarization
- small extraction tasks

These models must not be used for high-risk autonomous decisions.

### 6.4 Embedding Providers

Used for knowledge search, semantic retrieval, similarity, clustering, and deduplication.

Must be governed by:

- data classification
- tenant isolation
- retention policy
- embedding storage policy
- deletion propagation
- model versioning
- index rebuild strategy

### 6.5 Reranking Providers

Used to improve retrieval quality.

Must be evaluated for:

- retrieval precision
- latency overhead
- cost overhead
- multilingual performance
- permission-aware retrieval
- resistance to prompt-injection-like content manipulation

### 6.6 Moderation / Safety Providers

Used for abuse detection, unsafe content detection, prompt injection detection, policy classification, and harmful tool-call prevention.

Safety providers must never be treated as a substitute for application-level policy enforcement.

### 6.7 Speech / Audio Providers

Used for transcription, voice channels, or audio AI employees.

Must handle:

- consent
- retention
- redaction
- language quality
- speaker separation if needed
- call recording policies
- organization-specific data usage rules

### 6.8 Vision / Document Understanding Providers

Used for images, screenshots, PDFs, scanned forms, receipts, and document extraction.

Must handle:

- file upload security
- document sensitivity
- OCR errors
- confidence reporting
- manual review for critical extraction
- no silent action based on uncertain extraction

### 6.9 Local / Self-Hosted Models

Used when privacy, cost, latency, customization, or enterprise requirements justify local execution.

Must be evaluated for:

- operational cost
- GPU capacity
- quality gap
- maintenance burden
- patching
- monitoring
- model provenance
- security hardening

## 7. Model Gateway Responsibilities

The model gateway is the only approved layer for model execution.

It must provide:

```txt
request normalization
provider selection
model selection
prompt version resolution
input redaction
policy checks
budget checks
rate-limit checks
tenant isolation
request tracing
provider call execution
retry/fallback
structured output validation
safety post-checks
usage recording
cost attribution
quality sampling
error classification
audit logging
```

The gateway must not expose raw provider credentials to product code.

## 8. Core Entities

Ariyo should model provider strategy explicitly.

### 8.1 ModelProvider

Represents an external or internal provider.

Fields should include:

```txt
id
name
provider_type
status
regions_supported
data_processing_terms
supports_zero_retention
supports_structured_output
supports_streaming
supports_tool_calling
supports_embeddings
supports_moderation
supports_batching
supports_fine_tuning
risk_level
default_enabled
created_at
updated_at
```

### 8.2 ModelCapability

Represents what a model can do.

Examples:

```txt
chat
reasoning
classification
summarization
extraction
embedding
reranking
moderation
vision
audio_transcription
audio_generation
translation
code_generation
structured_output
tool_planning
```

### 8.3 ModelProfile

A product-level profile that maps use cases to model requirements.

Examples:

```txt
fast_classification
safe_customer_reply
knowledge_grounded_answer
workflow_planning
high_trust_business_recommendation
support_triage
sales_draft
admin_summary
security_sensitive_analysis
billing_sensitive_action
```

Ariyo features should request a model profile, not a provider-specific model name.

### 8.4 ModelRoute

Defines routing behavior for a profile.

Fields:

```txt
profile_id
primary_provider
primary_model
fallback_provider
fallback_model
allowed_providers
blocked_providers
latency_class
max_cost_per_call
max_tokens
safety_profile
redaction_profile
retry_policy
evaluation_policy
created_at
updated_at
```

### 8.5 PromptTemplateVersion

Defines prompt identity and version.

Fields:

```txt
prompt_id
version
owner
use_case
model_profile
input_schema
output_schema
safety_notes
rollback_version
status
created_at
updated_at
```

### 8.6 ModelExecution

Records a single model call.

Must include:

```txt
execution_id
organization_id
workspace_id
ai_employee_id
workflow_run_id
user_id
model_profile
provider
model
prompt_version
input_classification
redaction_applied
output_validation_status
safety_status
latency_ms
token_usage
estimated_cost
provider_request_id
error_code
fallback_used
audit_reference
created_at
```

Sensitive raw input/output must not be stored unless explicitly allowed by data governance policy.

### 8.7 ModelEvaluationRun

Represents evaluation of model/prompt/profile behavior.

Fields:

```txt
evaluation_id
profile_id
prompt_version
model_route
sample_set_id
quality_score
safety_score
format_score
groundedness_score
cost_score
latency_score
regression_status
approved_by
created_at
```

### 8.8 ProviderIncident

Represents outages, degradation, billing anomalies, data policy changes, safety problems, or provider-level incidents.

Fields:

```txt
incident_id
provider_id
impact_level
started_at
resolved_at
affected_profiles
affected_customers
fallback_activated
customer_notification_required
postmortem_required
```

## 9. Provider Lifecycle

Providers must follow a lifecycle.

```txt
candidate
under_review
approved_for_testing
approved_for_internal_use
approved_for_limited_customer_use
approved_for_production
restricted
deprecated
disabled
removed
```

### Rules

- A provider must not be used in production before approval.
- A provider must not process customer data before privacy/compliance review.
- A provider must not be enabled for enterprise customers without enterprise terms review.
- A provider must not be silently removed if active workflows depend on it.
- A deprecated provider must have a migration plan.

## 10. Model Lifecycle

Models must also follow a lifecycle.

```txt
candidate
evaluating
approved
preferred
limited
restricted
deprecated
blocked
retired
```

Ariyo must not automatically switch production behavior to a new model just because a provider released it.

## 11. Model Selection Criteria

Every model selection must consider:

### 11.1 Quality

- task success rate
- output usefulness
- reasoning reliability
- instruction following
- structured output reliability
- multilingual quality
- domain adaptation
- hallucination rate
- groundedness in retrieved knowledge

### 11.2 Safety

- prompt injection resistance
- unsafe instruction refusal
- tool-call discipline
- sensitive data handling
- policy adherence
- output confidence behavior
- ability to preserve review boundaries

### 11.3 Privacy

- data processing terms
- retention policy
- training policy
- regional processing options
- enterprise data controls
- support access policy
- deletion handling

### 11.4 Latency

- p50 latency
- p95 latency
- timeout behavior
- streaming support
- batch support
- provider degradation patterns

### 11.5 Cost

- input token cost
- output token cost
- embedding cost
- batch discount
- long context cost
- retry cost
- failed-call cost
- evaluation cost

### 11.6 Reliability

- historical uptime
- error rate
- rate limits
- quota handling
- fallback compatibility
- provider status transparency
- incident response maturity

### 11.7 Compliance

- DPA availability
- enterprise contract readiness
- subprocessor clarity
- data residency options
- audit support
- regulated customer suitability

### 11.8 Developer Experience

- SDK maturity
- API stability
- structured output support
- error clarity
- observability support
- documentation quality

## 12. Model Profile Pattern

Product code must request a profile.

Correct:

```ts
await modelGateway.run({
  profile: 'knowledge_grounded_answer',
  organizationId,
  aiEmployeeId,
  promptInput,
  context,
})
```

Incorrect:

```ts
await provider.chat.completions.create({
  model: 'some-specific-model',
  messages,
})
```

The first pattern allows Ariyo to route, evaluate, fallback, log, and control cost.

The second pattern creates hidden coupling and operational risk.

## 13. Recommended Model Profiles

Ariyo should define standard profiles.

### 13.1 `fast_intent_classification`

Used for:

- routing user messages
- detecting workflow intent
- simple tagging
- onboarding classification

Requirements:

- low latency
- low cost
- short context
- strict schema
- no autonomous action

### 13.2 `safe_customer_reply`

Used for:

- customer-facing draft replies
- support responses
- chat responses
- email drafts

Requirements:

- safe tone
- hallucination controls
- policy alignment
- optional human review
- no hidden unsupported claims

### 13.3 `knowledge_grounded_answer`

Used for:

- answers grounded in company knowledge
- FAQ responses
- support knowledge responses
- internal assistant responses

Requirements:

- retrieval grounding
- citation/reference awareness
- refusal when knowledge is insufficient
- tenant-safe retrieval
- prompt injection resistance

### 13.4 `workflow_planning`

Used for:

- decomposing work into steps
- selecting tools
- preparing workflow actions

Requirements:

- strong reasoning
- tool discipline
- policy checks
- no direct execution without orchestration
- review gate compatibility

### 13.5 `tool_call_validation`

Used for:

- validating proposed tool calls
- checking arguments
- identifying risky actions

Requirements:

- strict schema
- deterministic behavior where possible
- no free-form execution
- safety-first classification

### 13.6 `high_trust_business_analysis`

Used for:

- business recommendations
- account summaries
- executive summaries
- operational diagnosis

Requirements:

- high quality
- traceable assumptions
- uncertainty reporting
- review recommendation when needed

### 13.7 `sensitive_data_detection`

Used for:

- PII detection
- sensitive field classification
- redaction assistance

Requirements:

- conservative classification
- no storage of raw sensitive data unless permitted
- auditable results

### 13.8 `ai_safety_check`

Used for:

- abuse detection
- prompt injection detection
- policy classification
- unsafe output checks

Requirements:

- conservative blocking where needed
- clear reason codes
- integration with safety policy

### 13.9 `embedding_document_chunks`

Used for:

- knowledge base embeddings
- document indexing
- semantic retrieval

Requirements:

- stable embedding model version
- deletion support
- tenant isolation
- index rebuild plan

### 13.10 `rerank_retrieval_results`

Used for:

- improving RAG result quality

Requirements:

- low latency overhead
- strong relevance quality
- no permission bypass

## 14. Routing Strategy

Ariyo must route model calls using explicit routing logic.

Routing inputs may include:

```txt
model_profile
organization_plan
enterprise_policy
region_requirement
data_classification
task_risk_level
latency_requirement
cost_budget
provider_health
customer_allowed_providers
feature_flag
experiment_assignment
```

Routing must never be based only on developer convenience.

## 15. Fallback Strategy

Fallback must be explicit and tested.

### 15.1 Fallback Types

```txt
same_provider_different_model
different_provider_same_capability
reduced_capability_model
cached_response
queue_for_later
human_review_required
degraded_mode_message
hard_fail_safe
```

### 15.2 Fallback Rules

- Fallback must not violate customer data policy.
- Fallback must not move data to a provider the customer has disabled.
- Fallback must not use a model that lacks required safety profile.
- Fallback must not silently reduce quality for high-risk tasks.
- Fallback must be logged.
- Fallback must be visible in operational metrics.
- Critical fallback changes must be auditable.

### 15.3 When to Hard Fail

Ariyo must prefer safe failure when:

- no approved provider can process the data
- the task is high-risk and fallback quality is unverified
- the customer has restricted allowed providers
- model output validation fails repeatedly
- safety checks are unavailable for sensitive actions
- required human review cannot be created

## 16. Timeout Strategy

Each model profile must define timeouts.

Example classes:

```txt
interactive_fast: 5-10 seconds
interactive_standard: 10-25 seconds
background_standard: 30-120 seconds
batch_long_running: async only
```

User-facing flows must not block indefinitely.

If a model call exceeds the UX tolerance, Ariyo must show:

- clear progress state
- background processing state
- retry option
- safe cancellation if possible
- no duplicate action execution

## 17. Retry Strategy

Retries must be controlled.

Retry is allowed for:

- transient provider errors
- rate-limit recoverable errors
- network timeouts
- provider 5xx errors

Retry is not allowed for:

- invalid prompt schema
- invalid output schema after repeated failures
- permission denied
- policy violation
- unsupported data region
- customer disabled provider
- sensitive action already executed

Retries must use exponential backoff and idempotency keys where appropriate.

## 18. Structured Output Policy

Ariyo must prefer structured outputs for operational tasks.

Required for:

- tool call arguments
- classifications
- workflow decisions
- risk labels
- extraction
- routing
- billing-sensitive tasks
- permission-sensitive tasks
- integration actions

Rules:

- Output schema must be versioned.
- Output must be validated before use.
- Invalid output must not be silently repaired for high-risk actions.
- Repaired output must be logged.
- Schema changes must go through QA.

## 19. Prompt Versioning Policy

Every production prompt must have:

```txt
prompt_id
version
owner
purpose
input_schema
output_schema
model_profile
risk_level
evaluation_set
rollback_version
changelog
approval_status
```

Ariyo must not update production prompts without evaluation for critical flows.

## 20. Prompt / Model Coupling

Prompts are not guaranteed to behave the same across models.

Any change to model, provider, context window, system prompt, tool schema, retrieval format, or output parser may change behavior.

Therefore, Ariyo must evaluate model-route changes as product behavior changes.

## 21. Evaluation Before Production

A provider/model/prompt route must pass evaluation before production use.

Evaluation dimensions:

```txt
task_success
format_compliance
groundedness
hallucination_rate
refusal_quality
safety_compliance
prompt_injection_resistance
tool_call_correctness
latency
cost
language_quality
edge_case_behavior
regression_against_previous_route
```

Evaluation must include representative customer scenarios, not only synthetic happy paths.

## 22. Golden Evaluation Sets

Ariyo must maintain golden evaluation sets for each critical model profile.

Golden sets should include:

- normal cases
- edge cases
- adversarial prompts
- missing context
- conflicting context
- outdated knowledge
- unsafe requests
- integration tool traps
- permission boundary tests
- multilingual examples
- long-context stress tests
- cost-heavy examples

Golden sets must be versioned.

## 23. AI Safety Integration

Model provider strategy must integrate with AI safety.

Safety checks must apply before and after model execution depending on risk.

### Pre-call Checks

- data classification
- user permission
- organization policy
- prompt injection indicators
- unsafe task category
- provider eligibility
- budget availability

### Post-call Checks

- output schema validation
- unsafe content detection
- unsupported claim detection
- tool-call risk classification
- sensitive data leakage detection
- groundedness check
- human review requirement

## 24. RAG-Specific Provider Rules

RAG quality depends on both embedding/reranking providers and generation providers.

Ariyo must treat RAG as a chain:

```txt
ingestion -> chunking -> embedding -> retrieval -> reranking -> grounding -> generation -> citation/reference behavior -> safety check
```

Each part must be evaluated.

### Rules

- Embedding model changes require retrieval regression testing.
- Chunking changes require retrieval regression testing.
- Reranker changes require relevance evaluation.
- Generation model changes require groundedness evaluation.
- Retrieval must enforce permissions before model generation.
- Retrieved malicious content must not become trusted instructions.
- Model output must distinguish knowledge-backed answers from assumptions.

## 25. Tool Calling Rules

AI employees may propose tool calls, but tool execution must remain governed by Ariyo.

Rules:

- The model may suggest actions.
- The orchestration layer validates actions.
- The permission layer authorizes actions.
- The safety layer risk-scores actions.
- The human review layer gates high-risk actions.
- The integration layer executes actions.
- The audit layer records actions.

The model must never directly execute business actions.

## 26. Model Data Exposure Policy

Before sending data to a model provider, Ariyo must classify the data.

Data classes:

```txt
public
internal
customer_confidential
personal_data
sensitive_personal_data
financial_data
authentication_secret
security_sensitive
legal_sensitive
regulated_data
```

Provider eligibility must depend on data class.

Rules:

- Secrets must never be sent to model providers.
- Unneeded PII must be redacted before model calls.
- Sensitive data must use approved providers only.
- Enterprise provider restrictions must be enforced.
- Data sent to providers must be minimized.
- Logs must not store raw sensitive inputs by default.

## 27. Customer-Level Provider Controls

Enterprise customers may need provider controls.

Ariyo should support:

- allowed providers
- blocked providers
- data residency constraints
- zero-retention requirements where supported
- disabled AI features
- human-review-only modes
- no-training assurances reflected in contract/product behavior
- audit export of model execution metadata

The UI must not promise controls the backend cannot enforce.

## 28. Model Provider Contract Review

Before approving a provider for production, Ariyo must review:

- data processing terms
- privacy policy
- subprocessor terms
- retention policy
- training policy
- security documentation
- incident notification terms
- service limits
- commercial terms
- SLA/support terms if applicable
- regional processing options

Provider legal status must be tracked internally.

## 29. Cost Attribution

Every model call must be attributable.

Attribution dimensions:

```txt
organization
workspace
user
ai_employee
workflow
feature
model_profile
provider
model
prompt_version
integration_context
```

Ariyo must be able to answer:

- Which customers drive model cost?
- Which AI employees are expensive?
- Which workflows cause cost spikes?
- Which prompts produce high token usage?
- Which provider/model route is inefficient?
- Which fallback caused additional cost?

## 30. Budget Controls

Ariyo must support model budgets.

Budget types:

```txt
organization_monthly_budget
workspace_budget
ai_employee_budget
workflow_budget
feature_budget
trial_budget
internal_testing_budget
evaluation_budget
```

When a budget is near limit, Ariyo may:

- notify admins
- throttle low-priority tasks
- require approval
- downgrade to lower-cost route
- queue background jobs
- disable non-critical generation
- ask user to upgrade

Budget controls must not break critical safety checks.

## 31. Model Downgrade Policy

Ariyo may downgrade model routes for cost or availability only when safe.

Downgrade is allowed for:

- low-risk classification
- simple summaries
- internal draft suggestions
- non-critical analysis

Downgrade is not allowed for:

- high-risk tool planning
- sensitive customer-facing actions
- security analysis
- billing-sensitive decisions
- legal/compliance-sensitive summaries
- human-review bypass decisions

## 32. Model Upgrade Policy

Model upgrades must be controlled.

Before upgrade:

- run golden evals
- compare quality
- compare safety
- compare cost
- compare latency
- test structured output compatibility
- test RAG groundedness
- test tool-call behavior
- test multilingual behavior
- define rollback plan

After upgrade:

- monitor regression metrics
- sample outputs
- watch cost spikes
- watch provider errors
- keep rollback route available

No silent upgrade for critical AI employee behavior.

## 33. Provider Outage Handling

Provider outages must not create unsafe behavior.

During outage:

- activate tested fallback where allowed
- fail safely for high-risk tasks
- show clear user messaging
- avoid duplicate workflow execution
- pause unsafe automations if needed
- notify internal operators
- record impacted executions
- update incident status if customer-facing

The product must not show raw provider error messages to customers.

## 34. Provider Rate Limit Handling

Rate limits must be expected.

Ariyo must implement:

- per-provider queues
- concurrency limits
- priority lanes
- backoff
- graceful degradation
- cost-aware retry
- customer-facing delayed state
- admin visibility for degraded service

High-priority tasks may include:

- active customer conversations
- safety checks
- human review preparation
- billing-critical workflows
- enterprise SLA workflows

Low-priority tasks may include:

- batch summarization
- background enrichment
- non-urgent analytics generation
- bulk knowledge reindexing

## 35. Provider Error Taxonomy

Provider errors must be normalized.

Example categories:

```txt
authentication_error
permission_error
rate_limit_error
quota_exceeded
timeout
provider_unavailable
invalid_request
context_too_large
content_policy_block
structured_output_failed
safety_refusal
billing_error
region_not_supported
unknown_provider_error
```

Product code must not rely on provider-specific error strings.

## 36. Logging Policy

Model execution logs must be useful without exposing sensitive data.

Allowed by default:

- execution ID
- profile
- provider
- model
- prompt version
- latency
- token usage
- estimated cost
- redaction status
- safety status
- output validation status
- error category
- fallback used

Restricted:

- raw user input
- retrieved documents
- raw model output
- PII
- secrets
- integration payloads
- customer files

Raw content logging requires explicit policy approval and retention controls.

## 37. Redaction Policy

Ariyo must redact unnecessary sensitive data before model calls.

Redaction should apply to:

- API keys
- passwords
- tokens
- private keys
- credit card numbers
- government identifiers
- sensitive personal data
- confidential customer records when not needed

Redaction must not destroy required task context without fallback behavior.

## 38. Token and Context Management

Long-context models do not remove the need for context discipline.

Ariyo must:

- send only relevant context
- avoid dumping entire databases
- summarize safely where appropriate
- preserve source references
- enforce permission filtering before context assembly
- limit prompt bloat
- track token usage
- test context-window edge cases

## 39. Multilingual Strategy

Ariyo may serve multilingual customers.

Model profiles must account for:

- Persian quality
- English quality
- Arabic quality where relevant
- mixed-language business text
- brand terms
- names and proper nouns
- locale-specific tone
- right-to-left UI implications when outputs are shown

A model that performs well in English may not be acceptable for Persian business workflows.

## 40. Regional and Data Residency Strategy

Some customers may require regional data handling.

Ariyo must track:

- provider processing regions
- customer regional policy
- feature eligibility by region
- fallback provider regional compatibility
- data transfer risk

If a model route violates region policy, it must be blocked.

## 41. Fine-Tuning Policy

Fine-tuning must be used cautiously.

Ariyo must not fine-tune on customer data without explicit contractual, privacy, and technical approval.

Fine-tuning may be considered for:

- internal classification
- style adaptation using non-sensitive data
- domain-specific extraction
- low-risk templates

Fine-tuning must not be used as a shortcut for:

- leaking customer data into shared models
- replacing RAG permissions
- bypassing evaluation
- reducing need for human review

## 42. Caching Policy

Caching may reduce latency and cost, but must be privacy-safe.

Cache types:

```txt
prompt_response_cache
embedding_cache
retrieval_cache
safety_classification_cache
provider_metadata_cache
```

Rules:

- Cache keys must include tenant boundaries.
- Sensitive outputs must not be shared across organizations.
- Cached answers must respect knowledge freshness.
- Cache invalidation must follow data deletion and document updates.
- Cached outputs must not bypass current safety policy.

## 43. Batch Processing Policy

Batch model processing may be used for:

- knowledge ingestion
- evaluation runs
- analytics summaries
- bulk classification
- offline enrichment

Batch processing must:

- respect budgets
- respect tenant isolation
- support cancellation
- support retries
- record partial failures
- avoid blocking interactive capacity

## 44. Streaming Policy

Streaming may improve UX but creates validation challenges.

Streaming is appropriate for:

- draft generation
- long answers
- internal assistant responses
- non-actionable previews

Streaming is risky for:

- tool calls
- billing-sensitive outputs
- legal/compliance summaries
- safety-sensitive content
- structured outputs requiring validation

If streamed content later fails safety validation, the UI must handle correction safely.

## 45. Human Review Interaction

Model route selection must respect human review governance.

High-risk outputs may require:

- draft-only mode
- confidence explanation
- supporting evidence
- reviewer approval
- immutable pre-approval snapshot
- audit record

The model must not decide to skip human review for high-risk categories.

## 46. Model Confidence Policy

Models do not provide reliable native confidence by default.

Ariyo must not treat a model's self-reported confidence as truth.

Confidence should be derived from:

- retrieval quality
- output validation
- eval performance
- task risk
- data completeness
- disagreement between checks
- tool validation results

## 47. Hallucination Control

Ariyo must reduce hallucination through product architecture.

Controls:

- RAG grounding
- retrieval references
- refusal when context is insufficient
- structured output constraints
- post-generation verification
- human review for high-risk output
- no unsupported claims in customer-facing text
- prompt instructions against fabrication

A better model is not a complete hallucination strategy.

## 48. Prompt Injection Defense

Model provider strategy must assume prompt injection attempts.

Defenses:

- separate system/developer/user/retrieved content roles
- never treat retrieved text as instructions
- tool-call validation outside the model
- sensitive data minimization
- provider-independent safety checks
- suspicious content detection
- constrained tool schemas
- allowlist tools by AI employee role

Prompt injection defense must not rely only on asking the model to ignore malicious instructions.

## 49. Provider-Specific Behavior Isolation

Providers may differ in:

- tool-calling syntax
- JSON behavior
- refusals
- safety policies
- tokenization
- context limits
- latency patterns
- error codes
- streaming behavior

Ariyo must isolate these differences inside provider adapters.

Product logic must not depend on provider quirks.

## 50. Provider Adapter Contract

Each provider adapter must implement a consistent internal interface.

Example methods:

```txt
run_chat_completion
run_structured_output
run_embedding
run_rerank
run_moderation
stream_response
estimate_cost
normalize_error
supports_capability
check_health
```

Adapters must not leak provider-specific response shapes outside the gateway.

## 51. Health Checks

Provider health must be measured continuously.

Metrics:

- availability
- latency p50/p95/p99
- error rate
- timeout rate
- rate-limit rate
- structured output failure rate
- safety refusal rate
- cost per successful task
- fallback activation rate

Health must be tracked by provider, model, profile, and region where relevant.

## 52. Observability Events

Ariyo should emit events such as:

```txt
model.execution.started
model.execution.succeeded
model.execution.failed
model.execution.fallback_used
model.execution.validation_failed
model.execution.safety_blocked
model.execution.timeout
model.execution.rate_limited
model.route.changed
model.provider.degraded
model.provider.disabled
model.evaluation.completed
model.cost.threshold_reached
```

Events must not include raw sensitive content.

## 53. Product Analytics

Model analytics must help improve product outcomes.

Track:

- AI employee success by model profile
- customer-facing response acceptance
- human review approval rate
- edit distance after review
- workflow success rate
- customer trust signals
- escalation rate
- knowledge insufficiency rate
- fallback impact on outcome

Avoid optimizing only for token volume or usage.

## 54. Pricing and Monetization Implications

Model costs affect pricing.

Ariyo must understand:

- cost per AI employee
- cost per workflow
- cost per conversation
- cost per document indexed
- cost per active customer
- cost per plan
- gross margin by plan
- enterprise custom provider costs

Unlimited AI usage must not be offered without strong safeguards.

## 55. Trial and Free Usage Strategy

Trial usage must be controlled.

Rules:

- use lower-cost routes where safe
- limit expensive profiles
- throttle abuse
- show upgrade prompts based on value
- protect safety checks from cost controls
- avoid exposing enterprise-grade expensive processing by default

## 56. Enterprise Provider Strategy

Enterprise customers may request specific model provider terms.

Ariyo should support:

- enterprise-approved provider list
- custom provider restrictions
- private model route configuration
- audit metadata export
- data retention configuration
- regional model eligibility
- dedicated capacity options when justified

Enterprise controls must be backed by backend enforcement.

## 57. BYO Provider Policy

Ariyo may eventually support Bring Your Own Provider.

BYO provider must require:

- admin permission
- secure credential storage
- provider compatibility checks
- test execution
- safety profile compatibility
- cost warning
- liability clarification
- audit metadata
- fallback policy

BYO provider must not bypass Ariyo safety, permission, or audit systems.

## 58. Open-Source Model Policy

Open-source models may be useful, but require governance.

Review required:

- license
- model provenance
- training data concerns
- benchmark reliability
- safety performance
- infrastructure cost
- patch cadence
- vulnerability exposure
- deployment isolation

Open-source does not automatically mean safe, private, or cheap.

## 59. Local Model Security

If Ariyo self-hosts models:

- isolate runtime infrastructure
- protect model serving endpoints
- restrict network access
- monitor GPU utilization
- patch inference servers
- secure model artifacts
- scan containers
- prevent unauthorized model downloads
- log only safe metadata

Self-hosted models are infrastructure, not just files.

## 60. Model Governance Committee

Ariyo should define an internal owner group for model decisions.

Responsibilities:

- approve providers
- approve model profiles
- approve high-risk routes
- review eval results
- review incidents
- approve major upgrades
- maintain deprecation plans
- coordinate with legal/security/product

In early stage, this can be a small cross-functional decision group.

## 61. Change Management

Any model route change must include:

```txt
why_change
profiles_affected
customers_affected
expected_quality_delta
expected_cost_delta
expected_latency_delta
safety_impact
evaluation_results
rollback_plan
release_plan
owner
approval
```

High-impact changes must not be merged without approval.

## 62. Rollback Policy

Every critical model route must have rollback.

Rollback must include:

- previous provider/model
- previous prompt version
- previous parser/schema behavior
- previous safety config
- known migration issues
- rollback trigger conditions

Rollback must be tested for high-risk profiles.

## 63. Deprecation Policy

When retiring a provider/model:

- identify dependent profiles
- evaluate replacement
- update routes
- notify affected teams/customers if needed
- run regression tests
- monitor after migration
- remove credentials when no longer needed
- update documentation

Provider deprecation must not break customer workflows silently.

## 64. Security Threats Specific to Providers

Ariyo must account for:

- stolen provider API keys
- prompt injection causing data exfiltration
- malicious file content influencing model output
- provider credential misuse
- runaway token consumption
- denial of wallet attacks
- model output triggering unsafe tools
- provider outage cascading to product outage
- data sent to unapproved provider
- logs leaking prompts or outputs
- model upgrade regression

Security controls must exist outside the model.

## 65. Secrets Management

Provider secrets must:

- be stored in secure secret management
- never be committed to code
- never be exposed to frontend
- never be stored in localStorage
- rotate periodically
- rotate immediately after suspected exposure
- be scoped by environment
- support provider-specific least privilege where possible

## 66. Environment Separation

Development, staging, and production must use separate provider credentials.

Rules:

- production customer data must not be sent from development environments
- staging must use synthetic or approved test data
- evaluation datasets must follow data governance
- test provider keys must have limited budgets
- dev mistakes must not create production cost spikes

## 67. Testing Requirements

Provider strategy tests must include:

### Unit Tests

- route selection
- provider eligibility
- error normalization
- budget checks
- redaction
- schema validation

### Integration Tests

- provider adapter behavior
- timeout handling
- retry behavior
- fallback behavior
- rate-limit handling
- structured output validation

### E2E Tests

- customer-facing AI response
- workflow planning
- human review route
- RAG answer generation
- provider outage simulation
- budget exceeded flow

### Security Tests

- prompt injection
- data exfiltration attempt
- provider disabled by policy
- secret leakage prevention
- tenant isolation
- unsafe tool-call proposal

### Evaluation Tests

- golden set regression
- model comparison
- prompt version comparison
- cost/latency analysis

## 68. Frontend Rules

Frontend must not know provider details unless necessary for admin transparency.

Frontend may show:

- AI processing state
- degraded mode
- retry option
- human review required
- admin provider controls
- enterprise allowed provider settings
- usage/cost summaries

Frontend must not show:

- provider raw errors
- internal prompt text
- raw policy flags confusingly
- provider secrets
- hidden chain-of-thought
- unsupported safety guarantees

## 69. Backend Rules

Backend must enforce:

- provider routing
- organization policies
- budget limits
- permission checks
- data redaction
- safety profile
- output validation
- fallback behavior
- logging metadata
- audit trail

Backend must not trust frontend-selected model/provider values.

## 70. API Contract Rules

APIs must not expose provider internals casually.

Good public abstractions:

```txt
aiProfile
executionStatus
reviewRequired
estimatedUsage
qualityStatus
fallbackUsed
```

Avoid exposing:

```txt
raw provider response
provider secret IDs
unvalidated model names from client
raw prompts
raw chain-of-thought
```

## 71. Admin Console Requirements

Admin users may need visibility into model behavior.

Admin console should provide:

- usage by AI employee
- cost by AI employee
- model profile usage
- provider health summary
- allowed provider settings for enterprise
- budget limits
- recent model incidents
- failed execution summaries
- audit export metadata

Admin console must not expose sensitive raw prompts by default.

## 72. Developer Workflow

When adding a model-powered feature, developers must define:

1. Model profile
2. Prompt template version
3. Input schema
4. Output schema
5. Risk level
6. Safety profile
7. Evaluation set
8. Cost expectation
9. Fallback behavior
10. Logging policy
11. Human review behavior

No AI feature should ship with only a prompt string.

## 73. Product Requirement Checklist

Every AI-powered product requirement must answer:

```txt
What business outcome does this model call serve?
What profile does it use?
What data is sent?
What data is not sent?
What provider/model route is allowed?
What happens if the provider fails?
What happens if output is invalid?
What happens if confidence is low?
What is the human review rule?
What is the cost limit?
What is the customer-facing promise?
How will quality be measured?
```

## 74. Model Provider Decision Matrix

A provider/model should be scored on:

```txt
quality: 0-5
safety: 0-5
privacy: 0-5
latency: 0-5
cost_efficiency: 0-5
reliability: 0-5
structured_output: 0-5
rag_groundedness: 0-5
tool_calling: 0-5
compliance_readiness: 0-5
enterprise_acceptability: 0-5
```

A low score in privacy, safety, or reliability may block production use regardless of total score.

## 75. Minimum Production Readiness Standard

A model route is production-ready only if:

- provider is approved
- model is approved
- profile is defined
- prompt is versioned
- input/output schemas exist
- safety profile exists
- fallback behavior exists
- logging policy exists
- budget policy exists
- evals pass
- rollback exists
- monitoring exists

## 76. Forbidden Patterns

Never do the following:

```txt
Call model providers directly from frontend.
Expose provider API keys to browser code.
Hardcode model names in UI components.
Use provider-specific response shapes across product code.
Route customer data to unapproved providers.
Use a new model in production without evaluation.
Silently upgrade critical model routes.
Silently downgrade high-risk tasks.
Treat model self-confidence as truth.
Let model output execute tools directly.
Use fallback providers that violate customer policy.
Store raw prompts and outputs without retention policy.
Log secrets or PII in model traces.
Send entire customer databases to a model for convenience.
Use long context as a substitute for retrieval design.
Use fine-tuning on customer data without explicit approval.
Use one cheap model for all tasks.
Use one premium model for all tasks without cost controls.
Ignore provider outage planning.
Ignore token/cost attribution.
Show raw provider errors to users.
Let prompt changes ship without versioning.
Let evaluation data contain unapproved customer data.
Use provider safety features as the only safety layer.
Assume model behavior is stable forever.
```

## 77. Red Flags

A model feature needs review if it:

- sends sensitive data to a provider
- affects customer-facing responses
- triggers tools or integrations
- changes billing or plan access
- summarizes legal/compliance/security content
- makes recommendations that could affect business decisions
- uses untested fallback
- requires long context
- uses a new provider
- changes a high-volume route
- increases cost significantly
- affects enterprise customers

## 78. Launch Checklist

Before launching a model-powered feature:

```txt
[ ] Model profile defined
[ ] Provider route approved
[ ] Prompt versioned
[ ] Input schema defined
[ ] Output schema defined
[ ] Safety profile attached
[ ] Data classification reviewed
[ ] Redaction reviewed
[ ] Cost estimate completed
[ ] Budget rule configured
[ ] Fallback rule configured
[ ] Provider error behavior tested
[ ] Timeout behavior tested
[ ] Evaluation set passed
[ ] Human review behavior tested
[ ] Logging policy configured
[ ] Audit metadata configured
[ ] Rollback plan ready
[ ] Product copy avoids overclaims
[ ] Enterprise restrictions considered
```

## 79. Incident Response

Model provider incidents may include:

- provider outage
- provider latency degradation
- provider cost spike
- unsafe outputs
- prompt injection bypass
- data sent to wrong provider
- model route misconfiguration
- output schema regression
- unexpected model behavior after provider update

Incident response must include:

- stop/kill switch if needed
- route rollback
- affected execution identification
- customer impact assessment
- data exposure assessment
- cost impact assessment
- postmortem
- evaluation update

## 80. Customer Communication Principles

Ariyo must communicate model/provider behavior carefully.

Do say:

- AI features are governed by safety, privacy, and review controls.
- Enterprise controls can restrict allowed providers when supported.
- Some AI tasks may use different model routes based on quality, cost, and safety.
- Sensitive tasks may require human review.

Do not say:

- The AI is always correct.
- The system is impossible to bypass.
- A model never hallucinates.
- All providers behave identically.
- Data is never processed by third parties unless contract/product truly guarantees it.

## 81. Golden Rule

The model provider is not the product.

Ariyo's product quality comes from controlled orchestration, scoped context, safe tools, strong evaluation, human review, observability, privacy, and clear customer outcomes.

The model is only one component inside that system.

## 82. Final Rule

Any Ariyo feature that uses AI must be able to answer:

```txt
Why this model?
Why this provider?
Why this data?
Why this cost?
Why this level of autonomy?
Why this fallback?
Why is this safe enough for the customer?
```

If the team cannot answer those questions, the feature is not ready.
