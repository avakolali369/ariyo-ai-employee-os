# Ariyo Enterprise Implementation Methodology Skill

## Core Contract

Ariyo Enterprise Implementation Methodology is not onboarding assistance.

It is the governed customer-delivery methodology that guides enterprise customers from initial discovery to production launch, adoption, governance, enablement, migration, measurement, support readiness, and expansion readiness across the Ariyo AI Employee Operating System.

Ariyo must help enterprise customers reach measurable value safely.

Ariyo must never let speed-to-launch override governance, security, data readiness, permission boundaries, customer enablement, production readiness, or business outcome clarity.

---

## 1. Purpose

This skill defines how Ariyo should plan, execute, govern, measure, and complete enterprise implementations.

It exists to ensure that every enterprise rollout:

- starts with clear business outcomes
- maps customer workflows before automation
- defines governance before production use
- validates data, integrations, and permissions
- trains users and admins before scale
- launches with measurable success criteria
- creates audit-ready implementation evidence
- reduces risk across AI Employees, Marketplace assets, workflows, data, integrations, and model routing

This skill applies to:

- enterprise onboarding
- pilot implementation
- production rollout
- department rollout
- multi-workspace rollout
- private marketplace launch
- AI Employee deployment
- workflow automation launch
- RAG/knowledge setup
- model/provider governance setup
- integration onboarding
- marketplace template adoption
- partner-led implementations
- professional services delivery
- customer success handoff

---

## 2. Related Ariyo Skills

This skill depends on and must align with:

- `business-context.md`
- `product-strategy.md`
- `enterprise-readiness.md`
- `enterprise-account-governance.md`
- `enterprise-sso-scim-directory-sync.md`
- `enterprise-workspace-policy-engine.md`
- `enterprise-approval-workflows.md`
- `human-review-governance.md`
- `ai-employee-architecture.md`
- `domain-model.md`
- `api-contracts.md`
- `knowledge-rag.md`
- `workflow-automation.md`
- `integration-ecosystem.md`
- `admin-permissions.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`
- `reliability-sla.md`
- `observability-analytics-events.md`
- `customer-success-playbooks.md`
- `quality-assurance-system.md`
- `marketplace-installation-entitlements.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-template-migration-portability.md`
- `marketplace-template-health-monitoring.md`

---

## 3. Implementation Philosophy

Enterprise implementation must be outcome-led, governance-first, and production-safe.

Ariyo implementation must not be:

- a demo-to-production shortcut
- a checklist-only project
- a generic SaaS onboarding flow
- a prompt-writing workshop
- an automation-first consulting project
- a migration without success metrics
- a one-time deployment with no adoption plan

Ariyo implementation must be:

- business-outcome-driven
- role-aware
- policy-aware
- data-aware
- integration-aware
- AI-risk-aware
- measurable
- reversible where needed
- auditable
- enablement-focused
- customer-owned after launch

---

## 4. Implementation Stages

Ariyo enterprise implementation must be organized into clear stages.

Recommended stages:

1. Qualification and readiness review
2. Executive alignment
3. Discovery
4. Solution design
5. Governance design
6. Technical readiness
7. Data and integration readiness
8. AI Employee configuration
9. Marketplace/private catalog setup
10. Pilot launch
11. Pilot evaluation
12. Production readiness review
13. Production launch
14. Enablement and change management
15. Customer success handoff
16. Optimization and expansion planning

Each stage must have:

- owner
- entry criteria
- exit criteria
- required evidence
- customer decision point
- risks
- dependencies
- success signals

---

## 5. Implementation Objects

Ariyo should model implementation as first-class product data, not as disconnected project notes.

Core objects:

```ts
interface EnterpriseImplementationProject {
  id: string;
  organization_id: string;
  customer_name: string;
  plan: 'Basic' | 'Pro' | 'Smart' | 'Enterprise';
  status: ImplementationStatus;
  implementation_type: ImplementationType;
  executive_sponsor_user_id?: string;
  customer_owner_user_id: string;
  ariyo_owner_user_id: string;
  partner_owner_id?: string;
  start_date: string;
  target_launch_date?: string;
  actual_launch_date?: string;
  scope: ImplementationScope;
  success_criteria: SuccessCriterion[];
  milestones: ImplementationMilestone[];
  risks: ImplementationRisk[];
  decisions: ImplementationDecision[];
  evidence_package_id?: string;
  created_at: string;
  updated_at: string;
}
```

```ts
type ImplementationStatus =
  | 'draft'
  | 'qualified'
  | 'discovery'
  | 'solution_design'
  | 'governance_design'
  | 'technical_setup'
  | 'pilot'
  | 'pilot_review'
  | 'production_readiness'
  | 'production_launch'
  | 'enablement'
  | 'handoff'
  | 'optimization'
  | 'complete'
  | 'blocked'
  | 'paused'
  | 'cancelled';
```

```ts
type ImplementationType =
  | 'new_enterprise_customer'
  | 'department_rollout'
  | 'ai_employee_deployment'
  | 'marketplace_private_catalog_launch'
  | 'workflow_automation_launch'
  | 'knowledge_rag_launch'
  | 'integration_rollout'
  | 'migration'
  | 'partner_led_implementation'
  | 'expansion_rollout';
```

---

## 6. Readiness Assessment

Before implementation begins, Ariyo must assess readiness.

Readiness dimensions:

- executive sponsorship
- business outcome clarity
- department ownership
- data availability
- data quality
- integration availability
- security readiness
- procurement readiness
- identity readiness
- workspace governance readiness
- admin availability
- user availability
- change management readiness
- AI risk tolerance
- legal/compliance readiness
- budget readiness
- support readiness

Readiness result:

```ts
interface EnterpriseReadinessAssessment {
  organization_id: string;
  overall_score: number;
  readiness_level: 'low' | 'medium' | 'high' | 'launch_ready';
  blockers: ReadinessBlocker[];
  warnings: ReadinessWarning[];
  required_actions: ReadinessAction[];
  approved_to_start: boolean;
  approved_by?: string;
  assessed_at: string;
}
```

Ariyo must not start a high-risk production implementation when readiness blockers are unresolved.

---

## 7. Discovery Framework

Discovery must identify what should be automated, what should be assisted, and what should remain human-controlled.

Discovery areas:

- customer business model
- departments and teams
- existing workflows
- manual pain points
- high-volume tasks
- high-risk decisions
- customer-facing processes
- internal operations
- data sources
- system integrations
- compliance requirements
- approval chains
- existing AI usage
- user roles
- success metrics
- failure modes

Discovery outputs:

- business outcome map
- workflow inventory
- AI Employee candidate list
- automation suitability matrix
- integration dependency map
- data readiness report
- governance requirement map
- implementation scope proposal
- pilot plan

---

## 8. Outcome Definition

Every implementation must define measurable outcomes before configuration starts.

Outcome examples:

- reduce response time
- reduce manual admin work
- increase lead qualification speed
- improve support deflection
- increase content production quality
- improve compliance evidence readiness
- reduce workflow handoff delays
- improve internal knowledge access
- reduce onboarding time
- improve marketing/GEO workflow output
- increase sales follow-up consistency

Outcome criteria must include:

```ts
interface SuccessCriterion {
  id: string;
  name: string;
  business_goal: string;
  metric_name: string;
  baseline_value?: number;
  target_value: number;
  measurement_window_days: number;
  data_source: string;
  owner_user_id: string;
  customer_confirmed: boolean;
}
```

Ariyo must reject vague success criteria such as:

- “use AI more”
- “improve productivity”
- “automate everything”
- “make teams faster”
- “be innovative”

unless translated into measurable business outcomes.

---

## 9. Solution Design

