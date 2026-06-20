# Ariyo Admin & Permissions Skill

Version: 1.0.0
Product: Ariyo
Purpose:
Act as a Senior Authorization Architect, SaaS Governance Designer, Security Reviewer, and Product Access Control Guardian for Ariyo.
Audience:
Codex Agents, AI-assisted development tools, backend engineers, frontend engineers, product designers, AI orchestration engineers, and operations teams.
Priority:
Non-negotiable.
Dependencies:
- product-strategy.md
- domain-model.md
- api-contracts.md
- backend-architecture.md
- ai-employee-architecture.md
- ai-safety-evaluation.md
- workflow-automation.md
- human-review-governance.md
- integration-ecosystem.md
- monetization-billing.md
- frontend-design.md
- frontend-components.md
- frontend-copywriting.md
- coding-standards.md

If conflicts exist:
- product-strategy.md wins for product positioning and business intent.
- domain-model.md wins for canonical entities, lifecycle states, and ownership.
- backend-architecture.md wins for backend enforcement boundaries.
- api-contracts.md wins for API response/error contract shape.
- ai-employee-architecture.md wins for AI employee scope and lifecycle.
- ai-safety-evaluation.md wins for AI safety gates and risk classification.
- human-review-governance.md wins for approval, review, escalation, and override policy.
- integration-ecosystem.md wins for integration scopes and connection permissions.
- monetization-billing.md wins for billing entitlements and plan enforcement.
- admin-permissions.md wins for roles, permissions, access control behavior, organization boundary rules, and governance UX.

Admin and permission code that works but can leak data, allow unsafe actions, confuse access state, or rely on frontend-only enforcement is not production-ready.

---

# Core Contract

Ariyo permissions are not UI toggles.

Ariyo permissions are the governance layer that controls who can hire, configure, deploy, supervise, approve, publish, connect, sync, bill, invite, export, and audit AI employees inside an organization.

Every permission must be:

```text id="perm-001"
organization-scoped
role-aware
entitlement-aware
server-enforced
frontend-explained
auditable
least-privilege by default
safe during organization switching
safe during role changes
safe during billing changes
safe during AI employee execution
safe during integration access
```

Ariyo must never rely on hidden UI as the only access control mechanism.

The frontend may guide and explain.

The backend must enforce.

---

# Permission Philosophy

Ariyo is an AI Employee Operating System.

That means permissions must control both normal SaaS actions and AI-powered business actions.

Traditional SaaS permissions are not enough.

Ariyo must control:

```text id="perm-002"
who can create business capability
who can deploy AI employees
who can approve AI output
who can allow automatic actions
who can connect data sources
who can expose business knowledge to AI
who can connect external systems
who can publish workflows
who can change billing
who can invite or remove members
who can view audit logs
who can override safety gates
who can pause or disable AI employees
who can export sensitive data
who can manage organization-wide settings
```

Permission design must protect business trust, not only page access.

---

# Permission Quality Bar

Every Ariyo permission implementation must answer:

```text id="perm-003"
Who is trying to act?
Which organization are they acting inside?
Which workspace or scope applies?
Which resource is being accessed?
What role does the user have?
What explicit permission applies?
Which entitlement or plan limit applies?
Is the resource active, archived, deleted, paused, or restricted?
Is the action low-risk, medium-risk, or high-risk?
Does the action require human review?
Is there a billing or plan restriction?
Is there an integration scope restriction?
Is there an AI safety restriction?
Should this be denied, disabled, hidden, reviewed, or allowed?
How should the decision be logged?
What should the user see if denied?
```

If these questions are not answerable, the permission design is incomplete.

---

# Access Control Principle

Access control must be enforced on the backend.

Frontend checks are for user experience only.

Bad:

```tsx id="perm-004"
{user.role === "admin" ? <DeployButton /> : null}
```

as the only protection.

Good:

```text id="perm-005"
Frontend:
Shows deploy action only when permission data says allowed.
Explains disabled state when not allowed.

Backend:
Checks authenticated user, organization membership, role, permission, entitlement, resource ownership, and action risk before executing deployment.
```

Both layers are required.

---

# Canonical Permission Layers

Ariyo access decisions may depend on multiple layers.

```text id="perm-006"
Authentication:
Is the user signed in?

Organization membership:
Is the user a member of this organization?

Workspace access:
Can the user access this workspace or area?

Role:
What role does the user have?

Explicit permission:
Is this action allowed?

Resource ownership:
Does the resource belong to this organization/workspace?

Resource state:
Can this resource be acted on in its current state?

Entitlement:
Does the plan allow this capability?

Usage limit:
Is the organization within limits?

Risk policy:
Does this action require review or elevated permission?

Integration scope:
Does the connected provider allow this action?

AI safety state:
Is the AI employee allowed to act automatically?
```

Do not collapse these layers into one vague boolean.

---

# Canonical Roles

Ariyo should support a clear role model.

Default roles:

```text id="perm-007"
Owner
Admin
Manager
Reviewer
Member
Viewer
Billing Admin
Developer
```

Ariyo may later support custom roles.

Until custom roles exist, default roles must be stable, understandable, and product-safe.

---

# Owner Role

Owner is the highest organization authority.

Owner can usually:

```text id="perm-008"
manage organization settings
manage all members
assign admin roles
transfer ownership
manage billing
connect and disconnect integrations
manage all AI employees
hire AI employees
configure AI employees
deploy AI employees
pause AI employees
publish workflows
approve high-risk reviews
view audit logs
export organization data when allowed
manage security settings
```

Owner must be protected from accidental self-lockout.

Owner-only actions must be explicit and audited.

---

