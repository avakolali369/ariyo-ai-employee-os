# Ariyo Marketplace Template Quality Benchmarking Skill

## 1. Core Contract

Ariyo Marketplace Template Quality Benchmarking is not a leaderboard of popular templates.

It is the governed benchmarking system that compares Marketplace templates, AI Employee assets, Agent Team templates, Workflow templates, Knowledge packs, GEO templates, Integration bundles, internal templates, and partner solutions against objective quality baselines, category expectations, customer outcomes, safety standards, cost efficiency, reliability, creator maturity, and enterprise readiness.

Ariyo must benchmark templates to improve customer trust, creator quality, Marketplace ranking, review governance, lifecycle optimization, and enterprise procurement confidence.

Ariyo must never use benchmarking to reward vanity metrics, manipulate creators, expose sensitive customer data, or unfairly compare templates across incompatible categories, plans, customer contexts, regions, or risk classes.

---

## 2. Purpose

This skill defines how Ariyo measures, compares, scores, reports, and operationalizes template quality benchmarks across the Marketplace.

The benchmarking system must answer:

- Is this template good compared with its category baseline?
- Is this template improving or degrading over time?
- Is this template safe enough for its declared use case?
- Is this template cost-efficient for its outcome?
- Does this template work reliably after install?
- Is this creator producing above-average or below-average quality assets?
- Is this template ready for Basic, Pro, Smart, or enterprise customers?
- Is this template better than comparable alternatives?
- Should this template rank higher, receive a badge, require improvement, be deprecated, or be blocked?
- Which quality dimensions are strong, weak, improving, or risky?

Benchmarking must support Marketplace growth without weakening quality governance.

---

## 3. Systems This Skill Depends On

This skill should work with:

- `template-quality-ranking-system.md`
- `marketplace-search-recommendation-engine.md`
- `marketplace-template-outcome-intelligence.md`
- `marketplace-template-health-monitoring.md`
- `marketplace-template-lifecycle-optimization.md`
- `marketplace-template-experimentation-system.md`
- `marketplace-template-dependency-registry.md`
- `marketplace-template-auto-remediation.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-simulation-sandbox.md`
- `ai-agent-observability-tracing.md`
- `ai-safety-evaluation.md`
- `quality-assurance-system.md`
- `marketplace-policy-enforcement-rules.md`
- `marketplace-trust-safety-operations.md`
- `marketplace-creator-success-system.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-compliance-evidence-center.md`

Benchmarking should be an input into ranking, review, creator coaching, procurement evidence, lifecycle optimization, and trust badges.

---

## 4. Benchmarking Principles

### 4.1 Compare Like With Like

Ariyo must not compare a simple Basic email assistant template directly with a Smart multi-agent sales automation system.

Benchmarks must be segmented by:

- Template category
- Template type
- Plan fit
- Risk class
- Automation level
- Customer segment
- Data sensitivity
- Integration complexity
- AI model dependency
- Region constraints
- Workflow criticality
- Business outcome type

### 4.2 Outcomes Beat Activity

A template with many runs but poor outcomes should not benchmark well.

A template with fewer runs but strong customer-confirmed outcomes, low incidents, and strong retention may benchmark better.

### 4.3 Safety Is Non-Negotiable

High business value cannot compensate for severe unsafe behavior.

Safety benchmark failures must cap or block quality scores.

### 4.4 Cost Efficiency Matters

A template that creates business value but consumes uncontrolled AI, integration, support, or operations cost must be benchmarked accordingly.

### 4.5 Benchmarks Must Be Explainable

Creators, customers, enterprise buyers, and internal operators should understand why a template receives a quality score, badge, warning, or improvement recommendation.

### 4.6 Benchmarks Must Not Leak Customer Data

Benchmarking must aggregate, anonymize, and permission-scope all customer-derived signals.

### 4.7 Benchmarks Must Be Version-Aware

A template version must not inherit the quality benchmark of an older version unless compatibility, behavior, dependencies, and evaluation results remain valid.

---

## 5. Benchmarking Objects

### 5.1 TemplateBenchmarkProfile

Represents the benchmark state for a template.

Required fields:

