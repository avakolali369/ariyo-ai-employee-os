# Ariyo Enterprise Change Management System Skill

## Core Contract

Ariyo Enterprise Change Management System is not a launch announcement plan.

It is the governed organizational-change, adoption, communication, readiness, stakeholder, resistance-management, champion-network, rollout-wave, behavior-change, and business-transformation system that helps enterprise customers adopt Ariyo AI Employees safely and successfully across teams, departments, leaders, admins, employees, partners, and governance bodies.

Ariyo must help customers change how work gets done.

Ariyo must never treat AI Employee adoption as merely a technical deployment.

---

## 1. Purpose

This skill defines how Ariyo should support enterprise customers through the human, operational, and organizational side of adopting Ariyo.

Ariyo implementations involve:

- new AI Employees entering daily workflows
- new automation responsibilities
- new approval models
- new governance expectations
- new ways of measuring work
- new interactions between humans and AI
- new marketplace/private catalog assets
- new internal operating rhythms
- new trust, safety, and accountability expectations

Without change management, Ariyo may be technically live but organizationally unused, misunderstood, resisted, misused, or under-governed.

This skill makes change management a first-class enterprise system.

---

## 2. Strategic Principle

Enterprise adoption succeeds when people understand:

1. why Ariyo is being introduced
2. what business outcomes it supports
3. how their work changes
4. what AI Employees may and may not do
5. who is accountable
6. how risk is controlled
7. how success is measured
8. where to get help
9. how to give feedback
10. how the rollout will expand

Ariyo must support all ten.

---

## 3. Dependencies

This skill depends on and connects with:

- `enterprise-account-governance.md`
- `enterprise-sso-scim-directory-sync.md`
- `enterprise-workspace-policy-engine.md`
- `enterprise-approval-workflows.md`
- `enterprise-implementation-methodology.md`
- `enterprise-professional-services-system.md`
- `enterprise-customer-training-certification.md`
- `customer-success-playbooks.md`
- `customer-lifecycle-automation.md`
- `product-analytics-growth.md`
- `observability-analytics-events.md`
- `human-review-governance.md`
- `ai-employee-architecture.md`
- `workflow-automation.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-internal-template-governance.md`
- `marketplace-template-outcome-intelligence.md`

Change management must not be isolated from product usage, training, governance, or customer success.

---

## 4. Change Management Scope

Ariyo change management covers:

- executive alignment
- business case reinforcement
- stakeholder mapping
- department readiness
- role impact analysis
- employee communication
- champion network creation
- governance education
- adoption campaigns
- pilot rollout waves
- production rollout waves
- resistance identification
- resistance mitigation
- feedback collection
- training adoption tracking
- enablement reinforcement
- usage behavior monitoring
- transformation KPI reporting
- executive business review support
- post-launch adoption optimization

---

## 5. Change Management Objects

### 5.1 ChangeProgram

```ts
interface ChangeProgram {
  id: string;
  org_id: string;
  name: string;
  executive_sponsor_id: string;
  change_owner_id: string;
  implementation_project_id?: string;
  customer_success_owner_id?: string;
  status: ChangeProgramStatus;
  business_outcomes: BusinessOutcome[];
  impacted_departments: DepartmentImpact[];
  rollout_waves: RolloutWave[];
  communication_plan_id?: string;
  training_plan_id?: string;
  champion_network_id?: string;
  readiness_score: number;
  adoption_score: number;
  resistance_score: number;
  risk_level: ChangeRiskLevel;
  created_at: string;
  updated_at: string;
}
```

### 5.2 ChangeProgramStatus

```ts
type ChangeProgramStatus =
  | 'draft'
  | 'discovery'
  | 'planning'
  | 'executive_alignment'
  | 'pilot_preparation'
  | 'pilot_active'
  | 'pilot_review'
  | 'production_rollout'
  | 'reinforcement'
  | 'optimization'
  | 'completed'
  | 'paused'
  | 'at_risk'
  | 'cancelled';
```

### 5.3 StakeholderProfile

