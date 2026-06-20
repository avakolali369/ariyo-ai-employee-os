# Ariyo Sales CRM Pipeline System Skill

## 1. Purpose

This skill defines Ariyo's sales CRM pipeline operating system.

It governs how Ariyo captures demand, qualifies leads, manages deals, runs demos, tracks pilots, automates follow-up, scores deal health, connects sales activity to product usage, and hands customers off to Customer Success after conversion.

This is not a generic CRM checklist.

This is a revenue operating contract for selling an AI Employee Operating System with trust, clarity, speed, and measurable customer value.

---

## 2. Core Contract

Ariyo sales pipeline is not a spreadsheet of leads.

Ariyo sales pipeline is the operating system that turns market interest into qualified opportunities, guided demos, trusted pilots, paid customers, successful activation, and expansion-ready accounts.

Every sales motion must connect the buyer's pain to a specific AI employee outcome, prove trust and governance, recommend the right Basic, Pro, or Smart plan, and create a measurable next step.

Ariyo must sell business outcomes, not AI novelty.

---

## 3. Required Dependencies

This skill must be used with:

- `product-strategy.md`
- `brand-messaging-system.md`
- `launch-go-to-market.md`
- `sales-demo-playbook.md`
- `pricing-packaging-strategy.md`
- `website-conversion-system.md`
- `conversion-experimentation-system.md`
- `customer-lifecycle-automation.md`
- `customer-success-playbooks.md`
- `customer-education-academy.md`
- `admin-permissions.md`
- `integration-ecosystem.md`
- `ai-cost-control.md`
- `observability-analytics-events.md`
- `legal-pages-policy-system.md`
- `trust-center-public-status.md`
- `data-governance-privacy.md`
- `security-threat-model.md`

---

## 4. Sales Philosophy

Ariyo must be sold through clarity, trust, and proof.

The sales process must answer five buyer questions quickly:

1. What problem does Ariyo solve for my business?
2. Which AI employee should I hire first?
3. How will I control quality, cost, and risk?
4. How quickly can I see value?
5. Which plan is right for me now?

Ariyo sales must not begin with feature dumping.

Ariyo sales must begin with business diagnosis.

---

## 5. Sales Pipeline Outcomes

The pipeline exists to produce these outcomes:

- qualified demand
- high-intent demos
- clear plan recommendations
- short pilot cycles
- fast time to first value
- measurable ROI stories
- clean sales-to-success handoffs
- expansion-ready customer accounts
- trustworthy revenue forecasting
- repeatable learning from lost deals

---

## 6. Buyer Segments

### 6.1 Founder / Owner

Primary pains:

- too many repetitive tasks
- slow customer response
- limited team capacity
- uncertainty about AI ROI
- need for affordable automation

Best entry plan:

- Basic for first proof
- Pro if operations are already active
- Smart if they want automation and insights quickly

Primary pitch:

> Hire your first AI employee without hiring more staff.

### 6.2 Operations Manager

Primary pains:

- fragmented workflows
- manual follow-up
- process inconsistency
- tool switching
- team overload

Best entry plan:

- Pro or Smart

Primary pitch:

> Turn repeated work into governed AI employee workflows.

### 6.3 Support Lead

Primary pains:

- repetitive tickets
- slow response time
- inconsistent answers
- scattered knowledge
- agent burnout

Best entry plan:

- Pro
- Smart if support volume is high or GEO/API tracking is needed

Primary pitch:

> Reduce support load while keeping humans in control.

### 6.4 Sales Lead

Primary pains:

- missed follow-ups
- weak qualification
- slow lead response
- inconsistent demo preparation
- poor pipeline visibility

Best entry plan:

- Pro or Smart

Primary pitch:

> Give your sales team an AI employee that follows up, qualifies, summarizes, and keeps deals moving.

### 6.5 Marketing / Growth Lead

Primary pains:

- content performance uncertainty
- low conversion
- AI search visibility concerns
- weak lead capture
- poor attribution

Best entry plan:

- Smart if GEO API matters
- Pro for content and lead workflows

Primary pitch:

> Measure and improve how your business appears in AI-generated answers.

### 6.6 Enterprise Buyer

Primary pains:

- governance
- security review
- compliance
- admin controls
- integration control
- procurement risk

Best entry plan:

- Smart or Enterprise custom

Primary pitch:

> Deploy AI employees with governance, auditability, and enterprise control.

---

## 7. CRM Object Model

### 7.1 Core Objects

Ariyo CRM must support these core objects:

```ts
type CrmObject =
  | 'lead'
  | 'contact'
  | 'account'
  | 'opportunity'
  | 'deal'
  | 'activity'
  | 'demo'
  | 'pilot'
  | 'proposal'
  | 'subscription_intent'
  | 'handoff'
  | 'sales_task'
  | 'sales_sequence'
  | 'sales_note'
  | 'objection'
  | 'competitor_mention'
  | 'buying_committee_member'
  | 'sales_asset'
  | 'crm_integration_record';
```

### 7.2 Lead

A lead represents a person or organization that has shown buying intent but is not yet qualified.

Required fields:

```json
{
  "id": "lead_123",
  "organization_id": "org_123",
  "source": "website_demo_request",
  "name": "Example Co",
  "contact_email": "buyer@example.com",
  "company_size": "11-50",
  "industry": "ecommerce",
  "role": "Founder",
  "primary_pain": "slow support response",
  "target_use_case": "support_ai_employee",
  "plan_interest": "pro",
  "lead_score": 72,
  "status": "new",
  "created_at": "2026-06-18T10:00:00Z"
}
```

### 7.3 Account

An account represents the company or organization.

Required fields:

```json
{
  "id": "acct_123",
  "name": "Example Co",
  "domain": "example.com",
  "industry": "ecommerce",
  "size_segment": "smb",
  "ai_maturity": "early",
  "knowledge_maturity": "medium",
  "current_plan": null,
  "recommended_plan": "pro",
  "health_status": "sales_qualified",
  "owner_user_id": "user_123"
}
```

### 7.4 Opportunity

An opportunity represents a qualified revenue opportunity.

Required fields:

```json
{
  "id": "opp_123",
  "account_id": "acct_123",
  "stage": "demo_scheduled",
  "target_plan": "pro",
  "estimated_mrr": 299,
  "currency": "USD",
  "primary_use_case": "support_ai_employee",
  "pain_intensity": 4,
  "urgency": 3,
  "authority": "decision_maker",
  "budget_confirmed": false,
  "expected_close_date": "2026-07-10",
  "deal_health_score": 68,
  "next_step": "run_demo",
  "owner_user_id": "sales_001"
}
```

### 7.5 Demo

A demo represents a scheduled or completed product demonstration.

Required fields:

```json
{
  "id": "demo_123",
  "opportunity_id": "opp_123",
  "demo_type": "support_use_case",
  "duration_minutes": 30,
  "attendees": ["Founder", "Support Lead"],
  "status": "scheduled",
  "planned_flow": [
    "pain_recapping",
    "hire_ai_employee",
    "connect_knowledge",
    "review_output",
    "show_plan_fit",
    "agree_next_step"
  ],
  "scheduled_at": "2026-06-21T12:00:00Z"
}
```

### 7.6 Pilot

A pilot represents a controlled trial with success criteria.

Required fields:

```json
{
  "id": "pilot_123",
  "account_id": "acct_123",
  "opportunity_id": "opp_123",
  "plan": "pro",
  "status": "active",
  "start_date": "2026-06-22",
  "end_date": "2026-07-06",
  "success_criteria": [
    "hire_first_ai_employee",
    "connect_knowledge_source",
    "produce_20_reviewed_answers",
    "reduce_manual_support_drafts_by_25_percent"
  ],
  "risk_controls": [
    "human_review_required",
    "monthly_ai_budget_limit",
    "no_auto_send"
  ]
}
```

---

## 8. Pipeline Stages

### 8.1 Stage List

Ariyo sales pipeline must use these standard stages:

```text
new_lead
marketing_qualified
sales_qualified
discovery_scheduled
discovery_completed
demo_scheduled
demo_completed
pilot_proposed
pilot_active
pilot_success
proposal_sent
procurement_or_security_review
closed_won
closed_lost
nurture
```

### 8.2 Stage Definitions

#### new_lead

A person or company has shown initial interest.

Entry examples:

- submitted demo form
- downloaded lead magnet
- signed up for trial
- asked about pricing
- partner referral
- GEO API inquiry

Exit requirement:

- lead scored and routed

#### marketing_qualified

Lead has enough fit or intent to be considered relevant.

Exit requirement:

- assigned to sales or automated nurture

#### sales_qualified

Lead has clear pain, relevant use case, and potential plan fit.

Exit requirement:

- discovery scheduled or self-serve path recommended

#### discovery_scheduled

Discovery call is booked.

Exit requirement:

- discovery completed or no-show workflow triggered

#### discovery_completed

