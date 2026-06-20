# Ariyo Fundraising Terms Readiness Checklist

## Core Contract

Ariyo Fundraising Terms Readiness Checklist is not legal advice, valuation advice, a negotiation script, or a term-sheet template.

It is the governed readiness system that tells Ariyo when the company is prepared to enter serious term-sheet conversations with investors, what evidence must be ready before pricing or terms are discussed, what negotiation guardrails must be defined, which risks must be resolved, which legal and diligence materials must be prepared, and which claims must be backed by proof.

Ariyo must not enter term-sheet negotiation because an investor is interested.

Ariyo enters term-sheet negotiation only when its narrative, evidence, data room, legal readiness, financial logic, use-of-funds plan, ownership model, investor pipeline, and decision guardrails are ready.

---

## 1. Purpose

This skill exists to protect Ariyo from weak fundraising execution during the most sensitive stage of the round: the transition from investor interest to investment terms.

The file helps founders, operators, advisors, finance leads, legal counsel, Codex, and AI-assisted builders organize readiness before conversations move into:

- valuation;
- round size;
- dilution;
- instrument type;
- investor rights;
- board rights;
- information rights;
- pro-rata rights;
- liquidation preferences;
- closing timeline;
- diligence scope;
- legal documents;
- investor commitments;
- use of funds;
- milestone promises;
- customer proof;
- enterprise-readiness proof;
- AI governance proof.

This checklist does not replace legal, tax, or financial counsel. It ensures Ariyo knows what to prepare and what not to improvise.

---

## 2. Required Input Skills

Codex and Ariyo operators must read these files before using this checklist:

1. `investor-fundraising-deck.md`
2. `platform-investor-enterprise-narrative.md`
3. `post-pilot-investor-proof-pack.md`
4. `investor-data-room-index.md`
5. `fundraising-outreach-sequence.md`
6. `investor-crm-pipeline-system.md`
7. `fundraising-weekly-update-template.md`
8. `production-readiness-gap-audit.md`
9. `production-release-gate-checklist.md`
10. `pilot-customer-onboarding-plan.md`
11. `pilot-feedback-to-roadmap-system.md`
12. `mvp-build-scope-lock.md`
13. `mvp-demo-flow-script.md`
14. `pricing-packaging-strategy.md`
15. `finance-accounting-controls.md`
16. `compliance-legal-risk.md`
17. `enterprise-readiness.md`
18. `data-governance-privacy.md`
19. `security-threat-model.md`
20. `codex-execution-master-prompt.md`

If these files are missing, stale, or contradictory, term-sheet readiness is blocked.

---

## 3. Readiness Levels

Ariyo must classify term-sheet readiness into one of five states.

### 3.1 Not Ready

Ariyo is not ready for terms when:

- the investor narrative is still changing daily;
- pilot proof is not structured;
- product scope is not locked;
- valuation logic is not prepared;
- round size is arbitrary;
- use of funds is vague;
- investor questions have no evidence map;
- legal materials are missing;
- data room is incomplete;
- founder decision boundaries are undefined.

Codex must report `NOT_READY_FOR_TERMS`.

### 3.2 Conversation Ready

Ariyo can discuss fundraising context but must not negotiate terms yet.

Required condition:

- pitch narrative is stable;
- demo is credible;
- investor pipeline is active;
- data room index exists;
- pilot proof is being collected;
- core objections are known.

### 3.3 Soft Terms Ready

Ariyo can discuss general range and structure with trusted investors or advisors.

Required condition:

- round-size logic exists;
- use-of-funds plan exists;
- valuation narrative exists;
- proof pack exists;
- legal checklist exists;
- decision owner is named.

### 3.4 Lead Investor Ready

Ariyo is ready to move a serious lead investor toward a term sheet.

Required condition:

- data room is ready;
- pilot/customer proof is packaged;
- financial model is coherent;
- legal counsel path is clear;
- objection responses are evidence-backed;
- founder guardrails are documented;
- closing process is mapped.

### 3.5 Term Sheet Ready

Ariyo is ready to review, compare, negotiate, and decide on terms.

Required condition:

- decision matrix is complete;
- investor fit is scored;
- dilution and ownership impact are understood;
- legal review path is ready;
- red-line boundaries are known;
- alternative investor options are tracked;
- board/advisor review is prepared.

---

## 4. Term Readiness Object

Codex must represent every term-sheet readiness review using this object:

```ts
type AriyoTermReadinessReview = {
  reviewId: string;
  date: string;
  roundName: string;
  targetRoundSize: string;
  targetInstrument: "SAFE" | "Convertible Note" | "Priced Equity" | "Undecided" | "Other";
  readinessLevel: "Not Ready" | "Conversation Ready" | "Soft Terms Ready" | "Lead Investor Ready" | "Term Sheet Ready";
  leadInvestorCandidate?: string;
  primaryEvidenceSources: string[];
  blockers: TermReadinessBlocker[];
  openQuestions: string[];
  legalReviewRequired: boolean;
  financeReviewRequired: boolean;
  founderDecisionRequired: boolean;
  nextActions: NextAction[];
};
```

---

## 5. Valuation Narrative Readiness

Ariyo must not present valuation as a wish. It must present a valuation narrative grounded in category, traction, execution, market size, proof, defensibility, and capital needs.

### 5.1 Required Valuation Narrative Inputs

Before valuation discussions, Ariyo must prepare:

- category definition: AI Employee Operating System;
- why this category matters now;
- why Ariyo is not a chatbot wrapper;
- why Ariyo is not merely workflow automation;
- enterprise governance advantage;
- marketplace expansion path;
- product proof;
- pilot proof;
- customer willingness signals;
- team capability;
- technical moat hypothesis;
- data/feedback loop advantage;
- enterprise readiness posture;
- AI cost control strategy;
- pricing/packaging logic;
- capital efficiency narrative;
- next milestone map.

### 5.2 Weak Valuation Signals

These weaken valuation readiness:

- no measurable customer proof;
- no specific buyer persona;
- no enterprise objection handling;
- no use-of-funds plan;
- no retention or activation model;
- no pricing logic;
- no governance differentiation;
- no marketplace expansion logic;
- no trust/security narrative;
- overclaiming AI autonomy;
- vague TAM-only argument.

### 5.3 Valuation Narrative Checklist

Ariyo must answer:

- Why is this a venture-scale company?
- Why now?
- Why this team?
- Why this product shape?
- Why does the market need AI Employees instead of AI tools?
- Why will customers trust Ariyo with operational work?
- Why can Ariyo expand from MVP into platform?
- Why can Ariyo become a marketplace, not just a SaaS product?
- Why is the current round enough to reach the next value inflection point?

---

## 6. Round Size Readiness

Ariyo must define the round size based on milestone delivery, not founder preference.

### 6.1 Required Round Size Inputs

The round size must connect to:

- runway target;
- team hiring plan;
- frontend/product completion;
- backend/API production readiness;
- AI runtime maturity;
- enterprise trust readiness;
- pilot customer onboarding;
- customer support capacity;
- compliance/security preparation;
- marketplace alpha launch;
- revenue milestone;
- fundraising milestone for the next round.

### 6.2 Round Size Logic Template

Ariyo should define:

```md
Target Round Size: [amount]
Target Runway: [months]
Primary Milestone: [milestone]
Secondary Milestones: [list]
Use of Funds Buckets: [list]
Next-Round Proof Required: [list]
Minimum Viable Raise: [amount]
Ideal Raise: [amount]
Over-Subscription Logic: [conditions]
```

### 6.3 Round Size Red Flags

Term readiness is blocked if:

- the round size does not map to a milestone;
- the runway target is unclear;
- the team cannot explain use of funds;
- the ask changes per investor;
- there is no minimum viable round;
- over-subscription has no plan;
- hiring plan is disconnected from product scope;
- enterprise/pilot commitments exceed capacity.

---

## 7. Use of Funds Readiness

Ariyo must prepare a use-of-funds plan that shows focus.

### 7.1 Recommended Use-of-Funds Categories

The plan may include:

- product engineering;
- backend/API production infrastructure;
- AI Employee runtime and evaluation;
- enterprise security and compliance;
- customer onboarding and success;
- marketplace development;
- sales and founder-led GTM;
- design/product experience;
- legal and finance readiness;
- cloud/model costs;
- pilot delivery;
- operational tooling.

