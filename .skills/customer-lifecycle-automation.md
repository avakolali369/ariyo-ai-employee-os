# Ariyo Customer Lifecycle Automation Skill

## 1. Purpose

This skill defines Ariyo's customer lifecycle automation system.

Ariyo customer lifecycle automation exists to move every customer from first awareness to trusted activation, measurable adoption, repeated value, expansion, renewal, advocacy, and winback through governed, measurable, respectful, and product-connected automation.

Ariyo must not treat lifecycle automation as email drip campaigns.

Ariyo lifecycle automation must connect product behavior, AI employee outcomes, customer health, support signals, billing state, plan tier, usage quality, risk indicators, and customer intent into a precise operating system for growth and retention.

The system must help Ariyo answer these questions:

1. Where is this customer in their journey?
2. What value have they already received?
3. What is blocking the next value moment?
4. What action should Ariyo recommend next?
5. Should automation handle it, or should a human intervene?
6. Is the customer at risk, ready to expand, ready to renew, or ready to advocate?
7. Is the customer being helped, or are they being spammed?

## 2. Core Contract

Ariyo customer lifecycle automation is not a sequence of scheduled messages.

Ariyo customer lifecycle automation is the operating layer that detects where each customer is, what value they have achieved, what risk they face, what opportunity exists, and what next action should happen across product, email, support, sales, customer success, billing, marketplace, and AI employee experiences.

Every lifecycle automation must be customer-state-aware, plan-aware, permission-aware, consent-aware, outcome-aware, and measurable.

Ariyo must automate progress, not noise.

## 3. Required Inputs

This skill must align with:

- `product-strategy.md`
- `product-requirements-mvp.md`
- `onboarding-activation.md`
- `customer-success-playbooks.md`
- `product-analytics-growth.md`
- `observability-analytics-events.md`
- `monetization-billing.md`
- `ai-cost-control.md`
- `admin-permissions.md`
- `brand-messaging-system.md`
- `launch-go-to-market.md`
- `sales-demo-playbook.md`
- `content-marketing-engine.md`
- `community-partner-growth.md`
- `ecosystem-marketplace-economy.md`
- `data-governance-privacy.md`
- `compliance-legal-risk.md`
- `security-threat-model.md`
- `reliability-sla.md`

Lifecycle automation must never contradict pricing, entitlement limits, consent rules, AI cost controls, human review rules, privacy boundaries, or enterprise trust requirements.

## 4. Lifecycle Philosophy

Ariyo's customer lifecycle must be based on value progression, not calendar time alone.

Bad lifecycle thinking:

- Day 1: send welcome email.
- Day 3: send product tips.
- Day 7: send upgrade email.
- Day 14: send discount.

Ariyo lifecycle thinking:

- The organization signed up but has not selected a business goal.
- The user selected a goal but has not hired an AI employee.
- The customer hired an AI employee but has not connected knowledge.
- The AI employee produced a useful draft but has not been deployed.
- The AI employee was deployed but has not completed a measurable outcome.
- The customer is receiving value but has reached a plan limit.
- The customer has high usage but low trust because review queues are overloaded.
- The customer is at renewal risk because business outcomes are not visible to an admin.
- The customer is expansion-ready because multiple departments are requesting AI employees.

Ariyo must trigger automation from customer state, not from arbitrary time delays.

## 5. Lifecycle Stages

Ariyo must model the customer lifecycle as explicit stages.

### 5.1 Visitor

A visitor has engaged with public Ariyo content but has not created an account or lead profile.

Signals:

- Landing page visit.
- Pricing page visit.
- GEO/AI SEO content view.
- Marketplace page view.
- Demo page visit.
- Content download.
- Newsletter subscription.

Goal:

- Convert the visitor into a qualified lead or signup.

Automation examples:

- Show use-case-specific CTA.
- Recommend relevant content based on page behavior.
- Capture email with a business outcome lead magnet.
- Route high-intent visitor to demo booking.

### 5.2 Lead

A lead has provided contact information or shown purchase intent but has not created a product workspace.

Signals:

- Demo request.
- Contact form submission.
- Lead magnet download.
- Webinar registration.
- Referral lead.
- Partner-submitted lead.
- Pricing inquiry.

Goal:

- Qualify need, urgency, fit, and likely plan.

Automation examples:

- Send problem-specific follow-up.
- Ask discovery questions.
- Route enterprise leads to sales.
- Route small business leads to product-led signup.
- Attribute source, campaign, and partner.

### 5.3 Signup

A user has created an account but has not activated.

Signals:

- Account created.
- Email verified.
- Organization created.
- Plan selected or trial started.

Goal:

- Reach first value quickly.

Required next steps:

1. Select business goal.
2. Create organization/workspace.
3. Choose recommended AI employee.
4. Add business context.
5. Connect knowledge or channel.
6. Generate first useful output.
7. Understand review and deployment safety.

### 5.4 Activation

A customer has completed the first meaningful product setup and received a first useful AI employee outcome.

Activation is not login.

