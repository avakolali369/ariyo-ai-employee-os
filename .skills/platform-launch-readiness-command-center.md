# Ariyo Platform Launch Readiness Command Center Skill

## Core Contract

Ariyo Platform Launch Readiness Command Center is not a project status dashboard.

It is the governed live launch operating room that coordinates go/no-go decisions, launch blockers, accountable owners, readiness signals, customer watch, marketplace watch, revenue watch, reliability watch, security watch, AI safety watch, trust watch, incident response, rollback controls, and post-launch monitoring across the Ariyo AI Employee Operating System.

Ariyo must never launch from optimism.

Ariyo must launch from evidence, ownership, controlled risk, live telemetry, customer protection, rollback readiness, and executive decision clarity.

---

## 1. Purpose

This skill defines how Ariyo should design, build, and operate a launch command center for controlled launches, beta releases, enterprise rollouts, Marketplace launches, pricing launches, AI Employee capability launches, model-provider launches, integration launches, and major platform releases.

The command center must answer:

1. Are we ready to launch?
2. Who owns each blocker?
3. What risks remain?
4. Which customers are affected?
5. Which systems are being watched?
6. What is the rollback plan?
7. What signals trigger pause, rollback, escalation, or full go-live?
8. What happens in the first hours, days, and weeks after launch?

---

## 2. Related Ariyo Skills

This skill depends on and coordinates signals from:

- `platform-final-readiness-checklist.md`
- `platform-operating-model.md`
- `platform-investor-enterprise-narrative.md`
- `reliability-sla.md`
- `observability-analytics-events.md`
- `ai-agent-incident-response.md`
- `ai-safety-evaluation.md`
- `security-threat-model.md`
- `data-governance-privacy.md`
- `compliance-legal-risk.md`
- `enterprise-readiness.md`
- `launch-go-to-market.md`
- `deployment-ops.md`
- `feature-flags-rollout-system.md`
- `enterprise-approval-workflows.md`
- `marketplace-customer-support-operations.md`
- `marketplace-template-health-monitoring.md`
- `marketplace-template-auto-remediation.md`
- `revenue-operations-system.md`
- `finance-accounting-controls.md`
- `customer-success-playbooks.md`
- `enterprise-customer-health-scoring.md`

---

## 3. Launch Command Center Principles

### 3.1 Evidence over optimism

A launch decision must be based on signals, tests, readiness gates, owner sign-offs, risk register status, and rollback readiness.

### 3.2 Ownership over status reporting

Every launch blocker, watch metric, escalation path, and decision gate must have an accountable owner.

### 3.3 Controlled exposure over big-bang launch

Ariyo should prefer progressive rollout, feature flags, controlled cohorts, private beta, enterprise pilot, region-limited launch, or plan-limited launch when risk is meaningful.

### 3.4 Customer protection over launch pressure

If a launch creates unacceptable risk to customer data, AI Employee behavior, billing, automation, trust, safety, reliability, or support capacity, the command center must pause or block launch.

### 3.5 Reversibility over speed

A launch is not ready unless rollback, disablement, containment, communication, support, and incident response are ready.

---

## 4. Launch Types

Ariyo must support different command center templates by launch type.

### 4.1 Platform launch

Examples:

- Ariyo public launch
- Ariyo enterprise launch
- AI Employee OS launch
- major dashboard launch
- new workspace governance release

### 4.2 Marketplace launch

Examples:

- public Marketplace launch
- private catalog launch
- creator launch
- partner program launch
- template certification launch
- Marketplace billing launch

### 4.3 Enterprise customer launch

Examples:

- first production deployment for a customer
- department rollout
- workspace rollout
- private catalog activation
- SSO/SCIM launch
- production AI Employee launch

### 4.4 AI capability launch

Examples:

- new AI Employee role
- model provider update
- agent orchestration release
- memory update
- RAG update
- tool-call capability launch

### 4.5 Revenue launch

Examples:

- Basic/Pro/Smart pricing launch
- paid Marketplace launch
- billing system launch
- payout system launch
- enterprise procurement launch

### 4.6 Operational launch

Examples:

- support system launch
- trust and safety workflow launch
- incident response workflow launch
- status page launch
- audit reporting launch

---

## 5. Command Center Operating Model

### 5.1 Launch room

The launch room is the live coordination space for launch decision-making.

It must contain:

- launch name
- launch type
- launch date/time
- launch owner
- executive sponsor
- engineering owner
- product owner
- AI safety owner
- security owner
- support owner
- customer success owner
- revenue owner
- legal/compliance owner
- communications owner
- rollback owner
- incident commander
- final go/no-go approver

### 5.2 Launch roles

| Role | Responsibility |
|---|---|
| Launch Commander | Runs the live launch process and decision cadence |
| Product Owner | Confirms scope, customer value, and product readiness |
| Engineering Owner | Confirms deployment, flags, rollback, and technical readiness |
| AI Safety Owner | Confirms AI behavior, evals, guardrails, and monitoring |
| Security Owner | Confirms security, access, threat model, and containment readiness |
| Compliance Owner | Confirms legal, privacy, evidence, and policy readiness |
| Support Owner | Confirms support routing, macros, SLAs, and escalation readiness |
| Customer Success Owner | Confirms customer watch, rollout cohorts, and success criteria |
| Revenue Owner | Confirms billing, pricing, CRM, procurement, and RevOps readiness |
| Marketplace Owner | Confirms marketplace assets, creators, trust labels, and operations |
| Incident Commander | Owns incident flow if launch degrades |
| Communications Owner | Owns customer/internal/executive notifications |
| Rollback Owner | Owns rollback decision readiness and execution |

---

## 6. Launch Readiness Status Model

Ariyo launch readiness must be tracked using explicit statuses.

```ts
export type LaunchReadinessStatus =
  | 'not_started'
  | 'in_preparation'
  | 'blocked'
  | 'at_risk'
  | 'ready_with_exceptions'
  | 'ready'
  | 'go_approved'
  | 'launched'
  | 'paused'
  | 'rolled_back'
  | 'post_launch_monitoring'
  | 'completed';
```

### 6.1 Status meanings

| Status | Meaning |
|---|---|
| `not_started` | Launch planning has not begun |
| `in_preparation` | Launch work is active |
| `blocked` | One or more launch-blocking issues exist |
| `at_risk` | Launch may proceed only if risk is accepted or resolved |
| `ready_with_exceptions` | Launch can proceed with documented exceptions |
| `ready` | All required gates are satisfied |
| `go_approved` | Final decision-maker approved launch |
| `launched` | Launch has begun |
| `paused` | Launch rollout has been stopped but not rolled back |
| `rolled_back` | Launch has been reversed or disabled |
| `post_launch_monitoring` | Launch is live and under active watch |
| `completed` | Launch monitoring period is complete |

---

## 7. Launch Severity and Risk Levels

### 7.1 Risk levels

```ts
export type LaunchRiskLevel =
  | 'low'
  | 'moderate'
  | 'high'
  | 'critical';
```

### 7.2 Risk evaluation dimensions

A launch risk level must consider:

- customer data exposure
- automated action scope
- billing impact
- AI output risk
- integration write-access risk
- enterprise governance risk
- reliability/SLA risk
- compliance/legal risk
- support burden
- customer trust impact
- rollback complexity
- affected customer count
- public visibility
- Marketplace creator/vendor involvement
- revenue dependency

### 7.3 Critical launch examples

A launch is critical if it includes:

- production AI Employees with tool execution
- customer data processing changes
- billing, charging, payouts, refunds, or tax logic
- security/permission model changes
- marketplace public availability
- SSO/SCIM identity changes
- irreversible customer workflow automation
- model provider routing changes that affect output quality or data residency
- enterprise customer production go-live

---

## 8. Go/No-Go Decision Framework

### 8.1 Decision states

```ts
export type GoNoGoDecision =
  | 'go'
  | 'conditional_go'
  | 'pause'
  | 'no_go'
  | 'rollback'
  | 'defer';
```

### 8.2 Go

Use `go` only when:

- all launch gates pass
- all required owners have signed off
- rollback is ready
- support is ready
- monitoring is live
- communications are ready
- no unresolved launch blocker remains

### 8.3 Conditional go

Use `conditional_go` when:

- known exceptions exist
- exceptions have owners
- risk is accepted by the correct authority
- mitigation and rollback plans exist
- customer impact is limited

### 8.4 Pause

Use `pause` when:

- rollout should stop before wider exposure
- investigation is needed
- signals are ambiguous
- rollback is not yet required

### 8.5 No-go

Use `no_go` when:

- blocking risk exists before launch
- launch criteria are not satisfied
- required sign-off is missing
- rollback readiness is insufficient
- customer risk is unacceptable

### 8.6 Rollback

