# Ariyo Enterprise Adoption & Success Insights Skill

## Core Contract

Ariyo Enterprise Adoption & Success Insights is not a usage dashboard.

It is the governed adoption-intelligence, success-measurement, friction-detection, value-realization, department-insight, cohort-analysis, milestone-tracking, executive-reporting, and customer-success decision system that helps Ariyo and enterprise customers understand whether Ariyo AI Employees are becoming embedded in real work and producing measurable business value.

Ariyo must distinguish between activity and adoption.

Ariyo must distinguish between adoption and success.

Ariyo must distinguish between success and durable enterprise value.

---

## 1. Purpose

This skill defines how Ariyo should measure, explain, and act on enterprise adoption and success insights across organizations, workspaces, departments, users, AI Employees, workflows, templates, marketplace assets, integrations, training programs, governance policies, and business outcomes.

The system must help Ariyo answer:

- Are customers actually adopting Ariyo after implementation?
- Which departments are succeeding, stalling, or resisting adoption?
- Which AI Employees are creating measurable value?
- Which workflows are used often but not producing outcomes?
- Which teams are trained but not activated?
- Which customers are at risk despite high login activity?
- Which accounts are ready for expansion?
- Which customer success playbooks should be triggered?
- Which implementation, training, product, or governance changes are needed?

Adoption insights must feed Customer Health, Renewal & Expansion, Customer Success Playbooks, Executive Business Reviews, Professional Services, Product Analytics, Template Outcome Intelligence, and Marketplace Ranking.

---

## 2. Related Ariyo Skills

This skill must be used together with:

- `enterprise-customer-health-scoring.md`
- `enterprise-renewal-expansion-system.md`
- `enterprise-implementation-methodology.md`
- `enterprise-customer-training-certification.md`
- `enterprise-change-management-system.md`
- `customer-success-playbooks.md`
- `product-analytics-growth.md`
- `observability-analytics-events.md`
- `marketplace-template-outcome-intelligence.md`
- `marketplace-template-health-monitoring.md`
- `ai-agent-observability-tracing.md`
- `enterprise-executive-business-review.md`
- `revenue-operations-system.md`

If there is a conflict, customer safety, privacy, compliance, and governance controls override growth insights.

---

## 3. Adoption Philosophy

Ariyo must not treat adoption as:

- number of logins
- number of seats provisioned
- number of messages sent
- number of AI Employees created
- number of templates installed
- raw feature usage
- dashboard visits
- trial excitement
- internal champion enthusiasm

Ariyo must treat adoption as the degree to which Ariyo becomes part of reliable, governed, recurring, measurable work.

Ariyo adoption should be evaluated through:

1. **Activation** — users, teams, workflows, and AI Employees move from setup to first meaningful value.
2. **Usage Quality** — work is performed in repeatable, successful, safe patterns.
3. **Workflow Embedding** — Ariyo becomes part of normal team operations.
4. **Outcome Realization** — customer-defined business outcomes improve.
5. **Durability** — usage continues beyond launch excitement.
6. **Governance Maturity** — adoption happens within policy, security, and approval boundaries.
7. **Expansion Readiness** — additional teams can adopt without destabilizing the account.

---

## 4. Core Objects

### 4.1 AdoptionInsightProfile

```ts
export interface AdoptionInsightProfile {
  organizationId: string;
  accountId: string;
  reportingPeriod: {
    startAt: string;
    endAt: string;
  };
  overallAdoptionScore: number;
  successScore: number;
  usageQualityScore: number;
  outcomeRealizationScore: number;
  governanceAdoptionScore: number;
  expansionReadinessScore: number;
  renewalSupportScore: number;
  adoptionStage: AdoptionStage;
  departmentInsights: DepartmentAdoptionInsight[];
  aiEmployeeInsights: AIEmployeeAdoptionInsight[];
  workflowInsights: WorkflowAdoptionInsight[];
  templateInsights: TemplateAdoptionInsight[];
  trainingInsights: TrainingAdoptionInsight[];
  frictionSignals: AdoptionFrictionSignal[];
  recommendedActions: AdoptionRecommendedAction[];
  generatedAt: string;
}
```

