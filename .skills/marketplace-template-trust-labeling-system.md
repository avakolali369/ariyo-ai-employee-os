# Ariyo Marketplace Template Trust Labeling System Skill

## 1. Core Contract

Ariyo Marketplace Template Trust Labeling System is not a marketing badge layer.

It is the governed customer-facing trust communication system that explains what Ariyo knows, has verified, has not verified, has certified, has measured, has restricted, has deprecated, and has evidence for each Marketplace template, AI Employee asset, Agent Team template, Workflow template, Knowledge pack, GEO template, Integration bundle, internal template, private catalog asset, partner solution, and enterprise-ready marketplace asset.

Ariyo must help customers understand trust quickly without oversimplifying risk.

Ariyo must never allow labels, badges, creator claims, sponsored placement, or visual design to imply stronger verification than actually exists.

## 2. Purpose

This skill defines how Ariyo designs, computes, governs, displays, explains, expires, revokes, audits, and protects trust labels across the Marketplace.

Trust labels exist to help customers answer:

- Is this template safe enough for my plan and organization?
- Has Ariyo reviewed it?
- Has it passed simulation, safety, reliability, cost, and outcome checks?
- Is the creator verified?
- Is the vendor approved?
- Does it use sensitive data?
- Does it call tools or integrations?
- Does it use external AI model providers?
- Does it process data outside my region?
- Is it enterprise-ready?
- Is the label current or expired?
- What evidence supports this label?
- What limitations should I understand before installing?

## 3. System Dependencies

Trust Labeling must integrate with:

- `marketplace-template-certification-program.md`
- `marketplace-template-quality-benchmarking.md`
- `marketplace-template-outcome-intelligence.md`
- `marketplace-template-health-monitoring.md`
- `marketplace-template-dependency-registry.md`
- `marketplace-template-lifecycle-optimization.md`
- `marketplace-regulatory-compliance-matrix.md`
- `marketplace-compliance-evidence-center.md`
- `marketplace-data-residency-region-controls.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-installation-entitlements.md`
- `marketplace-policy-enforcement-rules.md`
- `marketplace-trust-safety-operations.md`
- `marketplace-enterprise-vendor-management.md`
- `marketplace-enterprise-audit-reports.md`
- `marketplace-billing-payouts.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-simulation-sandbox.md`
- `ai-safety-evaluation.md`
- `human-review-governance.md`
- `security-threat-model.md`
- `data-governance-privacy.md`
- `compliance-legal-risk.md`
- `enterprise-readiness.md`

Trust labels must be derived from governed systems, not manually invented by marketing pages.

## 4. Label Philosophy

A trust label is a compact, customer-facing explanation of a governed fact.

A trust label is not:

- a promotional claim
- a popularity badge
- an ad unit
- a guarantee of future performance
- a permanent approval
- a creator-controlled statement
- a substitute for install-time review
- a substitute for enterprise procurement
- a substitute for customer-specific policy checks

Trust labels must be:

- evidence-backed
- current
- understandable
- scoped
- non-misleading
- revocable
- auditable
- explainable
- permission-aware
- plan-aware
- customer-context-aware

## 5. Trust Label Categories

Ariyo may support the following label categories.

### 5.1 Review Labels

Used to show what kind of Ariyo review has occurred.

Examples:

- `Ariyo Reviewed`
- `Human Reviewed`
- `AI Safety Reviewed`
- `Security Reviewed`
- `Privacy Reviewed`
- `Enterprise Reviewed`
- `Procurement Ready`
- `Private Catalog Approved`

These labels must always link to a summary of what was reviewed and what was not reviewed.

### 5.2 Certification Labels

Used to show certification status from the certification program.

Examples:

- `Certified Basic Ready`
- `Certified Pro Ready`
- `Certified Smart Ready`
- `Certified Enterprise Ready`
- `Certified Low Risk`
- `Certified Low Cost Drift`
- `Certified High Reliability`
- `Certified Outcome Proven`

