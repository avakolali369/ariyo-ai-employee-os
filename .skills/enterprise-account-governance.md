# Ariyo Enterprise Account Governance Skill

## 1. Core Contract

Ariyo Enterprise Account Governance is not an admin settings page.

It is the governed enterprise operating layer that defines how customers structure accounts, organizations, workspaces, departments, teams, users, roles, policies, ownership, approvals, audit trails, AI employee access, marketplace controls, billing authority, security posture, compliance obligations, and operational responsibility across the Ariyo platform.

Ariyo must let enterprise customers scale administration without losing control.

Ariyo must make the account model understandable, policy-enforced, auditable, least-privilege, delegation-safe, and compatible with real enterprise operating structures.

---

## 2. Purpose

This skill governs the product, UX, backend, policy, security, compliance, and operational rules for enterprise account governance in Ariyo.

It applies to:

- enterprise customer accounts
- organization hierarchy
- workspaces
- departments
- teams
- business units
- subsidiaries
- admin roles
- owner roles
- billing roles
- security roles
- procurement roles
- marketplace governance roles
- AI employee ownership
- policy assignment
- delegated administration
- workspace isolation
- auditability
- cross-workspace governance
- enterprise-level reporting

The purpose is to make Ariyo usable by large customers without turning the platform into unmanaged AI sprawl.

---

## 3. Strategic Position

Enterprise customers do not only buy features.

They buy control.

Ariyo must support companies where:

- finance wants budget control
- security wants access control
- legal wants evidence
- procurement wants approval flows
- IT wants directory integration
- business teams want autonomy
- executives want visibility
- department leaders want ownership
- operators want speed
- compliance teams want auditability
- AI teams want governance over AI employees

Enterprise Account Governance is the foundation for all of that.

Without this layer, every advanced Ariyo capability becomes harder to trust.

---

## 4. Dependencies

This skill must integrate with:

- `admin-permissions.md`
- `enterprise-readiness.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-memory-context.md`
- `workflow-automation.md`
- `operations-command-center.md`
- `internal-admin-backoffice.md`
- `feature-flags-rollout-system.md`
- `monetization-billing.md`
- `finance-accounting-controls.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-enterprise-vendor-management.md`
- `marketplace-enterprise-audit-reports.md`
- `marketplace-data-residency-region-controls.md`
- `marketplace-regulatory-compliance-matrix.md`
- `marketplace-internal-template-governance.md`

Enterprise account governance must be treated as a platform primitive, not a downstream feature.

---

## 5. Account Hierarchy Model

Ariyo should support a clear hierarchy:

```text
Enterprise Account
└── Organization
    ├── Workspace
    │   ├── Department
    │   │   ├── Team
    │   │   │   ├── Users
    │   │   │   ├── AI Employees
    │   │   │   ├── Workflows
    │   │   │   ├── Knowledge Sources
    │   │   │   ├── Marketplace Assets
    │   │   │   └── Integrations
    │   │   └── Policies
    │   └── Workspace Policies
    └── Organization Policies
```

### 5.1 Enterprise Account

Represents the commercial and legal customer relationship.

It contains:

- legal entity
- billing relationship
- contract terms
- subscription plan
- procurement settings
- enterprise-wide security settings
- enterprise-wide compliance obligations
- master audit exports
- account-level owners
- account-level admins
- regional policies
- billing contacts
- legal contacts
- security contacts
- procurement contacts

### 5.2 Organization

Represents an administrative entity inside the account.

Examples:

- parent company
- subsidiary
- regional entity
- business unit
- government agency division
- franchise network
- portfolio company

### 5.3 Workspace

Represents an operational boundary.

Workspaces should isolate:

- users
- AI employees
- workflows
- knowledge sources
- integrations
- marketplace installs
- analytics
- permissions
- audit logs
- budgets
- policies

Workspace isolation is critical for enterprise trust.

### 5.4 Department

Represents a business ownership layer.

Examples:

- Sales
- Marketing
- HR
- Finance
- Customer Support
- Legal
- Operations
- Product
- Engineering
- Procurement

Departments may own AI employees, templates, workflows, budgets, and approvals.

### 5.5 Team

Represents a working group with more granular permissions.

Examples:

- Sales Development
- Paid Media
- Tax Operations
- Customer Onboarding
- Contract Review
- Executive Reporting