Activation is achieved when:

- A business goal exists.
- At least one AI employee exists.
- Required context exists.
- At least one knowledge source, file, prompt, or channel is connected.
- The AI employee produces a useful output.
- The user understands review/deploy state.
- A next value path is visible.

Goal:

- Convert curiosity into trust.

### 5.5 Adoption

The customer is using Ariyo repeatedly for real business work.

Signals:

- AI employee executes recurring tasks.
- Workflows run.
- Human review queue is used.
- Knowledge is updated.
- Team members are invited.
- Admin views outcomes.
- Multiple sessions across multiple days.

Goal:

- Build repeatable habit and business dependency.

### 5.6 Value Realization

The customer can see measurable business outcomes.

Signals:

- Time saved.
- Tickets assisted.
- Leads answered.
- Conversations handled.
- Workflows completed.
- Knowledge gaps reduced.
- Human review approval rate improved.
- Cost per outcome is acceptable.
- ROI dashboard viewed.

Goal:

- Make Ariyo economically and operationally justified.

### 5.7 Expansion

The customer is ready to add more usage, employees, workflows, integrations, seats, marketplace assets, or move to a higher plan.

Signals:

- Usage near plan limits.
- Multiple departments or users request access.
- More AI employees are created.
- Smart features are repeatedly previewed.
- Marketplace assets are viewed.
- Admin compares plans.
- Cost per outcome remains healthy.
- Customer success confirms business value.

Goal:

- Expand only when value has been proven.

### 5.8 Renewal

The customer is approaching contract or subscription renewal.

Signals:

- Renewal date within configured window.
- Billing cycle approaching.
- Contract review requested.
- Admin views usage/ROI reports.
- Procurement asks for documents.
- Health score changes.

Goal:

- Convert renewal from a payment event into a value review.

### 5.9 Advocacy

The customer is satisfied enough to refer, review, participate in a case study, or become a partner.

Signals:

- High NPS/CSAT.
- Strong ROI.
- Multiple successful workflows.
- Low support burden.
- Positive feedback.
- Repeated internal expansion.

Goal:

- Turn customer success into market trust.

### 5.10 Dormant

The customer has stopped meaningful usage but has not churned.

Signals:

- No AI employee activity.
- No recent knowledge updates.
- No workflow executions.
- No team activity.
- Payment still active.
- Admin inactive.

Goal:

- Diagnose the reason and recover value.

### 5.11 Churned

The customer has cancelled, failed payment, or completed offboarding.

Signals:

- Subscription cancelled.
- Trial expired without conversion.
- Payment failed beyond grace period.
- Enterprise contract ended.
- Workspace deleted.

Goal:

- Preserve trust, learn why, safely offboard, and create a respectful winback path.

### 5.12 Winback

The customer is eligible to be reactivated.

Signals:

- Past value existed.
- New feature addresses churn reason.
- Pricing/plan changed.
- Customer revisits site.
- Former admin opens email.
- Partner reintroduces account.

Goal:

- Reopen value, not pressure.

## 6. Core Lifecycle Entities

Ariyo should model lifecycle automation with explicit entities.

### 6.1 CustomerAccount

Represents an organization or business customer.

Required fields:

```json
{
  "id": "org_123",
  "name": "Acme Support",
  "plan": "pro",
  "lifecycle_stage": "adoption",
  "health_score": 78,
  "risk_level": "medium",
  "expansion_readiness": "low",
  "renewal_date": "2026-09-01",
  "primary_goal": "reduce_support_load",
  "created_at": "2026-06-18T10:00:00Z"
}
```

### 6.2 LifecycleStage

Represents the current lifecycle state.

Allowed values:

```text
visitor
lead
signup
activation
adoption
value_realization
expansion
renewal
advocacy
dormant
churned
winback
```

### 6.3 LifecycleMilestone

Represents a meaningful customer progress marker.

Examples:

```text
account_created
organization_created
business_goal_selected
ai_employee_hired
business_context_added
knowledge_connected
channel_connected
first_output_generated
first_output_approved
first_employee_deployed
first_workflow_completed
first_business_outcome_recorded
first_team_member_invited
first_upgrade_prompt_viewed
first_marketplace_asset_installed
first_roi_report_viewed
```

### 6.4 LifecycleSignal

Represents an event or pattern that should influence lifecycle decisions.

Examples:

```text
usage_spike
usage_drop
plan_limit_near
plan_limit_reached
review_queue_backlog
knowledge_quality_low
cost_anomaly
integration_failed
payment_failed
admin_inactive
champion_inactive
security_risk_detected
renewal_window_open
expansion_interest_detected
```

### 6.5 AutomationPlaybook

Represents an automation workflow designed to move the customer forward.

Required fields:

```json
{
  "id": "playbook_activation_stalled",
  "name": "Activation stalled recovery",
  "trigger": "activation_incomplete_after_24h",
  "target_stage": "activation",
  "eligible_plans": ["basic", "pro", "smart"],
  "channels": ["in_app", "email"],
  "requires_consent": true,
  "human_escalation": false,
  "success_metric": "activation_completed",
  "cooldown_hours": 72
}
```

