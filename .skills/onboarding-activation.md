# Ariyo Onboarding & Activation Skill

Version: 1.0.0
Product: Ariyo
Purpose:
Act as a Senior Product Growth Architect, Onboarding Strategist, Activation Designer, and AI SaaS Product Lead for Ariyo.
Audience:
Codex Agents and AI-assisted product/design/development tools.
Priority:
Non-negotiable.

Dependencies:
- product-strategy.md
- domain-model.md
- ai-employee-architecture.md
- ai-employee-marketplace.md
- business-context.md
- knowledge-rag.md
- workflow-automation.md
- prompt-tool-orchestration.md
- human-review-governance.md
- admin-permissions.md
- integration-ecosystem.md
- product-analytics-growth.md
- monetization-billing.md
- frontend-design.md
- frontend-components.md
- frontend-responsive.md
- frontend-copywriting.md
- frontend-state-data.md
- frontend-forms-validation.md
- frontend-testing.md
- frontend-performance.md

If conflicts exist:
- product-strategy.md wins for product positioning and value proposition.
- domain-model.md wins for entity names, lifecycle states, and source of truth.
- ai-employee-architecture.md wins for AI employee scope, readiness, lifecycle, and trust.
- ai-employee-marketplace.md wins for hire flow and employee template experience.
- business-context.md wins for business setup, brand voice, policy, and operating context.
- knowledge-rag.md wins for source readiness, retrieval, grounding, and knowledge safety.
- workflow-automation.md wins for automation readiness, triggers, approval, and execution lifecycle.
- admin-permissions.md wins for role, permission, and access control behavior.
- frontend-copywriting.md wins for user-facing copy.
- onboarding-activation.md wins for onboarding sequencing, activation paths, first value, checklist design, setup guidance, and conversion from signup to activated organization.

---

# Core Contract

Ariyo onboarding is not a tour.

Ariyo onboarding is the shortest safe path from a new organization to a working AI employee that delivers a verified business outcome.

Ariyo must not optimize onboarding for form completion.

Ariyo must optimize onboarding for trusted activation:

```text
business context captured
first AI employee hired
required knowledge connected
required channel connected
review mode understood
deployment readiness confirmed
first useful output produced
human trust established
next value path visible
```

The target is:

```text
First Time To Value < 5 minutes
```

but speed must never bypass safety, permissions, business context, or user trust.

---

# Purpose

This skill defines how Ariyo should onboard, activate, guide, and convert new users and organizations.

It governs:

```text
signup-to-value flow
workspace setup
organization setup
business context collection
AI employee recommendation
marketplace first hire
knowledge source connection
integration and channel connection
deploy readiness
review mode setup
first output generation
activation checklist
empty states
progressive onboarding
activation metrics
trial-to-paid conversion
team invite flow
permission-aware onboarding
industry-specific onboarding
returning user continuation
failed onboarding recovery
```

Ariyo onboarding must make the product feel intelligent before the user has configured everything.

---

# Onboarding Philosophy

Ariyo users should not be asked to understand the whole product before receiving value.

Onboarding must:

```text
reduce uncertainty
create momentum
show progress
ask only necessary questions
recommend the next best action
explain why each step matters
avoid technical language
avoid overwhelming setup
allow safe skipping where possible
preserve user input
recover from failed setup
turn empty product states into guided action
```

Ariyo onboarding should feel like hiring and preparing a capable employee, not configuring a technical AI pipeline.

---

# Activation Definition

An organization is not activated when it signs up.

An organization is activated when it reaches a meaningful first value event.

Primary activation event:

```text
First AI employee deployed with required business context, knowledge or channel setup, and a verified first useful action or answer.
```

Secondary activation events:

```text
business context completed
first employee hired
first knowledge source connected
first channel connected
first workflow created
first review approved
first AI employee action completed
first team member invited
first dashboard insight viewed
```

Ariyo must track activation as a lifecycle, not a single button click.

---

# First Time To Value Rule

Ariyo must aim for:

```text
First Time To Value < 5 minutes
```

This does not mean every advanced capability must be configured in five minutes.

It means the user should quickly experience one of:

```text
an AI employee recommended for their business
an AI employee answering using business context
an AI employee draft ready for review
an AI employee connected to a source
an AI employee ready to deploy
an AI employee completing a safe low-risk task
```

Do not force users through full enterprise setup before showing value.

---

# Onboarding Outcome Hierarchy

