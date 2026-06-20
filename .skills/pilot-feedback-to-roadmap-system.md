# Ariyo Pilot Feedback to Roadmap System

## Core Contract

Ariyo Pilot Feedback to Roadmap System is not a feedback inbox, customer-request tracker, note dump, or backlog grooming document.

It is the governed operating system that converts pilot customer evidence into roadmap decisions, product priorities, engineering work units, design changes, success proof, investor proof, release gates, and enterprise-readiness improvements.

Ariyo must not build from opinions alone.
Ariyo must build from evidence, severity, repeatability, customer value, operational risk, and strategic fit.

If pilot feedback does not become structured evidence, it cannot become roadmap authority.

---

## 1. Purpose

This skill defines how Ariyo should capture, classify, validate, prioritize, route, and convert feedback from pilot customers into an executable roadmap.

It protects Ariyo from four dangerous patterns:

1. Treating every pilot comment as a feature request.
2. Building custom one-off features for a single customer too early.
3. Ignoring serious adoption, trust, or workflow blockers because they are not glamorous.
4. Letting sales, product, engineering, support, and leadership maintain separate versions of truth.

The system turns pilot feedback into a controlled decision pipeline.

---

## 2. Source Skills

Codex and AI-assisted builders must read this skill together with:

- `pilot-customer-onboarding-plan.md`
- `mvp-demo-flow-script.md`
- `mvp-build-scope-lock.md`
- `production-readiness-gap-audit.md`
- `production-release-gate-checklist.md`
- `frontend-implementation-sprint-plan.md`
- `codex-execution-master-prompt.md`
- `product-requirements-mvp.md`
- `roadmap-execution-plan.md`
- `customer-success-playbooks.md`
- `enterprise-customer-health-scoring.md`
- `enterprise-adoption-success-insights.md`
- `enterprise-renewal-expansion-system.md`
- `product-analytics-growth.md`
- `observability-analytics-events.md`
- `quality-assurance-system.md`
- `ai-safety-evaluation.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`

This skill is downstream of pilot onboarding and upstream of roadmap, release gates, investor proof, and enterprise expansion.

---

## 3. Operating Principle

Pilot feedback is not accepted directly into the roadmap.

Pilot feedback must pass through this chain:

```text
Raw Feedback
  -> Evidence Object
  -> Classification
  -> Severity & Frequency
  -> Customer Segment Fit
  -> Product Surface Mapping
  -> Root Cause
  -> Decision Type
  -> Roadmap Candidate
  -> Owner Assignment
  -> Release Gate Impact
  -> Validation Plan
  -> Roadmap Update
```

No roadmap item may be created from a vague note such as:

- Customer asked for integrations.
- User wants better dashboard.
- Need more automation.
- Enterprise needs security.
- Pricing is confusing.
- Marketplace is not clear.

Every item must be converted into a structured evidence object first.

---

## 4. Feedback Sources

Ariyo should collect pilot feedback from multiple channels, but normalize all of them into one format.

### 4.1 Direct Customer Feedback

Sources:

- Discovery calls
- Onboarding calls
- Weekly pilot reviews
- Closeout calls
- Executive sponsor conversations
- Admin interviews
- End-user interviews
- Procurement/security conversations
- Support conversations

### 4.2 Product Behavior Evidence

Sources:

- Page analytics
- Workflow completion rate
- AI Employee creation rate
- Simulation completion rate
- Marketplace template views
- Template install attempts
- Permission block events
- Approval queue behavior
- Error states
- Abandoned flows
- Repeated support actions

### 4.3 Operational Evidence

Sources:

- Support tickets
- Incidents
- Internal Ops Command Center
- Customer Success Console
- Trust Center evidence requests
- Enterprise Admin friction
- Billing/entitlement issues
- Partner escalation notes

### 4.4 Sales and Expansion Evidence

Sources:

- Investor demo objections
- Customer procurement objections
- Enterprise buyer questions
- Pricing objections
- Proof-of-value requests
- Expansion interest
- Renewal risk signals

---

## 5. Feedback Evidence Object

Every feedback item must be stored as a structured object.

