# Ariyo Marketplace Customer Review & Reputation System Skill

## Core Contract

Ariyo Marketplace Customer Review & Reputation System is not a star-rating widget.

It is the governed trust, feedback, customer-outcome, creator-response, review-quality, abuse-prevention, reputation-scoring, and marketplace-signal system that helps customers understand real template performance while protecting the marketplace from fake reviews, biased incentives, manipulation, retaliation, review bombing, paid review fraud, and misleading popularity signals.

Ariyo must let customers share real experience.

Ariyo must never let reviews become the easiest way to manipulate ranking, trust labels, creator reputation, or customer decisions.

---

## 1. Purpose

This skill defines how Ariyo handles customer reviews, verified ratings, outcome feedback, creator responses, reputation signals, review moderation, fake review detection, and the controlled use of reviews in Marketplace ranking, search, certification, trust labels, creator success, and enterprise procurement.

Ariyo reviews must answer practical customer questions:

- Did the template work after install?
- Was setup easy?
- Did it produce measurable outcomes?
- Was it safe and reliable?
- Were costs predictable?
- Did the creator support it?
- Did it remain healthy after updates?
- Is it suitable for my plan, industry, region, and governance level?
- Are the reviews trustworthy?

Ariyo must treat reviews as evidence signals, not truth by themselves.

---

## 2. Related Skills

This skill depends on and feeds:

- `marketplace-template-trust-labeling-system.md`
- `marketplace-template-certification-program.md`
- `marketplace-template-quality-benchmarking.md`
- `marketplace-template-outcome-intelligence.md`
- `marketplace-template-lifecycle-optimization.md`
- `marketplace-template-health-monitoring.md`
- `marketplace-template-auto-remediation.md`
- `marketplace-template-dependency-registry.md`
- `marketplace-template-migration-portability.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-data-residency-region-controls.md`
- `marketplace-regulatory-compliance-matrix.md`
- `marketplace-compliance-evidence-center.md`
- `marketplace-enterprise-audit-reports.md`
- `marketplace-enterprise-vendor-management.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-policy-enforcement-rules.md`
- `marketplace-trust-safety-operations.md`
- `marketplace-dispute-resolution.md`
- `marketplace-billing-payouts.md`
- `marketplace-installation-entitlements.md`
- `marketplace-search-recommendation-engine.md`
- `template-quality-ranking-system.md`
- `marketplace-creator-success-system.md`
- `marketplace-partner-operations.md`
- `customer-success-playbooks.md`
- `observability-analytics-events.md`
- `quality-assurance-system.md`
- `ai-safety-evaluation.md`
- `human-review-governance.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`

---

## 3. Review Philosophy

Ariyo reviews must be:

1. **Verified** — grounded in actual install, usage, purchase, or authorized evaluation.
2. **Outcome-aware** — linked to meaningful customer value, not only sentiment.
3. **Contextual** — interpreted by plan, industry, region, use case, size, and maturity.
4. **Manipulation-resistant** — protected against fake reviews, paid reviews, review rings, creator self-review, and retaliation.
5. **Safe** — never exposing confidential data, personal data, secrets, customer records, or private business details.
6. **Fair** — allowing creator response and evidence-based dispute resolution.
7. **Actionable** — helping customers decide and helping creators improve.
8. **Controlled** — feeding ranking and trust labels only through weighted, abuse-resistant models.

Ariyo must distinguish between:

- Raw rating
- Verified rating
- Review quality
- Outcome evidence
- Customer segment fit
- Support experience
- Creator reputation
- Policy risk
- Safety incidents
- Refund/dispute history
- Installation success
- Long-term retention

---

## 4. Review Types

Ariyo should support multiple review types because one generic review cannot explain marketplace quality.

### 4.1 Verified Install Review

A review submitted by a user or admin from an organization where the template was installed.

Required context:

- Template ID
- Installation ID
- Organization ID
- Workspace ID
- Plan tier
- Install date
- Usage duration
- Reviewer role
- Verification status

