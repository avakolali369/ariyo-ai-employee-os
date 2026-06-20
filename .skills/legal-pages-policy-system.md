# Ariyo Legal Pages & Policy System Skill

## 1. Purpose

This skill defines how Ariyo must design, maintain, publish, version, review, and operationalize its public legal pages and customer-facing policy documents.

Ariyo is an AI Employee Operating System. Its legal pages are not generic website footer links. They are public-facing trust, compliance, risk, consent, and customer expectation surfaces that must match the real product, architecture, operations, privacy posture, AI behavior, billing logic, marketplace model, integrations, and support processes.

This skill exists so Ariyo's product, frontend, backend, legal, growth, support, sales, enterprise, AI, and customer success work never create legal promises or policy claims that the product cannot support.

## 2. Core Contract

Ariyo legal pages are not decorative paperwork.

Ariyo legal pages are customer-facing operating contracts that explain what Ariyo does, what customers may do, what Ariyo may process, how AI employees may use data, how subscriptions and billing work, how marketplace assets are governed, how incidents and disputes are handled, and what limits apply.

Ariyo must not publish legal promises that the product, infrastructure, data model, security controls, AI governance, billing system, support process, or operational evidence cannot honor.

This skill is not legal advice. It is a product and engineering operating contract for legal-page readiness. All public legal text must be reviewed and approved by qualified counsel before production publication.

## 3. Required Dependencies

This skill must be interpreted together with:

- `product-strategy.md`
- `business-context.md`
- `domain-model.md`
- `api-contracts.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`
- `trust-center-public-status.md`
- `admin-permissions.md`
- `monetization-billing.md`
- `ai-cost-control.md`
- `model-provider-strategy.md`
- `integration-ecosystem.md`
- `human-review-governance.md`
- `ai-employee-marketplace.md`
- `ecosystem-marketplace-economy.md`
- `customer-lifecycle-automation.md`
- `knowledge-base-support-system.md`
- `frontend-copywriting.md`
- `frontend-design.md`

If this skill conflicts with approved counsel guidance, counsel guidance wins and this skill must be updated.

## 4. Non-Negotiable Principles

1. Legal pages must reflect actual product behavior.
2. Legal pages must be versioned.
3. Legal pages must have an effective date.
4. Legal pages must have an owner.
5. Legal pages must have a review status.
6. Legal pages must distinguish customer promises from informational descriptions.
7. Legal pages must avoid guarantees unless Ariyo can prove and operationally support them.
8. Legal pages must not overpromise AI accuracy, security, uptime, compliance, or financial outcome.
9. Legal pages must support Basic, Pro, Smart, Enterprise, Marketplace, Partner, and API motions where applicable.
10. Legal pages must be readable, accessible, mobile-friendly, searchable, linkable, printable, and exportable.
11. Legal pages must be connected to consent capture and policy acceptance logs.
12. Legal pages must support future geographic localization.
13. Legal pages must be reviewed before launches, pricing changes, AI model/provider changes, data-retention changes, marketplace changes, billing changes, support changes, and enterprise trust changes.

## 5. Legal Page Inventory

Ariyo must maintain a structured legal and policy page system.

### 5.1 Public Legal Pages

Required public pages:

- Terms of Service
- Privacy Policy
- Cookie Policy
- Acceptable Use Policy
- AI Use Policy
- Refund & Cancellation Policy
- Subscription & Billing Policy
- Marketplace Terms
- Partner Terms
- Developer/API Terms
- Subprocessor List
- Security Policy
- Responsible Disclosure Policy
- Service Level Terms, if publicly offered
- Data Processing Addendum landing page
- Regional Privacy Notice placeholders, where needed

### 5.2 Gated or Contractual Documents

Some documents may be public summaries with gated downloadable legal versions:

- Data Processing Addendum
- Enterprise Agreement
- Security Addendum
- SLA Addendum
- Partner Agreement
- Marketplace Creator Agreement
- API Enterprise Agreement
- Business Associate or sector-specific agreements, only if Ariyo explicitly supports such sectors
- Custom procurement forms
- AI Governance Addendum

### 5.3 Internal Policy Documents

Internal-only policy documents:

- Legal review checklist
- Policy change procedure
- Consent logging procedure
- Customer notification procedure
- Incident notification procedure
- Data deletion workflow
- Refund approval workflow
- Terms exception workflow
- Enterprise redline workflow
- Marketplace dispute workflow
- AI output dispute workflow
- Partner compliance review workflow

