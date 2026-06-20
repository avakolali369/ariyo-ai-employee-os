# Ariyo Enterprise Renewal & Expansion System Skill

## Core Contract

Ariyo Enterprise Renewal & Expansion System is not a sales reminder before contract expiration.

It is the governed customer-success, revenue, procurement, value-realization, executive-alignment, expansion-readiness, renewal-risk, account-planning, and commercial-orchestration system that helps Ariyo retain enterprise customers, expand responsibly, and prove continued business value.

Ariyo must renew customers because they have achieved measurable value, trust the operating model, and see a credible path to more value.

Ariyo must never push expansion before customer health, adoption, governance, security, support readiness, and outcome realization are strong enough to justify it.

---

## 1. Purpose

This skill defines how Ariyo should design, build, and operate enterprise renewal and expansion workflows across Customer Success, Sales, RevOps, Finance, Legal, Procurement, Support, Implementation, Product, Marketplace, and Executive stakeholders.

The system must answer:

- Which accounts are renewal-ready?
- Which accounts are renewal-risky?
- Which accounts are expansion-ready?
- Which accounts need a save plan?
- Which executives need engagement?
- Which procurement, legal, budget, or security blockers may delay renewal?
- Which customer outcomes should be proven before commercial motion?
- Which AI Employees, Marketplace assets, workspaces, users, plans, regions, and governance capabilities drive value?
- Which risks should block upsell even if revenue opportunity exists?

---

## 2. Strategic Positioning

Renewal and expansion in Ariyo must be value-led.

Ariyo is not selling seats only.
Ariyo is selling operating capacity through AI Employees.

Therefore renewal and expansion must connect to:

- measurable business outcomes,
- trusted AI operation,
- safe automation,
- improved productivity,
- better workflows,
- reduced manual burden,
- controlled AI cost,
- governance confidence,
- executive visibility,
- marketplace value,
- long-term account transformation.

---

## 3. Related Skills

This skill depends on and connects with:

- `enterprise-customer-health-scoring.md`
- `enterprise-account-governance.md`
- `enterprise-approval-workflows.md`
- `enterprise-implementation-methodology.md`
- `enterprise-customer-training-certification.md`
- `enterprise-change-management-system.md`
- `customer-success-playbooks.md`
- `revenue-operations-system.md`
- `finance-accounting-controls.md`
- `monetization-billing.md`
- `pricing-packaging-strategy.md`
- `product-analytics-growth.md`
- `observability-analytics-events.md`
- `marketplace-template-outcome-intelligence.md`
- `marketplace-billing-payouts.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-enterprise-audit-reports.md`
- `quality-assurance-system.md`
- `trust-center-public-status.md`

---

## 4. Primary Users

### Customer-Side Users

- executive sponsor,
- procurement lead,
- finance approver,
- legal reviewer,
- security reviewer,
- Ariyo platform owner,
- workspace admins,
- AI Employee managers,
- department leaders,
- transformation leaders,
- operations managers,
- end users.

### Ariyo-Side Users

- Customer Success Manager,
- Account Executive,
- Renewal Manager,
- Expansion Sales Rep,
- RevOps Manager,
- Finance Operations,
- Legal Operations,
- Support Lead,
- Product Manager,
- Implementation Lead,
- Partner Manager,
- Executive Sponsor,
- Marketplace Operations.

---

## 5. Renewal & Expansion Object Model

### EnterpriseAccountCommercialProfile

Each enterprise account must maintain a commercial profile:

```ts
type EnterpriseAccountCommercialProfile = {
  accountId: string;
  accountName: string;
  plan: "basic" | "pro" | "smart" | "enterprise_custom";
  contractStartDate: string;
  contractEndDate: string;
  renewalDate: string;
  renewalStage: RenewalStage;
  expansionStage: ExpansionStage;
  currentARR: number;
  potentialARR: number;
  expansionPotentialBand: "none" | "low" | "medium" | "high" | "strategic";
  healthScore: number;
  renewalRiskScore: number;
  expansionReadinessScore: number;
  executiveEngagementScore: number;
  procurementReadinessScore: number;
  valueRealizationScore: number;
  governanceReadinessScore: number;
  openRisks: RenewalRisk[];
  activeOpportunities: ExpansionOpportunity[];
  renewalOwnerUserId: string;
  customerSuccessOwnerUserId: string;
  accountExecutiveUserId?: string;
  executiveSponsorUserId?: string;
  lastUpdatedAt: string;
};
```

### RenewalStage

