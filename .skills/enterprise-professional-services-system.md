# Ariyo Enterprise Professional Services System Skill

## Core Contract

Ariyo Enterprise Professional Services System is not custom work on demand.

It is the governed delivery, services packaging, scoping, staffing, execution, partner coordination, margin, quality, customer handoff, and revenue operations system that lets Ariyo deliver enterprise implementations safely, profitably, repeatably, and measurably.

Ariyo must offer services that accelerate customer outcomes without creating unscalable dependency, hidden custom debt, unmanaged obligations, or delivery risk.

Professional Services must turn complex enterprise adoption into structured, auditable, outcome-driven delivery.

---

## 1. Purpose

This skill defines how Ariyo should design, sell, scope, deliver, govern, measure, and improve professional services around the Ariyo AI Employee Operating System.

Professional Services exists to help customers safely adopt Ariyo across:

- Enterprise implementation
- AI Employee configuration
- Workflow automation setup
- Knowledge and RAG preparation
- Marketplace/private catalog setup
- Governance configuration
- SSO/SCIM rollout
- Policy and approval workflow design
- Data residency and compliance setup
- Custom integration enablement
- Team training and certification
- Migration and change management
- Executive launch readiness
- Post-launch optimization

This system must make enterprise delivery repeatable rather than improvised.

---

## 2. Dependencies

This skill depends on and must align with:

- `enterprise-implementation-methodology.md`
- `enterprise-account-governance.md`
- `enterprise-workspace-policy-engine.md`
- `enterprise-approval-workflows.md`
- `enterprise-sso-scim-directory-sync.md`
- `customer-success-playbooks.md`
- `enterprise-readiness.md`
- `workflow-automation.md`
- `knowledge-rag.md`
- `integration-ecosystem.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-partner-operations.md`
- `finance-accounting-controls.md`
- `revenue-operations-system.md`
- `quality-assurance-system.md`
- `human-review-governance.md`
- `ai-agent-simulation-sandbox.md`
- `observability-analytics-events.md`

Professional Services must never bypass product governance, marketplace rules, security controls, or customer policy requirements.

---

## 3. Service Philosophy

Ariyo Professional Services should follow these principles:

1. Package repeatable services before accepting bespoke work.
2. Define outcomes before defining tasks.
3. Scope by customer readiness, risk, complexity, and required governance.
4. Prefer configuration over customization.
5. Prefer platform capabilities over one-off workarounds.
6. Preserve product upgradeability.
7. Document every customer-specific decision.
8. Handoff ownership to Customer Success and customer admins.
9. Measure value, not hours alone.
10. Protect margins without reducing delivery quality.

Professional Services is a strategic adoption accelerator, not an unlimited implementation team.

---

## 4. Service Catalog

Ariyo should define a structured service catalog.

### 4.1 Core service packages

Recommended packages:

- Enterprise Implementation Package
- AI Employee Launch Package
- Workflow Automation Package
- Knowledge & RAG Readiness Package
- Marketplace Private Catalog Setup Package
- Governance & Policy Setup Package
- SSO/SCIM Identity Setup Package
- Security & Compliance Readiness Package
- Integration Enablement Package
- Migration & Portability Package
- Training & Enablement Package
- Executive Launch Readiness Package
- Post-Launch Optimization Package

### 4.2 Advanced service packages

For enterprise and Smart customers:

- Multi-Agent Operating Model Design
- AI Employee Simulation & Evaluation Package
- Enterprise Automation Governance Package
- Custom Marketplace Template Factory
- Advanced Analytics & Outcome Intelligence Package
- Cost Optimization & Model Routing Package
- Regional Data Residency Configuration Package
- Partner-Led Transformation Package
- AI Governance Board Enablement
- Enterprise Change Management Program

### 4.3 Services that require caution

These must require approval:

- Custom production code
- Custom data migration
- Custom AI agent behavior outside product guardrails
- Customer-specific model provider routing exceptions
- Advanced workflow automation touching sensitive operations
- Any service requiring privileged customer data access
- Any service that creates legal, tax, financial, HR, medical, or regulated decision-support workflows
- Any service that implies guaranteed ROI without measurable assumptions

---

## 5. Service Package Model

Each service package must define:

```ts
interface ServicePackage {
  id: string;
  name: string;
  description: string;
  customerSegment: 'basic' | 'pro' | 'smart' | 'enterprise';
  deliveryType: 'fixed_scope' | 'time_and_materials' | 'retainer' | 'partner_delivered' | 'hybrid';
  prerequisites: string[];
  includedActivities: string[];
  excludedActivities: string[];
  deliverables: string[];
  assumptions: string[];
  customerResponsibilities: string[];
  ariYoResponsibilities: string[];
  partnerResponsibilities?: string[];
  requiredRoles: DeliveryRole[];
  estimatedDurationDays: number;
  complexityTier: 'low' | 'medium' | 'high' | 'strategic';
  riskTier: 'low' | 'medium' | 'high' | 'critical';
  approvalRequired: boolean;
  successMetrics: string[];
  handoffRequirements: string[];
  evidenceArtifacts: string[];
}
```

A package without clear exclusions is not ready to sell.

---

## 6. Service Delivery Roles

Professional Services must define clear roles.

### 6.1 Ariyo roles

- Engagement Manager
- Enterprise Implementation Lead
- Solution Architect
- AI Employee Architect
- Workflow Automation Specialist
- Knowledge/RAG Specialist
- Integration Engineer
- Security & Governance Specialist
- Data/Analytics Specialist
- Customer Enablement Lead
- QA/Simulation Lead
- Customer Success Manager
- Revenue Operations Coordinator

### 6.2 Partner roles

- Certified Implementation Partner
- Certified Workflow Partner
- Certified Integration Partner
- Certified AI Employee Template Builder
- Regional Delivery Partner
- Change Management Partner
- Training Partner

### 6.3 Customer roles

- Executive Sponsor
- Business Owner
- Technical Owner
- Security Owner
- Compliance Owner
- Procurement Owner
- Workspace Admin
- AI Governance Owner
- Department Champion
- End User Champion

Every engagement must identify required customer roles before kickoff.

---

## 7. Delivery Lifecycle

Professional Services delivery must follow a governed lifecycle.

### 7.1 Lifecycle stages

1. Qualification
2. Discovery
3. Scope design
4. Statement of Work approval
5. Resourcing
6. Kickoff
7. Solution design
8. Configuration/build
9. Simulation/testing
10. Governance review
11. Enablement
12. Production readiness review
13. Launch
14. Stabilization
15. Customer Success handoff
16. Closure and retrospective

### 7.2 Engagement status model

```ts
export type ProfessionalServicesEngagementStatus =
  | 'draft'
  | 'qualified'
  | 'discovery'
  | 'scope_pending'
  | 'sow_pending'
  | 'approved'
  | 'scheduled'
  | 'active'
  | 'blocked'
  | 'at_risk'
  | 'ready_for_launch'
  | 'launched'
  | 'stabilization'
  | 'handoff_pending'
  | 'completed'
  | 'cancelled'
  | 'paused';
```

An engagement cannot move to `launched` without a production readiness review.

---

## 8. Statement of Work Governance

Professional Services must support structured SOW creation.

### 8.1 Required SOW fields

```ts
interface StatementOfWork {
  id: string;
  customerId: string;
  opportunityId?: string;
  engagementName: string;
  businessObjectives: string[];
  scope: string[];
  outOfScope: string[];
  deliverables: Deliverable[];
  assumptions: string[];
  dependencies: string[];
  timeline: TimelineMilestone[];
  customerResponsibilities: string[];
  ariYoResponsibilities: string[];
  partnerResponsibilities?: string[];
  acceptanceCriteria: string[];
  pricingModel: 'fixed_fee' | 't_and_m' | 'retainer' | 'credits' | 'partner_billed';
  price: Money;
  marginTarget?: number;
  changeOrderRules: string[];
  legalTermsReference?: string;
  riskTier: 'low' | 'medium' | 'high' | 'critical';
  approvalStatus: 'draft' | 'internal_review' | 'customer_review' | 'approved' | 'rejected' | 'expired';
}
```

### 8.2 SOW principles

Ariyo SOWs must:

- Define measurable outcomes
- Define clear exclusions
- Define customer dependencies
- Include acceptance criteria
- Include change order rules
- Include privacy/security boundaries
- Identify custom work separately
- Avoid vague promises
- Avoid unlimited support language
- Avoid guaranteed business outcome claims without controlled assumptions

---

## 9. Scoping Framework

