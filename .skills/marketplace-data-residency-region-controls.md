# Ariyo Marketplace Data Residency & Region Controls Skill

## Core Contract

Ariyo Marketplace Data Residency & Region Controls is not a region dropdown.

It is the governed region compatibility, data-location, processing-boundary, vendor-region, model-provider-region, backup-region, subprocessor-region, customer-policy, installation-gating, evidence, and audit system that decides whether a Marketplace asset can safely be installed, executed, stored, backed up, monitored, billed, supported, or renewed for a customer in a given jurisdiction and governance model.

Every Marketplace asset must be region-aware before installation, region-safe during execution, region-auditable after use, and region-blocked when customer policy, legal obligations, vendor constraints, model-provider location, integration behavior, backup behavior, or data-processing flow makes the asset unsafe or non-compliant.

Ariyo must never treat “available globally” as a default assumption.

Ariyo must prove regional compatibility before enabling customer data movement.

---

## 1. Purpose

This skill defines how Ariyo governs data residency, regional compatibility, jurisdictional constraints, data processing locations, storage locations, backup locations, model-provider execution regions, vendor regions, subprocessor regions, support access regions, and Marketplace installation eligibility.

It exists so that enterprise customers can answer:

- Where will my data be stored?
- Where will my data be processed?
- Which vendors or creators may access it?
- Which AI model providers may process it?
- Which regions are used for backups and logs?
- Can this Marketplace asset be installed in my region?
- Does this asset violate our internal data residency policy?
- Can we export evidence for procurement, security, legal, privacy, and audit review?

This skill applies to:

- Marketplace templates
- AI Employee templates
- Agent Team templates
- Workflow templates
- Knowledge packs
- GEO templates
- Integration bundles
- Partner service packages
- Vendor-provided apps
- Creator-published assets
- Enterprise private listings
- Region-restricted assets
- Smart-plan advanced automation assets

---

## 2. Strategic Role in Ariyo

Ariyo is an AI Employee Operating System. Marketplace assets may process customer CRM data, finance data, support tickets, documents, marketing data, customer records, analytics events, knowledge bases, operational workflows, and AI memory.

Because these assets may use multiple vendors, model providers, integrations, regions, logs, storage systems, and subprocessors, region governance must be a first-class product system.

Ariyo Marketplace must not allow customers to accidentally install assets that move regulated or sensitive data into incompatible regions.

Data residency is not only a legal concern. It is a trust, procurement, enterprise-readiness, privacy, sales, security, and customer-success concern.

---

## 3. Dependencies

This skill depends on and must align with:

- `marketplace-installation-entitlements.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-enterprise-vendor-management.md`
- `marketplace-compliance-evidence-center.md`
- `marketplace-regulatory-compliance-matrix.md`
- `marketplace-enterprise-audit-reports.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`
- `enterprise-readiness.md`
- `model-provider-strategy.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-memory-context.md`
- `integration-ecosystem.md`
- `admin-permissions.md`
- `observability-analytics-events.md`
- `reliability-sla.md`

---

## 4. Region Governance Philosophy

Ariyo must follow these principles:

1. **Explicit region declaration over implicit behavior**  
   Every Marketplace asset must declare data storage, processing, backup, logging, support, AI inference, and vendor regions.

2. **Customer policy over asset convenience**  
   If the customer organization restricts data movement, the Marketplace asset must adapt or be blocked.

3. **No silent cross-region processing**  
   Any data movement outside the customer-approved region must be disclosed, approved, and logged.

4. **Region compatibility before installation**  
   Installation must be blocked or gated before data is moved.

5. **Evidence-backed trust**  
   Region claims must map to evidence documents, vendor attestations, provider settings, system logs, and audit exports.

6. **Runtime enforcement, not just review-time claims**  
   Ariyo must enforce region decisions at execution time, not only during Marketplace review.

7. **Region downgrade safety**  
   If a vendor, model provider, integration, or asset changes region behavior, Ariyo must re-evaluate installs.

---

## 5. Region Concepts

### 5.1 Customer Region

The customer region is the region or jurisdiction chosen by the organization for storage, processing, billing, support, and compliance boundaries.

Examples:

- EU
- Germany
- France
- UK
- United States
- Canada
- UAE
- Saudi Arabia
- Singapore
- Australia
- Global / unrestricted
- Customer-defined private region

### 5.2 Storage Region

