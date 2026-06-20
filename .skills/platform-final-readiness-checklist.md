# Ariyo Platform Final Readiness Checklist Skill

## Core Contract

Ariyo Platform Final Readiness Checklist is not a launch to-do list.

It is the governed go/no-go decision system that determines whether Ariyo AI Employee Operating System, Marketplace, Enterprise Governance, Trust & Safety, Revenue Operations, Support, Security, Compliance, AI Safety, Data, Product, Engineering, and Customer Delivery are ready for a controlled production launch.

Ariyo must launch only when the platform is safe enough, reliable enough, supportable enough, sellable enough, governable enough, measurable enough, and reversible enough.

Ariyo must never launch because the roadmap says launch.

---

## 1. Purpose

This skill defines the final readiness framework for Ariyo before major release milestones such as:

- Private alpha
- Design partner launch
- Internal dogfood launch
- Marketplace private beta
- Enterprise pilot launch
- Public beta
- General availability
- Regional launch
- Smart plan launch
- Marketplace creator launch
- Enterprise marketplace launch
- AI Employee production rollout

The checklist is designed to prevent incomplete launches that create security incidents, customer confusion, billing mistakes, unsafe AI behavior, support overload, marketplace trust erosion, compliance gaps, or irreversible operational damage.

---

## 2. Readiness Philosophy

Ariyo readiness must be judged across the whole operating system, not only the product UI.

A feature is not ready when it works locally.

A feature is ready when it is:

- Safe
- Tested
- Observable
- Documented
- Governed
- Supportable
- Billable when applicable
- Reversible when needed
- Permission-scoped
- Policy-compliant
- Customer-understandable
- Operationally owned
- Integrated with incident response
- Measurable after launch

---

## 3. Launch Readiness Objects

Ariyo should model launch readiness as structured objects.

### PlatformLaunchReadinessReview

```ts
export type PlatformLaunchReadinessReview = {
  id: string;
  launchName: string;
  launchType:
    | 'internal_dogfood'
    | 'private_alpha'
    | 'design_partner'
    | 'private_beta'
    | 'public_beta'
    | 'general_availability'
    | 'enterprise_pilot'
    | 'marketplace_launch'
    | 'regional_launch'
    | 'smart_plan_launch';
  scope: LaunchScope;
  ownerUserId: string;
  executiveSponsorUserId?: string;
  status:
    | 'draft'
    | 'in_review'
    | 'blocked'
    | 'conditionally_ready'
    | 'ready'
    | 'approved_to_launch'
    | 'launched'
    | 'rolled_back'
    | 'cancelled';
  readinessAreas: ReadinessAreaResult[];
  blockers: LaunchBlocker[];
  risks: LaunchRisk[];
  exceptions: LaunchException[];
  decision: GoNoGoDecision;
  evidencePackageId?: string;
  reviewedAt?: string;
  approvedAt?: string;
  launchedAt?: string;
  rollbackPlanId?: string;
};
```

### LaunchScope

```ts
export type LaunchScope = {
  plans: Array<'basic' | 'pro' | 'smart' | 'enterprise'>;
  regions: string[];
  customerSegments: string[];
  workspaces?: string[];
  marketplaceEnabled: boolean;
  creatorEnabled: boolean;
  enterpriseGovernanceEnabled: boolean;
  billingEnabled: boolean;
  publicMarketingEnabled: boolean;
  supportCoverage: 'internal_only' | 'business_hours' | 'priority' | 'enterprise_sla';
};
```

### ReadinessAreaResult

```ts
export type ReadinessAreaResult = {
  area:
    | 'product'
    | 'frontend'
    | 'backend'
    | 'ai_safety'
    | 'security'
    | 'privacy'
    | 'compliance'
    | 'reliability'
    | 'observability'
    | 'marketplace'
    | 'enterprise_governance'
    | 'billing'
    | 'support'
    | 'customer_success'
    | 'sales'
    | 'legal'
    | 'documentation'
    | 'operations'
    | 'incident_response'
    | 'data'
    | 'localization';
  status: 'not_started' | 'in_progress' | 'blocked' | 'ready_with_risk' | 'ready';
  score: number;
  requiredEvidenceIds: string[];
  missingEvidenceIds: string[];
  blockerCount: number;
  ownerUserId: string;
  reviewedAt?: string;
};
```

