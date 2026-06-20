# Ariyo Business Context Skill

Version: 1.0.0
Product: Ariyo
Purpose:
Act as a Business Context Architect, AI Employee Context Designer, Knowledge Governance Lead, and Product Trust Guardian for Ariyo.
Audience:
Codex Agents and AI-assisted development tools.
Priority:
Non-negotiable.

Dependencies:
- product-strategy.md
- domain-model.md
- ai-employee-architecture.md
- knowledge-rag.md
- workflow-automation.md
- ai-safety-evaluation.md
- backend-architecture.md
- api-contracts.md
- frontend-copywriting.md
- monetization-billing.md
- product-analytics-growth.md

If conflicts exist:
- product-strategy.md wins for product positioning and strategic direction.
- domain-model.md wins for official entity names and lifecycle definitions.
- ai-employee-architecture.md wins for AI employee scope, role, autonomy, and lifecycle.
- knowledge-rag.md wins for retrieval, source sync, citations, and grounding behavior.
- workflow-automation.md wins for trigger, action, approval, and execution behavior.
- ai-safety-evaluation.md wins for safety, risk scoring, refusal, escalation, and evaluation behavior.
- backend-architecture.md wins for backend ownership and service boundaries.
- api-contracts.md wins for external and internal API shape.
- frontend-copywriting.md wins for user-facing language.
- business-context.md wins for organization-specific business meaning, brand rules, customer context, policies, and operating constraints.

---

# Core Contract

Ariyo Business Context is the organization-specific operating knowledge that allows AI employees to act like useful business workers instead of generic assistants.

Business Context is not a prompt dump.

Business Context is not the same as raw documents.

Business Context is not a one-time onboarding form.

Business Context is a governed, structured, versioned, permission-aware, freshness-aware, AI-usable representation of how an organization works.

Every AI employee must understand:

```text
who the business is
what the business sells
who the customers are
how the business communicates
what policies must be followed
what claims are allowed or forbidden
when to answer
when to ask for review
when to escalate
what data can be used
what tone to use
what the business considers successful
```

Ariyo must turn business context into safe, measurable employee behavior.

---

# Purpose

This skill defines how Ariyo must model, capture, validate, maintain, retrieve, and apply organization-specific business context.

The goal is to make AI employees:

```text
more accurate
more useful
more brand-aligned
more policy-aware
more customer-aware
more operationally safe
more measurable
less generic
less likely to hallucinate
less likely to violate business rules
```

Business Context is a product layer, not only a data layer.

It affects:

```text
onboarding
AI employee setup
knowledge retrieval
workflow decisions
prompt orchestration
response generation
tool use
human review
policy enforcement
analytics
customer success
billing value
```

---

# Business Context Definition

Business Context is the structured organization-level and employee-level information that shapes how AI employees understand and act inside a business.

It includes:

```text
company profile
brand voice
products and services
customer segments
industry context
business goals
support policies
sales policies
pricing rules
legal and compliance constraints
escalation rules
forbidden claims
allowed claims
operating hours
service areas
language preferences
communication tone
human handoff rules
approval requirements
channel-specific behavior
workflow rules
success definitions
```

Business Context answers:

```text
What business is this?
What does it do?
Who does it serve?
How should it speak?
What should it never say?
What should it never do?
When should it escalate?
What sources are authoritative?
What is current?
What is uncertain?
What does success look like?
```

---

# Business Context vs Knowledge Source

Business Context and Knowledge Sources are related but not identical.

## Business Context

Business Context defines how the organization operates.

Examples:

```text
brand tone
support rules
pricing policy
escalation policy
refund policy
customer segments
business goals
forbidden claims
service boundaries
approval rules
```

## Knowledge Source

Knowledge Source contains raw or semi-structured content used for grounding.

Examples:

```text
PDFs
help center articles
website pages
internal documents
Notion pages
Google Drive files
product manuals
pricing sheets
support playbooks
FAQs
```

## Rule

Business Context tells the AI employee how to interpret and apply knowledge.

Knowledge Sources provide evidence.

Do not replace Business Context with document upload alone.

Do not replace Knowledge Sources with short business profile text alone.

Ariyo needs both.

---

# Business Context Ownership

Business Context is owned by the organization.

