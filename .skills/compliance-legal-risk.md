# Ariyo Compliance, Legal & Risk Skill

Version: 1.0.0
Product: Ariyo
Purpose:
Act as a Product Counsel-aware AI SaaS Compliance Architect, Privacy-by-Design Reviewer, Legal Risk Analyst, AI Governance Advisor, and Enterprise Trust Guardian for Ariyo.
Audience:
Codex Agents, AI-assisted development tools, product managers, backend engineers, frontend engineers, AI engineers, security reviewers, customer success, and founders.
Priority:
Non-negotiable.

Dependencies:
- product-strategy.md
- domain-model.md
- api-contracts.md
- ai-employee-architecture.md
- knowledge-rag.md
- prompt-tool-orchestration.md
- workflow-automation.md
- ai-safety-evaluation.md
- data-governance-privacy.md
- security-threat-model.md
- admin-permissions.md
- backend-architecture.md
- deployment-ops.md
- monetization-billing.md
- frontend-copywriting.md

If conflicts exist:
- data-governance-privacy.md wins for data handling, retention, deletion, export, AI data use, and privacy-by-design implementation.
- security-threat-model.md wins for security threats, attack surfaces, abuse cases, and technical mitigations.
- admin-permissions.md wins for authorization, roles, and permission behavior.
- ai-safety-evaluation.md wins for AI behavior risk gates and evaluation requirements.
- compliance-legal-risk.md wins for legal-risk framing, compliance readiness, customer-facing commitments, contractual language boundaries, regulatory posture, and risk disclosure.

This file is not legal advice.
It is a product and engineering compliance operating contract.
A qualified lawyer must review legal documents, regulatory conclusions, DPA terms, customer contracts, and market-specific obligations before launch.

---

# Core Compliance Principle

Ariyo must be built as a trust-first AI SaaS product.

Compliance is not paperwork after launch.

Compliance is product behavior.

Compliance affects:

```text
what data Ariyo collects
what data Ariyo avoids collecting
where data is stored
who can access data
how long data is retained
how AI employees may use data
whether customer data trains models
how users are informed
how consent is captured
how deletion works
how exports work
how incidents are handled
how AI outputs are explained
how risky AI actions are reviewed
how contracts describe responsibility
how enterprise customers evaluate trust
```

Ariyo must never create hidden legal, privacy, security, or customer trust risk for speed of development.

---

# Ariyo Legal Positioning Rule

Ariyo should be positioned as:

```text
An AI Employee Operating System that helps organizations hire, configure, supervise, and measure AI employees inside controlled business boundaries.
```

Ariyo must not position itself as:

```text
a replacement for legal advice
a replacement for medical advice
a replacement for financial advice
a decision-maker in regulated high-risk domains without explicit safeguards
a fully autonomous business actor without human accountability
a guaranteed error-free AI system
a system that cannot be hacked
a system that guarantees legal compliance for customers
a system that uses customer data for training without explicit contractual basis
```

Marketing, UI, docs, onboarding, pricing, and sales materials must avoid overclaiming.

---

# Regulatory Awareness Baseline

Ariyo must be designed with regulatory awareness across privacy, AI governance, consumer protection, cybersecurity, sector-specific restrictions, and enterprise procurement.

Ariyo must account for jurisdictions where customers operate.

Important regulatory families may include:

```text
GDPR and EU/UK data protection rules
EU AI Act and AI transparency/high-risk obligations
consumer protection and unfair/deceptive practice rules
contract law and SaaS terms
DPA and processor/subprocessor obligations
cross-border data transfer rules
employment/labor restrictions where AI affects workers
sector-specific rules such as healthcare, finance, education, or public sector requirements
cybersecurity and incident notification obligations
cookie/ePrivacy and analytics consent rules
accessibility laws where applicable
recordkeeping and audit obligations for enterprise customers
```

Codex must not hard-code one jurisdiction as universal truth.

Ariyo must support configurable compliance posture by customer region and use case.

---

# Legal Advice Boundary Rule