---

## 6. Governance Principles

Ariyo must enforce these principles:

1. **Least privilege by default**  
   Users should receive only the permissions needed for their role.

2. **Separation of duties**  
   Sensitive actions should require different owners or approvers.

3. **Delegated autonomy**  
   Departments should move quickly within policy boundaries.

4. **Central oversight**  
   Enterprise admins must see and govern activity across the account.

5. **Auditability**  
   Every meaningful governance action must be logged.

6. **Policy inheritance**  
   Higher-level rules must flow downward unless explicitly overridden.

7. **Explicit override tracking**  
   Policy exceptions must be visible, justified, scoped, and expiring.

8. **No hidden superuser behavior**  
   Privileged actions must be explainable and recorded.

9. **Human accountability**  
   Every AI employee, workflow, integration, and marketplace install must have a human owner.

10. **Governance must not block legitimate work unnecessarily**  
   The system should guide, explain, and route approvals instead of only denying actions.

---

## 7. Core Objects

### 7.1 EnterpriseAccount

```ts
interface EnterpriseAccount {
  id: string;
  legalName: string;
  displayName: string;
  plan: 'basic' | 'pro' | 'smart' | 'enterprise_custom';
  status: 'trial' | 'active' | 'suspended' | 'terminated' | 'migration_pending';
  primaryRegion: string;
  allowedRegions: string[];
  billingProfileId: string;
  procurementProfileId?: string;
  securityProfileId?: string;
  complianceProfileId?: string;
  createdAt: string;
  updatedAt: string;
}
```

### 7.2 Organization

```ts
interface Organization {
  id: string;
  enterpriseAccountId: string;
  parentOrganizationId?: string;
  name: string;
  type: 'parent' | 'subsidiary' | 'business_unit' | 'region' | 'department_group' | 'custom';
  status: 'active' | 'archived' | 'restricted';
  defaultPolicySetId?: string;
  ownerUserIds: string[];
  createdAt: string;
  updatedAt: string;
}
```

### 7.3 Workspace

```ts
interface Workspace {
  id: string;
  organizationId: string;
  name: string;
  purpose: string;
  environment: 'production' | 'sandbox' | 'training' | 'demo' | 'testing';
  dataClassification: 'public' | 'internal' | 'confidential' | 'restricted';
  region: string;
  status: 'active' | 'locked' | 'archived' | 'pending_approval';
  ownerUserIds: string[];
  policySetIds: string[];
  createdAt: string;
  updatedAt: string;
}
```

### 7.4 Department

```ts
interface Department {
  id: string;
  workspaceId: string;
  name: string;
  businessFunction: string;
  ownerUserIds: string[];
  budgetProfileId?: string;
  policySetIds: string[];
  createdAt: string;
  updatedAt: string;
}
```

### 7.5 GovernanceRole

```ts
interface GovernanceRole {
  id: string;
  scopeType: 'enterprise_account' | 'organization' | 'workspace' | 'department' | 'team';
  scopeId: string;
  name: string;
  permissions: string[];
  assignableBy: string[];
  requiresApproval: boolean;
  expiresAfterDays?: number;
  isSystemRole: boolean;
}
```

### 7.6 GovernancePolicy

```ts
interface GovernancePolicy {
  id: string;
  name: string;
  domain: 'security' | 'ai' | 'data' | 'marketplace' | 'billing' | 'procurement' | 'workflow' | 'compliance' | 'integration' | 'audit';
  scopeType: 'enterprise_account' | 'organization' | 'workspace' | 'department' | 'team';
  scopeId: string;
  rules: GovernancePolicyRule[];
  inheritance: 'enforced' | 'overridable_with_approval' | 'advisory';
  status: 'draft' | 'active' | 'deprecated' | 'archived';
  version: string;
}
```

### 7.7 GovernancePolicyRule

```ts
interface GovernancePolicyRule {
  id: string;
  condition: string;
  action: 'allow' | 'deny' | 'require_approval' | 'require_review' | 'notify' | 'limit' | 'log_only';
  severity: 'low' | 'medium' | 'high' | 'critical';
  explanation: string;
  exceptionAllowed: boolean;
  exceptionDurationDays?: number;
}
```

### 7.8 AccountAuditEvent

