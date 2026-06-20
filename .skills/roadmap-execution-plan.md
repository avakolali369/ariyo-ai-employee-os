# Ariyo Roadmap Execution Plan Skill

## Purpose

This skill defines the official execution roadmap for Ariyo, the AI Employee Operating System.

It converts Ariyo's product strategy, architecture, AI employee model, frontend system, backend system, security model, privacy model, billing model, reliability model, observability model, and MVP requirements into an actionable build plan.

This file must be used whenever Codex, engineers, product managers, AI agents, designers, or founders decide:

- what to build next,
- what not to build yet,
- which dependency must come first,
- how to split work into phases,
- how to define a milestone,
- how to judge whether a release is ready,
- how to prevent chaotic feature building,
- how to keep Ariyo focused on customer value, safety, reliability, and revenue.

Ariyo must not be built as a random collection of AI features.

Ariyo must be built as a staged, measurable, secure, monetizable, and trustable operating system for AI employees.

---

## Core Contract

Ariyo roadmap execution is not a task list.

Ariyo roadmap execution is the discipline that turns strategy into shipped product without breaking security, reliability, cost control, privacy, customer trust, or product focus.

Every roadmap item must have a clear reason, owner, dependency, customer value, risk level, acceptance criteria, observability requirement, release gate, and plan-tier impact.

If a feature cannot be explained in terms of customer outcome, AI employee capability, trust improvement, revenue improvement, or operational safety, it must not enter the active roadmap.

---

## Product North Star

Ariyo exists to help businesses hire, configure, supervise, and scale AI employees that perform useful work safely.

The roadmap must optimize for:

1. Fast first value.
2. Safe AI employee deployment.
3. Business context accuracy.
4. Knowledge-grounded responses.
5. Human trust and review control.
6. Cost visibility and plan clarity.
7. Reliable workflow execution.
8. Clear Basic / Pro / Smart differentiation.
9. Measurable business outcomes.
10. Upgrade and expansion readiness.

Ariyo must not optimize for:

- raw chat volume,
- generic AI novelty,
- ungoverned automation,
- unpriced intelligence usage,
- complex enterprise features before MVP trust is proven,
- marketplace scale before core employee success is proven.

---

## Roadmap Foundation Skills

This roadmap depends on the following Ariyo skills:

- `business-context.md`
- `product-strategy.md`
- `product-requirements-mvp.md`
- `domain-model.md`
- `api-contracts.md`
- `backend-architecture.md`
- `frontend-design.md`
- `frontend-components.md`
- `frontend-state-data.md`
- `frontend-forms-validation.md`
- `frontend-testing.md`
- `frontend-performance.md`
- `ai-employee-architecture.md`
- `prompt-tool-orchestration.md`
- `model-provider-strategy.md`
- `knowledge-rag.md`
- `workflow-automation.md`
- `human-review-governance.md`
- `integration-ecosystem.md`
- `admin-permissions.md`
- `monetization-billing.md`
- `ai-cost-control.md`
- `observability-analytics-events.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `quality-assurance-system.md`
- `reliability-sla.md`
- `compliance-legal-risk.md`
- `enterprise-readiness.md`
- `customer-success-playbooks.md`
- `deployment-ops.md`

If two skills conflict, use this priority order:

1. Security and privacy.
2. Legal/compliance risk.
3. Reliability and SLA.
4. AI safety and human review.
5. Cost control and billing integrity.
6. Product value and MVP scope.
7. Design, UX, and growth.

---

## Roadmap Operating Principles

### 1. Build the trust path before the power path

Ariyo must earn permission to automate.

Before powerful automation ships, Ariyo must have:

- organization isolation,
- admin permissions,
- audit logs,
- AI cost control,
- human review gates,
- safe model routing,
- prompt/tool guardrails,
- knowledge grounding,
- incident visibility,
- rollback and kill switches.

### 2. Ship useful narrow capability before broad platform capability

Ariyo must first prove that one business can hire one AI employee and receive a useful business outcome.

Do not build a marketplace, advanced automation, enterprise customization, or large integration ecosystem before the core employee loop works.

### 3. Every phase must increase customer trust

A phase is not complete if it only adds features.

A phase must increase at least one of:

- activation,
- retention,
- safe automation,
- measurable value,
- plan upgrade readiness,
- reliability,
- security,
- operational confidence.

### 4. Pricing tiers must shape roadmap scope

Every major feature must declare whether it belongs to:

- `Basic`
- `Pro`
- `Smart`
- Enterprise add-on / future

Basic must be useful but limited.

Pro must be operational.

Smart must be the fullest intelligent experience, with stronger cost and safety controls.

### 5. The roadmap must protect gross margin

AI usage must not scale without budget, quota, caching, throttling, model routing, and cost attribution.

Smart may use more expensive capabilities, but it must not create uncontrolled provider cost.

### 6. Observability is part of every feature

No feature is complete until Ariyo can answer:

- Who used it?
- Which organization used it?
- Which plan was active?
- Which AI employee was involved?
- What did it cost?
- Did it succeed?
- Did it fail?
- Was review required?
- Was data exposed?
- Did it create business value?

### 7. Release gates are mandatory

A roadmap item cannot be marked done until it passes:

- product acceptance,
- frontend acceptance,
- backend acceptance,
- AI safety acceptance,
- security/privacy review,
- cost control review,
- analytics instrumentation,
- reliability review,
- QA/regression testing.

---

## Roadmap Phases Overview

```text
Phase 0 — Foundation & System Contracts
Phase 1 — MVP Core Product
Phase 2 — AI Employee Execution Engine
Phase 3 — Knowledge, Review, and Workflow Safety
Phase 4 — Plans, Billing, Cost Control, and Analytics
Phase 5 — Integrations, Channels, and Deployment Readiness
Phase 6 — Reliability, Security, Compliance, and Beta Readiness
Phase 7 — Growth, Customer Success, and Expansion
Phase 8 — Marketplace and Advanced Enterprise Scale
```

Ariyo must not skip phases.

Features from later phases may be prototyped only if they do not delay MVP trust, safety, billing, or activation.

---

# Phase 0 — Foundation & System Contracts

## Objective

Create the engineering, design, product, data, security, and AI contracts required to build Ariyo safely and consistently.

## Primary Outcome

The team can build without guessing product rules, architecture rules, UX rules, AI rules, security rules, or cost rules.

## Scope

### Product foundation

- Product positioning.
- Business context model.
- MVP scope.
- Basic / Pro / Smart plan logic.
- Core user journeys.
- Customer outcome definitions.

### Engineering foundation

- Repository setup.
- Project structure.
- Coding standards.
- API contract conventions.
- Domain model conventions.
- TypeScript and Python quality rules.
- CI pipeline.
- Environment management.

### Design foundation

- Design tokens.
- Component standards.
- Responsive rules.
- Motion rules.
- Copywriting rules.
- Empty/loading/error states.

### Security foundation

- Authentication model.
- Organization isolation model.
- RBAC foundation.
- Secrets handling.
- Logging redaction.
- Security threat model.

### AI foundation

- AI employee architecture.
- Model provider abstraction.
- Prompt/tool orchestration rules.
- AI safety/evaluation rules.
- Cost control rules.

## Milestone 0.1 — Repo and Skills Ready

### Deliverables

- `.skills/` directory installed.
- README updated.
- Frontend scaffold created.
- Backend scaffold created.
- CI checks configured.
- Environment variable conventions defined.
- Feature flag conventions defined.

### Acceptance Criteria

- New contributors can understand Ariyo contracts from `.skills/`.
- Code can run locally.
- Lint/type/test commands exist.
- Secrets are not committed.
- Basic CI fails on lint/type/test failure.

## Milestone 0.2 — Design System Ready

### Deliverables

- Core layout shell.
- Auth pages layout.
- Dashboard shell.
- Empty state components.
- Loading state components.
- Error state components.
- Form components.
- Plan badge components.
- Status badge components.

### Acceptance Criteria

- Components use Ariyo tokens.
- No hardcoded random design values.
- Mobile-first layouts work.
- Accessibility basics pass.
- Motion is restrained and purposeful.

## Exit Gate

Phase 0 is complete only when the team can start MVP work without inventing foundational rules during feature development.

---

# Phase 1 — MVP Core Product

## Objective

Build the smallest safe, valuable, measurable, and monetizable Ariyo product.

## Primary Outcome

A real business can create an organization, select a plan, hire its first AI employee, provide business context, add knowledge, test the employee, understand cost limits, and see a first useful outcome.

## MVP Customer Promise

Ariyo helps a business set up a useful AI employee in minutes, with clear limits, safe review, and visible value.

## P0 Scope

### Account and organization

- Signup/login.
- Organization creation.
- Workspace setup.
- Owner role.
- Basic member invitation.
- Organization settings.

### Plan and entitlement

- Basic / Pro / Smart plan model.
- Plan-aware UI.
- Entitlement checks.
- Upgrade prompts.
- Usage visibility.
- Trial logic if applicable.

### AI employee hiring

- Employee template selection.
- Employee name and role.
- Business goal selection.
- Plan-aware employee capabilities.
- Employee draft state.
- Employee test state.
- Employee deployed state.

### Business context

- Company name.
- Industry.
- Audience.
- Products/services.
- Brand voice.
- Support/sales/operations goal.
- Key constraints.

### Knowledge input

- Manual knowledge entry.
- File upload MVP.
- FAQ/source document MVP.
- Source status.
- Knowledge freshness indicator.

### AI test console

- Ask test questions.
- Show grounded answer.
- Show confidence and source references where possible.
- Show unsafe/uncertain states.
- Allow user feedback.

### Human review MVP

- Review required for risky outputs.
- Approve/reject/edit action.
- Review audit record.
- Reviewer role check.

### Cost control MVP

- Plan budget.
- Usage meter.
- AI request logging.
- Per-employee usage.
- Basic throttling.
- Smart high-cost guardrail.

### Observability MVP

- Activation events.
- Employee created events.
- Knowledge added events.
- AI test events.
- Review events.
- Cost events.
- Error events.

## P1 Scope

- Invite members with roles.
- Employee performance dashboard.
- More employee templates.
- More knowledge source controls.
- Workflow draft builder.
- Email/web chat channel MVP.
- Billing checkout.
- Plan upgrade flow.

## P2 Scope

- Advanced marketplace.
- Enterprise SSO.
- SCIM.
- Advanced analytics exports.
- Custom model provider controls.
- Advanced workflow branching.
- Multi-region deployment.

---

## Phase 1 Milestones

### Milestone 1.1 — Auth, Organization, and Plan Shell

#### Deliverables

- Auth UI.
- Organization creation.
- Plan selector placeholder.
- Dashboard shell.
- User/account menu.
- Basic route protection.

#### Acceptance Criteria

- User cannot access org routes without auth.
- Every record is organization-scoped.
- Plan state is visible in UI.
- Unauthorized states are clear and safe.

### Milestone 1.2 — Employee Hiring Flow

#### Deliverables

- AI employee templates.
- Employee creation flow.
- Plan-aware capability preview.
- Employee profile page.
- Empty state for no employees.

#### Acceptance Criteria

- User can create first AI employee.
- User understands what Basic/Pro/Smart changes.
- Employee cannot be deployed without required setup.
- Events are tracked.

### Milestone 1.3 — Business Context and Knowledge MVP

#### Deliverables

- Business context form.
- Knowledge input form.
- File upload MVP.
- Source list.
- Knowledge processing status.

#### Acceptance Criteria

- AI employee has minimum business context before test.
- Knowledge sources are organization-scoped.
- Unsupported file errors are safe.
- Knowledge events are tracked.

### Milestone 1.4 — Test Console and First Value Moment

#### Deliverables

- Employee test console.
- Prompt/model gateway integration.
- Grounded response output.
- Feedback buttons.
- First value success state.

#### Acceptance Criteria

- User can test the AI employee.
- Response is based on provided context/knowledge where relevant.
- Unsafe uncertainty is handled gracefully.
- AI usage is counted and attributed.

### Milestone 1.5 — Review and Deployment Readiness

#### Deliverables

- Review mode setting.
- Deployment readiness checklist.
- Approve/reject/edit review actions.
- Deploy button.
- Deployed state.

#### Acceptance Criteria

- Risky outputs can require review.
- User cannot deploy with missing critical requirements.
- Deployment state is clear.
- Review audit trail exists.

## Exit Gate

Phase 1 is complete only when a real customer can complete the core MVP journey without founder assistance.

---

# Phase 2 — AI Employee Execution Engine

## Objective

Build the governed runtime that powers Ariyo AI employees.

## Primary Outcome

AI employees can execute tasks through a controlled model gateway, prompt orchestration layer, memory/context system, RAG layer, and tool policy system.

## Scope

### Model gateway

- Provider abstraction.
- Model profiles.
- Plan-aware routing.
- Timeout/retry.
- Fallback model.
- Structured output validation.
- Model cost tracking.

### Prompt orchestration

- Prompt versioning.
- System prompt contracts.
- Employee role prompts.
- Business context injection.
- Knowledge context injection.
- Tool permission injection.
- Output schema enforcement.

### AI execution logs

- Request ID.
- Organization ID.
- Employee ID.
- Model profile.
- Token/cost estimate.
- Latency.
- Outcome.
- Safety flags.
- Review requirement.

### Tool execution policy

- Tool registry.
- Tool permissions.
- Tool risk levels.
- Human review requirement.
- Idempotency for actions.
- Tool execution audit.

## Phase 2 Milestones

### Milestone 2.1 — Model Gateway MVP

#### Deliverables

- Unified model call interface.
- Provider adapter.
- Model profile config.
- Retry/timeout behavior.
- Cost logging.

#### Acceptance Criteria

- No direct provider calls from feature code.
- Model calls are attributed to org/employee/workflow.
- Failed provider calls return safe errors.
- Cost is recorded.

### Milestone 2.2 — Prompt and Output Contracts

#### Deliverables

- Prompt template registry.
- Prompt versioning.
- Output schema validation.
- Safe fallback messages.
- Evaluation samples.

#### Acceptance Criteria

- Prompt changes are versioned.
- Invalid AI output is not trusted.
- Structured outputs are validated before use.
- Regression examples exist.

### Milestone 2.3 — Tool Policy MVP

#### Deliverables

- Tool registry.
- Tool permission check.
- Risk classification.
- Review gate integration.
- Tool execution logs.

#### Acceptance Criteria

- AI cannot call tools without permission.
- High-risk tool calls require review.
- Tool failures are visible.
- Tool results are auditable.

## Exit Gate

Phase 2 is complete only when AI behavior is routed, logged, evaluated, costed, and policy-controlled.

---

# Phase 3 — Knowledge, Review, and Workflow Safety

## Objective

Make Ariyo useful for real business work while maintaining safety and trust.

## Primary Outcome

AI employees can use business knowledge, produce reviewable outputs, and participate in simple workflows without uncontrolled automation.

## Scope

### Knowledge/RAG

- Source ingestion.
- Chunking.
- Embedding.
- Retrieval.
- Source attribution.
- Permission-filtered retrieval.
- Freshness states.
- Knowledge gap detection.

### Human review

- Review queue.
- Reviewer permissions.
- Approval/rejection/edit.
- Review comments.
- Review audit trail.
- Risk-based review rules.

### Workflow MVP

- Trigger.
- Condition.
- AI step.
- Review step.
- Action step.
- Execution history.
- Retry and cancellation.

## Phase 3 Milestones

### Milestone 3.1 — Knowledge Reliability

#### Deliverables

- Source processing pipeline.
- Retrieval API.
- Source citation UI.
- Stale/failed source states.
- Knowledge gap event.

#### Acceptance Criteria

- Retrieval respects organization boundary.
- Failed ingestion cannot silently appear successful.
- AI can indicate insufficient knowledge.
- Knowledge quality is measurable.

### Milestone 3.2 — Review Operations

#### Deliverables

- Review queue UI.
- Review decision API.
- Reviewer permission logic.
- Review notifications MVP.
- Review metrics.

#### Acceptance Criteria

- Reviewers know what they are approving.
- Review history is immutable enough for audit.
- Non-reviewers cannot approve restricted actions.
- Review SLA can be measured.

### Milestone 3.3 — Workflow MVP

#### Deliverables

- Workflow builder MVP.
- Execution engine MVP.
- Queue-based execution.
- Execution timeline.
- Safe retry/cancel.

#### Acceptance Criteria

- Workflow execution is idempotent where required.
- Workflow failures are visible.
- High-risk workflow actions require review.
- Workflow cost is attributed.

## Exit Gate

Phase 3 is complete only when Ariyo can perform useful work safely with knowledge grounding, review, and observable execution.

---

# Phase 4 — Plans, Billing, Cost Control, and Analytics

## Objective

Turn Ariyo into a monetizable SaaS with clear plan differences and controlled AI economics.

## Primary Outcome

Customers understand Basic, Pro, and Smart. Ariyo can enforce entitlements, collect payment, control AI usage, attribute cost, and surface product value.

## Basic / Pro / Smart Product Roadmap Logic

### Basic

Basic must include:

- limited AI employee count,
- limited monthly AI usage,
- basic model profile,
- manual knowledge input,
- limited file uploads,
- simple test console,
- basic review mode,
- basic usage meter,
- limited integrations or no advanced integrations,
- no advanced automation,
- no advanced analytics.

Basic must not feel useless.

Basic must prove value while making upgrade reasons obvious.

### Pro

Pro must include:

- more AI employees,
- higher monthly usage,
- better model profile,
- larger knowledge capacity,
- operational workflows,
- selected integrations,
- review queue,
- cost alerts,
- per-employee usage analytics,
- team roles,
- better support readiness,
- business dashboard.

Pro is the main operational plan for serious small and medium businesses.

### Smart

Smart must include:

- highest AI capability available in the product tier,
- advanced model routing,
- deeper reasoning where allowed,
- larger RAG capacity,
- advanced workflows,
- more integrations,
- predictive cost alerts,
- anomaly detection,
- advanced analytics,
- priority reliability controls,
- advanced human review policies,
- smarter recommendations,
- premium automation features.

Smart is full-option within governed limits.

Smart must be powerful, not unlimited.

## Phase 4 Milestones

### Milestone 4.1 — Entitlements and Plan Enforcement

#### Deliverables

- Plan model.
- Entitlement service.
- Feature flags by plan.
- UI plan states.
- Upgrade prompts.

#### Acceptance Criteria

- Backend enforces all plan limits.
- Frontend explains limits clearly.
- Users are never surprised by hidden restrictions.
- Smart features do not leak into Basic.

### Milestone 4.2 — Billing MVP

#### Deliverables

- Checkout.
- Subscription state.
- Invoice/payment state.
- Upgrade/downgrade flow.
- Failed payment handling.

#### Acceptance Criteria

- Paid plan access is reliable.
- Failed payments downgrade or restrict safely.
- Billing state is auditable.
- Billing errors do not expose sensitive data.

### Milestone 4.3 — AI Cost Control

#### Deliverables

- Budget rules.
- Usage metering.
- Per-employee cost.
- Per-workflow cost.
- Alerts.
- Throttling.
- Model downgrade rules.
- Caching rules.
- Cost dashboard.

#### Acceptance Criteria

- AI usage cannot run without cost attribution.
- Smart usage has stronger guardrails.
- Budget breaches create visible actions.
- Gross margin risk is detectable.

### Milestone 4.4 — Analytics and Outcome Dashboard

#### Deliverables

- Event taxonomy implementation.
- Activation dashboard.
- Employee performance dashboard.
- Cost dashboard.
- Review dashboard.
- Workflow dashboard.

#### Acceptance Criteria

- Events follow naming rules.
- Metrics connect to customer outcomes.
- Sensitive data is not logged.
- Dashboards can support product decisions.

## Exit Gate

Phase 4 is complete only when Ariyo can charge, enforce, measure, and control AI usage by plan.

---

# Phase 5 — Integrations, Channels, and Deployment Readiness

## Objective

Allow AI employees to work where customers already operate, without unsafe connector behavior.

## Primary Outcome

Ariyo can connect approved channels and systems through scoped, auditable, revocable integrations.

## Scope

### Channel MVP

- Website chat or embedded assistant.
- Email channel MVP.
- Telegram or WhatsApp later depending market priority.
- Channel assignment to employee.
- Channel-specific safety rules.

### Integration MVP

- OAuth/API key connection pattern.
- Integration status.
- Reauthorization.
- Disconnect.
- Sync status.
- Webhook validation.
- Provider error mapping.

### Deployment readiness

- Employee deploy checklist.
- Channel deploy status.
- Knowledge readiness.
- Review readiness.
- Cost readiness.
- Security readiness.

## Phase 5 Milestones

### Milestone 5.1 — Website Channel MVP

#### Deliverables

- Channel setup UI.
- Embed/config instructions.
- Channel message ingestion.
- Employee response pipeline.
- Review mode support.

#### Acceptance Criteria

- Channel messages are organization-scoped.
- AI responses respect employee configuration.
- Unsafe responses can require review.
- Channel failures are visible.

### Milestone 5.2 — Email or Messaging Channel MVP

#### Deliverables

- Connection flow.
- Incoming message handling.
- Draft response generation.
- Review before send.
- Send audit trail.

#### Acceptance Criteria

- Ariyo does not send unreviewed risky messages.
- External channel credentials are secure.
- Message cost is tracked.
- Disconnect works.

### Milestone 5.3 — Integration Health and Sync

#### Deliverables

- Integration health model.
- Sync jobs.
- Webhook endpoint.
- Retry/backoff.
- Dead-letter handling.
- Admin integration logs.

#### Acceptance Criteria

- Webhooks verify signatures where provider supports it.
- Sync failures do not silently corrupt state.
- Reauth state is visible.
- Integration actions are auditable.

## Exit Gate

Phase 5 is complete only when AI employees can safely interact with at least one real customer-facing channel.

---

# Phase 6 — Reliability, Security, Compliance, and Beta Readiness

## Objective

Prepare Ariyo for real customers outside controlled demos.

## Primary Outcome

Ariyo can enter beta with reliability targets, security controls, compliance posture, incident response, QA gates, and customer communication processes.

## Scope

### Reliability

- SLA/SLO definitions.
- Degraded mode.
- Queue health.
- Provider outage fallback.
- Backup/restore.
- Incident severity levels.
- Status page process.

### Security

- Threat model review.
- Auth/session hardening.
- Tenant isolation tests.
- IDOR tests.
- XSS/CSRF/CORS/CSP checks.
- Secrets audit.
- Logging redaction audit.
- Abuse/rate limit checks.

### Compliance

- Terms/Privacy legal review checklist.
- Data retention policy.
- Export/delete flow.
- AI disclosure policy.
- DPA readiness.
- Support access policy.

### QA

- E2E tests.
- Regression suite.
- AI eval suite.
- Security test checklist.
- Billing test checklist.
- Release checklist.

## Phase 6 Milestones

### Milestone 6.1 — Beta Hardening

#### Deliverables

- Production monitoring.
- Error reporting.
- Audit logs.
- Backup/restore test.
- Security test suite.
- QA regression suite.

#### Acceptance Criteria

- Critical paths are monitored.
- Incident response process exists.
- Tenant isolation tests pass.
- Basic rollback works.

### Milestone 6.2 — Compliance and Trust Readiness

#### Deliverables

- Privacy policy draft support.
- Terms support checklist.
- DPA support checklist.
- Data export/delete MVP.
- Trust center content draft.

#### Acceptance Criteria

- Product behavior does not contradict legal claims.
- Customer data usage policy is clear.
- AI training policy is clear.
- Data deletion is technically supported.

### Milestone 6.3 — Beta Launch Gate

#### Deliverables

- Beta customer list.
- Onboarding playbook.
- Support runbook.
- Incident communication templates.
- Beta feedback loop.
- Success metrics dashboard.

#### Acceptance Criteria

- Beta customers can be onboarded repeatably.
- Feedback is structured.
- Critical issues are triaged quickly.
- Success can be measured.

## Exit Gate

Phase 6 is complete only when Ariyo is safe enough for real beta customers.

---

# Phase 7 — Growth, Customer Success, and Expansion

## Objective

Turn successful usage into retention, expansion, and repeatable growth.

## Primary Outcome

Ariyo can identify healthy customers, rescue risky customers, recommend upgrades, prove ROI, and expand use cases.

## Scope

### Customer success

- Customer health score.
- Activation recovery.
- Knowledge gap recovery.
- Trust recovery.
- Cost concern playbook.
- Expansion readiness.
- Renewal proof.

### Growth

- Upgrade prompts.
- Use case recommendations.
- Employee template recommendations.
- Smart plan nudges.
- Customer outcome summaries.
- Referral/partner readiness later.

### Product-led expansion

- More employee templates.
- More workflow templates.
- More integrations.
- Team adoption prompts.
- Value reporting.

## Phase 7 Milestones

### Milestone 7.1 — Customer Health Dashboard

#### Deliverables

- Activation health.
- Usage health.
- Cost health.
- Knowledge health.
- Review health.
- Workflow health.

#### Acceptance Criteria

- Risky accounts are visible.
- Healthy accounts are expansion candidates.
- Health score does not use vanity metrics only.

### Milestone 7.2 — Expansion Engine

#### Deliverables

- Upgrade recommendations.
- Smart plan value prompts.
- Use case templates.
- Employee template marketplace preview.
- ROI report MVP.

#### Acceptance Criteria

- Upgrade prompts are value-based.
- Smart plan is positioned around stronger capability and control.
- Customers can see why to expand.

## Exit Gate

Phase 7 is complete only when Ariyo can retain and expand customers based on measurable outcomes.

---

# Phase 8 — Marketplace and Advanced Enterprise Scale

## Objective

Scale Ariyo beyond first-party AI employees into a controlled ecosystem.

## Primary Outcome

Ariyo can support marketplace distribution, advanced enterprise governance, and deeper integrations without sacrificing safety.

## Scope

### Marketplace

- Employee templates marketplace.
- Template review process.
- Template safety score.
- Marketplace publishing rules.
- Marketplace billing later.

### Advanced enterprise

- SSO/SAML/OIDC.
- SCIM.
- Advanced audit exports.
- Enterprise admin console.
- Custom data retention.
- Custom model provider controls.
- Advanced compliance reporting.

### Advanced automation

- Multi-step workflows.
- Conditional branching.
- Scheduled workflows.
- Cross-integration actions.
- Advanced approval policies.

## Exit Gate

Phase 8 is complete only when Ariyo can support scale without becoming an unsafe automation platform.

---

# Suggested Sprint Roadmap

This sprint plan assumes focused execution and can be adjusted by team capacity.

## Sprint 0 — Setup and Alignment

### Goal

Prepare the team, repo, contracts, and foundations.

### Deliverables

- Repo ready.
- Skill package installed.
- Design tokens ready.
- Project structure ready.
- CI ready.
- MVP scope reviewed.

### Do Not Build

- Marketplace.
- Advanced integrations.
- Complex workflows.
- Enterprise SSO.

## Sprint 1 — Auth, Organization, Dashboard Shell

### Deliverables

- Auth flow.
- Organization creation.
- Dashboard shell.
- Protected routes.
- Basic organization settings.

### Gate

Tenant boundaries must be enforced from the beginning.

## Sprint 2 — Plans and Employee Hiring

### Deliverables

- Basic/Pro/Smart plan model.
- Entitlement foundation.
- Employee template selection.
- Employee creation.
- Plan-aware capability preview.

### Gate

No plan-only feature should be controlled by UI only.

## Sprint 3 — Business Context and Knowledge MVP

### Deliverables

- Business context form.
- Knowledge entry.
- File upload MVP.
- Source processing state.
- Employee readiness checklist.

### Gate

AI employee must not test or deploy without minimum context.

## Sprint 4 — Model Gateway and Test Console

### Deliverables

- Model provider abstraction.
- Prompt versioning foundation.
- Test console.
- AI usage tracking.
- Safe error states.

### Gate

No direct model calls outside gateway.

## Sprint 5 — RAG MVP and Source-Grounded Answers

### Deliverables

- Retrieval pipeline.
- Source attribution.
- Knowledge gap behavior.
- RAG quality events.
- Feedback loop.

### Gate

AI must not invent source-based claims when retrieval is insufficient.

## Sprint 6 — Human Review and Safe Deployment

### Deliverables

- Review queue MVP.
- Approve/reject/edit.
- Deployment readiness.
- Deployed state.
- Review audit log.

### Gate

Risky actions require review.

## Sprint 7 — Cost Control and Billing Foundation

### Deliverables

- Usage meter.
- Budget checks.
- Per-employee cost.
- Plan limit warnings.
- Checkout foundation if ready.

### Gate

AI cost must be attributable before scale.

## Sprint 8 — Workflow MVP

### Deliverables

- Simple workflow builder.
- Trigger/AI/review/action steps.
- Execution timeline.
- Retry/cancel.
- Workflow cost attribution.

### Gate

Workflow execution must be idempotent for external actions.

## Sprint 9 — Channel MVP

### Deliverables

- Website or email channel.
- Channel assignment.
- Incoming message handling.
- Review-before-send behavior.
- Channel event tracking.

### Gate

External responses must respect review and safety rules.

## Sprint 10 — Observability and Admin Console

### Deliverables

- Event taxonomy implementation.
- Admin user/role management.
- Audit views.
- Health dashboard.
- Error dashboard.

### Gate

Critical events must be searchable by org, employee, workflow, and request ID.

## Sprint 11 — Security, Privacy, Reliability Hardening

### Deliverables

- Threat model checks.
- Tenant isolation tests.
- Backup/restore test.
- Incident runbook.
- Data export/delete MVP.
- Logging redaction audit.

### Gate

No beta launch without security and privacy signoff.

## Sprint 12 — Beta Launch Readiness

### Deliverables

- Beta onboarding playbook.
- QA regression suite.
- AI eval suite.
- Status/incident process.
- Customer success dashboard.
- Release notes.

### Gate

Beta launch requires product, security, QA, reliability, cost, and customer success signoff.

---

# Workstream Plan

## Product Workstream

Responsible for:

- Roadmap priority.
- Customer journey.
- MVP scope.
- Plan differentiation.
- Acceptance criteria.
- Release notes.
- Customer feedback loop.

Product must reject features that do not serve MVP outcomes.

## Frontend Workstream

Responsible for:

- UI implementation.
- Mobile-first behavior.
- Component consistency.
- Empty/loading/error states.
- Permission-aware UX.
- Plan-aware UX.
- Instrumentation.

Frontend must never rely on UI-only security or plan enforcement.

## Backend Workstream

Responsible for:

- Domain models.
- API contracts.
- Organization isolation.
- Permissions.
- Billing enforcement.
- AI gateway.
- Workflow engine.
- Audit logs.
- Reliability controls.

Backend is the enforcement layer.

## AI Workstream

Responsible for:

- Prompt contracts.
- Model routing.
- RAG quality.
- AI evaluation.
- Tool safety.
- Cost attribution.
- Safety flags.

AI work must be evaluated, versioned, and observable.

## Data and Analytics Workstream

Responsible for:

- Event taxonomy.
- Metrics catalog.
- Dashboards.
- Cost reporting.
- Activation reporting.
- Customer health reporting.

Analytics must not log sensitive content unnecessarily.

## Security and Compliance Workstream

Responsible for:

- Threat model.
- Privacy rules.
- Compliance readiness.
- Security tests.
- Support access governance.
- Incident response.

Security must review features with data, AI, billing, integrations, or external actions.

## QA Workstream

Responsible for:

- Manual test plans.
- Automated tests.
- E2E tests.
- AI eval tests.
- Regression gates.
- Release signoff.

QA must validate product behavior, not only code behavior.

---

# Dependency Map

## Critical Dependencies

### Organization isolation before everything

No feature may store or retrieve customer data without organization scope.

### Admin permissions before team collaboration

Team features require RBAC and permission enforcement.

### Model gateway before AI features

No AI feature may call model providers directly.

### Cost control before Smart scale

Smart features must not ship until advanced cost controls exist.

### Human review before external actions

AI-generated external actions must support review and audit.

### Observability before beta

Beta launch requires reliable event tracking and debugging.

### Data governance before integrations

External data sources require privacy, retention, and deletion policy.

### Reliability before SLA promises

Ariyo must not promise uptime it cannot measure.

---

# Roadmap Item Template

Every roadmap item must follow this structure:

```markdown
## Feature Name

