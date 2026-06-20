# Ariyo Marketplace Policy Enforcement Rules Skill

## 1. Core Contract

Ariyo Marketplace Policy Enforcement is not punishment after abuse happens.

Ariyo Marketplace Policy Enforcement is the governed rule system that defines what is allowed, restricted, prohibited, investigated, enforced, appealed, restored, suspended, removed, logged, and communicated across Marketplace creators, customers, partners, assets, reviews, rankings, payments, integrations, AI employees, and automated workflows.

Ariyo must make Marketplace rules clear before creators publish, enforce them consistently after publication, protect customers quickly when risk appears, preserve evidence, allow fair appeals, and prevent repeat abuse without damaging legitimate creators.

## 2. Purpose

This Skill defines how Ariyo must design, implement, operate, and enforce Marketplace policies for:

- AI Employee Templates
- Agent Team Templates
- Workflow Templates
- Knowledge Packs
- GEO / AI SEO Templates
- Integration Bundles
- Industry Bundles
- Marketplace Services
- Creator Listings
- Reviews and Ratings
- Sponsored Listings
- Pricing and Claims
- Marketplace Installations
- Creator Payouts
- Partner Offers

The goal is to keep Ariyo Marketplace safe, useful, fair, credible, customer-protective, creator-friendly, fraud-resistant, and scalable.

## 3. Dependencies

This Skill depends on and must align with:

- `ecosystem-marketplace-economy.md`
- `agent-marketplace-template-builder.md`
- `ai-agent-template-review-governance.md`
- `template-quality-ranking-system.md`
- `marketplace-search-recommendation-engine.md`
- `marketplace-installation-entitlements.md`
- `marketplace-billing-payouts.md`
- `marketplace-dispute-resolution.md`
- `marketplace-trust-safety-operations.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-simulation-sandbox.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-incident-response.md`
- `ai-agent-observability-tracing.md`
- `security-threat-model.md`
- `data-governance-privacy.md`
- `compliance-legal-risk.md`
- `legal-pages-policy-system.md`
- `admin-permissions.md`
- `finance-accounting-controls.md`
- `internal-admin-backoffice.md`
- `feature-flags-rollout-system.md`

## 4. Enforcement Philosophy

Ariyo Marketplace policy enforcement must follow these principles:

1. **Clarity before enforcement** — creators must understand the rules before they publish.
2. **Evidence before penalties** — enforcement decisions must be grounded in logs, traces, reviews, complaints, simulation results, or policy checks.
3. **Customer safety first** — unsafe assets must be contained quickly even before final investigation is complete.
4. **Proportional response** — not every violation deserves a ban.
5. **Repeat abuse escalates** — repeated violations must increase severity.
6. **High-risk assets get stricter enforcement** — finance, security, legal, health-like, compliance, external-action, and autonomous workflow assets require more control.
7. **Creators must have a path to fix** — where safe, Ariyo should request changes before permanent removal.
8. **Appeals must be possible** — creators and customers must be able to challenge enforcement decisions.
9. **Hidden risk must not be rewarded** — assets that avoid disclosure, hide permissions, inflate claims, or manipulate rankings must be penalized.
10. **Marketplace trust beats short-term revenue** — Ariyo must not keep risky assets active because they generate revenue.

## 5. Policy Domains

Ariyo Marketplace policies must be grouped into enforceable domains.

### 5.1 Asset Safety Policy

Controls whether a Marketplace asset can safely operate.

Covers:

- unsafe AI actions
- autonomous external actions
- wrong tool usage
- dangerous workflow behavior
- missing approvals
- unsafe prompt behavior
- hallucination-prone templates
- unsafe fallback behavior
- misleading automation level
- unsupported claims

### 5.2 Data & Privacy Policy

Controls how templates access, process, store, retrieve, or expose data.

Covers:

- PII access
- sensitive data handling
- cross-organization leakage
- unauthorized memory use
- unsafe RAG behavior
- embedding sensitive data without disclosure
- retention violations
- missing deletion paths
- creator access to customer data
- hidden data collection