Ariyo onboarding should optimize for this order:

```text
1. User understands what Ariyo does
2. User sees a relevant AI employee
3. User provides minimum business context
4. User hires one employee
5. User connects required knowledge or channel
6. User sees deploy readiness
7. User receives or reviews first useful output
8. User trusts the result
9. User knows what to do next
10. User invites team or upgrades when value is clear
```

Do not optimize for account creation alone.

---

# Primary Onboarding Paths

Ariyo should support multiple activation paths depending on user intent.

Approved paths:

```text
Hire-first path
Business-context-first path
Use-case-first path
Integration-first path
Knowledge-source-first path
Guided demo path
Team-invite path
Admin setup path
```

The product should recommend one path based on user signals.

Do not force all users through the same linear wizard if their intent is clear.

---

# Default New Organization Flow

Recommended default flow:

```text
1. Welcome and product promise
2. Organization basics
3. Business goal selection
4. Recommended AI employee
5. Hire employee
6. Add minimum business context
7. Connect required source or channel
8. Review deployment readiness
9. Deploy or generate first reviewed output
10. Show first value and next actions
```

Each step must have one primary CTA.

---

# Welcome Screen Rule

The welcome screen must answer:

```text
What is Ariyo?
What will happen next?
How long will setup take?
What value will I get first?
```

Good copy:

```text
Set up your first AI employee

Ariyo will recommend an employee, connect the context it needs, and help you deploy it safely.
```

Avoid:

```text
Configure your AI stack
Create your agent
Start building automation
Set up embeddings
```

---

# Organization Setup Rule

Collect only the minimum organization information needed to guide setup.

Minimum fields may include:

```text
organization name
industry
company size
primary goal
website URL if available
language preference
primary channel if known
```

Do not require:

```text
full legal profile
billing information
team invitation
complete policy documentation
all integrations
complex workflow setup
```

before first value unless required by plan or compliance.

---

# Business Goal Selection Rule

Ask users what they want Ariyo to help with.

Preferred goal options:

```text
Support customers faster
Capture and qualify leads
Answer questions from business knowledge
Automate internal operations
Follow up with prospects
Summarize customer conversations
Reduce repetitive tasks
Track AI cost and performance
```

Goal selection should drive recommended employees, setup requirements, and activation path.

---

# Recommended Employee Rule

Ariyo should recommend a first AI employee based on business goal and context.

Recommendation must include:

```text
employee name
business role
what it can help with
why it is recommended
what it needs before deployment
estimated setup effort
risk/autonomy mode
first value expectation
```

Good copy:

```text
Recommended: Customer Support Employee

Best for answering repeated customer questions using your business knowledge.
```

Avoid recommending a generic “AI Assistant”.

---

# First Employee Selection Rule

The first employee should be easy to understand and safe to activate.

Best first employees:

```text
Customer Support Employee
Sales Assistant Employee
Knowledge Assistant Employee
Internal Operations Employee
Lead Qualification Employee
FAQ Employee
```

Avoid making the first employee:

```text
fully autonomous
billing-sensitive
permission-heavy
multi-integration dependent
complex workflow-driven
high-risk external action oriented
```

First value should be low-risk and visible.

---

# Hire Before Deploy Rule

Ariyo must separate hiring from deployment.

```text
Hire employee:
adds an employee to the workspace and starts setup.

Deploy employee:
activates the employee for real work after readiness checks.
```

Users should feel safe hiring before committing to automation.

Good CTA sequence:

```text
Hire employee
Set up employee
Review setup
Deploy employee
```

Bad sequence:

```text
Install bot
Launch agent
Start automation
```

---

# Minimum Viable Business Context Rule

Ariyo should collect enough context to make the first employee useful.

Minimum viable context may include:

```text
what the business does
who customers are
main products or services
brand tone
support or sales policy
forbidden claims
escalation rule
```

Do not require a complete business handbook before first value.

Use progressive context collection.

---

# Website Import Rule

If the user provides a website, Ariyo may use it to prefill business context.

Rules:

```text
show what was imported
let user review/edit
do not treat imported content as fully approved until confirmed
mark confidence when useful
avoid scraping sensitive or unsupported areas
handle unavailable website gracefully
```

Good copy:

```text
We found basic company information from your website. Review it before your employee uses it.
```

---

# Knowledge Source Setup Rule

Knowledge source setup should be framed as giving the employee reliable knowledge.

Good copy:

```text
Add a knowledge source

Connect a document, website, or help center so this employee can answer with your business context.
```

Avoid:

```text
Upload embeddings
Configure vector store
Run ingestion
Build index
```

Knowledge setup must show readiness state.

---

# Knowledge Readiness Rule

Do not allow unsafe deployment if required knowledge is missing or not ready.

Readiness states:

```text
No source connected
Source connected
Syncing source
Source ready
Source needs review
Sync failed
Source outdated
```

Deployment readiness must use these states.

Do not fake readiness.

---

# Channel Setup Rule

Channel setup connects the employee to where work happens.

Examples:

```text
website chat
email
WhatsApp
Telegram
Slack
CRM
helpdesk
internal dashboard
```

Channel setup must explain:

```text
where the employee will appear
what it can do there
whether it can reply automatically
whether human review is required
how to pause it
```

---

# Review Mode Setup Rule

During onboarding, review mode must be explicit.

Recommended default:

```text
Require review
```

Good copy:

```text
Require review
Your team can approve messages before they are sent.
```

Automatic action should require clearer setup and readiness.

Avoid defaulting new users into full autonomy.

---

# Deploy Readiness Checklist Rule

Before deployment, Ariyo must show a readiness checklist.

Checklist items may include:

```text
Employee hired
Business context added
Knowledge source ready
Channel connected
Review mode selected
Permissions confirmed
Safety checks passed
Billing entitlement available
```

Each item must have:

```text
status
short explanation
action to resolve if incomplete
```

Good CTA:

```text
Review setup
Deploy employee
```

---

# First Value Moment Rule

The first value moment should be explicit and memorable.

Examples:

```text
first answer generated from business context
first customer message drafted
first knowledge source ready
first employee deployed safely
first review item approved
first workflow completed
```

Ariyo should confirm value:

```text
Customer Support Employee is ready to answer using your knowledge source.
```

Do not end onboarding with a generic dashboard.

---

# First Output Rule

If safe, Ariyo should produce a first useful output during onboarding.

Examples:

```text
sample customer answer
support response draft
lead qualification summary
internal knowledge answer
policy-based response
workflow preview
```

Output must be clearly labeled:

```text
Draft
Preview
Needs review
Ready to approve
```

Do not imply real customer action if none occurred.

---

# Guided Setup Rule

Guided setup should be contextual, not generic.

Bad:

```text
Step 1: Configure settings
Step 2: Add data
Step 3: Finish
```

Good:

```text
1. Tell Ariyo what your business does
2. Hire your first AI employee
3. Add the knowledge it should use
4. Review how it will respond
5. Deploy safely
```

Every step should explain why it matters.

---

# Activation Checklist Rule

Ariyo should maintain an activation checklist for new organizations.

Example:

```text
Complete business context
Hire first employee
Connect first knowledge source
Connect first channel
Review first answer
Deploy first employee
Invite a teammate
```

Checklist behavior:

```text
persistent until activated
contextual to chosen goal
permission-aware
progressive
not overwhelming
shows completed states
links to next best action
```

Do not show irrelevant checklist items.

---

# Progressive Onboarding Rule

Do not ask every setup question upfront.

Use progressive disclosure:

```text
ask only what is needed for first value
collect advanced settings when relevant
delay billing prompts until value is clear or limit reached
delay team invitation until collaboration value is visible
delay complex workflow setup until employee is understood
```

Complex setup should appear after initial trust.

---

# Empty State as Onboarding Rule

New-user empty states must guide activation.

Good:

```text
No employees yet
Hire your first AI employee to start automating customer support, sales, or operations.
```

Good action:

```text
Hire employee
```

Bad:

```text
No data found.
```

Every early empty state should move users toward activation.

---

# Permission-Aware Onboarding Rule

Onboarding must respect user permissions.

If user cannot deploy:

```text
Only admins can deploy employees.

You can finish setup and ask an admin to deploy this employee.
```

If user cannot manage billing:

```text
Only billing admins can change this plan.
```

Do not show generic failures for permission gaps.

---

# Admin Onboarding Rule

Admins need setup and governance clarity.

Admin onboarding should emphasize:

```text
organization setup
roles and permissions
business context approval
knowledge source governance
review mode defaults
billing plan/limits
integration permissions
invite team
first employee deployment
```

Admins should understand control before automation expands.

---

# Member Onboarding Rule

Non-admin members should not be blocked by admin-only steps.

