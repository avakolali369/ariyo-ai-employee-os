# Ariyo Marketplace Template Experimentation System Skill

## Core Contract

Ariyo Marketplace Template Experimentation System is not casual A/B testing on customer workflows.

It is the governed experimentation system that allows Ariyo, trusted creators, partners, enterprise admins, and marketplace operators to safely test template variants, rollout strategies, ranking changes, pricing changes, onboarding changes, copy changes, AI behavior changes, model profiles, workflow logic, knowledge sources, and recommendation strategies without harming customers, violating governance, increasing unsafe output, distorting marketplace trust, or creating untraceable business risk.

Ariyo may experiment only when the experiment is safe, measurable, reversible, consent-aware where required, policy-compliant, statistically interpretable, customer-protective, cost-bounded, permission-scoped, and auditable.

Ariyo must never optimize short-term conversion at the expense of customer trust, safety, compliance, cost predictability, creator fairness, or long-term marketplace quality.

---

## 1. Purpose

This skill defines how Ariyo designs, approves, launches, monitors, stops, analyzes, and productizes experiments involving Marketplace templates and related marketplace surfaces.

It governs experiments for:

- AI Employee templates
- Agent Team templates
- Workflow templates
- GEO templates
- Knowledge packs
- Integration bundles
- Marketplace listing pages
- Marketplace search and recommendation results
- Template onboarding and install flows
- Private catalog experiences
- Template pricing and packaging
- Template ranking and quality loops
- Creator guidance and optimization recommendations
- Customer success playbooks triggered by template usage
- AI model routing and fallback behavior within template variants
- Safety, cost, health, and outcome intelligence improvements

The system ensures Ariyo can learn quickly while protecting real customers from unsafe, misleading, expensive, unfair, or non-compliant experimentation.

---

## 2. Related Ariyo Skills

This skill must integrate with:

- `template-quality-ranking-system.md`
- `marketplace-search-recommendation-engine.md`
- `marketplace-installation-entitlements.md`
- `marketplace-billing-payouts.md`
- `marketplace-dispute-resolution.md`
- `marketplace-trust-safety-operations.md`
- `marketplace-policy-enforcement-rules.md`
- `marketplace-creator-success-system.md`
- `marketplace-partner-operations.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-enterprise-vendor-management.md`
- `marketplace-enterprise-audit-reports.md`
- `marketplace-compliance-evidence-center.md`
- `marketplace-regulatory-compliance-matrix.md`
- `marketplace-data-residency-region-controls.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-internal-template-governance.md`
- `marketplace-template-migration-portability.md`
- `marketplace-template-dependency-registry.md`
- `marketplace-template-health-monitoring.md`
- `marketplace-template-auto-remediation.md`
- `marketplace-template-outcome-intelligence.md`
- `marketplace-template-lifecycle-optimization.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-simulation-sandbox.md`
- `ai-agent-versioning-change-management.md`
- `ai-agent-observability-tracing.md`
- `ai-agent-incident-response.md`
- `feature-flags-rollout-system.md`
- `observability-analytics-events.md`
- `product-analytics-growth.md`
- `pricing-packaging-strategy.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`

---

## 3. What Counts as a Marketplace Experiment

A Marketplace experiment is any controlled change where Ariyo intentionally compares one or more variants against a baseline.

### 3.1 Template Behavior Experiments

Examples:

- Prompt variant comparison
- AI model profile comparison
- Workflow step reordering
- Tool-use strategy comparison
- Knowledge source retrieval strategy comparison
- Agent team role assignment comparison
- Human review placement comparison
- Automation threshold comparison
- Error recovery policy comparison
- Cost-control policy comparison

### 3.2 Marketplace Surface Experiments

Examples:

- Listing page copy variants
- Trust badge display variants
- Pricing page presentation variants
- Search result ordering variants
- Recommendation explanation variants
- Category layout variants
- Install preview layout variants
- Private catalog onboarding variants
- Creator profile presentation variants
- Sponsored listing disclosure variants