### 5.3 Security Policy

Controls malicious, exploitable, or insecure template behavior.

Covers:

- prompt injection vulnerability
- tool injection
- data exfiltration attempts
- credential collection
- unsafe webhook behavior
- integration abuse
- malware-like payloads
- suspicious outbound calls
- impersonation
- phishing patterns

### 5.4 Marketplace Integrity Policy

Controls fairness, discoverability, reputation, and ranking manipulation.

Covers:

- fake reviews
- fake installs
- ranking manipulation
- review brigading
- sponsored listing deception
- keyword stuffing
- duplicate low-value assets
- cloned assets
- misleading creator identity
- undisclosed affiliation

### 5.5 Commercial Policy

Controls pricing, payouts, refunds, claims, commissions, and monetization behavior.

Covers:

- hidden fees
- misleading pricing
- refund evasion
- payout fraud
- creator commission abuse
- tax information issues
- revenue share manipulation
- marketplace asset misclassification
- paid promotion disclosure

### 5.6 Content & Claims Policy

Controls what asset listings may say.

Covers:

- guaranteed outcomes
- false AI capabilities
- fake customer proof
- exaggerated ROI claims
- unsupported compliance claims
- unsupported security claims
- misleading plan availability
- misleading industry suitability
- copied marketing copy

### 5.7 Creator Conduct Policy

Controls creator behavior.

Covers:

- harassment
- abuse of support
- repeated policy violations
- malicious publishing
- evasion after suspension
- fake creator accounts
- identity fraud
- failing to respond to incidents
- failure to maintain high-use assets

### 5.8 Customer Use Policy

Controls customer abuse of Marketplace assets.

Covers:

- using assets for prohibited workflows
- bypassing approvals
- reselling without permission
- tampering with installed templates
- using templates to attack integrations
- attempting to extract creator IP
- policy evasion

## 6. Violation Taxonomy

Each policy violation must have:

- `violation_code`
- `policy_domain`
- `severity`
- `actor_type`
- `asset_type`
- `evidence_required`
- `default_enforcement_action`
- `appeal_allowed`
- `repeat_offender_weight`
- `customer_notification_required`
- `payout_hold_required`
- `ranking_penalty_required`
- `trust_score_impact`

### 6.1 Violation Code Format

Use this format:

```text
MKP_<DOMAIN>_<CATEGORY>_<NUMBER>
```

Examples:

```text
MKP_SECURITY_PROMPT_INJECTION_001
MKP_PRIVACY_DATA_EXFILTRATION_001
MKP_CLAIMS_FALSE_ROI_001
MKP_RANKING_FAKE_REVIEWS_001
MKP_BILLING_REFUND_ABUSE_001
MKP_CREATOR_REPEAT_EVASION_001
```

## 7. Severity Levels

### 7.1 Informational

Non-harmful issue that should be corrected.

Examples:

- minor metadata issue
- outdated screenshot
- missing optional documentation
- unclear category assignment

Default action:

- warning
- creator notification
- no ranking penalty unless repeated

### 7.2 Low

Minor violation with low customer risk.

Examples:

- vague benefit claim
- small listing inconsistency
- incomplete install instructions
- low-impact duplicate content

Default action:

- request changes
- temporary listing warning
- no asset suspension unless ignored

### 7.3 Medium

Violation that may mislead customers, degrade experience, or create moderate operational risk.

Examples:

- misleading plan availability
- missing cost disclosure
- weak approval explanation
- excessive keyword stuffing
- repeated low-quality updates

Default action:

- changes required
- ranking penalty
- publish freeze until fixed
- review escalation if repeated

### 7.4 High

Violation that may cause customer harm, privacy risk, financial risk, unsafe automation, or marketplace trust damage.

Examples:

- hidden external action
- undisclosed sensitive data access
- unsafe tool behavior
- fake reviews
- materially false security/compliance claims
- template causing frequent incidents

