# Ariyo Marketplace Private Catalog Controls Skill

## Core Contract

Ariyo Marketplace Private Catalog Controls is not a hidden filter on the public marketplace.

It is the governed enterprise catalog system that decides which Marketplace assets, templates, vendors, partners, creators, integrations, AI Employee bundles, workflow packs, GEO packs, knowledge packs, and internal-only solutions are visible, installable, purchasable, recommendable, and supportable for a specific organization, workspace, department, region, plan, compliance posture, procurement state, and permission boundary.

Ariyo must let enterprise customers create a trusted private marketplace without losing the benefits of the public Ariyo ecosystem.

Private catalog controls must make approved assets easy to discover and unapproved, unsafe, region-incompatible, procurement-blocked, plan-incompatible, or policy-restricted assets invisible or clearly blocked.

---

## Why This Skill Exists

Enterprise customers do not want every marketplace asset visible to every employee.

They need controlled discovery.

They need approved vendors.

They need department-specific catalogs.

They need private templates.

They need internal AI Employee packs.

They need procurement-approved listings.

They need region-safe catalogs.

They need role-based installability.

They need audit-ready visibility decisions.

Without private catalog controls, Ariyo risks:

- Employees installing unapproved AI Employees.
- Teams discovering assets that procurement has not approved.
- Region-incompatible templates appearing to regulated customers.
- Public marketplace listings conflicting with enterprise security policy.
- Internal templates being mixed with public assets without proper ownership.
- Sponsored listings bypassing enterprise restrictions.
- Customer admins losing control of marketplace governance.
- Marketplace recommendations suggesting assets the customer cannot legally or operationally use.

Private catalog controls turn Ariyo Marketplace into an enterprise-ready governed ecosystem.

---

## Scope

This skill governs:

- Private Marketplace Catalogs.
- Organization-specific catalogs.
- Department-specific catalogs.
- Workspace catalogs.
- Region-scoped catalogs.
- Plan-scoped catalogs.
- Vendor allowlists and blocklists.
- Creator allowlists and blocklists.
- Asset allowlists and blocklists.
- Procurement-approved assets.
- Internal-only templates.
- Partner-only catalogs.
- Customer-specific private offers.
- Enterprise-approved recommendation surfaces.
- Marketplace visibility decisions.
- Marketplace installability decisions.
- Sponsored listing restrictions inside private catalogs.
- Search and discovery filtering.
- Catalog audit reports.
- Catalog API contracts.
- Catalog policy evaluation.

This skill does not replace:

- Marketplace policy enforcement.
- Template review governance.
- Marketplace billing and payouts.
- Enterprise procurement.
- Enterprise vendor management.
- Data residency controls.
- Regulatory compliance matrix.
- Installation entitlements.
- Trust and safety operations.

It coordinates with all of them.

---

## Related Ariyo Skills

Private catalog controls must integrate with:

- `ai-employee-marketplace.md`
- `agent-marketplace-template-builder.md`
- `agent-team-templates.md`
- `ai-agent-template-review-governance.md`
- `template-quality-ranking-system.md`
- `marketplace-search-recommendation-engine.md`
- `marketplace-installation-entitlements.md`
- `marketplace-billing-payouts.md`
- `marketplace-dispute-resolution.md`
- `marketplace-trust-safety-operations.md`
- `marketplace-policy-enforcement-rules.md`
- `marketplace-creator-success-system.md`
- `marketplace-partner-operations.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-enterprise-vendor-management.md`
- `marketplace-enterprise-audit-reports.md`
- `marketplace-compliance-evidence-center.md`
- `marketplace-regulatory-compliance-matrix.md`
- `marketplace-data-residency-region-controls.md`
- `admin-permissions.md`
- `enterprise-readiness.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`
- `finance-accounting-controls.md`
- `revenue-operations-system.md`

---

## Product Principle

Public marketplace discovery optimizes for broad ecosystem value.

Private catalog discovery optimizes for customer-governed trust.

Ariyo must never treat private catalog restrictions as mere UI preferences.

They are policy decisions.

---

## Private Catalog Types

### 1. Organization Catalog

A catalog scoped to the entire enterprise customer.

Used for:

- Company-wide approved AI Employee templates.
- Approved vendors.
- Approved partner services.
- Approved integration bundles.
- Global procurement-approved assets.

### 2. Workspace Catalog

A catalog scoped to a workspace or business unit.

Used for:

- Subsidiaries.
- Departments.
- Brands.
- Regional branches.
- Separate compliance environments.

### 3. Department Catalog

A catalog scoped to a business function.

Examples:

- Sales catalog.
- Marketing catalog.
- Support catalog.
- Finance catalog.
- HR catalog.
- Legal catalog.
- Operations catalog.
- Engineering catalog.

### 4. Region Catalog

A catalog scoped to a geography, jurisdiction, data residency policy, or processing zone.

Examples:

- EU-only catalog.
- Germany-only catalog.
- US-only catalog.
- Middle East catalog.
- Iran-compatible catalog, if legally and operationally supported.
- No-cross-border-processing catalog.

### 5. Procurement Catalog

A catalog containing assets approved by procurement.

Used for:

- Purchase-ready assets.
- PO-approved assets.
- Budget-approved assets.
- Vendor-approved assets.
- Renewal-approved assets.

### 6. Security-Approved Catalog

A catalog containing assets approved by security review.

Used for:

- Sensitive departments.
- Regulated workflows.
- Data-access-heavy templates.
- Integration-heavy AI Employees.

### 7. Internal Template Catalog

A catalog containing customer-created internal assets.

Used for:

- Internal AI Employee templates.
- Internal workflow templates.
- Department playbooks.
- Internal knowledge packs.
- Internal automation bundles.

### 8. Partner-Curated Catalog

A catalog curated by an approved implementation partner or agency.

Used for:

- Industry solution bundles.
- Partner-certified templates.
- Implementation packages.
- Co-managed customer catalogs.

### 9. Trial/Evaluation Catalog

A catalog used during pilot, proof of concept, or sandbox evaluation.

Used for:

- Limited trial assets.
- Sandboxed templates.
- Non-production installs.
- Time-boxed evaluations.

### 10. Executive Catalog

A small curated catalog for executives or decision-makers.

Used for:

- High-confidence templates.
- Low-risk demos.
- Strategic business use cases.
- Board-ready AI Employee examples.

---

## Catalog Visibility Model

Marketplace visibility must be evaluated through a policy decision.

A public asset can be:

- Visible and installable.
- Visible but blocked.
- Visible but requires approval.
- Visible only in evaluation mode.
- Hidden from search.
- Hidden from category pages.
- Hidden from recommendations.
- Hidden from sponsored slots.
- Hidden from all customer users.

Internal assets can be:

- Visible only to owners.
- Visible to admins.
- Visible to a department.
- Visible to selected workspaces.
- Visible to the whole organization.
- Hidden pending review.
- Archived.
- Deprecated.
- Blocked.

---

## Catalog Decision Dimensions

Every marketplace asset visibility and installability decision must evaluate:

- Organization ID.
- Workspace ID.
- User role.
- User department.
- User plan.
- Customer region policy.
- Asset region profile.
- Vendor approval state.
- Creator approval state.
- Procurement approval state.
- Security review state.
- Legal review state.
- Billing eligibility.
- Entitlement compatibility.
- Template review state.
- Trust and safety state.
- Policy enforcement state.
- Data sensitivity profile.
- Required integrations.
- Required AI model providers.
- Required permissions.
- Cost risk.
- Incident history.
- Asset maturity.
- Catalog membership.
- Customer-specific allowlist/blocklist.

---

## Core Data Models

### PrivateCatalog

```ts
export interface PrivateCatalog {
  id: string;
  organizationId: string;
  name: string;
  description?: string;
  catalogType:
    | 'organization'
    | 'workspace'
    | 'department'
    | 'region'
    | 'procurement'
    | 'security_approved'
    | 'internal_template'
    | 'partner_curated'
    | 'trial_evaluation'
    | 'executive';
  status: 'draft' | 'active' | 'paused' | 'archived';
  visibility: 'admin_only' | 'eligible_users' | 'organization_wide';
  ownerUserId: string;
  ownerTeamId?: string;
  workspaceIds?: string[];
  departmentIds?: string[];
  regionCodes?: string[];
  planScope?: Array<'basic' | 'pro' | 'smart' | 'enterprise'>;
  createdAt: string;
  updatedAt: string;
}
```