Certification labels must be issued only by governed certification workflows.

### 5.3 Evidence Labels

Used to show available compliance, security, privacy, or operational evidence.

Examples:

- `Evidence Available`
- `Security Evidence Available`
- `Privacy Evidence Available`
- `Vendor Evidence Available`
- `Subprocessor Disclosure Available`
- `Region Evidence Available`
- `Control Mapping Available`
- `Audit Package Available`

Evidence labels must show freshness and access restrictions.

### 5.4 Operational Labels

Used to communicate current operational quality.

Examples:

- `Healthy`
- `Monitoring Active`
- `Auto Remediation Enabled`
- `Low Failure Rate`
- `High Successful Run Rate`
- `Dependency Stable`
- `Cost Stable`
- `Maintained Recently`
- `Update Available`
- `Deprecated Soon`
- `Suspended`

Operational labels must be dynamic and derived from health monitoring.

### 5.5 Outcome Labels

Used to communicate measured customer value.

Examples:

- `Outcome Measured`
- `Customer-Confirmed Value`
- `High Activation Rate`
- `High Retention After Install`
- `Time-to-Value Verified`
- `ROI Signal Available`
- `Business Impact Evidence`

Outcome labels must not overpromise. They must show sample size, confidence, and limitations where possible.

### 5.6 Risk Labels

Used to clarify risk, not hide it.

Examples:

- `Uses Sensitive Data`
- `Requires External Integration`
- `Requires Tool Permissions`
- `Uses External AI Provider`
- `May Trigger Actions`
- `Requires Admin Approval`
- `Region Restricted`
- `High Cost Variability`
- `Human Review Recommended`
- `Enterprise Approval Required`

Risk labels must be visible before install.

### 5.7 Commercial Labels

Used to explain pricing and commercial state.

Examples:

- `Free`
- `Paid`
- `Usage-Based`
- `Subscription Required`
- `Creator Revenue Share`
- `Partner Service Available`
- `Sponsored`
- `Private Offer Available`
- `Procurement Required`

Commercial labels must not be visually confused with safety or quality labels.

### 5.8 Creator and Vendor Labels

Used to communicate creator/vendor trust state.

Examples:

- `Verified Creator`
- `Certified Creator`
- `Trusted Partner`
- `Enterprise Vendor Approved`
- `New Creator`
- `Creator Under Review`
- `Vendor Evidence Pending`
- `Partner-Supported`

Creator labels must not imply every asset from that creator is safe.

## 6. Label Object Model

### 6.1 TrustLabel

```ts
type TrustLabel = {
  id: string;
  code: string;
  name: string;
  category:
    | 'review'
    | 'certification'
    | 'evidence'
    | 'operational'
    | 'outcome'
    | 'risk'
    | 'commercial'
    | 'creator'
    | 'vendor'
    | 'policy'
    | 'region'
    | 'custom_enterprise';
  severity?: 'positive' | 'neutral' | 'warning' | 'critical' | 'blocked';
  scope: TrustLabelScope;
  status: 'active' | 'pending' | 'expired' | 'revoked' | 'suspended' | 'hidden' | 'archived';
  issuedBy: 'system' | 'human_reviewer' | 'certification_board' | 'enterprise_admin' | 'trust_safety' | 'vendor_management';
  issuedAt: string;
  expiresAt?: string;
  revokedAt?: string;
  revocationReason?: string;
  evidenceRefs: string[];
  limitationSummary: string;
  customerFacingExplanation: string;
  internalRationale: string;
  displayRules: TrustLabelDisplayRules;
  auditTrailId: string;
};
```

### 6.2 TrustLabelScope

```ts
type TrustLabelScope = {
  assetId?: string;
  templateId?: string;
  versionId?: string;
  creatorId?: string;
  vendorId?: string;
  organizationId?: string;
  workspaceId?: string;
  catalogId?: string;
  plan?: 'basic' | 'pro' | 'smart' | 'enterprise';
  region?: string;
  dataClass?: string;
  customerSegment?: string;
};
```

