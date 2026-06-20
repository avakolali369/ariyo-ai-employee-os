# Ariyo AI Agent Permissions Runtime Skill

## 1. Purpose

This skill defines the runtime permission system for Ariyo AI employees.

Ariyo is not a chatbot product. Ariyo is an AI Employee Operating System where AI employees may read knowledge, call tools, draft responses, trigger workflows, use integrations, request approvals, and in some cases execute business actions.

That means permissions cannot be treated as static UI checkboxes.

Ariyo needs a runtime authorization layer that decides what an AI employee may do at the exact moment it tries to do it.

This skill governs:

- AI employee runtime permissions.
- Tool access.
- Action scopes.
- Delegated authority.
- Temporary permissions.
- Runtime approvals.
- High-risk action blocking.
- Human review routing.
- Policy-based execution.
- Organization and workspace boundaries.
- Integration permissions.
- Knowledge access permissions.
- Customer-facing transparency.
- Auditability.
- Kill switches.
- Abuse prevention.

## 2. Core Contract

Ariyo AI employees must never be allowed to act only because they are technically capable of acting.

Every AI employee action must be authorized at runtime based on organization, workspace, user, plan, role, tool, integration, data scope, risk level, approval policy, cost policy, and current system safety state.

AI employees may suggest many things.

AI employees may execute only what they are explicitly allowed to execute.

## 3. Related Skills

This skill must align with:

- `ai-employee-architecture.md`
- `admin-permissions.md`
- `human-review-governance.md`
- `prompt-tool-orchestration.md`
- `workflow-automation.md`
- `integration-ecosystem.md`
- `ai-safety-evaluation.md`
- `security-threat-model.md`
- `data-governance-privacy.md`
- `model-provider-strategy.md`
- `ai-cost-control.md`
- `observability-analytics-events.md`
- `internal-admin-backoffice.md`
- `feature-flags-rollout-system.md`
- `operations-command-center.md`
- `quality-assurance-system.md`

## 4. Design Principles

### 4.1 Runtime Authorization Over Static Authorization

Static permissions answer:

> Is this AI employee generally allowed to use this capability?

Runtime permissions answer:

> Is this AI employee allowed to perform this exact action, on this exact resource, for this exact organization, using this exact tool, with this exact data, under the current risk and policy conditions?

Ariyo must prefer runtime authorization for all meaningful AI employee actions.

### 4.2 Least Privilege

AI employees must receive the minimum permissions needed to complete their assigned job.

Do not give broad tool access because it is convenient.

Do not give write access when read access is enough.

Do not give account-wide integration access when resource-level access is possible.

### 4.3 Human-Controlled Delegation

AI employees do not own authority.

Humans and organizations delegate authority to AI employees.

Delegation must be:

- Explicit.
- Scoped.
- Revocable.
- Time-bounded when appropriate.
- Auditable.
- Understandable to business users.

### 4.4 Risk-Based Execution

The same tool may be low-risk in one context and high-risk in another.

Example:

- Drafting an email is low-risk.
- Sending an email to 5,000 customers is high-risk.
- Reading a CRM contact is medium-risk.
- Updating deal stage for a large enterprise account is high-risk.
- Summarizing support tickets is low-risk.
- Issuing refunds is high-risk.

Ariyo must calculate action risk at runtime.

### 4.5 Review Before Irreversible Action

High-risk and irreversible actions must route to human review unless a clearly defined policy allows automatic execution.

Examples of review-required actions:

- Sending external messages at scale.
- Refunding payments.
- Deleting customer data.
- Changing billing plans.
- Disabling integrations.
- Publishing marketplace assets.
- Exporting sensitive data.
- Changing organization permissions.
- Triggering workflows that affect customers.

### 4.6 Fail Closed

If runtime authorization cannot confidently decide, the default decision must be deny or require review.

Ariyo must never fail open for AI employee actions.

## 5. Permission Layers

Ariyo runtime permissions must evaluate multiple layers together.

### 5.1 Organization Layer

Checks:

- Organization exists.
- Organization is active.
- Organization is not suspended.
- Organization plan allows the requested capability.
- Organization policy allows AI employee execution.
- Organization data residency and privacy settings allow the action.
- Organization has not disabled the tool category.

### 5.2 Workspace Layer

Checks:

