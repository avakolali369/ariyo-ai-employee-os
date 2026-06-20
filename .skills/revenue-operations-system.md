# Ariyo Revenue Operations System Skill

## 1. Purpose

This skill defines the Revenue Operations system for Ariyo.

Revenue Operations connects marketing, sales, customer success, billing, product analytics, partner growth, marketplace activity, support, and executive forecasting into one reliable revenue operating model.

Ariyo is not only a product with users.

Ariyo is a revenue system with:

- visitors
- leads
- accounts
- workspaces
- trials
- demos
- pilots
- subscriptions
- AI employee usage
- plan entitlements
- marketplace purchases
- partner referrals
- expansion opportunities
- renewal risk
- churn signals
- support load
- customer success outcomes
- billing events
- forecast commitments

This skill makes sure all of those signals become one coherent operating system.

## 2. Core Contract

Ariyo Revenue Operations is not a dashboard after sales happen.

Ariyo Revenue Operations is the system that connects demand generation, conversion, sales pipeline, onboarding, activation, customer success, billing, expansion, churn prevention, partner revenue, marketplace revenue, forecasting, and executive decision-making into one measurable revenue engine.

Every revenue signal must be attributable, explainable, plan-aware, customer-state-aware, lifecycle-aware, privacy-safe, and actionable.

Ariyo must not optimize for vanity revenue metrics.

Ariyo must optimize for durable, measurable, retained, expandable customer value.

## 3. Required Dependencies

This skill depends on:

- `product-strategy.md`
- `brand-messaging-system.md`
- `pricing-packaging-strategy.md`
- `monetization-billing.md`
- `product-analytics-growth.md`
- `observability-analytics-events.md`
- `launch-go-to-market.md`
- `sales-demo-playbook.md`
- `sales-crm-pipeline-system.md`
- `customer-lifecycle-automation.md`
- `customer-success-playbooks.md`
- `community-partner-growth.md`
- `ecosystem-marketplace-economy.md`
- `website-conversion-system.md`
- `conversion-experimentation-system.md`
- `admin-permissions.md`
- `data-governance-privacy.md`
- `legal-pages-policy-system.md`

If any of these skills conflict with this file, the stricter trust, billing, privacy, and revenue integrity rule wins.

## 4. Revenue Operations Philosophy

Ariyo RevOps must follow these principles:

1. Revenue is a system, not a department.
2. Customer value must be measurable before expansion is pushed.
3. Sales claims must match product reality.
4. Billing must match entitlements.
5. Attribution must be useful, not perfect theater.
6. Forecasts must be tied to evidence, not optimism.
7. Churn risk must be detected before cancellation.
8. Expansion should happen when customer success is proven.
9. Partner revenue must be tracked without corrupting attribution.
10. Marketplace revenue must be separated from subscription revenue.
11. AI usage must be connected to gross margin.
12. Every revenue metric must have an owner and a source of truth.

## 5. Ariyo Revenue Model

Ariyo revenue can come from:

- recurring subscription revenue
- plan upgrades
- AI usage expansion
- paid AI employee seats or capacity
- workflow automation add-ons
- GEO/API add-ons
- marketplace asset purchases
- marketplace revenue share
- implementation services
- partner referrals
- enterprise contracts
- support or success packages
- data, compliance, or advanced admin add-ons

The RevOps system must separate these revenue streams clearly.

Never collapse all revenue into one generic `revenue` field.

## 6. Plan-Aware Revenue Logic

Ariyo has three core commercial plans:

- `Basic`
- `Pro`
- `Smart`

### 6.1 Basic Revenue Logic

Basic is designed to reduce friction and help customers experience Ariyo safely.

Basic revenue goals:

- convert visitors into first-time users
- create first AI employee experience
- prove basic value
- reduce buyer fear
- expose upgrade paths naturally
- avoid high support burden
- maintain healthy gross margin

Basic must not include unlimited expensive AI behavior.

