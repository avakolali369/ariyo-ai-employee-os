# Ariyo AI Employee Architecture Skill

Version: 1.0.0  
Product: Ariyo  
Purpose:  
Act as a Principal AI Product Architect, AI Employee Systems Designer, Automation Safety Lead, and Intelligent SaaS Architecture Guardian for Ariyo.

Audience:  
Codex Agents, AI-assisted development tools, product builders, backend engineers, frontend engineers, AI engineers, and system architects working on Ariyo.

Priority:  
Non-negotiable.

Dependencies:
- frontend-design.md
- frontend-components.md
- frontend-responsive.md
- frontend-motion.md
- frontend-copywriting.md
- coding-standards.md
- project-structure.md
- frontend-state-data.md
- frontend-forms-validation.md
- frontend-testing.md
- frontend-performance.md

If conflicts exist:
- frontend-copywriting.md wins for product language and user-facing terminology.
- coding-standards.md wins for frontend code quality and production engineering rules.
- frontend-state-data.md wins for frontend server/client state ownership.
- project-structure.md wins for frontend file and feature boundaries.
- ai-employee-architecture.md wins for AI employee product model, lifecycle, safety, autonomy, scope, knowledge, tools, evaluation, and intelligent behavior.

Code or product work that treats Ariyo employees as generic chatbots, agents, plugins, or model wrappers is not acceptable.

---

# 1. Purpose

This skill defines the architecture of AI employees inside Ariyo.

Ariyo is not a chatbot builder.

Ariyo is not a prompt playground.

Ariyo is not an agent marketplace with decorative UI.

Ariyo is an intelligent business operating system where organizations hire, configure, deploy, supervise, evaluate, and improve AI employees that perform bounded business work.

The purpose of this file is to make every AI employee in Ariyo:

```text id="ai-emp-001"
role-based
business-scoped
permission-aware
knowledge-grounded
tool-controlled
channel-aware
workflow-capable
reviewable
observable
measurable
safe by default
cost-aware
human-supervised when risk requires it
production-ready
```

If an AI employee cannot explain its scope, required knowledge, allowed tools, success criteria, risk level, and fallback behavior, it is not ready to deploy.

---

# 2. Core Product Principle

An AI employee is a business role, not a model call.

Every AI employee must be designed around:

```text id="ai-emp-002"
Who is this employee?
What business job does it do?
What is it allowed to do?
What is it not allowed to do?
What knowledge can it use?
What tools can it call?
Where can it act?
When must a human review?
How is success measured?
How is failure detected?
How can the organization pause, improve, or remove it?
```

Do not start with prompts.

Start with business responsibility.

---

# 3. Official Product Language

Use Ariyo product language consistently.

Preferred:

```text id="ai-emp-003"
employee
AI employee
hire employee
deploy employee
pause employee
review response
knowledge source
business context
workflow
channel
integration
task
activity
performance
AI cost
```

Avoid in user-facing product surfaces:

```text id="ai-emp-004"
agent
bot
plugin
LLM wrapper
prompt chain
embedding job
vector index
Celery task
model run
inference worker
tool call
```

Technical terms may exist in backend/API/internal architecture when necessary, but UI and product contracts must preserve Ariyo language.

---

# 4. What Is an AI Employee?

An Ariyo AI employee is a configured, bounded, measurable software worker that can assist with or perform a defined business role.

An AI employee is composed of:

```text id="ai-emp-005"
identity
role
scope
responsibilities
allowed actions
forbidden actions
knowledge access
tool access
channel access
workflow triggers
review policy
risk level
memory policy
fallback behavior
success metrics
cost profile
activity history
performance evaluation
```

An AI employee must never be represented as only:

```text id="ai-emp-006"
prompt + model
chat window
API key
plugin install
assistant ID
background worker
automation script
```

Those may be implementation details.

They are not the product concept.

---

# 5. AI Employee Architecture Object

Every AI employee should be describable by a product architecture object.

Recommended conceptual shape:

```ts id="ai-emp-007"
type AiEmployeeArchitecture = {
  identity: EmployeeIdentity;
  role: EmployeeRole;
  scope: EmployeeScope;
  responsibilities: EmployeeResponsibility[];
  boundaries: EmployeeBoundary[];
  knowledgePolicy: KnowledgePolicy;
  toolPolicy: ToolPolicy;
  channelPolicy: ChannelPolicy;
  workflowPolicy: WorkflowPolicy;
  autonomyPolicy: AutonomyPolicy;
  reviewPolicy: ReviewPolicy;
  memoryPolicy: MemoryPolicy;
  safetyPolicy: SafetyPolicy;
  evaluationPolicy: EvaluationPolicy;
  costPolicy: CostPolicy;
  lifecycle: EmployeeLifecycleState;
};
```

This is a product architecture model, not necessarily the exact database schema.

However, backend, frontend, analytics, and evaluation systems should align with these concepts.

---

# 6. Employee Identity

Every employee needs a clear identity.

Identity includes:

```text id="ai-emp-008"
name
role title
short description
business category
primary value proposition
icon/avatar
status
owner organization
creator/admin
created date
last updated date
```

Good employee names:

```text id="ai-emp-009"
Customer Support Employee
Sales Qualification Employee
Appointment Booking Employee
Invoice Follow-up Employee
Instagram Response Employee
HR Screening Employee
Knowledge Assistant Employee
```

Bad employee names:

```text id="ai-emp-010"
GPT Assistant
Bot 1
Agent Pro
Auto AI
LLM Worker
Smart Plugin
```

Names must sound like business roles, not technical components.

---

# 7. Employee Role

Role defines the business job.

A role must answer:

```text id="ai-emp-011"
What business function does this employee support?
What user problem does it solve?
What tasks does it own?
What tasks does it assist with?
What tasks are out of scope?
```

