# Ariyo Human Review & Governance Skill

Version: 1.0.0  
Product: Ariyo  
Purpose: Define the human oversight, approval, escalation, accountability, and governance model for Ariyo AI employees.  
Audience: Codex agents, AI-assisted development tools, product designers, backend engineers, frontend engineers, AI engineers, operations teams, and product leadership.  
Priority: Non-negotiable for any AI employee that can produce user-facing output, trigger workflows, use tools, access business knowledge, affect customers, affect billing, change permissions, or perform business actions.

Dependencies:

- product-strategy.md
- domain-model.md
- ai-employee-architecture.md
- knowledge-rag.md
- workflow-automation.md
- ai-safety-evaluation.md
- prompt-tool-orchestration.md
- backend-architecture.md
- api-contracts.md
- frontend-design.md
- frontend-components.md
- frontend-copywriting.md
- frontend-state-data.md
- frontend-forms-validation.md
- frontend-testing.md
- deployment-ops.md

If conflicts exist:

- product-strategy.md wins for product positioning and value.
- domain-model.md wins for entity names, lifecycle, ownership, and source of truth.
- ai-employee-architecture.md wins for AI employee role, scope, lifecycle, autonomy, and responsibility.
- ai-safety-evaluation.md wins for safety gates, evaluation, risk scoring, and model behavior rules.
- workflow-automation.md wins for workflow execution, triggers, actions, and automation lifecycle.
- prompt-tool-orchestration.md wins for prompt, tool, retrieval, confidence, and orchestration behavior.
- backend-architecture.md wins for backend implementation boundaries and durable state.
- api-contracts.md wins for API shape, async jobs, errors, idempotency, and frontend-safe responses.
- frontend-copywriting.md wins for user-facing language.
- human-review-governance.md wins for human approval, review queues, escalation, override, accountable decisions, and governance controls.

---

# Core Contract

Human review is not a weakness in Ariyo.

Human review is the trust layer that lets AI employees operate safely in real businesses.

Ariyo must make it clear when an AI employee can act automatically, when it must ask for review, who can approve, what exactly is being approved, what changed after review, what action was taken, and how the decision can be audited later.

An AI employee may generate suggestions.

Ariyo must decide whether those suggestions are safe to send, safe to execute, safe to automate, or require human review.

---

# Governance Philosophy

Ariyo is an AI Employee Operating System.

That means organizations do not only need AI output.

They need:

```text
control
accountability
permission boundaries
review history
escalation paths
approval workflows
clear ownership
audit trails
safe automation
trustworthy evidence
recoverability
```

Ariyo must make AI employees feel manageable, not mysterious.

Ariyo must make managers confident that the system will not act outside business rules, role boundaries, or customer expectations.

---

# Human Review Is Product Infrastructure

Human review must be treated as a first-class product system.

It is not:

```text
a temporary manual workaround
a comment box
a generic approve button
a moderation queue only
a customer support inbox clone
a replacement for safety architecture
a place where all uncertainty is dumped without context
```

It is:

```text
a governed decision surface
a risk control system
a quality improvement loop
a training signal source
a trust-building mechanism
a policy enforcement layer
an audit and accountability record
an autonomy upgrade prerequisite
```

---

# Review Scope

Human review may apply to:

```text
AI-generated customer replies
AI-generated internal drafts
AI-proposed workflow actions
AI-proposed tool calls
AI-proposed knowledge updates
AI-proposed escalation decisions
AI-proposed billing-related responses
AI-proposed permission-sensitive actions
AI-proposed integration actions
AI-generated summaries
AI-generated recommendations
AI-generated sales responses
AI-generated support responses
AI-generated operational decisions
```

Human review is especially important when output or actions affect external customers, money, permissions, legal/compliance posture, confidential data, or irreversible business state.

---

# Review Modes

Ariyo must support explicit review modes.

Recommended review modes:

```text
manual_only
review_required
review_if_uncertain
auto_with_audit
auto_with_sampling
auto_allowed
blocked
```

Definitions:

```text
manual_only:
AI employee may draft or suggest only. Human must perform the final action manually.

review_required:
AI employee may prepare an action or response, but human approval is required before execution.

review_if_uncertain:
AI employee may act automatically only when confidence, grounding, permission, and risk gates pass. Otherwise route to review.

auto_with_audit:
AI employee may act automatically, but every action is recorded and reviewable afterward.

auto_with_sampling:
AI employee may act automatically, but a percentage or rule-based sample is routed to human review for quality monitoring.

auto_allowed:
AI employee may act automatically inside approved role, tool, knowledge, and workflow boundaries.

blocked:
AI employee may not act or respond for this case.
```

Do not use vague modes such as:

```text
auto
manual
smart
safe
advanced
```

unless mapped internally to explicit governed states.

---