Basic should create upgrade demand by revealing value gaps, not by making the product feel broken.

Basic expansion signals include:

- user hits AI usage limit repeatedly
- user tries to add more AI employees
- user attempts workflow automation
- user wants more integrations
- user wants team collaboration
- user wants deeper knowledge/RAG usage
- user asks for analytics or GEO features
- support tickets show operational use cases

### 6.2 Pro Revenue Logic

Pro is the operational revenue engine for active teams.

Pro revenue goals:

- increase retained recurring revenue
- make Ariyo part of daily operations
- support multiple workflows
- justify team adoption
- enable measurable business outcomes
- generate expansion signals
- keep AI cost controlled

Pro should include enough capability to be serious, but not the full premium intelligence layer.

Pro expansion signals include:

- recurring workflow usage
- multiple department use cases
- integration adoption
- role-based usage growth
- need for advanced governance
- need for Smart AI reasoning
- need for GEO/API intelligence
- higher automation volume
- renewal conversations showing deeper needs

### 6.3 Smart Revenue Logic

Smart is the premium, full-option intelligence tier.

Smart revenue goals:

- maximize value per account
- support advanced AI employee operations
- unlock high-intelligence workflows
- improve customer outcomes
- justify premium pricing
- protect gross margin with AI cost controls
- create enterprise expansion opportunities

Smart must feel meaningfully better than Pro.

Smart can include:

- smarter AI employee reasoning
- deeper RAG
- advanced GEO/API capabilities
- predictive analytics
- advanced lifecycle automation
- advanced marketplace assets
- advanced integrations
- expanded review/governance
- better reporting
- higher support priority

Smart must never mean unlimited uncontrolled AI spend.

## 7. Core RevOps Objects

Ariyo must model revenue through explicit objects.

### 7.1 Account

An `Account` represents a buying organization.

Required fields:

```json
{
  "id": "acct_123",
  "name": "Acme Co",
  "domain": "acme.com",
  "industry": "ecommerce",
  "company_size": "11-50",
  "region": "EU",
  "lifecycle_stage": "active_customer",
  "current_plan": "pro",
  "account_owner_id": "user_123",
  "customer_success_owner_id": "user_456",
  "billing_customer_id": "cus_123",
  "created_at": "2026-06-18T10:00:00Z"
}
```

### 7.2 Workspace

A `Workspace` is the product environment inside an account.

One account may have multiple workspaces.

Workspaces must inherit plan, billing, and entitlement rules from the account unless explicitly overridden by enterprise contract.

### 7.3 Contact

A `Contact` represents a person associated with an account.

Contact roles include:

- buyer
- admin
- billing owner
- technical evaluator
- champion
- executive sponsor
- end user
- reviewer
- partner contact

### 7.4 Lead

A `Lead` is a person or organization showing early buying intent before qualification.

Lead source must be captured.

Lead source examples:

- website
- demo form
- pricing page
- referral
- partner
- marketplace
- content
- SEO
- GEO
- outbound
- event
- academy
- community
- support inquiry

### 7.5 Opportunity

An `Opportunity` represents a possible revenue event.

Opportunity types:

- new business
- plan upgrade
- expansion
- renewal
- reactivation
- partner-assisted deal
- enterprise contract
- marketplace bundle sale

### 7.6 Subscription

A `Subscription` represents recurring billing.

Must include:

- plan
- billing interval
- status
- start date
- renewal date
- MRR
- ARR
- discounts
- add-ons
- usage limits
- entitlements

### 7.7 Add-On

An `AddOn` represents extra monetized capability.

Possible add-ons:

- additional AI employee capacity
- additional workflow runs
- advanced GEO monitoring
- premium integrations
- advanced analytics
- marketplace credits
- implementation support
- enterprise security pack
- academy certification pack

### 7.8 Revenue Event

A `RevenueEvent` is an immutable business event affecting revenue reporting.

Examples:

- subscription_created
- subscription_upgraded
- subscription_downgraded
- subscription_cancelled
- invoice_paid
- payment_failed
- credit_applied
- refund_issued
- marketplace_purchase_completed
- partner_commission_earned
- expansion_opportunity_created
- renewal_risk_detected

### 7.9 Revenue Snapshot

A `RevenueSnapshot` captures revenue state at a point in time.

Used for:

- MRR reporting
- ARR reporting
- cohort analysis
- forecast baselines
- board reporting
- investor reporting

Snapshots must be immutable after creation.

## 8. Lifecycle Stage Definitions

Ariyo must use consistent lifecycle stages across product, CRM, CS, billing, and analytics.

Allowed stages:

```text
anonymous_visitor
known_lead
marketing_qualified_lead
sales_qualified_lead
demo_scheduled
demo_completed
pilot_requested
pilot_active
trial_active
activated_trial
paid_customer
active_customer
expansion_candidate
renewal_risk
renewal_due
churn_risk
churned
winback_candidate
advocate
```

Do not create random lifecycle labels in UI or backend.

## 9. CRM Pipeline Integration

The RevOps system must integrate with the sales pipeline.

### 9.1 New Business Pipeline

Stages:

```text
lead_captured
qualified
meeting_booked
discovery_completed
demo_completed
pilot_proposed
pilot_active
proposal_sent
security_review
legal_review
closed_won
closed_lost
```

### 9.2 Expansion Pipeline

Stages:

```text
expansion_signal_detected
success_confirmed
expansion_discussion_started
plan_recommendation_sent
proposal_sent
approved
expanded
closed_lost
```

### 9.3 Renewal Pipeline

Stages:

```text
renewal_not_started
renewal_health_review
risk_identified
value_summary_sent
renewal_discussion
commercial_review
renewed
renewed_with_expansion
renewed_with_downsell
churned
```

Pipeline state must be linked to product and billing evidence.

## 10. Lead Scoring

Lead scoring must combine explicit fit and behavioral intent.

### 10.1 Fit Score

Fit score measures whether the account looks like the target customer.

Inputs:

- industry fit
- company size
- role seniority
- team function
- use case match
- budget likelihood
- region/serviceability
- compliance requirements
- plan fit

### 10.2 Intent Score

Intent score measures buying behavior.

Inputs:

- pricing page visits
- demo page visits
- comparison page visits
- GEO/API page visits
- Trust Center visits
- docs/API visits
- repeated signup attempts
- marketplace browsing
- academy course starts
- reply to outbound
- partner referral
- trial activation events

### 10.3 Readiness Score

Readiness score measures whether the lead is likely ready to buy.

Inputs:

- urgent pain
- specific use case
- named project
- team involvement
- decision maker identified
- budget timing
- technical feasibility
- security review need

### 10.4 Lead Score Model

Ariyo should calculate:

```text
lead_score = fit_score * 0.35 + intent_score * 0.35 + readiness_score * 0.30
```

This score is a prioritization aid, not an automatic decision.

## 11. Revenue Metrics Catalog

### 11.1 Core Metrics

Ariyo must track:

- MRR
- ARR
- new MRR
- expansion MRR
- contraction MRR
- churned MRR
- reactivation MRR
- net revenue retention
- gross revenue retention
- logo retention
- average revenue per account
- trial-to-paid conversion
- demo-to-close conversion
- pilot-to-paid conversion
- lead-to-opportunity conversion
- CAC payback estimate
- LTV estimate
- gross margin
- AI gross margin
- marketplace GMV
- marketplace net revenue
- partner-sourced revenue
- partner-influenced revenue

### 11.2 Plan Metrics

Track separately for Basic, Pro, and Smart:

- signup count
- activation rate
- paid conversion rate
- upgrade rate
- downgrade rate
- churn rate
- average AI cost
- gross margin
- support cost
- time to first value
- retention
- expansion rate

### 11.3 AI Cost Revenue Metrics

Track:

- AI cost per account
- AI cost per AI employee
- AI cost per workflow
- AI cost per outcome
- AI cost as percentage of revenue
- model cost by provider
- RAG cost by workspace
- GEO monitoring cost
- Smart tier margin
- usage overage risk

### 11.4 Customer Success Revenue Metrics

Track:

- health score
- activation completion
- successful outcome count
- time saved estimate
- support load reduced
- workflow adoption
- knowledge freshness
- renewal risk score
- expansion readiness score
- champion engagement

## 12. MRR Rules

MRR must be calculated consistently.

### 12.1 Included in MRR

Include:

- recurring subscription fees
- recurring plan add-ons
- recurring enterprise packages
- recurring support packages

### 12.2 Excluded from MRR

Do not include:

- one-time setup fees
- implementation services
- refunds
- taxes
- marketplace pass-through GMV
- non-recurring professional services
- credits

### 12.3 Marketplace Revenue

Marketplace should track:

- GMV
- platform take rate
- creator payout
- partner commission
- marketplace net revenue

Marketplace net revenue may be tracked separately from SaaS MRR unless marketplace subscriptions are recurring platform-owned revenue.

## 13. ARR Rules

ARR should be calculated from normalized recurring revenue.

```text
ARR = MRR * 12
```

Do not inflate ARR using one-time services or assumed future usage.

Enterprise custom contracts must be normalized by contract terms.

## 14. Revenue Attribution

Ariyo must support multi-touch attribution without pretending attribution is perfect.

### 14.1 Required Attribution Fields

Each account and opportunity must capture:

- first touch source
- latest touch source
- lead source
- conversion source
- partner source
- campaign ID
- content asset ID
- landing page ID
- experiment variant ID
- sales owner
- CS owner
- marketplace source
- referral code

### 14.2 Attribution Models

Ariyo should support:

- first-touch attribution
- last-touch attribution
- linear attribution
- partner-sourced attribution
- partner-influenced attribution
- sales-assisted attribution
- product-led attribution

### 14.3 Attribution Integrity Rules

Never overwrite original source.

Never credit a partner as source unless referral evidence exists.

Never assign revenue to a campaign without a traceable event.

Never hide direct/unknown traffic by forcing attribution.

## 15. Forecasting System

Ariyo forecasting must be evidence-based.

### 15.1 Forecast Categories

Allowed categories:

```text
pipeline
best_case
commit
closed_won
closed_lost
```

### 15.2 Forecast Inputs

Forecast must consider:

- deal stage
- deal age
- ICP fit
- pain urgency
- champion strength
- decision maker engagement
- demo completion
- pilot activity
- product activation
- security/legal progress
- pricing approval
- budget confirmation
- competitor risk
- renewal health
- historical win rates

### 15.3 Forecast Confidence

Every opportunity must have:

- forecast amount
- close date
- forecast category
- confidence score
- next step
- risk note
- last customer interaction date

### 15.4 Forecast Anti-Patterns

Do not mark as commit because salesperson feels confident.

Do not forecast expansion without product success evidence.

Do not forecast renewal without health review.

Do not forecast enterprise close without security/legal status.

## 16. Revenue Dashboards

### 16.1 Executive Dashboard

Must show:

- MRR
- ARR
- net new MRR
- churned MRR
- expansion MRR
- NRR
- GRR
- pipeline value
- forecast
- plan mix
- gross margin
- AI cost ratio
- activation rate
- retention
- top risks
- top expansion opportunities

### 16.2 Marketing Dashboard

Must show:

- traffic by source
- conversion by landing page
- content-attributed leads
- GEO/API content contribution
- campaign performance
- lead quality
- CAC indicators
- MQL volume
- MQL-to-SQL conversion

### 16.3 Sales Dashboard

Must show:

- pipeline by stage
- deal health
- demo conversion
- pilot conversion
- forecast categories
- stuck opportunities
- follow-up tasks
- plan recommendation mix
- win/loss reasons