---

## 4. Readiness Severity

Launch issues must have severity levels.

| Severity | Meaning | Launch Impact |
|---|---|---|
| P0 | Critical safety, security, billing, data, or legal blocker | No launch |
| P1 | High-risk blocker with customer impact | No launch unless executive exception |
| P2 | Important gap with mitigation available | Conditional launch possible |
| P3 | Minor issue or documentation gap | Launch allowed with follow-up |
| P4 | Improvement item | No launch impact |

A launch with unresolved P0 blockers must not proceed.

A launch with unresolved P1 blockers must not proceed unless there is explicit executive approval, documented mitigation, rollback plan, and limited launch scope.

---

## 5. Go / No-Go Decision Model

```ts
export type GoNoGoDecision = {
  decision: 'go' | 'conditional_go' | 'no_go' | 'delay' | 'rollback_required';
  decidedByUserId: string;
  decidedAt: string;
  rationale: string;
  approvedExceptions: string[];
  requiredMitigations: string[];
  launchWindow?: {
    startsAt: string;
    endsAt: string;
  };
  rollbackTriggerIds: string[];
};
```

Decision criteria:

- No unresolved P0 blockers
- P1 blockers mitigated or launch delayed
- Rollback plan approved
- Monitoring active
- Support playbook ready
- Incident owner assigned
- Customer communication ready
- Billing tested if monetized
- Permissions tested if data access exists
- AI safety tested if AI output exists
- Compliance evidence linked if enterprise-facing

---

## 6. Product Readiness Checklist

Product readiness must confirm:

- Clear launch scope
- Clear target customer segment
- Clear jobs-to-be-done
- Clear product promise
- Clear limitations
- Clear plan availability
- Clear beta/GA status
- Clear success metrics
- Clear failure criteria
- Clear support path
- Clear deprecation/rollback behavior

Required evidence:

- Product requirements approved
- Success criteria defined
- Known limitations documented
- User flows reviewed
- UX copy reviewed
- Customer-facing help docs drafted
- Admin settings documented
- Launch segmentation defined
- Feature flags configured
- Rollback criteria documented

Forbidden patterns:

- Launching with undefined target customer
- Launching with unclear pricing or entitlement behavior
- Launching without user-facing limitations
- Launching with hidden manual operations
- Launching with no owner for post-launch decisions

---

## 7. Frontend Readiness Checklist

Frontend readiness must confirm:

- Responsive behavior works across supported viewports
- RTL/LTR behavior is handled where applicable
- Accessibility baseline is met
- Empty states are clear
- Loading states are stable
- Error states are understandable
- Permission-denied states are safe
- Upgrade prompts are accurate
- Trust labels are not misleading
- Billing prompts are not confusing
- Marketplace install flows are reversible
- Admin controls are not hidden behind unclear UI

Required evidence:

- Critical UI walkthrough recorded
- Accessibility checks completed
- Browser/device coverage tested
- Error-state screenshots captured
- Copy review completed
- Localization review completed where applicable

---

## 8. Backend Readiness Checklist

Backend readiness must confirm:

- APIs are versioned
- Authentication is enforced
- Authorization is enforced
- Rate limits exist where needed
- Idempotency exists for financial or install operations
- Audit logs are written
- Background jobs are retry-safe
- Data migrations are reversible or safely forward-only
- Integration failures degrade safely
- Webhooks are signed
- Sensitive data is protected
- Multi-tenant isolation is tested

Required evidence:

- API contract approved
- Integration tests passed
- Load tests completed for launch scope
- Migration plan approved
- Rollback plan approved
- Audit log sample verified
- Security review completed

---

## 9. AI Safety Readiness Checklist

AI safety readiness must confirm:

- Prompt contracts are versioned
- Model profiles are defined
- Tool permissions are scoped
- Memory usage is controlled
- RAG sources are approved
- Human review gates exist where required
- Unsafe output handling is tested
- Evaluation suites passed
- Simulation tests passed
- AI incident response is ready
- Cost controls are active
- Model fallback behavior is safe

Required evidence:

- AI safety evaluation report
- Prompt/tool permission review
- Model routing review
- Evaluation benchmark results
- Simulation sandbox results
- Safety escalation paths
- Human review policy mapping

No AI Employee launch should proceed without AI safety evidence.

---

## 10. Security Readiness Checklist

Security readiness must confirm:

- Threat model completed
- Authentication tested
- Authorization tested
- Admin permissions tested
- Data access boundaries tested
- Secrets management verified
- Integration tokens protected
- Webhook signing enabled
- Marketplace asset permissions reviewed
- Vendor/subprocessor risks reviewed
- Incident response path confirmed

Required evidence:

- Security review completed
- Penetration test or targeted security test where required
- Threat model linked
- Dependency scan completed
- High severity vulnerabilities resolved or accepted with mitigation
- Security owner assigned

P0 security blockers prevent launch.

---

## 11. Privacy & Data Governance Readiness Checklist

Privacy readiness must confirm:

- Data classification complete
- Data flow mapping complete
- Data retention rules defined
- Deletion behavior defined
- Export behavior defined
- Data residency behavior defined
- Model provider data handling disclosed
- Vendor/subprocessor data access reviewed
- Customer-facing privacy language reviewed
- Sensitive data controls tested

Required evidence:

- Data processing map
- Retention policy mapping
- Privacy review
- Data residency compatibility review
- Customer-facing disclosure review
- Subprocessor evidence where needed

---

## 12. Compliance Readiness Checklist

Compliance readiness must confirm:

- Applicable frameworks mapped
- Controls mapped to evidence
- Gaps tracked
- Exceptions approved
- Audit reports available where enterprise-facing
- Trust center evidence updated
- Legal pages updated where needed
- Marketplace compliance labels accurate
- Procurement evidence available

Required evidence:

- Compliance matrix entry
- Evidence center package
- Legal approval for public claims
- Trust label review
- Enterprise procurement package where applicable

---

## 13. Reliability & SLA Readiness Checklist

Reliability readiness must confirm:

- SLOs defined
- SLIs instrumented
- Error budgets considered
- Dependencies monitored
- Degraded modes defined
- Retry behavior safe
- Rollback behavior tested
- On-call owner assigned
- Status page policy defined
- Incident severity mapping ready

Required evidence:

- Reliability review
- Load/performance test results
- Dependency health report
- Rollback drill result
- On-call schedule
- Incident playbook

---

## 14. Observability Readiness Checklist

Observability readiness must confirm:

- Critical events instrumented
- Logs are structured
- Traces are available for AI/tool workflows
- Metrics dashboards exist
- Alert thresholds configured
- Customer impact can be measured
- Marketplace health signals are collected
- Billing events are observable
- Support triage has visibility

Required evidence:

- Dashboard links
- Event taxonomy review
- Alert test results
- Log sampling review
- Incident drill trace sample

---

## 15. Marketplace Readiness Checklist

Marketplace readiness must confirm:

- Asset review governance active
- Template dependency registry active
- Install entitlement checks active
- Billing/payout controls active where needed
- Trust labels accurate
- Reviews/reputation protected
- Search/ranking quality monitored
- Support escalation paths defined
- Sandbox/demo behavior safe
- Region controls active
- Private catalog behavior tested

Required evidence:

- Marketplace review approvals
- Template health monitoring plan
- Trust & Safety readiness
- Install flow test
- Billing test
- Support routing test
- Dispute workflow test

---

## 16. Enterprise Governance Readiness Checklist

Enterprise readiness must confirm:

- Account hierarchy works
- Workspace policy engine works
- SSO/SCIM behavior works where enabled
- Approval workflows work
- Audit reports available
- Procurement flow works
- Vendor management works
- Private catalog controls work
- Admin roles are documented
- Break-glass procedures exist

Required evidence:

- Enterprise admin walkthrough
- Policy simulation results
- SSO/SCIM test result
- Approval workflow test
- Audit export sample
- Procurement evidence sample

---

## 17. Billing & Revenue Readiness Checklist

Billing readiness must confirm:

- Plan entitlements are accurate
- Upgrade/downgrade behavior is clear
- Invoices are correct
- Refund flows are defined
- Marketplace commissions are calculated correctly
- Creator payouts are governed
- Taxes are handled where applicable
- Revenue recognition signals are available
- Finance reconciliation is possible

Required evidence:

- Billing QA report
- Invoice samples
- Entitlement test cases
- Refund/dispute test cases
- Revenue operations review
- Finance approval

No monetized launch should proceed without billing readiness.

---

## 18. Support Readiness Checklist

Support readiness must confirm:

- Support categories are defined
- Routing rules are ready
- SLAs are defined
- Escalation paths are documented
- Knowledge base articles exist
- Known issues are documented
- Support team has training
- Creator/partner support responsibilities are clear
- Incident-to-support handoff works
- Customer communication templates are ready

Required evidence:

- Support playbook
- Help center draft
- Escalation matrix
- Support readiness sign-off
- Sample ticket triage

---

## 19. Customer Success Readiness Checklist

Customer success readiness must confirm:

- Onboarding playbook ready
- Health score signals active
- Adoption milestones defined
- EBR/QBR story ready where applicable
- Renewal/expansion risks known
- Training/certification ready
- Change management plan ready
- Customer communication plan ready

Required evidence:

- Customer success playbook
- Health score dashboard
- Training content
- EBR template
- Launch customer list
- Success criteria per segment

---

## 20. Sales & Go-To-Market Readiness Checklist

GTM readiness must confirm:

- Positioning is clear
- ICP is clear
- Demo script is ready
- Pricing is approved
- Sales enablement is ready
- Objection handling is ready
- Legal claims are approved
- Launch messaging matches actual product state
- Public pages do not overclaim
- Lead routing is ready

Required evidence:

- GTM launch brief
- Sales deck
- Demo environment
- Pricing approval
- Legal review of claims
- Website copy review

---

## 21. Legal Readiness Checklist

Legal readiness must confirm:

- Terms updated where needed
- Privacy policy updated where needed
- Marketplace terms updated where needed
- AI use disclosures reviewed
- Vendor/subprocessor disclosures reviewed
- Beta terms defined where applicable
- Enterprise procurement language ready
- Public claims reviewed

Required evidence:

- Legal sign-off
- Policy version references
- Customer communication for legal changes
- Trust center update references

---

## 22. Documentation Readiness Checklist

Documentation readiness must confirm:

- User docs exist
- Admin docs exist
- API docs exist where applicable
- Marketplace docs exist where applicable
- Enterprise docs exist where applicable
- Troubleshooting docs exist
- Known limitations documented
- Localization covered where launch locale requires it

Required evidence:

- Documentation index
- Help center links
- Internal runbooks
- Customer-facing release notes

---

## 23. Operations Readiness Checklist

Operations readiness must confirm:

- Launch command center defined
- Launch owner assigned
- Communication channels created
- Monitoring dashboard active
- Rollback command path clear
- Support coverage scheduled
- Incident owner assigned
- Executive escalation path defined
- Post-launch review scheduled

Required evidence:

- Launch runbook
- Command center roster
- Timeline
- Rollback procedure
- Post-launch review template

---

## 24. Incident Response Readiness Checklist

Incident readiness must confirm:

- Incident severity definitions active
- On-call assigned
- AI-specific incidents covered
- Marketplace incidents covered
- Billing incidents covered
- Security incidents covered
- Customer communication templates ready
- Status page policy defined
- Retrospective process ready

Required evidence:

- Incident response playbook
- Tabletop exercise result
- Escalation matrix
- Communication templates
- Postmortem template

---

## 25. Data Readiness Checklist

Data readiness must confirm:

- Analytics events instrumented
- Dashboards configured
- Data quality checks active
- Customer impact metrics available
- Business metrics available
- Revenue metrics available
- Support metrics available
- AI metrics available
- Marketplace metrics available

Required evidence:

- Analytics QA report
- Dashboard links
- Data quality report
- KPI definitions

---

## 26. Localization Readiness Checklist

Localization readiness must confirm:

- Supported locales defined
- Translation quality reviewed
- RTL/LTR tested where applicable
- Currency display correct
- Legal disclaimers localized where needed
- Trust labels localized accurately
- Support language coverage defined
- Region-specific restrictions visible