# Risk-Based Review Rule

Review requirements must be based on risk.

Risk signals include:

```text
customer-facing output
financial impact
permission impact
legal/compliance risk
health/safety-sensitive content
confidential business data
low retrieval confidence
missing business context
conflicting knowledge sources
outdated knowledge
prompt injection suspicion
tool call side effect
workflow publish action
deployment action
automatic reply mode
integration disconnect
member or role changes
billing changes
unusual AI cost spike
high customer sentiment risk
new employee template version
new organization setup
```

Higher risk must result in stricter review.

Do not allow a low-confidence or high-risk AI action to proceed automatically simply because the output sounds fluent.

---

# Risk Levels

Ariyo should classify review items by risk.

Recommended risk levels:

```text
low
medium
high
critical
```

Low risk examples:

```text
internal summary
non-sensitive draft
safe categorization
UI preference recommendation
basic FAQ answer with high confidence and citations
```

Medium risk examples:

```text
customer-facing support draft
sales qualification answer
workflow recommendation
knowledge-source-based answer with sufficient grounding
minor integration action with reversible outcome
```

High risk examples:

```text
automatic customer reply
refund-related answer
pricing exception discussion
workflow publish
deployment activation
disconnect integration
member invite
permission-sensitive response
conflicting source answer
low confidence answer
```

Critical risk examples:

```text
billing change
role or permission change
delete workflow
remove member
legal/compliance claim
security-related instruction
irreversible customer-facing action
external tool call with financial or access impact
suspected prompt injection
suspected data leakage
```

Critical items must not auto-execute without explicit policy approval.

---

# Review State Model

Review items must use explicit states.

Required states:

```text
created
queued
assigned
in_review
approved
edited_and_approved
rejected
escalated
expired
cancelled
executed
execution_failed
archived
```

Definitions:

```text
created:
A review item has been created by an AI employee, workflow, or user action.

queued:
The item is waiting for an eligible reviewer.

assigned:
The item has been assigned to a reviewer or team.

in_review:
A reviewer is actively reviewing the item.

approved:
The item was approved without material change.

edited_and_approved:
The reviewer changed the content or action before approval.

rejected:
The reviewer decided the item should not be sent or executed.

escalated:
The item requires a higher authority, different team, or specialist.

expired:
The item was not reviewed within its allowed time window.

cancelled:
The underlying workflow, conversation, or action was cancelled.

executed:
The approved action was successfully performed.

execution_failed:
Approval happened, but execution failed.

archived:
The item is no longer active but remains available for audit where required.
```

Do not collapse review status into a generic boolean.

Forbidden:

```text
isApproved: boolean
reviewed: boolean
done: boolean
status: string
```

Use explicit finite states.

---

# Review Item Types

Review item type must be explicit.

Recommended types:

```text
message_reply
message_draft
tool_call
workflow_action
workflow_publish
employee_deployment
automation_enablement
knowledge_update
business_context_update
integration_action
billing_related_response
permission_sensitive_action
safety_escalation
quality_sample
incident_review
```

Each review type must define:

```text
who can review
what is being reviewed
what actions are available
what evidence is required
what happens after approval
what happens after rejection
what must be audited
what timeout applies
what risk rules apply
```

---

# Review Item Data Contract

A review item must include enough context for a human to make a good decision.

Minimum fields:

```text
reviewItemId
organizationId
workspaceId if applicable
employeeId
employeeRole
reviewType
riskLevel
reviewState
createdAt
createdBy
sourceTrigger
customerOrConversationContext if applicable
proposedOutput or proposedAction
groundingEvidence
confidenceSignals
policySignals
permissionContext
toolCallContext if applicable
workflowContext if applicable
businessContextVersion
knowledgeSourceVersions
assignedReviewerId if assigned
reviewDueAt if applicable
decisionHistory
executionState if applicable
```

A reviewer must never be asked to approve something without seeing what matters.

---

# Reviewer Context Rule

The review screen must show:

```text
what the AI employee wants to do
why it wants to do it
who or what will be affected
what knowledge was used
what confidence level exists
what risks were detected
which policy or rule triggered review
what alternatives are available
what happens if approved
what happens if rejected
```

Bad review UI:

```text
Approve this response?
```

Good review UI:

```text
Review customer reply

Customer asked about refund eligibility.
Customer Support Employee drafted a reply using Refund Policy v3 and Order Policy v2.
Risk: Medium — customer-facing policy answer.
Confidence: High.
Action after approval: Send reply in WhatsApp conversation.
```

---

# Evidence Requirement Rule

Review items must include evidence when generated from knowledge or context.

Evidence may include:

```text
retrieved knowledge chunks
source titles
source timestamps
business context version
policy version
conversation excerpts
workflow rule that triggered action
tool call input/output
confidence scores
safety gate result
similar historical decisions when approved
```

