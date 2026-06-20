# Ariyo Pricing & Packaging Strategy Skill

## 1. Purpose

This skill defines the official pricing and packaging strategy for Ariyo.

Ariyo is not priced like a chatbot, a generic SaaS seat tool, or a simple automation utility.

Ariyo is priced as an AI Employee Operating System where customers can hire, configure, supervise, govern, and measure AI employees.

The pricing experience must be clear enough for a first-time buyer, attractive enough to convert a trial user, flexible enough for growing teams, and disciplined enough to protect gross margin, AI cost, support cost, marketplace economics, and enterprise trust.

This file governs:

- pricing page strategy
- packaging logic
- Basic / Pro / Smart plan design
- customer-facing value communication
- entitlements
- usage limits
- AI cost guardrails
- upgrade triggers
- trial strategy
- add-ons
- marketplace monetization
- partner monetization
- discount rules
- billing UX
- API contracts
- analytics events
- sales usage
- frontend behavior
- backend enforcement
- forbidden pricing patterns

## 2. Dependencies

This skill depends on and must remain consistent with:

- `product-strategy.md`
- `brand-messaging-system.md`
- `launch-go-to-market.md`
- `sales-demo-playbook.md`
- `monetization-billing.md`
- `ai-cost-control.md`
- `model-provider-strategy.md`
- `admin-permissions.md`
- `customer-lifecycle-automation.md`
- `customer-success-playbooks.md`
- `ecosystem-marketplace-economy.md`
- `content-marketing-engine.md`
- `legal-pages-policy-system.md`
- `observability-analytics-events.md`
- `product-requirements-mvp.md`

## 3. Core Contract

Ariyo pricing must help customers understand what they are buying, why it matters, what they can do today, when they should upgrade, and how cost is controlled.

Pricing must feel simple on the surface and disciplined underneath.

Ariyo must package AI employee capability around customer outcomes, not technical complexity.

Basic must feel safe and useful.

Pro must feel operational and worth paying for.

Smart must feel premium, intelligent, automated, and full-option while still being governed by budget, security, privacy, and safety controls.

Ariyo must never create pricing that looks attractive but causes invisible AI cost risk, customer confusion, unfair throttling, unsupported enterprise expectations, or margin collapse.

## 4. Pricing Philosophy

### 4.1 Customer-Friendly Pricing Principles

Ariyo pricing must be:

- easy to understand in under 30 seconds
- based on visible business value
- honest about limits
- generous enough to let users experience value
- strict enough to prevent runaway AI costs
- upgrade-oriented without feeling manipulative
- outcome-framed, not token-framed
- plan-aware across product, support, AI, marketplace, and automation
- explainable inside product UI
- enforced by backend entitlements

### 4.2 What Ariyo Is Selling

Ariyo sells:

- AI employee capability
- time saved
- faster customer response
- better business operations
- knowledge reuse
- workflow automation
- measurable outcomes
- governance and trust
- cost-controlled AI execution
- confidence for teams

Ariyo does not sell:

- raw prompts
- token bundles as the primary story
- unlimited AI usage with no limits
- vague chatbot access
- hype-driven intelligence claims
- hidden overage traps

### 4.3 Packaging Must Match Mental Models

Customers should immediately understand the three plans:

```text
Basic = Start with one useful AI employee safely
Pro   = Run AI employees in daily business operations
Smart = Unlock the full intelligent AI workforce experience
```

## 5. Plan Architecture

Ariyo has three primary self-serve plans:

1. Basic
2. Pro
3. Smart

Optional enterprise/custom packaging may exist later, but the public pricing strategy must remain anchored around these three.

### 5.1 Basic Plan Positioning

Basic is for individuals, founders, small teams, and early adopters who want to test Ariyo safely with a useful but limited AI employee experience.

Basic must answer:

> Can Ariyo help my business enough to trust it?

Basic must be:

- low-friction
- affordable
- simple
- limited
- safe
- easy to activate
- conversion-oriented

Basic must not include every automation, every model, every integration, every marketplace capability, or deep AI reasoning.

### 5.2 Pro Plan Positioning

Pro is for businesses that want Ariyo to become part of daily operations.

Pro must answer:

> Can Ariyo reliably support real work across my team?

Pro must be:

- operational
- collaborative
- workflow-ready
- more configurable
- better measured
- more integrated
- more valuable than Basic
- the default recommended plan for serious customers

Pro should usually be marked as:

```text
Recommended
Best for growing teams
Most popular
```

### 5.3 Smart Plan Positioning

Smart is for customers who want the fullest and most intelligent Ariyo experience.

Smart must answer:

> Can Ariyo become a powerful AI workforce layer for my business?

