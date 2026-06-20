# Ariyo Creator Portal Mockup Specification

## Core Contract

Ariyo Creator Portal Mockup Specification is not a generic creator dashboard, upload form, or marketplace seller console.

It is the governed mockup specification for the product surface where creators, partners, internal template teams, implementation consultants, agencies, and certified builders create, test, document, submit, review, publish, monitor, improve, monetize, and support Ariyo Marketplace assets.

The Creator Portal must make Ariyo feel like a trusted enterprise marketplace for AI Employee operating assets, not a casual template gallery, prompt shop, plugin store, or low-accountability creator platform.

Every mockup decision must help answer five questions:

1. Can creators build high-quality assets without guessing the Ariyo standard?
2. Can Ariyo review and govern assets before customers install them?
3. Can enterprise buyers trust what appears in the Marketplace?
4. Can creators understand performance, quality, visibility, revenue, and support obligations?
5. Can the platform scale creator operations without losing safety, quality, or compliance control?

---

## 1. Purpose of This Mockup Spec

This file defines the design, UX, component, content, state, and implementation requirements for the Ariyo Creator Portal mockup.

The Creator Portal is a strategic surface because it turns Ariyo from a single-product SaaS into an ecosystem platform. It must support professional creators and partners while protecting enterprise trust.

The mockup must show:

- how a creator enters the portal;
- how templates are created and managed;
- how assets move through review and certification;
- how trust labels are earned and displayed;
- how performance and marketplace visibility are measured;
- how creator support, payouts, disputes, and updates are handled;
- how Ariyo prevents unsafe, low-quality, non-compliant, or misleading assets from entering the Marketplace.

The page must be designed as an enterprise-grade operations portal, not a social creator dashboard.

---

## 2. Primary Audience

### 2.1 External Creators

Independent experts, consultants, agencies, and specialist builders who create AI Employee templates, workflow templates, knowledge packs, and automation bundles.

They need:

- clear submission rules;
- build guidance;
- preview/testing tools;
- review status;
- revenue visibility;
- customer feedback;
- quality improvement signals;
- marketplace discoverability insights.

### 2.2 Certified Partners

Implementation partners, agencies, and enterprise solution providers who may publish higher-trust marketplace assets.

They need:

- partner badge visibility;
- certification status;
- private catalog support;
- customer deployment reporting;
- compliance and evidence workflows;
- escalated review lanes.

### 2.3 Internal Ariyo Template Team

Ariyo's internal product/content team may use the same portal to create official templates.

They need:

- official asset designation;
- review bypass rules where appropriate;
- version control;
- benchmark tracking;
- launch sequencing;
- performance monitoring.

### 2.4 Marketplace Operations Team

Internal reviewers, trust and safety operators, quality analysts, and partner managers who review submissions and monitor creator health.

They need:

- review queues;
- risk flags;
- creator quality history;
- evidence checks;
- certification workflows;
- policy enforcement triggers.

### 2.5 Enterprise Buyer Context

The creator does not directly use this role, but the entire portal must anticipate enterprise buyer expectations.

Every published asset should eventually help answer:

- Who made this?
- Is the creator verified?
- What permissions does the template need?
- What data does it touch?
- Is it compatible with our region, plan, and governance policies?
- Has it been reviewed, certified, or audited?
- What happens if it fails?

---

## 3. Mockup Goals

The Creator Portal mockup must demonstrate that Ariyo can operate a responsible marketplace ecosystem.

### 3.1 Business Goals

- Increase supply of high-quality templates.
- Encourage creator participation without sacrificing safety.
- Support monetization and partner-led growth.
- Reduce manual marketplace operations load.
- Improve enterprise trust in third-party and partner-created assets.
- Create a professional path from template idea to certified marketplace asset.

### 3.2 Product Goals

- Show creators where to start.
- Show submission status clearly.
- Show how quality, trust, and performance affect visibility.
- Show how to improve a published asset.
- Show monetization and payout status without making the page feel financially speculative.
- Show review/governance gates as a built-in product workflow.

### 3.3 Design Goals

- Enterprise-grade, calm, structured, trustworthy.
- Operational, not gamified.
- Clear separation between draft, review, published, blocked, deprecated, and archived assets.
- Strong use of tables, cards, status badges, side panels, and step flows.
- No consumer creator clutter.
- No vanity-first social metrics.

