# Ariyo Marketplace Enterprise Audit Reports Skill

## 1. Core Contract

Ariyo Marketplace Enterprise Audit Reports is not a collection of CSV exports.

It is the governed reporting, evidence, auditability, and compliance-ready export system that allows enterprise customers, procurement teams, security teams, legal teams, finance teams, admins, auditors, and Ariyo operators to understand exactly what marketplace assets exist, who approved them, who installed them, what they can access, what they cost, which vendors provide them, which subprocessors are involved, which risks exist, and which controls were applied.

Every enterprise marketplace report must be accurate, permission-scoped, timestamped, reproducible, exportable, tamper-evident, evidence-linked, retention-aware, privacy-safe, and understandable by non-technical stakeholders.

Ariyo must help enterprise customers answer these questions quickly:

- What marketplace assets are installed?
- Which teams and workspaces use them?
- Which vendors, creators, and partners are involved?
- What data, tools, integrations, permissions, and AI capabilities can each asset access?
- Who approved the installation, purchase, renewal, update, or exception?
- What plan, entitlement, contract, invoice, PO, and budget does each asset belong to?
- Which security, legal, procurement, privacy, and risk reviews were completed?
- Which subprocessors and external services are involved?
- What incidents, disputes, refunds, policy violations, or enforcement actions occurred?
- What should be renewed, removed, reviewed, restricted, or escalated?

## 2. Primary Goals

The audit reporting system must:

1. Give enterprise customers a complete marketplace inventory.
2. Support procurement, security, legal, finance, and compliance reviews.
3. Provide evidence for vendor approval and renewal.
4. Show asset usage, permissions, costs, risks, incidents, and ownership.
5. Make marketplace adoption safe for large organizations.
6. Prevent shadow AI, unmanaged templates, unreviewed integrations, and hidden vendor risk.
7. Connect audit reports to installation, billing, vendor management, entitlements, incidents, and policy enforcement.
8. Support exportable reports for SOC 2, ISO 27001, internal risk reviews, vendor assessments, procurement reviews, and board-level governance.

## 3. Dependencies

This skill depends on:

- `marketplace-installation-entitlements.md`
- `marketplace-billing-payouts.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-enterprise-vendor-management.md`
- `marketplace-policy-enforcement-rules.md`
- `marketplace-trust-safety-operations.md`
- `marketplace-dispute-resolution.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`
- `admin-permissions.md`
- `ai-agent-permissions-runtime.md`
- `observability-analytics-events.md`
- `finance-accounting-controls.md`
- `enterprise-readiness.md`
- `trust-center-public-status.md`

Audit reports must never invent facts. They must be generated only from governed source-of-truth records.

## 4. Report Consumers

Ariyo must support different reporting needs for different stakeholders.

### 4.1 Enterprise Admin

Needs a complete overview of installed marketplace assets, ownership, permissions, and usage.

### 4.2 Security Team

Needs permissions, data access, subprocessors, incidents, security evidence, risk tiers, and open exceptions.

### 4.3 Legal Team

Needs contracts, policy evidence, terms, vendor legal status, DPA status, license terms, and renewal exposure.

### 4.4 Procurement Team

Needs purchase approvals, vendor approval status, PO linkage, renewal dates, spend, and owner accountability.

### 4.5 Finance Team

Needs billing, payouts, invoices, refunds, chargebacks, usage-based spend, cost centers, and reconciliation exports.

### 4.6 Compliance Team

Needs audit trails, evidence packages, control mappings, retention logs, policy decisions, and exception history.

### 4.7 Workspace Owner

Needs only the reports for assets installed in their workspace or department.

### 4.8 Ariyo Operator

Needs internal cross-customer operational reports without exposing customer data unnecessarily.

## 5. Core Report Types

Ariyo must support these enterprise audit report categories.

### 5.1 Marketplace Asset Inventory Report

Shows all marketplace assets installed or approved in the organization.

Must include:

- asset ID
- asset name
- asset type
- version
- creator/vendor
- partner involvement
- marketplace status
- install status
- active/inactive state
- workspace
- owner
- installation date
- last update date
- last usage date
- plan compatibility
- entitlement status
- risk tier
- quality score
- trust score
- policy status
- renewal status