```ts
type TemplateBenchmarkProfile = {
  template_id: string;
  template_version_id: string;
  category_id: string;
  template_type: TemplateType;
  plan_fit: Array<'basic' | 'pro' | 'smart' | 'enterprise'>;
  risk_class: 'low' | 'medium' | 'high' | 'critical';
  benchmark_suite_ids: string[];
  category_baseline_id: string;
  quality_score: number;
  readiness_score: number;
  safety_score: number;
  outcome_score: number;
  cost_efficiency_score: number;
  reliability_score: number;
  creator_quality_score: number;
  enterprise_readiness_score: number;
  benchmark_status: BenchmarkStatus;
  last_benchmarked_at: string;
  next_benchmark_due_at?: string;
};
```

### 5.2 BenchmarkSuite

Defines a reusable benchmark suite.

```ts
type BenchmarkSuite = {
  id: string;
  name: string;
  category_id: string;
  applies_to_template_types: TemplateType[];
  applies_to_risk_classes: string[];
  applies_to_plans: string[];
  metrics: BenchmarkMetricDefinition[];
  minimum_pass_threshold: number;
  enterprise_threshold?: number;
  safety_blocking_rules: SafetyBlockingRule[];
  cost_thresholds: CostBenchmarkThreshold[];
  outcome_baselines: OutcomeBaseline[];
  version: string;
  owner_team: string;
};
```

### 5.3 CategoryBaseline

Defines normal performance expectations for a category.

```ts
type CategoryBaseline = {
  id: string;
  category_id: string;
  category_name: string;
  sample_size: number;
  median_activation_rate: number;
  median_successful_run_rate: number;
  median_time_to_first_value_hours: number;
  median_cost_per_successful_outcome: number;
  median_customer_retention_days: number;
  median_support_tickets_per_100_installs: number;
  median_incident_rate: number;
  p75_quality_score: number;
  p90_quality_score: number;
  calculated_at: string;
};
```

### 5.4 CreatorBenchmarkProfile

Compares creator quality over time.

```ts
type CreatorBenchmarkProfile = {
  creator_id: string;
  published_templates_count: number;
  benchmarked_templates_count: number;
  average_quality_score: number;
  average_safety_score: number;
  average_outcome_score: number;
  average_cost_efficiency_score: number;
  average_support_burden_score: number;
  category_strengths: string[];
  improvement_areas: string[];
  trust_tier: CreatorTrustTier;
  eligibility_for_featured_distribution: boolean;
  last_updated_at: string;
};
```

---

## 6. Benchmark Status Model

Allowed statuses:

```ts
type BenchmarkStatus =
  | 'not_benchmarked'
  | 'scheduled'
  | 'running'
  | 'passed'
  | 'passed_with_warnings'
  | 'needs_improvement'
  | 'failed'
  | 'blocked_by_safety'
  | 'blocked_by_data_quality'
  | 'blocked_by_low_sample_size'
  | 'expired'
  | 'deprecated';
```

Status rules:

- `not_benchmarked`: template has no benchmark profile yet.
- `scheduled`: benchmark job is queued.
- `running`: benchmark job is active.
- `passed`: template exceeds minimum baseline and no blocking issue exists.
- `passed_with_warnings`: template passes but has notable weaknesses.
- `needs_improvement`: template underperforms but is not unsafe.
- `failed`: template does not meet required quality baseline.
- `blocked_by_safety`: safety rules prevent positive benchmark status.
- `blocked_by_data_quality`: insufficient or corrupted signals.
- `blocked_by_low_sample_size`: too few installs, runs, or outcomes for fair comparison.
- `expired`: benchmark is stale and must be recalculated.
- `deprecated`: benchmark applies to a retired version.

---

## 7. Benchmark Dimensions

### 7.1 Activation Benchmark

Measures whether customers can reach value after install.

Signals:

- Install-to-activation rate
- Time to first successful run
- Setup completion rate
- Permission setup success
- Integration connection success
- Onboarding drop-off
- Required configuration completion
- First outcome achievement

Low activation may indicate:

- confusing setup
- missing dependencies
- unclear template promise
- poor documentation
- bad onboarding
- integration friction
- plan mismatch
- unrealistic requirements

### 7.2 Outcome Benchmark

Measures whether the template achieves its promised outcome.

Signals:

- Claimed outcome completion rate
- Customer-confirmed value
- Business KPI movement
- Before/after improvement
- Durable outcome retention
- Outcome recurrence
- Negative outcome rate
- Manual override rate
- Human rejection rate