Do not ask reviewers to approve AI output without grounding evidence.

---

# Grounding Display Rule

When evidence comes from RAG, show product-friendly source context.

Show:

```text
source name
source type
last synced
relevant excerpt
confidence or match strength when appropriate
source status
```

Avoid exposing technical backend terms in reviewer UI:

```text
embedding
vector
chunk id
cosine similarity
index namespace
```

Technical metadata may exist in audit logs and internal diagnostics.

Reviewer UI should use business language.

---

# Confidence Signals Rule

Review must include confidence signals where relevant.

Confidence signals may include:

```text
retrieval confidence
policy confidence
tool validation result
business context completeness
source freshness
contradiction detection
model uncertainty
risk score
previous similar outcome quality
```

Do not present confidence as absolute truth.

Use confidence to support decisions, not replace them.

---

# Review Actions

Allowed review actions must be type-specific.

Common actions:

```text
approve
edit_and_approve
reject
request_changes
escalate
assign_to
comment
pause_employee
disable_automation
open_source_context
open_conversation
view_trace
```

For message review:

```text
approve_and_send
edit_and_send
reject_reply
escalate_to_human
save_as_draft
```

For tool call review:

```text
approve_tool_call
reject_tool_call
edit_tool_input_and_approve
escalate_tool_call
```

For workflow publish review:

```text
approve_publish
reject_publish
request_workflow_changes
```

For high-risk actions, generic approve/reject is not enough.

---

# Edit and Approve Rule

Reviewers may need to edit AI output before approval.

When edited, Ariyo must record:

```text
original AI output
human-edited output
reviewer identity
edit timestamp
material edit flag if applicable
reason when required
final approved output
```

Edited output becomes a quality signal.

Do not overwrite the original AI output without retaining it for audit and evaluation.

---

# Rejection Rule

Rejection must be meaningful.

When rejecting, reviewer should choose or provide a reason.

Recommended rejection reasons:

```text
incorrect
unsupported_by_knowledge
unsafe
out_of_scope
wrong_tone
missing_context
policy_violation
permission_issue
customer_sensitive
duplicate
not_needed
needs_specialist
other
```

Rejection reasons should feed evaluation and improvement loops.

Do not make rejection a silent dead end.

---

# Escalation Rule

Escalation is required when the reviewer cannot safely decide.

Escalation triggers:

```text
legal/compliance uncertainty
refund exception
security concern
high-value customer
angry customer
conflicting policies
missing business context
low confidence
suspected prompt injection
sensitive data exposure risk
permission ambiguity
billing impact
workflow risk
```

Escalation must record:

```text
who escalated
why escalated
who receives escalation
priority
deadline if any
context snapshot
current proposed action
```

Escalation is not failure.

Escalation is safe governance.

---

# Assignment Rule

Review items may be assigned automatically or manually.

Assignment can depend on:

```text
review type
risk level
employee role
channel
customer segment
language
business unit
reviewer availability
permission level
expertise
SLA
```

Do not assign high-risk review items to users without permission.

---

# Reviewer Eligibility Rule

A reviewer must be eligible for the review item.

Eligibility may depend on:

```text
organization membership
workspace membership
role
permission
team
billing access
knowledge source access
conversation access
workflow ownership
security clearance
language capability
```

Frontend must not rely on hiding review items as the only enforcement.

Backend must enforce reviewer eligibility.

---

# Review Permissions

Recommended permissions:

```text
review_ai_outputs
approve_ai_outputs
edit_ai_outputs
reject_ai_outputs
escalate_ai_outputs
review_tool_calls
approve_tool_calls
review_workflow_publish
approve_workflow_publish
review_employee_deployment
approve_employee_deployment
manage_review_queue
assign_review_items
view_review_audit_log
override_review_policy
manage_review_policy
```

Do not use a single broad permission such as:

```text
admin_can_do_everything
```

for review governance.

---

# Approval Authority Rule

Approval authority must match risk.

Examples:

```text
Low risk:
Reviewer or member with review permission may approve.

Medium risk:
Team lead, manager, or assigned reviewer may approve.

High risk:
Admin, manager, or domain owner may approve.

Critical risk:
Owner/admin or explicitly authorized reviewer must approve. In some cases dual approval may be required.
```

Do not allow junior or unrelated reviewers to approve critical actions.

---

# Dual Approval Rule

Some actions may require two approvals.

Recommended candidates:

```text
billing plan change
permission role change
workflow publish with external side effects
enable full automatic replies for high-risk employee
connect sensitive integration
delete organization-level resource
bulk customer action
```

Dual approval must record both decisions separately.

Do not fake dual approval through one user clicking twice.

---

# Override Rule

Overrides are dangerous and must be governed.

An override may allow an authorized user to bypass review policy.