Ariyo must not provide legal advice unless explicitly built, licensed, and reviewed for that jurisdiction and use case.

Forbidden claims:

```text
This contract is legally compliant.
This policy guarantees GDPR compliance.
You are safe from liability.
This is legal advice.
Ariyo will ensure your business is compliant.
This answer is legally binding.
```

Allowed safer framing:

```text
This is a suggested draft for review.
Ask your legal team before using this externally.
This may require legal review for your jurisdiction.
Ariyo can help organize information, but your team is responsible for final approval.
```

AI employees must escalate legal questions when required by role, risk, or customer policy.

---

# Professional Advice Boundary Rule

Ariyo must not allow general AI employees to provide regulated professional advice as authoritative output.

High-risk advice categories include:

```text
legal advice
medical advice
financial advice
tax advice
investment advice
employment termination advice
immigration advice
insurance coverage determinations
regulated safety decisions
credit decisions
eligibility decisions
```

If an AI employee is used in these contexts, Ariyo must require:

```text
explicit role scope
customer configuration
legal/compliance review
human review mode
clear disclaimers where appropriate
source citations where appropriate
audit logs
output risk scoring
restricted autonomy
```

Default behavior must be escalation, not confident advice.

---

# AI Disclosure Rule

Users must not be deceived about interacting with or receiving output from AI.

Ariyo must support disclosure patterns for:

```text
customer-facing AI replies
AI-generated drafts
AI-suggested actions
AI-generated summaries
AI-assisted workflow decisions
AI employee recommendations
AI-created content that may be published externally
```

Good product language:

```text
Drafted by AI employee
Suggested reply
Needs review
AI-assisted summary
Generated from connected knowledge sources
```

Forbidden:

```text
hide that AI generated customer-facing output when disclosure is required
represent AI as a human employee without policy approval
mark AI output as approved before human/server confirmation
remove AI disclosure from customer-facing channels when configured as required
```

Disclosure requirements may vary by jurisdiction and channel.

Ariyo must make disclosure configurable and auditable.

---

# EU AI Act Awareness Rule

Ariyo must maintain AI Act-aware design when serving EU users or when AI outputs are used in the EU.

Ariyo must support:

```text
AI system inventory
AI employee purpose definition
risk classification
transparency controls
human oversight controls
logging and traceability
model/provider records
technical documentation readiness
data governance records
evaluation records
incident and malfunction handling
prohibited-use screening
high-risk-use escalation
```

Ariyo must not assume every AI employee is low-risk.

Potentially high-risk or restricted use cases require legal review before release.

Examples requiring special review:

```text
employment screening
employee monitoring
creditworthiness
education assessment
medical triage
insurance eligibility
public-sector benefit access
law enforcement support
biometric identification or categorization
critical infrastructure decisions
```

Ariyo should default to not supporting these use cases unless explicitly reviewed.

---

# Prohibited and Restricted Use Screening Rule

Ariyo must maintain product-level screening for prohibited or restricted AI uses.

AI employees, templates, workflows, integrations, and customer configurations must be reviewed for:

```text
manipulative or deceptive behavior
exploitation of vulnerable users
social scoring
unlawful discrimination
biometric identification or categorization risks
sensitive attribute inference
employment/credit/education/health decisions
surveillance or worker monitoring
public authority decision support
regulated professional advice
unsafe autonomous external actions
```

If a use case is restricted:

```text
block it
require human review
require legal review
require enterprise approval
require specialized terms
require safety controls
require audit logging
```

Do not let customers configure dangerous use cases through generic workflows.

---

# GDPR and Privacy Readiness Rule

Ariyo must support GDPR-style privacy principles by design, even before formal market expansion.

Core principles:

```text
lawfulness, fairness, and transparency
purpose limitation
data minimization
accuracy
storage limitation
integrity and confidentiality
accountability
```

Product implications:

```text
collect only needed data
explain why data is needed
separate customer content from analytics data
support access/export/deletion workflows
support retention controls
support subprocessor records
support DPA commitments
log sensitive access
avoid training on customer data unless explicitly agreed
```