Smart must be:

- premium
- full-option
- more intelligent
- more automated
- more proactive
- better governed
- more deeply integrated
- more measurable
- more expandable

Smart is allowed to cost more because it gives access to the highest-value capabilities.

Smart must not be positioned as unlimited chaos. It must be positioned as powerful intelligence with strong controls.

## 6. Customer-Facing Plan Summary

Pricing pages, onboarding, upgrade modals, and sales materials must be able to explain the plans as follows:

```text
Basic
Start safely with Ariyo.
Hire your first AI employee, connect simple knowledge, test useful outputs, and see whether AI employees can help your business.

Pro
Run Ariyo in your business.
Add more AI employees, connect more tools, automate repeat work, collaborate with your team, and measure real outcomes.

Smart
Unlock the full intelligent Ariyo experience.
Use advanced AI employees, deeper reasoning, proactive automation, richer knowledge, smarter recommendations, advanced GEO visibility, stronger insights, and premium growth workflows.
```

## 7. Plan Comparison Matrix

The product must maintain a plan comparison matrix in a structured source of truth.

### 7.1 Primary Customer-Facing Matrix

| Capability | Basic | Pro | Smart |
|---|---:|---:|---:|
| Ideal customer | Starter / solo / small team | Growing business team | Advanced business / premium team |
| AI employee experience | One limited employee experience | Multi-employee operational experience | Full intelligent workforce experience |
| AI employee count | Low limit | Higher limit | Highest self-serve limit |
| AI intelligence level | Standard | Enhanced | Advanced / smart routing |
| Model access | Cost-efficient models | Balanced models | Premium models and smart model routing |
| AI reasoning depth | Basic | Medium | Deep / advanced where allowed |
| Business context | Essential fields | Rich business profile | Deep business memory and strategic context |
| Knowledge sources | Limited | Expanded | Advanced and multi-source |
| RAG depth | Basic retrieval | Enhanced retrieval | Deep retrieval, reranking, freshness checks |
| Workflows | Simple templates | Operational workflows | Advanced, conditional, proactive workflows |
| Human review | Basic review | Configurable review gates | Advanced review policies and approvals |
| Integrations | Essential integrations | More business integrations | Advanced integrations and priority connectors |
| GEO / AI SEO | Limited checks | Regular monitoring | Advanced GEO API + competitor tracking |
| Marketplace | Browse/select basics | Install business bundles | Premium bundles, advanced templates, priority marketplace assets |
| Analytics | Basic activity | Outcome dashboards | Advanced ROI, forecasting, intelligence insights |
| Cost controls | Hard caps | Budgets + alerts | Predictive cost intelligence and automation controls |
| Support | Standard self-serve | Priority support | Premium support / success guidance |
| Academy | Starter lessons | Role-based paths | Advanced certification and growth paths |
| Trust features | Basic security visibility | Admin controls | Advanced governance and audit export |

### 7.2 Public Pricing Page Rule

The public page must not overwhelm users with every internal entitlement.

It should show:

- top plan benefit
- ideal user
- 6-10 most important features
- usage headline
- support level
- CTA
- trust note
- upgrade reason

Detailed entitlement tables should be collapsible.

## 8. Plan Entitlement Model

### 8.1 Core Entitlement Categories

Every plan must define entitlements across these categories:

- organization limits
- workspace limits
- seat limits
- AI employee limits
- AI usage budget
- model access
- workflow runs
- knowledge sources
- storage
- integrations
- channels
- human review
- analytics
- marketplace access
- GEO access
- API access
- support level
- Academy access
- admin controls
- security controls
- export controls
- retention windows

### 8.2 Entitlement Object

Pricing configuration should be represented as structured data.

```json
{
  "plan": "pro",
  "display_name": "Pro",
  "billing_interval": "monthly",
  "limits": {
    "ai_employees": 5,
    "team_members": 10,
    "knowledge_sources": 20,
    "workflow_runs_per_month": 5000,
    "geo_queries_per_month": 1000,
    "ai_execution_budget_units": 100000,
    "integrations": 10
  },
  "features": {
    "advanced_workflows": true,
    "human_review_policies": true,
    "marketplace_bundles": true,
    "geo_competitor_tracking": false,
    "advanced_roi_dashboard": true,
    "priority_support": true
  },
  "cost_controls": {
    "hard_cap_enabled": true,
    "soft_alerts_enabled": true,
    "predictive_alerts_enabled": false,
    "smart_model_routing": false
  }
}
```

### 8.3 Backend Enforcement Rule

Frontend may explain plan limits.

Backend must enforce plan limits.

No critical pricing, usage, or entitlement enforcement may exist only in frontend state.