### 4.2 Verified Purchase Review

A review tied to a paid Marketplace transaction.

Additional context:

- Order ID
- License type
- Refund status
- Dispute status
- Billing period

### 4.3 Outcome Review

A review that answers whether the template produced intended results.

Examples:

- Reduced manual work
- Improved lead response time
- Automated ticket triage
- Improved knowledge retrieval quality
- Reduced support burden
- Improved onboarding completion
- Saved AI cost
- Increased conversion
- Improved compliance reporting

### 4.4 Implementation Review

A review focused on setup and deployment experience.

Useful fields:

- Setup difficulty
- Documentation clarity
- Dependency accuracy
- Permission clarity
- Time to first value
- Integration readiness
- Support quality

### 4.5 Enterprise Governance Review

A review from enterprise admins, security, procurement, legal, compliance, or IT stakeholders.

Useful fields:

- Procurement readiness
- Vendor evidence quality
- Security review clarity
- Region compatibility
- Auditability
- Approval workflow fit
- Policy transparency

### 4.6 Creator Support Review

A review of creator responsiveness and support quality.

Useful fields:

- Response time
- Issue resolution quality
- Update quality
- Documentation fixes
- Escalation handling
- Communication clarity

### 4.7 Internal Private Catalog Review

A review submitted inside a customer's private catalog.

Rules:

- Visible only to authorized org/workspace users by default.
- May be aggregated anonymously for internal admins.
- Must not be shown publicly unless explicitly promoted and approved.

### 4.8 Partner Service Review

A review of partner implementation services attached to a Marketplace asset.

Fields:

- Delivery quality
- Timeline accuracy
- Scope clarity
- SLA adherence
- Customer communication
- Post-launch support

---

## 5. Core Objects

### 5.1 MarketplaceReview

```ts
export type ReviewVerificationStatus =
  | 'unverified'
  | 'verified_install'
  | 'verified_purchase'
  | 'verified_admin'
  | 'verified_enterprise_stakeholder'
  | 'verified_private_catalog'
  | 'rejected_verification';

export type ReviewVisibility =
  | 'public'
  | 'private_org'
  | 'private_workspace'
  | 'creator_only'
  | 'ariyo_internal'
  | 'redacted_public'
  | 'hidden_policy';

export interface MarketplaceReview {
  id: string;
  templateId: string;
  templateVersion?: string;
  installationId?: string;
  orderId?: string;
  organizationId: string;
  workspaceId?: string;
  reviewerUserId: string;
  reviewerRole: 'owner' | 'admin' | 'builder' | 'operator' | 'security' | 'procurement' | 'finance' | 'end_user' | 'partner' | 'other';
  verificationStatus: ReviewVerificationStatus;
  visibility: ReviewVisibility;
  ratingOverall: number;
  ratingSetup?: number;
  ratingOutcome?: number;
  ratingReliability?: number;
  ratingSafety?: number;
  ratingSupport?: number;
  ratingCostPredictability?: number;
  title?: string;
  body?: string;
  pros?: string[];
  cons?: string[];
  recommendedFor?: string[];
  notRecommendedFor?: string[];
  outcomeClaims?: ReviewOutcomeClaim[];
  context: ReviewContext;
  moderation: ReviewModerationState;
  abuseSignals: ReviewAbuseSignals;
  creatorResponse?: CreatorReviewResponse;
  createdAt: string;
  updatedAt: string;
}
```

### 5.2 ReviewContext

```ts
export interface ReviewContext {
  planTier: 'Basic' | 'Pro' | 'Smart' | 'Enterprise' | 'Unknown';
  industry?: string;
  companySizeBucket?: 'solo' | 'small' | 'mid_market' | 'enterprise' | 'unknown';
  region?: string;
  useCase?: string;
  installDurationDays?: number;
  successfulRuns?: number;
  failedRuns?: number;
  supportTicketsOpened?: number;
  refundRequested?: boolean;
  disputeOpened?: boolean;
  incidentLinked?: boolean;
  templateCategory?: string;
  dependencyComplexity?: 'low' | 'medium' | 'high' | 'unknown';
}
```