Professional Services must scope using structured dimensions.

### 9.1 Scope drivers

- Number of workspaces
- Number of departments
- Number of users
- Number of AI Employees
- Number of workflows
- Number of integrations
- Number of knowledge sources
- Marketplace/private catalog complexity
- Governance complexity
- Approval workflow complexity
- SSO/SCIM complexity
- Data residency requirements
- Compliance requirements
- Customer readiness
- Partner involvement
- Change management needs

### 9.2 Complexity scoring

```ts
interface EngagementComplexityScore {
  workspaceComplexity: number;
  integrationComplexity: number;
  dataComplexity: number;
  governanceComplexity: number;
  AIEmployeeComplexity: number;
  workflowComplexity: number;
  marketplaceComplexity: number;
  securityComplexity: number;
  changeManagementComplexity: number;
  totalScore: number;
  complexityTier: 'low' | 'medium' | 'high' | 'strategic';
}
```

Complexity score should influence pricing, timeline, staffing, and risk controls.

---

## 10. Delivery Quality Governance

Professional Services must include quality gates.

### 10.1 Quality gates

- Discovery completion gate
- Scope approval gate
- Solution design review gate
- Security/governance review gate
- Simulation/test gate
- Customer acceptance gate
- Production readiness gate
- Launch approval gate
- Handoff completion gate
- Engagement closure gate

### 10.2 Quality evidence

Each engagement should produce:

- Discovery summary
- Solution design document
- Configuration map
- Integration map
- Permission map
- Governance setup report
- Test/simulation results
- Risk register
- Launch checklist
- Training attendance evidence
- Customer acceptance evidence
- Handoff package
- Retrospective report

Quality must be documented, not implied.

---

## 11. Delivery Risk Management

Professional Services must maintain a risk register.

```ts
interface EngagementRisk {
  id: string;
  engagementId: string;
  category:
    | 'scope'
    | 'timeline'
    | 'customer_readiness'
    | 'technical'
    | 'integration'
    | 'data'
    | 'security'
    | 'compliance'
    | 'change_management'
    | 'partner'
    | 'commercial'
    | 'support';
  severity: 'low' | 'medium' | 'high' | 'critical';
  likelihood: 'low' | 'medium' | 'high';
  description: string;
  mitigationPlan: string;
  ownerId: string;
  status: 'open' | 'mitigating' | 'resolved' | 'accepted';
}
```

High-risk engagements require leadership review.

---

## 12. Change Order Governance

Any scope change must be explicit.

### 12.1 Change order triggers

- New integration added
- New department/workspace added
- New AI Employee type added
- Custom workflow logic requested
- New compliance requirement added
- New data migration requested
- Customer dependencies delayed
- Security review expands scope
- Timeline acceleration requested
- Partner delivery responsibilities change
- Acceptance criteria change

### 12.2 Change order model

```ts
interface ChangeOrder {
  id: string;
  engagementId: string;
  requestedBy: string;
  reason: string;
  scopeChange: string[];
  timelineImpactDays: number;
  costImpact: Money;
  marginImpact?: number;
  riskImpact: 'none' | 'low' | 'medium' | 'high';
  approvalRequiredFrom: string[];
  status: 'draft' | 'pending_customer' | 'pending_internal' | 'approved' | 'rejected' | 'cancelled';
}
```

No unapproved work should be delivered under an assumed future change order.

---

## 13. Professional Services Pricing

Ariyo should support multiple pricing models.

### 13.1 Pricing models

- Fixed-fee package
- Time and materials
- Retainer
- Implementation credits
- Partner-delivered services
- Hybrid services
- Enterprise success package

### 13.2 Pricing inputs

Pricing should consider:

- Complexity tier
- Risk tier
- Required roles
- Estimated effort
- Delivery duration
- Customer readiness
- Partner involvement
- Margin target
- Reuse potential
- Custom work ratio
- Support burden
- Strategic value

### 13.3 Margin guardrails

Professional Services must track:

- Estimated gross margin
- Actual gross margin
- Delivery overrun
- Discount impact
- Partner margin split
- Non-billable effort
- Rework cost
- Scope creep cost

Services that repeatedly produce low margin must be repackaged, repriced, automated, delegated to partners, or removed.

---

## 14. Partner-Led Delivery Governance

Partner delivery must be governed.