## 9. Basic Plan Design

### 9.1 Basic Promise

Basic promise:

```text
Start with your first AI employee and see value safely.
```

### 9.2 Basic Target Customers

Basic is for:

- solo founders
- small teams
- early-stage businesses
- users evaluating Ariyo
- customers not ready for automation depth
- customers who need proof before paying more

### 9.3 Basic Included Capabilities

Basic should include:

- limited AI employee creation
- guided onboarding
- essential business context
- simple knowledge upload or basic source connection
- basic chat/test environment
- basic review before action
- starter templates
- essential activity analytics
- basic cost hard cap
- basic Academy access
- public Help Center support
- limited GEO readiness check
- limited marketplace browse/install

### 9.4 Basic Restrictions

Basic should restrict:

- number of active AI employees
- advanced workflows
- advanced integrations
- high-cost models
- deep reasoning
- automated proactive actions
- large knowledge bases
- high-volume GEO monitoring
- competitor tracking
- advanced analytics
- team governance
- custom review policies
- API access
- premium marketplace assets
- priority support

### 9.5 Basic User Experience

Basic UI should feel encouraging, not blocked.

When a limit is reached, copy should explain the value of upgrading.

Bad:

```text
Limit exceeded.
```

Good:

```text
You’ve reached the Basic limit for active AI employees. Upgrade to Pro to add more employees and run Ariyo across your daily operations.
```

### 9.6 Basic Conversion Goal

Basic should create one strong activation moment:

- first AI employee hired
- first useful response generated
- first knowledge source connected
- first reviewed output approved
- first measurable value shown

Basic must not try to expose every product area.

## 10. Pro Plan Design

### 10.1 Pro Promise

Pro promise:

```text
Run AI employees inside your daily business operations.
```

### 10.2 Pro Target Customers

Pro is for:

- small and medium businesses
- support teams
- sales teams
- operations teams
- agencies
- growing teams with repeat work
- customers ready to operationalize AI employees

### 10.3 Pro Included Capabilities

Pro should include:

- multiple AI employees
- team member collaboration
- richer business context
- expanded knowledge sources
- enhanced RAG
- operational workflow templates
- more integrations
- channel connections
- configurable human review gates
- outcome dashboards
- cost budgets and alerts
- role-based Academy paths
- priority support
- marketplace business bundles
- regular GEO query monitoring
- upgrade prompts based on ROI

### 10.4 Pro Restrictions

Pro may restrict:

- highest-cost model access
- deep autonomous reasoning
- advanced proactive workflows
- enterprise-grade audit export
- premium GEO competitor monitoring
- smart model routing
- advanced marketplace monetization
- custom SLAs
- advanced partner/creator features
- extensive API throughput

### 10.5 Pro User Experience

Pro should be the default serious plan.

Its UI should emphasize:

- team usage
- operational outcomes
- workflow adoption
- cost visibility
- value reporting
- AI employee performance
- upgrade path to Smart

### 10.6 Pro Conversion Goal

Pro should convert when the customer sees:

- Ariyo saves time every week
- team members rely on AI employees
- workflows reduce manual work
- knowledge reuse improves answers
- cost is predictable
- outcomes can be measured

## 11. Smart Plan Design

### 11.1 Smart Promise

Smart promise:

```text
Unlock the most intelligent and automated Ariyo experience.
```

### 11.2 Smart Target Customers

Smart is for:

- advanced teams
- high-intent businesses
- customers with multiple use cases
- teams that need deeper AI reasoning
- businesses relying on AI employees for growth or operations
- customers who want advanced GEO / AI SEO monitoring
- customers who need premium automation and insight

### 11.3 Smart Included Capabilities

Smart should include:

- highest self-serve AI employee limits
- advanced AI employee types
- premium model access
- smart model routing
- deeper reasoning where allowed
- advanced RAG and reranking
- expanded knowledge ingestion
- proactive workflow automation
- advanced human review policies
- advanced integrations
- more channel automation
- advanced analytics and ROI dashboards
- predictive cost controls
- AI cost anomaly detection
- advanced GEO API and AI visibility tracking
- competitor citation tracking
- premium marketplace bundles
- priority Academy and certifications
- premium support or success guidance
- advanced admin controls
- deeper auditability

### 11.4 Smart Is Full-Option, Not Unlimited

Smart should feel full-option to the user, but it must not be unmanaged.

Smart still needs:

- fair usage limits
- cost budgets
- anomaly detection
- abuse detection
- approval gates for high-risk actions
- throttling in abnormal conditions
- provider fallback
- security controls
- legal and privacy controls

Customer-facing explanation:

```text
Smart gives you Ariyo’s most powerful AI employee experience, including advanced intelligence, automation, analytics, and GEO visibility. To keep performance reliable and costs predictable, Smart includes high usage allowances with intelligent safeguards.
```

### 11.5 Smart Conversion Goal

Smart should convert when the customer wants:

- more automation
- better intelligence
- richer insights
- more AI employees
- premium GEO visibility
- deeper business impact
- advanced operational control

## 12. Feature Gating Strategy

### 12.1 Gate by Value, Not Frustration

Feature gating must show the value behind the gate.

Bad:

```text
This feature is unavailable.
```

Good:

```text
Advanced competitor tracking is available on Smart. Use it to see when Claude, ChatGPT, Gemini, or DeepSeek cite competitors instead of your content.
```

### 12.2 Gate Types

Ariyo may gate by:

- plan
- usage volume
- AI cost budget
- role permission
- organization policy
- integration availability
- security requirements
- marketplace entitlement
- region/legal requirements

### 12.3 Upgrade Modal Requirements

Upgrade modals must include:

- feature being unlocked
- reason it matters
- plan required
- what the customer gains
- CTA
- option to learn more
- no dark patterns

Example:

```text
Unlock Smart GEO Monitoring

Smart lets you monitor how your pages appear across ChatGPT, Claude, Gemini, and DeepSeek, detect competitor citations, and receive visibility alerts.

Upgrade to Smart to track AI search visibility continuously.
```

## 13. Pricing Page Structure

### 13.1 Recommended Pricing Page Layout

The pricing page should include:

1. headline
2. short value proposition
3. plan cards
4. comparison table
5. AI usage explanation
6. Basic / Pro / Smart use cases
7. marketplace and add-ons note
8. trust note
9. FAQ
10. CTA

### 13.2 Pricing Page Headline Options

Preferred:

```text
Choose how much AI workforce your business needs.
```

Alternatives:

```text
Start with one AI employee. Scale to an AI workforce.
```

```text
Simple plans for hiring, managing, and measuring AI employees.
```

```text
From first AI employee to full intelligent operations.
```

### 13.3 Plan Card Structure

Each plan card should include:

- plan name
- one-line promise
- ideal customer
- price display
- 5-7 key features
- primary CTA
- usage note
- upgrade hint

### 13.4 Basic Plan Card Copy

```text
Basic
Start safely with your first AI employee.

Best for founders and small teams testing Ariyo.

Includes:
- Starter AI employee experience
- Essential business context
- Basic knowledge setup
- Safe review before action
- Starter templates
- Basic activity insights
- Hard cost protection

CTA: Start with Basic
```

### 13.5 Pro Plan Card Copy

```text
Pro
Run AI employees in daily operations.

Best for growing teams ready to automate repeat work.

Includes:
- Multiple AI employees
- Expanded knowledge sources
- Workflow automation
- Business integrations
- Human review policies
- Outcome dashboards
- Budget alerts and team controls

CTA: Start Pro
Badge: Recommended
```

### 13.6 Smart Plan Card Copy

```text
Smart
Unlock Ariyo’s most intelligent AI workforce experience.

Best for teams that want advanced automation, deeper AI, and premium growth intelligence.

Includes:
- Advanced AI employees
- Premium model routing
- Deep knowledge retrieval
- Proactive workflows
- Advanced GEO / AI visibility monitoring
- Predictive cost controls
- Premium analytics and support

CTA: Go Smart
Badge: Full AI Workforce
```

## 14. Trial Strategy

### 14.1 Trial Goal

Trial must produce a value moment before asking for a serious upgrade.

Trial should not be a vague time-limited sandbox.

Trial should guide the user to:

- create organization
- select use case
- hire first AI employee
- add business context
- connect or upload knowledge
- generate first useful output
- review safe deployment path
- see upgrade value

### 14.2 Trial Types

Ariyo may support:

- free Basic plan
- Pro trial
- Smart demo trial
- guided pilot
- partner-led trial
- marketplace bundle trial

### 14.3 Recommended Self-Serve Trial

For acquisition, the most user-friendly structure is:

```text
Start free or low-risk on Basic.
Offer a time-limited Pro trial when the user reaches activation.
Offer Smart demo access only when advanced use cases are clear.
```

### 14.4 Trial Limit Rules

Trial must limit:

- AI cost
- model access
- data volume
- integration actions
- outbound actions
- marketplace premium installs
- GEO monitoring volume

Trial must not limit:

- ability to understand value
- ability to see upgrade path
- ability to trust product

## 15. Upgrade Strategy

### 15.1 Upgrade Triggers

Ariyo should trigger upgrade prompts when:

- user reaches AI employee limit
- user wants another workflow
- user connects more knowledge sources
- user needs team collaboration
- user requests advanced integration
- user needs more GEO monitoring
- user hits AI usage budget
- user wants advanced analytics
- user wants premium marketplace bundle
- user needs better support
- user sees measurable ROI

### 15.2 Upgrade Trigger Quality Rule

Upgrade prompts should be based on demonstrated value, not random pressure.

Good upgrade moments:

- after first useful output
- after team invite attempt
- after repeated use
- after measurable time saved
- when user tries a clearly higher-tier feature
- when AI cost usage indicates real demand

Bad upgrade moments:

- immediately after signup
- before value
- during error recovery
- after a failed AI output
- when user is confused

### 15.3 Upgrade Copy Examples

Basic to Pro:

```text
Your first AI employee is working. Pro lets you add more employees, connect more knowledge, and run workflows with your team.
```

Pro to Smart:

```text
Your team is using Ariyo operationally. Smart unlocks deeper intelligence, proactive automation, advanced GEO monitoring, and predictive cost controls.
```

Smart add-on:

```text
Your Smart plan includes advanced AI capabilities. This add-on expands your monthly GEO monitoring capacity for larger content programs.
```

## 16. Add-On Strategy

### 16.1 Add-On Philosophy

Add-ons should extend value without making core plans feel incomplete.

Add-ons are for:

- variable cost items
- advanced use cases
- marketplace assets
- enterprise-like needs
- usage expansion
- partner services

Add-ons must not hide essential plan functionality.

### 16.2 Recommended Add-Ons

Potential Ariyo add-ons:

- extra AI employee pack
- additional AI usage budget
- GEO monitoring pack
- premium knowledge storage pack
- advanced integration pack
- marketplace premium bundle
- dedicated onboarding session
- advanced support pack
- custom workflow build
- partner implementation service

### 16.3 Add-On Display Rule

Add-ons must be shown as optional accelerators.

Bad:

```text
You need this add-on to make Ariyo useful.
```

Good:

```text
Add more GEO monitoring capacity when your content program expands.
```

## 17. AI Usage & Cost Packaging

### 17.1 Customer-Friendly Usage Language

Do not make token math the main pricing story.

Use customer-friendly units such as:

- AI work allowance
- AI employee activity
- workflow runs
- GEO checks
- knowledge sources
- monitored pages
- support conversations
- automation tasks

Technical usage units may exist internally.

### 17.2 Internal Cost Metrics

Internally, Ariyo must track:

- input tokens
- output tokens
- embedding cost
- reranking cost
- model provider cost
- workflow cost
- integration cost
- storage cost
- support cost
- marketplace cost
- margin per organization
- margin per plan
- margin per AI employee
- margin per workflow

### 17.3 Usage Display UX

Usage dashboards should show:

- current plan
- included usage
- used usage
- remaining usage
- projected month-end usage
- cost-saving suggestions
- upgrade/add-on options
- overage policy

Smart users should see predictive usage insights.

## 18. Fair Usage Policy

### 18.1 Why Fair Usage Exists

Fair usage protects:

- customer cost predictability
- Ariyo gross margin
- system reliability
- provider limits
- security
- abuse prevention

### 18.2 Customer-Facing Fair Usage Copy

```text
Ariyo plans include generous usage allowances designed for normal business use. To keep performance reliable and AI costs predictable, unusually high or abusive usage may be slowed, reviewed, or require an add-on.
```

### 18.3 Fair Usage Actions

Ariyo may apply:

- warning
- usage alert
- soft throttling
- hard cap
- model downgrade
- workflow pause
- review requirement
- add-on recommendation
- account review

Fair usage actions must be logged.

## 19. Basic / Pro / Smart GEO Packaging

Because AI SEO / GEO is strategically important, Ariyo must package it clearly.

### 19.1 Basic GEO

Basic may include:

- limited GEO readiness scan
- content structure score
- entity clarity recommendations
- citation potential suggestions
- small number of query checks

Basic should not include continuous monitoring or competitor tracking.

### 19.2 Pro GEO

Pro may include:

- regular GEO readiness scans
- query monitoring
- page-level visibility snapshots
- basic per-model visibility score
- limited competitor detection
- content improvement recommendations
- marketing dashboard integration

### 19.3 Smart GEO

Smart should include:

- advanced GEO API
- ChatGPT / Claude / Gemini / DeepSeek monitoring
- visibility tracking over time
- competitor citation displacement
- paraphrase detection
- content opportunity scoring
- webhook alerts
- CMS integration support
- advanced GEO analytics
- API access or higher API limits

### 19.4 GEO Upgrade Copy

Basic to Pro:

```text
Track how your content appears in AI answers, not just how well it is written.
```