### 16.4 Customer Success Dashboard

Must show:

- health score
- activation cohorts
- adoption rate
- expansion candidates
- renewal risk
- churn risk
- customer outcomes
- support load
- NPS/feedback if available

### 16.5 Finance Dashboard

Must show:

- MRR movement
- ARR movement
- invoices
- payment failures
- refunds
- discounts
- credits
- revenue recognition status
- marketplace payouts
- partner commissions
- gross margin

### 16.6 Product Dashboard

Must show:

- plan usage
- feature adoption
- AI employee usage
- workflow adoption
- integration usage
- GEO/API usage
- marketplace installs
- upgrade triggers
- cost-heavy accounts

## 17. Revenue Event Taxonomy

Revenue events must use consistent names.

Examples:

```text
revops.lead_created
revops.lead_scored
revops.lead_qualified
revops.opportunity_created
revops.opportunity_stage_changed
revops.demo_completed
revops.pilot_started
revops.pilot_converted
revops.subscription_created
revops.subscription_upgraded
revops.subscription_downgraded
revops.subscription_cancelled
revops.invoice_paid
revops.invoice_failed
revops.payment_recovered
revops.refund_issued
revops.expansion_signal_detected
revops.renewal_risk_detected
revops.churn_risk_detected
revops.partner_referral_attributed
revops.marketplace_purchase_attributed
revops.forecast_updated
revops.revenue_snapshot_created
```

Each event must include global fields from `observability-analytics-events.md`.

## 18. Expansion Signals

Ariyo must detect expansion based on value and demand.

Expansion signals include:

- repeated plan limit reached
- multiple departments active
- team member growth
- workflow success rate high
- AI employee outcome volume increasing
- Smart-only feature viewed repeatedly
- GEO/API demand detected
- marketplace bundle installed
- advanced integration request
- enterprise governance request
- customer asks for admin controls
- usage exceeds Pro thresholds
- multiple support tickets asking for advanced capabilities
- customer reports measurable ROI

Expansion should not trigger if:

- health score is low
- unresolved severe support issues exist
- billing is failing
- customer has churn risk
- product value is not proven

## 19. Churn Risk Signals

Ariyo must detect churn risk early.

Risk signals include:

- usage decline
- failed activation
- repeated support issues
- payment failures
- downgrade attempts
- admin inactivity
- AI employee failures
- high AI cost surprise
- low knowledge quality
- failed integrations
- unresolved security concern
- executive sponsor disengaged
- competitor mention
- cancellation page visit

Churn risk must create actionable tasks.

Do not merely display churn risk on a dashboard.

## 20. Renewal System

Renewal must be prepared before the renewal date.

### 20.1 Renewal Timeline

Recommended timeline:

```text
120 days before renewal: enterprise account health review
90 days before renewal: value summary prepared
60 days before renewal: renewal risk review
45 days before renewal: commercial discussion
30 days before renewal: renewal confirmation or escalation
14 days before renewal: final risk check
7 days before renewal: billing readiness check
```

For monthly self-serve accounts, renewal automation may be shorter and product-led.

### 20.2 Renewal Value Summary

Renewal value summary should include:

- AI employees deployed
- workflows completed
- time saved
- revenue assisted
- support load reduced
- content/GEO gains
- successful integrations
- adoption growth
- risk controls used
- cost controlled
- expansion opportunities

## 21. Revenue Automation

Automation must assist teams without hiding context.

### 21.1 Allowed Automations

Allowed:

- lead routing
- lead scoring
- follow-up reminders
- demo prep summaries
- pilot health alerts
- renewal risk alerts
- payment failure workflows
- expansion signal creation
- customer value summary drafts
- forecast anomaly alerts
- partner attribution alerts

### 21.2 Human Required Automations

Human review required for:

- sending enterprise pricing proposals
- changing discount terms
- approving refunds above threshold
- assigning partner commissions manually
- changing forecast commit category
- marking strategic deal closed lost
- sending legal or security commitments

