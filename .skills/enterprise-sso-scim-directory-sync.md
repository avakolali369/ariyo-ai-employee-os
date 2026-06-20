# Ariyo Enterprise SSO, SCIM & Directory Sync Skill

## Core Contract

Ariyo Enterprise SSO, SCIM & Directory Sync is not a login integration checkbox.

It is the governed identity, directory, provisioning, deprovisioning, group mapping, role mapping, workspace assignment, access review, and audit system that allows enterprise customers to connect Ariyo safely to their identity provider and directory source of truth.

Ariyo must allow enterprise users to access Ariyo through their organization's identity system.

Ariyo must never allow identity convenience to weaken access control, permission boundaries, workspace governance, auditability, AI employee access, marketplace controls, billing authority, or data protection.

---

## 1. Purpose

This skill defines how Ariyo should design, build, test, and operate enterprise identity governance through:

- Single Sign-On (SSO)
- SAML-based authentication
- OIDC-based authentication
- Just-in-Time (JIT) provisioning
- SCIM provisioning
- directory group sync
- group-to-role mapping
- group-to-workspace mapping
- user lifecycle automation
- deprovisioning
- access review
- delegated admin controls
- identity audit trail
- enterprise policy enforcement

This skill exists because Ariyo is an AI Employee Operating System. Identity is not merely about who can log in. Identity determines who can create AI employees, install marketplace assets, approve automation, grant tool permissions, configure model providers, access customer data, view billing, manage enterprise governance, and operate AI workflows.

---

## 2. Strategic Principle

Enterprise identity must be:

- centralized
- auditable
- reversible
- least-privilege by default
- policy-governed
- group-aware
- workspace-aware
- region-aware where required
- entitlement-aware
- marketplace-aware
- AI-permission-aware
- compatible with enterprise security reviews

Ariyo should support enterprise flexibility, but identity source of truth must remain clear.

If a customer enables directory sync, Ariyo must know which identity source controls which users, groups, roles, and workspaces.

---

## 3. Related Skills

This skill depends on and reinforces:

- `enterprise-account-governance.md`
- `admin-permissions.md`
- `ai-agent-permissions-runtime.md`
- `enterprise-readiness.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-enterprise-audit-reports.md`
- `marketplace-data-residency-region-controls.md`
- `human-review-governance.md`
- `observability-analytics-events.md`

---

## 4. Identity Objects

### 4.1 EnterpriseIdentityProvider

Represents an external identity provider connected to Ariyo.

Required fields:

- `id`
- `organization_id`
- `provider_type`
- `display_name`
- `protocol`
- `status`
- `domain_verification_status`
- `sso_enforced`
- `jit_enabled`
- `scim_enabled`
- `directory_sync_enabled`
- `default_role_id`
- `default_workspace_policy`
- `allowed_domains`
- `created_by`
- `created_at`
- `updated_at`
- `last_successful_login_at`
- `last_successful_sync_at`

Provider types may include:

- Okta
- Microsoft Entra ID
- Google Workspace
- OneLogin
- JumpCloud
- Ping Identity
- custom SAML
- custom OIDC

### 4.2 EnterpriseDirectoryUser

Represents a user synchronized from an external directory.

Required fields:

- `id`
- `organization_id`
- `external_user_id`
- `email`
- `display_name`
- `given_name`
- `family_name`
- `status`
- `identity_provider_id`
- `source`
- `role_assignments`
- `workspace_assignments`
- `group_memberships`
- `last_synced_at`
- `last_login_at`
- `deprovisioned_at`
- `deprovision_reason`

User statuses:

- `invited`
- `active`
- `suspended`
- `directory_disabled`
- `pending_deprovision`
- `deprovisioned`
- `orphaned`
- `conflict`

### 4.3 EnterpriseDirectoryGroup

Represents a synchronized group.

Required fields:

- `id`
- `organization_id`
- `external_group_id`
- `name`
- `description`
- `identity_provider_id`
- `member_count`
- `mapped_roles`
- `mapped_workspaces`
- `mapped_policies`
- `mapped_marketplace_catalogs`
- `mapped_ai_permissions`
- `status`
- `last_synced_at`

### 4.4 GroupMappingRule

Defines how external groups map to Ariyo access.

Required fields:

- `id`
- `organization_id`
- `identity_provider_id`
- `external_group_id`
- `target_type`
- `target_id`
- `priority`
- `condition`
- `conflict_resolution_strategy`
- `status`
- `created_by`
- `approved_by`
- `last_evaluated_at`

Target types:

- role
- workspace
- department
- team
- permission bundle
- marketplace private catalog
- AI employee policy set
- billing permission set
- procurement approval group
- security review group

### 4.5 IdentityAccessDecision

Represents the final computed access decision.

Required fields:

- `user_id`
- `organization_id`
- `identity_provider_id`
- `source_groups`
- `effective_roles`
- `effective_workspaces`
- `effective_permissions`
- `effective_restrictions`
- `conflicts`
- `decision_reason`
- `decision_version`
- `computed_at`

---

## 5. SSO Requirements

### 5.1 SSO Setup

Enterprise admins must be able to configure SSO with:

- provider name
- protocol type
- entity ID / issuer
- redirect / ACS URLs
- certificate metadata
- domain restrictions
- login enforcement policy
- fallback admin policy
- test mode
- staged rollout
- break-glass admin access

Ariyo must provide a safe test flow before enforcing SSO.

### 5.2 SAML Requirements

SAML configuration must support:

- SP metadata export
- IdP metadata upload
- certificate rotation
- signed assertions
- encrypted assertions where supported
- NameID mapping
- email mapping
- group attribute mapping
- role attribute mapping
- session duration policy
- clock skew tolerance
- relay state validation

Ariyo must reject unsafe SAML configurations that create account takeover, assertion replay, domain spoofing, or unsigned assertion risk.

### 5.3 OIDC Requirements

OIDC configuration must support:

- issuer URL
- client ID
- client secret
- authorization endpoint
- token endpoint
- JWKS endpoint
- redirect URI
- scopes
- claims mapping
- group claim mapping
- email verification enforcement
- token audience validation
- nonce validation
- PKCE where applicable

Ariyo must validate issuer, audience, token signature, expiry, nonce, and verified identity claims before creating sessions.

### 5.4 SSO Enforcement

SSO enforcement should be configurable at:

- organization level
- verified domain level
- workspace level for advanced enterprise plans
- role level for high-risk roles

When SSO is enforced:

- password login should be disabled for affected users
- new invited users must use SSO
- existing sessions may be preserved or revoked based on admin policy
- API/service accounts must follow separate policy
- break-glass admins must be explicitly configured and audited

---

## 6. Domain Verification

Enterprise SSO must require domain verification before enforcement.

Domain verification methods:

- DNS TXT record
- admin email verification
- existing verified workspace domain
- enterprise contract verification by Ariyo operator

Domain verification must prevent:

- taking over unrelated domains
- enforcing SSO on external consultants accidentally
- spoofing organization ownership
- locking out legitimate admins

Ariyo must warn admins when enforcing SSO on domains with existing unmanaged users.

---

## 7. Just-in-Time Provisioning

JIT provisioning creates Ariyo users on first successful enterprise login.

JIT must support:

- default role assignment
- default workspace assignment
- group-based role assignment
- group-based workspace assignment
- attribute-based restrictions
- plan-based limits
- domain restrictions
- invite-only mode
- admin approval mode

JIT must not grant high-risk permissions by default.

High-risk permissions include:

- billing admin
- owner
- security admin
- marketplace procurement approver
- AI employee permission approver
- model provider admin
- data export admin
- integration admin
- private catalog admin

---

## 8. SCIM Provisioning