```ts
interface StakeholderProfile {
  id: string;
  org_id: string;
  user_id?: string;
  name: string;
  role: StakeholderRole;
  department_id?: string;
  influence_level: 'low' | 'medium' | 'high' | 'executive';
  adoption_impact: 'low' | 'medium' | 'high';
  sentiment: 'supportive' | 'neutral' | 'concerned' | 'resistant' | 'unknown';
  concerns: string[];
  enablement_needs: string[];
  communication_preferences: string[];
  owner_id?: string;
  last_touchpoint_at?: string;
}
```

### 5.4 StakeholderRole

```ts
type StakeholderRole =
  | 'executive_sponsor'
  | 'business_owner'
  | 'department_leader'
  | 'ai_governance_lead'
  | 'security_lead'
  | 'legal_lead'
  | 'procurement_lead'
  | 'finance_lead'
  | 'it_admin'
  | 'workspace_admin'
  | 'ai_employee_manager'
  | 'end_user'
  | 'change_champion'
  | 'skeptic'
  | 'partner_consultant'
  | 'customer_success_manager';
```

### 5.5 RolloutWave

```ts
interface RolloutWave {
  id: string;
  change_program_id: string;
  name: string;
  wave_type: 'pilot' | 'limited_release' | 'department_rollout' | 'enterprise_rollout' | 'optimization_wave';
  target_departments: string[];
  target_users: string[];
  target_ai_employees: string[];
  target_marketplace_assets: string[];
  prerequisites: RolloutPrerequisite[];
  start_date: string;
  end_date?: string;
  success_criteria: SuccessCriterion[];
  readiness_score: number;
  adoption_score?: number;
  health_status: 'planned' | 'ready' | 'active' | 'blocked' | 'completed' | 'rolled_back';
}
```

### 5.6 ChangeReadinessAssessment

```ts
interface ChangeReadinessAssessment {
  id: string;
  org_id: string;
  change_program_id: string;
  department_id?: string;
  assessed_at: string;
  governance_readiness: number;
  leadership_alignment: number;
  training_readiness: number;
  process_readiness: number;
  technical_readiness: number;
  data_readiness: number;
  trust_readiness: number;
  communication_readiness: number;
  resistance_risk: number;
  overall_score: number;
  blockers: ReadinessBlocker[];
  recommendations: ReadinessRecommendation[];
}
```

---

## 6. Change Program Lifecycle

### Stage 1: Change Discovery

Ariyo must identify:

- what business transformation is expected
- which departments are affected
- which current workflows change
- which roles gain or lose responsibilities
- which AI Employees enter production
- which risks employees may worry about
- which leaders must sponsor adoption
- which governance bodies must be involved
- which success metrics matter

Discovery must happen before broad rollout.

### Stage 2: Executive Alignment

Ariyo must help customers align executives on:

- business outcomes
- transformation narrative
- governance boundaries
- rollout timeline
- risk tolerance
- communication stance
- success criteria
- change sponsorship
- escalation path

Without executive alignment, Ariyo rollout must be marked as at risk.

### Stage 3: Stakeholder Mapping

Ariyo must map:

- sponsors
- decision makers
- admins
- department leaders
- AI Employee owners
- end users
- skeptics
- champions
- governance reviewers
- IT/security/legal/procurement owners

Each stakeholder must have a role, influence level, sentiment, concern profile, and touchpoint owner.

### Stage 4: Readiness Assessment

Ariyo must assess readiness across:

- leadership
- process clarity
- policy clarity
- training
- data
- integrations
- identity access
- governance
- marketplace controls
- user sentiment
- support readiness

Rollout should not proceed if critical readiness blockers remain unresolved.

### Stage 5: Communication Planning

Ariyo must create communication plans for:

- executives
- managers
- admins
- end users
- governance teams
- support teams
- partners

Messages must be role-aware.

### Stage 6: Enablement and Certification

Ariyo must connect change readiness to:

- training completion
- role certification
- admin readiness
- AI Employee manager readiness
- governance board readiness
- support readiness

### Stage 7: Pilot Rollout

Ariyo must start with a controlled pilot when risk or complexity is high.

Pilot must include:

- defined audience
- defined workflows
- defined AI Employees
- defined success metrics
- feedback loops
- support coverage
- rollback plan

### Stage 8: Wave Expansion

Ariyo must expand rollout in waves, not uncontrolled broad launches.

Each wave must have:

- prerequisites
- communication
- training
- support coverage
- monitoring
- adoption targets
- risk gates

### Stage 9: Reinforcement

After launch, Ariyo must reinforce adoption through:

- office hours
- champions
- usage nudges
- success stories
- manager dashboards
- outcome reviews
- training refreshers

### Stage 10: Optimization

Ariyo must use usage, outcome, feedback, and resistance data to improve:

- AI Employee configuration
- workflows
- training
- communications
- policies
- rollout waves
- internal templates
- marketplace recommendations

---

## 7. Stakeholder Mapping Requirements

Ariyo must support stakeholder maps that answer:

- Who owns the change?
- Who funds the change?
- Who approves the change?
- Who administers the system?
- Who is affected daily?
- Who may resist?
- Who can champion adoption?
- Who handles escalations?
- Who reviews governance?
- Who validates business outcomes?

Stakeholder maps must be updated during rollout.

---

## 8. Role Impact Analysis

For each role, Ariyo must define:

- what changes in daily work
- what AI Employees may assist with
- what remains human-owned
- what approvals are required
- what skills are needed
- what risks exist
- what benefits are expected
- what success looks like

Example role impact matrix:

| Role | Change | Training Need | Risk | Success Signal |
|---|---|---|---|---|
| Sales Manager | AI assists follow-up workflows | Workflow review | over-automation | faster response time |
| HR Admin | AI drafts internal docs | Privacy rules | sensitive data exposure | reduced manual drafting |
| Finance Lead | AI summarizes spend reports | Approval controls | wrong financial action | faster reporting with review |
| Support Lead | AI triages tickets | Escalation rules | poor classification | reduced first response time |

---

## 9. Communication System

Ariyo must support communication assets such as:

- executive launch memo
- manager briefing
- end-user announcement
- AI Employee role explanation
- governance explanation
- security/privacy reassurance
- rollout schedule
- training reminder
- pilot update
- success story
- post-launch adoption summary

### 9.1 Communication Requirements

Each communication must include:

- audience
- purpose
- key message
- expected action
- date/time
- sender
- channel
- approval status
- related rollout wave
- measurement plan

### 9.2 Message Principles

Ariyo communications must be:

- specific
- honest
- non-hype
- role-aware
- outcome-oriented
- risk-aware
- action-oriented
- easy to understand

Ariyo must not tell employees that AI replaces accountability.

---

## 10. Resistance Management

Ariyo must treat resistance as signal, not failure.

Resistance categories:

- job security concern
- trust concern
- privacy concern
- workload concern
- governance concern
- quality concern
- autonomy concern
- complexity concern
- prior tool fatigue
- lack of executive clarity
- unclear ownership
- poor training

### 10.1 ResistanceSignal

```ts
interface ResistanceSignal {
  id: string;
  org_id: string;
  change_program_id: string;
  department_id?: string;
  source: 'survey' | 'feedback' | 'support_ticket' | 'meeting_note' | 'usage_drop' | 'manager_report' | 'training_gap';
  category: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  affected_roles: string[];
  recommended_actions: string[];
  owner_id?: string;
  status: 'open' | 'triaged' | 'mitigating' | 'resolved' | 'accepted_risk';
}
```

### 10.2 Resistance Response

Ariyo may recommend:

- targeted communication
- manager enablement
- extra training
- office hours
- workflow simplification
- policy clarification
- pilot extension
- rollout pause
- executive reinforcement
- configuration changes
- support escalation

---

## 11. Change Champion Network

Ariyo must support a champion program.

Champion responsibilities:

- support peers
- provide feedback
- explain value
- surface risks
- test workflows
- share use cases
- reinforce training
- help adoption campaigns

### 11.1 ChampionProfile