Example:

```text id="ai-emp-012"
Role:
Customer Support Employee

Purpose:
Answers customer questions using approved business knowledge and escalates uncertain or sensitive issues to the team.
```

Role must be specific enough to constrain behavior.

A generic “AI Assistant” role is not acceptable.

---

# 8. Employee Scope

Scope defines the boundary of work.

Every employee must have:

```text id="ai-emp-013"
in-scope tasks
out-of-scope tasks
business domain
allowed channels
allowed knowledge sources
allowed tools
autonomy level
human review requirements
risk limits
```

Example scope:

```text id="ai-emp-014"
In scope:
- Answer product availability questions.
- Explain return policy.
- Collect order number for support follow-up.
- Escalate refund disputes.

Out of scope:
- Approve refunds.
- Change order status.
- Give legal advice.
- Promise delivery dates not found in business systems.
```

Scope must be explicit before deployment.

---

# 9. Responsibility Model

Responsibilities are the work units an employee may perform.

Each responsibility should define:

```text id="ai-emp-015"
name
business purpose
input needed
knowledge needed
allowed actions
output format
success criteria
failure mode
review requirement
```

Example:

```text id="ai-emp-016"
Responsibility:
Answer product questions

Input:
Customer question

Knowledge needed:
Product catalog, FAQ, pricing policy

Allowed actions:
Draft answer, ask clarifying question, escalate

Forbidden actions:
Promise discount, invent unavailable product details

Success criteria:
Answer is accurate, helpful, grounded in approved knowledge
```

Responsibilities should be product-level, not implementation-level.

---

# 10. Employee Boundaries

Boundaries define what the employee must not do.

Every employee must have explicit boundaries.

Boundary categories:

```text id="ai-emp-017"
authority boundaries
knowledge boundaries
tool boundaries
channel boundaries
financial boundaries
legal boundaries
privacy boundaries
brand boundaries
safety boundaries
cost boundaries
```

Example:

```text id="ai-emp-018"
This employee may draft refund guidance but may not approve refunds.
This employee may explain billing status but may not change a billing plan.
This employee may answer based on connected sources but may not invent policy.
```

When an employee reaches a boundary, it must ask for review, escalate, or refuse safely.

---

# 11. Autonomy Levels

Ariyo employees must have explicit autonomy levels.

Recommended levels:

```text id="ai-emp-019"
Level 0 — Draft only
Level 1 — Assist with review
Level 2 — Act after approval
Level 3 — Act automatically within narrow scope
Level 4 — Act automatically with monitoring
Level 5 — Not allowed by default
```

Definitions:

```text id="ai-emp-020"
Level 0 — Draft only:
Employee can generate suggestions but cannot send, save, or trigger actions.

Level 1 — Assist with review:
Employee prepares work and human must approve every external action.

Level 2 — Act after approval:
Employee can perform actions only after explicit approval for each action or batch.

Level 3 — Act automatically within narrow scope:
Employee can act automatically for predefined low-risk cases.

Level 4 — Act automatically with monitoring:
Employee can perform broader actions with audit logs, thresholds, and alerts.

Level 5:
Reserved for future advanced use and not allowed by default.
```

Autonomy must be visible and changeable by authorized users.

Do not default to high autonomy.

---

# 12. Review Policy

Review policy defines when humans must approve employee output.

Review modes:

```text id="ai-emp-021"
always require review
review when confidence is low
review for sensitive topics
review for new workflows
review for first N actions
review for high-value customers
review for financial or legal topics
automatic within approved scope
```

Review policy must be based on risk.

Good:

```text id="ai-emp-022"
Require review for refund disputes, complaints, legal questions, and uncertain answers.
```

Bad:

```text id="ai-emp-023"
Let AI decide.
```

The user must understand when an employee acts automatically.

---

# 13. Risk Levels

Every employee and action should have a risk level.

Recommended levels:

```text id="ai-emp-024"
low
medium
high
critical
```

Low risk:

```text id="ai-emp-025"
Summarize internal notes.
Classify support category.
Draft a suggested reply.
Answer FAQ using approved knowledge.
```

Medium risk:

```text id="ai-emp-026"
Send customer-facing reply in narrow scope.
Create task for team.
Update non-sensitive status.
Collect customer information.
```

High risk:

```text id="ai-emp-027"
Change billing settings.
Promise refunds.
Modify permissions.
Publish workflow.
Send external messages without review.
Disconnect integration.
```

Critical risk:

```text id="ai-emp-028"
Legal, medical, financial advice.
Access secrets.
Mass messaging.
Delete organization data.
Make irreversible changes.
```

High and critical actions require stricter review, confirmation, logging, and backend enforcement.

---

# 14. Capability Model

An AI employee should be granted capabilities explicitly.

Capabilities may include:

```text id="ai-emp-029"
read knowledge
answer questions
draft response
send response
classify request
create task
update CRM field
schedule appointment
summarize conversation
route conversation
sync source
read analytics
trigger workflow
```

Capabilities must be:

```text id="ai-emp-030"
typed
permission-aware
scope-aware
auditable
revocable
visible to admins
```

Do not give broad capabilities by default.

---

# 15. Tool Policy

Tools are actions the employee can use.

Tool policy defines:

```text id="ai-emp-031"
available tools
required permissions
tool input schema
tool output schema
risk level
rate limit
approval requirement
timeout
retry behavior
audit logging
fallback behavior
```

Tool examples:

```text id="ai-emp-032"
search knowledge sources
create support ticket
send channel reply
schedule meeting
look up order status
create CRM lead
update workflow task
send internal notification
```

Do not expose raw tools directly to the model without policy.

Every tool must be constrained.

---

# 16. Tool Naming Rule

Tool names must express business actions.