### 6.6 CustomerHealthScore

Represents customer health as a composite score.

Dimensions:

- Activation.
- Adoption.
- Value realized.
- Usage quality.
- AI employee success.
- Workflow success.
- Knowledge quality.
- Review trust.
- Cost health.
- Support burden.
- Billing health.
- Admin engagement.
- Security/compliance status.
- Expansion signals.

### 6.7 NextBestAction

Represents the recommended next action for customer progress.

Examples:

```text
connect_knowledge_source
review_first_output
deploy_employee
invite_team_member
install_marketplace_template
upgrade_to_pro
upgrade_to_smart
schedule_success_call
resolve_integration_failure
reduce_ai_cost
renew_contract
request_case_study
```

### 6.8 LifecycleMessage

Represents a customer-facing lifecycle communication.

Required fields:

```json
{
  "id": "msg_connect_knowledge_source",
  "audience": "workspace_owner",
  "channel": "in_app",
  "purpose": "activation",
  "plan": "basic",
  "tone": "helpful_direct",
  "subject": "Give your AI employee business knowledge",
  "cta": "Connect knowledge",
  "suppression_rules": ["already_connected_knowledge", "workspace_deleted"]
}
```

### 6.9 LifecycleAutomationRun

Represents an executed automation instance.

Required fields:

```json
{
  "id": "run_123",
  "organization_id": "org_123",
  "playbook_id": "playbook_activation_stalled",
  "trigger_event_id": "evt_123",
  "status": "completed",
  "channel": "email",
  "outcome": "clicked",
  "created_at": "2026-06-18T12:00:00Z"
}
```

## 7. Plan-Aware Lifecycle Automation

Lifecycle automation must reflect Ariyo's three plan levels.

### 7.1 Basic Lifecycle Experience

Basic customers must receive a simple, guided, low-noise lifecycle experience.

Basic should include:

- Clear onboarding checklist.
- One recommended AI employee path.
- Basic activation reminders.
- Basic health indicators.
- Simple usage limit warnings.
- Upgrade education when limits are reached.
- Limited automation channels.
- Limited lifecycle dashboard.
- Basic winback flows.

Basic should not include:

- Deep predictive health scoring.
- Advanced segmentation.
- Multi-department adoption journeys.
- Enterprise success workflows.
- Advanced ROI modeling.
- Complex AI-driven next best action orchestration.

Basic lifecycle objective:

> Help the customer reach simple value without overwhelming them.

### 7.2 Pro Lifecycle Experience

Pro customers must receive operational lifecycle automation for real business adoption.

Pro should include:

- Full activation checklist.
- Multiple AI employee adoption journeys.
- Usage quality tracking.
- Department/team adoption nudges.
- Workflow adoption automations.
- Knowledge quality reminders.
- Human review queue health alerts.
- Cost threshold alerts.
- Customer health score.
- Expansion readiness signals.
- Renewal preparation reminders.
- Basic customer success handoff.
- Lifecycle dashboards for admins.

Pro lifecycle objective:

> Help the business turn Ariyo into a repeatable operational system.

### 7.3 Smart Lifecycle Experience

Smart customers must receive the fullest lifecycle intelligence and automation.

Smart should include:

- Predictive lifecycle scoring.
- AI-generated next best actions.
- Advanced health score with risk reasons.
- Proactive adoption recommendations.
- Multi-team lifecycle orchestration.
- Enterprise-style success plan automation.
- ROI and outcome narrative generation.
- Expansion recommendation engine.
- Renewal risk prediction.
- Automated QBR/EBR draft generation.
- Smart winback segmentation.
- Partner and marketplace expansion recommendations.
- Human success escalation rules.
- Advanced automation analytics.

Smart lifecycle objective:

> Help the customer continuously increase value while Ariyo intelligently detects risk, opportunity, and next steps.

Smart is not unlimited messaging or unlimited automation.

Smart is governed intelligence with stronger lifecycle automation.

## 8. Lifecycle Health Score

Ariyo must calculate health score from behavior and outcomes, not vanity metrics.

### 8.1 Health Score Dimensions

Recommended scoring model:

```text
Activation Health        15%
Adoption Health          15%
Value Realization        20%
AI Employee Performance  10%
Workflow Reliability     10%
Knowledge Quality        8%
Cost Health              8%
Admin Engagement         6%
Support Risk             4%
Billing Risk             4%
```

Weights may change by customer segment and plan.

### 8.2 Health Score States

Allowed states:

```text
excellent
healthy
watch
at_risk
critical
unknown
```

### 8.3 Health Score Rules

Ariyo must not reduce health scoring to login frequency.

Examples:

- High login frequency with no successful outcomes is not healthy.
- High AI usage with high cost and low approval rate is risky.
- Low usage may be healthy if the AI employee is completing scheduled workflows automatically.
- A workspace with one successful recurring workflow may be healthier than a workspace with many experiments.
- Admin inactivity is risky if renewal or billing decisions require admin buy-in.

