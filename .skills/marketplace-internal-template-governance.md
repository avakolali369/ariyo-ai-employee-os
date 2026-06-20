# Ariyo Marketplace Internal Template Governance Skill

## Core Contract

Ariyo Marketplace Internal Template Governance is not a folder of reusable prompts.

It is the governed lifecycle system that allows enterprise customers, departments, admins, internal builders, operations teams, and AI leads to create, review, approve, version, publish, restrict, update, deprecate, archive, audit, and safely operate internal-only Marketplace templates inside their own organization.

Internal templates must be treated with the same seriousness as public Marketplace assets, because they can access customer data, automate business workflows, influence decisions, trigger tools, call integrations, consume AI budget, and affect employees and customers.

Ariyo must make internal template creation fast.

Ariyo must make unsafe internal template deployment difficult.

---

## 1. Purpose

This skill defines how Ariyo should govern internal templates that are created inside an enterprise workspace and published only to a private catalog, department catalog, team catalog, workspace catalog, or organization-wide catalog.

It covers:

- internal template ownership
- department approval
- template creator roles
- internal review workflow
- security review
- privacy review
- compliance review
- AI safety review
- version governance
- permission scoping
- private catalog publishing
- template deprecation
- template archival
- audit trail
- rollback
- usage monitoring
- incident linkage
- Basic / Pro / Smart behavior
- frontend and backend implementation expectations

This skill should be used when building:

- internal template builder
- private catalog publishing flow
- department template approval flow
- internal AI Employee templates
- internal workflow templates
- internal RAG templates
- internal GEO templates
- internal support/sales/finance/HR templates
- internal automation templates
- internal partner-delivered customer templates
- admin governance dashboard
- template versioning system
- enterprise audit reports

---

## 2. What Counts as an Internal Template

An internal template is any reusable Ariyo asset created for use inside one customer organization and not intended for the public Marketplace.

Examples:

- Sales follow-up AI Employee template
- Finance invoice review workflow
- HR onboarding assistant template
- Legal contract triage agent
- Customer support escalation workflow
- Internal knowledge-base RAG assistant
- Department-specific reporting automation
- Procurement vendor review workflow
- Marketing GEO content optimizer
- Operations incident response checklist agent
- Custom partner-built template for one enterprise customer
- Executive briefing generator
- Internal compliance evidence collection agent

Internal templates may be created by:

- organization admins
- workspace admins
- department admins
- approved internal builders
- partner implementers
- Ariyo customer success teams
- professional services teams
- trusted solution architects
- internal automation teams

Internal templates are not automatically safe just because they are private.

---

## 3. Governance Philosophy

Internal template governance must follow these principles:

1. **Private does not mean low risk**
   - An internal template may touch sensitive business data or high-impact workflows.

2. **Creation should be easy; activation should be governed**
   - Drafting can be lightweight.
   - Publishing and enabling must respect risk.

3. **Departments need autonomy within guardrails**
   - Teams should build useful templates without bypassing enterprise policy.

4. **Every template needs an accountable owner**
   - No orphaned internal template should remain active.

5. **Every active version must be auditable**
   - Ariyo must know who changed what, when, why, and what was approved.

6. **Permission scope must be explicit**
   - Internal templates must not inherit broad organization access by default.

7. **Promotion must be intentional**
   - Moving a template from team-only to organization-wide must require review.

8. **Deprecation is part of lifecycle**
   - Internal templates must have owners, freshness checks, and retirement paths.

---

## 4. Relationship to Other Ariyo Skills

This skill depends on:

- `marketplace-private-catalog-controls.md`
- `marketplace-installation-entitlements.md`
- `marketplace-policy-enforcement-rules.md`
- `marketplace-trust-safety-operations.md`
- `marketplace-compliance-evidence-center.md`
- `marketplace-enterprise-audit-reports.md`
- `marketplace-regulatory-compliance-matrix.md`
- `marketplace-data-residency-region-controls.md`
- `ai-agent-template-review-governance.md`
- `ai-agent-versioning-change-management.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-memory-context.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-simulation-sandbox.md`
- `ai-agent-incident-response.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `admin-permissions.md`
- `enterprise-readiness.md`

Do not duplicate those systems. This skill defines the internal-template governance layer that connects them.

---

## 5. Internal Template Lifecycle

Every internal template should move through a governed lifecycle.

Recommended lifecycle:

1. `draft`
2. `builder_testing`
3. `submitted_for_review`
4. `department_review`
5. `security_review`
6. `privacy_review`
7. `compliance_review`
8. `ai_safety_review`
9. `approved_for_private_catalog`
10. `published_to_private_catalog`
11. `installable`
12. `active`
13. `monitoring`
14. `change_requested`
15. `deprecated`
16. `archived`
17. `suspended`
18. `retired`

Lifecycle rules:

- Draft templates may be edited freely by authorized builders.
- Review is required before publishing beyond the builder's own sandbox.
- Department-scoped templates may have lighter review than org-wide templates.
- High-risk templates require security, privacy, compliance, and AI safety review.
- Published templates must have a current owner.
- Active templates must be monitored.
- Deprecated templates must stop appearing in recommendations.
- Archived templates must not be installable.
- Suspended templates must be disabled or quarantined.

---

## 6. Internal Template Status Model

Use explicit template statuses.

```ts
type InternalTemplateStatus =
  | 'draft'
  | 'builder_testing'
  | 'submitted_for_review'
  | 'needs_changes'
  | 'department_approved'
  | 'security_review_required'
  | 'privacy_review_required'
  | 'compliance_review_required'
  | 'ai_safety_review_required'
  | 'approved'
  | 'published'
  | 'active'
  | 'deprecated'
  | 'archived'
  | 'suspended'
  | 'retired';