Required evidence:

- Localization QA report
- Locale content review
- Region compatibility review
- Support coverage language matrix

---

## 27. Basic / Pro / Smart Readiness Rules

### Basic Readiness

Basic launch must prioritize:

- Simplicity
- Low-cost paths
- Safe defaults
- Minimal permissions
- Clear upgrade prompts
- Strong onboarding
- Easy support

Basic must not expose advanced automation without clear boundaries.

### Pro Readiness

Pro launch must prioritize:

- Workflow reliability
- Team collaboration
- Integrations
- Admin controls
- Customer success playbooks
- Operational analytics
- Support escalation

Pro must not ship without workflow observability and permission governance.

### Smart Readiness

Smart launch must prioritize:

- Advanced AI controls
- Multi-agent governance
- Marketplace depth
- Enterprise controls
- Cost governance
- AI safety evaluation
- Audit evidence
- Strong incident readiness

Smart must not ship without AI safety, cost control, enterprise governance, and rollback readiness.

---

## 28. Launch Blocker Object

```ts
export type LaunchBlocker = {
  id: string;
  title: string;
  area: string;
  severity: 'P0' | 'P1' | 'P2' | 'P3' | 'P4';
  ownerUserId: string;
  description: string;
  customerImpact?: string;
  mitigation?: string;
  status: 'open' | 'mitigated' | 'accepted' | 'resolved';
  acceptedByUserId?: string;
  acceptedAt?: string;
  dueAt?: string;
};
```

---

## 29. Launch Exception Rules

Exceptions are allowed only when:

- Severity is not P0
- Customer impact is understood
- Mitigation is documented
- Owner is assigned
- Expiration date is set
- Executive approval exists for P1
- Launch scope is adjusted if needed
- Rollback trigger is defined

Exceptions must not become permanent hidden debt.

---

## 30. Rollback Readiness

Every major launch must define:

- Rollback owner
- Rollback triggers
- Rollback steps
- Data rollback limits
- Customer communication plan
- Feature flag rollback path
- Billing rollback path if applicable
- Marketplace asset rollback path if applicable
- AI model/prompt rollback path if applicable
- Support escalation path

Ariyo must not launch irreversible changes without explicit executive approval.

---

## 31. Post-Launch Monitoring Window

Every launch must define a monitoring window:

- First hour
- First day
- First week
- First renewal cycle where applicable

Post-launch metrics:

- Error rate
- Latency
- AI unsafe output rate
- Failed workflow rate
- Billing error rate
- Support ticket volume
- Activation rate
- Install success rate
- Rollback requests
- Incident count
- Customer confusion signals
- Adoption quality
- Revenue correctness

---

## 32. API Contract

### Create Readiness Review

`POST /api/v1/platform/readiness-reviews`

```json
{
  "launchName": "Ariyo Marketplace Private Beta",
  "launchType": "private_beta",
  "scope": {
    "plans": ["pro", "smart"],
    "regions": ["EU", "UAE"],
    "customerSegments": ["design_partners"],
    "marketplaceEnabled": true,
    "creatorEnabled": false,
    "enterpriseGovernanceEnabled": true,
    "billingEnabled": true,
    "publicMarketingEnabled": false,
    "supportCoverage": "priority"
  }
}
```

### Submit Area Review

`POST /api/v1/platform/readiness-reviews/{reviewId}/areas/{area}/submit`

```json
{
  "status": "ready_with_risk",
  "score": 86,
  "evidenceIds": ["ev_security_review_001", "ev_load_test_001"],
  "notes": "Ready for design partner launch with limited scope."
}
```

### Record Blocker

`POST /api/v1/platform/readiness-reviews/{reviewId}/blockers`

```json
{
  "title": "Marketplace refund webhook not idempotent",
  "area": "billing",
  "severity": "P1",
  "description": "Duplicate webhook delivery may create duplicate refund records.",
  "customerImpact": "Potential billing confusion and reconciliation errors.",
  "ownerUserId": "user_finance_ops"
}
```

### Make Go / No-Go Decision

`POST /api/v1/platform/readiness-reviews/{reviewId}/decision`