Use `rollback` when:

- launched change causes unacceptable customer, safety, security, reliability, financial, or trust impact
- remediation is not sufficient
- continued rollout creates escalating risk

---

## 9. Launch Gate Categories

### 9.1 Product readiness gate

Must verify:

- core use cases work
- customer value is clear
- plan behavior is correct for Basic/Pro/Smart
- UX copy is accurate
- no misleading claims exist
- onboarding path is usable
- empty/error states are ready
- accessibility requirements are satisfied

### 9.2 Engineering readiness gate

Must verify:

- production deployment path
- feature flags
- migration scripts
- rollback scripts
- performance validation
- API compatibility
- test coverage
- staging verification
- database safety
- queue/job safety
- rate limits
- operational runbooks

### 9.3 AI readiness gate

Must verify:

- evals passed
- prompt/tool/memory/RAG versions are locked
- model provider routing is correct
- fallback models are configured
- hallucination/unsafe-output guardrails are active
- tool-call permissions are scoped
- human review policies are enforced
- AI cost controls are active

### 9.4 Security readiness gate

Must verify:

- threat model reviewed
- permission boundaries tested
- secrets managed
- least privilege enforced
- audit logs enabled
- sensitive data redaction active
- tenant isolation verified
- access review complete

### 9.5 Privacy and compliance readiness gate

Must verify:

- data processing map complete
- retention rules configured
- data residency compatible
- vendor/subprocessor disclosures updated
- legal pages accurate
- compliance evidence available
- customer-facing disclosures prepared

### 9.6 Marketplace readiness gate

Must verify:

- template review governance active
- trust labels accurate
- certification labels valid
- creator terms ready
- marketplace billing and payouts ready
- search/ranking rules safe
- support routing ready
- dispute/refund flows ready
- private catalog behavior tested

### 9.7 Revenue readiness gate

Must verify:

- pricing configured
- billing provider configured
- invoice logic tested
- tax settings ready where applicable
- CRM tracking ready
- plan entitlements correct
- expansion/renewal impact understood
- sales/support teams enabled

### 9.8 Support readiness gate

Must verify:

- support articles ready
- support macros ready
- escalation paths ready
- severity model ready
- on-call coverage ready
- incident response playbook ready
- customer communication templates ready
- creator/partner support responsibilities clear

### 9.9 Customer success readiness gate

Must verify:

- pilot customers identified
- customer watchlist created
- CSM playbooks ready
- training material ready
- success criteria defined
- customer admins enabled
- adoption measurement active

### 9.10 GTM readiness gate

Must verify:

- website copy approved
- sales narrative aligned
- demo environment ready
- investor/enterprise narrative consistent
- launch announcement approved
- claim levels evidence-backed
- no compliance-sensitive claims are unsupported

---

## 10. Launch Blocker Model

```ts
export interface LaunchBlocker {
  id: string;
  launchId: string;
  title: string;
  description: string;
  category:
    | 'product'
    | 'engineering'
    | 'ai_safety'
    | 'security'
    | 'privacy'
    | 'compliance'
    | 'marketplace'
    | 'billing'
    | 'support'
    | 'customer_success'
    | 'revenue'
    | 'gtm'
    | 'legal'
    | 'operations';
  severity: 'low' | 'moderate' | 'high' | 'critical';
  status: 'open' | 'mitigated' | 'accepted' | 'resolved' | 'waived' | 'blocked';
  ownerUserId: string;
  accountableExecutiveId?: string;
  dueAt?: string;
  mitigationPlan?: string;
  rollbackImpact?: string;
  customerImpact?: string;
  evidenceLinks: string[];
  createdAt: string;
  updatedAt: string;
}
```

### 10.1 Blocker rules

- Critical blockers prevent launch unless executive risk acceptance is recorded.
- Security, privacy, compliance, billing, and AI safety blockers require specialist sign-off.
- Waived blockers must include risk acceptance and expiration.
- A blocker cannot be closed without evidence.
- Hidden blockers are forbidden.

---

## 11. Live Launch Dashboard

The dashboard must provide an executive and operator view of launch readiness.

### 11.1 Required dashboard panels

- launch status
- go/no-go decision
- launch timeline
- blocker list
- owner map
- readiness gates
- rollout percentage
- active incidents
- customer watchlist
- AI safety watch
- reliability watch
- marketplace watch
- billing/revenue watch
- support queue watch
- rollback readiness
- communications status
- post-launch KPI watch

