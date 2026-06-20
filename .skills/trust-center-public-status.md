# Ariyo Trust Center & Public Status Skill

## 1. Purpose

This skill defines how Ariyo must design, operate, publish, and maintain its public trust infrastructure.

The Trust Center and Public Status system is the customer-facing proof layer for security, privacy, reliability, compliance readiness, incident transparency, AI governance, data handling, subprocessors, enterprise assurance, and operational maturity.

This skill must be used whenever Ariyo designs or implements:

- Public Trust Center pages
- Security overview pages
- Privacy overview pages
- AI governance pages
- Public Status Page
- Incident communication workflows
- Uptime history pages
- SLA evidence views
- Compliance document request flows
- Security questionnaire workflows
- Subprocessor listings
- Data Processing Addendum request flows
- Enterprise trust package flows
- Customer notification systems
- Internal trust operations dashboards
- Trust Center APIs
- Status webhooks
- Reliability disclosures
- Security disclosure pages
- Responsible disclosure / vulnerability reporting pages

## 2. Core Contract

Ariyo Trust Center is not a marketing page.

Ariyo Trust Center is the public evidence layer that helps customers, prospects, partners, security reviewers, legal teams, procurement teams, and enterprise buyers understand how Ariyo protects data, governs AI employees, communicates incidents, handles subprocessors, manages reliability, and proves operational maturity.

Ariyo must not publish trust claims that the product, infrastructure, policies, logs, controls, contracts, and operational process cannot support.

Trust must be accurate, current, evidence-backed, scoped, auditable, and updateable.

## 3. Strategic Role

The Trust Center exists to reduce friction in B2B buying and increase customer confidence without overclaiming.

It should help customers answer:

- Can we trust Ariyo with our business data?
- What does Ariyo store?
- How does Ariyo protect organization boundaries?
- How does Ariyo use AI providers?
- Is customer data used for model training?
- What happens during an outage?
- What happens during a security incident?
- What subprocessors are involved?
- What documents can security, legal, or procurement request?
- What reliability history does Ariyo have?
- What controls are available for Basic, Pro, and Smart customers?
- What additional controls are available for enterprise customers?

The Trust Center must support sales, enterprise procurement, customer success, compliance, security review, incident transparency, and customer retention.

## 4. Non-Goals

The Trust Center must not become:

- A dumping ground for legal text
- A fake compliance badge page
- A place to overclaim security maturity
- A replacement for legal counsel
- A static page that becomes stale
- A public exposure of sensitive security internals
- A place to reveal infrastructure secrets
- A page that promises impossible uptime
- A status page that hides incidents
- A support center replacement
- A marketing page that ignores operational evidence

## 5. Dependencies

This skill depends on:

- `security-threat-model.md`
- `data-governance-privacy.md`
- `compliance-legal-risk.md`
- `enterprise-readiness.md`
- `reliability-sla.md`
- `observability-analytics-events.md`
- `admin-permissions.md`
- `integration-ecosystem.md`
- `model-provider-strategy.md`
- `ai-cost-control.md`
- `knowledge-base-support-system.md`
- `customer-success-playbooks.md`
- `brand-messaging-system.md`
- `launch-go-to-market.md`

Trust Center content must never contradict these skills.

## 6. Trust Principles

### 6.1 Evidence Over Claims

Ariyo must prefer:

- What is implemented
- What is monitored
- What is logged
- What is contractually supported
- What is operationally practiced
- What can be exported as evidence

Ariyo must avoid:

- vague claims
- unverifiable promises
- implied certifications
- fake enterprise language
- unsupported security statements
- exaggerated AI safety claims

### 6.2 Transparency Without Exposure

Ariyo must disclose enough to build trust without exposing sensitive attack details.

Allowed:

- security architecture summaries
- encryption posture
- access control concepts
- incident communication process
- data retention overview
- subprocessor list
- AI provider data handling overview
- audit log availability
- status history

Forbidden:

- raw infrastructure maps
- secret names
- internal IPs
- exploit details before remediation
- exact firewall rules
- private runbook internals
- credentials or token architecture details
- raw logs containing customer data

### 6.3 Currentness

Trust content must be treated as operational documentation, not brochure copy.

