# Ariyo Investor CRM Pipeline System

## Core Contract

Ariyo Investor CRM Pipeline System is not a spreadsheet, contact list, fundraising memory aid, or generic CRM workflow.

It is the governed investor pipeline operating system that helps Ariyo track, qualify, sequence, brief, meet, follow up with, evidence-share, diligence-manage, and decision-close investors using a disciplined stage model connected to Ariyo's Fundraising Outreach Sequence, Investor Data Room Index, Post-Pilot Investor Proof Pack, MVP Demo Flow Script, and enterprise readiness narrative.

Ariyo must not lose fundraising momentum because investor conversations, objections, evidence, next actions, or decision status are scattered across messages, memory, spreadsheets, and founder notes.

## Required Inputs

Codex and operators must read these files before implementing or operating this system:

1. `fundraising-outreach-sequence.md`
2. `investor-data-room-index.md`
3. `post-pilot-investor-proof-pack.md`
4. `investor-fundraising-deck.md`
5. `platform-investor-enterprise-narrative.md`
6. `mvp-demo-flow-script.md`
7. `production-release-gate-checklist.md`
8. `pilot-feedback-to-roadmap-system.md`
9. `revenue-operations-system.md`
10. `sales-crm-pipeline-system.md`
11. `enterprise-readiness.md`
12. `data-governance-privacy.md`
13. `legal-pages-policy-system.md`
14. `codex-execution-master-prompt.md`

## Purpose

This skill defines how Ariyo should manage investor pipeline work from first target identification to commitment, rejection, diligence, or nurture.

It gives Ariyo a repeatable system for:

- identifying investor fit,
- tracking investor stage,
- assigning owners,
- scheduling next actions,
- recording objections,
- mapping evidence to investor concerns,
- deciding when to share the deck,
- deciding when to share the data room,
- preparing meetings,
- summarizing meeting outcomes,
- managing diligence,
- tracking partner-level dynamics,
- avoiding over-sharing,
- maintaining follow-up discipline,
- converting pilot/customer proof into fundraising proof,
- producing weekly fundraising pipeline reports.

## Non-Negotiable Principle

Investor CRM is not about storing contacts.

Investor CRM is about maintaining a sequenced evidence relationship with every investor.

Every investor record must answer:

- Why is this investor relevant to Ariyo?
- What have they seen?
- What do they believe?
- What do they doubt?
- What evidence have we shared?
- What evidence should we not share yet?
- What is the next action?
- Who owns it?
- What decision are we trying to obtain?
- What would move this investor forward?

## Investor Object

Every investor record must contain the following fields.

```ts
type InvestorRecord = {
  id: string;
  firmName: string;
  partnerName: string;
  role: 'partner' | 'principal' | 'associate' | 'angel' | 'operator' | 'strategic' | 'family-office' | 'corporate-venture';
  geography: string;
  fundStageFit: 'pre-seed' | 'seed' | 'series-a' | 'growth' | 'strategic' | 'unknown';
  categoryFit: InvestorCategoryFit;
  thesisFitScore: number;
  relationshipSource: RelationshipSource;
  pipelineStage: InvestorPipelineStage;
  owner: string;
  lastInteractionAt?: string;
  nextAction: NextAction;
  nextActionDueAt?: string;
  evidenceShared: EvidenceShared[];
  objections: InvestorObjection[];
  diligenceStatus?: DiligenceStatus;
  decisionStatus: InvestorDecisionStatus;
  notes: string[];
  dataRoomAccess: DataRoomAccessStatus;
  confidentialityLevel: ConfidentialityLevel;
};
```

## Investor Category Fit

Ariyo should prioritize investors who understand at least one of these theses:

1. AI workforce / AI employee platforms
2. Enterprise SaaS
3. Workflow automation
4. Vertical AI
5. AI infrastructure and tooling
6. Marketplace / ecosystem platforms
7. Devtools / no-code / low-code systems
8. Trust, governance, compliance, and enterprise AI adoption
9. MENA, emerging-market SaaS, or regional enterprise digitization
10. Future-of-work platforms

### Fit Classification

