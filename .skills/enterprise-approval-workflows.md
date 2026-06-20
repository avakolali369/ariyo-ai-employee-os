# Ariyo Enterprise Approval Workflows Skill

## Core Contract

Ariyo Enterprise Approval Workflows is not a notification that asks someone to click approve.

It is the governed decision, routing, evidence, delegation, escalation, SLA, exception, human-review, and audit system that ensures sensitive enterprise actions are reviewed by the right people before they change AI Employees, customer data access, marketplace installs, permissions, billing, compliance posture, production workflows, model routing, automation scope, or organizational risk.

Ariyo must make approvals fast when risk is low.

Ariyo must make approvals controlled, explainable, and auditable when risk is high.

Ariyo must never allow approval fatigue, ambiguous ownership, missing evidence, expired authority, delegated shortcuts, or silent auto-approval to weaken enterprise governance.

---

## 1. Purpose

This skill defines how Ariyo should design, build, evaluate, and operate enterprise-grade approval workflows across the platform.

It covers approval requests triggered by users, admins, AI Employees, marketplace assets, policy engines, billing actions, workspace governance, data access changes, automation changes, model/provider changes, compliance exceptions, security-sensitive actions, and customer success operations.

The approval system must answer:

- who requested the action;
- what action is being requested;
- why the action matters;
- which policies triggered approval;
- who is allowed to approve;
- what evidence is required;
- what happens if it is approved;
- what happens if it is rejected;
- what happens if nobody responds;
- how approval can be delegated;
- how the decision is audited;
- how customers can prove approval happened later.

---

## 2. Dependencies

Approval workflows must integrate with these Ariyo skills:

- `enterprise-account-governance.md`
- `enterprise-workspace-policy-engine.md`
- `enterprise-sso-scim-directory-sync.md`
- `human-review-governance.md`
- `admin-permissions.md`
- `ai-agent-permissions-runtime.md`
- `marketplace-installation-entitlements.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-enterprise-vendor-management.md`
- `marketplace-compliance-evidence-center.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`
- `finance-accounting-controls.md`
- `observability-analytics-events.md`
- `operations-command-center.md`
- `internal-admin-backoffice.md`

Approval workflows must not duplicate policy logic. The policy engine decides whether approval is required. The approval workflow engine manages the decision process and produces an auditable outcome.

---

## 3. Approval Philosophy

### 3.1 Governance-first

Approval is a governance control, not a UX interruption.

Every approval must have a clear reason, owner, impact, expiration, and evidence trail.

### 3.2 Risk proportionality

Low-risk actions should use lightweight approval or no approval.

High-risk actions must use stronger controls, such as multi-step approval, segregation of duties, evidence requirements, legal/security review, finance review, or human governance board review.

### 3.3 Least friction with maximum clarity

The approver must understand what they are approving without reading logs, raw JSON, or internal policy code.

### 3.4 No rubber stamping

Ariyo must discourage blind approval behavior through summaries, risk explanations, warnings, and audit visibility.

### 3.5 Reversible where possible

Approval must describe whether the action is reversible, partially reversible, or irreversible.

### 3.6 Approval is not consent laundering

A user clicking approve does not make unsafe, illegal, non-compliant, or policy-prohibited actions acceptable.

Some actions must remain blocked even if someone approves them.

---

## 4. Approval Use Cases

Approval workflows may be required for:

1. Installing a high-risk marketplace template.
2. Installing a template that accesses sensitive data.
3. Enabling an AI Employee to call external tools.
4. Allowing an AI Employee to send emails or messages externally.
5. Connecting a CRM, accounting system, HRIS, or data warehouse.
6. Importing a knowledge base with confidential records.
7. Changing workspace policy inheritance.
8. Changing user roles or admin permissions.
9. Granting delegated admin access.
10. Approving private catalog assets.
11. Approving marketplace procurement requests.
12. Approving budget increases.
13. Approving model provider changes.
14. Approving data residency exceptions.
15. Approving retention or deletion exceptions.
16. Approving public-to-private template forks.
17. Approving internal template promotion.
18. Approving production rollout of a workflow.
19. Approving auto-remediation actions above risk threshold.
20. Approving incident containment actions.
21. Approving customer data export.
22. Approving billing plan changes.
23. Approving creator/partner access to customer workspaces.
24. Approving legal or compliance exceptions.
25. Approving marketplace sponsored placements in enterprise contexts.

---

## 5. Approval Scope Model

Approval policies may apply at:

- platform level;
- enterprise account level;
- organization level;
- workspace level;
- department level;
- team level;
- project level;
- AI Employee level;
- template level;
- workflow level;
- integration level;
- data source level;
- marketplace catalog level;
- procurement request level;
- billing entity level;
- region level.

Scope inheritance must be explicit.

A lower-level scope may tighten controls but must not weaken mandatory higher-level controls unless an allowed exception policy exists.

---

## 6. Approval Request Object

Ariyo should model every approval request as a first-class object.

```ts
export type ApprovalRequestStatus =
  | 'draft'
  | 'submitted'
  | 'waiting_for_approver'
  | 'waiting_for_evidence'
  | 'partially_approved'
  | 'approved'
  | 'rejected'
  | 'expired'
  | 'cancelled'
  | 'escalated'
  | 'blocked_by_policy'
  | 'executed'
  | 'execution_failed'
  | 'rolled_back';

export interface ApprovalRequest {
  id: string;
  organizationId: string;
  workspaceId?: string;
  departmentId?: string;
  requestedByUserId: string;
  requestedByActorType: 'user' | 'admin' | 'ai_employee' | 'system' | 'partner' | 'creator';
  actionType: ApprovalActionType;
  targetType: ApprovalTargetType;
  targetId: string;
  title: string;
  summary: string;
  businessJustification?: string;
  riskTier: 'low' | 'medium' | 'high' | 'critical';
  reversibility: 'reversible' | 'partially_reversible' | 'irreversible';
  policyTriggers: ApprovalPolicyTrigger[];
  requiredApprovals: ApprovalStep[];
  evidenceRequirements: EvidenceRequirement[];
  submittedEvidence: SubmittedEvidence[];
  impactSummary: ApprovalImpactSummary;
  costImpact?: ApprovalCostImpact;
  dataImpact?: ApprovalDataImpact;
  complianceImpact?: ApprovalComplianceImpact;
  securityImpact?: ApprovalSecurityImpact;
  currentStatus: ApprovalRequestStatus;
  expiresAt?: string;
  createdAt: string;
  submittedAt?: string;
  resolvedAt?: string;
  executedAt?: string;
  auditTrailId: string;
}
```

---

## 7. Approval Action Types

Approval action types should include:

```ts
export type ApprovalActionType =
  | 'install_marketplace_asset'
  | 'purchase_marketplace_asset'
  | 'enable_ai_employee_tool'
  | 'grant_data_source_access'
  | 'connect_integration'
  | 'change_user_role'
  | 'change_workspace_policy'
  | 'create_policy_exception'
  | 'approve_private_catalog_asset'
  | 'promote_internal_template'
  | 'publish_template'
  | 'change_billing_plan'
  | 'increase_budget_limit'
  | 'export_customer_data'
  | 'change_data_residency'
  | 'enable_model_provider'
  | 'approve_auto_remediation'
  | 'approve_experiment'
  | 'approve_partner_access'
  | 'approve_procurement_request'
  | 'approve_vendor'
  | 'approve_compliance_exception'
  | 'approve_incident_action';
```

Each action type must have a default risk tier and default evidence requirements.

---

## 8. Approval Target Types

Targets may include:

- user;
- team;
- workspace;
- organization;
- AI Employee;
- agent team;
- workflow;
- marketplace asset;
- marketplace vendor;
- marketplace creator;
- marketplace partner;
- integration;
- data source;
- knowledge base;
- model provider;
- billing account;
- private catalog;
- procurement request;
- policy exception;
- incident;
- experiment;
- remediation action.

---

## 9. Approval Policy Triggers

Approval may be triggered by:

- risk tier;
- data sensitivity;
- permission scope;
- external communication capability;
- financial impact;
- region mismatch;
- vendor risk;
- compliance gap;
- marketplace asset certification level;
- template trust label status;
- customer policy;
- department policy;
- AI Employee autonomy level;
- integration criticality;
- model provider classification;
- historical incident record;
- cost forecast;
- user role;
- approval history;
- procurement threshold;
- legal/security review requirement.

Example:

```json
{
  "trigger": "sensitive_data_access",
  "reason": "Template requests access to customer PII and CRM records.",
  "source": "enterprise-workspace-policy-engine",
  "requiredApprovalRole": "Security Reviewer",
  "severity": "high"
}
```

---

## 10. Approval Step Model

Approval workflows must support:

- single approver;
- any-of group approval;
- all-of group approval;
- sequential approval;
- parallel approval;
- conditional approval;
- delegated approval;
- escalation approval;
- finance approval;
- security approval;
- legal approval;
- procurement approval;
- executive approval;
- human review board approval;
- customer admin approval;
- partner manager approval.

```ts
export interface ApprovalStep {
  id: string;
  name: string;
  order: number;
  approvalMode: 'single' | 'any_of' | 'all_of' | 'sequential' | 'parallel';
  requiredRoleIds: string[];
  requiredGroupIds?: string[];
  approverUserIds?: string[];
  allowDelegation: boolean;
  allowSelfApproval: boolean;
  requiresEvidenceReview: boolean;
  slaHours?: number;
  escalationPolicyId?: string;
  status: 'pending' | 'approved' | 'rejected' | 'skipped' | 'expired' | 'escalated';
}
```

Self-approval must be blocked for high-risk, finance-sensitive, security-sensitive, or policy-exception actions unless explicitly allowed by an enterprise policy.

---

## 11. Conditional Routing

Approval workflows must support conditional routing based on:

- requested action type;
- requested resource;
- cost amount;
- risk tier;
- data sensitivity;
- region;
- workspace;
- department;
- vendor status;
- certification status;
- trust label;
- creator reputation;
- customer plan;
- policy exception request;
- prior approval decision;
- failed evidence check;
- SLA breach;
- incident status.

Example routing rules:

```yaml
if:
  actionType: install_marketplace_asset
  dataImpact.includes: pii
  riskTier: high
then:
  require:
    - Security Reviewer
    - Workspace Owner
    - Data Protection Owner
```

```yaml
if:
  costImpact.monthlyIncreaseUsdGreaterThan: 5000
then:
  require:
    - Finance Approver
    - Procurement Owner
```

---

## 12. Approval Evidence Requirements

Approval requests must include enough evidence for a reviewer to make a meaningful decision.

Evidence may include:

- policy trigger summary;
- requested permission diff;
- data access summary;
- cost forecast;
- region compatibility decision;
- vendor risk profile;
- marketplace trust labels;
- certification status;
- template health score;
- security review evidence;
- compliance evidence;
- procurement evidence;
- impact analysis;
- rollback plan;
- simulation result;
- test run result;
- customer justification;
- creator documentation;
- partner implementation scope;
- legal documents;
- audit references.

Approval without evidence must be disallowed for medium, high, and critical risk actions.

---

## 13. Approval Decision Model

Approvers must be able to:

- approve;
- reject;
- request more information;
- delegate;
- escalate;
- approve with conditions;
- approve partially;
- expire the request;
- block by policy;
- attach decision notes;
- attach evidence;
- request rollback after execution.

```ts
export interface ApprovalDecision {
  id: string;
  approvalRequestId: string;
  stepId: string;
  decidedByUserId: string;
  decision: 'approved' | 'rejected' | 'needs_more_info' | 'delegated' | 'escalated' | 'approved_with_conditions';
  decisionReason?: string;
  conditions?: ApprovalCondition[];
  decidedAt: string;
  ipAddress?: string;
  userAgent?: string;
}
```

Decision notes should be required for rejection, escalation, override, and approval with conditions.

---

## 14. Approval Conditions

Some approvals may include conditions such as:

- only enable for a specific workspace;
- only allow read-only access;
- only allow a trial period;
- cap monthly spend;
- require reapproval after 30 days;
- require post-install health monitoring;
- require security review before production rollout;
- require customer communication;
- require rollback plan;
- require audit report export.

Approval conditions must be enforceable, not just text comments.

---

## 15. Delegation Rules

Delegation allows a qualified approver to assign the approval to another qualified reviewer.

Delegation must include:

- delegator;
- delegate;
- scope;
- reason;
- expiration;
- allowed approval types;
- audit trail;
- revocation path.

Delegation must not allow:

- delegation to requester for high-risk actions;
- delegation to unqualified users;
- indefinite delegation without expiry;
- hidden delegation;
- delegation that bypasses segregation of duties;
- delegation across unauthorized departments or workspaces.

---

## 16. Escalation Rules

Escalation must occur when:

- SLA is breached;
- approver is unavailable;
- approver rejects but requester appeals;
- evidence conflict exists;
- risk is reclassified upward;
- incident emerges during approval;
- policy conflict exists;
- approval is blocked by missing ownership;
- procurement/legal/security review is required.

Escalation paths may include:

- workspace owner;
- organization owner;
- security owner;
- legal owner;
- finance owner;
- procurement owner;
- human review board;
- Ariyo support/operator;
- executive sponsor.

---

## 17. SLA Model

Approval workflows must support SLA policies.

Examples:

| Risk Tier | Default SLA | Escalation |
|---|---:|---|
| Low | 24 hours | Workspace owner |
| Medium | 48 hours | Department owner |
| High | 72 hours | Security/legal/procurement owner |
| Critical | Immediate or 4 hours | Incident command / executive owner |

SLA timers should pause when the request is waiting for evidence from the requester.

---

## 18. Expiration Rules

Approval requests must expire when:

- they exceed configured approval window;
- evidence becomes stale;
- target resource changes materially;
- policy changes invalidate the request;
- risk tier changes;
- vendor status changes;
- template certification is revoked;
- requester loses required role;
- workspace is archived;
- procurement window closes.

Expired approvals must not be executable.

---

## 19. Approval Execution

Approval does not equal execution.

After approval, Ariyo must execute the requested action only if:

- approval is still valid;
- required conditions are satisfied;
- policy engine still allows the action;
- user/requester still has permission;
- target resource still exists;
- dependency registry still validates dependencies;
- region controls still pass;
- billing/entitlement state is still valid;
- no blocking incident is active.

Execution must create a separate audit event.

---

## 20. Approval Rollback

Where possible, every approved action should include rollback metadata.

Rollback model:

```ts
export interface ApprovalRollbackPlan {
  isRollbackSupported: boolean;
  rollbackType: 'automatic' | 'manual' | 'partial' | 'not_supported';
  rollbackWindowHours?: number;
  rollbackRisks?: string[];
  requiredApproverRoles?: string[];
  rollbackProcedure?: string;
}
```

Irreversible actions must display explicit warnings before approval.

---

## 21. Human Review Governance

Human reviewers must be involved for:

- critical actions;
- legal exceptions;
- sensitive data access exceptions;
- safety-sensitive AI Employee autonomy;
- external communication automation at scale;
- high-value procurement;
- marketplace asset publication with high risk;
- disputed approval decisions;
- policy override requests;
- customer-impacting incident actions.

Human review decisions must include rationale, evidence, and audit trail.

---

## 22. AI-Assisted Approval Summaries

Ariyo may use AI to summarize approval requests.

AI may help:

- explain policy triggers;
- summarize permission changes;
- compare before/after state;
- identify missing evidence;
- flag unusual risk;
- prepare reviewer checklist;
- suggest routing;
- draft customer-friendly explanations.

AI must not:

- approve on behalf of humans unless explicitly allowed for low-risk automated workflows;
- hide risks;
- fabricate evidence;
- override policy;
- pressure reviewers;
- change approval scope;
- summarize beyond available evidence.

AI-generated summaries must be labeled as summaries and linked to source evidence.

---

## 23. Plan-Aware Approval Rules

### Basic

Basic approval workflows should be simple:

- owner approval for risky actions;
- limited marketplace install approvals;
- limited AI Employee permission approvals;
- no complex multi-branch workflows;
- clear prompts and safe defaults.

Basic must not expose high-autonomy or high-risk approvals without upgrade gates.

### Pro

Pro approval workflows should support operational teams:

- workspace approval routing;
- department owners;
- marketplace install approval;
- integration approval;
- cost threshold approval;
- template publish approval;
- delegated admins;
- audit logs.

### Smart

Smart approval workflows should support enterprise governance:

- multi-step conditional routing;
- policy-triggered approvals;
- legal/security/procurement/finance review;
- approval simulation;
- approval analytics;
- automation approval gates;
- AI-assisted summaries;
- access reviews;
- exceptions;
- approval evidence packages.

Smart may support advanced approval orchestration, but must enforce stronger safety and audit requirements.

---

## 24. Approval UX Requirements

Approval request UI must show:

- request title;
- requester;
- action type;
- target resource;
- risk tier;
- policy trigger reason;
- required approvers;
- current status;
- deadline/SLA;
- evidence list;
- impact summary;
- permission diff;
- cost impact;
- data impact;
- compliance impact;
- rollback plan;
- approval history;
- comments;
- decision buttons;
- escalation/delegation controls.

The UI must avoid vague approval language like:

- "Approve change" without explaining change;
- "Continue" for high-risk approval;
- "Looks good" as decision text;
- hidden permission diff;
- hidden cost impact.

---

## 25. Approval Inbox