```ts
interface AccountAuditEvent {
  id: string;
  enterpriseAccountId: string;
  actorType: 'user' | 'ai_employee' | 'system' | 'api' | 'partner';
  actorId: string;
  action: string;
  targetType: string;
  targetId: string;
  scopeType: string;
  scopeId: string;
  policyDecision?: 'allowed' | 'denied' | 'approved' | 'blocked' | 'overridden';
  reason?: string;
  metadata: Record<string, unknown>;
  occurredAt: string;
}
```

---

## 8. Role Model

Ariyo must define clear system roles.

### 8.1 Enterprise Owner

Can:

- manage legal/account ownership
- manage enterprise-wide policies
- manage billing authority
- assign enterprise admins
- approve high-risk marketplace installs
- approve cross-region policies
- export account-level audit packages
- configure governance defaults

Must not bypass audit.

### 8.2 Enterprise Admin

Can:

- manage organizations
- manage workspaces
- manage users
- assign most roles
- view enterprise-wide activity
- manage policy sets
- manage integrations within allowed scope
- configure AI employee governance defaults

### 8.3 Security Admin

Can:

- configure security policies
- review permissions
- approve high-risk integrations
- view security audit events
- block risky AI employee actions
- enforce data access restrictions
- review suspicious behavior

### 8.4 Compliance Admin

Can:

- view compliance evidence
- export audit reports
- manage retention rules
- approve compliance exceptions
- review marketplace compliance mapping
- manage evidence packages

### 8.5 Billing Admin

Can:

- manage billing profile
- view spend
- approve budgets
- manage cost centers
- review marketplace purchases
- export financial reports

### 8.6 Procurement Admin

Can:

- manage vendor approval
- manage purchase workflows
- approve marketplace procurement requests
- manage private catalog procurement status
- review purchase evidence

### 8.7 Workspace Owner

Can:

- manage workspace configuration within policy
- invite users if allowed
- assign workspace roles
- manage workspace AI employees
- manage workspace templates
- manage workspace workflows
- request marketplace installs

### 8.8 Department Owner

Can:

- manage department AI employees
- approve team-level workflows
- monitor department usage
- request templates
- approve low-risk department actions

### 8.9 AI Employee Owner

Every AI employee must have at least one owner.

Can:

- configure AI employee purpose
- approve tool access requests
- review outputs and incidents
- manage assigned knowledge sources
- pause or retire the AI employee
- respond to governance alerts

### 8.10 Read-Only Auditor

Can:

- view audit reports
- export evidence if permitted
- inspect configuration history
- view policy decisions

Cannot modify operational settings.

---

## 9. Policy Inheritance

Policies should cascade from higher scopes to lower scopes.

```text
Enterprise Account Policy
→ Organization Policy
→ Workspace Policy
→ Department Policy
→ Team Policy
→ Asset / AI Employee / Workflow Policy
```

### 9.1 Policy Conflict Resolution

When policies conflict:

1. explicit deny overrides allow
2. higher-scope enforced policy overrides lower-scope rule
3. more restrictive data policy wins
4. more restrictive region policy wins
5. compliance-required policy wins over convenience
6. emergency containment overrides normal workflow
7. exceptions must be explicit, approved, scoped, and expiring

### 9.2 Policy Exception Requirements

Every exception must include:

- requesting user
- approving user
- scope
- affected policy
- reason
- risk level
- expiration date
- compensating control
- audit log entry

---

## 10. Account-Level Governance Domains

### 10.1 Security Governance

Controls:

- authentication requirements
- session policies
- MFA requirements
- role assignment rules
- API token policies
- integration approval rules
- IP restrictions
- admin elevation rules
- emergency access rules

### 10.2 AI Governance

Controls:

- AI employee creation rules
- model provider restrictions
- tool-use restrictions
- memory policies
- prompt governance
- human review requirements
- high-risk action approval
- autonomous workflow limits
- AI safety escalation

### 10.3 Data Governance

Controls:

- data classification
- knowledge source access
- retention rules
- deletion policies
- export restrictions
- cross-workspace sharing
- sensitive data handling
- data residency constraints

### 10.4 Marketplace Governance

Controls:

- public marketplace access
- private catalog rules
- install approvals
- vendor allowlists
- asset allowlists
- sponsored listing restrictions
- template certification requirements
- internal template publishing rules