Member onboarding may focus on:

```text
view assigned employees
review AI drafts
approve or reject outputs
understand review queue
view activity
learn how to escalate
request access
```

Do not ask members to configure billing or deployment if they lack permission.

---

# Reviewer Onboarding Rule

Reviewers must understand responsibility.

Reviewer onboarding should explain:

```text
what needs review
how to approve
how to edit before approval
how to reject
when to escalate
how decisions are audited
what happens after approval
```

Reviewers are part of safety architecture.

---

# Industry-Specific Onboarding Rule

When possible, Ariyo should adapt onboarding by industry.

Industry context may affect:

```text
recommended employees
business context questions
forbidden claims
review mode defaults
knowledge source types
integrations
success metrics
compliance sensitivity
```

Examples:

```text
E-commerce:
Customer Support Employee, FAQ source, website chat, order policy.

Professional Services:
Lead Qualification Employee, website source, email channel, consultation policy.

Education:
Knowledge Assistant Employee, course documents, review mode required.
```

Do not overfit industry assumptions without user confirmation.

---

# Use-Case Template Rule

Ariyo may offer use-case templates.

A template should include:

```text
recommended employee
required context
recommended knowledge source
recommended channel
default review mode
success metric
estimated setup time
risk level
```

Templates must remain editable.

Do not lock users into a rigid path.

---

# Demo Mode Rule

Demo mode must be clearly labeled.

Allowed:

```text
sample employee
sample knowledge source
sample dashboard
sample output
```

Required:

```text
visible demo label
clear path to use real data
no fake production state
no fake billing data
no fake deployment success
```

Demo should help users understand value, not mislead them.

---

# Trial Onboarding Rule

Trial users should reach value before payment pressure when possible.

Trial onboarding should show:

```text
what is included
usage limits
employee limits
AI cost visibility
upgrade trigger
what happens when trial ends
```

Avoid hiding limits until failure.

Good copy:

```text
Your trial includes 1 active employee and enough AI usage to test your first workflow.
```

---

# Upgrade During Onboarding Rule

Upgrade prompts should appear when tied to value or a real limit.

Good upgrade triggers:

```text
user wants second active employee
user needs higher AI usage limit
user needs advanced integration
user needs automatic replies
user needs more reviewers or team members
user hits workflow limit
```

Bad upgrade triggers:

```text
before value
immediately after signup
blocking basic setup without explanation
fear-based copy
unclear pricing impact
```

Upgrade copy must be transparent.

---

# Billing During Onboarding Rule

Billing should not create confusion during first value.

Billing prompts must explain:

```text
current plan
included employees
usage limit
AI cost behavior
overage policy
what changes after upgrade
```

Do not ask for payment before users understand what they are buying unless business model requires it.

---

# Team Invite Rule

Team invitation should appear when collaboration creates value.

Good moments:

```text
after first employee is configured
after review mode selected
when approval is needed
when deployment requires admin
when knowledge source owner is needed
when billing admin is needed
```

Team invite copy should explain why:

```text
Invite a teammate to review this employee before deployment.
```

---

# Returning User Continuation Rule

Users who leave onboarding must return to the next best step.

Required:

```text
persist onboarding progress safely
resume incomplete setup
show current readiness state
avoid restarting from step one
preserve form drafts when safe
show what changed since last visit
```

Good copy:

```text
Continue setting up Customer Support Employee

Your knowledge source is ready. Review setup before deployment.
```

---

# Failed Setup Recovery Rule

Onboarding must recover from failures.

Common failures:

```text
website import failed
knowledge source sync failed
integration connection failed
permission denied
billing limit reached
deployment failed
AI output failed safety check
```

Each failure must show:

```text
what happened
safe state
how to retry or continue
whether progress was saved
```

Good copy:

```text
Could not sync source. The source remains connected. Retry sync or continue with business context only.
```

---

# Setup Skipping Rule

Users may skip non-critical steps.

Rules:

```text
never skip required safety steps silently
show impact of skipping
allow later completion
mark employee not ready if required setup is missing
```

Good copy:

```text
Skip for now
You can add a channel later. This employee cannot reply to customers until a channel is connected.
```

---

# Onboarding State Model

Recommended organization onboarding states:

```text
not_started
started
business_context_started
business_context_ready
employee_recommended
employee_hired
knowledge_connected
knowledge_ready
channel_connected
review_configured
ready_to_deploy
deployed
first_value_reached
activated
stalled
blocked
```