## 6. Policy Ownership Model

Every legal page must have metadata.

Required metadata:

```json
{
  "policy_id": "privacy_policy",
  "slug": "privacy-policy",
  "title": "Privacy Policy",
  "version": "1.0.0",
  "effective_date": "YYYY-MM-DD",
  "last_reviewed_at": "YYYY-MM-DD",
  "owner_team": "legal",
  "product_owner": "trust",
  "engineering_owner": "platform",
  "review_status": "approved",
  "counsel_review_required": true,
  "public": true,
  "requires_acceptance": false,
  "locale": "en-US",
  "jurisdiction_scope": ["global"],
  "related_documents": ["terms_of_service", "dpa", "cookie_policy"]
}
```

Allowed `review_status` values:

```text
draft
product_review
security_review
privacy_review
legal_review
approved
published
superseded
archived
emergency_patch
```

No legal page may be published while in `draft`, `product_review`, `security_review`, `privacy_review`, or `legal_review` status.

## 7. Versioning Rules

Ariyo must version legal pages like product contracts, not blog posts.

### 7.1 Version Format

Use semantic policy versioning:

```text
MAJOR.MINOR.PATCH
```

Examples:

```text
1.0.0
1.1.0
1.1.1
2.0.0
```

### 7.2 Version Meaning

`MAJOR` changes:

- New customer obligations
- New data usage rights
- New AI data usage policy
- New arbitration/dispute provisions
- New marketplace monetization terms
- New limitation of liability language
- New enterprise data processing terms
- New region-specific rights
- Major billing/refund changes

`MINOR` changes:

- New features reflected in existing policy framework
- Clarified subprocessors
- New AI provider category
- New integration category
- Additional privacy explanation
- Updated support or retention details

`PATCH` changes:

- Typo fixes
- Formatting
- Link updates
- Clarifications that do not materially change obligations

### 7.3 Historical Access

Ariyo must preserve historical policy versions.

Required capabilities:

- View current version
- View previous versions
- Compare versions internally
- Export historical version as PDF or HTML
- Record which version a customer accepted
- Record effective date for each version

## 8. Consent and Acceptance System

Ariyo must capture legally meaningful acceptance events when required.

### 8.1 Acceptance Required For

Acceptance should be required for:

- Terms of Service
- Marketplace Terms for buyers and sellers
- Partner Terms
- Developer/API Terms
- AI Use Policy, when product behavior materially depends on it
- DPA, when executed digitally
- Enterprise Agreement, if signed through Ariyo
- Material updates requiring reacceptance

Acceptance may not be required for general informational pages unless counsel specifies it.

### 8.2 Acceptance Event Model

```json
{
  "event_type": "policy.accepted",
  "organization_id": "org_123",
  "user_id": "user_456",
  "policy_id": "terms_of_service",
  "policy_version": "2.0.0",
  "accepted_at": "2026-06-18T10:15:00Z",
  "ip_address_hash": "hash_value",
  "user_agent_hash": "hash_value",
  "acceptance_surface": "signup",
  "locale": "en-US",
  "required": true
}
```

Do not store raw IP addresses longer than necessary unless legally required and approved by privacy review.

### 8.3 Acceptance Surfaces

Allowed surfaces:

```text
signup
checkout
workspace_creation
plan_upgrade
marketplace_checkout
partner_signup
api_key_creation
enterprise_contract
policy_update_modal
admin_console
```

### 8.4 Reacceptance Triggers

Reacceptance may be required when:

- Terms materially change
- AI Use Policy materially changes
- Marketplace monetization changes
- Subscription/billing policy materially changes
- New data usage terms apply
- Customer moves to a materially different plan or product tier
- API access creates new obligations
- Partner status changes

## 9. Terms of Service Requirements

The Terms of Service must define Ariyo's commercial and product relationship with customers.

### 9.1 Required Topics

Terms must address:

- Who may use Ariyo
- Account registration
- Organization/workspace ownership
- Admin authority
- User roles
- Customer responsibilities
- AI employee behavior and limits
- Human review responsibilities
- Subscription and payment terms
- Plan restrictions
- Basic, Pro, Smart differences at a policy level
- Marketplace usage
- API usage
- Integrations and third-party services
- Customer content ownership
- Ariyo IP ownership
- Feedback rights
- Acceptable use
- Suspension and termination
- Disclaimers
- Liability limits
- Indemnity, if applicable
- Dispute resolution
- Governing law placeholder
- Changes to terms
- Contact information