### 8.4 Health Score Explanation

Every health score must be explainable.

Example:

```json
{
  "health_score": 62,
  "state": "watch",
  "reasons": [
    "AI employee has not completed a workflow in 7 days",
    "Knowledge freshness is below recommended threshold",
    "Admin has not viewed ROI dashboard",
    "Usage is near Pro plan limit"
  ],
  "recommended_actions": [
    "Refresh knowledge source",
    "Review workflow failure logs",
    "Send ROI summary to admin",
    "Recommend Smart plan evaluation"
  ]
}
```

## 9. Lifecycle Automation Principles

### 9.1 Value Before Promotion

Ariyo must not push upgrade messaging before showing value.

Upgrade prompts are allowed when:

- The customer has reached a real limit.
- The limit blocks a clearly desired outcome.
- The higher plan directly solves the blocked outcome.
- The customer can understand the value difference.

### 9.2 Customer State Before Schedule

Automation must be triggered by behavior, state, or risk.

Calendar-based automation is allowed only when it supports a lifecycle state.

### 9.3 One Primary CTA

Lifecycle messages must have one primary CTA.

Bad:

- Connect knowledge.
- Invite team.
- Upgrade now.
- Watch video.
- Book call.

Good:

- Connect your first knowledge source.

### 9.4 Respect Frequency

Ariyo must limit lifecycle communication frequency.

Suggested communication caps:

```text
Basic: max 2 lifecycle emails per week
Pro: max 3 lifecycle emails per week
Smart: max 4 lifecycle emails per week, unless customer has configured success alerts
```

Critical billing, security, reliability, or compliance notices are exempt but must be clearly classified.

### 9.5 Suppression Rules

Every automation must define suppression rules.

Examples:

- Do not send activation reminder if activation completed.
- Do not send upgrade prompt if user lacks billing permission.
- Do not send marketplace recommendation if marketplace disabled.
- Do not send integration setup CTA if integration already connected.
- Do not send renewal prompt to non-admin user.
- Do not send success call CTA if a meeting is already scheduled.

### 9.6 Human Escalation

Automation must escalate to humans when:

- Enterprise customer is critical risk.
- Payment issue affects high-value account.
- Security/compliance concern appears.
- Renewal window opens and health is at risk.
- Customer expresses frustration.
- AI employee failure impacts customer operations.
- Expansion opportunity requires consultative selling.

## 10. Lifecycle Playbooks

### 10.1 Signup Welcome Playbook

Trigger:

- `account_created`

Goal:

- Move customer to business goal selection.

Actions:

- Show welcome screen.
- Ask for primary business goal.
- Recommend first AI employee.
- Capture role and company type.

Success metric:

- `business_goal_selected`

Failure condition:

- No goal selected within 24 hours.

### 10.2 Activation Checklist Playbook

Trigger:

- `business_goal_selected`

Goal:

- Complete activation.

Checklist:

1. Hire AI employee.
2. Add business context.
3. Connect knowledge or upload file.
4. Generate first output.
5. Review or approve output.
6. Deploy or save first workflow.

Success metric:

- `activation_completed`

### 10.3 Stalled Activation Recovery Playbook

Trigger:

- Activation incomplete after configured threshold.

Segments:

- No AI employee created.
- AI employee created but no knowledge.
- Knowledge added but no output.
- Output generated but not reviewed.
- Reviewed but not deployed.

Each segment must receive different guidance.

Bad:

> Finish setting up Ariyo.

Good:

> Your AI employee is ready, but it needs one knowledge source before it can answer accurately.

### 10.4 First Value Playbook

Trigger:

- First useful output generated or approved.

Goal:

- Reinforce trust and suggest next step.

Actions:

- Show what Ariyo completed.
- Ask if result was useful.
- Suggest deploy, workflow, or team invite.
- Track first value quality.

### 10.5 Adoption Habit Playbook

Trigger:

- Activation completed but repeat usage is low.

Goal:

- Create recurring use.

Actions:

- Recommend weekly workflow.
- Recommend next AI employee task.
- Suggest connecting a channel.
- Suggest knowledge refresh.

### 10.6 Knowledge Quality Playbook

Trigger:

- Knowledge quality is low, stale, sparse, or error-prone.

Goal:

- Improve answer quality and trust.

Actions:

- Show knowledge gaps.
- Recommend missing documents.
- Suggest source refresh.
- Recommend RAG quality review.

### 10.7 Human Review Trust Playbook

Trigger:

- Review queue backlog or low approval rate.

Goal:

- Improve trust and reduce operational friction.

Actions:

- Summarize queue health.
- Identify rejected output patterns.
- Suggest prompt/rule improvements.
- Recommend policy update.
- Escalate to CS if critical.

### 10.8 Cost Control Playbook

Trigger:

- Usage near budget, cost anomaly, or Smart feature overuse.

Goal:

- Prevent surprise cost.

Actions:

- Alert admin.
- Explain cost drivers.
- Recommend cache, model downgrade, workflow optimization, or budget change.
- Suggest plan upgrade only if value supports it.

### 10.9 Integration Failure Playbook

Trigger:

- Integration degraded, disconnected, needs reauth, or webhook failed.

Goal:

- Restore operational continuity.

Actions:

- Notify appropriate admin.
- Explain impact.
- Provide reauth CTA.
- Pause affected workflows if needed.
- Create incident signal if widespread.

### 10.10 Expansion Readiness Playbook

Trigger:

- Plan limit near, high ROI, multiple users, department expansion, marketplace interest.

Goal:

- Convert proven value into expansion.

Actions:

- Show value proof.
- Explain what higher plan unlocks.
- Recommend Pro or Smart.
- Suggest sales/CS conversation for larger accounts.

### 10.11 Renewal Preparation Playbook

Trigger:

- Renewal window opens.

Goal:

- Prepare value evidence.

Actions:

- Generate renewal summary.
- Show outcomes achieved.
- List active AI employees.
- Show cost per outcome.
- Summarize support incidents and resolutions.
- Flag risks before renewal conversation.

### 10.12 Advocacy Playbook

Trigger:

- High health score and confirmed value.

Goal:

- Turn success into trust asset.

Actions:

- Ask for testimonial.
- Invite case study.
- Ask for referral.
- Invite partner/community participation.

### 10.13 Churn Prevention Playbook

Trigger:

- At-risk health score, cancellation intent, usage drop, payment issue, negative feedback.

Goal:

- Understand and recover.

Actions:

- Ask reason.
- Offer targeted fix.
- Escalate to human when appropriate.
- Provide downgrade option if cost is reason.
- Provide success consultation if value unclear.

### 10.14 Winback Playbook

Trigger:

- Customer churned and new relevant feature, offer, or use case exists.

Goal:

- Reopen conversation respectfully.

Actions:

- Reference prior use case.
- Explain what changed.
- Offer guided reactivation.
- Avoid pressure and spam.

## 11. Lifecycle Event Taxonomy

Lifecycle events must follow Ariyo observability naming conventions.

### 11.1 Account Events

```text
account.created
account.verified
organization.created
organization.profile_completed
workspace.created
workspace.deleted
```

### 11.2 Activation Events

```text
activation.started
activation.step_completed
activation.stalled
activation.completed
activation.failed
first_value.generated
first_value.confirmed
```

### 11.3 Adoption Events

```text
adoption.started
adoption.habit_detected
adoption.dropped
team_member.invited
team_member.activated
ai_employee.deployed
workflow.completed
knowledge.updated
```

### 11.4 Health Events

```text
health.score_calculated
health.state_changed
health.risk_detected
health.recovered
health.critical
```

### 11.5 Expansion Events

```text
expansion.signal_detected
plan.limit_near
plan.limit_reached
upgrade.prompt_viewed
upgrade.started
upgrade.completed
marketplace.asset_viewed
marketplace.asset_installed
```

### 11.6 Renewal Events

```text
renewal.window_opened
renewal.report_generated
renewal.risk_detected
renewal.completed
renewal.failed
```

### 11.7 Churn and Winback Events

```text
churn.intent_detected
subscription.cancelled
trial.expired
payment.failed
winback.eligible
winback.message_sent
winback.reactivated
```

## 12. Automation Trigger Design

### 12.1 Trigger Types

Ariyo must support:

- Event-based triggers.
- Time-window triggers.
- Threshold triggers.
- Segment triggers.
- Health score triggers.
- Billing state triggers.
- Usage anomaly triggers.
- Plan limit triggers.
- Renewal date triggers.
- Manual CS triggers.

### 12.2 Trigger Example

```json
{
  "trigger_id": "trigger_activation_stalled_no_knowledge",
  "event": "activation.stalled",
  "conditions": {
    "has_ai_employee": true,
    "has_knowledge_source": false,
    "hours_since_signup": 24
  },
  "suppression": {
    "activation_completed": true,
    "email_unsubscribed": true
  },
  "playbook": "playbook_connect_knowledge"
}
```

### 12.3 Trigger Safety

Triggers must be idempotent.

Ariyo must avoid duplicate lifecycle messages from repeated events.

Every automation run must store:

- Trigger event.
- Customer state at trigger time.
- Decision reason.
- Message or action sent.
- Outcome.
- Suppression reason, if suppressed.

## 13. Next Best Action System

Ariyo should compute Next Best Action for each customer.

### 13.1 NBA Priority Logic

Priority order:

1. Security or compliance issue.
2. Billing failure or access risk.
3. Broken integration or workflow failure.
4. Activation blocker.
5. Trust blocker.
6. Value realization blocker.
7. Adoption growth.
8. Expansion opportunity.
9. Advocacy opportunity.

### 13.2 NBA Example