Default action:

- asset pause or suspension
- payout hold if monetized
- customer impact review
- approval board review
- creator trust score penalty

### 7.5 Critical

Violation that presents immediate or severe risk.

Examples:

- data exfiltration
- malicious tool call
- credential theft
- prompt injection exploit intentionally embedded
- cross-tenant leakage
- payment/refund abuse at scale
- creator evasion after suspension
- template used for fraud or illegal activity

Default action:

- immediate containment
- asset removal or emergency suspension
- install freeze
- payout freeze
- incident response
- customer notification if impacted
- creator account suspension
- legal/security escalation

## 8. Prohibited Asset Categories

Ariyo must not allow Marketplace assets that are primarily designed to:

```text
steal data
bypass permissions
collect credentials
impersonate people or organizations deceptively
generate phishing campaigns
manipulate rankings or reviews
automate spam
perform hidden surveillance
execute financial actions without approval
provide unqualified legal, medical, financial, or compliance decisions as final authority
hide customer data usage
bypass Ariyo billing or entitlements
clone another creator's asset deceptively
hide dangerous external actions
turn off safety reviews
remove auditability
encourage policy evasion
```

## 9. Restricted Asset Categories

Restricted assets may be allowed only with stricter review, clear disclosures, strong approvals, and plan restrictions.

Restricted categories include:

- finance operations templates
- billing/refund automation
- legal document response templates
- security review templates
- compliance assessment templates
- customer-facing autonomous support templates
- outbound sales automation
- GEO/API competitive monitoring at scale
- templates with external write actions
- templates accessing sensitive integrations
- templates using long-term memory
- multi-agent autonomous workflow templates
- enterprise admin automation templates

Restricted assets usually require:

- Smart plan or enterprise gating
- human review gates
- simulation evidence
- approval board review
- higher Creator Trust Score
- stronger observability
- clear install preview
- explicit customer consent
- rollback path

## 10. Enforcement Ladder

Ariyo must use a progressive enforcement ladder unless immediate safety requires emergency action.

### 10.1 Creator-Level Actions

```text
education_notice
warning
changes_required
publish_freeze
asset_visibility_reduction
asset_suspension
payout_hold
creator_probation
creator_suspension
creator_ban
legal_escalation
```

### 10.2 Asset-Level Actions

```text
metadata_fix_required
listing_warning
ranking_penalty
install_freeze
update_freeze
private_mode_only
beta_only
plan_restriction
asset_pause
asset_suspension
asset_removal
forced_rollback
customer_migration_required
```

### 10.3 Customer-Level Actions

```text
customer_warning
install_restriction
usage_pause
workflow_pause
integration_scope_reduction
admin_review_required
account_security_review
marketplace_access_restriction
```

## 11. Repeat Offender Logic

Repeat violations must escalate based on:

- severity
- frequency
- time window
- policy domain
- creator trust score
- customer harm
- whether violation was intentional
- whether creator responded quickly
- whether creator attempted evasion

### 11.1 Repeat Offender Windows

```text
30 days: recent behavior
90 days: active trust risk
180 days: creator reliability pattern
365 days: long-term reputation
```

### 11.2 Escalation Rule

A creator with repeated medium violations should eventually face high-level enforcement even if each violation is individually moderate.

A creator with one critical violation may be suspended immediately.

## 12. Creator Trust Score Impact

Enforcement must update Creator Trust Score.

Positive signals:

- fast remediation
- high-quality evidence
- low incident rate
- high customer satisfaction
- high simulation pass rate
- transparent disclosures
- strong documentation

Negative signals:

- repeated violations
- ignored review requests
- poor support response
- high refund/dispute rate
- high unsafe output rate
- asset manipulation
- review manipulation
- hidden risky behavior
- incident involvement

Trust Score must affect:

- review speed
- publishing permissions
- ability to publish restricted assets
- eligibility for featured placement
- payout release confidence
- marketplace visibility