### 9.2 Product Truth Rules

Terms must not say:

```text
Ariyo guarantees AI output accuracy.
Ariyo replaces human professional judgment.
Ariyo prevents all security incidents.
Ariyo guarantees revenue growth.
Ariyo provides legal, medical, financial, or tax advice unless explicitly built and licensed for it.
All AI employee actions are risk-free.
Data deletion is instant across all backups unless architecture supports it.
```

Terms may say, subject to counsel review:

```text
Ariyo provides tools to help businesses configure, supervise, and measure AI employees.
Customers are responsible for reviewing outputs where appropriate.
Certain AI employee actions may require human approval.
Plan features, limits, and entitlements may vary by subscription tier.
Third-party integrations may be subject to provider terms and availability.
```

## 10. Privacy Policy Requirements

Privacy Policy must clearly explain how Ariyo handles personal data.

### 10.1 Required Topics

Privacy Policy must address:

- Data categories collected
- Account data
- Organization data
- Customer content
- End-user interaction data
- AI employee interaction data
- Usage and analytics data
- Billing data
- Support data
- Marketplace data
- Partner data
- Device/log data
- Cookies and tracking
- Legal or operational purposes for processing
- Data sharing categories
- AI model provider processing
- Subprocessors
- Retention
- Deletion
- Export
- Security measures summary
- International transfers, if applicable
- User rights, depending on region
- Contact and privacy request process
- Policy changes

### 10.2 AI Data Usage Transparency

Privacy Policy must answer:

- Does Ariyo use customer content to provide the service?
- Does Ariyo send content to AI model providers?
- Does Ariyo use customer content to train foundation models?
- Does Ariyo use content for internal evaluation?
- Can customers opt out of certain analytics or evaluation uses?
- How is sensitive data handled?
- How are embeddings/vector data handled?
- What happens when content is deleted?

Default Ariyo policy posture unless changed by counsel:

```text
Ariyo should not use customer content to train third-party foundation models.
Ariyo should minimize AI provider data exposure.
Ariyo should use customer content only to provide, secure, support, improve, and measure the service, according to contract and privacy controls.
Ariyo should clearly distinguish product analytics from AI training.
```

### 10.3 Customer Content and AI Output

Privacy Policy and Terms must align on:

- Who owns customer content
- Who owns AI outputs
- Whether outputs may contain errors
- Whether outputs may include generated content based on customer context
- Whether outputs are retained
- How customer can delete conversations, logs, knowledge files, and generated content

## 11. Cookie Policy Requirements

Ariyo must maintain a Cookie Policy if cookies or similar technologies are used.

### 11.1 Cookie Categories

Cookie categories:

```text
strictly_necessary
security
authentication
preferences
analytics
performance
marketing
support_chat
experiment
```

### 11.2 Cookie Table

Each cookie or tracker must have:

- Name
- Provider
- Category
- Purpose
- Expiration
- First-party or third-party
- Whether optional
- Consent requirement

Example:

```json
{
  "name": "ariyo_session",
  "provider": "Ariyo",
  "category": "authentication",
  "purpose": "Keeps users signed in securely.",
  "expiration": "session or configured duration",
  "party": "first_party",
  "optional": false
}
```

### 11.3 Consent Rules

Ariyo must not load optional analytics or marketing trackers before consent where consent is required.

Frontend must support:

- Cookie banner
- Manage preferences
- Accept all
- Reject optional
- Save preferences
- Withdraw consent
- Region-aware configuration
- Server-side consent state

## 12. Data Processing Addendum Requirements

DPA is required for business customers where Ariyo processes personal data on behalf of the customer.

### 12.1 DPA Must Address

- Controller/processor roles
- Processing subject matter
- Processing duration
- Data categories
- Data subject categories
- Processing purposes
- Customer instructions
- Confidentiality
- Security measures
- Subprocessors
- International transfers, if applicable
- Data subject requests
- Deletion or return of data
- Audit rights
- Incident notification
- Assistance obligations
- AI provider subprocessors
- Marketplace or partner processing boundaries

