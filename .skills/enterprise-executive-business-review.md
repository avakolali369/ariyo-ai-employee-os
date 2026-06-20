# Ariyo Enterprise Executive Business Review Skill

## Core Contract

Ariyo Enterprise Executive Business Review is not a slide deck for quarterly updates.

It is the governed executive-value, adoption-evidence, ROI, risk, roadmap, renewal, expansion, alignment, accountability, and decision-support system that helps Ariyo and enterprise customers prove whether Ariyo AI Employees are creating measurable business value and what must happen next.

Ariyo must turn product usage into executive business understanding.

Ariyo must never present vanity metrics as value, hide risks, exaggerate ROI, ignore governance issues, or recommend expansion before the customer has credible adoption, outcomes, readiness, and trust.

---

## 1. Purpose

This skill defines how Ariyo should design, generate, deliver, review, store, and improve Executive Business Reviews (EBRs), Quarterly Business Reviews (QBRs), renewal reviews, steering committee reviews, and strategic account reviews for enterprise customers.

The EBR system must help customer executives answer:

- What business outcomes did Ariyo help us achieve?
- Which AI Employees are creating value?
- Which departments adopted successfully?
- Where are we blocked?
- What risks must be addressed?
- What should we expand, pause, optimize, or retire?
- What decisions do executives need to make?
- Why should we renew or expand?

The EBR must connect product reality to executive decisions.

---

## 2. Related Ariyo Skills

This skill depends on and must stay consistent with:

- `enterprise-customer-health-scoring.md`
- `enterprise-adoption-success-insights.md`
- `enterprise-renewal-expansion-system.md`
- `enterprise-implementation-methodology.md`
- `enterprise-change-management-system.md`
- `enterprise-account-governance.md`
- `enterprise-workspace-policy-engine.md`
- `product-analytics-growth.md`
- `observability-analytics-events.md`
- `revenue-operations-system.md`
- `finance-accounting-controls.md`
- `customer-success-playbooks.md`
- `quality-assurance-system.md`
- `marketplace-template-outcome-intelligence.md`
- `marketplace-template-health-monitoring.md`
- `marketplace-template-quality-benchmarking.md`
- `marketplace-enterprise-audit-reports.md`
- `marketplace-regulatory-compliance-matrix.md`
- `trust-center-public-status.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`

---

## 3. EBR Philosophy

Ariyo EBRs must be:

- outcome-led, not feature-led;
- evidence-backed, not opinion-led;
- executive-readable, not dashboard-heavy;
- honest about risk;
- specific about next actions;
- connected to renewal and expansion readiness;
- grounded in customer goals;
- respectful of privacy and permissions;
- useful for both Ariyo and the customer.

A strong EBR should make executives feel:

> We know what Ariyo is doing, what value we are getting, where risk exists, and what decisions we need to make next.

---

## 4. EBR Types

Ariyo should support multiple review formats.

### 4.1 Standard Quarterly Business Review

Used for active enterprise customers on a recurring cadence.

Includes:

- executive summary;
- adoption progress;
- value realization;
- AI Employee performance;
- department usage;
- support and risk review;
- roadmap alignment;
- next-quarter priorities.

### 4.2 Renewal Business Review

Used before renewal windows.

Includes:

- contract value summary;
- achieved outcomes;
- health score trends;
- adoption depth;
- risk mitigation;
- procurement timeline;
- renewal recommendation;
- expansion or save plan.

### 4.3 Expansion Business Review

Used when expansion is being considered.

Includes:

- current success evidence;
- expansion readiness;
- new department opportunities;
- additional AI Employee use cases;
- expected ROI;
- implementation requirements;
- governance readiness;
- commercial proposal support.

### 4.4 Executive Steering Committee Review

Used for high-value enterprise customers.

Includes:

- strategic business alignment;
- transformation progress;
- executive decision requests;
- security/compliance status;
- governance issues;
- roadmap commitments;
- escalation items.

### 4.5 Post-Implementation Value Review

Used after initial go-live.

Includes:

- implementation objectives;
- activation outcomes;
- early adoption;
- launch risks;
- training readiness;
- immediate optimization priorities;
- handoff to Customer Success.