### 5.2 Vendor Inventory Report

Shows all vendors, creators, partners, agencies, and subprocessors associated with marketplace assets.

Must include:

- vendor ID
- vendor legal name
- creator profile
- partner tier
- vendor approval status
- risk tier
- security review status
- privacy review status
- legal review status
- DPA status
- subprocessor involvement
- active assets
- incidents
- disputes
- renewal dates
- evidence completeness

### 5.3 Asset Usage Report

Shows how marketplace assets are actually used.

Must include:

- installed asset
- workspace usage
- active users
- active AI employees
- execution count
- successful run rate
- failed run rate
- cost per successful run
- last execution time
- business outcome events
- uninstall risk
- support burden
- usage trend

### 5.4 Permission & Access Report

Shows what each marketplace asset can access.

Must include:

- tools granted
- integrations connected
- data scopes
- user roles authorized
- workspace scope
- external API access
- file access
- knowledge base access
- memory access
- write actions
- approval gates
- permission changes over time
- permission exceptions

### 5.5 Procurement Evidence Report

Shows the buying and approval evidence for marketplace assets.

Must include:

- purchase request ID
- requester
- business justification
- budget approval
- finance approval
- procurement approval
- legal approval
- security approval
- vendor approval
- PO number
- invoice references
- contract terms
- approval timestamps
- approver identities
- exception approvals

### 5.6 Billing & Spend Report

Shows marketplace spend and financial movement.

Must include:

- asset price
- billing model
- subscription state
- one-time purchases
- usage-based charges
- invoices
- refunds
- disputes
- chargebacks
- cost center
- department
- currency
- tax status
- revenue share
- creator payout state
- reconciliation status

### 5.7 Security Review Evidence Report

Shows security review readiness.

Must include:

- security questionnaire status
- submitted evidence
- review result
- risk findings
- compensating controls
- exceptions
- expiration date
- required renewal evidence
- incident linkage
- security review owner

### 5.8 Privacy & Data Processing Report

Shows data governance and privacy exposure.

Must include:

- personal data access
- sensitive data access
- data categories
- processing purpose
- retention behavior
- external transfer
- subprocessor involvement
- DPA status
- data residency status
- deletion support
- customer-controlled data boundary

### 5.9 Subprocessor Report

Shows vendors and external services involved in marketplace assets.

Must include:

- subprocessor name
- provider type
- processing purpose
- data categories
- region
- DPA status
- vendor owner
- assets relying on it
- review state
- change notification status

### 5.10 Incident & Enforcement Report

Shows incidents, violations, disputes, suspensions, and remediation.

Must include:

- incident ID
- asset ID
- vendor ID
- severity
- incident type
- detection source
- customer impact
- containment action
- enforcement action
- remediation status
- root cause
- timeline
- customer notifications
- reopened status

### 5.11 Renewal & Review Calendar Report

Shows upcoming reviews and renewal deadlines.

Must include:

- vendor renewal date
- security review expiration
- privacy review expiration
- contract renewal date
- asset license renewal
- budget renewal
- PO renewal
- evidence renewal
- owner responsible
- days until due
- overdue state

### 5.12 Executive Marketplace Risk Report

Summarizes marketplace risk for leadership.

Must include:

- total installed assets
- high-risk assets
- unreviewed assets
- assets with elevated permissions
- vendors pending renewal
- open incidents
- spend by category
- top outcome-producing assets
- shadow AI risk
- policy violations
- unresolved disputes
- recommended actions

## 6. Source of Truth Rules

Audit reports must source data from governed records only.

Allowed source objects:

- `MarketplaceAsset`
- `MarketplaceInstallation`
- `MarketplaceEntitlement`
- `MarketplaceVendor`
- `VendorRiskProfile`
- `SecurityReview`
- `PrivacyReview`
- `ProcurementRequest`
- `PurchaseOrder`
- `Invoice`
- `BillingLedgerEntry`
- `PayoutRecord`
- `PermissionGrant`
- `IntegrationGrant`
- `PolicyDecision`
- `IncidentRecord`
- `DisputeRecord`
- `AuditLogEntry`
- `SubprocessorRecord`
- `RenewalRecord`
- `Workspace`
- `Organization`

