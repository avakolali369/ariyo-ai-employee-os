# Ariyo Monetization & Billing Skill

Version: 1.0.0  
Product: Ariyo  
Purpose: Define Ariyo's monetization, billing, pricing, AI cost, usage limits, plan architecture, upgrade paths, invoice experience, revenue metrics, and billing safety rules.  
Audience: Codex agents, AI-assisted product builders, backend engineers, frontend engineers, product managers, growth strategists, and billing system implementers.  
Priority: Non-negotiable.

Dependencies:

- product-strategy.md
- ai-employee-architecture.md
- backend-architecture.md
- knowledge-rag.md
- workflow-automation.md
- ai-safety-evaluation.md
- product-analytics-growth.md
- frontend-copywriting.md
- frontend-design.md
- frontend-state-data.md
- frontend-forms-validation.md
- coding-standards.md

If conflicts exist:

- product-strategy.md wins for product positioning and value model.
- ai-employee-architecture.md wins for what an AI employee is and how it creates value.
- backend-architecture.md wins for billing system boundaries, server authority, and persistence.
- ai-safety-evaluation.md wins for safety, review, and autonomy limits.
- product-analytics-growth.md wins for growth metrics and event taxonomy.
- frontend-copywriting.md wins for billing copy tone and user-facing language.
- monetization-billing.md wins for pricing logic, subscription design, usage limits, AI cost representation, billing UX, revenue safety, and monetization guardrails.

---

# Core Contract

Ariyo monetization is not about charging for generic AI usage.

Ariyo monetization is about pricing verified business capacity delivered by AI employees.

Ariyo should not sell prompts.

Ariyo should not sell vague automation.

Ariyo should not make customers afraid of unpredictable AI bills.

Ariyo should sell clear business outcomes through role-based AI employees, controlled automation, trusted knowledge, measurable work, and transparent AI cost.

Ariyo billing must be:

```text
transparent
predictable
trustworthy
server-confirmed
usage-aware
outcome-aligned
safe by default
upgrade-friendly
admin-controlled
enterprise-ready
```

Billing UX must reduce uncertainty.

Revenue architecture must protect trust.

---

# Monetization Principle

Ariyo pricing must map to customer-perceived value.

Primary value drivers:

```text
number of AI employees hired
number of deployed AI employees
business-critical workflows automated
knowledge sources connected
channels connected
team members collaborating
verified tasks completed
safe automation level
AI cost efficiency
support and governance needs
enterprise controls
```

Avoid pricing that rewards waste.

Do not optimize for more tokens.

Optimize for more useful work completed safely.

---

# What Ariyo Sells

Ariyo sells the ability to hire and operate AI employees.

An Ariyo customer pays for:

```text
AI employee capacity
role-based automation
business knowledge grounding
workflow execution
safe human review controls
channel and integration access
performance insights
AI cost transparency
governance and permissions
team collaboration
support and reliability
```

Ariyo does not primarily sell:

```text
raw tokens
chat messages
model access
prompt templates
API wrappers
generic bots
unbounded automation
technical infrastructure
```

Product and billing language must reinforce this distinction.

---

# Pricing Philosophy

Pricing must be simple enough to understand and rich enough to scale.

Ariyo pricing should follow these principles:

```text
charge for business capability, not hidden complexity
keep early activation easy
make upgrade paths obvious
avoid surprise bills
separate subscription value from AI cost transparency
protect gross margin
support SMB and enterprise growth
make limits understandable before users hit them
make overage behavior explicit
make billing changes reversible or safely confirmed
```

Users should know what they get, what they used, what they will pay, and why an upgrade matters.

---

# Recommended Packaging Model

Ariyo should use a hybrid SaaS model:

```text
base subscription plan
included AI employee capacity
included usage allowance
AI cost visibility
plan-based limits
optional add-ons
enterprise custom contracts
```

The simplest commercial model:

```text
Plan price
+ included AI employees
+ included monthly AI usage allowance
+ usage limits and governance controls
+ optional add-ons or overages where appropriate
```

Do not expose raw internal cost mechanics as the main buying model.

AI cost should be transparent but not the primary product category.

---

# Plan Architecture

Plans should represent increasing operational maturity.

Recommended plan ladder:

```text
Starter
Growth
Scale
Enterprise
```

Each plan should expand:

```text
AI employee capacity
workspace/member capacity
knowledge source capacity
workflow automation capacity
channel/integration access
review and governance controls
analytics depth
support level
security controls
billing controls
usage allowance
```

Do not create many confusing plans.

Four core tiers are usually enough.

---

# Starter Plan Intent

Starter is for first value.

Goal:

```text
help a small business hire and deploy its first AI employee safely
```

Starter should optimize for:

```text
fast onboarding
clear activation
limited scope
safe defaults
simple billing
no surprise usage
```

Typical Starter limits:

```text
small number of AI employees
limited deployed employees
limited knowledge sources
limited workflows
limited channels
basic analytics
standard support
manual review defaults
usage allowance with clear cap
```

Starter should not feel like a toy.