### 4.6 At-Risk Account Review

Used when churn, adoption, trust, support, or value risk exists.

Includes:

- risk diagnosis;
- root causes;
- stakeholder map;
- recovery plan;
- Ariyo commitments;
- customer commitments;
- renewal impact;
- executive escalation needs.

---

## 5. Executive Business Review Object Model

### 5.1 ExecutiveBusinessReview

```ts
interface ExecutiveBusinessReview {
  id: string;
  customer_id: string;
  account_id: string;
  review_type: 'qbr' | 'renewal' | 'expansion' | 'steering_committee' | 'post_implementation' | 'risk_review';
  period_start: string;
  period_end: string;
  generated_at: string;
  presented_at?: string;
  audience: ExecutiveAudience[];
  owner_user_id: string;
  csm_user_id?: string;
  account_executive_user_id?: string;
  executive_sponsor_user_id?: string;
  health_summary: HealthSummary;
  adoption_summary: AdoptionSummary;
  outcome_summary: OutcomeSummary;
  roi_summary?: RoiSummary;
  risk_summary: RiskSummary;
  roadmap_summary?: RoadmapSummary;
  renewal_summary?: RenewalSummary;
  expansion_summary?: ExpansionSummary;
  decisions_required: ExecutiveDecision[];
  next_actions: ExecutiveAction[];
  evidence_package_id?: string;
  status: 'draft' | 'internal_review' | 'customer_ready' | 'presented' | 'archived';
  confidence_level: 'low' | 'medium' | 'high';
}
```

### 5.2 ExecutiveAudience

```ts
interface ExecutiveAudience {
  name?: string;
  role: 'executive_sponsor' | 'economic_buyer' | 'technical_buyer' | 'security_leader' | 'procurement_leader' | 'department_leader' | 'operations_leader' | 'finance_leader' | 'champion' | 'admin';
  organization_side: 'customer' | 'ariyo' | 'partner';
  priority: 'primary' | 'secondary' | 'observer';
}
```

### 5.3 ExecutiveDecision

```ts
interface ExecutiveDecision {
  id: string;
  title: string;
  description: string;
  decision_type: 'renew' | 'expand' | 'defer' | 'approve_governance' | 'assign_owner' | 'fund_initiative' | 'resolve_blocker' | 'approve_rollout' | 'deprecate_use_case';
  required_by?: string;
  owner_role: string;
  recommended_option?: string;
  evidence_refs: string[];
  risk_if_delayed?: string;
}
```

---

## 6. Required EBR Sections

Every Ariyo EBR should include these sections unless intentionally omitted.

### 6.1 Executive Summary

The executive summary must be concise and decision-oriented.

It should include:

- current customer health;
- value realized;
- adoption trend;
- risks;
- recommended next steps;
- renewal/expansion implications.

Example structure:

```md
## Executive Summary

During this review period, the customer moved from early adoption to operational adoption across 3 departments. AI Employees completed 12,430 workflow runs with a 91% successful completion rate. The strongest business value came from support automation and finance workflow acceleration.

The account is healthy but has two risks: limited executive engagement from the operations team and unresolved integration reliability in the CRM workflow.

Recommended next steps: approve the next rollout wave for Sales Operations, resolve CRM integration ownership, and prepare the renewal value package by September 15.
```

### 6.2 Value Realization

The value section must separate:

- claimed value;
- measured value;
- customer-confirmed value;
- projected value;
- unverified value.

Ariyo must not present projected value as realized value.

### 6.3 Adoption Evidence

Adoption evidence should include:

- activated users;
- active departments;
- active AI Employees;
- active workflows;
- repeat usage;
- workflow embedding;
- role-based usage;
- admin maturity;
- internal champion activity.

### 6.4 Outcome Evidence

Outcome evidence should include:

- tasks completed;
- workflows accelerated;
- time saved;
- cost avoided;
- errors reduced;
- response time improved;
- quality improved;
- customer experience improved;
- compliance or audit readiness improved.

### 6.5 Risk Review

Risk review must include:

- adoption risk;
- executive alignment risk;
- governance risk;
- integration risk;
- support risk;
- security/compliance risk;
- renewal risk;
- expansion readiness risk.

