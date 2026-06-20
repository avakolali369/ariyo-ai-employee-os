# Ariyo Enterprise Customer Health Scoring Skill

## Core Contract

Ariyo Enterprise Customer Health Scoring is not a color-coded account status field.

It is the governed customer-success intelligence system that measures whether an enterprise customer is adopting Ariyo, achieving promised outcomes, operating safely, expanding responsibly, preparing for renewal, and receiving the right interventions before risk becomes churn.

Ariyo must detect customer health early enough to act.

Ariyo must never reduce customer success to logins, seat count, usage volume, or subjective customer-success notes.

---

## 1. Purpose

This skill defines how Ariyo should design and implement enterprise customer health scoring across the AI Employee Operating System, Marketplace, Professional Services, Customer Success, Revenue Operations, Support, Finance, Security, Governance, and Executive Reporting layers.

The system must help Ariyo answer:

- Is this customer receiving measurable value?
- Is adoption broad enough and deep enough?
- Are AI Employees producing safe and trusted outcomes?
- Are admins governing the platform correctly?
- Are users enabled and engaged?
- Are Marketplace assets helping or hurting customer success?
- Is the account at renewal risk?
- Is the customer ready for expansion?
- Which customer-success action should happen next?
- Which executive story should Ariyo tell this customer?

Customer health must be computed from product signals, outcome signals, operational signals, governance signals, financial signals, support signals, training signals, relationship signals, and marketplace signals.

---

## 2. Required Dependencies

This skill depends on:

- `enterprise-account-governance.md`
- `enterprise-sso-scim-directory-sync.md`
- `enterprise-workspace-policy-engine.md`
- `enterprise-approval-workflows.md`
- `enterprise-implementation-methodology.md`
- `enterprise-professional-services-system.md`
- `enterprise-customer-training-certification.md`
- `enterprise-change-management-system.md`
- `product-analytics-growth.md`
- `customer-success-playbooks.md`
- `customer-lifecycle-automation.md`
- `customer-education-academy.md`
- `product-requirements-mvp.md`
- `revenue-operations-system.md`
- `finance-accounting-controls.md`
- `operations-command-center.md`
- `observability-analytics-events.md`
- `reliability-sla.md`
- `ai-agent-observability-tracing.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-incident-response.md`
- `marketplace-template-outcome-intelligence.md`
- `marketplace-template-health-monitoring.md`
- `marketplace-customer-review-reputation-system.md`
- `marketplace-billing-payouts.md`

Customer health must not be isolated from delivery, product, revenue, support, or marketplace truth.

---

## 3. Health Scoring Philosophy

Ariyo customer health must be outcome-weighted, not vanity-weighted.

High health means:

- The customer has clear business outcomes.
- Ariyo is deployed in real workflows.
- AI Employees are active and trusted.
- Governance is configured correctly.
- Training is progressing.
- Users and admins are adopting the platform.
- Marketplace assets are installed safely and producing value.
- Support burden is manageable.
- Incidents are rare and resolved well.
- Costs are predictable.
- Stakeholders understand value.
- Renewal risk is low.
- Expansion readiness is credible.

Low health may exist even when usage is high if:

- Users are experimenting without business outcomes.
- Costs are rising without ROI.
- AI Employees create unsafe outputs.
- Marketplace assets fail frequently.
- Admins bypass governance.
- Training is incomplete.
- Executive sponsors are disengaged.
- Support tickets are increasing.
- The customer has not achieved agreed success criteria.
- Procurement/security/legal concerns remain unresolved.

---

## 4. Health Score Dimensions

Ariyo should compute health from multiple dimensions.

Recommended default weighting:

```text
customer_health_score =
  outcome_realization_score       * 0.25
+ adoption_depth_score            * 0.15
+ AI_employee_success_score       * 0.15
+ governance_readiness_score      * 0.10
+ support_risk_score              * 0.10
+ relationship_engagement_score   * 0.10
+ financial_health_score          * 0.05
+ marketplace_value_score         * 0.05
+ training_enablement_score       * 0.05
- critical_risk_penalty
- incident_penalty
- renewal_risk_penalty
```

The formula must be versioned and configurable by segment.

Ariyo must not use one universal scoring model for all customers.

---

## 5. Health Score Bands

Recommended bands:

| Score | Health Band | Meaning |
|---:|---|---|
| 85-100 | Excellent | Customer is achieving outcomes, operating safely, and likely expansion-ready. |
| 70-84 | Healthy | Customer is on track but still has improvement areas. |
| 55-69 | Watch | Customer has adoption, value, support, or governance risks. |
| 35-54 | At Risk | Customer has meaningful renewal, value, or operational risk. |
| 0-34 | Critical | Customer requires immediate intervention or executive escalation. |

Bands must show reasons, not just colors.

Every health score must include:

- Current score
- Previous score
- Score trend
- Confidence level
- Main positive drivers
- Main negative drivers
- Recommended actions
- Customer-success owner
- Next review date

---

## 6. Customer Health Objects

### 6.1 CustomerHealthProfile

```ts
export interface CustomerHealthProfile {
  customerId: string;
  organizationId: string;
  segment: 'startup' | 'mid_market' | 'enterprise' | 'strategic';
  plan: 'basic' | 'pro' | 'smart' | 'enterprise_custom';
  lifecycleStage:
    | 'implementation'
    | 'pilot'
    | 'production'
    | 'adoption'
    | 'renewal'
    | 'expansion'
    | 'at_risk'
    | 'churned';
  healthScore: number;
  healthBand: 'excellent' | 'healthy' | 'watch' | 'at_risk' | 'critical';
  confidence: number;
  scoreVersion: string;
  updatedAt: string;
  ownerUserId?: string;
  executiveSponsorUserId?: string;
}
```

### 6.2 HealthScoreBreakdown

```ts
export interface HealthScoreBreakdown {
  customerId: string;
  outcomeRealizationScore: number;
  adoptionDepthScore: number;
  aiEmployeeSuccessScore: number;
  governanceReadinessScore: number;
  supportRiskScore: number;
  relationshipEngagementScore: number;
  financialHealthScore: number;
  marketplaceValueScore: number;
  trainingEnablementScore: number;
  incidentPenalty: number;
  renewalRiskPenalty: number;
  criticalRiskPenalty: number;
  drivers: HealthDriver[];
}
```

### 6.3 HealthDriver

```ts
export interface HealthDriver {
  type: 'positive' | 'negative' | 'neutral';
  category:
    | 'outcome'
    | 'adoption'
    | 'ai_employee'
    | 'governance'
    | 'support'
    | 'relationship'
    | 'finance'
    | 'marketplace'
    | 'training'
    | 'incident'
    | 'renewal';
  label: string;
  explanation: string;
  evidenceRefs: string[];
  weightImpact: number;
  recommendedAction?: string;
}
```

### 6.4 CustomerHealthAction

```ts
export interface CustomerHealthAction {
  id: string;
  customerId: string;
  actionType:
    | 'schedule_qbr'
    | 'run_enablement_session'
    | 'review_governance'
    | 'fix_integration'
    | 'review_costs'
    | 'launch_adoption_campaign'
    | 'create_success_plan'
    | 'escalate_to_executive'
    | 'prepare_renewal_plan'
    | 'identify_expansion_opportunity';
  priority: 'low' | 'medium' | 'high' | 'critical';
  ownerRole: 'csm' | 'ae' | 'support' | 'solutions' | 'professional_services' | 'executive' | 'customer_admin';
  dueAt?: string;
  status: 'open' | 'in_progress' | 'completed' | 'dismissed';
  evidenceRefs: string[];
}
```

---

## 7. Outcome Realization Score

Outcome realization is the most important enterprise health signal.

Signals:

- Number of defined success outcomes
- Percentage of success outcomes with baseline metrics
- Percentage of outcomes with current measurement
- Outcome progress vs target
- Customer-confirmed value
- Executive sponsor confirmation
- ROI evidence
- Time-to-first-value
- Business process adoption
- Before/after improvement
- Outcome durability over time

Ariyo must penalize accounts where outcomes were never defined.

Ariyo must separate activity from value.

Example:

```text
High usage + no measured outcome = Watch
Moderate usage + strong outcome completion = Healthy or Excellent
High automation + rising incident risk = At Risk
```

---

## 8. Adoption Depth Score

Adoption depth measures meaningful usage across the customer organization.

Signals:

- Active organizations/workspaces
- Active departments
- Active users by role
- Admin adoption
- Manager adoption
- End-user adoption
- AI Employee daily/weekly/monthly active usage
- Workflow execution frequency
- Marketplace asset usage
- Feature adoption by plan
- User retention after onboarding
- Seat utilization
- Inactive purchased seats
- New team onboarding velocity
- Adoption by rollout wave

Ariyo must avoid rewarding shallow logins.

Ariyo must detect whether usage is concentrated in one champion or distributed across teams.

---

## 9. AI Employee Success Score

This measures whether AI Employees are performing safely and effectively.

Signals:

- Active AI Employees
- AI Employee task success rate
- Human approval rate
- Human correction rate
- Escalation rate
- Unsafe output rate
- Tool failure rate
- Knowledge retrieval quality
- Evaluation score trend
- Model reliability
- Cost per successful task
- SLA adherence
- Incident history
- User trust feedback
- Business outcome contribution

Ariyo must penalize customers with high AI usage but poor AI quality.

AI Employee success must feed customer health, not just product analytics.

---

## 10. Governance Readiness Score

Governance health measures whether the customer is operating Ariyo safely.

Signals:

- SSO configured
- SCIM configured
- Admin roles assigned
- Backup owners assigned
- Workspace ownership complete
- Policy engine configured
- Approval workflows active
- Marketplace private catalog configured
- Data residency policies configured
- Audit reports enabled
- Compliance evidence reviewed
- Access reviews completed
- Orphaned users count
- Break-glass access tested
- AI Employee permission boundaries reviewed

Governance readiness is especially important for Smart and Enterprise customers.

Ariyo must not mark a customer healthy if they are achieving usage through unsafe governance shortcuts.

---

## 11. Support Risk Score

Support risk measures friction and operational pain.

Signals:

- Ticket volume trend
- Ticket severity mix
- Time to first response
- Time to resolution
- Reopened tickets
- Escalation frequency
- Integration failures
- Billing issues
- Marketplace disputes
- Customer sentiment in tickets
- Support burden per active user
- Support burden per AI Employee
- Support burden per installed Marketplace asset
- Unresolved implementation blockers

High support volume is not always bad during implementation, but unresolved high-severity support is a major health risk.

---

## 12. Relationship Engagement Score

Relationship health measures whether Ariyo has active access to decision-makers and operators.

Signals:

- Executive sponsor identified
- Executive sponsor engagement
- Admin engagement
- Governance board engagement
- QBR/EBR attendance
- Open success plan
- Stakeholder mapping complete
- Champion network health
- Customer response time
- NPS/CSAT sentiment
- Renewal meeting scheduled
- Business review delivered
- Change in sponsor or champion

Ariyo must detect hidden churn risk when usage is healthy but executive engagement disappears.

---

## 13. Financial Health Score

Financial health measures whether the commercial relationship is stable.

Signals:

- Payment status
- Invoice disputes
- Contract term remaining
- Renewal date proximity
- Seat utilization vs contract
- AI cost trend
- Marketplace spend trend
- Budget owner engagement
- Procurement status
- Cost predictability
- Overages
- Refund/dispute events
- Expansion pipeline

Ariyo must distinguish value-based expansion from cost-driven surprise.

---

## 14. Marketplace Value Score

Marketplace health measures whether installed Marketplace assets are helping.

Signals:

- Installed asset count
- Active asset count
- Certified asset usage
- Asset outcome score
- Template health score
- Template incident rate
- Asset uninstall rate
- Asset refund/dispute rate
- Private catalog adoption
- Partner solution performance
- Region compliance compatibility
- Marketplace spend ROI
- Review/reputation signals

Marketplace adoption is healthy only when assets are safe, active, outcome-producing, and supported.

---

## 15. Training Enablement Score

Training health measures customer readiness to use Ariyo correctly.

Signals:

- Admin certification completion
- AI Employee manager certification
- End-user onboarding completion
- Governance board training completion
- Security/compliance training completion
- Training assessment scores
- Learning path completion
- Recertification status
- Training attendance
- Training-to-adoption correlation

Ariyo must penalize production rollout without adequate training.

---

## 16. Renewal Risk Score

Renewal risk is not identical to health score.

Renewal risk must consider:

- Contract renewal date
- Executive engagement
- Outcome realization
- Budget confidence
- Procurement signals
- Support history
- Champion changes
- Competitive replacement signals
- Product gaps
- Security/legal blockers
- Low adoption in purchased departments
- Unresolved disputes
- Sentiment deterioration
- Expansion or contraction trend