---

## 4. Surface Position in Ariyo

The Creator Portal belongs to the Marketplace and Ecosystem domain, but it depends on many governance and enterprise systems.

### 4.1 Related Skills

This mockup must be informed by:

- `ai-employee-marketplace.md`
- `agent-marketplace-template-builder.md`
- `ai-agent-template-review-governance.md`
- `template-quality-ranking-system.md`
- `marketplace-creator-success-system.md`
- `marketplace-creator-community-program.md`
- `marketplace-partner-operations.md`
- `marketplace-template-certification-program.md`
- `marketplace-template-trust-labeling-system.md`
- `marketplace-template-quality-benchmarking.md`
- `marketplace-template-outcome-intelligence.md`
- `marketplace-template-lifecycle-optimization.md`
- `marketplace-billing-payouts.md`
- `marketplace-dispute-resolution.md`
- `marketplace-trust-safety-operations.md`
- `marketplace-policy-enforcement-rules.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`
- `product-surface-map.md`
- `ariyo-core-product-mockup-brief.md`
- `ariyo-marketplace-homepage-mockup-spec.md`
- `ariyo-template-detail-mockup-spec.md`

### 4.2 Product Surface Type

Creator Portal is a role-based workspace surface.

It is not public by default.

It must support:

- authenticated creators;
- partner organizations;
- internal Ariyo creators;
- asset-level permissions;
- workspace/team-level collaboration;
- review and publishing state transitions;
- marketplace visibility controls.

---

## 5. Navigation Architecture

### 5.1 Top-Level Creator Portal Navigation

The mockup should include a left navigation or top/side hybrid depending on desktop width.

Primary nav items:

1. Overview
2. Assets
3. Create Template
4. Reviews & Submissions
5. Quality & Trust
6. Analytics
7. Revenue & Payouts
8. Support & Issues
9. Certifications
10. Partner Profile
11. Documentation
12. Settings

### 5.2 Recommended Desktop Layout

Desktop should use:

- persistent sidebar navigation;
- top account/profile bar;
- main content area;
- optional right insight rail for review blockers, trust score, next actions, or creator health.

### 5.3 Mobile Layout

Mobile should use:

- compact header;
- drawer navigation;
- stacked cards;
- simplified tables converted into grouped cards;
- sticky primary actions only when safe.

### 5.4 Breadcrumbs

Asset detail and submission review screens should use breadcrumbs:

`Creator Portal / Assets / Sales Follow-Up AI Employee / Review Status`

---

## 6. Required Mockup Screens

The first Creator Portal mockup set should include at least these screens:

1. Creator Portal Overview
2. Asset Library
3. Create Template Entry Screen
4. Template Submission Wizard
5. Review Status Detail
6. Quality & Trust Dashboard
7. Analytics Dashboard
8. Revenue & Payouts
9. Support & Customer Issues
10. Creator/Partner Profile

The first design pass may focus on screens 1–5, but the spec must define all 10.

---

## 7. Screen 1: Creator Portal Overview

### 7.1 Purpose

The overview screen answers:

- What is my creator status?
- What assets do I own?
- What needs attention?
- How are my templates performing?
- Are there review blockers?
- Is my account trusted, certified, restricted, or at risk?

### 7.2 Header

Required elements:

- page title: `Creator Portal`
- creator/partner name
- verification badge
- certification badge if applicable
- account status badge: `Active`, `Under Review`, `Restricted`, `Suspended`, `Pending Verification`
- primary CTA: `Create Template`
- secondary CTA: `View Documentation`

### 7.3 Summary Cards

Use 4–6 summary cards:

- Published Assets
- Assets in Review
- Installations
- Average Quality Score
- Trust Labels Earned
- Estimated Revenue / Payout Status

Cards must avoid vanity-only framing. For example, `Installations with active usage` is better than `Total installs`.

### 7.4 Action Queue

Show a prioritized action list:

- `2 templates require permission clarification`
- `1 submission blocked by missing region compatibility evidence`
- `3 customer issues need response`
- `Certification renewal due in 21 days`

Each item should include:

- severity;
- due date if applicable;
- owner;
- CTA.