### 5.3 ReviewOutcomeClaim

```ts
export interface ReviewOutcomeClaim {
  id: string;
  outcomeType:
    | 'time_saved'
    | 'cost_reduced'
    | 'conversion_improved'
    | 'response_time_improved'
    | 'manual_work_reduced'
    | 'quality_improved'
    | 'compliance_evidence_improved'
    | 'customer_satisfaction_improved'
    | 'other';
  claimedValue?: number;
  claimedUnit?: string;
  customerConfirmed: boolean;
  systemObserved?: boolean;
  evidenceLevel: 'none' | 'self_reported' | 'system_observed' | 'admin_confirmed' | 'audited';
  notes?: string;
}
```

### 5.4 CreatorReviewResponse

```ts
export interface CreatorReviewResponse {
  id: string;
  reviewId: string;
  creatorId: string;
  responderUserId: string;
  body: string;
  status: 'submitted' | 'published' | 'hidden_policy' | 'edited' | 'removed';
  createdAt: string;
  updatedAt: string;
}
```

### 5.5 ReviewModerationState

```ts
export interface ReviewModerationState {
  status:
    | 'published'
    | 'pending_moderation'
    | 'needs_redaction'
    | 'hidden_policy'
    | 'removed_abuse'
    | 'removed_spam'
    | 'removed_confidential_data'
    | 'under_dispute';
  moderationReason?: string;
  humanReviewed: boolean;
  aiScreened: boolean;
  redactionApplied: boolean;
  policyCaseId?: string;
  disputeCaseId?: string;
}
```

### 5.6 ReviewAbuseSignals

```ts
export interface ReviewAbuseSignals {
  suspiciousVelocity: boolean;
  duplicateText: boolean;
  creatorSelfReviewSuspected: boolean;
  paidReviewSuspected: boolean;
  reviewRingSuspected: boolean;
  retaliationSuspected: boolean;
  reviewBombingSuspected: boolean;
  competitorSabotageSuspected: boolean;
  confidentialDataDetected: boolean;
  piiDetected: boolean;
  toxicityDetected: boolean;
  manipulationScore: number;
}
```

---

## 6. Review Eligibility Rules

Ariyo must not allow arbitrary public reviews from users who have no relationship to the asset.

### 6.1 Public Review Eligibility

A user may submit a public review only if:

- Their organization installed or purchased the asset.
- The reviewer has a role allowed by org policy.
- The template has been used for enough time or runs to form a meaningful opinion.
- The organization has not disabled public review publication.
- The review does not include confidential or personal data.
- The review is not part of an active fraud or dispute pattern.

### 6.2 Private Review Eligibility

Private catalog reviews may be allowed for:

- Internal templates
- Pilot installations
- Enterprise evaluations
- Security/procurement reviews
- Workspace-only usage feedback

### 6.3 Creator Review Restrictions

Creators may not:

- Review their own templates publicly.
- Incentivize only positive reviews.
- Require customers to leave reviews for support.
- Retaliate against negative reviewers.
- Hide negative reviews by pressuring customers.
- Use partner accounts to fabricate reviews.
- Use sponsored campaigns to imply review quality.

---

## 7. Review Lifecycle

### 7.1 Draft

The reviewer writes feedback.

System actions:

- Show privacy warning.
- Detect confidential content.
- Suggest structured categories.
- Capture context automatically where permitted.
- Confirm visibility level.

### 7.2 Verification

System verifies relationship to template.

Checks:

- Installation exists.
- Purchase exists if paid.
- Reviewer belongs to customer org.
- Role is eligible.
- Review not duplicate.
- Review does not violate cooldown.

### 7.3 AI Screening

AI screens for:

- PII
- Secrets
- Confidential data
- Toxicity
- Spam
- Manipulation language
- Unsupported legal allegations
- Medical/legal/financial claims beyond template scope
- Security incident claims requiring escalation

