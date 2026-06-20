# Ariyo Marketplace Regulatory Compliance Matrix Skill

## 1. Core Contract

Ariyo Marketplace Regulatory Compliance Matrix is not a legal checklist pasted into a product backlog.

It is the governed compliance intelligence layer that maps marketplace assets, AI employees, templates, integrations, vendors, creators, partners, customer data flows, procurement actions, audit evidence, retention behavior, regional constraints, AI risk obligations, and operational controls to the regulatory and contractual obligations that matter for safe enterprise adoption.

Ariyo must not treat compliance as a static document.

Ariyo must treat compliance as a living matrix that connects requirements, controls, evidence, ownership, gaps, approvals, exceptions, product behavior, and customer-facing trust outputs.

> This skill is a product and engineering governance framework. It is not legal advice. Ariyo must involve qualified legal counsel before making jurisdiction-specific legal claims, policy commitments, or regulated-market representations.

---

## 2. Why this Skill Exists

Ariyo Marketplace includes AI Employee templates, Agent Team templates, workflow automations, integrations, knowledge packs, GEO/AI SEO assets, partner services, marketplace apps, and vendor-provided solutions.

Enterprise customers will ask:

- Which regulations does this asset touch?
- What data does it process?
- Where is the data stored or transferred?
- Which vendor, creator, partner, or subprocessor is involved?
- Which AI risks exist?
- Which controls reduce those risks?
- Which evidence proves the control exists?
- Which obligations remain open?
- Which assets can be installed in this organization or region?
- Which reports can procurement, legal, security, and compliance teams export?

This skill defines the matrix that answers those questions consistently.

---

## 3. Relationship to Other Ariyo Skills

This skill must integrate with:

- `data-governance-privacy.md`
- `compliance-legal-risk.md`
- `security-threat-model.md`
- `enterprise-readiness.md`
- `trust-center-public-status.md`
- `legal-pages-policy-system.md`
- `marketplace-compliance-evidence-center.md`
- `marketplace-enterprise-audit-reports.md`
- `marketplace-enterprise-vendor-management.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-policy-enforcement-rules.md`
- `marketplace-installation-entitlements.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-memory-context.md`
- `ai-safety-evaluation.md`
- `human-review-governance.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-observability-tracing.md`
- `feature-flags-rollout-system.md`
- `reliability-sla.md`
- `observability-analytics-events.md`

This skill owns regulatory mapping logic.

It does not replace legal counsel, privacy counsel, security certification, procurement approval, or customer contractual negotiation.

---

## 4. Compliance Principles

### 4.1 Matrix over memo

Compliance must be modeled as structured data, not only policy text.

Every compliance obligation should map to:

- jurisdiction or framework
- obligation category
- applicable asset types
- applicable data categories
- required controls
- evidence objects
- responsible owner
- review frequency
- status
- exceptions
- customer-facing explanation

### 4.2 Product behavior must reflect compliance state

If a marketplace asset has unresolved compliance blockers, the product must be able to:

- block installation
- require admin approval
- restrict regions
- require customer acknowledgment
- require vendor evidence
- require security review
- downgrade feature access
- disable data export
- restrict AI actions
- escalate to legal/security review

### 4.3 No unsupported compliance claims

Ariyo must never claim an asset is “compliant with X” unless:

- the requirement scope is defined
- evidence is linked
- control owners are assigned
- legal/compliance review status allows the claim
- expiration dates are valid
- customer-facing wording has been approved

### 4.4 Compliance must be plan-aware

Basic, Pro, and Smart plans have different risk surfaces, controls, and review needs.

### 4.5 Compliance must be customer-context-aware

The same marketplace asset may be safe for one customer and restricted for another because of:

- industry
- geography
- data residency needs
- internal policies
- customer plan
- enabled integrations
- user role
- risk appetite
- procurement approval status
- vendor approval status
- data category processed

---

## 5. Compliance Scope

The Regulatory Compliance Matrix must cover at minimum:

1. Privacy and data protection
2. Data residency and cross-border transfers
3. AI governance and AI risk obligations
4. Security controls
5. Vendor and subprocessor obligations
6. Consumer/business transparency obligations
7. Retention and deletion requirements
8. Auditability and logging requirements
9. Procurement and contract controls
10. Billing, tax, and payout readiness
11. Marketplace safety and abuse controls
12. Industry-specific customer requirements
13. Enterprise evidence and reporting
14. Accessibility and user rights where applicable
15. Human review and escalation requirements

---

## 6. Compliance Matrix Objects

### 6.1 RegulatoryFramework

Represents a law, regulation, standard, policy framework, contractual requirement set, customer requirement profile, or internal Ariyo compliance baseline.