### 7.5 Recent Activity

Show timeline events:

- template submitted;
- review comment added;
- trust label awarded;
- version published;
- installation milestone reached;
- customer issue opened;
- payout processed.

### 7.6 Marketplace Visibility Snapshot

Show whether creator assets are visible in:

- public marketplace;
- private catalogs;
- enterprise-approved catalogs;
- promoted collections;
- certified template lists;
- regional catalogs.

---

## 8. Screen 2: Asset Library

### 8.1 Purpose

The Asset Library lets creators manage all templates and related marketplace assets.

### 8.2 Asset Types

Filters must support:

- AI Employee Templates
- Agent Team Templates
- Workflow Templates
- Knowledge Packs
- Integration Bundles
- Prompt/Policy Packs where allowed
- GEO/Content Visibility Templates
- Customer Success Playbooks
- Enterprise Governance Packs

### 8.3 Table Columns

Recommended columns:

- Asset name
- Type
- Status
- Quality score
- Trust labels
- Version
- Installs / active usage
- Revenue status
- Last updated
- Review blockers
- Actions

### 8.4 Asset Statuses

Use clear status badges:

- Draft
- Ready for Review
- In Review
- Changes Requested
- Approved
- Published
- Featured
- Certified
- Restricted
- Deprecated
- Archived
- Blocked

### 8.5 Bulk Actions

Bulk actions should be limited and safe:

- archive drafts;
- request review;
- export performance report;
- assign owner;
- update tags.

Do not allow unsafe bulk publish.

---

## 9. Screen 3: Create Template Entry Screen

### 9.1 Purpose

This screen helps creators choose the right asset type and understand quality expectations before starting.

### 9.2 Template Type Cards

Each card should include:

- template type name;
- description;
- required evidence;
- estimated review complexity;
- monetization eligibility;
- certification eligibility;
- examples.

### 9.3 Recommended Template Types

Use these cards:

1. AI Employee Template
2. Agent Team Template
3. Workflow Template
4. Knowledge Pack
5. Integration Bundle
6. Enterprise Governance Pack
7. Customer Success Playbook
8. Marketing/GEO Visibility Pack

### 9.4 Pre-Submission Guidance

Show requirements before creation:

- outcome definition;
- required permissions;
- sample data policy;
- region compatibility;
- safety limitations;
- support obligations;
- documentation requirements;
- test/simulation evidence.

### 9.5 Start CTA

Primary CTA: `Start Template`

Secondary CTA: `Import Existing Draft`

Tertiary: `Read Marketplace Quality Standard`

---

## 10. Screen 4: Template Submission Wizard

### 10.1 Purpose

The submission wizard converts a creator asset into a reviewable marketplace candidate.

### 10.2 Wizard Steps

Recommended steps:

1. Basics
2. Outcome & Use Case
3. Configuration
4. Data & Permissions
5. Region & Compliance
6. Simulation & Evidence
7. Pricing & Availability
8. Documentation
9. Support & Maintenance
10. Submit for Review

### 10.3 Step 1: Basics

Fields:

- template name;
- template type;
- short summary;
- category;
- tags;
- industry;
- target user role;
- creator/partner owner;
- language/localization support.

### 10.4 Step 2: Outcome & Use Case

Fields:

- primary business outcome;
- secondary outcomes;
- intended users;
- unsuitable use cases;
- required human review points;
- expected time savings or quality improvement where supportable.

Claims must not be exaggerated or unverified.

### 10.5 Step 3: Configuration

Fields:

- AI Employee role configuration;
- workflow steps;
- knowledge dependencies;
- integrations;
- configurable variables;
- default settings;
- plan compatibility.

### 10.6 Step 4: Data & Permissions

Fields:

- required data sources;
- read/write permissions;
- external API access;
- PII exposure risk;
- customer data storage behavior;
- memory usage;
- audit logging;
- least-privilege explanation.

### 10.7 Step 5: Region & Compliance

Fields:

- supported regions;
- unsupported regions;
- data residency constraints;
- legal/compliance notes;
- enterprise approval requirements;
- marketplace policy confirmations.

### 10.8 Step 6: Simulation & Evidence

Fields:

- simulation results;
- test cases;
- failure cases;
- edge cases;
- benchmark output;
- risk review notes;
- evidence attachments.

### 10.9 Step 7: Pricing & Availability

Fields:

- free/paid/private/custom;
- plan availability;
- enterprise private catalog availability;
- trial/sandbox availability;
- payout eligibility;
- revenue-share disclosure.

### 10.10 Step 8: Documentation

Fields:

- setup instructions;
- permissions explanation;
- use case guide;
- admin notes;
- troubleshooting;
- limitations;
- support policy.

### 10.11 Step 9: Support & Maintenance

Fields:

- support contact/channel;
- SLA expectation;
- update frequency;
- deprecation policy;
- incident response responsibility;
- customer issue ownership.

### 10.12 Step 10: Submit for Review

Final review summary must show:

- missing fields;
- high-risk permissions;
- unsupported regions;
- unverified claims;
- documentation gaps;
- policy warnings;
- estimated review path.

Primary CTA: `Submit for Review`

Secondary CTA: `Save Draft`

Danger CTA: none on this screen unless discarding draft.

---

## 11. Screen 5: Review Status Detail

### 11.1 Purpose

This screen shows where a submission is in the review pipeline.

### 11.2 Review Pipeline

Possible stages:

1. Submitted
2. Automated Checks
3. Marketplace Quality Review
4. Trust & Safety Review
5. Security/Permission Review
6. Compliance/Region Review
7. Certification Review if requested
8. Changes Requested
9. Approved
10. Published

### 11.3 Review Status Card

Show:

- current stage;
- reviewer role;
- SLA estimate where appropriate;
- blockers;
- required creator action;
- last update;
- next step.

### 11.4 Review Comments

Review comments must be structured, not only free text.

Each comment should include:

- category;
- severity;
- affected section;
- requested change;
- evidence needed;
- due date if any;
- reply thread.

### 11.5 Resubmission Flow

Required states:

- change draft;
- mark issue resolved;
- attach evidence;
- request re-review;
- view review history.

---

## 12. Screen 6: Quality & Trust Dashboard

### 12.1 Purpose

This screen shows how Ariyo evaluates creator quality and marketplace trust.

### 12.2 Quality Score Components

Show breakdown:

- outcome clarity;
- installation success rate;
- active usage;
- customer rating quality;
- support responsiveness;
- policy compliance;
- safety review pass rate;
- documentation quality;
- incident history;
- version maintenance.

### 12.3 Trust Labels

Possible labels:

- Verified Creator
- Certified Partner
- Ariyo Reviewed
- Security Reviewed
- Enterprise Ready
- Region Compatible
- Low Permission Risk
- High Usage Quality
- Maintained Template
- Private Catalog Eligible

### 12.4 Trust Label Detail Drawer

When a label is clicked, show:

- criteria;
- earned date;
- expiry/renewal date if applicable;
- evidence source;
- impact on marketplace visibility;
- revocation conditions.

### 12.5 Improvement Recommendations

Show actionable recommendations:

- improve setup documentation;
- reduce permissions;
- add simulation evidence;
- respond faster to support tickets;
- update deprecated dependency;
- localize for Persian/Arabic or English/European markets.

---

## 13. Screen 7: Analytics Dashboard

### 13.1 Purpose

Analytics must help creators improve useful outcomes, not chase vanity metrics.

### 13.2 Key Metrics

Recommended metrics:

- impressions;
- detail page views;
- install eligibility pass rate;
- installs;
- active deployments;
- activation rate;
- successful runs;
- outcome completion rate;
- uninstall rate;
- support issue rate;
- review rating distribution;
- marketplace ranking movement;
- private catalog inclusion;
- revenue where applicable.

### 13.3 Funnel View

Show funnel:

`Marketplace Impression → Detail View → Compatibility Check → Sandbox Demo → Approval → Install → Activation → Active Usage → Renewal/Expansion`

### 13.4 Segmentation

Segment by:

- plan: Basic, Pro, Smart;
- region;
- industry;
- organization size;
- template type;
- acquisition source;
- public vs private catalog;
- certified vs non-certified.

### 13.5 Analytics Warnings

Show clear caveats where data is incomplete.

Do not display misleading rankings without context.

---

## 14. Screen 8: Revenue & Payouts