Pro to Smart:

```text
Smart unlocks advanced GEO monitoring across major AI platforms, competitor visibility alerts, and API access for content teams.
```

## 20. Marketplace Packaging

### 20.1 Marketplace Access by Plan

Basic:

- browse marketplace
- install selected free/starter templates
- limited paid marketplace access

Pro:

- install business bundles
- use paid templates
- use implementation partner listings
- access more categories

Smart:

- premium bundles
- advanced templates
- priority marketplace assets
- deeper integration bundles
- premium solution packs
- advanced creator/partner workflows where applicable

### 20.2 Marketplace Monetization

Ariyo may monetize marketplace through:

- paid templates
- solution bundles
- revenue share
- partner services
- certified implementation
- premium listings
- sponsored placements with disclosure

Marketplace purchases must respect plan entitlements.

## 21. Partner & Sales Packaging

### 21.1 Partner-Led Packaging

Partners should sell Ariyo using simple customer outcomes:

- support automation
- sales assistant
- operations assistant
- AI SEO/GEO visibility
- knowledge assistant
- onboarding assistant
- agency client support

### 21.2 Sales Conversation Rule

Sales should not lead with a feature table.

Sales should lead with:

1. pain
2. use case
3. first AI employee
4. governance
5. measurable value
6. plan fit
7. next step

### 21.3 Which Plan to Recommend

Recommend Basic when:

- customer is unsure
- use case is small
- no team deployment yet
- budget sensitivity is high

Recommend Pro when:

- customer has repeat work
- team usage is expected
- integrations matter
- workflows matter
- measurable ROI is likely

Recommend Smart when:

- customer needs advanced intelligence
- content/GEO matters deeply
- multiple AI employees are needed
- automation depth matters
- higher value workflows justify higher cost

## 22. Discount Strategy

### 22.1 Discount Philosophy

Discounts must support acquisition without destroying pricing integrity.

Discounts should be:

- time-bound
- reason-based
- approved
- tracked
- non-confusing
- margin-aware

### 22.2 Allowed Discount Types

Ariyo may support:

- annual discount
- launch discount
- partner referral discount
- nonprofit/education discount if strategically approved
- pilot credit
- migration credit
- volume discount for larger teams

### 22.3 Forbidden Discount Patterns

Never create:

- permanent secret discounts
- arbitrary founder discounts with no record
- discounts that make Smart cheaper than Pro value
- discounts that remove AI cost guardrails
- discounts without expiration
- hidden customer-specific terms that support cannot explain

## 23. Pricing Localization

### 23.1 Localization Requirements

Pricing pages may need localization for:

- currency
- language
- tax/VAT
- payment provider
- invoicing rules
- legal requirements
- market willingness to pay
- regional support expectations

### 23.2 Localization Rule

Localized pricing must not break entitlement consistency.

Different markets may have different price displays, but plan capabilities must remain understandable.

## 24. Billing UX

### 24.1 Billing Page Requirements

Billing UI must show:

- current plan
- billing interval
- next invoice date
- included usage
- add-ons
- payment method
- invoice history
- upgrade/downgrade options
- cancellation policy
- plan comparison link
- usage summary

### 24.2 Downgrade UX

Downgrade flow must explain:

- features lost
- limits that will apply
- AI employees affected
- workflows paused
- marketplace assets affected
- data retained or unavailable
- effective date

Downgrade must not delete critical customer data without explicit confirmation and policy compliance.

### 24.3 Cancellation UX

Cancellation must be respectful.

It should capture:

- reason
- unresolved pain
- plan fit issue
- pricing objection
- missing feature
- competitor
- option to pause if supported

No deceptive cancellation flows.

## 25. API Design for Pricing & Entitlements

### 25.1 Plan List Endpoint

```http
GET /api/v1/billing/plans
```

Response:

```json
{
  "plans": [
    {
      "id": "basic",
      "name": "Basic",
      "positioning": "Start safely with your first AI employee.",
      "recommended": false,
      "features": [
        "Starter AI employee experience",
        "Basic knowledge setup",
        "Safe review before action"
      ],
      "limits": {
        "ai_employees": 1,
        "knowledge_sources": 3,
        "geo_queries_per_month": 25
      }
    },
    {
      "id": "pro",
      "name": "Pro",
      "positioning": "Run AI employees in daily operations.",
      "recommended": true,
      "features": [
        "Multiple AI employees",
        "Workflow automation",
        "Outcome dashboards"
      ],
      "limits": {
        "ai_employees": 5,
        "knowledge_sources": 20,
        "geo_queries_per_month": 1000
      }
    },
    {
      "id": "smart",
      "name": "Smart",
      "positioning": "Unlock Ariyo’s most intelligent AI workforce experience.",
      "recommended": false,
      "features": [
        "Advanced AI employees",
        "Smart model routing",
        "Advanced GEO monitoring"
      ],
      "limits": {
        "ai_employees": 20,
        "knowledge_sources": 100,
        "geo_queries_per_month": 10000
      }
    }
  ]
}
```