### 4.2 AdoptionStage

```ts
export type AdoptionStage =
  | 'not_started'
  | 'setup'
  | 'activated'
  | 'early_adoption'
  | 'department_embedded'
  | 'multi_department_expansion'
  | 'enterprise_scaled'
  | 'stalled'
  | 'at_risk'
  | 'regressing';
```

### 4.3 DepartmentAdoptionInsight

```ts
export interface DepartmentAdoptionInsight {
  departmentId: string;
  departmentName: string;
  adoptionScore: number;
  activationRate: number;
  trainedUserRate: number;
  activeUserRate: number;
  workflowCompletionRate: number;
  successfulAIEmployeeRunRate: number;
  outcomeRealizationScore: number;
  governanceComplianceScore: number;
  frictionLevel: 'none' | 'low' | 'medium' | 'high' | 'critical';
  expansionPotential: 'low' | 'medium' | 'high';
  risks: string[];
  opportunities: string[];
}
```

### 4.4 AIEmployeeAdoptionInsight

```ts
export interface AIEmployeeAdoptionInsight {
  aiEmployeeId: string;
  name: string;
  departmentId?: string;
  ownerUserId?: string;
  adoptionScore: number;
  successfulRunRate: number;
  repeatUsageRate: number;
  timeSavedEstimateMinutes: number;
  humanReviewRate: number;
  escalationRate: number;
  outcomeContributionScore: number;
  policyViolationRate: number;
  costPerSuccessfulOutcome: number;
  reliabilityStatus: 'healthy' | 'degraded' | 'unhealthy' | 'unknown';
  recommendedAction: string;
}
```

### 4.5 AdoptionFrictionSignal

```ts
export interface AdoptionFrictionSignal {
  signalId: string;
  organizationId: string;
  scope: 'organization' | 'workspace' | 'department' | 'team' | 'user' | 'ai_employee' | 'workflow' | 'template';
  scopeId: string;
  type:
    | 'low_activation'
    | 'training_gap'
    | 'workflow_failure'
    | 'integration_failure'
    | 'permission_block'
    | 'approval_bottleneck'
    | 'cost_concern'
    | 'trust_concern'
    | 'unsafe_output_concern'
    | 'poor_outcome'
    | 'champion_disengagement'
    | 'executive_misalignment'
    | 'governance_delay'
    | 'data_readiness_gap'
    | 'change_resistance';
  severity: 'low' | 'medium' | 'high' | 'critical';
  evidence: string[];
  detectedAt: string;
  recommendedPlaybookId?: string;
}
```

### 4.6 AdoptionRecommendedAction

```ts
export interface AdoptionRecommendedAction {
  actionId: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  ownerRole:
    | 'csm'
    | 'solutions_engineer'
    | 'professional_services'
    | 'account_executive'
    | 'support'
    | 'customer_admin'
    | 'executive_sponsor'
    | 'partner';
  title: string;
  reason: string;
  linkedSignalIds: string[];
  targetOutcome: string;
  dueInDays?: number;
  playbookId?: string;
  expectedImpact: 'low' | 'medium' | 'high';
}
```

---

## 5. Adoption Score Dimensions

Ariyo should calculate adoption through multiple dimensions instead of one vanity score.

### 5.1 Activation Score

Measures whether the customer reached meaningful first value.

Signals:

- organization setup completed
- workspace setup completed
- AI Employee launched
- first successful run completed
- first workflow completed
- first marketplace/internal template installed and activated
- first knowledge source connected
- first user training completed
- first governed approval completed
- first business outcome confirmed

### 5.2 Usage Quality Score

Measures whether usage is productive and reliable.

Signals:

- successful run rate
- repeat usage rate
- workflow completion rate
- human review acceptance rate
- low escalation rate
- low retry/failure rate
- low unsafe output rate
- stable usage across weeks
- meaningful task completion, not experimentation noise

### 5.3 Workflow Embedding Score

Measures whether Ariyo is embedded into operational routines.

Signals:

- recurring workflow schedules
- repeated department usage
- usage across multiple roles
- handoff into systems of record
- approved automations in production
- integration usage
- recurring executive or operational reports
- dependency on Ariyo outputs in business processes

### 5.4 Outcome Realization Score

Measures whether customer-defined outcomes are improving.

Signals:

- time saved
- cost reduced
- response time improved
- workflow throughput increased
- ticket volume reduced
- content velocity improved
- sales cycle support improved
- finance/accounting cycle time improved
- customer support deflection improved
- compliance/audit effort reduced
- measurable department KPI movement

### 5.5 Governance Adoption Score

Measures whether adoption is happening safely.

Signals:

- roles and permissions configured
- policy engine active
- approvals configured
- access reviews completed
- marketplace controls configured
- private catalog controls configured
- SSO/SCIM adoption
- audit exports generated
- data residency controls configured
- human review gates active where required

### 5.6 Enablement Score

Measures whether users are trained and confident.

Signals:

- learning path completion
- certification completion
- admin training completion
- AI Employee manager training completion
- governance board training completion
- champion network participation
- help requests decreasing after enablement
- self-service success increasing

### 5.7 Expansion Readiness Score

Measures whether the account is ready to expand.

Signals:

- high health score
- strong outcome realization
- low support burden
- clear department demand
- trained champions
- governance maturity
- low incident rate
- cost predictability
- executive sponsor engagement
- successful pilot-to-production transition

---

## 6. Suggested Composite Formula

The score must be explainable and configurable by customer segment.

```text
enterprise_adoption_score =
  activation_score * 0.15
+ usage_quality_score * 0.20
+ workflow_embedding_score * 0.15
+ outcome_realization_score * 0.25
+ governance_adoption_score * 0.10
+ enablement_score * 0.10
+ expansion_readiness_score * 0.05
- critical_friction_penalty
- incident_penalty
- unresolved_risk_penalty
```

Ariyo must never hide the dimensions behind a single unexplained number.

---

## 7. Adoption Cohorts

Ariyo should support adoption cohorts by:

- customer segment
- industry
- plan tier
- implementation type
- department
- workspace
- launch wave
- use case category
- AI Employee type
- template type
- integration type
- marketplace asset category
- training cohort
- partner-led vs Ariyo-led implementation

Cohort analysis must answer:

- Which implementation patterns lead to durable adoption?
- Which templates activate fastest?
- Which departments need more enablement?
- Which plan tiers show friction?
- Which integrations create value fastest?
- Which launch waves stalled?
- Which adoption playbooks are effective?

---

## 8. Success Milestones

Each enterprise customer should have configurable success milestones.

Examples:

1. Workspace configured
2. SSO/SCIM connected
3. First department launched
4. First AI Employee activated
5. First marketplace/private template installed
6. First production workflow completed
7. First governed approval completed
8. First training cohort certified
9. First measurable outcome confirmed
10. First executive business review completed
11. Second department launched
12. Renewal value package generated
13. Expansion-ready account state reached

Milestones must have:

- owner
- due date
- evidence
- completion criteria
- related risks
- related playbooks
- customer-visible summary
- internal notes

---

## 9. Friction Detection

Ariyo must detect friction before the customer says adoption failed.

### 9.1 Product Friction

Examples:

- users start workflows but do not complete them
- AI Employee runs fail repeatedly
- templates are installed but never activated
- approvals are requested but not completed
- knowledge sources are connected but unused
- search/recommendations do not lead to install
- users repeatedly change model/provider settings

### 9.2 Governance Friction

Examples:

- policy approvals block launch
- access reviews are overdue
- marketplace assets remain pending procurement
- security review delays production
- data residency mismatch blocks templates
- SSO/SCIM misconfiguration prevents activation

### 9.3 Enablement Friction

Examples:

- trained users do not use Ariyo
- users ask repeated basic questions
- champions disengage
- managers do not assign workflows
- departments lack clear success criteria

### 9.4 Outcome Friction

Examples:

- workflows complete but business KPI does not improve
- users report low trust in AI output
- time saved is not credible
- customers cannot identify business value
- adoption is high but renewal risk remains high

### 9.5 Commercial Friction

Examples:

- budget owner not engaged
- procurement timeline unknown
- executive sponsor absent
- expansion demand exists but value proof is weak
- cost spikes create resistance

---

## 10. Insight Types

Ariyo should generate actionable insights, not passive metrics.

### 10.1 Positive Insights

Examples:

- “Finance team reached 82% workflow adoption after certification.”
- “Support AI Employee reduced average response draft time by 37%.”
- “Marketing team shows expansion readiness based on recurring workflow usage.”
- “Private catalog templates have higher activation than public marketplace installs.”

### 10.2 Risk Insights

Examples:

- “Sales department adoption is declining after initial launch.”
- “High approval delay is blocking workflow activation.”
- “Three AI Employees have high failure rates due to integration drift.”
- “Training completion is high, but repeat usage is low.”

### 10.3 Opportunity Insights

Examples:

- “Customer is ready for Smart plan expansion in operations.”
- “Procurement team uses manual review processes that could be automated.”
- “A certified template is likely to solve a repeated support workflow.”
- “A second department has similar workflow patterns to the successful pilot team.”

---

## 11. Plan-Aware Success Insights

### 11.1 Basic

Basic customers need simple adoption signals:

- first AI Employee activated
- first successful run
- first recurring use
- simple workflow completed
- low cost surprises
- low support burden
- clear upgrade-readiness signal

Ariyo must not overwhelm Basic customers with enterprise analytics.

### 11.2 Pro

Pro customers need operational adoption insights:

- team adoption
- workflow adoption
- integration success
- department-level usage
- training completion
- support risk
- template outcome
- expansion to more teams

### 11.3 Smart

Smart customers need enterprise-grade insights:

- multi-workspace adoption
- cross-department adoption
- governance maturity
- AI Employee portfolio value
- advanced outcome attribution
- EBR-ready executive summaries
- procurement and renewal evidence
- private catalog impact
- automation maturity
- cost-to-value intelligence

---

## 12. Customer Success Playbook Triggers

Adoption insights must trigger playbooks.

### 12.1 Activation Rescue Playbook

Triggered when:

- setup completed but no meaningful first value
- users invited but inactive
- templates installed but not activated
- training completed but no workflows launched

### 12.2 Department Expansion Playbook

Triggered when:

- one department succeeds
- another department shows similar use-case demand
- governance controls are mature
- executive sponsor is engaged

### 12.3 Governance Blocker Playbook

Triggered when:

- approval delays exceed SLA
- security review blocks launch
- data residency mismatch blocks install
- workspace policies are too restrictive

### 12.4 Outcome Proof Playbook

Triggered when:

- adoption is high but business value is not documented
- renewal is approaching
- executive sponsor needs value proof
- expansion request requires ROI evidence

### 12.5 At-Risk Adoption Playbook

Triggered when:

- repeat usage declines
- champion disengages
- support burden rises
- user sentiment drops
- AI Employee failures increase

---

## 13. Executive Success Reporting

Ariyo should generate executive-ready summaries:

- adoption by department
- realized outcomes
- AI Employee portfolio value
- risk areas
- governance maturity
- training progress
- renewal readiness
- expansion opportunities
- recommended executive actions

Executive reporting must avoid raw operational noise.

It must translate platform activity into business language.

---

## 14. CSM Workspace

The Customer Success Manager view should include:

- customer adoption stage
- health score integration
- adoption score trend
- success milestone status
- department adoption map
- champion engagement
- risk signals
- opportunity signals
- recommended playbooks
- upcoming renewal/EBR context
- open support/implementation blockers
- executive summary generator

CSMs must be able to explain why a customer is healthy, stuck, expanding, or at risk.

---

## 15. Customer Admin View

Customer admins should see:

- adoption progress by department
- training completion
- workflow adoption
- AI Employee performance
- governance readiness
- open blockers
- recommended next steps
- success milestone progress
- value summary
- privacy-safe benchmarking where available

Customer-facing insights must be constructive and non-punitive.

---

## 16. Data Sources

Adoption insights may use:

- product usage events
- AI Employee run events
- workflow completion events
- template install/activation events
- marketplace outcome events
- training/certification events
- support tickets
- implementation milestones
- approval workflow events
- governance policy events
- integration health events
- billing and renewal data
- EBR notes
- customer-confirmed outcomes
- NPS/CSAT/sentiment surveys

Ariyo must not use sensitive user-level data unnecessarily.

---

## 17. API Contract

### 17.1 Get Adoption Insights

`GET /api/v1/enterprise/accounts/{accountId}/adoption-insights`

Query parameters:

```json
{
  "period": "last_90_days",
  "scope": "organization",
  "includeRecommendations": true,
  "includeDepartmentBreakdown": true,
  "includeExecutiveSummary": true
}
```

Response:

```json
{
  "accountId": "acct_123",
  "overallAdoptionScore": 78,
  "successScore": 74,
  "adoptionStage": "department_embedded",
  "topRisks": [
    {
      "type": "approval_bottleneck",
      "severity": "high",
      "summary": "Security approvals are delaying Smart workflow activation."
    }
  ],
  "topOpportunities": [
    {
      "type": "department_expansion",
      "summary": "Operations team shows strong fit for expansion based on Finance workflow success."
    }
  ],
  "recommendedActions": [
    {
      "priority": "high",
      "ownerRole": "csm",
      "title": "Run governance unblock session",
      "playbookId": "playbook_governance_blocker"
    }
  ]
}
```

### 17.2 Get Department Adoption

`GET /api/v1/enterprise/accounts/{accountId}/departments/{departmentId}/adoption`

### 17.3 Record Customer-Confirmed Outcome

`POST /api/v1/enterprise/accounts/{accountId}/outcomes/confirm`

```json
{
  "outcomeId": "outcome_support_response_time",
  "confirmedByUserId": "usr_123",
  "evidence": ["support_report_q2.pdf"],
  "valueSummary": "Average response drafting time reduced by 32% after Support AI Employee rollout.",
  "confidence": "medium"
}
```

### 17.4 Trigger Adoption Playbook

`POST /api/v1/enterprise/accounts/{accountId}/adoption-playbooks/trigger`

```json
{
  "playbookId": "playbook_activation_rescue",
  "reason": "Training completed but activation remained below threshold for 21 days.",
  "ownerUserId": "csm_123"
}
```

### 17.5 Generate Executive Summary

`POST /api/v1/enterprise/accounts/{accountId}/adoption-insights/executive-summary`

```json
{
  "period": "last_quarter",
  "audience": "executive_sponsor",
  "includeRisks": true,
  "includeExpansionOpportunities": true,
  "includeRenewalReadiness": true
}
```

---

## 18. Webhooks

Ariyo should emit:

- `adoption.score.updated`
- `adoption.stage.changed`
- `adoption.friction.detected`
- `adoption.milestone.completed`
- `adoption.playbook.recommended`
- `adoption.playbook.triggered`
- `adoption.department.regressed`
- `adoption.department.expansion_ready`
- `adoption.outcome.confirmed`
- `adoption.executive_summary.generated`

---

## 19. Observability Events

Required event names:

- `enterprise_adoption_insight_generated`
- `enterprise_adoption_score_calculated`
- `enterprise_adoption_friction_signal_detected`
- `enterprise_adoption_milestone_completed`
- `enterprise_adoption_playbook_recommended`
- `enterprise_adoption_playbook_triggered`
- `enterprise_adoption_department_expansion_ready`
- `enterprise_adoption_outcome_confirmed`
- `enterprise_adoption_regression_detected`
- `enterprise_adoption_executive_summary_generated`

Each event should include:

- `organization_id`
- `account_id`
- `workspace_id` when applicable
- `department_id` when applicable
- `plan_tier`
- `adoption_stage`
- `score_before`
- `score_after`
- `signal_type`
- `playbook_id`
- `risk_level`
- `timestamp`

---

## 20. KPI Framework

### 20.1 Core KPIs

- Activation Rate
- Time to First Value
- Department Adoption Rate
- Workflow Completion Rate
- Successful AI Employee Run Rate
- Repeat Usage Rate
- Training-to-Activation Conversion
- Outcome Confirmation Rate
- Governance Adoption Rate
- Expansion Readiness Rate
- Adoption Regression Rate

### 20.2 Customer Success KPIs

- Playbook Trigger Accuracy
- Playbook Completion Rate
- Health Score Improvement After Intervention
- Renewal Risk Reduction
- Expansion Pipeline Generated from Adoption Signals
- EBR Evidence Readiness
- CSM Action Completion Rate

### 20.3 Enterprise KPIs

- Multi-Department Adoption
- Executive Sponsor Engagement
- Governed Automation Rate
- Policy-Compliant Usage Rate
- Private Catalog Adoption Rate
- Cost per Successful Outcome
- AI Employee Portfolio Value

---

## 21. AI Adoption Insights Assistant

Ariyo may provide an AI assistant that helps CSMs and customer admins understand adoption insights.

The assistant may:

- summarize adoption trends
- identify likely friction causes
- recommend customer success playbooks
- generate EBR-ready summaries
- compare department adoption patterns
- explain adoption score changes
- suggest training interventions
- identify expansion readiness

The assistant must not:

- invent business outcomes
- exaggerate ROI
- expose private user behavior unnecessarily
- make renewal promises
- recommend expansion when health is weak
- override CSM judgment in high-risk accounts
- hide negative adoption signals

---

## 22. Security and Privacy Rules

Ariyo must:

- minimize user-level visibility where aggregate insights are enough
- respect organization/workspace permissions
- redact sensitive workflow content from adoption summaries
- avoid using private customer content for unrelated benchmarking
- provide explainable score components
- retain adoption insight evidence according to customer policy
- allow customers to export enterprise adoption evidence
- prevent unauthorized CSM or partner access

---

## 23. Forbidden Patterns

Ariyo must never:

- treat logins as adoption
- treat usage volume as success
- hide poor outcomes behind high activity
- recommend expansion when customer value is unproven
- expose sensitive user-level behavior unnecessarily
- punish users or departments with adoption scores
- fabricate ROI estimates
- ignore governance blockers
- ignore training gaps
- ignore department-level regression
- present uncertain inferred outcomes as confirmed customer value
- let CSMs manually inflate adoption scores without audit
- let creator/template promotion manipulate enterprise adoption reporting

---

## 24. Acceptance Criteria

This skill is implemented when:

- adoption score dimensions are separately calculated and explainable
- department, AI Employee, workflow, and template adoption insights exist
- friction detection can trigger customer success playbooks
- customer-confirmed outcomes can be recorded with evidence
- executive summaries can be generated safely
- Basic/Pro/Smart adoption insight rules are enforced
- CSM and customer admin views show actionable recommendations
- insights feed health scoring, renewal, expansion, EBR, and lifecycle systems
- sensitive data is protected
- all score changes and playbook triggers are auditable

---

## 25. Golden Rule

Ariyo adoption intelligence must help customers become successful, not merely help Ariyo prove they are using the product.