- AI employee belongs to the workspace.
- Target resource belongs to the same workspace unless cross-workspace access is explicitly allowed.
- Workspace policies allow the action.
- Workspace review rules are respected.

### 5.3 User Delegation Layer

Checks:

- Which user or admin delegated authority.
- Whether the delegating user had permission to delegate.
- Whether delegation is still active.
- Whether delegation expires.
- Whether delegation was revoked.

### 5.4 AI Employee Role Layer

Checks:

- AI employee role.
- AI employee job description.
- AI employee allowed responsibilities.
- AI employee forbidden responsibilities.
- AI employee seniority level.
- AI employee autonomy level.

Example roles:

```text
support_ai_employee
sales_ai_employee
operations_ai_employee
finance_ai_employee
content_ai_employee
geo_ai_employee
customer_success_ai_employee
internal_ops_ai_employee
```

### 5.5 Tool Layer

Checks:

- Tool is enabled.
- Tool is available to plan.
- Tool is available to AI employee.
- Tool is available in current environment.
- Tool has not been disabled by kill switch.
- Tool risk level allows current execution mode.

### 5.6 Resource Layer

Checks:

- Target resource exists.
- Target resource belongs to correct organization.
- Target resource is not archived, deleted, or locked.
- AI employee is allowed to access this resource type.
- Resource contains sensitive data requiring additional policy.

### 5.7 Integration Layer

Checks:

- Integration connection is active.
- Token is valid.
- Required provider scope is available.
- Integration is not degraded or disabled.
- Requested action matches granted provider permissions.
- Rate limit and budget allow execution.

### 5.8 Knowledge Layer

Checks:

- Knowledge source is enabled.
- AI employee may retrieve from this source.
- User or organization permissions allow retrieval.
- Sensitive documents are not exposed to unauthorized AI employees.
- RAG retrieval obeys organization boundaries.

### 5.9 Plan and Entitlement Layer

Checks:

- Basic, Pro, or Smart plan allows the capability.
- Feature flag allows rollout.
- Usage limits are not exceeded.
- Cost controls allow execution.
- Add-on entitlement exists when needed.

### 5.10 Safety Layer

Checks:

- Action violates no AI safety policy.
- Prompt injection did not manipulate tool use.
- Tool arguments are validated.
- Data exfiltration risk is acceptable.
- Human review is required if risk is high.

## 6. Permission Decision Model

Every runtime action must result in one of these decisions:

```text
allow
deny
require_human_review
require_admin_approval
require_reauthentication
require_plan_upgrade
require_scope_grant
require_cost_approval
require_security_review
require_policy_update
```

### 6.1 Decision Requirements

Every decision must include:

- Decision result.
- Reason code.
- Human-readable explanation.
- Policy references.
- Required next action.
- Audit ID.
- Risk score.
- Confidence score.
- Review requirement, if any.

### 6.2 Example Decision Payload

```json
{
  "decision": "require_human_review",
  "reason_code": "HIGH_RISK_EXTERNAL_SEND",
  "message": "This AI employee can draft the message, but sending it to external recipients requires review.",
  "risk_score": 82,
  "confidence_score": 0.94,
  "required_next_action": "submit_review_request",
  "policy_ids": ["policy_external_communication_v2", "policy_smart_plan_review_v1"],
  "audit_id": "audit_01J9 runtime_7Q2",
  "expires_at": "2026-06-18T16:00:00Z"
}
```

## 7. Runtime Permission Entities

### 7.1 AgentPermissionPolicy

Defines policy rules for AI employee actions.

Fields:

```json
{
  "id": "policy_ai_sales_outreach_v1",
  "organization_id": "org_123",
  "workspace_id": "ws_456",
  "name": "Sales Outreach Policy",
  "description": "Controls what the Sales AI employee may do with leads and outbound messages.",
  "applies_to_agent_roles": ["sales_ai_employee"],
  "applies_to_tools": ["crm.read", "email.draft", "email.send"],
  "default_decision": "require_human_review",
  "risk_thresholds": {
    "allow_below": 30,
    "review_from": 31,
    "deny_from": 90
  },
  "status": "active",
  "created_by": "user_admin_1",
  "created_at": "2026-06-18T10:00:00Z"
}
```

### 7.2 AgentToolGrant

Defines which tools an AI employee may use.

