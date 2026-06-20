# Ariyo Post-Pilot Investor Proof Pack

## Core Contract

Ariyo Post-Pilot Investor Proof Pack is not a vanity metrics deck, sales one-pager, founder update, or collection of positive customer quotes.

It is the governed proof system that converts pilot customer outcomes, usage data, operational evidence, feedback, blockers, improvements, renewals, expansion signals, enterprise objections, and customer success learnings into a credible investor, enterprise buyer, and sales-ready evidence package.

Ariyo must not claim traction without evidence.
Ariyo must not claim enterprise readiness without operational proof.
Ariyo must not claim AI Employee value without measured outcomes.

If a pilot creates no proof, the pilot is incomplete.

---

## 1. Purpose

This skill defines how Ariyo turns completed pilot activity into a structured proof pack for:

- investor conversations,
- enterprise sales cycles,
- customer case studies,
- founder updates,
- fundraising decks,
- board/advisor updates,
- sales enablement,
- product roadmap justification,
- launch readiness decisions,
- customer success learning,
- enterprise procurement evidence.

This file is used after:

1. `pilot-customer-onboarding-plan.md`
2. `pilot-feedback-to-roadmap-system.md`
3. `production-readiness-gap-audit.md`
4. `production-release-gate-checklist.md`
5. `mvp-demo-flow-script.md`
6. `demo-data-seed-pack.md`
7. `frontend-implementation-sprint-plan.md`
8. `codex-execution-master-prompt.md`

---

## 2. Proof Pack Operating Rule

The proof pack must only include evidence that is:

- observed,
- measured,
- attributable,
- timestamped,
- customer-linked,
- reproducible,
- permission-safe,
- anonymized when required,
- separated from founder opinion.

Do not include:

- fake logos,
- unsupported revenue claims,
- inflated usage numbers,
- unverifiable ROI claims,
- AI-generated testimonials presented as real,
- customer quotes without permission,
- screenshots with sensitive data,
- ambiguous “users loved it” claims,
- investor-facing claims that product cannot demonstrate.

---

## 3. Proof Pack Audience Modes

### 3.1 Investor Mode

Goal: prove Ariyo is becoming a fundable operating system category.

Investor proof must answer:

- Why does the market need AI Employees?
- Why is Ariyo more than a chatbot or automation tool?
- What evidence shows customer pull?
- What evidence shows business value?
- What evidence shows enterprise seriousness?
- What evidence shows repeatability?
- What evidence shows expansion potential?
- What evidence shows marketplace leverage?
- What risks were discovered and reduced?

### 3.2 Enterprise Buyer Mode

Goal: prove Ariyo can be evaluated, governed, and piloted safely.

Enterprise proof must answer:

- Can Ariyo operate in a governed environment?
- What controls exist?
- How is AI Employee work audited?
- What data does Ariyo access?
- How are approvals handled?
- How are incidents handled?
- How are outcomes measured?
- How does Ariyo reduce operational burden?
- What support process exists?

### 3.3 Sales Mode

Goal: help the sales team convert similar customers.

Sales proof must answer:

- Which pain points resonated?
- Which demo moments converted interest?
- Which objections appeared repeatedly?
- Which proof assets reduced skepticism?
- Which use cases were easiest to sell?
- Which buyer personas had strongest urgency?
- Which pricing/packaging assumptions were validated?

### 3.4 Product Mode

Goal: convert evidence into roadmap and release gates.

Product proof must answer:

- What must be built next?
- What should be deferred?
- What confused users?
- What created trust?
- What blocked activation?
- What outcomes mattered most?
- What was demo-only but must become real?
- What was assumed valuable but not used?

---

## 4. Required Proof Objects

Each proof item must use this object structure:

```ts
type AriyoPilotProof = {
  id: string
  pilotAccountId: string
  accountSegment: 'SMB' | 'mid_market' | 'enterprise' | 'internal_demo' | 'partner_led'
  proofType:
    | 'business_outcome'
    | 'usage_signal'
    | 'activation_signal'
    | 'retention_signal'
    | 'expansion_signal'
    | 'governance_signal'
    | 'marketplace_signal'
    | 'support_signal'
    | 'security_signal'
    | 'objection_resolved'
    | 'roadmap_signal'
  claim: string
  evidence: string
  metric?: string
  baseline?: string
  measuredValue?: string
  timeWindow?: string
  source:
    | 'product_analytics'
    | 'customer_interview'
    | 'support_ticket'
    | 'pilot_review'
    | 'workflow_run'
    | 'audit_log'
    | 'cs_note'
    | 'sales_note'
    | 'admin_action'
  permissionStatus: 'approved_public' | 'approved_anonymous' | 'internal_only' | 'not_approved'
  confidence: 'low' | 'medium' | 'high'
  riskNotes?: string
  screenshotAllowed: boolean
  owner: string
  createdAt: string
}
```

Codex must not invent proof objects.
Codex may render proof cards only when seeded or explicitly provided.

---

## 5. Pilot Evidence Categories

### 5.1 Activation Evidence

Track:

- account created,
- workspace configured,
- first AI Employee created,
- first knowledge source connected,
- first workflow created,
- first simulation completed,
- first approval completed,
- first production run completed,
- first dashboard review completed.

Investor interpretation:

> Ariyo can move a customer from interest to operational AI Employee setup.

### 5.2 Usage Evidence

Track:

- active users,
- AI Employee runs,
- workflows executed,
- marketplace templates viewed,
- templates installed,
- approvals processed,
- incidents reviewed,
- outcomes tracked,
- admin actions completed.

Investor interpretation:

> Ariyo is not only demoed; it is used as an operating layer.

### 5.3 Outcome Evidence

Track:

- hours saved,
- tasks completed,
- response time reduced,
- manual handoffs reduced,
- approval delays reduced,
- onboarding time reduced,
- customer support response improved,
- content throughput improved,
- financial/accounting workflow speed improved,
- marketing operations consistency improved.

Rules:

- Always show baseline when possible.
- If no baseline exists, label the proof as directional.
- Never present directional proof as verified ROI.

### 5.4 Governance Evidence

Track:

- roles configured,
- policy rules created,
- approval gates used,
- audit events generated,
- permission reviews completed,
- AI Employee version changes approved,
- template install approvals completed,
- blocked actions prevented.

Investor interpretation:

> Ariyo can support serious enterprise control, not just AI experimentation.

### 5.5 Marketplace Evidence

Track:

- template discovery behavior,
- template detail engagement,
- install eligibility checks,
- template installs,
- sandbox previews,
- trust label views,
- review interaction,
- plan compatibility checks,
- private catalog interest.

Investor interpretation:

> Ariyo has marketplace/network expansion potential beyond a single SaaS tool.

### 5.6 Retention and Expansion Evidence

Track:

- weekly active account behavior,
- repeated AI Employee runs,
- additional AI Employee requests,
- additional workflow requests,
- additional team invitations,
- interest in Pro/Smart/Enterprise,
- request for private templates,
- request for integrations,
- request for governance controls.

Investor interpretation:

> Ariyo can expand inside an account after the first use case.

---

## 6. Investor Proof Pack Structure

The final investor proof pack must include these sections in this order:

1. Executive Snapshot
2. Pilot Account Summary
3. Problem Evidence
4. Product Usage Evidence
5. Outcome Evidence
6. Governance and Trust Evidence
7. Marketplace Evidence
8. Buyer Persona Evidence
9. Objection Resolution Evidence
10. Retention and Expansion Signals
11. Product Learning and Roadmap Impact
12. Risks Discovered and Reduced
13. Next Milestones
14. Appendix: Data Definitions and Evidence Sources

---

## 7. Executive Snapshot Template

Use this structure:

```md
# Ariyo Post-Pilot Proof Snapshot

## Pilot Window
- Start date:
- End date:
- Number of pilot accounts:
- Number of active workspaces:
- Number of AI Employees configured:
- Number of workflows tested:
- Number of production-like runs:

## Strongest Evidence
1.
2.
3.

## Strongest Customer Pull
1.
2.
3.

## Key Risks Reduced
1.
2.
3.

## Key Roadmap Changes
1.
2.
3.

## Investor Takeaway
Ariyo is showing evidence that ...
```

---

## 8. Pilot Case Study Format

Each customer case must follow this format:

```md
# Pilot Case Study: [Customer Segment / Anonymous Account]

## Context
- Industry:
- Company size:
- Team:
- Primary pain:
- Existing process:

## Ariyo Setup
- AI Employees configured:
- Workflows configured:
- Templates used:
- Integrations simulated/connected:
- Governance controls used:

## Before Ariyo
- Manual process:
- Pain level:
- Baseline metric:

## During Pilot
- Key actions:
- Usage metrics:
- Approvals:
- Incidents:
- Support events:

## Results
- Outcome:
- Evidence:
- Confidence:
- Limitations:

## Customer Signal
- Quote status:
- Renewal/expansion interest:
- Requested next use case:

## Product Learning
- What worked:
- What failed:
- What changed in roadmap:
```

---

## 9. Investor Narrative Rules

Use language like:

- “Early pilot evidence suggests...”
- “In the pilot window, customers used Ariyo to...”
- “The strongest validated pull came from...”
- “The clearest expansion signal was...”
- “The main enterprise objection was reduced by...”

Avoid language like:

- “Guaranteed ROI”
- “Proven category winner”
- “Enterprise-ready for all customers”
- “Fully automated replacement for employees”
- “Customers saved millions” without validated evidence
- “AI works autonomously without risk”

---

## 10. Metrics That Matter

### 10.1 Product Metrics

- Activation rate
- Time to first AI Employee
- Time to first workflow
- Time to first simulated run
- Time to first approved run
- Weekly active workspace
- AI Employee runs per account
- Workflow runs per account
- Template installs per account
- Approval completion rate
- Incident review rate

### 10.2 Business Metrics

- Hours saved estimate
- Manual task reduction
- Response time reduction
- Cycle time reduction
- Onboarding time reduction
- Cost avoidance estimate
- Expansion request count
- Renewal interest signal
- Paid conversion readiness

### 10.3 Trust Metrics

- Admin policy actions
- Permission changes
- Approval gates used
- Audit log views
- Trust Center views
- Data residency questions resolved
- Security objections resolved
- Compliance evidence requests

### 10.4 Marketplace Metrics

- Marketplace visits
- Template detail views
- Template install attempts
- Template installs
- Template sandbox previews
- Trust label clicks
- Private catalog requests
- Creator/partner interest

---

## 11. Objection Handling Proof

For each objection, store:

```md
## Objection Proof Record

- Objection:
- Persona:
- Frequency:
- Severity:
- Response used:
- Product proof used:
- Did it resolve concern?
- Evidence:
- Roadmap implication:
```

Common objections:

- “Is this just another chatbot?”
- “Can this be governed?”
- “Can we trust the AI?”
- “What data does it access?”
- “Can managers approve actions?”
- “How do we know it saves time?”
- “What happens when it fails?”
- “Can we control cost?”
- “Can this support Persian/Arabic/English UI?”
- “Can marketplace templates be trusted?”

---

## 12. Proof Asset Inventory

The proof pack may include:

- anonymized dashboard screenshots,
- before/after workflow diagrams,
- AI Employee setup screenshots,
- approval queue screenshots,
- marketplace install screenshots,
- Trust Center screenshots,
- launch readiness snapshots,
- customer quote snippets,
- EBR slides,
- pilot closeout reports,
- product analytics export,
- support ticket summary,
- roadmap decision summary,
- incident response example,
- audit log example,
- ROI estimate worksheet.

