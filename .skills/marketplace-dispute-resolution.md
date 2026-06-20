# Ariyo Marketplace Dispute Resolution Skill

## 1. Core Contract

Ariyo Marketplace Dispute Resolution is not customer support improvisation.

It is the governed trust system that resolves conflicts between customers, creators, partners, Ariyo, payment providers, and marketplace assets when expectations, quality, billing, safety, permissions, performance, compliance, or trust are disputed.

Every dispute must be intakeable, classified, evidence-backed, time-bound, role-routed, customer-safe, creator-fair, financially traceable, privacy-aware, appealable where appropriate, and connected back to marketplace quality, ranking, billing, template review, and product improvement.

Ariyo must protect marketplace trust without automatically favoring the buyer, creator, partner, or platform.

Ariyo must favor evidence, policy, customer safety, and long-term ecosystem integrity.

---

## 2. Purpose

This skill defines how Ariyo must design and operate the marketplace dispute resolution system for AI Employee assets, marketplace templates, partner solutions, creator services, bundles, knowledge packs, workflows, GEO/API templates, and installable agent teams.

The system must answer:

- What happened?
- Who is affected?
- Which policy or expectation is being disputed?
- Which evidence is required?
- Which party must respond?
- What temporary protection is needed?
- What financial action is allowed?
- Whether the asset should remain available, be restricted, paused, suspended, refunded, corrected, or escalated.
- How the decision is audited.
- How appeal works.
- How this dispute improves future marketplace quality.

---

## 3. Dependencies

This skill depends on:

- `ecosystem-marketplace-economy.md`
- `agent-marketplace-template-builder.md`
- `ai-agent-template-review-governance.md`
- `template-quality-ranking-system.md`
- `marketplace-search-recommendation-engine.md`
- `marketplace-installation-entitlements.md`
- `marketplace-billing-payouts.md`
- `customer-success-playbooks.md`
- `knowledge-base-support-system.md`
- `trust-center-public-status.md`
- `legal-pages-policy-system.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `finance-accounting-controls.md`
- `internal-admin-backoffice.md`
- `operations-command-center.md`
- `observability-analytics-events.md`
- `ai-agent-incident-response.md`
- `ai-agent-observability-tracing.md`

---

## 4. Dispute Resolution Philosophy

Ariyo Marketplace must be trusted because disputes are handled fairly, quickly, and transparently.

Dispute resolution must not be:

- Hidden behind vague support replies.
- Handled only by whoever responds first.
- Treated as a refund button.
- Used to punish creators without evidence.
- Used to deny customers without investigation.
- Used to protect Ariyo revenue at the cost of trust.
- Used to hide marketplace quality problems.

Dispute resolution must be:

- Evidence-driven.
- Policy-driven.
- Time-bound.
- Risk-aware.
- Financially controlled.
- Privacy-safe.
- Creator-fair.
- Customer-safe.
- Audit-ready.
- Connected to marketplace ranking and review governance.

---

## 5. Dispute Types

Ariyo must support the following dispute categories.

### 5.1 Refund Dispute

A customer requests a refund or challenges a charge related to a marketplace asset.

Examples:

- Asset did not work as described.
- Asset was purchased accidentally.
- Asset required a higher plan than expected.
- Asset failed during installation.
- Asset produced repeated errors.
- Asset caused unexpected AI usage cost.
- Customer claims misleading listing.

### 5.2 Quality Claim

A customer claims the asset quality is below marketplace standards.

Examples:

- Poor output quality.
- Broken workflow.
- Incomplete setup instructions.
- Low-quality prompt behavior.
- Unsupported use case.
- Generic template pretending to be industry-specific.
- Bad documentation.

### 5.3 Policy Violation Claim

A customer, reviewer, creator, partner, or Ariyo operator reports policy violation.

Examples:

- Misleading claims.
- Unauthorized data access.
- Unsafe automation.
- Prohibited content.
- Security-sensitive tool access.
- AI output that violates Ariyo policy.
- Fake reviews or ranking manipulation.
- Creator abuse.

### 5.4 Security or Privacy Claim

A dispute involves possible exposure or misuse of data.

Examples:

- Template retrieved data outside allowed scope.
- Knowledge pack contained hidden sensitive data.
- Workflow leaked customer information.
- Integration bundle requested excessive scopes.
- Prompt injection created unexpected output.
- Marketplace asset attempted unauthorized external action.

Security/privacy disputes must route into `ai-agent-incident-response.md` and `security-threat-model.md` workflows.

### 5.5 Billing and Payout Claim

A dispute involves creator payout, commission, revenue share, refund allocation, or marketplace ledger accuracy.

Examples:

- Creator payout missing.
- Refund clawback disputed.
- Revenue share calculated incorrectly.
- Partner commission conflict.
- Tax withholding issue.
- Chargeback handling issue.

### 5.6 Installation and Entitlement Claim

A dispute involves whether an organization should have been able to install or use an asset.

Examples:

- Installed asset not compatible with current plan.
- Entitlement incorrectly granted.
- Trial access misrepresented.
- Upgrade gate unclear.
- Asset disabled after downgrade.

### 5.7 Creator Claim Against Customer

Creators may also open disputes.

Examples:

- Customer requested refund after successful delivery.
- Customer violated license terms.
- Customer abused support or creator services.
- Customer attempted to copy or resell creator asset.
- Customer used private implementation work outside agreed scope.

### 5.8 Partner Service Delivery Claim

Partner or agency service delivery connected to marketplace asset may be disputed.

Examples:

- Partner did not deliver implementation.
- Customer did not provide required access.
- Scope changed without agreement.
- Outcome expectation was misrepresented.
- Service completion is disputed.

---

## 6. Dispute Severity Levels

Ariyo must classify disputes by severity.

### 6.1 Severity 0: Inquiry

Not yet a dispute.

Examples:

- Customer asks whether refund is possible.
- Creator asks why payout is delayed.
- Customer asks about asset limitations.

### 6.2 Severity 1: Low Impact

Single customer, low financial value, no safety/privacy/security impact.

Examples:

- Minor install issue.
- Documentation confusion.
- Small refund request.

### 6.3 Severity 2: Moderate Impact

Customer trust or creator trust is affected, but no critical harm.

Examples:

- Repeated quality complaint.
- Misleading listing claim.
- Asset does not meet described use case.
- Medium refund amount.

### 6.4 Severity 3: High Impact

Multiple customers, significant revenue, plan entitlement issue, creator reputation issue, or operational disruption.

Examples:

- Template broken after update.
- Many customers impacted.
- Payout dispute involving multiple creators.
- High refund volume.
- Ranking manipulation suspicion.

### 6.5 Severity 4: Critical Impact

Security, privacy, compliance, unsafe AI action, fraud, legal exposure, or severe customer harm.

Examples:

- Data exposure.
- Malicious template behavior.
- Unauthorized tool execution.
- Fraudulent creator payout scheme.
- Payment/chargeback attack.
- Legal or regulatory complaint.

Severity 4 disputes must be treated as incidents, not normal support tickets.

---

## 7. Dispute Lifecycle

Ariyo must support the following dispute lifecycle.

```text
created
triage_required
awaiting_customer_evidence
awaiting_creator_response
awaiting_partner_response
internal_review
financial_review
security_review
compliance_review
marketplace_review
mediation_in_progress
decision_pending
decision_issued
remediation_required
refund_processing
payout_adjustment_pending
appeal_window_open
appeal_requested
appeal_review
final_decision_issued
closed
reopened
escalated_to_incident
```

---

## 8. Intake Requirements

Every dispute must capture structured information.

### 8.1 Required Fields

```json
{
  "dispute_id": "disp_123",
  "organization_id": "org_123",
  "asset_id": "asset_123",
  "asset_version_id": "assetver_123",
  "installation_id": "inst_123",
  "order_id": "ord_123",
  "customer_user_id": "usr_123",
  "creator_id": "creator_123",
  "dispute_type": "quality_claim",
  "severity": "s2",
  "summary": "Template does not work as described",
  "requested_resolution": "refund",
  "evidence": [],
  "created_at": "2026-06-18T00:00:00Z"
}
```

### 8.2 Evidence Types

Ariyo must support:

- Screenshot.
- Install log.
- Workflow run ID.
- AI trace ID.
- Billing event ID.
- Invoice ID.
- Refund ID.
- Payout ID.
- Customer message.
- Creator response.
- Support ticket.
- Simulation result.
- Template review record.
- Marketplace listing snapshot.
- Version diff.
- Permission grant snapshot.
- Integration error log.
- Human review decision.

Evidence must be immutable after submission, but parties may add supplemental evidence.

---

## 9. Evidence Preservation Rules

Ariyo must preserve evidence for disputes.

Rules:

- Never overwrite original listing copy once dispute is opened.
- Preserve asset version involved in dispute.
- Preserve installation state.
- Preserve entitlement state.
- Preserve billing ledger entries.
- Preserve AI traces relevant to dispute.
- Preserve reviewer decisions.
- Preserve creator messages.
- Preserve customer messages.
- Preserve timestamps and actor identity.
- Redact sensitive data where displayed to the opposite party.

Forbidden:

- Allowing creators to edit disputed asset version without version record.
- Allowing support to decide without evidence.
- Deleting traces during active dispute.
- Showing full sensitive AI traces to creators without permission.
- Sending raw payment provider metadata to customers.

---

## 10. Party Roles

### 10.1 Customer

The customer may:

- Open dispute.
- Submit evidence.
- Request refund, remediation, credit, cancellation, or explanation.
- Respond to creator claims.
- Appeal eligible decisions.

### 10.2 Creator

The creator may:

- Respond to dispute.
- Submit evidence.
- Offer fix, replacement, support, credit, or partial refund.
- Appeal creator penalty.
- Contest payout hold.

### 10.3 Partner

The partner may:

- Respond to service delivery claims.
- Provide implementation evidence.
- Accept or contest scope issues.
- Propose remediation.

### 10.4 Ariyo Marketplace Operations

Marketplace Operations may:

- Triage dispute.
- Request evidence.
- Pause asset installs.
- Issue marketplace decision.
- Route to finance/security/compliance.
- Apply ranking penalties.
- Suspend asset or creator.

### 10.5 Ariyo Finance Operations

Finance may:

- Review refunds.
- Hold payouts.
- Adjust commissions.
- Reconcile ledger.
- Handle chargebacks.
- Validate tax/payout constraints.

### 10.6 Ariyo Trust & Safety

Trust & Safety may:

- Investigate policy violations.
- Classify security/privacy issues.
- Trigger incident response.
- Suspend high-risk asset.
- Recommend permanent removal.

### 10.7 Appeals Reviewer

Appeals reviewer must not be the same person who made the original decision for high-impact disputes.

---

## 11. Resolution Types

Ariyo must support multiple resolution outcomes.

```text
no_action
explanation_only
customer_guidance
creator_fix_required
asset_patch_required
asset_version_rollback
asset_temporarily_paused
asset_unpublished
asset_suspended
asset_removed
full_refund
partial_refund
credit_issued
payout_hold
payout_release
payout_adjustment
commission_adjustment
creator_warning
creator_probation
creator_suspension
ranking_penalty
listing_correction_required
policy_training_required
customer_account_action
partner_remediation_required
incident_response_triggered
```

---

## 12. Refund Decision Framework

Refunds must not be arbitrary.

### 12.1 Full Refund Candidates

Full refund may be appropriate when:

- Asset materially fails to work as described.
- Asset cannot be installed due to undisclosed requirements.
- Asset caused unauthorized action.
- Asset has unresolved severe defect.
- Listing made false or misleading claims.
- Customer purchased duplicate asset due to platform error.
- Asset was removed for policy violation shortly after purchase.

### 12.2 Partial Refund Candidates

Partial refund may be appropriate when:

- Customer used asset successfully for some period.
- Some promised functionality worked and some did not.
- Creator offers remediation but customer prefers exit.
- Service delivery was partially completed.

### 12.3 Refund Denial Candidates

Refund may be denied when:

- Customer misunderstood clearly disclosed requirements.
- Customer did not complete required setup.
- Customer violated license terms.
- Customer used asset extensively and claims dissatisfaction without evidence.
- Issue was caused by customer's external integration configuration.
- Dispute is opened after policy-defined refund window and no material defect exists.

### 12.4 Refund Must Not Be Denied When

Refund must not be denied only because:

- Customer is on Basic.
- Creator has high trust score.
- Asset is popular.
- Ariyo wants to protect marketplace revenue.
- Customer lacks technical vocabulary.
- Issue is hard to reproduce but trace evidence suggests platform or asset failure.

---

## 13. Creator Payout Protection and Holds

When a dispute is opened, payout behavior must depend on risk.

### 13.1 No Hold

For low-risk inquiries, payout proceeds normally.

### 13.2 Partial Hold

For moderate disputes, hold disputed portion only.

### 13.3 Full Hold

For severe disputes, hold payout related to disputed asset/order.

### 13.4 Creator-Wide Hold

For suspected fraud, malicious behavior, or repeated severe violations, hold broader creator payouts pending review.

All payout holds must be visible to authorized finance and creator dashboard users with reason code and expected next review date.

---

## 14. Mediation Workflow

Some disputes should be mediated before final decision.

Mediation is appropriate when:

- Customer and creator disagree on service scope.
- Template works but expectations were unclear.
- Creator can fix issue quickly.
- Partner delivery issue is partly customer-dependent.
- Refund can be avoided through remediation.

Mediation must be time-boxed.

```text
standard_mediation_window: 5 business days
high_priority_mediation_window: 2 business days
critical_dispute_mediation_window: none; route to incident/security review
```

---

## 15. Appeal Workflow

Ariyo must allow appeals for eligible disputes.

### 15.1 Appealable Decisions

- Refund denied.
- Refund approved against creator payout.
- Asset suspended.
- Creator penalty applied.
- Partner penalty applied.
- Ranking penalty applied.
- Marketplace removal.
- Account limitation.

### 15.2 Non-Appealable or Limited-Appeal Decisions

- Emergency security suspension.
- Legal takedown.
- Payment provider chargeback result.
- Fraud-confirmed removal.
- Data exposure containment action.

These may allow post-action review, but not immediate reversal.

### 15.3 Appeal Requirements

Appeal must include:

- Decision being appealed.
- Reason for appeal.
- New evidence or claim of incorrect interpretation.
- Requested outcome.

### 15.4 Appeal SLA

```text
low_impact: 10 business days
moderate_impact: 7 business days
high_impact: 5 business days
critical_impact: handled under incident/legal process
```

---

## 16. Dispute Policy Matrix

| Dispute Type | Primary Owner | Secondary Review | Financial Risk | Marketplace Action |
|---|---|---|---|---|
| Refund request | Support Ops | Finance | Medium | None unless repeated |
| Quality claim | Marketplace Ops | Creator | Medium | Ranking watch |
| Misleading listing | Marketplace Ops | Legal/Brand | Medium | Listing correction |
| Security issue | Trust & Safety | Engineering | High | Immediate pause |
| Privacy issue | Trust & Safety | Legal/Data | High | Incident route |
| Creator payout | Finance Ops | Marketplace Ops | Medium | Payout hold |
| Fraud claim | Trust & Safety | Finance | Critical | Hold/suspend |
| Service delivery | Partner Ops | Support | Medium | Partner review |
| Entitlement issue | Marketplace Ops | Billing/Product | Medium | Install policy review |

---

## 17. Plan-Based Dispute Experience: Basic / Pro / Smart

Dispute fairness must not depend on plan, but response capabilities and support channels may differ by plan.

### 17.1 Basic

Basic customers receive:

- Standard dispute intake.
- Self-service evidence upload.
- Email-based support.
- Standard refund policy.
- Standard mediation window.
- Limited advanced support review unless security/privacy issue.

Basic must still receive full protection for fraud, security, privacy, unauthorized action, and misleading marketplace claims.

### 17.2 Pro

Pro customers receive:

- Faster triage.
- Organization-level dispute dashboard.
- Team admin visibility.
- Workflow and integration trace review.
- Priority dispute queue for operational assets.
- Better installation and entitlement diagnostics.

### 17.3 Smart

Smart customers receive:

- Highest priority marketplace dispute handling.
- Advanced AI trace review.
- Dedicated customer success escalation path.
- Complex workflow/agent team dispute review.
- Cost overrun investigation.
- Enterprise-grade evidence export.
- Escalation to senior review for high-value/high-impact assets.

Smart does not mean automatic refund or creator override. It means deeper, faster, more evidence-rich handling.

---

## 18. Creator Trust Score Impact

Disputes must affect creator trust score based on evidence and outcome.

### 18.1 Negative Signals

- Confirmed policy violation.
- Confirmed misleading listing.
- Repeated refund approvals.
- High unresolved dispute rate.
- Slow creator response.
- Poor remediation quality.
- Security/privacy issue.
- Fraud attempt.
- Post-publish incident.

### 18.2 Positive Signals

- Fast response.
- Successful remediation.
- Low dispute rate.
- High customer satisfaction after dispute.
- Accurate documentation.
- Transparent limitation handling.
- Proactive fix before dispute escalates.

### 18.3 Creator Score Rules

- One false or unproven complaint must not heavily penalize creator.
- Confirmed high-severity violation must immediately affect trust score.
- Repeat moderate issues can become severe through pattern detection.
- Appeals that overturn decisions must reverse related score penalties.

---

## 19. Marketplace Ranking Impact

Disputes must feed into ranking quality, but carefully.

Ranking penalties must consider:

- Confirmed dispute outcome.
- Severity.
- Recency.
- Number of affected installs.
- Creator response quality.
- Remediation status.
- Repeat pattern.
- Customer impact.

Ranking must not penalize assets simply because:

- They are popular and receive more tickets.
- They are used in complex workflows.
- Customers open unfounded disputes.
- Creator serves more enterprise customers.

Use normalized rates, not raw counts.

---

## 20. Marketplace Asset Actions During Dispute

Ariyo may apply temporary actions.

### 20.1 No Temporary Action

For low-risk customer-specific issue.

### 20.2 Warning Banner

For known issue that does not require pause.

### 20.3 New Install Pause

Stop new installations while existing users continue.

### 20.4 Full Usage Pause

Pause asset usage if safety/security/privacy risk exists.

### 20.5 Version Rollback

Rollback to previous stable version.

### 20.6 Asset Suspension

Remove from marketplace and pause usage pending review.

### 20.7 Creator Suspension

Restrict creator from publishing/updating assets.

---

## 21. Communication Rules

### 21.1 Customer Communication

Customer messages must include:

- What was received.
- What evidence is needed.
- Expected timeline.
- Temporary protections, if any.
- Decision explanation.
- Refund/credit status, if applicable.
- Appeal eligibility.

### 21.2 Creator Communication

Creator messages must include:

- Dispute summary.
- Impacted asset/version.
- Evidence available to creator.
- Required response.
- Deadline.
- Possible outcomes.
- Payout impact.
- Appeal eligibility.

### 21.3 Public Communication

Public communication is required only for broad marketplace impact, security/privacy incidents, or trust-center-worthy issues.

Never publish customer-specific dispute details publicly.

---

## 22. API Contract

### 22.1 Create Dispute

`POST /v1/marketplace/disputes`

Request:

```json
{
  "asset_id": "asset_123",
  "installation_id": "inst_123",
  "order_id": "ord_123",
  "type": "quality_claim",
  "summary": "The template does not generate the promised support workflow.",
  "requested_resolution": "refund",
  "evidence_ids": ["ev_123"]
}
```

Response:

```json
{
  "dispute_id": "disp_123",
  "status": "triage_required",
  "severity": "s2",
  "next_required_action": "awaiting_marketplace_triage",
  "estimated_response_window": "3_business_days"
}
```

### 22.2 Add Evidence

`POST /v1/marketplace/disputes/{dispute_id}/evidence`

Request:

```json
{
  "type": "workflow_run",
  "reference_id": "run_123",
  "description": "Workflow failed after installation."
}
```

### 22.3 Get Dispute

`GET /v1/marketplace/disputes/{dispute_id}`

Response must redact sensitive information based on viewer role.

### 22.4 Creator Response

`POST /v1/marketplace/disputes/{dispute_id}/creator-response`

Request:

```json
{
  "response_type": "offer_fix",
  "message": "We identified the issue and will publish a patch within 24 hours.",
  "proposed_resolution": "asset_patch_required"
}
```

### 22.5 Issue Decision

`POST /v1/internal/marketplace/disputes/{dispute_id}/decision`

Request:

```json
{
  "decision": "partial_refund",
  "refund_amount_minor": 4900,
  "currency": "USD",
  "creator_payout_adjustment": true,
  "asset_action": "listing_correction_required",
  "reason_codes": ["misleading_listing_partial", "customer_used_asset"],
  "appeal_allowed": true
}
```

### 22.6 Submit Appeal

`POST /v1/marketplace/disputes/{dispute_id}/appeals`

Request:

```json
{
  "reason": "The asset worked as described after customer completed setup.",
  "new_evidence_ids": ["ev_456"],
  "requested_outcome": "reverse_refund"
}
```

---

## 23. Webhook Events

Ariyo must emit dispute webhooks.

```text
marketplace.dispute.created
marketplace.dispute.evidence_added
marketplace.dispute.creator_response_required
marketplace.dispute.customer_response_required
marketplace.dispute.escalated
marketplace.dispute.decision_issued
marketplace.dispute.refund_approved
marketplace.dispute.refund_denied
marketplace.dispute.payout_hold_created
marketplace.dispute.payout_hold_released
marketplace.dispute.asset_paused
marketplace.dispute.asset_suspended
marketplace.dispute.appeal_requested
marketplace.dispute.final_decision_issued
marketplace.dispute.closed
```

Webhook payloads must not include sensitive evidence bodies by default.

---

## 24. Observability Events

Product analytics must track:

```text
dispute_opened
dispute_type_selected
dispute_evidence_uploaded
dispute_triaged
dispute_escalated
dispute_creator_responded
dispute_customer_responded
dispute_decision_issued
dispute_refund_processed
dispute_payout_adjusted
dispute_appeal_submitted
dispute_appeal_decided
dispute_closed
dispute_reopened
```

Each event must include:

- dispute_id
- asset_id
- asset_version_id
- creator_id
- organization_id
- plan
- dispute_type
- severity
- resolution_type
- time_to_first_response
- time_to_resolution
- refund_amount if applicable
- privacy classification

---

## 25. Advanced KPI System

Ariyo must monitor advanced marketplace dispute KPIs.

### 25.1 Dispute Volume KPIs

- Disputes per 1,000 installs.
- Disputes per asset category.
- Disputes by plan.
- Disputes by creator trust tier.
- Disputes by asset risk level.

### 25.2 Resolution KPIs

- Time to first response.
- Time to triage.
- Time to creator response.
- Time to decision.
- Time to refund.
- Time to appeal decision.
- Reopen rate.

### 25.3 Financial KPIs

- Refund rate by asset.
- Refund amount by category.
- Refund-to-GMV ratio.
- Payout hold volume.
- Chargeback rate.
- Creator payout adjustment rate.
- Dispute-related revenue leakage.

### 25.4 Trust KPIs

- Confirmed policy violation rate.
- Misleading listing rate.
- Customer satisfaction after dispute.
- Creator satisfaction after dispute.
- Appeal success rate.
- Post-resolution churn rate.
- Marketplace Trust Score.

### 25.5 Quality KPIs

- Quality claim rate.
- Install-to-activation after dispute.
- Asset patch completion rate.
- Repeat dispute rate per asset.
- Repeat dispute rate per creator.
- Dispute-driven ranking penalty rate.

### 25.6 Safety KPIs

- Security/privacy dispute rate.
- Disputes escalated to incident.
- Unsafe output dispute rate.
- Unauthorized tool action dispute rate.
- Prompt injection-related dispute rate.

---

## 26. Frontend Requirements

### 26.1 Customer Dispute UI

Must include:

- Dispute reason selector.
- Asset/order context.
- Evidence upload.
- Requested resolution selector.
- Timeline view.
- Status explanation.
- Expected next step.
- Appeal option when eligible.

### 26.2 Creator Dispute UI

Must include:

- Open disputes dashboard.
- Required response deadlines.
- Evidence view with redactions.
- Payout impact.
- Proposed remediation actions.
- Appeal submission.
- Creator trust impact summary.

### 26.3 Internal Admin UI

Must include:

- Triage queue.
- Severity filters.
- Evidence timeline.
- AI trace links.
- Billing ledger links.
- Creator history.
- Customer history.
- Asset review history.
- Decision panel.
- Refund/payout action panel.
- Escalation controls.
- Audit trail.

---

## 27. Backend Requirements

Backend must provide:

- Immutable dispute ledger.
- Role-based access control.
- Evidence storage.
- Redaction layer.
- Billing integration.
- Payout integration.
- Marketplace asset action controls.
- Appeal workflow engine.
- SLA timers.
- Escalation routing.
- Webhooks.
- Audit logging.
- KPI pipelines.

All financial decisions must link to `marketplace-billing-payouts.md` and `finance-accounting-controls.md`.

---

## 28. AI Dispute Assistant Rules

Ariyo may use an AI assistant to help dispute operations.

AI assistant may:

- Summarize evidence.
- Identify missing evidence.
- Suggest policy references.
- Draft customer/creator messages.
- Detect risk signals.
- Recommend escalation.
- Compare dispute to past similar cases.

AI assistant must not:

- Make final refund decision.
- Suspend creator without human approval.
- Reveal sensitive evidence.
- Invent policy.
- Override finance controls.
- Communicate final decision without reviewer approval.
- Decide legal/security incidents alone.

---

## 29. Security and Privacy Rules

- Evidence access must be role-gated.
- Customer data must be redacted before creator view unless consented and necessary.
- AI traces must be sanitized.
- Payment data must never be exposed beyond allowed fields.
- Internal notes must not be visible to external parties.
- Sensitive disputes must require additional reviewer permissions.
- All evidence exports must be audited.

---

## 30. Forbidden Patterns

Never:

- Treat marketplace disputes as simple support tickets.
- Approve refunds without ledger linkage.
- Deny refunds without evidence.
- Penalize creators based on unverified complaints.
- Let creators delete disputed asset versions.
- Let support staff modify payout ledger manually.
- Show raw sensitive customer data to creators.
- Hide active dispute impact from ranking system.
- Keep disputed high-risk asset installable without review.
- Allow appeal reviewer to be the same person for high-impact disputes.
- Apply creator penalties without reason codes.
- Ignore repeated low-severity disputes.
- Use AI assistant to make final dispute decisions.
- Let paid/sponsored placement override dispute penalties.
- Ignore marketplace dispute data in template review governance.

---

## 31. Golden Rule

Ariyo Marketplace disputes must resolve individual problems while improving the marketplace system.

Every dispute should make Ariyo better at preventing bad listings, unsafe templates, misleading claims, financial errors, low-quality assets, and trust loss.

---

## 32. Final Rule

If a dispute cannot be fairly resolved with available evidence, Ariyo must choose the path that minimizes customer harm, preserves creator fairness, protects platform trust, and creates a clear requirement for better evidence, better policy, or better product design.