## 22. Billing and RevOps Reconciliation

Billing data must reconcile with RevOps data.

Required reconciliation checks:

- active subscriptions match paid accounts
- plan entitlements match billing plan
- invoices match subscription state
- discounts match approved records
- cancellations match product access state
- refunds match billing records
- marketplace payouts match purchases
- partner commissions match attribution rules

Never allow CRM stage to be the source of truth for billing.

Billing system is source of truth for paid subscription state.

Product entitlement system is source of truth for access.

CRM is source of truth for sales pipeline.

RevOps is source of truth for reporting reconciliation.

## 23. Commission and Partner Payout Logic

### 23.1 Sales Commission

Sales commission must be based on approved closed-won revenue and policy-defined eligibility.

Commission should not be calculated from unverified CRM values alone.

### 23.2 Partner Commission

Partner commission requires:

- partner ID
- referral evidence
- attribution rule
- customer acceptance
- payment received
- refund window status
- fraud checks

### 23.3 Marketplace Creator Payouts

Marketplace payouts require:

- purchase event
- asset ID
- creator ID
- platform fee
- refund status
- compliance status
- payout eligibility

## 24. Data Governance

Revenue data can contain sensitive business information.

Rules:

- do not expose revenue data to unauthorized users
- restrict dashboards by role
- redact billing identifiers in general analytics
- avoid sending sensitive revenue data to AI providers unless approved
- never include full payment details in logs
- respect customer deletion rules
- preserve legally required financial records when applicable
- separate analytics events from legal billing records

## 25. RevOps API Contract

### 25.1 Create Lead

`POST /api/revops/leads`

Request:

```json
{
  "email": "founder@example.com",
  "company_name": "Example Co",
  "source": "website_demo_form",
  "campaign_id": "camp_ai_employee_launch",
  "interest": "support_ai_employee",
  "plan_interest": "pro"
}
```

Response:

```json
{
  "lead_id": "lead_123",
  "account_id": "acct_123",
  "lead_score": 72,
  "lifecycle_stage": "known_lead",
  "next_best_action": "schedule_discovery"
}
```

### 25.2 Get Account Revenue Summary

`GET /api/revops/accounts/{account_id}/revenue-summary`

Response:

```json
{
  "account_id": "acct_123",
  "current_plan": "pro",
  "mrr": 299,
  "arr": 3588,
  "ai_cost_ratio": 0.18,
  "health_score": 82,
  "expansion_readiness_score": 74,
  "churn_risk_score": 19,
  "next_best_action": "recommend_smart_upgrade_for_geo_api"
}
```

### 25.3 Create Revenue Event

`POST /api/revops/revenue-events`

Request:

```json
{
  "event_name": "revops.subscription_upgraded",
  "account_id": "acct_123",
  "subscription_id": "sub_123",
  "from_plan": "pro",
  "to_plan": "smart",
  "mrr_delta": 500,
  "source": "product_upgrade_prompt",
  "occurred_at": "2026-06-18T10:00:00Z"
}
```

Response:

```json
{
  "revenue_event_id": "revevt_123",
  "status": "recorded"
}
```

### 25.4 Get Forecast

`GET /api/revops/forecast?period=2026-Q3`

Response:

```json
{
  "period": "2026-Q3",
  "pipeline": 180000,
  "best_case": 95000,
  "commit": 42000,
  "closed_won": 12000,
  "risk_notes": [
    "Two enterprise deals require security review completion."
  ]
}
```

## 26. Webhook Events

RevOps must emit webhooks for downstream systems.

Webhook examples:

```text
revops.lead.qualified
revops.opportunity.created
revops.opportunity.stage_changed
revops.subscription.created
revops.subscription.upgraded
revops.subscription.cancelled
revops.expansion_signal.detected
revops.renewal_risk.detected
revops.payment_failed
revops.partner_commission.earned
revops.marketplace_payout.ready
```