```ts
type RenewalStage =
  | "not_started"
  | "monitoring"
  | "early_value_review"
  | "renewal_planning"
  | "customer_alignment"
  | "procurement_review"
  | "legal_security_review"
  | "commercial_negotiation"
  | "pending_signature"
  | "renewed"
  | "at_risk"
  | "save_plan_active"
  | "churned";
```

### ExpansionStage

```ts
type ExpansionStage =
  | "not_qualified"
  | "signal_detected"
  | "customer_value_validated"
  | "cs_qualified"
  | "sales_qualified"
  | "solutioning"
  | "proposal"
  | "procurement"
  | "closed_won"
  | "closed_lost"
  | "deferred";
```

---

## 6. Renewal Timeline Model

Ariyo must support renewal motion by timeline.

### 180 Days Before Renewal

- confirm executive sponsor,
- verify business outcomes,
- identify procurement timeline,
- review contract terms,
- check security/legal evidence needs,
- inspect health score,
- inspect support burden,
- inspect adoption trend,
- inspect AI Employee value,
- inspect marketplace usage,
- identify expansion candidates.

### 120 Days Before Renewal

- prepare account value summary,
- run customer health review,
- schedule executive business review,
- identify blockers,
- confirm budget owner,
- check pricing changes,
- validate product roadmap dependencies,
- initiate security/procurement evidence if required.

### 90 Days Before Renewal

- launch renewal plan,
- confirm stakeholders,
- confirm procurement path,
- start legal/security review,
- validate invoice/billing details,
- update renewal forecast,
- identify expansion proposal or save plan.

### 60 Days Before Renewal

- finalize commercial terms,
- resolve blockers,
- confirm value proof,
- run executive alignment,
- update risk score,
- submit procurement materials.

### 30 Days Before Renewal

- final signature workflow,
- confirm entitlement continuity,
- confirm payment process,
- prepare renewal success communication,
- lock post-renewal success plan.

---

## 7. Renewal Readiness Score

Renewal readiness must not be based only on customer sentiment.

```txt
renewal_readiness_score =
  value_realization_score * 0.25
+ adoption_score * 0.20
+ governance_score * 0.15
+ executive_engagement_score * 0.15
+ support_health_score * 0.10
+ procurement_readiness_score * 0.10
+ billing_readiness_score * 0.05
- unresolved_critical_risk_penalty
- unresolved_security_penalty
- unresolved_outcome_gap_penalty
```

### Readiness Bands

| Score | Status | Action |
|---:|---|---|
| 85-100 | Renewal Ready | proceed with confidence |
| 70-84 | Mostly Ready | resolve specific blockers |
| 50-69 | At Risk | activate save plan |
| 0-49 | Critical Risk | executive escalation required |

---

## 8. Renewal Risk Signals

Ariyo must detect renewal risk from multiple domains.

### Product Risk

- low active users,
- low active AI Employees,
- low workflow completion,
- failed automation runs,
- poor Marketplace asset health,
- high AI error rate,
- low outcome completion,
- low feature adoption,
- unused purchased capacity.

### Business Risk

- unclear ROI,
- no executive sponsor,
- department budget cut,
- customer reorganization,
- change in strategic priority,
- competing platform evaluation,
- missed business outcomes.

### Relationship Risk

- low stakeholder engagement,
- no EBR attendance,
- unresolved executive complaint,
- negative feedback from admins,
- poor training participation,
- low champion activity.

### Operational Risk

- high support burden,
- unresolved incidents,
- SLA dissatisfaction,
- repeated implementation delays,
- failed integrations,
- governance bottlenecks.

### Commercial Risk

- procurement delay,
- legal blocker,
- payment failure,
- invoice dispute,
- pricing objection,
- budget owner unknown,
- renewal process not started in time.

---

## 9. Save Plan Governance

When renewal risk crosses threshold, Ariyo must create a save plan.

```ts
type RenewalSavePlan = {
  savePlanId: string;
  accountId: string;
  severity: "medium" | "high" | "critical";
  primaryRiskCategory: string;
  rootCauseSummary: string;
  customerImpact: string;
  targetOutcome: string;
  ownerUserId: string;
  executiveSponsorRequired: boolean;
  actions: SavePlanAction[];
  customerCommitments: string[];
  internalCommitments: string[];
  targetResolutionDate: string;
  status: "draft" | "active" | "blocked" | "resolved" | "failed";
};
```

### Save Plan Actions

- executive sponsor meeting,
- health review,
- support escalation,
- product remediation,
- integration repair,
- training refresh,
- governance redesign,
- outcome reset,
- service credit review,
- roadmap clarification,
- commercial concession review.

Concessions must never be the first response when the issue is unresolved value, trust, support, or product readiness.