| Fit | Meaning | Action |
|---|---|---|
| A+ | Strong thesis, stage, geography, and network fit | Prioritize warm intro and founder-led outreach |
| A | Strong thesis or stage fit with credible relevance | Include in active outreach |
| B | Possible relevance but needs education | Nurture with proof-led updates |
| C | Weak category or stage fit | Do not spend founder time unless strategic |
| D | Misaligned investor | Exclude |

## Relationship Source

Track the origin of every investor relationship.

```ts
type RelationshipSource =
  | 'warm-intro'
  | 'founder-direct'
  | 'inbound'
  | 'event'
  | 'customer-intro'
  | 'advisor-intro'
  | 'operator-intro'
  | 'portfolio-founder-intro'
  | 'previous-relationship'
  | 'cold-outreach'
  | 'strategic-partner-intro';
```

## Pipeline Stages

Codex and operators must use these exact investor stages.

```ts
type InvestorPipelineStage =
  | 'target-identified'
  | 'qualified'
  | 'intro-needed'
  | 'intro-requested'
  | 'intro-sent'
  | 'first-touch-sent'
  | 'replied'
  | 'meeting-scheduled'
  | 'first-meeting-completed'
  | 'follow-up-sent'
  | 'second-meeting'
  | 'demo-shared'
  | 'data-room-invited'
  | 'diligence-active'
  | 'partner-meeting'
  | 'term-discussion'
  | 'soft-commit'
  | 'committed'
  | 'passed'
  | 'nurture'
  | 'closed-lost'
  | 'closed-won';
```

### Stage Definitions

#### 1. Target Identified

Investor is listed but not yet qualified.

Required fields:

- firm name,
- investor name,
- website or source,
- basic thesis note,
- possible intro path.

Codex must not move an investor out of this stage without a fit note.

#### 2. Qualified

Investor has credible fit.

Required fields:

- stage fit,
- thesis fit,
- geography fit,
- check size estimate if known,
- reason Ariyo is relevant.

#### 3. Intro Needed

Investor is qualified, but no outreach has been sent.

Required fields:

- best intro path,
- intro owner,
- intro request draft status.

#### 4. Intro Requested

A warm intro has been requested from a connector.

Required fields:

- connector name,
- request date,
- intro angle,
- follow-up date.

#### 5. Intro Sent

Connector sent the intro or founder sent the first warm intro response.

Required fields:

- intro message,
- investor response status,
- next action.

#### 6. First Touch Sent

Cold or direct outreach was sent.

Required fields:

- message version,
- claim used,
- proof used,
- follow-up cadence.

#### 7. Replied

Investor replied.

Required fields:

- sentiment,
- requested material,
- objection if any,
- meeting recommendation.

#### 8. Meeting Scheduled

A meeting is scheduled.

Required fields:

- date,
- attendees,
- meeting objective,
- materials to prepare,
- demo mode.

#### 9. First Meeting Completed

First meeting happened.

Required fields:

- meeting notes,
- investor questions,
- objections,
- follow-up evidence,
- next meeting or pass/nurture decision.

#### 10. Follow-Up Sent

Follow-up was sent after meeting.

Required fields:

- summary,
- evidence shared,
- next action,
- due date.

#### 11. Second Meeting

Investor asked for deeper discussion.

Required fields:

- discussion theme,
- requested proof,
- partner/team involvement,
- required prep.

#### 12. Demo Shared

Ariyo demo or recording was shown/shared.

Required fields:

- demo version,
- surfaces shown,
- demo data version,
- feedback,
- objections.

#### 13. Data Room Invited

Investor received data room access.

Required fields:

- access level,
- documents enabled,
- redaction level,
- expiry date,
- owner.

#### 14. Diligence Active

Investor is reviewing proof, legal, product, financial, technical, or customer materials.

Required fields:

- diligence questions,
- evidence requests,
- owner for each answer,
- response SLA,
- open risks.

#### 15. Partner Meeting

Investor is moving toward internal partner discussion.

Required fields:

- meeting prep pack,
- internal champion,
- likely objections,
- decision date.

#### 16. Term Discussion

Terms are being discussed.

Required fields:

- amount,
- valuation range if discussed,
- instrument,
- conditions,
- legal owner.

#### 17. Soft Commit

Investor verbally indicates intent.