```json
{
  "id": "grant_123",
  "agent_id": "agent_sales_1",
  "tool_key": "email.send",
  "permission_level": "review_required",
  "scope": {
    "workspace_id": "ws_456",
    "allowed_domains": ["customer.com"],
    "max_recipients_per_action": 5
  },
  "expires_at": null,
  "status": "active"
}
```

### 7.3 AgentDelegation

Defines delegated authority from a human or organization policy.

```json
{
  "id": "delegation_123",
  "organization_id": "org_123",
  "agent_id": "agent_support_1",
  "delegated_by_user_id": "user_admin_1",
  "authority_type": "support_reply_approval",
  "scope": {
    "channels": ["website_chat", "email"],
    "max_customer_tier": "pro",
    "allowed_topics": ["billing_questions", "setup_help", "troubleshooting"]
  },
  "execution_mode": "review_required",
  "expires_at": "2026-09-18T00:00:00Z",
  "status": "active"
}
```

### 7.4 RuntimeActionRequest

Represents an action the AI employee wants to take.

```json
{
  "id": "action_req_123",
  "organization_id": "org_123",
  "workspace_id": "ws_456",
  "agent_id": "agent_support_1",
  "requested_by": "agent",
  "tool_key": "email.send",
  "action_type": "send_external_message",
  "target_resource": {
    "type": "conversation",
    "id": "conv_123"
  },
  "arguments": {
    "to": ["customer@example.com"],
    "subject": "Setup instructions",
    "body_preview": "Here are the steps to connect your knowledge base..."
  },
  "context": {
    "trigger": "customer_message",
    "source_channel": "support_email",
    "contains_sensitive_data": false
  }
}
```

### 7.5 RuntimePermissionDecision

Represents the authorization decision.

```json
{
  "id": "decision_123",
  "action_request_id": "action_req_123",
  "decision": "require_human_review",
  "risk_score": 64,
  "reason_codes": ["EXTERNAL_COMMUNICATION", "CUSTOMER_VISIBLE_ACTION"],
  "review_queue_id": "review_queue_support",
  "expires_at": "2026-06-18T16:30:00Z",
  "created_at": "2026-06-18T15:30:00Z"
}
```

## 8. Permission Levels

Ariyo must support these AI employee permission levels:

```text
none
read_only
draft_only
suggest_only
review_required
auto_execute_low_risk
auto_execute_policy_scoped
admin_approved_only
blocked
```

### 8.1 read_only

The AI employee may read allowed context but cannot propose or execute actions.

Use for:

- Analytics viewing.
- Knowledge retrieval.
- Customer summary.
- Internal support diagnostics.

### 8.2 draft_only

The AI employee may draft output but cannot submit, send, publish, update, or execute.

Use for:

- Email drafts.
- Social posts.
- Help center article drafts.
- Sales proposal drafts.

### 8.3 suggest_only

The AI employee may recommend actions but cannot prepare executable artifacts.

Use for:

- Strategy recommendations.
- Troubleshooting suggestions.
- Customer success next steps.

### 8.4 review_required

The AI employee may prepare an action, but a human must approve it.

Use for:

- External customer communication.
- Workflow changes.
- CRM updates.
- Billing-related drafts.

### 8.5 auto_execute_low_risk

The AI employee may automatically execute low-risk actions only.

Use for:

- Tagging internal records.
- Creating internal notes.
- Updating non-sensitive task status.
- Sending safe internal notifications.

### 8.6 auto_execute_policy_scoped

The AI employee may execute actions automatically within explicit policy boundaries.

Use for Smart plan customers with mature governance.

### 8.7 admin_approved_only

An admin must approve before the AI employee can use the tool at all.

Use for:

- Refunds.
- Deletes.
- Data exports.
- Permission changes.
- Integration write access.

### 8.8 blocked

The action is not allowed.

No review path is offered unless an admin changes policy.

## 9. Action Risk Levels

Ariyo must classify runtime actions into risk levels.

```text
risk_0_observe
risk_1_internal_low
risk_2_customer_visible_low
risk_3_business_state_change
risk_4_sensitive_or_external
risk_5_financial_or_security_critical
```

### 9.1 risk_0_observe

Read-only, no customer impact.

Examples:

- Summarize internal dashboard.
- Read allowed knowledge.
- Analyze non-sensitive analytics.

Default behavior: allow if permission exists.

### 9.2 risk_1_internal_low

Low-risk internal action.

Examples:

- Create internal note.
- Add internal tag.
- Suggest task priority.

Default behavior: allow for Pro and Smart if permission exists; Basic may require review depending on plan.

### 9.3 risk_2_customer_visible_low

Customer-visible but low-risk action.

Examples:

- Draft customer response.
- Suggest help article.
- Create reply preview.

Default behavior: draft or review required.

### 9.4 risk_3_business_state_change

Changes business data.

Examples:

- Update CRM deal stage.
- Modify workflow configuration.
- Change AI employee instructions.

Default behavior: review required unless policy-scoped automatic execution is enabled.

### 9.5 risk_4_sensitive_or_external

Sensitive or external action.

Examples:

- Send message to customer.
- Export customer records.
- Access sensitive knowledge.
- Sync external integration data.

Default behavior: review required or admin approval.

### 9.6 risk_5_financial_or_security_critical

Financial, security, deletion, or admin action.

Examples:

- Refund payment.
- Delete organization data.
- Change admin role.
- Disable security control.
- Rotate integration credentials.

Default behavior: admin approval required or blocked.

## 10. Plan-Aware Runtime Permissions

Ariyo must align runtime authority with `Basic / Pro / Smart` packaging.

### 10.1 Basic

Basic is safe, useful, and limited.

Basic AI employees should usually operate in:

```text
read_only
draft_only
suggest_only
review_required
```

Basic should not support broad autonomous execution.

Basic may include:

- One or limited AI employees.
- Limited tools.
- Limited knowledge sources.
- Limited integrations.
- Draft-first behavior.
- Manual review for customer-visible actions.
- Basic cost limits.
- Simple permission settings.

Basic should not include:

- Autonomous external sending.
- Financial actions.
- Advanced integration write actions.
- Complex delegated authority.
- Organization-wide automation.
- Advanced policy editor.

### 10.2 Pro

Pro is operational and team-ready.

Pro AI employees may operate in:

```text
read_only
draft_only
suggest_only
review_required
auto_execute_low_risk
```

Pro may include:

- Multiple AI employees.
- Team-level permissions.
- Integration read/write with review.
- Workflow automation with approvals.
- Human review queues.
- More advanced cost and permission visibility.
- Basic policy templates.
- Audit logs.

Pro should still restrict:

- Financial actions.
- Sensitive data export.
- Admin permission changes.
- Broad autonomous execution.

### 10.3 Smart

Smart is the most powerful and full-option plan.

Smart AI employees may operate in:

```text
read_only
draft_only
suggest_only
review_required
auto_execute_low_risk
auto_execute_policy_scoped
admin_approved_only
```

Smart may include:

- Advanced AI employee autonomy.
- Policy-scoped automatic execution.
- Advanced tool permissions.
- Runtime risk scoring.
- Temporary delegated authority.
- Approval workflows by risk class.
- Advanced AI cost controls.
- Advanced integration actions.
- Advanced audit exports.
- Advanced command center visibility.
- Policy simulation.
- Permission analytics.

Smart is powerful, but never unlimited.

Smart must still enforce:

- Budget controls.
- Security controls.
- Human review for critical actions.
- Admin approval for sensitive actions.
- Data governance rules.
- Kill switches.
- Audit logs.

## 11. Tool Permission Categories

Ariyo tools must be categorized by permission and risk.

### 11.1 Knowledge Tools

Examples:

```text
knowledge.search
knowledge.read
knowledge.summarize
knowledge.compare
knowledge.create_draft
```

Rules:

- Retrieval must be organization-scoped.
- Sensitive documents require additional permission.
- AI employees must not reveal hidden source content to unauthorized users.
- Retrieval must be logged.

### 11.2 Communication Tools

Examples:

```text
email.draft
email.send
whatsapp.draft
whatsapp.send
telegram.draft
chat.respond
sms.send
```

Rules:

- Drafting is lower risk than sending.
- External sending requires review unless policy-scoped automation exists.
- Bulk sending requires approval.
- Regulated or sensitive messages require review.

### 11.3 CRM Tools

Examples:

```text
crm.read_contact
crm.update_contact
crm.create_note
crm.update_deal
crm.create_task
```

Rules:

- Reading may be allowed by role.
- Updates require review or policy-scoped execution.
- Deal stage changes above threshold require approval.
- Notes created by AI must be labeled as AI-generated.

### 11.4 Workflow Tools