Solution design must translate discovery into a controlled Ariyo deployment.

The design must include:

- target use cases
- AI Employee roles
- Agent Team design
- workflow automation map
- knowledge/RAG architecture
- integration architecture
- permission model
- workspace structure
- approval flows
- human review points
- model/provider routing
- cost control rules
- observability plan
- support model
- rollback plan
- launch plan

Solution design object:

```ts
interface EnterpriseSolutionDesign {
  id: string;
  implementation_project_id: string;
  ai_employees: AIEmployeeDesign[];
  workflows: WorkflowDesign[];
  knowledge_sources: KnowledgeSourceDesign[];
  integrations: IntegrationDesign[];
  marketplace_assets: MarketplaceAssetDesign[];
  governance_controls: GovernanceControlDesign[];
  approval_flows: ApprovalFlowDesign[];
  observability_plan: ObservabilityPlan;
  rollout_plan: RolloutPlan;
  rollback_plan: RollbackPlan;
  customer_approved: boolean;
}
```

---

## 10. Governance Design

Governance must be designed before production activation.

Governance setup includes:

- organization hierarchy
- workspace boundaries
- department ownership
- admin roles
- delegated admin roles
- approval workflows
- AI Employee permission boundaries
- marketplace install policies
- data source access policies
- model provider policies
- cost and budget policies
- region/residency rules
- human review requirements
- audit/reporting requirements

Ariyo must not deploy production AI Employees without governance controls for:

- data access
- tool access
- automation scope
- integration permissions
- human review
- audit logging
- cost limits
- escalation paths

---

## 11. Technical Readiness

Technical readiness confirms Ariyo can operate safely in the customer environment.

Checks:

- identity provider configured
- SSO tested
- SCIM tested if applicable
- user and group mapping complete
- workspace structure created
- policies configured
- integrations connected
- API credentials scoped
- webhooks configured
- knowledge sources connected
- data ingestion tested
- model provider routing configured
- observability events verified
- alerts configured
- backup/export requirements understood
- security review complete

Technical readiness status:

```ts
interface TechnicalReadinessChecklist {
  sso_ready: boolean;
  scim_ready: boolean;
  workspace_ready: boolean;
  policies_ready: boolean;
  integrations_ready: boolean;
  data_ready: boolean;
  ai_employee_ready: boolean;
  marketplace_ready: boolean;
  observability_ready: boolean;
  security_ready: boolean;
  support_ready: boolean;
  launch_blockers: string[];
}
```

---

## 12. Data and Knowledge Readiness

AI Employee value depends on data readiness.

Ariyo must verify:

- source ownership
- permission boundaries
- document freshness
- data classification
- retrieval quality
- duplicate/conflicting content
- stale content risk
- access inheritance
- retention requirements
- data residency requirements
- sensitive data controls
- customer approval

Knowledge setup must include:

- source inventory
- ingestion plan
- chunking/indexing strategy
- permission mapping
- retrieval evaluation
- freshness schedule
- owner assignment
- fallback behavior

---

## 13. Integration Readiness

Integrations must be validated before AI Employees use them in production.

Integration readiness checks:

- connection authentication
- least-privilege scopes
- sandbox test
- production access approval
- rate limit awareness
- retry policy
- failure handling
- audit logging
- webhook reliability
- permission mapping
- customer owner
- vendor/subprocessor disclosure

Ariyo must never allow an AI Employee to execute integration actions with unclear permission ownership.

---

## 14. AI Employee Configuration

AI Employee setup must include:

- role definition
- responsibilities
- excluded responsibilities
- tool permissions
- escalation rules
- human review rules
- data access
- model routing
- tone and brand guidance
- safety policies
- success metrics
- failure handling
- observability
- cost controls

AI Employee readiness must include simulation before launch.

Simulation must test:

- normal workflow
- edge cases
- unsafe request handling
- missing data behavior
- tool failure behavior
- escalation behavior
- cost behavior
- permission denial behavior
- human review routing