### 8.1 SCIM Purpose

SCIM is the preferred enterprise method for automated user and group lifecycle management.

Ariyo SCIM must support:

- create user
- update user
- deactivate user
- reactivate user
- list users
- filter users
- create group
- update group
- delete/deactivate group
- group membership updates
- pagination
- idempotency
- rate limiting
- audit logging

### 8.2 SCIM User Lifecycle

SCIM user actions must map to Ariyo lifecycle states:

| SCIM Event | Ariyo Behavior |
|---|---|
| Create user | Create pending or active enterprise user depending on policy |
| Update user | Update profile attributes, not manually overridden security settings unless allowed |
| Deactivate user | Suspend or deprovision user according to policy |
| Reactivate user | Restore access only after policy re-evaluation |
| Delete user | Deprovision or mark as directory removed; do not delete audit history |

### 8.3 SCIM Deprovisioning

Deprovisioning must immediately:

- revoke active sessions when configured
- block new login
- disable AI Employee access owned by the user where required
- reassign ownership of critical assets
- revoke marketplace installation approval rights
- revoke API keys where applicable
- disable personal integrations if policy requires
- preserve audit logs
- trigger ownership transfer workflows

Deprovisioning must not silently break production AI employees, scheduled workflows, customer operations, billing approvals, or compliance evidence.

### 8.4 SCIM Group Sync

SCIM group sync must support:

- group creation
- group update
- group deactivation
- group membership changes
- nested group handling policy
- group rename handling
- group mapping preservation
- stale group detection

Ariyo must clearly show whether a group is:

- synced
- manually created
- mapped
- unmapped
- orphaned
- deleted from directory
- blocked by policy

---

## 9. Directory Group Mapping

Group mapping is central to enterprise governance.

Ariyo should allow admins to map directory groups to:

- organization roles
- workspace roles
- departments
- teams
- AI employee access scopes
- marketplace private catalogs
- procurement approver groups
- security reviewer groups
- finance approver groups
- integration admin groups
- support/admin console access
- data export permissions

Mapping must be explicit, reviewable, and testable.

Ariyo must provide a mapping simulator before activation.

---

## 10. Role Mapping Rules

Role mapping must follow least privilege.

Default rules:

- unmapped users receive no elevated permissions
- high-risk roles require explicit approval
- conflicting mappings resolve to the safer role unless an admin selects another approved strategy
- role escalation must be logged
- role mapping changes must produce audit events

Conflict strategies:

- safest role wins
- highest role wins
- explicit priority order
- manual review required
- deny access on conflict

For Ariyo, safest role wins should be the default.

---

## 11. Workspace Mapping Rules

Workspace mapping must support:

- group-to-workspace assignment
- group-to-department assignment
- default workspace assignment
- no-default workspace policy
- workspace access expiration
- workspace-specific roles
- workspace policy inheritance

A user may belong to multiple workspaces if directory groups allow it.

Ariyo must prevent workspace access from granting unauthorized AI employee, marketplace, billing, or admin privileges.

---

## 12. AI Employee Permission Mapping

Enterprise identity must govern AI Employee permissions.

Directory groups may map to:

- view AI employees
- run AI employees
- configure AI employees
- create AI employees
- approve AI employee tools
- approve high-risk automation
- view AI traces
- edit prompts
- edit memory/context
- manage knowledge sources
- assign AI employees to departments

High-risk AI permissions must not be granted through broad groups without approval.

Examples of high-risk AI permissions:

- external email sending
- CRM updates
- billing actions
- procurement actions
- customer data export
- production workflow execution
- human-review bypass
- model provider switching
- memory deletion
- cross-workspace data access

---

## 13. Marketplace Access Mapping

Directory groups may control Marketplace behavior:

- browse public marketplace
- install free templates
- request paid templates
- approve paid templates
- approve private catalog assets
- publish internal templates
- approve internal templates
- manage private catalogs
- manage creator/vendor approvals
- view marketplace billing
- view marketplace audit reports