### 14.1 Partner eligibility

A partner may deliver services only if:

- Certified for the service category
- In good standing
- Has acceptable Partner Quality Score
- Has accepted delivery standards
- Has clear customer authorization
- Has access scoped to the engagement
- Has completed required security/privacy obligations
- Has no active enforcement restriction

### 14.2 Partner delivery controls

Partner-led engagements must include:

- Partner scope definition
- Partner deliverables
- Ariyo oversight level
- Customer escalation path
- Partner QA checklist
- Partner handoff artifacts
- Partner quality scoring
- Partner payment/revenue attribution

A partner must never be allowed to create undocumented customer-specific production risk.

---

## 15. Professional Services and Marketplace

Professional Services may support Marketplace adoption.

### 15.1 Supported Marketplace services

- Private catalog design
- Marketplace asset selection workshop
- Enterprise procurement support
- Certified template installation
- Template migration support
- Internal template governance setup
- Template health monitoring setup
- Outcome intelligence configuration
- Creator/partner onboarding for enterprise customers

### 15.2 Marketplace guardrails

Professional Services must not:

- Bypass marketplace review governance
- Install assets without entitlement and approval
- Override trust labels with verbal claims
- Promote partner assets without disclosure
- Create private catalog exceptions without audit evidence
- Hide unsafe or unsupported template dependencies

---

## 16. AI Employee Services

Professional Services may configure AI Employees.

### 16.1 AI Employee setup activities

- Role definition
- Scope definition
- Tool permission setup
- Knowledge source configuration
- Workflow integration
- Human review setup
- Simulation scenario setup
- Policy and approval setup
- Observability setup
- Cost guardrail setup
- Launch readiness testing

### 16.2 Guardrails

AI Employee services must never:

- Grant broad tool access without customer approval
- Use production customer data without approved controls
- Skip simulation for high-risk use cases
- Create AI Employees with unclear accountability
- Promise autonomous decision-making where human review is required
- Create hidden model provider dependencies

---

## 17. Enablement and Training

Professional Services must include enablement when required.

### 17.1 Training tracks

- Admin training
- Workspace owner training
- AI Employee manager training
- End-user training
- Governance board training
- Marketplace admin training
- Creator/internal builder training
- Support and operations training

### 17.2 Training evidence

Training artifacts should include:

- Attendance records
- Training modules completed
- Certification results when applicable
- Admin readiness checklist
- User adoption checklist
- Recorded sessions or documentation links
- Customer signoff

Launch without enablement should be treated as a risk.

---

## 18. Customer Handoff

Professional Services must hand off to Customer Success.

### 18.1 Handoff package

```ts
interface CustomerHandoffPackage {
  engagementId: string;
  customerId: string;
  implementationSummary: string;
  businessOutcomes: string[];
  configuredWorkspaces: string[];
  configuredAIEmployees: string[];
  integrationsEnabled: string[];
  marketplaceAssetsInstalled: string[];
  governancePoliciesConfigured: string[];
  openRisks: string[];
  openActionItems: string[];
  successMetrics: string[];
  adoptionPlan: string[];
  supportNotes: string[];
  renewalExpansionSignals: string[];
}
```

### 18.2 Handoff requirements

A handoff is complete only when:

- Customer Success accepts ownership
- Customer admin accepts ownership
- Open risks are documented
- Production configuration is documented
- Success metrics are configured
- Support path is defined
- Next adoption milestone is clear

---

## 19. Basic / Pro / Smart Service Rules

### 19.1 Basic

Basic services should be:

- Lightweight
- Template-based
- Low risk
- Short duration
- Mostly self-serve assisted
- Limited in custom work
- Focused on first value

Basic should not include complex custom integrations, extensive governance setup, or enterprise implementation methodology unless upgraded.

### 19.2 Pro

Pro services should support:

- Team/workspace setup
- Workflow implementation
- Integration enablement
- Moderate governance
- Department rollout
- Customer training
- Marketplace asset setup
- Partner-assisted delivery

Pro should balance speed and operational value.

### 19.3 Smart

Smart services should support:

- Enterprise-grade governance
- Multi-agent systems
- Advanced automation
- Private marketplace setup
- Advanced RAG and knowledge design
- Identity integration
- Approval workflows
- Analytics and outcome intelligence
- Cost optimization
- Custom rollout plans

