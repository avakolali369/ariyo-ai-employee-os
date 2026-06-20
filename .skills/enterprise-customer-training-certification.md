# Ariyo Enterprise Customer Training & Certification Skill

## Core Contract

Ariyo Enterprise Customer Training & Certification is not a help center course library.

It is the governed enterprise enablement, learning-path, certification, readiness, role-based training, governance education, adoption assurance, and evidence system that ensures customer teams can safely operate Ariyo AI Employees, Marketplace assets, workflows, integrations, policies, approvals, analytics, and governance controls in production.

Ariyo must train customers to create measurable business value safely.

Ariyo must never assume that enterprise adoption is complete because the product is configured, the contract is signed, or the first AI Employee is launched.

---

## 1. Purpose

This skill defines how Ariyo designs, delivers, tracks, certifies, renews, and improves customer training for enterprise customers.

It covers:

- Admin training
- AI Employee manager training
- End-user enablement
- Governance board training
- Security and compliance training
- Marketplace/private catalog training
- Creator/internal builder training
- Partner-assisted customer training
- Certification exams
- Learning paths
- Adoption readiness
- Production launch readiness
- Renewal and recertification
- Training evidence for enterprise audits

The goal is to make enterprise customers capable, confident, governed, and measurable in their use of Ariyo.

---

## 2. Strategic Context

Ariyo is an AI Employee Operating System.

Enterprise customers do not only need software access. They need operational capability.

Ariyo customer training must help organizations answer:

- Who can create AI Employees?
- Who can approve AI Employee behavior?
- Who can install Marketplace assets?
- Who can change permissions?
- Who can connect data sources?
- Who can approve automation?
- Who can monitor cost, safety, and outcomes?
- Who can respond to incidents?
- Who can evaluate whether AI Employees are delivering value?

Training must align with the customer's governance model, not bypass it.

---

## 3. Dependencies

This skill depends on and must remain aligned with:

- `enterprise-account-governance.md`
- `enterprise-sso-scim-directory-sync.md`
- `enterprise-workspace-policy-engine.md`
- `enterprise-approval-workflows.md`
- `enterprise-implementation-methodology.md`
- `enterprise-professional-services-system.md`
- `customer-success-playbooks.md`
- `customer-education-academy.md`
- `human-review-governance.md`
- `admin-permissions.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-memory-context.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-observability-tracing.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-internal-template-governance.md`
- `marketplace-template-certification-program.md`
- `marketplace-template-trust-labeling-system.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`
- `enterprise-readiness.md`

Training content must not contradict product permissions, governance policies, billing limits, compliance posture, or trust labels.

---

## 4. Training Philosophy

Ariyo training must be:

1. **Role-based**  
   Each learner receives training based on responsibilities, not generic product access.

2. **Outcome-based**  
   Training completion must connect to measurable adoption and business outcomes.

3. **Governance-aware**  
   Customers must learn how to use controls, approvals, policies, and audit trails.

4. **Scenario-driven**  
   Training must teach realistic business situations, not only UI navigation.

5. **Safety-first**  
   AI automation training must include boundaries, escalation, and failure handling.

6. **Evidence-backed**  
   Enterprise customers must be able to prove who was trained and certified.

7. **Continuously updated**  
   Training must change when Ariyo features, policies, Marketplace rules, or AI behavior change.

---

## 5. Training Audiences

Ariyo must support different learner types.

### 5.1 Executive Sponsors

Focus:

- Strategic value
- ROI expectations
- Governance model
- Risk posture
- Adoption milestones
- Executive reporting
- Expansion strategy

They do not need deep configuration training.

### 5.2 Enterprise Admins

Focus:

- Organization structure
- Workspace setup
- SSO/SCIM
- Roles and permissions
- Policy engine
- Approval workflows
- Marketplace governance
- Audit reports
- Incident escalation

### 5.3 AI Employee Managers

Focus:

- AI Employee configuration
- Workflows
- Human review
- Tool permissions
- Knowledge source management
- Outcome monitoring
- Safety controls
- Cost monitoring
- Version updates

### 5.4 Internal Builders

Focus:

- Internal template creation
- Workflow design
- Prompt and tool design
- Knowledge packs
- Simulation
- Evaluation
- Private catalog publishing
- Change management

### 5.5 End Users

Focus:

- How to use assigned AI Employees
- What AI Employees can and cannot do
- How to review outputs
- How to escalate issues
- How to report incorrect or unsafe behavior
- How to provide feedback

### 5.6 Governance Board Members

Focus:

- Policy approvals
- Risk review
- Audit evidence
- AI safety governance
- Marketplace approvals
- Procurement alignment
- Incident oversight

### 5.7 Security and Compliance Teams

Focus:

- Data flows
- Permissions
- Region controls
- Vendor evidence
- Compliance matrix
- Audit reports
- Access review
- Security incidents

### 5.8 Finance and Procurement Teams

Focus:

- Plan controls
- Budget controls
- Marketplace procurement
- Billing evidence
- Payout/revenue implications
- Purchase approvals
- Spend reporting

### 5.9 Customer Success Teams

Focus:

- Adoption metrics
- Health scores
- Outcome measurement
- Training completion
- Renewal readiness
- Expansion opportunities

### 5.10 Partner Delivery Teams

Focus:

- Ariyo methodology
- Service delivery governance
- Customer training standards
- Certification requirements
- Handoff evidence

---

## 6. Learning Path Model

Ariyo must represent structured learning paths.

```ts
export type LearningPathStatus =
  | 'draft'
  | 'active'
  | 'deprecated'
  | 'archived';

export interface LearningPath {
  id: string;
  key: string;
  title: string;
  description: string;
  audience: LearnerAudience[];
  planScope: AriyoPlan[];
  requiredForRoles: string[];
  optionalForRoles: string[];
  modules: TrainingModuleRef[];
  certificationRequired: boolean;
  certificationId?: string;
  estimatedMinutes: number;
  prerequisites: string[];
  renewalIntervalDays?: number;
  status: LearningPathStatus;
  version: string;
  ownerTeam: string;
  lastReviewedAt: string;
}
```

Learning paths must be versioned because enterprise training evidence depends on knowing which content a user completed.

---

## 7. Required Core Learning Paths

Ariyo should include these enterprise learning paths.

### 7.1 Enterprise Admin Foundations

Covers:

- Organization and workspace setup
- User and group management
- SSO/SCIM basics
- Role model
- Policy inheritance
- Approval routing
- Audit logs
- Support escalation

Required for:

- Organization owners
- Enterprise admins
- Security admins

### 7.2 AI Employee Manager Certification

Covers:

- AI Employee lifecycle
- Permissions
- Tool access
- Knowledge sources
- Human review
- Evaluation
- Observability
- Cost limits
- Incident reporting

Required for:

- AI Employee owners
- Operations managers
- Workflow managers

### 7.3 Marketplace Governance Training

Covers:

- Public Marketplace
- Private catalog
- Vendor controls
- Trust labels
- Certification labels
- Install preview
- Entitlements
- Procurement approval
- Template health

Required for:

- Marketplace admins
- Procurement reviewers
- Private catalog managers

### 7.4 Internal Builder Training

Covers:

- Template creation
- Workflow design
- Prompt safety
- Tool permissions
- Dependency registry
- Simulation
- Private catalog publishing
- Version governance

Required for:

- Internal template creators
- Automation builders
- AI operations teams

### 7.5 End User Enablement

Covers:

- Working with AI Employees
- Reviewing outputs
- When to trust/not trust outputs
- Feedback submission
- Escalation
- Data handling

Required for:

- All production users assigned to Ariyo workflows

### 7.6 Governance Board Training

Covers:

- Approval workflows
- Risk tiers
- Human review
- Compliance evidence
- Marketplace governance
- Exception management
- Incident oversight

Required for:

- Governance board members
- Risk committees
- Security/compliance owners

### 7.7 Executive Value & Adoption Training

Covers:

- Outcome model
- Adoption dashboard
- ROI expectations
- Expansion governance
- EBR preparation

Required for:

- Executive sponsors
- Department leaders

---