```ts
type RegulatoryFramework = {
  id: string;
  name: string;
  shortCode: string;
  category:
    | 'privacy'
    | 'security'
    | 'ai_governance'
    | 'consumer_protection'
    | 'financial'
    | 'tax'
    | 'procurement'
    | 'industry_specific'
    | 'internal_policy'
    | 'contractual';
  jurisdiction?: string;
  region?: 'global' | 'eu' | 'us' | 'uk' | 'mena' | 'iran' | 'custom';
  version?: string;
  effectiveDate?: string;
  reviewFrequencyDays: number;
  ownerTeam: 'legal' | 'privacy' | 'security' | 'compliance' | 'finance' | 'product' | 'trust_safety';
  customerVisible: boolean;
  legalReviewRequired: boolean;
  status: 'draft' | 'active' | 'deprecated' | 'under_review';
};
```

### 6.2 ComplianceRequirement

A specific obligation or internal requirement.

```ts
type ComplianceRequirement = {
  id: string;
  frameworkId: string;
  title: string;
  summary: string;
  obligationType:
    | 'notice'
    | 'consent'
    | 'lawful_basis'
    | 'data_minimization'
    | 'purpose_limitation'
    | 'retention'
    | 'deletion'
    | 'access_control'
    | 'security_control'
    | 'human_review'
    | 'risk_assessment'
    | 'impact_assessment'
    | 'vendor_due_diligence'
    | 'subprocessor_disclosure'
    | 'data_residency'
    | 'cross_border_transfer'
    | 'audit_log'
    | 'user_rights'
    | 'transparency'
    | 'billing_tax'
    | 'complaint_resolution'
    | 'incident_notification';
  appliesToAssetTypes: MarketplaceAssetType[];
  appliesToDataCategories: DataCategory[];
  appliesToPlans: AriyoPlan[];
  severity: 'low' | 'medium' | 'high' | 'critical';
  installBlocking: boolean;
  requiresHumanReview: boolean;
  requiredControls: string[];
  requiredEvidenceTypes: EvidenceType[];
  customerExplanation: string;
  internalNotes?: string;
};
```

### 6.3 ComplianceControl

A product, operational, contractual, security, privacy, or review control.

```ts
type ComplianceControl = {
  id: string;
  name: string;
  controlType:
    | 'product'
    | 'technical'
    | 'security'
    | 'privacy'
    | 'legal'
    | 'contractual'
    | 'operational'
    | 'human_review'
    | 'billing'
    | 'trust_safety';
  description: string;
  controlOwnerTeam: string;
  implementationStatus:
    | 'not_started'
    | 'designed'
    | 'implemented'
    | 'partially_implemented'
    | 'verified'
    | 'deprecated';
  verificationMethod:
    | 'automated_test'
    | 'manual_review'
    | 'policy_review'
    | 'security_review'
    | 'legal_review'
    | 'audit_evidence'
    | 'runtime_observation';
  evidenceIds: string[];
  lastVerifiedAt?: string;
  nextReviewAt?: string;
};
```

### 6.4 AssetComplianceProfile

Compliance posture for a marketplace asset.

```ts
type AssetComplianceProfile = {
  assetId: string;
  assetType: MarketplaceAssetType;
  vendorId?: string;
  creatorId?: string;
  partnerId?: string;
  dataCategories: DataCategory[];
  aiRiskCategories: AIRiskCategory[];
  integrationIds: string[];
  subprocessorIds: string[];
  applicableFrameworkIds: string[];
  requirementStatuses: ComplianceRequirementStatus[];
  evidencePackageIds: string[];
  regionalRestrictions: RegionalRestriction[];
  dataResidencyOptions: DataResidencyOption[];
  retentionProfileId?: string;
  humanReviewRequired: boolean;
  installationBlocked: boolean;
  complianceScore: number;
  riskScore: number;
  lastReviewedAt?: string;
  nextReviewAt?: string;
};
```

### 6.5 ComplianceRequirementStatus

Tracks whether a requirement is satisfied for an asset or customer installation.

```ts
type ComplianceRequirementStatus = {
  requirementId: string;
  status:
    | 'not_applicable'
    | 'satisfied'
    | 'partially_satisfied'
    | 'gap_open'
    | 'exception_approved'
    | 'blocked'
    | 'pending_review';
  controlIds: string[];
  evidenceIds: string[];
  gapIds: string[];
  exceptionIds: string[];
  reviewedBy?: string;
  reviewedAt?: string;
  expiresAt?: string;
  customerVisibleStatus: 'available' | 'limited' | 'not_available' | 'requires_review';
};
```

### 6.6 ComplianceGap

Represents a gap in product, operational, evidence, legal, security, or vendor controls.

```ts
type ComplianceGap = {
  id: string;
  requirementId: string;
  assetId?: string;
  vendorId?: string;
  customerOrgId?: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'accepted_risk' | 'mitigating' | 'resolved' | 'waived' | 'blocked';
  ownerTeam: string;
  dueDate?: string;
  mitigationPlan?: string;
  blocksPublication: boolean;
  blocksInstallation: boolean;
  blocksEnterpriseUse: boolean;
  createdAt: string;
  resolvedAt?: string;
};
```

### 6.7 ComplianceException

