# Ariyo Customer Education Academy Skill

## 1. Purpose

This skill defines the official customer education, enablement, academy, certification, learning-path, and in-product education system for Ariyo.

Ariyo is not a simple SaaS product where users only need to learn buttons.

Ariyo introduces a new operating model: businesses hire, train, supervise, govern, measure, and expand AI employees.

That means customer education is a product growth system, a trust system, an adoption system, a retention system, and a partner ecosystem system.

This file must guide product managers, frontend engineers, backend engineers, AI agents, customer success teams, content teams, partner teams, marketplace teams, and Codex-like implementation agents when designing or building Ariyo Academy and all educational experiences connected to the product.

---

## 2. Core Contract

Ariyo customer education is not a help center.

Ariyo customer education is the operating layer that teaches customers how to get measurable value from AI employees safely, confidently, and repeatedly.

Every educational experience in Ariyo must help a customer do at least one of the following:

- understand what an AI employee can and cannot do;
- hire the right AI employee;
- configure business context correctly;
- connect knowledge and integrations safely;
- supervise risky work through human review;
- control cost and plan usage;
- measure business outcomes;
- expand from one use case to many;
- avoid unsafe or unrealistic expectations;
- become confident enough to renew, upgrade, refer, or become a partner.

Ariyo Academy must convert learning into activation, adoption, retention, expansion, trust, and ecosystem growth.

---

## 3. Strategic Role in Ariyo

Customer education must support all major Ariyo business loops:

1. **Activation loop**  
   New users learn enough to hire and deploy their first AI employee.

2. **Trust loop**  
   Customers learn how Ariyo handles safety, privacy, review, cost, and reliability.

3. **Adoption loop**  
   Teams learn role-specific ways to use AI employees in daily work.

4. **Expansion loop**  
   Customers discover new employees, workflows, integrations, marketplace assets, and higher plan tiers.

5. **Partner loop**  
   Consultants, agencies, creators, and implementation partners learn how to sell, deploy, and govern Ariyo correctly.

6. **Marketplace loop**  
   Creators learn how to build trustworthy templates, workflows, knowledge packs, and solution bundles.

7. **Retention loop**  
   Customers are guided back to value when usage drops, trust breaks, cost rises, or workflows stall.

---

## 4. Dependencies

This skill depends on and must remain consistent with:

- `product-strategy.md`
- `business-context.md`
- `domain-model.md`
- `ai-employee-architecture.md`
- `knowledge-rag.md`
- `workflow-automation.md`
- `human-review-governance.md`
- `admin-permissions.md`
- `integration-ecosystem.md`
- `ai-cost-control.md`
- `customer-success-playbooks.md`
- `customer-lifecycle-automation.md`
- `content-marketing-engine.md`
- `community-partner-growth.md`
- `ecosystem-marketplace-economy.md`
- `brand-messaging-system.md`
- `sales-demo-playbook.md`
- `observability-analytics-events.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `quality-assurance-system.md`
- `frontend-copywriting.md`
- `frontend-components.md`
- `frontend-design.md`
- `frontend-responsive.md`

Customer education must not contradict pricing, security, AI capability, privacy, onboarding, marketplace, or partner rules defined elsewhere.

---

## 5. Academy Product Thesis

Ariyo Academy exists because AI employee adoption is not only a technical problem.

It is a behavior-change problem.

Customers must learn:

- what kind of work can be delegated;
- how to describe business context;
- how to connect knowledge safely;
- how to review AI output without slowing everything down;
- how to measure whether the AI employee is valuable;
- how to expand use cases without creating chaos;
- how to control spend;
- how to trust automation gradually.

Ariyo Academy must make this learning structured, measurable, contextual, and connected to product actions.

---

## 6. Education Principles

### 6.1 Outcome First

Every lesson must map to a product or business outcome.

Bad:

> Learn about knowledge sources.

Good:

> Connect your first knowledge source so your Support AI Employee can answer real customer questions with approved information.

---

### 6.2 Learn by Doing

Ariyo Academy must prefer guided product actions over passive reading.

Every important course should include:

- short explanation;
- real product task;
- checklist;
- validation;
- feedback;
- next step.

---

### 6.3 Role-Based, Not Generic

A founder, admin, support manager, sales lead, reviewer, partner, developer, and marketplace creator do not need the same training.

Education must be personalized by:

- role;
- company size;
- plan tier;
- selected AI employee type;
- lifecycle stage;
- use case;
- risk level;
- previous actions completed.

---

### 6.4 Trust Before Automation

Ariyo must teach users how to supervise before asking them to automate more.

Users must understand:

- review mode;
- approval gates;
- AI limitations;
- unsafe actions;
- data boundaries;
- cost controls;
- audit logs.

---

### 6.5 Education Must Drive Product State

Academy progress must not live separately from product progress.

A user completing a course should affect:

- onboarding checklist;
- activation score;
- customer lifecycle stage;
- certification status;
- partner eligibility;
- marketplace creator eligibility;
- recommended next actions;
- customer health score.

---

### 6.6 No Hype Education

Ariyo Academy must not teach unrealistic AI expectations.

Forbidden claims:

- fully replaces your team;
- never makes mistakes;
- works without review;
- guarantees sales;
- guarantees SEO/GEO ranking;
- requires no human judgment;
- unlimited automation without risk.

---

## 7. Core Academy Concepts

### 7.1 Academy

A structured learning environment containing courses, learning paths, certifications, product tasks, guided checklists, and role-based recommendations.

### 7.2 Learning Path

A sequence of courses and actions designed for a role, use case, plan, or lifecycle stage.

Examples:

- Founder Fast Start
- Support AI Employee Manager
- Sales AI Employee Manager
- Human Reviewer Certification
- Ariyo Admin Certification
- Ariyo Partner Certification
- Marketplace Creator Certification
- GEO API Growth Operator

### 7.3 Course

A structured educational unit with modules, lessons, tasks, assessments, and completion criteria.

### 7.4 Module

A group of lessons focused on one capability area.

### 7.5 Lesson

A short learning unit.

A lesson may include:

- video;
- text;
- interactive checklist;
- product walkthrough;
- quiz;
- real product action;
- downloadable template;
- example workflow;
- assessment.

### 7.6 Product Task

A real Ariyo action required for learning completion.

Examples:

- create first AI employee;
- upload knowledge file;
- connect a website source;
- configure review rules;
- test response quality;
- set budget alert;
- invite a reviewer;
- publish a workflow.

### 7.7 Certification

A verified education credential showing that a user, partner, or creator understands a defined Ariyo capability set.

### 7.8 Education Trigger

A lifecycle, product, billing, risk, usage, or failure event that recommends or launches educational guidance.

### 7.9 Learning Evidence

Proof that education translated into product action or business value.

Examples:

- completed checklist;
- passed assessment;
- deployed employee;
- resolved knowledge gaps;
- reduced unresolved conversations;
- completed review training;
- created marketplace asset;
- achieved activation milestone.

---

## 8. Data Model

### 8.1 LearningPath

```ts
type LearningPath = {
  id: string;
  slug: string;
  title: string;
  description: string;
  audience: LearningAudience[];
  planAvailability: PlanTier[];
  lifecycleStage?: CustomerLifecycleStage[];
  requiredRole?: AriyoRole[];
  recommendedForUseCases?: string[];
  courses: string[];
  estimatedMinutes: number;
  businessOutcome: string;
  completionCriteria: CompletionCriterion[];
  status: 'draft' | 'published' | 'archived';
};
```

### 8.2 Course

```ts
type Course = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  audience: LearningAudience[];
  planAvailability: PlanTier[];
  modules: CourseModule[];
  prerequisites?: string[];
  estimatedMinutes: number;
  productCapabilitiesCovered: string[];
  certificationEligible: boolean;
  status: 'draft' | 'published' | 'deprecated';
};
```

### 8.3 Lesson

```ts
type Lesson = {
  id: string;
  courseId: string;
  moduleId: string;
  title: string;
  format: 'text' | 'video' | 'interactive' | 'checklist' | 'quiz' | 'product_task' | 'template';
  estimatedMinutes: number;
  contentBlocks: LessonContentBlock[];
  requiredProductAction?: ProductActionRequirement;
  assessment?: Assessment;
  completionRule: LessonCompletionRule;
};
```

### 8.4 ProductActionRequirement

```ts
type ProductActionRequirement = {
  actionType:
    | 'create_ai_employee'
    | 'configure_business_context'
    | 'connect_knowledge_source'
    | 'connect_integration'
    | 'configure_review_policy'
    | 'invite_team_member'
    | 'set_budget_limit'
    | 'run_test_conversation'
    | 'publish_workflow'
    | 'install_marketplace_asset'
    | 'create_marketplace_listing'
    | 'view_analytics_dashboard';
  targetResourceType?: string;
  requiredOutcome: string;
  validationEvent: string;
};
```

### 8.5 UserLearningProgress

```ts
type UserLearningProgress = {
  userId: string;
  organizationId: string;
  learningPathId?: string;
  courseId: string;
  completedLessonIds: string[];
  startedAt: string;
  lastActivityAt: string;
  completedAt?: string;
  progressPercent: number;
  assessmentScore?: number;
  certificateId?: string;
  productActionsCompleted: string[];
};
```

### 8.6 Certificate

```ts
type Certificate = {
  id: string;
  userId: string;
  organizationId?: string;
  certificateType:
    | 'ariyo_admin'
    | 'ai_employee_manager'
    | 'human_reviewer'
    | 'support_ai_employee'
    | 'sales_ai_employee'
    | 'partner_advisor'
    | 'implementation_partner'
    | 'marketplace_creator'
    | 'geo_api_operator';
  issuedAt: string;
  expiresAt?: string;
  status: 'active' | 'expired' | 'revoked';
  evidence: CertificationEvidence[];
};
```

### 8.7 EducationTrigger

```ts
type EducationTrigger = {
  id: string;
  triggerEvent: string;
  audience: LearningAudience[];
  condition: string;
  recommendedLearningPathId?: string;
  recommendedCourseId?: string;
  message: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  suppressIfCompleted?: string[];
};
```

---

## 9. Audience Segments

### 9.1 Customer Admins

Need to learn:

- organization setup;
- roles and permissions;
- billing and plan controls;
- AI employee governance;
- integrations;
- audit logs;
- data privacy;
- cost control.

### 9.2 Founders and Owners

Need to learn:

- best first use case;
- ROI measurement;
- when to upgrade;
- how to delegate work safely;
- how AI employees affect team operations;
- how to evaluate outcomes.

### 9.3 AI Employee Managers

Need to learn:

- hiring AI employees;
- defining goals;
- configuring business context;
- reviewing performance;
- improving instructions;
- measuring outcomes.

### 9.4 Human Reviewers

Need to learn:

- approval responsibility;
- risk levels;
- review queues;
- editing AI output;
- rejection reasons;
- auditability;
- escalation.

### 9.5 Support Teams

Need to learn:

- knowledge quality;
- answer review;
- customer tone;
- escalation handling;
- support analytics;
- unresolved question loops.

### 9.6 Sales Teams

Need to learn:

- lead qualification support;
- follow-up automation;
- CRM integration;
- approved outreach boundaries;
- measuring pipeline impact.

### 9.7 Operations Teams

Need to learn:

- workflow automation;
- recurring processes;
- approvals;
- exception handling;
- integration reliability.

### 9.8 Marketing and GEO Teams

Need to learn:

- content marketing engine;
- AI SEO / GEO concepts;
- GEO API monitoring;
- content optimization;
- query visibility;
- competitor displacement.

### 9.9 Developers

Need to learn:

- API contracts;
- webhooks;
- integration ecosystem;
- event taxonomy;
- security and authentication;
- marketplace APIs.

### 9.10 Partners and Agencies

Need to learn:

- Ariyo positioning;
- implementation standards;
- client onboarding;
- use case packaging;
- partner ethics;
- revenue share;
- customer handoff.

### 9.11 Marketplace Creators

Need to learn:

- template standards;
- workflow packaging;
- knowledge pack quality;
- pricing;
- trust badges;
- submission review;
- support obligations.

---

## 10. Plan-Aware Academy Access

Ariyo Academy must reflect the actual plan tier.

Education must not teach users to rely on capabilities they cannot access.

### 10.1 Basic Academy Experience

Basic users should receive:

- Getting Started course;
- first AI employee setup;
- basic business context training;
- limited knowledge source training;
- simple review mode training;
- basic cost limits explanation;
- basic dashboard education;
- upgrade education when hitting limits.

Basic users should not receive deep automation or enterprise governance training as default onboarding.

They may see previews, but previews must clearly say what requires Pro or Smart.

### 10.2 Pro Academy Experience

Pro users should receive:

- operational AI employee management;
- workflow automation training;
- integration setup training;
- human review governance;
- team roles and permissions;
- AI cost control dashboards;
- customer success playbooks;
- analytics interpretation;
- use-case expansion training.

Pro Academy should help customers move from first value to repeatable operational value.

### 10.3 Smart Academy Experience

Smart users should receive:

- advanced automation training;
- multi-employee orchestration;
- deeper RAG and knowledge governance;
- AI cost optimization intelligence;
- marketplace solution bundles;
- advanced analytics;
- GEO API education;
- enterprise-style governance;
- AI safety and evaluation workflows;
- partner/consultant assisted learning options.

Smart Academy must make it clear that Smart is fuller and more intelligent, but still governed by budget, review, privacy, and safety controls.

---

## 11. Core Learning Paths

### 11.1 Founder Fast Start

Goal:

Help a founder reach first value quickly.

Modules:

1. What an Ariyo AI Employee is
2. Choose your first use case
3. Hire your first AI employee
4. Add business context
5. Add approved knowledge
6. Test before deployment
7. Review first output
8. Measure first value
9. Decide next step: Basic, Pro, or Smart

Completion criteria:

- organization created;
- first AI employee created;
- one knowledge source added;
- one test completed;
- first value dashboard viewed.

---

### 11.2 Ariyo Admin Certification

Goal:

Train admins to govern Ariyo safely.

Modules:

1. Organization and workspace settings
2. Roles and permissions
3. Billing and plan limits
4. AI employee access control
5. Integration governance
6. Human review policies
7. Audit logs
8. Data privacy and retention
9. Incident and escalation basics

Completion criteria:

- pass admin assessment;
- configure at least one role;
- configure review policy;
- confirm billing/admin access rules.

---

### 11.3 AI Employee Manager Path

Goal:

Train managers to operate and improve AI employees.

Modules:

1. AI employee goals
2. Role configuration
3. Instruction quality
4. Knowledge grounding
5. Test conversations
6. Performance review
7. Safe iteration
8. Outcome measurement

Completion criteria:

- AI employee configured;
- test suite run;
- performance metrics reviewed;
- improvement action completed.

---

### 11.4 Human Reviewer Certification

Goal:

Train reviewers to approve AI work safely.

Modules:

1. Why human review exists
2. Risk levels
3. Approval and rejection standards
4. Editing AI output
5. Escalation rules
6. Audit logs
7. Common review mistakes
8. Review speed versus safety

Completion criteria:

- pass review assessment;
- approve/reject sample outputs;
- understand escalation conditions.

---

### 11.5 Support AI Employee Path

Goal:

Train customer support teams to deploy support AI employees.

Modules:

1. Support use cases
2. Knowledge quality
3. Tone and escalation
4. Testing answer accuracy
5. Unanswered questions loop
6. Handoff to humans
7. Support analytics
8. Improving deflection safely

Completion criteria:

- support employee created;
- FAQ/knowledge connected;
- test questions passed;
- escalation rule configured.

---

### 11.6 Sales AI Employee Path

Goal:

Train sales teams to use AI employees without damaging trust.

Modules:

1. Sales use cases
2. Lead qualification
3. Follow-up drafting
4. CRM integration
5. Review before outreach
6. Personalization boundaries
7. Pipeline attribution
8. Sales compliance basics

Completion criteria:

- sales employee configured;
- CRM or lead source connected;
- review gate enabled for outbound messages.

---

### 11.7 Operations Automation Path

Goal:

Train teams to automate workflows safely.

Modules:

1. Choose operational workflow
2. Define trigger and outcome
3. Configure steps
4. Add approvals
5. Handle exceptions
6. Observe workflow health
7. Rollback and pause
8. Measure saved time

Completion criteria:

- one workflow built;
- test run completed;
- failure path configured.

---

### 11.8 GEO API Growth Operator Path

Goal:

Train marketing teams to use Ariyo GEO API responsibly.

Modules:

1. What GEO is and is not
2. Content readiness scoring
3. AI visibility tracking
4. Query monitoring
5. Competitor displacement
6. Content optimization recommendations
7. Webhooks and dashboard alerts
8. Reporting AI visibility over time

Completion criteria:

- one URL monitored;
- target queries added;
- first GEO report generated;
- improvement recommendations reviewed.

---

### 11.9 Partner Advisor Certification

Goal:

Train consultants and agencies to recommend Ariyo correctly.

Modules:

1. Ariyo positioning
2. ICP and anti-ICP
3. Use case discovery
4. Basic/Pro/Smart recommendation
5. Demo standards
6. Implementation expectations
7. Customer trust rules
8. Partner ethics

Completion criteria:

- pass partner assessment;
- submit sample implementation plan;
- agree to partner quality rules.

---

### 11.10 Marketplace Creator Certification

Goal:

Train creators to publish trusted marketplace assets.

Modules:

1. Marketplace asset types
2. Template quality
3. Workflow safety
4. Knowledge pack standards
5. Pricing rules
6. Listing copy
7. Review process
8. Support obligations
9. Refund and dispute standards

Completion criteria:

- submit sample asset;
- pass quality checklist;
- understand marketplace trust rules.

---

## 12. Education by Customer Lifecycle Stage

### 12.1 Signup

Education goal:

Reduce uncertainty and create first action.

Recommended content:

- what Ariyo is;
- what an AI employee is;
- which plan fits you;
- choose first use case.

### 12.2 Activation

Education goal:

Get to first useful AI employee outcome.

Recommended content:

- first employee setup;
- context setup;
- knowledge setup;
- safe test;
- review output.

### 12.3 Adoption

Education goal:

Turn one useful workflow into repeated use.

Recommended content:

- team roles;
- review workflows;
- analytics;
- improvements;
- use case expansion.

### 12.4 Value Realization

Education goal:

Help customer see measurable business impact.

Recommended content:

- ROI dashboards;
- outcome reports;
- saved time calculation;
- customer support reduction;
- sales pipeline influence.

### 12.5 Expansion

Education goal:

Guide customer to next use case, plan, employee, integration, or marketplace asset.

Recommended content:

- advanced employee use cases;
- workflow automation;
- marketplace bundles;
- Pro/Smart upgrade education;
- partner assisted implementation.

### 12.6 Renewal

Education goal:

Reinforce proof and remove doubts before renewal.

Recommended content:

- annual value report;
- team adoption report;
- security/privacy review;
- roadmap preview;
- optimization plan.

### 12.7 Dormant or At Risk

Education goal:

Recover stalled customers.

Recommended content:

- short restart checklist;
- fix knowledge quality;
- improve first employee;
- reduce cost concerns;
- schedule success session;
- restart with smaller use case.

### 12.8 Winback

Education goal:

Show what changed and make reactivation easy.

Recommended content:

- new capabilities;
- previous setup recovery;
- improved onboarding;
- lower-risk restart path;
- limited pilot.

---

## 13. In-Product Education

Ariyo Academy must not only live in a separate academy page.

Education must appear at the moment of need.

### 13.1 Contextual Education Surfaces

Use:

- setup side panels;
- inline explainers;
- empty states;
- checklist drawers;
- tooltips;
- interactive walkthroughs;
- review queue guidance;
- billing limit education;
- AI employee performance tips;
- integration setup guides;
- marketplace install previews;
- dashboard insight explanations.

### 13.2 Rules

In-product education must be:

- short;
- contextual;
- action-oriented;
- dismissible;
- role-aware;
- plan-aware;
- non-intrusive;
- connected to deeper academy content.

### 13.3 Bad Pattern

Do not show generic tutorial modals at every login.

### 13.4 Good Pattern

When a user sees low answer accuracy in a Support AI Employee dashboard, show:

> Your AI employee is missing approved knowledge for 37% of unanswered questions. Start the 6-minute lesson: Improve Support Knowledge Quality.

---

## 14. AI Education Assistant

Ariyo may include an AI education assistant inside Academy.

### 14.1 Purpose

The assistant helps users learn Ariyo faster by answering questions about:

- product usage;
- onboarding;
- plan differences;
- academy courses;
- best practices;
- safe configuration;
- troubleshooting.

### 14.2 Restrictions

The assistant must not:

- provide legal advice;
- override admin permissions;
- change settings without explicit approval;
- promise guaranteed AI outcomes;
- expose private organization data to unauthorized users;
- recommend unavailable plan features as if active;
- bypass support escalation.

### 14.3 Grounding

The assistant must be grounded in:

- official Ariyo docs;
- academy lessons;
- product state the user may access;
- plan entitlements;
- role permissions;
- customer lifecycle stage.

### 14.4 Recommended Behaviors

The assistant should:

- recommend a course;
- explain why a feature is unavailable;
- guide a user to the next product action;
- summarize progress;
- suggest an upgrade only when relevant;
- escalate to human support when confidence is low.

---

## 15. Certification System

### 15.1 Certification Types

Ariyo should support:

- Ariyo Admin Certified
- AI Employee Manager Certified
- Human Reviewer Certified
- Support AI Employee Certified
- Sales AI Employee Certified
- Operations Automation Certified
- GEO API Operator Certified
- Ariyo Partner Advisor Certified
- Ariyo Implementation Partner Certified
- Ariyo Marketplace Creator Certified

### 15.2 Certification Requirements

A certification may require:

- course completion;
- product actions;
- quiz score;
- scenario-based assessment;
- sample implementation;
- policy acceptance;
- periodic renewal.

### 15.3 Certification Expiration

Certifications should expire when:

- major product behavior changes;
- safety policies change;
- partner terms change;
- marketplace submission standards change;
- one year passes for high-risk certifications.

### 15.4 Certification Display

Certificates may appear in:

- user profile;
- partner directory;
- marketplace creator profile;
- admin console;
- customer success dashboard.

### 15.5 Revocation

Ariyo may revoke certification for:

- unsafe implementation;
- fraud;
- misleading claims;
- privacy violations;
- marketplace abuse;
- partner misconduct;
- repeated customer complaints.

---

## 16. Partner Training

Partner education must be stricter than customer education because partners influence customer trust.

### 16.1 Partner Academy Must Cover

- Ariyo positioning;
- responsible AI employee claims;
- use case discovery;
- implementation standards;
- security basics;
- data privacy basics;
- plan selection;
- Basic/Pro/Smart differences;
- marketplace rules;
- customer handoff;
- renewal and expansion ethics.

### 16.2 Partner Enablement Assets

Provide:

- discovery scripts;
- demo scripts;
- implementation checklists;
- pricing explanation guides;
- objection handling guides;
- industry playbooks;
- case study templates;
- security questionnaire basics;
- ROI calculators.

### 16.3 Partner Quality Controls

Partner access should be gated by:

- certification;
- customer satisfaction;
- implementation success rate;
- compliance with brand rules;
- low complaint rate;
- no misleading AI claims.

---

## 17. Marketplace Creator Education

Marketplace creators must understand that Ariyo assets affect real customer operations.

### 17.1 Creator Education Must Cover

- asset packaging;
- workflow safety;
- review gates;
- knowledge pack quality;
- integration limits;
- pricing rules;
- listing copy;
- screenshots and demo videos;
- support obligations;
- refunds and disputes;
- versioning;
- customer data boundaries.

### 17.2 Creator Readiness Checklist

A creator may publish only after:

- completing creator certification;
- passing asset review;
- providing installation instructions;
- defining support expectations;
- declaring dependencies;
- passing safety checks.

---

## 18. Course Content Standards

Every course must include:

- title;
- audience;
- business outcome;
- estimated time;
- prerequisites;
- what you will learn;
- product task if applicable;
- assessment if applicable;
- completion criteria;
- next recommended action.

### 18.1 Lesson Copywriting Rules

Use:

- clear language;
- short sections;
- direct product examples;
- business outcomes;
- honest limitations;
- plan-aware explanations;
- action verbs.

Avoid:

- academic language;
- vague AI hype;
- long theory before action;
- unsupported promises;
- hidden upsells;
- explaining internal architecture to non-technical users.

---

## 19. Learning Personalization

Ariyo Academy should recommend content based on:

- selected plan;
- user role;
- organization size;
- selected industry;
- selected first use case;
- created AI employees;
- connected knowledge sources;
- connected integrations;
- workflow usage;
- review queue activity;
- cost risk;
- AI quality issues;
- customer lifecycle stage;
- partner status;
- marketplace creator status.

### 19.1 Recommendation Examples

If a user has not connected knowledge after creating a Support AI Employee:

> Recommended: Connect Knowledge for Better Support Answers.

If review queue is slow:

> Recommended: Human Review Best Practices.

If Smart usage cost rises quickly:

> Recommended: Smart Plan Cost Optimization.

If marketplace asset install fails:

> Recommended: Installing and Troubleshooting Marketplace Assets.

---

## 20. Education Events

Ariyo must track education events using the observability taxonomy.

### 20.1 Required Events

```ts
type EducationEventName =
  | 'academy_path_viewed'
  | 'academy_path_started'
  | 'academy_path_completed'
  | 'academy_course_viewed'
  | 'academy_course_started'
  | 'academy_course_completed'
  | 'academy_lesson_started'
  | 'academy_lesson_completed'
  | 'academy_product_task_started'
  | 'academy_product_task_completed'
  | 'academy_quiz_started'
  | 'academy_quiz_completed'
  | 'academy_certificate_issued'
  | 'academy_certificate_expired'
  | 'academy_certificate_revoked'
  | 'academy_recommendation_shown'
  | 'academy_recommendation_clicked'
  | 'academy_ai_assistant_question_asked'
  | 'academy_ai_assistant_escalated'
  | 'academy_upgrade_education_viewed'
  | 'academy_partner_certification_completed'
  | 'academy_marketplace_creator_certification_completed';
