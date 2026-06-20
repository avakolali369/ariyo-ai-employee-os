# Ariyo Marketplace Trust & Safety Operations Skill

## 1. Core Contract

Ariyo Marketplace Trust & Safety is not content moderation after damage happens.

Ariyo Marketplace Trust & Safety is the operating system that protects customers, creators, partners, AI employees, marketplace assets, payments, reviews, rankings, integrations, data, and platform reputation from abuse, fraud, manipulation, unsafe automation, malicious templates, policy evasion, and trust erosion.

Ariyo must make trusted marketplace growth easier than abusive marketplace growth.

Every marketplace trust decision must be evidence-based, policy-backed, appealable where appropriate, auditable, privacy-safe, proportionate, and connected to customer safety and ecosystem integrity.

---

## 2. Purpose

This skill defines how Ariyo prevents, detects, investigates, enforces, and learns from unsafe or abusive marketplace behavior.

It applies to:

- AI Employee templates
- Agent Team templates
- Workflow templates
- Knowledge packs
- GEO / AI SEO templates
- Integration bundles
- Marketplace solutions
- Creator accounts
- Partner accounts
- Reviews and ratings
- Sponsored listings
- Marketplace search and ranking
- Installs, activations, refunds, disputes, payouts
- Marketplace APIs and webhooks
- Customer-facing marketplace experiences
- Internal Trust & Safety operations

The goal is to preserve marketplace trust while allowing high-quality creators and partners to grow.

---

## 3. Dependencies

This skill must be used together with:

- `ecosystem-marketplace-economy.md`
- `agent-marketplace-template-builder.md`
- `ai-agent-template-review-governance.md`
- `template-quality-ranking-system.md`
- `marketplace-search-recommendation-engine.md`
- `marketplace-installation-entitlements.md`
- `marketplace-billing-payouts.md`
- `marketplace-dispute-resolution.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-simulation-sandbox.md`
- `ai-agent-incident-response.md`
- `ai-agent-observability-tracing.md`
- `security-threat-model.md`
- `data-governance-privacy.md`
- `legal-pages-policy-system.md`
- `admin-permissions.md`
- `internal-admin-backoffice.md`
- `operations-command-center.md`
- `observability-analytics-events.md`

---

## 4. Marketplace Trust Philosophy

Ariyo must not optimize the marketplace only for asset count, installs, creator revenue, or short-term growth.

Marketplace growth is healthy only when:

- customers install assets that produce real outcomes
- creators are rewarded for quality, not manipulation
- risky assets are reviewed before scaling
- low-quality assets do not dominate discovery
- sponsored listings do not override safety
- reviews are authentic
- refunds and disputes are handled fairly
- payout systems do not reward fraud
- AI employees remain governed after install
- trust signals are explainable
- marketplace operators can intervene quickly

The marketplace should feel open, but it must operate with strict trust controls.

---

## 5. Threat Model

Ariyo Marketplace must assume the following actors may exist:

### 5.1 Malicious Creators

Creators who intentionally publish unsafe, misleading, harmful, expensive, data-stealing, or policy-violating templates.

Examples:

- templates designed to exfiltrate customer data
- templates that ask for unnecessary integration permissions
- templates that inject hidden prompt behavior
- templates that manipulate outputs toward a third-party service
- templates that generate spam
- templates that bypass human review
- templates that overconsume AI budget

### 5.2 Low-Quality Creators

Creators who are not malicious but publish vague, broken, overpromising, stale, or poorly tested assets.

### 5.3 Manipulative Sellers

Creators or partners who attempt to influence ranking and trust signals.

Examples:

- fake installs
- fake reviews
- review rings
- refund abuse
- suspicious activation loops
- sponsored listing abuse
- keyword stuffing
- misleading GEO claims
- duplicate templates
- republishing suspended assets under new accounts

### 5.4 Abusive Customers

Customers who misuse marketplace assets or exploit refund/dispute systems.

Examples:

- installing assets, extracting value, then disputing payment dishonestly
- using templates for spam or prohibited automation
- abusing free trials
- creating fake reports to harm competitors