### CatalogAssetMembership

```ts
export interface CatalogAssetMembership {
  id: string;
  catalogId: string;
  assetId: string;
  assetType:
    | 'ai_employee_template'
    | 'agent_team_template'
    | 'workflow_template'
    | 'knowledge_pack'
    | 'geo_template'
    | 'integration_bundle'
    | 'partner_service'
    | 'internal_template'
    | 'private_offer';
  membershipStatus:
    | 'pending_review'
    | 'approved'
    | 'approved_with_conditions'
    | 'blocked'
    | 'expired'
    | 'deprecated'
    | 'archived';
  source:
    | 'manual_admin'
    | 'procurement_approval'
    | 'security_approval'
    | 'vendor_approval'
    | 'policy_rule'
    | 'partner_curation'
    | 'internal_publish'
    | 'bulk_import';
  conditions?: CatalogCondition[];
  expiresAt?: string;
  addedByUserId: string;
  addedAt: string;
}
```

### CatalogCondition

```ts
export interface CatalogCondition {
  type:
    | 'requires_manager_approval'
    | 'requires_procurement_approval'
    | 'requires_security_approval'
    | 'requires_budget_owner_approval'
    | 'requires_sandbox_first'
    | 'requires_region_check'
    | 'requires_low_data_access_mode'
    | 'requires_cost_cap'
    | 'requires_admin_install';
  description: string;
  blocking: boolean;
}
```

### VendorCatalogPolicy

```ts
export interface VendorCatalogPolicy {
  id: string;
  organizationId: string;
  vendorId: string;
  status:
    | 'allowed'
    | 'allowed_with_conditions'
    | 'blocked'
    | 'pending_review'
    | 'expired'
    | 'suspended';
  allowedAssetTypes?: string[];
  blockedAssetTypes?: string[];
  regionRestrictions?: string[];
  dataClassRestrictions?: string[];
  requiresProcurementApproval: boolean;
  requiresSecurityApproval: boolean;
  evidencePackageId?: string;
  expiresAt?: string;
}
```

### CreatorCatalogPolicy

```ts
export interface CreatorCatalogPolicy {
  id: string;
  organizationId: string;
  creatorId: string;
  status: 'allowed' | 'blocked' | 'pending_review' | 'watchlisted';
  allowedCatalogIds?: string[];
  blockedCatalogIds?: string[];
  reason?: string;
  reviewedByUserId?: string;
  reviewedAt?: string;
}
```

### CatalogVisibilityDecision

```ts
export interface CatalogVisibilityDecision {
  assetId: string;
  organizationId: string;
  userId?: string;
  workspaceId?: string;
  decision:
    | 'visible_installable'
    | 'visible_requires_approval'
    | 'visible_blocked'
    | 'visible_evaluation_only'
    | 'hidden';
  reasonCodes: string[];
  blockingReasons: CatalogBlockingReason[];
  matchedCatalogIds: string[];
  requiredApprovals?: string[];
  evaluatedAt: string;
}
```

### CatalogBlockingReason

```ts
export interface CatalogBlockingReason {
  code:
    | 'vendor_not_approved'
    | 'creator_blocked'
    | 'asset_not_in_private_catalog'
    | 'asset_policy_blocked'
    | 'region_incompatible'
    | 'plan_incompatible'
    | 'procurement_not_approved'
    | 'security_review_missing'
    | 'legal_review_missing'
    | 'data_access_too_high'
    | 'integration_not_allowed'
    | 'model_provider_not_allowed'
    | 'asset_suspended'
    | 'asset_deprecated'
    | 'budget_required'
    | 'role_not_allowed';
  message: string;
  remediation?: string;
}
```

---

## Allowlist and Blocklist Rules

### Asset Allowlist

Used when an enterprise wants to approve exact assets.

Rules:

- Only listed assets are visible or installable.
- Asset version constraints may be applied.
- Public marketplace visibility must be filtered through allowlist.
- Sponsored listings must be ignored unless allowlisted.
- Recommendations must only use eligible allowlisted assets.