It should prove Ariyo's value quickly.

---

# Growth Plan Intent

Growth is for teams that rely on AI employees regularly.

Goal:

```text
expand from first AI employee to repeatable team workflows
```

Growth should unlock:

```text
more deployed employees
more knowledge sources
more workflows
more integrations
team member collaboration
better analytics
higher AI usage allowance
review controls
basic workflow automation
```

Growth should be the default upgrade path after activation.

---

# Scale Plan Intent

Scale is for organizations running multiple AI employees across teams.

Goal:

```text
operate AI employees as a measurable business capability
```

Scale should unlock:

```text
larger employee capacity
advanced workflows
more channels
advanced analytics
cost controls
role permissions
approval policies
higher usage allowance
priority support
team-level governance
```

Scale should support serious operational usage.

---

# Enterprise Plan Intent

Enterprise is for governance, security, procurement, and custom scale.

Goal:

```text
support organizations that need control, compliance, custom reliability, and contractual flexibility
```

Enterprise may include:

```text
custom AI employee limits
custom AI usage terms
SSO/SAML when supported
audit logs
advanced permissions
data retention controls
custom integrations
dedicated support
SLA commitments
private deployment options if product supports them
custom model/provider controls
security review support
contract invoicing
```

Enterprise pricing should usually be sales-led.

Do not force enterprise complexity into self-serve UI.

---

# Free Trial Rule

Free trial should reduce purchase friction while protecting cost.

Ariyo trial should help users reach first value.

Recommended trial experience:

```text
limited time or limited usage
one or few AI employees
guided setup
sample employee roles
limited knowledge sources
manual review default
clear usage cap
no hidden overages
upgrade path before cap
```

Do not offer unrestricted AI usage in trial.

Trial users should understand value, not consume unlimited infrastructure.

---

# Free Plan Rule

A free plan is optional and should be used carefully.

If offered, it must be:

```text
cost-controlled
activation-focused
limited in automation
safe by default
clear about limits
not confusing with paid value
```

Avoid giving away expensive AI execution without strong business reason.

Free should be a learning and activation channel, not a margin leak.

---

# AI Employee Capacity Rule

AI employee capacity is a primary monetization unit.

Distinguish:

```text
hired employees
configured employees
deployed employees
active employees
paused employees
archived employees
```

Billing should usually care most about:

```text
active deployed employees
```

But plan UX may show:

```text
You have 3 of 5 active employees.
```

Do not count inactive drafts as billable without clear policy.

Users must understand what counts toward limits.

---

# Hired vs Deployed Billing Rule

Ariyo language distinguishes hiring from deployment.

Billing must also distinguish them.

Recommended:

```text
Hired employee:
exists in workspace and can be configured.

Deployed employee:
active in channels or workflows and can perform work.

Active employee:
currently enabled and counted against active employee limit.
```

Avoid charging users unexpectedly for experimenting with employee drafts.

Charge where operational value begins.

---

# Usage-Based Billing Rule

Usage-based billing must be transparent and controlled.

Usage may include:

```text
AI responses
AI actions
workflow runs
knowledge sync volume
documents processed
messages handled
channel events processed
AI cost units
```

Usage-based pricing must never feel mysterious.

Each usage category must have:

```text
definition
included allowance
current usage
reset date
limit behavior
overage behavior if any
upgrade path
```

Do not expose raw token mechanics unless needed for admin transparency.

---

# AI Cost Rule

AI cost must be visible, honest, and product-friendly.

Ariyo should show AI cost as:

```text
estimated or confirmed cost
period-based
employee-attributed
workflow-attributed when possible
channel-attributed when useful
compared to allowance or budget
clearly labeled
```

Good labels:

```text
AI cost this month
Estimated AI cost
Cost by employee
Cost by workflow
Included usage remaining
```

Bad labels:

```text
Tokens burned
LLM spend
Provider cost raw
Inference cost leaked
Embedding bill
```

Backend/internal terms may exist in admin systems, not primary UX.

---

# AI Cost Transparency Rule

Users should understand:

```text
what drove AI cost
which employees used it
which workflows used it
whether cost is estimated or final
whether they are close to a limit
what happens at the limit
how to reduce cost
how to upgrade
```

Cost transparency builds trust.

It must not create fear or confusion.

---

# AI Cost Margin Rule

Ariyo pricing must protect gross margin.

Frontend and backend must support:

```text
usage metering
usage caps
soft limits
hard limits
plan allowances
cost attribution
provider cost tracking
customer cost display
budget alerts
model routing policies
caching where appropriate
retry limits
```

Do not design billing as if AI cost is free.

Do not design UX that encourages uncontrolled usage.

---

# Included Usage Rule

Each plan should include a usage allowance.

Usage allowance should be represented in product terms.

Good:

```text
Includes 5,000 AI work units per month.
```

or:

```text
Includes usage for typical operation of 3 active employees.
```

If using AI work units, define them clearly.

Avoid presenting only raw tokens to non-technical buyers.

---

# AI Work Unit Rule

Ariyo may define an abstraction such as AI work units.

