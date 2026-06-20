# Ariyo Marketplace Template Outcome Intelligence Skill

## Core Contract

Ariyo Marketplace Template Outcome Intelligence is not usage analytics.

It is the governed outcome measurement, business-impact attribution, customer-success intelligence, ROI signal, before/after comparison, template effectiveness, and ranking feedback system that determines whether a Marketplace template actually helps customers achieve meaningful business outcomes after installation.

A Marketplace template must not be considered successful merely because it was viewed, clicked, installed, rated, or purchased.

A Marketplace template is successful when it creates measurable, safe, durable, explainable, customer-approved, and cost-justified business value.

---

## 1. Purpose

This skill defines how Ariyo measures the real-world outcomes produced by Marketplace assets, including:

- AI Employee templates
- Agent Team templates
- Workflow templates
- Knowledge packs
- GEO templates
- Content engines
- Integration bundles
- Automation packs
- Internal enterprise templates
- Partner-created solution templates
- Private catalog assets
- Industry solution bundles

The system must answer:

- Did the template solve the customer problem it claimed to solve?
- Did the customer reach activation?
- Did the template create a business outcome, not just activity?
- Did the outcome justify cost, risk, time, and operational complexity?
- Did outcomes persist after initial setup?
- Did the template reduce workload, improve revenue, reduce risk, increase quality, or accelerate execution?
- Did the template cause side effects, tickets, failures, cost overruns, unsafe actions, or customer frustration?
- Should this template rank higher, remain stable, be coached, be demoted, be restricted, or be removed?

Outcome intelligence connects Marketplace growth to customer value.

---

## 2. Required Dependencies

This skill should be implemented alongside:

- `marketplace-template-health-monitoring.md`
- `marketplace-template-auto-remediation.md`
- `marketplace-template-dependency-registry.md`
- `marketplace-template-migration-portability.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-search-recommendation-engine.md`
- `template-quality-ranking-system.md`
- `marketplace-billing-payouts.md`
- `marketplace-creator-success-system.md`
- `customer-success-playbooks.md`
- `product-analytics-growth.md`
- `observability-analytics-events.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-observability-tracing.md`
- `quality-assurance-system.md`
- `revenue-operations-system.md`
- `finance-accounting-controls.md`

Outcome intelligence must consume signals from install, activation, runtime, billing, support, health, quality, ranking, creator success, and customer success systems.

---

## 3. Outcome Philosophy

Ariyo must measure outcomes across four layers:

1. **Activation Outcome**  
   The customer successfully configured and started using the template.

2. **Operational Outcome**  
   The template completed intended workflows reliably and safely.

3. **Business Outcome**  
   The template contributed to measurable business value.

4. **Durability Outcome**  
   The value persisted over time without unacceptable cost, risk, support burden, or churn.

Ariyo must avoid vanity success definitions.

Bad success signals:

- high page views only
- many installs but low activation
- many runs but no business completion
- high revenue but high refunds
- high star rating but high incident rate
- high creator promotion but weak outcomes
- short-term usage spike followed by uninstall
- outcomes claimed by creator but not supported by customer evidence

Good success signals:

- customer-defined goal achieved
- install-to-activation completed
- repeated successful runs
- measurable time saved
- measurable revenue influenced
- measurable cost reduction
- measurable quality improvement
- measurable risk reduction
- support burden remains low
- cost remains predictable
- customer retains the template
- customer expands usage voluntarily

---

## 4. Core Outcome Objects

### 4.1 TemplateOutcomeProfile

A normalized outcome profile for a Marketplace asset.

```ts
export type TemplateOutcomeProfile = {
  template_id: string;
  version_id: string;
  creator_id?: string;
  vendor_id?: string;
  category: string;
  outcome_domain: OutcomeDomain;
  claimed_outcomes: ClaimedOutcome[];
  measurable_outcomes: MeasurableOutcome[];
  required_integrations: string[];
  required_customer_inputs: string[];
  recommended_baseline_metrics: BaselineMetricDefinition[];
  expected_time_to_value_days: number;
  expected_measurement_window_days: number;
  minimum_success_thresholds: OutcomeThreshold[];
  risk_adjustments: OutcomeRiskAdjustment[];
  attribution_model: OutcomeAttributionModel;
  created_at: string;
  updated_at: string;
};
```

