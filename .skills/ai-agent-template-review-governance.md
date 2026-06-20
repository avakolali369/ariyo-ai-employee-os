# Ariyo AI Agent Template Review Governance Skill

## 1. Core Contract

Ariyo AI Agent Template Review Governance is not a marketplace moderation queue.

It is the trust, safety, quality, compliance, and commercial approval system that decides whether an AI Employee Template, Agent Team Template, Workflow Template, Knowledge Pack, GEO Template, Integration Bundle, or Marketplace Solution is safe and valuable enough to be published, installed, monetized, and trusted.

Ariyo must make template creation easy.

Ariyo must make unsafe template publication difficult.

Every publishable template must be validated, risk-classified, simulated, reviewed, versioned, audited, monitored after publication, and reversible when harm, quality degradation, policy violation, or customer risk appears.

---

## 2. Purpose

This skill defines how Ariyo reviews, approves, rejects, suspends, restores, and governs templates created by Ariyo, partners, agencies, consultants, developers, and marketplace creators.

This skill exists to prevent the Ariyo Marketplace from becoming a source of:

- unsafe AI behavior;
- false business promises;
- uncontrolled AI cost;
- unauthorized tool use;
- insecure integration behavior;
- data leakage;
- prompt injection risk;
- low-quality template spam;
- legal or compliance exposure;
- customer trust loss;
- poor activation outcomes;
- marketplace fraud;
- creator abuse;
- unreviewed high-risk automation.

Ariyo template review must protect:

- customers;
- end users;
- organizations;
- creators;
- marketplace trust;
- Ariyo brand quality;
- platform security;
- AI Employee reliability;
- revenue integrity;
- partner ecosystem quality.

---

## 3. Dependencies

This skill depends on and must remain consistent with:

- `product-strategy.md`
- `ai-employee-architecture.md`
- `multi-agent-orchestration-system.md`
- `agent-team-templates.md`
- `agent-marketplace-template-builder.md`
- `ecosystem-marketplace-economy.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-memory-context.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-simulation-sandbox.md`
- `ai-agent-observability-tracing.md`
- `ai-agent-incident-response.md`
- `ai-agent-versioning-change-management.md`
- `human-review-governance.md`
- `integration-ecosystem.md`
- `security-threat-model.md`
- `data-governance-privacy.md`
- `compliance-legal-risk.md`
- `quality-assurance-system.md`
- `monetization-billing.md`
- `pricing-packaging-strategy.md`
- `customer-success-playbooks.md`
- `customer-education-academy.md`
- `trust-center-public-status.md`
- `legal-pages-policy-system.md`
- `observability-analytics-events.md`
- `operations-command-center.md`
- `internal-admin-backoffice.md`

If this skill conflicts with security, privacy, runtime permissions, legal compliance, or AI safety skills, the stricter rule wins.

---

## 4. What Counts as a Reviewable Template

A template is reviewable if it can be packaged, reused, installed, sold, recommended, shared, or published inside Ariyo.

Examples:

- AI Employee Template
- AI Employee Team Template
- Workflow Template
- Knowledge Pack
- Integration Bundle
- GEO / AI SEO Template
- Support Automation Template
- Sales Automation Template
- Customer Success Playbook Template
- Security Review Template
- Finance Operations Template
- Marketplace Solution Bundle
- Partner Service Package
- Prompt Pack
- Tool Configuration Pack
- Evaluation Suite Pack
- Academy Learning Path Template

A template is not safe merely because it is described as a prompt.

If it changes AI behavior, tool access, customer-facing output, data access, business process, marketplace listing, pricing, or runtime permissions, it must be governed.

---

## 5. Template Review Philosophy

Ariyo template review must follow these principles:

1. Business value is required.
2. Safety is required.
3. Permission clarity is required.
4. Cost predictability is required.
5. Privacy boundaries are required.
6. Tool actions must be scoped.
7. Human review must exist for risky actions.
8. Marketplace claims must be honest.
9. Simulation must precede publication for meaningful automation.
10. High-risk templates require human approval.
11. Published templates remain monitored.
12. Every template version must be accountable.

A template must never be approved only because it is popular, visually polished, written by a high-status creator, or likely to generate revenue.

Marketplace trust is more valuable than short-term template volume.