### Required Fields

```ts
export type PilotFeedbackEvidence = {
  id: string;
  source: 'customer_call' | 'product_usage' | 'support_ticket' | 'csm_note' | 'ops_incident' | 'sales_objection' | 'security_review' | 'analytics_signal';
  customerId: string;
  customerSegment: 'smb' | 'mid_market' | 'enterprise' | 'agency' | 'partner' | 'internal_demo';
  role: 'owner' | 'admin' | 'operator' | 'end_user' | 'creator' | 'partner' | 'security' | 'finance' | 'executive' | 'csm' | 'internal_ops';
  productSurface: string;
  skillReferences: string[];
  rawFeedback: string;
  normalizedProblem: string;
  evidenceType: 'qualitative' | 'quantitative' | 'behavioral' | 'operational' | 'commercial' | 'security' | 'compliance';
  severity: 'critical' | 'high' | 'medium' | 'low';
  frequency: 'single' | 'repeated_same_customer' | 'repeated_multiple_customers' | 'systemic';
  businessImpact: 'blocks_activation' | 'blocks_value' | 'blocks_trust' | 'blocks_revenue' | 'slows_adoption' | 'improves_efficiency' | 'nice_to_have';
  rootCauseHypothesis: string;
  proposedDecision: 'fix_now' | 'improve_mvp' | 'add_to_near_term' | 'defer' | 'reject' | 'needs_research';
  ownerTeam: 'product' | 'frontend' | 'backend' | 'ai_runtime' | 'security' | 'compliance' | 'cs' | 'sales' | 'growth' | 'ops';
  validationPlan: string;
  status: 'new' | 'triaged' | 'accepted' | 'rejected' | 'in_progress' | 'released' | 'validated';
};
```

Codex must never create roadmap items without enough information to populate this object.

---

## 6. Feedback Classification System

Pilot feedback must be categorized by what it actually means, not by the words used by the customer.

### 6.1 Product Understanding Feedback

Customer does not understand:

- What Ariyo is
- What an AI Employee is
- What is different from chatbot/automation tools
- How Marketplace templates work
- Why governance matters
- What Basic/Pro/Smart means
- What value Ariyo creates

Likely affected surfaces:

- Landing page
- Pricing page
- Dashboard
- AI Employee Builder
- Marketplace Homepage
- Template Detail
- Trust Center

Roadmap response:

- Improve copy
- Add guided onboarding
- Add contextual education
- Improve empty states
- Improve demo narrative
- Improve information hierarchy

### 6.2 Activation Feedback

Customer understands Ariyo but cannot get started.

Signals:

- Builder abandoned
- Workflow setup incomplete
- Integration confusion
- Knowledge source setup unclear
- Permission setup too complex
- Simulation not understood
- Marketplace install blocked

Roadmap response:

- Improve setup wizard
- Add templates
- Add guided defaults
- Add progress indicators
- Add fewer required decisions
- Add clearer failure states

### 6.3 Value Realization Feedback

Customer starts using Ariyo but does not see value quickly.

Signals:

- Low workflow completion
- AI Employee activity but unclear outcomes
- Dashboard metrics not meaningful
- Customer asks “what did it do?”
- No measurable before/after
- No executive proof

Roadmap response:

- Improve outcome intelligence
- Add ROI metrics
- Add task/value summaries
- Add weekly business review
- Add executive report exports
- Improve customer success playbooks

### 6.4 Trust and Governance Feedback

Customer worries about control, risk, security, data, audit, permissions, or compliance.

Signals:

- Security review questions
- Data residency concerns
- Permission uncertainty
- Approval workflow requests
- Audit log requests
- Human review requirements
- Enterprise Admin blockers

Roadmap response:

- Improve Trust Center
- Strengthen Enterprise Admin
- Add policy visibility
- Add audit trail
- Add permission preview
- Add approval gates
- Add compliance evidence export

### 6.5 Marketplace Confidence Feedback

Customer hesitates to install or buy Marketplace templates.

Signals:

- “Is this safe?”
- “Who built this?”
- “What data does it access?”
- “Can we test it first?”
- “What happens if it breaks?”
- “Is it compatible with our plan/region?”

Roadmap response:

- Improve Template Detail
- Add sandbox preview
- Add trust labels
- Add dependency graph
- Add permission risk table
- Add install eligibility
- Add version history

### 6.6 Commercial Feedback

Customer questions price, plan fit, limits, ROI, procurement, or expansion.

Signals:

- Pricing confusion
- Usage anxiety
- AI cost concern
- Enterprise plan uncertainty
- Procurement questions
- Budget objections

Roadmap response:

- Improve pricing explanation
- Add cost controls
- Add ROI calculator
- Add usage forecasting
- Add plan comparison
- Add procurement package

### 6.7 Operational Feedback

Ariyo team struggles to support, monitor, or diagnose pilot activity.

Signals:

- Internal Ops lacks visibility
- CSM cannot explain risk
- Support cannot reproduce issue
- Incident is not tied to customer impact
- No owner for blocker

Roadmap response:

- Improve internal ops command center
- Improve support tooling
- Improve audit logs
- Improve telemetry
- Improve customer success console
- Add escalation paths

---

## 7. Severity Model

### Critical

A feedback item is Critical if it blocks pilot continuation, creates legal/security/compliance risk, prevents activation, prevents trust, or invalidates the product promise.

Examples:

- Customer cannot create an AI Employee.
- Customer cannot understand what Ariyo does after demo.
- Security team blocks pilot due to missing evidence.
- Approval flow is missing for risky actions.
- Audit log is not available for enterprise pilot.
- AI Employee behavior cannot be reviewed or controlled.

Required action:

- Immediate owner assignment
- Roadmap decision within 24–48 hours
- Release gate review
- Codex must not proceed if implementation depends on unresolved critical feedback

### High

High feedback materially slows adoption, trust, or value but does not fully block the pilot.

Examples:

- Dashboard value is unclear.
- Template install decision is too complex.
- Pricing questions repeatedly appear.
- Workflow simulation is confusing.
- Customer asks for exportable proof.

Required action:

- Include in near-term roadmap or explicit deferral decision
- Add validation plan
- Assign owner

### Medium

Medium feedback improves usability, clarity, or efficiency but does not block success.

Examples:

- Better filters
- More helpful tooltips
- More templates in a category
- More dashboard customization
- Better microcopy

Required action:

- Backlog candidate
- Batch with similar feedback

### Low

Low feedback is preference, cosmetic, or speculative.

Examples:

- Color preference
- Layout preference without evidence
- Specific customization request from one user
- “Would be nice if...” item

Required action:

- Track only if repeated
- Do not change roadmap alone

---

## 8. Frequency Model

### Single

One customer or stakeholder mentioned it once.

Do not build unless severity is Critical or High.

### Repeated Same Customer

Same customer mentions it repeatedly.

Investigate deeply. It may indicate workflow fit or stakeholder-specific need.

### Repeated Multiple Customers

Multiple customers or roles mention the same issue.

Treat as roadmap evidence.

### Systemic

Feedback appears in qualitative calls, analytics, support, and product usage.

Treat as roadmap priority.

---

## 9. Prioritization Formula

Ariyo should prioritize feedback using a weighted model.

```text
Priority Score =
  Severity Weight
+ Frequency Weight
+ Business Impact Weight
+ Strategic Fit Weight
+ Enterprise Readiness Weight
+ Demo/Proof Value Weight
- Implementation Complexity Penalty
- Customization Risk Penalty
```

### Suggested Weights

| Dimension | Critical/High Value |
|---|---:|
| Severity | 0–30 |
| Frequency | 0–20 |
| Business impact | 0–20 |
| Strategic fit | 0–15 |
| Enterprise readiness | 0–10 |
| Demo/proof value | 0–10 |
| Complexity penalty | -0 to -20 |
| Customization risk penalty | -0 to -15 |

### Priority Bands

| Score | Action |
|---:|---|
| 70+ | Fix now / roadmap lock |
| 50–69 | Near-term roadmap candidate |
| 30–49 | Backlog / batch later |
| 0–29 | Defer or reject |