```

### 20.2 Event Properties

Education events should include:

- `organization_id`
- `user_id`
- `role`
- `plan_tier`
- `lifecycle_stage`
- `learning_path_id`
- `course_id`
- `lesson_id`
- `certificate_type`
- `recommended_reason`
- `related_product_area`
- `related_ai_employee_id`
- `completion_percent`
- `assessment_score`
- `source_surface`

Do not include sensitive user-generated content in event payloads.

---

## 21. Metrics and Dashboards

### 21.1 Academy Metrics

Track:

- course start rate;
- course completion rate;
- lesson drop-off;
- certification pass rate;
- product task completion rate;
- time to first course completion;
- education-to-activation conversion;
- education-to-upgrade conversion;
- education-to-retention impact;
- partner certification conversion;
- marketplace creator readiness.

### 21.2 Customer Success Metrics

Connect education to:

- activation score;
- customer health score;
- AI employee deployment rate;
- knowledge quality improvement;
- review queue performance;
- support ticket reduction;
- feature adoption;
- renewal readiness;
- expansion readiness.

### 21.3 Dashboard Views

Provide dashboards for:

- customer admins;
- customer success managers;
- partner managers;
- marketplace managers;
- product team;
- content/academy team.

---

## 22. Academy Admin Console

Ariyo should provide an internal Academy management console.

### 22.1 Required Capabilities

- create learning paths;
- create courses;
- create lessons;
- map lessons to product actions;
- manage quizzes;
- issue certificates;
- revoke certificates;
- localize content;
- version courses;
- see analytics;
- manage partner certification;
- manage marketplace creator certification;
- preview plan-specific education.

### 22.2 Publishing Workflow

Academy content must follow:

1. Draft
2. Internal review
3. Product accuracy review
4. Legal/security review if needed
5. Localization review if needed
6. Publish
7. Monitor performance
8. Update or archive

---

## 23. Localization

Ariyo Academy should support multilingual education.

Priority languages may include:

- Persian
- English
- Arabic
- Turkish
- French
- German

### 23.1 Localization Rules

Localization must preserve:

- product meaning;
- legal disclaimers;
- pricing clarity;
- safety limitations;
- role names;
- feature availability;
- tone of trust.

Do not directly translate unclear product claims.

Rewrite for clarity in each market.

---

## 24. Accessibility

Academy must follow accessibility standards.

Requirements:

- keyboard navigation;
- captions for video;
- transcripts;
- semantic headings;
- screen reader support;
- high contrast support;
- responsive layouts;
- mobile-friendly lessons;
- reduced motion support;
- no learning task that requires drag-only interaction.

---

## 25. Frontend Requirements

Frontend implementation must include:

- learning path cards;
- course detail pages;
- lesson player;
- progress tracker;
- product task checklist;
- certificate display;
- role-based recommendations;
- plan-aware locked/previews;
- contextual education widgets;
- admin learning dashboard;
- academy search;
- mobile responsive design;
- accessible lesson navigation.

### 25.1 Components

Recommended components:

- `LearningPathCard`
- `CourseCard`
- `LessonPlayer`
- `ProgressRing`
- `ProductTaskChecklist`
- `CertificateBadge`
- `AcademyRecommendationPanel`
- `PlanLockedLessonNotice`
- `RoleLearningPathSelector`
- `AcademySearchCommand`
- `AcademyDashboard`

### 25.2 Empty States

If no course is recommended:

> Your learning path is clear for now. As your AI employees, workflows, and integrations grow, Ariyo will recommend the next training at the right time.

If a lesson is locked by plan:

> This lesson covers capabilities available in Pro or Smart. You can preview the concept, but using it requires an upgrade.

---

## 26. Backend Requirements

Backend must support:

- academy content management;
- progress tracking;
- course versioning;
- certificate issuance;
- certificate revocation;
- product action validation;
- role/permission checks;
- plan entitlement checks;
- recommendation engine;
- event logging;
- webhooks for lifecycle automation;
- localization storage;
- content publishing workflow.

### 26.1 Validation

Course completion must not rely only on client-side state.

Backend must validate:

- required lessons completed;
- required product actions completed;
- quiz passing score;
- user permission;
- plan availability;
- certificate eligibility.

---

## 27. API Shape

### 27.1 List Learning Paths

`GET /api/academy/learning-paths`

Query parameters:

- `audience`
- `role`
- `plan`
- `lifecycle_stage`
- `recommended=true`

Response:

```json
{
  "data": [
    {
      "id": "lp_founder_fast_start",
      "slug": "founder-fast-start",
      "title": "Founder Fast Start",
      "description": "Hire and test your first AI employee.",
      "estimated_minutes": 35,
      "progress_percent": 40,
      "recommended_reason": "You created an organization but have not deployed an AI employee yet."
    }
  ]
}
```

### 27.2 Get Course

`GET /api/academy/courses/{course_id}`

Response:

```json
{
  "id": "course_first_ai_employee",
  "title": "Hire Your First AI Employee",
  "level": "beginner",
  "estimated_minutes": 12,
  "plan_availability": ["basic", "pro", "smart"],
  "modules": [
    {
      "id": "module_setup",
      "title": "Setup",
      "lessons": [
        {
          "id": "lesson_choose_role",
          "title": "Choose the Right First Employee",
          "format": "interactive",
          "completed": false
        }
      ]
    }
  ]
}
```

### 27.3 Complete Lesson

`POST /api/academy/lessons/{lesson_id}/complete`

Request:

```json
{
  "course_id": "course_first_ai_employee",
  "completion_evidence": {
    "type": "product_action",
    "event_name": "ai_employee_created",
    "resource_id": "emp_123"
  }
}
```

Response:

```json
{
  "completed": true,
  "course_progress_percent": 75,
  "next_lesson_id": "lesson_test_employee"
}
```

### 27.4 Issue Certificate

`POST /api/academy/certificates/issue`

Request:

```json
{
  "certificate_type": "human_reviewer",
  "user_id": "usr_123"
}
```

Response:

```json
{
  "certificate_id": "cert_123",
  "status": "active",
  "issued_at": "2026-06-18T12:00:00Z"
}
```

---

## 28. Webhooks

Ariyo Academy should emit webhooks for lifecycle and partner systems.

Webhook events:

- `academy.course.completed`
- `academy.path.completed`
- `academy.certificate.issued`
- `academy.certificate.expired`
- `academy.certificate.revoked`
- `academy.product_task.completed`
- `academy.partner.certified`
- `academy.creator.certified`

Example payload:

```json
{
  "event": "academy.certificate.issued",
  "occurred_at": "2026-06-18T12:00:00Z",
  "organization_id": "org_123",
  "user_id": "usr_123",
  "certificate_type": "ariyo_admin",
  "certificate_id": "cert_123"
}
```

Webhook delivery must follow integration ecosystem idempotency, signing, retry, and replay protection rules.

---

## 29. Education Automation Playbooks

### 29.1 First Employee Not Created

Trigger:

- organization created;
- no AI employee after 24 hours.

Action:

- recommend Founder Fast Start;
- send short email;
- show dashboard checklist.

### 29.2 Knowledge Missing

Trigger:

- support employee created;
- no knowledge source connected.

Action:

- recommend Knowledge Setup lesson;
- show in-product guidance.

### 29.3 Review Queue Backlog

Trigger:

- review queue exceeds threshold.

Action:

- recommend Human Reviewer Certification;
- suggest adding reviewer;
- explain review policy optimization.

### 29.4 Cost Concern

Trigger:

- high AI spend velocity;
- user views billing page repeatedly.

Action:

- recommend AI Cost Control course;
- explain plan limits;
- suggest budget alerts.

### 29.5 Upgrade Readiness

Trigger:

- Basic user repeatedly hits Pro limits;
- Pro user repeatedly hits Smart intelligence limits.

Action:

- show relevant upgrade education;
- compare capabilities honestly;
- include ROI framing.

### 29.6 Marketplace Creator Intent

Trigger:

- user visits creator portal;
- starts listing creation.

Action:

- require Marketplace Creator Certification.

---

## 30. Customer-Facing Academy Copy Examples

### 30.1 Academy Homepage Hero

> Learn how to build your AI workforce with confidence.  
> Start with your first AI employee, then grow into workflows, integrations, review systems, analytics, and advanced automation.

### 30.2 Basic Education Message

> Basic gives you the essentials to hire and test your first AI employee safely. Start here, learn the workflow, and upgrade when your team needs more automation, integrations, and intelligence.

### 30.3 Pro Education Message

> Pro helps your team turn AI employees into daily operations. Learn workflow automation, integrations, review policies, team roles, and measurable business outcomes.

### 30.4 Smart Education Message

> Smart unlocks Ariyo's most advanced AI employee experience. Learn how to use deeper intelligence, advanced automation, marketplace solutions, GEO monitoring, and cost optimization responsibly.

---

## 31. Security and Privacy Education

Every customer should receive basic security and privacy education before using high-risk capabilities.

Topics:

- do not upload unnecessary sensitive data;
- use role permissions;
- review risky outputs;
- understand audit logs;
- disconnect unused integrations;
- configure retention;
- avoid sharing secrets in prompts;
- understand AI data usage policy.

High-risk features must link to relevant education.

Examples:

- before enabling autonomous workflow action;
- before connecting CRM;
- before uploading sensitive documents;
- before inviting external partner;
- before publishing marketplace asset.

---

## 32. Quality Assurance for Academy

Academy content must be tested like product.

### 32.1 QA Checklist

Before publishing a course, verify:

- content is accurate;
- screenshots match product;
- plan availability is correct;
- links work;
- product tasks validate correctly;
- accessibility passes;
- localization is reviewed;
- no unsupported claims;
- no sensitive data in examples;
- tracking events fire;
- completion logic works;
- certificates issue correctly.

### 32.2 Regression Rules

When product behavior changes, related lessons must be flagged for review.

Trigger review when:

- UI changes;
- plan capabilities change;
- AI employee behavior changes;
- workflow builder changes;
- billing limits change;
- security policy changes;
- marketplace rules change;
- partner terms change.

---

## 33. Governance

### 33.1 Content Ownership

Every course must have:

- product owner;
- content owner;
- reviewer;
- last reviewed date;
- next review date;
- source of truth references;
- status.

### 33.2 Review Cadence

Recommended cadence:

- onboarding courses: monthly;
- security/privacy courses: quarterly or on policy change;
- partner courses: quarterly;
- marketplace courses: monthly during early growth;
- feature-specific courses: whenever feature changes;
- certification assessments: quarterly.

---

## 34. Integration with Other Ariyo Systems

### 34.1 Customer Lifecycle Automation

Academy recommendations must feed lifecycle automation.

Examples:

- recommend course after stalled activation;
- use completed course as health score input;
- trigger expansion playbook after advanced course completion.

### 34.2 Customer Success

CS teams must see:

- customer learning progress;
- missing certifications;
- recommended next training;
- education-driven adoption risk;
- partner training status.

### 34.3 Marketplace

Marketplace must require creator education before publishing.

### 34.4 Partner Growth

Partner tiers must include education/certification requirements.

### 34.5 Billing and Plans

Academy must show plan-specific education and upgrade paths.

### 34.6 Analytics

Academy must send education events into product analytics.

---

## 35. Forbidden Academy Patterns

Never build or ship:

```text
Generic help center disconnected from product actions
Long video-only onboarding
Education that teaches unavailable plan features as if active
Certification without assessment
Partner access without training
Marketplace publishing without creator education
In-product education that blocks core workflow unnecessarily
Academy progress stored only in frontend state
Client-side-only certificate issuance
Lessons with unsupported AI claims
Education that says AI employees never make mistakes
Security or privacy guidance hidden deep in docs
Course completion that does not map to any customer outcome
Upgrade pressure disguised as education
Academy content without owner or review date
Outdated screenshots in core onboarding
No event tracking for education completion
No localization strategy for priority markets
No accessibility support for lessons
AI education assistant answering beyond official docs
```

---

## 36. Golden Rule

Ariyo Academy must teach customers how to achieve value safely.

Ariyo should not educate users merely to understand the product.

Ariyo should educate users to operate AI employees with confidence, governance, measurable outcomes, and repeatable business impact.

---

## 37. Final Rule

If an Ariyo feature is important enough to sell, automate, govern, or charge for, it is important enough to educate.

No major AI employee capability, workflow capability, integration capability, marketplace capability, partner capability, or plan-tier difference should ship without the education path that helps customers use it responsibly.