Codex must not create features that make privacy obligations impossible later.

---

# Controller and Processor Awareness Rule

Ariyo may act as a processor for customer business data and as controller for some account, billing, security, and product analytics data.

This distinction must be reflected in product and architecture.

Processor-like data may include:

```text
customer knowledge sources
customer conversations
customer workflow content
customer-uploaded documents
customer business context
customer integration data
AI employee outputs generated for the customer
```

Controller-like data may include:

```text
Ariyo account records
billing records
security logs
fraud prevention records
product usage analytics when defined by Ariyo
support communications
marketing preferences
```

Do not mix these categories casually.

DPA, privacy policy, data deletion, export, and access controls must respect the distinction.

---

# Data Processing Agreement Readiness Rule

Ariyo must be able to support a Data Processing Agreement for business customers.

DPA readiness requires records for:

```text
processing purposes
categories of personal data
categories of data subjects
processor obligations
subprocessors
security measures
international transfers
retention/deletion
breach notification
assistance with data subject rights
audit support
return or deletion at termination
```

Engineering must support DPA commitments.

Do not promise deletion/export/audit rights that the system cannot technically perform.

---

# Subprocessor Governance Rule

Ariyo must track subprocessors and service providers used to process customer data.

Examples:

```text
model providers
embedding providers
vector database providers
cloud hosting providers
email providers
analytics providers
logging/monitoring providers
payment processors
file storage providers
support tools
```

For each subprocessor, Ariyo should record:

```text
name
service purpose
data categories processed
region/data location
security posture
DPA status
transfer mechanism
retention behavior
model training policy if AI provider
customer notice requirements
risk owner
```

Do not add a provider that processes customer data without subprocessor review.

---

# Customer Data Training Policy Rule

Ariyo must have a clear customer data training policy.

Default policy:

```text
Customer data must not be used to train foundation models or improve third-party model providers unless explicitly agreed, disclosed, and contractually permitted.
```

Ariyo may use customer data for:

```text
serving the customer's requested AI employee behavior
retrieval within the customer's organization scope
customer-configured workflows
security monitoring
support with authorization
evaluation using redacted or synthetic data when permitted
```

Forbidden without explicit basis:

```text
using customer documents to train shared models
using customer conversations for public benchmarks
sending customer content to analytics tools
using customer content in demos
using customer data across organizations
```

This rule must appear in product architecture, provider selection, contracts, and support operations.

---

# AI Provider Contract Review Rule

Before using an AI provider, Ariyo must review:

```text
data processing terms
retention policy
training/use-of-inputs policy
logging policy
subprocessor list
region controls
security certifications
incident notification terms
API availability
rate limits
abuse monitoring
model deprecation policy
enterprise terms availability
```

The model provider strategy must align with compliance commitments.

Do not choose providers only by model quality.

---

# Cross-Border Transfer Rule

Ariyo must know where customer data travels.

Cross-border data transfer planning must cover:

```text
hosting region
model provider region
embedding provider region
vector store region
logging region
backup region
support tool region
analytics region
payment provider region
```

For EU/UK customers, transfer mechanisms may require legal review.

Do not create hidden cross-border transfers through logging, analytics, or AI provider calls.

---

# Data Retention Legal Rule

Retention must be policy-driven and technically enforceable.

Ariyo must define retention for:

```text
account records
billing records
security logs
audit logs
workflow execution logs
AI execution traces
conversation history
knowledge source raw files
processed chunks
embeddings
review records
support tickets
analytics events
webhook payloads
incident records
```

Retention must balance:

```text
customer value
legal obligations
security needs
debugging needs
privacy minimization
contractual commitments
delete/export rights
```

Do not keep data forever by default.

---

# Deletion and Export Legal Readiness Rule

Ariyo must support deletion and export promises with real system capability.

Deletion must address:

```text
primary records
related child records
files
chunks
embeddings
cached retrieval data
workflow logs where deletion is allowed
AI traces where deletion is allowed
analytics identifiers where applicable
backups according to policy
subprocessor deletion where applicable
```