Pain, urgency, authority, use case, and plan fit are understood.

Exit requirement:

- demo scheduled or nurture path selected

#### demo_scheduled

A product demo is scheduled and personalized.

Exit requirement:

- demo completed or rescheduled

#### demo_completed

Buyer saw relevant product proof.

Exit requirement:

- pilot, proposal, or self-serve purchase path selected

#### pilot_proposed

A pilot with success criteria is proposed.

Exit requirement:

- pilot accepted, rejected, or revised

#### pilot_active

Customer is testing Ariyo with defined success criteria.

Exit requirement:

- pilot success, pilot failed, or extended

#### pilot_success

Pilot met agreed success criteria.

Exit requirement:

- proposal sent or subscription activated

#### proposal_sent

Commercial terms have been sent.

Exit requirement:

- accepted, revised, stalled, or lost

#### procurement_or_security_review

Buyer is reviewing security, legal, or procurement requirements.

Exit requirement:

- approved, additional docs requested, or lost

#### closed_won

Customer purchased.

Exit requirement:

- sales-to-CS handoff completed

#### closed_lost

Opportunity lost.

Exit requirement:

- loss reason recorded and nurture/recycle path selected

#### nurture

Lead or opportunity is not ready now but may be relevant later.

Exit requirement:

- reactivation trigger

---

## 9. Lead Source Taxonomy

Allowed lead sources:

```text
website_demo_request
pricing_page_cta
trial_signup
product_signup
geo_api_interest
content_download
newsletter_signup
webinar_registration
academy_signup
marketplace_install
partner_referral
affiliate_referral
community_referral
outbound_email
founder_led_outreach
linkedin_outreach
event_meeting
support_inquiry
investor_intro
manual_import
crm_integration
```

Every lead must preserve original source and latest source separately:

```json
{
  "original_source": "content_download",
  "latest_source": "pricing_page_cta"
}
```

---

## 10. Lead Scoring

### 10.1 Lead Score Purpose

Lead scoring must help Ariyo prioritize attention without ignoring promising early-stage buyers.

Lead score must combine:

- fit score
- intent score
- pain score
- use case match
- plan match
- urgency
- trust readiness
- engagement
- partner/referral quality

### 10.2 Score Bands

```text
0-24   low_priority_nurture
25-49  nurture_or_product_led
50-69  marketing_qualified
70-84  sales_qualified
85-100 high_intent_priority
```

### 10.3 Lead Score Inputs

```json
{
  "company_fit": 18,
  "pain_intensity": 15,
  "use_case_match": 14,
  "engagement": 10,
  "plan_fit": 12,
  "urgency": 8,
  "authority": 7,
  "trust_readiness": 4,
  "source_quality": 5,
  "total": 93
}
```

### 10.4 Positive Signals

Positive signals include:

- requests demo
- visits pricing page more than once
- compares Basic, Pro, Smart
- asks about integrations
- asks about AI cost control
- asks about security or compliance
- uses GEO API content
- invites teammates
- connects knowledge source in trial
- creates first AI employee
- completes academy onboarding
- installs marketplace asset
- replies to sales email
- partner referral

### 10.5 Negative Signals

Negative signals include:

- invalid email
- no business use case
- vague curiosity only
- unsupported market
- asks for unrestricted AI automation
- asks to bypass review/security controls
- high risk abuse intent
- no-show repeatedly
- competitor vendor spam

### 10.6 Lead Score Rule

Ariyo must not use lead score as the only qualification criterion.

Human review or AI-assisted review may override score with reason.

---

## 11. Qualification Framework

Ariyo must use a simple qualification framework built for AI employee sales.

### 11.1 Qualification Dimensions

```text
Pain
Use Case
Authority
Urgency
Data Readiness
Trust Requirement
Budget Fit
Plan Fit
Success Criteria
```

### 11.2 Discovery Questions

Discovery must ask:

- What repetitive work is slowing your team today?
- Which team feels the pain most: support, sales, ops, marketing, or leadership?
- What happens if this problem is not solved in the next 90 days?
- What tools or knowledge sources would Ariyo need to connect to?
- Who must approve AI-generated work before it reaches customers?
- What would make a pilot successful?
- Do you need simple AI assistance, operational automation, or full intelligent workflows?
- Are you evaluating this as Basic, Pro, or Smart usage?
- Do you have security, privacy, procurement, or legal requirements?

### 11.3 Qualification Output

Every discovery must produce:

```json
{
  "primary_pain": "support backlog",
  "first_ai_employee": "support_ai_employee",
  "success_metric": "reduce manual draft time by 30%",
  "required_integrations": ["helpdesk", "knowledge_base"],
  "human_review_required": true,
  "recommended_plan": "pro",
  "next_step": "personalized_demo"
}
```

---

## 12. Plan Recommendation Logic

Ariyo sales must recommend the simplest plan that can honestly solve the buyer's near-term problem.

### 12.1 Basic Recommendation

Recommend Basic when:

- buyer is early-stage
- use case is simple
- only one AI employee is needed
- limited integrations are required
- customer wants proof before operational rollout
- budget sensitivity is high
- risk tolerance is low

Basic sales message:

> Start safely with your first AI employee and prove value without overcommitting.

### 12.2 Pro Recommendation

Recommend Pro when:

- buyer has a team workflow
- multiple users need access
- integrations matter
- customer needs better analytics
- review workflows matter
- daily operational use is expected
- buyer needs predictable cost controls

Pro sales message:

> Turn AI employee usage into a reliable team workflow.

### 12.3 Smart Recommendation

Recommend Smart when:

- buyer wants full automation
- advanced AI reasoning matters
- GEO/API visibility matters
- higher usage volume is expected
- multiple AI employees or workflows are needed
- forecasting, insights, automation, or marketplace expansion matter
- enterprise-grade controls or premium capabilities are needed

Smart sales message:

> Unlock Ariyo's most intelligent AI employee experience with advanced automation, deeper insight, and stronger controls.

### 12.4 Do Not Oversell Smart

Smart must be positioned as premium and powerful.

But sales must not push Smart if the buyer cannot activate it.

Smart without readiness creates churn risk.

---

## 13. Demo Management

### 13.1 Demo Types

Ariyo demos must be use-case specific:

```text
founder_first_ai_employee_demo
support_ai_employee_demo
sales_ai_employee_demo
operations_ai_employee_demo
geo_api_growth_demo
enterprise_governance_demo
marketplace_solution_demo
partner_demo
```

### 13.2 Demo Preparation Checklist

Before any demo:

- confirm buyer role
- confirm business pain
- confirm use case
- select demo path
- select recommended plan
- prepare trust talking points
- prepare cost control explanation
- prepare next step
- log assumptions in CRM

### 13.3 Demo Success Criteria

A successful demo means:

- buyer understands AI Employee category
- buyer sees a relevant use case
- buyer trusts governance and review controls
- buyer understands Basic/Pro/Smart difference
- buyer agrees to next step
- next step is scheduled or committed

### 13.4 Demo Follow-up

Every demo follow-up must include:

- pain recap
- recommended first AI employee
- recommended plan
- pilot proposal or signup link
- security/trust links if relevant
- next meeting or action

### 13.5 Demo Follow-up Template

```text
Subject: Next step for your first Ariyo AI employee

Hi {{first_name}},

Thanks for taking the time today.

Based on what you shared, the strongest first use case is {{use_case}} because {{pain_summary}}.

My recommendation is to start with {{recommended_plan}} because it gives you {{plan_reason}} without adding unnecessary complexity.

Suggested pilot outcome:
{{success_criteria}}

Next step:
{{next_step}}

I also included the trust and security links we discussed:
{{trust_links}}

Best,
{{sender_name}}
```

---

## 14. Pilot Management

### 14.1 Pilot Philosophy

Ariyo pilots must be short, measurable, and outcome-based.

A pilot is not free usage.

A pilot is a controlled proof of business value.

### 14.2 Pilot Duration

Recommended pilot durations:

```text
Basic proof pilot: 7 days
Pro operational pilot: 14 days
Smart advanced pilot: 21-30 days
Enterprise pilot: 30-45 days
```

### 14.3 Pilot Success Criteria

Every pilot must define success criteria before it starts.

Examples:

- first AI employee hired
- business context completed
- knowledge source connected
- review workflow configured
- at least 20 AI outputs reviewed
- at least 5 useful workflow runs
- at least 25% reduction in manual drafting time
- at least 3 qualified leads assisted
- at least 1 GEO visibility report generated
- at least 1 stakeholder approves rollout

### 14.4 Pilot Health States

```text
not_started
healthy
needs_attention
at_risk
blocked
successful
failed
converted
```

### 14.5 Pilot Automation

Ariyo must automate:

- pilot kickoff email
- setup checklist reminders
- stuck setup alerts
- usage milestone alerts
- value summary generation
- risk alerts to sales/CS
- pilot end summary
- conversion recommendation

