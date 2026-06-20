# Ariyo Marketplace Template Lifecycle Optimization Skill

## 1. Core Contract

Ariyo Marketplace Template Lifecycle Optimization is not occasional template maintenance.

It is the governed continuous-improvement system that uses outcome intelligence, health monitoring, customer feedback, creator performance, ranking signals, version telemetry, incident history, cost behavior, support burden, experimentation, and marketplace policy to improve templates after publication.

Ariyo must help great templates become better over time.

Ariyo must prevent stale, risky, low-performing, misleading, expensive, or unsupported templates from remaining visible, installable, or recommended simply because they were once approved.

Lifecycle optimization must connect:

- Customer outcomes
- Template quality
- Creator coaching
- Version promotion
- Experimentation
- Remediation
- Deprecation
- Ranking feedback
- Trust and safety
- Revenue quality
- Enterprise governance

The goal is not more templates.

The goal is better templates that keep producing measurable, safe, cost-justified, durable customer value.

---

## 2. What This Skill Governs

This skill governs post-publication optimization for:

- Public Marketplace templates
- Private catalog templates
- Internal enterprise templates
- AI Employee templates
- Agent Team templates
- Workflow templates
- Knowledge packs
- GEO templates
- Integration bundles
- Partner solution templates
- Creator-authored templates
- Ariyo-authored templates
- Forked templates
- Migrated templates
- Sponsored templates
- Enterprise-approved templates

It connects to:

- `marketplace-template-outcome-intelligence.md`
- `marketplace-template-health-monitoring.md`
- `marketplace-template-auto-remediation.md`
- `marketplace-template-dependency-registry.md`
- `marketplace-template-migration-portability.md`
- `template-quality-ranking-system.md`
- `marketplace-search-recommendation-engine.md`
- `marketplace-creator-success-system.md`
- `marketplace-policy-enforcement-rules.md`
- `marketplace-trust-safety-operations.md`
- `ai-agent-versioning-change-management.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-observability-tracing.md`
- `feature-flags-rollout-system.md`
- `customer-success-playbooks.md`
- `revenue-operations-system.md`

---

## 3. Lifecycle Optimization Principles

### 3.1 Outcome-first optimization

Templates should be optimized based on whether they help customers achieve real outcomes, not only whether they receive installs, clicks, stars, or purchases.

Optimization signals must include:

- Activation success
- Time to first value
- Outcome completion rate
- Customer-confirmed value
- ROI proxy signals
- Retention after install
- Repeat usage
- Workflow completion
- Support burden
- Unsafe output rate
- Cost per successful outcome
- Incident rate
- Creator responsiveness

### 3.2 Safety before growth

Ariyo must never increase template visibility, auto-promote a new version, or recommend an update if the template has unresolved safety, privacy, permission, compliance, region, billing, or dependency risk.

### 3.3 Continuous improvement without surprise

Templates may evolve, but customers must understand meaningful changes before those changes affect their environment.

Major changes require:

- Change summary
- Risk summary
- Permission delta
- Cost delta
- Dependency delta
- Version compatibility check
- Rollback path
- Approval gate when required

### 3.4 Creator accountability

Creators should receive actionable improvement guidance, but recurring poor quality must affect ranking, payout eligibility, trust score, certification, and publication privileges.

### 3.5 Enterprise governance compatibility

Enterprise customers may require:

- Manual approval for updates
- Frozen versions
- Department-specific lifecycle policy
- Private catalog promotion rules
- Security review before major changes
- Procurement review before paid expansion
- Audit evidence for every lifecycle decision

---

## 4. Lifecycle States

Every template must have a lifecycle state.

Recommended states:

- `draft`
- `submitted_for_review`
- `approved_for_publication`
- `published`
- `newly_published_monitoring`
- `growth_candidate`
- `recommended`
- `featured_candidate`
- `optimized`
- `needs_improvement`
- `under_creator_review`
- `under_platform_review`
- `limited_visibility`
- `update_required`
- `deprecated`
- `retirement_scheduled`
- `retired`
- `suspended`
- `removed`
- `archived`