Every trust page must include:

- last updated date
- owner
- review cadence
- source of truth
- change history when applicable

### 6.4 Scope Clarity

Every claim must define scope.

Bad:

> Ariyo is secure.

Good:

> Ariyo encrypts customer data in transit and at rest using managed infrastructure controls. Administrative access is role-based and logged. Enterprise customers may request audit exports where available.

### 6.5 Plan-Aware Truth

Trust capabilities may differ by plan.

Ariyo must clearly distinguish:

- Basic controls
- Pro controls
- Smart controls
- Enterprise / custom controls

The Trust Center must not imply that Basic customers receive Smart or Enterprise controls.

## 7. Trust Center Information Architecture

The public Trust Center should include these primary sections:

```txt
/trust
/trust/security
/trust/privacy
/trust/ai-governance
/trust/reliability
/trust/status
/trust/compliance
/trust/subprocessors
/trust/data-requests
/trust/responsible-disclosure
/trust/enterprise
/trust/documents
```

### 7.1 `/trust`

Purpose: main trust landing page.

Must include:

- trust headline
- short security summary
- short privacy summary
- short AI governance summary
- status indicator
- document request CTA
- subprocessor link
- responsible disclosure link
- enterprise trust CTA
- last updated date

### 7.2 `/trust/security`

Purpose: customer-facing security overview.

Must include:

- access control overview
- encryption overview
- tenant isolation overview
- audit logging overview
- vulnerability reporting link
- incident response overview
- secure development overview
- data access governance
- secrets management summary
- security testing summary

Must not include sensitive implementation details that increase attack risk.

### 7.3 `/trust/privacy`

Purpose: customer-facing privacy and data handling overview.

Must include:

- customer data ownership
- data categories
- PII handling summary
- data retention overview
- deletion/export process overview
- support access controls
- analytics privacy summary
- AI provider data handling summary
- training policy summary
- privacy contact

### 7.4 `/trust/ai-governance`

Purpose: explain how Ariyo governs AI employees.

Must include:

- AI employee supervision model
- human review boundaries
- tool/action permission model
- prompt/tool orchestration overview
- RAG source scoping overview
- model provider routing overview
- customer data training policy
- output reliability disclaimer
- high-risk action controls
- auditability of AI actions

### 7.5 `/trust/reliability`

Purpose: explain reliability posture.

Must include:

- system availability summary
- SLA/SLO definitions where applicable
- degraded mode philosophy
- backup/restore overview
- incident process overview
- status page link
- uptime history summary
- recovery expectations by plan

### 7.6 `/trust/status`

Purpose: real-time and historical public status.

Must include:

- current system status
- component statuses
- active incidents
- scheduled maintenance
- recent incidents
- historical uptime
- RSS/webhook/email subscription
- incident postmortems where public

### 7.7 `/trust/compliance`

Purpose: compliance readiness overview.

Must include:

- compliance posture summary
- available documents
- legal request workflow
- DPA request workflow
- security questionnaire workflow
- certifications if actually obtained
- frameworks under evaluation if not certified

Must never imply certification unless formally obtained.

### 7.8 `/trust/subprocessors`

Purpose: disclose third-party subprocessors and AI providers where relevant.

Must include:

- vendor name
- purpose
- data category
- region, if known/applicable
- link to vendor privacy/security page where safe
- date added
- status
- notification subscription

### 7.9 `/trust/data-requests`

Purpose: explain how customers can request data export, deletion, retention review, and privacy support.

Must include:

- export request workflow
- deletion request workflow
- account closure data handling
- organization admin permissions
- identity verification note
- processing timeline guidance

### 7.10 `/trust/responsible-disclosure`

Purpose: vulnerability reporting.

Must include:

- safe harbor language placeholder
- reporting email or form
- accepted testing boundaries
- prohibited testing
- expected response timeline
- vulnerability severity triage summary

Must be reviewed by legal/security before publication.

### 7.11 `/trust/enterprise`

Purpose: enterprise trust assets.

Must include:

- SSO/SAML/OIDC readiness
- SCIM readiness where available
- audit log exports
- admin controls
- custom data retention discussion
- enterprise security review workflow
- procurement packet request
- SLA conversation CTA