# Admin Role

Admin manages organization operations but may not own legal/billing authority unless granted.

Admin can usually:

```text id="perm-009"
invite members
manage non-owner members
manage AI employees
configure deployments
connect knowledge sources
manage workflows
connect approved integrations
approve reviews
view analytics
view audit logs when allowed
pause unsafe AI employees
manage organization configuration
```

Admin may not always:

```text id="perm-010"
transfer ownership
remove owner
change billing plan
delete organization
change payment method
view sensitive billing details
```

Billing authority must be explicit.

---

# Manager Role

Manager supervises AI employees and operational workflows.

Manager can usually:

```text id="perm-011"
view assigned AI employees
configure assigned AI employees when allowed
manage assigned workflows
review AI output
approve low/medium-risk reviews
view operational analytics
connect limited knowledge sources when allowed
pause assigned AI employees
view activity for assigned areas
```

Manager should not automatically receive billing, organization, or high-risk integration access.

---

# Reviewer Role

Reviewer exists to approve, edit, reject, and escalate AI output.

Reviewer can usually:

```text id="perm-012"
view review queue
approve assigned review items
edit and approve draft outputs
reject review items
request changes
escalate review items
view relevant context needed for review
view review history for assigned items
```

Reviewer should not automatically:

```text id="perm-013"
change AI employee configuration
change billing
connect integrations
publish workflows
change organization settings
view unrelated sensitive knowledge sources
```

Review authority must be scoped.

---

# Member Role

Member is a standard organization user.

Member can usually:

```text id="perm-014"
view allowed dashboards
view assigned AI employees
view assigned activity
use approved AI employees
submit tasks when allowed
view allowed knowledge sources metadata
participate in review if assigned
```

Member should not automatically perform high-risk configuration or deployment actions.

---

# Viewer Role

Viewer is read-only.

Viewer can usually:

```text id="perm-015"
view allowed pages
view dashboards
view activity summaries
view employee profiles
view workflow summaries
view reports
```

Viewer must not:

```text id="perm-016"
modify configuration
trigger deployments
approve reviews
connect sources
connect integrations
change billing
invite members
run destructive actions
publish workflows
```

Read-only must mean read-only.

---

# Billing Admin Role

Billing Admin manages billing without full product administration.

Billing Admin can usually:

```text id="perm-017"
view billing plan
view invoices
update billing details
change plan when allowed
view AI cost reports
manage payment method
view usage limits
receive billing alerts
```

Billing Admin should not automatically:

```text id="perm-018"
deploy AI employees
connect knowledge sources
approve AI output
manage workflows
change member roles outside billing
connect operational integrations
view sensitive customer content
```

Billing access is not operational access.

---

# Developer Role

Developer manages technical integrations and API-related configuration.

Developer can usually:

```text id="perm-019"
view API settings
manage webhooks when allowed
configure technical integrations
view integration logs
rotate integration credentials when allowed
view technical health
access developer documentation
```

Developer should not automatically:

```text id="perm-020"
change billing
approve AI outputs
view all business conversations
publish business workflows
manage member roles
transfer ownership
```

Developer access must be scoped and audited.

---

# Custom Role Future Rule

If Ariyo supports custom roles later, custom roles must still map to explicit permissions.

Custom roles must not become arbitrary hidden behavior.

Required custom role properties:

```text id="perm-021"
role name
role description
permission set
scope
created by
created at
updated by
updated at
audit history
system role vs custom role marker
protected permissions
```

Custom roles must be validated against safety rules.

Some permissions must remain protected or owner-only.

---

# Permission Naming Rule

Permissions must be named by action and object.

Good:

```text id="perm-022"
employee.hire
employee.configure
employee.deploy
employee.pause
employee.delete
knowledge_source.connect
knowledge_source.sync
knowledge_source.delete
workflow.create
workflow.publish
workflow.disable
review.approve
review.escalate
integration.connect
integration.disconnect
billing.manage
member.invite
member.remove
role.assign
audit_log.view
organization.manage
```

Bad:

```text id="perm-023"
canDoStuff
adminAccess
level3
isSuper
allowMagic
manageAll
permissionBit7
```

Permissions must be explicit and searchable.

---

# Permission Granularity Rule

Permissions must be granular enough to protect risk.

Do not use one broad permission for unrelated sensitive actions.

Bad:

```text id="perm-024"
manage_ai
```

Good:

```text id="perm-025"
employee.hire
employee.configure
employee.deploy
employee.pause
employee.delete
workflow.publish
review.approve
tool_call.approve
```

Granularity protects trust.

---

# Permission Grouping Rule

UI may group permissions for usability.

Backend must still store and enforce explicit permissions.

Example UI groups:

```text id="perm-026"
AI Employees
Knowledge Sources
Workflows
Human Review
Integrations
Members & Roles
Billing
Analytics
Audit & Security
Organization Settings
Developer Tools
```

Do not use UI grouping as backend authorization logic.

---

# Organization Scope Rule

Every permission decision must be organization-scoped.

Required context:

```text id="perm-027"
user_id
organization_id
membership_id
role_id
permission_set
resource_organization_id
action
resource_id when applicable
```

Never authorize a resource without confirming it belongs to the active organization.

Bad:

```python id="perm-028"
employee = Employee.objects.get(id=employee_id)
```

Good:

```python id="perm-029"
employee = Employee.objects.get(
    id=employee_id,
    organization_id=request.organization.id,
)
```

Organization boundary violations are critical security incidents.

---

# Workspace Scope Rule

If Ariyo supports workspaces, permissions may be organization-level or workspace-level.

Workspace-scoped permissions must include:

```text id="perm-030"
workspace_id
workspace membership
workspace resource ownership
organization membership
workspace role when applicable
```

Workspace access must not grant organization-wide access unless explicitly allowed.

---

# Resource Scope Rule

Some permissions may be resource-specific.

Examples:

```text id="perm-031"
review assigned to reviewer
manager assigned to employee group
member allowed for specific workspace
integration visible only to admins
audit logs visible only to security role
knowledge source restricted to specific employee
```

Permission systems must support resource-level checks where product risk requires it.

---

# Permission Decision Output Rule

Permission checks should return a structured decision.

Recommended shape:

```json id="perm-032"
{
  "allowed": false,
  "reason_code": "missing_permission",
  "message": "Only admins can deploy employees.",
  "required_permission": "employee.deploy",
  "required_role": "Admin",
  "safe_fallback": "disabled",
  "support_action": "ask_admin"
}
```

Do not return only `true` or `false` when the UI needs explanation.

---

# Permission Denial Reason Codes

Use stable denial reason codes.

Examples:

```text id="perm-033"
not_authenticated
not_organization_member
organization_suspended
workspace_access_required
missing_permission
insufficient_role
resource_not_found
resource_archived
resource_locked
plan_required
limit_reached
billing_past_due
integration_scope_missing
review_required
approval_required
safety_gate_blocked
unknown_permission_state
```

Reason codes support frontend copy, analytics, audit, and debugging.

---

# Frontend Permission UX Rule

Permission UX must be clear and calm.

Good:

```text id="perm-034"
Only admins can deploy employees.
Ask an admin to update your role if you need access.
```

Bad:

```text id="perm-035"
Forbidden
403
Unavailable
No data
Something went wrong
```

Permission denial is not an empty state.

Permission denial is not a crash.

---

# Hide vs Disable Rule

Choose hide or disable intentionally.

Hide actions when:

```text id="perm-036"
action is irrelevant to user role
showing action would create clutter
user does not need to understand missing capability
low-value action is not discoverability-critical
```

Disable with explanation when:

```text id="perm-037"
action is important to product activation
user may need to request access
action is part of setup checklist
action is blocked by plan or role
action is high-trust and user needs clarity
```

Never disable high-value actions without reason.

---

# Permission Error vs Empty State Rule

Permission denial must not be displayed as empty data.

Bad:

```text id="perm-038"
No employees yet.
```

when user lacks employee view permission.

Good:

```text id="perm-039"
You do not have access to view employees.
Ask an admin if you need access.
```

Empty means data does not exist.

Permission denied means data may exist but user cannot access it.

---

# Not Found vs Permission Rule

Sometimes backend may return not found to avoid revealing resource existence.

Frontend should use safe copy.

Good:

```text id="perm-040"
This employee may have been removed or you may not have access.
```

Do not reveal private resource existence when backend intentionally hides it.

---

# Entitlement vs Permission Rule

Permission and entitlement are different.

```text id="perm-041"
Permission:
Is this user allowed to perform this action?

Entitlement:
Does this organization’s plan allow this capability?
```

Example:

```text id="perm-042"
User has employee.deploy permission.
Organization plan allows only 3 active employees.
Organization already has 3 active employees.
Result: user is allowed, but entitlement limit blocks deployment.
```

UI must explain the correct reason.

Good:

```text id="perm-043"
Your plan includes 3 active employees. Upgrade to deploy another employee.
```

Bad:

```text id="perm-044"
You do not have permission.
```

---

# Plan Limit Rule

Plan limits must be enforced server-side.

Frontend may show:

```text id="perm-045"
usage progress
upgrade prompts
limit warnings
disabled actions
billing contact guidance
```

Backend must enforce limits for:

```text id="perm-046"
active employees
knowledge sources
workflow executions
AI usage
team members
integrations
review seats
history retention
exports
advanced analytics
```

Do not trust frontend limit checks.

---

# Billing Status Permission Rule

Billing state can affect access.

Billing statuses may cause:

```text id="perm-047"
read-only mode
feature restrictions
new deployment blocked
new workflow publishing blocked
AI execution paused
upgrade/downgrade prompts
billing admin required
```

Billing restrictions must not silently break product behavior.

Good:

```text id="perm-048"
Billing needs attention before deploying new employees.
Ask a billing admin to update payment details.
```

---

# AI Employee Permission Matrix

AI employee actions require explicit permissions.

Common permissions:

```text id="perm-049"
employee.view
employee.hire
employee.configure
employee.deploy
employee.pause
employee.resume
employee.archive
employee.delete
employee.assign_channel
employee.assign_knowledge_source
employee.change_autonomy
employee.view_activity
employee.view_performance
employee.view_cost
```

High-risk employee permissions:

```text id="perm-050"
employee.deploy
employee.change_autonomy
employee.enable_automatic_replies
employee.assign_sensitive_source
employee.assign_external_action_tool
employee.delete
employee.export_activity
```

High-risk permissions must be audited.

---

# Deployment Permission Rule

Deploying an AI employee requires more than `employee.deploy`.

Backend must verify:

```text id="perm-051"
user has employee.deploy
organization entitlement allows deployment
employee belongs to organization
employee is in deployable state
required setup is complete
required knowledge sources are ready
required channels are connected
required integrations are healthy
risk policy allows deployment
review mode is configured when required
billing state allows deployment
```

Do not deploy based on one boolean.

---

# Autonomy Permission Rule

Changing AI autonomy is high-risk.

Autonomy changes include:

```text id="perm-052"
manual only → require review
require review → automatic replies
automatic replies → tool execution
tool execution → external system updates
```

Autonomy upgrades may require:

```text id="perm-053"
admin permission
reviewer governance
safety evaluation passing
recent successful history
knowledge readiness
billing allowance
audit log entry
confirmation dialog
```

Do not treat autonomy as a simple toggle.

---

# Human Review Permission Matrix

Human review requires scoped authority.

Common permissions:

```text id="perm-054"
review.view_queue
review.view_assigned
review.approve
review.edit_and_approve
review.reject
review.escalate
review.reassign
review.override
review.view_history
review.manage_policy
```

Review permissions must respect:

```text id="perm-055"
assignment
risk level
employee scope
channel scope
workflow scope
reviewer role
conflict of interest when relevant
```

Approval authority must not be assumed from organization membership alone.

---

# Approval Authority Rule

Approval authority depends on risk.

Example:

```text id="perm-056"
Low-risk response draft:
Reviewer can approve.

Customer-facing automatic reply:
Reviewer or Manager can approve based on policy.

Billing-related message:
Admin or Billing Admin may be required.

Legal or high-risk claim:
Admin approval or escalation required.

Tool call changing external system:
Admin or explicit tool approval required.
```

Permission checks must consider review item risk.

---

# Override Permission Rule

Overrides are exceptional.

Override permissions must be:

```text id="perm-057"
rare
explicit
risk-limited
audited
reason-required
visible in history
reviewed later when needed
```

Forbidden:

```text id="perm-058"
silent override
frontend-only override
owner can override everything without audit
model can override policy
reviewer can override safety gate without permission
```

Overrides must preserve accountability.

---

# Workflow Permission Matrix

Workflow permissions:

```text id="perm-059"
workflow.view
workflow.create
workflow.edit_draft
workflow.publish
workflow.pause
workflow.resume
workflow.archive
workflow.delete
workflow.view_runs
workflow.retry_run
workflow.cancel_run
workflow.manage_triggers
workflow.manage_actions
workflow.manage_review_policy
```

High-risk workflow actions:

```text id="perm-060"
workflow.publish
workflow.enable_automatic_action
workflow.add_external_action
workflow.change_trigger_scope
workflow.delete
workflow.retry_run
```

Publishing workflows must be permission-checked and versioned.

---

# Workflow Publish Rule

Publishing a workflow requires validation.

Check:

```text id="perm-061"
user has workflow.publish
workflow belongs to organization
workflow draft is valid
trigger is allowed
actions are allowed
AI employee has required permissions
integrations are connected
review gates are configured
risk level is acceptable
billing/entitlement allows it
```

Workflow publish is a high-trust action.

---

# Knowledge Source Permission Matrix

Knowledge source permissions:

```text id="perm-062"
knowledge_source.view
knowledge_source.connect
knowledge_source.upload
knowledge_source.sync
knowledge_source.assign_to_employee
knowledge_source.restrict_access
knowledge_source.delete
knowledge_source.view_health
knowledge_source.view_content_preview
knowledge_source.export_metadata
```

Sensitive permissions:

```text id="perm-063"
knowledge_source.view_content_preview
knowledge_source.assign_to_employee
knowledge_source.restrict_access
knowledge_source.delete
knowledge_source.export_metadata
```

Do not expose source content to users who only need source status.

---

# Knowledge Source Assignment Rule

Assigning a source to an AI employee requires checks:

```text id="perm-064"
user can configure employee
user can assign knowledge source
source belongs to same organization
source is ready or allowed as pending
source access policy allows this employee
employee risk level allows this source
source sensitivity does not exceed employee scope
```

Knowledge access is permission-sensitive.

---

# Business Context Permission Matrix

Business context permissions:

```text id="perm-065"
business_context.view
business_context.edit
business_context.approve
business_context.publish
business_context.view_history
business_context.rollback
business_context.manage_rules
business_context.manage_brand_voice
business_context.manage_forbidden_claims
```

Business context affects AI behavior.

Edits may require approval.

Published business context must be versioned and audited.

---

# Integration Permission Matrix

Integration permissions:

```text id="perm-066"
integration.view
integration.connect
integration.configure
integration.disconnect
integration.reauthorize
integration.view_health
integration.view_logs
integration.manage_webhooks
integration.manage_scopes
integration.assign_to_employee
integration.assign_to_workflow
```

High-risk:

```text id="perm-067"
integration.connect
integration.disconnect
integration.manage_scopes
integration.assign_to_employee
integration.assign_to_workflow
integration.manage_webhooks
```

Integration access must consider provider scopes.

---

# Integration Scope Rule

Ariyo permission is not enough if provider scope is missing.

Example:

```text id="perm-068"
User has integration.assign_to_employee.
Integration is connected read-only.
Employee needs send-message capability.
Result: denied or setup required.
```

UI must explain capability gap:

```text id="perm-069"
This integration is connected, but message sending is not enabled. Reconnect with the required permission.
```

---

# Channel Permission Matrix

Channel permissions:

```text id="perm-070"
channel.view
channel.connect
channel.configure
channel.disconnect
channel.assign_employee
channel.pause_employee
channel.view_messages
channel.send_test_message
channel.manage_routing
```

Customer-facing channels require stricter rules.

Examples:

```text id="perm-071"
email
website chat
WhatsApp
Telegram
Slack
helpdesk
CRM
```

AI employees must not send through channels unless channel assignment and permissions allow it.

---

# Billing Permission Matrix

Billing permissions:

```text id="perm-072"
billing.view
billing.manage
billing.update_payment_method
billing.change_plan
billing.cancel_subscription
billing.view_invoices
billing.download_invoice
billing.view_ai_cost
billing.manage_usage_limits
billing.view_revenue_sensitive_data
```

