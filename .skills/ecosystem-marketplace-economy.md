# Ariyo Ecosystem Marketplace Economy Skill

## 1. Purpose

This skill defines the economic, product, governance, ranking, monetization, trust, and operational system for the Ariyo ecosystem marketplace.

The marketplace is where Ariyo can turn AI employees, workflows, templates, playbooks, integrations, industry packages, partner solutions, and creator expertise into a scalable ecosystem.

This file must guide product managers, backend engineers, frontend engineers, AI agents, Codex, growth teams, finance teams, partner teams, and marketplace operators when designing, building, listing, ranking, monetizing, reviewing, and governing marketplace assets.

This file must be used alongside:

- `product-strategy.md`
- `monetization-billing.md`
- `ai-employee-marketplace.md`
- `community-partner-growth.md`
- `integration-ecosystem.md`
- `admin-permissions.md`
- `human-review-governance.md`
- `quality-assurance-system.md`
- `security-threat-model.md`
- `data-governance-privacy.md`
- `observability-analytics-events.md`
- `content-marketing-engine.md`
- `launch-go-to-market.md`
- `sales-demo-playbook.md`

---

## 2. Core Contract

Ariyo marketplace economy is not a catalog of templates.

Ariyo marketplace economy is the governed commercial system that allows trusted creators, partners, agencies, consultants, developers, and Ariyo itself to package business outcomes into reusable AI employee assets.

The marketplace must help customers find, evaluate, purchase, install, configure, trust, measure, and expand solutions while protecting security, pricing integrity, customer data, creator quality, platform margins, and marketplace trust.

Ariyo must never let marketplace growth create unsafe AI behavior, low-quality automation, hidden costs, deceptive listings, unreviewed integrations, or customer confusion.

---

## 3. Marketplace Philosophy

The Ariyo marketplace must sell outcomes, not files.

A marketplace item should not be positioned as:

- a prompt pack
- a generic template
- a random automation
- an unverified bot
- a one-click magic workflow
- a low-trust plugin

A marketplace item should be positioned as:

- a role-ready AI employee setup
- a business workflow solution
- an industry operating package
- a verified integration bundle
- a knowledge/process accelerator
- a partner implementation offer
- a measurable business outcome

The marketplace should make it easier for customers to answer:

- What business problem does this solve?
- Which AI employee does it improve?
- What does it need access to?
- What will it cost to run?
- Is it safe for my plan and organization?
- Who made it?
- Has it been reviewed?
- What proof exists?
- What happens after I install it?

---

## 4. Marketplace Economic Goals

The ecosystem marketplace must support these business goals:

1. Increase activation speed
2. Increase customer retention
3. Increase expansion revenue
4. Increase AI employee adoption
5. Increase partner-led sales
6. Increase solution depth by industry
7. Reduce implementation friction
8. Create creator and agency incentives
9. Build defensible ecosystem lock-in
10. Improve customer time-to-value
11. Grow Ariyo beyond internal product development capacity
12. Create repeatable monetization beyond subscriptions

The marketplace must not sacrifice trust for supply growth.

---

## 5. Marketplace Asset Types

### 5.1 AI Employee Templates

Reusable AI employee configurations for a defined business role.

Examples:

- Customer Support AI Employee
- Sales Qualification AI Employee
- WhatsApp Commerce Assistant
- HR FAQ AI Employee
- Clinic Reception AI Employee
- Real Estate Lead Assistant
- Accounting Document Assistant

Must include:

- role definition
- capabilities
- required knowledge
- required integrations
- review policy
- risk level
- recommended plan
- estimated AI cost
- setup steps
- expected first outcome
- success metrics

---

### 5.2 Workflow Templates

Reusable workflow automations tied to one or more AI employees.

Examples:

- New lead qualification flow
- Support ticket triage flow
- Order status response flow
- Appointment reminder flow
- Knowledge gap detection flow
- Abandoned cart recovery flow

Must include:

- trigger
- steps
- conditions
- AI calls
- integration actions
- human review gates
- rollback behavior
- estimated volume/cost
- failure modes

---

### 5.3 Knowledge Packs

Reusable knowledge structures, starter FAQs, policy frameworks, onboarding data models, and domain-specific reference packs.

Examples:

- E-commerce support knowledge starter
- Agency client onboarding knowledge pack
- SaaS help center AI-readiness pack
- Clinic FAQ starter pack
- Real estate objection library

Must include:

- source type
- update requirements
- citation guidance
- freshness requirements
- disclaimer rules
- localization support

