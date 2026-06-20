# Ariyo Skill: Marketplace Template Certification Program

## 1. Core Contract

Ariyo Marketplace Template Certification Program is not a decorative badge system.

It is the governed trust, quality, safety, readiness, renewal, revocation, and public-labeling program that certifies which Marketplace templates, AI Employee assets, Agent Team templates, Workflow templates, Knowledge packs, GEO templates, Integration bundles, internal templates, partner solutions, and enterprise-ready marketplace assets deserve stronger customer trust signals.

Certification must help customers understand which templates are safe, useful, reliable, cost-aware, evidence-backed, enterprise-ready, and maintained.

Certification must never become a paid shortcut around review governance, security, policy enforcement, quality benchmarking, incident history, customer outcomes, or enterprise controls.

---

## 2. Why This Skill Exists

Ariyo Marketplace will eventually contain many assets built by:

- Ariyo internal teams
- Verified creators
- Agencies and implementation partners
- Enterprise customers
- Integration partners
- Community builders
- Solution consultants
- Vertical specialists
- GEO/SEO specialists
- Automation experts
- AI Employee architects

Customers need a fast way to understand:

- Which assets are trusted enough to install
- Which assets are suitable for their plan
- Which assets are suitable for enterprise governance
- Which creators are reliable
- Which assets are safe for sensitive workflows
- Which assets have proof of outcome quality
- Which assets have passed renewal checks
- Which assets have lost certification

Certification creates this trust layer.

---

## 3. Related Skills

This skill depends on and must remain consistent with:

- `marketplace-template-review-governance.md`
- `template-quality-ranking-system.md`
- `marketplace-template-quality-benchmarking.md`
- `marketplace-template-outcome-intelligence.md`
- `marketplace-template-health-monitoring.md`
- `marketplace-policy-enforcement-rules.md`
- `marketplace-trust-safety-operations.md`
- `marketplace-compliance-evidence-center.md`
- `marketplace-regulatory-compliance-matrix.md`
- `marketplace-data-residency-region-controls.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-enterprise-vendor-management.md`
- `marketplace-enterprise-audit-reports.md`
- `marketplace-installation-entitlements.md`
- `marketplace-billing-payouts.md`
- `marketplace-dispute-resolution.md`
- `marketplace-creator-success-system.md`
- `marketplace-partner-operations.md`
- `ai-safety-evaluation.md`
- `human-review-governance.md`
- `quality-assurance-system.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`
- `enterprise-readiness.md`
- `observability-analytics-events.md`

Certification cannot override any of these systems.

---

## 4. Certification Philosophy

Ariyo certification must follow these principles:

1. **Trust before growth**  
   Certified assets must improve marketplace trust, not merely increase conversion.

2. **Evidence before claims**  
   Certification requires evidence, not creator promises.

3. **Outcomes before popularity**  
   A template with many installs is not automatically certifiable.

4. **Renewal before permanence**  
   Certification expires and must be re-earned.

5. **Revocation before reputation risk**  
   A certified badge must be removed quickly when safety, quality, compliance, or maintenance conditions fail.

6. **Plan-fit before universal trust**  
   A template can be certified for Smart but not Basic, or enterprise but not self-serve.

7. **Explainability before marketing**  
   Customers must understand what a badge means and what it does not mean.

---

## 5. Certification Objects

### 5.1 CertificationProgram

Represents a formal certification track.

Fields:

- `id`
- `name`
- `description`
- `asset_types_supported`
- `certification_level`
- `eligibility_rules`
- `review_requirements`
- `benchmark_requirements`
- `evidence_requirements`
- `renewal_interval_days`
- `revocation_rules`
- `public_badge_enabled`
- `enterprise_visible`
- `created_at`
- `updated_at`

### 5.2 TemplateCertificationProfile

Represents certification state for a template.

Fields:

- `template_id`
- `current_certifications`
- `eligible_certifications`
- `blocked_certifications`
- `certification_history`
- `pending_reviews`
- `expired_certifications`
- `revoked_certifications`
- `renewal_due_at`
- `last_certified_at`
- `last_reviewed_by`
- `evidence_package_id`
- `benchmark_report_id`
- `health_report_id`
- `outcome_report_id`