Billing actions must be server-confirmed.

Billing permission errors must be clear and safe.

---

# Member Management Permission Matrix

Member permissions:

```text id="perm-073"
member.view
member.invite
member.remove
member.change_role
member.deactivate
member.reactivate
member.view_activity
member.resend_invite
member.cancel_invite
```

Member management requires self-action protections.

---

# Role Management Permission Matrix

Role permissions:

```text id="perm-074"
role.view
role.assign
role.create_custom
role.edit_custom
role.delete_custom
role.view_permissions
role.manage_reviewer_assignment
```

Role changes must be audited.

Do not allow users to grant permissions they do not have authority to manage.

---

# Self-Lockout Prevention Rule

Prevent users from accidentally removing their own critical access.

Protect against:

```text id="perm-075"
owner removing own ownership
owner leaving organization without another owner
admin removing own admin role when no other admin/owner exists
billing admin removing own billing access during billing issue
user disabling own account accidentally
```

Backend must enforce self-lockout rules.

Frontend must warn clearly.

Good:

```text id="perm-076"
You cannot remove your owner role until another owner is assigned.
```

---

# Ownership Transfer Rule

Ownership transfer is high-risk.

Required:

```text id="perm-077"
current owner authorization
new owner confirmation when appropriate
clear consequence
password or re-auth when architecture supports it
audit log entry
notification
rollback policy when applicable
```

Ownership transfer must not be hidden in generic role edit UI.

---

# Audit Permission Matrix

Audit permissions:

```text id="perm-078"
audit_log.view
audit_log.export
audit_log.view_security_events
audit_log.view_billing_events
audit_log.view_ai_execution_events
audit_log.view_integration_events
audit_log.view_permission_events
```

Audit logs may contain sensitive metadata.

Access must be restricted.

---

# Audit Requirements for Permission Events

Audit log required for:

```text id="perm-079"
member invited
member removed
role changed
permission changed
owner transferred
billing plan changed
payment method updated
integration connected
integration disconnected
AI employee deployed
AI employee autonomy changed
workflow published
review approved
review overridden
knowledge source assigned
security setting changed
```

Audit event must include:

```text id="perm-080"
actor
organization
resource
action
previous state when relevant
new state when relevant
reason when required
timestamp
request id
source ip/device metadata when available
```

---

# AI Tool Permission Matrix

AI tools must have permissions.

Tool permissions may include:

```text id="perm-081"
tool.read_customer_record
tool.create_support_ticket
tool.send_message
tool.update_crm_status
tool.create_invoice_draft
tool.schedule_meeting
tool.search_knowledge
tool.create_workflow_task
tool.escalate_to_human
```

AI employee tool access depends on:

```text id="perm-082"
employee role
employee deployment configuration
organization policy
integration scope
workflow policy
review mode
risk level
user/owner approval
```

The model must never self-grant tool access.

---

# Tool Call Authorization Rule

Every tool call must be authorized at execution time.

Check:

```text id="perm-083"
organization scope
AI employee identity
employee deployment state
tool is assigned to employee
tool is enabled
integration capability exists
resource belongs to organization
risk level allows automatic execution
review is not required or review approved
rate limits
billing limits
safety gates
```

Tool permission is not static.

It is contextual.

---

# Acting User vs AI Employee Rule

AI employee action authority is not the same as current human user authority.

Ariyo must distinguish:

```text id="perm-084"
human actor
AI employee actor
system actor
workflow actor
integration actor
```

Audit logs must show who or what acted.

Example:

```text id="perm-085"
AI Employee: Customer Support Employee
Action: Sent message
Authorized by: Deployment policy v3
Review: Approved by Sarah Manager
Organization: Acme Co
```

Do not hide AI actions under a generic system user.

---

# Delegated Authority Rule

AI employees act with delegated authority.

Delegated authority must be explicit:

```text id="perm-086"
what actions may be performed
which channels may be used
which data may be accessed
which workflows may trigger action
which review mode applies
which risk thresholds apply
who configured the delegation
when delegation became active
```

Delegation must be revocable.

---

# System Actor Rule

System actors may perform background tasks.

System actions must be limited to internal operations:

```text id="perm-087"
sync source
refresh integration status
process webhook
run scheduled workflow
calculate analytics
send billing webhook result
update AI cost report
```

System actors must not bypass organization boundary or entitlement checks.

---

# Permission Caching Rule

Permission data may be cached carefully.

Rules:

```text id="perm-088"
cache per user and organization
invalidate on role change
invalidate on membership change
invalidate on plan change
invalidate on organization switch
avoid long-lived stale permission cache
server remains source of truth
```

Never rely on stale frontend permission cache for execution.

---

# Permission Query Rule

Frontend permission queries should be typed and scoped.

Good:

```text id="perm-089"
GET /v1/organizations/{organization_id}/me/permissions
```

Response should include:

```text id="perm-090"
role
permissions
entitlements
usage limits
restricted reasons
organization status
billing status summary
```

Frontend should not infer permissions from role names alone.

---

# Frontend Permission Hook Rule

Frontend should use centralized permission hooks/selectors.

Good:

```ts id="perm-091"
const canDeployEmployee = useCan("employee.deploy");
```

or:

```ts id="perm-092"
const deployDecision = usePermissionDecision("employee.deploy", {
  employeeId,
});
```

Avoid scattered checks:

```tsx id="perm-093"
if (user.role === "admin" || user.role === "owner")
```

Role checks in components create brittle authorization UX.

---

# Permission Decision Component Rule

For high-value actions, UI should use permission decision components or helpers.

Example behavior:

```text id="perm-094"
allowed:
show primary action

missing permission:
show disabled action with role explanation

plan limit:
show upgrade path

billing issue:
show billing admin guidance

resource state blocked:
show state-specific guidance
```

Do not make every component invent permission UX.

---

# Permission Copy Rule

Permission copy must be specific.

Good:

```text id="perm-095"
Only admins can connect integrations.

Your plan does not include automatic replies.

This workflow is locked because it is already published.

Ask a billing admin to update payment details before deploying new employees.
```

Bad:

```text id="perm-096"
Access denied.

Forbidden.

Not allowed.

Unavailable.
```

Copy must guide recovery.

---

# Permission Error API Rule

Permission errors must use stable API error shapes.

Recommended:

```json id="perm-097"
{
  "error": {
    "code": "permission_denied",
    "message": "Only admins can deploy employees.",
    "reason_code": "missing_permission",
    "required_permission": "employee.deploy",
    "required_role": "Admin",
    "request_id": "req_123"
  }
}
```

Do not expose backend internals.

Do not return raw framework errors.

---

# Permission Analytics Rule

Track permission friction safely.

Useful events:

```text id="perm-098"
permission_denied_viewed
permission_blocked_action_clicked
upgrade_required_viewed
admin_request_access_clicked
role_changed
member_invited
review_permission_denied
billing_permission_denied
```

Do not send sensitive payloads.

Do not track raw resource content.

---

# Access Request Rule

Ariyo may support requesting access.

Access requests should include:

```text id="perm-099"
requester
organization
requested permission or role
resource context
reason message when provided
approver candidates
status
created at
resolved at
resolution
```

Access request is not the same as granting access.

Approvals must be explicit and audited.

---

# Invitation Rule

Invitations must be permission-controlled.

Invite flow must verify:

```text id="perm-100"
inviter can invite members
role being assigned is allowed
plan member limit allows invite
email is valid
invite token is secure
invite expiration exists
invite can be revoked
```

Inviting someone as Admin or Billing Admin is high-risk.

---

# Invite Token Rule

Invite tokens are sensitive.

Rules:

```text id="perm-101"
do not log invite tokens
do not send tokens to analytics
do not expose token after creation unnecessarily
allow revoke/cancel when possible
expire tokens
server validates token
```

---

# Role Assignment Rule

Role assignment requires authority over target role.

A user must not assign a role higher than their authority.

Examples:

```text id="perm-102"
Admin cannot create Owner.
Manager cannot assign Admin.
Reviewer cannot assign roles.
Billing Admin cannot assign operational roles unless separately allowed.
```

Backend must enforce role hierarchy and protected roles.

---

# Role Change Confirmation Rule

High-impact role changes need confirmation.

Confirm when:

```text id="perm-103"
promoting to Admin
promoting to Billing Admin
promoting to Developer with integration access
removing Admin from last admin
removing Reviewer from active review queues
changing role affects pending reviews
changing role affects billing access
```

Copy must explain consequence.

---

# Reviewer Assignment Rule

Reviewer assignment is not generic membership.

Reviewer assignment should consider:

```text id="perm-104"
employee scope
workflow scope
channel scope
risk level
business function
language
availability
conflict rules
```

A reviewer should only see review items they are allowed to evaluate.

---

# Sensitive Permission Rule

Some permissions are sensitive and require extra protection.

Sensitive permissions:

```text id="perm-105"
organization.delete
owner.transfer
billing.manage
member.change_role
role.assign
integration.connect
integration.disconnect
workflow.publish
employee.deploy
employee.enable_automatic_replies
knowledge_source.view_content_preview
knowledge_source.assign_sensitive_source
review.override
audit_log.export
```

Sensitive permissions may require:

```text id="perm-106"
confirmation
re-authentication
dual approval
audit reason
notification
rate limiting
```

---

# Dual Approval Rule

Dual approval may be required for highest-risk actions.

Candidate actions:

```text id="perm-107"
transfer ownership
delete organization
publish high-risk workflow
enable automatic external actions
connect sensitive integration
export audit logs
mass member role changes
```

Dual approval must be explicit and auditable.

---

# Break-Glass Access Rule

If Ariyo ever supports emergency access, it must be controlled.

Required:

```text id="perm-108"
rare role or capability
strong authentication
reason required
time-limited access
full audit log
notification to owners
post-event review
automatic expiration
```

Break-glass must not become normal admin access.

---

# Support Access Rule

Ariyo internal support access must be strictly governed.

Support access should require:

```text id="perm-109"
customer consent or approved policy
limited scope
time limit
reason
auditing
sensitive data minimization
no secret visibility
no billing/payment data unless required and authorized
```

Internal support must not casually access customer data.

---

# Data Export Permission Rule

Exporting data is sensitive.

Export actions must check:

```text id="perm-110"
export permission
resource scope
organization membership
billing/plan entitlement
privacy policy
file generation status
expiry for download URL
audit log
```

UI must explain what is exported.

---

# Audit Log Visibility Rule

Audit logs may reveal sensitive behavior.

Restrict by:

```text id="perm-111"
role
permission
event type
resource scope
time range
billing/security category
```

Do not expose all audit events to every admin by default if product risk requires separation.

---

# Analytics Permission Rule

Analytics access may be scoped.

Analytics categories:

```text id="perm-112"
operational analytics
employee performance
AI cost
billing analytics
review analytics
workflow analytics
security analytics
customer content analytics
```

Not every user who can view a dashboard should see billing or sensitive cost data.

---

# AI Cost Permission Rule

AI cost data may affect billing and business visibility.

Permissions:

```text id="perm-113"
ai_cost.view_summary
ai_cost.view_employee_breakdown
ai_cost.view_raw_usage
ai_cost.manage_limits
```