### 6.3 TrustLabelEvidenceSummary

```ts
type TrustLabelEvidenceSummary = {
  labelId: string;
  evidenceItems: Array<{
    evidenceId: string;
    evidenceType:
      | 'certification_result'
      | 'human_review'
      | 'simulation_result'
      | 'benchmark_result'
      | 'health_metric'
      | 'outcome_metric'
      | 'security_document'
      | 'privacy_document'
      | 'vendor_attestation'
      | 'audit_report'
      | 'incident_history'
      | 'policy_decision';
    title: string;
    summary: string;
    status: 'current' | 'stale' | 'expired' | 'revoked' | 'restricted';
    issuedAt: string;
    expiresAt?: string;
    customerVisible: boolean;
  }>;
};
```

### 6.4 TrustLabelDisplayRules

```ts
type TrustLabelDisplayRules = {
  showOnMarketplaceCard: boolean;
  showOnTemplateDetailPage: boolean;
  showDuringInstallPreview: boolean;
  showInPrivateCatalog: boolean;
  showInEnterpriseReports: boolean;
  showInCreatorDashboard: boolean;
  showInAdminConsole: boolean;
  requireTooltip: boolean;
  requireEvidenceLink: boolean;
  requireLimitationText: boolean;
  requireExpirationDate: boolean;
  hideFromPublicSearch?: boolean;
};
```

## 7. Label Truth Source Rules

Each label must have a single authoritative source.

| Label Type | Source of Truth |
|---|---|
| Certification label | Certification Program |
| Quality benchmark label | Quality Benchmarking |
| Health label | Health Monitoring |
| Outcome label | Outcome Intelligence |
| Region label | Data Residency Controls |
| Evidence label | Compliance Evidence Center |
| Vendor label | Enterprise Vendor Management |
| Policy label | Policy Enforcement |
| Creator label | Creator Success + Trust Safety |
| Pricing label | Billing/Payouts |
| Sponsored label | Marketplace Billing + Ads Governance |
| Install approval label | Installation Entitlements |

No frontend component may hardcode trust labels without a backend label decision.

## 8. Label Confidence Model

Trust labels must include confidence where relevant.

```ts
type TrustLabelConfidence = {
  labelId: string;
  confidenceLevel: 'low' | 'medium' | 'high' | 'verified';
  sampleSize?: number;
  dataFreshnessDays?: number;
  evidenceCompleteness: number;
  reviewerConfidence?: number;
  automatedSignalConfidence?: number;
  limitationFlags: string[];
};
```

Customer-facing confidence rules:

- Low confidence labels must not appear as strong trust badges.
- Outcome labels with small sample sizes must state that results may vary.
- Certification labels must show current/expired status.
- Review labels must explain review scope.
- Evidence labels must show whether evidence is public, restricted, or enterprise-only.

## 9. Label Expiration Rules

Labels must expire when evidence becomes stale.

Examples:

| Label | Default Expiration |
|---|---:|
| Human Reviewed | 180 days |
| Security Reviewed | 180 days |
| Privacy Reviewed | 180 days |
| Certified Basic Ready | 365 days |
| Certified Pro Ready | 365 days |
| Certified Smart Ready | 180 days |
| Enterprise Ready | 180 days |
| Low Cost Drift | 90 days |
| High Reliability | 90 days |
| Outcome Proven | 90 days |
| Vendor Evidence Available | evidence-specific |
| Region Compatible | until dependency or policy changes |

Expiration must trigger:

- label status update
- creator notification
- marketplace visibility recalculation
- ranking recalculation
- install preview warning
- enterprise evidence report update
- renewal workflow if eligible

## 10. Label Revocation Rules

A trust label must be revoked when:

- supporting evidence is invalidated
- certification is revoked
- a serious incident occurs
- policy violation is confirmed
- creator or vendor becomes suspended
- dependency becomes unsafe
- region compatibility changes
- output safety degrades
- cost behavior becomes misleading
- customer complaints reveal material misrepresentation
- label was issued by mistake
- template version changed materially without re-review

Revocation must be auditable and explainable.

## 11. Label Hierarchy

When labels conflict, risk labels must override positive labels.

Examples:

- `Certified Smart Ready` cannot hide `Region Restricted`.
- `Verified Creator` cannot hide `Template Under Investigation`.
- `High Activation Rate` cannot hide `High Cost Variability`.
- `Enterprise Ready` cannot hide `Vendor Evidence Expired`.
- `Sponsored` cannot outrank `Suspended`.

Priority order:

1. Blocked / Suspended / Prohibited
2. Critical risk labels
3. Policy enforcement labels
4. Region/data residency labels
5. Install approval labels
6. Certification labels
7. Evidence labels
8. Operational labels
9. Outcome labels
10. Creator/vendor reputation labels
11. Commercial labels
12. Marketing labels

## 12. Customer-Facing Label UX

### 12.1 Marketplace Card

Cards may show a small number of high-signal labels.

Recommended max:

- 2 positive trust labels
- 1 risk label
- 1 commercial label

Example:

- `Certified Pro Ready`
- `High Activation Rate`
- `Requires CRM Access`
- `Paid`

### 12.2 Template Detail Page

Template detail pages must include a Trust & Evidence panel.

Panel sections:

- Trust summary
- Certification status
- Review history
- Risk labels
- Data/access labels
- Region labels
- Vendor/creator labels
- Evidence links
- Limitations
- Expiration/renewal status
- Last updated date

### 12.3 Install Preview

Install preview must show labels that affect install decision.

Required labels:

- permissions required
- plan compatibility
- region compatibility
- data categories used
- AI model providers used
- integrations required
- billing model
- certification state
- unresolved risk warnings

### 12.4 Enterprise Admin Console

Enterprise admins must see:

- all labels, including hidden/internal labels
- label source
- evidence link
- expiration
- revocation history
- organization-specific overrides
- private catalog label overrides
- procurement status
- vendor approval status

## 13. Label Explanation Requirements

Every label must have a short explanation and a deeper evidence view.

Bad:

> Safe

Good:

> Security Reviewed: Ariyo reviewed this template's declared permissions, integration dependencies, data categories, and tool actions on 2026-06-10. This review does not guarantee future behavior after dependency changes.

Bad:

> Best Template

Good:

> High Activation Rate: Over the last 90 days, this template reached activation in 72% of eligible Pro installations with at least 50 installs. Results may vary by customer setup.

## 14. Marketing Claims vs Trust Labels

Ariyo must separate creator marketing claims from governed trust labels.

Creator claims may appear in description areas.

Governed trust labels must appear in trust UI areas.

Creator claims must not use reserved trust label terms unless verified.

Reserved terms include:

- certified
- verified
- approved
- secure
- compliant
- enterprise-ready
- privacy-safe
- low-risk
- guaranteed
- audited
- official
- Ariyo reviewed

Use of reserved terms requires governed evidence.

## 15. Sponsored Label Rules

Sponsored labels must be clear and never look like trust labels.

Rules:

- Sponsored placement must be labeled as sponsored.
- Sponsorship must not imply quality or safety.
- Sponsored templates must still pass ranking, trust, policy, and installation gates.
- Suspended or unsafe templates cannot be sponsored.
- Sponsorship must not hide negative labels.
- Sponsored templates must not use trust colors or icons reserved for certification.

## 16. Plan-Aware Label Rules

### 16.1 Basic

Basic users must see simple, plain-language labels.

Basic labels should emphasize:

- easy setup
- low cost
- low risk
- limited permissions
- no admin approval required
- safe for first use

