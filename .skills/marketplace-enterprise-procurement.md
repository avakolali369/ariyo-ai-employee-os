# Ariyo Marketplace Enterprise Procurement Skill

## 1. Core Contract

Ariyo Marketplace Enterprise Procurement is not a checkout flow for large customers.

Ariyo Marketplace Enterprise Procurement is the governed buying, approval, legal, security, finance, budget, entitlement, deployment, and audit system that allows enterprise organizations to evaluate, approve, purchase, install, renew, restrict, and govern Marketplace assets safely.

Every enterprise Marketplace purchase must be buyer-authorized, budget-aware, vendor-approved, legal-reviewable, security-reviewable, billing-safe, entitlement-linked, approval-chain-aware, auditable, reversible where appropriate, and compatible with the customer's enterprise governance model.

Ariyo must make approved enterprise purchasing easier.

Ariyo must make unapproved, risky, over-budget, legally unsupported, or security-sensitive Marketplace purchasing impossible to hide.

---

## 2. Purpose

This skill defines the enterprise procurement operating model for Ariyo Marketplace assets.

It exists so enterprise customers can buy and deploy AI Employee templates, Agent Team templates, Workflow templates, Integration bundles, Knowledge packs, GEO templates, services, partner offerings, and Marketplace solutions without bypassing procurement, legal, security, budget, finance, or admin governance.

This skill should be used whenever Ariyo designs or builds:

- Enterprise Marketplace checkout flows.
- Purchase request workflows.
- Approval chains.
- Budget approval.
- Purchase order support.
- Vendor approval workflows.
- Security review workflows.
- Legal review workflows.
- Procurement dashboards.
- Asset procurement records.
- Marketplace enterprise billing.
- Partner service procurement.
- Marketplace private offers.
- Enterprise quote flows.
- PO-backed purchases.
- Contract-backed Marketplace procurement.
- Cost center and department allocation.
- Renewal approvals.
- Marketplace spend controls.
- Organization-wide procurement policies.
- Admin-approved asset installation.
- Procurement audit exports.

---

## 3. Dependencies

This skill depends on and must stay consistent with:

- `pricing-packaging-strategy.md`
- `monetization-billing.md`
- `finance-accounting-controls.md`
- `marketplace-billing-payouts.md`
- `marketplace-installation-entitlements.md`
- `ecosystem-marketplace-economy.md`
- `marketplace-partner-operations.md`
- `marketplace-dispute-resolution.md`
- `marketplace-trust-safety-operations.md`
- `marketplace-policy-enforcement-rules.md`
- `template-quality-ranking-system.md`
- `marketplace-search-recommendation-engine.md`
- `ai-agent-template-review-governance.md`
- `agent-marketplace-template-builder.md`
- `enterprise-readiness.md`
- `admin-permissions.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `legal-pages-policy-system.md`
- `trust-center-public-status.md`
- `compliance-legal-risk.md`
- `revenue-operations-system.md`
- `operations-command-center.md`
- `observability-analytics-events.md`

---

## 4. Enterprise Procurement Philosophy

Enterprise customers do not buy software the way small customers do.

They often require:

- Procurement approval.
- Budget owner approval.
- Legal review.
- Security review.
- Vendor approval.
- Purchase orders.
- Invoice support.
- Tax information.
- Data processing review.
- AI governance review.
- Risk approval.
- Admin authorization.
- Departmental cost allocation.
- Renewal review.
- Cancellation controls.
- Audit evidence.

Ariyo Marketplace must support these processes without turning every purchase into a manual sales cycle.

The ideal system is enterprise self-service with governance:

- Buyers can discover and request assets.
- Admins can define procurement policies.
- Budget owners can approve spend.
- Security teams can review sensitive assets.
- Legal teams can review terms when needed.
- Finance teams can reconcile invoices and purchase orders.
- Ariyo can enforce entitlements and deployment rules.
- Customers can audit the entire buying path later.

---

## 5. Enterprise Procurement Scope

This skill applies to Marketplace procurement of:

- AI Employee Templates.
- Agent Team Templates.
- Workflow Templates.
- Knowledge Packs.
- Integration Bundles.
- GEO / AI SEO Templates.
- Industry Solution Bundles.
- Partner Implementation Services.
- Certified Expert Services.
- Managed Marketplace Solutions.
- Private Marketplace Offers.
- Enterprise-only Marketplace Assets.
- Custom Marketplace Packages.
- Add-ons attached to Marketplace assets.
- Renewal or expansion of Marketplace assets.

It does not replace core subscription billing. It extends billing and procurement behavior for Marketplace assets used by enterprise organizations.

---

## 6. Enterprise Procurement Actors

### 6.1 Requester

The person who wants to buy or install a Marketplace asset.

Common examples:

- Department manager.
- Operations lead.
- Sales leader.
- Customer support lead.
- Growth lead.
- AI operations manager.
- Workspace admin.

The requester may browse, compare, request approval, and provide business justification.

The requester must not be able to bypass procurement policy.

### 6.2 Workspace Admin

The person responsible for local workspace configuration.

May approve workspace-level installation if organization policy allows.

Must not approve organization-wide spend unless also assigned the required procurement or budget role.

### 6.3 Organization Admin

The person responsible for organization-level Marketplace governance.

Can define Marketplace procurement policies, approval routing, allowed asset categories, plan restrictions, and installation boundaries.

### 6.4 Budget Owner

The person responsible for spend approval.

Must approve purchases above policy-defined thresholds.

Budget approval must be tied to:

- Department.
- Cost center.
- Business unit.
- Workspace.
- Spend limit.
- Billing period.
- Renewal behavior.

### 6.5 Procurement Reviewer

The person or team responsible for vendor, commercial, and purchase workflow review.

Can request missing vendor information, PO details, billing terms, or commercial clarification.

### 6.6 Security Reviewer

The person or team responsible for assessing security risk.

Must review assets that request sensitive access, integrations, external actions, automation authority, or enterprise data processing.

### 6.7 Legal Reviewer

The person or team responsible for contract, DPA, marketplace terms, partner service terms, and policy review.

Legal review must be required when the asset introduces new terms, subprocessors, partner services, regulated workflows, or sensitive commitments.

### 6.8 Finance Reviewer

The person or team responsible for invoice accuracy, tax, purchase orders, accounting codes, renewal forecasting, and payment reconciliation.

### 6.9 Ariyo Marketplace Operations

The internal Ariyo team responsible for marketplace procurement support, private offers, partner coordination, entitlement troubleshooting, and dispute escalation.

### 6.10 Partner / Creator

The external party selling or delivering a Marketplace asset or service.

May provide documentation, service scope, implementation terms, security notes, or pricing details.

Must not directly access enterprise customer data unless explicitly authorized through Ariyo-approved workflows.

---

## 7. Core Procurement Objects

### 7.1 ProcurementRequest

Represents a request to purchase, install, renew, expand, or approve a Marketplace asset.

Required fields:

```json
{
  "id": "prq_123",
  "organization_id": "org_123",
  "workspace_id": "wrk_123",
  "requester_id": "usr_123",
  "asset_id": "asset_123",
  "asset_version_id": "assetver_123",
  "request_type": "purchase",
  "business_justification": "Reduce support response time for enterprise customers",
  "requested_plan_context": "smart",
  "requested_quantity": 10,
  "estimated_total_cost": 2500,
  "currency": "USD",
  "billing_period": "monthly",
  "status": "pending_budget_approval",
  "risk_level": "high",
  "created_at": "2026-06-18T10:00:00Z"
}
```

### 7.2 ProcurementPolicy

Defines how an organization controls Marketplace procurement.

Policy dimensions:

- Asset categories allowed.
- Plan compatibility.
- Spend thresholds.
- Approval chain requirements.
- Security review triggers.
- Legal review triggers.
- Budget owner routing.
- PO requirement.
- Renewal approval rules.
- Partner service restrictions.
- Autopurchase rules.
- Install-before-pay rules.
- Trial permissions.
- Marketplace private offer rules.

### 7.3 ApprovalChain

Defines who must approve a request and in what order.

Approval chains may be serial, parallel, conditional, or policy-driven.

Example:

```json
{
  "approval_chain_id": "apc_123",
  "steps": [
    { "type": "budget", "required": true, "mode": "serial" },
    { "type": "security", "required": true, "mode": "parallel" },
    { "type": "legal", "required": false, "mode": "conditional" },
    { "type": "procurement", "required": true, "mode": "serial" }
  ]
}
```

### 7.4 PurchaseOrder

Represents a customer purchase order associated with a Marketplace purchase.

Required support:

- PO number.
- PO document attachment.
- PO amount.
- PO expiry date.
- Billing contact.
- Invoice instructions.
- Tax metadata.
- Procurement reference.
- Finance owner.

### 7.5 VendorApprovalRecord

Represents whether Ariyo, a creator, partner, or marketplace seller is approved for enterprise procurement.

Ariyo must distinguish:

- Ariyo as platform vendor.
- Creator as Marketplace seller.
- Partner as service provider.
- Subprocessor or integration vendor.

### 7.6 ProcurementDecision

Represents approval, rejection, or requested changes.

Decision fields:

```json
{
  "decision": "approved",
  "decision_by": "usr_456",
  "decision_role": "security_reviewer",
  "scope": "asset_version",
  "conditions": ["install_requires_human_review_enabled"],
  "expires_at": "2026-12-31T23:59:59Z",
  "notes": "Approved for support workspace only. No production automation without review."
}
```

### 7.7 EnterpriseMarketplaceEntitlement

Represents the approved right to use a Marketplace asset under enterprise rules.

Must include:

- Asset ID.
- Asset version.
- Organization.
- Workspace scope.
- Plan requirement.
- Quantity.
- Billing state.
- Approval state.
- Renewal state.
- Install state.
- Permission grants.
- Expiry or renewal date.

---

## 8. Procurement Request Lifecycle

Marketplace enterprise procurement must use explicit lifecycle states.

```text
draft
submitted
policy_checking
policy_blocked
pending_budget_approval
pending_security_review
pending_legal_review
pending_procurement_review
pending_finance_review
pending_vendor_approval
pending_purchase_order
pending_private_offer
approved
approved_with_conditions
rejected
cancelled
expired
ready_for_purchase
purchase_processing
purchase_failed
purchased
entitlement_pending
entitled
install_pending
installed
active
renewal_pending
renewed
suspended
terminated
archived
```

No request may skip required states due to frontend state alone.

The backend must enforce all transitions.

---

## 9. Decision Model

Procurement review decisions must be explicit.

Allowed decisions:

```text
approve
approve_with_conditions
request_changes
request_more_information
require_budget_approval
require_security_review
require_legal_review
require_procurement_review
require_finance_review
require_vendor_approval
require_purchase_order
reject
cancel
expire
suspend
restore
terminate
```

Each decision must include:

- Decision maker.
- Decision role.
- Decision timestamp.
- Reason code.
- Optional comments.
- Conditions.
- Expiration.
- Evidence links.
- Audit record.

---

## 10. Procurement Policy Engine

The procurement policy engine must evaluate every purchase request before approval.

Inputs:

- Organization.
- Workspace.
- Requester role.
- Marketplace asset type.
- Asset risk level.
- Asset price.
- Billing period.
- Plan compatibility.
- Department.
- Cost center.
- Data sensitivity.
- Integration requirements.
- Tool permissions.
- Partner involvement.
- Marketplace trust score.
- Creator trust score.
- Existing spend.
- Renewal status.

Outputs:

- Allowed.
- Blocked.
- Required approvals.
- Required documents.
- Required conditions.
- Upgrade requirements.
- Security review requirement.
- Legal review requirement.
- PO requirement.
- Install restrictions.

Example policy result:

```json
{
  "allowed": true,
  "requires_approval": true,
  "required_steps": [
    "budget_approval",
    "security_review",
    "procurement_review"
  ],
  "conditions": [
    "human_review_required",
    "install_scope_workspace_only",
    "cost_cap_required"
  ],
  "upgrade_required": false
}
```

---

## 11. Spend Threshold Rules

Enterprise customers must be able to define spend thresholds.

Example rules:

```text
Under $100/month:
Workspace admin approval may be enough.