States must be server-owned when they affect product lifecycle.

Do not infer activation from local UI state only.

---

# Employee Setup State Model

Recommended employee setup states:

```text
not_hired
hired
setup_incomplete
needs_business_context
needs_knowledge_source
needs_channel
needs_review_policy
ready_to_deploy
deploying
active
failed
paused
```

Setup state must be derived from real requirements and server-confirmed readiness.

---

# Activation Blocking Reasons

Ariyo should show specific blockers.

Examples:

```text
business_context_missing
knowledge_source_missing
knowledge_source_syncing
channel_missing
review_mode_missing
permission_missing
billing_limit_reached
integration_reauthorization_required
safety_check_failed
```

Do not show vague “Setup incomplete”.

Show the next action.

---

# Next Best Action Rule

Ariyo should always know the next best activation action.

Examples:

```text
Complete business context
Hire recommended employee
Connect source
Review imported context
Connect channel
Choose review mode
Deploy employee
Invite reviewer
Upgrade plan
Retry sync
```

The dashboard for new users should not be a passive overview.

It should guide momentum.

---

# Smart Defaults Rule

Ariyo should provide safe smart defaults.

Examples:

```text
review mode: require review
language: organization language
employee recommendation: based on goal
knowledge requirement: based on employee role
channel requirement: based on use case
risk level: conservative by default
AI cost limit: plan default
```

Defaults must be editable.

Defaults must be safe.

---

# AI-Assisted Setup Rule

Ariyo may use AI to accelerate setup, but not to bypass confirmation.

AI-assisted setup can:

```text
summarize website
suggest business context
recommend employee
suggest knowledge source categories
draft brand voice
identify missing policies
suggest workflow starter
```

AI-assisted setup must not:

```text
auto-approve business context
auto-deploy employee
auto-enable automatic replies
auto-connect external systems without user action
invent policies
make unsupported claims
```

User review is required before AI-generated setup becomes trusted context.

---

# Business Context Review Rule

Business context must be reviewed before employee use when generated or imported.

Required UI:

```text
what was found
what is missing
what needs confirmation
what will be used by employees
```

Good CTA:

```text
Approve business context
```

Avoid:

```text
Done
Continue
```

---

# Onboarding Copy Rules

Onboarding copy must be:

```text
clear
specific
calm
action-oriented
business-focused
non-technical
trust-building
```

Use Ariyo terms:

```text
AI employee
employee
hire
deploy
knowledge source
business context
review
channel
workflow
```

Avoid:

```text
agent
bot
plugin
embedding
vector
LLM
prompt chain
ingestion
worker job
```

---

# Onboarding CTA Rules

CTAs must use Verb + Object.

Good:

```text
Hire employee
Add business context
Connect source
Review setup
Deploy employee
Invite reviewer
Retry sync
Approve draft
```

Avoid:

```text
Submit
Continue
Proceed
OK
Done
Next
Start
```

“Next” may be used only in low-risk wizard navigation when context is already clear.

---

# One Primary CTA Rule

Each onboarding screen should have one primary CTA.

Secondary actions may include:

```text
Skip for now
Save and exit
Back
Learn more
```

Do not present multiple competing primary actions.

Onboarding must reduce decision friction.

---

# Onboarding UX State Rules

Every onboarding step must handle:

```text
loading
success
empty
error
permission denied
blocked
saving
background refresh
stale state
```

Failures must preserve progress.

Do not clear setup forms after failed save.

---

# Progress Indicator Rule

Progress should communicate momentum without creating pressure.

Good:

```text
3 of 5 setup steps complete
```

Better when contextual:

```text
Almost ready to deploy
Connect a channel to finish setup.
```

Avoid fake progress percentages unless based on real steps.

---

# Activation Analytics Rule

Track onboarding events as product outcomes, not vanity clicks.

Core events:

```text
organization_created
onboarding_started
business_goal_selected
business_context_started
business_context_approved
employee_recommended
employee_hired
knowledge_source_connected
knowledge_source_ready
channel_connected
review_mode_selected
deploy_readiness_viewed
employee_deployment_started
employee_deployed
first_ai_output_generated
first_review_approved
first_value_reached
organization_activated
onboarding_stalled
onboarding_blocked
```

Events must be organization-scoped, privacy-safe, and tied to domain entities.

---

# Activation Metrics Rule

Primary metrics:

```text
First Time To Value
activation rate
first employee hire rate
first employee deployment rate
business context completion rate
knowledge source ready rate
channel connection rate
review approval rate
onboarding drop-off by step
blocked onboarding rate
trial-to-activated conversion
activated-to-paid conversion
```

Do not optimize for clicks if they do not lead to trusted value.

---

# Stalled Onboarding Rule

Ariyo should detect stalled onboarding.

Stall signals:

```text
started but no employee hired
employee hired but no source connected
source connected but sync failed
ready to deploy but not deployed
review required but no reviewer invited
billing limit reached
permission blocked
no return after setup started
```

Ariyo should show recovery paths and possibly trigger lifecycle emails if product supports them.

---

# Lifecycle Email Rule

If lifecycle emails are used, they must be helpful, specific, and state-aware.

Good:

```text
Your Customer Support Employee is almost ready

Your knowledge source is ready. Review setup to deploy safely.
```

Bad:

```text
Complete your profile
Come back to Ariyo
You have unfinished setup
```

Lifecycle messages must not expose sensitive information.

---

# In-App Guidance Rule

In-app guidance should be lightweight.

Allowed:

```text
inline hints
checklists
empty states
readiness cards
contextual banners
small guided steps
```

Avoid:

```text
long product tours
blocking walkthroughs
modal after modal
coach marks that hide real UI
gamified noise
```

Ariyo is premium and restrained.

---

# Onboarding Personalization Rule

Personalization should be based on safe signals.

Signals:

```text
business goal
industry
organization size
website availability
selected employee
permission role
plan/entitlement
connected integrations
knowledge source readiness
```

Do not personalize using sensitive content unnecessarily.

---

# Onboarding Data Ownership Rule

Onboarding progress should be server-owned when it affects product lifecycle.

Client state may manage:

```text
current wizard step
local draft before save
temporary UI state
expanded hints
```

Server state should own:

```text
organization setup status
business context approval
employee hire state
knowledge source readiness
channel connection
review policy
activation state
billing entitlement
```

Do not store activation truth only in localStorage.

---

# Onboarding Persistence Rule

Persist progress safely.

Rules:

```text
save meaningful steps server-side
validate stored drafts
avoid storing sensitive content locally
resume incomplete setup
show saved state clearly
avoid data loss on refresh
```

Good copy:

```text
Setup saved. You can continue later.
```

---

# Onboarding Security Rule

Onboarding must not bypass security.

Forbidden:

```text
auto-granting permissions
auto-enabling integrations
auto-deploying employees
auto-approving AI-generated business context
storing secrets in onboarding state
using mock data as real setup
showing private data across organizations
```

Activation must remain safe.

---

# Onboarding Accessibility Rule

Onboarding must be accessible.

Requirements:

```text
clear headings
logical step order
keyboard navigation
visible labels
associated errors
focus management after step changes
accessible progress indicator
large touch targets
mobile support
screen-reader-friendly status updates
```

Wizards are not exempt from accessibility.

---

# Mobile Onboarding Rule

Mobile onboarding must work fully.

Requirements:

```text
single-column forms
short steps
sticky action only if not covering errors
large touch targets
keyboard-safe layout
file upload fallback
integration auth recovery
no horizontal overflow
short copy blocks
```

Do not make onboarding desktop-only.

---

# Onboarding Performance Rule

Onboarding must load quickly.

Rules:

```text
lazy-load heavy marketplace sections
avoid loading full dashboard before activation
load recommended employee quickly
progressively load integrations
avoid heavy charts during first setup
preserve current step during background refresh
show specific loading states
```

Fast onboarding builds confidence.

---

# Onboarding Testing Rule

Onboarding flows must be tested.

Test:

```text
new organization default path
business goal selection
employee recommendation
hire first employee
business context approval
knowledge source connection states
channel connection states
deploy readiness blockers
permission-blocked user
failed sync recovery
resume onboarding
first value state
activation event tracking where practical
```

High-impact onboarding cannot be untested.

---

# Ariyo Onboarding Screens

Recommended core screens:

```text
Welcome
Business Goal
Organization Basics
Recommended Employee
Hire Employee
Business Context Setup
Knowledge Source Setup
Channel Setup
Review Mode
Deploy Readiness
First Value
Next Steps
```

These may be combined when simplicity improves flow.

Do not create unnecessary steps.

---

# Welcome Screen Requirements

Must include:

```text
clear promise
estimated setup time
first action
low-risk framing
```