### 5.5 Compromised Accounts

Creator, partner, admin, or customer accounts may be compromised.

Signals:

- unusual payout changes
- sudden template edits
- suspicious integration changes
- credential updates from unknown regions
- bulk publishing
- sudden price manipulation

### 5.6 Platform Exploit Attempts

Attempts to exploit Ariyo systems through marketplace surfaces.

Examples:

- prompt injection inside template metadata
- malicious markdown or script injection
- poisoned knowledge packs
- webhook abuse
- marketplace API abuse
- payload smuggling through template config

---

## 6. Trust & Safety Object Model

### 6.1 TrustSubject

Represents the entity being evaluated.

Types:

```text
creator
partner
marketplace_asset
template_version
review
install
organization
customer_account
payout_account
integration_bundle
sponsored_listing
api_key
```

### 6.2 TrustSignal

A measured signal that contributes to safety decisions.

Fields:

```json
{
  "signal_id": "sig_123",
  "subject_type": "marketplace_asset",
  "subject_id": "asset_123",
  "signal_type": "unsafe_output_rate",
  "value": 0.04,
  "severity": "medium",
  "source": "ai_evaluation",
  "observed_at": "2026-06-18T12:00:00Z",
  "confidence": 0.86,
  "evidence_refs": ["trace_123", "incident_456"]
}
```

### 6.3 TrustCase

An investigation or enforcement case.

Fields:

```json
{
  "case_id": "case_123",
  "case_type": "ranking_manipulation",
  "subject_type": "creator",
  "subject_id": "creator_123",
  "status": "in_review",
  "severity": "high",
  "priority": "p1",
  "assigned_team": "marketplace_trust_safety",
  "evidence_refs": [],
  "actions_taken": [],
  "created_at": "2026-06-18T12:00:00Z"
}
```

### 6.4 EnforcementAction

An action applied to a subject.

Types:

```text
warn
request_changes
reduce_ranking
remove_from_recommendations
pause_installs
hold_payout
remove_sponsored_eligibility
restrict_creator
suspend_asset
suspend_creator
remove_review
require_reverification
force_version_rollback
block_api_access
terminate_account
refer_to_legal
```

### 6.5 Appeal

Creator, partner, or customer appeal of an enforcement decision.

---

## 7. Trust & Safety Lifecycle

Every marketplace trust case follows this lifecycle:

```text
detected
triaged
investigating
evidence_gathering
risk_scored
action_recommended
action_approved
enforced
communicated
appeal_window_open
appeal_requested
appeal_review
upheld
modified
reversed
closed
post_case_learning
```

Lifecycle rules:

- Critical cases may skip standard review and trigger emergency containment.
- Enforcement must be logged.
- Affected parties must be notified when appropriate.
- Appeals must not be reviewed only by the original reviewer for serious cases.
- Evidence must be preserved before enforcement whenever possible.

---

## 8. Marketplace Risk Categories

### 8.1 Security Risk

Includes:

- data exfiltration
- prompt injection
- malicious tool configuration
- unsafe webhook endpoints
- suspicious external URLs
- integration abuse
- credential harvesting
- secret leakage

### 8.2 Privacy Risk

Includes:

- unnecessary PII collection
- cross-tenant data exposure
- memory leakage
- unscoped knowledge access
- misleading data usage claims
- retention violations

### 8.3 AI Safety Risk

Includes:

- hallucination-prone templates
- unsafe advice
- missing human review gates
- dangerous automation
- model behavior manipulation
- jailbreak-prone prompts

### 8.4 Financial Risk

Includes:

- refund abuse
- payout fraud
- fake installs
- price manipulation
- hidden costs
- excessive AI usage
- unauthorized upsell behavior

### 8.5 Marketplace Integrity Risk

Includes:

- fake reviews
- ranking manipulation
- duplicate spam templates
- misleading listing claims
- creator impersonation
- sponsored listing abuse

### 8.6 Customer Harm Risk

Includes:

- broken templates
- overpromising outcomes
- poor support from creator
- confusing installation requirements
- workflows that disrupt operations

---

## 9. Detection System

Ariyo must detect trust issues through multiple channels.

### 9.1 Automated Signals

Examples:

```text
high refund rate
high uninstall rate
low activation rate
high incident rate
high unsafe output rate
high cost overrun rate
unusual install velocity
suspicious review velocity
ranking manipulation signals
creator account anomaly
payout account changes
sudden template permission changes
high support ticket rate
failed simulation regression
policy classifier flag
prompt injection risk flag
```

### 9.2 Manual Reports

Sources:

- customers
- creators
- partners
- internal operators
- support team
- security team
- customer success
- finance
- legal

### 9.3 System Reviews

Periodic sweeps:

- high-growth assets
- newly monetized assets
- assets requesting sensitive permissions
- high-revenue creators
- sponsored listings
- high-refund assets
- high-cost AI templates

### 9.4 Incident Linkage

AI incidents and marketplace trust cases must be linked when relevant.

Example:

```text
AI incident -> asset version -> creator -> installs -> affected organizations -> enforcement action
```

---

## 10. Fraud Detection

Ariyo must detect fraud across installs, reviews, payouts, traffic, referrals, and creator behavior.

### 10.1 Install Fraud Signals

```text
many installs from related accounts
install bursts from same IP/device cluster
install without meaningful activation
install followed by refund/dispute pattern
install loops across creator-owned accounts
high install count but low outcome completion
```

### 10.2 Review Fraud Signals

```text
review velocity spike
same language repeated across reviews
reviewers with no real usage
review clusters tied to creator network
many 5-star reviews after sponsored campaign without activation
negative review bombing patterns
```

### 10.3 Payout Fraud Signals

```text
suspicious payout account changes
refund spike after payout eligibility
creator self-purchases
affiliate loop fraud
high chargeback rate
marketplace commission evasion
```

### 10.4 Ranking Manipulation Signals

```text
keyword stuffing
duplicate listing networks
fake engagement
sponsored listing abuse
asset title manipulation
metadata spam
category stuffing
```

---

## 11. Fake Reviews & Ratings Governance

Reviews must be treated as trust infrastructure, not marketing content.

### 11.1 Review Requirements

A review should be accepted only if:

- reviewer installed or used the asset
- review is tied to a real organization account
- review does not expose sensitive data
- review is not incentivized without disclosure
- review does not violate policy
- review is not generated or mass-posted deceptively

### 11.2 Review Labels

Possible labels:

```text
verified_install
verified_activation
verified_outcome
creator_response
incentivized_disclosed
under_review
removed_for_policy
```

### 11.3 Review Enforcement

Actions:

- hide review pending investigation
- remove review
- reduce review weight
- restrict reviewer
- restrict creator response
- penalize asset ranking
- open fraud case

---

## 12. Creator Trust Score

Creator Trust Score measures how trustworthy a creator is across quality, safety, support, and commercial behavior.

### 12.1 Positive Signals

```text
high template approval rate
low incident rate
high install-to-activation rate
high outcome completion
low refund rate
low support ticket rate
fast issue response
stable payout history
high simulation coverage
high documentation quality
successful security review history
```

### 12.2 Negative Signals

```text
policy violations
suspended assets
fake reviews
ranking manipulation
high dispute rate
high unsafe output rate
unresolved customer complaints
creator impersonation
frequent critical version changes
misleading claims
```

### 12.3 Trust Score Bands

```text
new
trusted
verified
high_trust
restricted
probation
suspended
```

Rules:

- New creators have limited publishing velocity.
- High-trust creators may receive faster review, not bypass safety checks.
- Restricted creators cannot publish high-risk assets.
- Suspended creators cannot receive payouts until case resolution.

---

## 13. Asset Trust Score

Asset Trust Score measures whether a marketplace asset deserves visibility and installs.

Inputs:

- Template Quality Score
- review governance status
- incident history
- install-to-activation rate
- outcome completion rate
- unsafe output rate
- cost per successful run
- support ticket rate
- refund/dispute rate
- creator trust score
- version freshness
- simulation pass rate
- customer ratings weighted by verified outcomes