### 7.12 `/trust/documents`

Purpose: controlled access to trust documents.

Must include:

- public documents
- gated documents
- NDA-required documents
- request workflow
- document versioning
- expiration dates
- access logs

## 8. Trust Center Content Model

### 8.1 `TrustPage`

```ts
interface TrustPage {
  id: string;
  slug: string;
  title: string;
  summary: string;
  status: 'draft' | 'review' | 'published' | 'archived';
  audience: Array<'public' | 'customer' | 'enterprise' | 'partner' | 'internal'>;
  ownerTeam: 'security' | 'legal' | 'privacy' | 'reliability' | 'product' | 'support' | 'growth';
  lastReviewedAt: string;
  nextReviewDueAt: string;
  sourceOfTruth: string;
  requiresLegalReview: boolean;
  requiresSecurityReview: boolean;
  publicVisibility: 'public' | 'gated' | 'nda_required' | 'internal_only';
  relatedDocuments: string[];
  relatedControls: string[];
}
```

### 8.2 `TrustClaim`

Every meaningful trust claim must be tracked.

```ts
interface TrustClaim {
  id: string;
  claimText: string;
  category: 'security' | 'privacy' | 'ai_governance' | 'reliability' | 'compliance' | 'billing' | 'support';
  scope: 'all_customers' | 'basic' | 'pro' | 'smart' | 'enterprise' | 'internal';
  evidenceType: 'policy' | 'technical_control' | 'log' | 'contract' | 'procedure' | 'certification' | 'manual_review';
  evidenceLocation: string;
  owner: string;
  approvedBy: string[];
  reviewCadence: 'monthly' | 'quarterly' | 'semiannual' | 'annual' | 'event_driven';
  lastVerifiedAt: string;
  status: 'verified' | 'needs_review' | 'deprecated' | 'do_not_publish';
}
```

Ariyo must not publish high-risk trust claims without evidence.

### 8.3 `TrustDocument`

```ts
interface TrustDocument {
  id: string;
  title: string;
  type: 'security_overview' | 'privacy_overview' | 'dpa' | 'subprocessor_list' | 'sla' | 'incident_report' | 'questionnaire' | 'architecture_summary' | 'ai_governance_overview';
  version: string;
  visibility: 'public' | 'gated' | 'nda_required' | 'internal_only';
  fileUrl?: string;
  htmlUrl?: string;
  owner: string;
  approvedAt?: string;
  expiresAt?: string;
  lastUpdatedAt: string;
  accessLoggingRequired: boolean;
}
```

### 8.4 `Subprocessor`

```ts
interface Subprocessor {
  id: string;
  name: string;
  category: 'cloud_infrastructure' | 'ai_provider' | 'analytics' | 'email' | 'payments' | 'support' | 'monitoring' | 'storage' | 'other';
  purpose: string;
  dataProcessed: string[];
  regions?: string[];
  websiteUrl?: string;
  privacyUrl?: string;
  securityUrl?: string;
  status: 'active' | 'planned' | 'deprecated' | 'removed';
  dateAdded: string;
  dateRemoved?: string;
  noticeRequired: boolean;
  lastReviewedAt: string;
}
```

### 8.5 `StatusComponent`

```ts
interface StatusComponent {
  id: string;
  name: string;
  description: string;
  category: 'core_app' | 'api' | 'ai_execution' | 'model_provider' | 'rag' | 'workflow' | 'integration' | 'billing' | 'dashboard' | 'auth' | 'support';
  publicStatus: 'operational' | 'degraded_performance' | 'partial_outage' | 'major_outage' | 'maintenance';
  internalStatus?: string;
  publicVisible: boolean;
  ownerTeam: string;
  linkedRunbookId?: string;
}
```

### 8.6 `StatusIncident`

```ts
interface StatusIncident {
  id: string;
  title: string;
  publicSummary: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved' | 'postmortem_published';
  severity: 'sev1' | 'sev2' | 'sev3' | 'sev4';
  affectedComponents: string[];
  affectedPlans: Array<'basic' | 'pro' | 'smart' | 'enterprise'>;
  startedAt: string;
  resolvedAt?: string;
  updates: StatusIncidentUpdate[];
  customerImpact: string;
  workaround?: string;
  postmortemUrl?: string;
}

interface StatusIncidentUpdate {
  id: string;
  message: string;
  status: StatusIncident['status'];
  createdAt: string;
  createdBy: string;
}
```