Knowledge packs must never pretend to be customer-specific truth until customized and approved.

---

### 5.4 Integration Bundles

Preconfigured bundles that combine providers, permissions, sync rules, workflow triggers, and AI employee tools.

Examples:

- Google Workspace support bundle
- Shopify commerce assistant bundle
- HubSpot sales pipeline bundle
- Zendesk support automation bundle
- WhatsApp customer conversation bundle

Must include:

- providers
- required scopes
- supported actions
- sync cadence
- webhook events
- permissions
- risk level
- plan compatibility
- security review status

---

### 5.5 Industry Solution Bundles

End-to-end solution packages designed for a specific vertical.

Examples:

- E-commerce AI Operations Pack
- Clinic Front Desk AI Pack
- Real Estate Lead Management Pack
- Agency Client Success Pack
- Education Admissions Assistant Pack
- B2B SaaS Support + Sales Pack

Must include:

- target ICP
- included employees
- included workflows
- included integrations
- setup checklist
- customer outcomes
- proof requirements
- pricing model
- recommended implementation support

---

### 5.6 Prompt & Policy Packs

Reusable prompt policies and tool orchestration rules.

These must be treated as high-risk assets because poor prompt logic can cause unsafe AI behavior.

Must include:

- prompt purpose
- allowed use cases
- forbidden use cases
- test cases
- evaluation results
- safety constraints
- version history

Prompt packs must not bypass Ariyo safety, review, cost, or permission layers.

---

### 5.7 Partner Services Listings

Human-delivered services listed in the marketplace.

Examples:

- AI employee setup package
- Knowledge base cleanup service
- Workflow automation implementation
- Integration setup service
- Enterprise onboarding service
- GEO content optimization service

Must include:

- partner identity
- service scope
- price or pricing model
- delivery timeline
- deliverables
- refund/cancellation terms
- success criteria
- customer requirements

---

### 5.8 Add-On Capabilities

Optional marketplace add-ons that extend Ariyo features.

Examples:

- Advanced analytics dashboard
- Industry-specific evaluation pack
- Custom report generator
- Cost optimization pack
- GEO monitoring pack
- Compliance evidence pack

Must include:

- plan compatibility
- cost impact
- data access requirements
- setup requirements
- support owner

---

## 6. Marketplace Entities

The product and backend should model marketplace economy with clear entities.

### 6.1 Core Entities

```text
MarketplaceListing
MarketplaceAsset
MarketplaceCreator
MarketplacePartner
MarketplaceInstall
MarketplacePurchase
MarketplaceSubscription
MarketplaceEntitlement
MarketplaceReview
MarketplaceRating
MarketplacePayout
MarketplaceCommission
MarketplaceBundle
MarketplaceCategory
MarketplaceCollection
MarketplaceVersion
MarketplaceApproval
MarketplacePolicyViolation
MarketplaceRefund
MarketplaceDispute
MarketplaceAttribution
MarketplaceQualityScore
MarketplaceRankingSignal
MarketplaceRevenueShareRule
```

---

### 6.2 Listing Entity

A `MarketplaceListing` represents the commercial and customer-facing page for an asset.

Required fields:

```json
{
  "id": "listing_123",
  "slug": "shopify-support-ai-employee",
  "title": "Shopify Support AI Employee",
  "subtitle": "Answer order, refund, and product questions with review-safe automation.",
  "asset_type": "ai_employee_template",
  "creator_id": "creator_456",
  "publisher_type": "ariyo_partner",
  "status": "published",
  "visibility": "public",
  "pricing_model": "one_time",
  "risk_level": "medium",
  "recommended_plan": "pro",
  "minimum_plan": "pro",
  "requires_review": true,
  "requires_integration": true,
  "requires_knowledge": true,
  "quality_score": 86,
  "average_rating": 4.7,
  "install_count": 128,
  "last_reviewed_at": "2026-06-18T10:00:00Z"
}
```

---

### 6.3 Asset Entity

A `MarketplaceAsset` represents the installable technical payload.

Required fields:

```json
{
  "id": "asset_123",
  "listing_id": "listing_123",
  "asset_type": "workflow_template",
  "version": "1.3.0",
  "schema_version": "2026-01",
  "payload_ref": "asset_payload_123",
  "required_permissions": ["workflow:create", "ai_employee:update"],
  "required_integrations": ["shopify", "gmail"],
  "required_scopes": ["orders:read", "customers:read"],
  "estimated_monthly_ai_cost_band": "medium",
  "security_review_status": "approved",
  "safety_review_status": "approved",
  "created_at": "2026-06-18T10:00:00Z"
}
```