## 8. Certification Model

Ariyo certifications must prove capability, not only attendance.

```ts
export type CertificationStatus =
  | 'not_started'
  | 'in_progress'
  | 'passed'
  | 'failed'
  | 'expired'
  | 'revoked';

export interface CustomerCertification {
  id: string;
  learnerId: string;
  organizationId: string;
  certificationKey: string;
  certificationVersion: string;
  status: CertificationStatus;
  score?: number;
  passingScore: number;
  issuedAt?: string;
  expiresAt?: string;
  revokedAt?: string;
  revocationReason?: string;
  evidenceUrl?: string;
}
```

Certification must be required before sensitive responsibilities are granted when customer governance requires it.

---

## 9. Certification Levels

### Level 1: Awareness

Purpose:

- Basic understanding
- Safe usage
- Escalation awareness

Example:

- End User Awareness

### Level 2: Operator

Purpose:

- Daily operation
- Monitoring
- Basic configuration

Example:

- AI Employee Operator

### Level 3: Admin

Purpose:

- Permission management
- Policy configuration
- Workspace governance

Example:

- Enterprise Admin

### Level 4: Builder

Purpose:

- Template and workflow creation
- Simulation
- Testing
- Private catalog publishing

Example:

- Internal Builder Certification

### Level 5: Governance

Purpose:

- High-risk approvals
- AI safety governance
- Compliance evidence
- Enterprise oversight

Example:

- Ariyo Governance Board Certification

---

## 10. Training Module Model

```ts
export type TrainingModuleType =
  | 'video'
  | 'interactive_lesson'
  | 'hands_on_lab'
  | 'scenario_simulation'
  | 'knowledge_check'
  | 'exam'
  | 'live_workshop'
  | 'office_hours'
  | 'document'
  | 'customer_specific_session';

export interface TrainingModule {
  id: string;
  title: string;
  description: string;
  type: TrainingModuleType;
  audience: LearnerAudience[];
  estimatedMinutes: number;
  prerequisites: string[];
  learningObjectives: string[];
  linkedProductAreas: string[];
  riskTopics: string[];
  version: string;
  status: 'draft' | 'active' | 'deprecated' | 'archived';
}
```

Modules must be reusable across learning paths.

---

## 11. Hands-On Labs

Ariyo must provide hands-on labs for enterprise learners.

Labs should include:

- Create a workspace
- Configure a policy
- Approve a Marketplace install
- Review an AI Employee action
- Connect a safe test integration
- Simulate a workflow
- Interpret an observability trace
- Respond to a template health alert
- Export an audit report
- Handle a permission exception

Labs must be sandboxed and must not touch production customer data unless explicitly designed as customer-specific guided implementation work.

---

## 12. Scenario Simulations

Training should include realistic scenarios.

Examples:

- A user tries to install a Smart-only Marketplace template on Basic.
- An AI Employee requests access to a sensitive CRM field.
- A Marketplace template has a region compatibility warning.
- A model provider route is deprecated.
- A workflow produces unsafe output.
- A vendor certificate expires.
- A user leaves the company and must be deprovisioned.
- A department wants to publish an internal template.
- An approval request expires before launch.

Scenario training must teach how to decide, not just what to click.

---

## 13. Training Readiness Gate

Enterprise production launch should require a training readiness review.

```ts
export interface TrainingReadinessDecision {
  organizationId: string;
  launchScopeId: string;
  requiredLearners: number;
  completedLearners: number;
  certificationPassRate: number;
  requiredRolesCovered: boolean;
  governanceBoardTrained: boolean;
  adminsCertified: boolean;
  aiEmployeeManagersCertified: boolean;
  endUsersEnabled: boolean;
  unresolvedTrainingRisks: string[];
  decision: 'ready' | 'ready_with_risks' | 'not_ready';
}
```

Production launch must be blocked or escalated when required training coverage is missing for high-risk deployments.

---

## 14. Plan-Aware Training Rules

### Basic

Basic customer training should emphasize:

- Simple safe usage
- Limited AI Employee scope
- Basic workspace setup
- Basic Marketplace usage
- Clear escalation
- Avoiding advanced automation complexity