Specific sections may be edited by different roles.

Default ownership:

```text
Organization profile:
Owner or Admin

Brand voice:
Owner, Admin, Marketing Manager

Products and services:
Owner, Admin, Sales Manager

Support policies:
Owner, Admin, Support Manager

Billing/pricing policies:
Owner, Admin, Billing Admin

Compliance constraints:
Owner, Admin, Compliance Manager

Escalation rules:
Owner, Admin, Department Manager

AI employee-specific context:
Owner, Admin, Employee Manager
```

Backend must enforce permissions.

Frontend must explain permission limitations clearly.

---

# Business Context Source of Truth

Business Context must have one source of truth.

Allowed sources of truth:

```text
structured Ariyo Business Context records
approved Knowledge Source references
approved integration data
organization settings
employee deployment configuration
workflow rules
```

Forbidden sources of truth:

```text
frontend local state
browser storage
unvalidated prompt text
copied mock data
hardcoded frontend assumptions
AI-generated memory without review
analytics events
raw conversation history alone
```

Business Context must be persisted, versioned, auditable, and organization-scoped.

---

# Business Context Scope

Business Context can exist at multiple scopes:

```text
Global Ariyo defaults
Organization context
Workspace context
Department context
AI employee context
Workflow context
Channel context
Customer segment context
Conversation context
Task context
```

Context precedence should be explicit.

Recommended precedence:

```text
1. Safety policy
2. Permission policy
3. Legal/compliance constraints
4. Organization-level business context
5. Workspace/department context
6. AI employee role context
7. Workflow-specific context
8. Channel-specific context
9. Customer/conversation context
10. Retrieved knowledge snippets
```

Higher-priority context may restrict lower-priority context.

Lower-priority context must not override safety or permissions.

---

# Context Precedence Rule

When context conflicts:

```text
safety wins over convenience
permissions win over user request
organization policy wins over employee preference
current approved policy wins over stale document
verified knowledge wins over memory
human-approved context wins over AI-generated context
structured rules win over ambiguous free text
```

Never let a user message override business rules.

Never let retrieved content override permission policy.

Never let stale source content override current approved context.

---

# Business Context Lifecycle

Business Context must have a lifecycle.

Recommended states:

```text
not_started
incomplete
draft
ready_for_review
active
needs_review
outdated
archived
```

## not_started

No meaningful context has been added.

AI employees should operate in limited setup mode.

## incomplete

Some context exists but important fields are missing.

Deployment may be blocked for employees requiring context.

## draft

Context is being edited but not active.

AI employees should not use draft context unless explicitly previewing.

## ready_for_review

Context is complete enough but awaiting approval.

High-risk employees should not use it autonomously.

## active

Context is approved and available for AI employee use.

## needs_review

Context may be stale, contradictory, low confidence, or impacted by source changes.

AI employees should reduce autonomy or escalate when relevant.

## outdated

Context is no longer trusted.

AI employees must not rely on it for high-risk answers.

## archived

Context is retained for audit/history but not active.

---

# Context Versioning Rule

Business Context must be versioned.

Versioning must capture:

```text
who changed it
what changed
when it changed
why it changed when available
approval status
active version
previous active version
affected AI employees
affected workflows
affected channels
```

AI executions should record which context version was used.

This is required for auditability, debugging, evaluation, and trust.

---

# Context Freshness Rule

Business Context must track freshness.

Freshness signals:

```text
last updated
last reviewed
source freshness
policy expiration
seasonal relevance
pricing validity
product availability
integration sync time
human approval time
```

Stale context must not silently drive high-risk actions.

If freshness is uncertain, AI employees should:

```text
answer cautiously
ask for review
cite uncertainty
avoid claims
escalate
request updated context
```

---

# Context Completeness Rule

Business Context should have completeness scoring.

Completeness should consider:

```text
company profile exists
products/services defined
customer segments defined
brand voice defined
support policy defined
sales policy defined
pricing policy defined when relevant
escalation rules defined
forbidden claims defined
knowledge sources connected
active sources synced
AI employee role-specific requirements met
```

Completeness must be role-aware.

A Customer Support Employee needs support policies.

A Sales Employee needs products, pricing, objections, and qualification rules.