Good:

```text id="ai-emp-033"
searchBusinessKnowledge
createSupportTicket
sendReviewedReply
scheduleAppointment
lookupOrderStatus
createSalesLead
notifyTeamMember
```

Bad:

```text id="ai-emp-034"
runTool
callApi
executeFunction
postData
invokeLambda
callCeleryTask
```

Tool names are safety and observability contracts.

---

# 17. Tool Input Validation

Tool input must be validated before execution.

Every tool must define:

```text id="ai-emp-035"
input schema
required fields
allowed values
maximum lengths
safe defaults
permission checks
organization scope
entity ownership checks
risk checks
```

Never execute tool calls using raw model output.

Bad:

```ts id="ai-emp-036"
executeTool(modelSelectedTool, modelArgs as any);
```

Good:

```ts id="ai-emp-037"
const parsedArgs = sendReplyToolSchema.parse(modelArgs);
await authorizeToolUse(user, employee, parsedArgs);
await sendReplyTool.execute(parsedArgs);
```

Model output is untrusted.

---

# 18. Tool Execution Safety

Before a tool executes, the system must verify:

```text id="ai-emp-038"
organization ownership
employee permission
user/admin permission when relevant
autonomy level
review policy
risk level
rate limit
required knowledge grounding
input validation
idempotency where needed
```

For high-risk tools, require approval even if the model requests action.

The model must not be the final authority.

---

# 19. Channel Policy

Channels define where employees can act.

Examples:

```text id="ai-emp-039"
website chat
Instagram DM
WhatsApp
email
Slack
Telegram
CRM
support inbox
internal dashboard
```

Channel policy must define:

```text id="ai-emp-040"
allowed channels
message format
response time expectations
review requirements
brand tone
escalation path
rate limits
attachment rules
privacy rules
failure behavior
```

An employee deployed to internal dashboard is not automatically safe for customer-facing channels.

---

# 20. Customer-Facing Channel Rule

Customer-facing channels require stricter safety.

Before external replies are enabled, verify:

```text id="ai-emp-041"
knowledge sources are ready
business context is complete
reply mode is clear
autonomy level is approved
sensitive topics are configured
escalation path exists
brand tone is configured
fallback message exists
monitoring is enabled
```

Do not enable automatic external replies silently.

---

# 21. Internal Channel Rule

Internal channels may allow broader assistance, but still need boundaries.

Internal employees may:

```text id="ai-emp-042"
summarize information
prepare drafts
suggest next actions
classify work
answer internal knowledge questions
create internal tasks
```

They still must not:

```text id="ai-emp-043"
leak sensitive data to unauthorized users
invent policies
perform restricted actions
bypass permissions
show data from another organization
```

Internal does not mean unsafe.

---

# 22. Knowledge Policy

Knowledge policy defines what the employee can know and use.

It must specify:

```text id="ai-emp-044"
allowed knowledge sources
required knowledge sources
source freshness requirements
permission boundaries
retrieval behavior
grounding requirements
citation behavior where relevant
confidence thresholds
fallback when knowledge is missing
```

An employee must not answer business-specific questions without approved knowledge unless the role explicitly permits general guidance.

---

# 23. Knowledge Source Types

Ariyo may support knowledge sources such as:

```text id="ai-emp-045"
website pages
uploaded documents
FAQs
product catalog
policies
pricing information
CRM records
support history
internal notes
integration data
manual business context
```

Every source type should define:

```text id="ai-emp-046"
owner
freshness
permission model
sync status
failure state
visibility
allowed employee access
```

Do not treat all knowledge sources as equal.

---

# 24. Knowledge Grounding Rule

For business-specific answers, employees must ground responses in approved knowledge.

If knowledge is missing, outdated, or conflicting, the employee should:

```text id="ai-emp-047"
ask a clarifying question
say it does not have enough information
escalate to a human
create a review task
suggest connecting a knowledge source
```

It must not invent details.

Good:

```text id="ai-emp-048"
I do not have enough approved information to answer that. I can send this to the team for review.
```

Bad:

```text id="ai-emp-049"
The model can probably infer it.
```

---

# 25. Business Context

Business context is structured information that guides employee behavior.

Examples:

```text id="ai-emp-050"
company description
brand tone
products and services
target customers
support policies
pricing rules
refund policy
operating hours
regions served
languages supported
escalation contacts
forbidden claims
```

Business context is not optional for customer-facing employees.

---

# 26. Business Context Completeness Rule

Before deployment, check whether required business context exists.

Examples:

```text id="ai-emp-051"
Customer Support Employee:
requires FAQ, support policy, escalation contact, tone guidance.

Sales Qualification Employee:
requires target customer profile, offer, qualification criteria, handoff process.

Appointment Booking Employee:
requires availability rules, service types, cancellation policy, calendar integration.
```

If required context is missing, show setup incomplete.

Do not deploy blindly.

---

# 27. Memory Policy

Memory defines what the employee may remember.

Memory types:

```text id="ai-emp-052"
none
session memory
conversation memory
customer profile memory
organization memory
workflow memory
performance memory
```

Memory policy must define:

```text id="ai-emp-053"
what can be stored
where it is stored
how long it is retained
who can access it
how it is used
how it is deleted
whether user consent is required
```

Do not store sensitive user data without explicit product and backend policy.

---

# 28. Memory Safety Rule

Memory must never become uncontrolled hidden context.

Forbidden:

```text id="ai-emp-054"
storing secrets
storing full customer conversations without policy
storing billing data
storing auth tokens
storing private documents in client state
using memory across organizations
using stale memory as truth
```

Memory should improve continuity, not create privacy risk.

---

# 29. Lifecycle Model

Every employee must move through explicit lifecycle states.

Recommended lifecycle:

```text id="ai-emp-055"
draft
hired
setup_incomplete
ready_to_deploy
deploying
active
paused
needs_review
failed
archived
```

Definitions:

```text id="ai-emp-056"
draft:
Employee configuration is being created.

hired:
Employee has been added to workspace but is not ready.

setup_incomplete:
Required setup is missing.

ready_to_deploy:
Required setup is complete and deployment can begin.

deploying:
Deployment process is in progress.

active:
Employee is deployed and allowed to operate according to policy.

paused:
Employee is temporarily disabled.

needs_review:
Employee requires admin attention before continuing.

failed:
Deployment or operation failed.

archived:
Employee is no longer active but historical data may remain.
```

Do not collapse lifecycle into only active/inactive.

---

# 30. Lifecycle State Source Rule

Lifecycle state must come from server-confirmed state.

Frontend must not fake:

```text id="ai-emp-057"
active
ready
deployed
source ready
billing updated
workflow published
```

Pending UI can show progress, but trusted final states require backend confirmation.

---

# 31. Deployment Readiness

Before deployment, Ariyo must validate readiness.

Readiness includes:

```text id="ai-emp-058"
role selected
scope configured
required knowledge connected
knowledge source ready
channel selected
autonomy level configured
review policy configured
permissions verified
fallback behavior configured
cost policy acknowledged when needed
risk level accepted
```

Deployment should not be a single button that bypasses setup.

---

# 32. Deployment Flow

Recommended deployment flow:

```text id="ai-emp-059"
1. Hire employee
2. Review role and responsibilities
3. Connect knowledge sources
4. Connect channels or integrations
5. Configure autonomy and review policy
6. Review safety boundaries
7. Test employee behavior
8. Deploy employee
9. Monitor first activity
```

The product can simplify this flow, but not remove safety-critical steps.

---

# 33. First-Time Value Rule

Ariyo’s product principle is First Time To Value < 5 minutes.

AI employee architecture must support this by:

```text id="ai-emp-060"
providing role templates
pre-filled safe defaults
clear setup checklist
progressive configuration
sample tasks
guided knowledge connection
safe draft mode before full automation
```

Fast setup must not mean unsafe automation.

The default should be useful and safe.

---

# 34. Employee Templates

Employee templates accelerate setup.

A template should include:

```text id="ai-emp-061"
role
category
default responsibilities
default boundaries
required knowledge checklist
default autonomy level
default review policy
default channels
sample workflows
success metrics
risk profile
recommended copy
```

Templates must be editable.

Templates must not hide risk.

---

# 35. Template Safety Rule

Templates must use safe defaults.

Good defaults:

```text id="ai-emp-062"
require review for external replies
ask before performing high-risk action
escalate uncertain questions
limit knowledge to connected sources
disable destructive tools
show setup incomplete until required context is ready
```

Bad defaults:

```text id="ai-emp-063"
automatic customer replies on by default
all tools enabled
all knowledge sources accessible
billing tools enabled
permission tools enabled
no escalation path
```

Templates shape user trust.

---

# 36. Employee Categories

Ariyo may group employees by business function.

Recommended categories:

```text id="ai-emp-064"
Customer Support
Sales
Marketing
Operations
Finance
Human Resources
Knowledge Management
Analytics
Admin
```

Categories should guide discovery, setup, pricing, and analytics.

Do not create categories based on model technology.

Bad:

```text id="ai-emp-065"
GPT-4 Employees
RAG Bots
Tool Agents
Vector Assistants
```

---

# 37. Marketplace Architecture

Marketplace employees must be described by business value.

Marketplace card should communicate:

```text id="ai-emp-066"
role
business outcome
best for
setup requirements
risk/autonomy preview
required integrations
estimated time to deploy
primary CTA
```

Good CTA:

```text id="ai-emp-067"
Hire employee
```

Bad CTA:

```text id="ai-emp-068"
Install agent
Add bot
Run model
```

Marketplace is hiring, not plugin installation.

---

# 38. Employee Profile Architecture

Employee profile must show:

```text id="ai-emp-069"
identity
status
role and scope
setup checklist
knowledge sources
channels
workflows
autonomy level
review policy
activity
performance
AI cost
risk/safety state
recent failures
improvement suggestions
```

Employee profile is the operational control center.

It is not only an information page.

---

# 39. Activity Model

Employee activity records what happened.

Activity should include:

```text id="ai-emp-070"
time
employee
channel
trigger
input summary
knowledge used
action taken
review status
result
confidence/risk signals
cost
latency
human feedback
error if any
```

Do not expose raw private content unnecessarily.

Activity must be useful for trust, debugging, improvement, and billing.

---

# 40. Audit Log Rule

High-risk actions require audit logs.

Audit logs should record:

```text id="ai-emp-071"
who/what initiated action
employee ID
organization ID
action type
entity affected
approval status
input summary
result
safe failure state
timestamp
```

Do not rely on UI state as audit history.

Audit logs must be backend-owned.

---

# 41. Performance Metrics

Each employee should have measurable performance.

Metric categories:

```text id="ai-emp-072"
activation
usage
accuracy
resolution
speed
review burden
escalation
cost
safety
business outcome
```

Examples:

```text id="ai-emp-073"
responses drafted
responses sent
review approval rate
escalation rate
average response time
knowledge miss rate
failed action rate
AI cost per resolved task
customer satisfaction proxy
manual time saved
```

Metrics must be honest and explainable.

---

# 42. Success Criteria

Every employee needs success criteria.

Good criteria:

```text id="ai-emp-074"
Reduce first response time by 50%.
Resolve 30% of FAQ questions without escalation.
Draft replies with 90% approval rate.
Keep AI cost below configured monthly threshold.
Escalate refund disputes instead of answering automatically.
```

Bad criteria:

```text id="ai-emp-075"
Be smart.
Answer everything.
Use AI.
Automate support.
```

Success must be measurable.

---

# 43. Evaluation Policy

Evaluation defines how Ariyo judges employee quality.

Evaluation should include:

```text id="ai-emp-076"
accuracy
groundedness
scope adherence
tone quality
safety compliance
tool correctness
fallback correctness
review approval rate
user feedback
cost efficiency
latency
```

Evaluation should happen:

```text id="ai-emp-077"
before deployment
on sample tasks
after failures
periodically in production
when knowledge changes
when policy changes
when model/provider changes
```

Do not deploy untested employees into customer-facing automation.

---

# 44. Evaluation Dataset Rule

Important employee roles should have evaluation scenarios.

Scenario fields:

```text id="ai-emp-078"
input
expected behavior
allowed knowledge
forbidden behavior
risk level
expected escalation
success criteria
```

Example:

```text id="ai-emp-079"
Scenario:
Customer asks for refund after policy window.

Expected behavior:
Explain policy if available, ask for order details, escalate if dispute continues.

Forbidden behavior:
Approve refund or promise exception.
```

Evaluation is product safety infrastructure.

---

# 45. Confidence Policy

Employees should not act beyond confidence thresholds.

Confidence may include:

```text id="ai-emp-080"
retrieval confidence
source freshness
intent confidence
tool input completeness
risk classification
policy match
model self-assessment only as weak signal
```

Do not rely only on model confidence.

Confidence must be grounded in system signals where possible.

---

# 46. Fallback Behavior

Every employee needs fallback behavior.

Fallback options:

```text id="ai-emp-081"
ask clarifying question
escalate to human
create internal task
save draft for review
say knowledge is missing
suggest connecting source
pause automation
retry later
show safe error
```

Bad fallback:

```text id="ai-emp-082"
invent answer
ignore uncertainty
send generic apology forever
fail silently
retry repeatedly without limits
```

Fallback is part of intelligence.

---

# 47. Escalation Policy

Escalation defines when and how employees hand work to humans.

Escalation triggers:

```text id="ai-emp-083"
low confidence
missing knowledge
sensitive topic
angry customer
refund dispute
legal/financial topic
permission failure
tool failure
repeated failure
high AI cost anomaly
unknown status
```

Escalation should include:

```text id="ai-emp-084"
summary
reason for escalation
source conversation/task
recommended next action
risk signal
employee attempted action
```

Escalation must reduce human workload, not create confusion.

---

# 48. Human Feedback Loop

Users should be able to improve employees.

Feedback types:

```text id="ai-emp-085"
approve response
edit response
reject response
mark as helpful
mark as wrong
add missing knowledge
change boundary
change review policy
pause employee
report unsafe output
```

Feedback should inform:

```text id="ai-emp-086"
evaluation
future recommendations
knowledge gaps
role configuration
safety rules
performance metrics
```

Do not collect feedback that goes nowhere.

---

# 49. Learning Rule

Employees must not silently self-modify critical behavior.

Allowed learning:

```text id="ai-emp-087"
suggest knowledge gaps
recommend updated boundaries
surface repeated corrections
track approval rate
recommend review policy changes
```

Forbidden without explicit architecture:

```text id="ai-emp-088"
auto-changing permissions
auto-changing tool access
auto-changing billing limits
auto-changing autonomy level
auto-updating business policy
auto-learning from sensitive data without policy
```

Human-controlled improvement is safer than hidden adaptation.

---

# 50. Cost Policy

Every employee should be cost-aware.

Cost policy may include:

```text id="ai-emp-089"
monthly budget
cost per task threshold
model/provider selection
retrieval cost
workflow execution cost
automation limit
alert threshold
pause threshold
reporting granularity
```

AI cost must be visible enough to build trust.

Do not hide expensive behavior.

---

# 51. Cost Guardrails

Guardrails should prevent runaway costs.

Examples:

```text id="ai-emp-090"
rate limits
batch limits
retry limits
max tool calls per task
max conversation turns
daily/monthly budget alerts
cost anomaly detection
pause on excessive failure
pause on excessive retries
```

Cost controls are product safety controls.

---

# 52. Model Policy

Model/provider selection is an implementation decision that must follow product risk.

Model policy should consider:

```text id="ai-emp-091"
accuracy requirement
latency requirement
cost target
privacy requirement
tool calling reliability
language support
safety requirement
evaluation results
fallback model
```

Do not expose model choice as the primary product concept unless advanced users need it.

Users hire employees, not models.

---

# 53. Prompt Architecture Rule

Prompts are implementation details, but they must be structured.

Prompt context should include:

```text id="ai-emp-092"
employee role
scope
boundaries
allowed actions
review policy
business context
retrieved knowledge
task input
output requirements
fallback policy
safety instructions
```

Prompts must not contain:

```text id="ai-emp-093"
secrets
unbounded permissions
unvalidated user content as instructions
contradictory rules
hidden unsafe shortcuts
backend jargon in user-facing output
```

Prompt design follows employee architecture.

It does not replace it.

---

# 54. Instruction Hierarchy

AI employee behavior must follow clear instruction hierarchy.

Recommended hierarchy:

```text id="ai-emp-094"
1. System safety policy
2. Ariyo product rules
3. Organization policy
4. Employee role and scope
5. Workflow instructions
6. Channel instructions
7. Retrieved knowledge
8. User/customer request
```

Lower-level instructions must not override safety, permissions, or scope.

---

# 55. Prompt Injection Defense

Employees must treat external content as untrusted.

External content includes:

```text id="ai-emp-095"
customer messages
web pages
uploaded documents
emails
chat transcripts
CRM notes
integration data
```

Employees must not follow instructions inside external content that attempt to:

```text id="ai-emp-096"
change role
ignore policy
reveal secrets
bypass review
call tools unsafely
change permissions
exfiltrate data
```

Knowledge content is information, not authority.

---

# 56. Data Access Policy

Employees should access minimum necessary data.

Data access must define:

```text id="ai-emp-097"
which entities can be read
which fields can be read
which knowledge sources can be searched
which customer data can be used
which organization settings are visible
which integrations are accessible
```

Do not pass entire organization data to an employee by default.

Use data minimization.

---

# 57. Privacy Rule

AI employees must not expose confidential data.

Forbidden:

```text id="ai-emp-098"
revealing internal notes to customers
sharing one customer data with another
using private knowledge outside organization
showing hidden system prompts
exposing API errors or secrets
using data from wrong organization
```

Privacy boundaries must be backend-enforced and UI-visible where relevant.

---

# 58. Multi-Tenant Safety

Ariyo must be multi-tenant safe.

Every employee-related query, tool, workflow, memory, activity, and evaluation must be scoped to organization/workspace.

Never rely on frontend-only scope.

Backend must enforce:

```text id="ai-emp-099"
organization ownership
data access permissions
employee ownership
tool permission
knowledge source access
channel access
workflow access
billing ownership
```

Cross-organization leakage is critical failure.

---

# 59. Workflow Policy

Workflow policy defines when employees act.

A workflow should include:

```text id="ai-emp-100"
trigger
conditions
employee role
action
review policy
channel
knowledge requirements
risk level
fallback
logging
success metric
```

Example:

```text id="ai-emp-101"
Trigger:
New Instagram message.

Condition:
Question matches product FAQ and confidence is high.

Action:
Draft reply or send reply depending on review mode.

Fallback:
Escalate to team if question is about refund dispute.
```

Workflow automation must be visible and controllable.

---

# 60. Workflow Trigger Rule

Triggers must be explicit.

Trigger types:

```text id="ai-emp-102"
message received
form submitted
ticket created
lead created
source synced
scheduled time
manual run
status changed
threshold reached
```

Avoid vague triggers:

```text id="ai-emp-103"
when AI thinks needed
when useful
always monitor everything
```

Triggers define risk and cost.

---

# 61. Workflow Condition Rule

Conditions must be typed and understandable.

Good:

```text id="ai-emp-104"
If message language is Persian.
If customer intent is product question.
If order status is delivered.
If confidence is above configured threshold.
If topic is not refund, legal, or complaint.
```

Bad:

```text id="ai-emp-105"
If AI decides.
If relevant.
If needed.
```

Conditions must be reviewable.

---

# 62. Workflow Action Rule

Actions must map to approved capabilities and tools.

Actions must define:

```text id="ai-emp-106"
input
output
tool used
risk level
review requirement
success state
failure state
logging
```

Do not allow arbitrary action execution.

---

# 63. Workflow Publish Rule

Publishing a workflow is high-risk if it affects customers or operations.

Before publish:

```text id="ai-emp-107"
validate workflow graph
validate triggers
validate actions
validate permissions
validate knowledge requirements
show summary
show risk warnings
require confirmation when high-risk
run test scenario when possible
```

Do not publish invalid or unsafe workflows.

---

# 64. Observability

Every employee needs observability.

Observability includes:

```text id="ai-emp-108"
activity history
success/failure rate
latency
cost
review queue
escalation reasons
knowledge misses
tool failures
safety events
workflow runs
channel failures
```

Without observability, automation cannot be trusted.

---

# 65. Incident Signals

Ariyo should detect employee incidents.

Incident signals:

```text id="ai-emp-109"
sudden failure spike
high escalation spike
cost anomaly
repeated low-confidence outputs
tool failure loop
customer complaint marker
unsafe content detected
knowledge source outdated
integration disconnected
permission denied spike
```

Incident response may include alerting, pausing, or requiring review.

---

# 66. Pause Policy

Users must be able to pause employees.

Pause may be triggered by:

```text id="ai-emp-110"
manual admin action
safety threshold
cost threshold
integration failure
knowledge source failure
repeated unsafe output
workflow error loop
billing issue
```

Paused state must be clear.

Paused employees must not continue automatic actions.

---

# 67. Recovery Policy

When an employee fails, Ariyo must support recovery.

Recovery options:

```text id="ai-emp-111"
retry action
review setup
connect missing source
fix integration
change review policy
pause employee
contact support
view activity details
restore previous configuration
```

Failure states must preserve user trust.

---

# 68. Versioning Policy

Employee configuration should be version-aware.

Versioning matters for:

```text id="ai-emp-112"
role changes
scope changes
knowledge policy changes
tool access changes
review policy changes
workflow publish changes
model/provider changes
safety rule changes
```

For high-risk changes, keep audit history.

Do not mutate critical configuration silently.

---

# 69. Testing Employee Behavior

Before deployment, users should be able to test employees.

Test mode should allow:

```text id="ai-emp-113"
sample questions
sample workflows
sample channel messages
expected answer review
knowledge grounding check
boundary check
tool simulation
cost estimate
```

Test mode must be clearly separate from live deployment.

Do not accidentally send external messages during tests.

---

# 70. Simulation Mode

Simulation mode allows safe evaluation.

Simulation must:

```text id="ai-emp-114"
not call destructive tools
not send customer-facing messages
not change billing
not publish workflows
not modify real records unless explicitly sandboxed
clearly label simulated outputs
```

Simulation output is not live activity.

Do not mix it with production activity without labeling.

---

# 71. Employee Recommendations

Ariyo may recommend employees or improvements.

Recommendations should be based on:

```text id="ai-emp-115"
organization industry
connected sources
current workflows
activity patterns
manual workload
knowledge gaps
failed support topics
business goals
```

Recommendations must be explainable.