### 6.6 Roadmap Alignment

Roadmap alignment should show:

- customer priorities;
- Ariyo product roadmap relevance;
- requested features;
- committed items;
- not-committed items;
- dependency risks;
- timeline caveats.

Ariyo must never imply roadmap commitments that product leadership has not approved.

### 6.7 Next Actions

Next actions must be specific.

Bad:

```md
Improve adoption.
```

Good:

```md
Run a 2-week enablement sprint for the Finance Operations team, focused on invoice exception workflow adoption, with department lead ownership and weekly adoption check-ins.
```

---

## 7. Value Narrative Framework

Ariyo EBRs should tell a clear value story.

### 7.1 The Value Story

The value story should follow this structure:

1. The customer had a business objective.
2. Ariyo was deployed to support that objective.
3. Specific AI Employees and workflows were activated.
4. Adoption reached specific teams and use cases.
5. Measurable outcomes appeared.
6. Risks or gaps remain.
7. The next step is clear.

### 7.2 Value Categories

Ariyo should categorize value as:

- productivity value;
- revenue value;
- cost reduction;
- customer experience value;
- risk reduction;
- compliance readiness;
- operational visibility;
- decision acceleration;
- employee experience improvement;
- marketplace ecosystem value.

### 7.3 Value Confidence

Every value claim must have a confidence level.

```ts
interface ValueClaim {
  claim: string;
  value_category: string;
  amount?: number;
  currency?: string;
  confidence: 'low' | 'medium' | 'high';
  evidence_type: 'system_measured' | 'customer_confirmed' | 'survey_based' | 'estimated' | 'projected';
  evidence_refs: string[];
}
```

---

## 8. ROI Summary

Ariyo may include ROI summaries only when evidence quality is sufficient.

ROI should include:

- subscription cost;
- services cost;
- marketplace asset cost;
- AI usage cost;
- estimated time savings;
- confirmed cost savings;
- productivity gains;
- avoided manual work;
- reduced error cost;
- incremental revenue influence;
- implementation cost;
- support cost.

### 8.1 ROI Confidence Rules

High confidence ROI requires:

- clear baseline;
- measured post-Ariyo result;
- customer validation;
- known cost inputs;
- explainable attribution.

Medium confidence ROI may use:

- partial baselines;
- usage-derived estimates;
- customer assumptions;
- conservative ranges.

Low confidence ROI must be labeled as directional.

### 8.2 Forbidden ROI Patterns

Ariyo must not:

- multiply time saved by inflated salaries without customer approval;
- count every AI Employee run as value;
- double-count outcomes;
- ignore implementation cost;
- hide AI usage cost;
- call projections realized savings;
- present unverified customer anecdotes as audited ROI.

---

## 9. Adoption Review

EBRs must include adoption analysis from `enterprise-adoption-success-insights.md`.

### 9.1 Adoption Dimensions

- user activation;
- department activation;
- workflow embedding;
- AI Employee repeat usage;
- marketplace template activation;
- admin configuration maturity;
- training completion;
- governance adoption;
- automation trust;
- outcome achievement.

### 9.2 Adoption Levels

```ts
const adoptionLevels = [
  'not_started',
  'configured',
  'activated',
  'repeated_usage',
  'workflow_embedded',
  'outcome_realized',
  'scaled'
];
```

### 9.3 Adoption Narrative

The EBR should explain adoption in business language:

- Who is using Ariyo?
- For what work?
- How often?
- With what outcomes?
- What is blocking broader adoption?

---

## 10. Risk Review

Ariyo must be transparent about risk.

### 10.1 Risk Types

- Low adoption risk;
- executive disengagement risk;
- unresolved implementation risk;
- integration reliability risk;
- support escalation risk;
- budget risk;
- procurement risk;
- compliance risk;
- marketplace asset risk;
- data quality risk;
- training gap risk;
- change resistance risk;
- value realization risk.

### 10.2 Risk Scoring

```ts
interface ExecutiveRiskItem {
  id: string;
  title: string;
  category: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  likelihood: 'low' | 'medium' | 'high';
  customer_impact: string;
  renewal_impact?: string;
  expansion_impact?: string;
  mitigation_plan: string;
  owner: string;
  due_date?: string;
}
```