Required fields:

- amount,
- condition,
- expected close date,
- syndicate dependency.

#### 18. Committed

Investor formally commits.

Required fields:

- amount,
- entity,
- legal details,
- close process.

#### 19. Passed

Investor clearly passed.

Required fields:

- reason,
- objection category,
- future nurture status,
- whether proof gap should be added to roadmap.

#### 20. Nurture

Investor is not active now but should receive periodic updates.

Required fields:

- nurture reason,
- update cadence,
- next proof milestone.

#### 21. Closed Lost

Investor is no longer relevant for this round.

Required fields:

- reason,
- source of loss,
- lessons learned.

#### 22. Closed Won

Investor completed investment.

Required fields:

- amount,
- close date,
- post-close communication owner.

## Decision Status

```ts
type InvestorDecisionStatus =
  | 'unknown'
  | 'interested'
  | 'waiting-for-proof'
  | 'waiting-for-partner-review'
  | 'waiting-for-customer-proof'
  | 'waiting-for-technical-diligence'
  | 'waiting-for-terms'
  | 'committed'
  | 'passed'
  | 'nurture';
```

## Next Action Object

Every active investor must have a next action.

```ts
type NextAction = {
  action: string;
  owner: string;
  dueDate: string;
  status: 'open' | 'blocked' | 'done' | 'overdue';
  blocker?: string;
  requiredEvidence?: string[];
};
```

If there is no next action, the investor is not active and must be moved to `nurture`, `passed`, `closed-lost`, or `closed-won`.

## Evidence Shared Object

```ts
type EvidenceShared = {
  evidenceId: string;
  title: string;
  type:
    | 'deck'
    | 'demo'
    | 'data-room-folder'
    | 'pilot-proof'
    | 'case-study'
    | 'metrics-snapshot'
    | 'architecture-note'
    | 'trust-document'
    | 'financial-model'
    | 'roadmap'
    | 'customer-reference'
    | 'founder-note';
  sharedAt: string;
  accessLevel: 'public' | 'limited' | 'confidential' | 'redacted' | 'data-room';
  sharedBy: string;
  reason: string;
  followUpRequired: boolean;
};
```

## Data Room Access Status

```ts
type DataRoomAccessStatus =
  | 'not-shared'
  | 'teaser-only'
  | 'deck-only'
  | 'limited-data-room'
  | 'full-data-room'
  | 'revoked'
  | 'expired';
```

Ariyo must not give full data room access before investor fit, intent, and diligence seriousness are established.

## Confidentiality Levels

```ts
type ConfidentialityLevel =
  | 'public-only'
  | 'light-confidential'
  | 'standard-confidential'
  | 'high-confidential'
  | 'legal-required';
```

Use `legal-required` for sensitive customer proof, non-public revenue data, legal documents, unreleased architecture, or personally identifiable customer details.

## Objection Tracking

Every objection must be classified.

```ts
type InvestorObjection = {
  id: string;
  category:
    | 'market-size'
    | 'timing'
    | 'competition'
    | 'traction'
    | 'customer-proof'
    | 'technical-risk'
    | 'ai-risk'
    | 'enterprise-sales-risk'
    | 'marketplace-risk'
    | 'regulatory-risk'
    | 'team-risk'
    | 'pricing-risk'
    | 'funding-stage-fit'
    | 'geography-fit'
    | 'valuation'
    | 'unclear-positioning'
    | 'other';
  exactInvestorLanguage?: string;
  severity: 'low' | 'medium' | 'high' | 'deal-blocking';
  responseStatus: 'unanswered' | 'answered' | 'needs-proof' | 'needs-product-work' | 'accepted-risk';
  evidenceNeeded?: string[];
  roadmapImplication?: string;
};
```

## Standard Investor CRM Views

The CRM system must support these views.

### 1. Active Pipeline View

Columns:

- investor,
- firm,
- stage,
- fit score,
- owner,
- last touch,
- next action,
- due date,
- decision status,
- evidence shared.

### 2. Next Action View

Sorted by due date.

Must highlight:

- overdue actions,
- blocked actions,
- investor awaiting response,
- investor waiting for proof,
- investor in diligence.

### 3. Diligence View

