# Ariyo AI Employee Marketplace Skill

Version: 1.0.0  
Product: Ariyo  
Purpose: Act as a Senior Product Strategist, AI Employee Marketplace Architect, UX Lead, Trust & Safety Reviewer, and Marketplace Growth Designer for Ariyo.  
Audience: Codex Agents and AI-assisted development tools.  
Priority: Non-negotiable.

## Dependencies

This skill depends on and must remain consistent with:

- product-strategy.md
- domain-model.md
- ai-employee-architecture.md
- knowledge-rag.md
- business-context.md
- prompt-tool-orchestration.md
- workflow-automation.md
- ai-safety-evaluation.md
- monetization-billing.md
- product-analytics-growth.md
- api-contracts.md
- backend-architecture.md
- frontend-design.md
- frontend-components.md
- frontend-copywriting.md
- frontend-responsive.md
- frontend-state-data.md
- frontend-forms-validation.md
- frontend-testing.md
- frontend-performance.md
- deployment-ops.md

If conflicts exist:

- product-strategy.md wins for product positioning and what Ariyo is.
- domain-model.md wins for canonical entities, relationships, states, and ownership.
- ai-employee-architecture.md wins for AI employee identity, scope, autonomy, lifecycle, and safety requirements.
- knowledge-rag.md wins for knowledge source, retrieval, grounding, freshness, and citations.
- business-context.md wins for organization-specific context, brand, policy, and operating rules.
- prompt-tool-orchestration.md wins for model/tool orchestration and execution control.
- workflow-automation.md wins for workflow triggers, actions, approval, and execution lifecycle.
- ai-safety-evaluation.md wins for risk scoring, safety gates, evaluation, and human review policy.
- monetization-billing.md wins for entitlements, pricing, plan limits, AI cost, and billing safety.
- product-analytics-growth.md wins for activation, marketplace performance, funnel metrics, and growth loops.
- frontend skills win for UI implementation, interaction, copy, accessibility, responsive behavior, and performance.

---

# Core Contract

Ariyo Marketplace is not a bot store.

Ariyo Marketplace is the hiring surface for role-based AI employees.

A marketplace employee must feel like a business role a company can hire, configure, supervise, and measure — not like an app, plugin, prompt, automation snippet, or generic AI agent.

Every marketplace experience must answer:

```text
Who is this employee?
What business problem does it solve?
What work can it do?
What does it need before it can work?
Where can it work?
What knowledge does it need?
What integrations does it need?
What risk level does it carry?
How much autonomy is safe?
How fast can the user get value?
How will success be measured?
What will this cost or unlock?
What happens after hiring?
```

The marketplace must create confidence before deployment.

---

# Marketplace Mission

The Ariyo AI Employee Marketplace must help organizations discover, evaluate, hire, configure, and deploy AI employees that produce measurable business outcomes.

The marketplace must optimize for:

```text
fast role discovery
clear business fit
low setup confusion
safe deployment readiness
high first-time-to-value
trust through transparency
measurable employee outcomes
controlled AI cost
safe autonomy progression
activation and expansion
```

The marketplace must not optimize for:

```text
largest number of bots
flashy AI demos
vague capability claims
prompt browsing
plugin-like installation
unbounded automation
hidden setup complexity
fake readiness
fake success metrics
```

---

# Marketplace Product Principle

A user should not feel like they are installing software.

A user should feel like they are hiring a capable business employee with clear scope, required onboarding, measurable output, and safe supervision.

Preferred language:

```text
Hire employee
Deploy employee
Review setup
Connect source
Connect channel
Add business context
Set review mode
View performance
Pause employee
```

Avoid:

```text
Install bot
Add agent
Enable plugin
Launch automation
Run model
Activate prompt
Deploy bot
```

---

# Marketplace Entity Model

The marketplace must distinguish clearly between these entities:

```text
Employee Template
Hired Employee
Deployment
Setup Requirement
Capability
Integration Requirement
Knowledge Requirement
Channel Requirement
Autonomy Policy
Review Policy
Risk Profile
Success Metric
Pricing Impact
Marketplace Category
Template Version
Preview Scenario
```

These entities must not be collapsed into one vague object.

---