---

## 10. Expansion Readiness Score

Expansion must be gated by readiness.

```txt
expansion_readiness_score =
  outcome_success_score * 0.25
+ adoption_growth_score * 0.20
+ stakeholder_pull_score * 0.15
+ unused_department_potential_score * 0.15
+ governance_maturity_score * 0.10
+ marketplace_expansion_signal_score * 0.10
+ budget_signal_score * 0.05
- unresolved_risk_penalty
- support_burden_penalty
- poor_health_penalty
```

### Expansion Readiness Bands

| Score | Status | Action |
|---:|---|---|
| 85-100 | Strong Expansion Ready | begin expansion motion |
| 70-84 | Expansion Candidate | validate with CSM and customer |
| 50-69 | Not Yet Ready | improve adoption first |
| 0-49 | Expansion Blocked | do not upsell |

---

## 11. Expansion Signal Types

### Usage-Based Signals

- more departments requesting access,
- more AI Employee creation,
- increased workflow volume,
- growth in connected integrations,
- increased Marketplace installs,
- repeated limit warnings,
- high admin activity.

### Outcome-Based Signals

- measurable time saved,
- improved workflow completion,
- revenue/process impact,
- reduced support workload,
- improved reporting or compliance,
- positive executive feedback.

### Governance-Based Signals

- customer has implemented SSO/SCIM,
- policy engine configured,
- approval workflows active,
- private catalog created,
- training completed,
- audit exports used.

### Commercial Signals

- procurement asks for expanded scope,
- customer requests pricing for another department,
- customer asks about Smart plan,
- partner identifies additional use case,
- customer requests enterprise roadmap.

---

## 12. Expansion Opportunity Model

```ts
type ExpansionOpportunity = {
  opportunityId: string;
  accountId: string;
  type:
    | "seat_expansion"
    | "workspace_expansion"
    | "department_expansion"
    | "ai_employee_expansion"
    | "marketplace_expansion"
    | "smart_plan_upgrade"
    | "professional_services"
    | "partner_services"
    | "private_catalog"
    | "enterprise_governance";
  source: "system_signal" | "csm" | "sales" | "partner" | "customer_request" | "product_usage";
  readinessScore: number;
  expectedARR: number;
  requiredEvidence: string[];
  blockers: string[];
  customerOutcomeHypothesis: string;
  recommendedNextStep: string;
  status: ExpansionStage;
};
```

---

## 13. Expansion Ethics & Guardrails

Ariyo must not expand accounts irresponsibly.

Expansion must be blocked when:

- health score is low,
- unresolved critical incidents exist,
- customer has not achieved initial success,
- governance is incomplete,
- customer is unhappy,
- AI cost is uncontrolled,
- support burden is excessive,
- security/legal trust is unresolved,
- training adoption is poor,
- outcome evidence is missing,
- customer stakeholders explicitly object.

Revenue is not a valid reason to override customer readiness.

---

## 14. Executive Business Review Integration

Renewal and expansion must connect to EBRs.

### EBR Inputs

- adoption metrics,
- AI Employee performance,
- outcome intelligence,
- health score,
- cost efficiency,
- Marketplace value,
- support trends,
- governance maturity,
- roadmap alignment,
- renewal timeline,
- expansion opportunities.

### EBR Outputs

- agreed business outcomes,
- confirmed executive sponsor,
- expansion interest,
- risk mitigation plan,
- procurement next steps,
- product feedback,
- success plan update.

---

## 15. Procurement Timeline Management

Enterprise renewal often fails because procurement starts too late.

The system must track:

- procurement owner,
- finance approver,
- legal reviewer,
- security reviewer,
- budget cycle,
- PO requirement,
- vendor status,
- contract terms,
- security questionnaire requirement,
- data processing agreement status,
- marketplace vendor evidence,
- renewal signature deadline.

---

## 16. Renewal Forecasting

Renewal forecast must combine commercial and customer-success signals.

```ts
type RenewalForecast = {
  accountId: string;
  renewalDate: string;
  currentARR: number;
  forecastARR: number;
  forecastCategory: "commit" | "likely" | "at_risk" | "downsell" | "churn";
  confidence: number;
  riskReasons: string[];
  positiveSignals: string[];
  nextActions: string[];
  lastReviewedAt: string;
};
```

Forecast categories must be explainable and auditable.

---

## 17. Downsell Management

Downsell is not automatically failure.

Downsell may be appropriate when:

- customer scope changed,
- unused capacity exists,
- plan was oversized,
- governance requires phased rollout,
- department exits platform,
- Smart features are not yet mature for account.