AI work units can normalize provider cost, model differences, retrieval, and processing.

If used, AI work units must be:

```text
defined clearly
consistent
metered server-side
visible in billing
attributed to employees/actions
not manipulable by frontend
mapped internally to real cost
```

Do not introduce AI work units if they make pricing harder to understand.

---

# Overage Rule

Overages must be explicit.

Recommended options:

```text
hard cap:
usage stops or requires upgrade

soft cap:
users receive warning and can continue until grace limit

paid overage:
users pay for extra usage after explicit agreement

manual approval:
admin must approve more usage
```

Do not silently charge surprise overages.

For early Ariyo, a hard cap or admin-approved overage is safer.

---

# Limit Behavior Rule

When users hit a limit, UI must explain:

```text
what limit was reached
which plan includes more capacity
what actions are still available
what happens to existing employees/workflows
how to upgrade
who can upgrade
whether data is safe
```

Good:

```text
Active employee limit reached.

Your plan includes 3 active employees. Pause an employee or upgrade to deploy another one.
```

Bad:

```text
Limit exceeded.
```

Limit UX must be helpful, not punitive.

---

# Soft Limit Warning Rule

Warn before limits are hit.

Examples:

```text
You have used 80% of this month's included AI usage.

You have 1 active employee slot remaining.

This workflow may exceed your current usage allowance.
```

Warnings should include next action:

```text
Review usage
Upgrade plan
Pause employee
Adjust workflow
```

Do not surprise users at the moment of failure.

---

# Upgrade Path Rule

Upgrade paths must be contextual.

Good upgrade triggers:

```text
active employee limit reached
workflow limit reached
knowledge source limit reached
AI usage near cap
advanced permission needed
team member limit reached
advanced analytics requested
enterprise security control requested
```

Each upgrade prompt must explain value.

Bad:

```text
Upgrade now.
```

Good:

```text
Upgrade to Growth to deploy more employees and run more workflows.
```

Upgrade copy must be specific.

---

# Upgrade Permission Rule

Only authorized users can change billing.

Billing-changing actions must check permissions:

```text
canViewBilling
canManageBilling
canUpgradePlan
canCancelSubscription
canDownloadInvoice
canManagePaymentMethod
```

Users without permission should see clear explanations.

Good:

```text
Only billing admins can change this plan.
```

Do not show generic errors for permission problems.

---

# Billing Admin Rule

Billing administration must be explicit.

Billing admin UI should support:

```text
current plan
usage this period
included allowance
payment method
invoices
billing contact
upgrade/downgrade actions
cancellation path
usage alerts
AI cost breakdown
permission warnings
```

Billing screens must use calm, precise copy.

---

# Plan Change Rule

Plan changes are high-trust actions.

Required for plan changes:

```text
current plan
new plan
price difference
billing period impact
effective date
proration policy if applicable
what limits change
confirmation
server-confirmed success
safe failure copy
```

Do not apply plan change optimistically.

Do not show success before server confirms.

---

# Upgrade Confirmation Rule

Upgrade confirmation must be explicit.

Good:

```text
Upgrade to Growth

Your new plan includes 5 active employees, more workflows, and a higher monthly usage allowance.

Upgrade plan
```

Bad:

```text
Proceed

OK
```

Billing CTAs must use Verb + Object.

---

# Downgrade Rule

Downgrades require extra clarity.

Before downgrade, show:

```text
features that will be lost
limits that will decrease
employees/workflows affected
when downgrade takes effect
whether data remains available
what must be paused or reduced
```

Do not allow users to unknowingly break active operations.

Downgrade may require resolving over-limit resources first.

---

# Cancellation Rule

Cancellation must be clear and safe.

Cancellation flow should explain:

```text
when access ends
what happens to active employees
what happens to workflows
what happens to knowledge sources
what happens to data
whether billing stops immediately or at period end
how to export data if supported
how to reactivate
```

Do not use manipulative dark patterns.

Retention offers must be honest and optional.

---

# Pause Subscription Rule

If Ariyo supports subscription pause, define:

```text
what remains accessible
whether employees pause
whether workflows stop
whether data is retained
when billing resumes
how to reactivate
```

Do not blur pause and cancel.

Use precise language.

---

# Invoice Rule

Invoices must be easy to access and understand.

Invoice UI should show:

```text
invoice number
status
period
amount
due date or paid date
payment method summary
download action
failure state
```

Invoice download must be permission-controlled.

Do not show raw payment provider errors.

---

# Payment Method Rule

Payment method handling must follow approved payment provider architecture.

Frontend must not:

```text
store card data
inspect raw card data
log payment payloads
send payment data to analytics
persist payment fields
```

Payment method UI should show only safe summaries:

```text
Visa ending in 4242
Expires 08/2028
```

Never expose full payment details.

---

# Payment SDK Rule

Payment SDKs must load only where needed.

Do not load payment SDK globally.

Payment SDK usage must:

```text
be isolated to billing/payment screens
handle SDK loading failure
show secure loading state
avoid collecting raw payment data in Ariyo code
follow provider rules
respect permissions
```