# Employee Template Definition

An Employee Template is a reusable product-defined blueprint for hiring an AI employee.

An Employee Template is not an active employee.

An Employee Template may define:

```text
role name
category
business promise
ideal customer profile
primary jobs to be done
responsibilities
non-responsibilities
required knowledge
optional knowledge
required integrations
optional integrations
supported channels
default workflows
default review policy
default autonomy level
risk level
setup complexity
time to value estimate
pricing impact
plan requirements
success metrics
preview scenarios
evaluation requirements
safety policy
template version
publication status
```

A template becomes a Hired Employee only after the organization hires it.

A Hired Employee becomes Active only after required setup and deployment are complete.

---

# Employee Template Required Fields

Every marketplace template must include:

```text
templateId
name
shortDescription
category
roleSummary
businessOutcome
primaryUseCases
responsibilities
outOfScope
requiredSetup
supportedChannels
requiredKnowledge
requiredIntegrations
riskLevel
defaultReviewMode
defaultAutonomyLevel
setupComplexity
timeToValue
successMetrics
pricingImpact
status
version
```

Optional but recommended fields:

```text
industryFit
companySizeFit
recommendedFor
notRecommendedFor
exampleTasks
previewScenarios
requiredPermissions
estimatedAiCostRange
activationChecklist
implementationNotes
```

Missing required marketplace fields make the template not production-ready.

---

# Employee Template Example Shape

Use product-facing names.

```ts
type EmployeeTemplate = {
  id: EmployeeTemplateId;
  name: string;
  category: MarketplaceCategory;
  shortDescription: string;
  roleSummary: string;
  businessOutcome: string;
  primaryUseCases: string[];
  responsibilities: string[];
  outOfScope: string[];
  supportedChannels: ChannelType[];
  requiredKnowledge: KnowledgeRequirement[];
  requiredIntegrations: IntegrationRequirement[];
  requiredSetup: SetupRequirement[];
  riskLevel: EmployeeRiskLevel;
  defaultReviewMode: ReviewMode;
  defaultAutonomyLevel: AutonomyLevel;
  setupComplexity: SetupComplexity;
  timeToValue: TimeToValueEstimate;
  successMetrics: SuccessMetricDefinition[];
  pricingImpact: PricingImpact;
  status: EmployeeTemplateStatus;
  version: TemplateVersion;
};
```

Do not expose backend or model terms in marketplace-facing template data.

---

# Marketplace Category System

Categories must map to business functions, not AI techniques.

Preferred categories:

```text
Customer Support
Sales
Marketing
Operations
HR
Finance
E-commerce
Admin
Knowledge Management
Workflow Automation
Analytics
```

Avoid categories:

```text
Chatbots
LLM Tools
Prompts
Embeddings
Agents
Vector Search
GPT Apps
Plugins
Automation Scripts
```

Categories should help business users find roles they recognize.

---

# Category Quality Rule

Each category must have:

```text
clear business function
short explanation
recommended first employee
common use cases
setup requirements
risk guidance
success metrics
```

A category must not be a technical grouping.

Bad:

```text
RAG Employees
Tool-Calling Agents
Prompt Templates
```

Good:

```text
Customer Support
Sales
Operations
```

---

# Marketplace Naming Rule

Employee names must sound like roles, not software features.

Good:

```text
Customer Support Employee
Sales Follow-up Employee
Lead Qualification Employee
Order Status Employee
Knowledge Assistant Employee
HR Policy Employee
Invoice Follow-up Employee
Appointment Scheduling Employee
```

Avoid:

```text
SupportBot
GPT Sales Agent
RAG Assistant
AutoResponder Pro
AI Chat Plugin
Smart Workflow Bot
```

Names must be clear, searchable, and business-readable.

---

# Role Promise Rule

Each employee must have one clear product promise.

Good:

```text
Answers customer questions using approved business knowledge.
```

Good:

```text
Qualifies new leads and routes qualified opportunities to your sales team.
```

Bad:

```text
An intelligent AI agent for your business.
```

Bad:

```text
Automates everything with AI.
```

Specific role promises increase trust and conversion.

---

# Business Outcome Rule

Each marketplace employee must clearly state the business outcome it is designed to improve.