Override must require:

```text
override permission
explicit reason
risk acknowledgement
audit log
optional expiration
optional second approval for critical overrides
```

Forbidden:

```text
silent override
frontend-only override
override by URL param
override by local state
override without audit log
override without reason for high-risk actions
```

---

# Review Policy Rule

Review policy must be explicit and versioned.

A review policy may define:

```text
employee-level review mode
workflow-level review requirements
channel-level review requirements
risk thresholds
confidence thresholds
auto-approval rules
sampling rules
escalation rules
reviewer roles
SLA and timeout rules
critical action rules
dual approval rules
override rules
```

Policy changes must be auditable.

Do not hide policy in prompts only.

---

# Policy Source of Truth

Review policy must be owned by backend/domain model.

Frontend may display and edit policy through typed APIs.

AI prompts may reference policy.

The model must not be the source of truth for governance.

Forbidden:

```text
prompt-only review policy
frontend-only review policy
localStorage review policy
hardcoded review rules in UI components
```

---

# Review Policy Versioning

Every review decision must know which policy version applied.

Store:

```text
reviewPolicyVersionId
employeeVersionId
workflowVersionId if applicable
businessContextVersionId if applicable
knowledgeIndexVersionId if applicable
promptVersionId if applicable
```

This makes later audits and evaluations meaningful.

---

# Review Queue Requirements

Ariyo review queue must support:

```text
filter by review type
filter by risk level
filter by employee
filter by status
filter by assignee
filter by channel
filter by due date
filter by customer/account when applicable
sort by urgency
sort by risk
sort by created time
bulk selection only for safe low-risk review types
```

Review queue must not feel like a generic task list.

It is a safety and trust surface.

---

# Review Queue Item Card

Each queue item should show:

```text
review type
employee name
risk level
status
short summary
channel/source
affected customer or object when allowed
due time or SLA state
assignee
confidence signal
primary action
```

Do not show raw AI output without context in a crowded queue if it may leak sensitive information.

Use safe summaries.

---

# Review Detail Page

A review detail page must include:

```text
review item title
status and risk
AI employee identity
proposed action/output
context timeline
grounding evidence
policy reason
confidence signals
review actions
comment history
decision history
execution history
related conversation/workflow/tool call
safe-state information
```

High-risk review detail pages must make consequences explicit.

---

# Review Comments Rule

Reviewers may comment or request changes.

Comments must be:

```text
author-attributed
timestamped
visible to eligible reviewers
included in audit trail when relevant
not used as hidden execution instructions unless explicitly converted into structured changes
```

Do not let free-text comments become unvalidated prompts for AI action.

---

# Request Changes Rule

When a reviewer requests changes, Ariyo must define whether:

```text
the AI employee regenerates output
the reviewer edits manually
the item returns to queue
the item stays assigned
the review deadline changes
new evidence is required
```

Change requests should be structured when possible.

---

# AI Regeneration Rule

If AI output is regenerated during review, keep versions.

Record:

```text
original output
regeneration prompt or reason
new output
model/version
retrieval evidence
risk/confidence changes
reviewer who requested regeneration
```

Do not overwrite prior generated output.

---

# Review SLA Rule

Some review items require time limits.

Examples:

```text
customer support reply draft
sales lead response
incident escalation
workflow action waiting for approval
customer complaint
billing-related inquiry
```

SLA states:

```text
on_time
approaching_due
overdue
expired
```

Overdue behavior must be defined.

Do not let high-impact review items disappear silently.

---

# Expiration Rule

Review items may expire when action is no longer safe or useful.

Examples:

```text
customer conversation moved on
workflow context changed
source data updated
permission changed
organization switched policy
employee paused
action window closed
```

Expired items must not be approved without revalidation.

---

# Revalidation Before Execution Rule

Approval does not guarantee execution is still safe.

Before executing an approved item, Ariyo must revalidate:

```text
review item state
reviewer permission
organization scope
employee state
workflow state
source freshness when required
conversation still active
tool permission
billing entitlement if applicable
policy still valid if necessary
idempotency key
```

Do not execute stale approvals blindly.

---

# Approval Execution Rule

Approving and executing may be separate states.

Approval means human agreed.

Execution means system successfully performed the action.

Ariyo must handle:

```text
approved but execution pending
approved but execution failed
approved but execution cancelled
approved but entity changed
approved but permission revoked
approved but tool unavailable
```

Do not show success until execution is confirmed when execution matters.

---

# Execution Failure Rule

If execution fails after approval, show safe state.

Examples:

```text
Reply was approved, but could not be sent. The conversation was not updated.

Tool call was approved, but execution failed. No changes were made.

Workflow publish was approved, but publishing failed. The previous workflow version is still active.
```

Execution failure must be recoverable and auditable.

---

# Audit Trail Rule