Billing Admin may see cost.

Manager may see employee-level cost only when allowed.

Viewer may see summaries only if permitted.

---

# Field-Level Access Rule

Some API responses may need field-level filtering.

Examples:

```text id="perm-114"
member email hidden from Viewer
billing details hidden from Manager
knowledge content preview hidden from Member
raw AI prompt hidden from non-admin
integration credentials never returned
provider scopes hidden or summarized
```

Do not rely only on frontend hiding fields.

Backend should return frontend-safe responses.

---

# Object-Level Access Rule

Some resources require object-level checks.

Examples:

```text id="perm-115"
assigned employee only
assigned workflow only
review item assigned to reviewer
workspace-specific source
integration visible only to integration admins
billing visible only to billing admins
```

Do not assume role alone is enough.

---

# Permission-Safe API Response Rule

APIs should return only data the user is allowed to see.

Bad:

```text id="perm-116"
Backend returns all fields and frontend hides some.
```

Good:

```text id="perm-117"
Backend returns role-safe and permission-safe DTO.
```

Frontend should not receive secrets or forbidden content.

---

# Permission-Safe Search Rule

Search and command palette must respect permissions.

Search results must not leak:

```text id="perm-118"
private employee names
restricted knowledge sources
member emails
billing records
integration names
workflow names
hidden resources
```

Search must use backend-filtered results.

Do not search all client-cached data if user may not access it.

---

# Permission-Safe Notifications Rule

Notifications must respect permissions.

Do not notify users about resources they cannot access.

Notification links must re-check permissions.

Notifications should avoid sensitive content when permission is uncertain.

---

# Permission-Safe Activity Feed Rule

Activity feeds must filter by permission.

Activity may reveal:

```text id="perm-119"
customer message metadata
AI employee actions
integration names
billing updates
role changes
source sync events
workflow execution details
```

Show only allowed activity details.

Use summarized safe events when needed.

---

# Permission-Safe Webhooks Rule

Webhooks must validate organization and integration access.

Webhook processing must not execute actions outside connected organization.

Webhook events must be idempotent and auditable.

Webhook-driven AI action still requires policy and permission checks.

---

# Permission-Safe Background Job Rule

Background jobs must enforce organization/resource scope.

Jobs must include:

```text id="perm-120"
organization_id
resource_id
actor type
trigger source
permission context when applicable
idempotency key
request or trace id
```

Background jobs must not bypass normal authorization just because they run async.

---

# Permission-Safe WebSocket/Realtime Rule

Realtime events must be permission-filtered.

Rules:

```text id="perm-121"
authenticate connection
scope by organization
filter events by permission
revalidate after role change when possible
avoid sending sensitive payloads
close or rescope connection on organization switch
```

Do not broadcast organization-wide data to all members.

---

# Admin UI Rule

Admin UI must be powerful but restrained.

Admin UI should:

```text id="perm-122"
show current role clearly
show permission implications
separate billing access from operational access
warn on high-risk changes
prevent self-lockout
show audit history for role changes
make disabled reasons clear
use product language
avoid exposing backend permission internals to normal users
```

Admin UI is governance UX.

---

# Role Management UI Rule

Role management UI must clearly show:

```text id="perm-123"
role name
role description
major capabilities
restricted capabilities
member count per role
system vs custom role
last changed when useful
who can assign this role
```

Do not show a raw list of cryptic permission codes as the primary UX.

Advanced permission detail may be shown for admins/developers.

---

# Permission Matrix UI Rule

Permission matrix UI should group by product area.

Recommended groups:

```text id="perm-124"
AI Employees
Deployments
Knowledge Sources
Business Context
Workflows
Human Review
Integrations
Channels
Members & Roles
Billing & Usage
Analytics
Audit & Security
Developer Tools
Organization Settings
```

Use clear copy.

Avoid overwhelming users with backend-like flags.

---

# Permission Change Preview Rule

High-impact permission changes should preview consequences.

Examples:

```text id="perm-125"
This user will be able to deploy AI employees.
This user will lose access to 4 pending review items.
This role can manage billing and payment details.
This role can connect external integrations.
```

Users should understand what they are granting or removing.

---

# Permission Change Audit Rule

Every permission change must be audited.

Audit event should include:

```text id="perm-126"
actor
subject user
old role
new role
old permissions when custom
new permissions when custom
organization
reason when provided
request id
timestamp
```

---

# Permission Notification Rule

Notify relevant users for important permission changes.

Examples:

```text id="perm-127"
role promoted to Admin
role removed from Admin
Billing Admin added or removed
Owner transferred
Reviewer removed from active queue
Developer integration access granted
```

Notifications must not leak sensitive details to unauthorized users.

---

# Session Revalidation Rule

When permissions change, existing sessions may need revalidation.

Important changes:

```text id="perm-128"
role downgraded
user removed from organization
billing access removed
integration access removed
reviewer authority removed
owner transferred
security setting changed
```

Do not let old sessions continue unsafe actions.

---

# Permission Race Condition Rule

Permission checks must be resilient to race conditions.

Examples:

```text id="perm-129"
user opens deploy dialog, then loses deploy permission
billing plan changes while deployment pending
integration disconnected while workflow running
review item reassigned while reviewer approves
organization switched while mutation is pending
role changed while page cache is stale
```

Backend must re-check at mutation time.

Frontend must handle denial gracefully.

---

# Idempotency and Permissions Rule

High-risk permissioned actions must be idempotency-aware.

Examples:

```text id="perm-130"
member invite
role change
employee deploy
workflow publish
integration connect callback
billing change
review approval
```