### 3.3 Commercial Experiments

Examples:

- Template price point tests
- Free trial vs paid install tests
- Usage-based vs subscription packaging tests
- Discount or coupon tests
- Revenue share experiments
- Enterprise approval friction tests
- Creator incentive experiments

Commercial experiments must not bypass billing governance, disclosure rules, procurement workflows, tax readiness, or refund policy.

### 3.4 Governance Experiments

Examples:

- Review checklist variants
- Trust score threshold tests
- Security approval flow tests
- Creator education flow tests
- Evidence request flow tests
- Policy warning message tests
- Remediation strategy tests

Governance experiments must never reduce safety controls without explicit approval.

---

## 4. Experiment Philosophy

Ariyo experimentation must follow these principles:

1. **Safety before growth**  
   No experiment may improve installs while increasing unsafe output, data exposure, policy violation, or uncontrolled cost.

2. **Outcomes before clicks**  
   Winning variants must improve real customer outcomes, not only views, clicks, installs, or purchases.

3. **Trust before revenue**  
   Revenue-positive but trust-negative experiments must fail.

4. **Reversibility by default**  
   Experiments must be rollback-ready before launch.

5. **Least exposure**  
   Start with the smallest safe audience that can produce useful signal.

6. **Guardrails over averages**  
   A variant with strong average performance but serious harm to a small segment must not be promoted blindly.

7. **Plan-aware experimentation**  
   Basic, Pro, and Smart customers require different risk boundaries.

8. **Creator fairness**  
   Marketplace ranking or visibility experiments must not unfairly punish creators without measurement, auditability, and guardrails.

9. **Enterprise respect**  
   Enterprise customers must be able to opt out of or restrict experiments according to governance settings.

10. **Evidence-backed decisions**  
    Experiment decisions must be based on data, policy, and outcome evidence, not internal preference.

---

## 5. Experiment Object Model

### 5.1 MarketplaceExperiment

```json
{
  "id": "exp_marketplace_001",
  "name": "Install Preview Trust Badge Test",
  "type": "listing_page_experiment",
  "status": "draft",
  "owner_team": "marketplace_growth",
  "risk_tier": "medium",
  "hypothesis": "Showing security review evidence before install will increase qualified installs without increasing support tickets.",
  "primary_metric": "qualified_install_rate",
  "guardrail_metrics": [
    "unsafe_output_rate",
    "refund_rate",
    "support_ticket_rate",
    "cost_overrun_rate",
    "enterprise_block_rate"
  ],
  "variants": ["control", "variant_a"],
  "target_population": {
    "plans": ["Pro", "Smart"],
    "regions": ["eu", "us"],
    "excluded_customers": ["enterprise_experiment_opt_out"]
  },
  "approval_required": true,
  "rollback_strategy": "feature_flag_disable",
  "created_at": "2026-06-19T00:00:00Z"
}
```

### 5.2 ExperimentVariant

```json
{
  "experiment_id": "exp_marketplace_001",
  "variant_key": "variant_a",
  "description": "Install preview includes compliance evidence summary and vendor trust score.",
  "traffic_allocation": 0.10,
  "feature_flags": ["install_preview_trust_summary_v2"],
  "template_version_ids": [],
  "model_profile_ids": [],
  "pricing_policy_id": null,
  "safety_policy_id": "standard_marketplace_safety_v1"
}
```

### 5.3 ExperimentApproval

```json
{
  "experiment_id": "exp_marketplace_001",
  "approver_role": "trust_safety_reviewer",
  "decision": "approved",
  "conditions": [
    "max_traffic_10_percent",
    "auto_stop_if_refund_rate_increases_20_percent",
    "exclude_smart_enterprise_customers_without_opt_in"
  ],
  "approved_at": "2026-06-19T00:00:00Z"
}
```

### 5.4 ExperimentResult