### 12.2 DPA Product Dependency

DPA promises must match:

- Data retention implementation
- Export implementation
- Deletion implementation
- Subprocessor list
- Security controls
- Audit logs
- Incident response process
- Support access governance
- Model provider contracts
- Integration data flow

No DPA clause may promise a control that does not exist.

## 13. Acceptable Use Policy Requirements

AUP defines what customers may not do with Ariyo.

### 13.1 AUP Must Prohibit

- Illegal activity
- Abuse of AI employees
- Spam
- Phishing
- Malware
- Credential theft
- Unauthorized surveillance
- Harassment
- Hate or extremist use
- Exploitation of minors
- Unauthorized scraping
- Attempts to bypass rate limits
- Attempts to access other tenants' data
- Prompt injection against other users or systems
- Uploading data the customer lacks rights to use
- High-risk regulated advice without proper review and authorization
- Use that violates third-party platform terms
- Marketplace fraud
- Payment fraud
- Misrepresentation of AI-generated content where disclosure is required

### 13.2 Enforcement States

```text
warning
feature_restricted
workflow_paused
ai_employee_paused
integration_disabled
account_suspended
organization_suspended
terminated
reported_if_required
```

### 13.3 Enforcement Requirements

Ariyo must log:

- Reason
- Policy violated
- Evidence summary
- Actor
- Organization
- Scope of restriction
- Whether customer was notified
- Appeal path

## 14. AI Use Policy Requirements

AI Use Policy is critical because Ariyo sells AI employees.

### 14.1 AI Use Policy Must Explain

- AI employees can produce mistakes
- AI employees may require human review
- Some actions may be blocked or gated
- Customers are responsible for configuration and approval policies
- Ariyo may use safety systems and automated checks
- AI output may depend on customer-provided content
- AI behavior may vary across models/providers
- Ariyo may update model routing subject to policy
- AI employees should not be used for prohibited purposes
- High-risk domains require extra controls or may be unsupported

### 14.2 AI Employee Disclosure

Ariyo must support disclosures where AI interacts with end-users.

Disclosure examples:

```text
This response was generated by an AI employee configured by [Organization].
An AI assistant may help process this request.
This AI employee may escalate certain topics to a human reviewer.
```

### 14.3 AI Human Review Alignment

AI Use Policy must align with `human-review-governance.md`.

The policy must explain:

- When review may be required
- Who controls review settings
- What happens when review is not completed
- Which plans include advanced review controls
- Why Ariyo may block unsafe actions

### 14.4 AI Accuracy Disclaimers

Ariyo must not promise perfect AI accuracy.

Allowed posture:

```text
Ariyo provides tools to configure, evaluate, supervise, and improve AI employee behavior, but AI-generated outputs may be incomplete, inaccurate, outdated, or inappropriate for certain contexts.
```

## 15. Refund & Cancellation Policy Requirements

Refund and cancellation rules must be clear before checkout.

### 15.1 Required Topics

- Trial rules
- Free trial conversion
- Cancellation process
- Renewal timing
- Refund eligibility
- Non-refundable charges
- Usage-based charges
- AI cost overages, if any
- Marketplace purchases
- Partner services
- Annual plans
- Downgrades
- Plan changes
- Data access after cancellation
- Account deletion after cancellation
- Local legal rights placeholders

### 15.2 Basic / Pro / Smart Billing Clarity

The policy must align with `ai-cost-control.md` and `monetization-billing.md`.

It must explain:

- Basic has lower limits and fewer advanced AI capabilities
- Pro includes more operational usage and controls
- Smart includes advanced intelligence and higher-cost capabilities
- Plan limits may throttle, downgrade, or require upgrade
- Usage limits and entitlements are visible in-product
- Optional add-ons must be clearly disclosed

### 15.3 Cancellation UX Requirements

Cancellation must not be dark pattern based.

The product may ask for feedback and offer options, but must not:

- Hide cancellation
- Mislead about consequences
- Make cancellation impossible without support when self-serve subscription exists
- Use confusing button labels
- Hide data retention consequences

## 16. Subscription & Billing Policy Requirements

This page can either be standalone or part of Terms/Refund Policy.

It must explain:

- Plans
- Billing cycle
- Taxes
- Payment methods
- Failed payments
- Grace periods
- Suspension
- Reactivation
- Upgrades
- Downgrades
- Proration
- Usage limits
- Add-ons
- Credits
- Marketplace charges
- Partner service charges
- Invoices
- Refunds
- Disputes