---

## 6. Template Submission Lifecycle

Every template must move through a lifecycle.

### 6.1 Status Model

Allowed statuses:

```txt
draft
submitted
auto_validating
validation_failed
risk_classified
simulation_required
simulating
simulation_failed
human_review_required
in_human_review
changes_requested
approval_board_required
in_approval_board
approved
approved_with_restrictions
rejected
published
publish_paused
suspended
appeal_requested
appeal_in_review
reinstated
archived
version_update_required
```

No template may skip directly from `submitted` to `published`.

### 6.2 Lifecycle Flow

Standard flow:

```txt
draft
→ submitted
→ auto_validating
→ risk_classified
→ simulation_required or human_review_required or approved
→ simulating
→ human_review_required
→ in_human_review
→ approved / approved_with_restrictions / changes_requested / rejected
→ published
→ post_publish_monitoring
```

High-risk flow:

```txt
draft
→ submitted
→ auto_validating
→ risk_classified
→ simulation_required
→ simulating
→ human_review_required
→ in_human_review
→ approval_board_required
→ in_approval_board
→ approved_with_restrictions or rejected
→ controlled_publish
→ post_publish_monitoring
```

Incident flow:

```txt
published
→ publish_paused
→ suspended
→ investigation
→ changes_requested or appeal_requested or archived
→ reinstated or rejected
```

---

## 7. Template Risk Classification

Every template must receive a risk classification before approval.

### 7.1 Risk Levels

```txt
low
medium
high
critical
```

### 7.2 Low-Risk Templates

Examples:

- educational prompt templates;
- content outline generators;
- internal brainstorming templates;
- non-customer-facing knowledge summaries;
- no external tools;
- no sensitive data;
- no autonomous action;
- no marketplace payment impact.

Requirements:

- automated validation;
- basic simulation;
- listing review;
- basic cost estimate;
- marketplace policy check.

### 7.3 Medium-Risk Templates

Examples:

- support assistant using approved knowledge base;
- sales email draft assistant without auto-send;
- onboarding checklist generator;
- customer success insight assistant;
- GEO content optimization assistant;
- workflow templates requiring review before external action.

Requirements:

- automated validation;
- simulation suite;
- human review;
- tool permission review;
- data sensitivity review;
- approval policy check;
- cost estimate;
- activation quality check.

### 7.4 High-Risk Templates

Examples:

- CRM update workflow;
- external message sending;
- refund recommendation;
- account risk scoring;
- support escalation automation;
- marketplace monetization template;
- security triage assistant;
- compliance response assistant;
- multi-agent team templates;
- integration write-action bundles.

Requirements:

- automated validation;
- adversarial simulation;
- human review;
- security review;
- compliance review if relevant;
- cost risk review;
- approval board review;
- restricted rollout;
- post-publish monitoring.

### 7.5 Critical-Risk Templates

Examples:

- payment/refund execution;
- customer account suspension;
- legal advice automation;
- security enforcement automation;
- autonomous external writes without human review;
- sensitive data processing at scale;
- admin permission modifications;
- production infrastructure action;
- template that can affect customer data deletion/export;
- workflow that can cause irreversible customer harm.

Requirements:

- strict approval board review;
- mandatory human approval gates;
- sandbox evidence;
- red-team scenarios;
- incident response plan;
- restricted or private publishing by default;
- enterprise-only if appropriate;
- kill switch requirement;
- explicit customer warnings;
- legal/security sign-off.

Critical templates must never be auto-approved.

---

## 8. Risk Scoring Dimensions

Risk classification must consider:

- data sensitivity;
- personal data access;
- customer-facing output;
- external action capability;
- integration write access;
- financial impact;
- legal/compliance impact;
- security impact;
- autonomy level;
- human approval requirement;
- tool permission breadth;
- memory access;
- RAG source sensitivity;
- model capability required;
- cost exposure;
- marketplace monetization;
- creator trust score;
- uninstall/refund history;
- incident history;
- prompt injection exposure;
- target user sophistication;
- plan availability.

### 8.1 Suggested Risk Score Formula

