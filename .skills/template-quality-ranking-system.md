# Ariyo Template Quality Ranking System Skill

## 1. Core Contract

Ariyo template ranking is not popularity sorting.

Ariyo template ranking is the governed marketplace intelligence system that decides which AI Employee templates, Agent Team templates, Workflow templates, Knowledge packs, GEO templates, Integration bundles, and Marketplace solutions deserve customer attention.

Ariyo must rank templates by trusted customer value, not by hype, manipulation, raw installs, paid promotion, or creator influence.

Every ranking decision must consider quality, safety, activation, customer outcomes, plan fit, creator trust, incident history, cost behavior, install success, retention, support burden, review status, and marketplace integrity.

Ariyo must make useful, safe, outcome-producing templates more visible.

Ariyo must make risky, vague, low-quality, overpromising, costly, or incident-prone templates less visible or unavailable.

---

## 2. Purpose

This skill defines how Ariyo ranks, recommends, filters, promotes, demotes, and monitors marketplace templates.

It applies to:

- Marketplace search results
- Category pages
- Featured template collections
- Recommended templates during onboarding
- Recommended templates inside AI Employee setup
- Plan-specific template discovery for Basic, Pro, and Smart
- Partner and creator marketplace listings
- Internal ranking dashboards
- Sponsored marketplace placements
- Marketplace quality governance
- Post-publish quality monitoring
- Marketplace fraud and manipulation prevention

The goal is to create a marketplace where customers can quickly find templates that are:

- Useful
- Safe
- Easy to understand
- Easy to install
- Likely to activate
- Likely to produce business outcomes
- Aligned with the customer plan
- Governed by proper permissions
- Cost-controlled
- Trustworthy
- Measurable

---

## 3. Dependencies

This skill depends on the following Ariyo skills:

- `ecosystem-marketplace-economy.md`
- `agent-marketplace-template-builder.md`
- `ai-agent-template-review-governance.md`
- `agent-team-templates.md`
- `multi-agent-orchestration-system.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-simulation-sandbox.md`
- `ai-agent-observability-tracing.md`
- `ai-agent-incident-response.md`
- `ai-cost-control.md`
- `pricing-packaging-strategy.md`
- `customer-success-playbooks.md`
- `customer-lifecycle-automation.md`
- `observability-analytics-events.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `human-review-governance.md`
- `integration-ecosystem.md`
- `admin-permissions.md`
- `brand-messaging-system.md`
- `content-marketing-engine.md`

No marketplace ranking implementation may ignore review governance, security, cost control, plan entitlements, or customer outcome metrics.

---

## 4. Ranking Philosophy

Ariyo marketplace ranking must reward durable value.

Ranking must not blindly reward:

- Most installs
- Most revenue
- Most recent listings
- Paid placement
- Creator popularity
- Aggressive copywriting
- High AI usage
- High automation level
- High price
- High feature count

Ranking must reward:

- Successful activation
- Measurable business outcomes
- Low incident rate
- Low support burden
- High customer retention
- Good cost efficiency
- Clear template intent
- Strong documentation
- High simulation/evaluation score
- Strong creator trust
- Safe permission design
- Good plan fit
- Good customer satisfaction
- Low refund/uninstall rate
- Reliable execution

The marketplace must not become a race for attention.

It must become a trust layer for adopting AI employees.

---

## 5. Marketplace Ranking Surfaces

Ranking rules apply differently depending on where templates appear.

### 5.1 Search Results

Search results must prioritize relevance first, then quality.

Search ranking must consider:

- Query relevance
- Use case match
- Industry match
- Role match
- Plan compatibility
- Language/localization match
- Template quality score
- Creator trust score
- Customer outcome score
- Review status
- Incident penalties

Search must not show high-risk templates above safer alternatives unless the customer explicitly requests advanced/high-risk solutions and has proper plan/permission eligibility.

### 5.2 Category Pages

Category pages must prioritize templates that perform well for that category.

Examples:

- Sales templates ranked by lead response, meeting booking, pipeline influence, conversion lift
- Support templates ranked by resolution rate, ticket deflection, CSAT, escalation safety
- GEO templates ranked by GEO readiness improvement, AI visibility tracking quality, query monitoring adoption
- Operations templates ranked by workflow success, time saved, failure rate, approval safety
- Security templates ranked by detection quality, false positive rate, escalation correctness, risk reduction

### 5.3 Personalized Recommendations

Personalized recommendations must consider:

- Organization industry
- Company size
- Plan tier
- Connected integrations
- Current AI employees
- Activation status
- Knowledge maturity
- Workflow maturity
- Customer lifecycle stage
- Customer health score
- Existing template usage
- Cost budget
- Permission availability

Personalization must never bypass safety or plan entitlements.

### 5.4 Onboarding Recommendations

During onboarding, ranking must prefer low-friction templates that produce value quickly.

Priority signals:

- Fast time to first value
- Low configuration complexity
- Low risk
- Clear business outcome
- Minimal integration requirements
- Good Basic/Pro/Smart fit
- Strong documentation
- High activation rate

Onboarding must not recommend complex Smart-only templates to Basic users unless framed as an upgrade path.

### 5.5 Featured Collections

Featured collections must be curated and evidence-backed.

Examples:

- Best for first AI employee
- Best for customer support
- Best for sales teams
- Best for GEO growth
- Best for agencies
- Best for operations teams
- Best for Smart automation
- Trusted partner picks

Featured status must be revocable if quality drops.

### 5.6 Sponsored Listings

Sponsored listings must be clearly labeled and must not bypass trust rules.

Sponsored templates must still meet minimum requirements:

- Approved status
- No unresolved critical incidents
- Acceptable creator trust score
- Acceptable rating and refund rate
- Acceptable cost behavior
- Current compatibility with marketplace policies

Sponsored placement must never hide organic quality ranking completely.

---

## 6. Template Quality Score

Every marketplace template must have a `template_quality_score` between 0 and 100.

The score must be computed from weighted signal groups.

### 6.1 Recommended Score Groups

```text
TemplateQualityScore =
  RelevanceFitScore