### 7.4 Moderation

Human moderation is required when:

- Abuse score is high.
- Review contains sensitive claims.
- Review alleges security, privacy, fraud, billing, or compliance issue.
- Creator disputes review.
- Review is part of suspicious burst.
- Review affects high-impact certified templates.

### 7.5 Publication

Published review must show:

- Verification status
- Date
- Template version context where relevant
- Plan/context chips where safe
- Whether outcome claims are self-reported or observed
- Whether creator responded

### 7.6 Update

Reviewer may update review when:

- Template version changes.
- Issue resolved.
- Outcome improves or worsens.
- Support experience changes.

Ariyo must preserve review history internally.

### 7.7 Removal or Redaction

Reviews may be redacted or removed for:

- Confidential data
- PII
- Secrets
- Harassment
- Spam
- Fake review
- Paid review fraud
- Review bombing
- Creator self-review
- Policy violation
- Court/legal request where applicable
- Customer org policy request for private details

Removal must be logged.

---

## 8. Review Rating Dimensions

Ariyo must avoid relying only on one overall star rating.

Recommended dimensions:

| Dimension | Description |
|---|---|
| Overall | Customer's broad satisfaction |
| Setup | Ease of installation and configuration |
| Documentation | Quality and completeness of documentation |
| Outcome | Whether intended business result was achieved |
| Reliability | Runtime stability and low failure rate |
| Safety | Confidence in safe outputs/actions |
| Cost Predictability | Whether AI/integration costs matched expectations |
| Support | Creator/partner support quality |
| Enterprise Readiness | Fit for governance, procurement, audit, security |
| Maintenance | Responsiveness to updates, fixes, deprecations |

---

## 9. Review Quality Score

Not all reviews should have equal weight.

Review quality should consider:

- Verified install or purchase
- Usage duration
- Successful runs
- Detail quality
- Outcome evidence
- Role relevance
- Recency
- Version relevance
- Abuse risk
- Duplicate probability
- Helpfulness votes
- Customer segment match
- Whether claims are specific and actionable

Example scoring:

```ts
review_quality_score =
  verification_weight
  + usage_depth_weight
  + outcome_evidence_weight
  + specificity_weight
  + role_relevance_weight
  + recency_weight
  + helpfulness_weight
  - abuse_risk_penalty
  - duplicate_penalty
  - version_staleness_penalty;
```

A low-quality positive review should not outweigh a high-quality negative review from a verified enterprise admin.

---

## 10. Reputation Scores

### 10.1 Template Reputation Score

Template reputation should combine:

- Review quality-weighted rating
- Outcome review score
- Installation success
- Customer retention
- Refund/dispute rate
- Support burden
- Incident history
- Health monitoring signals
- Certification status
- Trust label state
- Review abuse exposure

### 10.2 Creator Reputation Score

Creator reputation should combine:

- Template review quality
- Creator response quality
- Support responsiveness
- Policy violation history
- Dispute resolution behavior
- Refund rate
- Maintenance consistency
- Certification pass rate
- Customer outcome quality
- Abuse/fraud signals

### 10.3 Partner Reputation Score

Partner reputation should combine:

- Service delivery reviews
- SLA adherence
- Implementation quality
- Customer success outcomes
- Dispute history
- Partner certification state
- Escalation behavior
- Revenue quality

---

## 11. Review Abuse Prevention

Ariyo must actively prevent review manipulation.

### 11.1 Fake Review Patterns

Detect:

- New accounts leaving reviews quickly
- Many reviews from same IP/device/network pattern
- Similar text across reviews
- Reviews before meaningful usage
- Creator-associated reviewers
- Partner-associated manipulation
- Suspicious review bursts after ranking drops
- Review swaps between creators
- Paid review language
- Overly generic praise
- Competitor attacks

### 11.2 Review Bombing

Review bombing may occur after:

- Pricing change
- Policy enforcement
- Creator controversy
- Public complaint
- Template suspension
- Refund dispute