---

## 7. Marketplace Listing Lifecycle

Every listing must move through explicit states.

```text
draft
submitted_for_review
needs_changes
approved
published
featured
paused
deprecated
suspended
removed
archived
```

### 7.1 Draft

The creator is preparing the listing.

Rules:

- not visible publicly
- can be previewed by creator
- cannot be installed by customers
- validation warnings should be shown

---

### 7.2 Submitted for Review

The listing is awaiting Ariyo marketplace review.

Rules:

- creator cannot edit core installable payload during review
- reviewer can approve, reject, or request changes
- all required review checks must run

---

### 7.3 Needs Changes

The listing failed review.

Must include:

- clear rejection reasons
- required fixes
- policy references
- resubmission path

---

### 7.4 Approved

The listing passed review but is not necessarily public.

Rules:

- creator may schedule publication
- marketplace operator may feature it
- version must be locked

---

### 7.5 Published

The listing is discoverable and installable.

Rules:

- install metrics begin tracking
- quality score updates continuously
- reviews and support metrics affect ranking

---

### 7.6 Featured

The listing receives elevated distribution.

Featured status must never be purely paid placement.

Feature eligibility must consider:

- quality score
- trust score
- install success
- low refund rate
- strong support quality
- low incident rate
- relevance to customer segment

---

### 7.7 Paused

The listing is temporarily unavailable.

Reasons:

- creator pause
- integration issue
- quality issue
- security review
- support overload
- pricing review

Existing installs may remain active depending on risk.

---

### 7.8 Deprecated

The listing is being phased out.

Rules:

- no new installs
- existing installs receive migration guidance
- replacement listing may be recommended

---

### 7.9 Suspended

The listing is disabled due to risk.

Reasons:

- security issue
- policy violation
- deceptive claims
- unsafe AI behavior
- fraud
- customer harm
- excessive refund rate

Suspension must trigger creator notification and internal incident review.

---

## 8. Pricing Models

Ariyo marketplace must support multiple pricing models while keeping customer clarity.

### 8.1 Free

Used for:

- Ariyo starter templates
- onboarding accelerators
- educational packs
- partner lead-generation assets

Rules:

- free does not mean unreviewed
- free assets still require trust and quality checks
- free assets may have plan restrictions

---

### 8.2 One-Time Purchase

Used for:

- templates
- knowledge packs
- workflow packs
- implementation starter kits

Rules:

- customer pays once for current version access
- future major upgrades may be separately priced
- refund rules must be clear

---

### 8.3 Subscription Add-On

Used for:

- continuously updated solutions
- monitoring dashboards
- GEO tracking packs
- advanced analytics
- compliance evidence packs
- high-support partner solutions

Rules:

- billing period must be clear
- cancellation must be clear
- entitlements must update immediately after cancellation
- renewal reminders should be plan-aware

---

### 8.4 Usage-Based Marketplace Add-On

Used for:

- AI-heavy add-ons
- monitoring APIs
- data sync enrichments
- partner APIs
- marketplace automation services

Rules:

- cost forecast required before activation
- budget controls required
- overage rules required
- Smart plan may allow higher limits
- Basic should not expose high-risk usage-based add-ons without guardrails

---

### 8.5 Revenue Share Solution

Used when Ariyo and partner share revenue from a solution.

Rules:

- partner revenue share must be recorded per transaction
- platform fee must be explicit internally
- customer price must remain transparent
- disputes must have audit trail

---

### 8.6 Lead Referral Fee

Used when the marketplace routes a customer to a partner service.

Rules:

- track referral attribution
- define qualified lead
- define closed-won event
- define payout trigger
- prevent self-referral and fake leads

---

### 8.7 Implementation Service Fee

Used when partner delivers service.

Rules:

- separate software subscription from service fee
- define scope
- define delivery milestones
- define customer acceptance criteria
- define refund/dispute policy

---

## 9. Basic / Pro / Smart Marketplace Access

Marketplace economy must align with Ariyo plan tiers.

### 9.1 Basic Marketplace Experience

Basic users should receive a useful but controlled marketplace.

Basic may access:

- free starter templates
- limited AI employee templates
- limited workflow templates
- basic knowledge packs
- low-risk setup guides
- simple partner services
- Ariyo-created starter packs

Basic should not access by default:

- high-volume automation bundles
- advanced integration bundles
- multi-agent solutions
- high-cost AI monitoring packs
- advanced GEO API products
- enterprise compliance add-ons
- custom partner implementations without upgrade prompt

Basic marketplace controls:

- show plan limits clearly
- recommend upgrade when asset requires Pro/Smart
- estimate cost before install
- prevent hidden usage-based spend
- default to safe AI models
- default to manual review

---

### 9.2 Pro Marketplace Experience

Pro users should access operational marketplace assets.

Pro may access:

- operational AI employee templates
- workflow templates
- integration bundles
- industry starter bundles
- partner service listings
- paid templates
- subscription add-ons
- moderate usage-based add-ons
- business dashboards
- curated collections

Pro controls:

- budget warnings
- workflow cost estimates
- partner support options
- install readiness checks
- permission-aware setup
- human review defaults for risky assets
- refund/dispute workflow

---

### 9.3 Smart Marketplace Experience

Smart users should access the fullest ecosystem.

Smart may access:

- advanced AI employee bundles
- multi-employee workflow systems
- full integration bundles
- advanced GEO/API add-ons
- advanced analytics add-ons
- enterprise-ready solution packs
- premium partner services
- high-capability automation packages
- custom implementation listings
- early-access marketplace assets
- marketplace intelligence dashboard

Smart controls:

- predictive cost impact
- advanced security review indicators
- AI risk score
- automation blast-radius warning
- approval gates
- high-volume throttling
- downgrade suggestions when ROI is low
- premium support routing

Smart means more power, not unlimited risk.

---

## 10. Revenue Share Rules

Revenue share must be transparent internally, auditable, and resistant to manipulation.

### 10.1 Standard Revenue Split

Ariyo should support configurable revenue splits.

Example internal defaults:

```json
{
  "asset_type": "template",
  "creator_share_percent": 70,
  "ariyo_platform_fee_percent": 30
}
```

```json
{
  "asset_type": "partner_service",
  "partner_share_percent": 85,
  "ariyo_referral_fee_percent": 15
}
```

```json
{
  "asset_type": "subscription_add_on",
  "creator_share_percent": 60,
  "ariyo_platform_fee_percent": 40
}
```

These numbers are examples and should be configurable by marketplace policy.

---

### 10.2 Revenue Share Variables

Revenue share may vary by:

- asset type
- creator tier
- partner certification level
- support responsibility
- refund rate
- platform cost burden
- AI compute cost burden
- marketplace promotion level
- enterprise contract terms
- region
- tax handling

---

### 10.3 Marketplace Fee Logic

Ariyo platform fee compensates for:

- marketplace distribution
- billing infrastructure
- fraud detection
- review process
- hosting
- usage tracking
- trust layer
- support tooling
- ranking
- customer acquisition
- payment processing overhead

Ariyo must not hide fees from creators.

---

## 11. Creator Payout System

### 11.1 Payout States

```text
pending
available
scheduled
processing
paid
held
disputed
reversed
failed
```

---

### 11.2 Payout Hold Rules

Payouts may be held when:

- customer refund window is open
- fraud review is active
- tax/KYC information is incomplete
- support dispute is unresolved
- listing is suspended
- chargeback risk exists
- creator violated policy

---

### 11.3 Payout Calculation

Payout calculation must consider:

- gross sale amount
- discounts
- refunds
- chargebacks
- taxes
- payment processing fees
- Ariyo platform fee
- partner commission
- affiliate attribution
- currency conversion

Example payout record:

```json
{
  "payout_id": "payout_123",
  "creator_id": "creator_456",
  "currency": "USD",
  "gross_amount": 1000,
  "refund_amount": 0,
  "tax_amount": 0,
  "payment_fee": 29,
  "platform_fee": 300,
  "net_creator_amount": 671,
  "status": "available",
  "available_at": "2026-07-01T00:00:00Z"
}
```

---

## 12. Creator Tiers

Marketplace creators should have tiers based on trust and performance.

```text
applicant
approved_creator
verified_creator
certified_partner
premium_partner
strategic_partner
suspended_creator
```

### 12.1 Applicant

Can submit assets for review but cannot publish automatically.

---

### 12.2 Approved Creator

Can publish after review.

---

### 12.3 Verified Creator

Has identity, payment, and quality history verified.

---

### 12.4 Certified Partner

Has completed Ariyo certification and may offer services.

---

### 12.5 Premium Partner

Has strong performance, low dispute rate, and may access co-marketing.

---

### 12.6 Strategic Partner

Has contractual agreement and deeper marketplace privileges.