```

Status must never be inferred only from UI state.

Status must be stored as a backend source of truth with audit history.

---

## 7. Internal Template Ownership

Every internal template must have at least one accountable owner.

Ownership fields:

```ts
interface InternalTemplateOwner {
  owner_id: string;
  owner_type: 'user' | 'department' | 'team' | 'workspace' | 'partner' | 'ariyo_internal';
  role: 'primary_owner' | 'technical_owner' | 'business_owner' | 'security_owner' | 'fallback_owner';
  department_id?: string;
  workspace_id?: string;
  contact_email?: string;
  assigned_at: string;
  assigned_by: string;
  expires_at?: string;
}
```

Rules:

- Every active template must have one `primary_owner`.
- High-risk templates should have both business and technical owners.
- Partner-created templates must have a customer-side owner.
- If the owner leaves or loses permissions, the template must enter `owner_review_required` state.
- Orphaned templates must not be promoted, updated, or widely installed.

---

## 8. Template Scope Levels

Internal templates must have explicit scope.

Scope levels:

1. **Builder sandbox**
   - Only creator can test.

2. **Team scope**
   - Visible to a small team.

3. **Department scope**
   - Visible to a business unit.

4. **Workspace scope**
   - Visible to one workspace.

5. **Organization scope**
   - Visible across the enterprise.

6. **Private catalog scope**
   - Governed listing visible in a curated internal catalog.

7. **Partner-delivered scope**
   - Created by partner for a specific customer.

8. **Restricted scope**
   - Visible only to approved roles, locations, or departments.

Scope changes must be treated as governance events.

Promoting from narrow scope to broad scope must require additional review.

---

## 9. Permission Scope Rules

Internal templates must declare required permissions before activation.

Permission categories:

- knowledge access
- file access
- CRM access
- email access
- calendar access
- ticketing access
- finance data access
- HR data access
- customer data access
- analytics access
- write actions
- external API access
- notification sending
- payment or billing actions
- admin actions
- model-provider access
- memory write access
- workflow execution

Permission model:

```ts
interface InternalTemplatePermissionScope {
  permission_id: string;
  permission_type:
    | 'read_data'
    | 'write_data'
    | 'send_message'
    | 'execute_workflow'
    | 'call_integration'
    | 'access_knowledge_base'
    | 'use_model_provider'
    | 'write_memory'
    | 'admin_action';
  resource_type: string;
  resource_id?: string;
  sensitivity: 'low' | 'medium' | 'high' | 'restricted';
  required: boolean;
  requested_reason: string;
  approved_by?: string;
  approved_at?: string;
}
```

Rules:

- Templates must request minimum necessary permissions.
- Write permissions require stronger review than read permissions.
- Restricted data access requires security/privacy approval.
- Admin actions require admin approval.
- Permission escalation after publication requires new version review.
- Permission changes must be shown clearly in the install/update flow.

---

## 10. Risk Classification

Every internal template must receive a risk classification.

Risk dimensions:

- data sensitivity
- action impact
- automation autonomy
- external communication
- financial impact
- HR/legal impact
- security impact
- compliance impact
- customer-facing impact
- model-provider exposure
- integration exposure
- region/data residency impact
- memory persistence
- RAG/knowledge scope
- error recoverability

Risk levels:

```ts
type InternalTemplateRiskLevel = 'low' | 'medium' | 'high' | 'critical';
```

Examples:

- Low: read-only internal FAQ assistant.
- Medium: CRM summary generator with limited customer data.
- High: customer email response assistant with send capability.
- Critical: finance approval automation or HR disciplinary workflow.

Rules:

- High and critical templates require formal approval.
- Critical templates require simulation and human review.
- Risk classification must be visible to admins.
- Risk changes between versions must be highlighted.

---

## 11. Internal Review Workflow

Review workflow should be configurable by enterprise policy.

Default review stages:

1. Builder self-check
2. Automated validation
3. Department owner review
4. Security review
5. Privacy review
6. Compliance review
7. AI safety review
8. Catalog admin approval
9. Final publish approval

Review object:

```ts
interface InternalTemplateReview {
  review_id: string;
  template_id: string;
  version_id: string;
  review_type:
    | 'builder_self_check'
    | 'automated_validation'
    | 'department_review'
    | 'security_review'
    | 'privacy_review'
    | 'compliance_review'
    | 'ai_safety_review'
    | 'catalog_admin_review'
    | 'executive_review';
  status: 'pending' | 'approved' | 'rejected' | 'needs_changes' | 'waived';
  reviewer_id?: string;
  decision_reason?: string;
  findings?: InternalTemplateReviewFinding[];
  created_at: string;
  completed_at?: string;
}
```

Findings:

```ts
interface InternalTemplateReviewFinding {
  finding_id: string;
  severity: 'info' | 'low' | 'medium' | 'high' | 'critical';
  category:
    | 'security'
    | 'privacy'
    | 'compliance'
    | 'ai_safety'
    | 'permission_scope'
    | 'data_residency'
    | 'cost'
    | 'quality'
    | 'documentation'
    | 'business_risk';
  title: string;
  description: string;
  required_fix?: string;
  blocking: boolean;
}
```

---

## 12. Automated Validation

Before review, Ariyo should automatically validate templates.

Validation checks:

- metadata completeness
- owner assignment
- description clarity
- declared use case
- target users
- plan compatibility
- department compatibility
- required permissions
- integration dependencies
- data sensitivity declaration
- region compatibility
- model-provider compatibility
- AI safety policy compliance
- prompt injection exposure
- unsafe output risk
- hallucination risk
- excessive cost risk
- missing rollback path
- missing support owner
- missing changelog
- missing test results
- missing simulation results

Automated validation should produce:

- pass/fail state
- warnings
- blocking issues
- suggested fixes
- review routing recommendation

---

## 13. Version Governance

Internal templates must be versioned.

Version fields:

```ts
interface InternalTemplateVersion {
  version_id: string;
  template_id: string;
  semantic_version: string;
  version_status: 'draft' | 'in_review' | 'approved' | 'published' | 'deprecated' | 'rollback_available';
  created_by: string;
  created_at: string;
  change_summary: string;
  change_type:
    | 'minor_copy_change'
    | 'prompt_change'
    | 'permission_change'
    | 'integration_change'
    | 'model_change'
    | 'workflow_logic_change'
    | 'risk_change'
    | 'breaking_change';
  risk_delta: 'none' | 'lower' | 'higher';
  requires_reapproval: boolean;
  previous_version_id?: string;
}
```

Version rules:

- Prompt changes must be versioned.
- Permission changes must require approval.
- Integration changes must require approval.
- Model-provider changes must require evaluation.
- Risk-increasing changes must require review.
- Published versions must be immutable.
- Rollback versions must remain available while active installs exist.
- Version changelog must be visible to admins and affected users.

---

## 14. Private Catalog Publishing

Publishing an internal template to a private catalog is a governed action.

Publishing requirements:

- approved version
- assigned owner
- declared scope
- risk classification
- permission approval
- install instructions
- support owner
- usage limitations
- data handling summary
- cost estimate
- update policy
- rollback path
- audit metadata

Private catalog listing fields:

```ts
interface InternalTemplateCatalogListing {
  listing_id: string;
  template_id: string;
  version_id: string;
  catalog_id: string;
  visibility_scope: 'team' | 'department' | 'workspace' | 'organization' | 'restricted';
  allowed_departments?: string[];
  allowed_roles?: string[];
  allowed_regions?: string[];
  blocked_regions?: string[];
  install_requires_approval: boolean;
  owner_id: string;
  support_contact_id: string;
  published_by: string;
  published_at: string;
  expires_at?: string;
}
```

Rules:

- Draft templates must not appear in private catalog.
- Deprecated templates must be visually marked.
- Suspended templates must be hidden or blocked.
- Organization-wide publication requires admin approval.
- Restricted templates must not appear to unauthorized users.

---

## 15. Installation Governance

Internal templates must follow installation entitlement rules.

Install checks:

- user role
- workspace permission
- department permission
- plan compatibility
- catalog visibility
- template status
- version status
- permission grants
- required integrations
- data region compatibility
- budget/cost policy
- approval requirement
- risk level
- current suspension status

Install decision:

```ts
interface InternalTemplateInstallDecision {
  decision_id: string;
  template_id: string;
  version_id: string;
  organization_id: string;
  workspace_id?: string;
  user_id: string;
  decision: 'allow' | 'allow_with_approval' | 'block' | 'request_admin_review';
  reasons: string[];
  missing_requirements?: string[];
  required_approvals?: string[];
  generated_at: string;
}
```

---

## 16. Update Governance

Internal template updates must not silently change behavior for active users.

Update rules:

- Minor copy changes may auto-update if policy allows.
- Prompt changes require changelog visibility.
- Permission changes require explicit approval.
- New integration dependencies require install revalidation.
- Risk-increasing updates require admin review.
- Breaking changes require user/admin notification.
- Critical templates should support staged rollout.
- Rollback must be available for active installs.

Update modes:

- automatic patch update
- admin-approved update
- user-approved update
- staged rollout
- force update due to security issue
- blocked update due to failed review

---

## 17. Deprecation and Retirement

Internal templates must have deprecation paths.

Deprecation reasons:

- outdated owner
- outdated workflow
- poor quality
- low usage
- high incident rate
- high cost
- replaced by better template
- policy violation
- vendor/integration change
- regulatory change
- region incompatibility
- failed renewal review

Deprecation behavior:

- Template remains visible but marked as deprecated.
- New installs may be blocked.
- Existing installs continue temporarily if safe.
- Users are shown migration recommendations.
- Owner must set retirement date.
- Admins can force retirement for risk.

Retirement behavior:

- No new installs.
- Existing installs disabled or migrated.
- Template archived.
- Audit history retained.
- Evidence retained according to retention policy.

---

## 18. Internal Template Audit Trail

Every important action must be auditable.

Audit events:

- template_created
- template_submitted_for_review
- template_review_started
- template_review_approved
- template_review_rejected
- template_owner_changed
- template_scope_changed
- template_permission_changed
- template_version_created
- template_version_published
- template_published_to_private_catalog
- template_installed
- template_updated
- template_rollback_triggered
- template_deprecated
- template_archived
- template_suspended
- template_restored
- template_deleted

Audit record:

```ts
interface InternalTemplateAuditRecord {
  audit_id: string;
  event_type: string;
  template_id: string;
  version_id?: string;
  actor_id: string;
  actor_type: 'user' | 'admin' | 'system' | 'partner' | 'ariyo_operator';
  organization_id: string;
  workspace_id?: string;
  before?: Record<string, unknown>;
  after?: Record<string, unknown>;
  reason?: string;
  timestamp: string;
  ip_address?: string;
  user_agent?: string;
}
```

---

## 19. Usage Monitoring

Published internal templates must be monitored.

Signals:

- installs
- active users
- successful runs
- failed runs
- unsafe output flags
- hallucination reports
- permission errors
- integration errors
- cost per run
- escalation rate
- user satisfaction
- time saved estimate
- business outcome completion
- template owner responsiveness
- incident count
- rollback count
- deprecation warnings

Monitoring must feed:

- quality score
- risk score
- owner alerts
- deprecation recommendations
- audit reports
- customer success insights
- internal catalog ranking

---

## 20. Internal Template Quality Score

Ariyo should maintain an internal quality score.

Quality dimensions:

- activation success
- successful run rate
- error rate
- user satisfaction
- documentation completeness
- business outcome clarity
- permission minimization
- cost predictability
- owner responsiveness
- freshness
- review completeness
- incident history
- adoption by intended users
- uninstall rate

Example formula:

```text
internal_template_quality_score =
  activation_score * 0.20