Controlled exception to a requirement.

```ts
type ComplianceException = {
  id: string;
  requirementId: string;
  scope:
    | 'asset'
    | 'vendor'
    | 'customer_org'
    | 'installation'
    | 'region'
    | 'plan'
    | 'time_limited';
  scopeId: string;
  reason: string;
  compensatingControls: string[];
  approvedBy: string;
  approvalTeam: 'legal' | 'security' | 'privacy' | 'compliance' | 'executive';
  approvedAt: string;
  expiresAt: string;
  customerVisible: boolean;
  status: 'active' | 'expired' | 'revoked';
};
```

---

## 7. Asset Types

```ts
type MarketplaceAssetType =
  | 'ai_employee_template'
  | 'agent_team_template'
  | 'workflow_template'
  | 'knowledge_pack'
  | 'geo_template'
  | 'integration_bundle'
  | 'partner_service'
  | 'automation_recipe'
  | 'analytics_dashboard'
  | 'prompt_pack'
  | 'policy_pack'
  | 'compliance_pack'
  | 'custom_solution';
```

---

## 8. Data Categories

```ts
type DataCategory =
  | 'no_customer_data'
  | 'business_contact_data'
  | 'employee_data'
  | 'customer_support_data'
  | 'sales_pipeline_data'
  | 'financial_data'
  | 'billing_data'
  | 'tax_data'
  | 'contract_data'
  | 'legal_data'
  | 'sensitive_personal_data'
  | 'health_related_data'
  | 'children_data'
  | 'authentication_data'
  | 'integration_credentials'
  | 'knowledge_base_content'
  | 'uploaded_files'
  | 'conversation_data'
  | 'model_outputs'
  | 'analytics_events'
  | 'ai_memory_context';
```

The matrix must treat `sensitive_personal_data`, `health_related_data`, `children_data`, `authentication_data`, `integration_credentials`, `financial_data`, and `legal_data` as high-risk by default.

---

## 9. AI Risk Categories

```ts
type AIRiskCategory =
  | 'low_risk_assistant'
  | 'customer_facing_ai'
  | 'autonomous_workflow'
  | 'financial_recommendation'
  | 'legal_or_compliance_support'
  | 'hr_employee_related_support'
  | 'health_or_wellbeing_support'
  | 'security_sensitive_action'
  | 'external_communication'
  | 'data_extraction'
  | 'decision_support'
  | 'high_impact_decision_support'
  | 'regulated_domain_support';
```

Any asset in `financial_recommendation`, `legal_or_compliance_support`, `hr_employee_related_support`, `health_or_wellbeing_support`, `security_sensitive_action`, `high_impact_decision_support`, or `regulated_domain_support` must require enhanced review.

---

## 10. Matrix Requirement Domains

### 10.1 Privacy and data protection

Controls should cover:

- data minimization
- purpose limitation
- data processing notice
- lawful basis mapping where needed
- customer data processing agreement linkage
- user rights support
- deletion workflows
- export workflows
- access restrictions
- data sharing disclosures
- subprocessor disclosure
- sensitive data handling

Example requirements:

```yaml
requirement_id: PRIVACY_DATA_MINIMIZATION_001
framework: Internal Privacy Baseline
title: Marketplace asset must declare required data categories
applies_to: all marketplace assets
required_controls:
  - asset_data_category_declaration
  - install_preview_data_access_summary
  - admin_permission_review
required_evidence:
  - asset_data_flow_diagram
  - vendor_data_processing_attestation
blocks_installation: true
```

### 10.2 Data residency and transfer

Controls should cover:

- customer-selected region
- vendor processing region
- model provider processing region
- storage region
- log region
- backup region
- cross-border transfer disclosure
- region-restricted installation

Example requirements:

```yaml
requirement_id: DATA_RESIDENCY_001
title: Asset must declare processing and storage regions
required_controls:
  - processing_region_metadata
  - customer_region_compatibility_check
  - region_restriction_gate
required_evidence:
  - hosting_region_attestation
  - subprocessor_region_list
blocks_enterprise_use: true
```

### 10.3 AI governance

Controls should cover:

- AI use disclosure
- intended use
- prohibited use
- model provider mapping
- human review requirements
- AI safety evaluation
- output risk category
- prompt/tool/memory governance
- user override and escalation
- high-impact decision restrictions

Example requirements:

```yaml
requirement_id: AI_GOVERNANCE_001
title: AI asset must declare AI risk category and human review needs
required_controls:
  - ai_risk_classification
  - human_review_policy
  - evaluation_result_linkage
  - incident_escalation_path
required_evidence:
  - ai_safety_evaluation_report
  - simulation_summary
  - prompt_policy_review
blocks_publication: true
```

### 10.4 Vendor and subprocessor obligations

Controls should cover:

- vendor identity verification
- subprocessor disclosure
- vendor security profile
- vendor risk tier
- vendor legal entity
- partner relationship
- subcontractor controls
- vendor renewal evidence