Basic should not require heavy enterprise governance training unless the customer adds enterprise-like controls.

### Pro

Pro customer training should emphasize:

- Team workflows
- Integrations
- AI Employee management
- Operational approvals
- Marketplace install governance
- Customer success metrics
- Department-level rollout

### Smart

Smart customer training should emphasize:

- Advanced automation
- Multi-agent workflows
- Model routing
- Cost governance
- Data governance
- Private catalog
- Enterprise approvals
- Advanced observability
- Compliance evidence
- AI safety review

Smart should require stronger certification for high-risk administrative and AI governance roles.

---

## 15. Training Assignment Rules

Training can be assigned by:

- Role
- Workspace membership
- Department
- Policy requirement
- Marketplace asset installation
- AI Employee ownership
- Approval authority
- Certification requirement
- Customer success plan
- Professional services project
- Security/compliance requirement

Example:

```ts
export interface TrainingAssignmentRule {
  id: string;
  organizationId: string;
  trigger:
    | 'role_assigned'
    | 'workspace_joined'
    | 'ai_employee_owner_assigned'
    | 'marketplace_admin_assigned'
    | 'approval_authority_granted'
    | 'policy_enabled'
    | 'production_launch_scheduled'
    | 'custom';
  learningPathId: string;
  dueInDays: number;
  required: boolean;
  blockAccessUntilComplete: boolean;
}
```

Access blocking must be used carefully and only where training is required for safe operation.

---

## 16. Training Evidence

Ariyo must produce training evidence for enterprise customers.

Evidence should include:

- Learner identity
- Organization
- Role at time of training
- Learning path version
- Module completion
- Certification result
- Score
- Completion timestamp
- Expiration timestamp
- Instructor or automated proctoring metadata where applicable
- Evidence package export

Evidence must be tamper-evident and permission-scoped.

---

## 17. Admin Training Dashboard

Enterprise admins need visibility into:

- Required training by role
- Completion by department
- Certification status
- Expiring certifications
- Failed exams
- Overdue learners
- Launch readiness
- High-risk gaps
- Training coverage by workspace
- Training evidence exports

The dashboard must be usable by non-technical administrators.

---

## 18. Learner Experience

The learner experience should include:

- Assigned learning paths
- Progress tracking
- Deadlines
- Hands-on labs
- Scenario simulations
- Exams
- Certificates
- Renewal reminders
- Role-based recommendations
- “Why this training is required” explanation

Learners should understand how training maps to their actual responsibilities.

---

## 19. Certification Exams

Certification exams should test:

- Conceptual knowledge
- Scenario decisions
- Policy interpretation
- Safe escalation
- Product operation
- Audit awareness
- Data handling
- AI safety judgment

Exams should not rely only on memorized UI details.

---

## 20. Exam Integrity

Ariyo must reduce certification abuse.

Controls may include:

- Randomized question banks
- Scenario variants
- Retake limits
- Passing score thresholds
- Time windows
- Audit trail
- Instructor review for advanced certifications
- Customer-specific proctoring support where required

Do not overburden low-risk end-user training.

---

## 21. Recertification

Recertification should be required when:

- Certification expires
- Major product capability changes
- AI governance rules change
- Security/compliance obligations change
- User gains higher-risk role
- Organization changes policy requirements
- Incident shows training gap

```ts
export interface RecertificationTrigger {
  triggerType:
    | 'expiration'
    | 'major_feature_change'
    | 'role_change'
    | 'policy_change'
    | 'incident_followup'
    | 'customer_required';
  requiredBy: string;
  affectedLearners: string[];
}
```

---

## 22. Customer-Specific Training

Enterprise customers may require custom training.

Custom training must be tied to:

- Customer use cases
- Internal policy model
- Industry requirements
- Approved AI Employee roles
- Private catalog assets
- Integrations
- Data sensitivity
- Governance board expectations

Custom training must not teach unsupported product behavior or customer-specific workarounds that create hidden product debt.

---

## 23. Partner-Led Training

Partners may deliver training only if:

- They are authorized
- They use approved materials
- They follow Ariyo methodology
- They record evidence
- They do not misrepresent product capabilities
- They escalate unresolved product/security questions
- Their delivery quality is measured

Partner-led training should feed into Partner Quality Score.

---

## 24. Training and Customer Success Integration

Training must integrate with customer success.

Customer health signals should include:

- Admin certification coverage
- AI Employee manager certification coverage
- End-user enablement coverage
- Overdue training
- Training-driven adoption improvement
- Certification renewal risk
- Training-related support tickets

Training gaps should inform customer success playbooks.

---

## 25. Training and Marketplace Governance

Installing high-risk Marketplace assets may require training.

Examples:

- Smart automation template requires AI Employee Manager certification.
- Private catalog publishing requires Internal Builder certification.
- Security-sensitive integration requires Admin certification.
- Marketplace procurement approval requires Procurement/Governance training.

Install preview should show required training before activation.

---

## 26. Training and AI Employee Governance

AI Employee owners must understand:

- Allowed actions
- Tool permissions
- Data sources
- Human review
- Cost limits
- Escalation paths
- Memory behavior
- Observability
- Version changes
- Safe deactivation

AI Employee ownership should not be assigned to uncertified users if customer policy requires certification.

---

## 27. Training and Incident Response

Training must support incident readiness.

Incident training should cover:

- How to recognize unsafe AI behavior
- How to pause an AI Employee
- How to report incidents
- What evidence to preserve
- When to escalate to Ariyo
- How to communicate internally
- How to recover after incident review

Post-incident remediation may include mandatory retraining.

---

## 28. API Contract

### 28.1 List Learning Paths

`GET /api/v1/training/learning-paths`

Query params:

- `audience`
- `plan`
- `role`
- `status`

Response:

```json
{
  "learning_paths": [
    {
      "id": "lp_admin_foundations",
      "title": "Enterprise Admin Foundations",
      "audience": ["enterprise_admin"],
      "estimated_minutes": 180,
      "certification_required": true,
      "version": "1.4.0"
    }
  ]
}
```

### 28.2 Assign Training

`POST /api/v1/training/assignments`

Request:

```json
{
  "organization_id": "org_123",
  "learner_ids": ["usr_1", "usr_2"],
  "learning_path_id": "lp_ai_employee_manager",
  "required": true,
  "due_at": "2026-08-01T00:00:00Z"
}
```

### 28.3 Get Learner Progress

`GET /api/v1/training/learners/{learner_id}/progress`

Response:

```json
{
  "learner_id": "usr_1",
  "assignments": [
    {
      "learning_path_id": "lp_ai_employee_manager",
      "status": "in_progress",
      "completion_percent": 72,
      "due_at": "2026-08-01T00:00:00Z"
    }
  ]
}
```

### 28.4 Submit Exam Result

`POST /api/v1/training/certifications/{certification_id}/exam-results`

Request:

```json
{
  "learner_id": "usr_1",
  "score": 88,
  "passed": true,
  "exam_version": "2.1.0",
  "evidence_ref": "ev_123"
}
```

### 28.5 Export Training Evidence

`POST /api/v1/training/evidence/export`

Request:

```json
{
  "organization_id": "org_123",
  "format": "pdf",
  "filters": {
    "workspace_id": "ws_456",
    "certification_status": "passed"
  }
}
```

---

## 29. Webhooks

Ariyo should emit webhooks for:

- `training.assignment.created`
- `training.assignment.overdue`
- `training.module.completed`
- `training.learning_path.completed`
- `training.certification.passed`
- `training.certification.failed`
- `training.certification.expiring`
- `training.certification.expired`
- `training.certification.revoked`
- `training.readiness.changed`
- `training.launch_blocker.detected`

Webhook events must not expose sensitive assessment content unless explicitly authorized.

---

## 30. Observability Events

Track:

- `learning_path_viewed`
- `module_started`
- `module_completed`
- `lab_started`
- `lab_completed`
- `scenario_completed`
- `exam_started`
- `exam_submitted`
- `certification_issued`
- `certification_expired`
- `training_assignment_overdue`
- `training_readiness_calculated`
- `training_launch_blocker_triggered`