### 25.2 Entitlement Check Endpoint

```http
POST /api/v1/entitlements/check
```

Request:

```json
{
  "organization_id": "org_123",
  "feature": "advanced_geo_competitor_tracking",
  "requested_quantity": 1
}
```

Response:

```json
{
  "allowed": false,
  "current_plan": "pro",
  "required_plan": "smart",
  "reason": "Advanced competitor tracking is available on Smart.",
  "upgrade_message": "Upgrade to Smart to monitor competitor visibility across AI-generated answers.",
  "upgrade_url": "/billing/upgrade?plan=smart&feature=advanced_geo_competitor_tracking"
}
```

### 25.3 Usage Summary Endpoint

```http
GET /api/v1/billing/usage-summary
```

Response:

```json
{
  "organization_id": "org_123",
  "plan": "pro",
  "period": {
    "start": "2026-06-01",
    "end": "2026-06-30"
  },
  "usage": {
    "ai_execution_budget_units": {
      "included": 100000,
      "used": 62000,
      "projected": 94000,
      "status": "healthy"
    },
    "workflow_runs": {
      "included": 5000,
      "used": 3100,
      "projected": 4700,
      "status": "healthy"
    },
    "geo_queries": {
      "included": 1000,
      "used": 920,
      "projected": 1380,
      "status": "risk"
    }
  },
  "recommendations": [
    {
      "type": "upgrade_or_addon",
      "message": "Your GEO monitoring is projected to exceed the Pro allowance. Add a GEO pack or upgrade to Smart for advanced monitoring."
    }
  ]
}
```

### 25.4 Plan Change Preview Endpoint

```http
POST /api/v1/billing/plan-change-preview
```

Request:

```json
{
  "organization_id": "org_123",
  "target_plan": "smart",
  "billing_interval": "annual"
}
```

Response:

```json
{
  "current_plan": "pro",
  "target_plan": "smart",
  "changes": {
    "unlocked_features": [
      "Smart model routing",
      "Advanced GEO monitoring",
      "Predictive cost controls"
    ],
    "increased_limits": [
      {
        "name": "AI employees",
        "from": 5,
        "to": 20
      },
      {
        "name": "GEO queries per month",
        "from": 1000,
        "to": 10000
      }
    ]
  },
  "billing_preview": {
    "amount_due_now": 0,
    "next_invoice_estimate": 0,
    "currency": "TBD"
  },
  "confirmation_required": true
}
```

## 26. Event Tracking

Pricing events must follow `observability-analytics-events.md`.

### 26.1 Required Events

Track:

- `pricing_page_viewed`
- `plan_card_viewed`
- `plan_comparison_expanded`
- `upgrade_prompt_shown`
- `upgrade_prompt_clicked`
- `trial_started`
- `trial_activated`
- `trial_limit_reached`
- `plan_selected`
- `checkout_started`
- `checkout_completed`
- `checkout_failed`
- `plan_upgraded`
- `plan_downgraded`
- `subscription_cancelled`
- `addon_purchased`
- `usage_limit_warning_shown`
- `feature_gate_triggered`
- `pricing_objection_captured`

### 26.2 Pricing Analytics Questions

Analytics must answer:

- Which plan gets the most views?
- Which plan converts best?
- Which feature gates drive upgrades?
- Where do users abandon checkout?
- Does Basic activate users or trap them?
- Does Pro feel valuable enough?
- Does Smart communicate premium value clearly?
- Which usage limits create frustration?
- Which add-ons protect margin?
- Which channels produce high-quality paid users?

## 27. Frontend Requirements

### 27.1 Pricing Page UX

Frontend must:

- show clear plan cards
- use concise plan copy
- highlight Pro as recommended if approved
- explain Smart as premium/full-option
- show feature comparison clearly
- make limits understandable
- avoid token-heavy language
- handle currencies cleanly
- support monthly/annual toggle
- support FAQ
- support accessible comparison tables
- support mobile-first layout

### 27.2 In-App Upgrade UX

In-app upgrade prompts must be contextual.

They should appear when users attempt a gated feature or approach a usage limit.

### 27.3 Billing UX States

Frontend must handle:

- loading
- no subscription
- trial active
- trial expired
- payment failed
- subscription active
- subscription past due
- plan change pending
- downgrade scheduled
- usage limit reached
- payment provider unavailable