Example requirements:

```yaml
requirement_id: VENDOR_DUE_DILIGENCE_001
title: Enterprise marketplace vendor must have approved vendor profile
required_controls:
  - vendor_identity_verification
  - vendor_risk_score
  - vendor_approval_status
  - evidence_expiry_monitoring
required_evidence:
  - vendor_security_questionnaire
  - vendor_privacy_attestation
  - subprocessor_list
blocks_enterprise_procurement: true
```

### 10.5 Security controls

Controls should cover:

- least privilege
- permission scoping
- credential handling
- secure integration setup
- audit logging
- vulnerability response
- incident reporting
- secrets isolation
- access review

Example requirements:

```yaml
requirement_id: SECURITY_PERMISSION_SCOPE_001
title: Asset must request only necessary permissions
required_controls:
  - permission_manifest
  - least_privilege_review
  - install_permission_preview
  - runtime_permission_boundary
required_evidence:
  - permission_review_record
  - integration_security_review
blocks_installation: true
```

### 10.6 Retention and deletion

Controls should cover:

- retention period declaration
- customer-configurable retention
- deletion on uninstall
- deletion on contract termination
- audit log retention
- evidence retention
- backup deletion limitations

Example requirements:

```yaml
requirement_id: RETENTION_001
title: Asset must define retention behavior for generated data and logs
required_controls:
  - retention_policy_mapping
  - uninstall_deletion_workflow
  - export_before_delete_option
  - audit_log_retention_schedule
required_evidence:
  - retention_policy_record
  - deletion_test_result
blocks_enterprise_use: true
```

### 10.7 Transparency and customer notices

Controls should cover:

- install preview disclosure
- data access disclosure
- AI use disclosure
- vendor disclosure
- cost disclosure
- limitations disclosure
- customer responsibility disclosure

Example requirements:

```yaml
requirement_id: TRANSPARENCY_001
title: Customer must see asset data, AI, vendor, and cost impact before install
required_controls:
  - install_preview
  - ai_usage_notice
  - vendor_disclosure
  - cost_forecast
required_evidence:
  - install_preview_snapshot
  - disclosure_text_approval
blocks_installation: true
```

### 10.8 Financial, tax, and payout compliance

Controls should cover:

- invoice accuracy
- refund handling
- creator payout eligibility
- tax metadata
- payout holds
- dispute handling
- revenue share records
- audit ledger

Example requirements:

```yaml
requirement_id: MARKETPLACE_FINANCE_001
title: Paid marketplace asset must link order, entitlement, invoice, payout, and ledger records
required_controls:
  - marketplace_ledger
  - entitlement_linkage
  - invoice_generation
  - payout_eligibility_check
required_evidence:
  - ledger_reconciliation_report
  - payout_approval_record
blocks_payout: true
```

---

## 11. Compliance Status Model

```ts
type ComplianceStatus =
  | 'not_applicable'
  | 'not_assessed'
  | 'assessment_in_progress'
  | 'satisfied'
  | 'partially_satisfied'
  | 'gap_open'
  | 'exception_requested'
  | 'exception_approved'
  | 'blocked'
  | 'expired_evidence'
  | 'requires_legal_review'
  | 'requires_security_review'
  | 'requires_privacy_review'
  | 'deprecated_requirement';
```

### Status rules

- `satisfied` requires linked evidence or verified product control.
- `partially_satisfied` must include a gap or limitation.
- `gap_open` must have owner and due date.
- `exception_approved` must expire.
- `blocked` must prevent the relevant action.
- `expired_evidence` must downgrade trust and trigger review.

---

## 12. Compliance Scoring

Ariyo may use compliance scores internally, but must not oversimplify customer-facing compliance claims.

Example scoring model:

```text
Compliance Readiness Score =
  control_coverage_score * 0.30
+ evidence_freshness_score * 0.20
+ vendor_readiness_score * 0.15
+ privacy_readiness_score * 0.15
+ ai_governance_score * 0.10
+ security_review_score * 0.10
- critical_gap_penalty
- expired_evidence_penalty
- unsupported_claim_penalty
```

### Score bands

- `90-100`: Enterprise-ready with current evidence
- `75-89`: Generally ready with minor limitations
- `60-74`: Requires review before enterprise use
- `40-59`: Significant gaps; restricted installation
- `<40`: Blocked or not enterprise-ready

Customer-facing labels must be conservative:

- `Available`
- `Requires review`
- `Limited availability`
- `Not available for this organization`
- `Blocked by compliance policy`

Avoid customer-facing labels like “fully compliant” unless legally approved.

---

## 13. Plan-Aware Compliance Rules

### 13.1 Basic

Basic must prioritize simple, safe, low-risk compliance behavior.

Rules:

- only low-risk or reviewed templates by default
- no high-impact AI decision support without upgrade/review
- limited integrations
- simple install disclosures
- no advanced vendor procurement workflow required
- default retention policy must be clear
- no unsupported regulatory claims