$100-$1,000/month:
Budget owner approval required.

$1,000-$10,000/month:
Budget owner + procurement required.

Over $10,000/month:
Budget owner + procurement + finance + executive approval required.

Any asset with high security risk:
Security review required regardless of amount.

Any asset with new terms or partner services:
Legal review required regardless of amount.
```

Ariyo must not hardcode these amounts globally.

They must be configurable per organization.

---

## 12. Security Review Triggers

Security review must be triggered when a Marketplace asset:

- Requests access to sensitive customer data.
- Uses external write actions.
- Connects to CRM, billing, finance, identity, support, or messaging systems.
- Sends messages externally.
- Uses autonomous workflow execution.
- Includes partner-operated services.
- Requires API keys or external credentials.
- Uses custom code.
- Uses webhooks.
- Uses file ingestion at scale.
- Uses long-term memory.
- Uses multi-agent orchestration.
- Has high incident history.
- Has low creator trust score.
- Has high cost risk.

Security review outcomes:

- Approved.
- Approved with restrictions.
- Requires human review mode.
- Requires sandbox simulation.
- Requires integration restrictions.
- Requires data minimization.
- Requires private deployment.
- Rejected.

---

## 13. Legal Review Triggers

Legal review must be triggered when a Marketplace asset:

- Introduces a new partner service agreement.
- Requires custom terms.
- Processes regulated or sensitive data.
- Makes legal, financial, medical, employment, compliance, or regulated recommendations.
- Uses a non-standard DPA.
- Introduces new subprocessors.
- Requires customer data to be shared with a creator or partner.
- Changes liability exposure.
- Has refund, SLA, or service commitments beyond default policy.
- Includes cross-border processing concerns.

Legal review must never be simulated by generic AI output as final authority.

AI may summarize, route, and flag issues.

Qualified humans must approve legal decisions.

---

## 14. Budget Approval Rules

Budget approval must answer:

- Which budget is used?
- Who owns that budget?
- Is budget available?
- Is the spend recurring?
- Is the spend one-time?
- Is renewal automatic?
- Is the spend tied to a cost center?
- Does the asset require additional AI usage spend?
- Does the asset require marketplace add-ons?
- Does the asset include partner service fees?
- Does the asset have usage-based charges?

Budget approval must include cost estimate and possible overage explanation.

Ariyo must show enterprise buyers:

- Base Marketplace price.
- Subscription effect.
- Usage-based AI cost risk.
- Add-on costs.
- Partner service fees.
- Renewal price.
- Tax estimate if available.
- Refund eligibility.
- Cancellation behavior.

---

## 15. Purchase Order Rules

Enterprise customers may require purchase orders before purchase activation.

Ariyo must support:

- PO required before purchase.
- PO required before invoice generation.
- PO required before renewal.
- PO required above threshold.
- PO required by department or cost center.
- PO not required for low-risk purchases.

Purchase order validation must include:

- PO number present.
- PO document uploaded where required.
- PO amount covers purchase.
- PO currency matches purchase or has approved conversion rule.
- PO expiration valid.
- Billing entity matches customer organization.
- Invoice instructions present.

Ariyo must not activate PO-required purchases without valid PO approval unless an authorized override is logged.

---

## 16. Private Offers

Enterprise Marketplace must support private offers.

A private offer may include:

- Custom price.
- Custom term.
- Custom quantity.
- Custom package.
- Bundled partner services.
- Enterprise discount.
- Implementation fee.
- Pilot pricing.
- Renewal terms.
- Legal conditions.
- Deployment restrictions.

Private offer lifecycle:

```text
draft
sent
viewed
under_review
changes_requested
accepted
expired
cancelled
converted_to_order
```

Private offers must be immutable after acceptance.

Any change must create a new offer version.

---

## 17. Enterprise Billing Rules

Enterprise Marketplace purchases may use:

- Credit card.
- Invoice.
- PO-backed invoice.
- Contract-backed invoice.
- Marketplace credit balance.
- Enterprise prepaid balance.
- Internal cost allocation.

Billing must be linked to:

- Procurement request.
- Approval chain.
- Purchase order.
- Entitlement.
- Marketplace asset.
- Creator or partner payout rule.
- Tax metadata.
- Customer billing entity.

Ariyo must prevent billing without entitlement and entitlement without billing state unless explicitly allowed by policy.

---

## 18. Plan-Based Procurement: Basic / Pro / Smart

### 18.1 Basic

Basic is not designed for complex enterprise procurement.

Basic procurement behavior:

- Simple asset purchases only.
- Low-risk templates only.
- No custom private offers by default.
- Limited procurement controls.
- No advanced PO workflows unless enabled manually.
- No partner service procurement by default.
- No high-risk automation assets.
- No organization-wide enterprise approval chains.

Basic customers should experience simple, transparent purchasing with clear upgrade prompts when enterprise controls are needed.

### 18.2 Pro

Pro supports operational team procurement.

Pro procurement behavior:

- Budget approvals.
- Workspace-level approval chains.
- Marketplace asset purchase requests.
- Basic PO metadata.
- Team-level cost centers.
- Partner service requests with approval.
- Moderate-risk assets with security review.
- Renewal approval settings.
- Marketplace spend dashboard.
- Approval audit trail.

Pro is the default plan for businesses that need controlled operational purchasing.

### 18.3 Smart

Smart supports advanced enterprise procurement.

Smart procurement behavior:

- Multi-step approval chains.
- Organization-wide procurement policies.
- Purchase orders.
- Private offers.
- Legal/security/procurement/finance routing.
- Advanced cost center allocation.
- Department-level budget controls.
- Enterprise billing workflows.
- High-risk asset review gates.
- Bulk procurement.
- Renewal forecasting.
- Custom approval rules.
- Procurement API access.
- Advanced audit exports.
- Procurement Command Center.
- AI Procurement Assistant.

Smart must feel enterprise-ready and full-option, but every powerful procurement feature must remain governed.

---

## 19. Procurement UI Requirements

### 19.1 Asset Detail Page

Marketplace asset pages must show enterprise procurement-relevant information:

- Plan compatibility.
- Required approvals.
- Estimated price.
- Usage-based cost risk.
- Required integrations.
- Required data access.
- Security risk level.
- Legal review recommendation.
- Creator or partner identity.
- Marketplace trust score.
- Refund policy.
- Renewal behavior.
- Installation scope.

### 19.2 Request Purchase Flow

The request purchase flow must collect:

- Business justification.
- Department.
- Cost center.
- Expected users or seats.
- Workspace scope.
- Requested start date.
- Billing period.
- Purchase order info if required.
- Optional notes to approvers.

### 19.3 Approval Inbox

Approvers must see:

- What is being requested.
- Why it is requested.
- Who requested it.
- Cost impact.
- Risk impact.
- Required permissions.
- Security/legal notes.
- Related documents.
- Decision options.
- Conditions they can add.

### 19.4 Procurement Dashboard

Enterprise admins must see:

- Pending requests.
- Approved spend.
- Rejected requests.
- Upcoming renewals.
- Spend by department.
- Spend by Marketplace category.
- Spend by asset.
- High-risk assets.
- Assets awaiting security review.
- PO-backed purchases.
- Private offers.
- Policy violations.

---

## 20. Backend Requirements

The backend must enforce:

- Procurement policy evaluation.
- Approval chain routing.
- Role-based approval authority.
- Purchase order validation.
- Billing state transitions.
- Entitlement creation.
- Install blocking until approval.
- Renewal approval requirements.
- Audit logging.
- Immutable decision records.
- Private offer versioning.
- Security/legal review triggers.
- Spend threshold rules.
- Idempotent purchase events.
- Webhook validation.
- Reconciliation with payment provider.

The frontend must never be trusted as the source of procurement approval.

---

## 21. API Contract

### 21.1 Create Procurement Request

```http
POST /api/marketplace/procurement-requests
```

Request:

```json
{
  "asset_id": "asset_support_ai_team",
  "asset_version_id": "assetver_003",
  "workspace_id": "wrk_support",
  "request_type": "purchase",
  "quantity": 25,
  "billing_period": "annual",
  "business_justification": "Deploy AI support team to reduce first response time.",
  "department": "Customer Support",
  "cost_center": "CS-2026",
  "requested_start_date": "2026-07-01"
}
```

Response:

```json
{
  "procurement_request_id": "prq_123",
  "status": "pending_budget_approval",
  "required_steps": [
    "budget_approval",
    "security_review",
    "procurement_review"
  ],
  "estimated_total_cost": 18000,
  "currency": "USD",
  "requires_purchase_order": true
}
```

### 21.2 Get Procurement Request

```http
GET /api/marketplace/procurement-requests/{id}
```

Response:

```json
{
  "id": "prq_123",
  "status": "pending_security_review",
  "asset": {
    "id": "asset_support_ai_team",
    "name": "AI Support Team",
    "risk_level": "high"
  },
  "approvals": [
    {
      "type": "budget",
      "status": "approved",
      "approved_by": "usr_budget_owner"
    },
    {
      "type": "security",
      "status": "pending"
    }
  ],
  "billing": {
    "requires_po": true,
    "po_status": "missing"
  }
}
```

### 21.3 Submit Approval Decision

```http
POST /api/marketplace/procurement-requests/{id}/decisions
```

Request:

```json
{
  "decision": "approve_with_conditions",
  "role": "security_reviewer",
  "reason_code": "approved_with_human_review_required",
  "conditions": [
    "human_review_required",
    "external_email_sending_disabled_until_admin_approval"
  ],
  "notes": "Approved for sandbox and support workspace deployment only."
}
```

Response:

```json
{
  "decision_id": "dec_123",
  "request_status": "pending_procurement_review",
  "next_required_step": "procurement_review"
}
```

### 21.4 Attach Purchase Order

```http
POST /api/marketplace/procurement-requests/{id}/purchase-order
```

Request:

```json
{
  "po_number": "PO-2026-10092",
  "po_amount": 18000,
  "currency": "USD",
  "expires_at": "2026-12-31",
  "billing_contact_email": "ap@example.com",
  "invoice_instructions": "Include PO number on all invoices."
}
```

Response:

```json
{
  "purchase_order_id": "po_123",
  "status": "validated",
  "request_status": "ready_for_purchase"
}
```

### 21.5 Create Private Offer

```http
POST /api/marketplace/private-offers
```

Request:

```json
{
  "organization_id": "org_123",
  "asset_id": "asset_enterprise_geo_bundle",
  "price": 42000,
  "currency": "USD",
  "term_months": 12,
  "included_services": ["implementation", "training"],
  "expires_at": "2026-07-15"
}
```

Response:

```json
{
  "private_offer_id": "poffer_123",
  "status": "sent",
  "offer_url": "https://app.ariyo.com/marketplace/private-offers/poffer_123"
}
```

---

## 22. Webhook Events

Marketplace procurement must emit events:

```text
marketplace.procurement_request.created
marketplace.procurement_request.policy_blocked
marketplace.procurement_request.approval_requested
marketplace.procurement_request.approved
marketplace.procurement_request.approved_with_conditions
marketplace.procurement_request.rejected
marketplace.procurement_request.cancelled
marketplace.procurement_request.expired
marketplace.procurement_request.ready_for_purchase
marketplace.procurement_request.purchased
marketplace.purchase_order.attached
marketplace.purchase_order.validated
marketplace.purchase_order.rejected
marketplace.private_offer.created
marketplace.private_offer.sent
marketplace.private_offer.accepted
marketplace.private_offer.expired
marketplace.entitlement.created
marketplace.entitlement.activated
marketplace.entitlement.suspended
marketplace.renewal.approval_required
marketplace.renewal.approved
marketplace.renewal.rejected
```

Every event must include:

- Organization ID.
- Workspace ID when applicable.
- Asset ID.
- Request ID.
- Actor ID.
- Event timestamp.
- Correlation ID.
- Approval state.
- Billing state.
- Risk level.
- Privacy-safe metadata.

---

## 23. Observability Events

Ariyo must track procurement analytics:

- Procurement request created.
- Approval step started.
- Approval step completed.
- Approval step delayed.
- Request blocked by policy.
- Request rejected.
- Request approved with conditions.
- PO required.
- PO attached.
- Private offer accepted.
- Purchase completed.
- Install completed after procurement.
- Renewal approval required.
- Renewal approved.
- Renewal rejected.

Events must connect to:

- Revenue operations.
- Finance controls.
- Marketplace billing.
- Customer success.
- Operations command center.
- Enterprise readiness.

---

## 24. Advanced KPI System

Ariyo must measure enterprise procurement health using advanced KPIs.

### 24.1 Procurement Conversion KPIs

- Procurement Request to Approval Rate.
- Approval to Purchase Rate.
- Purchase to Installation Rate.
- Private Offer Acceptance Rate.
- PO Completion Rate.
- Procurement Abandonment Rate.

### 24.2 Procurement Velocity KPIs

- Average Time to First Approval.
- Average Time to Full Approval.
- Average Time Waiting on Budget Owner.
- Average Time Waiting on Security Review.
- Average Time Waiting on Legal Review.
- Average Time Waiting on PO.
- Average Time from Request to Active Entitlement.

### 24.3 Revenue KPIs

- Enterprise Marketplace ARR.
- Procurement-Blocked ARR.
- Private Offer ARR.
- PO-Backed Marketplace Revenue.
- Renewal Approval Revenue at Risk.
- Average Contract Value by Marketplace Asset.
- Marketplace Expansion Revenue from Enterprise Accounts.

### 24.4 Risk KPIs

- High-Risk Asset Approval Rate.
- Security Review Required Ratio.
- Legal Review Required Ratio.
- Approval with Conditions Ratio.
- Post-Approval Incident Rate.
- Policy Override Rate.
- Unauthorized Purchase Attempt Rate.

### 24.5 Finance KPIs

- Invoice-to-PO Match Rate.
- PO Validation Failure Rate.
- Procurement Reconciliation Accuracy.
- Tax Metadata Completion Rate.
- Refunds from Enterprise Marketplace Purchases.
- Disputes from Enterprise Marketplace Purchases.

### 24.6 Customer Experience KPIs

- Buyer Satisfaction Score.
- Approver Satisfaction Score.
- Procurement Friction Score.
- Install Delay Due to Procurement.
- Renewal Friction Score.
- Enterprise Activation After Marketplace Procurement.

---

## 25. AI Procurement Assistant Rules

Ariyo may provide an AI Procurement Assistant for enterprise customers and internal teams.

The assistant may:

- Explain procurement requirements.
- Summarize asset risk.
- Draft business justification.
- Summarize approval status.
- Recommend required reviewers.
- Identify missing documents.
- Explain budget impact.
- Summarize security review notes.
- Help compare Marketplace options.

The assistant must not:

- Approve purchases.
- Override procurement policy.
- Make legal decisions.
- Make final security decisions.
- Invent vendor approval evidence.
- Hide cost or risk.
- Send purchase orders externally without approval.
- Expose sensitive procurement data to unauthorized users.

---

## 26. Security and Privacy Rules

Enterprise procurement data may include sensitive commercial information.

Ariyo must protect:

- Purchase orders.
- Contract terms.
- Private offer pricing.
- Discount terms.
- Security review notes.
- Legal review notes.
- Department budgets.
- Cost centers.
- Billing contacts.
- Vendor approval records.
- Internal customer procurement comments.

Access must be permission-scoped.

Procurement data must not be used for public ranking, creator insights, or marketing without aggregation and privacy controls.

---

## 27. Testing Requirements

Ariyo must test:

- Low-cost purchase without approval.
- Purchase requiring budget approval.
- Purchase requiring PO.
- Purchase requiring security review.
- Purchase requiring legal review.
- Purchase blocked by policy.
- Approval with conditions.
- Rejected purchase.
- Expired purchase request.
- Private offer acceptance.
- PO validation failure.
- Renewal requiring approval.
- Unauthorized approval attempt.
- Entitlement blocked until purchase approved.
- Billing webhook retry.
- Duplicate purchase event.
- Rollback after failed entitlement creation.

---

## 28. Forbidden Patterns

Ariyo must never allow:

- Enterprise Marketplace purchase without required approval.
- Frontend-only procurement enforcement.
- Install before approval when policy forbids it.
- Purchase order ignored during invoice generation.
- Security review skipped because price is low.
- Legal review skipped when new partner terms apply.
- Private offer changed after acceptance without versioning.
- Entitlement created without billing state.
- Billing charged without entitlement linkage.
- Renewal auto-approved when policy requires review.
- Creator or partner directly negotiating hidden terms outside Ariyo records.
- Procurement decisions without audit trail.
- Approval by unauthorized user.
- Self-approval when policy forbids it.
- AI assistant approving or rejecting procurement.
- PO documents visible to unauthorized users.
- Marketplace spend hidden from finance admins.
- Risky Marketplace asset positioned as procurement-safe without review.

---

## 29. Golden Rule

Ariyo Marketplace Enterprise Procurement must make enterprise buying controlled, understandable, auditable, and fast enough to support adoption.

It must never let speed override governance.

It must never let governance destroy customer value.

The correct system is governed acceleration.