---

## 15. Marketplace and Private Catalog Setup

For enterprise customers using Marketplace assets, implementation must include:

- allowed asset categories
- approved vendors
- approved creators
- procurement-approved assets
- private catalog policies
- installation entitlements
- region compatibility
- dependency checks
- template health monitoring
- certification/trust label review
- customer review/reputation interpretation
- billing approval
- support owner

Marketplace assets must not be installed in enterprise production unless:

- dependencies resolve
- permissions are approved
- entitlements are valid
- vendor risk is acceptable
- policy allows installation
- compliance evidence is available when required
- rollback/uninstall behavior is understood

---

## 16. Pilot Design

Pilot must be controlled and measurable.

Pilot design must define:

- pilot users
- departments
- workflows
- AI Employees
- data sources
- integrations
- success criteria
- duration
- feedback collection
- risk limits
- support process
- escalation contacts
- rollback criteria
- production promotion criteria

Pilot must not become indefinite production use without governance review.

---

## 17. Production Readiness Review

Before production launch, Ariyo must run a production readiness review.

Required checks:

- success criteria approved
- governance configured
- users provisioned
- roles mapped
- policies enforced
- approvals tested
- AI Employees simulated
- integrations tested
- knowledge retrieval evaluated
- observability verified
- support runbook ready
- rollback plan ready
- customer admins trained
- end users trained
- legal/security blockers resolved
- executive sponsor informed

Production readiness decision:

```ts
interface ProductionReadinessDecision {
  project_id: string;
  decision: 'approved' | 'approved_with_conditions' | 'blocked' | 'deferred';
  blockers: string[];
  conditions: string[];
  approved_by_customer_user_id?: string;
  approved_by_ariyo_user_id?: string;
  decision_at: string;
}
```

---

## 18. Launch Plan

Launch plan must include:

- launch date
- launch scope
- enabled users
- enabled workflows
- enabled AI Employees
- support coverage window
- monitoring dashboard
- communication plan
- training links
- feedback channel
- rollback owner
- escalation channel
- first-week review meeting
- thirty-day value review

Ariyo should support phased rollout, not only big-bang launch.

Rollout types:

- pilot group
- department wave
- workspace wave
- region wave
- use-case wave
- role-based wave
- integration-based wave

---

## 19. Enablement and Training

Enterprise implementation must include enablement.

Training audiences:

- executive sponsors
- admins
- workspace owners
- department owners
- AI Employee managers
- approval reviewers
- end users
- support teams
- compliance/security teams
- partners/implementation consultants

Training materials should include:

- what Ariyo does
- what Ariyo does not do
- how to use AI Employees
- how to escalate
- how to review outputs
- how to request new workflows
- how approvals work
- how Marketplace assets are installed
- how to report issues
- how governance protects the organization

---

## 20. Change Management

Ariyo must treat enterprise adoption as organizational change, not just software activation.

Change management includes:

- stakeholder map
- communication plan
- resistance risks
- internal champions
- training schedule
- FAQ
- launch announcement
- feedback loop
- usage nudges
- executive reporting
- adoption barriers

Ariyo should help customers answer:

- Why are we using AI Employees?
- Which jobs will they help with?
- What remains human-owned?
- How do we prevent unsafe automation?
- How do employees give feedback?
- How will success be measured?

---

## 21. Partner-Led Implementation Rules

When a partner leads implementation, Ariyo must preserve platform governance.

Partner-led implementations require:

- partner authorization
- customer consent
- defined scope
- partner roles and access limits
- customer owner
- Ariyo oversight level
- implementation evidence
- support handoff
- dispute process
- security/privacy boundaries
- partner quality scoring

Partners must not bypass:

- approval workflows
- admin permissions
- marketplace governance
- security review
- data residency rules
- billing approvals
- customer ownership

---

## 22. Implementation Evidence Package