+ successful_run_score * 0.20
+ user_feedback_score * 0.15
+ documentation_score * 0.10
+ cost_predictability_score * 0.10
+ permission_minimization_score * 0.10
+ freshness_score * 0.10
+ owner_responsiveness_score * 0.05
- incident_penalty
- policy_penalty
```

Quality score must not replace human review for high-risk templates.

---

## 21. Internal Template Health Score

Health score helps admins understand template operational state.

Health states:

- healthy
- needs_attention
- stale
- risky
- blocked
- deprecated
- suspended

Health factors:

- owner validity
- review freshness
- evidence freshness
- usage trend
- failure trend
- cost trend
- risk trend
- incident trend
- policy status
- version age
- integration status

---

## 22. Department Approval Model

Departments should be able to approve templates for their own use.

Department approval fields:

```ts
interface DepartmentTemplateApproval {
  approval_id: string;
  template_id: string;
  version_id: string;
  department_id: string;
  approver_id: string;
  approval_scope: 'team_only' | 'department_wide' | 'restricted_department_group';
  status: 'pending' | 'approved' | 'rejected' | 'revoked';
  decision_reason?: string;
  expires_at?: string;
  approved_at?: string;
}
```

Rules:

- Department approval cannot override security policy.
- Department approval cannot override region policy.
- Department approval cannot override platform suspension.
- Department approval must be time-bound for high-risk templates.
- Revoked department approvals must block new installs.

---

## 23. Partner-Created Internal Templates

Partners may build templates for enterprise customers.

Partner-created template rules:

- must be marked as partner-created
- must have customer-side owner
- must declare partner role
- must declare support responsibility
- must follow partner operations governance
- must respect customer data access boundaries
- must not be promoted to public Marketplace without separate review
- must not be reused for other customers without customer approval and data cleanup
- must include handoff documentation
- must include maintenance responsibility

Partner handoff checklist:

- template purpose
- owner assignment
- permissions
- integrations
- version history
- support model
- update model
- rollback path
- known limitations
- test results
- data handling notes

---

## 24. Internal Template Promotion

Internal templates may be promoted across scopes.

Promotion paths:

- sandbox → team
- team → department
- department → workspace
- workspace → organization
- organization → private catalog featured
- private internal → public Marketplace candidate

Promotion requirements increase with visibility.

Promotion to public Marketplace must go through public template review governance and must not reuse private customer data, logs, prompts, documents, or workflows that reveal confidential operations.

---

## 25. Internal Template Access Control

Access must be policy-driven.

Access dimensions:

- organization
- workspace
- department
- team
- role
- user group
- region
- plan
- entitlement
- security posture
- procurement approval
- catalog policy
- risk clearance

Access decisions must be enforced server-side.

The frontend may explain access decisions but must not enforce them alone.

---

## 26. Basic / Pro / Smart Rules

### Basic

Basic internal templates should be:

- simple
- low-risk
- limited scope
- minimal permissions
- low-cost
- easy to install
- no advanced automation
- no broad organization-wide publishing by default

Basic should support:

- personal/team templates
- simple internal prompts
- read-only knowledge assistants
- lightweight approval

Basic should block or upsell:

- high-risk templates
- advanced workflow automation
- multi-agent templates
- restricted data access
- organization-wide private catalog governance
- advanced audit reports

### Pro

Pro internal templates should support:

- team and department governance
- approval workflow
- integration-aware templates
- workflow templates
- department private catalogs
- versioning
- rollback
- owner management
- usage monitoring
- moderate automation

Pro must require stronger approval for:

- write actions
- sensitive integrations
- customer-facing templates
- finance/legal/HR workflows

### Smart

Smart internal templates should support:

- full enterprise governance
- org-wide private catalog
- advanced AI Employee templates
- multi-agent internal templates
- RAG templates
- GEO templates
- simulation gates
- compliance evidence
- department-level policy routing
- staged rollout
- audit packages
- AI risk scoring
- advanced observability
- enterprise approval chains

Smart must not remove guardrails.

Smart means more power with more governance.

---

## 27. Frontend Requirements

Frontend must provide:

- internal template builder status panel
- owner assignment UI
- scope selector
- risk summary
- permission summary
- department approval workflow
- review checklist
- private catalog publishing flow
- version history view
- changelog comparison
- install preview
- update impact preview
- deprecation warning
- rollback UI
- audit trail viewer
- usage health dashboard
- policy block explanations
- access request flow
- partner-created template badge

Frontend must clearly show:

- who owns the template
- who can install it
- what it can access
- what changed in this version
- whether it is approved
- whether it is deprecated
- whether it is safe to install
- whether approval is required
- whether it is internal-only

Forbidden frontend patterns:

- hiding permission changes
- publishing from draft without review
- allowing broad visibility by default
- showing restricted templates to unauthorized users
- treating internal templates as risk-free
- hiding owner information
- hiding deprecation state

---

## 28. Backend Requirements

Backend must provide:

- internal template registry
- version registry
- owner registry
- review workflow engine
- policy decision engine
- permission validation
- install decision service
- catalog publishing service
- rollback service
- deprecation service
- audit log service
- usage monitoring pipeline
- health scoring jobs
- notification service
- access request workflow
- evidence attachment service

Backend must enforce:

- server-side authorization
- immutable published versions
- audit logging
- permission approvals
- policy gates
- review requirements
- catalog visibility rules
- install restrictions
- rollback eligibility
- retention rules

---

## 29. API Contract

### Create Internal Template

`POST /api/v1/internal-templates`

Request:

```json
{
  "name": "Finance Invoice Review Assistant",
  "description": "Helps finance team review invoice anomalies before approval.",
  "owner_id": "user_123",
  "department_id": "finance",
  "scope": "department",
  "template_type": "workflow_template",
  "risk_level": "medium"
}
```

Response:

```json
{
  "template_id": "itpl_123",
  "status": "draft",
  "version_id": "itplv_001"
}
```

### Submit for Review

`POST /api/v1/internal-templates/{template_id}/submit-review`

Request:

```json
{
  "version_id": "itplv_001",
  "requested_scope": "department",
  "notes": "Ready for finance department pilot."
}
```

### Publish to Private Catalog

`POST /api/v1/internal-templates/{template_id}/publish`

Request:

```json
{
  "version_id": "itplv_001",
  "catalog_id": "cat_finance",
  "visibility_scope": "department",
  "install_requires_approval": true
}
```

### Evaluate Install

`POST /api/v1/internal-templates/{template_id}/install/evaluate`

Request:

```json
{
  "version_id": "itplv_001",
  "workspace_id": "ws_123",
  "user_id": "user_456"
}
```

Response:

```json
{
  "decision": "allow_with_approval",
  "reasons": ["Template requires finance admin approval."],
  "required_approvals": ["department_admin"]
}
```

### Deprecate Template

`POST /api/v1/internal-templates/{template_id}/deprecate`

Request:

```json
{
  "reason": "Replaced by updated finance workflow template.",
  "replacement_template_id": "itpl_789",
  "retirement_date": "2026-09-30"
}
```

---

## 30. Webhooks

Emit webhooks for:

- `internal_template.created`
- `internal_template.submitted_for_review`
- `internal_template.approved`
- `internal_template.rejected`
- `internal_template.published`
- `internal_template.installed`
- `internal_template.updated`
- `internal_template.permission_changed`
- `internal_template.scope_changed`
- `internal_template.deprecated`
- `internal_template.retired`
- `internal_template.suspended`
- `internal_template.owner_changed`
- `internal_template.review_expired`

Webhook payload must include:

- organization_id
- workspace_id if applicable
- template_id
- version_id if applicable
- actor_id
- event_type
- timestamp
- risk_level
- status
- audit_id

---

## 31. Observability Events

Track:

- `internal_template_draft_created`
- `internal_template_review_submitted`
- `internal_template_review_blocked`
- `internal_template_review_approved`
- `internal_template_private_catalog_published`
- `internal_template_install_evaluated`
- `internal_template_install_blocked`
- `internal_template_installed`
- `internal_template_run_succeeded`
- `internal_template_run_failed`
- `internal_template_permission_error`
- `internal_template_cost_threshold_warning`
- `internal_template_owner_missing`
- `internal_template_deprecated`
- `internal_template_rollback_executed`

Event properties:

- template_id
- version_id
- organization_id
- workspace_id
- department_id
- risk_level
- scope
- template_type
- plan
- status
- decision
- block_reason
- owner_id

---

## 32. Notifications

Notify relevant users when:

- template is submitted for review
- review is approved/rejected
- owner is missing
- template is published
- template is installed
- risky permission is requested
- template requires update approval
- template becomes deprecated
- template will retire soon
- incident is linked
- template is suspended
- review expires
- evidence expires

Notifications must be role-aware and avoid exposing sensitive details to unauthorized users.

---

## 33. Security and Privacy Rules

Security rules:

- Enforce least privilege.
- Require approval for write actions.
- Prevent unauthorized scope expansion.
- Store audit history immutably.
- Detect dangerous prompt instructions.
- Block templates that request unnecessary access.
- Validate integration permissions before activation.
- Do not allow template builders to self-approve high-risk templates.

Privacy rules:

- Declare data classes accessed.
- Declare data retention behavior.
- Declare model-provider exposure.
- Declare memory behavior.
- Respect data residency policies.
- Redact sensitive logs where required.
- Prevent cross-customer template leakage.
- Prevent partner reuse of confidential customer templates.

---

## 34. Compliance Rules

Compliance requirements:

- Map high-risk templates to compliance controls.
- Attach evidence for security/privacy review.
- Retain review decisions.
- Retain approval history.
- Support audit export.
- Support policy exception records.
- Support periodic review.
- Support owner attestation.

High-risk internal templates should require periodic recertification.

---

## 35. AI Internal Template Governance Assistant

Ariyo may include an AI assistant to help internal builders.

Allowed assistant tasks:

- explain why a template is blocked
- suggest permission minimization
- suggest safer prompt wording
- generate review checklist
- summarize changelog
- identify missing metadata
- suggest risk classification
- prepare approval summary
- recommend deprecation
- suggest documentation improvements

The assistant must not:

- approve its own template
- bypass policy
- hide risks
- fabricate evidence
- mark security review complete
- override admin decision
- publish to private catalog without authorization

---

## 36. Advanced KPIs

Track:

- Internal Template Creation Rate
- Draft-to-Approval Rate
- Approval Cycle Time
- Review Rejection Rate
- Permission Minimization Score
- Internal Template Activation Rate
- Internal Template Successful Run Rate
- Internal Template Incident Rate
- Internal Template Cost Predictability
- Owner Responsiveness Score
- Orphaned Template Rate
- Deprecated Template Install Block Rate
- Rollback Rate
- Department Template Adoption Rate
- Private Catalog Publishing Rate
- High-Risk Template Review SLA
- Internal Template Trust Score

---

## 37. Forbidden Patterns

Do not:

- allow internal templates to publish without an owner
- allow broad org-wide visibility by default
- allow self-approval for high-risk templates
- hide permission escalation
- allow partner-created templates without customer owner
- allow unversioned prompt changes
- allow silent breaking updates
- allow deprecated templates to be recommended
- allow suspended templates to run
- allow customer data to leak into reusable partner templates
- allow private templates to become public without separate review
- allow draft templates to be installed by production users
- allow permission grants that exceed declared purpose
- treat internal templates as exempt from security or privacy review

---

## 38. Done Definition

This skill is implemented when:

- internal templates have lifecycle states
- owners are required
- scopes are explicit
- permissions are declared and approved
- risk classification exists
- review workflows are configurable
- versioning is mandatory
- private catalog publishing is governed
- install decisions are server-side
- updates are auditable
- deprecation and retirement exist
- audit trail is complete
- monitoring feeds health and quality scores
- Basic / Pro / Smart behavior is enforced
- frontend clearly explains governance state
- backend enforces policy gates
- APIs and webhooks exist
- high-risk templates cannot bypass review

---

## 39. Golden Rule

Internal templates are private assets with production consequences.

Ariyo must help organizations move fast, but every internal template that touches data, tools, people, money, customers, compliance, or automation must have clear ownership, explicit permissions, governed approval, versioned change history, observable behavior, and a safe path to rollback, deprecation, and audit.