The storage region is where persistent customer data is stored.

Includes:

- Database records
- Files
- Knowledge bases
- Vector indexes
- AI memory
- Logs with customer data
- Attachments
- Workflow state
- Template configuration
- Secrets metadata
- Audit evidence

### 5.3 Processing Region

The processing region is where data is actively processed.

Includes:

- Workflow execution
- AI inference
- RAG retrieval
- Embedding generation
- Document parsing
- Data transformation
- Automation execution
- External API calls
- Background jobs

### 5.4 Backup Region

The backup region is where data replicas, snapshots, disaster recovery copies, and retained archives are stored.

### 5.5 Model Provider Region

The model provider region is where AI model inference, embeddings, ranking, summarization, classification, transcription, or generation occurs.

### 5.6 Vendor Region

The vendor region is where a third-party vendor operates infrastructure, support teams, subprocessors, data stores, or processing systems.

### 5.7 Creator Region

The creator region describes the location and legal jurisdiction of the creator, agency, partner, or vendor that published or maintains a Marketplace asset.

### 5.8 Support Access Region

The support access region describes where support personnel, partner implementers, or creator teams may access customer metadata, logs, diagnostics, or configuration.

### 5.9 Telemetry Region

The telemetry region describes where observability, analytics, tracing, monitoring, and usage events are stored or processed.

---

## 6. Core Objects

### 6.1 RegionPolicy

```ts
export interface RegionPolicy {
  id: string;
  organizationId: string;
  name: string;
  allowedCustomerRegions: string[];
  allowedStorageRegions: string[];
  allowedProcessingRegions: string[];
  allowedBackupRegions: string[];
  allowedModelProviderRegions: string[];
  allowedVendorRegions: string[];
  allowedSupportAccessRegions: string[];
  blockedRegions: string[];
  restrictedDataClasses: DataClassRegionRule[];
  crossBorderTransferMode: 'blocked' | 'requires_approval' | 'allowed_with_evidence' | 'allowed';
  defaultInstallBehavior: 'allow' | 'warn' | 'approval_required' | 'block';
  evidenceRequired: boolean;
  legalReviewRequired: boolean;
  securityReviewRequired: boolean;
  procurementReviewRequired: boolean;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}
```

### 6.2 MarketplaceAssetRegionProfile

```ts
export interface MarketplaceAssetRegionProfile {
  assetId: string;
  assetVersionId: string;
  declaredCustomerRegions: string[];
  storageRegions: string[];
  processingRegions: string[];
  backupRegions: string[];
  modelProviderRegions: ModelProviderRegionBinding[];
  vendorRegions: VendorRegionBinding[];
  creatorRegion: string;
  supportAccessRegions: string[];
  telemetryRegions: string[];
  dataClassesProcessed: string[];
  subprocessors: SubprocessorRegionBinding[];
  crossBorderTransfers: CrossBorderTransfer[];
  regionEvidenceIds: string[];
  unsupportedRegions: string[];
  restrictedRegions: string[];
  regionRiskTier: 'low' | 'medium' | 'high' | 'critical';
  lastReviewedAt: string;
  reviewStatus: 'draft' | 'under_review' | 'approved' | 'restricted' | 'blocked' | 'expired';
}
```

### 6.3 RegionCompatibilityDecision

```ts
export interface RegionCompatibilityDecision {
  decisionId: string;
  organizationId: string;
  assetId: string;
  assetVersionId: string;
  customerRegion: string;
  decision: 'compatible' | 'compatible_with_warning' | 'approval_required' | 'blocked';
  reasons: RegionDecisionReason[];
  requiredApprovals: string[];
  requiredEvidence: string[];
  blockedCapabilities: string[];
  allowedCapabilities: string[];
  dataMovementSummary: DataMovementSummary;
  policyVersionId: string;
  evaluatedAt: string;
  expiresAt?: string;
}
```

### 6.4 DataMovementMap

```ts
export interface DataMovementMap {
  assetId: string;
  assetVersionId: string;
  nodes: DataLocationNode[];
  edges: DataMovementEdge[];
  dataClasses: string[];
  sensitiveDataClasses: string[];
  regionBoundaryCrossings: RegionBoundaryCrossing[];
  generatedAt: string;
}
```

---

## 7. Region Compatibility Matrix

Ariyo must maintain a compatibility matrix that answers whether a Marketplace asset can be used under a given customer region policy.