Ariyo must prevent group mapping mistakes from allowing unauthorized purchases, installations, or publication.

---

## 14. Billing and Procurement Role Mapping

Enterprise identity must protect billing authority.

Billing and procurement roles should require explicit mapping and approval:

- billing viewer
- billing admin
- procurement requester
- procurement approver
- PO manager
- vendor approver
- marketplace buyer
- finance admin
- payout reviewer

These roles should never be assigned as default JIT roles.

---

## 15. Break-Glass Access

Ariyo must support break-glass admin accounts for enterprise safety.

Break-glass rules:

- must be explicitly configured
- must be limited in number
- must bypass SSO only when enabled by policy
- must require strong MFA where available
- must trigger high-severity audit events
- must be reviewed regularly
- must never be used for routine administration

Break-glass access exists to prevent enterprise lockout, not to bypass governance.

---

## 16. Deprovisioning Safety

When a user is removed, Ariyo must check whether they own critical resources.

Critical resources:

- AI employees
- workflow automations
- marketplace installations
- private catalog templates
- billing approvals
- procurement approvals
- API tokens
- integration credentials
- scheduled reports
- knowledge sources
- governance policies
- audit evidence packages

Ariyo must provide ownership transfer workflows before or during deprovisioning.

If immediate deprovisioning is required, Ariyo must suspend user access while preserving operational continuity through transfer queues.

---

## 17. Access Review

Enterprise admins must be able to review identity-driven access.

Access review views:

- users by role
- users by workspace
- users by AI employee permission
- users by marketplace permission
- users by billing/procurement permission
- users by integration access
- users by break-glass access
- unmanaged users
- orphaned users
- inactive users
- users not seen in directory
- users with manually overridden access

Access reviews should support:

- certification campaigns
- reviewer assignment
- approve/revoke actions
- evidence export
- due dates
- reminders
- audit trail

---

## 18. Unmanaged and Orphaned Users

Ariyo must detect users that are not fully governed by the directory.

User categories:

- managed by SCIM
- JIT-created
- manually invited
- external collaborator
- service account
- orphaned user
- deactivated in IdP but active in Ariyo
- active in IdP but missing group mapping

Ariyo must surface unmanaged risk to admins.

Enterprise customers should be able to enforce policies:

- block unmanaged users
- require admin approval for unmanaged users
- allow external collaborators in specific workspaces
- automatically suspend orphaned users
- require access review for exceptions

---

## 19. External Collaborators

Enterprises may need outside users such as consultants, agencies, implementation partners, auditors, or vendors.

External collaborator rules:

- must be explicitly marked as external
- should not inherit internal domain SSO policy unless configured
- should have expiration dates
- should have limited workspace access
- should not receive broad AI or marketplace permissions
- should be included in access reviews
- should have visible badges in admin UI

Ariyo must prevent external collaborators from being mistaken for internal employees.

---

## 20. Service Accounts

Service accounts require separate governance.

Service account rules:

- must not be human users
- must have owner
- must have purpose
- must have scoped permissions
- must have credential rotation policy
- must have expiration or review date
- must be excluded from SSO but included in audit
- must not be created through JIT
- must not be controlled through ordinary user SCIM flows

---

## 21. Session Management

Enterprise identity policies should control sessions:

- session duration
- idle timeout
- forced reauthentication
- SSO-only login
- session revocation on deprovisioning
- session revocation on role downgrade
- session revocation on suspicious access
- admin session hardening

High-risk actions may require reauthentication:

- changing SSO settings
- disabling SCIM
- changing owner role
- exporting data
- approving marketplace purchase
- approving high-risk AI tool permission
- changing model provider routing
- editing compliance policy

---

## 22. Identity Security Rules

Ariyo must prevent:

- identity spoofing
- unverified email provisioning
- domain takeover
- unsigned assertion acceptance
- replay attacks
- invalid audience tokens
- stale group privilege retention
- silent admin escalation
- orphaned user access
- deprovisioning gaps
- IdP misconfiguration lockout
- group mapping privilege explosion
- external collaborator over-permissioning

---

## 23. Basic / Pro / Smart Rules

### Basic

Basic should support simple team identity features:

- email/password or simple SSO where available
- manual invites
- basic roles
- limited workspace structure
- no advanced SCIM requirement
- limited marketplace permissions
- safe defaults

Basic must avoid complex identity configuration that can lock teams out.

### Pro

Pro should support operational identity governance:

- SSO configuration
- group-based roles
- workspace mapping
- JIT provisioning
- basic access review
- procurement/billing role separation
- marketplace install approval mapping

Pro should help teams scale securely without requiring full enterprise IAM complexity.

### Smart

Smart should support full enterprise identity governance:

- SAML/OIDC SSO
- SCIM provisioning
- directory group sync
- advanced group mapping
- delegated admin
- access review campaigns
- break-glass governance
- service account governance
- identity evidence exports
- marketplace/AI permission mapping
- compliance-ready audit

Smart must provide strong safeguards for high-risk automation and enterprise adoption.

---

## 24. Admin Console Requirements

The admin UI must support:

- SSO setup wizard
- IdP metadata configuration
- domain verification
- test login flow
- SSO enforcement preview
- SCIM token management
- directory sync status
- group mapping editor
- mapping simulator
- conflict dashboard
- unmanaged user dashboard
- deprovisioning queue
- ownership transfer queue
- access review dashboard
- break-glass account management
- audit log viewer

UI must explain identity impact clearly before enforcement.

---

## 25. Mapping Simulator

Before enabling a mapping, Ariyo must show:

- affected users
- roles gained
- roles lost
- workspaces gained
- workspaces lost
- high-risk permissions gained
- marketplace permissions gained
- AI employee permissions gained
- billing/procurement permissions gained
- conflicts
- users who would lose access
- users who would become admins

Ariyo must require confirmation for high-risk mapping changes.

---

## 26. API Contract

### GET `/api/v1/enterprise/identity-providers`

Returns configured identity providers.

### POST `/api/v1/enterprise/identity-providers`

Creates an identity provider configuration.

Payload:

```json
{
  "provider_type": "okta",
  "protocol": "saml",
  "display_name": "Okta Production",
  "allowed_domains": ["example.com"],
  "jit_enabled": true,
  "sso_enforced": false
}
```

### POST `/api/v1/enterprise/identity-providers/{id}/test-login`

Starts a safe test login flow.

### POST `/api/v1/enterprise/identity-providers/{id}/enforce-sso`

Enforces SSO after validation.

Must require elevated admin permission.

### GET `/api/v1/enterprise/directory/users`

Lists directory-managed users.

### GET `/api/v1/enterprise/directory/groups`

Lists synchronized groups.

### POST `/api/v1/enterprise/directory/group-mappings`

Creates a group mapping.

### POST `/api/v1/enterprise/directory/group-mappings/simulate`

Simulates mapping impact.

### GET `/api/v1/enterprise/access-decisions/{user_id}`

Returns effective access decision.

### POST `/api/v1/enterprise/access-reviews`

Creates an access review campaign.

### POST `/api/v1/enterprise/deprovisioning/{user_id}/transfer-ownership`

Starts ownership transfer for a deprovisioned or soon-to-be deprovisioned user.

---

## 27. Webhooks

Ariyo should emit webhooks for:

- `identity_provider.created`
- `identity_provider.updated`
- `identity_provider.test_succeeded`
- `identity_provider.test_failed`
- `sso.enforced`
- `sso.disabled`
- `scim.user.created`
- `scim.user.updated`
- `scim.user.deactivated`
- `scim.group.created`
- `scim.group.updated`
- `scim.group.deleted`
- `directory.mapping.created`
- `directory.mapping.updated`
- `directory.mapping.conflict_detected`
- `access.decision.changed`
- `access.high_risk_permission_granted`
- `user.deprovisioned`
- `user.orphaned_detected`
- `break_glass.used`
- `access_review.created`
- `access_review.completed`