```json
{
  "experiment_id": "exp_marketplace_001",
  "status": "completed",
  "decision": "promote_variant_a",
  "primary_metric_lift": 0.084,
  "guardrail_status": "passed",
  "customer_outcome_delta": 0.041,
  "risk_delta": -0.012,
  "revenue_delta": 0.039,
  "confidence_summary": "sufficient_directional_confidence",
  "notes": "Variant improved qualified installs and reduced support tickets among Pro customers. Smart enterprise segment requires separate test."
}
```

---

## 6. Experiment Types

### 6.1 Listing Page Experiments

Used to test:

- Headline copy
- Trust badge placement
- Install CTA wording
- Creator profile modules
- Screenshots and demos
- Risk disclosure display
- Pricing display
- Evidence center links
- Outcome proof blocks

Guardrails:

- Must not hide pricing limitations
- Must not obscure risk disclosures
- Must not exaggerate claims
- Must not misrepresent creator qualifications
- Must not reduce sponsored disclosure clarity

### 6.2 Search Ranking Experiments

Used to test:

- Hybrid ranking weights
- Semantic relevance scoring
- Template quality score weighting
- Outcome intelligence weighting
- Freshness weighting
- Creator reputation weighting
- Sponsored listing placement
- Plan-aware ranking filters

Guardrails:

- Suspended or unsafe templates must never appear
- Sponsored listings must remain labeled
- Revenue-only ranking is forbidden
- Region-blocked templates must remain hidden
- Private catalog rules must override public ranking

### 6.3 Recommendation Experiments

Used to test:

- Onboarding recommendations
- Similar template recommendations
- Cross-sell recommendations
- Upgrade recommendations
- Enterprise-approved asset suggestions
- Creator bundle recommendations
- Post-install optimization suggestions

Guardrails:

- Must not recommend templates requiring unavailable entitlements
- Must not recommend high-risk templates to Basic customers
- Must not recommend region-incompatible assets
- Must not recommend vendor-blocked assets
- Must not use sensitive personal attributes for targeting

### 6.4 Template Behavior Experiments

Used to test:

- Prompt variants
- Workflow variants
- Agent role variants
- Retrieval strategy variants
- Model routing variants
- Escalation threshold variants
- Auto-remediation variants

Guardrails:

- Must pass simulation before exposure
- Must have rollback capability
- Must have cost limit
- Must preserve permission boundaries
- Must not reduce human review where required
- Must not change customer-facing outputs in regulated workflows without approval

### 6.5 Pricing Experiments

Used to test:

- Monthly price
- Usage-based add-ons
- Trial duration
- Bundle discount
- Creator revenue split
- Enterprise private offer presentation

Guardrails:

- Must preserve billing disclosure
- Must support refund logic
- Must not create hidden charges
- Must respect procurement approvals
- Must log price shown at purchase
- Must not create unfair creator payout inconsistency without policy

### 6.6 Creator Success Experiments

Used to test:

- Creator onboarding education
- Certification steps
- Quality coaching prompts
- Revenue analytics dashboards
- Template improvement recommendations
- Creator health score displays

Guardrails:

- Must not mislead creators about ranking guarantees
- Must not promise revenue outcomes
- Must not encourage policy evasion
- Must not recommend unsafe template shortcuts

### 6.7 Enterprise Governance Experiments

Used to test:

- Procurement approval UX
- Security questionnaire workflows
- Evidence package presentation
- Private catalog request flow
- Vendor approval flow
- Audit report builder flows

Guardrails:

- Enterprise approval requirements must not be bypassed
- Legal/security evidence must not be hidden
- Customer opt-out settings must be respected
- Audit logs must remain complete

---

## 7. Experiment Risk Tiers

### 7.1 Low Risk

Examples:

- Marketplace listing copy changes
- Non-critical layout changes
- Badge placement tests
- Creator education copy
- Help tooltip variants

Allowed controls:

- Product owner approval
- Feature flag rollout
- Standard analytics

### 7.2 Medium Risk

Examples:

- Search ranking weight changes
- Recommendation algorithm changes
- Install flow changes
- Pricing display changes
- Creator dashboard guidance changes