Export must address:

```text
organization data
members
AI employees
knowledge sources metadata
business context
workflows
reviews
activity logs where allowed
billing invoices where allowed
settings
```

Do not promise immediate deletion from immutable audit/security logs if legally retained.

Explain retention exceptions clearly.

---

# Audit Log Legal Rule

Audit logs are legal and trust artifacts.

Ariyo should audit:

```text
login/security-sensitive events
role and permission changes
billing changes
integration connect/disconnect
knowledge source connect/delete/sync
AI employee hire/deploy/pause/delete
workflow publish/unpublish/delete
review approvals/rejections/overrides
customer-facing AI outputs
high-risk tool calls
data export/deletion requests
support/admin access
security incidents
```

Audit logs must be:

```text
organization-scoped
permission-protected
tamper-resistant where practical
retention-controlled
searchable for authorized admins
redacted for sensitive payloads
```

Do not store secrets in audit logs.

---

# AI Output Liability Framing Rule

Ariyo must frame AI output responsibility carefully.

Product language must make clear:

```text
AI output can be wrong
AI employees operate within configured scope
customers control deployment, knowledge sources, workflows, and review mode
high-risk outputs may require human review
customer-facing automation should be supervised according to risk
Ariyo provides controls, logs, and evaluation support
```

Forbidden claims:

```text
AI employee is always accurate
No review is needed
Ariyo guarantees every response is correct
Ariyo assumes full responsibility for customer business decisions
Deploy and forget
Autopilot with no risk
```

Good trust framing:

```text
Review mode helps your team approve replies before they are sent.
Use connected knowledge sources to improve answer quality.
Ariyo records actions so your team can review what happened.
```

---

# Human Oversight Legal Readiness Rule

Ariyo must make human oversight configurable, enforceable, and auditable.

Human oversight should apply to:

```text
high-risk customer-facing replies
regulated domains
low-confidence AI outputs
missing or stale knowledge
expensive actions
billing-affecting actions
permission changes
destructive actions
external system updates
workflow publishing
AI employee autonomy upgrades
```

The UI must not imply human oversight exists unless it is actually enforced by backend execution logic.

---

# Consent and Notice Rule

Ariyo must support clear notice and, where needed, consent or contractual authorization.

Potential notice/consent contexts:

```text
AI-generated customer-facing replies
recording and processing customer messages
connecting third-party integrations
syncing knowledge sources
using analytics cookies or tracking
sending data to subprocessors
email notifications
browser notifications
marketing communications
public sharing of AI-generated content
```

Do not bury important consent in vague settings.

Consent must be specific, informed, and revocable where required.

---

# Terms of Service Readiness Rule

Ariyo Terms should eventually address:

```text
account eligibility
organization administration
authorized users
acceptable use
AI employee limitations
customer responsibility for configuration and review
customer data ownership
Ariyo service rights
payment and billing
usage limits
suspension rights
beta features
warranties and disclaimers
limitation of liability
indemnity where appropriate
termination
data export/deletion after termination
governing law and disputes
```

Engineering must not create product behavior that contradicts expected terms.

---

# Privacy Policy Readiness Rule

Ariyo Privacy Policy should eventually address:

```text
what personal data is collected
sources of data
purposes of processing
legal bases where applicable
customer data vs account data
AI data processing
subprocessors/service providers
cookies and analytics
retention
security measures
data subject rights
international transfers
children/minors policy
contact details
updates
```

Do not collect data that the privacy policy cannot honestly describe.

---

# Acceptable Use Policy Readiness Rule

Ariyo should define unacceptable uses.

Forbidden or restricted use cases may include:

```text
illegal activity
malware or cyber abuse
spam or deceptive outreach
harassment or hate
regulated professional advice without approval
employment, credit, education, healthcare, or housing decisions without compliance review
surveillance or sensitive profiling
impersonation or deceptive AI disclosure
collection of sensitive data without legal basis
circumvention of platform rules
high-risk autonomous actions without oversight
```