### 5.3 CertificationDecision

Represents the result of a certification review.

Statuses:

- `approved`
- `approved_with_conditions`
- `rejected`
- `needs_changes`
- `expired`
- `revoked`
- `suspended`
- `under_review`

Decision fields:

- `decision_id`
- `template_id`
- `certification_program_id`
- `decision_status`
- `decision_reason`
- `reviewer_type`
- `reviewer_id`
- `evidence_used`
- `requirements_passed`
- `requirements_failed`
- `conditions`
- `appeal_available`
- `effective_at`
- `expires_at`

---

## 6. Certification Levels

Ariyo should support progressive certification levels.

### 6.1 Reviewed

Meaning:

- Template passed baseline marketplace review
- No severe policy violations found
- Required metadata is complete
- Basic safety and install checks passed

Not meaning:

- Not enterprise-ready
- Not guaranteed high outcome quality
- Not necessarily optimized

### 6.2 Quality Verified

Meaning:

- Template passed category quality benchmarks
- Documentation is complete
- Activation experience is acceptable
- Failure rate is within allowed thresholds
- Customer support burden is acceptable

### 6.3 Safety Verified

Meaning:

- AI safety evaluation passed
- Tool permissions reviewed
- Sensitive workflow risks assessed
- Unsafe output rate is below threshold
- Human-review requirements are clear

### 6.4 Outcome Verified

Meaning:

- Template has measurable outcome evidence
- Customers reached intended goals
- Outcome intelligence confirms value signals
- ROI or business impact indicators are present

### 6.5 Cost Predictable

Meaning:

- Cost model is understandable
- Token/tool/integration costs are bounded
- Cost anomalies are low
- Forecasting is available
- Over-budget incidents are rare

### 6.6 Enterprise Ready

Meaning:

- Security evidence is available
- Vendor/subprocessor mapping is complete
- Region/data residency profile exists
- Procurement evidence is available
- Audit reports are available
- Enterprise install controls are supported

### 6.7 Smart Ready

Meaning:

- Template supports advanced AI behavior safely
- Multi-agent, RAG, automation, GEO, advanced integrations, or model routing have been reviewed
- Runtime monitoring is strong
- Advanced remediation is supported
- Human escalation rules are clear

### 6.8 Ariyo Certified

Meaning:

- Template meets the highest marketplace certification threshold
- Has strong quality, safety, reliability, outcome, documentation, cost, compliance, and maintenance posture
- Suitable for elevated marketplace visibility

---

## 7. Certification Badge Governance

Badges are customer-facing trust labels and must be governed.

### 7.1 Badge Rules

Every badge must have:

- Clear meaning
- Eligibility criteria
- Expiration date
- Evidence source
- Review authority
- Revocation rule
- Customer-facing explanation
- Internal audit trail

### 7.2 Badge Display Requirements

Badge UI must show:

- Badge name
- Short explanation
- Certification date
- Expiration/renewal date
- Certification scope
- Plan applicability
- Limitations
- Evidence summary when available

Example:

> Enterprise Ready  
> This template passed Ariyo's enterprise-readiness checks for procurement evidence, vendor mapping, audit reporting, and region controls. Certification expires on 2026-12-31.

### 7.3 Badge Prohibitions

Ariyo must not:

- Sell badges directly
- Allow creators to self-apply badges
- Display expired badges
- Display revoked badges
- Hide badge limitations
- Use badges to imply legal guarantees
- Use badges to override customer governance

---

## 8. Certification Eligibility

A template may apply for certification only if:

- It is published or pending publication
- It has passed baseline template review
- It has no active severe enforcement action
- It has complete metadata
- It has declared dependencies
- It has declared permissions
- It has declared vendor/subprocessor relationships
- It has declared region behavior
- It has install documentation
- It has support ownership
- It has version history
- It has monitoring enabled

Enterprise certification additionally requires:

- Compliance evidence package
- Security review evidence
- Data processing disclosure
- Procurement-ready metadata
- Vendor management profile
- Audit report availability

---

## 9. Certification Review Workflow