Focused on investors with data room or active diligence.

Columns:

- investor,
- diligence owner,
- open questions,
- evidence requests,
- risk level,
- due dates,
- next meeting.

### 4. Objection View

Groups investors by objection category.

Purpose:

- identify repeated investor concerns,
- convert repeated objections into roadmap/proof work,
- update the fundraising narrative.

### 5. Investor Fit View

Shows A+, A, B, C, D fit groups.

Purpose:

- avoid wasting time on low-fit investors,
- prioritize warm intros,
- sequence outreach.

### 6. Data Room Access View

Tracks who has access to what.

Must include:

- access level,
- shared folders,
- expiry,
- owner,
- revocation status.

### 7. Weekly Fundraising Review View

Must summarize:

- new investors added,
- meetings scheduled,
- meetings completed,
- investors advanced,
- investors passed,
- diligence active,
- top objections,
- next week priorities,
- proof gaps.

## Investor Fit Scoring

Ariyo should use a 100-point investor fit score.

| Dimension | Points |
|---|---:|
| Stage fit | 20 |
| Thesis fit | 25 |
| Enterprise SaaS/AI understanding | 15 |
| Marketplace/ecosystem understanding | 10 |
| Geography/network value | 10 |
| Warm intro strength | 10 |
| Check size fit | 5 |
| Strategic value | 5 |

### Score Bands

| Score | Band | Action |
|---:|---|---|
| 85-100 | A+ | High-priority outreach |
| 70-84 | A | Active outreach |
| 55-69 | B | Nurture or selective outreach |
| 40-54 | C | Low priority |
| <40 | D | Exclude |

## Meeting Preparation Protocol

Before every investor meeting, Ariyo must prepare:

1. investor thesis summary,
2. partner profile,
3. portfolio relevance,
4. likely objections,
5. meeting objective,
6. demo mode,
7. proof to mention but not share yet,
8. proof to share if asked,
9. data room access rule,
10. next-action hypothesis.

## Meeting Note Template

Every meeting note must include:

```md
# Investor Meeting Note

Investor:
Firm:
Date:
Ariyo attendees:
Investor attendees:
Pipeline stage before meeting:
Pipeline stage after meeting:

## Meeting Objective

## What We Presented

## Investor Questions

## Objections / Concerns

## Positive Signals

## Negative Signals

## Evidence Requested

## Materials Shared

## Next Action
Owner:
Due date:

## Decision Status

## Roadmap / Proof Implications
```

## Follow-Up Protocol

Follow-up must be sent within 24 hours after any meaningful meeting.

A follow-up must include:

- concise thank-you,
- one-line Ariyo framing,
- summary of what was discussed,
- promised material,
- next step,
- no unnecessary over-sharing,
- data room link only if stage permits.

## Data Room Timing Rules

Do not share the full data room too early.

### Allowed by Stage

| Stage | Allowed Material |
|---|---|
| Target / Qualified | No material or public website only |
| Intro / First Touch | One-liner, short teaser, deck if appropriate |
| Meeting Scheduled | Deck and demo agenda |
| First Meeting Completed | Deck, selected proof, demo recording if useful |
| Second Meeting | Limited data room or selected proof pack |
| Diligence Active | Full or structured data room |
| Partner Meeting | Investor-ready proof pack |
| Term Discussion | Legal/financial materials as appropriate |

## Investor Objection Response Library

### Traction Objection

Response pattern:

- show pilot evidence,
- show activation metrics,
- show customer learning velocity,
- show roadmap conversion from feedback,
- avoid claiming scale if scale is not proven.

### Market Objection

Response pattern:

- explain AI Employee Operating System category,
- connect to enterprise AI adoption pressure,
- show marketplace expansion path,
- show international/localization advantage if relevant.

### Technical Risk Objection

Response pattern:

- show architecture map,
- show mock-to-production API contract discipline,
- show permissions runtime,
- show observability/tracing,
- show production readiness gap audit.

### Enterprise Risk Objection

Response pattern:

- show enterprise admin mock/spec,
- show SSO/SCIM and governance roadmap,
- show trust center,
- show approval workflows,
- show customer success operating model.

### AI Safety Objection