Examples:

```text
Reduce support response time.
Increase lead qualification speed.
Improve customer self-service.
Reduce missed follow-ups.
Keep order status replies consistent.
Help teams find internal answers faster.
Reduce manual triage work.
```

Do not describe employees only by capabilities.

Describe what improves for the business.

---

# Responsibility Rule

Every employee template must list responsibilities.

Responsibilities should be concrete actions or work outputs.

Good:

```text
Answer common support questions.
Suggest replies for unresolved tickets.
Collect missing lead information.
Route qualified leads to sales.
Summarize customer conversations.
Prepare draft follow-up messages.
```

Bad:

```text
Use AI to help customers.
Do automation.
Understand your business.
Be smart.
```

Responsibilities must be measurable and reviewable.

---

# Out-of-Scope Rule

Every employee template must define what it does not do.

Examples:

```text
Does not issue refunds without approval.
Does not change billing settings.
Does not make legal claims.
Does not send customer-facing replies unless review mode allows it.
Does not answer from unapproved sources.
Does not access disconnected integrations.
Does not override organization policies.
```

Out-of-scope definitions are required for safety and trust.

---

# Supported Channel Rule

Marketplace templates must declare supported channels.

Examples:

```text
Website chat
Email
WhatsApp
Telegram
Slack
Helpdesk
CRM
Internal dashboard
```

A template must not imply it works everywhere.

If a channel is unsupported, show it clearly.

Good:

```text
Works in: Website chat, Email
Not available yet: WhatsApp
```

Do not hide channel limitations.

---

# Required Setup Rule

Every employee template must define setup requirements before deployment.

Setup requirements may include:

```text
business context
knowledge source
channel connection
integration connection
review mode
working hours
brand voice
escalation rule
permission approval
billing entitlement
```

The marketplace must show setup requirements before hiring or deployment.

Users should never discover required setup only after failure.

---

# Setup Requirement Types

Use explicit requirement types:

```text
business_context_required
knowledge_source_required
channel_required
integration_required
review_policy_required
permission_required
billing_plan_required
safety_review_required
workflow_required
```

Each requirement must include:

```text
requirementId
title
description
requiredForDeployment
blocking
estimatedTime
setupAction
status
```

Requirements must be actionable.

---

# Deploy Readiness Rule

A marketplace employee must not be deployable until blocking requirements are complete.

Readiness states:

```text
not_hired
hired
setup_required
ready_to_deploy
deploying
active
needs_review
failed
paused
```

Do not show Deploy employee when the employee is not deploy-ready.

Show what remains.

Good:

```text
Connect a channel before deploying this employee.
```

Bad:

```text
Unavailable.
```

---

# Hire vs Deploy Rule

Hiring and deploying are different actions.

Hire means:

```text
the organization has selected the employee template and created a hired employee record.
```

Deploy means:

```text
the hired employee is configured, connected, authorized, and activated for one or more channels or workflows.
```

Never treat hire as active deployment.

Do not show active state after hire alone.

---

# Hire Flow Rule

The hire flow should be simple, clear, and low risk.

Required hire flow states:

```text
view employee template
review role promise
review required setup
review pricing/plan impact
hire employee
employee added to workspace
continue to setup
```

Hire success copy:

```text
Employee hired. Complete setup to deploy it.
```

Avoid:

```text
Installed.
Bot activated.
Agent launched.
```

---

# Deploy Flow Rule

Deployment is high-trust and must follow ai-employee-architecture.md and workflow-automation.md.

Required deploy flow:

```text
review setup
verify required knowledge
verify channel
verify permissions
select review mode
confirm scope
start deployment
show pending state
confirm active from server
show next monitoring step
```

Do not skip review for employees that can perform customer-facing actions.

---

# Preview Experience Rule

Marketplace preview should help users understand fit before hiring.

Approved preview formats:

```text
sample conversation
sample task
sample output
role walkthrough
setup checklist preview
expected business outcome
safe simulation
```

Preview must not imply the employee can act before setup.

Avoid fake production-like results.

Good:

```text
Example reply using approved knowledge
```

Bad:

```text
This employee will reduce tickets by 80%
```

unless backed by measured data and context.

---