Lifecycle state must influence:

- Search ranking
- Recommendations
- Install eligibility
- Update prompts
- Creator dashboard messages
- Customer warnings
- Enterprise catalog visibility
- Sponsored listing eligibility
- Payout review
- Support routing

---

## 5. Core Objects

### 5.1 TemplateLifecycleProfile

```json
{
  "template_id": "tpl_sales_followup_001",
  "current_lifecycle_state": "optimized",
  "published_at": "2026-06-01T09:00:00Z",
  "current_version": "2.4.1",
  "creator_id": "creator_123",
  "quality_score": 91,
  "outcome_score": 88,
  "health_score": 94,
  "trust_score": 93,
  "support_burden_score": 12,
  "risk_score": 9,
  "cost_efficiency_score": 87,
  "lifecycle_recommendation": "promote_visibility",
  "next_review_due_at": "2026-07-01T00:00:00Z"
}
```

### 5.2 LifecycleOptimizationSignal

A signal is an observation that may trigger optimization.

```json
{
  "signal_id": "sig_001",
  "template_id": "tpl_sales_followup_001",
  "signal_type": "low_activation_rate",
  "severity": "medium",
  "source": "outcome_intelligence",
  "observed_value": 0.31,
  "expected_value": 0.55,
  "recommendation": "improve_onboarding_steps",
  "created_at": "2026-06-19T11:00:00Z"
}
```

Signal types include:

- `low_install_to_activation`
- `high_uninstall_rate`
- `high_refund_rate`
- `high_support_ticket_rate`
- `broken_dependency`
- `dependency_drift`
- `cost_anomaly`
- `model_quality_degradation`
- `unsafe_output_increase`
- `low_customer_confirmed_value`
- `declining_repeat_usage`
- `negative_review_cluster`
- `misleading_claim_reported`
- `region_compatibility_change`
- `permission_scope_change_needed`
- `creator_unresponsive`
- `better_variant_detected`
- `enterprise_blocking_issue`

### 5.3 TemplateOptimizationPlan

```json
{
  "plan_id": "opt_plan_001",
  "template_id": "tpl_sales_followup_001",
  "priority": "high",
  "owner_type": "creator",
  "owner_id": "creator_123",
  "recommended_actions": [
    "shorten_activation_flow",
    "add_setup checklist",
    "reduce default model cost",
    "improve error handling for CRM disconnects"
  ],
  "expected_impact": {
    "activation_rate_delta": 0.18,
    "support_ticket_rate_delta": -0.22,
    "cost_per_successful_run_delta": -0.15
  },
  "requires_review": true,
  "deadline_at": "2026-06-30T00:00:00Z",
  "state": "open"
}
```

### 5.4 TemplateLifecycleDecision

```json
{
  "decision_id": "life_dec_001",
  "template_id": "tpl_sales_followup_001",
  "decision": "limit_visibility",
  "reason_codes": ["high_refund_rate", "creator_unresponsive"],
  "decided_by": "ariyo_marketplace_governance",
  "human_review_required": true,
  "customer_impact": "no_new_installs_existing_customers_unaffected",
  "reversal_conditions": [
    "refund_rate_below_threshold",
    "creator_submits_corrective_version",
    "corrective_version_passes_review"
  ],
  "created_at": "2026-06-19T12:00:00Z"
}
```

---

## 6. Optimization Signal Sources

The lifecycle system must consume signals from:

### 6.1 Outcome Intelligence

- Claimed outcome completion
- Customer-confirmed value
- Before/after improvement
- ROI proxy
- Business metric movement
- Negative outcomes
- Outcome durability

### 6.2 Health Monitoring

- Runtime failures
- Dependency drift
- Model degradation
- Knowledge staleness
- Safety health
- Cost anomalies
- Compliance drift
- Permission drift

### 6.3 Auto Remediation

- Successful remediations
- Failed remediations
- Repeated retry loops
- Escalation frequency
- Rollback frequency
- Safe mode activations