Duplicate requests must not create unsafe duplicate effects.

---

# Rate Limiting Rule

Sensitive permissioned actions should be rate-limited.

Examples:

```text id="perm-131"
invites
role changes
login attempts
access requests
integration connect attempts
review approvals
workflow publish attempts
AI employee deployment
exports
```

Rate limit errors should be product-friendly.

---

# Security Logging Rule

Security-relevant permission events must be logged.

Examples:

```text id="perm-132"
permission denied on sensitive action
repeated denied attempts
role escalation
failed ownership transfer
break-glass access
support access
export attempt
integration scope change
```

Logs must avoid sensitive content.

---

# Permission Testing Rule

Permission logic must be tested.

Test:

```text id="perm-133"
role permission mapping
missing permission denial
entitlement limit denial
billing status denial
organization boundary denial
workspace scope denial
resource ownership denial
self-lockout prevention
owner transfer rules
review approval authority
deployment permission matrix
workflow publish permission matrix
integration scope denial
field-level filtering
permission error shape
frontend disabled reason
```

Permission tests protect trust.

---

# Backend Permission Test Rule

Backend tests must prove enforcement.

Minimum tests:

```text id="perm-134"
allowed role succeeds
missing role fails
wrong organization fails
resource from another organization fails
archived resource fails when action not allowed
plan limit fails
billing issue fails
permission error shape is stable
audit log created for sensitive action
```

Do not rely on frontend tests for security.

---

# Frontend Permission Test Rule

Frontend tests should verify UX.

Test:

```text id="perm-135"
allowed action visible/enabled
denied action hidden or disabled with reason
plan limit shows upgrade path
billing restriction shows billing guidance
permission denied is not shown as empty state
role change UI warns about consequence
high-risk action requires confirmation
```

Frontend tests verify clarity.

Backend tests verify enforcement.

---

# Permission Migration Rule

Permission schema changes must be migration-safe.

When adding permissions:

```text id="perm-136"
define default mapping for existing roles
migrate existing organizations safely
avoid granting high-risk permissions accidentally
audit migration when sensitive
update docs and UI copy
update tests
```

Permission migrations are security-sensitive.

---

# Default Deny Rule

Unknown permission states must deny safely.

Forbidden defaults:

```text id="perm-137"
unknown permission → allow
missing permission response → allow
unknown role → admin
null role → owner
failed permission query → show action enabled
```

Safe defaults:

```text id="perm-138"
unknown permission → disable action
failed permission query → show recoverable unavailable state
unknown role → least privilege
unknown entitlement → block high-risk action
```

Default deny is mandatory.

---

# Unknown Status Rule

Unknown resource status must not allow high-risk actions.

Examples:

```text id="perm-139"
unknown employee status → do not deploy automatically
unknown source status → do not assign as ready
unknown workflow status → do not publish
unknown billing status → do not allow billing-dependent action
unknown integration status → do not execute tool
```

Unknown must not become success.

---

# Permission Definition of Done

Permission implementation is production-ready only when:

```text id="perm-140"
backend enforces action
frontend explains action availability
permission is organization-scoped
resource ownership is checked
entitlement is checked when relevant
billing state is checked when relevant
risk level is considered
audit log exists for sensitive actions
high-risk actions require confirmation/review when needed
self-lockout is prevented
unknown states deny safely
permission errors have stable shape
tests cover allowed and denied paths
sensitive fields are filtered by backend
```

If any applicable item is missing, permission implementation is incomplete.

---

# Admin & Permissions Review Checklist

Before shipping permission-related code, verify:

```text id="perm-141"
Is this action backend-enforced?
Is organization scope checked?
Is workspace/resource scope checked when relevant?
Is role enough, or is explicit permission needed?
Is entitlement checked separately?
Is billing status checked separately?
Is integration scope checked separately?
Is AI safety/review policy checked when relevant?
Is unknown state denied safely?
Is frontend denial copy specific?
Is permission denial not shown as empty state?
Is high-risk action audited?
Is self-lockout prevented?
Are role changes audited?
Are sensitive fields filtered server-side?
Are permission tests added?
Are frontend disabled/hidden states intentional?
```

If any answer is no, refactor before shipping.

---

# Forbidden Permission Patterns

Never ship:

```text id="perm-142"
frontend-only access control
role checks as the only backend authorization
permissions inferred only from UI state
organization resources fetched without organization scope
hidden button as security
permission denial shown as empty state
unknown permission treated as allowed
unknown role treated as admin
server returning sensitive fields and frontend hiding them
billing restriction shown as permission error
plan restriction shown as generic error
AI tool calls without runtime authorization
AI employee self-granting tools
workflow publish without permission and validation
deployment based on one boolean
review approval without reviewer authority check
role changes without audit log
owner self-lockout allowed
invite tokens logged or sent to analytics
integration scopes ignored
support access without audit
large generic manage_all permission for high-risk areas
custom roles that can grant protected permissions casually
permission TODOs postponed silently
```

---

# Ariyo Admin & Permissions Golden Rule

Every powerful action in Ariyo must answer: who is allowed, why they are allowed, what they can affect, how risk is controlled, and how the decision is audited.

---

# Senior Permission Rule

Do not design permissions as page access.

Design permissions as business authority over AI employees, knowledge, tools, workflows, people, billing, and risk.

---

# Final Rule

Ariyo permissions are production-ready only when roles are understandable, permissions are explicit, organization boundaries are enforced, entitlements are separate from authorization, high-risk actions are protected, AI employee authority is delegated and auditable, frontend access states are clear, backend enforcement is mandatory, and unknown or unsafe states deny by default.