Each enterprise implementation should generate evidence.

Evidence package includes:

- discovery summary
- success criteria
- solution design
- governance design
- readiness assessments
- technical checklist
- integration checklist
- data readiness report
- pilot results
- production readiness decision
- launch plan
- training completion records
- policy configuration export
- approval configuration export
- observability setup
- open risks
- handoff summary

Evidence must be exportable for enterprise audit and executive review.

---

## 23. Customer Success Handoff

Implementation is not complete until Customer Success can operate the account.

Handoff must include:

- customer goals
- implemented scope
- launched AI Employees
- active workflows
- active Marketplace assets
- open risks
- support needs
- adoption plan
- health metrics
- renewal risks
- expansion opportunities
- executive sponsor
- admin contacts
- governance contacts
- next review date

Handoff object:

```ts
interface CustomerSuccessHandoff {
  implementation_project_id: string;
  customer_success_manager_id: string;
  launch_summary: string;
  success_criteria: SuccessCriterion[];
  adoption_metrics: AdoptionMetric[];
  open_risks: ImplementationRisk[];
  expansion_opportunities: ExpansionOpportunity[];
  next_business_review_date?: string;
  accepted_by_csm: boolean;
  accepted_at?: string;
}
```

---

## 24. Basic / Pro / Smart Implementation Rules

### Basic

Basic implementation should prioritize:

- simple setup
- limited AI Employee scope
- low-risk use cases
- low-cost workflows
- clear templates
- minimal integrations
- lightweight governance
- fast time-to-value

Basic must not require enterprise-level complexity.

### Pro

Pro implementation should prioritize:

- team workflows
- integrations
- workflow automation
- department-level rollout
- approval workflows
- operational reporting
- customer success playbooks
- measurable productivity outcomes

Pro must include enough governance to support real operational usage.

### Smart

Smart implementation should prioritize:

- advanced AI Employee teams
- multi-agent workflows
- marketplace/private catalog controls
- RAG/knowledge intelligence
- model routing
- cost governance
- enterprise approvals
- advanced observability
- outcome intelligence
- high-control rollout

Smart must not become uncontrolled advanced automation.

---

## 25. Implementation APIs

### Create implementation project

`POST /api/v1/enterprise/implementations`

```json
{
  "organization_id": "org_123",
  "implementation_type": "new_enterprise_customer",
  "plan": "Smart",
  "customer_owner_user_id": "user_customer_owner",
  "ariyo_owner_user_id": "user_ariyo_owner",
  "target_launch_date": "2026-09-30",
  "scope": {
    "workspaces": ["Sales", "Support"],
    "ai_employee_count": 4,
    "marketplace_assets": ["asset_123"],
    "integrations": ["hubspot", "slack", "google_drive"]
  }
}
```

### Submit readiness assessment

`POST /api/v1/enterprise/implementations/{project_id}/readiness`

### Add success criterion

`POST /api/v1/enterprise/implementations/{project_id}/success-criteria`

### Approve solution design

`POST /api/v1/enterprise/implementations/{project_id}/solution-design/approve`

### Request production readiness review

`POST /api/v1/enterprise/implementations/{project_id}/production-readiness-review`

### Complete implementation

`POST /api/v1/enterprise/implementations/{project_id}/complete`

---

## 26. Webhooks

Ariyo should emit implementation lifecycle webhooks.

Events:

- `implementation.created`
- `implementation.stage_changed`
- `implementation.readiness_blocker_added`
- `implementation.readiness_blocker_resolved`
- `implementation.success_criterion_added`
- `implementation.solution_design_approved`
- `implementation.governance_design_approved`
- `implementation.pilot_started`
- `implementation.pilot_completed`
- `implementation.production_readiness_requested`
- `implementation.production_launch_approved`
- `implementation.launched`
- `implementation.handoff_completed`
- `implementation.completed`
- `implementation.blocked`
- `implementation.cancelled`