Ariyo should detect abnormal review velocity and temporarily reduce ranking impact until reviewed.

### 11.3 Incentivized Reviews

Ariyo may allow neutral review prompts but must prohibit:

- Paying for positive reviews
- Discounts only for positive reviews
- Creator-written review templates
- Employee-only fake praise
- Review gating that asks happy users publicly and unhappy users privately

### 11.4 Retaliation Prevention

Creators and partners must not retaliate against customers for negative reviews.

Signals:

- Support denial after review
- Threatening messages
- Forced removal requests
- Refund blocking
- Public shaming

Retaliation should affect Creator Trust Score and may trigger enforcement.

---

## 12. Customer-Facing Review UX

Review UI must not over-simplify trust.

### 12.1 Review Summary

Show:

- Quality-weighted average rating
- Number of verified reviews
- Recent review trend
- Outcome rating
- Setup difficulty
- Support rating
- Cost predictability
- Plan fit
- Segment filters

### 12.2 Review Filters

Allow filtering by:

- Plan tier
- Company size
- Industry
- Use case
- Reviewer role
- Template version
- Region where safe
- Verified purchase/install
- Outcome reviews
- Enterprise reviews
- Positive/negative
- Recent

### 12.3 Review Explanation Chips

Examples:

- Verified install
- Verified purchase
- Enterprise admin
- Outcome confirmed
- System-observed outcome
- Creator responded
- Version-specific review
- Older version
- Private catalog review
- Support issue resolved

### 12.4 Rating Distribution

Show distribution with guardrails:

- Do not overemphasize raw stars.
- Highlight verified and recent reviews.
- Separate old-version reviews.
- Explain when reviews are limited.

### 12.5 Review Detail Page

Each review may show:

- Customer context summary
- Ratings by dimension
- Review body
- Outcome claims
- Creator response
- Resolution status
- Review date
- Version context
- Helpful/report actions

Never reveal:

- Confidential customer data
- Named employees unless permitted
- Internal business metrics unless explicitly approved
- Personal data
- Secrets
- Private procurement details

---

## 13. Creator Response System

Creators should be able to respond professionally.

Allowed response types:

- Clarification
- Resolution update
- Setup guidance
- Apology and fix commitment
- Version fix announcement
- Documentation link
- Support escalation instructions

Forbidden response patterns:

- Harassment
- Blaming customer publicly
- Sharing confidential customer details
- Offering incentives for review changes
- Threats
- Legal intimidation
- Misleading claims
- Saying policy-removed reviews were false without evidence

Creator responses may be moderated.

---

## 14. Review Disputes

Creators, partners, customers, and Ariyo may dispute reviews when:

- Review is fake.
- Review includes confidential data.
- Review is tied to wrong template/version.
- Review makes false factual claims.
- Review violates policy.
- Review is retaliatory.
- Review is competitor manipulation.

Review disputes should connect to `marketplace-dispute-resolution.md`.

Dispute outcomes:

- Keep review unchanged
- Redact review
- Hide review temporarily
- Remove review
- Add creator response
- Add context note
- Reduce ranking impact
- Trigger policy enforcement
- Trigger customer support case
- Trigger incident review

---

## 15. Ranking and Trust Label Integration

Reviews may influence ranking only after weighting.

Ranking should use:

- Verified review count
- Quality-weighted rating
- Outcome review strength
- Recent review trend
- Enterprise review strength
- Support rating
- Cost predictability rating
- Abuse-adjusted confidence

Ranking must not use:

- Raw average alone
- Unverified reviews alone
- Review count alone
- Sponsored reviews
- Creator-written claims
- Review bursts before abuse checks

### 15.1 Ranking Impact Caps

Ariyo should cap review impact when:

- Review count is low.
- Reviews are old.
- Abuse risk is elevated.
- Reviews are from only one organization.
- Reviews are from older template version.
- Template has unresolved incidents.

### 15.2 Trust Label Impact

Reviews can support trust labels such as:

- Customer Favorite
- Strong Setup Experience
- Enterprise Admin Approved
- High Outcome Confidence
- Creator Responsive
- Cost Predictable

Reviews must not create labels that imply certification unless certification exists.

---

## 16. Basic / Pro / Smart Review Rules

### 16.1 Basic

Basic reviews should emphasize:

- Ease of setup
- Low cost
- Clear outcomes
- Simplicity
- Safe defaults
- Beginner suitability

Basic marketplace should avoid pushing complex templates based on high Smart reviews.

### 16.2 Pro

Pro reviews should emphasize:

- Workflow reliability
- Integration quality
- Team adoption
- Creator support
- Operational impact
- Cost predictability

### 16.3 Smart

Smart reviews should emphasize:

- Advanced automation quality
- Multi-agent behavior
- Enterprise readiness
- Governance compatibility
- Safety and compliance
- Outcome intelligence
- Model/provider performance
- Advanced support

Smart reviews should carry more governance context, but must still protect confidentiality.

---

## 17. Enterprise Review Controls

Enterprise customers need stronger review governance.

Enterprise controls:

- Disable public reviews from employees.
- Require admin approval for public reviews.
- Allow private-only reviews.
- Allow anonymized organization-level reviews.
- Export internal review reports.
- Suppress sensitive context.
- Define reviewer roles.
- Review marketplace assets internally before enterprise rollout.

Public reviews from enterprise customers should never reveal:

- Internal systems
- Security posture details
- Procurement terms
- Customer data types
- Internal metrics
- Sensitive regions
- Regulated workflows

---

## 18. Review Prompting

Ariyo may prompt reviews at appropriate moments.

Good review prompt moments:

- After successful activation
- After first measurable outcome
- After 30 days of use
- After issue resolution
- After renewal
- After uninstall
- After support interaction

Bad prompt moments:

- Before meaningful usage
- Immediately after purchase only
- During incident
- During active dispute
- After negative support interaction without context
- Only when user appears happy

Prompting must be neutral.

Example neutral prompt:

> Share your experience with this template to help other Ariyo customers understand setup, reliability, cost, support, and outcomes.

Forbidden prompt:

> Loved this template? Leave a 5-star review.

---

## 19. Review Analytics

Internal analytics should include:

- Review submission rate
- Verified review rate
- Review quality score distribution
- Review abuse rate
- Average rating by dimension
- Outcome review rate
- Creator response rate
- Creator response SLA
- Negative review resolution rate
- Review-to-ranking correlation
- Review-to-refund correlation
- Review-to-install conversion impact
- Enterprise private review adoption
- Review removal/redaction rate

---

## 20. API Contract

### 20.1 Submit Review

`POST /api/v1/marketplace/reviews`

Request:

```json
{
  "templateId": "tpl_123",
  "installationId": "inst_456",
  "ratingOverall": 4,
  "ratingSetup": 5,
  "ratingOutcome": 4,
  "ratingReliability": 4,
  "ratingSupport": 5,
  "ratingCostPredictability": 3,
  "title": "Strong setup experience and useful automation",
  "body": "The template helped us reduce manual triage after setup.",
  "pros": ["Clear setup", "Useful automation"],
  "cons": ["Cost estimate could be clearer"],
  "visibility": "public",
  "outcomeClaims": [
    {
      "outcomeType": "manual_work_reduced",
      "claimedValue": 20,
      "claimedUnit": "hours/month",
      "customerConfirmed": true
    }
  ]
}
```

Response:

```json
{
  "reviewId": "rev_789",
  "status": "pending_moderation",
  "verificationStatus": "verified_install",
  "aiScreened": true,
  "redactionRequired": false
}
```

### 20.2 List Reviews

`GET /api/v1/marketplace/templates/{templateId}/reviews`

Query params:

- `verifiedOnly`
- `planTier`
- `reviewerRole`
- `version`
- `ratingMin`
- `ratingMax`
- `sort`
- `outcomeOnly`
- `enterpriseOnly`