Required controls:

- Product approval
- Analytics approval
- Trust and safety review
- Guardrail metrics
- Rollback plan

### 7.3 High Risk

Examples:

- Template behavior changes affecting outputs
- AI model routing changes
- Permission request changes
- Auto-remediation changes
- Pricing amount experiments
- Enterprise procurement flow changes
- Safety policy threshold changes

Required controls:

- Marketplace governance approval
- Safety simulation
- Security/privacy review
- Legal/compliance review where applicable
- Customer segment restrictions
- Real-time monitoring
- Automatic stop rules

### 7.4 Prohibited Experiments

Experiments are prohibited when they:

- Hide or reduce safety disclosures
- Expose customer data to unapproved vendors
- Bypass procurement approval
- Use sensitive personal attributes for targeting
- Promote unsafe assets
- Remove required human review
- Experiment on regulated outcomes without approval
- Create hidden charges
- Bypass region or residency rules
- Favor sponsored listings without disclosure
- Test misleading claims
- Disable audit logging

---

## 8. Experiment Lifecycle

### 8.1 Draft

The experiment owner defines:

- Hypothesis
- Baseline
- Variants
- Target audience
- Metrics
- Guardrails
- Risk tier
- Required approvals
- Rollback plan
- Data requirements
- Privacy impact
- Customer impact

### 8.2 Preflight Validation

Ariyo validates:

- Feature flags exist
- Variants are configured
- Metrics are instrumented
- Guardrails are measurable
- Audience is valid
- Entitlements are respected
- Region controls are respected
- Private catalog controls are respected
- Safety simulation is complete when required
- Rollback is possible

### 8.3 Approval

Approvers may include:

- Product owner
- Data/analytics owner
- Trust and safety reviewer
- Security reviewer
- Privacy reviewer
- Compliance reviewer
- Billing reviewer
- Marketplace operations reviewer
- Enterprise governance reviewer

### 8.4 Ramp

Traffic should ramp progressively:

1. Internal dogfood
2. Sandbox environments
3. Small low-risk cohort
4. Limited plan-specific cohort
5. Expanded cohort
6. Full rollout candidate

### 8.5 Monitor

Monitor:

- Primary metric
- Guardrail metrics
- Segment-level impact
- Customer complaints
- Creator impact
- Cost drift
- Incident signals
- Support burden
- Refund/dispute signals
- Safety outputs
- Enterprise opt-out violations

### 8.6 Stop or Continue

An experiment must stop when:

- Guardrail threshold is breached
- Incident is detected
- Cost overrun occurs
- Complaint spike occurs
- Unsafe output increases
- Refund/dispute rate rises materially
- Enterprise governance violation occurs
- Data quality is invalid
- Variant behavior deviates from approved design

### 8.7 Analyze

Analysis must include:

- Overall metric effect
- Segment effects
- Plan effects
- Region effects
- Template category effects
- Customer lifecycle effects
- Creator effects
- Safety impact
- Cost impact
- Support impact
- Long-term outcome signal where available

### 8.8 Decide

Allowed decisions:

- Promote variant
- Continue experiment
- Expand traffic
- Modify and retest
- Stop without promotion
- Roll back immediately
- Require human review
- Escalate to governance board
- Convert to permanent product change

### 8.9 Archive

Every experiment must archive:

- Hypothesis
- Configuration
- Approvals
- Metrics
- Results
- Decision
- Rollout history
- Rollback status
- Incident links
- Customer impact notes
- Evidence package

---

## 9. Metrics Framework

### 9.1 Primary Metrics

Possible primary metrics:

- Qualified install rate
- Install-to-activation rate
- Activation-to-outcome rate
- Outcome completion rate
- Time to first value
- Search success rate
- Recommendation acceptance rate
- Upgrade conversion rate
- Customer-confirmed value rate
- Creator template improvement rate
- Enterprise approval completion rate

### 9.2 Guardrail Metrics