### Asset Blocklist

Used when an enterprise wants to hide or block exact assets.

Rules:

- Blocklist overrides public ranking.
- Blocklist overrides sponsored listing.
- Blocklist overrides creator popularity.
- Blocklist may be temporary or permanent.
- Blocklisted assets must not appear in install recommendations.

### Vendor Allowlist

Used when only approved vendors are permitted.

Rules:

- Vendor approval does not automatically approve every asset.
- Vendor approval may define allowed categories.
- Vendor approval may define data-class restrictions.
- Vendor approval may expire.
- Vendor evidence must be linked.

### Vendor Blocklist

Used when a vendor is not allowed for the organization.

Rules:

- All vendor assets must be hidden or blocked.
- Existing installs may require review, pause, or migration.
- Vendor block must create audit events.
- Revenue and payout logic must respect enforcement state.

### Creator Allowlist

Used when approved creators may publish into a private catalog.

Rules:

- Creator allowlist may be scoped to catalog, category, or asset type.
- Creator trust score must still be evaluated.
- Creator allowlist does not bypass policy review.

### Integration Allowlist

Used when only approved integrations can be used by installed marketplace assets.

Examples:

- Salesforce allowed.
- HubSpot allowed.
- Gmail blocked.
- Slack allowed only in internal support workspace.
- External webhooks blocked.

### Model Provider Allowlist

Used when customers restrict AI model providers.

Examples:

- OpenAI allowed.
- Gemini allowed only in EU region.
- Claude allowed for Smart plan only.
- DeepSeek blocked by customer policy.
- Customer-hosted model required.

---

## Private Catalog Evaluation Order

Ariyo should evaluate catalog eligibility in this order:

1. Asset existence and status.
2. Asset review approval.
3. Policy enforcement status.
4. Organization marketplace mode.
5. Catalog membership.
6. Vendor policy.
7. Creator policy.
8. Region compatibility.
9. Data class compatibility.
10. Integration compatibility.
11. Model provider compatibility.
12. Plan compatibility.
13. Procurement approval.
14. Security approval.
15. Legal approval.
16. Budget approval.
17. User role and workspace eligibility.
18. Entitlement eligibility.
19. Billing eligibility.
20. Recommendation eligibility.

No later approval may override a hard block from safety, policy, legal, or region controls.

---

## Marketplace Modes

### Open Marketplace Mode

Default for smaller customers.

- Public marketplace visible.
- Admins can install assets.
- Some plan gates apply.
- Trust and safety blocks still apply.

### Restricted Marketplace Mode

Enterprise-controlled discovery.

- Public marketplace is visible but install requires approval.
- Private catalog assets are installable.
- Unapproved assets show request access CTA.

### Private Catalog Only Mode

Strict enterprise mode.

- Only private catalog assets are visible.
- Public marketplace assets are hidden unless included.
- Search only returns approved catalog assets.
- Recommendations only use catalog assets.

### Evaluation Sandbox Mode

Used for procurement or security pilots.

- Assets can be evaluated in sandbox.
- Production install blocked.
- Limited data access.
- Time-limited access.

### Internal Marketplace Mode

Used for organizations that only want internal templates.

- Public marketplace hidden.
- Internal templates visible by policy.
- Creator may be internal team only.

---

## Plan-Aware Private Catalog Controls

### Basic

Basic catalog controls should be simple and safe.

Basic should support:

- Simple approved assets list.
- Basic category filtering.
- Admin-only install control.
- Low-risk internal templates.
- Simple request approval flow.
- Clear blocked messages.

Basic should not expose:

- Complex multi-region catalogs.
- Advanced procurement workflow.
- Custom vendor governance.
- Deep cost center mapping.
- Advanced catalog experimentation.

### Pro

Pro catalog controls should support operational teams.

Pro should support:

- Department catalogs.
- Workspace catalogs.
- Vendor allowlists.
- Integration allowlists.
- Admin approval workflows.
- Team-specific recommendations.
- Partner-curated catalogs.
- Catalog analytics.

### Smart

Smart catalog controls should support enterprise-grade governance.

Smart should support:

- Region-scoped catalogs.
- Procurement-approved catalogs.
- Security-approved catalogs.
- Dynamic policy-based visibility.
- Internal marketplace.
- Private offers.
- Multi-approval flows.
- Role-based catalog access.
- Audit exports.
- Advanced recommendations within private catalog constraints.
- AI-assisted catalog governance.

Smart must never reduce safety for flexibility.

---

## Private Catalog Search Rules

Search must respect catalog controls.

Search results must not reveal hidden assets by name, metadata, creator, or description unless the user is authorized to see blocked assets.

### Search Behaviors

For normal users:

- Return visible eligible assets only.
- Show request access for visible but blocked assets only if policy allows.
- Hide blocked vendors.
- Hide hidden public listings.
- Hide region-incompatible assets.
- Hide suspended assets.

For admins:

- Show eligible assets.
- Show blocked assets with reason.
- Show approval requirements.
- Show catalog membership.
- Show vendor approval state.
- Show region compatibility.

For auditors:

- Show historical asset visibility decisions.
- Show evidence links.
- Show approval chains.
- Show policy versions.

---

## Recommendation Rules

Recommendations inside private catalogs must be constrained by:

- Catalog membership.
- User eligibility.
- Department scope.
- Plan fit.
- Region compatibility.
- Vendor approval.
- Procurement state.
- Trust score.
- Quality ranking score.
- Installation entitlement state.
- Current customer goals.

Ariyo must not recommend:

- Blocked assets.
- Hidden assets.
- Suspended assets.
- Vendor-blocked assets.
- Region-incompatible assets.
- Assets requiring unavailable integrations.
- Assets requiring disallowed model providers.
- Sponsored assets not approved by private catalog.
- Assets that would require an upgrade without clear explanation.

---

## Sponsored Listing Rules in Private Catalogs

Sponsored placements must never bypass private catalog controls.

Rules:

- Sponsored assets must be explicitly allowed in the private catalog.
- Sponsorship must be labeled.
- Sponsorship cannot override ranking safety penalties.
- Sponsorship cannot override procurement blocks.
- Sponsorship cannot override vendor blocks.
- Sponsorship cannot override region blocks.
- Admins may disable sponsored slots in private catalogs.
- Enterprise customers may require all sponsored assets to be hidden.

---

## Internal-Only Template Governance

Internal templates must be treated as marketplace assets with ownership and governance.

Every internal template must include:

- Owner.
- Department.
- Purpose.
- Version.
- Data access profile.
- Permission requirements.
- AI model requirements.
- Integration requirements.
- Review status.
- Approved audience.
- Installability rules.
- Expiration or review date.
- Support owner.

Internal templates must not bypass:

- Security review.
- Data privacy rules.
- AI safety evaluation.
- Permission controls.
- Region controls.
- Audit logging.

---

## Catalog Governance Workflows

### Create Catalog

Steps:

1. Admin creates catalog.
2. Selects catalog type.
3. Defines audience.
4. Defines governance mode.
5. Defines allowed asset sources.
6. Defines approval rules.
7. Defines region and plan scope.
8. Publishes catalog.
9. Audit event is created.

### Add Asset to Catalog

Steps:

1. Admin selects asset.
2. Ariyo evaluates review state.
3. Ariyo evaluates vendor state.
4. Ariyo evaluates region compatibility.
5. Ariyo evaluates procurement/security/legal state.
6. Ariyo shows add decision.
7. Admin confirms.
8. Membership is created.
9. Search index updates.
10. Recommendations update.

### Remove Asset from Catalog

Steps:

1. Admin selects asset.
2. Ariyo shows affected installs.
3. Ariyo shows affected users.
4. Ariyo shows active workflows.
5. Admin chooses removal mode.
6. Ariyo updates visibility.
7. Existing installs are handled by entitlement policy.
8. Audit event is created.

### Request Asset Access

Steps:

1. User finds blocked or unavailable asset.
2. User requests access.
3. Ariyo routes request to proper approver.
4. Approver sees vendor, region, cost, permissions, evidence.
5. Approver approves, denies, or requests review.
6. Catalog membership or approval state updates.

### Catalog Review

Catalogs should be reviewed periodically.

Review checks:

- Expired vendor evidence.
- Deprecated assets.
- Suspended creators.
- New incidents.
- Region policy changes.
- Contract expiration.
- New procurement requirements.
- Low-performing assets.
- Low trust score assets.

---

## Catalog Policy Engine

The catalog policy engine must produce deterministic decisions.

Inputs:

- User context.
- Organization context.
- Workspace context.
- Asset metadata.
- Catalog memberships.
- Vendor policies.
- Creator policies.
- Region policies.
- Procurement state.
- Security state.
- Billing state.
- Entitlement state.
- Trust/safety state.

Outputs:

- Visibility decision.
- Installability decision.
- Recommendation decision.
- Required approvals.
- Blocking reasons.
- Audit record.

Policy results must be:

- Explainable.
- Logged.
- Versioned.
- Reproducible.
- Cacheable with invalidation.
- Safe by default.

---

## Catalog Admin Console Requirements

The admin console must support:

- Create/edit/archive catalogs.
- Add/remove assets.
- Bulk import assets.
- Bulk approve vendors.
- Bulk block vendors.
- Manage department scope.
- Manage workspace scope.
- Manage region scope.
- Manage user eligibility.
- View blocked reasons.
- View affected installs.
- View search/recommendation impact.
- View catalog health.
- View catalog audit log.
- Export catalog evidence.

Admin views must show:

- Asset title.
- Asset type.
- Vendor.
- Creator.
- Trust score.
- Quality score.
- Region compatibility.
- Required permissions.
- Required integrations.
- Review status.
- Procurement status.
- Security status.
- Install count.
- Incident history.
- Cost profile.

---

## Customer User Experience

Normal users should see:

- Approved marketplace assets.
- Department-relevant recommendations.
- Clear install eligibility.
- Clear approval request CTA.
- Plan requirement warnings.
- Region incompatibility messages, if policy allows disclosure.
- Trusted badges.
- Internal templates marked clearly.
- Partner-curated collections marked clearly.

Normal users should not see:

- Hidden blocked assets.
- Vendor risk details.
- Sensitive procurement notes.
- Internal security evidence.
- Creator enforcement records.
- Full policy engine details.

---

## Catalog Health Score

Ariyo should compute a Catalog Health Score.

Suggested dimensions:

```txt
catalog_health_score =
  approved_asset_quality * 0.25
+ catalog_activation_rate * 0.20
+ trust_compliance_score * 0.20
+ freshness_score * 0.10
+ coverage_score * 0.10
+ governance_completeness * 0.10
+ support_health * 0.05
- stale_asset_penalty
- blocked_asset_penalty
- incident_penalty
- expired_evidence_penalty
```

Catalog health should help admins identify:

- Stale catalogs.
- Underused catalogs.
- Risky approved assets.
- Missing departments.
- Expired evidence.
- Outdated procurement approvals.
- Low-quality internal templates.

---

## API Contract

### List Private Catalogs

`GET /api/v1/marketplace/private-catalogs`

Query parameters:

```json
{
  "organization_id": "org_123",
  "workspace_id": "ws_sales",
  "catalog_type": "department",
  "status": "active"
}
```

Response:

```json
{
  "catalogs": [
    {
      "id": "cat_sales_pro",
      "name": "Sales Approved AI Employees",
      "catalog_type": "department",
      "status": "active",
      "asset_count": 42,
      "health_score": 91,
      "last_reviewed_at": "2026-06-10T09:00:00Z"
    }
  ]
}
```

### Create Private Catalog

`POST /api/v1/marketplace/private-catalogs`

Request:

```json
{
  "organization_id": "org_123",
  "name": "EU Sales Catalog",
  "catalog_type": "region",
  "workspace_ids": ["ws_sales"],
  "region_codes": ["EU", "DE"],
  "plan_scope": ["pro", "smart"],
  "visibility": "eligible_users"
}
```

### Add Asset to Catalog

`POST /api/v1/marketplace/private-catalogs/{catalog_id}/assets`

Request:

```json
{
  "asset_id": "asset_sales_followup_ai",
  "asset_type": "ai_employee_template",
  "source": "procurement_approval",
  "conditions": [
    {
      "type": "requires_manager_approval",
      "description": "Sales managers must approve installation for production workspaces.",
      "blocking": true
    }
  ]
}
```