Human review must produce durable audit records.

Audit log should include:

```text
review item created
policy/risk reason
assignment changes
comments
edits
approval
rejection
escalation
override
execution attempt
execution result
policy version
reviewer identity
timestamps
source evidence references
model/prompt/tool versions when relevant
```

Audit records must not be editable by normal users.

---

# Audit Privacy Rule

Audit logs may contain sensitive context.

Access must be permission-controlled.

Do not expose:

```text
raw customer data to unauthorized reviewers
private source excerpts to unauthorized users
internal traces to ordinary users
tokens or secrets
hidden prompt text if not allowed
provider raw errors
```

Auditability must not create data leakage.

---

# Accountability Rule

Every final action must be attributable.

Ariyo should distinguish:

```text
AI proposed
human approved
human edited
system executed
system failed
policy blocked
reviewer escalated
admin overrode
```

Do not blur accountability.

Bad:

```text
Ariyo sent this.
```

Better:

```text
Customer Support Employee drafted this reply. Sara approved and sent it.
```

where appropriate and permission-safe.

---

# Human Review and AI Learning Rule

Review outcomes should improve future AI behavior.

Useful signals:

```text
approval rate
edit rate
rejection rate
rejection reasons
common edit categories
confidence before approval
source quality
employee template quality
reviewer comments
review time
escalation rate
post-send outcome
customer satisfaction if available
```

Do not train or fine-tune on sensitive review data without explicit privacy and governance policy.

Use aggregated evaluation signals safely.

---

# Review Metrics

Ariyo should track review governance metrics.

Core metrics:

```text
review volume
approval rate
edit-and-approve rate
rejection rate
escalation rate
auto-action rate
human-review rate
average review time
SLA breach rate
execution failure after approval
reviewer workload
risk distribution
employee-specific review rate
workflow-specific review rate
knowledge-source-related review rate
```

Quality metrics:

```text
reviewed output success rate
post-approval complaint rate
unsafe output caught rate
incorrect answer caught rate
customer sentiment after approved response
repeat edit reason frequency
hallucination caught rate
policy violation caught rate
```

Cost metrics:

```text
AI cost per reviewed item
AI cost per approved item
human time per reviewed item
review cost per employee
review cost by risk level
automation savings after governance maturity
```

---

# Autonomy Upgrade Rule

AI employee autonomy may increase only with evidence.

Required signals:

```text
sustained high approval rate
low edit rate
low rejection rate
low escalation rate
low safety incident rate
high grounding quality
stable knowledge sources
clear business context
successful evaluation results
acceptable AI cost
reviewer confidence
```

Do not upgrade autonomy because a demo looked good.

Autonomy is earned through measured trust.

---

# Autonomy Downgrade Rule

AI employee autonomy must decrease when risk increases.

Downgrade triggers:

```text
high rejection rate
high edit rate
safety incident
prompt injection event
knowledge source outdated
business policy changed
billing issue
customer complaint spike
workflow execution failures
new integration connected
new employee version deployed
low confidence spike
unusual output behavior
```

Downgrades may include:

```text
auto_allowed → review_if_uncertain
auto_with_audit → review_required
review_if_uncertain → review_required
review_required → manual_only
any mode → blocked
```

---

# Sampling Review Rule

For mature low-risk automation, Ariyo may sample outputs for review.

Sampling rules should define:

```text
sample percentage
risk-based oversampling
new employee oversampling
new workflow oversampling
new knowledge source oversampling
customer-sensitive oversampling
randomization method
review feedback loop
minimum sample size
```

Sampling is quality monitoring, not safety replacement.

---

# Human Review and Workflow Automation

Workflows must integrate review gates.

A workflow step may require review before:

```text
sending message
calling external tool
publishing workflow
executing irreversible action
updating customer record
changing status
triggering billing-affecting action
escalating externally
```

Workflow execution state must support waiting for review.

Example states:

```text
waiting_for_review
review_approved
review_rejected
review_escalated
review_expired
```

Do not model review as an afterthought outside workflow state.

---

# Human Review and Tool Calls

Tool calls with side effects may require approval.

Tool call review must show:

```text
tool name
business action
input parameters
affected object
expected result
risk level
permission requirement
reversibility
idempotency behavior
AI reason for tool call
```

Do not ask reviewers to approve raw JSON only.

Show a human-readable business summary.

---

# Tool Call Edit Rule

If reviewers can edit tool input, validate edited input through the same schema and permission checks.

Do not let edit-and-approve bypass tool schema validation.

Do not allow editing hidden fields that create unsafe side effects.

---

# Human Review and Knowledge Updates

AI-proposed knowledge updates require governance.

Review must show:

```text
proposed knowledge change
source of suggestion
affected employee(s)
affected workflow(s)
confidence
conflicting existing knowledge
business context impact
reviewer permission requirement
```