Ariyo must support enforcement:

```text
suspension
feature restriction
workflow blocking
integration disabling
model/tool call blocking
incident review
customer notice
```

---

# Service Level and SLA Readiness Rule

Ariyo must not promise uptime, response time, or recovery guarantees that operations cannot support.

SLA commitments require:

```text
monitoring
incident response
status page
support process
on-call ownership
backup/recovery plan
error budget
customer communication workflow
exclusions
maintenance policy
```

Do not add enterprise SLA claims to marketing before operations can support them.

---

# Security Claims Rule

Security claims must be accurate and evidence-based.

Allowed if true:

```text
data is encrypted in transit
role-based access controls are enforced
admin actions are logged
customer data is organization-scoped
```

Forbidden unless verified:

```text
unhackable
military-grade security
zero-risk AI
guaranteed compliance
SOC 2 certified when not certified
GDPR compliant when not legally reviewed
HIPAA compliant when not contractually/technically ready
```

Use precise trust language.

---

# Certification Claims Rule

Do not claim certifications, audits, or compliance frameworks unless actually completed and current.

Examples requiring proof:

```text
SOC 2
ISO 27001
HIPAA
GDPR compliance certification
PCI compliance
CSA STAR
penetration tested
certified secure
EU AI Act compliant
```

Preferred honest language:

```text
Designed with SOC 2 readiness in mind.
Built with privacy-by-design principles.
Enterprise security controls are being developed.
```

Only claim completed certifications after official evidence exists.

---

# Accessibility Legal Risk Rule

Accessibility is not only UX quality; it can be legal risk.

Ariyo must design for:

```text
keyboard access
screen reader support
contrast
semantic structure
form labels
error accessibility
reduced motion
mobile accessibility
```

Customer-facing and admin-critical flows must not exclude users with disabilities.

Accessibility commitments should align with frontend accessibility standards.

---

# Consumer Protection and Marketing Claims Rule

Ariyo must avoid deceptive marketing.

Forbidden:

```text
guaranteed ROI without proof
AI employee replaces human team with no downside
no hallucinations
fully autonomous with no risk
saves 90% cost for everyone
works for every business
set and forget
instant compliance
```

Safer:

```text
helps teams reduce repetitive work
can improve response speed when configured with trusted knowledge
supports human review for higher-risk workflows
tracks AI cost and performance so teams can measure value
```

Claims must be testable and supportable.

---

# Customer-Facing AI Communication Rule

When AI employees communicate externally, Ariyo must support governance for:

```text
sender identity
AI disclosure if required
approved channels
review mode
brand voice
forbidden claims
escalation rules
conversation logging
user opt-out where required
unsubscribe for email-like outreach
rate limits and anti-spam controls
```

Do not enable uncontrolled outbound communication by default.

---

# Sensitive Data Category Rule

Ariyo must treat sensitive data with heightened caution.

Sensitive categories may include:

```text
health information
financial information
government IDs
children's data
biometric data
precise location
racial/ethnic origin
religious or political views
sexual orientation
criminal history
trade union membership
passwords and secrets
customer support messages with personal data
employment records
```

Default product behavior should avoid collecting sensitive data unless necessary and reviewed.

AI employees must not infer sensitive attributes unless explicitly allowed and legally reviewed.

---

# Children and Minors Rule

Ariyo should not target children by default.

If any customer use case involves minors, education, children’s support, or youth services:

```text
require legal review
require special data handling
require parental/school authorization analysis
restrict AI autonomy
require human oversight
avoid unnecessary data collection
```

Do not casually support children-focused workflows.

---

# Employment and HR Use Case Rule

Employment/HR-related AI workflows are high-risk.

Use cases requiring legal review:

```text
candidate screening
resume ranking
employee performance evaluation
worker monitoring
termination recommendations
promotion recommendations
compensation recommendations
attendance discipline
behavior prediction
```

Default Ariyo marketplace should avoid HR decision automation unless explicitly scoped and reviewed.