### 7.2 Use-of-Funds Quality Bar

Each category must include:

- why it matters;
- what it funds;
- which milestone it unlocks;
- what evidence will prove success;
- which owner is responsible;
- what is explicitly not funded.

### 7.3 Codex Output Format

Codex must generate use-of-funds tables using this format:

```md
| Category | % Allocation | Purpose | Milestone Unlocked | Evidence of Success | Owner |
|---|---:|---|---|---|---|
```

---

## 8. Instrument Readiness

Ariyo must not select an investment instrument casually.

Possible paths include:

- SAFE;
- convertible note;
- priced equity round;
- strategic investment;
- revenue-based or non-dilutive capital;
- hybrid structure.

This file does not recommend a legal structure. It requires Ariyo to prepare decision criteria and consult counsel.

### 8.1 Instrument Decision Criteria

Ariyo must compare:

- speed;
- legal complexity;
- investor expectations;
- valuation signaling;
- dilution implications;
- governance rights;
- follow-on financing compatibility;
- founder control;
- country/legal jurisdiction fit;
- tax/administrative complexity;
- ability to close multiple investors.

### 8.2 Required Legal Counsel Gate

Before accepting or issuing any term sheet, Ariyo must have qualified legal review.

Codex must mark legal review as mandatory for:

- liquidation preference;
- board seats;
- veto rights;
- pro-rata rights;
- information rights;
- founder vesting;
- option pool expansion;
- anti-dilution clauses;
- MFN provisions;
- conversion mechanics;
- side letters;
- exclusivity;
- confidentiality;
- jurisdiction-specific securities rules.

---

## 9. Investor Fit Readiness

A good term sheet from a bad-fit investor can damage Ariyo.

### 9.1 Investor Fit Score

Ariyo should score each serious investor from 1 to 5 on:

- AI thesis fit;
- SaaS/platform experience;
- enterprise sales understanding;
- marketplace understanding;
- governance/security tolerance;
- region/network relevance;
- founder support quality;
- follow-on capacity;
- speed and clarity;
- reputation;
- decision transparency;
- term fairness;
- strategic value.

### 9.2 Investor Fit Object

```ts
type InvestorFitReview = {
  investorName: string;
  firmName?: string;
  fitScore: number;
  thesisFit: number;
  enterpriseFit: number;
  marketplaceFit: number;
  aiPlatformFit: number;
  followOnCapacity: number;
  reputationRisk: "Low" | "Medium" | "High";
  strategicValue: string[];
  concerns: string[];
  recommendedPath: "Proceed" | "Proceed Carefully" | "Nurture" | "Pause" | "Reject";
};
```

---

## 10. Diligence Readiness

Ariyo must prepare diligence before investors request it.

### 10.1 Product Diligence

Prepare:

- MVP scope lock;
- product surface map;
- mockup implementation roadmap;
- demo flow script;
- screenshots/prototypes;
- roadmap;
- product requirements;
- production readiness audit;
- release gate checklist.

### 10.2 Technical Diligence

Prepare:

- backend architecture;
- API contracts;
- domain model;
- security threat model;
- data governance;
- AI agent permissions runtime;
- AI memory/context model;
- observability/tracing;
- reliability/SLA plan;
- model provider strategy;
- AI cost control.

### 10.3 Customer Diligence

Prepare:

- pilot customer onboarding plan;
- pilot feedback system;
- post-pilot proof pack;
- customer success playbooks;
- enterprise customer health scoring;
- renewal/expansion system;
- case proof format.

### 10.4 Commercial Diligence

Prepare:

- pricing/packaging strategy;
- sales demo playbook;
- launch go-to-market;
- revenue operations system;
- sales CRM pipeline;
- website conversion system;
- conversion experimentation system;
- content marketing engine.

### 10.5 Legal and Compliance Diligence

Prepare:

- compliance/legal risk;
- legal pages/policy system;
- trust center/public status;
- data governance/privacy;
- marketplace regulatory compliance;
- marketplace compliance evidence center;
- enterprise audit reports;
- security threat model.

---