### 4.2 CustomerTemplateOutcome

Outcome record for a specific installed template in a customer environment.

```ts
export type CustomerTemplateOutcome = {
  customer_id: string;
  workspace_id: string;
  installation_id: string;
  template_id: string;
  template_version_id: string;
  plan: 'basic' | 'pro' | 'smart' | 'enterprise';
  baseline_snapshot_id?: string;
  outcome_snapshot_id?: string;
  activation_status: ActivationOutcomeStatus;
  operational_status: OperationalOutcomeStatus;
  business_outcome_status: BusinessOutcomeStatus;
  durability_status: DurabilityOutcomeStatus;
  outcome_score: number;
  confidence_score: number;
  roi_signal?: ROISignal;
  customer_confirmed_value?: boolean;
  attribution_quality: AttributionQuality;
  measurement_window: OutcomeMeasurementWindow;
  blockers: OutcomeBlocker[];
  side_effects: OutcomeSideEffect[];
  last_measured_at: string;
};
```

### 4.3 OutcomeSnapshot

Captures before/after state.

```ts
export type OutcomeSnapshot = {
  snapshot_id: string;
  customer_id: string;
  installation_id: string;
  snapshot_type: 'baseline' | 'interim' | 'final' | 'renewal' | 'post_uninstall';
  captured_at: string;
  metrics: OutcomeMetricValue[];
  qualitative_feedback?: CustomerOutcomeFeedback[];
  evidence_links: OutcomeEvidenceLink[];
  generated_by: 'system' | 'customer' | 'admin' | 'creator' | 'partner' | 'ai_assistant';
  confidence_score: number;
};
```

### 4.4 OutcomeImpactScore

A template-level score used by ranking, trust, creator success, billing, and customer success.

```ts
export type OutcomeImpactScore = {
  template_id: string;
  version_id?: string;
  total_installs: number;
  activated_installs: number;
  measured_installs: number;
  positive_outcome_rate: number;
  durable_outcome_rate: number;
  median_time_to_value_hours: number;
  median_roi_signal?: number;
  customer_confirmed_value_rate: number;
  support_burden_ratio: number;
  incident_adjusted_score: number;
  refund_adjusted_score: number;
  cost_adjusted_score: number;
  plan_segment_scores: Record<string, number>;
  category_percentile: number;
  confidence_score: number;
  last_calculated_at: string;
};
```

---

## 5. Outcome Domains

Ariyo must classify templates into outcome domains so measurement is meaningful.

```ts
export type OutcomeDomain =
  | 'sales_pipeline'
  | 'lead_generation'
  | 'customer_support'
  | 'content_marketing'
  | 'geo_ai_visibility'
  | 'finance_operations'
  | 'hr_operations'
  | 'workflow_automation'
  | 'knowledge_management'
  | 'compliance_operations'
  | 'security_operations'
  | 'analytics_reporting'
  | 'customer_success'
  | 'onboarding_activation'
  | 'internal_productivity'
  | 'procurement_operations'
  | 'partner_operations'
  | 'marketplace_operations'
  | 'custom';
```

Each outcome domain must define:

- typical customer goal
- recommended baseline metrics
- measurement window
- activation criteria
- success thresholds
- failure thresholds
- support burden expectations
- cost expectations
- risk considerations

---

## 6. Outcome Metric Categories

### 6.1 Time Savings Metrics

Examples:

- hours saved per week
- manual steps eliminated
- average task completion time reduction
- reduction in repetitive work
- automation completion rate
- review time reduction
- response time improvement

### 6.2 Revenue Metrics

Examples:

- qualified leads created
- pipeline influenced
- conversion rate improvement
- average order value lift
- upsell opportunities detected
- sales cycle reduction
- renewal risk recovered

### 6.3 Cost Metrics

Examples:

- cost per successful run
- AI cost per outcome
- support cost reduction
- manual labor cost reduction
- failed-run cost
- rework cost
- integration maintenance burden

### 6.4 Quality Metrics

Examples:

- content quality score
- answer accuracy score
- task completion correctness
- review pass rate
- fewer defects
- fewer escalations
- fewer duplicate tasks

### 6.5 Risk Reduction Metrics

Examples:

- compliance gap reduction
- fewer unsafe outputs
- fewer unapproved actions
- fewer overdue reviews
- fewer missing audit artifacts
- better permission hygiene
- reduced incident exposure

### 6.6 Customer Experience Metrics

Examples:

- faster response time
- customer satisfaction lift
- ticket resolution improvement
- onboarding completion lift
- self-service success rate
- fewer customer escalations

### 6.7 Marketplace Health Metrics

Examples:

- refund rate
- uninstall rate
- support burden
- incident rate
- template health score
- dependency drift rate
- activation completion rate
- creator response time

---

## 7. Outcome Measurement Lifecycle

### 7.1 Claimed Outcome Registration

Before publication, every template must declare:

- what outcome it claims to create
- who benefits from the outcome
- required customer data
- required integrations
- expected time to value
- how the outcome can be measured
- known limitations
- what the template does not guarantee

A template with vague outcome claims must be flagged.

Bad claim:

> Improves your business with AI.

Good claim:

> Reduces manual weekly CRM follow-up preparation time by generating prioritized follow-up drafts from recent lead activity, subject to CRM integration access and customer review.

### 7.2 Baseline Capture

At install or activation, Ariyo should capture baseline metrics when possible:

- current workflow time
- current conversion rate
- current ticket volume
- current content output
- current cost
- current manual task frequency
- current backlog
- current error rate
- current response time

Baseline capture must be privacy-safe and customer-controlled.

### 7.3 Activation Measurement

Ariyo must determine whether the template reached meaningful activation.

Activation signals:

- setup completed
- required permissions granted
- integrations connected
- first successful run completed
- customer reviewed first output when required
- workflow enabled
- no blocking dependency failure

### 7.4 Outcome Measurement Window

Different templates need different measurement windows.

Examples:

- simple productivity template: 1-7 days
- content template: 7-30 days
- sales template: 14-90 days
- customer success template: 30-120 days
- compliance template: 30-180 days
- enterprise workflow template: 30-180 days

### 7.5 Interim Outcome Review

Ariyo should measure progress before final outcome confirmation.

Interim status:

- on track
- delayed
- blocked
- insufficient data
- negative signal
- value emerging
- needs customer action
- needs creator improvement
- needs support intervention

### 7.6 Final Outcome Evaluation

At the end of the measurement window, Ariyo must classify outcome result.

```ts
export type BusinessOutcomeStatus =
  | 'not_started'
  | 'not_measurable_yet'
  | 'insufficient_data'
  | 'positive_outcome'
  | 'partial_outcome'
  | 'neutral_outcome'
  | 'negative_outcome'
  | 'customer_disputed'
  | 'creator_disputed'
  | 'excluded_from_scoring';
```

### 7.7 Durability Review

Ariyo must check whether the outcome persists.

Durability signals:

- continued usage after initial value
- stable health score
- no severe cost drift
- no major incidents
- low support burden
- renewal or expansion interest
- customer-confirmed ongoing value

---

## 8. Outcome Scoring Model

Ariyo should use a weighted model.

```text
outcome_score =
  activation_score * 0.15
+ operational_success_score * 0.20
+ business_impact_score * 0.30
+ customer_confirmed_value_score * 0.15
+ durability_score * 0.10
+ cost_efficiency_score * 0.05
+ safety_quality_score * 0.05
- incident_penalty
- refund_penalty
- support_burden_penalty
- cost_overrun_penalty
- attribution_uncertainty_penalty
```

Outcome score must never ignore safety or customer harm.

A template with strong business value but repeated unsafe behavior must not be treated as a strong Marketplace asset.

---

## 9. Attribution Model

Outcome attribution must be honest.

```ts
export type OutcomeAttributionModel =
  | 'direct'
  | 'assisted'
  | 'influenced'
  | 'correlated'
  | 'customer_self_reported'
  | 'not_attributable';
```

### Direct Attribution

The template directly completed or caused the measurable outcome.

Example:

- workflow template generated and sent approved weekly reports
- support automation resolved tickets without escalation

### Assisted Attribution

The template contributed but required human action.

Example:

- sales assistant created follow-up drafts that reps used
- content template generated drafts that marketing edited and published

### Influenced Attribution

The template contributed to a broader process.

Example:

- customer success risk detection helped CSM intervene before churn

### Correlated Attribution

The outcome improved, but causality is uncertain.