```json
{
  "organization_id": "org_123",
  "next_best_action": {
    "type": "connect_knowledge_source",
    "priority": "high",
    "reason": "The first AI employee exists but has no trusted business knowledge.",
    "target_user_role": "owner",
    "cta": "Connect knowledge",
    "expected_impact": "Improve first-answer quality and complete activation",
    "expires_at": "2026-06-25T00:00:00Z"
  }
}
```

### 13.3 Smart Plan NBA

Smart plan may include AI-generated recommendations, but the system must ground recommendations in observed customer signals.

Smart NBA must not invent customer intent.

## 14. Customer Communication Channels

Lifecycle automation may use:

- In-app messages.
- Email.
- Admin notifications.
- Product checklist.
- Dashboard prompts.
- AI employee suggestions.
- Slack or Teams notifications when connected.
- CRM task creation.
- CS task creation.
- Billing notifications.
- Webhooks.

### 14.1 Channel Rules

In-app:

- Best for immediate product guidance.
- Must be contextual.

Email:

- Best for reactivation, summaries, reminders, and executive value.
- Must obey consent and unsubscribe rules where applicable.

Admin notification:

- Best for billing, risk, integrations, security, renewal, and team issues.

AI employee suggestion:

- Best when directly related to AI employee performance.
- Must not obscure whether a message is system-generated.

CS task:

- Best for high-value, high-risk, or expansion-ready accounts.

## 15. Lifecycle Message Rules

### 15.1 Tone

Lifecycle communication must be:

- Helpful.
- Direct.
- Calm.
- Specific.
- Respectful.
- Business-outcome-oriented.

It must not be:

- Desperate.
- Hype-driven.
- Shame-based.
- Manipulative.
- Artificially urgent.

### 15.2 Message Structure

Every lifecycle message should include:

1. What happened.
2. Why it matters.
3. What to do next.
4. One CTA.
5. Expected benefit.

Example:

```text
Your Support AI Employee is ready, but it does not have trusted knowledge yet.

Connect one help document or FAQ so it can generate more accurate first answers.

CTA: Connect knowledge
```

### 15.3 Upgrade Message Rules

Upgrade messages must be grounded in the user's actual blocked outcome.

Bad:

> Upgrade to Smart for more power.

Good:

> Your AI employee reached the Basic monthly automation limit. Pro unlocks more workflow runs and usage alerts so your support automation can continue this month.

Smart upsell example:

> Your Pro workflows are running successfully, but your team is manually reviewing similar outputs every day. Smart can recommend review policy improvements and generate outcome reports automatically.

## 16. Lifecycle Segmentation

Ariyo must segment lifecycle automation by:

- Plan: Basic, Pro, Smart.
- Customer type.
- Company size.
- Industry.
- Primary use case.
- Lifecycle stage.
- Health score.
- AI maturity.
- Knowledge maturity.
- Usage level.
- Cost sensitivity.
- Admin engagement.
- Sales-assisted vs self-serve.
- Marketplace usage.
- Partner-sourced vs direct.
- Region and language.

Segmentation must improve relevance, not create discrimination or unfair treatment.

## 17. Lifecycle Dashboards

### 17.1 Internal Dashboard

Ariyo internal teams need visibility into:

- Lifecycle stage distribution.
- Activation funnel.
- Drop-off points.
- Health score distribution.
- At-risk accounts.
- Expansion-ready accounts.
- Renewal risk.
- Automation performance.
- Message fatigue.
- Plan conversion.
- Winback performance.
- Partner-sourced lifecycle quality.

### 17.2 Customer Admin Dashboard

Customer admins should see:

- Setup progress.
- AI employee adoption.
- Workflow value.
- Cost and usage.
- Review queue status.
- Knowledge quality.
- Recommended next steps.
- Plan limits.
- Upgrade value.
- Renewal value summary.

### 17.3 Smart Customer Dashboard

Smart plan may include:

- Predictive health insights.
- Department-level adoption.
- AI-generated success recommendations.
- Expansion recommendations.
- Risk explanation.
- Automated executive summary.

## 18. Sales, CS, and Support Handoff

Lifecycle automation must create human handoffs when needed.

### 18.1 Sales Handoff

Triggered by:

- Demo request.
- Enterprise signal.
- High-intent pricing behavior.
- Multiple stakeholders.
- Procurement request.
- Smart plan interest.

Handoff must include:

- Customer profile.
- Source and campaign.
- Use case.
- Pain signals.
- Product activity.
- Suggested pitch.
- Recommended plan.

### 18.2 Customer Success Handoff

Triggered by:

- At-risk health score.
- Pro/Smart activation failure.
- Enterprise renewal window.
- Low trust in AI outputs.
- Expansion opportunity.
- High support burden.

Handoff must include:

- Health score reasons.
- Current lifecycle stage.
- Value achieved.
- Blockers.
- Suggested playbook.

### 18.3 Support Handoff

Triggered by:

- Technical error.
- Integration failure.
- Account access issue.
- Billing issue.
- Security/compliance concern.

Handoff must include:

- Error context.
- Account state.
- User permission.
- Relevant logs.
- Customer-facing impact.

## 19. Billing and Plan Lifecycle