Do not let AI silently modify organization knowledge.

---

# Human Review and Business Context

Business context changes may affect many employees.

High-impact context changes should require review or approval.

Examples:

```text
refund policy
pricing policy
support escalation rule
brand voice
forbidden claims
compliance statement
sales promise
working hours
```

Context updates must be versioned and auditable.

---

# Human Review and Customer Channels

Customer-facing channels require stricter review.

Examples:

```text
WhatsApp
email
website chat
Telegram
SMS
helpdesk reply
CRM note visible to customer
```

Review policy may vary by channel.

For example:

```text
Internal notes:
auto_with_audit may be acceptable.

Customer emails:
review_if_uncertain or review_required may be required.

WhatsApp automatic replies:
requires high confidence, approved source, active deployment, and channel policy.
```

---

# Human Review and Language

If output language differs from reviewer language, review must handle that safely.

Rules:

```text
show detected language
show translation only if approved and clearly labeled
preserve original output
avoid approving language reviewer cannot understand unless policy allows
route to language-capable reviewer when needed
```

Do not let reviewers approve high-risk content they cannot read.

---

# Human Review and Persian/RTL

For Persian and RTL contexts, review UI must:

```text
support RTL layout
show Persian copy naturally
keep email/URLs readable
avoid mixed-direction ambiguity
use Ariyo Persian terminology
preserve customer text accurately
```

Review actions must remain clear:

```text
تأیید و ارسال
ویرایش و ارسال
رد پاسخ
ارجاع به بازبین
```

---

# Review Copy Standards

Review UI copy must be specific and calm.

Good labels:

```text
Review reply
Approve and send
Edit and send
Reject reply
Escalate to manager
Approve tool call
Reject tool call
Request changes
Review workflow publish
```

Avoid:

```text
OK
Done
Submit
Proceed
Yes
No
Run
Accept
```

especially for high-risk actions.

---

# Review Empty States

Review queues need clear empty states.

Examples:

```text
No items need review.
AI employees will send safe approved actions here when review is required.

No high-risk items.
Critical actions that need approval will appear here.

No assigned reviews.
Items assigned to you will appear here.
```

Do not show a blank queue.

---

# Review Loading States

Loading states must be specific.

Good:

```text
Loading review queue
Loading review item
Saving review decision
Approving reply
Sending approved reply
Escalating review item
```

Avoid:

```text
Loading...
Processing...
AI is thinking...
```

---

# Review Error States

Review errors must include safe state.

Examples:

```text
Could not approve reply. Nothing was sent. Try again.

Could not reject item. The item is still waiting for review.

Could not load evidence. Do not approve this item until evidence is available.

Could not execute approved action. No changes were made.
```

Do not use raw backend errors.

---

# Review Notification Rule

Review notifications must avoid sensitive content when shown outside secure UI.

Safe notification:

```text
3 items need review in Customer Support Employee.
```

Risky notification:

```text
Customer John Smith asked for refund because...
```

Notification content must respect privacy and channel security.

---

# Review Assignment Notification Rule

When assigned a review item, reviewer may receive:

```text
review type
employee name
risk level
SLA status
link to secure review page
```

Do not include full customer content in email/push notification unless approved.

---

# Review Locking Rule

To avoid conflicting decisions, review items may need locking.

Lock behavior:

```text
soft lock when reviewer opens item
show who is reviewing
allow takeover with permission
release lock after inactivity
prevent duplicate execution
```

Backend must enforce final decision consistency.

---

# Concurrent Review Rule

Ariyo must handle concurrent decisions safely.

If two reviewers act at once:

```text
only one final state wins
second reviewer sees updated state
audit records both attempts if relevant
execution remains idempotent
```

Do not allow double send or duplicate tool execution.

---

# Idempotency Rule

Approval and execution endpoints must use idempotency for high-risk actions.

High-risk examples:

```text
approve_and_send
approve_tool_call
publish_workflow
approve_deployment
approve_billing_related_action
```

Duplicate clicks must not create duplicate external actions.

---

# Review API Contract Rule

Review APIs must be explicit.

Recommended endpoints:

```text
GET /api/v1/organizations/{organizationId}/review-items
GET /api/v1/organizations/{organizationId}/review-items/{reviewItemId}
POST /api/v1/organizations/{organizationId}/review-items/{reviewItemId}/approve
POST /api/v1/organizations/{organizationId}/review-items/{reviewItemId}/edit-and-approve
POST /api/v1/organizations/{organizationId}/review-items/{reviewItemId}/reject
POST /api/v1/organizations/{organizationId}/review-items/{reviewItemId}/escalate
POST /api/v1/organizations/{organizationId}/review-items/{reviewItemId}/assign
POST /api/v1/organizations/{organizationId}/review-items/{reviewItemId}/comments
GET /api/v1/organizations/{organizationId}/review-policies
PATCH /api/v1/organizations/{organizationId}/review-policies/{reviewPolicyId}
```