Events must support customer-level analytics without exposing unnecessary personal data.

---

## 31. Advanced KPIs

### Training Completion Rate

Percent of assigned learners who complete required paths.

### Certification Pass Rate

Percent of certification attempts that pass.

### Role Coverage Rate

Percent of critical roles with required certification.

### Launch Training Readiness

Whether required training is complete before production launch.

### Training-to-Adoption Lift

Improvement in adoption after training completion.

### Training-to-Support Reduction

Reduction in support tickets after training.

### Recertification Timeliness

Percent of learners recertified before expiration.

### Governance Training Coverage

Percent of governance board members trained.

### AI Employee Owner Certification Coverage

Percent of AI Employee owners certified.

### Marketplace Admin Certification Coverage

Percent of Marketplace admins certified.

---

## 32. AI Customer Training Assistant

Ariyo may provide an AI assistant for training support.

It may:

- Recommend learning paths
- Explain training requirements
- Summarize progress
- Generate study plans
- Answer product training questions
- Create customer-specific training drafts
- Help admins identify gaps
- Prepare launch readiness summaries

It must not:

- Falsify certification evidence
- Reveal exam answers
- Override certification requirements
- Encourage policy bypasses
- Give unsupported product claims
- Leak training data across customers
- Replace required human-led training where contractually required

---

## 33. Frontend Requirements

Frontend must provide:

- Learner dashboard
- Admin training dashboard
- Certification status views
- Role-based assignments
- Progress indicators
- Training readiness score
- Evidence export UI
- Certification badge display
- Renewal reminders
- Exam interface
- Lab/simulation interface
- Customer success training views

UI must clearly distinguish:

- Completed training
- Passed certification
- Expired certification
- Optional learning
- Required launch blocker

---

## 34. Backend Requirements

Backend must support:

- Learning path registry
- Module registry
- Assignment engine
- Progress tracking
- Certification engine
- Evidence store
- Exam result processing
- Recertification scheduler
- Training readiness calculator
- Role/policy integration
- Webhooks
- Audit logs
- Reporting exports

Training records must be retained according to customer and compliance requirements.

---

## 35. Security and Privacy Rules

Ariyo must:

- Protect learner identity and progress data
- Scope training visibility by role
- Avoid exposing exam answers
- Secure evidence exports
- Log administrative changes
- Support retention policies
- Support deletion/anonymization where legally required
- Prevent cross-tenant data leaks

Training data may be sensitive in enterprise contexts.

---

## 36. Compliance Rules

Training may become compliance evidence.

Therefore:

- Certification history must be auditable.
- Training content versions must be preserved.
- Completion dates must be reliable.
- Revocations must be recorded.
- Evidence exports must be reproducible.
- Customer-specific requirements must be traceable.

Do not overwrite historical training evidence when content updates.

---

## 37. Forbidden Patterns

Ariyo must never:

- Treat watched videos as certification without assessment.
- Allow users to hold high-risk roles without required training when policy requires it.
- Falsify training completion.
- Delete certification history without audit trail.
- Use training as a fake compliance signal.
- Hide overdue training from admins.
- Launch high-risk enterprise deployments without training readiness review.
- Let partners deliver unapproved training as official Ariyo certification.
- Expose exam answers through AI assistant.
- Mix customer training records across tenants.
- Grant certification badges without evidence.
- Use outdated training as proof of current readiness after major product/policy changes.

---

## 38. Acceptance Checklist

A complete implementation must support:

- Role-based learning paths
- Training assignment rules
- Certification exams
- Certification evidence
- Recertification
- Training readiness gate
- Admin dashboard
- Learner dashboard
- Customer success integration
- Marketplace governance integration
- AI Employee governance integration
- Partner-led training support
- Evidence export
- API contract
- Webhooks
- Observability events
- Security and privacy controls

---

## 39. Golden Rule

Ariyo enterprise training is complete only when the customer's people can safely operate Ariyo in production, explain their responsibilities, govern AI Employees, recognize risk, escalate correctly, measure outcomes, and prove readiness with evidence.