## 11. Term Sheet Issue Matrix

Ariyo must prepare a term issue matrix before reviewing any term sheet.

```md
| Issue | Acceptable Range | Caution Zone | Red Line | Counsel Required | Founder Decision Required |
|---|---|---|---|---|---|
| Valuation / Cap | TBD | TBD | TBD | Yes | Yes |
| Round Size | TBD | TBD | TBD | Maybe | Yes |
| Instrument | TBD | TBD | TBD | Yes | Yes |
| Board Rights | TBD | TBD | TBD | Yes | Yes |
| Information Rights | TBD | TBD | TBD | Yes | Yes |
| Pro-Rata Rights | TBD | TBD | TBD | Yes | Yes |
| Liquidation Preference | TBD | TBD | TBD | Yes | Yes |
| Anti-Dilution | TBD | TBD | TBD | Yes | Yes |
| Founder Vesting | TBD | TBD | TBD | Yes | Yes |
| Option Pool | TBD | TBD | TBD | Yes | Yes |
| Exclusivity | TBD | TBD | TBD | Yes | Yes |
```

Codex must never fill legal red lines as final advice. Codex may structure the matrix and flag items for counsel review.

---

## 12. Negotiation Guardrails

Ariyo must define guardrails before negotiating.

### 12.1 Founder Guardrails

Founders must align on:

- minimum acceptable outcome;
- ideal outcome;
- walk-away conditions;
- investor fit requirements;
- dilution tolerance;
- governance boundaries;
- board/control boundaries;
- timeline tolerance;
- confidentiality boundaries;
- whether to create urgency with other investors;
- what cannot be promised.

### 12.2 Promise Guardrails

Ariyo must not promise:

- guaranteed AI autonomy;
- guaranteed enterprise compliance before certification/evidence exists;
- guaranteed pilot conversion;
- guaranteed ROI without evidence;
- model-provider permanence;
- unsupported security certifications;
- marketplace scale before marketplace proof;
- revenue targets not connected to pipeline evidence;
- production readiness before release gates pass.

### 12.3 Evidence Guardrails

Any claim must map to one of:

- pilot data;
- product demo;
- customer quote with permission;
- usage metric;
- technical artifact;
- security/compliance document;
- roadmap milestone;
- pipeline data;
- financial model;
- partner proof;
- marketplace proof.

---

## 13. Objection Readiness

Ariyo must prepare investor objection responses before terms.

### 13.1 Common Investor Objections

Prepare evidence-backed responses for:

- Is this just a chatbot wrapper?
- Why will enterprises trust AI Employees?
- How do you control AI cost?
- What is the moat?
- Why marketplace now?
- How do you avoid prompt-library commoditization?
- How do you handle compliance?
- How do you ensure reliability?
- What is your data strategy?
- What is the path to revenue?
- What is the path to expansion?
- Why is your team the right team?
- What happens if model providers change pricing or quality?
- How do you prevent unsafe autonomy?
- What is the real wedge?

### 13.2 Objection Response Format

```md
Objection: [investor concern]
Short Answer: [clear answer]
Evidence: [proof source]
Product Surface: [demo screen]
Data Room Artifact: [document]
Risk Acknowledgment: [honest limitation]
Next Milestone: [what will improve]
```

---

## 14. Legal Readiness Checklist

Ariyo must prepare:

- corporate documents;
- cap table;
- founder agreements;
- IP assignment status;
- employment/contractor documentation;
- option/equity plan if applicable;
- customer agreements;
- pilot agreements;
- privacy policy;
- terms of service;
- data processing terms if applicable;
- security policy overview;
- open-source dependency review;
- model/provider dependency disclosures;
- financial records;
- board/advisor approvals if needed.

Codex must mark incomplete legal materials as `LEGAL_READINESS_GAP`.

---

## 15. Finance Readiness Checklist

Ariyo must prepare:

- current cash position;
- burn rate;
- runway;
- forecast;
- hiring plan;
- cloud/model cost assumptions;
- expected pilot revenue;
- expected subscription pricing;
- marketplace revenue assumptions;
- gross margin assumptions;
- enterprise sales cycle assumptions;
- use-of-funds plan;
- post-raise runway;
- milestone budget;
- scenario model.