Renewal risk can be:

```ts
export type RenewalRiskLevel = 'low' | 'medium' | 'high' | 'critical';
```

A customer may be operationally healthy but renewal-risky due to budget or sponsor change.

---

## 17. Expansion Readiness Score

Expansion readiness identifies whether a customer can responsibly grow.

Signals:

- Existing outcome success
- Stable governance
- Low support burden
- Strong executive sponsor
- High seat utilization
- New department demand
- Marketplace/private catalog maturity
- AI Employee success rate
- Budget owner engagement
- Use-case backlog
- Champion network strength
- Training maturity

Ariyo must not push expansion when customer health is weak.

Expansion recommendations must be evidence-backed.

---

## 18. Health Actions & Playbooks

Each health band must trigger appropriate action.

### Excellent

Recommended actions:

- Prepare expansion plan
- Ask for case study if appropriate
- Introduce advanced Smart capabilities
- Recommend certified Marketplace assets
- Invite to advisory council
- Create executive value report

### Healthy

Recommended actions:

- Continue adoption plan
- Optimize workflows
- Expand training
- Improve marketplace recommendations
- Review outcome progress

### Watch

Recommended actions:

- Schedule health review
- Identify adoption blockers
- Review training gaps
- Validate AI Employee quality
- Review support ticket trend
- Update success plan

### At Risk

Recommended actions:

- Executive escalation
- Recovery plan
- Weekly risk review
- Governance review
- Support escalation
- Product gap review
- Renewal risk mitigation

### Critical

Recommended actions:

- Immediate executive review
- Incident or escalation command center
- Customer recovery plan
- Potential pause of risky automation
- Renewal save plan
- Formal account risk register

---

## 19. Basic / Pro / Smart Health Rules

### Basic

Basic health should emphasize:

- Fast first value
- Low-friction onboarding
- Simple AI Employee activation
- Low support burden
- Low cost surprise
- Clear value perception
- Minimal governance needs

Basic should not require complex enterprise governance signals.

### Pro

Pro health should emphasize:

- Team adoption
- Workflow automation success
- Integration reliability
- Manager adoption
- Operational outcomes
- Marketplace asset value
- Support quality

Pro should measure whether Ariyo is becoming part of daily operations.

### Smart

Smart health should emphasize:

- Multi-agent AI Employee performance
- Governance readiness
- Advanced approval workflows
- Private catalog maturity
- Cost controls
- Outcome realization
- Security/compliance maturity
- Executive reporting
- Expansion readiness

Smart customers can have high upside and high risk; scoring must be more rigorous.

---

## 20. Customer Success Dashboard Requirements

The Customer Success dashboard must show:

- Health score and band
- Score trend over time
- Top positive drivers
- Top risk drivers
- Renewal risk
- Expansion readiness
- Adoption by department
- Outcome progress
- AI Employee success
- Marketplace value
- Support risk
- Training readiness
- Governance readiness
- Recommended next actions
- Open success plan
- Upcoming renewal milestones
- Executive summary generator

The dashboard must support drill-down from score to evidence.

---

## 21. Executive Reporting Requirements

Ariyo must support customer-facing executive health summaries.

Reports should include:

- Business outcomes achieved
- Adoption progress
- AI Employee productivity impact
- Risk mitigation status
- Governance readiness
- Marketplace value
- Cost and ROI signals
- Recommended next phase
- Open decisions required from customer leadership

Executive reports must not expose internal risk scoring logic that could be misinterpreted without context.

---

## 22. API Contract

### 22.1 Get Customer Health

```http
GET /api/v1/customers/{customerId}/health
```

Response:

```json
{
  "customerId": "cus_123",
  "healthScore": 78,
  "healthBand": "healthy",
  "confidence": 0.86,
  "trend": "improving",
  "renewalRisk": "medium",
  "expansionReadiness": "high",
  "scoreVersion": "enterprise-health-v1.0",
  "updatedAt": "2026-06-19T00:00:00Z"
}
```

### 22.2 Get Score Breakdown

```http
GET /api/v1/customers/{customerId}/health/breakdown
```

### 22.3 Recalculate Health

```http
POST /api/v1/customers/{customerId}/health/recalculate
```

Request:

```json
{
  "reason": "manual_csm_review",
  "includeDraftSignals": false
}
```