### 27.4 Copy Tone

Pricing copy must be:

- clear
- confident
- calm
- trustworthy
- outcome-oriented
- not manipulative
- not hype-driven

## 28. Backend Requirements

Backend must implement:

- plan registry
- entitlement registry
- usage meter
- billing provider integration
- invoices
- subscription states
- checkout sessions
- plan change logic
- proration logic if applicable
- downgrade scheduling
- add-on support
- usage caps
- budget enforcement
- webhook handling
- billing audit logs
- tax/VAT support if needed
- fraud prevention
- permission enforcement

## 29. Security & Privacy Requirements

Pricing and billing must protect:

- payment data
- invoice data
- customer tax info
- billing email
- subscription details
- usage details
- admin actions

Never expose:

- payment tokens
- provider secrets
- private billing metadata
- another organization’s invoices
- raw payment provider payloads

Billing webhooks must be signature verified and idempotent.

## 30. Customer Acquisition Rules

### 30.1 Acquisition-Friendly Pricing

Ariyo pricing should reduce purchase anxiety by showing:

- clear entry plan
- recommended plan
- premium plan
- fair usage note
- no hidden surprise language
- trust/security note
- cancel/downgrade clarity
- upgrade path
- measurable value examples

### 30.2 Best Acquisition Path

Recommended acquisition path:

```text
Visitor sees clear value.
Visitor starts Basic or Pro trial.
User reaches first value.
Ariyo shows plan fit.
User upgrades based on use case.
Lifecycle automation drives adoption.
Usage and ROI justify expansion.
```

### 30.3 Pricing FAQ Topics

Pricing FAQ should answer:

- What is an AI employee?
- Which plan should I choose?
- Can I change plans later?
- What happens if I reach my usage limit?
- Does Smart mean unlimited usage?
- How is AI usage controlled?
- Can I cancel anytime?
- Do you offer annual billing?
- Do marketplace assets cost extra?
- What support is included?
- Is my data used for AI training?
- Can I get an invoice?

## 31. Recommended FAQ Copy

### 31.1 Which Plan Should I Choose?

```text
Choose Basic if you want to test Ariyo with your first AI employee.
Choose Pro if you want AI employees to support daily business operations.
Choose Smart if you want the most advanced AI employee experience, including deeper intelligence, automation, analytics, and GEO visibility.
```

### 31.2 Does Smart Mean Unlimited Usage?

```text
No. Smart includes Ariyo’s most powerful capabilities and higher usage allowances, but usage is still governed to keep performance reliable, costs predictable, and customer data safe.
```

### 31.3 What Happens If I Hit a Limit?

```text
Ariyo will notify you before important limits are reached when possible. Depending on the limit, you can upgrade, add capacity, reduce usage, or adjust automation settings.
```

### 31.4 Why Are Plans Based on AI Employees?

```text
Ariyo is built around AI employees, not generic chat access. Plans are designed around how many AI employees you need, how intelligent they need to be, how much work they perform, and how much governance your business requires.
```

## 32. Pricing QA Checklist

Before shipping pricing changes, verify:

- plan copy is clear
- Basic / Pro / Smart difference is obvious
- Pro recommendation is justified
- Smart value is premium and specific
- limits are visible
- entitlements match backend
- feature gates work
- checkout works
- downgrade works
- cancellation works
- usage tracking works
- billing webhooks are idempotent
- plan changes are audited
- pricing page is mobile-friendly
- comparison table is accessible
- legal links are present
- analytics events fire
- support can explain plans
- sales can demo plan differences

## 33. Forbidden Pricing Patterns

Never do these:

```text
call Smart unlimited
hide critical limits
sell features backend cannot enforce
sell security/compliance promises not implemented
make Basic useless
make Pro unclear
make Smart vague
lead with token counts
show surprise charges without prior warning
allow frontend-only entitlement checks
allow billing webhook without signature verification
show raw billing provider errors
make cancellation deceptive
delete customer data automatically on downgrade without consent/policy
create pricing copy support cannot explain
create plan names with no real feature difference
bury AI usage caps in legal text only
force upgrade after failed product experience
use fake scarcity
use dark patterns in checkout
allow plan downgrade to break active workflows silently
change pricing without versioning or notification rules
```

## 34. Golden Rule

Pricing is part of product trust.

Ariyo should make customers feel:

```text
I understand what I get.
I understand what it costs.
I understand what is limited.
I understand when I should upgrade.
I trust Ariyo not to surprise me.
```

## 35. Final Rule

Ariyo pricing must be simple enough to buy, valuable enough to upgrade, disciplined enough to protect margin, and honest enough to build long-term trust.

