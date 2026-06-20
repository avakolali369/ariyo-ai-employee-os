# Ariyo Marketplace Customer Support Operations Skill

## Core Contract

Ariyo Marketplace Customer Support Operations is not a shared support inbox.

It is the governed support operating system that routes, diagnoses, prioritizes, escalates, resolves, measures, and learns from customer, creator, partner, vendor, and internal issues related to Marketplace assets, AI Employee templates, Agent Team templates, Workflow templates, Knowledge packs, GEO templates, Integration bundles, private catalog assets, billing events, permissions, integrations, trust labels, disputes, and enterprise governance.

Ariyo must make Marketplace support fast for customers.

Ariyo must make Marketplace support accountable for creators and partners.

Ariyo must make Marketplace support measurable for Ariyo operators.

Ariyo must never allow support work to bypass security, privacy, consent, access boundaries, billing rules, dispute governance, incident response, or enterprise policy.

---

## 1. Purpose

This skill defines how Ariyo designs and operates customer support for the Marketplace layer of the AI Employee Operating System.

Marketplace support must handle issues where the root cause may involve:

- Ariyo platform behavior
- Marketplace asset configuration
- Creator template defects
- Partner implementation work
- Integration failures
- AI model behavior
- Knowledge source freshness
- Entitlement or billing mismatch
- Procurement and approval blockers
- Private catalog restrictions
- Region or compliance restrictions
- Trust label misunderstanding
- Refund or dispute escalation
- Customer misuse or misconfiguration
- Incident or safety risk

Support must not be treated as isolated ticket handling. Every support signal must feed back into template health monitoring, auto-remediation, dispute resolution, creator success, ranking quality, trust labels, certification, customer health scoring, and product roadmap decisions.

---

## 2. Related Ariyo Skills

This skill must work with:

- `marketplace-installation-entitlements.md`
- `marketplace-billing-payouts.md`
- `marketplace-dispute-resolution.md`
- `marketplace-trust-safety-operations.md`
- `marketplace-policy-enforcement-rules.md`
- `marketplace-creator-success-system.md`
- `marketplace-partner-operations.md`
- `marketplace-template-health-monitoring.md`
- `marketplace-template-auto-remediation.md`
- `marketplace-template-outcome-intelligence.md`
- `marketplace-customer-review-reputation-system.md`
- `marketplace-template-trust-labeling-system.md`
- `enterprise-account-governance.md`
- `enterprise-workspace-policy-engine.md`
- `enterprise-approval-workflows.md`
- `enterprise-customer-health-scoring.md`
- `customer-success-playbooks.md`
- `knowledge-base-support-system.md`
- `ai-agent-incident-response.md`
- `observability-analytics-events.md`

---

## 3. Support Principles

Marketplace support must follow these principles:

1. Route by ownership, not convenience.
2. Resolve customer impact first, then assign commercial accountability.
3. Separate bug, configuration, governance, billing, safety, and dispute issues.
4. Never expose customer data to creators or partners without authorization.
5. Never let creators self-resolve trust, safety, privacy, or payout-impacting cases without Ariyo oversight.
6. Preserve evidence before remediation when a dispute, incident, enforcement, refund, or compliance matter is possible.
7. Convert repeated support problems into product, template, documentation, ranking, trust-label, or creator-coaching actions.
8. Give enterprise admins visibility into relevant support activity without exposing private end-user data unnecessarily.

---

## 4. Support Actors

Ariyo must support these actors:

### Customer Actors

- End user
- Workspace admin
- Organization admin
- Procurement admin
- Billing admin
- Security admin
- Compliance admin
- AI Employee manager
- Internal template owner
- Executive sponsor

### Marketplace Actors

- Creator
- Certified creator
- Partner
- Implementation partner
- Vendor
- Subprocessor owner
- Marketplace operator
- Trust and safety reviewer
- Billing operations analyst
- Customer success manager
- Support agent
- Incident commander

---

## 5. Support Case Types

Ariyo Marketplace support must classify cases into distinct case types.

### 5.1 Installation Cases

Examples:

- Asset cannot install
- Plan does not match asset requirements
- Missing entitlement
- Approval required
- Region blocked
- Dependency missing
- Private catalog restriction
- Permission preview mismatch

### 5.2 Runtime Cases

Examples:

- Template run fails
- Workflow does not complete
- Integration token expired
- AI model error
- Knowledge source unavailable
- Tool execution fails
- Output quality degraded
- Automation paused unexpectedly

### 5.3 Billing Cases

Examples:

- Unexpected charge
- License count mismatch
- Refund request
- Trial conversion confusion
- Creator payout dispute
- Invoice mismatch
- Tax or procurement issue

### 5.4 Trust and Safety Cases

Examples:

- Unsafe output
- Suspicious template behavior
- Malicious creator report
- Fake review report
- Data access concern
- Policy violation
- Ranking manipulation suspicion

### 5.5 Governance Cases

Examples:

- Approval workflow blocked
- Policy prevents install
- Private catalog visibility issue
- Role mapping issue
- SSO/SCIM access mismatch
- Audit evidence request

### 5.6 Creator and Partner Cases

Examples:

- Creator needs review clarification
- Partner delivery issue
- Template rejected
- Certification revoked
- Payout held
- Support SLA breach
- Customer escalation about creator solution

### 5.7 Outcome Cases

Examples:

- Template did not deliver claimed outcome
- Customer success milestone not reached
- Outcome evidence disputed
- ROI claim unclear
- Review/reputation issue

---

## 6. Case Severity Model

Ariyo must use severity to prioritize response and escalation.

### SEV-0: Critical Marketplace Incident

Customer data, security, compliance, platform-wide Marketplace availability, widespread unsafe automation, or payment integrity is at immediate risk.

Required behavior:

- Trigger incident response
- Preserve evidence
- Pause affected asset if needed
- Notify internal owners
- Restrict creator/partner access when appropriate
- Start customer communication plan

### SEV-1: High Customer or Revenue Impact

A critical customer cannot install, run, purchase, renew, approve, or govern a Marketplace asset, or a high-risk trust/billing issue exists.

### SEV-2: Material Operational Issue

A template, workflow, integration, billing action, approval, or support process is degraded for one or more customers.

### SEV-3: Standard Support Issue

A single customer has a non-critical issue that can be resolved through guidance, configuration, remediation, or creator response.

### SEV-4: Question or Enablement

How-to, clarification, training, usage advice, or documentation request.

---

## 7. Routing Rules

Support routing must use structured signals.

### 7.1 Routing Inputs

- Customer plan
- Customer segment
- Asset ID
- Asset type
- Creator ID
- Partner ID
- Vendor ID
- Workspace ID
- Installed version
- Dependency profile
- Recent health events
- Recent incidents
- Billing status
- Entitlement state
- Private catalog state
- Policy decision result
- Region compatibility
- Trust label state
- Certification state
- Support SLA
- Case severity

### 7.2 Routing Destinations

- Ariyo frontline support
- Ariyo technical support
- Ariyo billing operations
- Ariyo trust and safety
- Ariyo marketplace operations
- Ariyo customer success
- Creator support queue
- Partner delivery queue
- Vendor escalation queue
- Security incident response
- Human review board
- Dispute resolution team

### 7.3 Routing Rule

If an issue affects safety, privacy, security, billing, compliance, enforcement, customer data, or enterprise governance, Ariyo must own the case even when a creator or partner caused the issue.

---

## 8. Ownership Model

A support case must have clear ownership.

```ts
export type MarketplaceSupportOwner =
  | 'ariyo_support'
  | 'ariyo_billing_ops'
  | 'ariyo_marketplace_ops'
  | 'ariyo_trust_safety'
  | 'ariyo_customer_success'
  | 'creator'
  | 'partner'
  | 'vendor'
  | 'security_incident_response'
  | 'dispute_resolution'
  | 'human_review_board';
```

Ariyo may involve creators, partners, or vendors, but customer-facing accountability must remain clear.

---

## 9. Support Case Object

```ts
export interface MarketplaceSupportCase {
  id: string;
  organizationId: string;
  workspaceId?: string;
  requesterUserId: string;
  requesterRole: string;
  customerPlan: 'Basic' | 'Pro' | 'Smart' | 'Enterprise';
  caseType:
    | 'installation'
    | 'runtime'
    | 'billing'
    | 'trust_safety'
    | 'governance'
    | 'creator_partner'
    | 'outcome'
    | 'question';
  severity: 'SEV0' | 'SEV1' | 'SEV2' | 'SEV3' | 'SEV4';
  status:
    | 'new'
    | 'triaging'
    | 'waiting_on_customer'
    | 'waiting_on_creator'
    | 'waiting_on_partner'
    | 'waiting_on_vendor'
    | 'investigating'
    | 'remediation_in_progress'
    | 'escalated'
    | 'resolved'
    | 'closed'
    | 'converted_to_incident'
    | 'converted_to_dispute';
  assetId?: string;
  assetVersionId?: string;
  creatorId?: string;
  partnerId?: string;
  vendorId?: string;
  entitlementId?: string;
  billingTransactionId?: string;
  installationId?: string;
  policyDecisionId?: string;
  incidentId?: string;
  disputeId?: string;
  assignedOwner: MarketplaceSupportOwner;
  slaPolicyId: string;
  customerImpactSummary: string;
  evidenceRefs: string[];
  remediationActions: SupportRemediationAction[];
  customerVisibleUpdates: SupportCaseUpdate[];
  internalNotes: SupportCaseInternalNote[];
  createdAt: string;
  updatedAt: string;
}
```