## 17. Marketplace Terms Requirements

Ariyo marketplace creates additional legal complexity.

### 17.1 Must Address Buyer Rules

- What marketplace assets are
- Who creates them
- What Ariyo verifies
- What Ariyo does not guarantee
- Installation permissions
- Data access risks
- Compatibility
- Refunds
- Support responsibility
- Reviews and ratings
- Disputes
- Security restrictions

### 17.2 Must Address Seller / Creator Rules

- Creator eligibility
- Asset submission rules
- Quality standards
- Security review
- Privacy restrictions
- Pricing
- Revenue share
- Payouts
- Taxes
- Support obligations
- Updates
- Removal
- Prohibited assets
- IP rights
- Customer data restrictions
- Fraud prevention

### 17.3 Marketplace Policy Must Align With

- `ai-employee-marketplace.md`
- `ecosystem-marketplace-economy.md`
- `community-partner-growth.md`
- `security-threat-model.md`
- `data-governance-privacy.md`

## 18. Partner Terms Requirements

Partner Terms must define relationships with:

- Referral partners
- Affiliates
- Agencies
- Implementation partners
- Consultants
- Certified advisors
- Marketplace creators
- Integration partners
- Strategic partners

Required topics:

- Partner eligibility
- Certification requirements
- Brand usage
- Referral attribution
- Commission rules
- Customer handoff
- Confidentiality
- Data access boundaries
- Customer support responsibilities
- Co-marketing approvals
- Prohibited claims
- Anti-bribery and anti-fraud
- Termination

## 19. Developer/API Terms Requirements

If Ariyo exposes APIs, Developer/API Terms must govern usage.

Required topics:

- API key responsibilities
- Rate limits
- Abuse prevention
- Data access
- Webhook security
- Prohibited API use
- Reverse engineering restrictions
- No scraping or bypassing controls
- API changes and deprecations
- Sandbox vs production
- Logging and monitoring
- Suspension
- Third-party app responsibilities
- Customer consent for connected apps
- Security review for public apps

## 20. Subprocessor List Requirements

Ariyo must maintain a public or gated subprocessor list.

### 20.1 Subprocessor Entry Model

```json
{
  "name": "Provider Name",
  "purpose": "AI model processing / hosting / analytics / billing / support",
  "data_categories": ["customer_content", "account_data"],
  "location": "country_or_region",
  "service_scope": "all_customers | optional_feature | enterprise_only",
  "used_for_ai_processing": true,
  "notice_required_for_changes": true
}
```

### 20.2 Subprocessor Change Workflow

When subprocessors change:

1. Product/security/privacy review
2. Contract and DPA review
3. Risk classification
4. Data flow update
5. Trust Center update
6. Customer notice if required
7. Effective date
8. Archive old list

## 21. Security Policy Requirements

Security Policy must summarize Ariyo's security posture without overclaiming.

Must address:

- Encryption in transit
- Encryption at rest, if implemented
- Access controls
- Tenant isolation
- Logging and monitoring
- Vulnerability handling
- Responsible disclosure
- Incident response summary
- Backup/recovery summary
- Secure development practices
- AI security practices
- Integration security practices

Must not claim certifications that Ariyo does not have.

Forbidden claims:

```text
SOC 2 certified
ISO certified
HIPAA compliant
GDPR compliant
bank-grade security
unhackable
military-grade security
zero risk
```

Unless verified, approved, and legally reviewed.

## 22. Responsible Disclosure Policy Requirements

Responsible Disclosure Policy must invite safe security reporting.

Must include:

- Scope
- Out-of-scope activities
- Safe harbor language, counsel-reviewed
- Reporting email or form
- Expected response timing
- No extortion or data exfiltration
- No service disruption
- No social engineering
- No physical attacks
- No accessing other users' data beyond proof-of-concept minimum
- Reward policy if any

## 23. Public Policy Page UX Requirements

Legal pages must be usable.

### 23.1 Required UX

- Clear title
- Effective date
- Last updated date
- Version number
- Table of contents
- Anchored sections
- Searchable text
- Mobile responsive layout
- Print/download option
- Contact link
- Related documents
- Plain-language summary where appropriate
- Full legal text preserved
- Localization-ready structure