Example:

- conversion improved after multiple campaigns and template adoption

### Customer Self-Reported

Customer manually confirms value.

Must be marked as lower-confidence unless supported by metrics.

### Not Attributable

The outcome cannot reasonably be credited to the template.

---

## 10. ROI Signals

Ariyo should estimate ROI only when enough evidence exists.

```ts
export type ROISignal = {
  signal_type: 'time_saved' | 'revenue_influenced' | 'cost_reduced' | 'risk_reduced' | 'quality_improved' | 'mixed';
  estimated_value: number;
  currency?: string;
  calculation_method: string;
  confidence_score: number;
  evidence_links: string[];
  caveats: string[];
};
```

ROI signals must be labeled as estimates unless independently verified.

Forbidden ROI claims:

- guaranteed revenue
- unsupported savings
- hidden assumptions
- creator-provided ROI without disclosure
- ROI based only on template price
- ROI ignoring AI usage costs
- ROI ignoring setup/support burden

---

## 11. Before/After Measurement

Ariyo should support before/after comparisons.

Examples:

```json
{
  "metric": "weekly_manual_followup_hours",
  "before": 8.5,
  "after": 3.2,
  "change_percent": -62.35,
  "measurement_window_days": 30,
  "confidence_score": 0.78
}
```

```json
{
  "metric": "support_first_response_minutes",
  "before": 145,
  "after": 38,
  "change_percent": -73.79,
  "measurement_window_days": 45,
  "confidence_score": 0.82
}
```

Before/after must account for:

- seasonality
- sample size
- concurrent changes
- customer configuration changes
- team adoption
- integration health
- measurement gaps

---

## 12. Customer-Confirmed Value

Ariyo must allow customers to confirm or dispute claimed value.

Customer confirmation options:

- valuable
- partially valuable
- not valuable
- harmful
- not enough data
- value exists but not measurable
- template needs changes

Customer feedback should feed:

- ranking
- creator success
- template quality score
- support playbooks
- renewal risk
- refund/dispute workflows
- product improvement backlog

Creators must not be able to manipulate customer confirmations.

---

## 13. Plan-Aware Outcome Intelligence

### 13.1 Basic Plan

Basic plan outcome intelligence should focus on:

- activation success
- simple time savings
- first value moment
- low setup complexity
- safe template usage
- predictable cost
- customer-perceived usefulness

Basic must not require complex ROI modeling.

Basic templates should be penalized if they require hidden Pro/Smart complexity to create value.

### 13.2 Pro Plan

Pro plan outcome intelligence should focus on:

- workflow completion
- team adoption
- integration-enabled outcomes
- operational reliability
- measurable business process improvement
- support burden
- department-level reporting

Pro templates should show business value beyond individual productivity.

### 13.3 Smart Plan

Smart plan outcome intelligence should focus on:

- multi-agent outcomes
- advanced automation impact
- cross-system intelligence
- forecasted ROI
- risk-adjusted business value
- automated optimization
- enterprise reporting
- model/provider efficiency
- high-confidence attribution

Smart templates must be held to stronger measurement, cost, safety, and governance standards.

### 13.4 Enterprise

Enterprise outcome intelligence should include:

- executive outcome reports
- department scorecards
- procurement value evidence
- renewal evidence
- vendor/partner outcome comparison
- compliance-friendly evidence package
- finance export
- audit-ready attribution notes

---

## 14. Ranking Feedback Integration

Outcome intelligence must feed ranking.

Templates should be promoted when:

- activation rate is high
- outcome score is high
- customer-confirmed value is high
- support burden is low
- incident rate is low
- cost per successful outcome is reasonable
- durability is strong
- category percentile is high

Templates should be demoted when:

- many installs fail to activate
- outcomes are not achieved
- customers dispute claims
- refunds rise
- support burden rises
- health score degrades
- costs exceed expectations
- unsafe incidents occur
- evidence is weak

Ranking must use confidence weighting.

A template with 5 perfect outcomes from 5 installs should not automatically outrank a template with 2,000 strong outcomes unless confidence and category context support it.

---

## 15. Creator Success Integration

Outcome intelligence must help creators improve templates.

Creator dashboard should show:

- activation bottlenecks
- outcome achievement rate
- average time to value
- customer feedback themes
- category percentile
- support burden
- cost efficiency
- refund correlation
- documentation gaps
- integration failure impact
- improvement recommendations

Creator coaching examples:

- simplify setup instructions
- reduce permissions
- add onboarding checklist
- improve template description accuracy
- add success metric examples
- reduce AI cost per outcome
- improve error handling
- create Basic/Pro/Smart variants
- refresh knowledge source instructions

Creators must not see private customer metrics unless explicitly authorized and properly aggregated.

---

## 16. Customer Success Integration

Outcome intelligence must alert customer success when value is blocked.

CS triggers:

- installed but not activated
- activated but no outcome after expected window
- high failed-run rate
- high cost without outcome
- customer feedback negative
- template health degraded
- business outcome delayed
- usage dropped after initial success
- renewal coming with weak value evidence

Customer success playbooks:

- activation rescue
- configuration review
- integration health check
- workflow adoption coaching
- cost optimization
- template replacement recommendation
- creator escalation
- refund/dispute routing
- expansion recommendation

---

## 17. Outcome Evidence

Outcome evidence may include:

- system events
- run completion logs
- workflow state changes
- customer feedback
- admin review
- before/after metrics
- CRM updates
- ticket outcomes
- content publication records
- analytics events
- billing/cost records
- health monitoring records
- incident records
- support tickets
- creator notes
- partner delivery notes

Evidence must be:

- permission-scoped
- privacy-safe
- timestamped
- tamper-evident where possible
- linked to source systems
- retention-aware
- exportable for enterprise customers

---

## 18. Outcome Confidence

Every outcome should include confidence.

```ts
export type AttributionQuality =
  | 'high_confidence'
  | 'medium_confidence'
  | 'low_confidence'
  | 'self_reported_only'
  | 'insufficient_evidence'
  | 'conflicting_evidence';
```

Confidence is affected by:

- baseline availability
- measurement window completeness
- sample size
- directness of attribution
- customer confirmation
- system evidence quality
- conflicting changes
- missing integrations
- creator influence
- manual edits
- incident history

---

## 19. Negative Outcomes

Ariyo must measure harm and disappointment.

Negative outcome types:

- wasted setup time
- no measurable value
- increased workload
- inaccurate outputs
- customer complaints
- unsafe automation
- privacy concerns
- unexpected AI cost
- broken integrations
- failed workflows
- support burden
- churn contribution
- refund request
- compliance issue

Negative outcomes must affect:

- ranking
- creator score
- marketplace quality score
- payout risk where policy allows
- review priority
- enforcement triggers
- remediation recommendations

---

## 20. Outcome Intelligence API

### 20.1 Get Template Outcome Profile

```http
GET /api/v1/marketplace/templates/{template_id}/outcome-profile
```

Response:

```json
{
  "template_id": "tpl_sales_followup_ai",
  "outcome_domain": "sales_pipeline",
  "claimed_outcomes": [
    {
      "claim": "Reduce manual follow-up preparation time",
      "measurement_method": "before_after_time_saved",
      "expected_time_to_value_days": 14
    }
  ],
  "measurable_outcomes": [
    "weekly_manual_followup_hours",
    "followup_completion_rate",
    "lead_response_time"
  ],
  "minimum_success_thresholds": [
    {
      "metric": "weekly_manual_followup_hours",
      "operator": "decrease_percent_gte",
      "value": 25
    }
  ]
}
```

### 20.2 Record Outcome Event

```http
POST /api/v1/marketplace/installations/{installation_id}/outcome-events
```

Request:

```json
{
  "event_type": "business_outcome_observed",
  "metric": "support_first_response_minutes",
  "value": 38,
  "baseline_value": 145,
  "measurement_window_days": 45,
  "evidence_links": ["evt_123", "ticket_report_456"],
  "confidence_score": 0.82
}
```

### 20.3 Get Customer Outcome Summary

```http
GET /api/v1/marketplace/installations/{installation_id}/outcomes
```

Response:

```json
{
  "installation_id": "inst_123",
  "template_id": "tpl_support_ai",
  "activation_status": "activated",
  "business_outcome_status": "positive_outcome",
  "outcome_score": 82,
  "confidence_score": 0.78,
  "roi_signal": {
    "signal_type": "time_saved",
    "estimated_value": 1240,
    "currency": "USD",
    "confidence_score": 0.69
  },
  "blockers": [],
  "side_effects": []
}
```