### 10.5 Billing Governance

Controls:

- budgets
- cost centers
- approval thresholds
- usage limits
- plan upgrade approval
- marketplace purchase controls
- creator payout visibility
- finance exports

### 10.6 Procurement Governance

Controls:

- vendor approval
- purchase order requirements
- legal review thresholds
- security review thresholds
- renewal approval
- contract evidence
- procurement request lifecycle

### 10.7 Workflow Governance

Controls:

- workflow creation rules
- automation risk tiers
- approval gates
- rollback requirements
- tool execution permissions
- customer-facing automation restrictions

---

## 11. Workspace Governance

Workspaces must be treated as operational boundaries.

Workspace settings should include:

- default region
- data classification
- allowed AI employee types
- allowed model providers
- allowed integrations
- allowed marketplace catalogs
- workflow risk limits
- budget limits
- owner requirements
- audit retention settings

### 11.1 Workspace Creation Requirements

Workspace creation must require:

- name
- purpose
- owner
- data classification
- region
- policy set
- environment type
- default budget profile if billing is enabled

### 11.2 Workspace Locking

A workspace may be locked when:

- contract ends
- security incident occurs
- legal hold applies
- data residency violation is detected
- unpaid billing threshold is exceeded
- workspace owner is missing
- policy violation is unresolved

Locking should preserve evidence and prevent unsafe mutations.

---

## 12. AI Employee Governance

Every AI employee must have:

- human owner
- business purpose
- scope
- workspace
- department if applicable
- allowed tools
- allowed knowledge sources
- memory policy
- model profile
- cost policy
- risk tier
- review requirement
- audit trail

### 12.1 AI Employee Creation Gate

Creation should be blocked or routed to approval if:

- owner missing
- purpose unclear
- requested tools are high-risk
- requested data is restricted
- cost policy missing
- model provider not allowed
- region incompatible
- department policy denies creation
- user lacks role

### 12.2 AI Employee Ownership Transfer

Ownership transfer must be logged and may require approval when:

- AI employee has high-risk tools
- AI employee handles restricted data
- AI employee runs customer-facing workflows
- AI employee has autonomous execution rights
- AI employee owns marketplace-installed capabilities

---

## 13. Marketplace Governance Integration

Enterprise account governance must control marketplace behavior.

### 13.1 Marketplace Install Controls

Install decisions must consider:

- user role
- workspace policy
- department policy
- plan compatibility
- entitlement state
- vendor approval
- asset certification
- data region compatibility
- cost center approval
- procurement approval
- security approval
- private catalog visibility

### 13.2 Private Catalog Governance

Private catalogs must inherit account governance.

Enterprise admins should control:

- visible assets
- installable assets
- allowed vendors
- allowed creators
- allowed integrations
- department-specific catalog rules
- region-scoped catalog rules
- procurement-approved asset lists

### 13.3 Internal Template Governance

Internal templates must have:

- owner
- reviewer
- version
- risk tier
- department scope
- publishing approval
- private catalog visibility
- usage monitoring
- deprecation path

---

## 14. Delegated Administration

Delegated administration is required for enterprise scale.

Ariyo should support delegation by:

- organization
- workspace
- department
- region
- business function
- asset type
- policy domain

### 14.1 Delegation Rules

Delegation must be:

- scoped
- time-bound where needed
- auditable
- revocable
- policy-limited
- visible to central admins

### 14.2 Delegation Risk Examples

High-risk delegation includes:

- billing authority
- security policy changes
- marketplace vendor approval
- high-risk AI employee approval
- integration approval
- cross-region data movement
- external sharing

High-risk delegation should require enterprise-level approval.

---

## 15. Ownership Requirements

Ariyo must prevent orphaned assets.

The following must always have an owner:

- enterprise account
- organization
- workspace
- department
- AI employee
- workflow
- marketplace install
- internal template
- knowledge source
- integration
- cost center
- policy set
- private catalog

### 15.1 Orphan Detection

Ariyo must detect when ownership becomes invalid due to:

- user deactivation
- directory sync removal
- role removal
- department closure
- workspace archive
- account restructuring

### 15.2 Orphan Handling

When an asset becomes orphaned:

1. notify admins
2. assign temporary system owner status
3. restrict high-risk changes
4. require reassignment
5. escalate if unresolved
6. log the event