---

# Healthcare Use Case Rule

Healthcare use cases require strict legal review.

Forbidden by default:

```text
medical diagnosis
treatment recommendation
triage decision without clinical review
medication advice
emergency response decision
patient eligibility decision
```

Allowed safer possibilities after review:

```text
administrative FAQ
appointment scheduling guidance
non-clinical support routing
policy explanation with human escalation
```

Human review and disclaimers are mandatory for health-adjacent contexts.

---

# Finance and Credit Use Case Rule

Finance and credit use cases require legal review.

Restricted:

```text
creditworthiness decisions
loan eligibility
investment advice
tax advice
insurance eligibility
fraud accusation without review
account closure recommendations
```

Ariyo may support administrative workflows only with clear boundaries.

---

# Public Sector Use Case Rule

Public sector deployments may require additional controls.

Review required for:

```text
benefit eligibility
public service access
citizen profiling
law enforcement support
immigration support
education placement
public complaint triage if rights-impacting
```

Public-sector use may require procurement, transparency, audit, and legal controls.

---

# AI Employee Marketplace Legal Review Rule

Marketplace templates must pass legal-risk screening before publication.

Review each template for:

```text
regulated domain exposure
external communication risk
professional advice risk
sensitive data risk
automation scope
required integrations
required knowledge
required disclosure
review mode recommendation
forbidden use cases
claims in marketplace copy
```

Do not publish templates that invite illegal or unsafe use.

---

# Workflow Legal Risk Rule

Workflow automation can create legal liability.

High-risk workflow actions require review:

```text
sending external messages
updating CRM status that affects customer treatment
changing subscription/billing state
deleting records
creating legal/financial documents
changing permissions
publishing public content
triggering customer notifications
updating employment records
```

Workflows must include:

```text
permission checks
scope checks
review mode
idempotency
audit logs
safe failure states
rate limits
rollback or remediation path when possible
```

---

# Integration Legal Risk Rule

Integrations create data transfer and authorization risk.

Before integrating with a provider, review:

```text
provider terms
API policies
rate limits
data use restrictions
webhook security
OAuth scope granularity
customer consent/authorization
subprocessor implications
data retention by provider
revocation behavior
outbound action risks
```

Do not use integrations in ways that violate provider terms or customer permissions.

---

# Billing Legal Risk Rule

Billing must be transparent and server-confirmed.

Billing UI and contracts must address:

```text
plan limits
AI usage limits
overage handling
renewal terms
cancellation
refund policy
upgrade/downgrade effects
taxes where applicable
invoice access
payment failure
trial conversion
usage-based billing calculations
```

Forbidden:

```text
hidden AI charges
unclear overages
fake billing success
charging before user authorization where required
misleading savings claims
using AI cost estimates as final invoices
```

Billing changes must be auditable.

---

# AI Cost Disclosure Rule

Ariyo must distinguish:

```text
estimated AI cost
actual AI cost
included plan allowance
overage
customer-facing charge
internal provider cost
```

Do not confuse internal cost with customer billing.

Do not show estimates as invoices.

Do not hide cost increases caused by automation.

---

# Contractual Feature Commitments Rule

Codex must not create UI copy that promises features not supported.

Forbidden:

```text
Unlimited knowledge sources
Unlimited AI employees
Guaranteed response time
Instant sync
Automatic compliance
Human-approved every time
Full data deletion
No data leaves your region
```

unless the architecture and contracts fully support it.

Product copy must align with actual entitlement, ops, data, and legal capability.

---

# Beta Feature Rule

Beta features must be labeled and risk-controlled.

Beta feature requirements:

```text
clear beta label
scope limitations
known risk disclosure when needed
feedback path
kill switch
feature flag
no critical dependency for enterprise promises
separate terms if required
```

Do not quietly ship high-risk beta AI behavior to all customers.

---

# Incident Notification Readiness Rule

Ariyo must support incident classification and customer notification workflows.

Incidents may include:

```text
personal data breach
organization data leak
cross-tenant access
unauthorized integration access
AI employee unsafe action
billing error
security compromise
model provider data exposure
loss of customer data
major availability outage
```

Incident readiness requires:

```text
detection
severity classification
affected customer identification
logs and audit trail
legal review path
customer notification templates
regulator notification assessment
remediation tracking
post-incident review
```

Do not delay incident design until after an incident occurs.

---

# Support Access Compliance Rule

Support/admin access to customer data must be controlled.

Requirements:

```text
least privilege
customer authorization where appropriate
just-in-time access where possible
access reason
time-limited access
audit log
redaction of sensitive content
support role separation
break-glass procedure
```

Support staff must not browse customer data casually.

---

# Legal Hold Rule

Ariyo may eventually need legal hold capability for enterprise customers.

If legal hold is implemented, it must override deletion for specified records according to policy.

Do not promise absolute deletion if legal hold or audit retention may apply.

This requires legal review before customer-facing commitments.

---

# Records of Processing Readiness Rule

Ariyo should maintain internal processing records for compliance readiness.

Records should include:

```text
processing activity
purpose
data categories
data subjects
legal basis where applicable
retention
subprocessors
transfers
security controls
system owner
risk classification
```

These records help support audits, DPIAs, DPA negotiation, and enterprise sales.

---

# DPIA / AI Impact Assessment Readiness Rule

Certain use cases may require Data Protection Impact Assessments or AI impact assessments.

Trigger review when:

```text
large-scale personal data processing
sensitive data processing
systematic monitoring
profiling
high-risk AI use
external customer-facing automation
employment/education/finance/health domains
cross-border sensitive processing
new model/provider with customer data
new data category collected
```

Ariyo should maintain templates and evidence for risk assessments.

---

# Compliance Evidence Rule

Compliance claims require evidence.

Evidence may include:

```text
architecture diagrams
security controls
access logs
audit logs
DPA templates
subprocessor list
retention policy
incident response plan
penetration test reports
security review records
model provider terms
AI evaluation results
risk assessments
privacy policy
terms of service
SLA documentation
```

Do not answer enterprise questionnaires from memory or aspiration.

Use evidence-backed responses.

---

# Security Questionnaire Readiness Rule

Enterprise customers may ask about:

```text
data encryption
access controls
SSO/SAML
SCIM
MFA
audit logs
subprocessors
AI provider use
customer data training
data deletion
data residency
backup and recovery
incident response
vulnerability management
penetration testing
SOC 2/ISO status
privacy rights
DPA
SLA
```

Ariyo should maintain standardized, truthful answers.

Do not overclaim.

---

# Legal Copy UX Rule

Legal and compliance copy must be clear, calm, and non-deceptive.

Good:

```text
Your data is used to power AI employees in your workspace.
Customer data is not used to train third-party foundation models unless your organization explicitly agrees.
Admins can export organization data from settings.
Some logs may be retained for security and audit purposes.
```

Bad:

```text
We never use your data.
Everything is deleted instantly.
Fully compliant.
No risk.
Unhackable.
```

Clarity builds trust.

---

# Compliance-by-Design Product Checklist

Every new feature must answer:

```text
What data does this collect?
Why is it needed?
Who can access it?
Is any data personal or sensitive?
Is data sent to third parties?
Is data sent to an AI provider?
Is customer data used for training?
How long is data retained?
Can it be exported?
Can it be deleted?
Is consent or notice needed?
Does this affect external users?
Does this involve regulated advice or decisions?
Does this require human review?
Does this create audit events?
Does this affect billing or contract commitments?
Does this require legal review?
```

If answers are unclear, the feature is not ready.

---

# Legal Review Triggers

Require legal/compliance review before shipping features involving:

```text
new data categories
sensitive personal data
children/minors
employment/HR use
finance/credit/tax use
healthcare use
public sector use
AI decision support affecting rights
customer-facing autonomous communication
new AI provider
new subprocessor
new international transfer
billing changes
terms/privacy policy changes
DPA changes
security incident workflow
export/deletion promises
certification/security claims
enterprise SLA commitments
market expansion to new jurisdiction
```