Examples:

```text
workflow.start
workflow.pause
workflow.resume
workflow.modify
workflow.cancel
```

Rules:

- Starting low-risk workflows may be allowed.
- Modifying production workflows requires review.
- Pausing critical workflows requires approval.
- Workflow execution must be idempotent.

### 11.5 Billing and Finance Tools

Examples:

```text
billing.read
billing.create_invoice_note
billing.apply_credit
billing.refund
billing.change_plan
```

Rules:

- Most finance actions are high-risk.
- Refunds require admin approval.
- Plan changes require customer/admin authorization.
- AI may draft finance recommendations but not execute critical actions by default.

### 11.6 Admin Tools

Examples:

```text
admin.invite_user
admin.change_role
admin.disable_user
admin.export_audit_logs
```

Rules:

- AI employees must not change admin permissions automatically.
- AI may suggest admin actions.
- Execution requires explicit admin approval.
- Self-lockout prevention must apply.

### 11.7 Integration Tools

Examples:

```text
integration.read
integration.sync
integration.write
integration.disconnect
integration.rotate_secret
```

Rules:

- Write actions require integration scope validation.
- Disconnect actions require approval.
- Secret rotation must never expose credentials.
- Sync must obey rate and cost controls.

### 11.8 Marketplace Tools

Examples:

```text
marketplace.install_asset
marketplace.publish_asset
marketplace.update_listing
marketplace.refund_purchase
```

Rules:

- Publishing requires review.
- Installing may require plan entitlement.
- Refunds require finance policy.
- Marketplace assets must pass quality and safety checks.

## 12. Temporary Permissions

Temporary permissions allow controlled time-bounded authority.

Use cases:

- Support escalation.
- Pilot setup.
- Emergency incident response.
- One-time integration repair.
- Short-term campaign execution.

Temporary permissions must include:

- Grant reason.
- Scope.
- Expiration.
- Approver.
- Maximum action count.
- Audit trail.
- Revocation path.

Example:

```json
{
  "temporary_permission_id": "tmp_perm_123",
  "agent_id": "agent_support_1",
  "tool_key": "integration.sync",
  "scope": {
    "integration_connection_id": "conn_456",
    "resource_type": "helpdesk_articles"
  },
  "max_actions": 3,
  "expires_at": "2026-06-18T18:00:00Z",
  "approved_by": "user_admin_1",
  "reason": "Repair failed support knowledge sync",
  "status": "active"
}
```

## 13. Runtime Approval Gates

Ariyo must support multiple approval gates.

```text
none
reviewer_approval
admin_approval
billing_admin_approval
security_admin_approval
owner_approval
multi_step_approval
```

### 13.1 Reviewer Approval

Used for human review queues.

### 13.2 Admin Approval

Used for organization-level actions.

### 13.3 Billing Admin Approval

Used for financial actions.

### 13.4 Security Admin Approval

Used for sensitive data, secrets, access, or security changes.

### 13.5 Owner Approval

Used for irreversible or organization-wide actions.

### 13.6 Multi-Step Approval

Used for high-impact actions such as data deletion, mass export, or production policy changes.

## 14. Policy Simulation

Before enabling AI autonomy, Ariyo should allow admins to simulate permissions.

Policy simulation should answer:

- What actions would this AI employee be allowed to perform?
- Which actions would require review?
- Which actions would be blocked?
- What would change if plan upgraded?
- What would change if this tool was enabled?
- What would happen in a high-risk scenario?

Example endpoint:

```http
POST /api/v1/ai-permissions/simulate
```

Request:

```json
{
  "agent_id": "agent_sales_1",
  "scenario": "send_follow_up_email_to_enterprise_lead",
  "tool_key": "email.send",
  "arguments": {
    "recipient_count": 1,
    "recipient_type": "external_customer",
    "contains_discount": true
  }
}
```

Response:

```json
{
  "decision": "require_human_review",
  "risk_score": 58,
  "reason_codes": ["EXTERNAL_CUSTOMER_MESSAGE", "COMMERCIAL_TERMS_INCLUDED"],
  "recommended_policy_change": null,
  "admin_message": "This action is allowed only after review because it includes commercial terms."
}
```

## 15. API Contract

### 15.1 Evaluate Runtime Permission

```http
POST /api/v1/ai-runtime/permissions/evaluate
```

Request:

```json
{
  "organization_id": "org_123",
  "workspace_id": "ws_456",
  "agent_id": "agent_789",
  "tool_key": "crm.update_deal",
  "action_type": "update_business_record",
  "target_resource": {
    "type": "deal",
    "id": "deal_123"
  },
  "arguments": {
    "stage": "proposal_sent",
    "amount": 12000
  },
  "context": {
    "trigger": "agent_recommendation",
    "user_present": false,
    "source": "workflow_run"
  }
}
```

Response:

```json
{
  "decision_id": "decision_123",
  "decision": "require_human_review",
  "risk_level": "risk_3_business_state_change",
  "risk_score": 61,
  "reason_codes": ["CRM_STATE_CHANGE", "DEAL_AMOUNT_ABOVE_AUTO_THRESHOLD"],
  "allowed_next_actions": ["create_review_request", "save_as_draft", "cancel"],
  "review_policy": {
    "required_role": "sales_manager",
    "expires_in_minutes": 120
  },
  "audit_id": "audit_123"
}
```

### 15.2 Create Tool Grant

```http
POST /api/v1/ai-runtime/tool-grants
```

Request:

```json
{
  "agent_id": "agent_support_1",
  "tool_key": "email.send",
  "permission_level": "review_required",
  "scope": {
    "channels": ["support_email"],
    "max_recipients_per_action": 1,
    "allowed_templates": ["support_follow_up", "setup_help"]
  }
}
```

### 15.3 Revoke Tool Grant

```http
POST /api/v1/ai-runtime/tool-grants/{grant_id}/revoke
```

Request:

```json
{
  "reason": "Customer disabled email automation",
  "requested_by": "user_admin_1"
}
```

### 15.4 Create Delegation

```http
POST /api/v1/ai-runtime/delegations
```

Request:

```json
{
  "agent_id": "agent_ops_1",
  "authority_type": "workflow_execution",
  "execution_mode": "auto_execute_low_risk",
  "scope": {
    "workflow_ids": ["workflow_123"],
    "max_runs_per_day": 25
  },
  "expires_at": "2026-07-18T00:00:00Z"
}
```

### 15.5 List Runtime Decisions

```http
GET /api/v1/ai-runtime/decisions?agent_id=agent_123&decision=require_human_review
```

### 15.6 Emergency Disable Agent Tools

```http
POST /api/v1/ai-runtime/agents/{agent_id}/emergency-disable-tools
```

Request:

```json
{
  "reason": "Suspicious tool usage detected",
  "disable_scope": "all_write_tools"
}
```

## 16. Frontend Requirements

### 16.1 AI Employee Permission Panel

Every AI employee profile should show:

- Tools available.
- Permission level per tool.
- Plan restrictions.
- Review requirements.
- Recent denied actions.
- Recent approved actions.
- Risk summary.
- Delegated authority.
- Temporary permissions.
- Last policy change.

### 16.2 Action Preview UI

Before a risky action, show:

- What the AI wants to do.
- Which resource will be affected.
- Why it wants to do it.
- Risk level.
- Required reviewer.
- Estimated cost.
- Audit note.
- Approve, reject, edit, or request clarification.

### 16.3 Admin Policy UI

Admin users should be able to:

- Enable or disable tools.
- Set permission levels.
- Define risk thresholds.
- Require review for categories.
- Set limits.
- Simulate policies.
- Review audit logs.
- Revoke permissions.

### 16.4 Customer-Friendly Copy

Do not say:

```text
Permission denied.
```

Say:

```text
This AI employee can prepare this action, but your workspace requires human review before it is executed.
```

Do not say:

```text
Scope missing.
```

Say:

```text
This integration is connected, but it does not currently allow Ariyo to update records. An admin can grant write access if needed.
```

## 17. Backend Requirements

### 17.1 Central Permission Service

Runtime permissions must be enforced by a backend service.

Frontend checks are only UX hints.

The backend must be the source of truth.

### 17.2 Policy Evaluation Engine

The engine must evaluate:

- Organization plan.
- Feature flags.
- User permissions.
- AI employee role.
- Tool grants.
- Delegations.
- Resource ownership.
- Data sensitivity.
- Risk score.
- Integration scopes.
- Cost limits.
- Safety policies.
- Kill switches.

### 17.3 Idempotency

Action authorization must support idempotency.