Smart requires stronger delivery governance, acceptance criteria, and handoff discipline.

---

## 20. Professional Services API

### 20.1 Create engagement

`POST /api/v1/professional-services/engagements`

```json
{
  "customer_id": "cus_123",
  "package_id": "svc_enterprise_implementation",
  "business_objectives": ["Launch AI Employees for support operations"],
  "target_plan": "smart",
  "delivery_type": "fixed_scope",
  "requested_start_date": "2026-07-15"
}
```

### 20.2 Get engagement

`GET /api/v1/professional-services/engagements/{engagement_id}`

### 20.3 Create SOW

`POST /api/v1/professional-services/sows`

### 20.4 Approve SOW

`POST /api/v1/professional-services/sows/{sow_id}/approve`

### 20.5 Create change order

`POST /api/v1/professional-services/change-orders`

### 20.6 Submit milestone evidence

`POST /api/v1/professional-services/engagements/{engagement_id}/milestones/{milestone_id}/evidence`

### 20.7 Complete handoff

`POST /api/v1/professional-services/engagements/{engagement_id}/handoff`

---

## 21. Webhooks

Ariyo should emit webhooks for:

- `professional_services.engagement.created`
- `professional_services.engagement.qualified`
- `professional_services.sow.created`
- `professional_services.sow.approved`
- `professional_services.engagement.started`
- `professional_services.milestone.completed`
- `professional_services.risk.created`
- `professional_services.risk.escalated`
- `professional_services.change_order.created`
- `professional_services.change_order.approved`
- `professional_services.launch_ready`
- `professional_services.launched`
- `professional_services.handoff.completed`
- `professional_services.engagement.completed`

---

## 22. Observability Events

Track:

- `service_package_viewed`
- `service_package_selected`
- `engagement_created`
- `engagement_qualified`
- `sow_generated`
- `sow_approved`
- `milestone_started`
- `milestone_completed`
- `risk_created`
- `risk_escalated`
- `change_order_requested`
- `change_order_approved`
- `customer_dependency_blocked`
- `partner_delivery_assigned`
- `launch_readiness_review_started`
- `launch_readiness_approved`
- `handoff_started`
- `handoff_completed`
- `engagement_closed`

Events must include customer, package, plan, risk tier, role ownership, timeline, and revenue metadata where appropriate.

---

## 23. Advanced KPIs

Professional Services should track:

- Time to kickoff
- Time to first value
- Time to production launch
- Implementation completion rate
- On-time milestone rate
- Scope creep rate
- Change order rate
- Gross margin by package
- Delivery overrun percentage
- Rework rate
- Customer dependency delay rate
- Partner delivery quality score
- Launch readiness pass rate
- Post-launch incident rate
- Customer satisfaction after delivery
- Handoff completeness rate
- Expansion pipeline influenced by services
- Services-to-subscription attach rate
- Adoption lift after services
- Renewal impact of services

---

## 24. Frontend Requirements

### 24.1 Internal console

Must include:

- Engagement pipeline
- Package catalog
- SOW builder
- Timeline and milestones
- Risk register
- Change order management
- Resource planning
- Partner assignment
- Evidence uploads
- Launch readiness checklist
- Handoff checklist
- Margin dashboard
- Delivery quality dashboard

### 24.2 Customer portal

Must include:

- Engagement overview
- Timeline
- Customer responsibilities
- Pending approvals
- Milestone evidence
- Training schedule
- Launch checklist
- Open risks
- Handoff package
- Support transition

### 24.3 Partner portal

Must include:

- Assigned engagements
- Partner deliverables
- Evidence submission
- Customer access boundaries
- Quality checklist
- Escalation path
- Partner performance score

---

## 25. Backend Requirements

The backend must support:

- Service package registry
- Engagement lifecycle state machine
- SOW generation and approval
- Change order management
- Milestone tracking
- Evidence storage
- Risk register
- Resource assignment
- Partner assignment
- Customer responsibility tracking
- Margin tracking
- Revenue operations integration
- Customer success handoff integration
- Audit logging
- Permissioned access
- Reporting and analytics

Professional Services records are business-critical and must be auditable.

---

## 26. AI Professional Services Assistant

Ariyo may use an AI assistant to help delivery teams.

### 26.1 Allowed AI assistance