Do not bypass review for speed.

---

# Documentation Readiness Rule

Compliance-sensitive features must be documented.

Docs may include:

```text
admin guide
security guide
privacy guide
AI usage guide
human review guide
integration setup guide
billing guide
data export/deletion guide
incident response guide
model provider guide
subprocessor list
```

Ariyo should make trust understandable, not hidden behind legal PDFs only.

---

# Compliance Testing Rule

Compliance-sensitive behavior should be testable.

Test examples:

```text
permission denied states
export request creation
 deletion request status
retention policy enforcement where practical
subprocessor configuration not exposed publicly
AI disclosure appears when required
human review blocks high-risk output
billing success waits for server confirmation
unsafe marketplace template rejected
sensitive data not sent to analytics
URL params do not contain secrets
raw backend errors not shown
```

Compliance should have QA gates.

---

# Contract and UI Alignment Rule

UI must not contradict legal commitments.

If Terms say customer controls deployment, UI must not deploy automatically without customer action.

If Privacy Policy says customer data is not used for training, no background training pipeline may use it.

If DPA says deletion happens within a timeframe, backend must support that workflow.

If SLA promises uptime, operations must measure and report it.

Product, engineering, legal, and support must align.

---

# Compliance Risk Register Rule

Ariyo should maintain a living risk register.

Each risk should include:

```text
risk title
risk category
affected product area
likelihood
impact
owner
mitigation
status
review date
related controls
customer-facing impact
```

Example risks:

```text
AI employee sends unreviewed external reply
Customer data used by provider for training unexpectedly
Knowledge source deletion leaves embeddings behind
Webhook replay updates wrong organization
Billing overage not clearly disclosed
Marketplace template used in regulated HR context
```

Risks must have owners.

---

# Compliance Incident Examples

Potential compliance incidents:

```text
cross-tenant data exposure
customer data sent to unapproved subprocessor
AI output reveals confidential knowledge
customer deletion request not completed
AI employee sends unauthorized external message
billing charge not disclosed
admin accesses customer data without reason
model provider retention violates policy
analytics contains personal message content
security logs expose secrets
```

These must be triaged, logged, remediated, and reviewed.

---

# Compliance Metrics Rule

Ariyo should track compliance health.

Useful metrics:

```text
open compliance risks
unreviewed subprocessors
unresolved deletion requests
export request completion time
sensitive data incidents
AI safety escalations
human review override rate
unauthorized access attempts
policy violation detections
security questionnaire readiness
DPA negotiation blockers
compliance review SLA
```

Do not optimize only for speed of feature shipping.

---

# Forbidden Compliance Patterns

Never ship:

```text
legal advice from general AI employees
medical/financial/tax advice without review
employment/credit/education decisions without legal review
customer data training without explicit agreement
unclear AI disclosure for customer-facing output
privacy policy promises not supported by system
DPA promises not supported by system
certification claims without certification
unhackable or zero-risk claims
GDPR compliant claims without legal review
SOC 2 claims before certification
hidden AI charges
unclear overages
sensitive data in analytics
customer data in demos without authorization
subprocessors added without review
raw customer data in evaluation datasets without approval
unreviewed high-risk marketplace templates
unsafe autonomous outbound communication
support access without audit
legal TODOs postponed silently
```

---

# Ariyo Compliance Golden Rule

Do not make promises the product, architecture, operations, contracts, and evidence cannot support.

---

# Senior Compliance Rule

Compliance is not about blocking product velocity.

Compliance is about making trust scalable.

---

# Final Rule

Ariyo compliance and legal risk posture is acceptable only when data use is transparent, customer data is protected, AI limitations are disclosed, high-risk use cases are reviewed, contracts match actual product behavior, retention/export/deletion promises are technically enforceable, subprocessors are governed, regulated domains are restricted by default, incidents are diagnosable, and no customer-facing claim overstates security, privacy, reliability, AI accuracy, or legal compliance.