---

## 16. Approval Workflows

Enterprise governance must support approval workflows for sensitive actions.

Examples:

- create Smart AI employee
- install high-risk marketplace asset
- approve new vendor
- grant restricted data access
- exceed budget threshold
- enable autonomous workflow
- export sensitive audit package
- change data residency setting
- approve policy exception

### 16.1 Approval Decision Model

```ts
interface GovernanceApprovalRequest {
  id: string;
  enterpriseAccountId: string;
  requestedBy: string;
  actionType: string;
  targetType: string;
  targetId: string;
  scopeType: string;
  scopeId: string;
  riskTier: 'low' | 'medium' | 'high' | 'critical';
  requiredApproverRoles: string[];
  status: 'pending' | 'approved' | 'denied' | 'expired' | 'cancelled';
  reason: string;
  expiresAt?: string;
  createdAt: string;
  decidedAt?: string;
}
```

### 16.2 Approval UX Requirements

Approval screens must show:

- requested action
- requester
- affected scope
- risk reason
- policy rule triggered
- data involved
- cost impact
- vendor impact if applicable
- region impact if applicable
- recommended decision
- approve/deny/comment actions

---

## 17. Audit and Evidence

Every governance action must produce audit evidence.

Audit events must include:

- actor
- target
- scope
- action
- previous state
- new state
- policy decision
- reason
- timestamp
- request id
- IP/device metadata when appropriate
- approval chain when applicable

### 17.1 Audit Export Requirements

Enterprise admins should export:

- user access report
- role assignment report
- policy changes report
- AI employee ownership report
- marketplace install governance report
- approval history
- policy exception report
- cross-workspace access report
- data residency governance report

---

## 18. Plan-Aware Governance

### 18.1 Basic

Basic governance should support:

- simple owner/admin roles
- single organization
- limited workspaces
- basic audit log
- basic marketplace install controls
- simple AI employee ownership
- basic billing owner

Basic should avoid overwhelming users.

### 18.2 Pro

Pro governance should support:

- multiple workspaces
- department ownership
- custom roles with limits
- approval workflows
- team-based permissions
- workflow governance
- marketplace private catalog basics
- stronger budget controls
- expanded audit exports

### 18.3 Smart

Smart governance should support:

- enterprise account hierarchy
- organization/subsidiary model
- delegated administration
- advanced policy inheritance
- custom role builder
- risk-based approval routing
- private catalog governance
- enterprise procurement integration
- full audit/evidence center integration
- AI employee runtime governance
- advanced cost and data policies
- multi-region governance
- executive dashboards

Smart must be powerful, but always bounded by safety and audit.

---

## 19. Frontend Requirements

### 19.1 Enterprise Admin Console

Must include:

- account overview
- organization tree
- workspace list
- department list
- user directory
- role assignments
- policy sets
- approval queue
- audit log
- marketplace governance
- AI employee governance
- budget governance
- risk dashboard

### 19.2 Organization Tree UX

The organization tree must show:

- hierarchy
- owners
- status
- policy inheritance
- workspace counts
- AI employee counts
- pending approvals
- risk indicators

### 19.3 Policy Builder UX

Must support:

- policy templates
- domain-specific rules
- inheritance preview
- conflict detection
- exception configuration
- dry-run evaluation
- version history

### 19.4 Role Assignment UX

Must show:

- role permissions
- scope
- expiration
- approval requirement
- risk warning
- audit impact

### 19.5 Audit UX

Audit screens must support:

- filtering
- timeline view
- actor view
- scope view
- export
- evidence linking
- policy decision explanation

---

## 20. Backend Requirements

Backend must provide:

- account hierarchy service
- authorization service
- policy evaluation service
- role assignment service
- approval workflow service
- audit logging service
- ownership registry
- workspace isolation service
- governance reporting service
- marketplace governance hooks
- AI employee governance hooks
- billing/procurement hooks

### 20.1 Policy Evaluation

All sensitive backend actions must call policy evaluation before execution.

Policy evaluation must return:

- decision
- matched rules
- required approvals
- explanation
- risk tier
- audit metadata

### 20.2 Authorization Caching

Authorization caching must be safe.

Cache invalidation is required when:

- role changes
- policy changes
- workspace lock changes
- user deactivation
- approval status changes
- emergency containment begins

### 20.3 Tenant Isolation

Tenant isolation must be enforced at:

- database queries
- API authorization
- background jobs
- search indexes
- analytics pipelines
- audit exports
- AI context retrieval
- marketplace installation checks

---

## 21. API Contract

### 21.1 Create Organization

`POST /api/v1/enterprise/accounts/{accountId}/organizations`

Request:

```json
{
  "name": "Europe Business Unit",
  "type": "region",
  "parentOrganizationId": "org_parent_123",
  "ownerUserIds": ["user_123"],
  "defaultPolicySetId": "policy_set_456"
}
```

Response:

```json
{
  "organizationId": "org_789",
  "status": "active",
  "createdAt": "2026-06-19T10:00:00Z"
}
```

### 21.2 Create Workspace

`POST /api/v1/organizations/{organizationId}/workspaces`

Request:

```json
{
  "name": "Finance Operations",
  "purpose": "AI employees and workflows for finance operations",
  "environment": "production",
  "dataClassification": "confidential",
  "region": "eu-central",
  "ownerUserIds": ["user_finance_owner"],
  "policySetIds": ["policy_finance"]
}
```

Response:

```json
{
  "workspaceId": "workspace_finance",
  "status": "active",
  "policyDecision": "allowed"
}
```

### 21.3 Evaluate Governance Policy

`POST /api/v1/governance/evaluate`

Request:

```json
{
  "actorId": "user_123",
  "action": "marketplace.asset.install",
  "targetType": "marketplace_asset",
  "targetId": "asset_456",
  "scopeType": "workspace",
  "scopeId": "workspace_finance",
  "metadata": {
    "riskTier": "high",
    "estimatedMonthlyCost": 1200,
    "dataClassification": "confidential"
  }
}
```

Response:

```json
{
  "decision": "require_approval",
  "riskTier": "high",
  "matchedRules": ["marketplace_high_risk_install_requires_security_and_procurement"],
  "requiredApproverRoles": ["security_admin", "procurement_admin"],
  "explanation": "This marketplace asset requests confidential data access and exceeds the workspace approval threshold."
}
```

### 21.4 Assign Role

`POST /api/v1/governance/roles/assignments`

Request:

```json
{
  "userId": "user_456",
  "roleId": "workspace_owner",
  "scopeType": "workspace",
  "scopeId": "workspace_sales",
  "expiresAt": null
}
```

Response:

```json
{
  "assignmentId": "role_assignment_123",
  "status": "active",
  "auditEventId": "audit_789"
}
```

### 21.5 List Audit Events

`GET /api/v1/enterprise/accounts/{accountId}/audit-events`

Query parameters:

- `actorId`
- `action`
- `scopeType`
- `scopeId`
- `from`
- `to`
- `policyDecision`
- `riskTier`

Response:

```json
{
  "events": [
    {
      "id": "audit_123",
      "actorId": "user_123",
      "action": "governance.role.assigned",
      "targetType": "user",
      "targetId": "user_456",
      "scopeType": "workspace",
      "scopeId": "workspace_sales",
      "policyDecision": "allowed",
      "occurredAt": "2026-06-19T10:15:00Z"
    }
  ]
}
```

---

## 22. Webhooks

Ariyo should emit webhooks for:

- `enterprise.organization.created`
- `enterprise.workspace.created`
- `enterprise.workspace.locked`
- `enterprise.role.assigned`
- `enterprise.role.revoked`
- `enterprise.policy.created`
- `enterprise.policy.updated`
- `enterprise.policy.exception.created`
- `enterprise.approval.requested`
- `enterprise.approval.approved`
- `enterprise.approval.denied`
- `enterprise.asset.orphaned`
- `enterprise.audit.export.created`

Webhook payloads must include account scope and audit event ID.

---

## 23. Observability Events

Track:

- `governance_policy_evaluated`
- `governance_action_blocked`
- `governance_approval_requested`
- `governance_approval_completed`
- `role_assignment_created`
- `role_assignment_revoked`
- `policy_exception_created`
- `workspace_created`
- `workspace_locked`
- `ai_employee_owner_missing`
- `marketplace_install_governance_blocked`
- `audit_export_generated`

Each event must include:

- account ID
- scope
- actor
- action
- decision
- risk tier
- latency
- matched rule count

---

## 24. KPIs

### 24.1 Governance Coverage Rate

Percentage of enterprise assets with valid ownership and policy coverage.

### 24.2 Orphaned Asset Rate

Percentage of assets without valid human ownership.

### 24.3 Policy Decision Latency

Average time to evaluate governance policy.

### 24.4 Approval Completion Time

Average time from approval request to decision.

### 24.5 High-Risk Action Approval Rate

Percentage of high-risk actions approved, denied, or expired.

### 24.6 Policy Exception Rate

Percentage of governance decisions bypassed via approved exceptions.

### 24.7 Role Drift Rate

Percentage of users with stale, unused, or excessive roles.

### 24.8 Workspace Governance Health

Composite score for workspace ownership, policy coverage, audit freshness, and risk status.

### 24.9 AI Employee Governance Coverage

Percentage of AI employees with owner, policy, cost limit, memory policy, and tool boundary.

### 24.10 Marketplace Governance Block Rate

Percentage of marketplace actions blocked or routed to approval by governance policy.

---

## 25. AI Governance Assistant

Ariyo may provide an AI assistant to help admins manage governance.

It may:

- summarize policy conflicts
- explain denied actions
- recommend safer role assignments
- identify orphaned assets
- draft policy changes
- summarize audit logs
- detect risky permission drift
- recommend approval routing

It must not:

- silently grant roles
- approve high-risk actions without human permission
- override security policy
- hide audit events
- create compliance claims without evidence
- recommend unsafe exceptions

---

## 26. Security and Privacy Requirements

Ariyo must:

- enforce tenant isolation
- protect admin actions with strong authorization
- log privileged actions
- limit audit export access
- protect sensitive metadata
- support least privilege
- require elevated confirmation for critical changes
- prevent confused-deputy privilege escalation
- prevent cross-workspace data leaks
- avoid exposing hidden organization structure to unauthorized users

Sensitive governance data must be treated as confidential.

---

## 27. Compliance Requirements

Enterprise governance must support:

- audit evidence
- role history
- access reviews
- policy history
- exception history
- approval trails
- ownership history
- data residency controls
- vendor approval integration
- retention and deletion controls
- legal hold support

Compliance exports must be reproducible and timestamped.

---

## 28. Failure Modes

Ariyo must handle:

- admin removed accidentally
- enterprise owner unavailable
- workspace owner leaves company
- policy conflict blocks business-critical work
- directory sync removes active users
- billing admin missing
- region policy misconfigured
- approval workflow stuck
- audit export fails
- role assignment loops
- recursive organization hierarchy errors

Recovery must be safe and audited.

---

## 29. Forbidden Patterns

Ariyo must never:

- allow hidden superadmin actions without audit
- allow AI employees without human owners
- allow workspace creation without owner and policy
- allow marketplace installs to bypass account governance
- allow role assignments without scope
- allow policy exceptions without expiration for high-risk rules
- allow deleted users to retain ownership
- allow cross-tenant access through analytics or search
- allow billing authority to be casually delegated
- allow security policy overrides without evidence
- treat enterprise governance as a frontend-only setting
- use vague roles like `admin` without clear permission boundaries
- allow private catalog visibility to bypass procurement rules
- allow Smart-level autonomous capabilities without governance controls

---

## 30. Implementation Checklist

Before enterprise account governance is considered ready:

- [ ] Account hierarchy exists
- [ ] Organization model exists
- [ ] Workspace model exists
- [ ] Department/team model exists
- [ ] Role model exists
- [ ] Policy model exists
- [ ] Policy inheritance works
- [ ] Policy evaluation service exists
- [ ] Approval workflow exists
- [ ] Audit logging exists
- [ ] Ownership registry exists
- [ ] Orphan detection exists
- [ ] Marketplace governance hooks exist
- [ ] AI employee governance hooks exist
- [ ] Billing/procurement hooks exist
- [ ] Admin console exists
- [ ] Audit export exists
- [ ] Security tests exist
- [ ] Tenant isolation tests exist
- [ ] Role drift detection exists
- [ ] Emergency recovery process exists

---

## 31. Golden Rule

Ariyo Enterprise Account Governance must make enterprise-scale AI work possible without making enterprise-scale AI risk invisible.