Guardrail metrics are mandatory for medium/high-risk experiments.

Examples:

- Unsafe output rate
- Incident rate
- Refund rate
- Dispute rate
- Support ticket rate
- Uninstall rate
- Cost per successful run
- Budget overrun rate
- Permission escalation rate
- Vendor risk exposure
- Region policy violation rate
- Security review failure rate
- Customer complaint rate
- Enterprise opt-out violation rate

### 9.3 Marketplace Quality Metrics

- Template quality score delta
- Template trust score delta
- Outcome intelligence score delta
- Ranking fairness score
- Creator diversity score
- Sponsored listing quality ratio
- Review authenticity score
- Search result safety ratio

### 9.4 Commercial Metrics

- Revenue per qualified install
- Refund-adjusted revenue
- Net revenue retention impact
- Creator payout quality ratio
- Marketplace gross margin
- Upgrade intent quality
- Enterprise procurement completion rate

Commercial wins are invalid if trust/safety guardrails fail.

---

## 10. Experiment Guardrails

### 10.1 Safety Guardrails

- No increase in unsafe output above threshold
- No bypass of human review where required
- No unapproved AI model provider routing
- No hallucinated compliance or legal claims
- No unsafe automation escalation

### 10.2 Privacy Guardrails

- No sensitive targeting without policy basis
- No cross-tenant leakage
- No unapproved vendor/subprocessor exposure
- No region policy violation
- No use of hidden customer content for experiment targeting

### 10.3 Billing Guardrails

- No hidden charges
- No unapproved price changes
- No entitlement mismatch
- No creator payout mismatch
- No refund policy inconsistency

### 10.4 Marketplace Trust Guardrails

- No manipulation of ranking without disclosure and audit
- No suppression of legitimate creators for unfair advantage
- No unlabeled sponsored placement
- No experiment that promotes low-quality assets
- No fake scarcity, fake urgency, or misleading social proof

### 10.5 Enterprise Guardrails

- Respect experiment opt-out
- Respect private catalog rules
- Respect procurement approval chains
- Respect vendor approval state
- Respect audit evidence requirements

---

## 11. Plan-Aware Experiment Rules

### 11.1 Basic Plan

Basic plan experiments must be:

- Simple
- Low-risk
- Low-cost
- Easy to understand
- Reversible
- Limited in automation depth

Allowed examples:

- Listing copy tests
- Basic onboarding recommendation tests
- Low-risk template category tests
- Help tooltip tests

Restricted examples:

- Advanced workflow behavior changes
- Multi-agent routing changes
- Pricing complexity tests
- High-risk automation experiments

### 11.2 Pro Plan

Pro plan experiments may include:

- Workflow template variants
- Team template recommendations
- Integration setup improvements
- Operational outcome optimization
- Creator quality coaching
- Moderate search/ranking experiments

Required:

- Guardrail metrics
- Rollback capability
- Support burden monitoring
- Integration health monitoring

### 11.3 Smart Plan

Smart plan experiments may include:

- Advanced agent team behavior
- Smart model routing
- GEO template optimization
- Knowledge/RAG variants
- Advanced automation variants
- Enterprise controls
- Outcome intelligence weighting

Required:

- Strong simulation
- Customer governance awareness
- Cost caps
- Human escalation
- Audit evidence
- Region/vendor/model compatibility

Smart experiments must not imply unlimited risk tolerance.

---

## 12. Creator Experimentation

Creators may request experiments for:

- Template copy
- Pricing
- Template variants
- Onboarding steps
- Documentation
- Demo flows
- Category positioning
- Suggested workflows

Ariyo must approve creator experiments based on:

- Creator trust score
- Template quality score
- Risk tier
- Customer exposure
- Policy compliance
- Refund/dispute history
- Support burden
- Outcome intelligence

Creators must not:

- Run unapproved live behavior experiments
- Hide risk disclosures
- Manipulate reviews
- Create fake installs
- Use misleading claims
- Experiment with unsafe prompts
- Increase permissions without review
- Change pricing disclosure without approval