```txt
risk_score =
  data_sensitivity_score
+ tool_action_score
+ autonomy_score
+ external_impact_score
+ financial_impact_score
+ compliance_score
+ security_score
+ cost_exposure_score
+ creator_risk_score
+ customer_visibility_score
- mitigation_score
```

Risk thresholds:

```txt
0-24   low
25-49  medium
50-74  high
75-100 critical
```

The score informs review; it must not be the only decision-maker.

---

## 9. Automated Validation

Automated validation must run before human review.

### 9.1 Required Template Fields

Every template must include:

```json
{
  "template_id": "tpl_...",
  "name": "string",
  "short_description": "string",
  "category": "sales|support|geo|operations|security|finance|cs|marketing|workflow|knowledge|integration|other",
  "creator_id": "creator_...",
  "version": "1.0.0",
  "intended_outcome": "string",
  "target_customer": "string",
  "plan_availability": ["basic", "pro", "smart"],
  "agent_roles": [],
  "tool_requirements": [],
  "integration_requirements": [],
  "knowledge_requirements": [],
  "memory_policy": {},
  "permission_policy": {},
  "approval_policy": {},
  "cost_estimate": {},
  "risk_disclosures": [],
  "evaluation_scenarios": [],
  "simulation_results": [],
  "support_requirements": {},
  "listing_copy": {},
  "pricing_model": {},
  "privacy_classification": "public|internal|confidential|restricted",
  "security_notes": [],
  "rollback_policy": {}
}
```

### 9.2 Validation Checks

Automated validation must check:

- schema completeness;
- duplicate template names;
- broken references;
- missing plan compatibility;
- missing permission scopes;
- missing approval policy;
- missing cost estimate;
- missing evaluation scenarios;
- missing simulation evidence;
- unsafe tool access;
- overbroad integration scopes;
- sensitive data without classification;
- unsupported claims;
- prohibited content;
- misleading listing language;
- missing rollback behavior;
- missing support path;
- invalid pricing configuration;
- excessive autonomy for plan level.

### 9.3 Validation Failure Examples

Reject validation if:

```txt
The template requests CRM write access but has no approval policy.
The template claims “guaranteed revenue growth” without evidence.
The template uses sensitive customer data but has no data classification.
The template can send external emails automatically without human review.
The template is marked Basic but requires multi-agent automation.
The template has no simulation scenarios.
The listing hides limitations or risk.
```

---

## 10. Simulation & Sandbox Review

Templates must be tested before publication.

### 10.1 Simulation Types

Ariyo must support:

- happy path simulation;
- edge case simulation;
- missing context simulation;
- tool failure simulation;
- integration timeout simulation;
- permission denied simulation;
- human approval rejection simulation;
- cost limit reached simulation;
- prompt injection simulation;
- data leakage attempt simulation;
- hallucination scenario simulation;
- unsafe user request simulation;
- customer escalation simulation;
- rollback simulation;
- version migration simulation.

### 10.2 Minimum Simulation Matrix

Low-risk templates:

```txt
happy path
missing context
unsafe request
basic cost estimate
```

Medium-risk templates:

```txt
happy path
edge case
missing context
tool failure
permission denied
approval required
prompt injection
cost limit reached
```

High-risk templates:

```txt
all medium tests
external action failure
data leakage attempt
human approval rejection
rollback simulation
incident simulation
security scenario
support escalation scenario
```

Critical-risk templates:

```txt
all high-risk tests
red-team simulation
multi-reviewer approval simulation
kill-switch simulation
legal/compliance review scenario
customer notification simulation
post-incident recovery simulation
```

### 10.3 Simulation Output

Simulation output must include:

```json
{
  "simulation_id": "sim_123",
  "template_id": "tpl_123",
  "template_version": "1.2.0",
  "scenario": "prompt_injection_attempt",
  "result": "passed|failed|warning",
  "risk_detected": true,
  "observed_behavior": "The agent refused unsafe instruction and preserved system policy.",
  "expected_behavior": "Refuse unsafe instruction and continue with safe task.",
  "cost_estimate": {
    "input_tokens": 1200,
    "output_tokens": 500,
    "estimated_cost_usd": 0.012
  },
  "tool_calls": [],
  "policy_violations": [],
  "review_required": false,
  "evidence_refs": ["trace_abc"]
}
```

Templates with failed high-risk simulations must not be published.

---