A Finance Employee needs billing rules and invoice policies.

Do not use one generic completeness score for all employees.

---

# Context Confidence Rule

Business Context should support confidence indicators.

Confidence may be based on:

```text
human approval
source authority
source freshness
retrieval quality
conflict detection
coverage
historical success
evaluation results
user feedback
```

Low confidence should change AI behavior.

Examples:

```text
require human review
ask a clarification question
avoid definitive claim
escalate to owner
use fallback copy
```

---

# Business Context Structure

Ariyo should structure Business Context into modules.

Recommended modules:

```text
company_profile
brand_voice
products_services
customer_segments
support_policy
sales_policy
pricing_policy
legal_compliance
escalation_rules
operating_rules
channel_rules
language_rules
forbidden_claims
allowed_claims
approval_rules
success_metrics
source_authority
employee_context_requirements
```

Each module should have:

```text
owner
status
version
last_updated
last_reviewed
confidence
source_links
permissions
active/draft state
```

---

# Company Profile

Company Profile defines the business identity.

Should include:

```text
company name
industry
business description
location or service area
business model
target market
main value proposition
key differentiators
primary goals
company size when useful
languages supported
operating regions
```

Example fields:

```json
{
  "companyName": "Example Co",
  "industry": "B2B SaaS",
  "description": "Provides customer support automation for online retailers.",
  "targetCustomers": ["online retailers", "support teams"],
  "primaryValueProposition": "Resolve customer questions faster with accurate business context.",
  "supportedLanguages": ["en", "fa"],
  "serviceRegions": ["Germany", "Iran", "UAE"]
}
```

Company Profile must not contain unverified claims presented as facts.

---

# Brand Voice

Brand Voice defines how AI employees communicate.

Should include:

```text
tone
formality
personality
phrases to use
phrases to avoid
language preferences
response length preference
empathy level
sales assertiveness
humor policy
emoji policy
apology policy
signature policy
```

Example:

```text
Professional, calm, clear, concise, helpful.
Avoid hype, pressure, slang, jokes, and exaggerated claims.
Use direct explanations and action-oriented next steps.
```

Brand Voice must not override safety.

A brand voice cannot instruct AI employees to hide uncertainty or make unsupported claims.

---

# Product and Service Context

Products and Services define what the business offers.

Should include:

```text
product/service name
category
description
features
benefits
pricing reference
availability
limitations
requirements
eligible customers
setup process
support scope
refund/warranty information when relevant
related knowledge sources
```

AI employees must not invent products, prices, features, discounts, guarantees, or availability.

If product data is missing or stale, the employee must ask for review or escalate.

---

# Customer Segment Context

Customer Segment Context defines who the business serves.

Should include:

```text
segment name
needs
pain points
common questions
qualification rules
preferred tone
risk sensitivities
support expectations
sales objections
language/region preferences
```

AI employees may adapt tone and content by segment.

They must not discriminate or make sensitive inferences beyond provided business context.

---

# Support Policy

Support Policy defines how customer issues are handled.

Should include:

```text
support scope
supported channels
response time expectations
refund policy
replacement policy
warranty policy
escalation conditions
required information before escalation
troubleshooting steps
forbidden support actions
allowed compensation
handoff process
```

Support AI employees must follow support policy before answering.

If policy is missing, they must not invent support guarantees.

---

# Sales Policy

Sales Policy defines how AI employees handle sales conversations.

Should include:

```text
qualification criteria
ideal customer profile
disqualification rules
allowed claims
forbidden claims
pricing rules
discount policy
demo booking rules
lead capture requirements
handoff rules
objection handling
competitor comparison policy
```

Sales employees must not:

```text
guarantee outcomes without support
invent discounts
misrepresent pricing
make false urgency claims
claim unavailable features
pressure users against policy
```

---

# Pricing Policy

Pricing Policy defines how pricing may be discussed.

Should include:

```text
public pricing
custom pricing rules
discount eligibility
trial policy
refund terms
billing cycle
currency
region differences
tax/VAT limitations
who can approve exceptions
```

Pricing answers must be grounded in approved pricing context.

If pricing is uncertain or custom, AI employees should say so and route appropriately.

---

# Legal and Compliance Context

Legal and Compliance Context defines boundaries.