Repeated evaluation of the same action request should not create duplicate review requests or duplicate actions.

### 17.4 Immutable Audit Logs

Every runtime decision must be logged.

Audit logs must include:

- Agent ID.
- Tool key.
- Action type.
- Resource ID.
- Decision.
- Reason codes.
- Policies evaluated.
- Risk score.
- User/admin involved.
- Timestamp.
- Correlation ID.

### 17.5 Enforcement Before Execution

No tool execution should happen without a runtime permission decision.

The correct sequence:

```text
agent proposes action
validate tool arguments
evaluate runtime permissions
create review if required
execute only if allowed/approved
write audit log
emit observability events
```

## 18. Observability Events

Ariyo must emit events for runtime permissions.

```text
ai_permission_evaluation_requested
ai_permission_allowed
ai_permission_denied
ai_permission_review_required
ai_permission_admin_approval_required
ai_tool_grant_created
ai_tool_grant_updated
ai_tool_grant_revoked
ai_delegation_created
ai_delegation_expired
ai_delegation_revoked
ai_temporary_permission_created
ai_temporary_permission_used
ai_temporary_permission_expired
ai_runtime_kill_switch_enabled
ai_runtime_policy_simulated
ai_runtime_policy_changed
ai_action_blocked_by_cost_policy
ai_action_blocked_by_security_policy
ai_action_blocked_by_plan_entitlement
```

Each event must include:

- Organization ID.
- Workspace ID.
- Agent ID.
- Tool key.
- Decision.
- Risk level.
- Plan.
- Policy IDs.
- Correlation ID.

## 19. Advanced KPI System

The runtime permission system must be measurable.

### 19.1 Safety KPIs

```text
blocked_high_risk_actions_count
unauthorized_action_attempt_rate
prompt_injection_block_rate
sensitive_data_action_review_rate
critical_action_auto_execute_rate
```

Critical action auto-execute rate should normally be zero unless explicitly approved by policy.

### 19.2 Operational KPIs

```text
permission_evaluation_latency_p95
review_required_rate_by_tool
review_approval_rate
review_rejection_rate
average_review_resolution_time
policy_simulation_usage_rate
```

### 19.3 Customer Trust KPIs

```text
permission_denial_confusion_rate
admin_policy_setup_completion_rate
agent_permission_panel_usage_rate
customer_revoke_permission_rate
trust_related_support_ticket_rate
```

### 19.4 Cost Control KPIs

```text
ai_actions_blocked_by_budget
ai_actions_downgraded_by_plan
high_cost_tool_use_attempts
cost_approval_request_rate
cost_policy_override_rate
```

### 19.5 Plan KPIs

```text
basic_review_required_rate
pro_low_risk_auto_execution_rate
smart_policy_scoped_execution_rate
smart_high_risk_review_rate
upgrade_prompt_conversion_from_permission_limit
```

### 19.6 Security KPIs

```text
runtime_kill_switch_activation_count
suspicious_tool_usage_count
cross_workspace_access_block_count
integration_scope_mismatch_count
temporary_permission_overuse_count
```

## 20. Security Rules

### 20.1 No Prompt-Based Permission Escalation

AI instructions must never grant permissions.

This is forbidden:

```text
The prompt says the AI employee is now allowed to send refunds.
```

Permissions must come from backend policy and authorized users.

### 20.2 No User-Provided Tool Scope Trust

The AI or user request cannot define its own authority.

All authority must be checked against stored policy.

### 20.3 No Hidden Autonomous Expansion

AI employees must not gain new tools automatically because they completed a task successfully.

### 20.4 No Silent Tool Execution

Customer-visible or business-changing actions must not happen silently.

### 20.5 No Cross-Tenant Access

Runtime permission checks must always enforce organization boundary.

### 20.6 No Secret Exposure

AI employees must never receive raw secrets, API keys, OAuth tokens, or credentials.

### 20.7 No Unsafe Fallback

If the policy engine is unavailable, write actions must stop.

Read-only degraded mode may continue only if safe.

## 21. Human Review Integration

Runtime permissions must connect to human review.

When decision is `require_human_review`, Ariyo must create a review request with:

- Proposed action.
- AI reasoning summary.
- Tool arguments.
- Risk score.
- Diff preview.
- Customer impact.
- Cost impact.
- Policy reason.
- Approve/reject/edit controls.