## 11. Human Review Workflow

Human review must assess whether the template is safe, useful, honest, understandable, and aligned with Ariyo standards.

### 11.1 Reviewer Roles

Possible reviewer roles:

- Marketplace Reviewer
- Product Reviewer
- AI Safety Reviewer
- Security Reviewer
- Compliance Reviewer
- Data Privacy Reviewer
- Customer Success Reviewer
- Finance / Monetization Reviewer
- Partner Operations Reviewer
- Developer Platform Reviewer
- Support Reviewer

### 11.2 Reviewer Checklist

Reviewers must check:

- Does the template solve a real business problem?
- Is the template outcome clearly explained?
- Are limitations visible?
- Are claims honest and evidence-based?
- Are required integrations explained?
- Are permissions understandable?
- Are tool actions scoped?
- Is human approval used where needed?
- Is cost predictable?
- Is data use privacy-safe?
- Is memory use scoped?
- Does the template match its plan availability?
- Does listing copy avoid hype?
- Does the template have enough simulation coverage?
- Can support understand and troubleshoot it?
- Is rollback possible?
- Is the creator trustworthy enough for the risk level?

### 11.3 Review Decisions

Allowed decisions:

```txt
approve
approve_with_restrictions
request_changes
require_simulation
require_security_review
require_compliance_review
require_privacy_review
require_pricing_review
require_approval_board
reject
suspend
restore
archive
```

### 11.4 Approve with Restrictions

A template may be approved with restrictions such as:

- Smart plan only;
- Pro and Smart only;
- private listing only;
- beta customers only;
- no autonomous execution;
- human review required;
- no external write actions;
- no sensitive data access;
- limited integrations;
- marketplace visibility restricted;
- install cap;
- creator must improve documentation;
- post-publish monitoring required.

### 11.5 Changes Requested

When requesting changes, reviewers must specify:

- issue category;
- severity;
- required fix;
- evidence;
- example correction;
- re-review requirement;
- deadline if applicable.

Do not send vague review feedback.

Bad:

```txt
Improve the template.
```

Good:

```txt
The template requests CRM write access but does not define human approval before updating deal stage. Add an approval policy for all CRM write actions and resubmit simulation evidence for approval denial and approval timeout scenarios.
```

---

## 12. Marketplace Approval Board

High-risk and critical templates may require board review.

### 12.1 Board Composition

Approval board may include:

- Product Lead
- AI Safety Lead
- Security Lead
- Compliance/Legal Representative
- Marketplace Operations Lead
- Customer Success Lead
- Finance/Billing Representative
- Developer Platform Lead

### 12.2 Board Review Required For

Board review is required for:

- critical-risk templates;
- templates with financial action capability;
- templates that write to external systems autonomously;
- templates that handle sensitive data;
- security/compliance templates;
- template teams with multiple autonomous agents;
- templates with high potential marketplace reach;
- templates from low-trust creators requesting high-risk permissions;
- templates that affect billing, refunds, account status, legal workflows, or admin permissions.

### 12.3 Board Decisions

Allowed board decisions:

```txt
approve_public
approve_private
approve_beta_only
approve_enterprise_only
approve_smart_only
request_mitigations
require_legal_review
require_security_red_team
reject
suspend_existing_versions
```

Board decisions must be recorded with rationale.

---

## 13. Creator Trust Score

Ariyo must maintain a creator trust score.

### 13.1 Creator Trust Score Factors

Positive factors:

- approved templates;
- high install-to-activation rate;
- high customer rating;
- low refund rate;
- low uninstall rate;
- low incident rate;
- strong documentation;
- fast issue resolution;
- good simulation coverage;
- policy-compliant behavior;
- verified partner status;
- marketplace revenue quality;
- support responsiveness.

Negative factors:

- rejected templates;
- policy violations;
- customer complaints;
- security incidents;
- unsafe outputs;
- false marketing claims;
- high refund rate;
- excessive support burden;
- unresolved template bugs;
- creator abuse;
- suspicious install behavior;
- repeated low-quality submissions.

### 13.2 Trust Score Bands

```txt
0-19    blocked
20-39   restricted
40-59   standard
60-79   trusted
80-100  verified
```

### 13.3 Trust Score Effects

Trust score may affect:

- review queue priority;
- need for additional review;
- publication permissions;
- ability to publish paid templates;
- install caps;
- access to advanced builder features;
- marketplace ranking;
- eligibility for verified badge;
- payout delay period;
- partner program eligibility.

Trust score must never bypass security, privacy, compliance, or critical-risk review.

---

## 14. Marketplace Listing Governance

Template listing copy must be reviewed.

### 14.1 Required Listing Sections

Every listing must include:

- template name;
- short description;
- business outcome;
- target customer;
- setup requirements;
- required integrations;
- required permissions;
- plan availability;
- pricing;
- expected value;
- limitations;
- safety notes;
- support owner;
- version;
- creator identity;
- last updated date;
- trust badges if earned;
- customer-visible risk disclosure if needed.

### 14.2 Prohibited Listing Claims

Forbidden claims:

```txt
Guaranteed revenue.
100% safe.
No human review needed.
Replaces your entire team.
Works for every business.
Fully autonomous with no risk.
Legally approved.
Security certified without evidence.
Instantly fixes all support tickets.
Guaranteed AI citation or ranking.
Unlimited usage.
No cost risk.
```

Listing claims must match actual product behavior.

---

## 15. Plan-Based Publishing: Basic / Pro / Smart

Template availability must align with plan capabilities.

### 15.1 Basic Template Rules

Basic templates should be:

- simple;
- safe;
- low-cost;
- easy to install;
- limited in automation;
- limited in tool access;
- limited in integrations;
- useful for first value;
- suitable for low-risk use cases.

Basic templates must not require:

- multi-agent teams;
- advanced workflow automation;
- sensitive integrations;
- external write actions;
- advanced RAG pipelines;
- complex approval routing;
- high-cost models;
- enterprise permissions.

### 15.2 Pro Template Rules

Pro templates may include:

- workflow automation;
- team collaboration;
- standard integrations;
- human review;
- knowledge base integration;
- moderate tool access;
- analytics;
- operational use cases;
- customer-facing workflows with review gates.

Pro templates must include stronger simulation and monitoring than Basic templates.

### 15.3 Smart Template Rules

Smart templates may include:

- multi-agent orchestration;
- advanced automation;
- advanced GEO workflows;
- complex RAG;
- advanced model routing;
- deeper analytics;
- multiple integrations;
- sophisticated approval routing;
- advanced marketplace assets;
- premium AI reasoning;
- stronger personalization.

Smart templates must also include:

- stricter cost controls;
- stronger evaluation;
- stronger observability;
- advanced simulation;
- stronger approval policies;
- higher trust requirements;
- incident response readiness.

Smart means more capability.

Smart does not mean unlimited autonomy.

---

## 16. Template Version Governance

Every template must be versioned.

### 16.1 Change Types

```txt
patch
minor
major
critical
```

Patch:

- typo fixes;
- small listing copy corrections;
- non-behavioral metadata updates.

Minor:

- prompt improvement;
- examples added;
- documentation improved;
- non-risky UX improvements.

Major:

- tool access changes;
- workflow changes;
- model profile changes;
- memory behavior changes;
- permission scope changes;
- pricing changes;
- integration changes;
- approval policy changes.

Critical:

- external write action added;
- payment/refund action added;
- sensitive data access added;
- autonomous execution added;
- admin action capability added;
- security/compliance behavior changed;
- customer-facing risk materially increased.

### 16.2 Review Requirements by Change Type

Patch:

- automated validation;
- listing diff review if public.

Minor:

- automated validation;
- targeted simulation;
- reviewer review if customer-facing.

Major:

- full validation;
- full simulation;
- human review;
- possible approval board.

Critical:

- full validation;
- adversarial simulation;
- security review;
- compliance review if relevant;
- approval board;
- controlled rollout;
- customer notification if installed users affected.

### 16.3 Installed Template Version Updates

Installed templates must not update silently if the change is major or critical.

For major/critical changes:

- notify admins;
- show change summary;
- show new permissions;
- show cost impact;
- allow defer if possible;
- support rollback;
- require re-consent when permissions change.

---

## 17. Suspension, Takedown, and Appeal

Ariyo must be able to suspend templates quickly.

### 17.1 Suspension Reasons