+ ActivationQualityScore
+ OutcomeQualityScore
+ SafetyTrustScore
+ ReliabilityScore
+ CostEfficiencyScore
+ CreatorTrustScore
+ CustomerFeedbackScore
+ DocumentationScore
+ ReviewGovernanceScore
- IncidentPenalty
- ManipulationPenalty
- StalenessPenalty
```

Weights may evolve, but changes must be versioned and auditable.

### 6.2 Score Bands

```text
90-100 = Excellent / Marketplace Leader
80-89  = Strong / Recommended
70-79  = Good / Eligible
60-69  = Limited / Needs Improvement
40-59  = Weak / Demoted
0-39   = Unsafe or Low Quality / Hidden or Review Required
```

Score band must be visible internally.

Customer-facing score should be simplified into trust labels, not raw algorithmic detail.

Possible customer-facing labels:

```text
Verified
High Performing
Popular with Similar Teams
Fast Setup
Low Risk
Smart Recommended
Needs Configuration
New Template
Partner Certified
```

---

## 7. Ranking Signal Groups

### 7.1 Relevance Fit Score

Measures whether the template fits the customer and query.

Signals:

- Query match
- Use case match
- Category match
- Industry match
- Role match
- Plan fit
- Integration availability
- Language match
- Region/legal compatibility
- Business size match
- Existing customer maturity fit

Examples:

```text
A GEO API query should prioritize GEO templates, content optimization templates, AI visibility dashboards, and query monitoring automations.
```

```text
A Basic user should see simple first-value templates before multi-agent Smart templates.
```

### 7.2 Activation Quality Score

Measures whether customers can actually install and use the template.

Signals:

- Install completion rate
- Setup completion rate
- Time to first successful run
- Activation rate within 24 hours
- Activation rate within 7 days
- Configuration error rate
- Required integration success rate
- Knowledge setup success rate
- Drop-off during setup
- Template uninstall before first run

A template with many installs but poor activation must be demoted.

### 7.3 Outcome Quality Score

Measures whether the template produces customer value.

Signals:

- Successful run rate
- Business outcome completion rate
- Customer-reported value
- Time saved
- Revenue assisted
- Ticket deflection
- Lead response improvement
- GEO visibility improvement
- Workflow completion
- SLA improvement
- Human review approval rate
- Repeat usage
- Retention after install

Outcome quality matters more than raw usage.

### 7.4 Safety Trust Score

Measures whether the template behaves safely.

Signals:

- Review approval status
- Risk classification
- Unsafe output rate
- Prompt injection resistance
- Data leakage attempts blocked
- Permission denied correctness
- Human review routing correctness
- Tool misuse rate
- Customer-facing error rate
- Security review completion
- Compliance review completion
- Approval gate correctness

High-risk templates can rank well only if they have strong controls.

### 7.5 Reliability Score

Measures operational stability.

Signals:

- Execution success rate
- Workflow failure rate
- Integration failure rate
- Timeout rate
- Retry success rate
- Queue delay
- Provider fallback success
- Version rollback frequency
- Template incident count
- Broken dependency count
- Compatibility with current platform version

Reliable templates should outrank fragile templates.

### 7.6 Cost Efficiency Score

Measures whether the template produces value without uncontrolled AI cost.

Signals:

- Cost per successful run
- Cost per activated customer
- Cost per outcome
- Token usage distribution
- Model routing efficiency
- Cache hit rate
- Cost spike frequency
- Budget limit hit rate
- Smart-only cost justification
- Margin contribution
- Customer cost complaints

A template that produces outcomes but has uncontrolled cost must be constrained or demoted.

### 7.7 Creator Trust Score

Measures creator reliability.

Signals:

- Approved template count
- Rejected template count
- Policy violation count
- Incident count
- Average template rating
- Refund rate
- Support response time
- Documentation quality
- Simulation coverage
- Update responsiveness
- Creator verification status
- Partner certification
- Appeal outcomes

Creator trust must help ranking, but must never override template-specific risk.

### 7.8 Customer Feedback Score

Signals:

- Ratings
- Reviews
- Qualitative feedback
- Support sentiment
- NPS/CSAT after template use
- Uninstall reason
- Refund reason
- Favorite/save rate
- Repeat install across workspaces
- Enterprise buyer feedback

Reviews must be fraud-resistant.

### 7.9 Documentation Score

Signals:

- Clear description
- Setup instructions
- Use case specificity
- Requirements disclosed
- Permissions explained
- Cost behavior explained
- Limitations explained
- Example outputs
- Troubleshooting steps
- Changelog clarity
- Localization quality

A powerful template with poor documentation must not be aggressively promoted.

### 7.10 Review Governance Score

Signals:

- Automated validation pass
- Simulation pass
- Human review pass
- Approval board pass if required
- Version review status
- Security review status
- Compliance review status
- Pricing review status
- Post-publish monitoring status

Templates with pending required reviews must not rank as trusted templates.

---

## 8. Penalty System

Ranking must include penalties.

### 8.1 Incident Penalty

Apply penalties for:

- Unsafe action incident
- Data exposure
- Wrong tool call
- Prompt injection failure
- Cost spike
- Workflow runaway
- Unauthorized action
- Customer complaint severity
- Support escalation spikes
- Refund spikes

Penalty severity:

```text
P1 Critical Incident = hide or suspend immediately
P2 Major Incident    = heavy demotion + review required
P3 Moderate Incident = temporary demotion + monitoring
P4 Minor Incident    = light penalty + creator notification
```

### 8.2 Staleness Penalty

Apply when:

- Template has not been updated after platform changes
- Integration dependencies changed
- Model profile deprecated
- Prompt/policy version outdated
- Broken docs
- Unsupported API version
- Creator is inactive

Stale templates must be demoted until updated and revalidated.

### 8.3 Manipulation Penalty

Apply when:

- Fake reviews
- Install farming
- Review swapping
- Keyword stuffing
- Misleading claims
- Hidden pricing behavior
- Creator collusion
- Sponsored disclosure violation
- Marketplace policy abuse

Serious manipulation may trigger creator suspension.

### 8.4 Overclaim Penalty

Apply when listing promises:

- Guaranteed revenue
- Guaranteed AI citations
- Guaranteed SEO/GEO ranking
- Guaranteed cost savings
- Guaranteed legal/security compliance
- Fully autonomous safe operation without review
- No-risk claims

Ariyo must penalize hype that creates customer risk.

---

## 9. Plan-Aware Ranking: Basic / Pro / Smart

Ranking must respect plan realities.

### 9.1 Basic Ranking Rules

Basic users should see templates that are:

- Simple
- Low risk
- Fast to set up
- Low cost
- Limited automation
- Minimal integrations
- Good first AI employee experience
- Easy to explain

Basic ranking should prioritize:

- First employee templates
- Knowledge Q&A templates
- Basic support assistant templates
- Simple content helper templates
- Simple lead capture templates
- Light GEO readiness check templates

Basic ranking must avoid prioritizing:

- Multi-agent teams
- High-cost Smart workflows
- Complex integrations
- Autonomous external actions
- Advanced financial/security workflows
- Templates requiring enterprise controls

### 9.2 Pro Ranking Rules

Pro users should see templates that are:

- Operational
- Team-ready
- Integration-enabled
- Workflow-enabled
- Human review aware
- Cost-managed
- Measurable

Pro ranking should prioritize:

- Sales team templates
- Support automation templates
- Customer success templates
- Operations workflow templates
- CRM/helpdesk templates
- Pro GEO monitoring templates
- Review-gated automation

### 9.3 Smart Ranking Rules

Smart users should see templates that are:

- Advanced
- Multi-agent
- Automation-rich
- Insight-driven
- GEO/API capable
- Deep RAG enabled
- High-value but strongly governed

Smart ranking should prioritize:

- Multi-agent team templates
- Advanced GEO API templates
- Deep research templates
- Operations command templates
- AI evaluation templates
- Advanced security review templates
- Predictive customer lifecycle templates
- Workflow orchestration templates

Smart ranking must still enforce:

- Budget controls
- Approval gates
- Security rules
- Compliance rules
- Incident penalties
- Cost efficiency thresholds

Smart means full-option.

Smart does not mean uncontrolled.

---

## 10. Ranking Formula Versioning

The ranking algorithm must be versioned.

Each ranking formula must include:

```json
{
  "ranking_version": "marketplace-ranking-v1.0.0",
  "active_from": "2026-06-18T00:00:00Z",
  "surface": "marketplace_search",
  "weights": {
    "relevance_fit": 0.22,
    "activation_quality": 0.14,
    "outcome_quality": 0.18,
    "safety_trust": 0.16,
    "reliability": 0.10,
    "cost_efficiency": 0.08,
    "creator_trust": 0.06,
    "customer_feedback": 0.04,
    "documentation": 0.02
  },
  "penalties_enabled": true,
  "sponsored_policy": "label_required_no_safety_bypass"
}
```

Ranking changes must be tested before production rollout.

Ranking changes must be observable after rollout.

Ranking changes must be reversible.

---

## 11. Ranking Explainability

Internal users must be able to understand why a template ranks high or low.

Internal explainability must include:

- Top positive ranking signals
- Top negative ranking signals
- Penalties applied
- Risk classification
- Plan eligibility
- Review status
- Incident status
- Creator trust contribution
- Recent trend changes

Customer-facing explainability must be simpler.

Examples:

```text
Recommended because teams like yours activate this template quickly.
```

```text
Popular with Pro support teams using Zendesk.
```

```text
Smart Recommended: advanced automation with review controls enabled.
```

```text
Requires Smart because this template uses multi-agent orchestration and advanced GEO tracking.
```

Never expose internal scoring formulas to customers.

---

## 12. Search and Discovery Rules

### 12.1 Search Ranking Inputs

Search should accept:

```json
{
  "query": "customer support AI employee",
  "organization_id": "org_123",
  "workspace_id": "wrk_456",
  "plan": "pro",
  "industry": "ecommerce",
  "connected_integrations": ["shopify", "zendesk"],
  "language": "en",
  "intent": "install_template",
  "filters": {
    "risk_level": ["low", "medium"],
    "asset_type": ["agent_team_template", "workflow_template"],
    "pricing": ["free", "paid"],
    "certification": ["partner_certified", "ariyo_verified"]
  }
}
```

### 12.2 Search Response Requirements

Search result must include:

- Template ID
- Name
- Short outcome statement
- Category
- Asset type
- Plan availability
- Risk label
- Trust label
- Required integrations
- Setup complexity
- Estimated cost behavior
- Rating summary
- Explanation text
- CTA eligibility

Example:

```json
{
  "results": [
    {
      "template_id": "tpl_support_team_shopify_zendesk",
      "name": "Ecommerce Support AI Team",
      "asset_type": "agent_team_template",
      "category": "customer_support",
      "plan_availability": ["pro", "smart"],
      "trust_label": "High Performing",
      "risk_label": "Moderate Risk - Review Gates Included",
      "setup_complexity": "medium",
      "required_integrations": ["shopify", "zendesk"],
      "ranking_explanation": "Recommended because ecommerce support teams activate this template quickly and it has strong ticket deflection outcomes.",
      "primary_cta": "Preview template"
    }
  ]
}
```

---

## 13. Marketplace Quality Badges

Ariyo may display badges only if backed by evidence.

Allowed badge examples:

```text
Ariyo Verified
Partner Certified
High Performing
Fast Setup
Low Risk
Smart Recommended
Pro Ready
Enterprise Ready
Strong Documentation
Low Cost to Run
Human Review Built In
GEO Optimized
Security Reviewed
```

Badges must have explicit criteria.

Example:

```text
High Performing = activation rate above threshold, outcome score above threshold, incident rate below threshold, enough sample size.
```

```text
Low Cost to Run = median cost per successful run below category threshold with no recent cost spike incidents.
```

```text
Security Reviewed = completed security review for the current major version.
```

Badges must be removed automatically if evidence becomes stale.

---

## 14. Ranking Abuse Prevention

Ariyo must prevent marketplace ranking manipulation.

### 14.1 Abuse Types

- Fake installs
- Fake reviews
- Creator self-rating
- Review farms
- Keyword stuffing
- Misleading titles
- Hidden risk
- Hidden cost
- Fake integration compatibility
- Sponsored disclosure manipulation
- Duplicate template spam
- Cloned low-quality templates
- Install incentives that distort quality

### 14.2 Detection Signals

- Unusual install velocity
- High install but low activation
- Review bursts
- Repeated review wording
- Shared IP/device/network patterns
- High uninstall after install
- Creator review cross-patterns
- Duplicate descriptions
- Similar prompt/template structure
- Cost complaint spikes

### 14.3 Enforcement Actions

```text
ranking_demotion
badge_removal
review_hold
creator_warning
listing_suspension
creator_suspension
payout_hold
manual_investigation
appeal_allowed
permanent_ban
```

All enforcement must be audited.

---

## 15. Creator Ranking Dashboard

Creators should see actionable quality feedback, not opaque punishment.

Creator dashboard should show:

- Template quality score band
- Activation rate
- Install-to-first-run rate
- Successful run rate
- Rating trend
- Support ticket rate
- Incident count
- Cost per run
- Documentation score
- Review status
- Badge eligibility
- Demotion reasons
- Recommended improvements

Example recommendations:

```text
Add clearer setup instructions to improve activation.
```

```text
Your template is being demoted because cost per successful run is above category norms.
```

```text
Your template may qualify for Fast Setup badge if integration setup errors drop below threshold.
```

---

## 16. Internal Marketplace Ranking Dashboard

Internal dashboard must show:

- Top templates by quality
- Top templates by revenue
- Top templates by activation
- Top templates by incidents
- Top templates by support burden
- Fast-growing templates
- Demoted templates
- Suspended templates
- High-risk templates gaining traction
- Low-quality sponsored listings
- Creator trust distribution
- Ranking manipulation alerts
- Category health
- Basic/Pro/Smart marketplace health

Internal users must be able to drill down from marketplace KPI to template trace, incidents, reviews, support tickets, creator history, and customer outcomes.

---

## 17. Advanced KPI System

Ariyo must track advanced marketplace ranking KPIs.

### 17.1 Marketplace Quality KPIs

```text
Average Template Quality Score
Median Template Quality Score
High Quality Template Ratio
Low Quality Template Ratio
Approved Template Ratio
Suspended Template Ratio
Template Quality Improvement Rate
```

### 17.2 Customer Outcome KPIs

```text
Install-to-Activation Rate
Template Time to First Value
Template Outcome Completion Rate
Template Retention Rate
Repeat Usage Rate
Customer Value Confirmation Rate
```

### 17.3 Safety KPIs

```text
Unsafe Output Rate by Template
Incident Rate by Template
Human Review Routing Accuracy
Prompt Injection Failure Rate
Data Exposure Incident Rate
Unauthorized Tool Attempt Rate
```

### 17.4 Cost KPIs

```text
Cost per Successful Run
Cost per Activated Install
Cost per Business Outcome
Template Cost Spike Rate
Budget Limit Hit Rate
Gross Margin by Template
```

### 17.5 Ranking Health KPIs

```text
Search Result Activation Rate
Recommended Template Activation Rate
Featured Template Outcome Rate
Sponsored Listing Quality Ratio
Ranking Demotion Accuracy
Ranking Recovery Rate
```

### 17.6 Creator KPIs

```text
Creator Trust Score Distribution
Creator Incident Rate
Creator Support Burden
Creator Response Time
Creator Appeal Success Rate
Creator Revenue Quality Score
```

### 17.7 Abuse KPIs

```text
Detected Ranking Manipulation Attempts
Fake Review Detection Rate
Duplicate Template Spam Rate
Policy Violation Rate
Sponsored Disclosure Violation Rate
```

---

## 18. API Contract

### 18.1 Compute Template Quality Score

```http
POST /api/marketplace/templates/{template_id}/quality-score/compute
```

Request:

```json
{
  "ranking_version": "marketplace-ranking-v1.0.0",
  "include_explainability": true,
  "trigger": "scheduled_recompute"
}
```

Response:

```json
{
  "template_id": "tpl_123",
  "quality_score": 86,
  "score_band": "strong",
  "positive_signals": [
    "high_activation_rate",
    "low_incident_rate",
    "strong_documentation"
  ],
  "negative_signals": [
    "moderate_cost_per_run"
  ],
  "penalties": [],
  "computed_at": "2026-06-18T12:00:00Z"
}
```

### 18.2 Search Ranked Templates

```http
POST /api/marketplace/search
```

Request:

```json
{
  "query": "GEO content visibility tracking",
  "organization_id": "org_123",
  "plan": "smart",
  "surface": "marketplace_search",
  "filters": {
    "category": ["geo_growth"],
    "asset_type": ["agent_team_template", "workflow_template"]
  }
}
```

Response:

```json
{
  "ranking_version": "marketplace-ranking-v1.0.0",
  "results": [
    {
      "template_id": "tpl_geo_visibility_monitor",
      "rank": 1,
      "name": "GEO Visibility Monitoring Team",
      "trust_label": "Smart Recommended",
      "quality_badges": ["Ariyo Verified", "GEO Optimized", "High Performing"],
      "ranking_explanation": "Recommended because it matches GEO visibility monitoring and performs well for Smart customers with content teams.",
      "primary_cta": "Preview template"
    }
  ]
}
```

### 18.3 Apply Ranking Penalty

```http
POST /api/marketplace/templates/{template_id}/ranking-penalties
```

Request:

```json
{
  "penalty_type": "incident_penalty",
  "severity": "major",
  "reason": "prompt_injection_failure_detected",
  "expires_at": "2026-07-18T00:00:00Z",
  "requires_review": true
}
```

Response:

```json
{
  "penalty_id": "pen_123",
  "template_id": "tpl_123",
  "status": "active",
  "ranking_effect": "heavy_demotion",
  "review_required": true
}
```

### 18.4 Get Creator Ranking Dashboard

```http
GET /api/creators/{creator_id}/marketplace-quality-dashboard
```

Response:

```json
{
  "creator_id": "creator_123",
  "creator_trust_score": 78,
  "templates": [
    {
      "template_id": "tpl_123",
      "quality_score": 82,
      "score_band": "strong",
      "activation_rate": 0.64,
      "incident_rate": 0.002,
      "recommended_actions": [
        "Improve setup documentation",
        "Reduce median cost per run"
      ]
    }
  ]
}
```

---

## 19. Event Taxonomy

Events must follow Ariyo observability standards.

Required events:

```text
marketplace_template_quality_score_computed
marketplace_template_ranked
marketplace_template_ranking_explained
marketplace_template_badge_awarded
marketplace_template_badge_removed
marketplace_template_penalty_applied
marketplace_template_penalty_expired
marketplace_template_demoted
marketplace_template_promoted
marketplace_search_performed
marketplace_search_result_clicked
marketplace_template_installed_from_ranked_result
marketplace_template_activation_completed
marketplace_template_ranking_abuse_detected
marketplace_creator_quality_dashboard_viewed
marketplace_sponsored_listing_served
marketplace_sponsored_listing_disclosed
```

Events must include:

- `event_id`
- `organization_id` when relevant
- `workspace_id` when relevant
- `template_id`
- `creator_id`
- `surface`
- `ranking_version`
- `plan`
- `risk_level`
- `trust_label`
- `correlation_id`
- `timestamp`

No event may include sensitive prompt contents, customer data, private documents, integration credentials, or raw PII unless explicitly classified and protected.

---

## 20. Frontend Requirements

Frontend must provide:

- Marketplace search
- Category ranking
- Plan-aware discovery
- Template cards with trust labels
- Quality badges
- Plan compatibility indicators
- Risk labels
- Setup complexity indicators
- Cost behavior hints
- Ranking explanations
- Creator profile trust information
- Sponsored listing labels
- Filter and sorting controls
- Template comparison
- Internal ranking dashboard
- Creator quality dashboard
- Admin penalty/review tools

Frontend must not:

- Show raw internal scores as absolute truth
- Hide sponsored labels
- Present high-risk templates as easy/safe
- Allow template install when entitlements are missing
- Hide cost or permission requirements
- Use dark patterns to push Smart templates

---

## 21. Backend Requirements

Backend must provide:

- Ranking service
- Quality score service
- Signal aggregation service
- Penalty service
- Badge service
- Search service
- Recommendation service
- Creator trust service
- Abuse detection service
- Sponsored listing governance service
- Event pipeline
- Audit logs
- Ranking formula versioning
- Feature flag support
- Rollback support

Ranking must be computed server-side.

Frontend must not determine marketplace ranking independently.

---

## 22. Security and Privacy Rules

Ranking must respect:

- Organization boundaries
- Creator boundaries
- Customer data privacy
- Plan entitlements
- Marketplace policy
- Sponsored listing disclosure
- Trust center claims
- Legal page constraints
- Data retention rules

Ranking must not use sensitive customer content for public template promotion without explicit aggregation, anonymization, and permission.

Ranking must not leak customer usage patterns to creators beyond allowed aggregated analytics.

Ranking explanations must not reveal private competitor/customer data.

---

## 23. Forbidden Patterns

The following are forbidden:

```text
ranking templates only by install count
ranking templates only by revenue
allowing paid placement to bypass safety
hiding sponsored labels
showing suspended templates in public results
ranking high-risk templates above safer alternatives without context
using customer private data in public ranking explanations
allowing creators to manipulate reviews
allowing templates with unresolved critical incidents to remain promoted
showing Smart templates to Basic users as if they are included
hiding cost behavior from template cards
ignoring uninstall and refund rates
ignoring support burden
ignoring unsafe output rate
ignoring creator policy violations
allowing stale templates to keep trust badges
using opaque ranking changes without versioning
changing ranking formula without monitoring
exposing raw internal ranking formulas publicly
allowing marketplace popularity to override compliance risk
```

---

## 24. Golden Rule

Ariyo marketplace ranking must make the safest useful template the easiest template to find.

Ariyo must reward templates that create verified customer value and preserve trust.

Ariyo must punish templates that create risk, confusion, cost, incidents, or false confidence.

---

## 25. Final Rule

When choosing between growth and trust, Ariyo ranking must choose trust.

When choosing between popularity and outcomes, Ariyo ranking must choose outcomes.

When choosing between creator revenue and customer safety, Ariyo ranking must choose customer safety.