Codex must not calculate fake precision. The score should support a decision, not replace judgment.

---

## 10. Roadmap Decision Types

### Fix Now

Use when feedback blocks pilot, demo, trust, or release gate.

Examples:

- Missing permission visibility
- Broken activation path
- No audit evidence for enterprise pilot
- Confusing AI Employee launch state

### Improve MVP

Use when feedback strengthens the current MVP scope without expanding platform complexity.

Examples:

- Better Dashboard metrics
- Better Builder empty states
- Clearer Template Detail install risk
- Better pricing copy

### Add to Near-Term Roadmap

Use when feedback is valuable but not required for the current MVP.

Examples:

- More integrations
- Advanced marketplace analytics
- Expanded creator monetization
- Multi-region enterprise controls

### Defer

Use when feedback is valid but belongs to a future phase.

Examples:

- Advanced enterprise procurement workflows
- Full creator certification program
- Deep custom workflow DSL
- Complex marketplace dispute automation

### Reject

Use when feedback conflicts with Ariyo strategy, creates unsafe behavior, weakens enterprise trust, or makes Ariyo look like a generic tool.

Examples:

- Bypass approvals for speed
- Allow unreviewed AI actions in high-risk environments
- Make Marketplace templates install without permission review
- Hide AI costs

### Needs Research

Use when feedback is unclear or contradictory.

Examples:

- Customer wants “more control” but cannot define control
- Users ask for “better AI” but issue may be workflow design
- Security concern may be policy confusion rather than missing feature

---

## 11. Product Surface Mapping

Every accepted feedback item must map to a product surface.

### Public Surfaces

- Landing Page
- Pricing Page
- Trust Center
- Marketplace Public/Discovery Surface

### Customer App Surfaces

- Dashboard
- AI Employee Builder
- AI Employee Detail
- Workflow Builder
- Marketplace Homepage
- Template Detail
- Enterprise Admin
- Launch Readiness Command Center

### Internal Surfaces

- Customer Success Console
- Internal Ops Command Center
- Support Operations
- Product Analytics
- Incident Response

### Marketplace/Partner Surfaces

- Creator Portal
- Partner Portal
- Template Review
- Template Health
- Marketplace Trust & Safety

If feedback cannot be mapped to a product surface, it is not implementation-ready.

---

## 12. Skill Impact Mapping

Every roadmap candidate must list impacted skills.

Example:

```text
Feedback: Enterprise admin cannot understand which AI Employees can access customer data.

Impacted skills:
- enterprise-admin-mockup-spec.md
- admin-permissions.md
- ai-agent-permissions-runtime.md
- data-governance-privacy.md
- security-threat-model.md
- compliance-legal-risk.md
- backend-api-contract-review.md
- production-release-gate-checklist.md
```

Codex must update or reference relevant skills before implementing a product change.

---

## 13. Feedback Intake Workflow

### Step 1: Capture Raw Feedback

Capture exact language when useful, but do not treat it as final product language.

### Step 2: Normalize Problem

Rewrite into a clear product problem.

Bad:

```text
Customer wants better admin.
```

Good:

```text
Enterprise admin cannot determine whether a specific AI Employee has access to sensitive CRM fields before approving launch.
```

### Step 3: Attach Evidence

Attach call notes, screenshots, analytics events, support ticket IDs, or usage metrics.

### Step 4: Classify

Assign category, severity, frequency, business impact, product surface, and owner.

### Step 5: Decide

Choose decision type:

- Fix Now
- Improve MVP
- Near-Term Roadmap
- Defer
- Reject
- Needs Research

### Step 6: Convert to Roadmap Object

Accepted items become roadmap objects.

### Step 7: Validate

After implementation, validate with customer behavior and feedback.

---

## 14. Roadmap Candidate Object