---

## 27. Observability Events

Ariyo must track implementation events.

Required events:

- `enterprise_implementation_created`
- `enterprise_readiness_assessed`
- `enterprise_discovery_completed`
- `enterprise_solution_design_created`
- `enterprise_governance_design_created`
- `enterprise_technical_readiness_checked`
- `enterprise_pilot_started`
- `enterprise_pilot_feedback_submitted`
- `enterprise_production_readiness_reviewed`
- `enterprise_launch_completed`
- `enterprise_training_completed`
- `enterprise_success_handoff_completed`
- `enterprise_implementation_blocked`
- `enterprise_implementation_risk_added`
- `enterprise_implementation_risk_resolved`

Events must include:

- organization ID
- project ID
- implementation stage
- plan
- owner
- timestamp
- risk severity where applicable
- blocker status where applicable

---

## 28. KPIs

Track:

- Time to implementation kickoff
- Time to discovery completion
- Time to pilot launch
- Time to production launch
- Implementation completion rate
- Readiness blocker rate
- Pilot-to-production conversion
- Launch rollback rate
- First value time
- Success criterion achievement rate
- Training completion rate
- Admin readiness score
- AI Employee activation rate
- Workflow activation rate
- Marketplace asset activation rate
- Support tickets during first 30 days
- Customer satisfaction after launch
- Expansion opportunities identified
- Implementation gross margin
- Partner-led implementation quality score

---

## 29. Frontend Requirements

Ariyo frontend must support:

- implementation project dashboard
- milestone timeline
- readiness checklist
- discovery workspace
- outcome builder
- solution design viewer
- governance checklist
- pilot dashboard
- production readiness review UI
- launch command center
- training tracker
- risk register
- blocker tracker
- evidence package export
- customer success handoff screen
- partner implementation view
- executive summary view

UI must be clear for:

- customer admins
- executives
- Ariyo CSMs
- implementation managers
- partners
- security/procurement stakeholders

---

## 30. Backend Requirements

Backend must support:

- implementation project storage
- milestone engine
- readiness scoring
- blocker tracking
- risk register
- success criteria tracking
- approval integration
- evidence package generation
- audit logging
- role-based access
- partner access limits
- webhook emission
- observability events
- status transitions
- immutable launch decisions
- customer success handoff
- reporting exports

---

## 31. AI Implementation Assistant

Ariyo may include an AI Implementation Assistant.

The assistant can:

- summarize discovery notes
- draft implementation plans
- identify blockers
- map workflows to AI Employee candidates
- suggest success criteria
- generate readiness checklists
- prepare executive summaries
- create training outlines
- summarize pilot feedback
- draft handoff notes

The assistant must not:

- approve production launch
- bypass governance
- invent customer requirements
- mark blockers as resolved without evidence
- create deceptive success metrics
- access customer data outside permissions
- recommend unsafe automation

---

## 32. Security, Privacy, and Compliance

Implementation data may contain sensitive customer information.

Requirements:

- role-scoped access
- customer-owned data boundaries
- audit logs for all changes
- secure handling of integration details
- no exposure of secrets in implementation notes
- data residency awareness
- retention policy
- export controls
- partner access restrictions
- evidence redaction where needed

---

## 33. Forbidden Patterns

Never:

- launch before governance is configured
- automate workflows before understanding them
- define success with vague metrics
- let partners bypass customer approval
- create AI Employees without permission boundaries
- connect integrations with excessive scopes
- skip pilot evaluation for high-risk use cases
- ignore training and change management
- mark implementation complete without customer success handoff
- hide launch blockers
- ship production workflows without rollback planning
- confuse demo success with production readiness

---

## 34. Golden Rule

Ariyo enterprise implementation is successful only when the customer can safely operate Ariyo in production, measure real business value, govern AI Employees, manage risk, support users, and continue improving after launch without depending on improvisation.