Basic must not be shown advanced templates as safe merely because they are popular.

### 16.2 Pro

Pro users must see operational labels.

Pro labels should emphasize:

- workflow reliability
- integration readiness
- team permissions
- support burden
- outcome metrics
- department fit
- automation risk

### 16.3 Smart

Smart users must see advanced labels.

Smart labels should emphasize:

- multi-agent readiness
- advanced AI provider usage
- cost variability
- model routing
- human approval requirements
- enterprise governance readiness
- data residency
- compliance evidence
- auditability

Smart must show deeper label explanations because risk is higher.

## 17. Enterprise Label Overrides

Enterprise customers may define internal labels for private catalogs.

Examples:

- `Approved by Security`
- `Finance Approved`
- `Legal Reviewed`
- `EU Only`
- `Department Restricted`
- `Pilot Only`
- `Do Not Install Without Approval`
- `Approved Vendor`

Enterprise label overrides must:

- be scoped to organization/workspace/catalog
- never override Ariyo critical risk labels
- be auditable
- show issuer and timestamp
- support expiration
- support revocation
- appear in enterprise audit reports

## 18. Label Anti-Abuse Rules

The system must prevent:

- creators faking labels in images or descriptions
- creators using reserved label terms without evidence
- badge-like marketing graphics
- sponsored labels looking like trust labels
- old certification screenshots being reused
- expired labels being displayed by cached clients
- label status being hidden during install
- partners implying unsupported certification
- fake review manipulation producing outcome labels
- creator self-attestation appearing as Ariyo verification

## 19. Label Decision Engine

Ariyo must compute labels through a Label Decision Engine.

```ts
type LabelDecisionRequest = {
  assetId: string;
  versionId?: string;
  organizationId?: string;
  workspaceId?: string;
  catalogId?: string;
  plan?: 'basic' | 'pro' | 'smart' | 'enterprise';
  region?: string;
  userRole?: string;
  surface:
    | 'marketplace_card'
    | 'template_detail'
    | 'install_preview'
    | 'admin_console'
    | 'creator_dashboard'
    | 'enterprise_report'
    | 'search_results'
    | 'recommendation_panel';
};

type LabelDecisionResponse = {
  assetId: string;
  versionId: string;
  labels: TrustLabel[];
  hiddenLabels: TrustLabel[];
  blockingLabels: TrustLabel[];
  warnings: string[];
  evidenceSummary: TrustLabelEvidenceSummary;
  decisionId: string;
  generatedAt: string;
};
```

Decision engine inputs:

- certification status
- benchmark results
- health status
- outcome metrics
- dependency registry
- region controls
- policy enforcement
- evidence center
- vendor status
- creator trust score
- billing state
- catalog scope
- plan compatibility
- install entitlement state

## 20. Label API Contract

### 20.1 Get Labels for Asset

```http
GET /api/v1/marketplace/assets/{assetId}/trust-labels?surface=template_detail&organization_id=org_123
```

Response:

```json
{
  "asset_id": "asset_123",
  "version_id": "ver_456",
  "labels": [
    {
      "code": "CERTIFIED_PRO_READY",
      "name": "Certified Pro Ready",
      "category": "certification",
      "status": "active",
      "severity": "positive",
      "customer_facing_explanation": "This template passed Ariyo's Pro readiness checks for workflow reliability, permissions, integration setup, and operational use.",
      "expires_at": "2026-12-31T00:00:00Z",
      "evidence_refs": ["evidence_001"]
    }
  ],
  "blocking_labels": [],
  "warnings": [
    "This template requires CRM access before installation."
  ],
  "generated_at": "2026-06-19T09:00:00Z"
}
```

### 20.2 Get Label Evidence

```http
GET /api/v1/marketplace/trust-labels/{labelId}/evidence
```

### 20.3 Issue Enterprise Label

```http
POST /api/v1/marketplace/private-catalogs/{catalogId}/labels
```