---

## 28. Observability Events

Track:

- `sso_login_attempted`
- `sso_login_succeeded`
- `sso_login_failed`
- `saml_assertion_rejected`
- `oidc_token_rejected`
- `jit_user_created`
- `scim_sync_started`
- `scim_sync_completed`
- `scim_sync_failed`
- `directory_group_synced`
- `group_mapping_simulated`
- `group_mapping_applied`
- `identity_conflict_detected`
- `user_access_changed`
- `user_deprovisioned`
- `ownership_transfer_required`
- `break_glass_login_detected`
- `access_review_launched`
- `access_review_certified`

Every identity event should include:

- organization ID
- actor ID
- target user or group ID
- provider ID
- source system
- before/after state where safe
- risk level
- request ID
- timestamp

---

## 29. Advanced KPIs

Identity KPIs:

- SSO adoption rate
- SCIM adoption rate
- unmanaged user count
- orphaned user count
- deprovisioning completion time
- stale access count
- high-risk role assignment count
- group mapping conflict rate
- failed SSO login rate
- SCIM sync failure rate
- access review completion rate
- break-glass usage count
- ownership transfer backlog
- external collaborator review coverage
- time to revoke access after IdP deactivation

---

## 30. Security and Privacy Requirements

Ariyo must:

- encrypt sensitive identity configuration
- protect SCIM tokens
- rotate certificates safely
- never expose secrets in logs
- minimize stored identity attributes
- preserve audit history after deprovisioning
- redact sensitive claims in UI where needed
- log admin identity changes
- require elevated permissions for identity configuration
- support customer evidence exports

---

## 31. Testing Requirements

Test scenarios:

- successful SAML login
- failed SAML login with invalid signature
- failed SAML login with wrong audience
- successful OIDC login
- failed OIDC login with invalid issuer
- JIT provisioning with default role
- JIT provisioning with group mapping
- SCIM user create/update/deactivate
- SCIM group membership update
- group mapping conflict
- workspace mapping conflict
- high-risk permission mapping requiring approval
- SSO enforcement preview
- SSO lockout prevention
- break-glass admin login
- deprovisioning ownership transfer
- orphaned user detection
- access review completion

---

## 32. AI Governance Assistant

Ariyo may provide an AI Identity Governance Assistant.

It may help:

- explain SSO setup
- detect risky mappings
- summarize access changes
- suggest least-privilege mappings
- identify orphaned users
- prepare access review summaries
- explain deprovisioning risks
- draft admin communications

It must not:

- change identity settings without approval
- grant admin roles automatically
- disable SSO automatically
- approve high-risk mappings without human review
- expose sensitive identity claims unnecessarily
- override enterprise policy

---

## 33. Forbidden Patterns

Never:

- enable SSO enforcement without verified domain and test success
- allow unsigned SAML assertions
- accept unverified OIDC identity claims
- grant owner/admin role through default JIT mapping
- keep users active after directory deactivation without explicit exception
- ignore orphaned users
- hide group mapping conflicts
- silently grant marketplace purchasing authority
- silently grant high-risk AI tool permissions
- delete audit logs during deprovisioning
- allow broad group mappings to bypass procurement/security review
- allow external collaborators to inherit internal employee permissions by accident
- allow break-glass accounts to operate without audit
- expose SCIM tokens or secrets

---

## 34. Golden Rule

Enterprise identity is the foundation of enterprise trust.

If Ariyo cannot prove who a user is, where they came from, which group granted their access, why they have each permission, when that access changed, who approved it, and how it can be revoked, Ariyo is not enterprise-ready.