Reviewers must be selected based on:

- Role.
- Workspace.
- Risk type.
- Tool category.
- Plan.
- Customer policy.

## 22. AI Safety Integration

Runtime permission checks must detect AI-specific attacks.

Examples:

- Prompt injection requests tool escalation.
- Knowledge content instructs model to ignore policy.
- User tries to make AI leak hidden knowledge.
- Tool arguments include suspicious external URL.
- AI tries to send data to unauthorized recipient.
- AI tries to chain tools to bypass restrictions.

Ariyo must block or review suspicious actions.

## 23. Cost Control Integration

Before execution, runtime permissions must check cost policy.

Examples:

- Expensive model call.
- Bulk workflow execution.
- Large retrieval operation.
- High-volume external messages.
- Long-running automation.

Possible decisions:

```text
allow
require_cost_approval
throttle
downgrade_model
queue_for_later
deny_budget_exceeded
```

## 24. Feature Flag Integration

Runtime permissions must respect feature flags.

Examples:

- Tool available only to Smart beta customers.
- Integration write access enabled for selected organizations.
- New autonomous workflow policy released to 5% of Pro users.
- Kill switch disables AI sending across all organizations.

Feature flags must not bypass security policies.

## 25. Internal Admin Requirements

Internal admin users may need to inspect runtime permissions, but access must be controlled.

Internal admin can:

- View permission decisions.
- View audit logs.
- Disable dangerous tool grants.
- Enable kill switches.
- Assist customer admins.
- Investigate suspicious behavior.

Internal admin must not:

- Secretly grant AI employees new customer permissions.
- Execute customer actions without authorization.
- View sensitive customer content without approved support access.
- Override customer policy without audit.

## 26. Testing Requirements

Tests must cover:

- Tool allowed.
- Tool denied.
- Review required.
- Admin approval required.
- Plan entitlement missing.
- Integration scope missing.
- Cost budget exceeded.
- Prompt injection blocked.
- Cross-tenant access blocked.
- Temporary permission expired.
- Delegation revoked.
- Kill switch active.
- Policy simulation.
- Audit log creation.
- Duplicate action idempotency.
- Human review creation.
- Smart policy-scoped execution.

## 27. QA Checklist

Before releasing runtime permissions:

- Backend enforces all permission decisions.
- Frontend does not rely on hidden assumptions.
- AI cannot execute tools without permission evaluation.
- Risk scoring is tested.
- Review routing is tested.
- Audit logs are complete.
- Kill switches work.
- Plan restrictions work.
- Cross-organization access is blocked.
- Integration scopes are validated.
- Cost controls are enforced.
- Prompt injection cannot escalate permissions.
- Customer copy is clear.

## 28. Forbidden Patterns

Never do these:

```text
allow AI tool execution from frontend-only checks
trust prompt instructions as permission grants
let AI employees grant themselves tools
store permissions only in prompt text
allow write tools without runtime authorization
let integration scopes bypass Ariyo policies
show raw permission errors to customers
silently auto-send external messages
allow financial actions without approval
allow admin role changes by AI employee
fail open when policy engine is unavailable
skip audit logs for denied actions
skip audit logs for allowed actions
use one global permission for all tools
ignore plan entitlements during execution
ignore cost policy during execution
ignore data sensitivity during execution
allow temporary permissions without expiration
allow customer support impersonation to create AI authority secretly
allow cross-tenant resource access
allow autonomous deletion of customer data
```

## 29. Implementation Priority

### 29.1 MVP

Must include:

- Central runtime permission evaluation.
- Tool grants.
- Basic risk levels.
- Human review routing.
- Audit logs.
- Plan enforcement.
- Integration scope checks.
- Kill switch support.

### 29.2 Pro Readiness

Add:

- Policy templates.
- Low-risk auto execution.
- Advanced review queues.
- Permission panel.
- Policy simulation.
- More detailed observability.

### 29.3 Smart Readiness

Add:

- Policy-scoped autonomy.
- Temporary permissions.
- Advanced risk scoring.
- Advanced approval chains.
- Permission analytics.
- Smart command center controls.
- Runtime recommendations.

## 30. Golden Rule

AI employee autonomy is only valuable when it is bounded by trust.

Ariyo must make AI employees powerful enough to create business outcomes and constrained enough to protect customers from unsafe, unauthorized, expensive, or irreversible actions.