Billing performance and security are both required.

---

# Billing Server Authority Rule

Billing state is server-owned.

Frontend must not invent billing state.

Server-owned billing data:

```text
current plan
subscription status
trial status
usage allowance
usage consumed
AI cost
payment method summary
invoice status
billing permissions
overage policy
cancellation status
renewal date
```

Frontend may render state.

Frontend must not authoritatively decide it.

---

# No Optimistic Billing Rule

Billing changes must not be optimistic by default.

Forbidden:

```text
showing upgraded plan before server confirmation
showing payment method updated before confirmation
showing invoice paid before confirmation
showing cancellation complete before confirmation
```

Good failure copy:

```text
Could not update billing details. No billing changes were made.
```

Billing success must be confirmed by backend/payment provider state.

---

# Subscription Status Rule

Subscription status must be modeled explicitly.

Recommended statuses:

```text
trialing
active
past_due
payment_failed
canceled
canceling_at_period_end
paused
incomplete
expired
```

Unknown subscription status must fail safely.

Never map unknown status to active.

---

# Billing Access State Rule

Billing UI must handle:

```text
loading
active subscription
trialing
past due
payment failed
permission denied
billing unavailable
invoice unavailable
plan change pending
plan change failed
canceled
canceling at period end
```

Billing UI must not be happy-path-only.

---

# Past Due Rule

Past due state must be clear and calm.

Good:

```text
Payment needs attention.

Update your payment method to keep employees and workflows active.
```

Avoid alarming or vague copy:

```text
Payment failed!!!

Account blocked.
```

The UI must explain what is affected and how to recover.

---

# Grace Period Rule

If Ariyo provides a grace period, UI must show:

```text
time remaining
features affected after grace period
action needed
payment update path
who can fix it
```

Do not hide operational impact.

---

# Feature Entitlement Rule

Entitlements must be server-defined.

Examples:

```text
max_active_employees
max_knowledge_sources
max_workflows
max_channels
advanced_analytics_enabled
custom_roles_enabled
audit_logs_enabled
priority_support_enabled
monthly_usage_allowance
max_team_members
```

Frontend should consume entitlements through typed API responses.

Do not hardcode plan logic across UI components.

---

# Entitlement Naming Rule

Entitlement names must be product-relevant.

Good:

```text
canDeployMoreEmployees
canUseAdvancedWorkflows
canViewAiCostBreakdown
canManageBilling
activeEmployeeLimit
monthlyUsageAllowance
```

Avoid vague names:

```text
flag_123
premium_feature
tier2_enabled
limitA
```

Entitlements are product contracts.

---

# Limit Enforcement Rule

Frontend may prevent invalid actions for UX.

Backend must enforce limits.

Frontend examples:

```text
disable Deploy employee when active employee limit reached
show upgrade prompt when workflow limit reached
show usage warning near cap
hide enterprise-only settings with explanation
```

Backend examples:

```text
reject deploy beyond limit
reject workflow publish beyond plan
reject billing action without permission
reject usage beyond hard cap
```

Do not rely on frontend-only limit enforcement.

---

# Plan Comparison Rule

Plan comparison UI must be clear and honest.

Recommended columns:

```text
plan name
ideal customer
active employees
monthly usage allowance
knowledge sources
workflows
integrations/channels
analytics
governance
support
price
primary CTA
```

Avoid overwhelming users with internal feature lists.

Show outcome-oriented differences.

---

# Pricing Page Rule

Pricing page should communicate:

```text
who each plan is for
what business capability increases
what is included
how usage works
whether AI cost is included or visible separately
what happens at limits
whether enterprise is custom
how to contact sales if needed
```

Do not bury usage policy in fine print only.

---

# In-App Billing Rule

In-app billing should focus on current account management.

It should show:

```text
current plan
usage this period
active employee slots
AI cost summary
upcoming renewal
invoices
payment method
plan change options
alerts and limits
```

In-app billing must be operationally useful, not just a checkout screen.

---

# AI Cost Dashboard Rule

AI cost dashboard should answer:

```text
How much AI usage did we consume?
Which employees drove it?
Which workflows drove it?
Which channels drove it?
Are we near a limit?
Is cost increasing?
Is the work valuable?
What can we optimize?
```

Cost without value is incomplete.

Pair cost with outcomes when possible.

---

# Cost-to-Value Rule

Ariyo should connect cost to value.

Good metrics:

```text
cost per completed task
cost per resolved customer conversation
cost per workflow success
cost per employee
cost per channel
manual review saved time
escalation rate
automation success rate
```

Avoid showing AI cost as isolated fear-inducing spend.

Cost must support decision-making.

---

# Budget Rule

Ariyo should support budget controls as product matures.

Budget controls may include:

```text
monthly AI usage budget
employee-level budget
workflow-level budget
notification threshold
hard stop
admin approval over threshold
cost anomaly alert
```

Budget controls must be server-enforced where relevant.

---

# Usage Alert Rule

Usage alerts must be actionable.

Good:

```text
AI usage is at 85% of this month's allowance.

Review cost by employee or upgrade before usage is limited.
```

Actions:

```text
Review usage
Upgrade plan
Adjust workflows
Pause employee
```

Avoid alerts without next step.

---

# Revenue Metrics Rule

Ariyo revenue metrics must connect to product behavior.

Track:

```text
trial to paid conversion
activation to paid conversion
paid conversion by first deployed employee
upgrade rate after limit reached
upgrade rate after usage warning
expansion by active employees
expansion by workflows
expansion by knowledge sources
expansion by team members
AI usage margin
gross margin by plan
churn by usage pattern
past due recovery rate
failed payment recovery
plan downgrade reasons
cancellation reasons
```

Do not track only MRR without product context.

---

# Billing Event Taxonomy Rule

Billing analytics events must be safe and structured.

Examples:

```text
billing_page_viewed
plan_comparison_viewed
upgrade_clicked
upgrade_confirmed
upgrade_failed
downgrade_clicked
downgrade_confirmed
billing_permission_denied
payment_method_update_started
payment_method_update_succeeded
payment_method_update_failed
invoice_download_clicked
usage_limit_warning_viewed
usage_limit_reached
ai_cost_dashboard_viewed
```

Events must not include sensitive payment details.

---

# Billing Analytics Privacy Rule

Do not send sensitive billing data to analytics.

Forbidden:

```text
full card details
billing address
invoice PDFs
raw payment provider errors
customer tax identifiers
private organization billing notes
payment tokens
full payment method IDs unless approved
```

Allowed safe metadata:

```text
plan name
billing cycle
limit type
upgrade source
status category
usage percentage bucket
```

Use buckets where precise values are unnecessary.

---

# AI Usage Metering Rule

AI usage must be metered server-side.

Metering should capture:

```text
organization_id
employee_id when applicable
workflow_id when applicable
channel_id when applicable
knowledge_source_id when applicable
operation type
model/provider category
input size or normalized work unit
output size or normalized work unit
retrieval cost category
execution status
safety outcome
timestamp
billing period
```

Do not rely on frontend for billing usage calculations.

---

# Metering Accuracy Rule

Usage metering must be accurate enough for billing trust.

Required:

```text
idempotency for repeated events
deduplication for retries
clear attribution
period boundaries
timezone-safe billing periods
server-authoritative records
auditability
reconciliation capability
```

If usage is estimated, label it as estimated.

---

# Usage Attribution Rule

Usage should be attributable to meaningful product objects.

Preferred attribution:

```text
organization
employee
workflow
channel
knowledge source
user action
billing period
```

This enables:

```text
cost insight
optimization
upgrade decisions
margin management
support debugging
trust
```

Unattributed cost reduces trust.

---

# Billing Period Rule

Billing periods must be explicit.

Show:

```text
current period start
current period end
renewal date
usage reset date
invoice date
trial end date when relevant
cancellation effective date when relevant
```

Do not make users guess when limits reset.

---

# Currency Rule

Currency must be explicit.

Show:

```text
currency code when ambiguity exists
localized formatting when appropriate
monthly or annual period
whether tax is included or excluded when relevant
```

Examples:

```text
$49/month
USD 49/month
€49/month, excluding VAT
```

Do not mix currencies without explanation.

---

# Tax Rule

Tax handling must be delegated to approved billing provider/backend architecture.

Frontend should show tax information only when provided by server/payment provider.

Do not calculate tax ad hoc in UI components.

---

# Annual Billing Rule

If annual billing exists, show:

```text
annual price
monthly equivalent if useful
savings if accurate
billing date
refund/cancellation policy where relevant
```

Do not fabricate savings.

Savings must be mathematically correct and based on actual pricing.

---

# Discount Rule

Discounts must be server-confirmed.

UI must show:

```text
discount name/code
discount amount
expiration if any
final price
failure state
```

Do not calculate final billing amount only on frontend.

---

# Coupon Rule

Coupon application must handle:

```text
valid coupon
invalid coupon
expired coupon
not eligible
already applied
network failure
permission denied
```

Do not show discount success before server confirmation.

---

# Trial Conversion Rule

Trial conversion UX must explain:

```text
trial end date
current usage
what plan will start
price
billing cycle
payment method requirement
what happens if no payment method is added
```

Trial conversion should be clear, not coercive.

---

# Upgrade Timing Rule

Plan changes must clearly state timing.

Examples:

```text
Starts today
Starts at next billing period
Takes effect after payment confirmation
Your new limits are available now
```

Do not leave users unsure whether limits changed.

---

# Billing Copy Rule

Billing copy must be precise, calm, and specific.

Good:

```text
Upgrade to Growth

Your plan includes 3 active employees. Upgrade to deploy more employees.

Could not update payment method. Your current payment method is still active.
```

Bad:

```text
Proceed

Payment error

Something went wrong

Limit exceeded
```

Billing copy must reduce uncertainty.

---

# Billing Error Rule

Billing errors must include safe state.

Good:

```text
Could not upgrade plan. No billing changes were made.

Could not update payment method. Your current payment method is still active.

Could not cancel subscription. Your subscription is still active.
```

Do not show raw payment provider errors.

---

# Billing Loading Rule

Billing loading states must be specific.

Good:

```text
Loading billing details

Updating payment method

Changing plan

Loading invoices

Calculating usage
```

Bad:

```text
Loading...
```

Billing screens require trust and clarity.

---

# Billing Empty State Rule

Billing empty states must be specific.

Examples:

```text
No invoices yet.

Invoices will appear here after your first billing cycle.
```

```text
No AI cost data yet.

Cost data appears after employees complete work.
```

Do not show blank billing sections.

---

# Billing Permission State Rule

Permission-denied billing states must be clear.

Good:

```text
You do not have access to billing.

Ask a billing admin to view or change this plan.
```

Do not show billing as empty or broken.

---

# Billing Frontend State Rule

Frontend billing UI must use server state.

Required:

```text
TanStack Query for billing data
mutation hooks for billing actions
server-confirmed success
section-level loading/error
permission handling
safe error copy
no local fake billing state
no optimistic billing state
```

Billing UI must not store billing data in Zustand or localStorage.

---

# Billing Query Key Rule

Billing query keys must include organization scope.

Good:

```text
["organizations", organizationId, "billing", "summary"]
["organizations", organizationId, "billing", "usage", period]
["organizations", organizationId, "billing", "invoices"]
```

Do not use global billing keys without organization scope.

---

# Billing Cache Rule

Billing cache must be conservative.

Recommendations:

```text
short stale time for billing summary
short stale time for usage near limits
invalidate after plan changes
invalidate after payment changes
invalidate after coupon changes
invalidate after cancellation
avoid optimistic updates
```

Billing data should not feel stale.

---

# Billing Mutation Rule

Billing mutations must include:

```text
typed payload
typed result
permission handling
pending state
server-confirmed success
safe failure copy
scoped invalidation
no duplicate submission
no sensitive analytics payload
```

High-trust mutation examples:

```text
upgrade plan
change billing cycle
update payment method
cancel subscription
resume subscription
apply coupon
download invoice
```

---

# Invoice Download Rule

Invoice downloads require:

```text
permission check
server-generated download URL or response
safe filename
loading state
failure state
no sensitive analytics payload
```

Good CTA:

```text
Download invoice
```

Do not expose raw storage URLs unless approved.

---

# Billing Backend Boundary Rule

Billing backend should isolate provider details.

Frontend should not know:

```text
Stripe object internals
provider event internals
webhook payload shapes
payment intent raw data
subscription raw provider status mapping unless normalized
```

Backend should expose product-ready billing DTOs.

Frontend renders product billing state.

---

# Payment Provider Rule

Provider details must be normalized.

Good product statuses:

```text
active
trialing
payment_failed
past_due
canceling
canceled
paused
```

Avoid showing:

```text
incomplete_expired
requires_payment_method
invoice.payment_failed
subscription_schedule.aborted
```

unless in admin/internal tooling.

---

# Webhook Rule

Billing truth often comes from webhooks.

Backend must treat provider webhooks as source of truth for payment status.

Frontend must handle delay states.

Good copy:

```text
Payment is being confirmed. This may take a moment.
```

Do not assume immediate provider confirmation.

---

# Reconciliation Rule

Billing systems need reconciliation.

Architecture should support:

```text
provider status sync
internal subscription records
usage records
invoice records
webhook processing history
idempotent webhook handling
manual admin review if needed
```

Frontend does not implement reconciliation but must avoid contradictory states.

---

# Idempotency Rule

Billing actions must be idempotent where appropriate.

Examples:

```text
upgrade plan request
payment method setup
invoice download generation
coupon application
subscription cancellation
```

Frontend must prevent duplicate submits.

Backend must protect against duplicate side effects.

---

# Fraud and Abuse Awareness Rule

Ariyo billing should support abuse prevention.

Consider:

```text
trial abuse
usage abuse
payment failure loops
excessive AI cost during trial
invite abuse
automation abuse
coupon abuse
```

Frontend must not expose easy bypasses.

Backend must enforce controls.

---

# Enterprise Billing Rule

Enterprise billing may differ from self-serve billing.

Enterprise may include:

```text
custom contract
manual invoice
purchase order
custom usage terms
custom AI employee limits
SLA
security review
custom billing contact
annual commitment
```

Self-serve billing UI should route enterprise users to appropriate contact if needed.

Do not force enterprise contracts into simple plan-change UI.

---

# Sales Contact Rule

Contact sales flow should be specific.

Good:

```text
Contact sales for Enterprise

Get custom employee capacity, advanced governance, and contract billing.
```

Collect only necessary information.

Do not expose private billing data in sales analytics.

---

# Procurement Readiness Rule

Enterprise customers may need:

```text
invoice history
billing contact
tax information
security documentation link
data processing terms
SLA details
purchase order support
contract dates
```

These should be server-backed and permission-controlled.

---

# Upgrade Nudges Rule