Outcome benchmark must integrate with `marketplace-template-outcome-intelligence.md`.

### 7.3 Safety Benchmark

Measures safety, policy, and risk quality.

Signals:

- Unsafe output rate
- Policy violation rate
- Human review escalation rate
- Sensitive data mishandling rate
- Tool misuse rate
- Over-permissioned action rate
- Prompt injection susceptibility
- Guardrail failure rate
- Simulation safety failures
- Incident correlation

Safety failures may cap or block final quality score.

### 7.4 Reliability Benchmark

Measures whether the template works consistently.

Signals:

- Successful run rate
- Runtime failure rate
- Retry rate
- Timeout rate
- Integration failure rate
- Dependency drift rate
- Model provider failure impact
- Auto-remediation success rate
- Degraded mode frequency
- Customer-impacting downtime

### 7.5 Cost Efficiency Benchmark

Measures value relative to cost.

Signals:

- Cost per successful run
- Cost per confirmed outcome
- Token spend variance
- Tool/API cost variance
- Support cost per install
- Compute cost per activation
- Forecast accuracy
- Over-budget event rate
- Cost anomaly frequency

Templates with uncontrolled cost behavior should not receive strong enterprise readiness.

### 7.6 Usability Benchmark

Measures customer ability to understand, install, configure, and use the template.

Signals:

- Setup abandonment
- Documentation completeness
- Configuration clarity
- Prompt quality clarity
- Error explainability
- Customer confusion tickets
- Onboarding guide completion
- “Why recommended” clarity
- Permission explanation clarity

### 7.7 Enterprise Readiness Benchmark

Measures readiness for enterprise adoption.

Signals:

- Vendor evidence completeness
- Procurement compatibility
- Security questionnaire completeness
- Region compatibility
- Data residency clarity
- Permission model clarity
- Audit report availability
- Private catalog compatibility
- Approval chain support
- Legal/compliance evidence
- Admin controls
- SSO/RBAC compatibility where relevant

### 7.8 Creator Quality Benchmark

Measures creator operational maturity.

Signals:

- Template quality trend
- Review response time
- Incident response quality
- Documentation quality
- Update cadence
- Customer support burden
- Refund/dispute rate
- Policy violation history
- Creator certification status
- Improvement recommendation acceptance

### 7.9 Marketplace Integrity Benchmark

Measures whether template behavior supports marketplace trust.

Signals:

- Review authenticity score
- Ranking manipulation attempts
- Fake install signals
- Sponsored listing quality
- Claim accuracy
- Overpromising risk
- Category misclassification
- Misleading pricing
- Hidden dependency risk
- Support burden externalization

---

## 8. Benchmark Score Model

Ariyo may use a weighted benchmark score such as:

```txt
benchmark_quality_score =
  outcome_score * 0.25
+ safety_score * 0.20
+ reliability_score * 0.15
+ activation_score * 0.15
+ cost_efficiency_score * 0.10
+ usability_score * 0.05
+ creator_quality_score * 0.05
+ enterprise_readiness_score * 0.05
- incident_penalty
- policy_penalty
- manipulation_penalty
- low_confidence_penalty
```

This formula must be versioned.

Weights may differ by:

- Category
- Plan
- Risk class
- Customer segment
- Use case criticality
- Marketplace surface
- Enterprise procurement context

### 8.1 Blocking Caps

Examples:

- Severe safety failure caps total score at 40.
- Critical policy violation caps total score at 0 until resolved.
- Missing required region evidence caps enterprise readiness at 50.
- Low sample size caps benchmark confidence, not necessarily raw score.
- Active incident blocks featured placement.
- Suspended vendor blocks installability and benchmark promotion.

---

## 9. Readiness Scores

### 9.1 Basic Readiness Score

Basic-ready templates should be:

- simple
- low-risk
- low-cost
- easy to install
- low-dependency
- clear in outcome
- safe by default
- minimal in permissions
- understandable to non-technical users

Basic readiness should penalize:

- complex setup
- high token usage
- advanced permissions
- risky automation
- unclear instructions
- dependency-heavy execution

### 9.2 Pro Readiness Score

Pro-ready templates should support:

- operational workflows
- team usage
- integrations
- reliable repeated runs
- measurable business outcomes
- admin visibility
- creator support quality
- moderate customization

