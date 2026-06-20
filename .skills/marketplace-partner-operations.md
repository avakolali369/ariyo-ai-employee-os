# Ariyo Marketplace Partner Operations Skill

## 1. Core Contract

Ariyo Marketplace Partner Operations is not a partner directory.

Ariyo Marketplace Partner Operations is the governed operating system that allows trusted agencies, consultants, implementation partners, solution partners, integration partners, resellers, referral partners, technology partners, and strategic alliances to help customers adopt, configure, extend, support, and expand Ariyo Marketplace solutions safely.

Every partner motion must protect customer trust, service quality, marketplace integrity, brand accuracy, revenue integrity, delivery accountability, data privacy, security posture, and measurable customer outcomes.

Ariyo must make it easy for excellent partners to grow with the ecosystem.

Ariyo must make it difficult for low-quality, unsafe, misleading, or financially abusive partners to harm customers or marketplace trust.

---

## 2. Purpose

This skill defines the operating model for managing Ariyo Marketplace partners across onboarding, qualification, certification, tiering, services, co-selling, revenue attribution, delivery governance, quality scoring, disputes, enablement, SLAs, reporting, and lifecycle management.

It exists so that Ariyo can scale beyond direct sales and self-serve marketplace adoption without losing control over customer experience, implementation quality, security, pricing integrity, or trust.

This skill should be used whenever Ariyo designs or builds:

- Partner onboarding flows.
- Partner portals.
- Partner tiers.
- Marketplace service listings.
- Implementation service offers.
- Co-selling workflows.
- Referral and reseller motions.
- Agency partner programs.
- Solution partner programs.
- Integration partner programs.
- Certified consultant programs.
- Partner revenue operations.
- Partner quality score systems.
- Partner dispute workflows.
- Partner enablement and certification.
- Partner dashboards.
- Partner-related APIs and webhooks.
- Partner trust, safety, and enforcement workflows.

---

## 3. Dependencies

This skill depends on and must stay consistent with:

- `product-strategy.md`
- `monetization-billing.md`
- `pricing-packaging-strategy.md`
- `community-partner-growth.md`
- `ecosystem-marketplace-economy.md`
- `marketplace-billing-payouts.md`
- `marketplace-dispute-resolution.md`
- `marketplace-trust-safety-operations.md`
- `marketplace-policy-enforcement-rules.md`
- `marketplace-creator-success-system.md`
- `marketplace-installation-entitlements.md`
- `template-quality-ranking-system.md`
- `agent-marketplace-template-builder.md`
- `ai-agent-template-review-governance.md`
- `customer-success-playbooks.md`
- `customer-lifecycle-automation.md`
- `sales-crm-pipeline-system.md`
- `revenue-operations-system.md`
- `finance-accounting-controls.md`
- `admin-permissions.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `legal-pages-policy-system.md`
- `trust-center-public-status.md`
- `observability-analytics-events.md`
- `operations-command-center.md`

---

## 4. Partner Operations Philosophy

Ariyo partners are not just acquisition channels.

They are ecosystem actors that may directly influence:

- How customers understand Ariyo.
- Which plan customers buy.
- Which AI employee templates customers install.
- How workflows are configured.
- Which integrations are connected.
- Whether customers trust AI employees.
- Whether customers activate successfully.
- Whether customers renew or churn.
- Whether customers expand from Basic to Pro or Smart.
- Whether marketplace solutions become repeatable business assets.

Therefore, every partner must be managed as a trust-bearing operating entity.

Ariyo must avoid two extremes:

1. An uncontrolled partner ecosystem where anyone can sell, implement, or advise customers without evidence of quality.
2. An over-controlled ecosystem where good partners cannot move quickly, learn, sell, or create value.

The correct approach is governed enablement:

- Clear partner roles.
- Clear qualification criteria.
- Clear certifications.
- Clear commercial terms.
- Clear service boundaries.
- Clear customer handoff rules.
- Clear data access rules.
- Clear escalation paths.
- Clear performance measurement.
- Clear enforcement.

---

## 5. Partner Types

### 5.1 Referral Partner

A partner that introduces qualified customers to Ariyo but does not implement or manage Ariyo on behalf of the customer.

Allowed activities:

- Introduce leads.
- Share approved Ariyo positioning.
- Use approved referral links.
- Join discovery calls when appropriate.

Not allowed by default:

- Promise pricing exceptions.
- Configure customer workspaces.
- Access customer data.
- Represent themselves as Ariyo support.
- Sell unapproved services under Ariyo's brand.

### 5.2 Affiliate Partner

A performance-based promoter that drives signups or purchases through tracked links or campaigns.

Must be governed by:

- Attribution rules.
- Fraud detection.
- Brand guidelines.
- Disclosure requirements.
- Payout eligibility checks.
- Prohibited promotion rules.

### 5.3 Certified Consultant

An individual expert certified to advise customers on Ariyo usage, AI employee setup, workflows, knowledge structure, GEO, automation, or operational adoption.

Typical activities:

- Customer education.
- Workflow design.
- AI employee configuration guidance.
- Knowledge readiness assessment.
- Basic implementation advisory.

### 5.4 Implementation Partner

A partner authorized to implement Ariyo for customers.

Typical activities:

- Workspace setup.
- AI employee deployment.
- Workflow configuration.
- Knowledge ingestion planning.
- Integration setup.
- Staff training.
- Post-launch support.

Requires stronger controls:

- Certification.
- Customer authorization.
- Scoped access.
- Delivery SLA.
- Implementation quality score.
- Support handoff rules.

### 5.5 Agency Partner

An agency that packages Ariyo into broader service offerings, such as customer support automation, sales automation, operations automation, content/GEO growth, or AI transformation.

Agency partners may create:

- Service bundles.
- Marketplace templates.
- Industry-specific AI employee packages.
- Managed services.
- Customer-specific implementation projects.

### 5.6 Solution Partner

A partner that builds repeatable solutions on top of Ariyo.

Examples:

- AI Support Desk for Shopify stores.
- GEO Monitoring Pack for SaaS blogs.
- Lead Qualification Team for B2B agencies.
- Operations Automation Bundle for service businesses.

### 5.7 Technology Partner

A SaaS, API, or platform partner whose product integrates with Ariyo.

Examples:

- CRM providers.
- Helpdesk providers.
- Email marketing platforms.
- Knowledge base platforms.
- Analytics providers.
- Data warehouse providers.
- Payment providers.

### 5.8 Integration Partner

A partner that helps customers connect Ariyo to external systems.

Requires strict security and data handling controls.

### 5.9 Reseller Partner

A partner authorized to sell Ariyo subscriptions under approved commercial terms.

Requires:

- Contractual approval.
- Pricing governance.
- Billing rules.
- Territory or segment scope.
- Customer ownership rules.
- Revenue reporting.
- Compliance review.

### 5.10 Strategic Alliance Partner

A high-impact partner with joint go-to-market, integration, co-selling, or enterprise adoption responsibilities.

Requires executive governance.

---

## 6. Partner Lifecycle

Every partner must move through a defined lifecycle.

Recommended statuses:

```text
prospect
applied
screening
needs_information
rejected
approved_pending_onboarding
onboarding
training_required
certification_required
certified
active
limited_active
under_review
probation
suspended
terminated
archived
```

### 6.1 Prospect

Partner has been identified but has not applied or been invited.

### 6.2 Applied

Partner submitted an application.

### 6.3 Screening

Ariyo reviews partner fit, business model, audience, service quality, and risk.

### 6.4 Approved Pending Onboarding

Partner is accepted but not yet active.

### 6.5 Onboarding

Partner completes education, legal acceptance, profile setup, and operating requirements.

### 6.6 Training Required

Partner must complete required Academy modules.

### 6.7 Certification Required

Partner must pass practical or role-based certification before performing certain work.

### 6.8 Certified

Partner has met qualification requirements for a specific partner role or service category.

### 6.9 Active

Partner may operate within approved scope.

### 6.10 Limited Active

Partner may operate with restrictions.

Examples:

- Can refer but not implement.
- Can serve Basic customers only.
- Can sell templates but not managed services.
- Can implement non-sensitive workflows only.

### 6.11 Under Review

Partner is being investigated for quality, policy, support, billing, or security issues.

### 6.12 Probation

Partner may continue limited operations while corrective actions are monitored.

### 6.13 Suspended

Partner cannot perform some or all marketplace operations.

### 6.14 Terminated

Partner relationship is ended.

### 6.15 Archived

Partner is inactive and retained for historical records.

---

## 7. Partner Tier System

Partner tiers should reward quality, outcomes, trust, training, and customer success, not only revenue volume.

Recommended tiers:

```text
Community Partner
Certified Partner
Growth Partner
Premier Partner
Strategic Partner
```

### 7.1 Community Partner

Entry-level partner.

Capabilities:

- Referral links.
- Approved content assets.
- Basic partner education.
- No customer implementation access by default.

### 7.2 Certified Partner

Partner has passed required training.

Capabilities:

- Listed in partner directory.
- Eligible for basic implementation services.
- Can submit marketplace assets if creator requirements are met.
- May access partner portal analytics.

### 7.3 Growth Partner

Partner has demonstrated customer success and marketplace quality.

Capabilities:

- Co-marketing eligibility.
- Faster review for some assets.
- More marketplace visibility.
- Eligible for advanced implementation services.
- Eligible for partner success manager where available.

### 7.4 Premier Partner

High-performing, trusted partner.

Capabilities:

- Featured partner opportunities.
- Co-selling support.
- Enterprise implementation eligibility.
- Deeper analytics.
- Access to beta partner programs.

### 7.5 Strategic Partner

Executive-level alliance.

Capabilities:

- Joint roadmap collaboration.
- Strategic co-selling.
- Dedicated partner operations workflow.
- Joint enterprise offerings.
- Custom commercial agreements.

---

## 8. Partner Qualification Criteria

Partner approval must consider:

- Business legitimacy.
- Customer segment fit.
- Domain expertise.
- AI maturity.
- Technical capability.
- Service delivery quality.
- Security maturity.
- Privacy maturity.
- Support capacity.
- Brand fit.
- Historical customer outcomes.
- Marketplace alignment.
- Risk profile.
- Conflict of interest.
- Geographic or language fit.
- Compliance obligations.

Ariyo must not approve a partner only because they can generate leads.

---

## 9. Partner Profile Model

A partner profile should include:

```json
{
  "partner_id": "ptr_123",
  "name": "Example AI Agency",
  "partner_type": "implementation_partner",
  "tier": "certified_partner",
  "status": "active",
  "regions": ["MENA", "Europe"],
  "languages": ["fa", "en"],
  "industries": ["ecommerce", "saas", "professional_services"],
  "specializations": ["support_automation", "geo_growth", "sales_automation"],
  "certifications": ["ariyo_implementation_foundations", "geo_growth_operator"],
  "approved_services": ["workspace_setup", "workflow_configuration"],
  "restricted_services": ["security_sensitive_integrations"],
  "quality_score": 86,
  "trust_score": 91,
  "customer_satisfaction_score": 4.7,
  "active_customers": 14,
  "open_issues": 1,
  "policy_status": "good_standing",
  "payout_status": "eligible"
}
```

---

## 10. Partner Service Types

Ariyo should define service categories that partners can offer.

### 10.1 Discovery & Strategy

- Use case discovery.
- AI readiness audit.
- Workflow opportunity mapping.
- Customer journey automation planning.
- GEO opportunity analysis.

### 10.2 Implementation

- Workspace setup.
- AI employee deployment.
- Business context configuration.
- Knowledge base setup.
- Workflow setup.
- Integration setup.
- Marketplace asset installation.

### 10.3 Training & Enablement

- Admin training.
- Reviewer training.
- AI employee manager training.
- Team adoption workshops.
- Partner-led Ariyo Academy sessions.

### 10.4 Managed Services

- Ongoing optimization.
- Monthly workflow tuning.
- GEO visibility reporting.
- Support automation management.
- Marketplace asset maintenance.

### 10.5 Custom Solution Design

- Custom AI employee team design.
- Custom workflow design.
- Custom knowledge architecture.
- Custom reporting dashboards.

### 10.6 Enterprise Services

- SSO rollout support.
- Security questionnaire support.
- Compliance documentation support.
- Enterprise onboarding.
- Multi-workspace governance.

---

## 11. Service Listing Requirements

Partner service listings must include:

- Clear title.
- Service category.
- Target customer.
- Required Ariyo plan.
- Deliverables.
- Timeline.
- Customer responsibilities.
- Partner responsibilities.
- Required permissions.
- Data access requirements.
- Integration requirements.
- Price or pricing model.
- Refund/cancellation policy.
- SLA if applicable.
- Support scope.
- Exclusions.
- Risk level.
- Success metrics.
- Evidence or examples.

Forbidden listing behavior:

- Guaranteed revenue claims.
- Guaranteed AI accuracy claims.
- Misleading time-to-value promises.
- Unapproved security/compliance claims.
- Hidden fees.
- Claiming Ariyo endorsement without approval.
- Promising access to unavailable features.

---

## 12. Partner Onboarding Flow

Recommended onboarding steps:

```text
Apply
Screen
Accept terms
Complete profile
Select partner type
Complete required training
Pass certification if required
Set service categories
Set billing/payout details
Submit first service or asset
Complete review
Activate partner account
Monitor first customer outcomes
```

Ariyo should not activate high-risk partner capabilities before certifications and legal acceptance are completed.

---

## 13. Partner Certification System

Certification should be role-based.

Recommended certifications:

- Ariyo Partner Foundations.
- Ariyo Implementation Specialist.
- AI Employee Manager.
- Human Review Governance Specialist.
- GEO Growth Operator.
- Support Automation Specialist.
- Sales Automation Specialist.
- Workflow Automation Specialist.
- Knowledge/RAG Specialist.
- Security-Sensitive Implementation Specialist.
- Enterprise Deployment Specialist.
- Marketplace Creator Certification.

Each certification should define:

- Required courses.
- Practical assignment.
- Evaluation criteria.
- Renewal period.
- Allowed partner capabilities.
- Revocation conditions.

---

## 14. Partner Access & Permission Rules

Partner access must be explicit and scoped.

Partners must not automatically gain access to customer workspaces.

Customer authorization is required for:

- Workspace access.
- Integration setup.
- Knowledge source access.
- Workflow configuration.
- AI employee configuration.
- Billing-related review.
- Admin console access.

Partner access must be:

- Organization-scoped.
- Time-bound where appropriate.
- Role-based.
- Purpose-bound.
- Revocable.
- Logged.
- Visible to customer admins.

Partners must never receive unrestricted admin access by default.

---

## 15. Partner-Customer Engagement Model

Every partner-customer engagement should have:

- Engagement owner.
- Customer owner.
- Partner owner.
- Scope of work.
- Start date.
- Expected completion date.
- Service status.
- Milestones.
- Deliverables.
- Risks.
- Customer approval checkpoints.
- Support escalation path.
- Billing linkage.
- Outcome metrics.

Recommended engagement statuses:

```text
requested
scoping
proposal_sent
accepted
scheduled
in_progress
blocked
customer_review_required
completed
cancelled
disputed
refunded
archived
```

---

## 16. Co-Selling Operations

Co-selling should be controlled and evidence-based.

Co-selling applies when Ariyo and a partner jointly support a deal.

Rules:

- Lead ownership must be defined.
- Attribution must be recorded.
- Customer consent must be captured before partner involvement.
- Pricing authority must be clear.
- Partner claims must follow approved messaging.
- Deal notes must be visible to authorized Ariyo sales operators.
- Customer handoff to CS must include partner role.

Co-selling must not create confusion about who is responsible for product, implementation, billing, or support.

---

## 17. Referral & Attribution Rules

Attribution must be transparent and fraud-resistant.

Required fields:

- Referral source.
- Partner ID.
- Campaign ID.
- First touch.
- Last touch.
- Assisted touch.
- Conversion date.
- Plan purchased.
- Revenue attributed.
- Payout eligibility.
- Fraud review status.

Attribution should be disqualified when:

- Self-referral abuse occurs.
- Cookie stuffing occurs.
- Misleading promotion occurs.
- Paid ads violate policy.
- Partner claims unauthorized affiliation.
- Referral was not material to conversion.
- Customer churns or refunds before eligibility period.

---

## 18. Implementation Service Governance

Partner implementation work must be governed by scope and outcome.

Implementation partners must not:

- Connect integrations without customer approval.
- Modify billing without authorization.
- Import sensitive data without defined purpose.
- Enable autonomous actions without review policy.
- Disable safety controls.
- Change plan entitlements.
- Misrepresent Ariyo product limitations.

Implementation success should be measured by:

- Activation achieved.
- First AI employee deployed.
- Knowledge connected safely.
- Workflow running successfully.
- Human review understood.
- Customer admin trained.
- Cost controls configured.
- Support path explained.

---

## 19. Partner Quality Score

Partner Quality Score measures operational delivery quality.

Suggested components:

```text
Delivery Success Score
Customer Satisfaction Score
Activation Impact Score
Implementation Timeliness Score
Support Responsiveness Score
Policy Compliance Score
Dispute Rate Score
Refund Rate Score
Security Incident Score
Documentation Quality Score
```

Example formula:

```text
Partner Quality Score =
  0.20 * Delivery Success