### 9.1 Submit

Creator or Ariyo operator submits a certification request.

Required:

- Certification program selected
- Asset version selected
- Evidence package attached
- Benchmark report attached when required
- Outcome report attached when required
- Security/compliance evidence attached when required

### 9.2 Automated Precheck

System checks:

- Metadata completeness
- Dependency registry completeness
- Policy enforcement status
- Trust score thresholds
- Health monitoring status
- Incident history
- Dispute history
- Refund history
- Support burden
- Region compatibility
- Entitlement compatibility

### 9.3 AI-Assisted Review

AI may help summarize:

- Missing evidence
- Risk signals
- Benchmark gaps
- Documentation weaknesses
- Security concerns
- Customer-facing explanation

AI must not be sole approver for high-risk or enterprise certifications.

### 9.4 Human Review

Required for:

- Enterprise Ready
- Smart Ready
- Safety Verified
- Ariyo Certified
- Templates with sensitive data access
- Templates with external tool execution
- Templates with payment/finance/legal/health/HR workflows
- Templates with recent incidents
- Templates from creators with low trust score

### 9.5 Decision

Decision outputs:

- Approved
- Approved with conditions
- Needs changes
- Rejected
- Suspended pending evidence

### 9.6 Publish Badge

If approved:

- Badge appears on listing
- Badge appears in private catalog if applicable
- Badge appears in procurement evidence package
- Badge influences ranking according to ranking rules
- Certification appears in audit reports

---

## 10. Certification Exam and Review Requirements

Certification may require practical exams or simulated reviews.

### 10.1 Creator Knowledge Exam

For advanced certification, creator may need to pass knowledge checks on:

- Ariyo policy rules
- Security/privacy basics
- AI safety requirements
- Permission design
- Data residency basics
- Cost-control principles
- Enterprise readiness expectations
- Incident response responsibilities

### 10.2 Template Simulation Exam

Template must pass simulated scenarios:

- Normal customer workflow
- Edge case workflow
- Missing integration
- Permission denied
- Cost limit reached
- Unsafe request
- Data access boundary test
- Model failure scenario
- Region incompatibility scenario
- Rollback scenario

### 10.3 Outcome Evidence Review

Outcome Verified certification requires:

- Defined outcome claim
- Measurable success indicator
- Before/after evidence
- Customer-confirmed value where available
- Low negative outcome rate
- Outcome durability check

---

## 11. Enterprise Certification

Enterprise certification must confirm:

- Vendor profile completeness
- Security evidence availability
- Compliance evidence availability
- Data processing disclosure
- Region controls
- Subprocessor mapping
- Audit report support
- Procurement workflow compatibility
- Private catalog compatibility
- Role-based access controls
- Approval chain support
- Renewal evidence support
- Incident reporting support

Enterprise Ready does not mean legally approved for every customer. It means Ariyo has structured the asset so enterprise customers can perform their own approval process with credible evidence.

---

## 12. Certification Renewal

Certification must expire.

Default renewal intervals:

- Reviewed: 365 days
- Quality Verified: 180 days
- Safety Verified: 180 days
- Outcome Verified: 180 days
- Cost Predictable: 90 days
- Enterprise Ready: 180 days
- Smart Ready: 120 days
- Ariyo Certified: 180 days

Renewal checks must include:

- New incidents
- New disputes
- New refunds
- New enforcement events
- Dependency changes
- Model/provider changes
- Vendor/subprocessor changes
- Region policy changes
- Cost drift
- Outcome drift
- Quality benchmark drift
- Support burden drift
- Documentation freshness

---

## 13. Revocation Rules

Certification must be revoked or suspended when serious trust failures occur.

Revocation triggers:

- Severe policy violation
- Security/privacy incident
- Misleading template claims
- Hidden data transfer
- Hidden vendor/subprocessor
- Repeated unsafe outputs
- Unresolved high-severity incident
- Fraudulent reviews or installs
- Ranking manipulation
- Payout fraud
- Creator account suspension
- Expired required evidence
- Enterprise evidence falsification
- Major dependency becomes unavailable
- Region compliance becomes invalid

Suspension triggers:

- Evidence missing
- Renewal overdue
- Incident under investigation
- Vendor risk under review
- Customer dispute pending
- Cost anomaly under investigation

---

## 14. Certification Impact on Ranking and Discovery

Certification may improve visibility only when other quality conditions are healthy.

Certification must not override:

- Policy penalties
- Incident penalties
- Health degradation
- Poor outcomes
- Region incompatibility
- Customer plan mismatch
- Security restrictions
- Private catalog restrictions

Ranking signals may include:

- Certification level
- Certification freshness
- Certification scope
- Enterprise readiness
- Outcome verified status
- Cost predictability
- Safety verification

---

## 15. Plan-Aware Certification Rules

### 15.1 Basic

Basic certification should favor:

- Low-risk templates
- Simple setup
- Low cost predictability
- Minimal permissions
- Clear outcomes
- Low support burden

Basic must avoid certifying complex automation as Basic-friendly if it requires advanced controls.

### 15.2 Pro

Pro certification should support:

- Team workflows
- Integrations
- Moderate automation
- Operational reporting
- Business process outcomes
- Creator support expectations

### 15.3 Smart

Smart certification may include:

- Multi-agent orchestration
- Advanced AI model routing
- GEO workflows
- RAG and knowledge automation
- Advanced tool use
- High-value automation
- Enterprise-like guardrails

Smart certification requires stronger safety, monitoring, cost, and rollback controls.

---

## 16. Customer-Facing Certification UX

Customer-facing pages must show:

- Certification badges
- Badge explanations
- Certification scope
- Expiration date
- Evidence summary
- Limitations
- Plan applicability
- Enterprise readiness notes
- Recent revocation history if relevant
- What the badge does not guarantee

Example explanation:

> Safety Verified means this asset passed Ariyo's AI safety and permission review for the certified version. It does not remove your organization's responsibility to configure permissions appropriately.

---

## 17. Creator Certification Dashboard

Creators must see:

- Eligible certifications
- Missing requirements
- Failed requirements
- Evidence gaps
- Benchmark gaps
- Renewal deadlines
- Revocation risks
- Suggested improvements
- Certification history
- Badge performance impact
- Customer trust impact

Dashboard actions:

- Apply for certification
- Upload evidence
- Run precheck
- Request review
- Respond to conditions
- Appeal decision
- Renew certification

---

## 18. Internal Certification Console

Ariyo operators need:

- Certification queue
- Risk-prioritized reviews
- Evidence viewer
- Benchmark comparison
- Incident history
- Dispute history
- Creator trust score
- Asset health profile
- Decision editor
- Badge publisher
- Revocation tools
- Renewal calendar
- Audit log

---

## 19. Certification API Contract

### 19.1 List Certification Programs

`GET /api/v1/marketplace/certifications/programs`

Response:

```json
{
  "programs": [
    {
      "id": "cert_enterprise_ready",
      "name": "Enterprise Ready",
      "renewal_interval_days": 180,
      "public_badge_enabled": true,
      "asset_types_supported": ["template", "agent_team", "workflow_pack"]
    }
  ]
}
```

### 19.2 Get Template Certification Profile

`GET /api/v1/templates/{template_id}/certification-profile`

Response:

```json
{
  "template_id": "tpl_123",
  "current_certifications": [
    {
      "program_id": "cert_quality_verified",
      "status": "active",
      "certified_at": "2026-06-01T10:00:00Z",
      "expires_at": "2026-12-01T10:00:00Z"
    }
  ],
  "eligible_certifications": ["cert_cost_predictable"],
  "blocked_certifications": [
    {
      "program_id": "cert_enterprise_ready",
      "reason": "missing_subprocessor_disclosure"
    }
  ]
}
```

### 19.3 Run Certification Precheck

`POST /api/v1/templates/{template_id}/certification-precheck`

Request:

```json
{
  "program_id": "cert_enterprise_ready",
  "template_version_id": "tplv_456"
}
```

Response:

```json
{
  "status": "needs_changes",
  "passed": ["metadata_complete", "dependency_registry_complete"],
  "failed": ["security_evidence_missing", "renewal_owner_missing"],
  "warnings": ["cost_history_less_than_30_days"]
}
```