### 11.2 Dashboard users

- founders/executives
- launch commander
- product managers
- engineering leads
- support leads
- customer success leads
- security/compliance leads
- revenue leaders
- Marketplace operators
- enterprise customer admins where appropriate

---

## 12. Watch Streams

### 12.1 Reliability watch

Monitor:

- uptime
- latency
- error rate
- failed jobs
- queue delays
- database saturation
- API timeouts
- integration failure rate
- rollback error rate

### 12.2 AI safety watch

Monitor:

- unsafe output rate
- policy refusal rate
- hallucination reports
- tool-call failures
- human review queue size
- model fallback rate
- prompt/version anomaly
- customer escalations related to AI behavior

### 12.3 Customer watch

Monitor:

- pilot customer adoption
- customer support tickets
- admin friction
- onboarding drop-off
- failed activation
- negative sentiment
- enterprise blockers
- churn-risk signals

### 12.4 Marketplace watch

Monitor:

- install success rate
- install failures
- entitlement errors
- template health issues
- creator support tickets
- suspicious reviews
- search abandonment
- trust/safety events
- billing/refund disputes

### 12.5 Revenue watch

Monitor:

- checkout conversion
- failed payments
- plan entitlement mismatches
- invoice errors
- refund requests
- CRM sync failures
- procurement blockers
- pricing confusion

### 12.6 Support watch

Monitor:

- ticket volume
- severity distribution
- first response time
- SLA breach risk
- escalation count
- knowledge base gaps
- unresolved critical cases

---

## 13. Rollout Control

### 13.1 Rollout modes

```ts
export type LaunchRolloutMode =
  | 'internal_only'
  | 'sandbox_only'
  | 'private_beta'
  | 'single_customer_pilot'
  | 'limited_cohort'
  | 'plan_limited'
  | 'region_limited'
  | 'marketplace_limited'
  | 'progressive_percentage'
  | 'public_launch'
  | 'enterprise_controlled';
```

### 13.2 Rollout controls

The command center must support:

- feature flag enablement
- percentage rollout
- customer allowlist
- workspace allowlist
- plan allowlist
- region allowlist
- marketplace category allowlist
- creator allowlist
- internal-only mode
- emergency disable
- fallback mode
- rollback execution

---

## 14. Rollback Control

### 14.1 Rollback readiness requirements

Before launch, Ariyo must confirm:

- rollback owner assigned
- rollback trigger rules defined
- rollback steps tested
- feature flag disable path available
- data migration rollback or containment plan exists
- customer communication ready
- support escalation ready
- post-rollback verification defined

### 14.2 Rollback trigger examples

Rollback must be considered when:

- error rate exceeds threshold
- unsafe AI output exceeds threshold
- billing errors occur
- permission boundary fails
- customer data exposure risk appears
- install failures spike
- support volume exceeds capacity
- enterprise customer reports production-blocking issue
- trust label or certification misrepresentation appears
- model provider routing causes material degradation

---

## 15. Launch Timeline Model

### 15.1 Pre-launch phases

1. Launch scope lock
2. Readiness gate review
3. Risk register review
4. Rollback rehearsal
5. Support rehearsal
6. Customer/marketplace watch setup
7. Go/no-go decision

### 15.2 Live launch phases

1. Internal enablement
2. Limited rollout
3. Watch period
4. Expansion checkpoint
5. Broader rollout
6. Public/enterprise activation
7. Stabilization

### 15.3 Post-launch phases

1. 24-hour review
2. 72-hour review
3. 7-day review
4. 30-day business outcome review
5. retrospective
6. playbook updates

---

## 16. Basic / Pro / Smart Launch Rules

### 16.1 Basic

Basic launches must prioritize:

- simple activation
- low-risk defaults
- support readiness
- low cost exposure
- limited automation
- clear customer messaging

Basic launches must not introduce:

- complex policy requirements
- heavy enterprise governance dependency
- irreversible automation
- high AI cost exposure

### 16.2 Pro

Pro launches must prioritize:

- team/workspace readiness
- workflow reliability
- integration safety
- support and customer success readiness
- operational dashboards
- clear plan entitlements

Pro launches may include:

- workflow automation
- team collaboration
- Marketplace installs
- customer success playbooks
- moderate governance controls

### 16.3 Smart

Smart launches must prioritize:

- enterprise governance
- AI safety evaluation
- model routing controls
- approval workflows
- audit evidence
- data residency controls
- private catalog controls
- rollback and incident response