### 7.1 Matrix Dimensions

The matrix must evaluate:

- Customer region
- Organization residency policy
- Asset storage region
- Asset processing region
- AI model provider region
- Backup region
- Logging/telemetry region
- Vendor region
- Creator/partner region
- Subprocessor region
- Support access region
- Data class sensitivity
- Customer plan
- Required approvals
- Procurement status
- Security review status
- Compliance evidence freshness
- Known incidents
- Vendor approval status

### 7.2 Matrix Outcomes

Allowed outcomes:

- `allowed`
- `allowed_with_warning`
- `requires_admin_approval`
- `requires_security_review`
- `requires_legal_review`
- `requires_procurement_review`
- `requires_customer_dpa`
- `requires_vendor_approval`
- `requires_model_provider_region_change`
- `requires_data_class_restriction`
- `blocked`

---

## 8. Install-Time Region Gates

Before Marketplace installation, Ariyo must run region gates.

### 8.1 Pre-Install Checks

Ariyo must check:

- Is the asset available in the customer region?
- Does the asset store data in an approved region?
- Does the asset process data in an approved region?
- Does the asset use model providers in allowed regions?
- Does the asset use vendors approved for the customer region?
- Does the asset use subprocessors that require disclosure?
- Does the customer require legal/security/procurement approval?
- Does the asset process restricted data classes?
- Does the asset create embeddings or AI memory outside allowed regions?
- Are backups compatible with customer policy?
- Are logs and telemetry compatible with customer policy?
- Is support access region compatible?

### 8.2 Install Decision Behavior

If compatible:

- Show green region compatibility state.
- Allow installation.
- Attach region evidence to install record.

If compatible with warning:

- Show clear warning.
- Explain data movement.
- Require admin acknowledgement if needed.

If approval required:

- Create procurement/security/legal review task.
- Prevent activation until approval.

If blocked:

- Disable install.
- Show reason.
- Suggest compatible alternatives.

---

## 9. Runtime Region Enforcement

Region controls must apply during runtime, not only during installation.

Ariyo must enforce:

- Workflow execution region
- Model provider region selection
- Vector storage region
- File storage region
- Logging redaction by region
- Telemetry routing
- Backup placement
- Support access restrictions
- Integration call restrictions
- Data export restrictions
- Cross-region retry restrictions
- Failover region restrictions

### 9.1 Runtime Region Guard

Every execution of a region-governed Marketplace asset must pass a runtime guard.

```ts
export interface RuntimeRegionGuardDecision {
  executionId: string;
  assetInstallId: string;
  requestedProcessingRegion: string;
  effectiveProcessingRegion: string;
  requestedModelProviderRegion?: string;
  effectiveModelProviderRegion?: string;
  decision: 'allow' | 'allow_with_restrictions' | 'block';
  restrictions: string[];
  reasonCodes: string[];
  evaluatedAt: string;
}
```

---

## 10. Region-Aware AI Model Provider Routing

Marketplace assets may use AI providers for:

- Chat generation
- Tool planning
- Embeddings
- Classification
- Moderation
- OCR
- Transcription
- Summarization
- RAG reranking
- Agent simulation
- Evaluation

Ariyo must choose model provider routes based on:

- Customer region policy
- Provider region availability
- Data class sensitivity
- Plan level
- Cost policy
- Latency requirements
- Compliance requirements
- Customer vendor approval
- Provider trust evidence
- Model capability requirements

### 10.1 Model Routing Outcomes

- Use customer-preferred provider in approved region
- Use fallback provider in approved region
- Use local/non-retained processing mode if available
- Restrict feature if no compliant provider exists
- Block asset execution if data cannot be processed safely

---

## 11. Data Class Region Rules

Ariyo must support region-specific rules by data class.

Example data classes:

- Public marketing data
- Internal business data
- Customer personal data
- Employee personal data
- Financial data
- Legal documents
- Health-related data
- Authentication secrets
- Payment data
- Sensitive customer documents
- AI memory
- Vector embeddings
- Support transcripts
- CRM records
- Procurement records

### 11.1 Example Rules

- Customer personal data may only be stored in EU.
- Financial data may be processed only by approved vendors.
- AI memory may not leave customer-selected region.
- Support logs must be redacted before cross-region transfer.
- Embeddings must be generated in same region as source document storage.
- Backup copies must remain inside approved regional boundary.