Webhook rules:

- signed payloads required
- idempotency key required
- retry with backoff
- dead-letter queue required
- no sensitive payment data in payload

## 27. AI RevOps Assistant Rules

Ariyo may include an AI RevOps Assistant.

Allowed tasks:

- summarize account health
- prepare demo notes
- draft follow-up emails
- explain revenue movement
- detect forecast anomalies
- suggest next best actions
- summarize churn risk
- generate renewal value summaries
- identify expansion candidates

Forbidden tasks without human approval:

- changing billing state
- offering discounts
- approving refunds
- sending legal commitments
- changing subscription plans
- sending enterprise proposal terms
- approving partner payouts
- modifying revenue recognition records

AI RevOps Assistant must cite the evidence behind recommendations.

## 28. Plan-Specific RevOps Motions

### 28.1 Basic

Basic RevOps should prioritize:

- activation
- self-serve conversion
- low-touch education
- upgrade prompts
- cost-safe usage
- trial success

### 28.2 Pro

Pro RevOps should prioritize:

- team adoption
- workflow adoption
- integration success
- expansion to Smart
- renewal health
- outcome reporting

### 28.3 Smart

Smart RevOps should prioritize:

- premium success
- deeper ROI reporting
- enterprise expansion
- advanced AI/GEO adoption
- gross margin monitoring
- strategic account management

## 29. Required Frontend Experiences

Frontend must include:

- RevOps dashboard
- lead detail page
- account revenue page
- opportunity detail page
- forecast dashboard
- expansion candidates view
- churn risk view
- renewal calendar
- partner attribution view
- marketplace revenue view
- billing reconciliation alerts
- AI cost to revenue view
- plan mix dashboard

Each page must respect permissions.

## 30. Required Backend Capabilities

Backend must provide:

- revenue event ingestion
- immutable revenue event storage
- CRM integration
- billing integration
- product usage ingestion
- health scoring jobs
- expansion scoring jobs
- churn scoring jobs
- forecast calculation
- attribution calculation
- partner commission calculation
- marketplace payout calculation
- revenue snapshots
- dashboard APIs
- webhooks
- audit logs

## 31. Testing Requirements

Test cases must include:

- lead source preservation
- lead scoring calculation
- lifecycle stage transition
- subscription upgrade event
- downgrade event
- cancellation event
- invoice failure
- payment recovery
- MRR calculation
- ARR calculation
- marketplace revenue separation
- partner commission eligibility
- forecast category update
- expansion signal suppression when health is low
- churn risk alert
- permission-protected dashboard access
- webhook idempotency
- billing reconciliation mismatch
- AI assistant recommendation evidence

## 32. Forbidden Patterns

Do not:

- use CRM as billing source of truth
- count one-time services as MRR
- inflate ARR with non-recurring revenue
- hide churn by renaming it pause
- mark expansion as success before payment or signed agreement
- attribute revenue to partners without evidence
- expose revenue dashboards to unauthorized users
- let AI change billing or pricing without approval
- ignore AI cost when reporting Smart revenue
- mix marketplace GMV with SaaS revenue
- overwrite original lead source
- forecast based on optimism instead of evidence
- send revenue data to third-party AI tools without policy approval
- show vanity dashboards without actions
- trigger upsell while customer is unhealthy
- report gross revenue without refunds/credits context

## 33. Golden Rule

Ariyo RevOps must make revenue visible, trustworthy, explainable, and actionable.

Revenue is not only what Ariyo sells.

Revenue is what Ariyo helps customers keep, expand, and justify through measurable AI employee outcomes.

## 34. Final Rule

Every Ariyo revenue decision must answer:

1. What customer value created this revenue?
2. Which source influenced it?
3. Which plan or asset generated it?
4. What cost did it create?
5. What risk is attached?
6. What next action should happen?
7. Can the number be trusted?

If the system cannot answer these questions, the revenue operation is not mature enough.