# Demo and Simulation Rule

Simulations must be labeled clearly.

Good:

```text
Preview example
Sample output
Simulated conversation
```

Bad:

```text
Live result
Actual performance
```

when not based on the organization’s real connected data.

Never blend demo data into production state.

---

# Trust Signal Rule

Marketplace templates should include trust signals where available.

Possible trust signals:

```text
requires review by default
uses approved business context
supports citations
safe fallback behavior
permission-aware actions
evaluation coverage
recommended for first deployment
low setup complexity
customer-facing risk label
AI cost estimate
```

Do not invent trust signals.

Trust signals must be true.

---

# Risk Level Rule

Every employee template must have a risk level.

Recommended levels:

```text
low
medium
high
restricted
```

Risk level depends on:

```text
customer-facing behavior
financial impact
permission scope
automation autonomy
integration access
sensitive data access
irreversible actions
brand risk
compliance sensitivity
```

Risk must influence setup, review mode, permissions, and deployment gates.

---

# Risk Label Copy Rule

Risk labels must be understandable.

Good:

```text
Low risk: drafts internal answers only.
Medium risk: can prepare customer replies for review.
High risk: can send customer-facing messages after approval.
```

Bad:

```text
Risk: 2
Safety level: L3
Moderation class: M
```

Use product language.

---

# Autonomy Level Rule

Each employee template must define default autonomy level.

Recommended autonomy levels:

```text
draft_only
suggest_for_review
act_with_approval
autonomous_with_limits
restricted
```

Autonomy must not be a vague toggle.

It must define what the employee can do without human approval.

---

# Review Mode Rule

Review mode must be explicit for customer-facing or high-risk employees.

Examples:

```text
Require review
Allow automatic replies after approval
Draft only
Internal answers only
```

Default should be conservative.

For many marketplace employees, default review mode should be:

```text
Require review
```

Do not default users into unsafe automation.

---

# Knowledge Requirement Rule

Templates must define what knowledge they need.

Examples:

```text
FAQ source
Product catalog
Refund policy
Shipping policy
Pricing page
Internal handbook
Sales qualification criteria
Brand voice guide
Support escalation rules
```

Each knowledge requirement should define:

```text
name
why it is needed
required or optional
acceptable source types
freshness requirement
blocking status
```

Employees must not answer from missing required knowledge.

---

# Knowledge Readiness Rule

Marketplace and deployment UI must distinguish:

```text
No source connected
Source connected
Syncing source
Source ready
Source needs review
Sync failed
Source outdated
```

Do not show knowledge-ready state until confirmed by knowledge-rag.md lifecycle.

Avoid backend terms:

```text
embedding
vector
indexing
chunking
```

in user-facing marketplace copy.

---

# Integration Requirement Rule

Templates must define required and optional integrations.

Examples:

```text
CRM
Helpdesk
Website chat
Email
WhatsApp
Google Drive
Notion
Slack
Calendar
Billing system
Order system
```

Each integration requirement must define:

```text
integrationType
requiredForDeployment
requiredPermissions
whatEmployeeUsesItFor
failureImpact
setupAction
```

Do not imply integration access if not connected and authorized.

---

# Permission Requirement Rule

Marketplace templates must declare required permissions.

Examples:

```text
manage_employees
connect_integrations
manage_knowledge_sources
deploy_employee
manage_workflows
view_billing
manage_billing
approve_ai_outputs
```

If the user lacks permission, show clear copy:

```text
Only admins can deploy this employee.
```

Do not show permission failures as generic unavailable states.

---

# Pricing Impact Rule

Marketplace templates must show plan or billing impact where relevant.

Pricing information may include:

```text
included in current plan
requires upgrade
counts as active employee
uses AI credits
requires integration add-on
enterprise-only
estimated AI cost range
```

Do not hide pricing constraints until deployment.

Good:

```text
Included in your plan. Counts as 1 active employee after deployment.
```

Good:

```text
Requires Growth plan to deploy on WhatsApp.
```

---

# Entitlement Rule

Marketplace actions must respect entitlements.

Entitlements may control:

```text
number of hired employees
number of active employees
allowed categories
allowed integrations
allowed channels
workflow automation level
review queue features
AI usage limits
advanced analytics
enterprise governance
```

