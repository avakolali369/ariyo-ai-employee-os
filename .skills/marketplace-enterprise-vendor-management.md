# Ariyo Marketplace Enterprise Vendor Management Skill

## 1. Core Contract

Ariyo Marketplace Enterprise Vendor Management is not a vendor spreadsheet.

It is the governed enterprise trust system that helps customers, Ariyo operators, procurement teams, security teams, legal teams, finance teams, and marketplace administrators evaluate, approve, monitor, renew, restrict, suspend, or offboard marketplace vendors safely.

Every marketplace vendor must have a clear identity, ownership model, risk profile, approval status, security evidence, legal status, subprocessor disclosure, data access boundary, asset inventory, commercial relationship, renewal state, incident history, and audit trail.

Ariyo must make it easy for enterprise customers to trust approved vendors.

Ariyo must make it difficult for unknown, risky, unverified, noncompliant, or poorly governed vendors to access enterprise customers.

---

## 2. Purpose

This skill defines how Ariyo manages enterprise marketplace vendors across their full lifecycle.

A vendor in Ariyo Marketplace may be:

- a creator publishing AI Employee templates,
- a partner selling implementation services,
- an agency publishing bundles,
- a consultant selling workflows,
- a technology partner publishing integrations,
- an internal Ariyo-owned solution provider,
- a subprocessor or infrastructure provider behind a marketplace asset,
- a reseller or solution partner involved in enterprise deals.

Enterprise customers need more than a nice marketplace listing. They need to know:

- who built the asset,
- who supports it,
- whether the vendor is approved,
- whether the vendor touches customer data,
- whether a vendor introduces subprocessors,
- whether security evidence exists,
- whether the vendor passed review,
- whether the vendor has incident history,
- whether the vendor can be used under enterprise policy,
- whether the vendor can be disabled or replaced.

This file turns vendor management into a productized operating system.

---

## 3. Dependencies

This skill depends on:

- `ecosystem-marketplace-economy.md`
- `marketplace-partner-operations.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-billing-payouts.md`
- `marketplace-dispute-resolution.md`
- `marketplace-trust-safety-operations.md`
- `marketplace-policy-enforcement-rules.md`
- `marketplace-creator-success-system.md`
- `marketplace-installation-entitlements.md`
- `template-quality-ranking-system.md`
- `agent-marketplace-template-builder.md`
- `ai-agent-template-review-governance.md`
- `trust-center-public-status.md`
- `legal-pages-policy-system.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `admin-permissions.md`
- `revenue-operations-system.md`
- `finance-accounting-controls.md`
- `operations-command-center.md`
- `observability-analytics-events.md`

---

## 4. Vendor Management Philosophy

Ariyo must treat marketplace vendors as part of the enterprise trust surface.

A vendor is not only a commercial entity. A vendor may affect:

- customer data,
- AI behavior,
- marketplace asset quality,
- billing and payouts,
- legal exposure,
- security posture,
- compliance posture,
- support obligations,
- renewal risk,
- procurement approval,
- enterprise trust.

Vendor management must be:

- identity-verified,
- risk-based,
- lifecycle-aware,
- evidence-driven,
- enterprise-configurable,
- plan-aware,
- audit-ready,
- reversible,
- privacy-safe,
- commercially accurate.

Ariyo must not allow marketplace growth to outrun vendor governance.

---

## 5. Vendor Types

### 5.1 Creator Vendor

A person or organization that creates marketplace assets.

Examples:

- AI Employee Template creator,
- Agent Team Template creator,
- GEO template creator,
- workflow template creator,
- knowledge pack creator.

### 5.2 Implementation Partner Vendor

A partner that helps customers install, configure, customize, or operate marketplace solutions.

Examples:

- AI operations consultant,
- agency partner,
- onboarding specialist,
- enterprise implementation team.

### 5.3 Technology Partner Vendor

A vendor providing integrations, APIs, infrastructure, or technical extensions.

Examples:

- CRM integration provider,
- payment integration provider,
- data connector provider,
- analytics connector provider.

### 5.4 Solution Partner Vendor

A vendor that packages a business solution using multiple assets.

Examples:

- Support Automation Bundle,
- Sales AI Team Bundle,
- GEO Growth Bundle,
- Enterprise Security Review Bundle.

### 5.5 Reseller Vendor

A vendor involved in sales, distribution, or resale.

### 5.6 Subprocessor Vendor

A vendor that may process customer data indirectly through an asset, integration, or service.

### 5.7 Ariyo-Owned Vendor

A marketplace provider controlled by Ariyo itself.

Ariyo-owned vendors must still be governed and auditable.

---

## 6. Core Vendor Entities

### 6.1 Vendor

Canonical vendor record.

Required fields:

```json
{
  "id": "vendor_01H...",
  "legal_name": "Example AI Solutions LLC",
  "display_name": "Example AI Solutions",
  "vendor_type": "creator|implementation_partner|technology_partner|solution_partner|reseller|subprocessor|ariyo_owned",
  "status": "pending|approved|restricted|suspended|terminated|archived",
  "risk_tier": "low|medium|high|critical",
  "approval_level": "self_service|standard_review|enhanced_review|enterprise_approved",
  "country": "DE",
  "website_url": "https://example.com",
  "support_email": "support@example.com",
  "security_contact_email": "security@example.com",
  "privacy_contact_email": "privacy@example.com",
  "created_at": "2026-06-18T10:00:00Z",
  "updated_at": "2026-06-18T10:00:00Z"
}
```

### 6.2 VendorProfile

Customer-facing vendor information.

Includes:

- description,
- categories,
- certifications,
- partner tier,
- support channels,
- response times,
- marketplace assets,
- case studies,
- customer ratings,
- trust badges.

### 6.3 VendorRiskProfile

Internal and enterprise-facing risk model.

Includes:

- data access level,
- tool/action risk,
- integration risk,
- automation risk,
- financial risk,
- compliance risk,
- incident history,
- dispute history,
- policy violation history,
- support performance,
- payout/fraud risk,
- creator trust score,
- partner quality score.

### 6.4 VendorEvidence

Evidence submitted or generated for vendor approval.

Examples:

- security questionnaire,
- privacy questionnaire,
- DPA,
- insurance evidence,
- penetration test summary,
- SOC 2 or equivalent report metadata,
- ISO certificate metadata,
- subprocessor list,
- data processing overview,
- incident response policy,
- support SLA document,
- legal entity verification,
- tax/payout verification.

### 6.5 VendorApproval

Approval decision record.

```json
{
  "id": "vendor_approval_01H...",
  "vendor_id": "vendor_01H...",
  "approval_scope": "marketplace_public|enterprise_customer|specific_org|specific_asset|specific_category",
  "status": "pending|approved|approved_with_restrictions|rejected|expired|revoked",
  "approved_by": "user_01H...",
  "approval_reason": "Passed enhanced security and privacy review",
  "restrictions": ["no_sensitive_data", "human_review_required", "smart_plan_only"],
  "expires_at": "2027-06-18T00:00:00Z"
}
```

### 6.6 VendorAssetInventory

All marketplace assets connected to a vendor.

Includes:

- asset IDs,
- asset types,
- approval status,
- install count,
- revenue,
- incidents,
- reviews,
- risk level,
- version status.

### 6.7 VendorSubprocessorDisclosure

Subprocessors used by a vendor.

Required for enterprise procurement and trust center disclosure when applicable.

### 6.8 VendorRelationship

Relationship between a vendor and a customer organization.

Examples:

- vendor approved for org,
- vendor blocked by org,
- vendor under review,
- vendor allowed only for specific asset category,
- vendor allowed only with approval chain.

---

## 7. Vendor Lifecycle

Vendor lifecycle states:

```text
created
profile_incomplete
identity_verification_required
identity_verifying
identity_verified
risk_review_required
security_review_required
privacy_review_required
commercial_review_required
pending_approval
approved
approved_with_restrictions
enterprise_approved
restricted
monitoring_required
under_investigation
suspended
terminated
archived
```

### 7.1 Created

Vendor exists but cannot publish or sell.

### 7.2 Profile Incomplete

Vendor must complete identity, contact, category, support, and payout information.

### 7.3 Identity Verification Required

Vendor must verify legal entity or individual identity.

### 7.4 Risk Review Required

Triggered when vendor wants to publish assets with higher risk, connect integrations, request payouts, or sell to enterprise customers.

### 7.5 Security Review Required

Triggered when vendor assets request sensitive permissions, integrations, customer data, external write actions, or enterprise access.

### 7.6 Privacy Review Required

Triggered when vendor may process customer data or act as subprocessor.

### 7.7 Commercial Review Required

Triggered when vendor uses paid assets, revenue share, commissions, private offers, or enterprise contracts.

### 7.8 Approved

Vendor may operate within approved scope.

### 7.9 Approved With Restrictions

Vendor may operate only under explicit limitations.

Examples:

- no enterprise customers,
- no sensitive data access,
- no autonomous execution,
- Pro/Smart only,
- human review required,
- no sponsored listings,
- payout hold period required.

### 7.10 Enterprise Approved

Vendor meets stronger requirements for enterprise procurement workflows.

### 7.11 Restricted

Vendor can remain visible or active only under limited conditions.

### 7.12 Suspended

Vendor cannot publish, update, sell, receive new installs, or receive payouts depending on suspension scope.

### 7.13 Terminated

Vendor relationship is ended.

### 7.14 Archived

Vendor remains in audit records but is no longer operational.

---

## 8. Vendor Risk Tiering

Risk tier is based on a composite model.

### Low Risk Vendor

Characteristics:

- publishes low-risk templates,
- no external tool execution,
- no customer data processing beyond basic metadata,
- no sensitive integrations,
- no enterprise-specific claims,
- no paid services.

### Medium Risk Vendor

Characteristics:

- publishes operational templates,
- may use knowledge or support workflows,
- may sell paid templates,
- limited customer data exposure,
- moderate support obligations.

### High Risk Vendor

Characteristics:

- external actions,
- sensitive integrations,
- customer-facing automation,
- financial or operational workflows,
- enterprise deployments,
- subprocessors,
- paid implementation services.

### Critical Risk Vendor

Characteristics:

- security, legal, finance, billing, healthcare-like, employment-like, regulated, or compliance-sensitive automation,
- sensitive customer data processing,
- autonomous external actions,
- broad tool permissions,
- enterprise-wide installation,
- high payout exposure.

Critical vendors require enhanced review and ongoing monitoring.

---

## 9. Enterprise Vendor Approval

Enterprise vendor approval is not the same as marketplace approval.

A vendor may be:

- approved for general marketplace listing,
- not approved for enterprise procurement,
- approved for one enterprise customer but not another,
- approved only for specific asset categories,
- approved only under specific restrictions.

Enterprise customers may define vendor policies:

```json
{
  "organization_id": "org_01H...",
  "vendor_policy": {
    "default_vendor_state": "review_required",
    "allow_ariyo_owned_vendors": true,
    "allow_verified_creators": true,
    "allow_unverified_creators": false,
    "require_security_review_for_high_risk_assets": true,
    "require_procurement_approval_for_paid_assets": true,
    "blocked_vendor_ids": ["vendor_123"],
    "approved_vendor_ids": ["vendor_456"]
  }
}
```

---

## 10. Vendor Evidence Model

Evidence must be structured, versioned, and expirable.

### Evidence Types

```text
identity_verification
business_registration
tax_document
bank_account_verification
security_questionnaire
privacy_questionnaire
DPA
insurance_certificate
SOC2_summary
ISO27001_certificate
penetration_test_summary
subprocessor_list
support_policy
incident_response_policy
data_processing_overview
access_control_policy
business_continuity_policy
AI_governance_policy
asset_quality_report
customer_reference
```

### Evidence Rules

Each evidence item must include:

- owner,
- reviewer,
- submitted date,
- reviewed date,
- expiration date,
- visibility level,
- customer-facing status,
- internal notes,
- source file reference,
- tamper-evident audit log.

Ariyo must not expose private evidence to customers unless vendor and Ariyo policy allow it.

---

## 11. Vendor Security Questionnaire

Security questionnaire must cover:

- authentication controls,
- access control,
- employee access,
- encryption,
- data storage,
- data retention,
- incident response,
- vulnerability management,
- secure development,
- third-party dependencies,
- logging and monitoring,
- secrets management,
- data deletion,
- AI usage,
- subprocessors,
- customer data isolation.

For high-risk vendors, questionnaire answers must not be treated as proof alone. They must be supported by evidence.

---

## 12. Vendor Privacy Questionnaire

Privacy questionnaire must cover:

- whether customer data is processed,
- categories of data processed,
- purpose of processing,
- retention period,
- deletion process,
- subprocessor usage,
- cross-border transfer,
- AI model provider usage,
- whether data is used for training,
- whether customer content is logged,
- how data subject requests are handled,
- breach notification process.

If a vendor processes customer data, enterprise customers must be able to review relevant disclosure.

---

## 13. Vendor Approval Decision Model

Reviewer decisions:

```text
approve
approve_with_restrictions
request_more_evidence
require_security_review
require_privacy_review
require_legal_review
require_finance_review
require_customer_approval
reject
suspend
terminate
restore
archive
```

Each decision must include:

- decision reason,
- reviewer identity,
- evidence considered,
- scope,
- restrictions,
- expiration date if applicable,
- appeal eligibility,
- customer visibility.

---

## 14. Vendor Restrictions

Possible restrictions:

```text
no_public_listing
no_enterprise_listing
no_sensitive_data
no_external_write_actions
no_autonomous_execution
human_review_required
smart_plan_only
pro_or_smart_only
no_sponsored_listings
payout_hold_required
manual_payout_review_required
asset_review_required_for_every_update
customer_security_review_required
no_subprocessors_allowed
no_private_offers
no_implementation_services
```

Restrictions must be enforced by backend systems, not only shown in UI.

---

## 15. Vendor Trust Score

Vendor Trust Score measures whether a vendor is trustworthy enough for visibility, enterprise approval, payouts, and growth.

### Signals

Positive signals:

- verified identity,
- completed evidence,
- approved assets,
- high install-to-activation,
- low incident rate,
- low dispute rate,
- high customer satisfaction,
- fast issue response,
- stable support quality,
- clean payout history,
- low refund rate,
- high documentation quality.

Negative signals:

- policy violations,
- unresolved incidents,
- repeated customer complaints,
- misleading listing claims,
- suspicious installs,
- fake reviews,
- high refund rate,
- high uninstall rate,
- unresolved security issues,
- incomplete evidence,
- expired documents,
- poor response times.

### Score Bands

```text
90-100: trusted enterprise vendor
75-89: approved vendor
60-74: monitored vendor
40-59: restricted vendor
0-39: high-risk or suspended vendor
```

Trust score must influence:

- ranking,
- eligibility for enterprise procurement,
- payout speed,
- sponsored listings,
- template review speed,
- partner tier,
- enforcement escalation.

---

## 16. Vendor Risk Score

Vendor Risk Score measures potential harm.

Risk score considers:

- data sensitivity,
- customer count,
- enterprise exposure,
- financial impact,
- automation scope,
- tool permission scope,
- integration type,
- external write actions,
- AI behavior risk,
- subprocessor complexity,
- jurisdiction risk,
- incident history,
- evidence gaps.

High trust does not eliminate high risk. A trusted vendor can still operate high-risk assets.

---

## 17. Vendor Quality Score

Vendor Quality Score measures output quality and marketplace contribution.

Signals:

- asset quality score,
- documentation completeness,
- simulation pass rate,
- evaluation pass rate,
- install success,
- activation success,
- customer outcomes,
- support ticket rate,
- upgrade influence,
- retention influence,
- template freshness,
- version discipline.

Quality score should influence search and recommendation, but never bypass trust and safety requirements.

---

## 18. Enterprise Vendor Status for Customers

Enterprise admins should see clear vendor status labels:

```text
Approved by Ariyo
Approved by Your Organization
Needs Security Review
Needs Procurement Approval
Restricted by Your Policy
Blocked by Your Organization
Suspended by Ariyo
Evidence Expired
Subprocessor Review Required
```

Labels must be explainable.

Customers should be able to click into:

- why the vendor is approved,
- what evidence exists,
- what restrictions apply,
- what assets are installed,
- what data access exists,
- when review expires,
- who approved it.

---

## 19. Vendor Renewal and Re-Review

Vendor approval must expire or require renewal when:

- evidence expires,
- vendor changes ownership,
- vendor adds subprocessors,
- vendor publishes high-risk asset,
- vendor expands to enterprise customers,
- vendor has major incident,
- vendor changes data processing behavior,
- vendor changes support obligations,
- vendor changes payout/billing entity.

Renewal states:

```text
not_required
renewal_upcoming
renewal_due
renewal_overdue
renewal_in_review
renewed
renewal_failed
approval_expired
```

Expired approval must reduce vendor capabilities automatically.

---

## 20. Subprocessor Management

If a vendor uses subprocessors, Ariyo must track:

- subprocessor name,
- purpose,
- data categories,
- country/region,
- security status,
- privacy status,
- DPA availability,
- effective date,
- customer notification requirement,
- enterprise approval requirement.

Enterprise customers may require approval before vendors with subprocessors are used.

Ariyo must not hide subprocessors for assets that process customer data.

---

## 21. Vendor Access Governance

Vendor access must be limited.

Vendors may access only:

- their own creator dashboard,
- their asset analytics,
- anonymized or aggregated metrics where appropriate,
- customer information explicitly authorized by the customer,
- support cases assigned to them,
- payout and billing records relevant to them.

Vendors must not access:

- customer organization data without permission,
- other vendors' analytics,
- internal Ariyo trust notes,
- raw customer content unless explicitly authorized,
- security incident evidence outside their scope,
- marketplace ranking internals if this enables manipulation.

---

## 22. Enterprise Customer Vendor Controls

Enterprise admins must be able to:

- approve vendors,
- block vendors,
- request security review,
- request legal review,
- require procurement approval,
- restrict vendor categories,
- restrict vendor assets,
- view installed vendor assets,
- export vendor inventory,
- review subprocessors,
- see vendor risk status,
- receive vendor change alerts,
- set auto-renewal rules.

---

## 23. Plan-Based Vendor Management: Basic / Pro / Smart

### Basic

Basic customers get simplified vendor transparency.

Includes:

- visible vendor name,
- basic trust badge,
- basic asset source disclosure,
- install warning for unverified vendors,
- no custom vendor approval workflow,
- no enterprise evidence access.

Basic must protect users from risky vendors with default platform restrictions.

### Pro

Pro customers get operational vendor controls.

Includes:

- vendor approval list,
- vendor block list,
- installed vendor asset inventory,
- basic risk labels,
- vendor change notifications,
- team permission rules,
- export of vendor asset list.

### Smart

Smart customers get enterprise-grade vendor governance.

Includes:

- vendor risk dashboard,
- security evidence access controls,
- procurement approval routing,
- legal/security review states,
- subprocessor review,
- vendor renewal tracking,
- vendor policy automation,
- advanced alerts,
- custom vendor approval workflows,
- AI-assisted vendor risk summaries,
- vendor inventory export for audits.

Smart is full-control, not no-control.

---

## 24. Vendor Management API

### 24.1 List Vendors

`GET /api/v1/marketplace/vendors`

Query parameters:

```text
status=approved
risk_tier=high
vendor_type=creator
enterprise_approved=true
```

Response:

```json
{
  "vendors": [
    {
      "id": "vendor_123",
      "display_name": "GrowthOps Studio",
      "vendor_type": "solution_partner",
      "status": "approved",
      "risk_tier": "medium",
      "trust_score": 88,
      "quality_score": 91,
      "enterprise_approved": true
    }
  ]
}
```

### 24.2 Get Vendor Detail

`GET /api/v1/marketplace/vendors/{vendor_id}`

Response must include only fields the requester is allowed to view.

### 24.3 Submit Vendor Evidence

`POST /api/v1/marketplace/vendors/{vendor_id}/evidence`

Request:

```json
{
  "evidence_type": "security_questionnaire",
  "visibility": "internal_only",
  "expires_at": "2027-06-18T00:00:00Z",
  "file_id": "file_123"
}
```

### 24.4 Request Vendor Review

`POST /api/v1/marketplace/vendors/{vendor_id}/reviews`

Request:

```json
{
  "review_type": "enterprise_approval",
  "scope": "specific_organization",
  "organization_id": "org_123",
  "reason": "Customer requested enterprise approval before purchasing asset"
}
```

### 24.5 Approve Vendor

`POST /api/v1/marketplace/vendors/{vendor_id}/approvals`

Request:

```json
{
  "approval_scope": "specific_organization",
  "organization_id": "org_123",
  "decision": "approve_with_restrictions",
  "restrictions": ["human_review_required", "no_sensitive_data"],
  "expires_at": "2027-06-18T00:00:00Z",
  "reason": "Approved for non-sensitive support templates only"
}
```

### 24.6 Block Vendor for Organization

`POST /api/v1/organizations/{organization_id}/vendor-blocks`

Request:

```json
{
  "vendor_id": "vendor_123",
  "reason": "Not approved by internal procurement",
  "scope": "all_assets"
}
```

### 24.7 Export Vendor Inventory

`GET /api/v1/organizations/{organization_id}/vendor-inventory/export`

Used for enterprise audit and procurement review.

---

## 25. Webhook Events

Ariyo must emit vendor lifecycle events:

```text
marketplace.vendor.created
marketplace.vendor.identity_verified
marketplace.vendor.review_requested
marketplace.vendor.approved
marketplace.vendor.approved_with_restrictions
marketplace.vendor.rejected
marketplace.vendor.restricted
marketplace.vendor.suspended
marketplace.vendor.terminated
marketplace.vendor.evidence_added
marketplace.vendor.evidence_expiring
marketplace.vendor.evidence_expired
marketplace.vendor.subprocessor_added
marketplace.vendor.risk_score_changed
marketplace.vendor.trust_score_changed
marketplace.vendor.enterprise_approval_expiring
marketplace.vendor.enterprise_approval_revoked
```

Webhook payload must include:

- vendor ID,
- organization ID if scoped,
- event type,
- old status,
- new status,
- risk tier,
- affected assets,
- timestamp,
- correlation ID.

---

## 26. Frontend Requirements

### 26.1 Vendor Directory

Internal and enterprise-facing directory with:

- vendor name,
- status,
- type,
- trust badges,
- risk labels,
- assets,
- approval scope,
- evidence status,
- subprocessor status.

### 26.2 Vendor Detail Page

Must include:

- profile,
- trust summary,
- asset inventory,
- approval history,
- evidence summary,
- restrictions,
- incidents,
- disputes,
- support performance,
- procurement status.

### 26.3 Enterprise Vendor Review Flow

Must guide admins through:

- request review,
- review evidence,
- approve/reject/block,
- set restrictions,
- define expiration,
- notify stakeholders.

### 26.4 Vendor Risk Explanation

Risk score must be explained in human-readable terms.

Bad:

```text
Risk: 82
```

Good:

```text
High risk because this vendor publishes assets that can access CRM data and send external emails. Human approval is required before activation.
```

### 26.5 Evidence Visibility

Frontend must respect evidence permissions.

Do not expose confidential internal notes to customers or vendors.

---

## 27. Backend Requirements

Backend must enforce:

- vendor status rules,
- organization vendor policies,
- asset installation restrictions,
- entitlement checks,
- evidence expiration effects,
- subprocessor disclosure rules,
- payout holds,
- vendor blocklists,
- enterprise approval scopes,
- audit logs.

Backend must not rely on frontend-only hiding.

---

## 28. Observability Events

Required events:

```text
vendor_profile_started
vendor_profile_completed
vendor_identity_verification_started
vendor_identity_verification_passed
vendor_identity_verification_failed
vendor_review_requested
vendor_review_completed
vendor_approved
vendor_rejected
vendor_restricted
vendor_suspended
vendor_reinstated
vendor_evidence_submitted
vendor_evidence_expired
vendor_enterprise_approval_requested
vendor_enterprise_approval_granted
vendor_enterprise_approval_revoked
vendor_subprocessor_added
vendor_subprocessor_review_required
vendor_blocked_by_customer
vendor_unblocked_by_customer
vendor_risk_score_changed
vendor_trust_score_changed
```

All events must include:

- vendor ID,
- actor ID,
- organization ID when relevant,
- asset IDs when relevant,
- plan,
- reason,
- correlation ID.

---

## 29. Advanced KPI System

### Vendor Trust KPI

- Vendor Trust Score
- Vendor Risk Score
- Vendor Quality Score
- Approved Vendor Ratio
- Restricted Vendor Ratio
- Suspended Vendor Ratio
- Enterprise Approved Vendor Count

### Evidence KPI

- Evidence Completion Rate
- Evidence Expiration Rate
- Average Evidence Review Time
- Evidence Rejection Rate
- Security Questionnaire Completion Rate
- Privacy Questionnaire Completion Rate

### Enterprise Procurement KPI

- Vendor Approval Cycle Time
- Procurement Approval Delay
- Vendor Review Reopen Rate
- Vendor Block Rate by Enterprise Customers
- Enterprise Vendor Approval Conversion Rate

### Marketplace Integrity KPI

- Vendor Incident Rate
- Vendor Dispute Rate
- Vendor Policy Violation Rate
- Vendor Refund Rate
- Vendor Support Ticket Rate
- Suspicious Vendor Activity Rate

### Commercial KPI

- Revenue by Vendor
- Revenue by Enterprise Approved Vendor
- Payout Hold Rate
- Refund Rate by Vendor
- Net Revenue Retention by Vendor Asset
- Creator/Partner Revenue Concentration Risk

### Customer Trust KPI

- Customer-Approved Vendor Ratio
- Installed Assets from Approved Vendors
- Installed Assets from Restricted Vendors
- Vendor-Related Churn Risk
- Vendor-Related Support Escalations

---

## 30. AI Vendor Risk Assistant Rules

Ariyo may provide an AI Vendor Risk Assistant.

It may:

- summarize vendor evidence,
- identify missing documents,
- explain risk factors,
- suggest review questions,
- compare vendor risk with policy,
- draft internal review notes,
- generate customer-safe vendor summaries.

It must not:

- approve vendors autonomously,
- hide evidence gaps,
- fabricate compliance status,
- expose confidential evidence,
- override security/legal reviewers,
- make legal conclusions,
- guarantee vendor safety.

---

## 31. Security and Privacy Rules

Ariyo must:

- protect vendor evidence,
- restrict access to sensitive documents,
- log all evidence access,
- separate vendor data by organization where applicable,
- prevent vendors from seeing customer trust notes,
- prevent customers from seeing unrelated vendor private data,
- redact sensitive information in AI summaries,
- require explicit authorization for vendor access to customer data.

Vendor management is security-sensitive.

---

## 32. Financial Controls

Vendor management must integrate with finance systems.

Rules:

- suspended vendors may have payout holds,
- terminated vendors require final reconciliation,
- high-risk vendors may require longer payout delay,
- disputed vendors may have asset-level payout holds,
- vendor legal entity changes require payout re-verification,
- tax document expiration may pause payouts,
- enterprise vendor approval may affect private offers.

---

## 33. Incident and Enforcement Integration

Vendor management must integrate with:

- marketplace trust and safety,
- dispute resolution,
- policy enforcement,
- AI incident response,
- security incident response,
- billing and payout controls.

If a vendor is involved in an incident, Ariyo must be able to:

- freeze new installs,
- pause affected assets,
- hold payouts,
- notify affected customers,
- request evidence,
- launch investigation,
- downgrade trust score,
- trigger re-review.

---

## 34. Forbidden Patterns

Never:

- treat marketplace approval as enterprise approval,
- show unverified vendors as trusted,
- allow expired evidence to remain silently valid,
- allow vendors to process customer data without disclosure,
- let vendors bypass customer approval policies,
- allow high-risk vendors without enhanced review,
- expose confidential evidence to unauthorized users,
- allow vendor status to be changed without audit trail,
- allow suspended vendors to receive unrestricted payouts,
- hide subprocessors from enterprise customers,
- let sponsored vendors bypass risk ranking,
- rank vendors purely by revenue,
- allow vendor trust score to override critical security issues,
- use AI summaries as proof of compliance,
- approve vendors without scoped approval boundaries,
- rely on frontend-only vendor restrictions.

---

## 35. Golden Rule

Marketplace vendors are part of Ariyo's trust boundary.

Ariyo must not let marketplace scale, creator revenue, partner growth, or enterprise demand weaken vendor governance.

Every vendor must be identifiable, reviewable, auditable, restrictable, and accountable.

---

## 36. Final Rule

If a vendor cannot clearly answer who they are, what they provide, what data they touch, what risk they introduce, what evidence supports their claims, who supports their customers, and how they can be removed safely, that vendor is not ready for enterprise marketplace trust.