### 23.2 Plain-Language Summaries

Ariyo may provide summaries, but must include:

```text
This summary is provided for convenience only. The full policy controls.
```

### 23.3 Accessibility

Legal pages must:

- Use semantic headings
- Support keyboard navigation
- Meet contrast rules
- Avoid text embedded only in images
- Support screen readers
- Avoid modal-only policy access

## 24. Legal Page Architecture

Legal pages should be content-managed, versioned, and auditable.

Recommended structure:

```text
/legal
  /terms
  /privacy
  /cookies
  /acceptable-use
  /ai-use-policy
  /refund-policy
  /subscription-billing
  /marketplace-terms
  /partner-terms
  /developer-terms
  /subprocessors
  /security
  /responsible-disclosure
  /dpa
  /archive
```

### 24.1 Backend Data Model

Core entities:

- LegalDocument
- LegalDocumentVersion
- LegalDocumentSection
- LegalAcceptance
- LegalChangeNotice
- ConsentPreference
- CookieCategory
- CookieDeclaration
- Subprocessor
- PolicyReview
- PolicyException

### 24.2 LegalDocument

```json
{
  "id": "doc_terms",
  "slug": "terms",
  "title": "Terms of Service",
  "document_type": "terms_of_service",
  "current_version_id": "ver_terms_2_0_0",
  "public": true,
  "requires_acceptance": true,
  "owner_team": "legal"
}
```

### 24.3 LegalDocumentVersion

```json
{
  "id": "ver_terms_2_0_0",
  "document_id": "doc_terms",
  "version": "2.0.0",
  "status": "published",
  "effective_date": "2026-07-01",
  "published_at": "2026-06-18T10:00:00Z",
  "content_hash": "sha256_hash",
  "html_url": "/legal/terms",
  "archive_url": "/legal/archive/terms/2.0.0",
  "requires_reacceptance": true
}
```

## 25. Policy Change Workflow

No policy change should ship casually.

### 25.1 Standard Workflow

```text
Need identified
Product behavior mapped
Risk level assigned
Draft prepared
Product review
Security/privacy review
Legal review
Executive approval if material
Implementation readiness confirmed
Acceptance/notice plan configured
Publish scheduled
Customers notified if needed
Acceptance events monitored
Archive previous version
```

### 25.2 Emergency Workflow

Emergency policy changes may be required for:

- Security incident
- Legal/regulatory issue
- Provider change
- Abuse vector
- Marketplace risk
- Billing risk
- AI safety risk

Emergency changes must still be:

- Logged
- Approved by accountable owner
- Reviewed by counsel as soon as possible
- Versioned
- Communicated if material

## 26. Customer Notification Rules

Ariyo must notify customers when legal changes materially affect them.

Notification channels:

- Email
- In-app banner
- Admin notification
- Changelog
- Trust Center update
- Contract manager notice for enterprise

Notification must include:

- Document changed
- Effective date
- Summary of material changes
- Link to full policy
- Whether acceptance is required
- Contact path

## 27. Policy Exception Management

Enterprise customers may request contract exceptions.

Ariyo must track exceptions.

Exception model:

```json
{
  "exception_id": "pex_123",
  "organization_id": "org_123",
  "document_id": "doc_terms",
  "clause": "data_retention",
  "exception_summary": "Custom retention term",
  "approved_by": "legal",
  "effective_date": "YYYY-MM-DD",
  "expiration_date": "YYYY-MM-DD",
  "risk_level": "medium"
}
```

Product must not assume all customers share the same terms if enterprise exceptions exist.

## 28. Legal Content Quality Rules

Legal text should be:

- Accurate
- Counsel-reviewed
- Plain where possible
- Specific to Ariyo
- Not copied from unrelated companies
- Not contradictory
- Not overbroad
- Not misleading
- Product-aligned
- Updateable
- Region-ready

## 29. AI-Specific Legal Page Rules

Ariyo must handle AI-specific policy risks.

### 29.1 Required AI Policy Topics

- AI output limitations
- Hallucination risk
- Human review
- Customer configuration responsibility
- AI model provider processing
- Prompt and context use
- Tool/action permissions
- Prohibited AI use
- High-risk use restrictions
- AI-generated customer communications
- AI disclosure options
- Evaluation and monitoring
- Model updates