### 14.6 Pilot Risk Triggers

Pilot is at risk if:

- no login after 48 hours
- no AI employee created after 72 hours
- no knowledge connected after 5 days
- no successful output after 7 days
- required reviewer missing
- integration failed
- buyer asks pricing questions but no value proof exists
- champion stops responding

---

## 15. Deal Health Score

### 15.1 Purpose

Deal health score helps forecast close probability and identify next actions.

### 15.2 Deal Health Inputs

```json
{
  "pain_clarity": 15,
  "use_case_fit": 15,
  "authority": 10,
  "urgency": 10,
  "engagement": 10,
  "pilot_progress": 15,
  "plan_fit": 10,
  "security_clearance": 5,
  "budget_fit": 5,
  "next_step_confirmed": 5,
  "total": 100
}
```

### 15.3 Deal Health Bands

```text
0-30   low_confidence
31-55  uncertain
56-70  workable
71-85  strong
86-100 high_confidence
```

### 15.4 Deal Health Rules

- A deal without a next step cannot be above 70.
- A deal without a clear use case cannot be above 60.
- A deal without authority cannot be above 75.
- A deal in security review with missing documents cannot be above 80.
- A pilot with success criteria achieved can be above 85.

---

## 16. Sales Automation

### 16.1 Automation Principles

Sales automation must help sales teams act faster without sounding robotic.

Automation must be:

- context-aware
- buyer-aware
- plan-aware
- consent-aware
- frequency-capped
- easy to override
- measurable
- reversible

### 16.2 Allowed Automation Types

```text
lead_routing
lead_scoring
demo_reminders
demo_preparation_notes
follow_up_drafts
pilot_reminders
stalled_deal_alerts
trust_document_recommendations
proposal_generation_assistance
pricing_plan_recommendation
sales_to_cs_handoff_summary
lost_deal_nurture
renewal_expansion_signals
```

### 16.3 Automation Suppression Rules

Do not send automated sales communication when:

- user opted out
- active support incident exists
- legal hold or compliance issue exists
- account is in procurement waiting state
- sales owner manually pauses sequence
- customer is in active onboarding with CS
- communication cap reached

---

## 17. Sales AI Assistant Rules

Ariyo may include a Sales AI Employee to help the sales team.

The Sales AI Employee may:

- summarize calls
- draft follow-ups
- suggest plan fit
- identify objections
- prepare demo flows
- recommend sales assets
- generate pilot success criteria
- update CRM fields with review
- flag deal risks
- draft proposals

The Sales AI Employee must not:

- promise discounts without approval
- make legal commitments
- guarantee AI outcomes
- bypass pricing rules
- alter contracts without approval
- send sensitive trust docs without permission
- manipulate lead scores dishonestly
- mark deals closed won without confirmation
- pressure customers with misleading urgency

---

## 18. CRM Stages and Automation Map

| Stage | Automation | Sales Action | Exit Signal |
|---|---|---|---|
| new_lead | score + route | review fit | MQL or nurture |
| marketing_qualified | send relevant content | qualify | SQL |
| sales_qualified | suggest discovery | book call | discovery scheduled |
| discovery_scheduled | reminders | run discovery | discovery completed |
| discovery_completed | demo prep | schedule demo | demo scheduled |
| demo_scheduled | agenda + reminder | run demo | demo completed |
| demo_completed | follow-up draft | propose pilot | pilot proposed |
| pilot_proposed | pilot checklist | confirm criteria | pilot active |
| pilot_active | health monitoring | coach adoption | pilot success |
| pilot_success | ROI summary | send proposal | proposal sent |
| proposal_sent | close plan alert | negotiate | won/lost |
| procurement_or_security_review | trust docs | unblock review | approved/lost |
| closed_won | handoff packet | CS handoff | onboarding started |
| closed_lost | loss reason | nurture path | recycle |

---

## 19. Sales Assets

Ariyo sales must maintain these assets:

- one-page overview
- Basic / Pro / Smart comparison
- security summary
- trust center link
- AI governance summary
- customer pilot template
- ROI calculator
- demo video
- GEO API one-pager
- marketplace overview
- customer case study
- partner program overview
- data processing summary
- procurement packet

Each asset must have:

```json
{
  "asset_id": "asset_123",
  "asset_type": "pricing_one_pager",
  "audience": "founder",
  "funnel_stage": "demo_completed",
  "plan_relevance": ["basic", "pro", "smart"],
  "last_reviewed_at": "2026-06-18T00:00:00Z",
  "owner": "gtm"
}
```