### Remove Asset from Catalog

`DELETE /api/v1/marketplace/private-catalogs/{catalog_id}/assets/{asset_id}`

Request:

```json
{
  "removal_mode": "hide_new_installs_only",
  "reason": "Vendor approval expired"
}
```

### Evaluate Catalog Visibility

`POST /api/v1/marketplace/catalog-visibility/evaluate`

Request:

```json
{
  "organization_id": "org_123",
  "workspace_id": "ws_sales",
  "user_id": "user_456",
  "asset_id": "asset_sales_followup_ai",
  "surface": "search_results"
}
```

Response:

```json
{
  "decision": "visible_requires_approval",
  "reason_codes": [
    "asset_in_department_catalog",
    "manager_approval_required"
  ],
  "matched_catalog_ids": ["cat_sales_pro"],
  "required_approvals": ["sales_manager"],
  "evaluated_at": "2026-06-19T10:30:00Z"
}
```

### Request Asset Access

`POST /api/v1/marketplace/assets/{asset_id}/access-requests`

Request:

```json
{
  "organization_id": "org_123",
  "workspace_id": "ws_sales",
  "requested_by_user_id": "user_456",
  "business_justification": "Needed for outbound renewal follow-up automation.",
  "requested_environment": "production"
}
```

### List Catalog Audit Events

`GET /api/v1/marketplace/private-catalogs/{catalog_id}/audit-events`

Response:

```json
{
  "events": [
    {
      "event_id": "evt_123",
      "event_type": "catalog.asset.added",
      "actor_user_id": "admin_1",
      "asset_id": "asset_sales_followup_ai",
      "policy_version": "catalog_policy_v12",
      "occurred_at": "2026-06-19T10:31:00Z"
    }
  ]
}
```

---

## Webhook Events

Ariyo should emit:

```txt
marketplace.catalog.created
marketplace.catalog.updated
marketplace.catalog.archived
marketplace.catalog.asset.added
marketplace.catalog.asset.removed
marketplace.catalog.asset.blocked
marketplace.catalog.asset.expired
marketplace.catalog.vendor.allowed
marketplace.catalog.vendor.blocked
marketplace.catalog.creator.allowed
marketplace.catalog.creator.blocked
marketplace.catalog.visibility.evaluated
marketplace.catalog.search.filtered
marketplace.catalog.recommendation.filtered
marketplace.catalog.access.requested
marketplace.catalog.access.approved
marketplace.catalog.access.denied
marketplace.catalog.health.changed
marketplace.catalog.policy.updated
marketplace.catalog.audit.exported
```

---

## Observability Events

Track:

- Catalog creation.
- Catalog activation.
- Asset added.
- Asset removed.
- Asset blocked.
- Asset request access clicked.
- Request approved.
- Request denied.
- Search result filtered by catalog.
- Recommendation filtered by catalog.
- Sponsored listing blocked.
- Vendor blocked.
- Region block applied.
- Procurement block applied.
- Security block applied.
- Hidden asset attempted access.
- Catalog policy evaluation latency.
- Catalog cache invalidation.

Every event should include:

- Organization ID.
- Workspace ID.
- Catalog ID.
- Asset ID, when relevant.
- User role.
- Decision.
- Reason codes.
- Policy version.
- Timestamp.

---

## Advanced KPIs

### Catalog Activation Rate

Percentage of catalog assets that are installed or used.

### Approved Asset Utilization Rate

How many approved assets are actually adopted.

### Catalog Search Success Rate

Percentage of searches that result in a meaningful click, request, or install.

### Request Approval Rate

Percentage of access requests approved.

### Request Denial Quality

Percentage of denials with clear policy reasons.

### Catalog Staleness Rate

Percentage of catalog assets with expired evidence, old versions, or deprecated dependencies.

### Hidden Unsafe Asset Rate

Number of unsafe/unapproved assets filtered from user surfaces.

### Region-Compatible Recommendation Rate

Percentage of recommendations compatible with user/customer region policy.

### Vendor Approval Coverage

Percentage of catalog assets with current vendor approval.

### Internal Template Quality Score