### 10.3 Risk Presentation Rule

Risks must not be hidden at the end of the review.

If a risk affects renewal, expansion, security, compliance, production reliability, or executive trust, it must appear in the executive summary.

---

## 11. Renewal Support

EBRs must support renewal readiness without becoming sales-only documents.

### 11.1 Renewal Evidence

Include:

- value achieved;
- adoption trend;
- health score trend;
- executive sponsor engagement;
- support satisfaction;
- unresolved risks;
- procurement timeline;
- contract usage alignment;
- license utilization;
- expansion or downsell risk.

### 11.2 Renewal Readiness States

- `not_applicable`
- `early_tracking`
- `on_track`
- `needs_value_proof`
- `at_risk`
- `executive_escalation_required`
- `renewal_ready`

### 11.3 Renewal Questions

The EBR should answer:

- Is the customer receiving value?
- Is the customer using enough of what they bought?
- Is executive sponsorship healthy?
- Are procurement and security blockers known?
- Are there unresolved trust issues?
- Is the renewal commercial package aligned with usage and outcomes?

---

## 12. Expansion Support

Ariyo may recommend expansion only if readiness is sufficient.

### 12.1 Expansion Readiness Requirements

Expansion should require:

- strong health score;
- clear outcome evidence;
- adoption beyond initial pilot;
- executive or department demand;
- governance readiness;
- support capacity;
- implementation capacity;
- budget path;
- low unresolved risk.

### 12.2 Expansion Opportunity Types

- add departments;
- add AI Employees;
- add marketplace templates;
- add Smart plan capabilities;
- add private catalog controls;
- add enterprise governance modules;
- add professional services;
- add partner implementation;
- add analytics and audit modules;
- add workflow automation.

### 12.3 Expansion Warning

The EBR must not recommend expansion when:

- current adoption is weak;
- customer value is unproven;
- unresolved support issues exist;
- governance is immature;
- customer lacks executive sponsor;
- procurement risk is high;
- implementation bandwidth is unavailable.

---

## 13. Roadmap Alignment

EBRs often include roadmap discussions.

### 13.1 Roadmap Categories

- delivered since last review;
- in progress;
- planned;
- under consideration;
- customer-requested;
- not currently planned.

### 13.2 Roadmap Truth Rules

Ariyo must not:

- promise uncommitted roadmap items;
- imply exact dates without approval;
- use roadmap promises to cover current product gaps;
- hide known limitations;
- let sales pressure override roadmap truth.

### 13.3 Customer Request Tracking

```ts
interface CustomerRoadmapRequest {
  id: string;
  customer_id: string;
  request_title: string;
  business_reason: string;
  affected_department?: string;
  priority: 'low' | 'medium' | 'high' | 'strategic';
  status: 'captured' | 'triaged' | 'planned' | 'declined' | 'released';
  ariYo_owner?: string;
  customer_visible_note?: string;
}
```

---

## 14. EBR Generation Workflow

### 14.1 Workflow States

```ts
const ebrStates = [
  'scheduled',
  'data_collection',
  'draft_generated',
  'csm_review',
  'ae_review',
  'leadership_review',
  'customer_ready',
  'presented',
  'follow_up_active',
  'archived'
];
```

### 14.2 Required Steps

1. Identify review purpose.
2. Identify audience.
3. Pull health/adoption/outcome data.
4. Pull support and incident history.
5. Pull renewal/expansion context.
6. Generate draft narrative.
7. Attach evidence.
8. Review internally.
9. Remove unsupported claims.
10. Present to customer.
11. Capture decisions.
12. Create follow-up actions.
13. Sync to CRM/CS system.
14. Archive evidence package.

---

## 15. Evidence Requirements

Every EBR should include an evidence package.

### 15.1 Evidence Types

- product analytics;
- adoption reports;
- outcome reports;
- health score history;
- support ticket summary;
- incident summary;
- marketplace asset usage;
- training completion;
- governance configuration;
- approval workflow history;
- customer survey responses;
- financial/billing summary;
- security/compliance evidence.

### 15.2 Evidence Package