- security vulnerability;
- privacy risk;
- data leakage;
- unsafe output;
- false claims;
- excessive cost;
- creator fraud;
- support burden;
- broken integration;
- policy violation;
- high refund rate;
- high incident rate;
- legal complaint;
- marketplace abuse;
- malicious behavior.

### 17.2 Suspension Types

```txt
soft_pause
hide_from_marketplace
block_new_installs
pause_runs
force_disable
archive
```

### 17.3 Appeal Process

Creators must be able to:

- view suspension reason;
- view evidence summary;
- submit corrective version;
- provide explanation;
- request re-review;
- track appeal status;
- receive final decision.

Appeals must not expose sensitive customer data.

### 17.4 Appeal Statuses

```txt
appeal_requested
appeal_acknowledged
appeal_in_review
creator_changes_required
appeal_approved
appeal_denied
reinstated
archived
```

---

## 18. Post-Publish Monitoring

Template review continues after publication.

### 18.1 Monitoring Signals

Monitor:

- install rate;
- activation rate;
- run success rate;
- failure rate;
- unsafe output rate;
- human review rate;
- approval rejection rate;
- cost per run;
- cost overrun rate;
- support ticket rate;
- incident rate;
- refund rate;
- uninstall rate;
- customer rating;
- creator response time;
- policy violation rate;
- marketplace ranking quality;
- trust score changes;
- plan-specific performance.

### 18.2 Auto-Flag Conditions

Automatically flag if:

- unsafe output rate exceeds threshold;
- cost per run exceeds estimate materially;
- support tickets spike;
- refund rate spikes;
- install-to-activation is poor;
- human review rejects many outputs;
- integration errors increase;
- prompt injection attempts succeed;
- customer complaints mention misleading claims;
- template behavior deviates from approved version.

### 18.3 Post-Publish Actions

Allowed actions:

- warn creator;
- request patch;
- require re-review;
- reduce ranking;
- hide from marketplace;
- block new installs;
- pause risky workflows;
- notify installed customers;
- suspend template;
- initiate incident response.

---

## 19. Review API Contract

### 19.1 Submit Template for Review

`POST /api/v1/templates/{template_id}/review-submissions`

Request:

```json
{
  "version": "1.0.0",
  "submission_note": "Initial marketplace submission",
  "requested_visibility": "public_marketplace",
  "requested_plans": ["pro", "smart"],
  "creator_attestation": {
    "claims_are_truthful": true,
    "no_sensitive_data_included": true,
    "permissions_disclosed": true,
    "simulation_completed": true
  }
}
```

Response:

```json
{
  "review_submission_id": "trs_123",
  "template_id": "tpl_123",
  "status": "submitted",
  "next_step": "auto_validation",
  "created_at": "2026-06-18T12:00:00Z"
}
```

### 19.2 Get Review Status

`GET /api/v1/template-review-submissions/{review_submission_id}`

Response:

```json
{
  "review_submission_id": "trs_123",
  "template_id": "tpl_123",
  "version": "1.0.0",
  "status": "in_human_review",
  "risk_level": "medium",
  "validation": {
    "status": "passed",
    "issues": []
  },
  "simulation": {
    "status": "passed_with_warnings",
    "warnings": ["Cost estimate is close to Pro plan threshold"]
  },
  "review": {
    "assigned_role": "marketplace_reviewer",
    "decision": null,
    "required_changes": []
  },
  "updated_at": "2026-06-18T12:30:00Z"
}
```

### 19.3 Create Review Decision

`POST /api/v1/template-review-submissions/{review_submission_id}/decisions`

Request:

```json
{
  "decision": "request_changes",
  "severity": "medium",
  "reason": "CRM write action requires human approval policy.",
  "required_changes": [
    {
      "field": "approval_policy",
      "required_fix": "Add human approval before all CRM deal stage updates."
    }
  ],
  "reviewer_note": "Resubmit with approval-denied and approval-timeout simulations."
}
```

Response:

```json
{
  "decision_id": "trd_123",
  "status": "changes_requested",
  "creator_action_required": true
}
```

### 19.4 Publish Approved Template

`POST /api/v1/templates/{template_id}/publish`

Request:

```json
{
  "version": "1.0.0",
  "visibility": "public_marketplace",
  "plan_availability": ["pro", "smart"],
  "rollout_policy": {
    "mode": "controlled",
    "install_cap": 100,
    "monitoring_period_days": 14
  }
}
```

Response:

```json
{
  "template_id": "tpl_123",
  "version": "1.0.0",
  "status": "published",
  "marketplace_url": "/marketplace/templates/tpl_123"
}
```

### 19.5 Suspend Template

`POST /api/v1/templates/{template_id}/suspend`

Request:

```json
{
  "reason": "unsafe_output_rate_exceeded_threshold",
  "suspension_type": "block_new_installs",
  "customer_notification_required": true,
  "internal_note": "Unsafe output rate exceeded threshold after version 1.2.0 rollout."
}
```

Response:

```json
{
  "template_id": "tpl_123",
  "status": "suspended",
  "effective_at": "2026-06-18T13:00:00Z"
}
```

---

## 20. Frontend Requirements

The review frontend must include:

- template submission checklist;
- validation issue display;
- risk classification explanation;
- simulation results viewer;
- reviewer queue;
- reviewer decision panel;
- approval board view;
- creator feedback panel;
- version diff viewer;
- permission diff viewer;
- cost estimate diff viewer;
- plan availability review;
- trust score view;
- suspension management;
- appeal management;
- audit timeline;
- marketplace listing preview;
- install preview;
- reviewer notes;
- evidence links;
- status badges;
- filtering by risk, creator, category, plan, status, reviewer, incident.

### 20.1 User-Facing Copy Rules

Use clear language.

Good:

```txt
This template needs changes before it can be published. It requests CRM write access but does not ask a human to approve updates.
```

Bad:

```txt
Policy violation: tool approval missing.
```

### 20.2 Creator UX Rules

Creators must understand:

- what failed;
- why it matters;
- how to fix it;
- whether resubmission is required;
- whether approval board is needed;
- whether customers are affected;
- whether monetization is blocked.

---

## 21. Backend Requirements

The backend must support:

- template registry;
- review submission records;
- validation engine;
- risk scoring engine;
- simulation evidence ingestion;
- human review workflow;
- approval board workflow;
- creator trust score engine;
- policy violation records;
- suspension system;
- appeal system;
- version diff engine;
- marketplace publishing controls;
- plan entitlement checks;
- audit logs;
- event publishing;
- webhook notifications;
- role-based reviewer permissions;
- immutable evidence storage;
- customer impact analysis;
- installed template lookup;
- rollback coordination.

No marketplace publishing decision may rely only on frontend state.

---

## 22. Observability Events

Emit events:

```txt
template_review.submitted
template_review.auto_validation_started
template_review.auto_validation_failed
template_review.auto_validation_passed
template_review.risk_classified
template_review.simulation_required
template_review.simulation_started
template_review.simulation_failed
template_review.simulation_passed
template_review.human_review_started
template_review.changes_requested
template_review.approval_board_required
template_review.approved
template_review.approved_with_restrictions
template_review.rejected
template_review.published
template_review.publish_paused
template_review.suspended
template_review.appeal_requested
template_review.reinstated
template_review.archived
creator_trust_score.updated
marketplace_policy.violation_detected
```

Every event must include:

- organization_id if applicable;
- creator_id;
- template_id;
- template_version;
- category;
- risk_level;
- reviewer_role if applicable;
- status;
- decision;
- reason code;
- correlation_id;
- timestamp.

Do not include sensitive template content in analytics events.

---

## 23. Advanced KPI System

### 23.1 Review Operations KPIs

- Template Approval Rate
- Template Rejection Rate
- Average Review Time
- Median Time to First Review
- Changes Requested Rate
- Approval Board Escalation Rate
- Review Backlog Size
- Review SLA Breach Rate
- Re-review Rate
- Reviewer Decision Consistency

### 23.2 Safety & Quality KPIs

- Simulation Pass Rate
- High-Risk Template Ratio
- Critical Template Approval Rate
- Unsafe Output Rate After Publish
- Post-Publish Incident Rate
- Policy Violation Rate
- Prompt Injection Failure Rate
- Permission Violation Rate
- Data Leakage Attempt Success Rate
- Marketplace Trust Score

### 23.3 Creator KPIs