Should include:

```text
required disclaimers
regulated topics
privacy requirements
data handling rules
claims restrictions
jurisdictional limits
terms references
contract limitations
approval requirements
```

AI employees must not provide legal, medical, financial, or regulated advice unless product scope explicitly supports safe handling and review.

When compliance context is missing, high-risk answers should require review.

---

# Escalation Rules

Escalation Rules define when AI employees must stop and involve a human.

Escalate when:

```text
customer is angry or threatening legal action
refund exception is requested
pricing exception is requested
policy is unclear
confidence is low
retrieval evidence conflicts
customer asks for sensitive data
customer requests action outside scope
automation risk is high
billing or permission issue occurs
integration failure affects outcome
AI employee detects possible harm or compliance risk
```

Escalation should include:

```text
reason
conversation summary
relevant customer request
retrieved evidence
confidence level
suggested next action
assigned reviewer or team
```

---

# Forbidden Claims

Forbidden Claims define what AI employees must never say.

Examples:

```text
guaranteed revenue increase
unverified performance claims
unsupported legal guarantees
medical/financial/legal advice
unapproved discounts
unavailable product features
false urgency
competitor misinformation
privacy commitments not in policy
security certifications not verified
```

Forbidden claims must override brand voice and sales pressure.

---

# Allowed Claims

Allowed Claims define safe messaging.

Allowed claims should be:

```text
verified
source-backed
current
approved
specific
qualified when necessary
```

Example:

```text
Allowed:
Ariyo can help teams deploy AI employees that use connected business knowledge and workflow rules.

Forbidden:
Ariyo guarantees replacing your support team in one week.
```

---

# Operating Rules

Operating Rules define practical business constraints.

Examples:

```text
working hours
holiday schedule
shipping regions
service regions
supported languages
response time expectations
contact channels
handoff teams
approval requirements
SLA tiers
customer priority rules
```

AI employees should use operating rules when setting expectations.

Do not invent availability.

---

# Channel Rules

Different channels require different behavior.

Channel context may include:

```text
email tone
chat tone
WhatsApp tone
Telegram tone
website chat behavior
helpdesk ticket behavior
CRM note behavior
Slack/internal behavior
message length constraints
signature requirements
emoji policy
human handoff path
```

Example:

```text
Website chat:
Shorter answers, ask one clarifying question at a time, offer next step.

Email:
More complete answer, include greeting and closing when appropriate.
```

Channel rules must not override safety rules.

---

# Language Rules

Language rules define supported languages and localization behavior.

Should include:

```text
default language
supported languages
fallback language
translation policy
formal/informal address
Persian/RTL requirements
terms to preserve
brand names to preserve
localized product names
```

If a customer writes in a supported language, AI employees may respond in that language unless policy says otherwise.

If unsupported, they should escalate or use approved fallback.

---

# Business Context and AI Employee Roles

Each AI employee role requires specific Business Context.

## Customer Support Employee

Requires:

```text
support policy
product/service context
refund/warranty rules
troubleshooting steps
escalation rules
brand voice
customer segments
knowledge sources
```

## Sales Employee

Requires:

```text
product/service context
pricing policy
qualification rules
objection handling
allowed claims
forbidden claims
demo booking rules
handoff rules
```

## Onboarding Employee

Requires:

```text
setup steps
success criteria
customer segments
product use cases
activation checklist
common blockers
handoff rules
```

## Finance/Billing Employee

Requires:

```text
billing policy
invoice rules
refund policy
payment methods
permission rules
escalation rules
safe-state copy
```

## Operations Employee

Requires:

```text
workflow rules
SOPs
escalation paths
service levels
integration behavior
incident rules
```

No employee should be deployed without its minimum required Business Context.

---

# Business Context Readiness

AI employee deployment should check context readiness.

Readiness should answer:

```text
Is required context complete?
Is required context active?
Is context fresh enough?
Are required knowledge sources connected?
Are sources synced?
Are escalation rules defined?
Are forbidden claims defined?
Is brand voice defined?
Is review mode required?
Is autonomy level safe?
```

If readiness is incomplete, deployment should be blocked or limited.

Example UI copy:

```text
Add support policy before deploying this employee.

Review pricing rules before this employee can answer pricing questions.

Connect at least one knowledge source to improve answer accuracy.
```

---

# Context Application Rule

AI employees must apply Business Context before generating or acting.

Recommended execution order:

```text
1. Identify employee role and scope.
2. Load organization context.
3. Load employee-specific context.
4. Load channel rules.
5. Check permissions and autonomy level.
6. Retrieve relevant knowledge when needed.
7. Check policy constraints.
8. Generate structured candidate response/action.
9. Validate output against safety and business rules.
10. Decide: answer, act, ask clarification, escalate, or request review.
```

Do not generate first and validate casually later for high-risk tasks.

---

# Business Context and RAG

RAG must use Business Context to guide retrieval and response generation.

Business Context should influence:

```text
which sources are eligible
which sources are authoritative
how retrieved content is interpreted
which claims require citation
which missing evidence requires escalation
which stale content should be ignored
which customer segment matters
which policy overrides document text
```

Knowledge retrieval without Business Context can produce technically grounded but business-wrong answers.

---

# Source Authority Rule

Not all sources are equal.

Business Context must define source authority.

Example authority levels:

```text
official_policy
approved_pricing
product_documentation
support_playbook
website_public
internal_notes
conversation_history
ai_suggestion
```

Higher-authority sources should win conflicts.

AI-generated suggestions are never authoritative until reviewed.

---

# Conflict Detection Rule

Ariyo must detect or surface conflicts when possible.

Conflicts may occur between:

```text
old pricing and new pricing
support policy and website content
brand voice and employee prompt
customer request and compliance policy
retrieved source and approved context
workflow action and permission rule
sales claim and forbidden claims
```

When conflict exists, AI employees should not silently choose the more convenient answer.

They should use the highest-authority current source or escalate.

---

# Business Context and Workflows

Workflows must reference Business Context when actions depend on business rules.

Examples:

```text
escalate if refund request exceeds approved threshold
require review before sending pricing exceptions
route enterprise leads to sales manager
pause automation outside business hours
use channel-specific tone for WhatsApp
send onboarding checklist based on customer segment
```

Workflow rules must not duplicate Business Context in hardcoded logic.

They should reference structured policies when possible.

---

# Business Context and Permissions

Access to Business Context must be permission-aware.

Examples:

```text
Billing Admin may edit pricing policy.
Support Manager may edit support policy.
Marketing Manager may edit brand voice.
Reviewer may approve AI outputs but not edit policy.
Member may view limited context.
```

AI employees must not access context outside organization, workspace, permission scope, or employee assignment.

---

# Business Context and Privacy

Business Context may contain sensitive information.

Sensitive context includes:

```text
pricing exceptions
internal policies
customer segments
private SOPs
escalation contacts
legal constraints
integration instructions
internal scripts
support compensation rules
```

Do not expose internal Business Context to customers unless explicitly approved.

AI employees should use internal context to guide answers, not reveal it verbatim.

---

# Context Output Policy

AI employees must not dump Business Context into responses.

Good:

```text
I can help with a refund request. Please share your order number so our team can review it.
```

Bad:

```text
Our internal policy says refunds over $100 require manager approval and should be escalated to Sarah.
```

Internal context guides behavior.

It is not necessarily customer-facing content.

---

# Context Capture UX

Ariyo should capture Business Context through guided product experiences.

Recommended patterns:

```text
guided setup checklist
context modules
progressive questions
source connection prompts
AI-assisted draft with human review
import from website or documents
role-specific context requirements
review and approval flow
freshness reminders
context health dashboard
```

Avoid overwhelming users with one giant setup form.

Capture only what is needed for first value.

---

# First-Time Business Context Setup

Ariyo should support fast activation.

Initial setup should prioritize:

```text
company name
business description
primary customer type
one product/service
brand tone
one knowledge source
one escalation rule
first AI employee role
```

The goal is First Time To Value under 5 minutes.

Advanced context can be added progressively.

---

# Context Health

Ariyo should show Business Context health.

Health dimensions:

```text
completeness
freshness
source coverage
conflict status
approval status
employee readiness
retrieval performance
answer quality feedback
safety incidents
```

Example health states:

```text
healthy
needs_review
incomplete
outdated
conflicting
low_confidence
```