### 14.1 Purpose

This screen shows monetization status without overemphasizing speculative income.

### 14.2 Required Sections

- payout eligibility;
- revenue summary;
- pending payouts;
- paid payouts;
- refund/dispute holds;
- revenue share terms;
- tax/KYC status;
- payout method;
- invoice/export controls.

### 14.3 Payout Statuses

Statuses:

- Not Eligible
- Setup Required
- Pending Review
- Eligible
- Pending Payout
- Paid
- Held
- Disputed
- Suspended

### 14.4 Financial Compliance Notes

Show:

- creator must complete payout setup;
- region-specific payout availability;
- tax and invoice requirements;
- dispute impact;
- refund windows;
- enterprise procurement delays.

---

## 15. Screen 9: Support & Customer Issues

### 15.1 Purpose

Creators must understand support obligations for published assets.

### 15.2 Support Inbox

Columns/cards:

- issue title;
- affected template;
- customer segment;
- severity;
- status;
- due date;
- response SLA;
- owner;
- last update.

### 15.3 Issue Statuses

- New
- Waiting for Creator
- Waiting for Customer
- Under Investigation
- Fix Scheduled
- Resolved
- Escalated to Ariyo
- Policy Review
- Closed

### 15.4 Support Actions

- reply;
- request logs;
- attach fix version;
- escalate to Ariyo;
- mark resolved;
- publish known issue;
- update documentation.

### 15.5 Incident Linkage

If a support issue indicates safety, compliance, data, or reliability risk, the UI must show escalation into incident or trust review.

---

## 16. Screen 10: Creator/Partner Profile

### 16.1 Purpose

This screen controls creator identity and marketplace trust presentation.

### 16.2 Profile Fields

- display name;
- legal entity where applicable;
- profile logo/avatar;
- short bio;
- company website;
- support contact;
- region;
- languages supported;
- industries served;
- certifications;
- partner status;
- trust evidence;
- public/private visibility.

### 16.3 Verification Status

Statuses:

- Unverified
- Verification Required
- Under Review
- Verified
- Certified Partner
- Restricted
- Suspended

### 16.4 Public Profile Preview

Show how creator profile appears in Marketplace.

Include:

- verified badge;
- certification labels;
- template count;
- support responsiveness;
- quality score range;
- top categories;
- public trust notes.

---

## 17. Key Components

### 17.1 Creator Status Badge

Required variants:

- Active
- Pending Verification
- Verified
- Certified
- Restricted
- Suspended

### 17.2 Asset Status Badge

Required variants:

- Draft
- In Review
- Changes Requested
- Approved
- Published
- Featured
- Certified
- Deprecated
- Blocked

### 17.3 Trust Label Badge

Should include tooltip or drawer.

Never show trust labels without criteria explanation.

### 17.4 Review Timeline

A vertical or horizontal timeline showing review progression.

### 17.5 Evidence Checklist

Checklist for:

- simulation evidence;
- permission explanation;
- region compatibility;
- documentation;
- support policy;
- pricing disclosure;
- risk limitations.

### 17.6 Quality Score Card

Must show:

- score;
- breakdown;
- trend;
- improvement suggestions;
- visibility impact.

### 17.7 Payout Summary Card

Must show:

- payable amount;
- pending amount;
- held amount;
- next payout date where applicable;
- setup blockers.

### 17.8 Marketplace Visibility Card

Must show where assets appear and why.

Examples:

- Public Marketplace: Active
- Enterprise Catalogs: Eligible
- Featured Collections: Not Eligible — quality score below threshold
- Private Catalogs: Available by request

---

## 18. Required States

### 18.1 Empty State

For a new creator:

- explain what the portal is;
- show `Create your first template` CTA;
- show documentation shortcut;
- show quality standard preview;
- avoid overwhelming metrics.

### 18.2 Loading State

Use skeleton cards and table rows.

Do not show fake metrics.

### 18.3 Error State

Use actionable language:

- `We could not load your creator analytics.`
- `Retry`
- `Contact support`

### 18.4 Restricted State

If creator is restricted:

- show reason category;
- show affected actions;
- show appeal path if allowed;
- show what remains accessible.

### 18.5 Suspended State

If creator is suspended:

- prevent publishing and submissions;
- show policy reason category;
- show support/legal route if applicable;
- show read-only access to payouts and existing support obligations where legally appropriate.

### 18.6 Review Blocked State

When template review is blocked:

- show blocker;
- show evidence needed;
- show exact section to fix;
- provide CTA to edit.

### 18.7 Payout Blocked State

Show:

- missing KYC/tax setup;
- unsupported region;
- dispute hold;
- account restriction;
- payout provider issue.

---

## 19. Basic / Pro / Smart Behavior

### 19.1 Basic

Basic creators may have limited template publishing capabilities.

Basic UI should show:

- simpler asset creation;
- limited analytics;
- limited monetization;
- public template submission may require stricter review;
- fewer enterprise certification options.

### 19.2 Pro

Pro should support:

- multiple assets;
- richer analytics;
- support management;
- monetization eligibility;
- review workflow;
- template updates;
- team collaboration where allowed.

### 19.3 Smart

Smart should support:

- advanced creator operations;
- partner profile;
- enterprise catalog eligibility;
- certification workflows;
- private catalog publishing;
- advanced analytics;
- quality benchmarking;
- lifecycle optimization;
- deeper compliance controls.

### 19.4 Plan Gating Pattern

Plan gates must be clear and respectful.

Do not hide critical safety, privacy, or compliance information behind plan upgrades.

---

## 20. RTL / LTR Layout Law

Persian/Farsi and Arabic versions of the Creator Portal must be fully RTL and right-aligned across all UI elements.

English and European-language versions must be fully LTR and left-aligned across all UI elements.

This applies to:

- side navigation;
- breadcrumbs;
- tables;
- cards;
- charts;
- form labels;
- input alignment;
- buttons;
- tooltips;
- drawers;
- modals;
- timelines;
- review comments;
- payout tables;
- analytics funnels;
- support inbox;
- empty states;
- mobile drawer navigation.

### 20.1 RTL-Specific Requirements

For Persian and Arabic:

- sidebar appears on the right unless platform shell standard requires mirrored layout;
- primary text aligns right;
- table column order mirrors logically;
- progress timelines flow right-to-left where directional;
- chevrons and directional icons mirror;
- charts with time axes should preserve data meaning while labels align appropriately;
- numeric financial and analytics values remain readable and locale-aware;
- mixed English product terms must not break line direction.

### 20.2 LTR-Specific Requirements

For English and European languages:

- sidebar appears on the left;
- primary text aligns left;
- tables follow LTR column order;
- progress timelines flow left-to-right where directional;
- directional icons follow LTR expectations.

### 20.3 Non-Negotiable Rule

If any design pattern conflicts with RTL/LTR language behavior, localization correctness wins.

---

## 21. Responsive Requirements

### 21.1 Desktop

Desktop must support dense operations:

- sidebar;
- tables;
- split panes;
- drawers;
- right insight rail;
- multi-column cards.

### 21.2 Tablet

Tablet should:

- collapse insight rail;
- keep key metrics visible;
- convert some tables into horizontal scroll or cards;
- keep review wizard usable.

### 21.3 Mobile

Mobile should:

- prioritize action queue and asset status;
- use bottom/drawer navigation;
- convert tables into cards;
- simplify analytics;
- keep CTA hierarchy clear;
- avoid complex canvas-like interactions.

---

## 22. Accessibility Requirements

The mockup must support:

- keyboard navigation;
- visible focus states;
- screen-reader labels for status badges;
- accessible color contrast;
- non-color-only status indicators;
- form error descriptions;
- clear table headers;
- modal focus trapping;
- accessible tooltips or popovers;
- reduced-motion mode.

Status badges must include text, not only color.

---

## 23. Motion Requirements

Motion should be subtle and operational.

Allowed:

- drawer transitions;
- review stage progress update;
- card hover elevation;
- skeleton loading;
- subtle success confirmation;
- row expansion animation.

Avoid:

- celebratory confetti for publishing;
- game-like badges;
- exaggerated marketplace promotion effects;
- distracting dashboard animation;
- motion that hides risk or review blockers.

---

## 24. Copywriting Rules

### 24.1 Voice

Creator Portal copy should be:

- clear;
- professional;
- direct;
- supportive;
- policy-aware;
- enterprise-trust-oriented.