### 20.4 Submit Customer Value Feedback

```http
POST /api/v1/marketplace/installations/{installation_id}/outcome-feedback
```

Request:

```json
{
  "value_rating": "valuable",
  "confirmed_outcomes": ["time_saved", "response_time_improved"],
  "free_text": "The template reduced weekly support triage effort significantly.",
  "permission_to_share_aggregated": true
}
```

### 20.5 Get Template Outcome Benchmark

```http
GET /api/v1/marketplace/templates/{template_id}/outcome-benchmark
```

Response:

```json
{
  "template_id": "tpl_support_ai",
  "category": "customer_support",
  "positive_outcome_rate": 0.71,
  "durable_outcome_rate": 0.62,
  "median_time_to_value_hours": 19,
  "category_percentile": 84,
  "confidence_score": 0.76,
  "sample_size": 842
}
```

---

## 21. Webhooks

Ariyo should emit outcome webhooks.

```text
marketplace.outcome.baseline_captured
marketplace.outcome.activation_reached
marketplace.outcome.interim_review_due
marketplace.outcome.business_outcome_observed
marketplace.outcome.positive_outcome_confirmed
marketplace.outcome.negative_outcome_detected
marketplace.outcome.customer_value_confirmed
marketplace.outcome.customer_value_disputed
marketplace.outcome.roi_signal_calculated
marketplace.outcome.durability_confirmed
marketplace.outcome.ranking_feedback_updated
marketplace.outcome.creator_coaching_recommended
marketplace.outcome.cs_playbook_triggered
```

---

## 22. Frontend Requirements

### 22.1 Marketplace Listing

Display outcome intelligence carefully.

Allowed:

- “High activation rate”
- “Usually delivers first value in 2 days”
- “Strong outcome score in customer support teams”
- “Low cost per successful run”
- “Customer-confirmed value from 180+ installations”

Avoid overpromising:

- “Guaranteed ROI”
- “Will double revenue”
- “Saves 90% cost for everyone”

### 22.2 Template Detail Page

Show:

- claimed outcomes
- measurable outcomes
- expected time to value
- required setup for outcome measurement
- benchmark stats
- confidence labels
- plan-specific outcome expectations
- outcome evidence disclaimers
- known limitations

### 22.3 Customer Installation Dashboard

Show:

- activation status
- outcome measurement progress
- baseline metrics
- interim results
- final results
- ROI estimate
- blockers
- recommended next actions
- customer feedback control

### 22.4 Creator Dashboard

Show:

- aggregate outcome performance
- anonymized feedback themes
- activation bottlenecks
- category benchmark
- improvement suggestions
- risk warnings
- documentation suggestions

### 22.5 Internal Admin Dashboard

Show:

- marketplace outcome map
- underperforming templates
- high-value templates
- high-risk high-revenue templates
- outcome disputes
- refund correlation
- creator outcome leaderboard
- category health
- plan segment performance

---

## 23. Backend Requirements

Backend must support:

- outcome profile registry
- metric definition registry
- baseline capture service
- outcome event ingestion
- attribution engine
- confidence scoring engine
- ROI signal calculator
- customer feedback service
- ranking feedback pipeline
- creator coaching pipeline
- customer success trigger service
- privacy-safe aggregation
- audit log
- enterprise report export

Outcome calculations must be versioned.

Changing outcome scoring logic must not silently rewrite historical reports without version disclosure.

---

## 24. Observability Events

Emit analytics events:

```ts
export type OutcomeIntelligenceEvent =
  | 'outcome_profile_created'
  | 'outcome_claim_registered'
  | 'baseline_capture_started'
  | 'baseline_capture_completed'
  | 'baseline_capture_failed'
  | 'activation_outcome_reached'
  | 'interim_outcome_calculated'
  | 'business_outcome_calculated'
  | 'customer_value_feedback_submitted'
  | 'customer_value_disputed'
  | 'roi_signal_generated'
  | 'negative_outcome_detected'
  | 'outcome_confidence_low'
  | 'ranking_feedback_sent'
  | 'creator_coaching_generated'
  | 'cs_playbook_triggered'
  | 'enterprise_outcome_report_exported';
```

Each event should include:

- template_id
- version_id
- installation_id where applicable
- customer_id where permitted
- plan
- outcome_domain
- confidence_score
- attribution_quality
- measurement_window
- actor type
- timestamp

---

## 25. Advanced KPIs

### 25.1 Template Outcome Achievement Rate

Percentage of measured installations that achieve a positive or partial outcome.

### 25.2 Durable Outcome Rate

Percentage of activated installations that preserve value after the durability window.

### 25.3 Median Time to First Value

Time from installation to first measurable customer value.

### 25.4 Customer-Confirmed Value Rate

Percentage of installations where customers confirm value.

### 25.5 Outcome Confidence Score

Average confidence in measured outcomes.

### 25.6 Cost per Successful Outcome

Total customer cost divided by successful outcome count.

### 25.7 Outcome-to-Ranking Correlation

How strongly ranking position aligns with actual outcomes.

### 25.8 Outcome-to-Retention Correlation

How strongly template outcomes correlate with retention and expansion.

### 25.9 Negative Outcome Rate

Percentage of measured installs that produce negative value, customer dispute, or harm.

### 25.10 Creator Outcome Quality Index

Aggregate creator-level score based on durable outcomes across templates.

### 25.11 Outcome Evidence Completeness

Percentage of claimed outcomes backed by sufficient evidence.

### 25.12 ROI Signal Coverage

Percentage of installations with calculable ROI or value proxy.

---

## 26. Security and Privacy Rules

Outcome intelligence must not expose customer-sensitive details.

Rules:

- aggregate creator-visible data by default
- redact customer identifiers unless authorized
- never expose raw customer business metrics to creators without permission
- honor data residency policy
- honor retention policy
- protect finance and revenue metrics
- restrict enterprise reports to authorized admins
- log all exports
- prevent creator self-inflation
- prevent customer PII in qualitative feedback unless explicitly allowed

---

## 27. Abuse and Manipulation Prevention

Outcome intelligence must detect manipulation.

Manipulation patterns:

- fake customer confirmations
- creator-influenced reviews
- artificially triggered success events
- install/uninstall cycling
- forced activation without value
- exaggerated ROI assumptions
- hidden cost externalization
- suppressing negative feedback
- fake baseline reduction
- selective measurement window manipulation

Ariyo must flag suspicious outcome patterns for Trust & Safety review.

---

## 28. AI Outcome Intelligence Assistant

Ariyo may provide an AI assistant for outcome intelligence.

Allowed assistant actions:

- summarize outcome performance
- suggest better metric definitions
- detect weak outcome claims
- identify activation blockers
- explain ROI caveats
- generate customer success playbook suggestions
- recommend creator improvements
- draft outcome report summaries
- identify suspicious outcome patterns

Forbidden assistant actions:

- fabricate ROI
- hide negative outcomes
- modify outcome score without audit
- expose private customer data to creators
- make legal compliance claims without evidence
- guarantee business results
- override customer dispute
- inflate ranking scores

---

## 29. Testing Requirements

Test cases must cover:

- no baseline available
- partial baseline available
- high usage but no outcome
- low usage but high outcome
- positive customer feedback with weak metrics
- strong metrics with customer dispute
- creator attempts to manipulate outcome
- negative outcome after high activation
- cost overrun despite business value
- plan-specific scoring differences
- enterprise export permissions
- ranking feedback update
- creator dashboard aggregation
- privacy redaction
- ROI caveat generation
- incident penalty application

---

## 30. Forbidden Outcome Intelligence Patterns

Do not:

- treat installs as outcomes
- treat views as outcomes
- treat revenue as proof of customer value
- allow creators to define success without validation
- guarantee ROI
- expose customer metrics to creators without permission
- rank templates highly despite repeated negative outcomes
- ignore support burden
- ignore refund signals
- ignore unsafe incidents
- hide confidence levels
- mix self-reported and verified outcomes without labels
- compare templates across categories without context
- calculate ROI without disclosing assumptions
- use outcome data in a way that violates data residency or privacy rules

---

## 31. Golden Rule

Ariyo Marketplace should not reward templates for being installed.

Ariyo Marketplace should reward templates for creating safe, measurable, durable customer value.

Outcome intelligence is how Ariyo proves that its Marketplace is not just growing — it is actually helping customers win.