---

## 20. Objection Handling System

### 20.1 Objection Categories

```text
price
trust_security
ai_quality
implementation_effort
team_adoption
integration_requirements
legal_procurement
comparison_to_chatbots
comparison_to_hiring
unclear_roi
fear_of_ai_errors
fear_of_cost_overrun
```

### 20.2 Required Objection Record

```json
{
  "objection_id": "obj_123",
  "opportunity_id": "opp_123",
  "category": "fear_of_cost_overrun",
  "quote": "How do we avoid AI costs getting out of control?",
  "recommended_response_asset": "ai_cost_control_summary",
  "status": "addressed",
  "created_at": "2026-06-18T10:00:00Z"
}
```

### 20.3 Common Responses

#### Price

> The goal is not to buy more software. The goal is to replace repeated manual work with a governed AI employee. We should start with the plan that can prove value without overbuying.

#### AI Quality

> Ariyo is not designed to let AI act blindly. You can test, review, approve, measure, and improve AI employee output before increasing autonomy.

#### Cost Overrun

> Ariyo includes budget limits, usage alerts, throttling, model downgrade, cost attribution, and plan-specific controls so AI spend stays predictable.

#### Security

> Ariyo is built around organization boundaries, permissions, audit logs, human review, and trust evidence. For security review, we can provide the Trust Center and relevant policy documents.

#### Chatbot Comparison

> A chatbot answers messages. Ariyo lets a business hire AI employees that work inside governed roles, workflows, knowledge, integrations, and measurable outcomes.

---

## 21. Proposal Management

### 21.1 Proposal Requirements

Every proposal must include:

- recommended plan
- reason for plan fit
- first AI employee use case
- expected activation path
- success criteria
- pricing summary
- AI cost control explanation
- trust/security links
- pilot or onboarding timeline
- next step

### 21.2 Proposal Status

```text
draft
sent
viewed
questions_received
revised
accepted
rejected
expired
```

### 21.3 Proposal Expiry

Proposals should have an explicit expiry date only when tied to a legitimate offer.

Fake urgency is forbidden.

---

## 22. CRM Integration Rules

Ariyo may integrate with external CRMs such as HubSpot, Salesforce, Pipedrive, Zoho, or internal CRM systems.

Integration must follow `integration-ecosystem.md`.

### 22.1 Sync Direction

Supported sync modes:

```text
ariyo_to_crm
crm_to_ariyo
bidirectional_with_mapping
manual_export
```

### 22.2 Required Mapping

```json
{
  "ariyo_object": "opportunity",
  "external_object": "deal",
  "field_map": {
    "stage": "dealstage",
    "estimated_mrr": "amount",
    "owner_user_id": "hubspot_owner_id",
    "expected_close_date": "closedate"
  },
  "conflict_policy": "external_wins_except_ariyo_generated_fields"
}
```

### 22.3 CRM Sync Safety

- Never sync sensitive notes by default.
- Never overwrite manually edited external CRM fields without policy.
- Preserve source of truth mapping.
- Log every sync.
- Support replay-safe idempotency.
- Support disconnect without data loss.

---

## 23. Sales-to-CS Handoff

### 23.1 Handoff Purpose

Closed won is not success.

Closed won starts customer success.

### 23.2 Required Handoff Packet

```json
{
  "account_id": "acct_123",
  "plan": "pro",
  "primary_use_case": "support_ai_employee",
  "buyer_pain": "support backlog",
  "success_criteria": [
    "connect support knowledge",
    "review first 20 AI answers",
    "reduce manual drafting time"
  ],
  "stakeholders": [
    {
      "name": "Sara",
      "role": "Founder",
      "influence": "decision_maker"
    }
  ],
  "risks": ["low AI maturity", "knowledge quality uncertain"],
  "promises_made": ["14-day onboarding support"],
  "trust_requirements": ["privacy policy reviewed"],
  "next_meeting": "2026-07-01T10:00:00Z"
}
```

### 23.3 Handoff Rules

Sales must not hand off vague expectations.

Every handoff must include:

- why they bought
- what they expect
- what plan they selected
- what AI employee they want first
- what risks exist
- what was promised
- what must happen next

---

## 24. Sales Event Taxonomy

Required events:

```text
lead_created
lead_scored
lead_assigned
lead_disqualified
lead_converted_to_opportunity
discovery_scheduled
discovery_completed
demo_scheduled
demo_completed
proposal_sent
proposal_viewed
pilot_proposed
pilot_started
pilot_milestone_completed
pilot_at_risk
pilot_successful
pilot_failed
deal_stage_changed
deal_health_changed
objection_logged
trust_document_shared
pricing_page_viewed_by_lead
plan_recommended
crm_sync_completed
crm_sync_failed
closed_won
closed_lost
sales_to_cs_handoff_completed
```

Every event must include global observability fields from `observability-analytics-events.md`.

---

## 25. Sales API Contract

### 25.1 Create Lead

`POST /api/sales/leads`

Request:

```json
{
  "source": "website_demo_request",
  "contact": {
    "email": "buyer@example.com",
    "name": "Sara Example",
    "role": "Founder"
  },
  "company": {
    "name": "Example Co",
    "website": "https://example.com",
    "size": "11-50",
    "industry": "ecommerce"
  },
  "intent": {
    "use_case": "support_ai_employee",
    "plan_interest": "pro",
    "message": "We want to reduce repetitive support replies."
  }
}
```

Response:

```json
{
  "lead_id": "lead_123",
  "lead_score": 74,
  "status": "sales_qualified",
  "recommended_next_step": "schedule_discovery"
}
```

### 25.2 Score Lead

`POST /api/sales/leads/{lead_id}/score`

Response:

```json
{
  "lead_id": "lead_123",
  "score": 78,
  "band": "sales_qualified",
  "reasons": [
    "high use case fit",
    "pricing page viewed",
    "demo requested",
    "Pro plan likely"
  ]
}
```

### 25.3 Create Opportunity

`POST /api/sales/opportunities`

Request:

```json
{
  "lead_id": "lead_123",
  "account_id": "acct_123",
  "stage": "sales_qualified",
  "primary_use_case": "support_ai_employee",
  "target_plan": "pro",
  "estimated_mrr": 299
}
```

Response:

```json
{
  "opportunity_id": "opp_123",
  "stage": "sales_qualified",
  "deal_health_score": 62,
  "next_step": "schedule_discovery"
}
```

### 25.4 Update Deal Stage

`PATCH /api/sales/opportunities/{opportunity_id}/stage`

Request:

```json
{
  "stage": "demo_completed",
  "reason": "Buyer completed support AI employee demo and requested pilot."
}
```

Response:

```json
{
  "opportunity_id": "opp_123",
  "previous_stage": "demo_scheduled",
  "stage": "demo_completed",
  "deal_health_score": 74,
  "recommended_next_step": "propose_pilot"
}
```

### 25.5 Generate Follow-up Draft

`POST /api/sales/opportunities/{opportunity_id}/follow-up-draft`

Request:

```json
{
  "context": "demo_completed",
  "tone": "professional_clear",
  "include_trust_links": true,
  "include_plan_recommendation": true
}
```

Response:

```json
{
  "draft_id": "draft_123",
  "subject": "Next step for your Ariyo support AI employee",
  "body": "Hi Sara, thanks for today...",
  "requires_review": true,
  "risk_flags": []
}
```

### 25.6 Create Pilot

`POST /api/sales/pilots`

Request:

```json
{
  "opportunity_id": "opp_123",
  "plan": "pro",
  "duration_days": 14,
  "success_criteria": [
    "hire support AI employee",
    "connect knowledge base",
    "review 20 AI-generated answers"
  ]
}
```

Response:

```json
{
  "pilot_id": "pilot_123",
  "status": "not_started",
  "activation_checklist_url": "/pilots/pilot_123/checklist"
}
```

### 25.7 Complete Handoff

`POST /api/sales/opportunities/{opportunity_id}/handoff`

Request:

```json
{
  "customer_success_owner_id": "cs_123",
  "handoff_packet": {
    "why_they_bought": "reduce support backlog",
    "first_ai_employee": "support_ai_employee",
    "success_criteria": ["20 reviewed answers"],
    "risks": ["knowledge source may be incomplete"]
  }
}
```

Response:

```json
{
  "handoff_id": "handoff_123",
  "status": "completed",
  "next_lifecycle_stage": "onboarding"
}
```

---

## 26. Frontend Requirements

Sales CRM UI must include:

- lead inbox
- opportunity board
- account detail page
- deal health panel
- next best action panel
- discovery notes form
- demo preparation panel
- pilot tracker
- proposal tracker
- objection log
- trust asset drawer
- plan recommendation card
- sales-to-CS handoff form
- CRM sync status

### 26.1 UI Principles

- show one primary next action
- avoid overwhelming sales users
- surface deal risk clearly
- show buyer pain prominently
- show recommended plan with reason
- show last meaningful activity
- show missing qualification fields
- show automation drafts as reviewable