---

## 13. Marketplace Review & Approval

Every listing must pass review before publication.

### 13.1 Review Dimensions

Review must evaluate:

- product clarity
- installation safety
- AI safety
- prompt quality
- integration permission scope
- data handling
- security risk
- pricing clarity
- support readiness
- claims accuracy
- documentation quality
- performance impact
- plan compatibility
- refund/dispute clarity

---

### 13.2 Review Outcomes

```text
approved
approved_with_conditions
needs_changes
rejected
suspended_pending_investigation
```

---

### 13.3 High-Risk Asset Review

High-risk assets require deeper review.

High-risk indicators:

- sends messages externally
- updates CRM records
- touches billing/payment systems
- processes sensitive data
- uses broad integration scopes
- triggers workflows automatically
- uses multi-agent orchestration
- requires high AI cost
- makes compliance-related claims
- provides legal/financial/medical advice

High-risk assets must route through human review before publication.

---

## 14. Marketplace Quality Score

Ariyo must compute a marketplace quality score for ranking and trust.

Quality score should include:

- install success rate
- uninstall rate
- refund rate
- support response quality
- customer rating
- review completion
- documentation completeness
- AI safety score
- security review score
- cost predictability
- incident history
- version freshness
- outcome evidence

Example score model:

```json
{
  "listing_id": "listing_123",
  "quality_score": 88,
  "components": {
    "install_success": 92,
    "customer_rating": 86,
    "refund_health": 95,
    "support_quality": 80,
    "safety_review": 90,
    "documentation": 85,
    "cost_predictability": 84,
    "outcome_evidence": 76
  }
}
```

The exact formula may evolve, but the score must never be purely based on sales volume.

---

## 15. Ranking System

Marketplace ranking must balance relevance, quality, trust, and business goals.

### 15.1 Ranking Signals

Ranking should consider:

- query relevance
- ICP match
- industry match
- plan compatibility
- language/locale
- quality score
- review score
- install success
- customer outcomes
- recent freshness
- partner certification
- support quality
- low incident rate
- cost predictability
- customer plan tier
- organization maturity
- integration availability

---

### 15.2 Ranking Must Not Overweight

Ranking must not over-optimize for:

- paid promotion alone
- highest commission only
- newest listing only
- raw install count only
- creator popularity only
- AI-generated listing text quality alone

---

### 15.3 Sponsored Listings

If sponsored listings exist, they must be clearly labeled.

Rules:

- sponsored cannot bypass review
- sponsored cannot outrank unsafe or low-quality assets
- sponsored must remain relevant
- sponsored status must be disclosed

---

### 15.4 Personalized Ranking

Personalization may use:

- plan tier
- installed integrations
- active AI employees
- industry
- business goals
- onboarding state
- previous installs
- admin permissions
- language preference

Personalization must not expose sensitive data to creators.

---

## 16. Marketplace Trust Controls

Trust is the marketplace's core asset.

### 16.1 Trust Badges

Listings may display trust badges such as:

```text
Ariyo Verified
Security Reviewed
AI Safety Reviewed
Integration Safe
Low Cost Impact
High Customer Rating
Certified Partner
Enterprise Ready
Smart Optimized
```

Badges must be evidence-backed.

---

### 16.2 Claims Policy

Creators must not claim:

- guaranteed revenue
- guaranteed AI ranking
- guaranteed legal compliance
- guaranteed cost savings without evidence
- guaranteed customer conversion
- impossible-to-hack security
- unlimited automation
- official provider partnership without proof

---

### 16.3 Evidence Requirements

High-value claims require evidence.

Examples:

- case studies
- benchmark results
- customer testimonials
- before/after metrics
- install success rate
- support SLA
- security review outcome

---

## 17. Fraud & Abuse Prevention

Marketplace abuse must be designed against from day one.

### 17.1 Abuse Types

Potential abuse includes:

- fake installs
- fake reviews
- self-referrals
- duplicate listings
- deceptive screenshots
- unauthorized brand use
- stolen templates
- malicious payloads
- overbroad integration scopes
- hidden cost generation
- refund abuse
- payout fraud
- affiliate fraud
- review manipulation
- AI-generated spam listings

---

### 17.2 Fraud Signals

Fraud detection should monitor:

- abnormal install velocity
- repeated installs from related accounts
- rating spikes
- suspicious refund patterns
- creator account changes before payout
- repeated payment failures
- support complaints
- hidden external links
- repeated policy warnings

---

### 17.3 Fraud Responses