---

## 12. Region Evidence Requirements

Ariyo must require evidence for region claims.

Evidence types:

- Vendor region attestation
- Cloud provider region configuration
- Model provider region documentation
- Subprocessor disclosure
- Data processing agreement
- Security questionnaire
- Customer-specific approval
- System configuration snapshot
- Region routing test result
- Backup region proof
- Log routing proof
- Runtime execution trace
- Data movement diagram
- Compliance control mapping

Evidence must include:

- Evidence ID
- Owner
- Region claim
- Asset or vendor relation
- Validity period
- Review status
- Expiration date
- Source document
- Verification status
- Linked controls
- Linked customer approvals

---

## 13. Customer-Facing Region UX

Ariyo must make region behavior understandable.

### 13.1 Marketplace Listing UX

Each asset page must show:

- Available regions
- Storage regions
- Processing regions
- Backup regions
- Model provider regions
- Vendor/subprocessor regions
- Support access regions
- Data classes processed
- Region risk tier
- Enterprise approval requirements
- Trust/evidence links
- Last region review date

### 13.2 Install Preview UX

The install preview must show:

- “Compatible with your region policy”
- “Requires approval”
- “Blocked in your organization”
- “Uses model provider outside your preferred region”
- “Stores logs in approved telemetry region”
- “Processes embeddings in selected customer region”
- “Subprocessor disclosure required”

### 13.3 Admin Console UX

Admins must be able to:

- Set default region policy
- Create multiple policies
- Assign policies by workspace
- Override with approval
- View blocked installs
- Export region audit reports
- Review region evidence
- Set model provider region preferences
- Approve or deny cross-region transfers
- Monitor region violations

---

## 14. Basic / Pro / Smart Region Rules

### 14.1 Basic Plan

Basic must:

- Use simple region controls.
- Avoid complex cross-region workflows.
- Block high-risk region mismatches.
- Show clear user-friendly warnings.
- Prefer low-risk, Ariyo-approved assets.
- Avoid advanced vendor chains.
- Avoid customer-specific override complexity.

Basic should not:

- Allow custom cross-border approval workflows.
- Allow unrestricted vendor-region overrides.
- Allow advanced multi-provider routing.

### 14.2 Pro Plan

Pro must:

- Support workspace-level region policy.
- Support admin approvals.
- Support integration region checks.
- Support model provider region compatibility.
- Support region-aware install review.
- Support region audit exports.

Pro may:

- Allow selected exceptions with audit log.
- Allow approved partner/vendor regions.

### 14.3 Smart Plan

Smart must:

- Support advanced enterprise region governance.
- Support multi-region policy matrices.
- Support data-class-specific rules.
- Support provider routing policies.
- Support runtime region guards.
- Support region simulations.
- Support private Marketplace region constraints.
- Support procurement/legal/security approval chains.
- Support compliance evidence packages.
- Support customer-specific region overrides with strict controls.

Smart must be the most region-aware plan because it handles the most advanced AI employees and automations.

---

## 15. Region Change Management

Region behavior can change because of:

- Vendor infrastructure changes
- New subprocessors
- Model provider routing changes
- New backup policies
- New telemetry stores
- Customer policy changes
- Asset version updates
- Region deprecation
- New legal requirements
- Incident response actions
- Data residency migration

Ariyo must trigger re-evaluation when region behavior changes.

### 15.1 Required Actions

If region change is compatible:

- Update evidence.
- Update region profile.
- Notify admins if material.

If region change requires approval:

- Pause update rollout.
- Create approval workflow.
- Notify customer admins.

If region change violates policy:

- Block install or execution.
- Pause affected asset.
- Create incident if data movement risk exists.
- Recommend compliant alternative.

---

## 16. Data Residency Migration

Ariyo may need to migrate asset data between regions.

Migration must include:

- Customer approval if required
- Source region
- Target region
- Data classes
- Migration reason
- Downtime expectation
- Backup behavior
- Rollback plan
- Audit log
- Evidence update
- Deletion proof from old region if required

Forbidden:

- Silent data residency migration
- Migration without owner approval when policy requires approval
- Migration without deletion/retention accounting
- Migration that breaks installed asset behavior without notice

---

## 17. Private Marketplace and Enterprise Region Controls

Enterprise customers may require private Marketplace rules.

Ariyo must support:

- Region-specific private catalogs
- Region-specific asset allowlists
- Region-specific vendor allowlists
- Region-specific model provider allowlists
- Region-specific integration allowlists
- Region-specific installation gates
- Region-specific procurement workflows
- Region-specific evidence packages
- Region-specific audit exports

Example:

A German enterprise customer may allow only:

- EU storage
- EU processing
- EU backup
- EU support access
- EU model provider execution
- Approved EU vendors
- No non-EU subprocessors unless legal approval exists

---

## 18. API Contract

### 18.1 Evaluate Region Compatibility

`POST /api/v1/marketplace/assets/{assetId}/region-compatibility/evaluate`

Request:

```json
{
  "organizationId": "org_123",
  "workspaceId": "workspace_456",
  "assetVersionId": "asset_version_789",
  "customerRegion": "EU",
  "dataClasses": ["customer_personal_data", "crm_records"],
  "installContext": "marketplace_install"
}
```

Response:

```json
{
  "decision": "approval_required",
  "reasons": [
    {
      "code": "MODEL_PROVIDER_REGION_REQUIRES_APPROVAL",
      "message": "This asset uses an AI model provider region that requires security approval under the organization's region policy."
    }
  ],
  "requiredApprovals": ["security", "legal"],
  "blockedCapabilities": [],
  "allowedCapabilities": ["preview", "configuration_draft"],
  "evidenceRequired": ["model_provider_region_attestation"],
  "dataMovementSummary": {
    "storageRegions": ["EU"],
    "processingRegions": ["EU"],
    "modelProviderRegions": ["EU"],
    "backupRegions": ["EU"]
  }
}
```

### 18.2 Get Asset Region Profile

`GET /api/v1/marketplace/assets/{assetId}/region-profile`

### 18.3 Update Organization Region Policy

`PATCH /api/v1/organizations/{organizationId}/region-policy`

### 18.4 List Region-Blocked Installs

`GET /api/v1/organizations/{organizationId}/marketplace/region-blocked-installs`

### 18.5 Export Region Evidence Package

`POST /api/v1/organizations/{organizationId}/marketplace/region-evidence/export`

### 18.6 Runtime Region Guard

`POST /api/v1/runtime/region-guard/evaluate`

---

## 19. Webhooks

Ariyo must emit webhooks for:

- `marketplace.region_compatibility.evaluated`
- `marketplace.region_install.blocked`
- `marketplace.region_install.approval_required`
- `marketplace.region_policy.updated`
- `marketplace.asset_region_profile.updated`
- `marketplace.vendor_region.changed`
- `marketplace.model_provider_region.changed`
- `marketplace.cross_region_transfer.detected`
- `marketplace.region_exception.approved`
- `marketplace.region_exception.revoked`
- `marketplace.region_evidence.expiring`
- `marketplace.region_violation.detected`

---

## 20. Observability Events

Ariyo must track:

- `region_policy_created`
- `region_policy_updated`
- `asset_region_profile_viewed`
- `region_compatibility_evaluated`
- `region_install_allowed`
- `region_install_warned`
- `region_install_blocked`
- `region_approval_requested`
- `region_approval_granted`
- `region_approval_denied`
- `runtime_region_guard_allowed`
- `runtime_region_guard_blocked`
- `cross_region_transfer_attempted`
- `region_evidence_exported`
- `region_evidence_expired`
- `vendor_region_changed`
- `model_provider_region_changed`
- `backup_region_verified`

Each event must include:

- Organization ID
- Workspace ID
- Asset ID
- Asset version ID
- Customer region
- Effective storage region
- Effective processing region
- Model provider region
- Vendor region
- Decision
- Reason codes
- Policy version
- Actor ID
- Timestamp

---

## 21. Advanced KPIs

Ariyo must monitor:

### 21.1 Region Compatibility Rate

Percentage of Marketplace assets compatible with customer region policies.

### 21.2 Region-Blocked Install Rate

Percentage of install attempts blocked due to region mismatch.

### 21.3 Region Approval Conversion Rate

Percentage of region-gated install requests that receive approval.

### 21.4 Cross-Region Transfer Attempt Rate

Number of attempted cross-region transfers per 1,000 executions.

### 21.5 Region Evidence Freshness

Percentage of region evidence that is current and verified.

### 21.6 Region Policy Coverage

Percentage of enterprise customers with configured region policies.