+ 0.15 * Customer Satisfaction
+ 0.15 * Activation Impact
+ 0.10 * Timeliness
+ 0.10 * Support Responsiveness
+ 0.10 * Policy Compliance
+ 0.08 * Low Dispute Rate
+ 0.05 * Low Refund Rate
+ 0.05 * Security Clean Record
+ 0.02 * Documentation Quality
```

Ariyo may adjust weights over time.

Quality score must not be based only on revenue.

---

## 20. Partner Trust Score

Partner Trust Score measures trustworthiness and risk.

Signals:

- Identity verification.
- Business verification.
- Certification status.
- Policy history.
- Security maturity.
- Data handling practices.
- Customer complaints.
- Incident history.
- Dispute history.
- Refund behavior.
- Marketplace asset risk.
- Support responsiveness.
- Creator trust score if applicable.

Partner Trust Score should affect:

- Marketplace visibility.
- Service listing approval speed.
- Payout eligibility.
- Access to enterprise customers.
- Co-selling eligibility.
- Certification renewal requirements.
- Enforcement severity.

---

## 21. Partner Health Score

Partner Health Score measures whether a partner relationship is healthy.

Signals:

- Active pipeline.
- Customer outcomes.
- Revenue performance.
- Support responsiveness.
- Partner portal engagement.
- Training completion.
- Certification validity.
- Dispute rate.
- Customer retention.
- Marketplace asset performance.
- Co-selling collaboration quality.

Recommended statuses:

```text
healthy
watch
at_risk
critical
inactive
```

---

## 22. Partner SLA Model

Partner SLAs should be attached to service categories.

Examples:

### 22.1 Response SLA

How quickly partner responds to customer or Ariyo messages.

### 22.2 Delivery SLA

Expected completion window for implementation milestones.

### 22.3 Escalation SLA

How quickly partner escalates blockers, risks, or customer-impacting issues.

### 22.4 Correction SLA

How quickly partner fixes quality issues.

### 22.5 Incident Cooperation SLA

How quickly partner cooperates with security, privacy, billing, or trust incidents.

Partners who repeatedly miss SLAs should lose tier benefits or be placed under review.

---

## 23. Basic / Pro / Smart Partner Operations

### 23.1 Basic Customer Partner Experience

Basic customers should have access to:

- Public partner directory.
- Low-risk partner services.
- Referral-supported onboarding.
- Basic implementation help.
- Limited marketplace installation assistance.

Basic partner services should avoid:

- Deep integration work.
- Complex automation.
- Multi-agent configuration.
- Enterprise governance setup.

### 23.2 Pro Customer Partner Experience

Pro customers should have access to:

- Certified implementation partners.
- Workflow configuration services.
- Integration setup support.
- Team training.
- Customer success handoff.
- Co-selling-supported partner recommendations.
- Partner service packages.

### 23.3 Smart Customer Partner Experience

Smart customers should have access to:

- Premier partners.
- Advanced automation services.
- Multi-agent implementation.
- GEO/API growth services.
- Enterprise-like operational support.
- Cost center and finance-aware setup.
- Advanced reporting.
- Higher SLA partner services.
- Strategic partner solution bundles.

Smart can be full-option, but must remain governed by:

- Customer approval.
- Admin permissions.
- Cost controls.
- Security review.
- Integration review.
- AI agent runtime policies.

---

## 24. Partner Revenue Operations

Partner revenue must connect to RevOps, finance, marketplace billing, and customer lifecycle.

Revenue types:

- Referral commission.
- Affiliate commission.
- Reseller margin.
- Marketplace asset revenue share.
- Service marketplace fee.
- Co-selling incentive.
- Implementation service fee.
- Strategic partner revenue.

Every partner revenue movement must have:

- Source transaction.
- Customer account.
- Partner ID.
- Attribution rule.
- Eligibility rule.
- Hold period.
- Refund/dispute dependency.
- Tax status.
- Payout status.
- Ledger entry.
- Audit trail.

---

## 25. Partner Disputes

Partner disputes may involve:

- Customer dissatisfaction.
- Partner service quality.
- Misleading claims.
- Delivery delays.
- Billing disputes.
- Payout disputes.
- Attribution disputes.
- Scope disputes.
- Policy violations.
- Security or privacy incidents.

Disputes must integrate with `marketplace-dispute-resolution.md`.

Partner operations must preserve evidence:

- Messages.
- Scope of work.
- Service listing version.
- Timeline.
- Customer approvals.
- Partner actions.
- Workspace audit logs.
- Billing events.
- Support tickets.

---

## 26. Partner Enforcement

Enforcement actions:

```text
warning
training_required
certification_required
listing_restriction
service_restriction
tier_downgrade
payout_hold
probation
temporary_suspension
permanent_suspension
termination
```

Enforcement must be proportional to:

- Customer harm.
- Intent.
- Repeat behavior.
- Policy severity.
- Evidence quality.
- Cooperation.
- Remediation.

---

## 27. Partner Portal Requirements

Partner portal must include:

- Partner profile.
- Certification status.
- Service listings.
- Leads and referrals.
- Co-selling opportunities.
- Customer engagements.
- Marketplace assets.
- Revenue dashboard.
- Payout status.
- Quality score.
- Trust score.
- Health score.
- Training recommendations.
- Policy notices.
- Disputes.
- Support requests.
- Announcements.
- API keys if applicable.

The portal must not expose customer data unless explicitly authorized.

---

## 28. Ariyo Internal Partner Operations Console

Internal Ariyo operators need a backoffice view for:

- Partner applications.
- Partner statuses.
- Tier approvals.
- Certification records.
- Service listing reviews.
- Customer engagements.
- Co-selling deals.
- Partner quality score.
- Partner trust score.
- Partner health score.
- Payout eligibility.
- Disputes.
- Enforcement history.
- Policy violations.
- Partner communication logs.
- Revenue attribution.

This console must be permission-gated and audited.

---

## 29. Partner API Contract

### 29.1 List Partner Services

```http
GET /api/v1/marketplace/partners/services
```

Query parameters:

```text
category
industry
region
language
plan
partner_tier
certification
availability
```

Response:

```json
{
  "services": [
    {
      "service_id": "psvc_123",
      "partner_id": "ptr_123",
      "title": "AI Support Automation Setup",
      "category": "implementation",
      "required_plan": "pro",
      "starting_price": 900,
      "currency": "USD",
      "estimated_timeline_days": 10,
      "quality_score": 88,
      "trust_score": 93,
      "certifications": ["support_automation_specialist"],
      "rating": 4.8,
      "availability": "available"
    }
  ]
}
```

### 29.2 Request Partner Service

```http
POST /api/v1/marketplace/partners/services/{service_id}/request
```

Request:

```json
{
  "organization_id": "org_123",
  "workspace_id": "ws_123",
  "requested_scope": "Setup support AI employee and connect approved help center knowledge.",
  "preferred_start_date": "2026-07-01",
  "customer_notes": "We need support automation for ecommerce returns."
}
```

Response:

```json
{
  "engagement_id": "peng_123",
  "status": "requested",
  "next_step": "partner_response_required",
  "estimated_response_sla_hours": 24
}
```

### 29.3 Partner Engagement Status

```http
GET /api/v1/partner-engagements/{engagement_id}
```

Response:

```json
{
  "engagement_id": "peng_123",
  "status": "in_progress",
  "partner_id": "ptr_123",
  "organization_id": "org_123",
  "milestones": [
    {
      "name": "Discovery Completed",
      "status": "completed"
    },
    {
      "name": "Knowledge Setup",
      "status": "in_progress"
    }
  ],
  "risks": [],
  "next_customer_action": "Approve knowledge source connection."
}
```

### 29.4 Partner Quality Snapshot

```http
GET /api/v1/internal/partners/{partner_id}/quality
```

Response:

```json
{
  "partner_id": "ptr_123",
  "quality_score": 86,
  "trust_score": 91,
  "health_status": "healthy",
  "delivery_success_rate": 0.93,
  "average_customer_rating": 4.7,
  "refund_rate": 0.02,
  "dispute_rate": 0.01,
  "policy_violations_last_90d": 0,
  "recommended_action": "continue_growth_enablement"
}
```

---

## 30. Webhooks

Recommended webhook events:

```text
partner.application.submitted
partner.application.approved
partner.application.rejected
partner.certification.completed
partner.certification.expired
partner.status.changed
partner.tier.changed
partner.service.submitted
partner.service.approved
partner.service.rejected
partner.engagement.requested
partner.engagement.accepted
partner.engagement.completed
partner.engagement.disputed
partner.quality_score.updated
partner.trust_score.updated
partner.payout.eligible
partner.payout.held
partner.policy_violation.created
partner.enforcement.applied
```

Webhooks must be signed and idempotent.

---

## 31. Observability Events

Recommended events:

```text
partner_application_started
partner_application_submitted
partner_screening_started
partner_onboarding_started
partner_training_completed
partner_certification_passed
partner_service_listing_created
partner_service_request_created
partner_engagement_started
partner_engagement_completed
partner_customer_rating_submitted
partner_quality_score_updated
partner_trust_score_updated
partner_dispute_opened
partner_policy_violation_detected
partner_enforcement_applied
partner_payout_released
```

Every event should include:

- `event_id`
- `timestamp`
- `organization_id` when applicable
- `partner_id`
- `customer_id` when applicable
- `service_id` when applicable
- `engagement_id` when applicable
- `actor_type`
- `actor_id`
- `source`
- `risk_level`
- `plan_context`

---

## 32. Advanced KPI System

### 32.1 Partner Activation KPIs

- Partner Application Completion Rate
- Partner Approval Rate
- Time to Partner Activation
- Certification Completion Rate
- First Lead Time
- First Engagement Time
- First Revenue Time

### 32.2 Partner Revenue KPIs

- Partner-Sourced ARR
- Partner-Influenced ARR
- Partner Marketplace GMV
- Partner Service GMV
- Partner Expansion Revenue
- Partner Revenue per Active Partner
- Partner Payout Accuracy Rate
- Partner Commission Dispute Rate

### 32.3 Partner Quality KPIs

- Partner Quality Score
- Partner Trust Score
- Partner Health Score
- Delivery Success Rate
- Service Completion Rate
- Customer Satisfaction Score
- Refund Rate
- Dispute Rate
- Support Ticket per Engagement

### 32.4 Customer Outcome KPIs

- Partner-Led Activation Rate
- Partner-Led Time to First Value
- Partner-Led Retention Rate
- Partner-Led Expansion Rate
- Partner Implementation Success Rate
- Partner-Led AI Employee Deployment Rate

### 32.5 Risk & Trust KPIs

- Policy Violation Rate
- Security Incident Rate
- Privacy Incident Rate
- Misleading Claim Rate
- SLA Breach Rate
- Repeat Issue Rate
- Enforcement Action Rate

### 32.6 Marketplace Growth KPIs

- Active Partner Count
- Certified Partner Count
- Premier Partner Count
- Services Listed
- Service Install-to-Activation Rate
- Partner Asset Quality Score
- Partner Contribution to Marketplace GMV

---

## 33. AI Partner Operations Assistant Rules

Ariyo may include an internal AI assistant for partner operations.

Allowed use cases:

- Summarize partner applications.
- Flag missing onboarding data.
- Suggest certification paths.
- Summarize partner engagement health.
- Draft partner communication.
- Detect SLA risk.
- Summarize disputes.
- Recommend partner enablement actions.

Not allowed:

- Approve partners without human authority.
- Suspend partners without human review when material impact exists.
- Release payouts.
- Override legal terms.
- Access customer data beyond permission scope.
- Make final enforcement decisions for high-risk cases.

---

## 34. Security & Privacy Rules

Partner operations must enforce:

- Least privilege.
- Customer consent for partner access.
- Time-bound access where possible.
- Audit logs for partner actions.
- PII minimization.
- No secrets shared with partners unless explicitly required and securely managed.
- No unrestricted customer data export.
- No partner access after suspension.
- Revocation when engagement ends.
- Review for security-sensitive services.

---

## 35. Frontend Requirements

Customer-facing partner UI must show:

- Partner identity.
- Partner tier.
- Certifications.
- Service scope.
- Pricing model.
- Expected timeline.
- Required plan.
- Required permissions.
- Data access requirements.
- Ratings or quality indicators.
- Refund/dispute policy.
- Request CTA.
- Trust badges.

Partner portal UI must show:

- Status.
- Required actions.
- Training.
- Certifications.
- Leads.
- Engagements.
- Revenue.
- Quality score.
- Trust score.
- Health score.
- Disputes.
- Policy notices.

Internal UI must show:

- Risk flags.
- Engagement evidence.
- Policy history.
- SLA performance.
- Revenue attribution.
- Enforcement controls.

---

## 36. Backend Requirements

Backend must support:

- Partner profiles.
- Partner applications.
- Partner statuses.
- Partner tiers.
- Certifications.
- Service listings.
- Customer service requests.
- Engagement lifecycle.
- Partner permissions.
- Attribution.
- Payout eligibility linkage.
- Quality scoring.
- Trust scoring.
- Health scoring.
- Disputes.
- Enforcement records.
- Audit logs.
- Webhooks.
- API access.

Backend must never trust frontend-only partner permissions.

---

## 37. Forbidden Patterns

Do not:

- Treat partners as simple user accounts.
- Let partners access customer workspaces without customer approval.
- Rank partners only by revenue.
- Pay partners without eligibility checks.
- Allow partner claims without review.
- Allow untrained partners to perform sensitive implementations.
- Hide partner involvement from customers.
- Let partners bypass marketplace review.
- Let partners bypass security review for sensitive integrations.
- Allow customer data export by partners without explicit scope.
- Use vague partner tiers with no operational meaning.
- Ignore dispute history when recommending partners.
- Let suspended partners receive new leads.
- Let AI assistants make final high-impact partner decisions.
- Mix referral attribution with reseller ownership without clear rules.
- Allow partners to promise guaranteed AI outcomes.
- Allow partner service listings with hidden fees.

---

## 38. Golden Rule

Ariyo partner operations must grow the ecosystem without outsourcing trust.

Partners can extend Ariyo's reach, expertise, and customer impact.

Partners must never become an uncontrolled risk layer between Ariyo and the customer.