Pro readiness should penalize:

- broken integrations
- unclear ownership
- weak observability
- poor team workflow compatibility
- high support burden

### 9.3 Smart Readiness Score

Smart-ready templates should support:

- advanced automation
- multi-agent behavior
- complex workflow orchestration
- GEO/RAG capabilities where relevant
- higher AI model intelligence
- stronger safety controls
- advanced monitoring
- cost governance
- human review escalation
- enterprise-grade evidence where needed

Smart readiness should penalize:

- opaque AI behavior
- high cost without clear ROI
- model degradation risk
- missing simulation evidence
- missing rollback path
- weak auditability

### 9.4 Enterprise Readiness Score

Enterprise-ready templates should support:

- procurement evidence
- security review evidence
- data residency mapping
- vendor risk evidence
- private catalog compatibility
- audit reports
- permission boundaries
- approval chains
- compliance control mapping
- incident and support SLAs

---

## 10. Category Baselines

Each Marketplace category should have its own baseline.

Example categories:

- Sales automation templates
- Customer success templates
- Finance automation templates
- HR operations templates
- Legal review templates
- Marketing content templates
- GEO/AI SEO templates
- Data analysis templates
- Knowledge base templates
- Workflow automation templates
- Agent team templates
- Integration bundles
- Internal operations templates
- Enterprise compliance templates

Category baselines must include:

- Median install-to-activation rate
- Median successful run rate
- Median customer-confirmed outcome rate
- Median cost per outcome
- Median support burden
- Median unsafe output rate
- Median refund/dispute rate
- Median retention after install
- Median quality score
- P75 and P90 quality thresholds

Ariyo should avoid public category comparisons when sample size is too low.

---

## 11. Benchmark Suites

### 11.1 Activation Benchmark Suite

Tests:

- Can a customer understand the template promise?
- Can dependencies be resolved before install?
- Can required permissions be explained?
- Can setup be completed without support?
- Can the first run succeed?
- Can the first outcome be measured?

### 11.2 Safety Benchmark Suite

Tests:

- Prompt injection resistance
- Unsafe output behavior
- Tool permission boundaries
- Data minimization behavior
- Human escalation correctness
- Policy compliance
- Simulation edge cases
- High-risk use case restrictions

### 11.3 Reliability Benchmark Suite

Tests:

- Repeated run stability
- Integration failure handling
- Timeout handling
- Retry behavior
- Dependency drift behavior
- Model provider fallback behavior
- Health monitoring integration

### 11.4 Cost Benchmark Suite

Tests:

- Token consumption stability
- Tool/API cost stability
- Cost per outcome
- Budget guardrail behavior
- Cost anomaly detection
- Cost forecast accuracy

### 11.5 Outcome Benchmark Suite

Tests:

- Claimed outcome completion
- Customer-confirmed value
- Before/after signal collection
- ROI signal presence
- Negative outcome handling
- Human rejection rates

### 11.6 Enterprise Readiness Benchmark Suite

Tests:

- Vendor evidence completeness
- Security questionnaire availability
- Region compatibility
- Data classification compatibility
- Procurement approval readiness
- Audit export support
- Private catalog compatibility

---

## 12. Benchmark Confidence

Benchmark scores must include confidence.

Confidence inputs:

- Install sample size
- Run sample size
- Outcome sample size
- Customer segment diversity
- Version age
- Data completeness
- Signal freshness
- Incident recency
- Evaluation coverage
- Simulation coverage
- Category baseline maturity

Confidence levels:

```ts
type BenchmarkConfidence =
  | 'very_low'
  | 'low'
  | 'medium'
  | 'high'
  | 'very_high';
```

Low confidence should affect ranking and badges.

Low confidence must not be hidden.

---

## 13. Benchmark Badges

Allowed badges:

- `Top Category Performer`
- `High Activation`
- `High Outcome Confidence`
- `Low Cost per Outcome`
- `Low Support Burden`
- `Safety Benchmarked`
- `Enterprise Ready`
- `Smart Ready`
- `Stable Version`
- `Fast Time to Value`
- `Creator Quality Leader`
- `Low Incident History`
- `High Retention`
- `Procurement Ready`

Badge rules:

- Badges must be earned by benchmark criteria.
- Badges must expire when evidence becomes stale.
- Badges must be removed after serious incidents.
- Sponsored listings cannot buy benchmark badges.
- Badges must include explanation and last updated timestamp.

---

## 14. Creator Comparisons

Creator comparisons should help creators improve, not create vanity competition.

Creator dashboard should show:

- Average quality score vs category peers
- Template-by-template benchmark strengths
- Improvement recommendations
- Safety benchmark status
- Cost efficiency benchmark status
- Outcome benchmark status
- Documentation quality score
- Incident trend
- Support burden trend
- Badge eligibility
- Featured eligibility

Creator comparison must not expose private competitor data.

Use percentile bands rather than raw competitor details.

Example:

```txt
Your Sales Automation templates are in the top 20% for activation, but below category median for cost per successful outcome.
```

---

## 15. Customer-Facing Benchmark UX

Marketplace customers should see clear benchmark explanations.

Recommended UI elements:

- Quality score summary
- Plan readiness labels
- Category percentile
- Time to value estimate
- Cost confidence indicator
- Safety benchmark status
- Enterprise readiness status
- Support burden indicator
- Last benchmark date
- “Why this template benchmarks well” explanation
- “Known limitations” section

Customer-facing benchmark display must avoid false precision.

Bad:

```txt
Quality Score: 94.2781
```

Good:

```txt
Quality: Excellent — top 10% in Sales Automation templates based on activation, outcome confirmation, reliability, and low support burden.
```

---

## 16. Internal Benchmark Dashboard

Internal operators need deeper controls.

Dashboard views:

- Category benchmark overview
- Lowest-performing templates
- Highest-risk templates
- High-potential templates needing coaching
- High-revenue but low-quality templates
- High-install but low-outcome templates
- Unsafe output benchmark failures
- Cost anomaly benchmark failures
- Creator quality trends
- Benchmark suite coverage gaps
- Baseline drift alerts
- Enterprise readiness gaps

Internal dashboard actions:

- Trigger benchmark rerun
- Assign creator coaching
- Lower ranking eligibility
- Remove badge
- Require review
- Start lifecycle optimization
- Start incident investigation
- Block promotion
- Request evidence
- Mark benchmark invalid

---

## 17. Benchmark-Driven Marketplace Actions

Benchmark results should feed:

### Ranking

Strong benchmarks can improve ranking.

Weak benchmarks can reduce visibility.

Safety benchmark failures must block high ranking.

### Recommendations

Recommendation engine should prefer templates with strong benchmark confidence for the customer’s context.

### Creator Success

Creator success should use benchmark gaps to generate coaching.

### Template Review

Review boards should use benchmarks when approving major updates or featured placement.

### Lifecycle Optimization

Lifecycle system should trigger improvement loops for templates below baseline.

### Enterprise Procurement

Enterprise buyers should receive benchmark evidence as part of procurement packages.

### Private Catalog Controls

Enterprise admins may require benchmark thresholds before adding a template to a private catalog.

---

## 18. Benchmark Refresh Rules

Benchmark must refresh when:

- template version changes
- prompt behavior changes
- tool permissions change
- integration dependency changes
- model profile changes
- pricing changes
- policy violation occurs
- serious incident occurs
- customer outcome signals shift
- support burden increases
- benchmark suite version changes
- category baseline recalculates
- evidence expires
- creator trust score changes significantly

Scheduled refresh cadence:

- High-risk templates: weekly or after significant changes
- Medium-risk templates: monthly
- Low-risk templates: quarterly
- Featured templates: before featured placement and monthly thereafter
- Enterprise-ready templates: monthly or evidence-triggered

---

## 19. Data Governance

Benchmarking may use:

- Aggregated installs
- Aggregated run success data
- Aggregated outcome signals
- Aggregated cost data
- Aggregated support burden
- Incident counts
- Evaluation results
- Simulation results
- Review metadata
- Creator response data
- Version metadata

Benchmarking must not expose:

- Customer private data
- Prompt inputs containing confidential content
- Raw conversations
- PII
- Secret integration data
- Tenant-specific performance without permission
- Sensitive business KPIs in public views

Ariyo must use anonymization, aggregation, thresholds, and permission checks.

---

## 20. Benchmark API Contract

### 20.1 Get Template Benchmark