Forbidden source behavior:

- generating reports from stale UI state
- using client-side caches as source of truth
- allowing creators to edit customer audit data
- allowing unverified vendor self-attestations to appear as approved evidence
- mixing internal-only Ariyo notes into customer-facing exports without review
- exporting hidden security data to unauthorized users

## 7. Audit Report Object Model

```ts
type EnterpriseAuditReport = {
  id: string;
  organizationId: string;
  reportType: AuditReportType;
  title: string;
  description?: string;
  status: AuditReportStatus;
  generatedAt: string;
  generatedByUserId?: string;
  generatedBySystem?: boolean;
  timeRange: {
    from?: string;
    to?: string;
  };
  filters: AuditReportFilters;
  scope: AuditReportScope;
  sections: AuditReportSection[];
  exportFormats: AuditExportFormat[];
  evidenceLinks: EvidenceLink[];
  sourceSnapshotHash: string;
  retentionPolicyId: string;
  accessPolicyId: string;
  classification: DataClassification;
};
```

## 8. Report Status Model

```ts
type AuditReportStatus =
  | "draft"
  | "generating"
  | "ready"
  | "partially_ready"
  | "failed"
  | "expired"
  | "archived"
  | "deleted";
```

Rules:

- `draft` reports are configuration-only.
- `generating` reports must show progress when long-running.
- `ready` reports are immutable snapshots unless regenerated.
- `partially_ready` reports must clearly show missing data.
- `failed` reports must provide safe error messages.
- `expired` reports must not be used as current evidence.
- `archived` reports must remain accessible only by authorized roles.

## 9. Report Scope Model

```ts
type AuditReportScope = {
  organizationId: string;
  workspaceIds?: string[];
  departmentIds?: string[];
  assetIds?: string[];
  vendorIds?: string[];
  integrationIds?: string[];
  costCenterIds?: string[];
  plan?: "basic" | "pro" | "smart" | "enterprise";
  includeInactive?: boolean;
  includeSuspended?: boolean;
  includeArchived?: boolean;
};
```

Scope must always be enforced server-side.

## 10. Access Control Requirements

Audit reports often contain sensitive information.

Ariyo must enforce role-based access:

- owner
- admin
- security admin
- procurement admin
- finance admin
- legal admin
- compliance admin
- workspace admin
- auditor
- read-only auditor
- Ariyo internal support

A user must only see reports matching their role, organization, workspace, and data classification.

## 11. Data Classification

```ts
type DataClassification =
  | "public"
  | "internal"
  | "confidential"
  | "restricted"
  | "security_sensitive"
  | "financial_sensitive"
  | "legal_sensitive"
  | "privacy_sensitive";
```

Reports must display classification clearly.

Restricted exports may require:

- MFA
- admin approval
- export reason
- download expiration
- watermarking
- audit log
- encryption at rest
- limited sharing

## 12. Evidence Links

Every audit report should link to the underlying evidence where possible.

```ts
type EvidenceLink = {
  id: string;
  label: string;
  evidenceType:
    | "approval"
    | "questionnaire"
    | "contract"
    | "invoice"
    | "policy_decision"
    | "incident"
    | "permission_grant"
    | "security_review"
    | "privacy_review"
    | "vendor_review"
    | "subprocessor_disclosure";
  objectId: string;
  objectType: string;
  accessLevel: "view" | "download" | "restricted";
  redactionRequired: boolean;
};
```

Evidence must be redacted when exported to users who lack full access.

## 13. Report Export Formats

Ariyo must support:

- dashboard view
- CSV
- XLSX
- PDF
- JSON
- signed evidence package
- audit archive ZIP
- API response
- scheduled email summary
- secure share link

Export format rules:

- CSV is for tabular analysis.
- XLSX is for finance/procurement/security teams.
- PDF is for formal review and executive reporting.
- JSON is for programmatic governance integration.
- ZIP packages must include manifest and checksums.
- Secure share links must expire.