Actions include:

```text
soft_warning
listing_hold
payout_hold
manual_review
ranking_suppression
temporary_suspension
creator_suspension
customer_refund
legal_escalation
```

---

## 18. Install & Entitlement Rules

### 18.1 Install Flow

Before install, Ariyo must show:

- what will be installed
- what plan is required
- what permissions are needed
- what integrations are needed
- expected AI cost impact
- risk level
- human review requirements
- setup steps
- who can manage it

---

### 18.2 Install Readiness Checks

Install should validate:

- plan compatibility
- admin permissions
- billing status
- integration availability
- required scopes
- required knowledge source
- cost budget availability
- security policy compatibility
- region restrictions

---

### 18.3 Entitlements

Installed assets must create entitlements.

Entitlements control:

- access to asset
- usage limits
- updates
- support
- seats
- workspaces
- AI employee compatibility
- upgrade path
- cancellation behavior

---

### 18.4 Uninstall Rules

Uninstall must:

- show impact
- preserve audit logs
- stop future workflow triggers
- revoke unused permissions
- preserve customer data according to policy
- stop billing when applicable
- offer export when relevant

---

## 19. Bundles & Collections

### 19.1 Solution Bundles

Bundles combine multiple marketplace assets.

Example:

```json
{
  "bundle_id": "bundle_ecommerce_ops",
  "title": "E-commerce AI Operations Bundle",
  "included_assets": [
    "shopify_support_employee",
    "order_status_workflow",
    "refund_policy_knowledge_pack",
    "whatsapp_channel_bundle"
  ],
  "recommended_plan": "smart",
  "setup_time_estimate_minutes": 45,
  "risk_level": "medium"
}
```

---

### 19.2 Collections

Collections are curated marketplace pages.

Examples:

- Best for Basic users
- Start with Support AI
- Smart plan automation packs
- Popular for agencies
- Enterprise-ready bundles
- E-commerce launch kit

Collections should be curated by value and trust, not just sales.

---

## 20. Marketplace Analytics

Marketplace analytics must connect supply, demand, quality, and revenue.

### 20.1 Marketplace Metrics

Track:

- listing views
- install starts
- install completions
- install failures
- purchases
- refunds
- subscription starts
- subscription churn
- creator revenue
- Ariyo revenue
- attach rate to plans
- upgrade conversions
- asset activation rate
- outcome success rate
- partner response time
- support tickets
- marketplace NPS

---

### 20.2 Creator Dashboard Metrics

Creators should see:

- listing views
- conversion rate
- installs
- revenue
- refunds
- ratings
- support issues
- quality score
- ranking category
- customer feedback
- payout status

Creators should not see customer-sensitive data.

---

### 20.3 Ariyo Operator Dashboard

Marketplace operators need:

- marketplace GMV
- net revenue
- top listings
- risky listings
- pending reviews
- fraud signals
- payout liability
- refund rate
- creator growth
- partner performance
- quality score distribution
- plan conversion impact

---

## 21. Marketplace API Surface

Marketplace APIs must be stable and permission-aware.

### 21.1 Public Catalog API

```http
GET /api/v1/marketplace/listings
```

Query parameters:

```text
q
category
asset_type
plan
industry
locale
risk_level
pricing_model
creator_type
sort
page
limit
```

Response:

```json
{
  "data": [
    {
      "id": "listing_123",
      "title": "Shopify Support AI Employee",
      "asset_type": "ai_employee_template",
      "recommended_plan": "pro",
      "pricing_model": "one_time",
      "price": { "amount": 4900, "currency": "USD" },
      "quality_score": 88,
      "rating": 4.7,
      "install_count": 128,
      "badges": ["AI Safety Reviewed", "Certified Partner"]
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 143
  }
}
```

---

### 21.2 Listing Detail API

```http
GET /api/v1/marketplace/listings/{listing_id}
```

Must return:

- listing content
- pricing
- creator
- compatibility
- required permissions
- required integrations
- cost estimate
- risk level
- reviews
- version
- support options

---

### 21.3 Install Preview API

```http
POST /api/v1/marketplace/listings/{listing_id}/install-preview
```

Request:

```json
{
  "organization_id": "org_123",
  "workspace_id": "workspace_123",
  "target_ai_employee_id": "employee_123"
}
```

Response:

```json
{
  "can_install": false,
  "required_plan": "pro",
  "current_plan": "basic",
  "missing_permissions": ["integration:connect"],
  "missing_integrations": ["shopify"],
  "estimated_monthly_ai_cost": {
    "band": "medium",
    "range": { "min": 20, "max": 80, "currency": "USD" }
  },
  "risk_level": "medium",
  "upgrade_required": true,
  "messages": [
    "This solution requires Pro because it uses integration workflows and automated customer responses."
  ]
}
```

---

### 21.4 Install API

```http
POST /api/v1/marketplace/listings/{listing_id}/install
```

Must enforce:

- authentication
- organization admin permission
- billing entitlement
- plan compatibility
- required approvals
- idempotency key

---

### 21.5 Creator Submission API

```http
POST /api/v1/marketplace/creator/listings
```

Must validate:

- creator status
- schema
- claims
- pricing
- payload safety
- required documentation

---

### 21.6 Review API

```http
POST /api/v1/marketplace/admin/listings/{listing_id}/review
```

Request:

```json
{
  "decision": "needs_changes",
  "review_notes": "The listing requires clearer cost disclosure and narrower integration scopes.",
  "required_changes": [
    "Add estimated monthly AI cost band",
    "Replace orders:write with orders:read unless write action is required"
  ]
}
```

---

## 22. Webhooks

Marketplace webhooks allow external systems and creators to react to lifecycle changes.

### 22.1 Supported Events

```text
marketplace.listing.published
marketplace.listing.suspended
marketplace.listing.installed
marketplace.listing.uninstalled
marketplace.purchase.completed
marketplace.purchase.refunded
marketplace.subscription.started
marketplace.subscription.cancelled
marketplace.payout.available
marketplace.payout.paid
marketplace.review.created
marketplace.quality_score.changed
marketplace.dispute.opened
marketplace.dispute.resolved
```

---

### 22.2 Webhook Security

All webhooks must include:

- event ID
- timestamp
- signature
- replay protection
- retry policy
- idempotency guidance

Payload example:

```json
{
  "event_id": "evt_123",
  "type": "marketplace.purchase.completed",
  "created_at": "2026-06-18T10:00:00Z",
  "data": {
    "listing_id": "listing_123",
    "purchase_id": "purchase_123",
    "creator_id": "creator_456",
    "amount": 4900,
    "currency": "USD"
  }
}
```

---

## 23. Marketplace Frontend Requirements

Marketplace UI must be clear, premium, and trust-centered.

### 23.1 Listing Card

Must show:

- title
- short outcome
- asset type
- price
- recommended plan
- badges
- quality score or trust signal
- rating
- install count
- risk indicator when relevant

---

### 23.2 Listing Detail Page

Must show:

- problem solved
- what is included
- setup requirements
- permissions
- integrations
- plan compatibility
- cost estimate
- screenshots/demo
- creator profile
- reviews
- support options
- refund policy
- install CTA

There must be one primary CTA.

---

### 23.3 Install Confirmation

Before install, show:

```text
This will install:
- 1 AI employee template
- 2 workflow templates
- 1 knowledge pack
- Shopify integration requirements
- Estimated AI cost impact: Medium
- Review mode: Required before sending customer replies
```

---

### 23.4 Plan Upgrade Messaging

If asset requires a higher plan:

Good copy:

```text
This solution requires Pro because it uses integration workflows and automated customer response controls.
```

Bad copy:

```text
Upgrade to continue.
```

---

## 24. Marketplace Backend Requirements

Backend must enforce:

- plan entitlements
- payment state
- creator permissions
- listing status
- install permissions
- usage limits
- payout holds
- refund logic
- fraud rules
- ranking calculations
- webhook delivery
- audit logs

Frontend must never be the source of truth for marketplace permissions.

---

## 25. Marketplace Security Rules

Marketplace assets must not:

- execute arbitrary code
- access customer data outside declared scopes
- hide external API calls
- bypass review gates
- bypass AI cost controls
- store secrets in asset payloads
- exfiltrate knowledge sources
- request excessive permissions
- modify billing without explicit permission
- create unbounded workflows

---

## 26. Marketplace Data Privacy Rules

Creators must not receive:

- raw customer data
- customer knowledge content
- private conversation logs
- integration tokens
- billing details
- personal data unless explicitly required and approved

Marketplace analytics shared with creators must be aggregated and privacy-safe.

---

## 27. Marketplace Disputes & Refunds

Refund and dispute flows must be clear.

### 27.1 Refund Reasons

```text
not_as_described
failed_to_install
quality_issue
unexpected_cost
support_issue
duplicate_purchase
fraudulent_purchase
other
```

---