```http
GET /api/v1/marketplace/templates/{template_id}/benchmarks
```

Response:

```json
{
  "template_id": "tpl_sales_followup_ai",
  "template_version_id": "ver_2026_06_18",
  "benchmark_status": "passed_with_warnings",
  "quality_score": 86,
  "confidence": "high",
  "category_percentile": 82,
  "plan_readiness": {
    "basic": 78,
    "pro": 91,
    "smart": 84,
    "enterprise": 72
  },
  "dimension_scores": {
    "activation": 88,
    "outcome": 84,
    "safety": 93,
    "reliability": 90,
    "cost_efficiency": 71,
    "usability": 87,
    "creator_quality": 92,
    "enterprise_readiness": 72
  },
  "badges": ["High Activation", "Safety Benchmarked"],
  "warnings": ["Cost per successful outcome is above category median"],
  "last_benchmarked_at": "2026-06-19T08:00:00Z"
}
```

### 20.2 Run Benchmark

```http
POST /api/v1/marketplace/templates/{template_id}/benchmarks/run
```

Request:

```json
{
  "template_version_id": "ver_2026_06_18",
  "suite_ids": ["activation_v3", "safety_v5", "cost_v2"],
  "reason": "major_version_update",
  "requested_by": "marketplace_operator"
}
```

### 20.3 Get Category Baseline

```http
GET /api/v1/marketplace/categories/{category_id}/benchmark-baseline
```

### 20.4 Get Creator Benchmark

```http
GET /api/v1/marketplace/creators/{creator_id}/benchmarks
```

### 20.5 Submit Benchmark Override

```http
POST /api/v1/marketplace/templates/{template_id}/benchmarks/override
```

Allowed only for internal authorized operators.

Request:

```json
{
  "override_type": "mark_invalid",
  "reason": "corrupted outcome data due to tracking bug",
  "expires_at": "2026-07-19T00:00:00Z",
  "evidence_ids": ["ev_bug_123"]
}
```

Overrides must be auditable.

---

## 21. Webhooks

Ariyo should emit:

- `template.benchmark.scheduled`
- `template.benchmark.started`
- `template.benchmark.completed`
- `template.benchmark.failed`
- `template.benchmark.status_changed`
- `template.benchmark.badge_awarded`
- `template.benchmark.badge_removed`
- `template.benchmark.enterprise_readiness_changed`
- `template.benchmark.safety_blocked`
- `creator.benchmark.updated`
- `category.baseline.updated`

Webhook payload:

```json
{
  "event": "template.benchmark.completed",
  "template_id": "tpl_sales_followup_ai",
  "template_version_id": "ver_2026_06_18",
  "quality_score": 86,
  "confidence": "high",
  "status": "passed_with_warnings",
  "changed_dimensions": ["cost_efficiency", "activation"],
  "occurred_at": "2026-06-19T08:00:00Z"
}
```

---

## 22. Observability Events

Track:

- `benchmark_suite_started`
- `benchmark_suite_completed`
- `benchmark_suite_failed`
- `benchmark_score_calculated`
- `benchmark_confidence_calculated`
- `benchmark_blocking_rule_triggered`
- `benchmark_badge_awarded`
- `benchmark_badge_removed`
- `benchmark_baseline_recalculated`
- `benchmark_ranking_signal_emitted`
- `benchmark_creator_recommendation_generated`
- `benchmark_enterprise_evidence_generated`
- `benchmark_override_created`
- `benchmark_override_expired`

Each event must include:

- template ID
- version ID
- category ID
- suite ID
- score outputs
- confidence level
- blocking rules
- owner
- timestamp
- trace ID

---

## 23. Advanced KPIs

### Marketplace Quality KPIs

- Average Template Benchmark Quality Score
- Category Median Quality Score
- P90 Template Quality Score
- Benchmark Coverage Rate
- Benchmark Confidence Distribution
- Templates Below Category Baseline
- Templates Above P90 Category Baseline

### Safety KPIs

- Safety Benchmark Failure Rate
- Safety Blocked Templates
- Unsafe Output Benchmark Rate
- Guardrail Failure Benchmark Rate
- Post-Benchmark Incident Rate

### Outcome KPIs

- Outcome Benchmark Pass Rate
- Customer-Confirmed Value Rate
- Cost per Confirmed Outcome
- Outcome Durability Rate
- Negative Outcome Rate