```ts
interface ChampionProfile {
  id: string;
  org_id: string;
  user_id: string;
  department_id?: string;
  champion_level: 'local' | 'department' | 'enterprise' | 'executive';
  focus_areas: string[];
  certified_paths: string[];
  activity_score: number;
  feedback_count: number;
  office_hours_hosted: number;
  adoption_influence_score: number;
  status: 'candidate' | 'active' | 'inactive' | 'graduated';
}
```

Ariyo must not rely on champions without manager and executive support.

---

## 12. Adoption Campaigns

Ariyo must support campaigns such as:

- first AI Employee launch campaign
- department workflow adoption campaign
- marketplace/private catalog adoption campaign
- governance training campaign
- certification campaign
- manager enablement campaign
- pilot-to-production campaign
- success story campaign

### 12.1 Campaign Requirements

Each campaign must define:

- target audience
- business outcome
- campaign messages
- training assets
- usage goals
- success metrics
- timeline
- owner
- risks
- support plan

---

## 13. Rollout Wave Governance

Ariyo must support rollout waves.

Wave types:

- discovery wave
- pilot wave
- department wave
- power-user wave
- manager wave
- enterprise wave
- optimization wave

Rollout wave prerequisites may include:

- SSO configured
- SCIM sync validated
- workspace policy configured
- approvals configured
- AI Employee tested
- knowledge source approved
- integration connected
- training complete
- champion assigned
- support ready
- executive sponsor confirmed

---

## 14. Readiness Scoring

Ariyo must compute readiness score using:

```text
readiness_score =
  leadership_alignment * 0.18 +
  governance_readiness * 0.16 +
  training_readiness * 0.14 +
  technical_readiness * 0.12 +
  process_readiness * 0.12 +
  data_readiness * 0.10 +
  support_readiness * 0.08 +
  communication_readiness * 0.06 +
  champion_readiness * 0.04
  - critical_blocker_penalty
```

Readiness score must be explainable.

---

## 15. Adoption Scoring

Ariyo must measure adoption beyond logins.

Adoption signals:

- users activated
- role-based training completed
- AI Employees used in target workflows
- workflows completed successfully
- approvals completed on time
- support tickets resolved
- repeated weekly usage
- outcome metrics improved
- managers report usefulness
- champions active
- resistance decreasing

Ariyo must not call adoption successful based only on seat activation.

---

## 16. Transformation KPIs

Ariyo must support transformation KPIs such as:

- Adoption Readiness Score
- Training Completion Rate
- Certification Completion Rate
- First Value Achievement Rate
- Pilot Success Rate
- Rollout Wave Completion Rate
- Workflow Adoption Rate
- AI Employee Weekly Active Usage
- Manager Confidence Score
- Employee Trust Score
- Resistance Severity Trend
- Champion Engagement Score
- Governance Readiness Score
- Support Readiness Score
- Time to First Business Outcome
- Change Risk Index
- Adoption Drop-off Rate
- Outcome Durability Rate

---

## 17. Feedback Loops

Ariyo must collect feedback from:

- users
- managers
- admins
- champions
- governance teams
- support teams
- customer success managers
- implementation consultants
- partners

Feedback must be linked to:

- department
- role
- workflow
- AI Employee
- template
- training path
- rollout wave
- sentiment
- risk category
- recommended action

---

## 18. Change Risk Model

Risk factors:

- executive sponsor inactive
- unclear business outcome
- low training completion
- unresolved governance blockers
- low trust score
- high resistance signals
- high support load
- rollout too broad
- role impact unclear
- no champions
- poor communication
- AI Employee health issues
- unresolved incidents

Ariyo must flag high-risk rollout before broad expansion.

---

## 19. Basic / Pro / Smart Change Rules

### 19.1 Basic Plan

Basic change management should focus on:

- simple onboarding
- clear user guidance
- low-risk AI Employee adoption
- light communication templates
- basic training completion
- simple readiness checklist

Basic should not require heavy enterprise transformation tooling.

### 19.2 Pro Plan

Pro change management should support:

- team rollout
- department workflows
- role-based training
- manager dashboards
- adoption campaigns
- champion tracking
- workflow-specific success criteria

### 19.3 Smart Plan

Smart change management should support:

- enterprise transformation governance
- multi-department rollout waves
- stakeholder mapping
- executive dashboards
- resistance analytics
- certification programs
- governance board readiness
- change risk scoring
- advanced adoption intelligence
- outcome-linked transformation reporting

Smart plan should be the full enterprise change-management experience.

---

## 20. Customer UX Requirements

Ariyo must provide customer-facing views for:

- change program overview
- rollout timeline
- readiness status
- stakeholder map
- champion network
- communication calendar
- training completion
- adoption dashboard
- resistance insights
- action plan
- risk alerts
- executive summary

UX must be understandable by non-technical executives.

---

## 21. Admin UX Requirements

Admins must be able to:

- configure rollout waves
- assign change owners
- assign champions
- view readiness blockers
- send communications
- track training completion
- monitor adoption
- identify resistance
- export change reports
- request support
- escalate risk

---

## 22. Executive UX Requirements

Executives should see:

- business outcomes
- adoption trend
- readiness score
- risk level
- rollout progress
- department comparison
- top blockers
- support needed
- success stories
- next decisions required

Executives should not be shown excessive operational details by default.

---

## 23. Partner-Led Change Management

If a partner supports implementation, Ariyo must track:

- partner role
- assigned change deliverables
- communication assets owned
- training sessions delivered
- champion sessions hosted
- risks reported
- customer satisfaction
- handoff completeness

Partner-led change must remain visible to Ariyo and customer owners.

---

## 24. AI Change Management Assistant

Ariyo may provide an AI assistant that helps:

- draft communication plans
- summarize resistance signals
- recommend rollout adjustments
- generate stakeholder briefs
- create role impact summaries
- identify readiness blockers
- prepare executive updates
- suggest training reinforcement

### 24.1 AI Assistant Restrictions

The assistant must not:

- invent stakeholder sentiment
- promise business outcomes without evidence
- hide resistance
- pressure customers into rollout
- override governance blockers
- send communications without approval
- misrepresent risk
- generate manipulative employee messaging

---

## 25. API Contract

### 25.1 Create Change Program

`POST /api/v1/enterprise/change-programs`

```json
{
  "org_id": "org_123",
  "name": "AI Employee Enterprise Rollout",
  "executive_sponsor_id": "user_exec_1",
  "change_owner_id": "user_change_1",
  "business_outcomes": [
    {
      "name": "Reduce support response time",
      "target_metric": "first_response_time",
      "target_value": "-30%"
    }
  ]
}
```

### 25.2 Readiness Assessment

`POST /api/v1/enterprise/change-programs/{program_id}/readiness-assessments`

```json
{
  "department_id": "dept_support",
  "governance_readiness": 82,
  "leadership_alignment": 90,
  "training_readiness": 70,
  "process_readiness": 75,
  "technical_readiness": 88,
  "data_readiness": 68,
  "trust_readiness": 72,
  "communication_readiness": 77,
  "resistance_risk": 35,
  "blockers": [
    {
      "type": "training_gap",
      "severity": "medium",
      "description": "Managers have not completed AI Employee Manager path."
    }
  ]
}
```

### 25.3 Create Rollout Wave

`POST /api/v1/enterprise/change-programs/{program_id}/rollout-waves`

```json
{
  "name": "Support Team Pilot",
  "wave_type": "pilot",
  "target_departments": ["dept_support"],
  "target_ai_employees": ["agent_support_triage"],
  "start_date": "2026-07-01",
  "success_criteria": [
    {
      "metric": "weekly_active_users",
      "target": 30
    },
    {
      "metric": "successful_workflow_completion_rate",
      "target": 0.85
    }
  ]
}
```

### 25.4 Track Resistance Signal

`POST /api/v1/enterprise/change-programs/{program_id}/resistance-signals`

```json
{
  "source": "survey",
  "department_id": "dept_sales",
  "category": "job_security_concern",
  "severity": "medium",
  "description": "Several users are unsure whether AI Employees will replace follow-up responsibilities.",
  "affected_roles": ["sales_representative"],
  "recommended_actions": ["manager briefing", "role impact clarification"]
}
```