Downsell must trigger:

- value review,
- scope correction,
- success plan reset,
- expansion revisit date,
- product feedback if downsell reflects product gap.

---

## 18. Churn Analysis

Churn must always produce learning.

```ts
type ChurnAnalysis = {
  accountId: string;
  churnDate: string;
  primaryChurnReason: string;
  secondaryReasons: string[];
  preventability: "preventable" | "partially_preventable" | "not_preventable";
  productGaps: string[];
  supportGaps: string[];
  implementationGaps: string[];
  commercialGaps: string[];
  competitorMentioned?: string;
  lessonsLearned: string[];
  productFeedbackCreated: boolean;
};
```

---

## 19. Plan-Aware Renewal & Expansion Rules

### Basic

Basic renewal motion must emphasize:

- simple value proof,
- ease of use,
- low-risk usage,
- low-cost AI Employee adoption,
- clear next-step upgrade paths,
- limited governance complexity.

Basic expansion should not push complexity too early.

### Pro

Pro renewal motion must emphasize:

- operational workflows,
- team adoption,
- integrations,
- measurable productivity,
- stronger customer success,
- broader department rollout.

Pro expansion can include:

- more workspaces,
- more AI Employees,
- Marketplace bundles,
- implementation services,
- governance features.

### Smart

Smart renewal motion must emphasize:

- advanced AI Employee capability,
- multi-agent workflows,
- premium governance,
- enterprise controls,
- advanced Marketplace usage,
- cost controls,
- business transformation.

Smart expansion must be especially guarded by:

- security readiness,
- AI safety readiness,
- cost maturity,
- training completion,
- executive alignment,
- outcome proof.

---

## 20. Customer Success Playbook Triggers

The system must trigger playbooks for:

- low adoption,
- low outcome realization,
- low executive engagement,
- upcoming renewal,
- expansion signal,
- integration failure,
- unresolved support risk,
- training gap,
- governance gap,
- procurement blocker,
- high AI cost drift,
- Marketplace underuse,
- champion departure.

---

## 21. Customer-Facing Views

Customers should see renewal and value information without feeling pressured.

### Customer Admin View

Must show:

- current plan,
- renewal date,
- usage summary,
- value summary,
- active AI Employees,
- Marketplace value,
- governance readiness,
- training completion,
- procurement tasks,
- recommended success actions.

### Executive View

Must show:

- business outcomes,
- ROI signals,
- risk summary,
- adoption trend,
- success roadmap,
- expansion opportunities only when readiness is strong.

---

## 22. Internal Account Team View

Ariyo account teams need a unified view:

- health score,
- renewal forecast,
- risk reasons,
- expansion opportunities,
- executive contacts,
- procurement status,
- open support issues,
- adoption trends,
- Marketplace usage,
- training status,
- account plan,
- next best actions.

---

## 23. Account Plan Model

```ts
type EnterpriseAccountPlan = {
  accountId: string;
  fiscalPeriod: string;
  strategicGoals: string[];
  customerOutcomes: string[];
  executiveStakeholders: string[];
  renewalStrategy: string;
  expansionStrategy: string;
  riskPlan: string;
  successMilestones: string[];
  commercialMilestones: string[];
  productFeedback: string[];
  nextBusinessReviewDate: string;
};
```

---

## 24. Revenue & Customer Success Alignment

Ariyo must avoid conflict between Sales and Customer Success.

### Rules

- CSM owns value and health.
- AE owns commercial expansion.
- Renewal owner coordinates renewal process.
- RevOps owns forecast hygiene.
- Finance owns billing truth.
- Legal owns contract terms.
- Customer success must be able to block expansion when health is poor.
- Sales must be able to flag expansion opportunity when evidence is strong.
- Executive sponsor must be engaged for strategic accounts.

---

## 25. API Contract

### Get Renewal Profile

```http
GET /api/v1/enterprise/accounts/{accountId}/renewal-profile
```

Returns:

```json
{
  "accountId": "acct_123",
  "renewalDate": "2027-03-31",
  "renewalStage": "renewal_planning",
  "currentARR": 180000,
  "forecastARR": 220000,
  "healthScore": 82,
  "renewalRiskScore": 24,
  "expansionReadinessScore": 78,
  "procurementReadinessScore": 65,
  "nextActions": [
    "Schedule executive business review",
    "Confirm procurement owner",
    "Prepare value evidence package"
  ]
}
```

### Create Save Plan

```http
POST /api/v1/enterprise/accounts/{accountId}/save-plans
```

### List Expansion Opportunities