### Creator KPIs

- Creator Benchmark Improvement Rate
- Creator Quality Distribution
- Creator Coaching Acceptance Rate
- Creator Badge Eligibility Rate
- Repeat Low-Quality Creator Rate

### Enterprise KPIs

- Enterprise Readiness Benchmark Pass Rate
- Procurement Evidence Completeness
- Private Catalog Benchmark Compliance Rate
- Region Compatibility Benchmark Pass Rate

### Ranking KPIs

- Ranking Lift from Benchmark Signals
- Install-to-Activation by Benchmark Percentile
- Outcome Rate by Benchmark Percentile
- Incident Rate by Benchmark Percentile
- Revenue Quality by Benchmark Percentile

---

## 24. AI Benchmarking Assistant

Ariyo may include an AI Benchmarking Assistant.

The assistant can:

- summarize benchmark results
- identify quality gaps
- suggest creator improvements
- generate benchmark explanations
- compare template performance to category baseline
- prepare procurement-ready benchmark summaries
- identify suspicious benchmark patterns
- recommend benchmark suite reruns

The assistant must not:

- fabricate benchmark data
- hide safety failures
- reveal private customer data
- make legal claims without evidence
- manipulate creators with misleading comparisons
- override governance decisions without permission
- publish badges without benchmark evidence

---

## 25. Security and Privacy Rules

- Benchmark data must be tenant-isolated.
- Public benchmark views must use aggregation thresholds.
- Customer-specific metrics require customer permission.
- Sensitive template behavior must not be publicly exposed.
- Creator dashboards must not expose competitor raw data.
- Internal overrides must require audit logs.
- Benchmark exports must support redaction.
- Enterprise evidence packages must be permission-scoped.
- Benchmark computation jobs must respect data residency rules.

---

## 26. Frontend Requirements

Marketplace listing page must show:

- benchmark summary
- badges
- confidence level
- last benchmark date
- category percentile when allowed
- plan readiness
- enterprise readiness
- known weaknesses

Creator dashboard must show:

- benchmark trend
- dimension scores
- category comparisons
- recommended improvements
- badge eligibility
- benchmark failures
- rerun eligibility

Admin dashboard must show:

- benchmark coverage
- score distributions
- failing templates
- stale benchmarks
- blocked templates
- baseline drift
- manual override history

Enterprise procurement view must show:

- enterprise readiness benchmark
- evidence links
- security benchmark summary
- region benchmark summary
- cost benchmark summary
- audit export option

---

## 27. Backend Requirements

Backend must provide:

- benchmark suite registry
- benchmark job runner
- score calculation service
- baseline calculation service
- confidence calculation service
- badge service
- benchmark history store
- override audit service
- ranking signal publisher
- creator coaching signal publisher
- enterprise evidence generator
- access control enforcement
- data aggregation and anonymization
- stale benchmark scheduler

All score calculations must be versioned.

---

## 28. Testing Requirements

Test:

- score calculation accuracy
- confidence calculation accuracy
- blocking cap behavior
- low sample size behavior
- badge award/removal
- stale benchmark handling
- category baseline recalculation
- creator comparison privacy
- enterprise report permissions
- ranking signal emission
- override audit logs
- safety blocking rules
- data residency-aware benchmark jobs

---

## 29. Forbidden Patterns

Ariyo must not:

- compare unrelated template categories as if equal
- rank templates using benchmarks without confidence checks
- award badges from paid placement
- expose private customer metrics
- let creators fake benchmark signals
- hide safety benchmark failures
- ignore low sample size
- use raw star rating as benchmark quality
- allow old versions to inherit new benchmark badges incorrectly
- let revenue override quality benchmark failures
- publish benchmark claims without timestamp and evidence
- treat benchmark results as legal certification
- manipulate category baselines to promote favored templates
- use sensitive personal data for benchmarking
- benchmark only successful runs while ignoring failures
- exclude refunds, incidents, and support burden from quality signals

---

## 30. Golden Rule

Ariyo Marketplace Template Quality Benchmarking must make template quality measurable, comparable, explainable, fair, privacy-safe, and action-oriented.

If a benchmark does not help customers trust better templates, creators improve their assets, operators protect the Marketplace, and enterprises adopt safely, it is not a useful benchmark.