## 13. Enforcement Status Model

```text
not_flagged
flagged
triage_pending
under_investigation
evidence_requested
creator_response_pending
action_required
changes_submitted
re_review_pending
resolved_no_action
resolved_warning
resolved_restricted
resolved_suspended
resolved_removed
appeal_requested
appeal_under_review
appeal_upheld
appeal_rejected
archived
```

## 14. Enforcement Decision Model

Allowed decisions:

```text
no_action
educate_creator
warn_creator
request_changes
restrict_listing
reduce_visibility
freeze_installs
pause_asset
suspend_asset
remove_asset
hold_payouts
refund_customers
notify_customers
require_security_review
require_compliance_review
require_simulation
require_creator_verification
suspend_creator
ban_creator
restore_asset
restore_creator
```

Every decision must include:

- decision reason
- policy references
- evidence IDs
- reviewer ID or automated policy ID
- customer impact assessment
- creator impact assessment
- appeal eligibility
- effective time
- expiration time if temporary
- follow-up requirements

## 15. Evidence Requirements

Ariyo must preserve evidence before enforcement whenever possible.

Evidence types:

- asset version snapshot
- listing text
- screenshots
- install logs
- execution traces
- AI traces
- tool traces
- permission traces
- customer reports
- support tickets
- dispute records
- payout records
- review/rating records
- ranking signal snapshots
- simulation outputs
- security scan results
- webhook logs

Critical enforcement actions must be evidence-preserving.

## 16. Emergency Containment

Emergency containment may happen before full review when risk is high.

Triggers:

- suspected data leak
- malicious behavior
- unauthorized financial action
- active fraud
- prompt injection exploit at scale
- high incident spike
- suspicious install burst
- payout fraud signal
- creator account compromise

Emergency actions:

```text
freeze_new_installs
pause_asset_execution
disable_external_actions
revoke_runtime_permissions
hold_payouts
remove_from_search
remove_from_recommendations
hide_listing
notify_internal_trust_team
open_incident
preserve_evidence
```

Emergency containment must be reviewed after action.

## 17. Marketplace Approval Board Escalation

The Marketplace Approval Board must review:

- critical violations
- high-risk restricted assets
- repeat offender cases
- creator bans
- major payout holds
- high-value disputes
- customer-impacting incidents
- public trust issues
- legal/compliance sensitive matters

Board roles may include:

- Marketplace Operations
- Product
- AI Safety
- Security
- Compliance
- Legal
- Customer Success
- Finance
- Executive sponsor for severe cases

## 18. Appeals System

Creators and customers must have a fair appeal process.

Appeals must include:

- decision being appealed
- appellant statement
- supporting evidence
- requested remedy
- new version if relevant
- reviewer notes
- final decision

Appeal decisions:

```text
uphold_enforcement
reduce_enforcement
request_remediation
restore_asset
restore_with_restrictions
escalate_to_board
reject_appeal
```

Appeals should not automatically restore risky assets.

## 19. Policy Communication Rules

Creator-facing communication must be clear and actionable.

Bad:

```text
Your asset violated our rules.
```

Good:

```text
Your asset was suspended because it requests CRM write access but does not disclose external write actions in the install preview. To restore the asset, update the listing disclosure, add human approval before CRM updates, and resubmit for security review.
```

Customer-facing communication must avoid unnecessary internal details but clearly explain impact and next steps.

## 20. Basic / Pro / Smart Enforcement Rules

### 20.1 Basic

Basic users should only access lower-risk Marketplace assets.

Rules:

- no high-risk autonomous assets
- no advanced external write actions
- limited integrations
- simpler install previews
- stricter default restrictions
- lower cost exposure

Basic enforcement should prioritize customer protection and simple recovery.

### 20.2 Pro

Pro users can access operational assets with governance.

Rules:

- moderate-risk templates allowed with review
- human approval gates required for sensitive actions
- team permissions required
- workflow observability required
- cost limits required
- integration scopes visible