## 9. Public Status Page Requirements

### 9.1 Status Components

Ariyo public status should include these components:

```txt
Core Web App
Public Website
Dashboard
Authentication
API
AI Employee Execution
Model Provider Gateway
Knowledge / RAG
Workflow Automation
Human Review Queue
Integrations
Billing & Entitlements
Marketplace
Academy / Help Center
Email / Notifications
```

Provider-specific components may include:

```txt
OpenAI Provider
Anthropic Provider
Google Gemini Provider
DeepSeek Provider
```

Only expose provider details if doing so helps customers and does not create unnecessary noise.

### 9.2 Status States

Allowed public states:

```txt
operational
under_maintenance
degraded_performance
partial_outage
major_outage
security_notice
```

Internal states may be more granular but must map to public states.

### 9.3 Incident Lifecycle

```txt
detected
triaged
investigating
identified
mitigating
monitoring
resolved
postmortem_required
postmortem_published
closed
```

### 9.4 Status Update Cadence

For active incidents:

- SEV1: update every 15-30 minutes or when material information changes
- SEV2: update every 30-60 minutes or when material information changes
- SEV3: update every 2-4 hours or when material information changes
- SEV4: update when resolved or materially changed

Do not publish speculative root causes.

### 9.5 Public Incident Copy Rules

Incident messages must include:

- what is affected
- who may be affected
- what users may experience
- current state
- next update expectation
- workaround if available

Incident messages must not include:

- internal blame
- unverified cause
- raw stack traces
- customer names
- exploit details
- secrets
- private vendor messages

Example:

```txt
We are investigating degraded AI Employee execution for some Pro and Smart workspaces. Affected users may see delayed responses or workflow executions. Existing data remains available. We will provide another update within 30 minutes.
```

## 10. Incident Communication Model

### 10.1 Communication Channels

Ariyo may use:

- public status page
- email notifications
- in-app banners
- dashboard notifications
- support article updates
- webhook notifications
- enterprise account manager updates
- postmortem documents

### 10.2 Plan-Aware Incident Communication

Basic:

- public status page
- in-app incident banner when relevant
- email for major incidents only

Pro:

- public status page
- in-app banner
- email notifications for material incidents
- post-incident summary when relevant

Smart:

- public status page
- in-app banner
- email notifications
- webhook alerts
- workflow-impact notifications
- AI employee degraded-mode explanation

Enterprise:

- all Smart capabilities
- dedicated incident contact routing where contracted
- custom reporting where contracted
- SLA-specific communications where contracted

### 10.3 Security Incident Communication

Security incidents must follow stricter approval.

Before public communication, Ariyo must coordinate:

- security lead
- legal reviewer
- privacy reviewer
- executive owner
- customer success lead
- support lead

Public security communication must be accurate, timely, and scoped.

Never disclose exploit details before mitigation.

## 11. Uptime History

### 11.1 Uptime Display

The status page should display:

- current status
- 30-day uptime
- 90-day uptime
- historical incidents
- scheduled maintenance
- component-level availability where reliable

### 11.2 Uptime Calculation Rules

Uptime must be calculated from observable service indicators.

Do not calculate uptime only from server process availability.

Relevant indicators:

- web app availability
- API success rate
- auth success rate
- AI execution success rate
- workflow queue latency
- model provider gateway availability
- RAG retrieval availability
- billing entitlement availability
- integration webhook processing

### 11.3 SLA Claim Rules

Ariyo must not publish SLA commitments unless:

- monitoring exists
- incident tracking exists
- exclusion rules are defined
- plan scope is defined
- remediation process exists
- legal terms are reviewed
- support process can honor the commitment

## 12. Trust Documents

### 12.1 Public Documents

May include:

- Security Overview
- Privacy Overview
- AI Governance Overview
- Subprocessor List
- Responsible Disclosure Policy
- Status Page
- Public Incident Postmortems

### 12.2 Gated Documents

May include:

- detailed security questionnaire responses
- architecture overview
- data processing overview
- enterprise admin controls overview
- penetration test executive summary if available and approved
- business continuity overview

### 12.3 NDA-Required Documents

May include:

- detailed infrastructure diagrams
- detailed incident postmortems
- audit reports
- pen test reports
- internal policy summaries
- customer-specific security answers

### 12.4 Document Access Rules

Every gated or NDA-required document access must log:

- requester
- organization
- email
- purpose
- document
- version
- approved by
- timestamp
- expiration

## 13. Compliance Disclosure Rules

Ariyo may publish compliance readiness information but must not imply completed certification unless completed.

Allowed language:

```txt
Ariyo is designing its controls with enterprise security, privacy, and compliance readiness in mind.
```

Allowed if true:

```txt
Ariyo maintains a documented subprocessor list and data handling overview for customers.
```

Forbidden unless certified:

```txt
Ariyo is SOC 2 compliant.
Ariyo is ISO certified.
Ariyo is GDPR certified.
Ariyo is HIPAA compliant.
```

Ariyo may say a framework is under evaluation only if there is a real internal initiative.

## 14. AI Governance Disclosure

Because Ariyo uses AI employees, the Trust Center must explain AI governance clearly.

Must include:

- AI employees can generate outputs that require human judgment
- high-risk actions may require human review
- AI employees operate within configured permissions
- AI employees should not be treated as legal, medical, financial, or professional advisors unless explicitly designed and reviewed for such use cases
- customer data usage depends on provider routing and data policy
- customer data must not be used for model training unless explicitly authorized and contractually permitted
- AI actions should be logged where applicable
- customers should configure knowledge sources and permissions carefully

## 15. Subprocessor Disclosure

### 15.1 Required Fields

Subprocessor list must include:

```txt
Name
Purpose
Category
Data processed
Region, if applicable
Status
Date added
Last reviewed date
Notice option
```

### 15.2 AI Provider Disclosure

Model providers must be disclosed based on actual data flow.

If Ariyo routes prompts, customer content, files, knowledge snippets, or workflow data to a provider, the provider must be represented in the trust architecture and subprocessor evaluation.

### 15.3 Change Notification

Ariyo should support subprocessor change notifications.

Minimum behavior:

- publish updated list
- record change date
- notify subscribed customers when required by contract
- preserve historical records

## 16. Responsible Disclosure Program

### 16.1 Required Content

The responsible disclosure page must define:

- reporting channel
- scope
- out-of-scope testing
- safe harbor language placeholder
- prohibited behavior
- expected response timeline
- severity triage overview
- no extortion policy
- no data destruction policy

### 16.2 Prohibited Testing Examples

Unless explicitly authorized, researchers must not:

- access customer data
- exfiltrate data
- perform destructive testing
- perform DDoS
- use social engineering
- spam customers
- attempt physical attacks
- publish exploit details before resolution

## 17. Trust Center UX Requirements

### 17.1 Design Principles

Trust pages must feel:

- calm
- precise
- credible
- restrained
- current
- structured
- easy to scan
- enterprise-ready

Must avoid:

- hype gradients
- fake badges
- walls of legal text
- vague icons without evidence
- fear-based copy
- security theater

### 17.2 Primary CTA Rules

Each page should have one primary CTA.

Examples:

- Request security documents
- Subscribe to status updates
- View subprocessors
- Report a vulnerability
- Contact security team
- Contact enterprise sales

### 17.3 Trust Badges

Trust badges must only show real statuses.

Allowed:

- Data encrypted in transit
- Role-based access controls
- Public status page
- Subprocessor list available
- Responsible disclosure available
- Enterprise security review available

Forbidden unless true:

- SOC 2
- ISO 27001
- HIPAA
- PCI-DSS
- GDPR compliant
- Zero risk
- Fully autonomous safe AI

## 18. Public Copy System

### 18.1 Trust Center Hero Copy

Suggested:

```txt
Trust is built into how Ariyo helps companies hire and govern AI employees.

Ariyo is designed with security, privacy, reliability, AI governance, and operational transparency at the center of the product experience.
```

### 18.2 Security Page Copy