Users with approval responsibilities need an approval inbox.

Inbox should support:

- pending approvals;
- overdue approvals;
- high-risk approvals;
- approvals requiring evidence;
- delegated approvals;
- escalated approvals;
- filters by workspace, risk, type, requester;
- bulk actions only for low-risk approvals;
- audit-friendly export;
- mobile-friendly decision experience.

Bulk approval must be disabled for high-risk and critical actions.

---

## 26. Requester Experience

Requesters must be able to:

- see why approval is required;
- submit required justification;
- upload evidence;
- view approval status;
- respond to evidence requests;
- cancel request;
- see rejection reason;
- resubmit corrected request;
- see expected SLA;
- understand next steps.

The requester must not be able to edit the target action after submission without restarting approval, unless the edit is minor and policy permits it.

---

## 27. Admin Configuration

Admins should configure:

- approval policies;
- approver roles;
- approval groups;
- routing rules;
- thresholds;
- SLA timers;
- escalation paths;
- delegation policy;
- self-approval rules;
- required evidence;
- approval expiration;
- auto-approval conditions;
- blocked action rules;
- notification settings;
- audit retention.

Admin configuration changes must be audited and may themselves require approval.

---

## 28. Auto-Approval Rules

Auto-approval may be allowed only for low-risk, predictable actions.

Auto-approval must require:

- explicit policy;
- risk tier low;
- no sensitive data access;
- no high-cost impact;
- no external communication risk;
- no compliance exception;
- no policy conflict;
- complete evidence;
- audit logging.

Auto-approval must not be used for high-risk marketplace installs, data exports, security exceptions, billing increases above threshold, or production AI autonomy expansion.

---

## 29. Approval Audit Trail

Every approval must create immutable audit records for:

- request creation;
- submission;
- evidence upload;
- routing decision;
- approver assignment;
- delegation;
- escalation;
- comment;
- decision;
- rejection;
- expiration;
- execution;
- rollback;
- policy override;
- notification;
- evidence package export.

Audit records must include timestamp, actor, role, source IP when available, organization/workspace scope, and correlation ID.

---

## 30. Evidence Package Export

Enterprise customers may need to export approval evidence.

Evidence package should include:

- approval request summary;
- policy triggers;
- evidence submitted;
- approver list;
- decisions;
- timestamps;
- execution result;
- rollback result if applicable;
- related audit events;
- related procurement/security/legal references;
- cryptographic or tamper-evident metadata when available.

---

## 31. API Contract

### Submit approval request

`POST /api/v1/approvals/requests`

```json
{
  "actionType": "install_marketplace_asset",
  "targetType": "marketplace_asset",
  "targetId": "asset_123",
  "workspaceId": "wrk_123",
  "businessJustification": "Install sales qualification AI employee for SDR team.",
  "submittedEvidenceIds": ["ev_001"]
}
```

### Get approval request

`GET /api/v1/approvals/requests/{approvalRequestId}`

### Decide approval step

`POST /api/v1/approvals/requests/{approvalRequestId}/decisions`

```json
{
  "stepId": "step_security_review",
  "decision": "approved_with_conditions",
  "decisionReason": "Approved for read-only CRM access during pilot.",
  "conditions": [
    {
      "type": "permission_limit",
      "value": "crm.read_only"
    },
    {
      "type": "expiry",
      "value": "2026-09-30T00:00:00Z"
    }
  ]
}
```

### Delegate approval

`POST /api/v1/approvals/requests/{approvalRequestId}/delegate`

### Escalate approval

`POST /api/v1/approvals/requests/{approvalRequestId}/escalate`

### Execute approved action

`POST /api/v1/approvals/requests/{approvalRequestId}/execute`

### Export evidence package

`POST /api/v1/approvals/requests/{approvalRequestId}/evidence-package`

---

## 32. Webhooks

Ariyo should emit webhooks for:

- `approval.request.created`
- `approval.request.submitted`
- `approval.request.routed`
- `approval.step.assigned`
- `approval.step.approved`
- `approval.step.rejected`
- `approval.step.delegated`
- `approval.step.escalated`
- `approval.request.needs_more_info`
- `approval.request.expired`
- `approval.request.approved`
- `approval.request.rejected`
- `approval.request.executed`
- `approval.request.execution_failed`
- `approval.request.rolled_back`
- `approval.evidence.package_exported`

---

## 33. Observability Events

Track:

- `approval_request_created`
- `approval_request_submitted`
- `approval_policy_triggered`
- `approval_routing_resolved`
- `approval_step_assigned`
- `approval_decision_recorded`
- `approval_sla_breached`
- `approval_escalated`
- `approval_delegated`
- `approval_evidence_requested`
- `approval_execution_started`
- `approval_execution_completed`
- `approval_execution_failed`
- `approval_rollback_requested`
- `approval_rollback_completed`
- `approval_package_exported`

Events must include risk tier, action type, scope, policy trigger, plan, and correlation ID.

---

## 34. Advanced KPIs

Ariyo should track:

- Approval Request Volume
- Approval Completion Rate
- Approval Rejection Rate
- Approval SLA Breach Rate
- Average Approval Time by Risk Tier
- Average Approval Time by Action Type
- Evidence Request Rate
- Self-Approval Block Rate
- Delegation Rate
- Escalation Rate
- Policy-Triggered Approval Rate
- Auto-Approval Rate
- Post-Approval Incident Rate
- Approval-to-Execution Failure Rate
- Approval Fatigue Signal
- Approval Overdue Backlog
- High-Risk Approval Ratio
- Approval Evidence Completeness Score
- Approval Audit Export Rate
- Conditional Approval Compliance Rate

---

## 35. Security Requirements

Approval workflows must:

- enforce role-based access;
- prevent unauthorized approver assignment;
- prevent requester self-approval where disallowed;
- log all decisions;
- protect evidence attachments;
- redact sensitive evidence where required;
- verify approver identity;
- support session freshness for critical approval;
- support MFA challenge for high-risk actions;
- prevent replay of old approval tokens;
- block stale approvals.

---

## 36. Privacy Requirements

Approval evidence may contain sensitive data.

Ariyo must:

- minimize evidence exposure;
- limit evidence access to relevant approvers;
- support redacted previews;
- avoid unnecessary personal data in notifications;
- retain evidence according to policy;
- support deletion/retention workflows where legally allowed;
- log evidence access.

---

## 37. Compliance Requirements

Approval workflows must support:

- audit trails;
- evidence packages;
- control mapping;
- compliance exceptions;
- approval retention policies;
- export for audits;
- customer-specific governance controls;
- legal/security/procurement review;
- data residency exceptions;
- AI risk governance review.

---

## 38. AI Approval Assistant

The AI Approval Assistant may help reviewers and admins by:

- summarizing approval requests;
- identifying missing evidence;
- comparing requested action to policy;
- highlighting risk changes;
- drafting approval conditions;
- detecting unusual routing;
- preparing audit summaries;
- recommending escalation.

It must not:

- fabricate evidence;
- approve critical requests autonomously;
- hide risks;
- bypass reviewers;
- modify approval history;
- delete audit records;
- pressure approvers;
- make legal conclusions as final authority.

---

## 39. Testing Requirements

Approval workflows must be tested for:

- correct routing;
- role mapping;
- policy trigger accuracy;
- SLA behavior;
- escalation behavior;
- delegation restrictions;
- self-approval blocking;
- evidence requirements;
- approval expiration;
- execution gating;
- rollback behavior;
- notification delivery;
- audit completeness;
- permission boundaries;
- race conditions;
- duplicate submissions;
- stale approval execution.

---

## 40. Failure Modes

Ariyo must handle:

- approver unavailable;
- approver deprovisioned;
- requester deprovisioned;
- target resource deleted;
- policy changed mid-approval;
- evidence expired;
- vendor suspended;
- workspace archived;
- billing state changed;
- dependency became invalid;
- SLA missed;
- approval loop misconfiguration;
- duplicate approval requests;
- conflicting approvals.

---

## 41. Forbidden Patterns

Ariyo must not:

- allow high-risk self-approval by default;
- approve without showing impact;
- execute stale approvals;
- hide policy triggers;
- allow bulk approval for critical actions;
- treat approval comments as enforceable conditions unless modeled;
- allow indefinite delegation;
- skip audit records;
- allow deleted users to remain required approvers without fallback;
- let AI approve critical actions without explicit policy;
- allow approval routing to be changed silently;
- approve policy-prohibited actions;
- hide cost, data, or security impact;
- use vague approval labels;
- make approval evidence globally visible.

---

## 42. Golden Rule

Every enterprise approval in Ariyo must answer one question clearly:

**Who accepted which risk, based on what evidence, under which policy, for which action, at what time, with what consequences?**

If Ariyo cannot answer that question later, the approval workflow is not enterprise-ready.