### 20.3 Smart

Smart users can access advanced, multi-agent, high-automation assets, but with stronger controls.

Rules:

- advanced assets allowed only with stronger review
- restricted assets may require approval board certification
- advanced simulation required
- cost forecast required
- advanced traceability required
- enterprise-style policy controls available
- rollback and incident workflows mandatory

Smart means more capability, not weaker enforcement.

## 21. Enforcement API Contract

### 21.1 Create Enforcement Case

```http
POST /api/marketplace/enforcement/cases
```

Request:

```json
{
  "asset_id": "asset_123",
  "asset_version_id": "asset_ver_456",
  "actor_type": "creator",
  "actor_id": "creator_789",
  "source": "automated_detection",
  "violation_codes": ["MKP_SECURITY_PROMPT_INJECTION_001"],
  "severity": "high",
  "evidence_ids": ["ev_001", "trace_002"],
  "customer_impact_suspected": true
}
```

Response:

```json
{
  "case_id": "case_001",
  "status": "triage_pending",
  "severity": "high",
  "recommended_actions": ["freeze_installs", "require_security_review"],
  "created_at": "2026-06-18T12:00:00Z"
}
```

### 21.2 Apply Enforcement Action

```http
POST /api/marketplace/enforcement/cases/{case_id}/actions
```

Request:

```json
{
  "action": "freeze_installs",
  "reason": "Undisclosed external write action discovered during automated policy scan.",
  "duration": "until_resolved",
  "notify_creator": true,
  "notify_customers": false
}
```

Response:

```json
{
  "case_id": "case_001",
  "action_id": "enf_action_001",
  "status": "applied",
  "effective_at": "2026-06-18T12:10:00Z"
}
```

### 21.3 Submit Appeal

```http
POST /api/marketplace/enforcement/cases/{case_id}/appeals
```

Request:

```json
{
  "submitted_by": "creator_789",
  "appeal_reason": "The external write action is now disclosed and gated by human approval.",
  "evidence_ids": ["asset_ver_457", "sim_003"],
  "requested_outcome": "restore_with_restrictions"
}
```

Response:

```json
{
  "appeal_id": "appeal_001",
  "status": "appeal_under_review",
  "estimated_review_window": "standard"
}
```

## 22. Webhook Events

Ariyo should emit webhooks for:

```text
marketplace.enforcement.case.created
marketplace.enforcement.action.applied
marketplace.enforcement.creator.warned
marketplace.enforcement.asset.paused
marketplace.enforcement.asset.suspended
marketplace.enforcement.asset.restored
marketplace.enforcement.payout_hold.applied
marketplace.enforcement.appeal.submitted
marketplace.enforcement.appeal.resolved
marketplace.policy.violation.detected
marketplace.policy.violation.resolved
```

Webhook payloads must not expose sensitive investigation data unnecessarily.

## 23. Frontend Requirements

Creator dashboard must show:

- policy status
- enforcement cases
- required changes
- appeal options
- trust score impact
- affected assets
- evidence summary
- next steps
- deadlines

Internal admin must show:

- case queue
- severity
- policy domain
- evidence
- impacted customers
- payout status
- current enforcement state
- recommended action
- appeal history
- reviewer notes

Customer UI must show only what is relevant:

- asset unavailable
- installation paused
- update required
- refund/dispute path
- safety notice if needed

## 24. Backend Requirements

Backend must enforce policy actions server-side.

Required capabilities:

- asset suspension enforcement
- install freeze enforcement
- execution pause enforcement
- payout hold enforcement
- ranking penalty application
- search/recommendation removal
- entitlement lock
- evidence preservation
- immutable enforcement audit log
- reviewer permission checks
- appeal workflow
- case assignment
- SLA timers

Frontend-only enforcement is forbidden.

## 25. Observability Events

Track:

```text
policy_violation_detected
policy_case_created
policy_case_triaged
enforcement_action_applied
enforcement_action_reversed
creator_notified
customer_notified
appeal_submitted
appeal_decided
asset_suspended
asset_restored
payout_hold_applied
payout_hold_released
ranking_penalty_applied
repeat_offender_escalated
```

Each event must include:

- organization scope where applicable
- asset ID
- creator ID
- policy domain
- severity
- decision actor
- evidence reference
- affected customers count if known
- timestamp

## 26. Advanced KPI System

Ariyo must track advanced enforcement KPIs:

### Marketplace Safety KPIs

- Policy Violation Rate
- High-Risk Violation Rate
- Critical Incident Rate
- Time to Containment
- Time to Resolution
- Repeat Offender Rate
- Asset Suspension Rate
- Unsafe Asset Escape Rate

### Creator Quality KPIs

- Creator Warning Rate
- Creator Probation Rate
- Creator Trust Score Distribution
- Repeat Violation by Creator Segment
- Remediation Success Rate
- Appeal Success Rate
- Creator Response Time

### Customer Protection KPIs

- Customer Impacted by Violating Assets
- Refunds from Policy Violations
- Install Freeze Prevented Risk Count
- Customer Notification Timeliness
- Trust Recovery Rate

### Marketplace Integrity KPIs

- Fake Review Detection Rate
- Ranking Manipulation Attempts
- Sponsored Listing Violation Rate
- Duplicate Asset Abuse Rate
- Policy Evasion Attempt Rate

### Financial Enforcement KPIs

- Payout Holds Applied
- Payout Holds Released
- Fraud Loss Prevented
- Dispute-to-Enforcement Link Rate
- Refund Recovery Rate

### Operational Quality KPIs

- Average Reviewer Load
- Automated Detection Precision
- False Positive Rate
- False Negative Rate
- Enforcement Reversal Rate
- Appeal Backlog
- Board Escalation Rate

## 27. AI Enforcement Assistant Rules

AI may assist with:

- summarizing evidence
- classifying possible policy domain
- suggesting severity
- identifying similar past cases
- drafting creator messages
- finding missing evidence
- generating reviewer checklists

AI must not independently:

- permanently ban creators
- release payout holds
- decide critical appeals
- override policy
- expose sensitive investigation data
- notify customers without approval
- mark legal/compliance cases resolved

Final high-impact enforcement decisions must remain human-authorized.

## 28. Security & Privacy Rules

- Enforcement evidence must be access-controlled.
- Customer data inside evidence must be minimized and redacted where possible.
- Creator-facing evidence summaries must not expose other customers.
- Internal reviewers must have purpose-bound access.
- Enforcement logs must be immutable.
- Payout and billing enforcement must require finance permission.
- Security cases must be visible only to authorized trust/security roles.
- Legal cases must be restricted.

## 29. Forbidden Patterns

```text
frontend-only enforcement
manual suspension without audit log
asset removal without evidence snapshot
permanent ban without policy reference
auto-approving appeals for high-risk assets
letting revenue override policy enforcement
hiding policy reasons from creators when safe to disclose
showing sensitive customer evidence to creators
using raw install count as trust signal
ignoring repeat low-level violations
allowing suspended creators to republish under another account
allowing payout after confirmed fraud
allowing sponsored listings to bypass trust checks
allowing Smart assets to bypass review because the customer pays more
allowing restricted assets without install disclosures
using AI as final enforcement authority
no rollback after wrongful enforcement
no appeal path for reversible cases
```

## 30. Golden Rule

Ariyo Marketplace policy enforcement must protect the ecosystem without becoming arbitrary.

Rules must be clear.

Evidence must be preserved.

Actions must be proportional.

Appeals must be possible.

Repeat abuse must escalate.

Customer trust must come first.

## 31. Final Rule

Every Marketplace asset must live under enforceable policy.

If Ariyo cannot detect, investigate, pause, restrict, suspend, restore, audit, and explain a Marketplace asset enforcement decision, the asset should not be eligible for public Marketplace distribution.