### 6.4 Customer Feedback

- Ratings
- Reviews
- Support tickets
- Refund reasons
- Uninstall reasons
- Dispute history
- Customer success notes

### 6.5 Creator Behavior

- Response time
- Update frequency
- Review quality
- Documentation quality
- Incident cooperation
- Appeal history
- Certification status

### 6.6 Marketplace Behavior

- Search impressions
- Click-through rate
- Install conversion
- Activation conversion
- Recommendation conversion
- Sponsored listing performance
- Category rank performance

### 6.7 Governance Signals

- Policy violations
- Trust & Safety reviews
- Compliance evidence freshness
- Vendor status
- Region policy changes
- Procurement blocks
- Private catalog approval changes

---

## 7. Optimization Actions

The system may recommend or perform actions depending on risk and governance settings.

### 7.1 Low-risk optimization actions

These may often be recommended automatically:

- Improve template listing copy
- Add clearer setup instructions
- Add missing screenshots or walkthroughs
- Improve category tags
- Add FAQ entries
- Add plan-fit explanation
- Add expected cost disclosure
- Add required integration checklist
- Improve outcome claims
- Add onboarding checklist

### 7.2 Medium-risk optimization actions

These usually require creator action and review:

- Change default prompt behavior
- Change default model profile
- Update tool call settings
- Improve error handling
- Modify workflow sequence
- Add fallback model
- Add safety guardrail
- Add cost cap
- Change default permissions
- Change memory behavior
- Update knowledge sources

### 7.3 High-risk optimization actions

These require stricter review:

- Expand permissions
- Add new integration dependency
- Add new vendor or subprocessor
- Change data residency behavior
- Change billing behavior
- Change autonomous action behavior
- Change human approval requirements
- Modify customer-facing output in regulated workflows
- Promote private template to public marketplace
- Auto-update installed customer environments

---

## 8. Continuous Improvement Loop

Ariyo should run the following loop continuously:

1. Collect lifecycle signals.
2. Normalize signals by category, plan, customer segment, region, and version.
3. Detect quality, health, safety, cost, outcome, and ranking gaps.
4. Generate optimization opportunities.
5. Prioritize opportunities by customer impact and risk.
6. Recommend actions to creator, partner, or Ariyo operator.
7. Validate proposed changes through tests, simulation, evaluation, and policy review.
8. Roll out changes using versioning and feature flags.
9. Monitor post-change impact.
10. Feed results into ranking, recommendations, creator success, and governance.

---

## 9. Outcome-Driven Update Rules

A template update should be encouraged when:

- Outcome score is declining.
- Activation rate is below category benchmark.
- Support burden is above threshold.
- Cost per successful outcome is too high.
- Customer feedback identifies repeated confusion.
- Runtime health degrades.
- Integration dependencies drift.
- Model behavior changes.
- Security or compliance evidence expires.
- Better prompt/tool design is proven through evaluation.

A template update should be blocked when:

- Proposed changes increase risk without review.
- Permissions expand silently.
- Data movement changes silently.
- Cost behavior changes silently.
- New vendor/subprocessor is introduced without evidence.
- Customer approval is required but missing.
- Evaluation fails.
- Simulation fails.
- Policy review fails.

---

## 10. Version Promotion Rules

A new version may be promoted from candidate to recommended only when:

- Automated validation passes.
- Safety evaluation passes.
- Dependency registry compatibility passes.
- Region compatibility passes.
- Cost prediction is acceptable.
- Outcome simulation is acceptable.
- Existing customer migration path is clear.
- Rollback path exists.
- Required creator/customer/admin approvals are complete.

Promotion levels:

- `candidate`
- `limited_rollout`
- `recommended_update`
- `default_for_new_installs`
- `auto_update_eligible`
- `enterprise_approval_required`
- `blocked`

---

## 11. Experimentation and Optimization

Ariyo may run marketplace lifecycle experiments when safe.

Experiment types:

- Listing copy experiment
- Onboarding flow experiment
- Default configuration experiment
- Model profile experiment
- Cost cap experiment
- Tool fallback experiment
- Knowledge source refresh experiment
- Recommendation placement experiment
- Category positioning experiment
- Pricing packaging experiment

Experiments must not:

- Bypass policy enforcement
- Hide sponsored status
- Expand permissions silently
- Change sensitive workflows without approval
- Increase AI cost unpredictably
- Use sensitive personal data for targeting
- Degrade safety controls
- Mislead customers

---

## 12. Deprecation Triggers

Templates must be considered for deprecation when:

- Outcome score remains low after improvement attempts.
- Creator is unresponsive.
- Template has repeated incidents.
- Dependencies are deprecated.
- Vendor is suspended.
- Model provider support is removed.
- Compliance evidence expires and is not renewed.
- Customers repeatedly uninstall for the same reason.
- Support burden exceeds acceptable threshold.
- Better replacement template exists.
- Template claims are outdated or misleading.
- Costs are no longer predictable.

Deprecation must include:

- Customer notification
- Replacement recommendation
- Migration path
- Export option when applicable
- Sunset date
- Support window
- Rollback/archive plan
- Audit trail

---

## 13. Retirement Rules

A template may be retired when:

- It is no longer safe.
- It is no longer functional.
- It is legally or contractually invalid.
- Its vendor dependency is unavailable.
- Its creator is removed or banned.
- It violates policy repeatedly.
- It has no viable migration path but must stop new installs.

Retirement behavior:

- Hide from public discovery.
- Block new installs.
- Keep existing customers informed.
- Provide migration guidance.
- Preserve audit records.
- Maintain evidence for disputes and compliance.

---

## 14. Customer Communication Rules

Customers must receive clear lifecycle messages when:

- A recommended update is available.
- A required update is available.
- Template health is degraded.
- Template is deprecated.
- Template is being retired.
- Template permissions change.
- Template cost behavior changes.
- Vendor or dependency changes.
- Data region behavior changes.
- Migration is recommended.

Messages should include:

- What changed
- Why it matters
- Customer impact
- Required action
- Deadline
- Risk level
- Cost impact
- Permission impact
- Rollback option
- Support path

---

## 15. Creator Optimization Dashboard

Creators should see:

- Template lifecycle state
- Quality score
- Outcome score
- Health score
- Trust score
- Activation funnel
- Support burden
- Refund reasons
- Uninstall reasons
- Ranking trend
- Search visibility
- Recommendation eligibility
- Incident history
- Required fixes
- Suggested improvements
- Benchmark comparisons
- Revenue quality
- Upcoming review deadlines

The dashboard must distinguish:

- Required fixes
- Strong recommendations
- Optional improvements
- Growth opportunities
- Policy risks
- Enterprise blockers

---

## 16. Internal Marketplace Ops Dashboard

Ariyo operators need:

- Templates needing improvement
- Templates needing review
- Templates with worsening outcomes
- Templates with high support burden
- Templates with high revenue but low value
- Templates with high install but low activation
- Templates with sponsor risk
- Templates with suspicious optimization behavior
- Templates approaching deprecation
- Templates eligible for featured placement
- Creator responsiveness trends
- Category health overview

---

## 17. Ranking Feedback Integration

Lifecycle optimization must feed ranking systems.

Positive ranking signals:

- Outcome improvement
- Health improvement
- Reduced support burden
- Strong customer-confirmed value
- Successful version adoption
- Low-cost successful operation
- Creator responsiveness
- Stable dependencies
- High enterprise approval rate

Negative ranking signals:

- Unresolved improvement plan
- Repeated update failures
- Support burden increase
- Cost anomaly recurrence
- Incident recurrence
- Declining activation
- Declining outcome score
- Creator unresponsiveness
- Pending policy review
- Deprecation scheduled

---

## 18. Basic / Pro / Smart Lifecycle Rules

### 18.1 Basic

Basic lifecycle optimization must favor:

- Simplicity
- Low risk
- Low setup burden
- Low AI cost
- Clear onboarding
- No surprise permissions
- Stable default behavior

Basic templates should be flagged for optimization when:

- Setup takes too long.
- Activation fails frequently.
- Customer confusion is high.
- Cost exceeds expectation.
- Too many integrations are required.

### 18.2 Pro

Pro lifecycle optimization must favor:

- Operational reliability
- Team workflow success
- Integration resilience
- Admin controls
- Collaboration outcomes
- Business process continuity

Pro templates should be optimized when:

- Workflow completion declines.
- Team adoption is low.
- Integration errors increase.
- Admin intervention is frequent.
- Support tickets cluster around setup or permissions.

### 18.3 Smart

Smart lifecycle optimization must favor:

- Advanced multi-agent quality
- Strong evaluation gates
- Model routing quality
- Automation safety
- Cost intelligence
- Governance compatibility
- Enterprise readiness

Smart templates require stricter lifecycle control when:

- Autonomous actions change.
- Model providers change.
- Tool permissions expand.
- Memory or RAG behavior changes.
- Cost volatility increases.
- AI safety evaluation changes.

---

## 19. API Contract

### 19.1 Get Lifecycle Profile

`GET /api/v1/marketplace/templates/{template_id}/lifecycle-profile`

Response:

```json
{
  "template_id": "tpl_001",
  "lifecycle_state": "needs_improvement",
  "quality_score": 74,
  "outcome_score": 68,
  "health_score": 81,
  "risk_score": 22,
  "open_optimization_plans": 2,
  "recommended_actions": [
    "improve_activation_flow",
    "reduce_support_ticket_cluster"
  ]
}
```

### 19.2 Create Optimization Plan

`POST /api/v1/marketplace/templates/{template_id}/optimization-plans`

Request:

```json
{
  "priority": "high",
  "reason_codes": ["low_activation_rate", "high_support_burden"],
  "recommended_actions": ["simplify_setup", "add_integration_precheck"],
  "owner_type": "creator",
  "deadline_at": "2026-07-01T00:00:00Z"
}
```

### 19.3 Submit Lifecycle Update

`POST /api/v1/marketplace/templates/{template_id}/lifecycle-updates`

Request:

```json
{
  "version": "2.5.0",
  "change_summary": "Improved activation setup and added CRM reconnect fallback.",
  "permission_delta": [],
  "dependency_delta": ["crm_reconnect_flow"],
  "cost_delta_estimate": "neutral",
  "requires_customer_approval": false
}
```

### 19.4 Evaluate Version Promotion

`POST /api/v1/marketplace/templates/{template_id}/versions/{version}/promotion-evaluate`

Response:

```json
{
  "promotion_decision": "limited_rollout",
  "passed_checks": ["safety", "dependency", "cost", "simulation"],
  "failed_checks": [],
  "required_approvals": [],
  "recommended_rollout_percentage": 10
}
```

### 19.5 Deprecate Template

`POST /api/v1/marketplace/templates/{template_id}/deprecate`

Request:

```json
{
  "reason_codes": ["dependency_deprecated", "low_outcome_score"],
  "sunset_at": "2026-09-01T00:00:00Z",
  "replacement_template_ids": ["tpl_009"],
  "customer_message": "This template will be retired because its CRM dependency is no longer supported."
}
```

---

## 20. Webhooks

Recommended webhooks:

- `template.lifecycle_state_changed`
- `template.optimization_plan_created`
- `template.optimization_plan_completed`
- `template.version_promotion_evaluated`
- `template.update_recommended`
- `template.update_required`
- `template.deprecation_scheduled`
- `template.retired`
- `template.ranking_feedback_updated`
- `template.creator_action_required`

Webhook payload:

```json
{
  "event": "template.lifecycle_state_changed",
  "template_id": "tpl_001",
  "previous_state": "published",
  "new_state": "needs_improvement",
  "reason_codes": ["low_activation_rate"],
  "occurred_at": "2026-06-19T10:00:00Z"
}
```