Response:

```json
{
  "templateId": "tpl_123",
  "summary": {
    "qualityWeightedRating": 4.4,
    "verifiedReviewCount": 128,
    "outcomeReviewCount": 41,
    "recentTrend": "improving",
    "setupRating": 4.6,
    "outcomeRating": 4.2,
    "supportRating": 4.7,
    "costPredictabilityRating": 3.9
  },
  "reviews": []
}
```

### 20.3 Creator Response

`POST /api/v1/marketplace/reviews/{reviewId}/creator-response`

Request:

```json
{
  "body": "Thanks for the feedback. We shipped a cost estimator update in version 1.4.2."
}
```

### 20.4 Report Review

`POST /api/v1/marketplace/reviews/{reviewId}/report`

Request:

```json
{
  "reason": "confidential_data",
  "details": "The review contains internal system names."
}
```

### 20.5 Reputation Summary

`GET /api/v1/marketplace/templates/{templateId}/reputation`

Response:

```json
{
  "templateId": "tpl_123",
  "templateReputationScore": 86,
  "reviewQualityScore": 82,
  "outcomeReviewScore": 79,
  "supportReputationScore": 91,
  "abuseRiskScore": 4,
  "rankingImpact": "positive_capped",
  "trustLabelsSupported": ["creator_responsive", "high_setup_quality"]
}
```

---

## 21. Webhooks

Ariyo should emit:

- `marketplace.review.submitted`
- `marketplace.review.verified`
- `marketplace.review.published`
- `marketplace.review.redacted`
- `marketplace.review.removed`
- `marketplace.review.reported`
- `marketplace.review.disputed`
- `marketplace.review.creator_response_submitted`
- `marketplace.review.creator_response_published`
- `marketplace.review.abuse_suspected`
- `marketplace.reputation.updated`
- `marketplace.review.ranking_impact_changed`
- `marketplace.review.trust_label_signal_changed`

---

## 22. Observability Events

Track:

```json
{
  "event": "marketplace_review_submitted",
  "template_id": "tpl_123",
  "installation_id": "inst_456",
  "organization_id": "org_789",
  "verification_status": "verified_install",
  "rating_overall": 4,
  "review_quality_score": 71,
  "abuse_risk_score": 2,
  "visibility": "public",
  "created_at": "2026-06-19T00:00:00Z"
}
```

Additional events:

- `review_prompt_shown`
- `review_prompt_dismissed`
- `review_started`
- `review_abandoned`
- `review_screened_by_ai`
- `review_flagged_for_human_review`
- `review_redacted`
- `review_removed_for_policy`
- `creator_response_submitted`
- `review_helpful_vote_cast`
- `review_reported_by_customer`
- `review_dispute_opened`
- `reputation_score_recalculated`

---

## 23. Frontend Requirements

Frontend must provide:

- Review summary panel
- Quality-weighted rating display
- Verified review badges
- Outcome review section
- Review filters
- Review sorting
- Creator response UI
- Report review button
- Review submission flow
- Privacy warning
- Confidential data warning
- Enterprise private/public visibility control
- Review prompt moments
- Review explanation chips
- Rating breakdown
- Review trend chart
- Review confidence indicator

Frontend must avoid:

- Hiding negative reviews by default
- Overemphasizing sponsored reviews
- Presenting raw stars as final truth
- Showing unsupported trust claims
- Revealing sensitive customer context

---

## 24. Backend Requirements

Backend must provide:

- Review verification service
- Review moderation service
- AI screening service
- Abuse detection service
- Reputation scoring service
- Review quality scoring service
- Review indexing service
- Creator response service
- Review dispute integration
- Audit logging
- Redaction pipeline
- Enterprise visibility policy engine
- Ranking signal publisher
- Trust label signal publisher
- Webhook publisher
- Review analytics warehouse

---

## 25. Data Privacy and Security

Reviews must never expose:

- API keys
- Customer secrets
- Internal system names when sensitive
- Employee personal data
- Customer records
- Regulated data
- Security vulnerabilities before coordinated handling
- Contract terms
- Procurement terms
- Non-public incident details
- Private region/data residency details

AI screening should detect sensitive text before publication.

Review data must be:

- Permission-scoped
- Retention-aware
- Exportable where required
- Deletable or anonymizable according to policy
- Audit-logged
- Protected against creator over-access

---

## 26. AI Review Assistant

Ariyo may provide an AI assistant for:

- Review privacy screening
- Review summarization
- Review theme extraction
- Creator response drafting
- Abuse pattern detection
- Customer-safe redaction suggestions
- Outcome claim classification
- Review quality scoring assistance
- Support issue routing

AI assistant must not:

- Invent review content
- Rewrite reviews to be more positive
- Suppress negative reviews for commercial reasons
- Generate fake customer reviews
- Publish creator responses without approval
- Decide final high-risk moderation actions alone
- Reveal private review data to creators

---

## 27. KPI Framework

### Review Trust KPIs

- Verified Review Rate
- Review Abuse Detection Rate
- Fake Review Confirmed Rate
- Review Removal Accuracy
- Review Redaction Accuracy
- Review Dispute Resolution Time

### Marketplace Decision KPIs

- Review-to-Install Influence
- Review Filter Usage
- Review Helpfulness Rate
- Review Confidence Score
- Outcome Review Conversion Impact

### Creator KPIs

- Creator Response Rate
- Creator Response SLA
- Negative Review Recovery Rate
- Review-Driven Template Improvement Rate
- Creator Reputation Trend

### Customer Outcome KPIs

- Outcome Review Rate
- Customer-Confirmed Outcome Rate
- Review-to-Retention Correlation
- Review-to-Refund Correlation
- Review-to-Support Burden Correlation

### Abuse KPIs

- Review Bombing Events
- Paid Review Attempts
- Review Ring Detection
- Creator Retaliation Cases
- Review Manipulation Attempts

---

## 28. Admin Console

Admin console must show:

- Review queue
- High-risk reviews
- Review abuse clusters
- Creator reputation changes
- Template reputation changes
- Review dispute cases
- Moderation history
- Redaction history
- Review impact on ranking
- Review impact on trust labels
- Enterprise private review settings
- Review health by category

Admin actions:

- Publish
- Hide
- Redact
- Remove
- Escalate
- Open dispute
- Freeze ranking impact
- Penalize manipulation
- Restore review
- Add context note

---

## 29. Review Impact on Lifecycle Optimization

Reviews should trigger lifecycle actions.

Examples:

- Repeated setup complaints → documentation improvement recommendation
- Cost complaints → cost estimator update request
- Safety concerns → safety review escalation
- Reliability complaints → health monitoring investigation
- Low support rating → creator success intervention
- Negative enterprise reviews → enterprise readiness review
- High outcome reviews → ranking boost candidate
- Old-version negative reviews → version context label

---

## 30. Forbidden Patterns

Ariyo must not:

- Allow unverified public reviews to dominate reputation.
- Let creators review their own templates.
- Allow paid positive reviews.
- Hide negative reviews for revenue reasons.
- Use raw star rating as the only ranking signal.
- Let review count alone drive ranking.
- Publish reviews containing secrets or confidential data.
- Let creators retaliate against negative reviewers.
- Allow review gating that selectively asks happy users.
- Treat sponsored placement as review quality.
- Create trust labels from unsupported reviews.
- Let AI generate fake reviews.
- Allow review manipulation to improve certification.
- Let old-version reviews misrepresent current versions without context.
- Ignore review bombing.
- Suppress enterprise private review controls.

---

## 31. Golden Rule

Ariyo reviews must increase trust, not noise.

A Marketplace review is valuable only when it is verified, contextual, safe, fair, useful, abuse-resistant, and connected to real customer outcomes.

Ariyo must protect customers from bad templates, protect creators from unfair manipulation, and protect the marketplace from reputation systems that reward popularity over truth.