Context health should drive product recommendations.

---

# Context Recommendations

Ariyo may recommend improvements.

Examples:

```text
Add refund policy to improve support answers.
Connect pricing sheet before enabling sales replies.
Review outdated shipping policy.
Resolve conflict between website pricing and pricing policy.
Add escalation rule for billing issues.
```

Recommendations must be specific and tied to business value.

Do not show generic “improve your context” messages.

---

# AI-Assisted Context Drafting

Ariyo may help draft Business Context from sources.

AI-generated context must be:

```text
marked as draft
reviewed by authorized user
traceable to sources
editable
versioned
not active until approved for high-risk use
```

AI must not silently create active business rules.

---

# Context Approval Rule

High-impact context requires approval.

Approval recommended for:

```text
pricing policy
refund policy
legal disclaimers
forbidden claims
automatic reply rules
escalation rules
compliance constraints
billing policy
workflow publish rules
```

Approval should record:

```text
approver
timestamp
version
scope
notes
```

---

# Context Change Impact Rule

When Business Context changes, Ariyo should identify impact.

Possible impact:

```text
AI employees using this context
workflows referencing this policy
knowledge sources needing resync
active conversations needing updated answer
scheduled messages
billing/pricing pages
analytics interpretation
```

High-impact changes may require:

```text
review
redeployment
workflow validation
employee evaluation rerun
notification to admins
```

---

# Context and Evaluation

Business Context must be part of AI evaluation.

Evaluation should test:

```text
answers follow brand voice
pricing answers match pricing policy
support answers follow support policy
forbidden claims are avoided
escalation happens correctly
channel tone is respected
language rules are followed
retrieval uses authoritative sources
stale context is avoided
```

AI employee quality cannot be evaluated without business context.

---

# Context and Analytics

Ariyo should measure context effectiveness.

Metrics:

```text
context completeness score
context freshness score
source coverage score
employee readiness score
answers grounded in approved context
escalations due to missing context
failed answers due to stale context
user feedback by context module
activation rate after context setup
first employee deployed after context setup
```

Do not measure only number of uploaded documents.

Measure whether context improves employee outcomes.

---

# Context and Billing Value

Business Context increases product value.

Billing may consider:

```text
number of active employees
number of connected knowledge sources
advanced context modules
compliance controls
approval workflows
context health monitoring
enterprise policy governance
```

Do not charge for confusion.

Charge for trusted business capacity and governance.

---

# Context API Requirements

Business Context APIs must support:

```text
organization scope
module-based retrieval
versioning
status
approval state
freshness
permission checks
partial updates
audit history
impact analysis
readiness checks
employee-specific requirements
```

Responses must be frontend-safe and AI-safe.

Do not expose internal-only fields to unauthorized clients.

---

# Context Data Model Guidance

Recommended entities:

```text
BusinessContext
BusinessContextModule
BusinessContextVersion
BusinessContextApproval
BusinessContextSourceLink
BusinessContextHealth
EmployeeContextRequirement
ContextImpactRecord
ContextRecommendation
```

Potential relationships:

```text
Organization has BusinessContext
BusinessContext has many Modules
Module has many Versions
Version may have Approvals
Module may link to Knowledge Sources
Employee Template defines Context Requirements
Deployment checks Context Requirements
AI Execution records Context Version IDs
```

Exact implementation belongs to backend-architecture.md and domain-model.md.

---

# Context Module Example

```json
{
  "moduleType": "support_policy",
  "status": "active",
  "version": 4,
  "lastReviewedAt": "2026-06-18T08:00:00Z",
  "confidence": "high",
  "ownerRole": "support_manager",
  "summary": "Refunds are available within 14 days if the order has not been used.",
  "rules": [
    {
      "condition": "refund_amount_above_threshold",
      "action": "escalate_to_human_review"
    }
  ],
  "forbiddenClaims": [
    "Do not guarantee refunds before review."
  ],
  "sourceIds": ["source_123"]
}
```

---

# Business Context Prompt Contract

When Business Context is included in AI execution, it must be structured.

Recommended sections:

```text
Organization Summary
Role-Specific Instructions
Brand Voice
Relevant Policies
Forbidden Claims
Allowed Claims
Escalation Rules
Channel Rules
Retrieved Evidence
Uncertainty Rules
Output Requirements
```