---

## 10. Support Lifecycle

Every Marketplace support case must move through a governed lifecycle:

1. Intake
2. Identity and permission check
3. Classification
4. Severity assignment
5. Evidence capture
6. Routing
7. Triage
8. Investigation
9. Remediation or escalation
10. Customer communication
11. Resolution confirmation
12. Root cause classification
13. Feedback loop
14. Closure

---

## 11. Intake Channels

Ariyo must support:

- In-product support form
- Marketplace asset support button
- Install failure support prompt
- Billing support flow
- Enterprise admin support console
- Creator support portal
- Partner portal
- Email-to-case
- API-created cases
- Customer success escalation
- Trust and safety report
- Automated health monitoring case creation

---

## 12. Evidence Requirements

A support case may need evidence from:

- Installation logs
- Entitlement decisions
- Billing ledger
- Workflow run traces
- AI model run metadata
- Integration error logs
- Dependency registry
- Health monitoring events
- Auto-remediation attempts
- Policy decision logs
- Approval records
- Audit logs
- Trust label history
- Certification history
- Creator/partner responses
- Customer screenshots or notes
- Incident records
- Dispute records

Sensitive evidence must be redacted before sharing with creators, partners, vendors, or non-authorized customer users.

---

## 13. SLA Model

Support SLAs must vary by:

- Plan
- Enterprise contract
- Case severity
- Asset certification level
- Partner service tier
- Creator support commitment
- Region and business hours
- Security/compliance impact

### Example SLA Targets

| Severity | First Response | Update Frequency | Escalation |
|---|---:|---:|---|
| SEV-0 | Immediate | Continuous | Incident response |
| SEV-1 | 1 hour | Every 4 hours | Senior support / CSM |
| SEV-2 | 4 hours | Daily | Technical support |
| SEV-3 | 1 business day | As needed | Standard support |
| SEV-4 | 2 business days | As needed | Documentation/help |

Actual SLAs must be contract-configurable.

---

## 14. Plan-Aware Support Rules

### Basic

Basic support must prioritize:

- Self-service guidance
- Simple install troubleshooting
- Low-risk template issues
- Billing clarity
- Guided upgrade suggestions when advanced support is required

Basic must not expose advanced enterprise governance workflows.

### Pro

Pro support must include:

- Team workflow troubleshooting
- Marketplace install and permission support
- Creator escalation for installed assets
- Billing and entitlement support
- Integration guidance
- Standard SLA commitments

### Smart

Smart support must include:

- Advanced AI Employee runtime triage
- Multi-agent and automation issue diagnosis
- Marketplace template health review
- Cost anomaly investigation
- Model routing and knowledge freshness support
- Faster escalation paths
- Enterprise-style support insights where applicable

### Enterprise

Enterprise support must include:

- Named CSM or support path
- Admin support console
- Governance-aware case routing
- Procurement and security evidence support
- SLA-backed escalation
- Executive reporting
- Quarterly support review integration

---

## 15. Creator Support Responsibilities

Creators may be required to:

- Respond to asset-specific questions
- Fix template documentation issues
- Provide configuration guidance
- Investigate template logic defects
- Submit corrected versions
- Respond to quality claims
- Maintain support SLAs for certified or paid assets

Creators must not:

- Access customer data without authorization
- Ask customers to bypass Ariyo controls
- Resolve billing, refund, safety, or compliance cases outside Ariyo
- Retaliate against reviewers
- Hide known defects
- Offer unofficial patches that bypass Marketplace version governance

---

## 16. Partner Support Responsibilities

Partners may be responsible for:

- Implementation-specific support
- Configuration work performed under SOW
- Customer training follow-up
- Private catalog deployment guidance
- Integration setup support
- Migration or rollout support

Partner issues must link to partner quality scoring and partner operations governance.

---

## 17. Refund and Dispute Linkage

Support must distinguish between:

- Simple troubleshooting
- Refund request
- Quality claim
- Billing dispute
- Chargeback risk
- Creator payout hold case
- Partner delivery dispute
- Trust and safety enforcement case

A support case must convert to dispute resolution when:

- Customer requests money back and facts are contested
- Creator disputes responsibility
- Partner delivery quality is contested
- Customer alleges misleading claims
- Security/privacy issue creates commercial claim
- Payout eligibility is affected

---

## 18. Incident Linkage

A support case must convert to incident response when:

- Multiple customers are affected
- Customer data is at risk
- Unsafe automation is active
- Marketplace asset is causing repeated failure
- Integration or vendor outage affects operations
- Billing integrity is compromised
- Trust label or certification misrepresentation is discovered
- Policy evasion is suspected

---

## 19. Auto-Remediation Linkage

Support must integrate with auto-remediation.

Allowed support-triggered remediation:

- Safe retry
- Integration reconnect request
- Knowledge refresh
- Template safe-mode activation
- Feature flag rollback
- Version rollback proposal
- Model rerouting proposal
- Permission revalidation

Support-triggered remediation must be:

- Permission-scoped
- Auditable
- Reversible where possible
- Customer-visible when customer impact exists
- Approval-gated when policy requires it

---

## 20. Knowledge Base Integration

Support must continuously improve Ariyo's knowledge base.

Support cases should create or update:

- Help center articles
- Install troubleshooting guides
- Marketplace asset FAQs
- Creator documentation requirements
- Partner playbooks
- Internal runbooks
- Customer admin guides
- Enterprise procurement/security help
- Error-code documentation

Ariyo must detect repeated questions and recommend documentation improvements.

---

## 21. Customer Support UX Requirements

Customer-facing support UX must include:

- Asset-level support entry point
- Clear issue category selection
- Automatic asset and version detection
- Permission-safe log attachment
- Impact summary prompt
- Expected response time
- Case status timeline
- Customer-visible updates
- Escalation request path
- Resolution confirmation
- Related help articles
- Refund/dispute path when relevant

---

## 22. Creator Support UX Requirements

Creator-facing UX must include:

- Assigned asset support cases
- Customer-safe context only
- Required response deadline
- Case severity
- Missing documentation alerts
- Defect cluster insights
- Support quality score
- Escalation warnings
- Repeat issue analytics
- Version fix submission flow

---

## 23. Internal Support Console Requirements

Internal Ariyo support console must include:

- Unified case queue
- Severity and SLA timers
- Asset context
- Customer plan and enterprise status
- Health monitoring context
- Entitlement context
- Billing context
- Policy decision context
- Creator/partner/vendor context
- Evidence viewer
- Redaction tools
- Remediation controls
- Escalation controls
- Dispute/incident conversion
- Root cause tagging
- Feedback-loop recommendations

---

## 24. Root Cause Taxonomy

Every resolved case must have a root cause classification.

```ts
export type MarketplaceSupportRootCause =
  | 'customer_configuration'
  | 'missing_permission'
  | 'entitlement_mismatch'
  | 'billing_mismatch'
  | 'creator_template_defect'
  | 'creator_documentation_gap'
  | 'partner_delivery_issue'
  | 'vendor_outage'
  | 'integration_failure'
  | 'model_provider_issue'
  | 'knowledge_source_issue'
  | 'policy_block'
  | 'region_block'
  | 'ariyo_platform_bug'
  | 'ariyo_documentation_gap'
  | 'trust_safety_issue'
  | 'customer_misunderstanding'
  | 'unknown';
```

---

## 25. Support Quality Scoring

Ariyo must score support quality using:

- First response time
- Time to resolution
- SLA breach rate
- Reopen rate
- Customer satisfaction
- Resolution confidence
- Escalation accuracy
- Root cause accuracy
- Evidence completeness
- Communication clarity
- Creator response quality
- Partner response quality
- Documentation improvement rate

---

## 26. Ranking and Trust Label Feedback

Support signals must influence Marketplace quality systems.

Support issues may affect:

- Template Health Score
- Template Quality Score
- Creator Trust Score
- Partner Quality Score
- Certification status
- Trust labels
- Ranking score
- Promotion eligibility
- Private catalog eligibility
- Enterprise procurement confidence

Support volume alone must not automatically punish a popular asset. Support signals must be normalized by install count, severity, root cause, customer segment, and resolution quality.

---

## 27. API Contract

### Create Support Case

`POST /api/v1/marketplace/support/cases`