---

## 27. Backend Requirements

Backend must support:

- lead capture API
- lead scoring service
- pipeline stage state machine
- deal health scoring
- sales sequence engine
- CRM integration adapters
- sales event logging
- pilot lifecycle engine
- handoff packet generation
- sales AI assistant guardrails
- permission checks
- audit logging
- consent and unsubscribe management

---

## 28. Permissions

Sales CRM permissions must follow `admin-permissions.md`.

Required permissions:

```text
sales.lead.read
sales.lead.write
sales.lead.assign
sales.opportunity.read
sales.opportunity.write
sales.stage.update
sales.demo.manage
sales.pilot.manage
sales.proposal.manage
sales.discount.request
sales.discount.approve
sales.handoff.create
sales.crm.sync.manage
sales.sequence.manage
sales.asset.share
sales.ai_assistant.use
```

---

## 29. Security, Privacy, and Compliance

Sales CRM must follow:

- `data-governance-privacy.md`
- `security-threat-model.md`
- `legal-pages-policy-system.md`
- `trust-center-public-status.md`

Rules:

- respect unsubscribe and consent
- redact sensitive notes when needed
- do not expose private trust documents to unauthorized leads
- do not sync customer data to external CRM without approved integration
- log access to sensitive sales records
- separate prospect data from customer data where necessary
- support deletion/export workflows where required

---

## 30. Sales Dashboards

Required dashboards:

- lead source performance
- lead score distribution
- demo conversion rate
- pilot conversion rate
- plan recommendation distribution
- Basic vs Pro vs Smart conversion
- sales cycle length
- pipeline value
- win/loss reasons
- objection frequency
- trust document usage
- CRM sync health
- sales-to-CS handoff quality

---

## 31. Forecasting Rules

Sales forecast must not rely only on rep opinion.

Forecast must consider:

- stage
- deal health
- next step confirmation
- buyer engagement
- pilot success
- authority
- security/procurement status
- proposal status
- historical conversion rate

Forecast categories:

```text
pipeline
best_case
commit
closed_won
closed_lost
```

---

## 32. Win/Loss Analysis

Closed lost reasons:

```text
no_budget
no_urgency
wrong_use_case
security_concern
ai_quality_concern
implementation_concern
pricing_mismatch
competitor_selected
no_decision
not_ready
unsupported_requirement
lost_to_internal_build
```

Closed won reasons:

```text
clear_pain
strong_demo
successful_pilot
trusted_governance
clear_roi
plan_fit
champion_strength
fast_time_to_value
geo_api_need
partner_influence
```

Every closed lost deal must generate a learning record.

---

## 33. AI Sales Assistant Prompt Contract

The Sales AI Assistant must use this instruction pattern:

```text
You are Ariyo's Sales AI Assistant.
Help the sales team understand buyer context, recommend the next best action, draft useful sales communication, and keep CRM data clean.
Never invent commitments, discounts, legal terms, security claims, or product capabilities.
When uncertain, ask for human review.
Always connect recommendations to customer pain, plan fit, trust requirements, and measurable next step.
```

---

## 34. Quality Gates

Sales CRM changes must pass:

- permission tests
- consent tests
- event instrumentation tests
- CRM sync tests
- duplicate lead handling tests
- stage transition tests
- lead scoring tests
- deal health tests
- follow-up draft safety tests
- handoff packet completeness tests
- privacy redaction tests

---

## 35. Forbidden Patterns

Do not:

- treat all leads equally
- push Smart to every buyer
- hide Basic limitations
- hide AI cost controls
- send automated emails without consent
- mark AI-generated follow-ups as sent without review when review is required
- sync all sales notes to third-party CRM by default
- promise guaranteed AI performance
- promise guaranteed cost savings without evidence
- use fake urgency
- skip pilot success criteria
- close won without handoff
- lose deals without recording reason
- let sales override legal or security truth
- use misleading ROI calculators
- show internal deal health to customers
- store sensitive procurement docs insecurely
- use one demo for every buyer

---

## 36. Golden Rule

Ariyo sales must make buying feel clear, safe, relevant, and outcome-driven.

Ariyo must not sell AI as magic.

Ariyo must sell governed AI employees that produce measurable work.

---

## 37. Final Rule

If a sales CRM feature helps Ariyo increase revenue but weakens customer trust, pricing clarity, privacy, security, or post-sale success, it must not ship.

Revenue that creates churn is not growth.

