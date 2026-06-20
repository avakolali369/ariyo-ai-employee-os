# Ariyo Finance & Accounting Controls Skill

## 1. Core Contract

Ariyo finance controls are not back-office paperwork.

Ariyo finance controls are the operating layer that makes revenue, invoices, taxes, refunds, payouts, commissions, AI costs, marketplace earnings, and cash visibility trustworthy enough for scale.

Every financial action in Ariyo must be traceable, reversible when appropriate, reconciled against the payment provider, tied to the correct organization, mapped to the correct plan or entitlement, and explainable to customers, support, finance, auditors, and leadership.

Ariyo must not treat money movement as a UI event.

Money movement must be governed by backend state, payment provider evidence, immutable audit trails, authorization controls, reconciliation jobs, accounting exports, and clear operational ownership.

This skill is not accounting, tax, or legal advice. It is a product and engineering control framework that must be reviewed by qualified finance, tax, and legal professionals before being used for statutory reporting, tax filing, investor reporting, or customer-facing financial commitments.

---

## 2. Purpose

This skill defines how Ariyo should design financial, billing, accounting, payout, and control systems so the product can scale without creating revenue leakage, tax risk, payout disputes, billing confusion, accounting chaos, or customer trust issues.

It applies to:

- subscription billing
- Basic, Pro, and Smart plan financial behavior
- add-ons
- usage-based AI charges
- GEO API usage
- marketplace purchases
- partner commissions
- creator payouts
- refunds
- credits
- discounts
- invoices
- receipts
- tax readiness
- revenue recognition support
- accounting exports
- cashflow visibility
- financial audit trails
- internal finance approvals
- reconciliation between Ariyo, payment providers, banks, and accounting systems

---

## 3. Dependencies

This skill depends on and must not contradict:

- `monetization-billing.md`
- `pricing-packaging-strategy.md`
- `ai-cost-control.md`
- `revenue-operations-system.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `legal-pages-policy-system.md`
- `compliance-legal-risk.md`
- `ecosystem-marketplace-economy.md`
- `community-partner-growth.md`
- `sales-crm-pipeline-system.md`
- `observability-analytics-events.md`
- `admin-permissions.md`
- `api-contracts.md`
- `backend-architecture.md`
- `quality-assurance-system.md`

If there is conflict, financial safety and auditability win over convenience.

---

## 4. Finance Design Principles

### 4.1 Backend Is Source of Truth

The frontend may display invoices, plan state, balances, usage, credits, payouts, and financial summaries.

The frontend must never be the source of truth for:

- invoice totals
- tax amounts
- refund eligibility
- payout amounts
- commissions
- subscription status
- entitlement activation
- revenue metrics
- ledger events
- accounting exports

### 4.2 Provider Evidence Required

Ariyo must not mark a payment, refund, payout, or dispute as final unless provider evidence exists.

Acceptable evidence includes:

- payment provider event ID
- payment intent ID
- charge ID
- invoice ID
- refund ID
- payout ID
- bank settlement record
- verified webhook event
- reconciled provider export

### 4.3 Immutable Financial History

Ariyo must not silently edit historical financial records.

Corrections must use:

- credit notes
- adjustment records
- reversal records
- correction journal entries
- refund records
- replacement invoices where legally appropriate

### 4.4 Organization Boundary First

Every financial object must be organization-scoped.

Ariyo must never allow one organization to view, export, refund, pay, or reconcile another organization's financial data.

### 4.5 Plan-Aware Financial Controls

Basic, Pro, and Smart must not only differ in product features.

They must also differ in:

- invoice detail
- usage transparency
- billing controls
- cost alerts
- purchasing authority
- support for purchase orders
- budget approval workflows
- accounting export detail
- reporting depth
- marketplace and payout access

### 4.6 Finance Controls Must Protect Growth

Controls must not make buying difficult.

Ariyo must make the first purchase easy, upgrades clear, invoices understandable, and payments reliable while protecting against fraud, leakage, incorrect taxes, refund abuse, payout disputes, and uncontrolled AI spend.

---

## 5. Plan-Aware Finance Experience

Ariyo must make the financial experience clear to customers.

### 5.1 Basic Finance Experience

Basic is for simple, low-risk entry.

Basic should include:

- self-serve card payment
- monthly subscription invoice or receipt
- clear included limits
- simple AI usage visibility
- automatic payment retry
- basic refund and cancellation flow
- simple invoice download
- no complex custom contracts
- no purchase order workflow by default
- no advanced accounting exports
- no multi-entity billing
- limited marketplace spend
- simple budget cap

Basic must avoid financial complexity.

Basic customers should understand:

> "You have a safe, predictable AI employee starter plan with clear limits and no surprise spend."

### 5.2 Pro Finance Experience

Pro is for operational teams.

Pro should include:

- team billing
- plan upgrade and downgrade management
- add-ons
- usage breakdown by AI employee
- usage breakdown by workflow
- AI cost budget alerts
- invoice line detail
- tax invoice support where required
- manual invoice email recipients
- limited billing roles
- credit notes
- refund governance
- billing history
- payment method management
- basic accounting export
- marketplace purchase visibility
- partner attribution support
- monthly spend summary

Pro customers should understand:

> "You can run Ariyo operationally with team-level billing, usage visibility, cost controls, and finance-ready records."

### 5.3 Smart Finance Experience

Smart is for advanced, premium, full-option usage.

Smart should include:

- advanced AI usage attribution
- predictive AI spend forecasting
- advanced budget controls
- approval workflows for high-cost AI actions
- custom billing contacts
- purchase order support where offered
- annual contracts where offered
- advanced invoice detail
- department/team cost centers
- marketplace and partner spend reporting
- payout and commission reporting where applicable
- enterprise-style accounting exports
- finance admin dashboard
- contract value tracking
- renewal and expansion financial signals
- AI margin visibility
- API-level finance exports
- custom finance reporting where contractually included

Smart customers should understand:

> "You get the most intelligent Ariyo experience with the deepest financial visibility, control, and governance."

Smart must never mean unlimited uncontrolled spend.

Smart means advanced capability plus advanced financial controls.

---

## 6. Financial Domain Model

Ariyo should model financial operations explicitly.

### 6.1 Core Entities

Required entities:

```ts
Organization
BillingAccount
BillingProfile
Plan
PlanEntitlement
Subscription
SubscriptionItem
Addon
UsageRecord
UsageMeter
Invoice
InvoiceLine
TaxCalculation
PaymentMethod
PaymentAttempt
PaymentTransaction
CreditNote
Refund
Chargeback
Discount
Coupon
Promotion
Contract
PurchaseOrder
RevenueSchedule
LedgerEntry
AccountingExport
ReconciliationRun
PayoutAccount
Payout
PayoutLine
CommissionRule
CommissionEarning
MarketplaceOrder
MarketplaceSettlement
FiscalPeriod
CloseChecklist
FinanceApproval
FinanceAuditEvent
```

### 6.2 BillingAccount

A `BillingAccount` must define:

```json
{
  "id": "ba_123",
  "organization_id": "org_123",
  "billing_owner_user_id": "usr_123",
  "billing_email": "finance@example.com",
  "plan": "pro",
  "billing_currency": "USD",
  "billing_country": "DE",
  "tax_region": "EU",
  "tax_id": "DE123456789",
  "payment_terms": "card_auto_charge",
  "status": "active"
}
```

### 6.3 Invoice

An `Invoice` must include:

```json
{
  "id": "inv_123",
  "organization_id": "org_123",
  "billing_account_id": "ba_123",
  "provider_invoice_id": "stripe_inv_123",
  "invoice_number": "ARIYO-2026-000123",
  "status": "paid",
  "currency": "USD",
  "subtotal_amount": 9900,
  "discount_amount": 1000,
  "tax_amount": 890,
  "total_amount": 9790,
  "amount_due": 0,
  "period_start": "2026-06-01",
  "period_end": "2026-06-30",
  "issued_at": "2026-06-01T00:00:00Z",
  "paid_at": "2026-06-01T00:05:00Z",
  "lines": []
}
```

### 6.4 InvoiceLine

An `InvoiceLine` must identify what the customer paid for:

```json
{
  "id": "il_123",
  "invoice_id": "inv_123",
  "line_type": "subscription",
  "description": "Ariyo Pro monthly subscription",
  "plan": "pro",
  "quantity": 1,
  "unit_amount": 9900,
  "subtotal_amount": 9900,
  "tax_amount": 890,
  "total_amount": 10790,
  "service_period_start": "2026-06-01",
  "service_period_end": "2026-06-30",
  "revenue_category": "subscription_recurring"
}
```

Line types:

```text
subscription
addon
usage_ai
usage_geo_api
marketplace_purchase
partner_service
credit
refund_adjustment
discount
tax
manual_adjustment
```

### 6.5 LedgerEntry

Ariyo is not required to become a full accounting system in MVP, but it must generate reliable financial event records.

Ledger entries must be append-only.

```json
{
  "id": "le_123",
  "organization_id": "org_123",
  "source_type": "invoice",
  "source_id": "inv_123",
  "entry_type": "invoice_issued",
  "currency": "USD",
  "amount": 10790,
  "occurred_at": "2026-06-01T00:00:00Z",
  "provider_reference": "stripe_inv_123",
  "created_by": "system",
  "audit_event_id": "fae_123"
}
```

### 6.6 FinanceAuditEvent

Every sensitive finance action must create a finance audit event.

```json
{
  "id": "fae_123",
  "organization_id": "org_123",
  "actor_type": "user",
  "actor_id": "usr_123",
  "action": "refund_approved",
  "target_type": "refund",
  "target_id": "ref_123",
  "reason": "Customer duplicate charge",
  "before": {},
  "after": {},
  "ip_address": "203.0.113.10",
  "created_at": "2026-06-18T12:00:00Z"
}
```

---

## 7. Invoice Integrity

### 7.1 Invoice Rules

Ariyo invoices must be:

- uniquely numbered
- organization-scoped
- currency-specific
- period-specific
- tied to provider records
- immutable after issue except through correction mechanisms
- downloadable by authorized billing users
- visible in billing history
- tied to subscription, usage, marketplace, tax, credits, and refunds

### 7.2 Invoice Numbering

Invoice numbers must be generated server-side.

Do not generate invoice numbers in the frontend.

Recommended pattern:

```text
ARIYO-{YEAR}-{SEQUENCE}
ARIYO-2026-000001
```

If local tax law requires jurisdiction-specific invoice numbering, that requirement overrides the generic pattern.

### 7.3 Invoice Statuses

```text
draft
issued
open
paid
partially_paid
void
uncollectible
refunded
partially_refunded
disputed
corrected
```

### 7.4 Invoice Correction

Ariyo must never silently mutate an issued invoice.

Allowed correction approaches:

- void draft invoice before issue
- issue credit note
- issue corrected invoice
- create adjustment line on next invoice where permitted
- refund payment and record refund

### 7.5 Invoice UI Requirements

Invoice pages must show:

- invoice number
- billing organization
- billing period
- plan
- add-ons
- usage
- tax
- discounts
- credits
- total
- payment status
- payment method summary
- downloadable PDF/HTML receipt
- support link for billing questions

Never show raw provider errors to customers.

---

## 8. Tax Readiness

### 8.1 Tax Readiness Contract

Ariyo must be tax-ready before operating at scale.

Tax readiness means the product can collect the data needed for proper tax handling and can integrate with specialized tax systems when required.

This skill does not define tax law.

It defines what Ariyo must capture and control.

### 8.2 Required Tax Data

Ariyo should support:

- billing country
- billing region/state
- billing postal code
- business vs consumer status
- tax ID / VAT ID where relevant
- tax exemption status
- validated tax IDs where required
- place of supply indicators where required
- invoice tax breakdown
- reverse charge indicators where required
- tax calculation provider reference

### 8.3 TaxCalculation Entity

```json
{
  "id": "tax_123",
  "organization_id": "org_123",
  "invoice_id": "inv_123",
  "provider": "tax_provider",
  "provider_calculation_id": "calc_123",
  "tax_region": "EU",
  "tax_rate": 0.19,
  "tax_amount": 1881,
  "tax_behavior": "exclusive",
  "tax_label": "VAT",
  "reverse_charge": false,
  "created_at": "2026-06-01T00:00:00Z"
}
```

### 8.4 Tax UX

Billing setup must ask only for necessary tax data.

Customer-facing copy must be clear:

- "Add tax ID"
- "Tax may be calculated based on your billing location"
- "Invoice details can affect tax calculation"
- "Contact your tax advisor for tax treatment"

### 8.5 Forbidden Tax Patterns

```text
guessing tax rates in frontend
hardcoding tax by country without review
allowing users to edit tax amount manually
removing tax lines without audit trail
claiming tax compliance without evidence
using billing address only when product requires richer tax evidence
failing to store tax provider references
mixing tax-inclusive and tax-exclusive pricing without clear display
```

---

## 9. Revenue Recognition Support

### 9.1 Revenue Recognition Contract

Ariyo product systems must produce clean data that finance teams can use for revenue recognition.

Ariyo should not claim to automate statutory revenue recognition unless reviewed by accounting professionals.

### 9.2 Revenue Categories

Revenue must be categorized:

```text
subscription_recurring
subscription_annual
usage_ai
usage_geo_api
addon_recurring
addon_one_time
marketplace_platform_fee
marketplace_creator_pass_through
partner_service_fee
implementation_service
support_service
credit_adjustment
refund_adjustment
```

### 9.3 Service Periods

Every revenue line must include service period fields when applicable:

```json
{
  "service_period_start": "2026-06-01",
  "service_period_end": "2026-06-30"
}
```

This is required for:

- monthly subscriptions
- annual subscriptions
- prepaid usage
- add-ons
- service packages
- support packages

### 9.4 RevenueSchedule

```json
{
  "id": "rs_123",
  "invoice_line_id": "il_123",
  "revenue_category": "subscription_annual",
  "currency": "USD",
  "total_amount": 120000,
  "recognized_amount": 10000,
  "deferred_amount": 110000,
  "schedule_start": "2026-01-01",
  "schedule_end": "2026-12-31",
  "recognition_method": "straight_line_monthly",
  "review_required": true
}
```

### 9.5 Finance Export

Exports must include:

- invoice ID
- invoice line ID
- customer organization
- plan
- amount
- currency
- tax amount
- discount
- credit
- payment status
- service period
- revenue category
- provider reference
- contract reference where applicable

---

## 10. Refund Governance

### 10.1 Refund Contract

Refunds must be controlled, explainable, and auditable.

Ariyo must not allow arbitrary refunds without permission, policy checks, payment provider capability, and audit trail.

### 10.2 Refund Statuses

```text
requested
eligible
ineligible
pending_approval
approved
rejected
processing
succeeded
failed
cancelled
```

### 10.3 Refund Eligibility Inputs

Eligibility should consider:

- plan
- purchase type
- payment status
- refund window
- usage consumed
- marketplace rules
- partner service rules
- chargeback status
- customer history
- abuse signals
- legal or contractual exceptions

### 10.4 RefundApproval Rules

Refunds above configured thresholds require approval.

Example:

```text
Basic: support-approved refund under small threshold
Pro: billing admin/support manager approval for larger refund
Smart: finance/admin approval for contract or annual refunds
Marketplace: creator/platform settlement impact review
```

### 10.5 Refund Events

Required events:

```text
refund_requested
refund_eligibility_checked
refund_approval_required
refund_approved
refund_rejected
refund_submitted_to_provider
refund_succeeded
refund_failed
credit_note_issued
```

### 10.6 Refund UX

Refund UI must show:

- what is refundable
- what is not refundable
- expected processing time
- refund destination
- effect on subscription
- effect on credits
- effect on entitlements
- support contact

### 10.7 Forbidden Refund Patterns

```text
refunds without payment provider reference
refunds without audit event
refunds from frontend-only action
refunds that do not update invoice/credit state
refunds that ignore marketplace creator payout state
refunding already disputed payments without review
refunding after account deletion without retained financial evidence
silent refunds without customer communication
```

---

## 11. Credits, Discounts, Coupons, and Promotions

### 11.1 Credit Rules

Credits must be explicit financial objects.

Credits must define:

- organization
- amount
- currency
- reason
- expiration if any
- applicability
- creator
- approval status
- invoice application history

### 11.2 CreditNote

```json
{
  "id": "cn_123",
  "organization_id": "org_123",
  "invoice_id": "inv_123",
  "amount": 2500,
  "currency": "USD",
  "reason": "Service credit for incident",
  "status": "issued",
  "issued_by": "usr_admin",
  "issued_at": "2026-06-18T12:00:00Z"
}
```

### 11.3 Discount Governance

Discounts must have:

- source
- owner
- eligibility criteria
- start date
- end date
- discount amount or percentage
- plan applicability
- renewal behavior
- approval rule
- audit event

### 11.4 Forbidden Discount Patterns

```text
permanent discounts without owner
manual discount in database without audit trail
coupon reuse without limits
discounts that break gross margin without approval
hidden discounts not visible to finance
discounts that do not appear in invoice line detail
```

---

## 12. Payment Operations

### 12.1 Payment States

```text
requires_payment_method
requires_confirmation
processing
succeeded
failed
cancelled
refunded
partially_refunded
disputed
```

### 12.2 Payment Retry

Ariyo must support retry logic for failed payments.

Retry logic must include:

- provider retry schedule
- customer notification
- grace period
- entitlement impact
- dunning workflow
- support escalation
- cancellation or downgrade logic

### 12.3 Payment Failure UX

Payment failure messaging must be helpful:

- explain the issue simply
- ask customer to update payment method
- show deadline before service impact
- avoid blaming customer
- show support path
- do not expose raw gateway error

### 12.4 Dunning Events

```text
payment_failed
payment_retry_scheduled
payment_method_update_requested
payment_recovered
subscription_grace_period_started
subscription_access_limited
subscription_cancelled_for_non_payment
```

---

## 13. Marketplace Payout Reconciliation

### 13.1 Marketplace Finance Contract

Marketplace money must be separated into platform revenue, creator earnings, partner commissions, taxes, refunds, and payment provider fees.

Ariyo must not calculate creator payouts from gross marketplace sales alone.

### 13.2 MarketplaceOrder Split

A marketplace order may create:

- customer charge
- platform fee
- creator earning
- partner commission
- tax line
- payment provider fee
- refund liability
- payout reserve

### 13.3 Payout Statuses

```text
pending
eligible
on_hold
approved
processing
paid
failed
cancelled
reversed
```

### 13.4 PayoutLine

```json
{
  "id": "pl_123",
  "payout_id": "po_123",
  "marketplace_order_id": "mo_123",
  "creator_id": "creator_123",
  "gross_amount": 10000,
  "platform_fee": 3000,
  "creator_net_amount": 7000,
  "currency": "USD",
  "status": "eligible"
}
```

### 13.5 Payout Hold Rules

Payouts should be held when:

- refund window is open
- dispute risk is high
- creator account is unverified
- tax information is missing
- fraud review is pending
- content/listing is under investigation
- payment provider payout failed

### 13.6 Payout Reconciliation

Ariyo must reconcile:

- marketplace orders
- payment provider charges
- platform fees
- creator payouts
- partner commissions
- refunds
- disputes
- bank settlement

### 13.7 Forbidden Marketplace Finance Patterns

```text
paying creators before payment settlement
paying creators without tax/payment verification
paying creators after refunded orders without reserve logic
combining customer funds and platform revenue without clear ledger records
manual payout outside provider without audit
commission calculation without source order reference
```

---

## 14. Partner and Sales Commission Controls

### 14.1 Commission Contract

Partner and sales commissions must be rule-driven, attributable, reviewable, and reconcilable.

### 14.2 CommissionRule

```json
{
  "id": "cr_123",
  "name": "Agency referral commission",
  "partner_tier": "certified_partner",
  "commission_type": "percentage_of_net_revenue",
  "rate": 0.2,
  "duration_months": 12,
  "applies_to": ["subscription_recurring", "addon_recurring"],
  "excludes": ["tax", "refund", "credits", "payment_fees"],
  "requires_active_customer": true
}
```

### 14.3 Commission Earning States

```text
pending
qualified
approved
payable
paid
reversed
disputed
```

### 14.4 Commission Reversal

Commissions may be reversed when:

- customer refunds
- payment fails
- chargeback occurs
- fraud is detected
- partner violates policy
- attribution was incorrect

---

## 15. AI Cost and Gross Margin Controls

### 15.1 AI Cost Must Connect to Finance

Ariyo must connect AI usage cost to financial visibility.

At minimum, Ariyo should track:

- AI cost by organization
- AI cost by plan
- AI cost by AI employee
- AI cost by workflow
- AI cost by model provider
- AI cost by feature
- AI cost by channel
- AI cost by marketplace asset
- AI cost by customer revenue

### 15.2 Margin Signals

Ariyo should calculate:

```text
gross_revenue
net_revenue_after_discounts
payment_fees
model_cost
integration_cost
support_cost_estimate
marketplace_payout
partner_commission
gross_margin_estimate
```

### 15.3 Margin Guardrails

Ariyo must alert when:

- organization AI cost exceeds budget threshold
- Smart usage becomes margin-negative
- model provider cost spikes
- GEO API usage spikes
- workflow loops cause runaway cost
- trial users consume unusual AI cost
- marketplace asset causes excessive model cost

### 15.4 Finance-Aware Upgrade Logic

Upgrade prompts must be value-based, not only limit-based.

Examples:

- Basic user repeatedly hits AI usage cap -> suggest Pro
- Pro customer uses high-value workflows with controlled spend -> suggest Smart
- Smart customer exceeds advanced automation usage -> suggest add-on or custom contract

---

## 16. Cashflow Visibility

### 16.1 Cashflow Contract

Ariyo leadership must be able to see expected and actual cash movement.

### 16.2 Required Metrics

```text
cash_collected_today
cash_collected_month_to_date
failed_payments_amount
open_invoices_amount
refunds_issued
chargebacks_amount
marketplace_payouts_pending
partner_commissions_payable
provider_fees_estimate
tax_collected_estimate
net_cash_after_payouts_estimate
```

### 16.3 Cashflow Dashboard

The finance dashboard should show:

- collected revenue
- pending invoices
- failed payments
- upcoming renewals
- refunds
- chargebacks
- payout liabilities
- commission liabilities
- AI cost estimate
- gross margin estimate
- cash risk alerts

---

## 17. Month-End Close Readiness

### 17.1 Close Contract

Ariyo must support a repeatable monthly financial close process.

### 17.2 Close Checklist

Recommended checklist:

```text
all invoices generated
all payment provider webhooks processed
failed payments reviewed
refunds reconciled
chargebacks reviewed
credits reviewed
discounts reviewed
marketplace payouts reconciled
partner commissions calculated
AI costs reconciled by provider
usage records finalized
accounting export generated
finance anomalies reviewed
close approved
```

### 17.3 CloseChecklist Entity

```json
{
  "id": "fc_2026_06",
  "period": "2026-06",
  "status": "in_progress",
  "items": [
    {
      "key": "refunds_reconciled",
      "status": "complete",
      "completed_by": "usr_finance",
      "completed_at": "2026-07-02T10:00:00Z"
    }
  ]
}
```

### 17.4 Close Statuses

```text
not_started
in_progress
blocked
ready_for_review
approved
locked
reopened
```

Locked periods must not be modified without finance admin approval.

---

## 18. Reconciliation System

### 18.1 Reconciliation Contract

Ariyo must reconcile internal financial state against external provider evidence.

### 18.2 Reconciliation Sources

Sources include:

- payment provider API
- payment provider webhook logs
- bank settlement exports
- tax provider reports
- accounting system exports
- marketplace payout provider
- partner commission system
- AI provider usage/cost exports

### 18.3 ReconciliationRun

```json
{
  "id": "rr_123",
  "period": "2026-06",
  "source": "stripe",
  "status": "completed_with_exceptions",
  "matched_count": 1200,
  "unmatched_internal_count": 3,
  "unmatched_provider_count": 2,
  "total_internal_amount": 5000000,
  "total_provider_amount": 4998500,
  "currency": "USD",
  "started_at": "2026-07-01T02:00:00Z",
  "completed_at": "2026-07-01T02:15:00Z"
}
```

### 18.4 Reconciliation Exception Types

```text
missing_provider_payment
missing_internal_invoice
amount_mismatch
currency_mismatch
duplicate_payment
unknown_refund
unmatched_payout
tax_mismatch
payment_fee_mismatch
usage_cost_mismatch
```

### 18.5 Reconciliation Alerts

Ariyo must alert finance/admin users when:

- unmatched amounts exceed threshold
- duplicate charges detected
- refunds not reflected in invoices
- payout settlement failed
- usage provider cost mismatch occurs
- tax provider amount differs from invoice tax

---

## 19. Accounting Export

### 19.1 Export Contract

Ariyo must export clean financial data for accounting workflows.

Exports must be:

- period-based
- immutable once locked
- downloadable by authorized users
- traceable to source records
- privacy-safe
- currency-aware
- tax-aware

### 19.2 Export Formats

MVP formats:

```text
CSV
JSON
```

Later formats:

```text
QuickBooks export
Xero export
NetSuite export
custom API export
```

### 19.3 Export Contents

Exports should include:

- customers
- invoices
- invoice lines
- payments
- refunds
- credits
- tax calculations
- revenue categories
- marketplace payouts
- partner commissions
- AI usage costs
- provider fees
- reconciliation exceptions

---

## 20. Finance Permissions

### 20.1 Finance Roles

Recommended roles:

```text
Owner
Billing Admin
Finance Admin
Finance Viewer
Support Billing Agent
Marketplace Finance Manager
Partner Finance Manager
Auditor
```

### 20.2 Permission Matrix

| Action | Owner | Billing Admin | Finance Admin | Finance Viewer | Support Billing Agent | Auditor |
|---|---:|---:|---:|---:|---:|---:|
| View invoices | Yes | Yes | Yes | Yes | Limited | Yes |
| Update payment method | Yes | Yes | No | No | No | No |
| Approve refund | Yes | Limited | Yes | No | Limited | No |
| Issue credit | Yes | Limited | Yes | No | Limited | No |
| Export accounting data | Yes | No | Yes | Yes | No | Yes |
| View payout details | Yes | No | Yes | Limited | No | Yes |
| Change billing plan | Yes | Yes | No | No | No | No |
| Lock fiscal period | No | No | Yes | No | No | No |

### 20.3 Sensitive Finance Actions

Sensitive actions require strong authorization:

- refund approval
- credit issuance
- payout release
- commission override
- invoice correction
- fiscal period reopen
- tax exemption change
- billing account ownership transfer
- custom discount approval

---

## 21. Finance API Requirements

### 21.1 API Authentication

Finance APIs must require:

- authenticated user
- organization scope
- role/permission check
- audit logging
- idempotency key for mutating money operations

### 21.2 Example Endpoints

```text
GET /api/billing/accounts/{billing_account_id}
GET /api/billing/invoices
GET /api/billing/invoices/{invoice_id}
POST /api/billing/payment-methods
POST /api/billing/refunds
POST /api/billing/credits
GET /api/finance/reconciliation-runs
POST /api/finance/reconciliation-runs
GET /api/finance/accounting-exports
POST /api/finance/accounting-exports
GET /api/finance/cashflow-summary
GET /api/finance/marketplace-payouts
POST /api/finance/marketplace-payouts/{payout_id}/approve
GET /api/finance/commission-earnings
```

### 21.3 Idempotency

Required for:

- creating payment transaction
- issuing refund
- issuing credit
- approving payout
- generating invoice
- creating accounting export
- running reconciliation

Use header:

```http
Idempotency-Key: 01J1XYZ...
```

### 21.4 Error Shape

```json
{
  "error": {
    "code": "refund_requires_approval",
    "message": "This refund requires finance approval before it can be processed.",
    "request_id": "req_123",
    "details": {
      "refund_id": "ref_123",
      "required_role": "finance_admin"
    }
  }
}
```

Do not expose provider secrets or raw gateway payloads.

---

## 22. Finance Webhooks

### 22.1 Incoming Provider Webhooks

All provider webhooks must use:

- signature verification
- timestamp tolerance
- replay protection
- idempotency
- event storage
- provider event ID uniqueness
- dead-letter queue
- retry strategy

### 22.2 Outgoing Customer Webhooks

Smart/Enterprise customers may receive finance webhooks if enabled.

Events:

```text
invoice.issued
invoice.paid
invoice.payment_failed
subscription.renewed
subscription.cancelled
refund.succeeded
credit_note.issued
usage.threshold_reached
budget.threshold_reached
```

### 22.3 Internal Finance Webhooks

Internal systems may listen for:

```text
reconciliation.completed
reconciliation.exception_detected
payout.ready_for_approval
commission.payable
month_close.ready_for_review
ai_margin_alert.triggered
```

---

## 23. Frontend Finance UX

### 23.1 Billing Settings

Billing settings must include:

- current plan
- next renewal date
- billing owner
- payment method
- invoice history
- tax details
- usage summary
- budget settings
- credits
- cancellation/downgrade path
- support contact

### 23.2 Finance Dashboard

For Pro/Smart:

- monthly spend
- AI cost summary
- invoice status
- upcoming renewal
- failed payment alerts
- usage by AI employee
- usage by workflow
- plan recommendation

For Smart:

- cost centers
- forecasted spend
- advanced accounting export
- marketplace spend
- partner spend
- AI margin insights where appropriate

### 23.3 Customer-Friendly Finance Copy

Use clear language:

```text
Your plan renews on July 1.
You are using 72% of your monthly AI budget.
This refund requires approval because it affects an annual invoice.
Your invoice is being prepared and will be available shortly.
Your payment failed. Update your payment method before June 25 to avoid service interruption.
```

Avoid:

```text
PaymentIntent requires_action failed with code card_declined.
Proration adjustment object mismatch.
Ledger sync exception.
```

---

## 24. Security and Privacy Rules

### 24.1 Sensitive Data

Ariyo must protect:

- payment method references
- tax IDs
- billing addresses
- invoice PDFs
- payout bank references
- commission records
- contract values
- discount approvals
- customer financial history

### 24.2 Never Store

Ariyo must never store raw card numbers or sensitive payment credentials unless it is certified and explicitly designed to do so.

Use payment provider tokens/references.

### 24.3 Logging Rules

Do not log:

- full tax IDs
- raw payment method details
- bank account details
- provider secret keys
- raw webhook signatures
- full invoice PDFs in plaintext logs

### 24.4 Access Logs

Access to invoices, exports, payouts, and finance dashboards must be logged for sensitive roles.

---

## 25. Observability and Metrics

### 25.1 Finance Metrics

Track:

```text
invoice_generation_success_rate
invoice_payment_success_rate
payment_failure_rate
refund_rate
chargeback_rate
credit_issued_amount
unmatched_reconciliation_amount
marketplace_payout_latency
commission_payable_amount
ai_cost_to_revenue_ratio
gross_margin_estimate
failed_webhook_count
accounting_export_success_rate
month_close_duration
```

### 25.2 Finance Events

```text
billing_account_created
billing_profile_updated
subscription_created
subscription_upgraded
subscription_downgraded
subscription_cancelled
invoice_issued
invoice_paid
invoice_payment_failed
refund_requested
refund_approved
refund_succeeded
credit_note_issued
payout_approved
payout_paid
commission_earned
commission_paid
reconciliation_run_started
reconciliation_exception_detected
accounting_export_generated
fiscal_period_locked
```

### 25.3 Alerts

Alert finance/admin users for:

- duplicate charge pattern
- payment failure spike
- refund spike
- chargeback spike
- payout failure
- AI cost margin risk
- reconciliation mismatch
- accounting export failure
- tax calculation failure
- invoice generation failure

---

## 26. Testing Requirements

### 26.1 Unit Tests

Test:

- invoice total calculation
- discount application
- tax line handling
- refund eligibility
- credit note generation
- revenue category mapping
- payout split calculation
- commission calculation
- permission checks

### 26.2 Integration Tests

Test:

- payment provider webhook processing
- duplicate webhook idempotency
- payment success flow
- payment failure flow
- refund flow
- invoice generation
- tax provider integration
- accounting export
- reconciliation run

### 26.3 E2E Tests

Test customer flows:

- signup -> subscribe Basic -> invoice paid
- Basic -> Pro upgrade -> prorated invoice
- Pro -> Smart upgrade -> entitlement update
- payment failure -> retry -> recovery
- refund request -> approval -> refund success
- marketplace purchase -> payout pending
- accounting export download

### 26.4 Security Tests

Test:

- cross-tenant invoice access blocked
- unauthorized refund blocked
- payout approval permission enforced
- invoice export role enforced
- webhook signature verification
- idempotency on mutating operations
- sensitive data redaction

---

## 27. AI Finance Assistant Rules

Ariyo may include an AI finance assistant for admins.

It may help with:

- explaining invoice line items
- summarizing monthly spend
- finding payment failures
- detecting unusual AI cost
- preparing finance reports
- suggesting reconciliation investigation steps

It must not:

- issue refunds without approval
- approve payouts
- change tax settings
- change accounting exports
- provide tax advice as fact
- provide legal/accounting conclusions without disclaimer
- expose another organization's financial data

All AI finance assistant actions must be grounded in organization-scoped data and permission-aware.

---

## 28. Acceptance Criteria

Ariyo finance/accounting controls are acceptable only when:

- invoices are server-generated and traceable
- payments are provider-evidence-backed
- refunds require policy and audit trail
- tax data is captured responsibly
- revenue categories and service periods are recorded
- marketplace payouts are split and reconciled
- partner commissions are attributable and reversible
- AI costs connect to revenue and margin reporting
- accounting exports exist for finance users
- reconciliation detects mismatches
- sensitive finance actions require permissions
- finance data is organization-isolated
- financial audit events are immutable
- customer billing UX is clear and non-alarming

---

## 29. Forbidden Finance Patterns

```text
frontend-calculated invoice totals as source of truth
manual database edits for invoices/refunds/credits
payment success without provider confirmation
refund without audit trail
refund without invoice/payment linkage
issuing customer invoice with missing organization scope
invoice mutation after issue without credit/correction
storing raw card numbers
logging payment secrets
cross-tenant invoice access
creator payout before settlement/eligibility
commission payout without attribution record
usage-based billing without usage evidence
AI spend not connected to customer/account/employee/workflow
revenue dashboard not reconcilable to invoices
cashflow dashboard based only on frontend analytics
tax calculations hardcoded without finance/tax review
accounting exports without source record references
finance admin actions without permission checks
fiscal period edits without approval
showing raw payment provider errors to customers
claiming accounting/tax compliance without qualified review
```

---

## 30. Golden Rule

Every Ariyo financial record must answer five questions:

```text
Who paid or received money?
For what product, plan, usage, service, or asset?
When did the obligation, payment, refund, credit, payout, or recognition event happen?
What provider or internal evidence proves it?
Who or what system changed the state, and why?
```

If Ariyo cannot answer these questions, the financial system is not production-ready.