Request:

```json
{
  "asset_id": "asset_123",
  "label_code": "FINANCE_APPROVED",
  "label_name": "Finance Approved",
  "expires_at": "2026-09-30T00:00:00Z",
  "reason": "Approved for Q3 department budget."
}
```

### 20.4 Revoke Label

```http
POST /api/v1/marketplace/trust-labels/{labelId}/revoke
```

Request:

```json
{
  "reason": "Supporting vendor evidence expired.",
  "notify_creator": true,
  "notify_enterprise_admins": true
}
```

### 20.5 Validate Creator Claims

```http
POST /api/v1/marketplace/assets/{assetId}/trust-claims/validate
```

## 21. Webhook Events

Ariyo must emit events when trust labels change.

Examples:

- `marketplace.trust_label.issued`
- `marketplace.trust_label.expired`
- `marketplace.trust_label.revoked`
- `marketplace.trust_label.evidence_updated`
- `marketplace.trust_label.display_changed`
- `marketplace.trust_label.claim_violation_detected`
- `marketplace.trust_label.enterprise_override_added`
- `marketplace.trust_label.enterprise_override_revoked`
- `marketplace.trust_label.install_warning_triggered`

Event payload:

```json
{
  "event": "marketplace.trust_label.revoked",
  "label_id": "label_123",
  "asset_id": "asset_123",
  "version_id": "ver_456",
  "reason": "Security review expired",
  "severity": "warning",
  "timestamp": "2026-06-19T09:00:00Z"
}
```

## 22. Frontend Requirements

Frontend must:

- display labels consistently across marketplace surfaces
- distinguish trust labels from marketing claims
- distinguish sponsored labels from trust labels
- show tooltips for label meaning
- show evidence links where available
- show expiration for time-sensitive labels
- show warnings before install
- show blocked labels prominently
- support mobile label summaries
- avoid badge overload
- support enterprise label overlays
- support private catalog labels
- support localization
- support screen readers
- show label history in admin views

Frontend must not:

- hardcode labels
- use misleading colors
- hide risk labels behind clicks only
- show expired labels as active
- allow creators to upload fake badge graphics
- make sponsored templates look certified

## 23. Backend Requirements

Backend must:

- compute label decisions from source-of-truth systems
- cache labels with short TTL for dynamic labels
- invalidate labels on evidence, policy, health, vendor, dependency, or version changes
- enforce reserved term validation
- support label audit trail
- support enterprise overrides
- support label expiration jobs
- support label revocation jobs
- integrate with ranking and search
- integrate with install preview
- integrate with audit reports
- integrate with compliance evidence center
- expose label APIs
- emit label events

## 24. Trust Label Audit Trail

Every label state change must log:

- label ID
- asset ID
- version ID
- previous status
- new status
- issuer
- reason
- evidence refs
- customer/org scope
- timestamp
- automated/human decision source
- notification state
- affected surfaces

Audit logs must be tamper-evident and exportable for enterprise customers where scoped.

## 25. Ranking and Search Integration

Trust labels may influence ranking, but must not replace ranking logic.

Positive labels may increase ranking only when current and evidence-backed.

Risk labels may decrease ranking or add install gates.

Blocked labels must remove or restrict visibility.

Sponsored listings must not override negative trust labels.

Search filters may include:

- Certified templates
- Enterprise ready
- Low cost drift
- No external AI provider
- EU region compatible
- Security reviewed
- Outcome measured
- Verified creator
- Private catalog approved

## 26. Install Preview Integration

Install preview must always display labels related to:

- blocked state
- plan incompatibility
- region incompatibility
- sensitive data usage
- external provider usage
- required permissions
- billing model
- evidence gaps
- certification status
- approval requirements

If a label implies a blocking condition, install must not proceed unless the entitlement and governance system allows an exception.

## 27. Creator Dashboard

Creators must see:

- active labels
- pending labels
- expired labels
- revoked labels
- label evidence gaps
- renewal requirements
- certification progress
- marketing claim violations
- improvement suggestions
- label impact on ranking

Creators must not be able to directly assign governed labels to their own assets.

## 28. Admin Console

Ariyo admins must be able to:

- inspect all labels
- view evidence
- issue internal labels where permitted
- revoke labels
- override display rules
- investigate claim abuse
- view label history
- simulate label decision by customer/org/plan/region
- export label reports
- review label impact on ranking

## 29. Security and Privacy Rules

Trust labels must not reveal sensitive internal details.

Examples:

- Do not expose private incident details to public customers.
- Do not reveal another customer's usage data.
- Do not expose security vulnerabilities in public label explanations.
- Do not show restricted compliance evidence to unauthorized users.
- Do not reveal confidential vendor evidence outside approved scope.
- Do not expose region-sensitive architecture details beyond what is appropriate.

## 30. Label Redaction Model

Public users, authenticated customers, enterprise admins, creators, and Ariyo operators may see different detail levels.

```ts
type LabelVisibilityLevel =
  | 'public_summary'
  | 'authenticated_summary'
  | 'customer_install_detail'
  | 'enterprise_admin_detail'
  | 'creator_detail'
  | 'ariyo_internal_detail';
```

A label may be visible publicly while its evidence remains restricted.

## 31. KPI Framework

Track:

- Trust Label Coverage Rate
- Expired Label Rate
- Revoked Label Rate
- Evidence-Backed Label Rate
- Label Clickthrough to Evidence
- Install Conversion Lift by Label
- Install Cancellation Due to Risk Label
- Label Misuse Detection Rate
- Creator Claim Violation Rate
- Sponsored Label Confusion Rate
- Customer Trust Panel Engagement
- Enterprise Label Override Usage
- Label-Driven Support Deflection
- Label Accuracy Audit Pass Rate
- Label Freshness SLA
- Certification-to-Trust-Label Sync Latency

## 32. AI Trust Label Assistant

Ariyo may provide an AI assistant to help explain labels.

The assistant may:

- summarize labels
- explain limitations
- compare labels between templates
- identify install concerns
- explain evidence status
- suggest admin review questions
- help creators understand missing evidence

The assistant must not:

- invent labels
- claim certification without evidence
- hide risk labels
- override policy decisions
- provide legal guarantees
- expose restricted evidence
- recommend unsafe installs

## 33. Example Customer Explanation

For a Pro customer viewing a CRM automation template:

```text
This template is Certified Pro Ready and has a High Activation Rate. It requires CRM access and may trigger outbound follow-up tasks. Ariyo reviewed its declared permissions and workflow behavior, but your admin should confirm CRM access before installation. The certification expires on 2026-12-31.
```

For a Smart customer viewing a multi-agent template:

```text
This template is Smart Ready, uses external AI model routing, requires multiple tool permissions, and includes human approval gates. It has outcome evidence from similar teams but may have variable AI costs. Review the model provider, region, and cost labels before installation.
```

## 34. Forbidden Patterns

Ariyo must never:

- display expired labels as active
- let creators self-assign official labels
- let sponsored labels resemble certification labels
- hide critical risk labels
- display certification without evidence
- display outcome labels without sample/confidence context
- imply legal compliance without control mapping
- show a creator-level label as template-level approval
- let cached clients show revoked labels
- use vague labels like `safe`, `best`, or `guaranteed`
- bury limitations in fine print
- use trust labels as pure conversion optimization tools
- allow visual badge abuse in marketplace images
- rank unsafe templates higher because of labels unrelated to safety
- treat trust labels as permanent

## 35. Golden Rule

Trust labels are promises of transparency, not promises of perfection.

Ariyo must use labels to clarify trust, risk, evidence, limitations, and readiness — never to decorate, manipulate, obscure, or over-sell marketplace assets.