### 19.4 Submit Certification Request

`POST /api/v1/templates/{template_id}/certification-requests`

Request:

```json
{
  "program_id": "cert_safety_verified",
  "template_version_id": "tplv_456",
  "evidence_package_id": "evpkg_789",
  "notes": "Ready for safety certification review."
}
```

### 19.5 Decide Certification Request

`POST /api/v1/certification-requests/{request_id}/decision`

Request:

```json
{
  "decision_status": "approved_with_conditions",
  "conditions": ["renew safety simulation after next model-profile update"],
  "expires_at": "2026-12-19T00:00:00Z"
}
```

### 19.6 Revoke Certification

`POST /api/v1/templates/{template_id}/certifications/{certification_id}/revoke`

Request:

```json
{
  "reason": "severe_policy_violation",
  "customer_visible": true,
  "notify_installed_customers": true
}
```

---

## 20. Webhooks

Ariyo should emit:

- `certification.precheck.completed`
- `certification.request.submitted`
- `certification.request.approved`
- `certification.request.rejected`
- `certification.request.needs_changes`
- `certification.badge.published`
- `certification.badge.expired`
- `certification.badge.revoked`
- `certification.renewal.due`
- `certification.renewal.overdue`
- `certification.risk_detected`

---

## 21. Observability Events

Track:

- `certification_program_viewed`
- `certification_precheck_started`
- `certification_precheck_completed`
- `certification_request_created`
- `certification_review_started`
- `certification_review_decided`
- `certification_badge_displayed`
- `certification_badge_clicked`
- `certification_expired`
- `certification_revoked`
- `certification_renewed`
- `certification_appealed`

Every event must include:

- `template_id`
- `template_version_id`
- `creator_id`
- `program_id`
- `certification_status`
- `reviewer_type`
- `plan_context`
- `marketplace_surface`
- `risk_tier`
- `timestamp`

---

## 22. Advanced KPIs

Ariyo should measure:

- Certification approval rate
- Certification rejection rate
- Certification renewal rate
- Certification revocation rate
- Time to certification
- Time to renewal
- Badge click-through rate
- Certified asset install rate
- Certified asset activation rate
- Certified asset incident rate
- Certified asset refund rate
- Certified asset outcome success rate
- Certified asset revenue quality
- Enterprise procurement conversion from certification
- Creator certification completion rate
- Certification abuse attempts
- Certification evidence freshness score

---

## 23. AI Certification Assistant

AI may help:

- Explain certification requirements
- Detect missing evidence
- Summarize benchmark gaps
- Draft creator improvement suggestions
- Generate customer-facing badge explanations
- Compare template against certification criteria
- Flag renewal risks
- Flag revocation risks

AI must not:

- Approve high-risk certifications alone
- Hide failed criteria
- Generate fake evidence
- Rewrite evidence to appear stronger than it is
- Override policy enforcement
- Remove revocation recommendations when risk is real

---

## 24. Security and Privacy Rules

Certification data may include sensitive information.

Rules:

- Evidence must be permission-scoped
- Private security documents must not be public by default
- Enterprise evidence sharing must respect customer and vendor permissions
- Redaction must be available
- Reviewer access must be logged
- Certification decisions must be tamper-evident
- Revocation reasons must be carefully exposed according to policy

---

## 25. Forbidden Certification Patterns

Never allow:

- Paid certification without review
- Creator self-certification
- Permanent certification without renewal
- Badge display after revocation
- Badge display after expiration
- Certification that hides serious incidents
- Certification that ignores unsafe outputs
- Certification without evidence
- Enterprise Ready without vendor/security evidence
- Smart Ready without runtime guardrails
- Outcome Verified without outcome evidence
- Cost Predictable without cost history or forecast evidence
- Public badge claims that imply legal warranty
- Certification that overrides customer admin controls

---

## 26. Golden Rule

Certification is a promise of governed trust, not a marketing sticker.

If Ariyo cannot explain why a template is certified, what evidence supports it, when it expires, who reviewed it, what risks remain, and how it can be revoked, the template must not be certified.