Every asset must have:

- owner,
- source,
- customer permission status,
- date captured,
- redaction status,
- audience suitability.

---

## 13. Customer Permission Rules

Do not use a customer name, logo, quote, screenshot, metric, or case study publicly unless approved.

Permission levels:

1. `internal_only`
2. `anonymous_external`
3. `named_private_sales`
4. `named_public`
5. `logo_public`
6. `quote_public`
7. `case_study_public`

Codex must label every proof asset with its permission level.

---

## 14. Investor Data Room Folder Structure

```txt
/investor-proof-pack
  /00-executive-snapshot
  /01-pilot-summary
  /02-product-usage
  /03-outcome-evidence
  /04-customer-case-studies
  /05-enterprise-trust-evidence
  /06-marketplace-evidence
  /07-roadmap-learning
  /08-risk-reduction
  /09-demo-assets
  /10-appendix-data-definitions
```

---

## 15. Enterprise Sales Proof Pack Structure

```txt
/enterprise-proof-pack
  /01-ai-employee-operating-model
  /02-governance-and-approval-controls
  /03-security-and-privacy-summary
  /04-audit-and-evidence-examples
  /05-marketplace-trust-controls
  /06-pilot-outcome-examples
  /07-implementation-methodology
  /08-support-and-success-model
```

---

## 16. UI Surfaces That Must Use This Proof

The following product surfaces may display or depend on proof-pack data:

- Landing Page
- Pricing Page
- Trust Center
- Investor Demo Flow
- Enterprise Sales Demo
- Customer Success Console
- Launch Readiness Command Center
- Marketplace Homepage
- Template Detail Page
- Enterprise Admin
- EBR-ready account view

---

## 17. Codex Execution Rules

When Codex implements proof-pack support, it must:

1. Read `demo-data-seed-pack.md` first.
2. Read `pilot-feedback-to-roadmap-system.md` second.
3. Read this file third.
4. Create typed proof objects before UI cards.
5. Build anonymization and permission labels into data models.
6. Never hardcode customer logos as public.
7. Never display unapproved quotes as public testimonials.
8. Ensure all proof cards show source/confidence/permission state where relevant.
9. Provide empty states for “not enough evidence yet.”
10. Provide internal-only vs public proof variants.

---

## 18. Codex Stop Rules

Codex must stop if:

- a proof claim has no source,
- a metric has no definition,
- a customer quote has no permission status,
- a screenshot contains sensitive data,
- ROI is presented without assumptions,
- customer identity is public without approval,
- investor proof contradicts product reality,
- production readiness is implied when only demo readiness exists,
- RTL/LTR behavior is missing for proof surfaces.

---

## 19. RTL/LTR Layout Law

Persian/Farsi and Arabic interfaces must be RTL and right-aligned across all UI elements.

English and European LTR interfaces must be LTR and left-aligned across all UI elements.

This applies to:

- proof cards,
- investor snapshots,
- customer case summaries,
- quote blocks,
- metric tables,
- EBR reports,
- enterprise proof packs,
- Trust Center proof sections,
- customer-facing evidence pages,
- internal proof review dashboards.

If a proof asset is multilingual, layout direction must follow the active locale, not the source language of one quote.

---

## 20. Acceptance Criteria

This skill is complete when Ariyo can answer:

- What evidence came from pilots?
- Which evidence is investor-safe?
- Which evidence is enterprise-safe?
- Which evidence is internal-only?
- Which metrics are real vs directional?
- Which customer signals support roadmap priority?
- Which objections were resolved?
- Which risks remain?
- Which proof assets can sales use?
- Which proof assets can investors see?
- Which proof assets require permission?

---

## 21. Golden Rule

Do not manufacture proof.
Do not exaggerate proof.
Do not hide risk.
Do not use unapproved customer evidence.

Turn pilots into evidence.
Turn evidence into trust.
Turn trust into investment, sales, renewal, and roadmap clarity.
