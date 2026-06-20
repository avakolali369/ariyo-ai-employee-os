# Ariyo AI Cost Control Skill

## 1. Purpose

This skill defines how Ariyo controls, attributes, limits, forecasts, explains, and optimizes AI-related costs across the platform.

Ariyo is an AI Employee Operating System. Its AI employees may use models, embeddings, retrieval, tools, workflows, integrations, file processing, background jobs, evaluations, and automation. Without a formal cost-control system, AI usage can become unpredictable, unprofitable, unfair to customers, and dangerous for product reliability.

This file exists so that Ariyo can offer multiple pricing and intelligence levels while protecting customers and the company from uncontrolled AI spend.

## 2. Core Contract

Ariyo AI cost control is not a billing afterthought.

Ariyo AI cost control is the operating system that decides how much intelligence an AI employee may use, when it may spend more, when it must optimize, when it must throttle, when it must downgrade, when it must ask for approval, and how cost is attributed to organizations, AI employees, workflows, integrations, users, and plans.

Ariyo must make AI cost predictable for customers and economically sustainable for the business.

## 3. Related Skills

This skill must be used together with:

- `product-strategy.md`
- `monetization-billing.md`
- `model-provider-strategy.md`
- `ai-employee-architecture.md`
- `workflow-automation.md`
- `knowledge-rag.md`
- `prompt-tool-orchestration.md`
- `ai-safety-evaluation.md`
- `product-analytics-growth.md`
- `customer-success-playbooks.md`
- `enterprise-readiness.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `deployment-ops.md`
- `frontend-state-data.md`
- `api-contracts.md`

## 4. Cost Control Philosophy

Ariyo must treat AI cost as a product behavior, not as an accounting report.

The product must guide customers toward the right level of intelligence for their business value.

Cost control must optimize for:

1. predictable customer billing
2. healthy gross margin
3. fair usage across organizations
4. stable AI employee performance
5. plan-based differentiation
6. intelligent routing by task complexity
7. safe throttling instead of sudden failure
8. measurable ROI per AI employee
9. visibility for admins
10. protection from abuse, loops, and runaway automation

Ariyo must never allow an AI employee, workflow, integration, or background job to create unbounded AI spend.

## 5. Plan Intelligence Levels

Ariyo must support three primary AI cost-control levels:

```txt
Basic
Pro
Smart
```

These are not only pricing labels. They are operational policy profiles that control model quality, workflow depth, automation limits, memory/retrieval behavior, review gates, throttling behavior, and optimization strategy.

## 6. Plan Positioning

### 6.1 Basic

Basic is the entry-level AI employee plan.

It is optimized for:

- low predictable cost
- simple AI employee usage
- limited automation
- limited knowledge retrieval
- conservative model routing
- strict usage caps
- small businesses testing Ariyo
- users who need help but not deep autonomous reasoning

Basic must feel useful, not cheap or broken.

Basic should avoid high-cost behaviors by default.

### 6.2 Pro

Pro is the professional operating plan.

It is optimized for:

- reliable daily business use
- richer knowledge retrieval
- more workflow execution
- better model routing
- larger usage limits
- useful admin controls
- team-level visibility
- customer support and sales operations
- businesses that depend on AI employees for recurring work

Pro is the default serious business plan.

### 6.3 Smart

Smart is the advanced intelligence plan.

It is optimized for:

- higher quality reasoning
- more autonomous workflows
- multi-step tool use
- deeper context windows
- more advanced retrieval
- proactive recommendations
- higher workflow complexity
- stronger evaluations
- premium routing to better models where justified
- higher value outcomes with higher cost exposure

Smart is more intelligent and more expensive for the customer.

Smart must never mean unlimited spend.

Smart must mean higher intelligence with stronger cost governance.

## 7. Plan Control Matrix

Ariyo should define plan behavior through policy, not hardcoded UI assumptions.

| Control Area | Basic | Pro | Smart |
|---|---|---|---|
| Model quality | economy/default models | balanced models | premium/adaptive models |
| Task routing | simple routing | complexity-aware routing | value-aware multi-model routing |
| Context depth | short context | medium context | extended context when justified |
| RAG retrieval | limited chunks | expanded chunks | adaptive retrieval and reranking |
| Workflow depth | short workflows | medium workflows | advanced multi-step workflows |
| Tool calls | strict cap | higher cap | dynamic cap with safeguards |
| Background jobs | limited | scheduled | higher frequency with budget guards |
| Human review | frequent for risky actions | policy-based | risk/cost/value-based |
| Cost visibility | simple usage bar | employee/workflow breakdown | advanced attribution and forecasting |
| Alerts | basic thresholds | configurable alerts | predictive alerts and anomaly detection |
| Throttling | strict | graduated | intelligent degradation |
| Model downgrade | aggressive | balanced | quality-preserving downgrade |
| Caching | standard | extended | semantic and workflow-aware caching |
| Cost approvals | low threshold | medium threshold | high but controlled threshold |

## 8. Core Cost Objects

Ariyo must model AI cost with explicit entities.

Recommended core entities:

```txt
AIUsageEvent
AICostLedgerEntry
AIBudget
AIUsageLimit
AIPlanPolicy
AIEmployeeCostProfile
WorkflowCostProfile
ModelCostProfile
ProviderCostProfile
CostAttributionRule
CostAlertRule
CostAnomaly
CostOptimizationRecommendation
CostApprovalRequest
UsageThrottleEvent
ModelDowngradeEvent
CacheHitEvent
CostForecast
```

Every AI-related operation must produce enough metadata to answer:

```txt
Who caused this cost?
Which organization paid for it?
Which AI employee used it?
Which workflow caused it?
Which model/provider was used?
Was the usage allowed by plan policy?
Was the usage cached?
Was the model downgraded?
Was the cost expected?
Did the usage produce value?
```

## 9. Cost Attribution Dimensions

Ariyo must attribute AI cost across multiple dimensions:

- organization
- workspace
- plan
- billing account
- user
- AI employee
- AI employee role
- workflow
- workflow step
- integration
- knowledge source
- model provider
- model profile
- feature
- channel
- request type
- environment
- customer segment

Ariyo must not aggregate all AI costs into a single organization-level number only.

## 10. Cost Event Requirements

Every AI call must generate an internal usage event.

A usage event should include:

```txt
usage_event_id
organization_id
workspace_id
user_id
ai_employee_id
workflow_id
workflow_step_id
integration_id
feature_key
provider_key
model_key
model_profile
plan_tier
input_token_count
output_token_count
cached_input_token_count
embedding_token_count
retrieval_chunk_count
tool_call_count
latency_ms
provider_cost_estimate
internal_cost_estimate
customer_billable_units
cost_currency
cost_policy_version
safety_policy_version
prompt_version
response_schema_version
cache_status
routing_decision
fallback_used
model_downgrade_used
throttle_status
review_required
request_status
created_at
```

For privacy, usage events must not store raw prompts, raw responses, secrets, tokens, credentials, or sensitive customer data unless an approved secure debugging policy allows limited redacted retention.

## 11. Budget Types

Ariyo must support multiple budget scopes.

### 11.1 Organization Budget

The total AI cost budget for an organization within a billing period.

Required controls:

- monthly budget
- daily soft budget
- hard stop threshold
- warning threshold
- plan default budget
- custom admin budget
- overage behavior
- rollover policy if offered

### 11.2 AI Employee Budget

The budget assigned to a specific AI employee.

Useful for:

- limiting experimental employees
- prioritizing mission-critical employees
- controlling high-volume support agents
- identifying expensive employees
- tying spend to business outcomes

### 11.3 Workflow Budget

The budget assigned to a workflow or automation.

Important because workflows can loop, retry, fan out, or process many records.

### 11.4 Integration Budget

The budget assigned to a connected channel or source.

Examples:

- website chat
- WhatsApp
- email
- helpdesk
- CRM sync
- file ingestion
- knowledge refresh

### 11.5 User Budget

The budget assigned to a user or team.

This should be available especially for enterprise customers.

### 11.6 Feature Budget

The budget assigned to product features.

Examples:

- AI employee chat
- knowledge ingestion
- workflow execution
- evaluation runs
- summarization
- analytics insights
- lead qualification
- support replies

## 12. Budget Policy by Plan

### 12.1 Basic Budget Policy

Basic must use conservative budgets.

Required behavior:

- strict monthly included usage
- strict per-day soft limit
- strict per-request max cost
- low workflow execution cap
- low tool-call cap
- no advanced autonomous loops
- no premium model by default
- no high-frequency background jobs
- automatic downgrade before threshold
- automatic throttling near budget limit
- clear upgrade prompts when limits are reached

Basic must prevent accidental high spend even if the customer misconfigures an AI employee.

### 12.2 Pro Budget Policy

Pro must provide flexible but controlled budgets.

Required behavior:

- larger monthly included usage
- configurable organization budget
- configurable AI employee budgets
- workflow-level caps
- alert thresholds
- balanced model routing
- controlled fallback to higher-quality models
- admin-visible cost breakdown
- optional overage controls
- graduated throttling
- cost optimization recommendations

Pro must support serious business operations without surprise charges.

### 12.3 Smart Budget Policy

Smart must provide higher intelligence with advanced cost governance.

Required behavior:

- larger included usage or premium credit pool
- adaptive model routing
- value-aware spending
- predictive budget forecasting
- anomaly detection
- high-cost action approval gates
- premium model eligibility rules
- advanced caching
- background reasoning caps
- workflow cost simulation before deployment
- per-outcome ROI tracking
- cost-aware autonomous planning
- budget burn-rate alerts
- intelligent degradation instead of hard failure where safe

Smart may spend more only when there is a product reason and a policy reason.

Smart must not silently spend more because a prompt is longer or a workflow is poorly designed.

## 13. Usage Limits

Ariyo must define usage limits as product policies.

Limit types:

```txt
monthly_ai_credit_limit
daily_ai_credit_limit
hourly_request_limit
per_minute_request_limit
per_employee_request_limit
per_workflow_run_limit
per_workflow_step_limit
per_user_limit
per_channel_limit
per_integration_limit
per_file_ingestion_limit
per_knowledge_refresh_limit
per_eval_run_limit
per_tool_call_limit
per_conversation_limit
per_session_limit
```

Limits must be enforced backend-side.

Frontend may display limits but must never be the source of enforcement.

## 14. Suggested Relative Limit Strategy

Ariyo should use relative policy classes instead of embedding public numeric promises in engineering code.

Recommended classes:

```txt
low
standard
high
premium
custom
```

Plan mapping:

```txt
Basic -> low
Pro -> standard/high depending on feature
Smart -> high/premium with safeguards
Enterprise -> custom with contract rules
```

Public pricing pages may show customer-facing numbers, but backend policies should reference versioned plan rules.

## 15. Per-Employee Cost Control

Each AI employee must have a cost profile.

A cost profile should define:

- monthly budget
- daily budget
- maximum cost per task
- maximum model tier
- maximum context size
- maximum retrieval depth
- maximum workflow depth
- maximum tool calls
- fallback policy
- downgrade policy
- review threshold
- allowed features by plan
- cost owner
- alert recipients

### 15.1 Basic AI Employee Cost Profile

Basic employees should:

- use economy/default models
- use limited context
- retrieve fewer knowledge chunks
- execute short workflows
- avoid premium reasoning
- require review for expensive actions
- stop or ask upgrade when budget is exhausted

### 15.2 Pro AI Employee Cost Profile

Pro employees should:

- use balanced models
- retrieve enough context for quality
- execute practical workflows
- allow moderate tool use
- provide cost breakdowns
- support admin-configurable budgets
- warn before budget exhaustion

### 15.3 Smart AI Employee Cost Profile

Smart employees should:

- use adaptive model routing
- spend more on high-value tasks
- use deeper context when needed
- perform advanced reasoning under policy
- request approval for unusually expensive plans
- show cost/value reasoning to admins
- optimize after repeated expensive patterns

## 16. Per-Workflow Cost Control

Every workflow must have a cost profile before it can be deployed.

Workflow cost profile fields:

```txt
estimated_cost_per_run
maximum_cost_per_run
maximum_runs_per_period
maximum_parallel_runs
maximum_retry_cost
maximum_tool_calls
maximum_model_calls
maximum_records_per_run
maximum_fanout
budget_scope
allowed_plan_tiers
requires_cost_approval
cost_owner
cost_alert_policy
```

A workflow must not be deployed if its worst-case cost is unknown.

## 17. Workflow Cost Simulation

Before deployment, Ariyo should simulate workflow cost.

Simulation should estimate:

- minimum cost
- average cost
- worst-case cost
- cost per record
- cost per successful outcome
- retry cost
- model call count
- tool call count
- integration API cost if known
- expected latency
- failure cost

### Required by Plan

Basic:

- simple estimate
- strict allowed workflow types

Pro:

- workflow-level cost preview
- warning for expensive steps

Smart:

- advanced simulation
- scenario comparison
- recommended optimization
- ROI-based approval guidance

## 18. Alerts

Ariyo must provide cost alerts that are understandable and actionable.

Alert types:

```txt
budget_warning
budget_exceeded
burn_rate_high
employee_cost_spike
workflow_cost_spike
provider_cost_spike
model_fallback_spike
cache_miss_spike
retry_loop_detected
integration_event_spike
knowledge_ingestion_spike
usage_anomaly
unprofitable_usage_pattern
```

### Basic Alerts

Basic should show:

- usage nearing limit
- limit reached
- upgrade available
- expensive feature blocked

### Pro Alerts

Pro should show:

- organization budget alerts
- AI employee budget alerts
- workflow budget alerts
- unusual usage alerts
- admin email/in-app notifications

### Smart Alerts

Smart should show:

- predictive budget exhaustion
- anomaly detection
- optimization recommendations
- value/cost mismatch alerts
- high-cost automation approval prompts
- smart downgrade explanations

## 19. Throttling Policy

Ariyo must throttle usage before cost becomes unsafe.

Throttling types:

```txt
soft_throttle
hard_throttle
feature_throttle
employee_throttle
workflow_throttle
integration_throttle
organization_throttle
provider_throttle
smart_degradation
```

### 19.1 Soft Throttle

Soft throttle should reduce cost while keeping the product usable.

Examples:

- smaller context window
- fewer retrieval chunks
- cheaper model profile
- lower workflow frequency
- delayed background jobs
- batch processing
- cached answer preference

### 19.2 Hard Throttle

Hard throttle should stop unsafe usage.

Examples:

- budget exhausted
- suspected runaway loop
- provider cost anomaly
- abuse detected
- missing payment
- expired trial
- security incident

### 19.3 Plan Behavior

Basic:

- throttle early
- block expensive tasks
- show upgrade path

Pro:

- throttle gradually
- allow admin adjustment
- preserve critical workflows when possible

Smart:

- degrade intelligently
- preserve high-value tasks
- pause low-value background jobs
- ask for approval for costly operations

## 20. Model Downgrade Policy

Ariyo must support safe model downgrades.

Downgrade must be policy-driven and logged.

Downgrade triggers:

- budget threshold reached
- low-risk task
- high volume repetitive task
- cache miss pattern
- provider cost spike
- provider rate limits
- admin cost-saving mode
- trial mode
- non-critical workflow

Downgrade must not be used for:

- high-risk safety decisions
- security-sensitive review
- legal/compliance-facing output
- billing-critical output
- customer-facing message where quality threshold is not met
- tasks requiring structured accuracy beyond cheaper model capability

## 21. Model Upgrade Policy

Smart may upgrade models when justified.

Upgrade triggers:

- high-value customer-facing task
- complex reasoning
- low confidence
- failed cheaper model evaluation
- important workflow step
- human review escalated
- enterprise policy allows premium routing

Every upgrade must have:

- reason
- plan eligibility
- max cost
- expected value
- fallback behavior
- logging

Smart model upgrades must be governed, not automatic indulgence.

## 22. Caching Strategy

Caching is a primary cost-control mechanism.

Ariyo should support several cache types:

```txt
prompt_response_cache
semantic_cache
retrieval_cache
embedding_cache
knowledge_chunk_cache
workflow_step_cache
tool_result_cache
integration_resource_cache
evaluation_result_cache
classification_cache
summary_cache
```

## 23. Cache Rules

Caching must respect:

- organization isolation
- permission scope
- data sensitivity
- freshness requirements
- user role
- knowledge source version
- integration resource version
- prompt version
- model version
- safety policy version

Ariyo must never serve cached content across organizations.

Ariyo must never serve stale or unauthorized knowledge because it reduces cost.

## 24. Caching by Plan

### Basic

Basic should use:

- standard response caching
- embedding cache
- common task cache
- conservative freshness

### Pro

Pro should use:

- semantic cache
- workflow step cache
- retrieval cache
- integration resource cache
- admin-visible cache savings

### Smart

Smart should use:

- advanced semantic cache
- adaptive retrieval cache
- cost-aware workflow cache
- safe reuse of intermediate reasoning artifacts where allowed
- cost/value optimization recommendations based on cache misses

Smart cache must improve both quality and cost, not only reduce spend.

## 25. Cost Attribution UI

Ariyo admin UI must make AI cost understandable.

Required views:

- total AI usage this period
- budget remaining
- projected end-of-period usage
- cost by AI employee
- cost by workflow
- cost by integration
- cost by model/provider
- cost by feature
- cost by user/team
- alerts and anomalies
- optimization suggestions

### Basic UI

Basic should show:

- usage bar
- remaining usage
- simple limit explanation
- upgrade prompt

### Pro UI

Pro should show:

- cost by AI employee
- cost by workflow
- budget alerts
- trend charts
- admin controls

### Smart UI

Smart should show:

- predictive usage
- anomaly explanation
- ROI hints
- optimization recommendations
- value/cost comparison
- advanced controls by employee and workflow

## 26. Customer-Facing Cost Language

Cost copy must be transparent and calm.

Avoid:

```txt
Unlimited AI
No limits
Use as much as you want
Smart never throttles
Premium model always
No cost risk
```

Prefer:

```txt
Includes a monthly AI usage allowance.
We'll notify you before usage becomes unusually high.
Smart uses stronger reasoning when it adds business value.
Admins can control budgets per AI employee and workflow.
Ariyo may optimize model usage to protect performance and cost.
```

## 27. Cost Approval Gates

Certain actions must require approval if their estimated cost exceeds policy.

Approval gate examples:

- large file ingestion
- full knowledge reindex
- large batch workflow
- premium model run
- multi-step autonomous plan
- high-volume outbound messages
- large CRM enrichment job
- long conversation summarization batch
- organization-wide analytics insight generation

Plan behavior:

Basic:

- block or upgrade prompt

Pro:

- admin approval

Smart:

- cost/value summary + admin approval if threshold exceeded

## 28. Runaway Cost Prevention

Ariyo must detect and stop runaway usage.

Risk patterns:

```txt
workflow loop
retry storm
integration event flood
recursive tool calling
model output causing new model input endlessly
webhook replay
bot attack on chat widget
large accidental file upload
knowledge sync stuck retrying
provider timeout causing repeated fallback
agent planning excessive steps
```

Required protections:

- max workflow depth
- max retries
- max total cost per run
- idempotency keys
- loop detection
- event deduplication
- per-channel rate limits
- per-integration event caps
- retry backoff
- circuit breakers
- kill switches
- budget locks

## 29. AI Employee Planning Cost Policy

AI employees must estimate cost before executing complex plans.

For multi-step plans, Ariyo should require:

```txt
plan_steps
estimated_model_calls
estimated_tool_calls
estimated_cost
maximum_allowed_cost
budget_scope
risk_level
approval_required
```

Smart employees may plan more deeply, but they must still operate inside budget and safety limits.

## 30. Cost-Aware Tool Calling

Every AI tool call must have a cost classification.

Tool cost categories:

```txt
free_internal
low_cost_internal
metered_internal
provider_metered
integration_metered
high_cost_batch
high_risk_paid_action
```

Ariyo must not allow an AI employee to call expensive tools repeatedly without policy checks.

## 31. RAG Cost Control

Knowledge/RAG can create hidden costs through embedding, retrieval, reranking, summarization, and indexing.

Ariyo must control:

- file ingestion size
- chunk count
- embedding cost
- re-embedding frequency
- retrieval depth
- reranking eligibility
- summary generation
- knowledge refresh frequency
- duplicate content detection
- stale document handling
- permission-filtered retrieval

Plan behavior:

Basic:

- limited sources
- limited file size
- limited refresh
- limited retrieval depth

Pro:

- more sources
- scheduled refresh
- better retrieval depth
- duplicate detection

Smart:

- adaptive retrieval
- reranking when justified
- knowledge quality recommendations
- expensive reindex approval
- predictive knowledge cost alerts

## 32. Integration Cost Control

Integrations can generate cost through inbound events, sync, enrichment, and outbound actions.

Ariyo must control:

- webhook event volume
- sync frequency
- resource selection
- channel message volume
- CRM enrichment usage
- helpdesk ticket processing
- outbound reply generation
- calendar summarization
- file sync ingestion

Each integration must have:

- event limit
- sync budget
- AI processing policy
- throttling behavior
- retry policy
- cost attribution

## 33. Channel Cost Control

Channels must have specific guardrails.

### Website Chat

- per-session message cap
- bot detection
- anonymous user limits
- repeated question cache
- rate limits by IP/session
- upgrade prompt for heavy usage

### WhatsApp / Telegram / Messaging

- inbound event deduplication
- outbound message limits
- conversation summarization thresholds
- expensive reply review gates

### Email

- batch processing limits
- attachment ingestion control
- thread summarization limits
- outbound generation review for high-risk messages

### Helpdesk

- ticket volume controls
- priority-based model routing
- auto-reply caps
- escalation thresholds

## 34. Evaluation Cost Control

AI evaluations are necessary but can become expensive.

Ariyo must define:

- evaluation budget
- evaluation frequency
- sample size
- benchmark size
- model judge eligibility
- regression suite cost cap
- release gate evaluation cost
- customer-specific eval policy

Smart may run deeper evaluations, but only under release, customer success, safety, or enterprise value policies.

## 35. Background Job Cost Control

Background jobs must be cost-accounted.

Examples:

- knowledge refresh
- transcript summarization
- customer health analysis
- weekly insight generation
- workflow suggestions
- lead scoring
- support trend analysis
- quality evaluation

Required controls:

- schedule policy
- max run cost
- max records per run
- max retries
- queue priority
- budget scope
- pause rules
- alert rules

Basic should limit background jobs heavily.

Pro should allow scheduled jobs.

Smart should allow advanced jobs with predictive budget checks.

## 36. Cost Forecasting

Ariyo should forecast cost before the end of the billing period.

Forecast inputs:

- current burn rate
- historical usage
- active employees
- workflow frequency
- integration events
- knowledge refresh schedules
- seasonality if available
- plan changes
- trial behavior
- unusual spikes

Forecast outputs:

- projected usage
- projected overage
- threshold crossing date
- recommended actions
- risky employees/workflows
- upgrade recommendation if value supports it

Forecasting should be available at least for Pro and Smart.

Smart should include more advanced recommendations.

## 37. Cost Optimization Recommendations

Ariyo should recommend practical optimizations.

Examples:

- reduce retrieval depth for this employee
- cache repeated support answers
- change this workflow frequency
- batch this task once per day instead of hourly
- use cheaper model for classification step
- require human review before premium reasoning
- summarize large documents before indexing
- remove unused knowledge source
- pause expensive integration sync
- upgrade plan because current usage is consistently valuable

Recommendations must be specific and actionable.

## 38. Cost and ROI

Ariyo should connect cost to outcomes.

Possible ROI signals:

- tickets resolved
- leads qualified
- messages handled
- hours saved
- revenue assisted
- workflows completed
- manual reviews reduced
- customer response time improved
- knowledge gaps closed

Smart plan should make value/cost more visible.

Ariyo must avoid framing AI cost as only consumption. It should frame good AI usage as outcome investment.

## 39. Gross Margin Protection

Ariyo must protect gross margin.

Required controls:

- plan-level cost ceilings
- provider cost monitoring
- high-cost model usage caps
- internal margin dashboards
- unprofitable customer detection
- abuse detection
- feature profitability analysis
- enterprise custom pricing support
- cost-of-service reporting

Ariyo must not sell plans whose expected usage structurally loses money unless explicitly accepted as a strategic subsidy.

## 40. Trial Cost Control

Trials must be useful but protected.

Trial controls:

- trial AI credits
- trial-only model routing
- file ingestion limits
- workflow deployment limits
- integration processing limits
- abuse detection
- no unlimited anonymous usage
- conversion prompts at value moments

Trial must show value quickly without exposing Ariyo to open-ended AI spend.

## 41. Abuse Prevention

Cost abuse may be accidental or malicious.

Examples:

- scripted chat spam
- repeated large uploads
- prompt loops
- integration replay attacks
- trial farming
- account sharing
- scraping via AI chat
- using Ariyo as a cheap model proxy
- generating bulk content outside intended use

Required protections:

- rate limits
- CAPTCHA or bot detection where appropriate
- account verification
- org-level anomaly detection
- IP/session throttling
- provider gateway enforcement
- no direct model proxy endpoints
- terms-aligned usage monitoring

## 42. Plan Upgrade and Downgrade Behavior

### Upgrade

When a customer upgrades:

- apply new plan policy immediately or at billing boundary depending on contract
- preserve existing budgets unless admin changes them
- unlock higher controls clearly
- do not silently remove cost safeguards
- show what changed

### Downgrade

When a customer downgrades:

- explain impacted employees/workflows
- pause features that exceed plan policy
- preserve data if policy allows
- prevent surprise failures
- provide remediation checklist

Downgrade must not delete customer data unexpectedly.

## 43. Enterprise Custom Cost Controls

Enterprise customers may need custom policies.

Support:

- contract-level included usage
- custom budgets
- department budgets
- cost centers
- purchase orders
- overage approvals
- invoice reporting
- SSO/RBAC budget controls
- custom provider routing
- BYO provider where supported
- data residency or provider restrictions if offered

Enterprise custom controls must still use the same internal cost-control architecture.

## 44. Admin Permission Rules

Cost controls must integrate with permissions.

Only authorized roles should be able to:

- view organization-wide AI cost
- change budgets
- approve overages
- enable Smart-level routing
- deploy high-cost workflows
- run large ingestions
- configure provider preferences
- export cost reports
- change billing policies

Frontend must hide or disable unauthorized controls, but backend must enforce permission checks.

## 45. Cost States

Ariyo should represent cost states explicitly.

```txt
normal
approaching_limit
soft_limited
hard_limited
throttled
pending_approval
over_budget
payment_required
abuse_locked
admin_locked
provider_cost_spike
optimized
```

UI, API, workflows, and background jobs should use these states consistently.

## 46. API Requirements

Cost-related APIs should support:

- usage summary
- cost ledger query
- budget read/update
- employee cost profile read/update
- workflow cost simulation
- alert configuration
- anomaly review
- usage export
- forecast retrieval
- optimization recommendations

APIs must never expose provider secrets, raw prompts, raw responses, or sensitive internal margin data to unauthorized users.

## 47. Frontend Requirements

Frontend must:

- show budget status clearly
- explain throttling calmly
- display plan limits without shame language
- show upgrade prompts at value moments
- show admin controls only when allowed
- show cost breakdowns in useful groupings
- use skeleton/loading/error states
- avoid raw provider errors
- warn before expensive actions
- confirm high-cost workflow deployment

Frontend must not:

- calculate billable cost as source of truth
- enforce limits only client-side
- expose raw provider cost secrets
- imply unlimited AI usage
- hide budget exhaustion until failure

## 48. Backend Requirements

Backend must:

- enforce plan policies
- record usage events
- maintain cost ledger
- enforce budgets and limits
- route model calls through gateway
- enforce throttling
- produce alerts
- detect anomalies
- support idempotency
- prevent retry storms
- support audit logs
- support billing reconciliation

Backend must treat cost control as a critical reliability and security boundary.

## 49. Data Model Suggestions

### AIPlanPolicy

```txt
id
plan_tier
policy_version
included_usage_units
monthly_budget_default
daily_soft_limit
per_request_max_cost
model_profile_allowed
premium_model_allowed
max_context_policy
max_retrieval_policy
max_tool_calls
max_workflow_depth
background_job_policy
fallback_policy
throttle_policy
downgrade_policy
alert_policy
created_at
updated_at
```

### AICostLedgerEntry

```txt
id
organization_id
workspace_id
usage_event_id
billing_period_id
plan_tier
ai_employee_id
workflow_id
feature_key
provider_key
model_key
usage_units
internal_cost
billable_amount
currency
attribution_status
created_at
```

### AIBudget

```txt
id
organization_id
scope_type
scope_id
budget_period
soft_limit
hard_limit
current_usage
forecast_usage
currency
status
created_by
updated_by
created_at
updated_at
```

### AIUsageLimit

```txt
id
organization_id
scope_type
scope_id
limit_type
limit_value
current_value
window_type
window_started_at
status
policy_version
created_at
updated_at
```

## 50. Observability Metrics

Track:

- AI cost per organization
- AI cost per active AI employee
- AI cost per successful workflow
- AI cost per ticket resolved
- AI cost per lead qualified
- model cost by provider
- premium model usage ratio
- fallback usage ratio
- downgrade usage ratio
- cache hit ratio
- retry cost
- failed-call cost
- throttled request count
- budget exhaustion count
- cost anomalies
- gross margin by plan
- Smart plan value/cost ratio

## 51. Quality vs Cost Balance

Ariyo must not reduce cost in ways that damage customer trust.

Cost optimization must not:

- hallucinate more
- answer from stale knowledge
- ignore permissions
- skip safety checks
- degrade critical customer-facing tasks below acceptable quality
- hide uncertainty
- produce low-quality automation simply to save tokens

Cost optimization must be evaluated with quality metrics.

## 52. Smart Plan Intelligence Rules

Smart is the highest customer-facing intelligence level in this strategy.

Smart may use:

- premium models
- advanced reasoning
- deeper retrieval
- more tool calls
- more complex workflows
- stronger evaluations
- predictive insights
- proactive recommendations
- richer context memory
- adaptive model routing

Smart must also use:

- predictive budget checks
- high-cost approval gates
- anomaly detection
- value-aware routing
- cost transparency
- advanced cache optimization
- ROI visibility
- plan-specific safety gates

Smart must never become uncontrolled autonomy.

## 53. Basic Plan Guardrails

Basic must be protected from expensive patterns.

Basic should not allow:

- large autonomous workflows
- premium model routing by default
- large file batch ingestion
- high-volume channel automation
- deep multi-step agent planning
- frequent background analysis
- broad integration sync
- expensive evaluation runs

Basic should focus on narrow, useful, guided AI employee experiences.

## 54. Pro Plan Guardrails

Pro should support operational use while maintaining profitability.

Pro should allow:

- practical workflows
- balanced model quality
- useful integration processing
- admin budgets
- workflow cost preview
- employee-level cost controls
- configurable alerts

Pro should restrict:

- uncontrolled premium routing
- very large autonomous jobs
- high-cost repeated evaluation
- organization-wide batch processing without approval

## 55. Smart Plan Guardrails

Smart should allow stronger intelligence but only through governed execution.

Smart should allow:

- adaptive routing
- deeper context
- higher workflow complexity
- proactive insights
- premium reasoning when justified
- larger integrations and knowledge operations

Smart should restrict:

- silent high-cost execution
- repeated premium use without value signal
- AI-planned loops
- expensive batch jobs without forecast
- unsafe autonomous actions

## 56. Billing Integration

AI cost control must integrate with billing.

Required billing interactions:

- included usage consumption
- usage-based overage if offered
- plan upgrade/downgrade
- invoice line attribution
- credit allocation
- refund or adjustment support
- failed payment throttle policy
- trial credit expiration
- enterprise contracted usage

Billing should not be the only cost-control layer. Usage must be controlled before invoice generation.

## 57. Cost Reconciliation

Ariyo must reconcile provider usage with internal usage.

Reconciliation checks:

- provider invoice vs internal ledger
- model usage mismatch
- missing usage events
- failed calls charged by provider
- unexpected cost spikes
- provider pricing changes
- currency conversion if relevant
- attribution gaps

Unattributed AI cost is a product and finance bug.

## 58. Incident Response for Cost Spikes

Cost spike incidents must have runbooks.

Incident triggers:

- sudden provider bill increase
- runaway workflow
- integration event storm
- trial abuse
- cache failure
- model fallback storm
- pricing change mismatch
- bug in token counting

Response steps:

1. identify affected organizations
2. activate cost circuit breaker
3. pause risky workflows if needed
4. preserve critical customer operations where possible
5. inspect usage ledger
6. identify root cause
7. communicate if customer impact exists
8. reconcile billing impact
9. add regression guard

## 59. Testing Requirements

Ariyo must test cost control.

Required tests:

- plan policy enforcement
- budget threshold behavior
- soft throttle behavior
- hard throttle behavior
- per-employee budget enforcement
- per-workflow cost cap
- model downgrade path
- model upgrade approval path
- cache isolation
- cost event creation
- usage ledger accuracy
- retry storm prevention
- workflow loop detection
- integration event flood
- trial abuse limits
- billing reconciliation
- permission enforcement for budget updates

## 60. Release Gates

A feature that uses AI must not ship unless it answers:

```txt
What is the expected AI cost?
What is the worst-case AI cost?
Who pays for this cost?
Which plan allows it?
Which budget scope controls it?
Can it loop or retry?
Can it batch process many records?
Can it be abused?
Can it be cached?
Can it be downgraded safely?
How is usage attributed?
How is the customer alerted?
What happens when budget is exhausted?
```

## 61. Forbidden Patterns

Never implement:

```txt
unlimited AI usage without policy
model calls without cost ledger events
frontend-only cost enforcement
hardcoded plan limits inside React components
direct model provider calls outside gateway
AI workflows without max cost per run
retry loops without cost caps
webhook processing without event caps
background jobs without budgets
premium model routing without reason
Smart plan as unlimited model access
Basic plan that silently fails when usage is high
Pro plan without admin cost visibility
customer-facing unlimited claims
raw provider errors shown as cost failures
cache shared across organizations
cost optimization that ignores data permissions
AI employee autonomy without budget boundary
usage reports that cannot be reconciled with billing
unattributed provider spend
silent overage charging without product policy
```

## 62. Golden Rule

If Ariyo cannot explain, attribute, limit, forecast, and justify an AI cost, Ariyo must not allow that cost to happen automatically.

## 63. Final Rule

Ariyo must make Basic safe, Pro operational, and Smart intelligently powerful.

But every tier must remain governed.

The customer should feel that Ariyo is smart with both work and money.