APIs must return frontend-safe, permission-filtered data.

---

# Review Event Taxonomy

Analytics events should be privacy-safe and product-useful.

Recommended events:

```text
review_item_created
review_item_assigned
review_item_opened
review_item_approved
review_item_edited_and_approved
review_item_rejected
review_item_escalated
review_item_expired
review_item_executed
review_item_execution_failed
review_policy_updated
review_override_used
autonomy_downgraded
autonomy_upgraded
```

Do not send sensitive full content in analytics payloads.

---

# Review Event Properties

Safe properties may include:

```text
organizationId hashed/internal
workspaceId
employeeId
employeeRole
reviewType
riskLevel
reviewState
reviewMode
channelType
workflowId if relevant
knowledgeSourceType if relevant
confidenceBand
wasEdited
rejectionReason
escalationReason
reviewDurationMs
slaState
executionResult
```

Do not include:

```text
full customer message
full AI output
raw source text
secrets
tokens
billing details
private file content
```

---

# Incident Review Rule

Safety incidents may create incident review items.

Incident review must capture:

```text
what happened
which employee was involved
which workflow or channel was involved
customer impact
risk level
root cause category
containment action
review decision
rollback action if any
follow-up tasks
```

Incident review items should be linked to incident records from deployment-ops.md.

---

# Kill Switch Rule

Governance must support emergency stop.

Authorized users or operations systems may need to:

```text
pause an AI employee
pause automatic replies
pause a workflow
pause a tool
pause an integration
force review_required mode
block a channel
```

Kill switch usage must be audited.

---

# Pause Employee Rule

Pausing an employee should:

```text
stop new automatic actions
preserve review queue
preserve audit history
show clear state to users
allow manual review when safe
prevent pending unsafe executions
```

Do not delete history when pausing.

---

# Governance UI Requirements

Frontend governance UI must be:

```text
clear
fast
accessible
permission-aware
mobile-usable for urgent approvals when appropriate
safe against accidental approvals
honest about execution state
specific in copy
connected to evidence
```

Review UI must never be optimized only for speed.

It must optimize for correct decisions.

---

# Approval Button Safety

Approval buttons for high-risk items must be explicit.

Good:

```text
Approve and send reply
Approve tool call
Publish workflow
Approve deployment
```

Bad:

```text
Approve
OK
Yes
Done
```

When consequence is significant, include object/action name.

---

# Destructive Review Action Rule

If review action rejects, cancels, deletes, disconnects, or disables something important, use clear copy and confirmation where needed.

Example:

```text
Reject workflow publish

This keeps the current workflow version active.
```

Do not use vague destructive actions.

---

# Review Accessibility Rule

Review governance must be accessible.

Requirements:

```text
review queue keyboard navigable
status and risk not color-only
buttons have explicit names
modal confirmations have titles/descriptions
focus management works
errors are announced
review evidence is readable
comments are form-accessible
mobile touch targets are safe
```

An inaccessible approval flow is unsafe.

---

# Review Security Rule

Review governance must protect sensitive data.

Rules:

```text
review items are organization-scoped
reviewer eligibility enforced by backend
sensitive evidence permission-filtered
raw prompt/tool traces protected
review exports permission-controlled
audit logs immutable for normal users
notifications privacy-safe
analytics sanitized
```

Do not leak customer or business data through review queues.

---

# Review Retention Rule

Review records may have retention policies.

Retention may vary by:

```text
organization plan
compliance needs
review type
channel
customer data sensitivity
billing/legal requirements
```

Do not delete audit records casually.

Do not retain sensitive data forever without policy.

---

# Review Export Rule

If review logs can be exported, export must be permission-controlled.

Export must define:

```text
who can export
what fields are included
redaction behavior
date range
review types
format
sensitive data handling
audit of export action
```

---

# Governance and Billing

Some governance features may be plan-gated.

Examples:

```text
advanced review policies
dual approval
audit exports
custom approval routing
longer retention
quality sampling dashboards
compliance reports
```

Billing limits must never weaken core safety.

Even lower plans must remain safe.

---

# Governance and Enterprise Readiness

Enterprise customers may require:

```text
role-based review routing
dual approval
SAML/SSO reviewer identity
full audit export
custom retention policies
compliance reports
approval SLAs
restricted review evidence
legal hold
reviewer workload reports
```

Design governance so these can be added without rewriting core review state.

---

# Testing Requirements

Review governance must be tested.

Test:

```text
review item states
approve flow
edit-and-approve flow
reject flow
escalate flow
assignment permissions
reviewer eligibility
execution after approval
execution failure after approval
stale approval revalidation
duplicate approval prevention
risk-based routing
policy version recording
review queue filters
accessibility names
error safe-state copy
```