Response pattern:

- show AI safety evaluation,
- show human review governance,
- show permission runtime,
- show simulation sandbox,
- show incident response system.

### Marketplace Risk Objection

Response pattern:

- show template review governance,
- show trust labels,
- show private catalog controls,
- show certification program,
- show marketplace quality ranking.

## Fundraising Weekly Review Format

```md
# Ariyo Fundraising Weekly Review

Week:
Owner:

## Pipeline Summary
- Total active investors:
- A+ / A investors:
- Meetings completed:
- Meetings scheduled:
- Diligence active:
- Soft commits:
- Passes:

## Stage Movement

## Top Investor Signals

## Top Objections

## Evidence Shared

## Proof Gaps

## Data Room Activity

## Next Week Priorities

## Decisions Needed
```

## Codex Implementation Rules

If Codex implements this system in the product, it must:

1. create a structured investor object model,
2. create investor pipeline stage constants,
3. create investor fit scoring utilities,
4. create investor views,
5. create meeting note templates,
6. create objection tracking,
7. create evidence tracking,
8. create data room access tracking,
9. create next-action reminders,
10. avoid building generic CRM fields without Ariyo fundraising meaning.

## Suggested Product Surface

If this becomes an internal Ariyo admin surface, it should include:

- Investor Pipeline Board
- Investor List
- Investor Detail Page
- Meeting Notes
- Evidence Shared Timeline
- Objection Dashboard
- Data Room Access Tracker
- Weekly Fundraising Review
- Next Action Queue
- Diligence Tracker

## Investor Detail Page Requirements

A single investor detail page must show:

- partner profile,
- firm thesis,
- stage,
- fit score,
- owner,
- next action,
- interaction timeline,
- meetings,
- objections,
- evidence shared,
- data room status,
- decision status,
- notes,
- related customer/pilot proof,
- required follow-up.

## Analytics Events

If implemented digitally, track:

- `investor_record_created`
- `investor_stage_changed`
- `investor_next_action_added`
- `investor_next_action_completed`
- `investor_meeting_logged`
- `investor_objection_added`
- `investor_evidence_shared`
- `investor_data_room_access_granted`
- `investor_data_room_access_revoked`
- `investor_decision_status_changed`
- `fundraising_weekly_review_generated`

## Privacy and Confidentiality Rules

Ariyo must not expose:

- investor private notes to unauthorized users,
- customer names without permission,
- pilot evidence that has not been approved for investor use,
- raw customer data,
- sensitive financial details outside authorized access levels,
- legal materials before appropriate diligence stage.

## RTL/LTR Layout Law

Persian/Farsi and Arabic investor CRM interfaces must be RTL and right-aligned across all UI elements.

English and European LTR investor CRM interfaces must be LTR and left-aligned across all UI elements.

This rule applies to:

- investor pipeline boards,
- investor detail pages,
- meeting notes,
- objection dashboards,
- data room access tables,
- weekly review reports,
- follow-up templates,
- email preview surfaces,
- dashboards,
- filters,
- forms,
- modals,
- empty states,
- loading states,
- error states.

## Forbidden Patterns

Codex must not:

- create a generic CRM without Ariyo-specific evidence tracking,
- treat investor contacts like sales leads,
- omit next action ownership,
- omit data room access state,
- omit objection classification,
- omit evidence shared history,
- share full data room access too early,
- mix customer proof and investor proof without permission levels,
- build fundraising dashboards based only on vanity counts,
- ignore RTL/LTR behavior,
- execute investor outreach without owner approval.

## Definition of Done

This system is ready when:

- every investor has a stage,
- every active investor has a next action,
- every next action has an owner,
- every objection is classified,
- every shared evidence item is tracked,
- data room access is visible and revocable,
- weekly fundraising review can be generated,
- investor fit scoring is clear,
- founder time is focused on highest-fit investors,
- repeated objections feed back into roadmap/proof work,
- privacy and permission rules are respected,
- RTL/LTR rules are implemented.

## Golden Rule

Ariyo fundraising is not a volume game.

It is a proof-sequencing game.

The investor CRM must help Ariyo know exactly which proof each investor needs next, who owns the next move, and what decision the relationship is moving toward.