Basic install gate:

```text
allow if:
  asset_risk <= low_or_medium
  required_permissions <= basic_allowed_permissions
  no_sensitive_data_required
  no_open_critical_compliance_gaps
  no_region_blocker
```

### 13.2 Pro

Pro supports operational teams, integrations, workflows, and business data.

Rules:

- integration data flow disclosure required
- team admin approval required for medium-risk assets
- vendor status visible
- evidence summary visible
- audit logs available
- retention settings configurable
- AI risk class visible
- legal/security review optional or customer-configurable

Pro install gate:

```text
allow if:
  asset_compliance_status in ['satisfied', 'partially_satisfied_with_notice']
  no_critical_gap
  vendor_status != blocked
  permissions_approved_by_workspace_admin
  required_evidence_not_expired
```

### 13.3 Smart

Smart supports advanced AI, multi-agent workflows, enterprise-like controls, and higher automation depth.

Rules:

- enhanced AI governance
- model/provider mapping
- advanced evidence packages
- custom approval chains
- region restrictions
- vendor risk controls
- compliance exports
- impact assessments for high-risk use cases
- stronger logging and monitoring
- human review policy enforcement

Smart install gate:

```text
allow if:
  all_install_blocking_requirements_satisfied
  ai_risk_review_completed_when_required
  security_review_completed_when_required
  privacy_review_completed_when_required
  vendor_approved_for_org_or_exception_active
  data_residency_compatible
  evidence_package_current
```

---

## 14. Customer Context Mapping

Each customer organization may have its own compliance profile.

```ts
type CustomerComplianceProfile = {
  orgId: string;
  industry?: string;
  regions: string[];
  dataResidencyRequirement?: string;
  allowedVendorRiskTiers: string[];
  restrictedDataCategories: DataCategory[];
  requiredApprovalTeams: string[];
  requiredFrameworkIds: string[];
  procurementRequired: boolean;
  legalReviewRequired: boolean;
  securityReviewRequired: boolean;
  privacyReviewRequired: boolean;
  allowExternalVendors: boolean;
  allowSensitiveDataProcessing: boolean;
  customPolicyIds: string[];
};
```

When a customer views or installs an asset, Ariyo must evaluate:

```text
asset_compliance_profile
+ customer_compliance_profile
+ selected_plan
+ region
+ integrations_enabled
+ permissions_requested
+ vendor_status
+ evidence_status
= install_compliance_decision
```

---

## 15. Install Compliance Decision

```ts
type InstallComplianceDecision = {
  decision:
    | 'allowed'
    | 'allowed_with_notice'
    | 'requires_admin_approval'
    | 'requires_security_review'
    | 'requires_legal_review'
    | 'requires_privacy_review'
    | 'requires_procurement'
    | 'requires_upgrade'
    | 'region_blocked'
    | 'vendor_blocked'
    | 'blocked';
  reasons: ComplianceDecisionReason[];
  requiredActions: ComplianceRequiredAction[];
  evidencePackageIds: string[];
  customerVisibleExplanation: string;
  internalExplanation: string;
  expiresAt?: string;
};
```

Example:

```json
{
  "decision": "requires_security_review",
  "reasons": [
    {
      "code": "SENSITIVE_DATA_ACCESS",
      "message": "This template requests access to uploaded customer files and integration credentials."
    },
    {
      "code": "VENDOR_EVIDENCE_REVIEW_REQUIRED",
      "message": "The vendor has current security evidence but enterprise security review is required by this workspace policy."
    }
  ],
  "requiredActions": [
    "security_team_approval",
    "admin_permission_review"
  ]
}
```

---

## 16. Regulatory Control Mapping Examples

### 16.1 GDPR-style privacy mapping

Ariyo should maintain GDPR-style privacy control mappings for organizations that require privacy compliance readiness.

Example mapping areas:

- data processing transparency
- lawful basis support where applicable
- data minimization
- purpose limitation
- data subject access/export support
- deletion support
- processor/subprocessor disclosure
- cross-border transfer disclosure
- breach/incident support
- data protection impact assessment triggers

Matrix example:

| Requirement Area | Ariyo Control | Evidence | Product Behavior |
|---|---|---|---|
| Data minimization | Permission manifest and data category declaration | Asset data flow evidence | Blocks excessive permissions |
| Transparency | Install preview and AI use notice | Disclosure text approval | Shows customer-facing notice |
| Deletion | Uninstall deletion workflow | Deletion test result | Offers delete/export options |
| Subprocessors | Vendor subprocessor list | Vendor evidence profile | Shows subprocessor report |
| DPIA trigger | High-risk AI/data classification | AI risk assessment | Requires privacy review |

### 16.2 AI risk obligation mapping

Example mapping areas:

- intended use declaration
- prohibited use declaration
- human oversight
- high-risk use detection
- evaluation evidence
- incident monitoring
- model/provider documentation
- output limitations
- customer disclosure

Matrix example:

| Requirement Area | Ariyo Control | Evidence | Product Behavior |
|---|---|---|---|
| AI transparency | AI usage notice | Approved disclosure copy | Shows AI involvement |
| Human oversight | Human review policy | Review workflow config | Requires approval before actions |
| Evaluation | Benchmark and simulation records | Eval report | Blocks publish if failed |
| Risk classification | AI risk category | Risk review record | Adds install gate |
| Incident response | AI incident workflow | Incident logs | Pauses asset if unsafe |

### 16.3 Data residency mapping

| Requirement Area | Ariyo Control | Evidence | Product Behavior |
|---|---|---|---|
| Processing location | Region metadata | Region attestation | Restricts incompatible regions |
| Storage location | Storage region config | Infrastructure evidence | Shows region in trust export |
| Vendor transfer | Subprocessor region list | Vendor profile | Requires customer approval |
| Backup location | Backup disclosure | Infrastructure record | Adds limitation notice |

### 16.4 Vendor obligation mapping

| Requirement Area | Ariyo Control | Evidence | Product Behavior |
|---|---|---|---|
| Vendor identity | Vendor verification | Legal entity record | Blocks unverified vendors |
| Security review | Vendor risk workflow | Questionnaire/evidence | Requires security approval |
| Subprocessor disclosure | Subprocessor registry | Vendor disclosure | Shows in audit export |
| Renewal evidence | Expiration monitor | Renewal record | Downgrades expired vendor |

---

## 17. Evidence Mapping

Each requirement must define acceptable evidence types.

```ts
type EvidenceType =
  | 'policy_document'
  | 'security_questionnaire'
  | 'privacy_questionnaire'
  | 'data_flow_diagram'
  | 'subprocessor_list'
  | 'vendor_attestation'
  | 'risk_assessment'
  | 'ai_safety_evaluation_report'
  | 'simulation_report'
  | 'audit_log_export'
  | 'penetration_test_summary'
  | 'soc_report_summary'
  | 'iso_certificate_summary'
  | 'access_review_record'
  | 'deletion_test_result'
  | 'retention_policy_record'
  | 'incident_response_record'
  | 'legal_review_record'
  | 'customer_approval_record'
  | 'procurement_approval_record'
  | 'billing_reconciliation_report';
```

Evidence must include:

- owner
- source
- version
- issued date
- expiry date
- scope
- confidentiality level
- customer visibility
- linked requirements
- linked controls
- review status

---

## 18. Evidence Expiration Rules

Evidence must not be treated as permanently valid.

Default expiration guidance:

- security questionnaires: 12 months
- privacy questionnaires: 12 months
- vendor attestations: 12 months
- subprocessor lists: refresh on change or quarterly review
- AI evaluations: refresh on major version change
- simulation reports: refresh on template version change
- incident response evidence: refresh after incident closure
- legal review records: refresh on policy or regulatory change
- penetration test summaries: 12 months or customer contract requirement
- control mapping: review every 6 months or upon major product change

Expired evidence must:

- reduce compliance readiness score
- appear in admin dashboards
- trigger vendor/creator reminder
- block enterprise claims if critical
- block installation if install-blocking requirement depends on it

---

## 19. Compliance Gap Tracking

Compliance gaps must be visible, owned, and actionable.

Gap dashboard fields:

- gap title
- requirement
- impacted assets
- impacted vendors
- impacted customers
- severity
- owner
- due date
- mitigation
- blocker status
- customer visibility
- exception status

Gap lifecycle:

1. Detected
2. Triaged
3. Assigned
4. Mitigation proposed
5. Review required
6. Resolved or exception approved
7. Evidence linked
8. Customer/export status updated

Critical gaps must trigger:

- publish block
- install block
- enterprise procurement block
- vendor escalation
- customer notification if applicable
- trust/safety review if active customer impact exists

---

## 20. Restricted and Blocked Use Cases

Ariyo must define restricted or blocked use cases by matrix rules.

Examples of restricted use cases:

- AI making final legal, medical, employment, credit, insurance, or high-impact decisions
- templates that process sensitive personal data without review
- external communications without approval controls
- autonomous financial actions without safeguards
- scraping or collecting personal data without a clear lawful/authorized basis
- high-risk integrations without permission scoping
- AI memory storing sensitive attributes without explicit governance
- cross-border processing without disclosure or approval

Blocked use cases must be enforced in product, not only policy.

---

## 21. Customer-Facing Compliance Views

Customer-facing compliance views must be clear and conservative.

### Asset Compliance Summary

Must show:

- data categories processed
- AI risk category
- vendor/creator identity
- subprocessors if applicable
- permissions requested
- regions involved
- retention behavior
- evidence availability
- review status
- customer actions required
- limitations and disclaimers

### Enterprise Compliance Report

Must include:

- installed assets
- vendors
- data categories
- permissions
- subprocessors
- controls
- evidence
- open gaps
- exceptions
- renewal deadlines
- incident history
- export timestamp