Smart launches must require stricter sign-off for:

- autonomous agents
- multi-agent orchestration
- production tool execution
- cross-system automation
- sensitive data workflows
- enterprise Marketplace capabilities

---

## 17. Command Center Data Model

```ts
export interface LaunchCommandCenter {
  id: string;
  name: string;
  launchType: string;
  status: LaunchReadinessStatus;
  riskLevel: LaunchRiskLevel;
  rolloutMode: LaunchRolloutMode;
  targetLaunchAt?: string;
  startedAt?: string;
  completedAt?: string;
  launchCommanderId: string;
  executiveSponsorId: string;
  finalApproverId: string;
  owners: LaunchOwner[];
  readinessGates: LaunchReadinessGate[];
  blockers: LaunchBlocker[];
  watchStreams: LaunchWatchStream[];
  rollbackPlanId: string;
  communicationPlanId: string;
  customerWatchlistIds: string[];
  marketplaceAssetIds: string[];
  featureFlagIds: string[];
  decisionHistory: LaunchDecisionRecord[];
  evidenceLinks: string[];
  createdAt: string;
  updatedAt: string;
}

export interface LaunchOwner {
  role: string;
  userId: string;
  backupUserId?: string;
  requiredForGo: boolean;
  signedOffAt?: string;
}

export interface LaunchReadinessGate {
  id: string;
  category: string;
  status: 'not_ready' | 'ready' | 'ready_with_exception' | 'blocked';
  ownerUserId: string;
  evidenceLinks: string[];
  exceptionReason?: string;
  signedOffAt?: string;
}

export interface LaunchWatchStream {
  id: string;
  name: string;
  category: string;
  ownerUserId: string;
  status: 'green' | 'yellow' | 'red' | 'unknown';
  metrics: LaunchWatchMetric[];
}

export interface LaunchWatchMetric {
  name: string;
  currentValue: number | string;
  threshold?: number | string;
  status: 'green' | 'yellow' | 'red' | 'unknown';
}

export interface LaunchDecisionRecord {
  id: string;
  decision: GoNoGoDecision;
  decidedByUserId: string;
  rationale: string;
  acceptedRisks: string[];
  evidenceLinks: string[];
  createdAt: string;
}
```

---

## 18. API Contract

### 18.1 Create launch command center

`POST /api/v1/platform/launch-command-centers`

```json
{
  "name": "Ariyo Marketplace Public Launch",
  "launch_type": "marketplace_launch",
  "risk_level": "critical",
  "rollout_mode": "limited_cohort",
  "target_launch_at": "2026-09-15T09:00:00Z",
  "launch_commander_id": "user_123",
  "executive_sponsor_id": "user_456",
  "final_approver_id": "user_789"
}
```

### 18.2 Get launch command center

`GET /api/v1/platform/launch-command-centers/{launch_id}`

### 18.3 Add launch blocker

`POST /api/v1/platform/launch-command-centers/{launch_id}/blockers`

### 18.4 Update readiness gate

`PATCH /api/v1/platform/launch-command-centers/{launch_id}/gates/{gate_id}`

### 18.5 Record go/no-go decision

`POST /api/v1/platform/launch-command-centers/{launch_id}/decisions`

```json
{
  "decision": "conditional_go",
  "rationale": "All launch gates pass except one accepted support staffing exception for the first 24 hours.",
  "accepted_risks": ["support_staffing_exception_001"],
  "evidence_links": ["https://ariyo.internal/evidence/launch-readiness"]
}
```

### 18.6 Trigger pause

`POST /api/v1/platform/launch-command-centers/{launch_id}/pause`

### 18.7 Trigger rollback

`POST /api/v1/platform/launch-command-centers/{launch_id}/rollback`

### 18.8 Complete post-launch monitoring

`POST /api/v1/platform/launch-command-centers/{launch_id}/complete`

---

## 19. Webhooks

Ariyo should emit webhooks for:

- `launch.created`
- `launch.gate.updated`
- `launch.blocker.created`
- `launch.blocker.resolved`
- `launch.decision.recorded`
- `launch.go_approved`
- `launch.started`
- `launch.paused`
- `launch.rollback_triggered`
- `launch.rolled_back`
- `launch.watch_metric.red`
- `launch.incident.created`
- `launch.completed`

---

## 20. Observability Events

Track:

- `LaunchCommandCenterCreated`
- `LaunchGateSignedOff`
- `LaunchGateBlocked`
- `LaunchBlockerOpened`
- `LaunchBlockerResolved`
- `GoNoGoDecisionRecorded`
- `LaunchRolloutStarted`
- `LaunchRolloutPaused`
- `LaunchRollbackStarted`
- `LaunchRollbackCompleted`
- `LaunchWatchMetricChanged`
- `LaunchIncidentLinked`
- `LaunchCustomerImpacted`
- `LaunchPostReviewCompleted`

Each event must include:

- launch id
- launch type
- risk level
- owner
- organization/workspace if applicable
- customer cohort if applicable
- marketplace asset ids if applicable
- feature flag ids if applicable
- timestamp
- actor
- decision rationale where applicable

---

## 21. Frontend Requirements

### 21.1 Command center dashboard

Must include:

- launch overview
- readiness gate board
- blockers board
- owner map
- live watch metrics
- decision log
- rollback panel
- communications panel
- incident panel
- post-launch review panel

### 21.2 Decision UX

The go/no-go flow must require:

- decision selection
- rationale
- accepted risks
- required approver
- evidence links
- rollback confirmation

### 21.3 Blocker UX

Blockers must show:

- severity
- owner
- due date
- customer impact
- mitigation
- status
- evidence

### 21.4 Watch UX

Watch panels must show:

- green/yellow/red status
- current values
- thresholds
- trend
- owner
- linked incidents
- action recommendations

---

## 22. Backend Requirements

The backend must provide:

- launch command center service
- readiness gate service
- blocker service
- decision log service
- watch metric ingestion
- feature flag integration
- incident integration
- communication integration
- rollback orchestration integration
- audit log persistence
- permission checks
- evidence linking
- webhook emission

---

## 23. Security and Privacy Requirements

- Only authorized launch roles may modify readiness status.
- Go/no-go decisions must be immutable after recording, except by append-only correction.
- Launch blockers must be audit logged.
- Customer watchlists must respect privacy and access scope.
- Sensitive security/privacy blockers must have restricted visibility.
- Rollback actions must require strong authorization.
- External-facing launch status must not expose internal vulnerabilities.

---

## 24. AI Final Launch Assistant

Ariyo may provide an AI assistant to support launch operations.

The assistant may:

- summarize blocker status
- explain launch risk
- generate readiness summaries
- draft executive launch updates
- recommend next actions
- detect missing owners
- highlight inconsistent sign-offs
- summarize post-launch incidents
- prepare retrospective drafts

The assistant must not:

- approve launch
- override blockers
- hide risk
- fabricate readiness evidence
- make rollback decisions autonomously
- change feature flags without authorization
- send customer-facing launch communications without approval

---

## 25. Advanced KPIs

### 25.1 Launch Readiness Score

Percentage of required launch gates ready with valid evidence.

### 25.2 Blocker Resolution Time

Average time to resolve launch blockers by severity.

### 25.3 Conditional Go Rate

Percentage of launches approved with exceptions.

### 25.4 Rollback Readiness Score

Percentage of rollback requirements tested before launch.

### 25.5 Launch Incident Rate

Number of incidents per launch, segmented by severity.

### 25.6 Customer Impact Rate

Percentage of launch cohort affected by issues.

### 25.7 Time to Detect Launch Issue

Time between issue onset and detection.

### 25.8 Time to Mitigate Launch Issue

Time between detection and mitigation.

### 25.9 Post-Launch Stability Score

Composite score based on reliability, support, AI safety, billing, and customer watch metrics.

### 25.10 Launch Retrospective Completion Rate

Percentage of launches with completed retrospective and assigned follow-up actions.

---

## 26. Forbidden Launch Patterns

Ariyo must never:

- launch without rollback readiness
- launch with unresolved critical blocker unless formally accepted by authorized executive
- hide blockers from decision-makers
- use vanity metrics as readiness evidence
- ignore support capacity
- launch AI tool execution without AI safety watch
- launch billing changes without finance controls
- launch marketplace changes without trust/safety support
- run public launch from undocumented manual steps
- skip post-launch monitoring
- let AI assistants approve launch
- treat stakeholder excitement as readiness
- make customer-facing claims that exceed tested capability
- expose enterprise customers to unapproved experiments during launch

---

## 27. Golden Rule

Ariyo launch command center exists to make launches safer, not slower.

If a launch is safe, the command center should accelerate it.

If a launch is unsafe, the command center should stop it before customers pay the price.