Good CTA:

```text
Set up first employee
```

---

# Business Goal Screen Requirements

Must include:

```text
goal options
short descriptions
recommended path impact
skip option if safe
```

Goal selection should lead to employee recommendation.

---

# Recommended Employee Screen Requirements

Must include:

```text
employee name
role promise
why recommended
setup requirements
risk/review mode
expected first value
primary CTA: Hire employee
```

Avoid generic template cards.

---

# Business Context Screen Requirements

Must include:

```text
minimum required fields
optional fields clearly marked
AI-assisted suggestions if available
review/approval state
save progress
```

Do not overload users with long business questionnaires.

---

# Knowledge Source Screen Requirements

Must include:

```text
source options
constraints
sync state
review state
retry action
skip impact
```

Good CTA:

```text
Connect source
```

---

# Channel Screen Requirements

Must include:

```text
channel choices
connection state
permission requirement
where employee will act
review/autonomy implication
```

Good CTA:

```text
Connect channel
```

---

# Review Mode Screen Requirements

Must include:

```text
review mode choices
recommended default
consequence explanation
who can review
how to change later
```

Default should usually be safer mode.

---

# Deploy Readiness Screen Requirements

Must include:

```text
readiness checklist
blockers
safe-state messages
permission status
billing entitlement status if relevant
primary CTA when ready
```

Good CTA:

```text
Deploy employee
```

---

# First Value Screen Requirements

Must include:

```text
what was achieved
employee state
first useful output or readiness confirmation
next recommended action
trust explanation when relevant
```

Good copy:

```text
Customer Support Employee is active

It can now draft replies using your approved business context and connected knowledge source.
```

---

# Next Steps Rule

After first value, Ariyo should guide expansion.

Possible next steps:

```text
invite reviewer
connect another source
connect channel
create workflow
hire another employee
view performance
set AI cost limit
upgrade plan
```

Next steps must be contextual.

Do not dump all product features at once.

---

# Forbidden Onboarding Patterns

Never ship:

```text
long generic product tours
asking for billing before explaining value unless business model requires it
forcing all integrations before first value
forcing all business context before first value
technical AI setup language
agent/bot/plugin language
fake deployment success
fake demo data as real state
unreviewed AI-generated business context treated as approved
automatic replies enabled by default
knowledge source ready before sync confirmation
channel connected before server confirmation
permission errors shown as generic failures
activation stored only in localStorage
empty dashboard after signup
multiple competing primary CTAs
setup progress that resets on refresh
failed setup that loses user input
onboarding that only works on desktop
onboarding without analytics events
```

---

# Onboarding Review Checklist

Before shipping onboarding work, verify:

```text
Does the user understand Ariyo quickly?
Is there a clear first value path?
Can first value happen in under 5 minutes when possible?
Is the first employee relevant?
Are setup requirements clear?
Is business context captured safely?
Are imported/generated suggestions reviewed?
Are knowledge source states honest?
Are channel states honest?
Is review mode explicit?
Are permissions handled clearly?
Are blockers specific?
Are errors recoverable?
Is progress saved?
Does onboarding resume correctly?
Is mobile supported?
Is accessibility supported?
Are analytics events meaningful?
Are fake success and fake data avoided?
Is the next best action always clear?
```

If any answer is no, the onboarding flow is not production-ready.

---

# Onboarding Decision Tree

Ask:

### Does the user already know what they want?

Take them directly to the relevant setup path.

### Does the user need guidance?

Start with goal selection and employee recommendation.

### Is knowledge required?

Guide source connection before deployment.

### Is a channel required?

Guide channel setup before customer-facing activation.

### Is risk high?

Default to review mode and show readiness checks.

### Is the user blocked by permission?

Explain who can complete the step and offer safe continuation.

### Is setup failing?

Preserve progress and show recovery.

### Has first value happened?

Confirm value and show the next best step.

---

# Ariyo Onboarding Golden Rule

The user should always know what Ariyo is helping them achieve, why the current step matters, and what safe value comes next.

---

# Senior Onboarding Rule

Do not onboard users into features.

Onboard them into a successful business outcome.

---

# Final Rule

Ariyo onboarding is production-ready only when a new organization can move from signup to trusted first value quickly, safely, clearly, and measurably, with relevant employee recommendation, minimal business context, honest readiness states, recoverable setup failures, explicit review and permission controls, mobile accessibility, and a clear next best action after activation.