### 29.2 AI Output Ownership and Responsibility

Terms must address:

- Customer ownership or usage rights in outputs, subject to counsel review
- Customer responsibility for reviewing outputs
- Third-party rights risks
- No guaranteed originality unless supported
- No professional advice unless explicitly supported

### 29.3 AI Employee Misuse

AUP and AI Use Policy must prohibit:

- Deceptive impersonation
- Automated harmful outreach
- AI-generated fraud
- Unauthorized scraping
- Credential harvesting
- Circumventing platform limits
- Generating prohibited regulated advice
- Prompt injection attacks
- Exploiting AI tools to access unauthorized data

## 30. Plan-Aware Legal Requirements

Legal pages must not hide plan differences.

### 30.1 Basic

Basic policy posture:

- Lower usage limits
- Fewer AI employee capabilities
- Limited support
- Limited integrations
- Basic governance controls
- Less advanced automation
- More strict throttling and downgrade behavior

### 30.2 Pro

Pro policy posture:

- Operational AI employee usage
- More integrations
- More workflow capacity
- More analytics
- Stronger support
- Better cost controls
- More admin capabilities

### 30.3 Smart

Smart policy posture:

- Most advanced AI capabilities
- Higher usage allowances
- More intelligent routing
- More advanced workflows
- Advanced analytics
- More marketplace capabilities
- More AI cost exposure, controlled through budgets and limits
- Stronger governance and review controls

### 30.4 Customer-Facing Clarity

Pricing pages, Terms, Billing Policy, AI Use Policy, and Support Policy must align on plan differences.

## 31. Internationalization and Localization

Legal pages must be localization-ready.

Required fields:

- Locale
- Jurisdiction scope
- Translation source version
- Translation reviewer
- Translation effective date
- Whether translation controls or English controls

Ariyo must avoid creating unofficial translations that contradict the controlling version.

## 32. SEO and GEO Requirements for Legal Pages

Legal pages must be discoverable by search engines and generative answer engines, but must not be optimized at the cost of legal precision.

### 32.1 SEO Requirements

- Stable URLs
- Clear titles
- Meta descriptions
- Structured headings
- Indexable public pages
- No accidental noindex for public legal pages
- Canonical URLs
- Internal links from footer and Trust Center

### 32.2 GEO Requirements

Legal pages should be structured so AI systems can accurately summarize them.

Requirements:

- Direct answers to common questions
- Clear definitions
- Policy summaries marked as summaries
- Effective date visible
- Version visible
- Related documents linked
- No contradictory claims across pages
- Machine-readable metadata where appropriate

Example FAQ blocks:

```text
Does Ariyo use customer data to train AI models?
How can I delete my data?
Which subprocessors does Ariyo use?
What happens when I cancel?
Does Ariyo provide an SLA?
How does Ariyo handle AI-generated mistakes?
```

## 33. Frontend Implementation Requirements

Frontend must:

- Render legal pages from approved versioned content
- Show effective date and version
- Support anchor navigation
- Support mobile reading
- Support print/download
- Link related documents
- Avoid layout shifts
- Avoid hiding legal content behind animations
- Implement cookie consent correctly
- Log required acceptance events
- Show reacceptance modals when needed
- Avoid dark patterns in cancellation and consent flows

## 34. Backend Implementation Requirements

Backend must:

- Store legal documents and versions immutably after publication
- Store acceptance events
- Store consent preferences
- Enforce required acceptance where configured
- Serve current and archived policy versions
- Expose policy metadata through internal APIs
- Support audit exports
- Support legal hold if required
- Connect terms exceptions to organizations
- Provide admin tools for legal publishing

## 35. API Requirements

### 35.1 Get Legal Documents

```http
GET /api/legal/documents
```

Response:

```json
{
  "documents": [
    {
      "id": "doc_terms",
      "slug": "terms",
      "title": "Terms of Service",
      "current_version": "2.0.0",
      "effective_date": "2026-07-01",
      "requires_acceptance": true,
      "url": "/legal/terms"
    }
  ]
}
```

### 35.2 Get Document Version

```http
GET /api/legal/documents/{document_id}/versions/{version}
```

Response:

```json
{
  "document_id": "doc_terms",
  "version": "2.0.0",
  "status": "published",
  "effective_date": "2026-07-01",
  "content_html": "...",
  "content_hash": "sha256_hash"
}
```