---

## 13. Ranking Experiments

Ranking experiments must be especially controlled because they affect creator visibility, customer discovery, revenue, and marketplace fairness.

### 13.1 Ranking Experiment Inputs

- Relevance score
- Template quality score
- Trust score
- Outcome score
- Health score
- Creator reputation
- Freshness
- Region compatibility
- Plan compatibility
- Sponsored eligibility
- Customer lifecycle stage

### 13.2 Ranking Experiment Guardrails

- Unsafe templates remain blocked
- Suspended creators remain blocked
- Sponsored listings remain labeled
- Private catalog rules override experiments
- Enterprise allowlists override experiments
- Region restrictions override experiments
- High refund/dispute templates are penalized

### 13.3 Ranking Fairness Checks

Ariyo must monitor:

- Creator concentration
- New creator exposure
- Category diversity
- Sponsored vs organic balance
- Trust score distribution
- Outcome quality by rank
- Incident rate by rank
- Customer segment fairness

---

## 14. Pricing Experiments

Pricing experiments are financial governance events.

They must include:

- Price shown audit log
- Customer segment eligibility
- Refund compatibility
- Creator payout impact
- Tax impact review where applicable
- Revenue recognition compatibility
- Procurement compatibility
- Billing provider support

Forbidden:

- Hidden price changes
- Retroactive charges
- Unclear renewal price
- Unclear trial conversion
- Inconsistent checkout vs invoice price
- Enterprise pricing experiments without approval
- Payout changes without creator disclosure where required

---

## 15. AI Behavior Experiments

AI behavior experiments include prompt, model, retrieval, workflow, and tool-use variants.

Required controls:

- Simulation before launch
- Evaluation benchmark comparison
- Safety tests
- Cost estimate
- Permission validation
- Output quality scoring
- Human review rules
- Rollback plan
- Incident trigger mapping

AI behavior variants must be stored as versioned artifacts.

No AI behavior experiment may silently alter:

- Legal advice behavior
- Financial output behavior
- Medical or mental health claims
- Security-sensitive workflows
- HR decision workflows
- Compliance evidence generation
- Customer-facing high-impact decisions

without governance approval.

---

## 16. Customer Consent and Opt-Out

Ariyo must support experiment controls such as:

- Organization-level experiment opt-out
- Enterprise-only experiment restrictions
- Sensitive workflow exclusion
- Regulated category exclusion
- Admin-visible experiment participation logs
- Customer-facing explanation when appropriate
- Internal-only dogfood mode

Customer consent is especially important when experiments affect:

- AI output behavior
- Automation behavior
- Pricing
- Permissions
- Vendor/model routing
- Region/data processing
- Enterprise workflows

---

## 17. Experiment API Contract

### 17.1 Create Experiment

`POST /api/v1/marketplace/experiments`

```json
{
  "name": "Template Ranking Outcome Weight Test",
  "type": "ranking_experiment",
  "hypothesis": "Increasing outcome score weight improves install-to-activation without increasing support burden.",
  "risk_tier": "medium",
  "primary_metric": "install_to_activation_rate",
  "guardrail_metrics": ["support_ticket_rate", "incident_rate", "refund_rate"],
  "variants": [
    {
      "key": "control",
      "traffic_allocation": 0.90
    },
    {
      "key": "outcome_weight_v2",
      "traffic_allocation": 0.10
    }
  ],
  "target_population": {
    "plans": ["Pro", "Smart"],
    "regions": ["eu", "us"]
  }
}
```

### 17.2 Approve Experiment

`POST /api/v1/marketplace/experiments/{experiment_id}/approve`

```json
{
  "decision": "approved",
  "approver_role": "trust_safety_reviewer",
  "conditions": [
    "max_traffic_10_percent",
    "auto_stop_on_incident_rate_increase",
    "exclude_enterprise_opt_out_customers"
  ]
}
```

### 17.3 Start Experiment