### Phase

### Plan Tier
- Basic:
- Pro:
- Smart:

### Customer Problem

### Business Outcome

### User Journey

### Dependencies

### Backend Requirements

### Frontend Requirements

### AI Requirements

### Data / Event Requirements

### Security / Privacy Requirements

### Cost Control Requirements

### Reliability Requirements

### Acceptance Criteria

### Release Gate

### Out of Scope
```

If a feature does not include these fields, it is not ready for implementation.

---

# Feature Prioritization Model

Ariyo must prioritize features using this scoring model.

## Priority Score

Score each feature from 1 to 5 for:

1. Customer value.
2. Activation impact.
3. Retention impact.
4. Revenue/upgrade impact.
5. Trust/safety impact.
6. Strategic differentiation.
7. Engineering feasibility.
8. Dependency unlock value.

Subtract risk points for:

1. Security risk.
2. Privacy risk.
3. AI safety risk.
4. Cost explosion risk.
5. Reliability risk.
6. Scope creep risk.

Features with high customer value and high dependency unlock value should ship early.

Features with high risk and unclear value should be delayed.

---

# Release Gates

## Product Gate

A feature passes product gate only if:

- it solves a real customer problem,
- it has clear plan-tier behavior,
- it has acceptance criteria,
- it has empty/loading/error states,
- it supports onboarding or retention or revenue or trust.

## Design Gate

A feature passes design gate only if:

- it follows Ariyo design rules,
- it is mobile-first,
- it has one primary action,
- it is accessible,
- it uses clear copy,
- it avoids visual noise.

## Backend Gate

A feature passes backend gate only if:

- API contracts are stable,
- organization scope is enforced,
- permissions are enforced,
- errors are safe,
- domain model is consistent,
- audit requirements are met.

## AI Gate

A feature passes AI gate only if:

- model calls use gateway,
- prompts are versioned,
- outputs are validated,
- risky actions are reviewed,
- cost is attributed,
- eval cases exist.

## Security Gate

A feature passes security gate only if:

- threat model impact is reviewed,
- sensitive data is protected,
- logging is redacted,
- abuse cases are considered,
- rate limits exist where needed,
- no secrets leak to frontend.

## Privacy Gate

A feature passes privacy gate only if:

- data collection is necessary,
- retention is defined,
- deletion/export impact is known,
- analytics avoid sensitive content,
- customer data usage is clear.

## Cost Gate

A feature passes cost gate only if:

- usage is metered,
- cost is attributed,
- budget rules apply,
- Smart high-cost paths are guarded,
- runaway prevention exists.

## Reliability Gate

A feature passes reliability gate only if:

- timeouts exist,
- retries are safe,
- failures are observable,
- degraded behavior is defined,
- rollback impact is known.

## QA Gate

A feature passes QA gate only if:

- unit/integration/E2E coverage is appropriate,
- AI evals exist where needed,
- regression risk is tested,
- acceptance criteria are verified,
- release checklist passes.

---

# MVP Release Definition

Ariyo MVP is ready only if all of these are true:

## Product Readiness

- User can create an organization.
- User can select or understand a plan.
- User can hire an AI employee.
- User can add business context.
- User can add knowledge.
- User can test the employee.
- User can review risky output.
- User can deploy in a limited safe way.
- User can see value and usage.

## Plan Readiness

- Basic is useful and limited.
- Pro is operational and clearly better.
- Smart is fuller, smarter, and more expensive but governed.
- Upgrade prompts are understandable.
- Backend enforces plan limits.

## AI Readiness

- Model gateway is used.
- Prompt versions are tracked.
- RAG works for MVP knowledge.
- Tool use is permissioned.
- AI cost is tracked.
- Unsafe uncertainty is handled.

## Trust Readiness

- Human review exists.
- Audit logs exist for key actions.
- Organization isolation is tested.
- Sensitive logs are redacted.
- Data export/delete MVP exists or is planned with clear limitation.

## Reliability Readiness

- Core paths are monitored.
- Error handling is safe.
- Provider failure behavior exists.
- Queue failures are visible.
- Backup/restore path exists.

## Commercial Readiness

- Pricing tiers are clear.
- Billing state is reliable enough for MVP.
- Cost controls protect gross margin.
- Customer success can onboard beta customers.

---

# Out-of-Scope Until After MVP

The following must not block MVP:

- Full AI employee marketplace.
- Public template publishing.
- Enterprise SSO.
- SCIM provisioning.
- Advanced custom model provider management.
- Advanced multi-region deployment.
- Full custom workflow language.
- Complex no-code automation builder.
- Advanced partner portal.
- Full compliance certification claims.
- Unlimited integrations.
- Unlimited Smart automation.
- Fully autonomous external actions without review.

---

# Risk Register

## Risk: Building too much before proving first value

### Mitigation

Use MVP scope and sprint gates. Delay marketplace and enterprise extras.

## Risk: AI cost exceeds revenue

### Mitigation

Enforce AI cost control before Smart scale. Track per-employee and per-workflow cost.

## Risk: Customer loses trust because AI hallucinates

### Mitigation

Use RAG grounding, uncertainty handling, review gates, evals, and source attribution.

## Risk: Tenant data leak

### Mitigation

Organization isolation, IDOR tests, permission checks, redacted logs, security gate.

## Risk: Integrations create unsafe actions

### Mitigation

Scoped connections, webhooks verification, review gates, audit logs, disconnect control.

## Risk: Roadmap becomes feature-chaos

### Mitigation

Use roadmap item template, phase gates, P0/P1/P2 rules, and outcome-based prioritization.

## Risk: Smart plan becomes too expensive to serve

### Mitigation

Predictive budget, model routing, caching, throttling, upgrade/downgrade rules, anomaly detection.

## Risk: Enterprise claims exceed real capability

### Mitigation

Do not promise SSO, SLA, compliance, or certifications until implemented and evidenced.

---

# AI Agent / Codex Execution Rules

When using Codex or AI development agents to build Ariyo, they must follow these rules:

1. Read relevant `.skills/` files before implementation.
2. Do not invent product behavior outside the roadmap.
3. Do not create direct AI provider calls.
4. Do not bypass organization scope.
5. Do not implement UI-only permissions.
6. Do not store tokens in frontend state.
7. Do not log sensitive customer content unnecessarily.
8. Do not add features without events.
9. Do not add Smart features without cost controls.
10. Do not ship external actions without review rules.
11. Do not treat passing code tests as product acceptance.
12. Do not change plan entitlements without billing/cost review.
13. Do not build marketplace features before core AI employee success.

---

# Definition of Done

A roadmap item is done only when:

- feature behavior matches the skill contract,
- API contract exists or is updated,
- domain model is consistent,
- backend enforces permissions and plan limits,
- frontend reflects states clearly,
- AI calls are routed through gateway if applicable,
- costs are attributed if applicable,
- events are emitted,
- security/privacy risks are reviewed,
- tests pass,
- release gate passes,
- documentation is updated,
- rollback impact is understood.

Done means shippable, measurable, and safe.

Done does not mean coded only.

---

# Final Rule

Ariyo must be built in the right order.

First: trust.

Second: usefulness.

Third: monetization.

Fourth: scale.

Fifth: ecosystem.

Any roadmap decision that reverses this order must be treated as a product risk.