### 24.2 Do Use

- `Submit for Review`
- `Changes Requested`
- `Permission Risk: Medium`
- `Evidence Required`
- `Eligible for Certification`
- `Private Catalog Eligible`
- `Payout Setup Required`
- `Improve Quality Score`

### 24.3 Do Not Use

- `Go viral`
- `Explode your revenue`
- `Guaranteed approval`
- `Instant enterprise-ready`
- `No risk`
- `Set and forget`
- `Unlimited earnings`
- `Best template in the marketplace`

### 24.4 Claim Discipline

Creators must not be encouraged to publish unsupported claims.

The UI should guide creators to state:

- intended outcomes;
- limitations;
- setup requirements;
- supported contexts;
- human review requirements;
- data/permission needs.

---

## 25. Analytics Events

Frontend instrumentation should include:

- `creator_portal_viewed`
- `creator_template_started`
- `creator_asset_draft_saved`
- `creator_submission_started`
- `creator_submission_step_completed`
- `creator_submission_blocked`
- `creator_submission_submitted`
- `creator_review_comment_viewed`
- `creator_review_issue_resolved`
- `creator_template_published`
- `creator_template_updated`
- `creator_quality_dashboard_viewed`
- `creator_trust_label_detail_opened`
- `creator_analytics_viewed`
- `creator_payouts_viewed`
- `creator_support_issue_opened`
- `creator_support_issue_resolved`
- `creator_profile_updated`
- `creator_certification_requested`

Each event should include relevant metadata while respecting privacy and governance rules.

---

## 26. Security and Privacy Requirements

The Creator Portal must never expose customer-sensitive data beyond what the creator is authorized to see.

### 26.1 Data Visibility

Creators may see:

- aggregated performance;
- support issue content when needed and permitted;
- deployment counts where allowed;
- anonymized customer segments;
- review feedback;
- payout records.

Creators must not see:

- customer private data;
- internal customer configurations;
- raw logs containing sensitive content;
- enterprise buyer details unless permitted;
- internal Ariyo review deliberation notes;
- hidden ranking algorithm details.

### 26.2 Permission Boundaries

Team-based creator accounts must support:

- owner;
- admin;
- editor;
- finance viewer;
- support agent;
- read-only analyst.

### 26.3 Auditability

Important actions must be auditable:

- submit template;
- publish version;
- change pricing;
- change support policy;
- request certification;
- update permissions;
- archive/deprecate asset;
- change payout settings.

---

## 27. Frontend Handoff Requirements

The mockup must be delivered with:

- desktop, tablet, and mobile frames;
- RTL and LTR notes;
- component inventory;
- status badge variants;
- table/card responsive behavior;
- wizard states;
- empty/loading/error states;
- permission risk states;
- review timeline states;
- analytics chart examples;
- payout blocked/eligible states;
- support issue states;
- accessibility annotations;
- analytics event map;
- copy examples;
- design tokens where available.

---

## 28. Acceptance Criteria

The mockup is acceptable only if it shows:

- a credible creator operations portal;
- clear template lifecycle management;
- responsible submission and review flow;
- visible quality and trust system;
- support for certification and trust labels;
- analytics that improve outcomes, not vanity;
- revenue/payout visibility with compliance discipline;
- creator support obligations;
- partner profile and verification logic;
- marketplace visibility mechanics;
- safe states for blocked/restricted/suspended creators;
- complete RTL/LTR behavior;
- realistic enterprise marketplace seriousness.

---

## 29. Forbidden Patterns

Do not design the Creator Portal as:

- a generic seller dashboard;
- a social influencer dashboard;
- a template upload form only;
- a prompt marketplace console;
- a gamified badge board;
- a revenue-first creator casino;
- a low-trust plugin store;
- a dashboard that hides review blockers;
- a dashboard that encourages unsupported claims;
- a system where templates can be published without quality, safety, and permission review.

---

## 30. Golden Rule

The Creator Portal must make it easy to create marketplace assets, but hard to publish unsafe, low-quality, misleading, unsupported, or enterprise-unready assets.

Creators should feel empowered.

Enterprise buyers should feel protected.

Ariyo should feel like a serious AI Employee marketplace operating system.