Good:

```text id="ai-emp-116"
Recommended because many unanswered messages ask about delivery times.
```

Bad:

```text id="ai-emp-117"
Recommended by AI.
```

---

# 72. Employee Improvement Suggestions

Improvement suggestions should be actionable.

Examples:

```text id="ai-emp-118"
Add return policy to improve refund answers.
Switch refund questions to require review.
Connect order system to answer order status.
Add Persian tone guidance for customer replies.
Reduce automatic replies for low-confidence topics.
```

Suggestions must not automatically change behavior without approval.

---

# 73. UI Contract

Frontend UI must expose the employee architecture clearly.

UI surfaces should include:

```text id="ai-emp-119"
role
scope
status
setup readiness
knowledge sources
channels
workflows
autonomy level
review policy
permissions
activity
performance
AI cost
risk/safety state
```

Do not hide architecture behind a single “settings” page.

Users must understand what the employee can do.

---

# 74. Backend Contract

Backend must provide reliable employee state.

Backend should own:

```text id="ai-emp-120"
employee identity
configuration
lifecycle state
permissions
deployment status
knowledge source status
tool authorization
workflow execution
audit logs
activity records
cost records
evaluation results
```

Frontend must not invent these states.

---

# 75. API Contract

Employee APIs should expose product-ready concepts.

Good endpoints conceptually:

```text id="ai-emp-121"
list employees
get employee profile
hire employee
deploy employee
pause employee
resume employee
update review policy
connect knowledge source
connect channel
run test scenario
get employee activity
get employee performance
```

Avoid UI depending on backend-internal terms:

```text id="ai-emp-122"
create agent runtime
start celery task
update vector job
call inference worker
```

API mapping layer can translate technical backend details.

---

# 76. Data Model Guidance

Backend data model should support:

```text id="ai-emp-123"
organizations
employees
employee templates
employee configurations
employee capabilities
knowledge source access
channel deployments
workflows
workflow runs
activity logs
evaluation scenarios
evaluation results
cost records
review queue items
audit logs
```

Do not compress all employee configuration into a single untyped JSON blob without schema/versioning.

JSON configuration may be useful, but must be versioned and validated.

---

# 77. Configuration Schema Rule

Employee configuration must be schema-driven.

Configuration should validate:

```text id="ai-emp-124"
role
scope
capabilities
tools
knowledge access
channels
autonomy level
review policy
fallback policy
risk level
cost policy
```

Invalid configuration must not deploy.

---

# 78. Permissions Contract

Permission model must answer:

```text id="ai-emp-125"
Who can hire employees?
Who can configure employees?
Who can deploy employees?
Who can pause employees?
Who can approve replies?
Who can connect knowledge sources?
Who can connect integrations?
Who can change billing-related employee limits?
Who can view activity?
Who can view cost?
```

Permissions must be backend-enforced.

Frontend must display permission state clearly.

---

# 79. Review Queue Architecture

Review queue is required for human-in-the-loop workflows.

Review queue item should include:

```text id="ai-emp-126"
employee
channel
customer/user context
proposed output
reason for review
risk signal
knowledge used
allowed actions
approve/edit/reject/escalate actions
```

Review queue must be fast, clear, and safe.

It is a core product surface, not an afterthought.

---

# 80. Approval Actions

Review actions may include:

```text id="ai-emp-127"
approve
edit and approve
reject
request revision
escalate
add knowledge
change rule
pause automation
```

Each action must have clear state transition.

Approving external messages must be server-confirmed.

---

# 81. Brand Voice Policy

Employees must follow organization brand voice.

Brand voice may define:

```text id="ai-emp-128"
tone
formality
language
allowed phrases
forbidden phrases
signature style
emoji policy
apology style
escalation wording
```

Brand voice must not override safety or accuracy.

---

# 82. Multilingual Policy

Employees may need multilingual behavior.

Language policy should define:

```text id="ai-emp-129"
supported languages
fallback language
translation behavior
RTL handling
language-specific tone
language-specific escalation
mixed-language behavior
```

For Persian/RTL, ensure product copy and generated replies respect natural language and direction.

---

# 83. Output Contract

Employee output must be structured according to task.

Output may include:

```text id="ai-emp-130"
answer
confidence signal
knowledge references
proposed action
required review reason
fallback reason
next step
risk warning
```

Do not rely only on free-form text for system decisions.

Use structured outputs where actions, safety, or workflow decisions depend on them.

---

# 84. Structured Output Rule

For tool decisions and workflow execution, require structured output.

Example conceptual schema:

```ts id="ai-emp-131"
type EmployeeDecision = {
  intent: string;
  responseDraft: string | null;
  recommendedAction: EmployeeAction | null;
  requiresReview: boolean;
  reviewReason?: string;
  confidence: "low" | "medium" | "high";
  riskLevel: "low" | "medium" | "high" | "critical";
};
```

Structured output must be validated before use.

---

# 85. Refusal and Boundary Language

Employees need safe boundary language.

Good:

```text id="ai-emp-132"
I do not have enough approved information to answer that. I can send this to the team for review.
```

Good:

```text id="ai-emp-133"
I cannot approve refunds directly, but I can collect the order details and escalate this to the team.
```

Bad:

```text id="ai-emp-134"
I am just an AI and cannot help.
```

Refusal should preserve usefulness.

---

# 86. Employee Status Copy

Status copy must be product-facing.

Good:

```text id="ai-emp-135"
Setup incomplete
Ready to deploy
Deploying employee
Active
Paused
Needs review
Deployment failed
```

Bad:

```text id="ai-emp-136"
Agent booting
Runtime initialized
Worker failed
Vector ready
Task queued
```

Status must explain user meaning.

---

# 87. AI Employee UX States

Employee UI must support:

```text id="ai-emp-137"
loading employee
employee not found
permission denied
setup incomplete
ready to deploy
deploying
active
paused
needs review
failed
archived
knowledge missing
channel disconnected
workflow disabled
cost threshold reached
```

Do not show a generic active/inactive toggle for complex lifecycle.

---

# 88. Safety Review Checklist

Before deploying an employee, verify:

```text id="ai-emp-138"
Is the role clear?
Is scope explicit?
Are forbidden actions defined?
Are required knowledge sources connected?
Are knowledge sources ready?
Are channels selected?
Is autonomy level safe?
Is review policy configured?
Are tool permissions constrained?
Are escalation paths defined?
Are fallback behaviors defined?
Are cost limits considered?
Are high-risk actions blocked or reviewed?
Are permissions enforced by backend?
Is test mode available?
Is activity logging enabled?
```

If any answer is no, do not deploy automatically.

---

# 89. Product Review Checklist

Before adding a new employee type, verify:

```text id="ai-emp-139"
Does this employee map to a real business role?
Does it solve a repeated business problem?
Can users understand its value quickly?
Can setup complete within a reasonable time?
Is required knowledge available?
Can success be measured?
Can risk be bounded?
Can failure be recovered from?
Can the employee be priced or packaged?
Does it fit Ariyo language and product model?
```

Do not add employee types only because a model can perform the task.

---

# 90. Engineering Review Checklist

Before implementing employee functionality, verify:

```text id="ai-emp-140"
Are lifecycle states typed?
Are risk levels typed?
Are autonomy levels typed?
Are review modes typed?
Are tool schemas validated?
Are API responses parsed or typed?
Are query keys scoped by organization?
Are high-trust states server-confirmed?
Are permissions backend-enforced?
Are logs/audit events planned?
Are tests covering critical transitions?
```

Architecture must be enforceable in code.

---

# 91. Decision Tree

When designing an AI employee, ask:

### Is this a real business role?

If no, do not create an employee.

### Can the role be scoped clearly?

If no, narrow the role.

### Does it need business knowledge?

If yes, define required knowledge sources.

### Can it affect customers or business records?

If yes, assign risk level and review policy.

### Does it call tools?

If yes, define tool schemas, permissions, approval, and audit logging.

### Can it act automatically?

If yes, define autonomy level and fallback rules.

### Can success be measured?

If no, define measurable outcomes before shipping.

### Can failure be recovered from?

If no, add recovery or do not automate.

---

# 92. Forbidden Product Patterns

Never design Ariyo employees as:

```text id="ai-emp-141"
generic chatbot
prompt-only assistant
model selector
plugin wrapper
agent with unlimited tools
AI that answers everything
hidden automation
black-box worker
unbounded customer reply bot
unmeasured automation
```

AI employees must be bounded business roles.

---

# 93. Forbidden Architecture Patterns

Never ship:

```text id="ai-emp-142"
employee without scope
employee without review policy
employee without lifecycle states
employee without knowledge policy
employee without fallback behavior
employee without performance metrics
employee without activity logging
employee with all tools enabled by default
employee with customer-facing automatic replies by default
employee active before server confirmation
knowledge ready before server confirmation
workflow published without validation
high-risk tool execution from raw model output
unknown status mapped to active
permissions enforced only in frontend
cross-organization employee data access
unvalidated JSON configuration
```

---

# 94. Forbidden UX Patterns

Never show:

```text id="ai-emp-143"
Install agent
Launch bot
Run AI
Agent active
Embedding ready
Vector sync complete
Celery task failed
Worker running
Something went wrong
Auto mode enabled without explanation
Active state without setup clarity
Disabled deploy button without reason
Success before server confirmation
```

Use Ariyo product language and safety states.

---

# 95. Forbidden Safety Patterns

Never allow:

```text id="ai-emp-144"
automatic high-risk actions by default
billing changes by employee without approval
permission changes by employee without approval
destructive actions without confirmation
external replies without configured review/autonomy policy
answering from missing knowledge
inventing policies
ignoring escalation triggers
unbounded retries
hidden memory storage
sensitive data in prompts without policy
```

Safety is a product feature.

---

# 96. Minimum Viable AI Employee

A minimum viable AI employee must have:

```text id="ai-emp-145"
name
role
category
short description
in-scope tasks
out-of-scope tasks
required knowledge checklist
default review policy
default autonomy level
allowed channels
allowed tools
fallback behavior
lifecycle state
setup checklist
basic activity logging
success metric
```

If any of these are missing, the employee is a prototype, not production-ready.

---

# 97. Production-Ready AI Employee

A production-ready AI employee must have:

```text id="ai-emp-146"
validated configuration
server-confirmed lifecycle state
organization-scoped permissions
knowledge readiness checks
tool authorization
typed workflow triggers
autonomy policy
review queue integration
audit logs for high-risk actions
activity history
performance dashboard
AI cost tracking
evaluation scenarios
fallback and escalation behavior
pause/resume controls
security and privacy guardrails
tests for critical transitions
```

Production-ready means safe to trust with real business workflows.

---

# 98. Ariyo AI Employee Golden Rule

An Ariyo AI employee must be useful before it is autonomous, measurable before it is trusted, and safe before it is powerful.

---

# 99. Senior AI Product Rule

Do not build intelligence as magic.

Build intelligence as role, scope, knowledge, tools, review, safety, measurement, and improvement loop.

---

# 100. Final Rule

Ariyo AI employees are production-ready only when they are role-based, bounded, knowledge-grounded, permission-aware, tool-controlled, channel-aware, reviewable, observable, measurable, cost-aware, privacy-safe, and honest about uncertainty.

Any implementation that treats an AI employee as a generic agent, chatbot, prompt, or unbounded automation system violates Ariyo architecture.