### 35.3 Accept Policy

```http
POST /api/legal/acceptances
```

Request:

```json
{
  "document_id": "doc_terms",
  "version": "2.0.0",
  "acceptance_surface": "signup"
}
```

Response:

```json
{
  "accepted": true,
  "accepted_at": "2026-06-18T10:15:00Z",
  "document_id": "doc_terms",
  "version": "2.0.0"
}
```

### 35.4 Get Organization Acceptance State

```http
GET /api/organizations/{organization_id}/legal/acceptance-state
```

Response:

```json
{
  "organization_id": "org_123",
  "required_acceptances": [
    {
      "document_id": "doc_terms",
      "version": "2.0.0",
      "accepted": true
    }
  ],
  "blocked_until_acceptance": false
}
```

## 36. Admin Console Requirements

Legal admin console must allow authorized users to:

- View legal documents
- Create drafts
- Request review
- Approve publication
- Schedule publication
- Archive versions
- Configure reacceptance
- Configure customer notices
- View acceptance metrics
- Export acceptance logs
- Manage subprocessors
- Manage cookie declarations
- Manage policy exceptions

Legal publishing must require permission checks from `admin-permissions.md`.

## 37. Analytics and Observability

Required events:

```text
legal_page.viewed
legal_document.downloaded
policy.accepted
policy.reacceptance_required
policy.reacceptance_completed
cookie_banner.shown
cookie_preferences.saved
policy_change_notice.sent
policy_version.published
subprocessor.added
subprocessor.updated
legal_exception.created
legal_exception.expired
```

Metrics:

- Acceptance completion rate
- Reacceptance completion rate
- Cookie consent rates
- Legal page views
- DPA downloads
- Subprocessor page views
- Enterprise trust document requests
- Cancellation policy views before churn
- Refund policy views before ticket creation

## 38. Security and Privacy Requirements

Legal system must not leak sensitive information.

Rules:

- Do not expose internal legal comments publicly
- Do not expose unpublished drafts
- Do not expose enterprise-specific terms to other customers
- Hash or minimize acceptance metadata where possible
- Protect admin legal publishing routes
- Log legal admin changes
- Prevent unauthorized document edits
- Validate content before publishing
- Sanitize HTML
- Avoid XSS in legal content rendering

## 39. Testing Requirements

Test cases must include:

- Current policy renders
- Archived policy renders
- Effective date displays
- Version displays
- Required acceptance blocks correct flows
- Acceptance event saved
- Reacceptance triggered for major version
- Minor version does not force acceptance unless configured
- Cookie preferences persist
- Optional trackers do not load before consent
- Legal pages are accessible on mobile
- Legal pages are printable
- Unauthorized user cannot publish legal document
- Draft document is not publicly accessible
- Terms exception does not leak
- Subprocessor list updates safely

## 40. Launch Checklist

Before launching public legal pages:

- All required pages drafted
- Counsel review completed
- Product behavior verified
- Security claims verified
- Privacy claims verified
- AI data usage verified
- Model provider data flow verified
- Billing/refund claims verified
- Marketplace terms aligned
- Cookie list audited
- Acceptance logging tested
- Reacceptance flow tested
- Footer links live
- Trust Center links live
- Archive system live
- Admin publishing permissions tested
- Support team trained
- Sales team trained
- Enterprise packet updated

## 41. Forbidden Patterns

Never do these:

```text
copy legal pages from another company
publish legal text without counsel review
claim compliance certifications Ariyo does not have
claim AI outputs are always accurate
claim Ariyo is unhackable
claim customer data is never shared if model providers process it
claim instant deletion if backups retain data
load marketing cookies before required consent
hide cancellation behind support-only flow when self-serve billing exists
make Basic, Pro, Smart limits vague
change terms without versioning
fail to record required acceptance
show old legal terms without effective dates
hide subprocessors
publish security claims without evidence
make Trust Center claims that policies do not support
allow AI to generate final legal pages without human legal review
let growth copy override legal accuracy
```

## 42. Golden Rule

If Ariyo cannot prove, enforce, log, operationalize, and support a legal promise, Ariyo must not publish it.

## 43. Final Rule

Legal pages are part of the product surface.

They must be designed, engineered, reviewed, shipped, monitored, and updated with the same discipline as authentication, billing, security, AI execution, and customer data handling.