```json
{
  "assetId": "asset_123",
  "installationId": "install_456",
  "caseType": "runtime",
  "impactSummary": "The workflow fails when syncing CRM contacts.",
  "severityHint": "SEV2",
  "attachments": ["evidence_ref_1"]
}
```

### Get Support Case

`GET /api/v1/marketplace/support/cases/{caseId}`

### Add Case Update

`POST /api/v1/marketplace/support/cases/{caseId}/updates`

### Escalate Case

`POST /api/v1/marketplace/support/cases/{caseId}/escalate`

### Convert to Dispute

`POST /api/v1/marketplace/support/cases/{caseId}/convert-to-dispute`

### Convert to Incident

`POST /api/v1/marketplace/support/cases/{caseId}/convert-to-incident`

### Trigger Support Remediation

`POST /api/v1/marketplace/support/cases/{caseId}/remediation-actions`

---

## 28. Webhooks

Ariyo should emit:

- `marketplace.support_case.created`
- `marketplace.support_case.routed`
- `marketplace.support_case.escalated`
- `marketplace.support_case.sla_breached`
- `marketplace.support_case.waiting_on_creator`
- `marketplace.support_case.waiting_on_partner`
- `marketplace.support_case.converted_to_dispute`
- `marketplace.support_case.converted_to_incident`
- `marketplace.support_case.resolved`
- `marketplace.support_case.reopened`
- `marketplace.support_case.root_cause_recorded`
- `marketplace.support_case.feedback_loop_created`

---

## 29. Observability Events

```ts
export type MarketplaceSupportEvent =
  | 'support_case_created'
  | 'support_case_classified'
  | 'support_case_routed'
  | 'support_case_sla_timer_started'
  | 'support_case_evidence_attached'
  | 'support_case_creator_notified'
  | 'support_case_partner_notified'
  | 'support_case_escalated'
  | 'support_case_remediation_started'
  | 'support_case_dispute_created'
  | 'support_case_incident_created'
  | 'support_case_resolved'
  | 'support_case_reopened'
  | 'support_case_root_cause_tagged'
  | 'support_case_kb_article_suggested';
```

---

## 30. Advanced KPIs

Ariyo must monitor:

- Marketplace Support Volume by Asset
- Support Volume per 100 Installs
- Support Severity Mix
- First Response Time
- Time to Resolution
- SLA Breach Rate
- Reopen Rate
- Creator Response SLA
- Partner Response SLA
- Support-to-Dispute Conversion Rate
- Support-to-Incident Conversion Rate
- Refund Request Rate from Support
- Support Root Cause Distribution
- Documentation Gap Rate
- Auto-Remediation Success Rate
- Customer Satisfaction after Resolution
- Enterprise Support Escalation Rate
- Support Impact on Template Health Score

---

## 31. AI Support Operations Assistant

Ariyo may use an AI assistant to help support teams.

Allowed AI assistant tasks:

- Summarize case context
- Suggest classification
- Suggest severity
- Detect similar cases
- Suggest knowledge base articles
- Draft customer updates
- Recommend escalation
- Identify missing evidence
- Suggest root cause candidates
- Recommend safe remediation options

AI assistant must not:

- Close cases without human or policy-approved automation
- Issue refunds without billing authorization
- Share sensitive logs with creators
- Make legal conclusions
- Override trust and safety decisions
- Hide uncertainty
- Promise outcomes not confirmed by Ariyo

---

## 32. Security and Privacy Requirements

Support operations must enforce:

- Role-based case access
- Customer data redaction
- Creator/partner data minimization
- Audit logs for evidence access
- Secure attachment handling
- Tenant isolation
- Enterprise admin visibility controls
- Retention policies
- Incident evidence preservation
- DPA and compliance alignment where applicable

---

## 33. Forbidden Patterns

Ariyo must not:

- Treat creator issues as purely customer responsibility
- Share raw customer logs with creators without authorization
- Let creators resolve refund or safety cases privately
- Hide repeated template defects from ranking and certification systems
- Bypass dispute process for contested refunds
- Bypass incident response for safety/security issues
- Use generic support macros for high-risk AI automation issues
- Ignore enterprise policy context during support
- Let support agents manually override entitlements without audit
- Let support become an untracked product feedback sink
- Let paid or certified creators receive unfair support handling

---

## 34. Golden Rule

Marketplace support must protect the customer first, preserve evidence second, resolve ownership third, and improve the system always.

If support does not improve product quality, creator quality, customer trust, and operational intelligence, Ariyo is only reacting to problems instead of building a trusted Marketplace.