### 27.2 Dispute Evidence

Evidence may include:

- install logs
- customer screenshots
- support messages
- version history
- listing claims
- refund policy
- usage logs

Dispute handling must be auditable.

---

## 28. Marketplace Governance Board

Ariyo should maintain a marketplace governance process covering:

- listing review policy
- creator policy
- revenue share rules
- prohibited content
- security review
- payout risk
- ranking fairness
- customer harm review
- fraud escalation

---

## 29. Marketplace Growth Loops

### 29.1 Customer Growth Loop

Customer installs asset → gets value faster → leaves review → listing ranks higher → more installs.

---

### 29.2 Creator Growth Loop

Creator publishes asset → earns revenue → improves asset → gains trust badge → gets more distribution.

---

### 29.3 Partner Growth Loop

Partner delivers service → customer succeeds → partner receives rating → partner gets more leads → partner brings new customers.

---

### 29.4 Platform Growth Loop

More assets → more customer value → more subscriptions → more creators → deeper ecosystem → stronger moat.

---

## 30. Marketplace Moat

Ariyo's marketplace moat should come from:

- business outcome data
- AI employee install base
- workflow templates
- industry bundles
- partner network
- trust scores
- integration depth
- creator revenue incentives
- customer reviews
- deployment telemetry
- cost intelligence
- safety evaluation data
- marketplace ranking relevance

The moat is not asset quantity alone.

---

## 31. Required Marketplace Events

Marketplace events must follow `observability-analytics-events.md`.

Required events:

```text
marketplace_listing_viewed
marketplace_listing_clicked
marketplace_install_started
marketplace_install_previewed
marketplace_install_blocked
marketplace_install_completed
marketplace_install_failed
marketplace_purchase_started
marketplace_purchase_completed
marketplace_purchase_refunded
marketplace_review_submitted
marketplace_listing_submitted
marketplace_listing_approved
marketplace_listing_rejected
marketplace_listing_suspended
marketplace_payout_created
marketplace_payout_paid
marketplace_partner_lead_created
marketplace_partner_lead_converted
```

Each event must include:

- organization ID
- user ID when allowed
- listing ID
- asset type
- creator ID
- plan tier
- source
- correlation ID
- privacy-safe metadata

---

## 32. Marketplace Testing Requirements

Tests must cover:

- listing creation
- listing review
- publish lifecycle
- plan compatibility
- install preview
- install success
- install failure
- entitlement creation
- payment success
- refund
- payout calculation
- payout hold
- ranking logic
- fraud signal
- webhook signature
- creator permissions
- admin permissions
- uninstallation
- suspended listing behavior
- version upgrade

---

## 33. Marketplace Launch Strategy

### 33.1 Phase 1: Ariyo-Owned Assets

Start with Ariyo-created templates and bundles.

Goal:

- control quality
- validate marketplace UX
- prove install flows
- learn pricing
- create customer trust

---

### 33.2 Phase 2: Invite-Only Creators

Allow selected consultants and agencies.

Goal:

- validate creator flow
- refine review process
- build partner supply
- test payouts

---

### 33.3 Phase 3: Certified Partner Marketplace

Open to certified partners.

Goal:

- grow ecosystem
- create service revenue
- support industry verticals

---

### 33.4 Phase 4: Broader Marketplace

Expand creator access with strict review.

Goal:

- scale supply
- increase marketplace GMV
- improve long-tail use cases

---

## 34. Forbidden Marketplace Patterns

Never:

- treat marketplace as a random template gallery
- allow unreviewed AI employees to be published
- allow hidden integration permissions
- allow hidden usage-based cost
- allow creators to access customer data by default
- rank listings only by revenue
- hide sponsored placement
- allow fake reviews
- allow payout before fraud/refund checks
- publish assets without support owner
- show vague pricing
- bypass Basic/Pro/Smart entitlements
- allow unsafe prompt packs
- allow overbroad OAuth scopes
- allow listing claims without evidence
- allow external checkout without policy
- let frontend enforce marketplace permissions only
- let marketplace assets bypass human review
- let marketplace assets bypass AI safety evaluation
- let suspended creators publish through duplicate accounts

---

## 35. Final Rule

Ariyo marketplace economy must turn ecosystem participation into trusted business value.

If a marketplace feature increases supply but reduces trust, clarity, safety, pricing integrity, or customer outcomes, it must not ship.

Marketplace growth is only healthy when customers get measurable value, creators earn fairly, partners deliver responsibly, and Ariyo protects the platform.