`POST /api/v1/marketplace/experiments/{experiment_id}/start`

```json
{
  "start_mode": "gradual_ramp",
  "initial_traffic_allocation": 0.05,
  "monitoring_window_hours": 24
}
```

### 17.4 Stop Experiment

`POST /api/v1/marketplace/experiments/{experiment_id}/stop`

```json
{
  "reason": "guardrail_breach",
  "rollback": true,
  "notify_owners": true
}
```

### 17.5 Get Experiment Result

`GET /api/v1/marketplace/experiments/{experiment_id}/results`

```json
{
  "experiment_id": "exp_123",
  "status": "completed",
  "primary_metric": {
    "name": "install_to_activation_rate",
    "control": 0.38,
    "variant": 0.43,
    "delta": 0.05
  },
  "guardrails": [
    {
      "name": "incident_rate",
      "status": "passed",
      "delta": 0.0
    }
  ],
  "recommendation": "promote_variant"
}
```

---

## 18. Webhooks

Ariyo should emit webhooks for:

- `marketplace.experiment.created`
- `marketplace.experiment.approval_requested`
- `marketplace.experiment.approved`
- `marketplace.experiment.rejected`
- `marketplace.experiment.started`
- `marketplace.experiment.ramped`
- `marketplace.experiment.guardrail_breached`
- `marketplace.experiment.stopped`
- `marketplace.experiment.completed`
- `marketplace.experiment.variant_promoted`
- `marketplace.experiment.rollback_completed`
- `marketplace.experiment.archived`

Webhook payloads must include:

- Experiment ID
- Risk tier
- Type
- Variant keys
- Owner
- Decision
- Timestamp
- Affected template IDs where applicable
- Affected customer segment where safe to disclose

---

## 19. Frontend Requirements

### 19.1 Internal Experiment Console

Must show:

- Experiment list
- Status
- Risk tier
- Owner
- Approval state
- Primary metric
- Guardrail status
- Traffic allocation
- Active variants
- Rollback state
- Customer segment
- Linked templates
- Linked incidents
- Result summary

### 19.2 Experiment Detail Page

Must show:

- Hypothesis
- Baseline
- Variants
- Audience
- Metrics
- Guardrails
- Timeline
- Approval history
- Ramp history
- Stop rules
- Live charts
- Segment analysis
- Decision log
- Evidence links

### 19.3 Creator Experiment View

Creators should see:

- Experiments they are allowed to run
- Approval status
- Template variant performance
- Safe improvement recommendations
- Guardrail warnings
- Result summaries
- Promotion decisions

Creators must not see sensitive customer-level data.

### 19.4 Enterprise Admin Controls

Enterprise admins should see:

- Experiment participation settings
- Active experiments affecting their organization
- Experiment category restrictions
- Opt-out controls
- Audit logs
- Governance explanations

---

## 20. Backend Requirements

Ariyo backend must include:

- Experiment registry
- Variant assignment service
- Feature flag integration
- Metrics ingestion
- Guardrail evaluator
- Approval workflow
- Risk tier engine
- Rollback executor
- Segment analyzer
- Experiment audit log
- Creator experiment permission engine
- Enterprise opt-out engine
- Result recommendation engine
- Evidence archive

Variant assignment must be:

- Stable for the same user/context where appropriate
- Tenant-aware
- Region-aware
- Plan-aware
- Entitlement-aware
- Private catalog-aware
- Opt-out-aware

---

## 21. Observability Events

Emit events such as:

- `marketplace_experiment_viewed`
- `marketplace_experiment_variant_assigned`
- `marketplace_experiment_metric_recorded`
- `marketplace_experiment_guardrail_checked`
- `marketplace_experiment_guardrail_breached`
- `marketplace_experiment_ramp_changed`
- `marketplace_experiment_rollback_triggered`
- `marketplace_experiment_decision_recorded`
- `creator_experiment_requested`
- `creator_experiment_approved`
- `enterprise_experiment_opt_out_changed`