Average quality score of internal-only templates.

### Catalog Governance Completeness

Percentage of catalogs with owner, review cycle, policy rules, evidence, and audit logging configured.

---

## AI Private Catalog Assistant

Ariyo may provide an AI assistant to help admins manage catalogs.

The assistant may:

- Suggest assets for a department catalog.
- Explain why an asset is blocked.
- Identify stale catalog entries.
- Recommend replacing deprecated assets.
- Suggest region-safe alternatives.
- Generate catalog audit summaries.
- Draft access denial explanations.
- Identify missing vendor evidence.
- Compare catalog quality across departments.

The assistant must not:

- Approve high-risk assets without authorized approval.
- Override security, legal, procurement, or region blocks.
- Hide policy reasons from admins.
- Recommend sponsored assets without disclosure.
- Use sensitive personal data for catalog personalization.
- Leak hidden asset metadata to unauthorized users.

---

## Security and Privacy Rules

Private catalog controls must enforce:

- Role-based access control.
- Organization isolation.
- Workspace isolation.
- Department scoping.
- Audit logging.
- Evidence-linked decisions.
- No leakage of hidden assets.
- No unauthorized creator/vendor metadata exposure.
- No cross-tenant catalog access.
- No bypass through API search.
- No bypass through recommendation endpoints.
- No bypass through sponsored listings.
- No bypass through direct install URLs.

Direct URL access to blocked assets must still evaluate catalog policy.

---

## Backend Requirements

Backend must provide:

- Catalog service.
- Catalog policy engine.
- Catalog membership store.
- Vendor/creator policy integration.
- Search filtering integration.
- Recommendation filtering integration.
- Install entitlement integration.
- Region policy integration.
- Procurement integration.
- Security review integration.
- Audit event store.
- Catalog cache.
- Policy versioning.
- Admin APIs.
- User-facing APIs.
- Webhooks.
- Reporting exports.

---

## Frontend Requirements

Frontend must provide:

- Private catalog listing pages.
- Catalog-aware marketplace search.
- Department catalog views.
- Internal template catalog views.
- Request access UI.
- Approval requirement chips.
- Blocked reason messaging.
- Admin catalog builder.
- Bulk asset management UI.
- Vendor allowlist UI.
- Creator allowlist UI.
- Catalog health dashboard.
- Catalog audit history.
- Export controls.

Frontend must clearly distinguish:

- Public marketplace asset.
- Private catalog asset.
- Internal template.
- Partner-curated asset.
- Procurement-approved asset.
- Security-approved asset.
- Evaluation-only asset.
- Sponsored asset.

---

## Testing Requirements

Ariyo must test:

- User cannot see hidden blocked asset.
- Admin can see blocked asset reason.
- Sponsored listing cannot bypass catalog allowlist.
- Direct install URL cannot bypass catalog policy.
- Vendor block hides all vendor assets.
- Region block prevents install.
- Search respects private catalog.
- Recommendations respect private catalog.
- Internal templates are scoped correctly.
- Procurement-approved catalog requires approval state.
- Catalog cache invalidates on policy change.
- Removed asset stops appearing in recommendations.
- Blocked creator assets are hidden.
- Audit events are generated for catalog changes.

---

## Forbidden Patterns

Never:

- Treat private catalogs as frontend-only filters.
- Show hidden asset metadata to unauthorized users.
- Allow direct install URLs to bypass catalog policy.
- Allow sponsored listings to bypass catalog policy.
- Recommend assets outside approved catalog scope.
- Ignore vendor approval state.
- Ignore region compatibility.
- Ignore procurement approval.
- Hide blocked reasons from admins.
- Let internal templates bypass safety review.
- Mix public and internal assets without clear labeling.
- Use sensitive employee attributes for catalog personalization.
- Cache catalog decisions without invalidation.
- Allow deleted catalog assets to remain installable.
- Allow expired vendor evidence to stay silently approved.

---

## Golden Rule

Ariyo private catalogs must make enterprise marketplace adoption safer, clearer, more governed, and more useful.

The customer should feel that Marketplace is not an uncontrolled app store.

It should feel like a trusted, policy-aware, organization-specific AI Employee catalog.