```ts
export type RoadmapCandidate = {
  id: string;
  title: string;
  problemStatement: string;
  evidenceIds: string[];
  customerSegments: string[];
  affectedRoles: string[];
  productSurfaces: string[];
  impactedSkills: string[];
  decisionType: 'fix_now' | 'improve_mvp' | 'near_term' | 'defer' | 'reject' | 'needs_research';
  priorityScore: number;
  owner: string;
  targetRelease: 'mvp_patch' | 'private_pilot' | 'public_beta' | 'enterprise_pilot' | 'post_launch';
  acceptanceCriteria: string[];
  validationPlan: string;
  releaseGateImpact: string[];
  status: 'candidate' | 'approved' | 'in_design' | 'in_build' | 'in_review' | 'released' | 'validated' | 'rejected';
};
```

---

## 15. Customer Proof System

Pilot feedback should not only generate product changes. It should generate proof.

### Proof Types

- Before/after activation evidence
- Time saved
- Manual steps reduced
- Risk reduced
- Approval speed improved
- Workflow completion improved
- AI Employee usefulness validated
- Marketplace template confidence improved
- Executive stakeholder clarity improved
- Security/procurement objection resolved

### Proof Object

```ts
export type PilotProof = {
  id: string;
  customerId: string;
  proofType: 'activation' | 'efficiency' | 'risk_reduction' | 'revenue' | 'trust' | 'adoption' | 'marketplace' | 'executive';
  claim: string;
  evidence: string;
  metricBefore?: string;
  metricAfter?: string;
  quote?: string;
  canUseExternally: boolean;
  needsApproval: boolean;
  sourceFeedbackIds: string[];
};
```

Ariyo must not use customer proof externally unless approved.

---

## 16. Investor Proof Mapping

Pilot feedback can support investor narrative only when evidence is structured.

### Investor-Relevant Signals

- Repeatable use cases
- Expansion potential
- Enterprise buyer trust
- Marketplace demand
- Measurable operational value
- Reduced manual work
- Active AI Employee usage
- Customers asking for more seats/templates/workflows
- Security/compliance questions that show enterprise seriousness

### Investor Proof Output

Each month, Ariyo should produce:

- Top 5 pilot learnings
- Top 5 validated customer pains
- Top 5 product improvements from evidence
- Top 5 proof metrics
- Top 5 expansion signals
- Top 5 risks remaining

---

## 17. Release Gate Integration

Feedback must influence release gates.

### Private Pilot Gate

Must answer:

- Are customers able to activate Ariyo?
- Can they create at least one AI Employee?
- Can they understand outcomes?
- Are critical trust objections addressed?
- Are support paths clear?

### Public Beta Gate

Must answer:

- Are repeated pilot blockers resolved?
- Is onboarding understandable without founder explanation?
- Are pricing and plan limits clear?
- Are Marketplace install risks clear?
- Are support and incident paths stable?

### Enterprise Pilot Gate

Must answer:

- Are audit logs usable?
- Are permissions explainable?
- Are approval workflows visible?
- Are Trust Center evidence flows clear?
- Are data residency claims accurate?

### Production Launch Gate

Must answer:

- Are critical and high systemic feedback items resolved or explicitly accepted as known risk?
- Is customer proof strong enough?
- Are support/ops systems ready?
- Are roadmap commitments controlled?
- Are release notes evidence-backed?

---

## 18. Feedback Review Cadence

### Daily During Active Pilot

Review:

- Critical blockers
- Activation failures
- Support escalations
- Security/compliance concerns
- Incidents

### Weekly

Review:

- New evidence objects
- Roadmap candidates
- Repeated feedback
- Product analytics
- Customer health score movement
- Release gate impact

### Monthly

Review:

- Strategic roadmap changes
- Investor proof
- Expansion signals
- Deferred requests
- Segment patterns
- Pricing/packaging implications

---

## 19. Owner Matrix

| Feedback Type | Primary Owner | Secondary Owner |
|---|---|---|
| Product understanding | Product | Design / Growth |
| Activation blocker | Product | Frontend / CS |
| Workflow blocker | Product | Backend / AI Runtime |
| AI Employee behavior | AI Runtime | Product / Safety |
| Permissions/trust | Security | Product / Enterprise |
| Compliance | Legal/Compliance | Security |
| Marketplace confidence | Marketplace | Trust & Safety |
| Pricing | Revenue | Product |
| Support friction | CS/Ops | Product |
| Internal ops gap | Ops | Engineering |
| Investor proof | Founder/Strategy | Product / CS |