```ts
interface EbrEvidencePackage {
  id: string;
  ebr_id: string;
  generated_at: string;
  evidence_items: EvidenceItem[];
  redaction_level: 'internal' | 'customer_safe' | 'executive_summary';
  access_policy_id: string;
  retention_until?: string;
}
```

---

## 16. Executive-Ready Report UX

The EBR product experience should support:

- executive summary page;
- value scorecard;
- adoption trend chart;
- outcome highlights;
- risk register;
- roadmap alignment;
- renewal readiness;
- expansion readiness;
- decision requests;
- action tracker;
- export to PDF/slides;
- customer-safe sharing;
- evidence drill-down;
- CRM sync;
- meeting notes capture.

### 16.1 UX Principles

- executives see the story first;
- operators can drill into evidence;
- unsupported claims are flagged;
- risks are visible;
- next actions are clear;
- sensitive data is redacted by default.

---

## 17. Basic / Pro / Smart Rules

### 17.1 Basic

Basic customers should receive lightweight value summaries.

Basic EBR behavior:

- simple adoption summary;
- basic usage and outcome highlights;
- no complex ROI modeling by default;
- no advanced executive automation;
- limited customer success review templates.

### 17.2 Pro

Pro customers should receive operational business reviews.

Pro EBR behavior:

- department adoption;
- workflow success;
- AI Employee performance;
- marketplace value;
- renewal risk summary;
- action planning.

### 17.3 Smart

Smart customers should receive advanced executive business reviews.

Smart EBR behavior:

- executive-ready reports;
- ROI modeling;
- outcome attribution;
- expansion readiness;
- governance maturity;
- predictive risk;
- roadmap alignment;
- evidence packages;
- AI-assisted EBR generation;
- multi-stakeholder action tracking.

---

## 18. API Contract

### 18.1 Create EBR

```http
POST /api/v1/enterprise/customers/{customer_id}/ebrs
```

Request:

```json
{
  "review_type": "qbr",
  "period_start": "2026-01-01",
  "period_end": "2026-03-31",
  "audience_roles": ["executive_sponsor", "economic_buyer", "operations_leader"],
  "include_roi": true,
  "include_renewal_summary": true,
  "include_expansion_summary": true
}
```

Response:

```json
{
  "ebr_id": "ebr_123",
  "status": "data_collection",
  "estimated_sections": [
    "executive_summary",
    "value_realization",
    "adoption",
    "risk_review",
    "roadmap_alignment",
    "next_actions"
  ]
}
```

### 18.2 Generate Draft

```http
POST /api/v1/enterprise/ebrs/{ebr_id}/generate-draft
```

Response:

```json
{
  "ebr_id": "ebr_123",
  "status": "draft_generated",
  "unsupported_claims": 2,
  "risk_items": 3,
  "confidence_level": "medium"
}
```

### 18.3 Get EBR

```http
GET /api/v1/enterprise/ebrs/{ebr_id}
```

### 18.4 Approve Customer-Ready EBR

```http
POST /api/v1/enterprise/ebrs/{ebr_id}/approve-customer-ready
```

### 18.5 Record Presented Review

```http
POST /api/v1/enterprise/ebrs/{ebr_id}/presented
```

### 18.6 Create Follow-Up Actions

```http
POST /api/v1/enterprise/ebrs/{ebr_id}/actions
```

---

## 19. Webhooks

Ariyo should emit:

- `enterprise.ebr.created`
- `enterprise.ebr.draft_generated`
- `enterprise.ebr.unsupported_claims_detected`
- `enterprise.ebr.customer_ready`
- `enterprise.ebr.presented`
- `enterprise.ebr.action_created`
- `enterprise.ebr.action_overdue`
- `enterprise.ebr.renewal_risk_detected`
- `enterprise.ebr.expansion_ready_detected`
- `enterprise.ebr.archived`

---

## 20. Observability Events

Track:

- `ebr_created`
- `ebr_draft_generated`
- `ebr_section_viewed`
- `ebr_exported`
- `ebr_shared_with_customer`
- `ebr_presented`
- `ebr_action_created`
- `ebr_action_completed`
- `ebr_risk_escalated`
- `ebr_renewal_recommendation_created`
- `ebr_expansion_recommendation_created`
- `ebr_claim_flagged`