- Draft discovery summaries
- Draft SOW sections
- Summarize engagement risks
- Generate milestone checklists
- Prepare launch readiness summaries
- Draft customer handoff packages
- Suggest next-best delivery actions
- Detect scope creep signals
- Identify blocked customer dependencies
- Recommend relevant service package templates

### 26.2 Not allowed without human review

AI must not independently:

- Approve SOWs
- Approve change orders
- Commit pricing
- Make legal promises
- Modify customer production configuration
- Accept customer deliverables
- Close engagements
- Approve launch readiness
- Override security/compliance requirements

AI can assist delivery, but humans own commitments.

---

## 27. Security and Privacy

Professional Services must follow strict boundaries.

Requirements:

- Least privilege access
- Customer-approved access only
- Time-bound access where possible
- No unmanaged data exports
- No use of customer production data in examples unless approved
- No shared credentials
- No partner access without explicit authorization
- No hidden data copies
- Sensitive evidence redaction
- Audit logs for delivery access
- Separation between delivery notes and customer confidential data

Professional Services often handles sensitive enterprise context; governance must be stronger, not weaker.

---

## 28. Compliance Requirements

Professional Services must support compliance readiness by producing evidence.

Evidence may include:

- Scope and SOW approvals
- Security review notes
- Governance configuration reports
- Access records
- Training records
- Launch readiness approval
- Customer acceptance
- Handoff package
- Risk register
- Change orders
- Partner authorization

Compliance evidence must be tied to engagements, customers, owners, timestamps, and retention rules.

---

## 29. Revenue Operations Integration

Professional Services must integrate with revenue operations.

Required RevOps connections:

- Opportunity linkage
- Quote linkage
- SOW linkage
- Booking recognition
- Billing schedule
- Services revenue recognition support
- Delivery margin tracking
- Partner payout or referral attribution
- Renewal/expansion influence tracking
- Customer health impact

Services revenue must not become disconnected from delivery obligations.

---

## 30. Finance Controls

Financial controls must include:

- Approved pricing model
- Discount approval
- Margin threshold alerting
- Change order approval
- Non-billable effort tracking
- Partner payment tracking
- Refund/credit handling
- Revenue recognition support
- Invoice milestone linkage

Professional Services finance must be auditable from quote to delivery closure.

---

## 31. Support Transition

Before engagement closure:

- Support must know what was configured
- Customer Success must know intended outcomes
- Open risks must be documented
- Known limitations must be documented
- Escalation path must be clear
- Customer admin must know responsibilities
- Product gaps must be logged
- Feature requests must be separated from commitments

Unclear support transition creates long-term trust damage.

---

## 32. Product Feedback Loop

Professional Services must feed product improvement.

Signals:

- Repeated custom requests
- Manual configuration pain
- Common integration blockers
- Repeated customer confusion
- Frequent SOW exclusions
- High-effort setup steps
- Repeated governance setup patterns
- Training gaps
- Partner delivery issues

Ariyo should convert repeated service work into product, templates, documentation, marketplace assets, or self-serve onboarding.

---

## 33. Forbidden Patterns

Ariyo must never allow:

- Unlimited vague professional services scope
- Verbal commitments not represented in SOW
- Production launch without readiness review
- Custom work without change order
- Partner delivery without authorization
- Shared credentials
- Hidden customer data exports
- Services that bypass product policy engine
- Services that bypass marketplace approval
- AI-generated SOWs without human review
- Services sold with impossible timelines
- Low-margin services repeated without redesign
- Customer-specific hacks that break upgradeability
- Launch without support and CS handoff
- Training skipped for high-risk deployments
- Scope expansion hidden as customer success work
- Partner conflict of interest undisclosed

---

## 34. Acceptance Checklist

A Professional Services engagement is acceptable only if:

- Scope is documented
- Out-of-scope items are documented
- Customer responsibilities are clear
- Required roles are assigned
- Risk tier is known
- Pricing model is approved
- Margin is visible
- Security/privacy boundaries are defined
- Delivery milestones exist
- Acceptance criteria exist
- Change order process exists
- Launch readiness review is planned
- Handoff requirements are defined

---

## 35. Golden Rule

Professional Services must make enterprise adoption easier, safer, faster, and more valuable.

It must not become a hidden second product, an unmanaged customization factory, or an excuse to bypass platform governance.