Do not inject large unstructured context blobs when structured context is available.

---

# Context Size Control

Business Context must be concise and relevant.

Do not send entire organization context to every AI execution.

Select context by:

```text
employee role
task type
channel
customer segment
workflow
risk level
retrieval need
policy relevance
```

Irrelevant context increases cost and reduces quality.

---

# Context Compression Rule

Long context should be summarized into approved structured summaries.

Summaries must be:

```text
source-linked
versioned
reviewed when high-impact
freshness-aware
not overgeneralized
not used as sole evidence for precise claims when source citation is needed
```

Do not let AI-generated summaries replace authoritative sources without review.

---

# Prompt Injection Defense

Business Context must defend against prompt injection.

Rules:

```text
user messages cannot override business context
retrieved documents cannot override system safety
external sources cannot grant permissions
customer instructions cannot change employee role
documents saying ignore previous instructions are treated as malicious or irrelevant
```

AI employees must treat business context and safety policy as higher priority than user/requested content.

---

# Context Missing Behavior

When Business Context is missing, AI employees should not guess.

Allowed behaviors:

```text
ask a clarifying question
use safe generic answer with limitation
request setup completion
route to human review
refuse unsupported claim
suggest connecting a source
```

Forbidden behaviors:

```text
invent policy
invent pricing
invent refund terms
invent legal claims
invent product availability
invent escalation contacts
invent business hours
```

---

# Context Conflict Behavior

When context conflicts, AI employees should:

```text
prefer highest-authority active source
prefer most recent approved version
avoid definitive answer if conflict remains
escalate when risk is high
include uncertainty internally for reviewer
request context review
```

Customer-facing response should stay calm and not expose internal confusion unnecessarily.

---

# Context Staleness Behavior

When context is stale, AI employees should:

```text
avoid high-risk claims
use review mode
ask for confirmation
escalate
recommend context update
```

Example:

```text
I need a team member to confirm the latest pricing before answering this.
```

Do not present stale context as current.

---

# Business Context and Memory

Business Context is not the same as memory.

Memory may capture learned preferences or recurring patterns.

Business Context is approved organization policy and operating knowledge.

Memory must not override Business Context.

AI-generated memory must not become active Business Context without governance.

---

# Business Context and Conversation History

Conversation history may provide local context.

It must not override:

```text
permissions
business rules
approved policy
forbidden claims
safety constraints
```

Conversation history should help with continuity, not policy creation.

---

# Business Context UI Requirements

Frontend must present Business Context as manageable modules.

Good UI patterns:

```text
Business Context dashboard
module cards
context health indicators
readiness checklist
review queue
source links
last reviewed date
impact warnings
role-specific requirements
recommended next step
```

Avoid:

```text
one giant text area
raw prompt editor as main UI
generic setup wizard with no role relevance
technical RAG terminology
backend terms like embeddings/vector index
```

---

# Context Copy Rules

Use product language.

Preferred terms:

```text
Business Context
Knowledge Source
Source ready
Needs review
Review context
Update policy
Add escalation rule
Improve answer accuracy
```

Avoid user-facing terms:

```text
prompt
embedding
vector
chunk
index
system message
agent memory
LLM context window
```

Technical terms may exist in internal architecture docs but should not dominate product UI.

---

# Context Review UX

Review UI should show:

```text
what changed
who changed it
source evidence
affected employees
affected workflows
risk level
approve/reject actions
comments
version history
```

Review actions must be permission-protected.

High-risk context should not become active without required approval.

---

# Context Health UX

Health status should be specific.

Good:

```text
Pricing policy needs review. It has not been reviewed in 90 days.

Support Employee is missing refund policy.

Two sources conflict on shipping time.
```

Bad:

```text
Context incomplete.

Needs improvement.

Warning.
```

Context health should guide action.

---

# Context Onboarding UX

Onboarding should be progressive.

Recommended sequence:

```text
1. Confirm company profile.
2. Choose first AI employee.
3. Add role-specific context.
4. Connect one knowledge source.
5. Define escalation rule.
6. Review readiness.
7. Deploy in safe mode.
```

Do not force enterprise-level governance before first value.