- Creator Trust Score Distribution
- Verified Creator Ratio
- Creator Rejection Rate
- Creator Appeal Success Rate
- Creator Response Time
- Creator Incident Rate
- Creator Refund Rate
- Creator Support Ticket Rate

### 23.4 Marketplace Performance KPIs

- Install-to-Activation Rate
- Template Uninstall Rate
- Template Refund Rate
- Template Rating
- Template Revenue
- Template Gross Margin
- Support Tickets per Template
- Cost Overrun Rate
- Plan Conversion from Template Install
- Expansion Revenue from Templates

### 23.5 Governance KPIs

- Suspended Template Count
- Reinstated Template Count
- Repeat Violation Rate
- Customer Impacted by Suspensions
- Average Time to Suspend Risky Template
- Average Time to Notify Affected Customers
- Policy Coverage Completeness
- Template Version Review Compliance

---

## 24. Security & Privacy Rules

Template review must enforce:

- no secrets in prompts;
- no hardcoded credentials;
- no unscoped integration tokens;
- no sensitive data in marketplace listing;
- no PII in public examples;
- no training data leakage;
- no cross-tenant knowledge references;
- no hidden external network calls;
- no broad tool scopes without justification;
- no customer data reuse across creators;
- no creator access to customer install data unless allowed;
- no unlogged reviewer access;
- no unsafe impersonation.

Reviewers must see only the information they need.

Sensitive evidence must be redacted by default.

---

## 25. Compliance Rules

Templates must not:

- provide legal, financial, medical, or security guarantees without review;
- misrepresent AI limitations;
- claim official certification without evidence;
- imply Ariyo endorsement unless approved;
- violate marketplace terms;
- violate data processing commitments;
- violate plan entitlements;
- bypass customer consent;
- hide material risks.

High-risk compliance categories must require specialist review.

---

## 26. AI Reviewer Assistant Rules

Ariyo may use an internal AI Reviewer Assistant to help reviewers.

The assistant may:

- summarize template behavior;
- detect missing metadata;
- flag suspicious claims;
- compare permission scope to stated purpose;
- suggest risk classification;
- summarize simulation failures;
- draft reviewer feedback;
- identify required review roles;
- detect listing inconsistencies.

The assistant must not:

- make final approval decisions;
- bypass human review;
- approve high-risk templates;
- access unredacted sensitive customer data unless explicitly authorized;
- hide uncertainty;
- invent evidence;
- override policy.

AI review assistance must be traceable.

---

## 27. Templates That Must Never Be Published Publicly by Default

Do not allow default public publishing for templates that:

- modify billing;
- execute refunds;
- suspend accounts;
- delete customer data;
- alter admin permissions;
- perform legal response automation;
- perform security enforcement automation;
- send external messages autonomously;
- use sensitive health/finance/legal data;
- require broad write access to integrations;
- have unresolved safety warnings;
- have failed simulation;
- have deceptive claims.

These may be private, enterprise-only, or rejected depending on review.

---

## 28. Forbidden Patterns

Never allow:

```txt
auto-approve high-risk templates
publish without validation
publish without versioning
publish without rollback path
publish without cost estimate
publish without permission disclosure
publish without simulation for tool-using templates
creator self-approval
reviewer approval without audit trail
review feedback without specific required changes
hidden tool access
hidden integration scopes
claims that exceed product capability
public examples containing sensitive data
marketplace ranking based only on revenue
trust score bypassing safety review
autonomous external actions without approval policy
critical template updates without re-review
silent major updates to installed templates
suspension without evidence record
appeal process exposing customer secrets
```

---

## 29. Golden Rule

Ariyo must make valuable templates easy to create and safe to adopt.

Ariyo must make unsafe templates hard to publish, easy to detect, fast to contain, and possible to recover from.

---

## 30. Final Rule

No template may enter Ariyo Marketplace unless Ariyo can answer:

```txt
What does it do?
Who is it for?
What data does it use?
What tools can it call?
What actions can it take?
What can go wrong?
How was it tested?
Who reviewed it?
What plan can use it?
What does it cost?
How is it monitored?
How can it be suspended?
How can it be rolled back?
```

If Ariyo cannot answer these questions, the template is not ready to publish.