Upgrade nudges must be helpful, not manipulative.

Good triggers:

```text
user tries to deploy beyond plan limit
user reaches usage threshold
user needs advanced workflow
dashboard shows clear team growth
admin views limit pressure
```

Bad triggers:

```text
random upgrade modal
blocking core onboarding too early
fear-based AI cost copy
misleading savings claims
```

Ariyo should grow through value, not dark patterns.

---

# Paywall Rule

Paywalls must be contextual and informative.

A paywall should explain:

```text
what feature is locked
why it matters
which plan unlocks it
what happens after upgrade
who can upgrade
```

Good:

```text
Advanced workflows are available on Scale.

Upgrade to automate multi-step employee actions with review controls.
```

Bad:

```text
Premium feature.
```

---

# Revenue Expansion Rule

Expansion should come from increased business value.

Expansion levers:

```text
more active employees
more workflows
more knowledge sources
more channels
more team members
advanced governance
advanced analytics
higher AI usage allowance
enterprise controls
priority support
```

Do not encourage expansion through artificial friction.

---

# Churn Prevention Rule

Billing UX should help users understand value before cancellation.

Useful cancellation context:

```text
active employees
completed work
connected knowledge sources
workflows running
AI cost and value summary
features that will stop
export options if supported
```

Do not use manipulative cancellation dark patterns.

Retention should be respectful.

---

# Plan Limit Copy Examples

Active employee limit:

```text
Active employee limit reached.

Your plan includes 3 active employees. Pause an employee or upgrade to deploy another one.
```

Knowledge source limit:

```text
Knowledge source limit reached.

Upgrade to connect more sources and give employees broader business context.
```

Workflow limit:

```text
Workflow limit reached.

Upgrade to run more automated workflows across your team.
```

AI usage limit:

```text
Monthly AI usage limit reached.

Your employees are paused for new automated work until usage resets or your plan is upgraded.
```

Use clear next actions.

---

# Billing UI Component Rules

Billing UI should use shared Ariyo components where possible:

```text
PlanCard
UsageMeter
BillingAlert
InvoiceTable
PaymentMethodCard
UpgradeDialog
DowngradeImpactList
AiCostBreakdown
LimitReachedState
BillingPermissionState
```

Components must support:

```text
loading
error
empty
permission denied
pending mutation
success
safe failure
mobile layout
accessibility
```

---

# Usage Meter UI Rule

Usage meters must be readable and not color-only.

Good:

```text
4,200 of 5,000 AI work units used
84% used
Resets on July 1
```

Use visual progress as support, not the only communication.

Warn near thresholds.

---

# Billing Accessibility Rule

Billing UI must be accessible.

Required:

```text
semantic headings
tables for invoices
button labels with action objects
form labels for payment/billing fields
error messages associated with fields
keyboard-accessible plan selection
screen-reader-readable usage meters
non-color-only warnings
focus management in upgrade dialogs
```

Billing accessibility is part of financial trust.

---

# Billing Mobile Rule

Billing must work on mobile.

Requirements:

```text
plan cards stack cleanly
usage meters remain readable
invoice tables have mobile strategy
upgrade confirmation fits screen
payment forms avoid overflow
primary actions remain reachable
destructive/cancel actions are separated
```

Do not design billing only for desktop admins.

---

# Billing Security Rule

Billing UI must never expose secrets.

Forbidden:

```text
full card details
payment tokens
provider customer secret
raw payment intent
private invoice storage URL
raw webhook payload
billing address where not needed
sensitive tax IDs in unnecessary contexts
```

Use provider-hosted or secure payment elements as approved.

---

# Billing Testing Rule

Billing changes require tests when practical.

Test:

```text
billing loading state
billing permission denied
current plan rendering
usage warning
limit reached state
upgrade confirmation
upgrade pending
upgrade success after server response
upgrade failure safe-state copy
invoice empty state
payment failed state
no optimistic success
```

Billing tests protect revenue and trust.

---

# Billing Observability Rule

Backend billing operations must be observable.

Track safely:

```text
subscription update success/failure
webhook processing success/failure
usage metering failures
invoice generation failures
payment method update failures
limit enforcement events
billing permission denial
upgrade funnel events
```

Do not log sensitive payment details.

---

# AI Cost Observability Rule

AI cost observability should support:

```text
provider cost tracking
customer usage attribution
unexpected cost spikes
employee-level cost anomalies
workflow-level cost anomalies
failed/retried execution cost
RAG processing cost
background job cost
trial abuse detection
margin analysis
```

Cost observability is part of product health.

---

# Billing Incident Rule

Billing incidents require safe UI.

Examples:

```text
payment provider unavailable
usage metering delayed
invoice generation delayed
plan update pending too long
webhook delay
AI cost report unavailable
```

Good copy:

```text
Billing details are temporarily unavailable. Your subscription has not changed.
```

Do not show contradictory billing states.

---

# Pricing Experiment Rule

Pricing experiments must be controlled.

Rules:

```text
server-driven pricing configuration
clear experiment assignment
no inconsistent prices across checkout and billing
no hidden price changes
respect existing customer contracts
analytics without sensitive data
support auditability
```

Do not hardcode experimental prices in frontend components.

---

# Price Configuration Rule

Prices must be server-driven or config-driven.

Do not scatter plan prices across frontend files.

Bad:

```tsx
const price = "$49";
```

inside multiple components.

Good:

```text
pricing API returns product-ready plan objects
```

Frontend renders authoritative pricing data.

---

# Plan Object Rule

Plan objects should include:

```text
id
name
description
price
currency
billing interval
included active employees
included usage allowance
feature entitlements
recommended flag when relevant
current plan flag
upgrade/downgrade eligibility
CTA label
```

Plan objects must not include raw provider internals unless needed by checkout boundary.

---

# Checkout Boundary Rule

Checkout should be a controlled boundary.

Frontend may initiate checkout through backend.

Backend should:

```text
validate permission
validate plan
create provider session
return safe redirect/client secret
record intent
handle webhook confirmation
```

Frontend should not construct provider checkout details from untrusted local state.

---

# Billing Data Model Guidance

Backend should model billing around product concepts.

Possible domain objects:

```text
Plan
Subscription
Entitlement
UsageRecord
UsagePeriod
AiCostRecord
Invoice
PaymentMethodSummary
BillingEvent
BillingAlert
PlanChangeRequest
```

Provider objects should be mapped into Ariyo billing domain objects.

Do not let provider model dominate product code.

---

# Usage Record Rule

Usage records should support attribution and audit.

Recommended fields:

```text
id
organization_id
employee_id optional
workflow_id optional
channel_id optional
knowledge_source_id optional
operation_type
usage_units
estimated_cost
provider_cost optional
billing_period_id
source_event_id
idempotency_key
created_at
```

Usage records must be append-only where practical.

Do not mutate historical usage casually.

---

# Billing Audit Rule

Billing-impacting actions need audit trail.

Audit examples:

```text
plan changed
subscription canceled
subscription resumed
payment method updated
invoice downloaded
usage limit reached
overage approved
billing permission denied
coupon applied
```

Audit trail must not contain sensitive payment secrets.

---

# Customer Communication Rule

Billing emails and in-app messages must align.

Events that may need communication:

```text
trial ending
payment failed
invoice available
plan changed
subscription canceled
usage limit reached
usage near limit
overage approved
```

Messaging must be calm, specific, and truthful.

---

# Monetization Review Checklist

Before shipping monetization logic, verify:

```text
Is pricing tied to customer value?
Are plan limits understandable?
Is AI usage transparent?
Are overages explicit?
Are upgrade paths contextual?
Are billing actions permission-controlled?
Is billing state server-owned?
Is success server-confirmed?
Are billing failures safe and specific?
Are payment details protected?
Are usage records server-metered?
Are organization boundaries respected?
Are invoices accessible?
Are plan changes clear about timing and impact?
Are downgrade impacts explained?
Are sensitive analytics avoided?
Are tests added for high-risk billing flows?
```

If any answer is no, do not ship.

---

# Monetization Decision Tree

Ask:

### Does this pricing map to business value?

If not, redesign.

### Is this billing state server-confirmed?

If not, do not present it as final.

### Is this AI cost visible and understandable?

If not, improve cost UX.

### Can the user predict what happens at limits?

If not, define limit behavior.

### Is this a high-trust billing action?

Require confirmation, pending state, server success, and safe failure.

### Is this plan restriction blocking a user?

Provide contextual explanation and upgrade path.

### Is this sensitive payment data?

Do not store, log, persist, or send to analytics.

### Is this enterprise billing?

Route to enterprise flow rather than forcing self-serve assumptions.

---

# Forbidden Monetization Patterns

Never ship:

```text
surprise AI bills
unclear usage limits
raw token pricing as primary UX without explanation
billing success before server confirmation
optimistic billing updates
payment SDK loaded globally
card data stored in Ariyo code
billing data stored in localStorage
billing data stored in Zustand
plan prices hardcoded across components
provider raw statuses shown to users
raw payment provider errors shown to users
unknown subscription status mapped to active
unknown entitlement mapped to allowed
frontend-only limit enforcement
billing permission denied shown as empty state
invoice downloads without permission check
silent overages
trial with uncontrolled AI cost
upgrade prompts with vague value
manipulative cancellation dark patterns
fake usage data
fabricated savings
AI cost without period or label
analytics events containing payment secrets
```

---

# Ariyo Monetization Golden Rule

Ariyo should charge for trusted AI employee value, not confuse users with invisible AI infrastructure cost.

---

# Senior Monetization Rule

Do not create revenue by hiding complexity.

Create revenue by making business value measurable, safe, and easy to expand.

---

# Final Rule

Ariyo monetization and billing are production-ready only when pricing maps to AI employee value, plan limits are understandable, AI cost is transparent, usage is server-metered, billing state is server-confirmed, upgrades are contextual, payment data is protected, permissions are enforced, revenue metrics are connected to product outcomes, and every billing action preserves user trust.