Entitlement checks must be server-confirmed.

Do not enforce billing only through frontend hiding.

---

# AI Cost Estimate Rule

If shown, AI cost estimates must be honest and labeled.

Good:

```text
Estimated AI cost: low to medium, depending on conversation volume.
```

Bad:

```text
Free AI forever.
```

or exact cost predictions without enough data.

AI cost estimates must not create false certainty.

---

# Success Metrics Rule

Every template must define success metrics.

Examples:

```text
response time reduced
qualified leads created
tickets resolved with review
manual work saved
reply acceptance rate
source-grounded answer rate
human review approval rate
automation success rate
escalation accuracy
AI cost per successful outcome
```

Avoid vanity metrics:

```text
messages generated
tokens used
prompts run
AI activity count
```

unless tied to business outcomes.

---

# Recommended First Employee Rule

The marketplace should help users choose a first employee.

Recommended first employee should be:

```text
low to medium risk
quick setup
clear business outcome
limited integration requirement
knowledge-grounded
review mode by default
fast first value
```

Avoid recommending high-risk autonomous employees first.

---

# Marketplace Ranking Rule

Ranking should prioritize fit and readiness, not hype.

Ranking inputs may include:

```text
user role
organization industry
connected channels
connected knowledge sources
existing integrations
plan entitlements
activation stage
team size
business context completeness
previous employee usage
setup complexity
risk level
```

Do not rank only by popularity or marketing value.

---

# Personalized Recommendation Rule

Recommendations must be explainable.

Good:

```text
Recommended because you connected your helpdesk and added support policies.
```

Bad:

```text
Recommended for you.
```

without reason.

Explainability improves trust and activation.

---

# Search and Filter Rule

Marketplace search and filters must map to business intent.

Useful filters:

```text
Category
Use case
Setup complexity
Risk level
Supported channel
Required integration
Time to value
Plan availability
Review mode
Recommended for first deployment
```

Avoid technical filters:

```text
Model type
Embedding method
Tool count
Prompt length
Agent framework
```

unless the product exposes a developer marketplace later.

---

# Marketplace Card Rule

Marketplace card must show enough to decide whether to open details.

Required card content:

```text
employee name
category
short business promise
primary outcome
setup complexity
risk level
supported channels or main requirement
primary CTA
```

Optional:

```text
recommended badge
included in plan badge
time to value
requires setup badge
```

Do not overload cards with every detail.

---

# Marketplace Card CTA Rule

Primary CTA depends on state.

Possible CTAs:

```text
View employee
Hire employee
Continue setup
Deploy employee
Review requirements
Upgrade to deploy
```

Avoid:

```text
Install
Enable
Launch
Start
Proceed
OK
```

CTA must reflect lifecycle truth.

---

# Employee Detail Page Rule

Employee detail page must help user decide and prepare.

Required sections:

```text
role summary
business outcome
responsibilities
what this employee will not do
supported channels
required setup
required knowledge
required integrations
review and autonomy default
risk level
pricing/plan impact
success metrics
preview scenario
hire/deploy CTA
```

For high-risk employees, include safety and review explanation.

---

# Setup Checklist Rule

Setup checklist must be visible and actionable.

Good checklist items:

```text
Add business context
Connect a knowledge source
Connect website chat
Choose review mode
Review employee scope
```

Each item must have:

```text
status
action
blocking or optional label
clear copy
```

Do not show vague checklist items like:

```text
Configure AI
Set up model
Prepare data
```

---

# Marketplace Lifecycle Rule

Employee template lifecycle:

```text
draft
internal_review
approved
published
deprecated
archived
```

Hired employee lifecycle:

```text
hired
setup_required
ready_to_deploy
deploying
active
paused
failed
archived
```

Template lifecycle and hired employee lifecycle must not be confused.

---

# Template Versioning Rule

Employee templates must be versioned.

Versioning matters for:

```text
role definition
responsibilities
safety policy
default prompts
default tools
default workflows
required setup
success metrics
pricing impact
```

Existing hired employees should not silently change behavior when template changes.

Changes to active employees require migration or explicit update policy.

---

# Template Publication Rule