### 25.5 Get Executive Summary

`GET /api/v1/enterprise/change-programs/{program_id}/executive-summary`

Response:

```json
{
  "program_id": "chg_123",
  "status": "production_rollout",
  "readiness_score": 84,
  "adoption_score": 71,
  "resistance_score": 22,
  "risk_level": "medium",
  "top_successes": ["Support pilot reached first value in 12 days"],
  "top_blockers": ["Finance training completion below target"],
  "recommended_decisions": ["Approve wave 2 rollout after finance training reaches 80%"]
}
```

---

## 26. Webhooks

Ariyo should emit:

- `change_program.created`
- `change_program.status_changed`
- `readiness_assessment.completed`
- `readiness_blocker.created`
- `rollout_wave.created`
- `rollout_wave.ready`
- `rollout_wave.started`
- `rollout_wave.completed`
- `rollout_wave.blocked`
- `resistance_signal.detected`
- `champion.assigned`
- `training_gap.detected`
- `adoption_dropoff.detected`
- `executive_summary.generated`

---

## 27. Observability Events

Required events:

```ts
type ChangeManagementEvent =
  | 'change_program_created'
  | 'stakeholder_added'
  | 'readiness_assessment_submitted'
  | 'readiness_blocker_detected'
  | 'communication_sent'
  | 'training_completion_updated'
  | 'champion_assigned'
  | 'rollout_wave_started'
  | 'rollout_wave_blocked'
  | 'rollout_wave_completed'
  | 'resistance_signal_logged'
  | 'adoption_dropoff_detected'
  | 'executive_summary_viewed'
  | 'change_risk_escalated';
```

Events must include org, workspace, department, role, program, wave, and actor context where applicable.

---

## 28. Reporting

Ariyo must support reports for:

- executive change summary
- department readiness report
- training readiness report
- adoption wave report
- resistance trend report
- champion activity report
- transformation KPI report
- risk and blocker report
- post-launch adoption report

Reports must be exportable for enterprise governance reviews.

---

## 29. Security and Privacy

Change management data may include sensitive employee sentiment or internal organizational structure.

Ariyo must protect:

- stakeholder notes
- resistance feedback
- survey responses
- training status
- role impact information
- internal communication drafts
- executive summaries

Rules:

- sentiment must be permission-scoped
- individual feedback must be anonymized where appropriate
- managers should not see sensitive raw feedback unnecessarily
- AI summaries must avoid exposing private employee details
- exports must support redaction
- retention must follow customer policy

---

## 30. Compliance Considerations

Ariyo must ensure change management does not:

- imply employment decisions without HR governance
- create hidden performance monitoring
- expose sensitive employee sentiment broadly
- pressure employees into unsafe AI use
- bypass worker consultation requirements where applicable
- misrepresent AI capabilities

---

## 31. Forbidden Patterns

Ariyo must never:

- treat technical go-live as adoption success
- skip stakeholder mapping for enterprise rollout
- ignore resistance signals
- hide low training completion
- launch broad rollout with critical readiness blockers
- use manipulative employee messaging
- promise job replacement or job safety without customer-approved language
- allow AI to send change communications without approval
- expose raw employee sentiment unnecessarily
- call a rollout successful based only on logins
- let partners run unmanaged change programs
- allow executive dashboards to hide critical blockers
- push Smart-level rollout complexity into Basic customers
- ignore governance board readiness

---

## 32. Acceptance Criteria

This skill is correctly implemented when:

- enterprise change programs can be created and tracked
- stakeholders can be mapped
- rollout waves can be configured
- readiness assessments can be completed
- blockers are visible
- communications are planned and approved
- training completion is connected to rollout gates
- champions can be assigned
- resistance signals can be captured
- adoption is measured beyond login activity
- executives can see concise progress and risk
- admins can manage rollout waves
- customer success can intervene early
- privacy-sensitive feedback is protected
- change management data informs customer health and renewal strategy

---

## 33. Golden Rule

Ariyo does not succeed when the platform is launched.

Ariyo succeeds when people trust it, understand it, use it safely, improve their work with it, and can prove the business value of the change.