Asset Trust Score should affect:

- search ranking
- recommendations
- featured eligibility
- sponsored listing eligibility
- install warnings
- review requirements
- plan availability

---

## 14. Policy Enforcement Matrix

| Violation Type | Example | Default Action | Escalation |
|---|---|---|---|
| Listing overclaim | "Guaranteed 10x revenue" | request changes | hide listing |
| Fake reviews | review ring | remove reviews | creator restriction |
| Prompt injection risk | hidden instructions | pause installs | security review |
| Data exfiltration | sends customer data externally | suspend asset | legal/security escalation |
| Cost abuse | runaway model calls | pause asset | payout hold |
| Unsafe automation | external write without approval | disable execution | incident response |
| Duplicate spam | many low-quality clones | de-rank assets | creator restriction |
| Payment fraud | self-purchase payout loop | payout hold | account suspension |

---

## 15. Enforcement Actions

### 15.1 Soft Actions

```text
warning
education_required
listing_edit_required
documentation_required
simulation_required
review_required
ranking_demotion
recommendation_exclusion
```

### 15.2 Restrictive Actions

```text
pause_installs
pause_updates
disable_sponsored_listing
hold_payout
restrict_creator_publishing
require_manual_review
force_human_approval_on_asset
```

### 15.3 Severe Actions

```text
asset_suspension
creator_suspension
partner_suspension
asset_removal
account_termination
legal_escalation
security_incident_response
customer_notification
```

---

## 16. Marketplace Trust Review Board

High-risk cases require review by a Marketplace Trust Review Board.

Possible roles:

- Marketplace Operations Lead
- AI Safety Reviewer
- Security Reviewer
- Compliance Reviewer
- Finance Reviewer
- Customer Success Reviewer
- Product Owner
- Legal Reviewer when required

Board required when:

- customer data may be exposed
- creator payout fraud is suspected
- many customers are affected
- a high-revenue asset is involved
- a sponsored listing may be unsafe
- public trust claims are disputed
- legal or compliance risk exists
- a permanent ban is considered

---

## 17. Emergency Containment

Emergency containment is required when customer harm is ongoing or imminent.

Possible emergency actions:

```text
hide asset
pause installs
pause execution
disable tool access
force rollback
freeze payouts
notify affected admins
open AI incident
open security incident
block creator publishing
remove from search and recommendations
```

Emergency actions must be:

- time-stamped
- owner-assigned
- evidence-preserving
- reviewed after containment
- communicated appropriately
- reversible when safe

---

## 18. Appeal System

Creators, partners, and customers must have a fair path to challenge enforcement decisions when appropriate.

### 18.1 Appeal Lifecycle

```text
appeal_submitted
appeal_validated
evidence_review
secondary_review
decision_upheld
decision_modified
decision_reversed
appeal_closed
```

### 18.2 Appeal Requirements

Appeal must include:

- case ID
- disputed decision
- explanation
- supporting evidence
- corrective action if relevant
- requested outcome

### 18.3 Appeal Decision Types

```text
uphold
downgrade_enforcement
restore_asset
restore_with_conditions
require_new_version
reject_appeal
escalate_to_board
```

---

## 19. Plan-Based Trust & Safety: Basic / Pro / Smart

### 19.1 Basic

Basic users should see only low-risk, easy-to-install, strongly governed assets.

Rules:

- no critical-risk templates
- no autonomous external write actions
- no advanced multi-agent templates unless approved for Basic
- install warnings must be simple
- trust badges must be clear
- support should route to self-service and standard support

### 19.2 Pro

Pro users can access operational templates with stronger controls.

Rules:

- moderate-risk templates allowed with review gates
- integrations require clear permission grants
- workflow templates require simulation where applicable
- team templates require admin approval
- trust signals should be visible to admins

### 19.3 Smart

Smart users may access advanced and high-impact templates, but governance must be strongest.

Rules:

- multi-agent templates allowed
- advanced GEO/API templates allowed
- advanced automation allowed with policy controls
- sensitive actions require approval gates
- advanced trust telemetry available
- risk warnings and cost forecasts must be detailed
- enterprise-style audit support should be available

Smart does not mean ungoverned.

Smart means more power with stronger controls.

---

## 20. Sponsored Listing Safety

Sponsored listings must never override trust.

Rules:

- unsafe assets cannot be sponsored
- assets under investigation cannot be sponsored
- low Trust Score assets cannot be sponsored
- sponsored ranking must be labeled
- sponsored assets must still pass relevance filters
- sponsored assets must not hide organic safer options
- sponsored spend must not suppress incident penalties

Forbidden:

```text
paying to appear above safer relevant assets
sponsoring suspended assets
using sponsored placement to bypass review
using misleading paid claims
```

---

## 21. Trust Badges

Badges must be earned and evidence-backed.

Possible badges:

```text
Verified Creator
Security Reviewed
AI Safety Reviewed
High Activation Rate
Low Incident Rate
Customer Outcome Verified
Enterprise Ready
GEO Verified
Integration Safe
Cost Controlled
Human Review Required
```

Badge rules:

- badges must expire or require revalidation
- badges must link to criteria
- badges must be removed if signals degrade
- badges must not be sold directly
- badge abuse must trigger enforcement

---

## 22. API Contract

### 22.1 Create Trust Case

`POST /api/marketplace/trust/cases`

Request:

```json
{
  "case_type": "fake_reviews",
  "subject_type": "marketplace_asset",
  "subject_id": "asset_123",
  "severity": "medium",
  "evidence_refs": ["event_1", "review_2"],
  "description": "Suspicious review spike after sponsored campaign"
}
```

Response:

```json
{
  "case_id": "case_123",
  "status": "triaged",
  "priority": "p2",
  "assigned_team": "marketplace_trust_safety"
}
```

### 22.2 Get Trust Case

`GET /api/marketplace/trust/cases/{case_id}`

### 22.3 Apply Enforcement Action

`POST /api/marketplace/trust/cases/{case_id}/actions`

Request:

```json
{
  "action_type": "pause_installs",
  "reason": "High unsafe output rate detected",
  "duration": "temporary",
  "notify_subject": true,
  "requires_appeal_window": true
}
```

### 22.4 Submit Appeal

`POST /api/marketplace/trust/cases/{case_id}/appeals`

Request:

```json
{
  "appeal_reason": "False positive due to testing traffic",
  "evidence_refs": ["doc_123"],
  "requested_outcome": "restore_asset"
}
```

### 22.5 Get Trust Score

`GET /api/marketplace/trust/scores?subject_type=creator&subject_id=creator_123`

Response:

```json
{
  "subject_type": "creator",
  "subject_id": "creator_123",
  "trust_score": 82,
  "band": "trusted",
  "positive_signals": ["low_incident_rate", "high_activation_rate"],
  "negative_signals": ["one_recent_dispute"],
  "last_calculated_at": "2026-06-18T12:00:00Z"
}
```

---

## 23. Webhooks

Ariyo should emit webhooks for important trust events.

Webhook events:

```text
marketplace.trust_case.created
marketplace.trust_case.escalated
marketplace.enforcement.applied
marketplace.enforcement.reversed
marketplace.asset.suspended
marketplace.asset.reinstated
marketplace.creator.restricted
marketplace.payout.held
marketplace.appeal.submitted
marketplace.appeal.decided
marketplace.trust_score.changed
```

Webhook payloads must not include unnecessary sensitive data.

---

## 24. Observability Events

Events:

```text
trust_signal_detected
trust_case_created
trust_case_triaged
trust_case_assigned
trust_evidence_added
enforcement_action_recommended
enforcement_action_applied
enforcement_action_reversed
appeal_submitted
appeal_decided
asset_trust_score_updated
creator_trust_score_updated
review_removed
ranking_penalty_applied
payout_hold_applied
sponsored_eligibility_removed
```

All events must include:

- organization_id when applicable
- actor_id
- subject_type
- subject_id
- case_id when applicable
- severity
- risk_category
- evidence_refs
- timestamp
- correlation_id

---

## 25. Advanced KPI System

### 25.1 Marketplace Integrity KPIs

```text
Marketplace Trust Score
Policy Violation Rate
High-Risk Asset Ratio
Suspended Asset Rate
Fake Review Detection Rate
Ranking Manipulation Attempts
Sponsored Listing Safety Ratio
```

### 25.2 Customer Protection KPIs

```text
Customer Harm Incident Rate
Unsafe Output Rate by Asset
Refund Dispute Rate
Support Tickets per Installed Asset
Install-to-Successful-Outcome Rate
Time to Containment
Affected Customer Count per Case
```

### 25.3 Creator Quality KPIs

```text
Creator Trust Score Distribution
Creator Repeat Violation Rate
Creator Appeal Success Rate
Creator Response Time to Trust Case
Creator Documentation Quality Score
Creator Simulation Coverage
```

### 25.4 Financial Trust KPIs

```text
Payout Hold Rate
Fraud-Linked Payout Amount
Chargeback Rate by Asset
Refund Abuse Rate
Revenue at Risk from Suspended Assets
Marketplace Gross Margin Protected
```

### 25.5 Operational KPIs

```text
Average Trust Case Resolution Time
P0/P1 Trust Case Count
Appeal Review Time
Enforcement Accuracy Rate
False Positive Rate
False Negative Review Rate
Manual Review Backlog
Emergency Containment Time
```

---

## 26. Frontend Requirements

### 26.1 Internal Trust Console

Must include:

- trust case queue
- risk filters
- evidence panel
- asset timeline
- creator profile
- install impact view
- payout impact view
- enforcement actions
- appeal review view
- customer communication view

### 26.2 Creator Dashboard

Must show:

- asset trust status
- trust score band
- open cases
- required actions
- policy warnings
- appeal options
- restricted capabilities
- payout hold status when applicable

### 26.3 Customer Marketplace UI

Must show:

- trust badges
- safety notices
- verified reviews
- install warnings
- plan compatibility
- known limitations
- asset status changes

Frontend must never expose internal-only evidence to unauthorized users.

---

## 27. Backend Requirements

Backend must enforce:

- role-based access to trust cases
- immutable audit logs
- evidence preservation
- enforcement action consistency
- payout hold integration
- search/ranking penalty integration
- asset install pause integration
- notification rules
- appeal workflows
- data retention rules
- privacy redaction

No frontend-only trust enforcement is allowed.

---

## 28. Security & Privacy Rules

- Do not expose customer data in trust cases unless required and permissioned.
- Redact sensitive prompt, trace, and memory data by default.
- Restrict case access by role and purpose.
- Preserve evidence before deletion when legally and contractually permitted.
- Do not allow creators to view confidential customer reports.
- Do not allow customers to view internal creator fraud signals.
- All enforcement actions must be audited.
- High-risk decisions must require dual approval.

---

## 29. Forbidden Patterns

Do not:

```text
rank marketplace assets by installs only
allow sponsored listings to bypass safety
let high-revenue creators bypass review
publish trust badges without criteria
hide incident-prone templates behind marketing copy
pay creators before fraud checks finish
allow fake reviews to influence ranking
remove negative reviews only because creator complains
expose reporter identity unnecessarily
treat marketplace disputes as isolated support tickets
allow suspended creators to republish via new accounts
allow template clones to evade penalties
use trust scores without explainability
apply severe enforcement without audit trail
ignore post-publish behavior
```

---

## 30. Golden Rule

Ariyo Marketplace must reward trustworthy value, not marketplace manipulation.

The safest, clearest, most useful, most outcome-producing assets should become more visible.

The riskiest, vaguest, most manipulative, most incident-prone assets should become less visible or unavailable.

---

## 31. Final Rule

Marketplace Trust & Safety must be built before marketplace scale.

Ariyo must never wait for the marketplace to become large before protecting customers, creators, partners, payments, rankings, reviews, and trust.