## 14. Tamper-Evident Report Manifest

Evidence packages must include a manifest.

```json
{
  "report_id": "ear_123",
  "organization_id": "org_123",
  "report_type": "marketplace_asset_inventory",
  "generated_at": "2026-06-18T12:00:00Z",
  "generated_by": "user_123",
  "source_snapshot_hash": "sha256:...",
  "files": [
    {
      "name": "asset_inventory.csv",
      "sha256": "sha256:..."
    },
    {
      "name": "evidence/security_reviews.json",
      "sha256": "sha256:..."
    }
  ]
}
```

Reports used for audit evidence must be reproducible or clearly marked as point-in-time snapshots.

## 15. Basic / Pro / Smart Reporting Rules

### 15.1 Basic

Basic customers should receive simple and understandable reports.

Basic reports should include:

- installed assets
- owner
- plan compatibility
- basic permissions
- monthly cost
- last usage
- renewal date

Basic should not expose advanced enterprise procurement or vendor evidence workflows unless enabled.

### 15.2 Pro

Pro customers need operational reporting.

Pro reports should include:

- workspace usage
- permission grants
- integration access
- team-level usage
- billing breakdown
- installation history
- incident summaries
- basic vendor details

### 15.3 Smart

Smart customers need advanced governance and enterprise readiness.

Smart reports should include:

- detailed permission history
- vendor risk scores
- subprocessor reports
- procurement evidence
- security questionnaires
- privacy evidence
- spend forecasting
- incident history
- policy decisions
- audit packages
- API exports
- scheduled compliance reports

Smart reporting must support stronger approval, export, and retention controls.

## 16. Report Builder UX

Ariyo must provide a report builder for enterprise admins.

Required UI capabilities:

- choose report type
- choose time range
- filter by workspace
- filter by asset
- filter by vendor
- filter by risk tier
- filter by approval status
- filter by plan
- filter by cost center
- include or exclude inactive assets
- preview report fields
- save report template
- schedule recurring reports
- export report
- share securely
- view evidence links
- show missing evidence warnings

## 17. Report Templates

Ariyo must provide default templates:

1. Marketplace Asset Inventory
2. Vendor Risk Overview
3. Security Review Evidence
4. Privacy & Subprocessor Report
5. Permissions & Data Access Report
6. Marketplace Spend & Billing Report
7. Procurement Approval Evidence
8. Incident & Enforcement History
9. Renewal Calendar
10. Executive Risk Summary
11. Workspace Owner Marketplace Summary
12. Smart Plan Compliance Evidence Package

Templates must be editable by authorized admins.

## 18. Scheduled Reports

Enterprises must be able to schedule reports.

Schedule options:

- weekly
- monthly
- quarterly
- annually
- before renewal date
- after marketplace install
- after vendor approval change
- after policy enforcement action
- after security review expiration

Scheduled reports must respect access control and export restrictions.

## 19. Report Redaction Rules

Ariyo must support redaction before sharing reports.

Redactable fields:

- user identity
- customer data names
- internal Ariyo notes
- sensitive security findings
- payment provider identifiers
- tax identifiers
- API keys or secrets
- private vendor documents
- incident details under legal review

Reports must clearly state when redaction was applied.

## 20. Audit Log Requirements

Every report action must be logged.

Log events:

- report generated
- report viewed
- report exported
- report shared
- report scheduled
- report deleted
- evidence downloaded
- report access denied
- redaction applied
- export approved
- export blocked

Logs must include:

- actor
- organization
- role
- timestamp
- IP/device context when available
- report ID
- action
- result
- reason

## 21. API Contract

### 21.1 Generate Audit Report

`POST /api/v1/marketplace/audit-reports`

Request:

```json
{
  "report_type": "marketplace_asset_inventory",
  "time_range": {
    "from": "2026-01-01T00:00:00Z",
    "to": "2026-06-18T23:59:59Z"
  },
  "filters": {
    "workspace_ids": ["ws_123"],
    "risk_tiers": ["high", "critical"],
    "include_inactive": false
  },
  "export_formats": ["dashboard", "csv", "pdf"]
}
```

Response:

```json
{
  "report_id": "ear_123",
  "status": "generating",
  "estimated_completion_seconds": 30
}
```

### 21.2 Get Report

`GET /api/v1/marketplace/audit-reports/{report_id}`

Response:

```json
{
  "id": "ear_123",
  "report_type": "marketplace_asset_inventory",
  "status": "ready",
  "generated_at": "2026-06-18T12:00:00Z",
  "classification": "confidential",
  "sections": [],
  "export_urls": {
    "csv": "https://secure-download.example/report.csv",
    "pdf": "https://secure-download.example/report.pdf"
  }
}
```

### 21.3 Export Report

`POST /api/v1/marketplace/audit-reports/{report_id}/exports`

Request:

```json
{
  "format": "xlsx",
  "redaction_profile": "security_team",
  "reason": "Quarterly vendor review"
}
```

### 21.4 Schedule Report

`POST /api/v1/marketplace/audit-reports/schedules`

Request:

```json
{
  "name": "Quarterly Marketplace Vendor Risk Review",
  "report_type": "vendor_inventory",
  "frequency": "quarterly",
  "recipients": ["security@example.com"],
  "filters": {
    "risk_tiers": ["medium", "high", "critical"]
  }
}
```

### 21.5 List Report Templates

`GET /api/v1/marketplace/audit-report-templates`

### 21.6 Download Evidence Package

`POST /api/v1/marketplace/audit-reports/{report_id}/evidence-package`

Request:

```json
{
  "include_files": true,
  "include_manifest": true,
  "redact_restricted": true
}
```

## 22. Webhook Events

Ariyo must emit events for enterprise governance integrations.

```ts
type MarketplaceAuditReportEvent =
  | "marketplace.audit_report.generated"
  | "marketplace.audit_report.failed"
  | "marketplace.audit_report.exported"
  | "marketplace.audit_report.shared"
  | "marketplace.audit_report.scheduled"
  | "marketplace.audit_report.access_denied"
  | "marketplace.audit_report.evidence_package_created"
  | "marketplace.audit_report.redaction_applied"
  | "marketplace.audit_report.expired";
```

Webhook payloads must never include sensitive report data by default. They should include references only.

## 23. Frontend Requirements

The frontend must provide:

- Audit Reports dashboard
- report template library
- report builder
- export controls
- secure sharing controls
- report status indicator
- evidence links
- missing evidence warnings
- risk summaries
- permission summaries
- vendor inventory views
- finance export views
- procurement evidence views
- renewal calendar
- report schedule management
- export audit trail
- role-based view restrictions

UX must make report limitations visible.

Examples:

- “3 vendors are missing current security evidence.”
- “This report excludes archived assets.”
- “This export contains restricted security information.”
- “You do not have access to billing fields.”

## 24. Backend Requirements

The backend must include:

- report generation service
- report template service
- evidence resolver
- access control resolver
- export service
- redaction service
- scheduled report worker
- secure file storage
- report manifest generator
- audit log writer
- source snapshot hashing
- report retention manager
- webhook dispatcher
- API authorization layer

Long-running reports must be asynchronous.

## 25. Data Retention

Reports must follow retention policies.

Retention dimensions:

- report type
- data classification
- enterprise contract terms
- legal hold
- compliance requirement
- customer configuration
- export format

Ariyo must support:

- report expiration
- legal hold
- deletion request
- archival
- immutable evidence package retention
- scheduled report cleanup

## 26. Security Requirements

Ariyo must protect audit reports with:

- encryption at rest
- secure download URLs
- short-lived links
- MFA for restricted exports
- role-based access control
- audit logs
- export approval workflows
- watermarking for restricted PDF exports
- data minimization
- redaction
- signed manifests
- rate limiting
- anomaly detection for bulk exports

## 27. Privacy Requirements

Reports must follow privacy principles:

- minimum necessary data
- purpose limitation
- user identity redaction where possible
- no sensitive data leakage
- no cross-customer exposure
- no creator access to customer audit reports
- clear retention behavior
- customer-controlled exports

## 28. Compliance Mapping

Ariyo should allow customers to map reports to control objectives.

Example mappings:

- Vendor Inventory → third-party risk management
- Permission Report → access control review
- Billing Report → financial controls
- Incident Report → incident response evidence
- Subprocessor Report → privacy and data processing review
- Procurement Evidence → purchasing approval control
- Security Evidence → vendor security review
- Renewal Calendar → periodic review control

Ariyo must avoid claiming certification coverage unless legally and operationally verified.

## 29. AI Audit Report Assistant

Ariyo may provide an AI assistant to help explain audit reports.

Allowed assistant actions:

- summarize report findings
- explain risk areas
- identify missing evidence
- suggest next reviews
- answer questions grounded in report data
- generate executive summaries
- draft procurement/security follow-up tasks

Forbidden assistant actions:

- invent missing evidence
- hide risk findings
- override access control
- provide legal certification claims
- expose restricted fields
- alter immutable report snapshots
- approve vendors automatically

AI-generated summaries must be clearly labeled.

## 30. Advanced KPIs

Ariyo must track:

### 30.1 Audit Coverage Rate

Percentage of installed marketplace assets included in current audit reporting.

### 30.2 Vendor Evidence Completeness

Percentage of active vendors with current security, privacy, legal, and procurement evidence.

### 30.3 High-Risk Asset Visibility

Number and percentage of assets classified as high or critical risk.

### 30.4 Unreviewed Asset Rate

Installed assets lacking required review.

### 30.5 Permission Exposure Score

Aggregated score based on sensitive permissions granted to marketplace assets.

### 30.6 Report Generation Success Rate

Percentage of reports generated successfully.

### 30.7 Report Export Approval Time

Average time to approve restricted report exports.

### 30.8 Renewal Evidence Readiness

Percentage of upcoming renewals with evidence ready before deadline.

### 30.9 Audit Action Completion Rate

Percentage of recommended actions completed after audit report review.

### 30.10 Shadow Marketplace Risk

Assets or workflows active without appropriate review, owner, entitlement, or vendor approval.

## 31. Common Audit Findings

Ariyo should detect and highlight:

- unowned marketplace assets
- vendors missing security review
- assets with excessive permissions
- expired vendor evidence
- unreviewed subprocessors
- assets with no recent usage but active billing
- high spend without business outcome
- suspended assets still installed
- assets with open incidents
- policy exceptions near expiration
- renewal deadlines approaching
- creator payout holds linked to customer assets

## 32. Report Recommendations

Reports should include recommended actions where appropriate.

Examples:

- “Review this vendor before renewal.”
- “Remove unused asset with active billing.”
- “Reduce permissions for this template.”
- “Complete security questionnaire before Smart deployment.”
- “Investigate high incident rate for this asset.”
- “Assign an owner to this marketplace installation.”

Recommendations must be transparent and grounded in source data.

## 33. Testing Requirements

Ariyo must test:

- access control for reports
- export generation
- redaction correctness
- evidence link permissions
- report schedule execution
- data freshness
- snapshot consistency
- manifest hash generation
- large organization performance
- partial data handling
- failed report recovery
- cross-customer isolation
- finance field restrictions
- security-sensitive field restrictions

## 34. Observability Events

Track:

- report generation latency
- report generation failure
- export volume
- restricted export attempts
- access denied events
- scheduled report success
- scheduled report failure
- missing evidence count
- report download count
- evidence package creation
- redaction errors

## 35. Forbidden Patterns

Ariyo must never:

- allow creators to access customer audit reports
- expose one customer’s vendor data to another customer
- generate audit reports from unverified client-side state
- export secrets, API keys, or hidden security data
- hide missing evidence
- mark self-attested vendor claims as approved evidence
- allow report exports without audit logging
- make reports editable after generation without versioning
- present stale reports as current
- allow unscoped internal staff access
- ignore legal hold or retention requirements
- use AI summaries as source-of-truth evidence

## 36. Golden Rule

Enterprise customers must be able to trust Ariyo Marketplace because every asset, vendor, permission, purchase, incident, review, and risk can be inspected, explained, exported, and audited without guesswork.

If a marketplace action cannot be reported accurately, it is not enterprise-ready.