Required properties:

- `experiment_id`
- `variant_key`
- `risk_tier`
- `experiment_type`
- `template_id`
- `workspace_id`
- `plan_tier`
- `region`
- `catalog_scope`
- `metric_name`
- `guardrail_status`
- `decision`

---

## 22. Advanced KPIs

Ariyo should track:

- Experiment Win Rate
- Guardrail Breach Rate
- Experiment Rollback Rate
- Experiment-to-Productization Rate
- Average Time to Decision
- Install-to-Activation Lift
- Outcome Lift
- Refund Rate Delta
- Incident Rate Delta
- Support Burden Delta
- Cost per Outcome Delta
- Creator Experiment Success Rate
- Ranking Experiment Fairness Score
- Sponsored Experiment Trust Score
- Pricing Experiment Refund Impact
- Enterprise Opt-Out Respect Rate
- AI Behavior Experiment Safety Pass Rate
- Post-Promotion Regression Rate

---

## 23. AI Experiment Assistant

Ariyo may provide an AI assistant to help operators and creators design experiments.

The assistant may:

- Draft hypotheses
- Suggest metrics
- Identify guardrails
- Recommend risk tier
- Detect missing approvals
- Summarize results
- Explain segment effects
- Recommend stop/continue/promote decisions
- Generate evidence summaries

The assistant must not:

- Approve high-risk experiments alone
- Hide weak results
- Recommend unsafe growth hacks
- Ignore guardrail failures
- Fabricate statistical confidence
- Recommend experiments that violate policy
- Override enterprise opt-outs
- Promote variants without governance where required

---

## 24. Security and Privacy Rules

- Experiment data must be tenant-isolated.
- Customer identifiers must be minimized in analysis views.
- Sensitive attributes must not be used for targeting unless explicitly allowed by policy.
- Experiment assignments must be auditable.
- AI behavior experiments must preserve permission scopes.
- Vendor/model/provider changes must be disclosed to governance systems.
- Experiment results must not leak creator competitive data.
- Enterprise opt-out preferences must be enforced at assignment time.

---

## 25. Forbidden Patterns

Ariyo must never allow:

- Experiments without an explicit hypothesis
- Experiments without rollback plan
- High-risk experiments without approval
- AI behavior experiments without simulation
- Pricing experiments without billing audit
- Search experiments that surface suspended assets
- Recommendation experiments that ignore entitlement compatibility
- Sponsored experiments without disclosure
- Experiments that hide risk or safety warnings
- Experiments that bypass private catalog rules
- Experiments that bypass region controls
- Experiments that use sensitive data improperly
- Experiments that optimize only revenue while harming customer outcomes
- Experiments that continue after guardrail breach
- Experiments that cannot be explained after completion
- Experiments that cannot be reproduced or audited

---

## 26. Implementation Checklist

Before launch:

- [ ] Hypothesis defined
- [ ] Variant definitions complete
- [ ] Risk tier assigned
- [ ] Primary metric defined
- [ ] Guardrail metrics defined
- [ ] Audience defined
- [ ] Enterprise opt-out respected
- [ ] Private catalog rules checked
- [ ] Region controls checked
- [ ] Entitlements checked
- [ ] Billing impact checked
- [ ] Safety simulation complete when required
- [ ] Approvals complete
- [ ] Feature flags configured
- [ ] Rollback plan tested
- [ ] Monitoring dashboard live
- [ ] Stop rules configured

After completion:

- [ ] Results analyzed
- [ ] Segment effects reviewed
- [ ] Guardrails reviewed
- [ ] Customer impact reviewed
- [ ] Creator impact reviewed
- [ ] Decision recorded
- [ ] Rollout or rollback completed
- [ ] Evidence archived
- [ ] Learning shared with relevant teams

---

## 27. Golden Rule

Ariyo Marketplace experiments exist to learn how to create safer, more useful, more trusted, and more valuable AI Employee marketplace experiences.

No experiment is successful if it wins the metric and loses customer trust.