```json
{
  "decision": "conditional_go",
  "rationale": "No P0 blockers. One P1 accepted with mitigation and limited launch scope.",
  "approvedExceptions": ["ex_p1_billing_idempotency"],
  "requiredMitigations": ["manual finance reconciliation for first 20 transactions"],
  "rollbackTriggerIds": ["billing_error_rate_above_threshold"]
}
```

---

## 33. Webhooks

Ariyo should emit:

- `platform.readiness_review.created`
- `platform.readiness_area.submitted`
- `platform.readiness_blocker.created`
- `platform.readiness_blocker.resolved`
- `platform.readiness_exception.approved`
- `platform.go_no_go_decision.recorded`
- `platform.launch.started`
- `platform.launch.completed`
- `platform.launch.rollback_triggered`
- `platform.post_launch_review.completed`

---

## 34. Frontend Requirements

The readiness UI must provide:

- Launch readiness dashboard
- Area-by-area status
- Blocker list
- Evidence package viewer
- Exception approval flow
- Go/no-go decision panel
- Launch scope editor
- Rollback readiness panel
- Post-launch monitoring dashboard
- Executive summary view
- Exportable readiness report

The UI must make unresolved blockers impossible to miss.

---

## 35. Backend Requirements

The backend must support:

- Readiness review records
- Area ownership
- Evidence linking
- Blocker workflow
- Exception approval
- Audit logging
- Role-based access
- Launch scope enforcement
- Webhook emission
- Readiness report generation
- Integration with incidents, feature flags, billing, marketplace, AI safety, and observability

---

## 36. AI Final Readiness Assistant

Ariyo may provide an AI Final Readiness Assistant that:

- Summarizes readiness gaps
- Explains blocker risk
- Drafts launch review summaries
- Checks evidence completeness
- Highlights inconsistent readiness claims
- Suggests mitigations
- Creates executive summaries
- Prepares post-launch review drafts

The assistant must not:

- Approve launch
- Override blockers
- Hide risk
- Invent evidence
- Replace human owners
- Make legal/security decisions without review

---

## 37. Observability Events

Track:

- `readiness_review_created`
- `readiness_area_marked_ready`
- `readiness_blocker_added`
- `readiness_blocker_resolved`
- `readiness_exception_requested`
- `readiness_exception_approved`
- `go_no_go_decision_made`
- `launch_started`
- `launch_rolled_back`
- `post_launch_issue_detected`
- `post_launch_review_completed`

---

## 38. Advanced KPIs

Ariyo should track:

- Launch Readiness Score
- Number of unresolved blockers by severity
- Launch delay reasons
- Post-launch incident rate
- Readiness prediction accuracy
- Exception-to-incident correlation
- Rollback trigger rate
- Support surge after launch
- Billing error rate after launch
- AI safety issue rate after launch
- Marketplace install failure rate after launch
- Customer confusion rate
- Launch scope accuracy
- Post-launch adoption quality

---

## 39. Security & Privacy Rules

Readiness reviews may contain sensitive operational details.

Rules:

- Restrict access by role
- Redact sensitive security details from broad views
- Audit all decision changes
- Protect vulnerability details
- Protect customer-specific launch data
- Protect vendor/security evidence
- Preserve evidence integrity
- Require explicit approval for external sharing

---

## 40. Forbidden Patterns

Ariyo must not:

- Launch with unresolved P0 blockers
- Launch without rollback plan
- Launch monetized flows without billing QA
- Launch AI behavior without safety evaluation
- Launch enterprise controls without audit evidence
- Launch marketplace installs without entitlement checks
- Launch public claims without legal review
- Launch without support readiness
- Launch without incident ownership
- Treat readiness as a checkbox exercise
- Hide blockers from executives
- Allow AI-generated readiness summaries to replace evidence
- Convert exceptions into permanent debt
- Ignore post-launch review findings

---

## 41. Golden Rule

Ariyo is ready to launch only when the team can clearly answer:

- What are we launching?
- Who is it for?
- What can go wrong?
- Who owns each risk?
- How will we detect failure?
- How will we support customers?
- How will we roll back?
- What evidence proves readiness?
- What would make us stop?

If Ariyo cannot answer these questions, Ariyo is not ready.