### 21.7 Runtime Region Violation Rate

Number of runtime region guard blocks per 1,000 executions.

### 21.8 Region-Compatible Marketplace Revenue

Marketplace revenue from assets that meet customer region policy without exceptions.

### 21.9 Region Exception Risk

Risk score for approved exceptions by asset, vendor, region, and data class.

---

## 22. Frontend Requirements

Frontend must provide:

- Region compatibility badge
- Region warning panel
- Data movement map
- Region evidence viewer
- Region policy editor
- Blocked install explanation
- Approval request flow
- Region exception request form
- Region audit export UI
- Model provider region selector
- Vendor/subprocessor region disclosure
- Admin region dashboard
- Customer-friendly glossary
- “Why is this blocked?” explanation

Frontend must not:

- Hide region risk behind generic warnings
- Show “compatible” without evidence
- Allow install when backend says blocked
- Confuse storage region with processing region
- Pretend vendor region and model provider region are the same

---

## 23. Backend Requirements

Backend must provide:

- Region policy service
- Asset region profile service
- Data movement mapping service
- Compatibility evaluation engine
- Runtime region guard
- Model provider region router
- Vendor region registry
- Evidence linkage service
- Region audit export service
- Cross-region transfer detector
- Region change re-evaluation jobs
- Region violation incident bridge
- Immutable audit logs

Backend must ensure:

- Region decisions are deterministic and auditable.
- Region policy version is stored with each decision.
- Runtime checks cannot be bypassed by frontend.
- Cached decisions expire when region facts change.
- Data class rules override generic asset compatibility.

---

## 24. Security and Privacy Rules

Ariyo must:

- Minimize cross-region data movement.
- Avoid storing sensitive data in telemetry when region policy restricts it.
- Redact logs before cross-region support access.
- Prevent unapproved vendors from accessing customer data.
- Prevent unapproved model provider routing.
- Encrypt region-governed data at rest and in transit.
- Keep immutable region decision logs.
- Require elevated permissions for region policy overrides.
- Separate customer-facing region evidence from internal-only evidence.

---

## 25. AI Region Assistant Rules

Ariyo may provide an AI Region Assistant to help admins, procurement teams, security teams, and Marketplace operators understand region compatibility.

The assistant may:

- Explain why an asset is blocked.
- Summarize data movement.
- Compare two assets by region compatibility.
- Draft approval notes.
- Identify missing evidence.
- Suggest compliant alternatives.
- Summarize region policy conflicts.

The assistant must not:

- Approve a region exception by itself.
- Override legal/security/procurement requirements.
- Claim compliance without evidence.
- Hide uncertain region behavior.
- Recommend unsafe workarounds.

---

## 26. Forbidden Patterns

Ariyo must never:

- Allow installation without region compatibility evaluation.
- Treat all data as globally transferable.
- Hide model provider processing regions.
- Hide backup regions.
- Hide telemetry regions.
- Hide vendor or subprocessor regions.
- Allow runtime execution in blocked regions.
- Allow silent fallback to a non-approved region.
- Claim “EU hosted” when processing happens outside the approved region.
- Claim “data stays local” without evidence.
- Use outdated region evidence.
- Allow creators to self-certify region compliance without review.
- Ignore customer-specific region policies.
- Ignore data class sensitivity.
- Allow region exceptions without audit trail.
- Delete region decision logs.
- Confuse billing region with data residency region.

---

## 27. Acceptance Checklist

Before this system is production-ready:

- [ ] Every Marketplace asset has a region profile.
- [ ] Every install runs region compatibility evaluation.
- [ ] Every execution runs runtime region guard when required.
- [ ] Every model provider route is region-aware.
- [ ] Every vendor and subprocessor has region metadata.
- [ ] Every data class can have region-specific rules.
- [ ] Every blocked install explains why.
- [ ] Every approval creates an audit trail.
- [ ] Every region claim links to evidence.
- [ ] Every evidence item has freshness and expiration metadata.
- [ ] Every region policy change triggers re-evaluation.
- [ ] Every cross-region transfer attempt is logged.
- [ ] Every enterprise customer can export region reports.

---

## 28. Golden Rule

If Ariyo cannot prove where Marketplace data is stored, processed, backed up, logged, routed, supported, and accessed, Ariyo must not allow the Marketplace asset to be installed or executed for region-governed customers.