### Trust Export

Must include only approved customer-visible evidence.

Must not expose:

- internal legal notes
- confidential security details
- other customer data
- raw secrets
- internal enforcement notes
- privileged legal analysis

---

## 22. Internal Compliance Console

Ariyo internal teams need a console for:

- framework management
- requirement management
- control mapping
- asset compliance profiles
- vendor compliance profiles
- gap tracking
- exception approvals
- evidence review
- customer export approval
- regulatory change review
- compliance impact analysis

Required filters:

- framework
- region
- plan
- asset type
- vendor
- creator
- risk category
- evidence freshness
- status
- owner team
- customer impact
- install blocking

---

## 23. Regulatory Change Management

Regulations and customer obligations change.

Ariyo must maintain a change management workflow:

1. New regulation/framework detected
2. Legal/compliance triage
3. Impacted requirements identified
4. Impacted assets/vendors/customers mapped
5. Required control changes defined
6. Engineering/product/security owners assigned
7. Evidence needs updated
8. Customer-facing claims reviewed
9. Install gates updated
10. Audit report templates updated
11. Completion tracked

Regulatory change events must not silently change customer-facing claims.

---

## 24. API Contract

### 24.1 List frameworks

`GET /api/v1/compliance/frameworks`

Response:

```json
{
  "frameworks": [
    {
      "id": "fw_privacy_baseline",
      "name": "Ariyo Privacy Baseline",
      "category": "privacy",
      "status": "active",
      "customerVisible": true
    }
  ]
}
```

### 24.2 Get asset compliance profile

`GET /api/v1/marketplace/assets/{assetId}/compliance-profile`

Response:

```json
{
  "assetId": "asset_123",
  "complianceScore": 86,
  "customerVisibleStatus": "requires_review",
  "dataCategories": ["business_contact_data", "conversation_data"],
  "aiRiskCategories": ["customer_facing_ai"],
  "applicableFrameworks": ["Ariyo Privacy Baseline", "AI Governance Baseline"],
  "openGaps": [],
  "evidencePackages": ["evidence_pkg_456"]
}
```

### 24.3 Evaluate install compliance

`POST /api/v1/marketplace/assets/{assetId}/compliance/evaluate-install`

Request:

```json
{
  "orgId": "org_123",
  "plan": "smart",
  "region": "eu",
  "requestedIntegrations": ["google_drive", "hubspot"],
  "requestedPermissions": ["read_files", "send_email_draft"]
}
```

Response:

```json
{
  "decision": "requires_security_review",
  "reasons": [
    {
      "code": "ELEVATED_FILE_ACCESS",
      "message": "This asset requests access to customer files."
    }
  ],
  "requiredActions": ["security_approval", "admin_permission_review"],
  "evidencePackageIds": ["evidence_pkg_456"]
}
```

### 24.4 Create compliance gap

`POST /api/v1/compliance/gaps`

Request:

```json
{
  "requirementId": "SECURITY_PERMISSION_SCOPE_001",
  "assetId": "asset_123",
  "title": "Permission review missing",
  "severity": "high",
  "ownerTeam": "security",
  "blocksInstallation": true
}
```

### 24.5 Request exception

`POST /api/v1/compliance/exceptions`

Request:

```json
{
  "requirementId": "DATA_RESIDENCY_001",
  "scope": "customer_org",
  "scopeId": "org_123",
  "reason": "Customer-approved temporary use during pilot",
  "compensatingControls": ["limited_user_access", "30_day_expiry"],
  "expiresAt": "2026-09-30T00:00:00Z"
}
```

### 24.6 Export compliance matrix

`POST /api/v1/compliance/reports/matrix-export`

Request:

```json
{
  "orgId": "org_123",
  "frameworkIds": ["fw_privacy_baseline", "fw_ai_governance"],
  "assetIds": ["asset_123"],
  "format": "xlsx",
  "redactionLevel": "customer_safe"
}
```

---

## 25. Webhook Events

Ariyo should emit:

- `compliance.framework.created`
- `compliance.framework.updated`
- `compliance.requirement.created`
- `compliance.requirement.updated`
- `compliance.control.verified`
- `compliance.evidence.expiring`
- `compliance.evidence.expired`
- `compliance.gap.opened`
- `compliance.gap.resolved`
- `compliance.exception.requested`
- `compliance.exception.approved`
- `compliance.exception.expired`
- `compliance.asset.profile.updated`
- `compliance.install.evaluated`
- `compliance.install.blocked`
- `compliance.customer.export.generated`
- `compliance.regulatory_change.detected`
- `compliance.regulatory_change.review_completed`

---

## 26. Observability Events

```ts
type ComplianceMatrixEvent = {
  eventName: string;
  orgId?: string;
  assetId?: string;
  vendorId?: string;
  frameworkId?: string;
  requirementId?: string;
  controlId?: string;
  evidenceId?: string;
  gapId?: string;
  exceptionId?: string;
  actorId: string;
  actorRole: string;
  decision?: string;
  severity?: string;
  timestamp: string;
};
```