```txt
Ariyo uses layered security controls to protect customer workspaces, business data, AI employee activity, and administrative access.

We design security around organization boundaries, role-based access, auditability, encrypted data handling, monitored infrastructure, and controlled AI actions.
```

### 18.3 Privacy Page Copy

```txt
Customers own their business data.

Ariyo uses customer data to provide the product, power configured AI employee workflows, support customer operations, and improve reliability and safety within defined privacy boundaries.
```

### 18.4 AI Governance Page Copy

```txt
AI employees should be powerful, but governed.

Ariyo is designed so AI employees operate within configured knowledge, permissions, review gates, tool access, cost controls, and audit boundaries.
```

### 18.5 Status Page Copy

```txt
This page shows the current and historical operational status of Ariyo services.

When incidents occur, we use this page to communicate impact, progress, mitigation, and resolution updates.
```

## 19. Trust Center API

Ariyo may expose internal/admin APIs and selected public APIs for Trust Center content.

### 19.1 Public Status API

```http
GET /api/public/status
```

Response:

```json
{
  "overall_status": "operational",
  "updated_at": "2026-06-18T10:00:00Z",
  "components": [
    {
      "id": "ai_execution",
      "name": "AI Employee Execution",
      "status": "operational"
    }
  ],
  "active_incidents": [],
  "scheduled_maintenance": []
}
```

### 19.2 Incident List API

```http
GET /api/public/status/incidents
```

Response:

```json
{
  "items": [
    {
      "id": "inc_123",
      "title": "Delayed AI Employee Execution",
      "status": "resolved",
      "severity": "sev2",
      "started_at": "2026-06-18T08:00:00Z",
      "resolved_at": "2026-06-18T09:10:00Z",
      "affected_components": ["ai_execution", "workflow_automation"],
      "public_summary": "Some users experienced delayed workflow execution."
    }
  ]
}
```

### 19.3 Subprocessor API

```http
GET /api/public/trust/subprocessors
```

Response:

```json
{
  "last_updated_at": "2026-06-18T10:00:00Z",
  "items": [
    {
      "name": "Example AI Provider",
      "category": "ai_provider",
      "purpose": "AI model inference",
      "data_processed": ["prompts", "retrieved knowledge snippets"],
      "status": "active",
      "date_added": "2026-01-01"
    }
  ]
}
```

### 19.4 Trust Document Request API

```http
POST /api/trust/document-requests
Authorization: Bearer <token>
Content-Type: application/json
```

Request:

```json
{
  "document_type": "security_overview",
  "requester_name": "Jane Doe",
  "requester_email": "jane@example.com",
  "organization_name": "Example Co",
  "purpose": "vendor security review"
}
```

Response:

```json
{
  "request_id": "tdr_123",
  "status": "submitted",
  "requires_approval": true,
  "estimated_response": "2 business days"
}
```

### 19.5 Webhook Subscriptions

```http
POST /api/trust/status-subscriptions
Authorization: Bearer <token>
Content-Type: application/json
```

Request:

```json
{
  "type": "webhook",
  "url": "https://customer.example.com/ariyo-status-webhook",
  "events": [
    "incident.created",
    "incident.updated",
    "incident.resolved",
    "maintenance.scheduled",
    "subprocessor.added"
  ]
}
```

Response:

```json
{
  "subscription_id": "sub_123",
  "status": "pending_verification",
  "verification_required": true
}
```

## 20. Webhook Events

Trust Center and Status Page may emit:

```txt
incident.created
incident.updated
incident.resolved
incident.postmortem_published
maintenance.scheduled
maintenance.updated
maintenance.completed
status.component_degraded
status.component_recovered
subprocessor.added
subprocessor.updated
subprocessor.removed
trust_document.updated
security_notice.published
```

Webhook payload:

```json
{
  "event_id": "evt_123",
  "event_type": "incident.updated",
  "created_at": "2026-06-18T10:00:00Z",
  "data": {
    "incident_id": "inc_123",
    "status": "monitoring",
    "severity": "sev2",
    "affected_components": ["ai_execution"]
  }
}
```

Webhook security:

- signed payloads required
- timestamp required
- replay protection required
- retry with exponential backoff
- idempotency required
- delivery logs required

## 21. Internal Trust Operations Dashboard

Admin dashboard must support:

- trust page review status
- trust claim evidence status
- stale claim alerts
- document access logs
- subprocessor updates
- incident publication workflow
- postmortem workflow
- security disclosure intake
- trust document approvals
- enterprise request queue
- compliance review checklist

## 22. Approval Workflows

### 22.1 Trust Page Publishing

Required approvals by page:

Security page:

- security owner
- product owner
- legal reviewer if claims are high-risk

Privacy page:

- privacy owner
- legal reviewer
- product owner

AI governance page:

- AI safety owner
- product owner
- legal reviewer if needed

Status page incident:

- incident commander or reliability owner
- security/legal if security-related

Compliance page:

- legal owner
- compliance owner
- product owner

### 22.2 Emergency Updates

During incidents, authorized incident roles may publish status updates quickly.

Post-incident review must verify accuracy.

## 23. Reliability Integration

Trust Center must integrate with reliability systems:

- monitoring
- alerting
- incident management
- status page updates
- postmortem repository
- SLA reporting
- uptime metrics
- customer notification preferences

Status must not rely on manual updates only.

Manual override is allowed but must be logged.

## 24. Security Integration

Trust Center must integrate with security processes:

- vulnerability intake
- security incident response
- responsible disclosure queue
- trust claim review
- access logs
- audit evidence
- security questionnaire workflows

## 25. Privacy Integration

Trust Center must integrate with privacy processes:

- data export requests
- deletion requests
- DPA requests
- subprocessor updates
- AI provider data flow updates
- privacy policy updates
- support access governance

## 26. Enterprise Sales Integration

Trust Center must support enterprise sales by providing:

- shareable trust links
- security packet request flow
- procurement packet request flow
- trust document versioning
- CRM integration for request tracking
- account owner routing
- document access approval
- enterprise readiness checklist

## 27. Customer Success Integration

Customer success teams must use Trust Center during:

- onboarding
- security review
- renewal
- expansion
- incident follow-up
- trust recovery
- AI governance education

## 28. Support Integration

Support must be able to link customers to:

- status incidents
- known issues
- privacy requests
- responsible disclosure
- trust documents
- AI governance explanations
- troubleshooting articles

Support must not invent trust claims in tickets.

If an answer requires security/legal review, support must escalate.

## 29. Plan-Aware Trust Capabilities

### 29.1 Basic

Basic customers may access:

- public Trust Center
- public Status Page
- public security overview
- public privacy overview
- public AI governance overview
- public subprocessor list
- public support documentation

Basic may not receive custom security reviews unless policy allows.

### 29.2 Pro

Pro customers may access:

- all Basic trust assets
- selected gated trust documents
- incident email notifications
- standard document request flow
- standard security questionnaire response where available

### 29.3 Smart

Smart customers may access:

- all Pro trust assets
- webhook status subscriptions
- AI governance detail documents where available
- workflow-impact incident notifications
- advanced admin/audit explanations
- priority trust document request workflow where offered

### 29.4 Enterprise

Enterprise customers may access:

- custom security review workflows
- advanced procurement documents
- audit exports where contracted
- custom SLA reporting where contracted
- dedicated trust review support where contracted
- NDA-required documents where approved

## 30. Trust Metrics

Track:

- Trust Center visits
- security page conversion to demo/request
- document requests
- security questionnaire completion time
- enterprise procurement cycle time
- status page subscribers
- incident notification delivery rate
- stale trust claims
- overdue trust reviews
- subprocessor update notifications
- support tickets deflected by Trust Center
- sales deals influenced by Trust Center
- renewal risk reduced by trust assets

## 31. Event Taxonomy

Trust events must follow `observability-analytics-events.md`.

Suggested events:

```txt
trust_center_viewed
trust_page_viewed
trust_document_requested
trust_document_approved
trust_document_downloaded
subprocessor_list_viewed
subprocessor_update_subscribed
status_page_viewed
status_subscription_created
incident_status_viewed
incident_update_published
incident_resolved
postmortem_published
responsible_disclosure_submitted
security_questionnaire_requested
enterprise_trust_packet_requested
trust_claim_review_due
trust_claim_verified
trust_claim_deprecated
```

Privacy-safe event properties:

```json
{
  "organization_id": "org_123",
  "user_role": "admin",
  "plan": "smart",
  "page_slug": "security",
  "document_type": "security_overview",
  "source": "sales_flow"
}
```

Do not track sensitive document contents in analytics.

## 32. Testing Requirements

Trust Center testing must include:

- public page rendering
- gated document access
- NDA document access restrictions
- role-based access
- document request workflow
- status component updates
- incident lifecycle
- webhook signature verification
- subprocessor list update
- stale claim alerts
- mobile responsive layout
- accessibility checks
- SEO metadata
- structured data where useful
- no secrets in public pages
- no internal-only documents exposed

## 33. Accessibility Requirements

Trust Center must be accessible:

- keyboard navigable
- screen reader friendly
- clear headings
- sufficient contrast
- status not represented by color alone
- incident severity explained in text
- downloadable documents accessible when possible

## 34. SEO and GEO Requirements

Trust Center pages are important for search and AI-generated answer visibility.

Trust pages should include:

- clear page titles
- concise summaries
- FAQ sections
- structured headings
- organization/entity clarity
- update dates
- direct answers to security/privacy questions
- canonical URLs
- metadata descriptions
- schema where appropriate

The Trust Center must support GEO by making Ariyo's trust posture easy for AI systems to summarize accurately.

Important FAQ examples:

```txt
Does Ariyo use customer data to train AI models?
How does Ariyo handle subprocessors?
Does Ariyo support audit logs?
How does Ariyo communicate incidents?
How does Ariyo secure AI employee actions?
How can customers request data deletion?
What happens if an AI provider is unavailable?
```

## 35. Security Constraints

Trust Center must enforce:

- no secrets in public content
- no internal URLs in public documents
- no raw logs in public incident reports
- no customer data in incident examples
- no unauthenticated access to gated documents
- no document enumeration
- signed download URLs with expiration for gated documents
- access logs for gated documents
- approval workflow before publishing sensitive content

## 36. Privacy Constraints

Trust Center must ensure:

- document requests collect minimum data
- requester data has retention policy
- analytics do not store sensitive request details
- subprocessor list does not expose unnecessary customer details
- data request forms are routed securely
- support access explanations are accurate

## 37. Content Review Cadence

Recommended review cadence:

- Status Page: continuous
- Subprocessors: monthly or on vendor change
- Security page: quarterly
- Privacy page: quarterly or on policy change
- AI governance page: quarterly or on model/provider change
- Compliance page: quarterly
- Enterprise page: quarterly
- Responsible disclosure: semiannual
- Public documents: quarterly or version-triggered

## 38. Trust Center Release Gate

Ariyo must not launch public Trust Center until:

- public claims are reviewed
- status page works
- responsible disclosure channel works
- subprocessor list is accurate enough to publish
- privacy page is reviewed
- security page is reviewed
- AI governance page is reviewed
- incident update workflow is tested
- gated document access does not leak documents
- public pages expose no secrets
- support team knows escalation rules

## 39. Forbidden Patterns

Never:

```txt
publish fake compliance badges
claim certification without proof
claim impossible security
say “unhackable”
publish trust claims without evidence
hide material incidents
mark incidents resolved before recovery is verified
publish raw internal stack traces
expose customer data in public incident reports
expose internal infrastructure diagrams publicly
allow public access to NDA-required documents
use vague trust language without scope
claim AI outputs are always accurate
claim customer data is never processed by AI providers if it is
bury subprocessors in obscure pages
make support invent legal/security answers
show status as operational when core customer journeys are failing
use uptime numbers that are not measured
silently remove incident history
silently add subprocessors when notice is required
send unsigned status webhooks
collect unnecessary personal data in trust document requests
```

## 40. Golden Rule

Ariyo's Trust Center must make trust easier to verify, not easier to fake.

The best Trust Center is not the one with the most badges.

The best Trust Center is the one where every claim is accurate, scoped, current, evidence-backed, and operationally true.

## 41. Final Rule

When building any public trust, status, reliability, compliance, security, privacy, AI governance, or enterprise assurance experience for Ariyo, follow this skill before writing copy, designing UI, exposing data, publishing claims, or sending customer-facing communications.

If the claim cannot be proven, do not publish it.