Ariyo lifecycle automation must be plan and billing aware.

### 19.1 Trial Lifecycle

Trial automation must:

- Drive activation first.
- Show value before deadline pressure.
- Explain plan differences clearly.
- Avoid fake scarcity.
- Remind before expiration.
- Offer right-fit plan.

### 19.2 Upgrade Lifecycle

Upgrade automation must trigger when:

- Customer hits meaningful limit.
- Customer previews higher-tier feature.
- Customer has proven ROI.
- Customer has expansion need.
- Customer needs better control, not only more usage.

### 19.3 Downgrade Lifecycle

Downgrade automation must:

- Explain what will be lost.
- Preserve trust.
- Offer cost-saving alternatives.
- Prevent accidental loss of critical workflows.
- Respect user choice.

### 19.4 Payment Failure Lifecycle

Payment failure automation must:

- Notify billing admin.
- Provide grace period details.
- Explain operational impact.
- Avoid public embarrassment inside team.
- Avoid immediate destructive action.

## 20. Marketplace Lifecycle Automation

Marketplace behavior must feed lifecycle automation.

Signals:

- Asset viewed.
- Asset installed.
- Asset configured.
- Asset abandoned.
- Asset produced outcome.
- Asset failed.
- Creator support requested.

Automation examples:

- Recommend marketplace templates based on use case.
- Suggest Pro/Smart marketplace assets when plan allows.
- Trigger creator quality review when asset fails frequently.
- Recommend bundles after successful adoption.

## 21. Partner Lifecycle Automation

Partner-sourced customers must include partner attribution and lifecycle quality.

Ariyo must track:

- Partner lead quality.
- Partner activation rate.
- Partner retention rate.
- Partner expansion rate.
- Partner support burden.
- Partner fraud risk.
- Partner payout eligibility.

Lifecycle automations must not allow partners to spam customers or misrepresent Ariyo.

## 22. API and Backend Requirements

### 22.1 Lifecycle State API

Suggested endpoint:

```http
GET /api/v1/organizations/{organization_id}/lifecycle
```

Example response:

```json
{
  "organization_id": "org_123",
  "stage": "adoption",
  "health_score": 78,
  "health_state": "healthy",
  "next_best_action": {
    "type": "invite_team_member",
    "reason": "The first AI employee is active and producing reviewed outputs. Inviting one reviewer can reduce owner workload.",
    "cta": "Invite reviewer"
  },
  "milestones": [
    "organization_created",
    "business_goal_selected",
    "ai_employee_hired",
    "knowledge_connected",
    "first_output_approved"
  ]
}
```

### 22.2 Automation Run API

Suggested endpoint:

```http
POST /api/v1/lifecycle/automation-runs
```

Example request:

```json
{
  "organization_id": "org_123",
  "playbook_id": "playbook_activation_stalled",
  "trigger_event_id": "evt_123",
  "channel": "in_app"
}
```

### 22.3 Lifecycle Event Ingestion

Suggested endpoint:

```http
POST /api/v1/lifecycle/events
```

Example request:

```json
{
  "event_name": "activation.step_completed",
  "organization_id": "org_123",
  "actor_id": "user_123",
  "properties": {
    "step": "knowledge_connected",
    "source_type": "file_upload"
  },
  "occurred_at": "2026-06-18T12:00:00Z"
}
```

### 22.4 Lifecycle Webhooks

Ariyo should support outbound lifecycle webhooks for Pro and Smart customers.

Webhook events:

```text
lifecycle.stage_changed
health.state_changed
activation.completed
plan.limit_reached
renewal.window_opened
expansion.signal_detected
churn.risk_detected
```

Webhook payload example:

```json
{
  "event": "health.state_changed",
  "organization_id": "org_123",
  "previous_state": "healthy",
  "new_state": "watch",
  "reasons": ["integration_failed", "workflow_activity_drop"],
  "occurred_at": "2026-06-18T12:00:00Z"
}
```

## 23. Privacy, Consent, and Compliance

Lifecycle automation must follow privacy and consent rules.

Rules:

- Do not send marketing emails to users without required consent where applicable.
- Do not expose sensitive account details in email subject lines.
- Do not include confidential customer data in lifecycle messages unless necessary and secure.
- Do not use customer data for public proof without explicit permission.
- Do not send lifecycle messages to unauthorized users.
- Do not reveal billing issues to non-billing users.
- Do not reveal security issues to non-admin users.
- Do not use AI-generated personalization without grounding in actual allowed data.

## 24. Security Rules

Lifecycle automation must not become an attack surface.

Rules:

- Webhook signatures are required.
- Lifecycle event ingestion must be authenticated.
- Automation actions must be permission checked.
- Email links must use secure tokens and expiration.
- No sensitive tokens in URLs.
- No lifecycle action may bypass admin permissions.
- Lifecycle messages must not leak organization information across tenants.
- Partner lifecycle access must be scoped and audited.

## 25. AI-Assisted Lifecycle Rules

AI may help generate:

- Next best action summaries.
- Customer success notes.
- Renewal summaries.
- Expansion recommendations.
- Winback messages.
- Health score explanations.

AI must not:

- Invent customer behavior.
- Invent ROI.
- Send sensitive messages without review when risk is high.
- Override permission rules.
- Make guarantees about outcomes.
- Generate manipulative lifecycle copy.
- Hide uncertainty.

High-risk lifecycle communication must require human review.

Examples:

- Enterprise renewal risk summary.
- Cancellation recovery for high-value account.
- Security/compliance issue explanation.
- Public case study request.
- Partner dispute communication.

## 26. Observability and Metrics

Ariyo must measure lifecycle automation quality.

### 26.1 Core Metrics

- Activation rate.
- Time to first value.
- Adoption rate.
- Weekly active organizations.
- AI employee deployment rate.
- Workflow completion rate.
- Knowledge connection rate.
- Health score distribution.
- At-risk recovery rate.
- Expansion conversion.
- Renewal rate.
- Churn rate.
- Winback rate.
- Message open/click/action rate.
- Suppression rate.
- Unsubscribe rate.
- Spam complaint rate.
- Automation-assisted revenue.
- Human handoff success.

### 26.2 Quality Metrics

- Message relevance score.
- Lifecycle CTA completion rate.
- False positive risk alerts.
- False negative churn risk.
- Automation fatigue.
- Duplicate automation incidents.
- Customer complaint rate.

### 26.3 Plan Metrics

Basic:

- Activation completion.
- Limit-driven upgrade conversion.
- Early churn.

Pro:

- Workflow adoption.
- Team invitation rate.
- Cost alert effectiveness.
- Expansion readiness.

Smart:

- Predictive recommendation accuracy.
- Expansion recommendation conversion.
- Renewal risk recovery.
- AI-generated success summary usage.

## 27. Frontend Requirements

Frontend must support:

- Lifecycle checklist components.
- Stage-aware dashboard cards.
- Next best action card.
- Health score explanation.
- Plan limit warnings.
- Upgrade prompts based on actual blockers.
- Renewal value report UI.
- Customer admin lifecycle view.
- CS/internal lifecycle view if admin app exists.
- Message preference controls.
- Consent controls.
- Empty states mapped to lifecycle stage.

Frontend must not:

- Show upgrade prompts unrelated to customer behavior.
- Show health score without reasons.
- Show lifecycle actions user cannot perform.
- Hide critical errors behind marketing copy.
- Use dark patterns to prevent cancellation.

## 28. Backend Requirements

Backend must support:

- Lifecycle state machine.
- Event ingestion.
- Health score calculation.
- Next best action calculation.
- Playbook eligibility engine.
- Suppression rules.
- Communication caps.
- Consent checks.
- Permission checks.
- Human escalation queue.
- Automation audit logs.
- Webhook delivery and retries.
- Integration with billing, analytics, AI employee, workflow, marketplace, and support systems.

## 29. QA and Testing

Lifecycle automation must be tested.

Required tests:

- Stage transition tests.
- Trigger eligibility tests.
- Suppression rule tests.
- Consent tests.
- Permission tests.
- Duplicate event idempotency tests.
- Communication frequency cap tests.
- Plan-specific behavior tests.
- Billing state tests.
- Health score explanation tests.
- Webhook signature tests.
- Human escalation tests.
- Cancellation/downgrade tests.
- Cross-tenant data leakage tests.

## 30. Forbidden Patterns

Ariyo must never:

- Treat lifecycle automation as generic email drip campaigns.
- Send upgrade prompts before value is shown.
- Trigger automations only because time passed.
- Send messages without suppression rules.
- Send lifecycle messages to users without permission.
- Reveal billing or security information to the wrong role.
- Use AI to invent customer facts.
- Over-message inactive customers.
- Use dark patterns to prevent cancellation.
- Mark a customer healthy because they logged in.
- Mark a customer activated without a useful outcome.
- Trigger partner payouts without lifecycle quality checks.
- Send renewal messages without value evidence.
- Hide plan limitations until the customer is blocked.
- Create automation that cannot be audited.
- Let lifecycle automation bypass human review where risk is high.

## 31. Definition of Done

Customer lifecycle automation is ready when:

- Lifecycle stages are explicit.
- Activation milestones are tracked.
- Health score is explainable.
- Next best action exists.
- Basic, Pro, and Smart lifecycle experiences are distinct.
- Lifecycle events are instrumented.
- Automation playbooks have triggers, suppression, consent, and success metrics.
- Lifecycle messages are role-aware and plan-aware.
- High-risk cases escalate to humans.
- Billing and plan lifecycle is connected.
- Marketplace and partner signals are included.
- Privacy and security rules are enforced.
- Dashboards show lifecycle performance.
- QA covers stage transitions and automation safety.

## 32. Golden Rule

Ariyo lifecycle automation must help customers achieve the next real business outcome.

If an automation does not move the customer closer to activation, adoption, value, trust, expansion, renewal, advocacy, or respectful recovery, it should not exist.