Required events:

- matrix viewed
- install evaluated
- install blocked
- requirement status changed
- evidence linked
- evidence expired
- gap opened
- gap resolved
- exception approved
- customer export generated
- restricted claim attempted
- unsupported compliance claim blocked

---

## 27. Frontend Requirements

### Customer-facing UI

Must include:

- compliance summary card on asset page
- data category chips
- AI risk label
- vendor/subprocessor disclosure
- permissions disclosure
- region compatibility indicator
- evidence availability label
- install blockers
- required approvals
- downloadable compliance summary
- “why this is blocked” explanation

### Admin UI

Must include:

- compliance decision panel
- approval workflow
- evidence package viewer
- gap list
- exception request form
- framework filter
- export builder
- vendor compliance status
- installed asset compliance report

### Internal Ariyo UI

Must include:

- framework editor
- requirement editor
- control mapper
- gap tracker
- evidence review queue
- regulatory change dashboard
- customer claim approval workflow
- audit history

---

## 28. Backend Requirements

Ariyo backend must provide:

- compliance framework registry
- requirement registry
- control registry
- evidence registry
- asset compliance profile service
- customer compliance profile service
- install compliance evaluator
- region compatibility engine
- vendor compliance integration
- evidence expiration jobs
- gap tracking workflow
- exception approval workflow
- compliance export service
- immutable audit log
- permission-scoped access to evidence
- redaction service
- regulatory change impact analyzer

---

## 29. Security and Privacy Requirements

Ariyo must:

- restrict compliance evidence access by role
- redact sensitive evidence for customer exports
- prevent creators from editing approved evidence after review without re-review
- store audit events immutably
- protect legal privileged materials
- protect vendor confidential documents
- avoid exposing internal risk analysis publicly
- prevent unauthorized framework or requirement changes
- log every customer export
- support retention controls for evidence and audit logs

---

## 30. AI Compliance Assistant Rules

Ariyo may use an AI assistant to help with compliance mapping, but it must not make final legal decisions.

Allowed AI assistant tasks:

- summarize evidence
- suggest requirement mappings
- detect missing evidence
- draft customer-safe explanations
- identify likely impacted assets
- suggest gap categories
- compare asset metadata against requirements
- generate internal review checklists

Forbidden AI assistant tasks:

- final legal interpretation without human review
- declaring an asset legally compliant
- approving exceptions
- approving high-risk installations
- overriding security/legal decisions
- generating unsupported customer claims
- hiding compliance gaps
- fabricating evidence

AI-generated compliance suggestions must be labeled as suggestions and require human review for high-risk or customer-facing use.

---

## 31. Advanced KPIs

Track:

- Compliance Matrix Coverage Rate
- Requirement-to-Control Mapping Coverage
- Requirement-to-Evidence Mapping Coverage
- Evidence Freshness Rate
- Open Critical Gap Count
- Average Gap Resolution Time
- Install Blocks by Compliance Reason
- Exception Approval Rate
- Exception Expiry Compliance Rate
- Vendor Evidence Freshness Rate
- Customer Compliance Export Usage
- Unsupported Claim Prevention Count
- Region Compatibility Failure Rate
- Privacy Review Queue Time
- Security Review Queue Time
- AI Risk Review Completion Rate
- Enterprise Procurement Compliance Pass Rate
- Compliance Drift Detection Rate

---

## 32. Forbidden Patterns

Never:

- claim compliance without scoped evidence
- let expired evidence support enterprise claims
- allow high-risk AI assets without review
- hide vendor or subprocessor involvement
- allow install despite critical compliance blockers
- use one generic compliance badge for all obligations
- expose confidential evidence to unauthorized users
- treat legal review as optional for regulated claims
- ignore data residency conflicts
- approve exceptions without expiration
- store compliance mappings only in spreadsheets
- allow creators to self-certify high-risk claims without review
- rank assets as enterprise-ready while critical gaps are open
- export customer reports without timestamp, scope, and redaction controls
- use AI to make final legal approval decisions

---

## 33. Definition of Done

Ariyo Marketplace Regulatory Compliance Matrix is complete when:

- frameworks are structured and versioned
- requirements are mapped to controls
- controls are mapped to evidence
- assets have compliance profiles
- vendors have compliance profiles
- install decisions use matrix logic
- gaps have owners and due dates
- exceptions expire and are auditable
- evidence expiration affects status
- customer-facing summaries are conservative
- enterprise reports can be exported
- AI governance obligations are mapped
- data residency restrictions are enforceable
- unsupported claims are blocked
- internal teams can review regulatory change impact

---

## 34. Golden Rule

Ariyo must not use compliance language as marketing decoration.

Ariyo must use compliance mapping as a product control system that protects customers, creators, vendors, partners, and the Ariyo marketplace from unsupported claims, hidden risks, unmanaged obligations, and enterprise trust failures.