No accepted roadmap candidate may be ownerless.

---

## 20. Codex Execution Rules

Codex may help implement roadmap changes only after a feedback item has:

1. Structured evidence object
2. Product surface mapping
3. Impacted skills list
4. Decision type
5. Owner
6. Acceptance criteria
7. Validation plan
8. Release gate impact

Codex must not implement raw feedback directly.

### Codex Stop Conditions

Codex must stop if:

- Feedback requests unsafe AI behavior.
- Feedback bypasses approval/governance rules.
- Feedback conflicts with `mvp-build-scope-lock.md`.
- Feedback requires backend capabilities not in API contract.
- Feedback changes pricing/entitlements without Revenue approval.
- Feedback changes trust/compliance claims without evidence.
- Feedback breaks RTL/LTR layout law.
- Feedback creates one-off customer customization without strategy approval.

---

## 21. Codex Work Unit Format

When Codex implements a roadmap item derived from pilot feedback, it must report:

```text
Work Unit: <name>
Source Feedback IDs: <ids>
Roadmap Candidate ID: <id>
Product Surface(s): <surfaces>
Impacted Skill(s): <skills>
Decision Type: <fix_now/improve_mvp/near_term/etc>
Implemented Files: <files>
UI States Covered: <loading/empty/error/blocked/success>
RTL/LTR Covered: <yes/no>
Tests Added: <tests>
Risks Remaining: <risks>
Validation Needed: <how to validate>
Release Gate Impact: <gate>
```

---

## 22. Feedback to Design System Loop

Some feedback should update design patterns rather than individual pages.

Examples:

- Users do not understand risk labels.
- Approval states are unclear.
- Empty states are weak.
- Cost indicators are confusing.
- Template trust labels need better visual hierarchy.
- RTL layout breaks dense tables.

These should update:

- `figma-design-system-brief.md`
- `frontend-components.md`
- `frontend-responsive.md`
- `frontend-forms-validation.md`
- `frontend-copywriting.md`
- `frontend-motion.md`

---

## 23. Feedback to Demo Narrative Loop

Some feedback should update how Ariyo is explained.

Examples:

- Customer thinks Ariyo is a chatbot.
- Customer thinks Marketplace is a template gallery.
- Customer does not understand Basic/Pro/Smart.
- Customer cannot see why AI Employees are accountable.

These should update:

- `mvp-demo-flow-script.md`
- `brand-messaging-system.md`
- `website-conversion-system.md`
- `ariyo-landing-page-mockup-spec.md`
- `ariyo-pricing-page-mockup-spec.md`
- `platform-investor-enterprise-narrative.md`

---

## 24. Feedback to Enterprise Readiness Loop

Some feedback reveals enterprise gaps.

Examples:

- Security team wants audit exports.
- Admin wants SCIM visibility.
- Procurement wants vendor evidence.
- Compliance wants data residency controls.
- Finance wants usage forecasts.

These should update:

- `enterprise-readiness.md`
- `enterprise-account-governance.md`
- `enterprise-sso-scim-directory-sync.md`
- `enterprise-workspace-policy-engine.md`
- `enterprise-approval-workflows.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`
- `production-release-gate-checklist.md`

---

## 25. Feedback to Marketplace Loop

Some feedback reveals Marketplace trust or usability gaps.

Examples:

- Customer cannot decide whether to install a template.
- Customer worries about permissions.
- Customer wants sandbox preview.
- Customer needs private catalog control.
- Customer wants template certification proof.

These should update:

- `ariyo-marketplace-homepage-mockup-spec.md`
- `ariyo-template-detail-mockup-spec.md`
- `marketplace-installation-entitlements.md`
- `marketplace-template-trust-labeling-system.md`
- `marketplace-template-certification-program.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-compliance-evidence-center.md`

---

## 26. Feedback to AI Employee Loop

Some feedback reveals AI Employee operating-model gaps.

Examples:

- Customer cannot define role properly.
- Customer does not trust behavior.
- Customer cannot see what AI Employee did.
- Customer wants safer launch controls.
- Customer wants version rollback.
- Customer wants memory visibility.

These should update:

- `ai-employee-architecture.md`
- `ariyo-ai-employee-builder-mockup-spec.md`
- `ariyo-ai-employee-detail-mockup-spec.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-memory-context.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-simulation-sandbox.md`
- `ai-agent-versioning-change-management.md`
- `ai-agent-observability-tracing.md`

---

## 27. Forbidden Feedback Handling Patterns

Ariyo must not:

- Build every customer request.
- Add features without evidence.
- Promise enterprise capabilities before readiness.
- Hide unresolved trust concerns.
- Convert pilot exceptions into default product behavior.
- Build custom workflows that cannot generalize.
- Use investor pressure to bypass release gates.
- Use customer quotes without permission.
- Use fake metrics as proof.
- Let Codex implement raw feedback without review.
- Treat RTL/LTR as cosmetic instead of structural.

---

## 28. RTL/LTR Feedback Rule

All pilot feedback involving layout, usability, navigation, text density, tables, forms, dashboards, marketplace cards, admin panels, or reports must be reviewed separately for RTL and LTR experiences.

### Non-Negotiable Layout Law

- Persian/Farsi and Arabic interfaces must be RTL and right-aligned across all UI elements.
- English and European LTR interfaces must be LTR and left-aligned across all UI elements.

This applies to:

- Feedback forms
- Dashboards
- Builder flows
- Marketplace pages
- Template detail pages
- Enterprise Admin
- Trust Center
- Customer Success Console
- Internal Ops Command Center
- Reports and exports
- Tables and filters
- Charts and legends
- Empty/error/loading states
- Notifications
- Modals and drawers

Feedback about “confusing layout” must specify whether it occurred in RTL or LTR.

---

## 29. Pilot Feedback Review Board

Ariyo should maintain a recurring Pilot Feedback Review Board with:

- Founder/Product Lead
- Engineering Lead
- Design Lead
- Customer Success Lead
- Security/Compliance representative
- Revenue/Sales representative
- AI Runtime representative
- Marketplace representative when relevant

The board decides:

- What becomes roadmap
- What becomes proof
- What becomes release blocker
- What is deferred
- What is rejected
- What needs more research

---

## 30. Standard Pilot Feedback Report

Each pilot cycle should produce a report with this structure:

```text
Pilot Feedback Report

Customer:
Pilot Stage:
Date Range:
Primary Use Case:
Pilot Success Criteria:

1. Executive Summary
2. Activation Signals
3. Value Signals
4. Trust/Governance Signals
5. Marketplace Signals
6. Pricing/Commercial Signals
7. Support/Ops Signals
8. Critical Feedback Items
9. High-Priority Roadmap Candidates
10. Deferred Requests
11. Rejected Requests
12. Customer Proof Generated
13. Release Gate Impact
14. Recommended Next Actions
15. Owner Assignments
```

---

## 31. Roadmap Update Rules

A roadmap update from pilot feedback must include:

- Evidence IDs
- Customer segment
- Product surface
- Skill impact
- Priority score
- Release gate impact
- Owner
- Acceptance criteria
- Validation plan

No roadmap item may be added with only a title.

---

## 32. Success Metrics

This system succeeds when:

- Pilot feedback is structured within 24 hours.
- Critical feedback has owner within 48 hours.
- Repeated feedback becomes roadmap evidence.
- Feature requests are not built without validation.
- Customer proof is captured responsibly.
- Release gates reflect pilot evidence.
- MVP scope remains controlled.
- Codex implementation follows approved roadmap candidates only.
- RTL/LTR issues are tracked as first-class implementation concerns.

---

## 33. Golden Rule

Ariyo does not use pilot feedback to build more features.

Ariyo uses pilot feedback to discover what must become clearer, safer, more valuable, more repeatable, more governable, more sellable, and more production-ready.

Feedback is not the roadmap.

Evidence-backed decisions are the roadmap.