Financial assumptions must be labeled as assumptions unless evidence-backed.

---

## 16. Data Room Readiness Checklist

Before term-sheet diligence, the data room must include:

- pitch deck;
- investor narrative;
- data room index;
- product demo script;
- demo proof pack;
- pilot proof pack;
- product roadmap;
- MVP scope lock;
- production readiness gap audit;
- release gate checklist;
- backend/API contract review;
- security/threat model;
- privacy/data governance;
- compliance/legal risk;
- financial model;
- use-of-funds plan;
- customer/pilot evidence;
- fundraising pipeline summary;
- weekly updates archive;
- term readiness checklist.

---

## 17. Board / Advisor Review Gate

Before responding to a term sheet, Ariyo should prepare an internal review packet:

- term summary;
- investor fit review;
- issue matrix;
- dilution impact;
- governance impact;
- legal risk notes;
- founder concerns;
- counsel questions;
- alternatives;
- recommended response;
- decision deadline.

---

## 18. Codex Execution Rules

Codex may:

- create readiness checklists;
- structure term issue matrices;
- generate investor fit scoring objects;
- organize data room requirements;
- flag missing evidence;
- create founder decision packets;
- draft non-binding internal summaries;
- produce objection response tables;
- prepare counsel question lists;
- map claims to evidence.

Codex must not:

- provide final legal advice;
- recommend accepting a specific term as legally safe;
- calculate legally binding ownership outcomes without verified cap table inputs;
- invent valuation benchmarks;
- invent investor commitments;
- imply securities compliance;
- generate documents that look like executable legal documents;
- remove counsel review requirements.

---

## 19. Term Readiness Stop Rules

Codex must stop and report a blocker if:

- the round size is undefined;
- use of funds is vague;
- valuation narrative is unsupported;
- investor fit is unknown;
- data room is incomplete;
- legal materials are missing;
- pilot proof is unavailable but claimed;
- customer quotes lack permission;
- compliance claims lack evidence;
- founders have not aligned on guardrails;
- term issues require counsel;
- the investor requests exclusivity without founder/legal review;
- a term sheet requires decision under pressure.

---

## 20. Global RTL/LTR Layout Law

Persian/Farsi and Arabic interfaces must be RTL and right-aligned across all UI elements.

English and European LTR interfaces must be LTR and left-aligned across all UI elements.

This rule applies to:

- fundraising dashboards;
- investor CRM screens;
- weekly update interfaces;
- data room interfaces;
- term readiness checklists;
- founder review packets;
- investor-facing portals;
- internal fundraising reports;
- Codex-generated UI surfaces;
- printable reports;
- email previews;
- tables and financial views;
- mobile and desktop layouts.

If any layout instruction conflicts with this law, the RTL/LTR law wins.

---

## 21. Term Readiness Report Format

Codex must output:

```md
# Ariyo Term Readiness Report

## Readiness Level
[Not Ready / Conversation Ready / Soft Terms Ready / Lead Investor Ready / Term Sheet Ready]

## Current Round Assumption
- Target round size:
- Instrument under consideration:
- Target runway:
- Primary milestone:

## Ready Evidence
- [evidence item]

## Missing Evidence
- [gap]

## Legal Review Required
- [items]

## Finance Review Required
- [items]

## Founder Decisions Required
- [decisions]

## Investor Fit Notes
- [notes]

## Red Flags
- [red flags]

## Next Actions
| Owner | Action | Deadline | Evidence Needed |
|---|---|---|---|
```

---

## 22. Definition of Done

This skill is satisfied when Ariyo has:

- a readiness state;
- a round size logic;
- a use-of-funds plan;
- a valuation narrative;
- a data room readiness check;
- a legal readiness check;
- a finance readiness check;
- an investor fit review method;
- a term issue matrix;
- negotiation guardrails;
- objection responses;
- founder decision packet format;
- Codex stop rules;
- RTL/LTR compliance.

---

## 23. Golden Rule

Do not negotiate terms from excitement.

Do not negotiate terms from fear.

Do not negotiate terms from scattered documents.

Negotiate only from evidence, readiness, alignment, counsel review, and strategic leverage.