### 22.4 Create Health Action

```http
POST /api/v1/customers/{customerId}/health/actions
```

### 22.5 Update Health Action

```http
PATCH /api/v1/customer-health-actions/{actionId}
```

### 22.6 Export Executive Health Report

```http
POST /api/v1/customers/{customerId}/health/executive-report
```

---

## 23. Webhooks

Ariyo should emit:

```text
customer.health.changed
customer.health.band_changed
customer.health.renewal_risk_changed
customer.health.expansion_readiness_changed
customer.health.critical_driver_detected
customer.health.action_created
customer.health.action_completed
customer.health.executive_report_generated
customer.health.recalculated
```

Webhook payloads must include score version, timestamp, customer ID, and driver summary.

---

## 24. Observability Events

Required events:

```text
customer_health_score_calculated
customer_health_driver_added
customer_health_band_changed
customer_renewal_risk_updated
customer_expansion_readiness_updated
customer_health_action_recommended
customer_health_action_created
customer_health_action_completed
customer_health_action_dismissed
executive_health_report_generated
health_score_override_requested
health_score_override_approved
health_score_override_rejected
```

Events must support segmentation by plan, lifecycle stage, industry, account owner, CSM, customer segment, and region.

---

## 25. Health Score Overrides

Manual overrides must be allowed only with governance.

Requirements:

- Reason required
- Evidence required
- Expiration date required
- Approver required for major overrides
- Original score preserved
- Override history retained
- Reporting must distinguish computed score from overridden score

Ariyo must not allow subjective CSM optimism to hide churn risk.

---

## 26. AI Customer Health Assistant

The AI Customer Health Assistant may:

- Summarize health drivers
- Draft CSM action plans
- Generate QBR talking points
- Identify missing success criteria
- Recommend next best action
- Detect renewal risks
- Suggest expansion opportunities
- Summarize support and adoption issues
- Prepare executive-friendly summaries

The assistant must not:

- Invent value not supported by evidence
- Hide negative signals
- Recommend expansion for unhealthy customers
- Send customer-facing reports without review
- Use sensitive personal attributes in scoring
- Override health score without authorization
- Diagnose customer business issues beyond available evidence

---

## 27. Security & Privacy Rules

Customer health data is sensitive business intelligence.

Requirements:

- Role-based access control
- Customer-level access boundaries
- Audit logs for score access and export
- Redaction for customer-facing reports
- No sensitive personal attributes in scoring
- No raw private message exposure in executive summaries
- Evidence access controlled by permission
- Data retention aligned to customer contract
- Export controls for enterprise customers

---

## 28. Advanced KPIs

Ariyo should track:

- Net Revenue Retention by Health Band
- Gross Revenue Retention by Health Band
- Renewal Risk Accuracy
- Expansion Readiness Accuracy
- Health Score Movement Velocity
- At-Risk Recovery Rate
- Critical Account Recovery Rate
- Outcome Realization Rate
- Adoption Depth Score Trend
- AI Employee Success Score Trend
- Governance Readiness Completion Rate
- Support Risk Reduction Rate
- Customer Health Action Completion Rate
- CSM Intervention Effectiveness
- Health Score Override Rate
- False Positive Churn Risk Rate
- False Negative Churn Risk Rate
- Marketplace Value Contribution to Health
- Training Completion Impact on Adoption

---

## 29. Forbidden Patterns

Ariyo must never:

- Score customer health only from login volume.
- Mark a customer healthy without outcome evidence.
- Hide renewal risk because product usage is high.
- Push expansion when customer health is poor.
- Use subjective CSM notes as the main score source.
- Use sensitive personal attributes in health scoring.
- Penalize a customer for low usage during planned phased rollout.
- Ignore implementation lifecycle context.
- Treat support ticket volume as bad without context.
- Ignore unresolved high-severity incidents.
- Ignore governance gaps in Smart or enterprise customers.
- Use health scores without explainability.
- Allow unapproved manual score manipulation.
- Expose internal risk labels to customers without context.
- Generate customer-facing claims without evidence.

---

## 30. Golden Rule

Ariyo Enterprise Customer Health Scoring must answer one question better than any dashboard:

> Is this customer safely achieving enough measurable value to renew, expand, and trust Ariyo more over time?

If the answer is unclear, the health system must create action, not false confidence.