High-risk review flows must not be happy-path-only.

---

# Backend Requirements

Backend must enforce:

```text
organization scoping
reviewer permissions
state transitions
idempotency
policy versioning
audit logging
execution revalidation
concurrency control
SLA expiration
assignment rules
privacy filtering
```

Frontend can improve UX.

Backend must enforce safety.

---

# Frontend Requirements

Frontend must:

```text
show review status clearly
show risk and evidence
show explicit actions
avoid generic approvals
prevent duplicate clicks
show pending states
handle stale state
handle permission denied
handle execution failure
support filters and queue states
use Ariyo copy standards
avoid raw backend terms
```

Do not make review governance look like a generic admin table.

---

# AI Employee Requirements

AI employees must know their review mode.

They must output review metadata when needed:

```text
why review is required
risk reason
confidence
used sources
proposed action
alternative safe response
escalation reason if needed
```

The model may suggest.

Ariyo policy decides.

---

# Prompt and Tool Orchestration Requirements

Orchestration must create review items when gates require it.

Review triggers may come from:

```text
risk score
confidence threshold
policy rule
tool permission
retrieval weakness
prompt injection suspicion
workflow configuration
automation mode
channel policy
business context rule
```

Do not rely on the model to voluntarily ask for review.

---

# Knowledge and RAG Requirements

Review items based on knowledge must include source evidence.

If source evidence is missing or stale, review item should warn:

```text
This answer uses outdated source information.

This answer has limited source support.

This answer could not be grounded in connected knowledge.
```

Reviewers must be able to reject or escalate when knowledge is insufficient.

---

# Workflow Requirements

Workflow automation must represent review wait states explicitly.

Do not block workflow invisibly.

Show:

```text
waiting for review
review assigned
review approved
review rejected
review expired
execution failed after approval
```

Workflow history must include review decisions.

---

# Forbidden Governance Patterns

Never ship:

```text
AI auto-sending high-risk customer replies without policy
review status as boolean
approval without audit log
approval without reviewer identity
approval without policy version
approval without source context where knowledge is used
execution without revalidation
stale approval execution
silent override
frontend-only permissions
review queue that leaks sensitive data
review item without risk level
review item without proposed action/output
review item without evidence when evidence is required
generic OK/Yes approvals
rejection without reason for high-risk items
edit-and-approve that overwrites original AI output
review comments used as unvalidated prompts
critical actions without dual approval option
review policy hidden only in prompt
review analytics containing full customer content
autonomy upgrade without evidence
autonomy downgrade ignored after safety incident
```

---

# Governance Review Checklist

Before shipping human review features, verify:

```text
Is review mode explicit?
Is risk level explicit?
Is review item type explicit?
Are eligible reviewers enforced by backend?
Does reviewer see proposed action/output?
Does reviewer see enough context?
Does reviewer see grounding evidence when required?
Does reviewer see confidence and risk signals?
Are approval actions specific?
Are rejection reasons captured?
Is escalation supported?
Are edits preserved separately from original AI output?
Is policy version recorded?
Is audit trail durable?
Is execution separate from approval where needed?
Is execution revalidated?
Are duplicate approvals prevented?
Are stale approvals blocked?
Are sensitive details permission-filtered?
Are notifications privacy-safe?
Are errors safe and recoverable?
Are review analytics privacy-safe?
Are accessibility requirements met?
Are tests included for critical paths?
```

If any answer is no, governance is not production-ready.

---

# Governance Decision Tree

Ask:

### Is the AI output customer-facing?

Require review unless the employee, channel, knowledge, confidence, and policy allow automation.

### Does the action change business state?

Apply risk scoring and consider review.

### Does the action affect billing, permissions, deletion, deployment, or integrations?

Require strict review or explicit authorized approval.

### Is confidence low or evidence weak?

Route to review.

### Is knowledge stale or conflicting?

Route to review or escalate.

### Is prompt injection suspected?

Block or escalate.

### Is reviewer authorized?

Allow decision only if backend confirms eligibility.

### Was approval stale?

Revalidate before execution.

### Did execution fail?

Show safe-state error and keep audit record.

### Is autonomy being increased?

Require sustained evidence.

---

# Ariyo Human Review Golden Rule

AI employees earn autonomy through reviewed, measured, safe behavior.

---

# Senior Governance Rule

Do not build review as a button.

Build review as an accountable decision system.

---

# Final Rule

Ariyo human review governance is production-ready only when every reviewable AI output or action is risk-classified, policy-driven, evidence-backed, permission-safe, reviewer-actionable, auditable, revalidated before execution, measurable after decision, and capable of improving future AI employee quality without compromising safety, privacy, or organizational control.