```http
GET /api/v1/enterprise/accounts/{accountId}/expansion-opportunities
```

### Update Renewal Forecast

```http
POST /api/v1/enterprise/accounts/{accountId}/renewal-forecast
```

### Generate Value Summary

```http
POST /api/v1/enterprise/accounts/{accountId}/value-summary
```

---

## 26. Webhooks

Ariyo should emit:

- `renewal.stage_changed`
- `renewal.risk_score_changed`
- `renewal.save_plan_created`
- `renewal.forecast_changed`
- `renewal.procurement_blocker_detected`
- `renewal.executive_engagement_required`
- `expansion.signal_detected`
- `expansion.readiness_changed`
- `expansion.blocked_by_health`
- `account.value_summary_generated`
- `account.renewed`
- `account.churned`

---

## 27. Observability Events

Every major action must emit structured events:

```json
{
  "event": "expansion_signal_detected",
  "account_id": "acct_123",
  "signal_type": "marketplace_expansion",
  "readiness_score": 81,
  "health_score": 88,
  "recommended_action": "CSM validation",
  "timestamp": "2026-06-19T10:00:00Z"
}
```

---

## 28. KPI Framework

### Renewal KPIs

- Gross Revenue Retention,
- Net Revenue Retention,
- Renewal Forecast Accuracy,
- Renewal Risk Detection Lead Time,
- Save Plan Success Rate,
- Renewal Cycle Time,
- Procurement Delay Rate,
- Executive Sponsor Coverage,
- On-Time Renewal Rate,
- Preventable Churn Rate.

### Expansion KPIs

- Expansion Qualified Signal Rate,
- Expansion Win Rate,
- Expansion Readiness Accuracy,
- Expansion ARR,
- Expansion After Outcome Proof Rate,
- Expansion Blocked by Low Health Rate,
- Smart Upgrade Success Rate,
- Marketplace Expansion ARR.

### Customer Value KPIs

- Outcome Realization Rate,
- AI Employee Active Value Rate,
- Marketplace Value Contribution,
- Time to Renewed Value,
- EBR Completion Rate,
- Customer-Confirmed ROI Rate.

---

## 29. AI Renewal & Expansion Assistant

Ariyo may use an AI assistant to help account teams.

The assistant may:

- summarize account health,
- identify renewal risks,
- propose save plan actions,
- draft EBR talking points,
- summarize value evidence,
- detect expansion signals,
- recommend next best actions,
- explain forecast changes,
- prepare procurement checklist.

The assistant must not:

- fabricate customer ROI,
- create fake urgency,
- pressure customers,
- override health-based expansion blocks,
- promise pricing or contract terms without approval,
- hide risk to improve forecast,
- generate misleading executive summaries.

---

## 30. Security & Privacy Rules

- Account data must be role-scoped.
- Commercial forecasts must not be visible to unauthorized customer users.
- Customer value summaries must avoid exposing private user-level behavior unless authorized.
- AI-generated summaries must cite source signals internally.
- Sensitive account notes must support access controls.
- Exported renewal reports must be auditable.
- Customer-facing ROI must distinguish measured, estimated, and claimed values.

---

## 31. Finance & Legal Rules

- Renewal ARR must reconcile with billing source of truth.
- Expansion opportunities must not create entitlement changes before contract approval.
- Discounts must follow approval policy.
- Contract terms must not be generated or modified without legal approval.
- Procurement milestones must be auditable.
- Invoice disputes must connect to finance controls.

---

## 32. Forbidden Patterns

Do not:

- upsell unhealthy customers,
- hide support incidents from renewal forecast,
- count vanity usage as value realization,
- fabricate ROI,
- treat NPS as renewal readiness alone,
- delay save plan creation to protect forecast,
- ignore procurement timeline,
- expand Smart plan without governance readiness,
- promise custom roadmap commitments casually,
- use AI summaries without source traceability,
- pressure customers with misleading scarcity,
- renew customers without a post-renewal success plan.

---

## 33. Done Criteria

This skill is implemented when:

- every enterprise account has renewal profile,
- renewal timeline is tracked,
- risk signals are computed,
- expansion readiness is scored,
- save plans can be created,
- forecast categories are explainable,
- procurement blockers are visible,
- EBRs connect to renewal/expansion,
- CS and Sales workflows are aligned,
- APIs/webhooks exist,
- customer-facing value summaries are available,
- AI assistant follows guardrails,
- all commercial metrics are auditable.

---

## 34. Golden Rule

Renewal is earned by value.

Expansion is earned by readiness.

Ariyo must grow enterprise revenue by making customers more successful, not by selling more complexity before they are ready.