Every event should include:

- customer ID;
- account ID;
- review type;
- period;
- owner;
- plan tier;
- data confidence;
- redaction level;
- whether customer-facing.

---

## 21. KPI Metrics

### 21.1 EBR Operations Metrics

- EBR completion rate;
- EBR on-time delivery rate;
- average EBR preparation time;
- unsupported claim rate;
- evidence completeness rate;
- follow-up action completion rate;
- executive attendance rate.

### 21.2 Business Impact Metrics

- renewal rate after EBR;
- expansion pipeline influenced;
- churn risk reduction after EBR;
- executive sponsor engagement improvement;
- adoption improvement after EBR;
- customer health score movement;
- value realization improvement.

### 21.3 Quality Metrics

- customer-rated EBR usefulness;
- CSM-rated confidence;
- claim accuracy audit pass rate;
- roadmap claim accuracy;
- risk visibility accuracy;
- action specificity score.

---

## 22. AI Executive Business Review Assistant

Ariyo may provide an AI assistant to support EBR creation.

### 22.1 Allowed Capabilities

The assistant may:

- summarize adoption trends;
- draft executive summaries;
- identify risks;
- identify value evidence;
- suggest next actions;
- compare this period to last period;
- generate customer-safe language;
- identify unsupported claims;
- prepare meeting talking points.

### 22.2 Restricted Capabilities

The assistant must not:

- invent ROI;
- fabricate customer quotes;
- promise roadmap items;
- hide negative trends;
- recommend expansion without readiness;
- expose sensitive user-level data;
- generate customer-facing reports without review;
- override CSM or account owner judgment.

### 22.3 AI Disclosure

If AI-generated summaries are used externally, Ariyo should retain internal provenance and review logs.

---

## 23. Security and Privacy

EBRs may contain sensitive customer business data.

Controls must include:

- role-based access;
- customer-safe redaction;
- export permissions;
- audit logging;
- evidence access control;
- retention controls;
- tenant isolation;
- user-level data minimization;
- customer approval for shared reports;
- secure export links;
- watermarking for sensitive exports.

Ariyo must avoid exposing individual employee performance data unless explicitly authorized and appropriate.

---

## 24. Compliance Requirements

EBR reports should support compliance needs but not replace formal audit reports.

They may reference:

- governance maturity;
- policy adoption;
- audit evidence availability;
- training completion;
- marketplace vendor posture;
- security review status;
- compliance gaps.

They must not claim legal compliance without reviewed evidence.

---

## 25. CRM and Customer Success Integration

EBRs should sync with:

- customer account record;
- opportunity records;
- renewal records;
- expansion opportunities;
- health score system;
- customer success playbooks;
- support system;
- product feedback system;
- professional services records.

### 25.1 CRM Fields

Recommended fields:

- last EBR date;
- next EBR date;
- EBR health summary;
- executive sponsor status;
- renewal readiness;
- expansion readiness;
- top risks;
- top outcomes;
- next actions;
- EBR deck/report link.

---

## 26. Internal Review Rules

Before an EBR is shared externally, it should be reviewed for:

- accuracy;
- unsupported claims;
- sensitive data;
- roadmap claims;
- ROI assumptions;
- security claims;
- renewal/expansion recommendation quality;
- risk transparency;
- tone and executive clarity.

High-value or at-risk accounts may require leadership review.

---

## 27. Forbidden Patterns

Ariyo must not:

- use EBRs as sales decks without value evidence;
- hide risk because renewal is near;
- claim ROI without evidence;
- overstate AI Employee success;
- confuse activity with adoption;
- confuse adoption with business value;
- expose sensitive employee-level data;
- promise roadmap items without approval;
- recommend expansion when current value is weak;
- ignore support escalations;
- omit compliance blockers;
- present paid marketplace usage as success by itself;
- generate customer-facing EBRs without human review;
- reuse one customer's benchmark data in another customer's report without proper aggregation and privacy controls.

---

## 28. Golden Rule

Every Ariyo Executive Business Review must help executives make better decisions.

If the review does not clarify value, risk, readiness, accountability, and next action, it is not an executive business review.