A marketplace template cannot be published until it passes review.

Review must include:

```text
product fit
role clarity
responsibility clarity
out-of-scope clarity
setup requirements
risk classification
safety policy
evaluation coverage
copy quality
pricing impact
activation path
```

Unreviewed templates must not appear in production marketplace.

---

# Template Deprecation Rule

Deprecated templates must be handled safely.

Rules:

```text
new users cannot hire deprecated templates
existing hired employees keep working if safe
show replacement recommendation when available
migration path should be defined
archive only when no longer supported
```

Do not silently remove active employees because template is deprecated.

---

# Marketplace Safety Review Rule

High-risk templates require stronger safety review before publication.

High-risk examples:

```text
customer-facing automatic replies
billing-related employees
permission-changing employees
workflow publishing employees
integration action employees
financial or legal-sensitive employees
employees that can trigger external actions
```

High-risk templates must default to review or restricted autonomy unless explicitly approved.

---

# Template Evaluation Rule

Each template must define evaluation requirements.

Evaluation may include:

```text
role adherence
out-of-scope refusal
knowledge grounding
citation accuracy
escalation correctness
tone compliance
tool selection correctness
safe fallback behavior
cost behavior
channel-specific output quality
```

Templates without evaluation coverage should not be promoted.

---

# Output Quality Rule

Marketplace employees must not be judged only by fluency.

Quality requires:

```text
correct answer
grounded answer
safe answer
on-brand answer
in-scope answer
actionable answer
cost-appropriate answer
reviewable answer
```

Do not claim quality without measurable evaluation.

---

# Marketplace Analytics Rule

Marketplace must emit analytics that measure activation and quality.

Important events:

```text
marketplace_viewed
employee_template_viewed
employee_template_searched
employee_template_filtered
employee_template_recommended_viewed
employee_hire_clicked
employee_hired
setup_requirement_started
setup_requirement_completed
employee_ready_to_deploy
employee_deploy_clicked
employee_deployed
employee_deploy_failed
employee_template_dismissed
upgrade_required_seen
```

Events must avoid sensitive data and follow product-analytics-growth.md.

---

# Marketplace Funnel Rule

Track funnel stages:

```text
view marketplace
view employee template
hire employee
complete setup
ready to deploy
deploy employee
first successful outcome
repeat usage
second employee hired
```

Marketplace success is not template views.

Marketplace success is successful, safe employee activation.

---

# Marketplace North Star Support Rule

Marketplace must support Ariyo's North Star:

```text
verified AI employee outcomes completed safely
```

Therefore marketplace should optimize for:

```text
right employee hired
setup completed
employee deployed safely
first outcome achieved
ongoing success measured
```

Do not optimize only for hire count.

---

# Marketplace Copy Rule

Marketplace copy must follow frontend-copywriting.md.

Use:

```text
employee
AI employee
hire
deploy
knowledge source
business context
workflow
channel
integration
review
activity
performance
AI cost
```

Avoid:

```text
agent
bot
plugin
prompt
install
embedding
vector
LLM
model run
```

unless inside developer/internal docs.

---

# Employee Marketplace Empty State Rule

Marketplace empty states must guide the user.

Examples:

```text
No employees match these filters. Clear filters to see more employees.
```

```text
No employees are available for your current plan. Upgrade to hire more specialized employees.
```

```text
No employees are available for this channel yet. Try another channel or connect a supported integration.
```

Empty must not feel broken.

---

# Plan Restriction UX Rule

If a template requires upgrade, explain why.

Good:

```text
Requires Growth plan because this employee can work across multiple channels.
```

Bad:

```text
Locked.
```

Plan restrictions should educate and convert, not frustrate.

---

# Marketplace Permission UX Rule

If user cannot hire or deploy, explain access.

Good:

```text
Only admins can hire employees.
```

Good:

```text
Only admins can deploy employees to customer-facing channels.
```

Do not show permission failure as empty, locked, or unknown.

---

# Marketplace Backend Boundary Rule

Marketplace API must separate:

```text
available templates
hired employees
template recommendations
setup requirements
readiness state
entitlements
pricing impact
```

Do not require frontend to infer these from scattered endpoints.

Recommended endpoints:

```text
GET /api/v1/employee-templates
GET /api/v1/employee-templates/{templateId}
POST /api/v1/employees/hire
GET /api/v1/employees/{employeeId}/setup-requirements
GET /api/v1/employees/{employeeId}/readiness
POST /api/v1/employees/{employeeId}/deploy
```

Exact API must follow api-contracts.md.

---

# Marketplace Data Safety Rule

Marketplace templates are product content and must not expose secrets.

Do not include:

```text
system prompts
raw tool credentials
internal safety policy internals
private evaluation datasets
secret integration scopes
model provider keys
private operational notes
```

Marketplace data shown to users must be safe and product-facing.

---

# Marketplace Admin Rule

If Ariyo later supports internal marketplace administration, admin surfaces must include:

```text
template draft editor
review workflow
risk classification
setup requirements editor
copy review
evaluation status
publication status
version history
deprecation controls
analytics
```

Admin marketplace publishing is high-trust and must be permission-controlled.

---

# Employee Template Quality Checklist

Before publishing a template, verify:

```text
Does it have a business-readable name?
Does it have one clear promise?
Does it define responsibilities?
Does it define out-of-scope behavior?
Does it define supported channels?
Does it define required setup?
Does it define required knowledge?
Does it define required integrations?
Does it define permissions?
Does it define risk level?
Does it define default review mode?
Does it define autonomy level?
Does it define pricing impact?
Does it define success metrics?
Does it define preview scenarios?
Does it have safe copy?
Does it avoid bot/agent/plugin language?
Does it pass safety review?
Does it have evaluation coverage?
Does it support activation?
```

If any answer is no, the template is not ready.

---

# Marketplace UI Review Checklist

Before shipping marketplace UI, verify:

```text
Can users understand what each employee does?
Can users compare employees easily?
Are setup requirements visible before deployment?
Are risk and review modes clear?
Are pricing/plan impacts visible?
Are hire and deploy states separate?
Are empty/filter states handled?
Are cards accessible?
Are detail pages scannable?
Is mobile browsing strong?
Is search/filter behavior useful?
Are recommendations explainable?
Are permission states explicit?
Are upgrade states helpful?
Are technical AI terms hidden?
```

Marketplace must reduce uncertainty.

---

# Marketplace Decision Tree

Ask:

### Is this a template or a hired employee?

Use correct entity and lifecycle.

### Is the employee deploy-ready?

Check setup requirements and readiness state.

### Does this employee require knowledge?

Show knowledge requirements and source readiness.

### Does this employee act externally?

Show risk, review mode, permissions, and confirmation.

### Does this employee require a plan upgrade?

Show plan impact early.

### Does this employee need an integration?

Show integration requirement and setup action.

### Is this employee recommended?

Explain why.

### Is this employee high risk?

Require stronger safety and review defaults.

### Is this copy technical?

Rewrite in business/product language.

---

# Forbidden Marketplace Patterns

Never ship:

```text
bot store experience
plugin marketplace language
install agent CTA
launch bot CTA
vague AI employee promises
employees without out-of-scope definition
employees without setup requirements
employees without risk level
employees without review policy
employees without success metrics
hire treated as deployment
active state shown after hire only
fake readiness
fake preview results
fake performance claims
hidden pricing impact
hidden required integrations
hidden required knowledge
technical AI categories
embedding/vector/model terminology in user-facing marketplace
unexplained locked templates
permission failures shown as empty states
high-risk employees defaulting to full autonomy
unreviewed templates published
template changes silently altering active employees
marketplace ranking based only on hype/popularity
analytics that track views but not activation/outcomes
```

---

# Ariyo Marketplace Golden Rule

The marketplace should help users hire the right AI employee, complete the right setup, deploy safely, and reach measurable value quickly.

---

# Senior Marketplace Rule

Do not design a catalog of AI capabilities.

Design a hiring experience for trusted business roles.

---

# Final Rule

Ariyo AI Employee Marketplace is production-ready only when every employee template is role-based, business-readable, setup-aware, risk-classified, entitlement-aware, measurable, safe by default, deployable only after readiness, and presented as a trusted employee hiring experience rather than a bot, plugin, prompt, or generic agent marketplace.