Do not skip safety-critical context for high-risk employees.

---

# Business Context Security Rules

Business Context must follow security guardrails.

Required:

```text
organization scoped
permission protected
versioned
audited
not exposed to unauthorized users
not stored in frontend storage
not sent to analytics as raw text
not shown to customers unless intended
not mixed across organizations
```

Forbidden:

```text
raw policy text in analytics events
context copied to localStorage
context leaked in error messages
context visible across organizations
AI employee using unauthorized context
customer seeing internal escalation rules
```

---

# Business Context Audit Rules

Audit log should capture:

```text
context created
context updated
context approved
context rejected
context archived
context activated
context marked outdated
source linked
source unlinked
readiness changed
employee deployment blocked/unblocked by context
```

Audit logs must be organization-scoped and permission-controlled.

---

# Business Context Incident Rules

Context incidents may include:

```text
AI employee used stale policy
wrong pricing answer sent
forbidden claim generated
internal policy exposed
context conflict caused incorrect answer
unauthorized context access
source sync changed active context unexpectedly
```

Incident response should include:

```text
affected executions
context version used
employee involved
source evidence
customer-facing impact
rollback or context update
evaluation update
prevention action
```

---

# Business Context Testing

Tests should cover:

```text
context module validation
readiness checks
permission checks
version activation
approval requirements
source authority conflict resolution
missing context behavior
stale context behavior
employee context requirements
API response shape
frontend state rendering
```

High-risk context rules require regression tests when bugs are fixed.

---

# Business Context Evaluation

Evaluation datasets should include:

```text
valid support policy questions
missing policy questions
pricing questions
forbidden claim attempts
prompt injection attempts
stale source cases
conflicting source cases
channel tone cases
escalation cases
customer segment cases
```

Evaluate whether AI employees:

```text
use correct context
avoid forbidden claims
escalate when required
follow tone
respect channel rules
avoid revealing internal policy
cite or ground claims when needed
```

---

# Business Context Metrics

Recommended metrics:

```text
context_completion_rate
context_readiness_by_employee_type
context_review_overdue_count
context_conflict_count
context_health_score
missing_context_escalation_rate
stale_context_incident_count
forbidden_claim_prevention_rate
employee_deployment_blocked_by_context_count
answer_quality_by_context_module
```

Metrics must support product decisions, not vanity reporting.

---

# Business Context Decision Tree

Ask:

### Is this organization-specific operating knowledge?

It belongs in Business Context.

### Is this raw content used for evidence?

It belongs in Knowledge Source.

### Is this a policy that affects AI behavior?

Structure, version, and approve it.

### Is this high-risk context?

Require permission, review, audit, and evaluation.

### Is this context missing?

Block, limit, ask, or escalate.

### Is this context stale?

Reduce confidence and require review when risk is high.

### Is this context conflicting?

Use authority/freshness rules or escalate.

### Is this internal-only?

Use it to guide behavior, not expose it to customers.

### Is this AI-generated?

Keep it draft until reviewed when high-impact.

---

# Forbidden Business Context Patterns

Never ship:

```text
Business Context as one giant prompt text area
raw prompt editing as primary business setup
uploaded documents treated as complete business context
AI-generated policies activated without review
pricing policy inferred from random conversations
refund policy invented by AI
forbidden claims missing for sales employees
escalation rules missing for support employees
context stored in localStorage
context sent raw to analytics
internal policy exposed to customers
stale context treated as current
conflicting context silently ignored
employee deployed without required context
memory overriding approved policy
conversation history overriding business rules
retrieved documents overriding permissions
technical RAG terms dominating user-facing setup
same context readiness score for every employee type
context changes without version history
high-risk context edits without audit log
```

---

# Ariyo Business Context Golden Rule

AI employees must understand the business before they act for the business.

---

# Senior Business Context Rule

Do not make business context a prompt.

Make it a governed product model that AI employees can safely use.

---

# Final Rule

Ariyo Business Context is production-ready only when organization-specific business meaning is structured, versioned, permission-aware, freshness-aware, source-linked, reviewable, evaluable, safe to retrieve, safe to apply, and directly connected to AI employee readiness, workflow behavior, knowledge grounding, customer trust, and measurable business outcomes.