---

## 21. Observability Events

Track:

- `template_lifecycle_profile_viewed`
- `template_lifecycle_signal_detected`
- `template_optimization_plan_created`
- `template_optimization_action_suggested`
- `creator_optimization_action_completed`
- `template_version_promotion_started`
- `template_version_promotion_passed`
- `template_version_promotion_failed`
- `template_update_recommended_to_customer`
- `template_update_accepted_by_customer`
- `template_update_rejected_by_customer`
- `template_deprecation_scheduled`
- `template_retirement_completed`
- `template_lifecycle_ranking_feedback_sent`

Every event should include:

- `template_id`
- `version`
- `creator_id`
- `organization_id` when customer-specific
- `plan_tier`
- `risk_level`
- `reason_codes`
- `source_system`
- `actor_type`
- `timestamp`

---

## 22. Advanced KPIs

### 22.1 Template Improvement Completion Rate

Percentage of required optimization plans completed before deadline.

### 22.2 Outcome Recovery Rate

Percentage of declining templates whose outcome score improves after optimization.

### 22.3 Update Adoption Rate

Percentage of eligible customers who adopt recommended updates.

### 22.4 Post-update Incident Rate

Incidents per template version after rollout.

### 22.5 Deprecation Avoidance Rate

Percentage of at-risk templates saved through successful improvement.

### 22.6 Creator Responsiveness SLA

Median time for creators to respond to required lifecycle actions.

### 22.7 Ranking Quality Feedback Loop Accuracy

How often lifecycle ranking adjustments correlate with better outcomes.

### 22.8 Cost Efficiency Improvement

Reduction in cost per successful outcome after optimization.

### 22.9 Support Burden Reduction

Decrease in tickets per active installation after lifecycle improvement.

### 22.10 Safe Auto-update Rate

Percentage of updates safely applied without human escalation or rollback.

---

## 23. AI Lifecycle Optimization Assistant

Ariyo may provide an AI assistant to help creators and operators improve templates.

The assistant may:

- Summarize lifecycle issues
- Explain declining metrics
- Suggest improvement actions
- Draft update notes
- Identify likely root causes
- Compare template against category benchmarks
- Generate experiment ideas
- Recommend deprecation alternatives
- Prepare creator coaching guidance
- Draft customer update explanations

The assistant must not:

- Publish changes automatically without required approval
- Hide risk from customers
- Recommend unsafe permission expansion
- Overstate expected ROI
- Fabricate benchmark data
- Override policy enforcement
- Disable required reviews
- Treat sponsored performance as quality proof

---

## 24. Security, Privacy, and Compliance Rules

Lifecycle optimization must respect:

- Customer data boundaries
- Organization permission model
- Creator visibility limits
- Privacy-safe analytics
- Data residency controls
- Enterprise catalog restrictions
- Procurement approval requirements
- Vendor/subprocessor evidence
- Audit retention policy
- Incident evidence preservation

Creators must not see customer-sensitive details unless explicitly authorized.

Optimization insights should aggregate customer data when possible.

---

## 25. Forbidden Lifecycle Patterns

Ariyo must never:

- Promote a template only because it generates revenue.
- Keep a risky template visible because it is popular.
- Auto-update a customer environment when approval is required.
- Hide lifecycle degradation from customers.
- Allow creators to suppress negative signals.
- Ignore support burden when ranking templates.
- Deprecate templates without migration guidance when customers are affected.
- Promote a version without dependency compatibility checks.
- Use fake or manipulated reviews as optimization evidence.
- Treat install count as outcome proof.
- Allow sponsored placement to override lifecycle risk.
- Let stale templates remain recommended indefinitely.
- Allow lifecycle decisions without audit trail.

---

## 26. Golden Rule

Ariyo Marketplace Template Lifecycle Optimization must continuously improve the marketplace without compromising trust.

A template deserves more visibility only when it becomes safer, clearer, healthier, more useful, more measurable, more reliable, and more valuable for customers.

