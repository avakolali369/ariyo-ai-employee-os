# Ariyo Marketplace Notification & Communication System Skill

## Core Contract

Ariyo Marketplace Notification & Communication System is not a generic notification center.

It is the governed communication, alerting, messaging, routing, localization, consent, escalation, evidence, and customer-trust system that ensures Marketplace customers, creators, partners, vendors, admins, approvers, support teams, finance teams, security teams, and enterprise stakeholders receive the right message, through the right channel, at the right time, with the right context, in the right language, and with the right action path.

Ariyo must communicate Marketplace events clearly before they become confusion, risk, disputes, churn, compliance gaps, or operational failures.

Ariyo must never use notifications to hide risk, manipulate urgency, spam customers, bypass enterprise governance, pressure purchases, or obscure responsibility.

---

## 1. Purpose

This skill defines how Ariyo designs, routes, sends, audits, localizes, suppresses, escalates, and measures Marketplace communications.

The system must support:

- Marketplace install and uninstall communication.
- Template update and version communication.
- Creator-to-customer communication.
- Customer-to-creator communication.
- Support case notifications.
- Dispute, refund, chargeback, and payout notifications.
- Trust, safety, policy, certification, and label changes.
- Security, privacy, compliance, and data residency alerts.
- Enterprise approval workflow notifications.
- Procurement, billing, entitlement, and renewal notifications.
- Sandbox, demo, migration, dependency, health, remediation, and outcome intelligence alerts.
- Localized Marketplace communication across supported languages and regions.

The goal is to make every important Marketplace event understandable, actionable, policy-compliant, and auditable.

---

## 2. Related Ariyo Skills

This skill depends on and must stay consistent with:

- `marketplace-installation-entitlements.md`
- `marketplace-billing-payouts.md`
- `marketplace-dispute-resolution.md`
- `marketplace-trust-safety-operations.md`
- `marketplace-policy-enforcement-rules.md`
- `marketplace-customer-support-operations.md`
- `marketplace-template-health-monitoring.md`
- `marketplace-template-auto-remediation.md`
- `marketplace-template-lifecycle-optimization.md`
- `marketplace-template-trust-labeling-system.md`
- `marketplace-template-certification-program.md`
- `marketplace-localization-internationalization.md`
- `enterprise-approval-workflows.md`
- `enterprise-account-governance.md`
- `enterprise-workspace-policy-engine.md`
- `enterprise-sso-scim-directory-sync.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `compliance-legal-risk.md`
- `observability-analytics-events.md`
- `customer-success-playbooks.md`

---

## 3. Communication Philosophy

Ariyo communication must be:

- **Actionable**: every important notification should explain what changed and what the receiver can do.
- **Contextual**: messages must include the asset, workspace, customer, creator, plan, risk, and relevant state.
- **Permission-aware**: users only see messages they are allowed to see.
- **Role-aware**: admins, builders, finance users, security users, end users, creators, partners, and vendors receive different detail levels.
- **Risk-aware**: high-risk events must use stronger channels, escalation, and acknowledgments.
- **Localized**: language, tone, time, currency, legal terms, and region context must respect locale configuration.
- **Auditable**: critical notifications must leave evidence of delivery, read state, action, and escalation.
- **Non-manipulative**: notifications must never use dark patterns, false urgency, or hidden sponsored influence.

---

## 4. Notification Domains

Ariyo must classify notifications by domain.

### 4.1 Installation & Entitlement Notifications

Examples:

- Install requested.
- Install approved.
- Install blocked.
- Install completed.
- Install failed.
- Required permission missing.
- Required entitlement missing.
- Upgrade required.
- Uninstall requested.
- Uninstall completed.
- Rollback available.

### 4.2 Template Update Notifications

Examples:

- New version available.
- Security update required.
- Breaking change detected.
- Deprecated version warning.
- Auto-update scheduled.
- Manual approval required.
- Version rollback completed.

### 4.3 Dependency & Health Notifications

Examples:

- Integration disconnected.
- Dependency deprecated.
- Model profile degraded.
- Knowledge source stale.
- Region compatibility changed.
- Cost anomaly detected.
- Runtime failure detected.
- Health score dropped.

### 4.4 Trust & Safety Notifications

Examples:

- Template suspended.
- Creator restricted.
- Trust label changed.
- Certification revoked.
- Policy violation detected.
- Customer risk warning.
- Marketplace enforcement action.
- Unsafe behavior contained.

### 4.5 Billing & Payout Notifications

Examples:

- Marketplace purchase completed.
- Invoice generated.
- Refund requested.
- Refund approved.
- Chargeback received.
- Payout pending.
- Payout on hold.
- Revenue share calculated.
- Tax evidence required.

### 4.6 Dispute Notifications

Examples:

- Dispute opened.
- Evidence requested.
- Creator response required.
- Mediation started.
- Appeal submitted.
- Decision issued.
- Payout hold applied.
- Refund decision finalized.

### 4.7 Creator & Partner Notifications

Examples:

- New customer install.
- Customer support issue assigned.
- Review received.
- Template quality issue detected.
- Certification renewal due.
- Revenue milestone reached.
- Policy warning issued.
- Partner SLA breach risk.

### 4.8 Enterprise Governance Notifications

Examples:

- Approval required.
- Approval delegated.
- Approval overdue.
- Policy exception requested.
- Access review due.
- Procurement review required.
- Security evidence expired.
- Region policy blocked install.

### 4.9 Customer Success Notifications

Examples:

- Adoption milestone reached.
- Outcome achieved.
- Outcome risk detected.
- Training incomplete.
- Renewal risk detected.
- Expansion opportunity detected.
- Executive review ready.

### 4.10 Marketplace Marketing & Merchandising Notifications

Examples:

- Featured collection published.
- Campaign launched.
- Sponsored placement started.
- Promotion rejected due to trust policy.
- Locale-specific campaign ready.

Marketing communication must be clearly separated from operational, security, billing, and governance messages.

---

## 5. Notification Severity Levels

Ariyo must classify notification severity.

### Informational

Low urgency updates that do not require immediate action.

Examples:

- New template version available.
- Creator added documentation.
- New localized listing published.

### Action Required

User must act to continue a workflow.

Examples:

- Approval required.
- Evidence required.
- Integration reconnect required.
- Payment method update required.

### Warning

Risk exists but no immediate containment is required.

Examples:

- Template health degraded.
- Dependency will expire soon.
- Cost trend increasing.
- Certification expires soon.

### Critical

Immediate attention required to protect customer operations or trust.

Examples:

- Unsafe automation contained.
- Template suspended.
- Data residency violation risk.
- Security incident linked to template.
- Billing fraud suspected.

### Emergency

System must alert high-priority contacts and potentially trigger containment.

Examples:

- Confirmed security exposure.
- Malicious creator activity.
- Critical enterprise policy bypass.
- High-impact marketplace outage.

---

## 6. Communication Channels

Ariyo must support multiple channels with governance.

### 6.1 In-App Notifications

Use for:

- Actionable operational events.
- Dashboard alerts.
- Approval tasks.
- Marketplace lifecycle events.

### 6.2 Email

Use for:

- Critical confirmations.
- Enterprise approvals.
- Billing notices.
- Security and compliance alerts.
- Customer-facing documentation.

### 6.3 Slack / Teams / Chat Integrations

Use for:

- Operational team alerts.
- Enterprise admin alerts.
- Creator support assignment.
- Workflow failure alerts.

### 6.4 Webhooks

Use for:

- Enterprise SIEM.
- ITSM systems.
- CRM and CS platforms.
- Procurement tools.
- Finance systems.

### 6.5 Admin Console Banners

Use for:

- Organization-wide issues.
- Policy-impacting changes.
- Trust and safety notices.
- Required admin actions.

### 6.6 Marketplace Listing Notices

Use for:

- Trust label changes.
- Certification status.
- Deprecation notices.
- Region restrictions.
- Support status.

### 6.7 Public Status / Trust Center Updates

Use for:

- High-impact marketplace incidents.
- Platform-wide service degradation.
- Public trust disclosures.

### 6.8 SMS / Phone Escalation

Use only for:

- Emergency enterprise security cases.
- Contracted incident response obligations.
- Critical operational outages.

SMS and phone escalation must be opt-in, contract-aware, and audit logged.

---

## 7. Recipient Model

Ariyo must identify recipients by role and permission, not only by email.

Recipient types:

- Customer account owner.
- Organization admin.
- Workspace admin.
- Department admin.
- AI Employee manager.
- Template installer.
- Template user.
- Approval owner.
- Security admin.
- Privacy admin.
- Procurement owner.
- Finance admin.
- Billing owner.
- Marketplace buyer.
- Creator.
- Creator team admin.
- Partner manager.
- Vendor contact.
- Support owner.
- Customer success manager.
- Ariyo Trust & Safety operator.
- Ariyo Marketplace operator.

For sensitive notifications, Ariyo must avoid sending details to users without proper access.

---

## 8. Notification Routing Rules

Routing must consider:

- Event type.
- Severity.
- Organization policy.
- Workspace policy.
- User role.
- Permission scope.
- Plan tier.
- Region.
- Locale.
- Communication preferences.
- Quiet hours.
- Escalation policy.
- Contractual SLA.
- Enterprise approval chain.
- Incident ownership.
- Creator/partner responsibility.

Ariyo must support routing rules like:

```yaml
route:
  event: marketplace.template.health.degraded
  severity: warning
  recipients:
    - workspace_admin
    - ai_employee_manager
    - creator_support_contact
  channels:
    - in_app
    - email
  escalate_after: 48h
  suppress_if:
    - duplicate_within: 6h
    - remediation_in_progress: true
```

---

## 9. Communication Preferences

Ariyo must allow user and organization-level preferences.

Preference dimensions:

- Channel preference.
- Frequency.
- Digest vs immediate.
- Language.
- Time zone.
- Quiet hours.
- Notification categories.
- Escalation contacts.
- Critical override settings.

Critical security, billing, compliance, legal, and operational messages may bypass ordinary marketing unsubscribe settings when legally and contractually appropriate.

---

## 10. Notification Templates

Every notification template must define:

- Template ID.
- Domain.
- Severity.
- Audience.
- Supported channels.
- Locales.
- Subject/title.
- Summary.
- Required context variables.
- Action button.
- Deep link.
- Risk statement.
- Evidence links.
- Suppression rules.
- Expiration logic.
- Audit policy.

Example:

```json
{
  "template_id": "marketplace_install_blocked_region_policy",
  "domain": "marketplace_installation",
  "severity": "action_required",
  "audience": ["organization_admin", "workspace_admin", "installer"],
  "channels": ["in_app", "email"],
  "locales": ["en-US", "fa-IR", "ar", "de-DE"],
  "required_context": [
    "asset_name",
    "workspace_name",
    "blocked_region",
    "required_policy",
    "next_action_url"
  ],
  "audit_required": true
}
```

---

## 11. Localization Rules

Localized notifications must follow `marketplace-localization-internationalization.md`.

Ariyo must localize:

- Language.
- Writing direction.
- Date/time.
- Currency.
- Legal terminology.
- Risk phrasing.
- Support availability.
- Region references.
- Action labels.

Ariyo must not localize in a way that changes legal meaning, trust level, certification status, pricing, or risk disclosure.

For RTL languages, notification UI must support:

- Correct alignment.
- Mirrored layout where appropriate.
- Bidirectional text safety.
- Proper handling of template names and technical IDs.

---

## 12. Enterprise Communication Governance

Enterprise customers must be able to configure:

- Who receives Marketplace install notices.
- Who receives security notices.
- Who receives billing notices.
- Who receives approval reminders.
- Who receives vendor and compliance notices.
- Which channels are allowed.
- Which events must be logged to SIEM/ITSM.
- Which notifications require acknowledgment.
- Which notifications require internal routing before user visibility.

Enterprise communication settings must be auditable.

---

## 13. Acknowledgment Requirements

Some notifications must require acknowledgment.

Examples:

- Critical security notice.
- Data residency policy conflict.
- Certification revocation for installed asset.
- Template suspension.
- Breaking update before auto-apply.
- Enterprise approval decision.
- Payout hold notice.

Acknowledgment records must include:

- User.
- Role.
- Organization.
- Timestamp.
- Notification version.
- Action taken.
- IP/device metadata where appropriate.
- Evidence snapshot.

---

## 14. Notification Suppression & Deduplication

Ariyo must prevent notification fatigue.

Suppression rules may include:

- Duplicate suppression.
- Digest grouping.
- Maintenance window suppression.
- Remediation-in-progress suppression.
- Lower-severity suppression when critical event exists.
- User preference suppression.
- Enterprise policy suppression.

Ariyo must never suppress critical security, billing, compliance, or trust notices without a policy-backed reason.

---

## 15. Digests

Ariyo must support scheduled digests.

Digest types:

- Marketplace admin digest.
- Creator performance digest.
- Partner delivery digest.
- Template health digest.
- Billing and payout digest.
- Trust and safety digest.
- Enterprise governance digest.
- Customer success digest.

Digest content must prioritize action items and risks before vanity metrics.

---

## 16. Creator-Customer Communication Rules

Ariyo must govern direct or semi-direct communication between creators and customers.

Rules:

- Creators cannot see customer-sensitive details unless permitted.
- Customers cannot be spammed by creators.
- Creator outreach must respect installed asset relationship.
- Support-related communication must remain case-linked.
- Marketing messages require consent and channel permission.
- Enterprise customers may disable creator direct messaging.
- Ariyo may mediate or mask identities where needed.

Forbidden:

- Creator contacting customer outside allowed channels for payment bypass.
- Creator pressuring customer for positive review.
- Creator sending unapproved migration instructions.
- Creator requesting credentials.
- Creator bypassing dispute process.

---

## 17. Trust & Safety Communication Rules

Trust and safety notifications must be precise and non-alarmist.

They must include:

- What happened.
- What Ariyo did.
- Whether customer action is required.
- Which assets are affected.
- Whether data was involved.
- Whether billing or permissions changed.
- Whether support is available.
- Next review timeline.

Ariyo must avoid vague messages like:

- “Something went wrong.”
- “Your template is under review” without reason category.
- “Security issue detected” without customer-safe context.

---

## 18. Billing & Financial Communication Rules

Billing notifications must be clear and reconcilable.

They must include:

- Order ID.
- Asset ID.
- Customer account.
- Amount.
- Currency.
- Tax information where appropriate.
- Billing period.
- Entitlement impact.
- Refund/dispute link.
- Invoice link.

Creator payout notifications must include:

- Payout period.
- Gross revenue.
- Revenue share.
- Refunds.
- Chargebacks.
- Holds.
- Taxes/withholding.
- Net payout.
- Payout status.

---

## 19. Support Communication Rules

Support notifications must include:

- Case ID.
- Severity.
- Owner.
- SLA.
- Next step.
- Customer-visible status.
- Creator/partner responsibility if applicable.
- Linked asset.
- Linked incident if any.

Support notifications must not expose internal notes to customers, creators, or partners unless explicitly marked external.

---

## 20. Notification State Model

Notification states:

- `draft`
- `scheduled`
- `queued`
- `sent`
- `delivered`
- `opened`
- `acknowledged`
- `acted`
- `dismissed`
- `suppressed`
- `expired`
- `failed`
- `escalated`
- `cancelled`

State transitions must be auditable for critical notifications.

---

## 21. Communication Object Model

### MarketplaceNotification

```ts
type MarketplaceNotification = {
  id: string;
  event_id: string;
  template_id: string;
  domain: NotificationDomain;
  severity: NotificationSeverity;
  audience_type: string;
  recipient_user_id?: string;
  recipient_role?: string;
  organization_id: string;
  workspace_id?: string;
  asset_id?: string;
  creator_id?: string;
  partner_id?: string;
  locale: string;
  channel: NotificationChannel;
  state: NotificationState;
  subject: string;
  body_summary: string;
  action_url?: string;
  evidence_url?: string;
  created_at: string;
  sent_at?: string;
  delivered_at?: string;
  acknowledged_at?: string;
  expires_at?: string;
};
```

### CommunicationPreference

```ts
type CommunicationPreference = {
  user_id?: string;
  organization_id?: string;
  workspace_id?: string;
  domains: string[];
  channels: NotificationChannel[];
  digest_frequency?: "none" | "daily" | "weekly";
  locale: string;
  timezone: string;
  quiet_hours?: {
    start: string;
    end: string;
  };
  critical_override_enabled: boolean;
};
```

### NotificationAuditRecord

```ts
type NotificationAuditRecord = {
  notification_id: string;
  action: string;
  actor_id?: string;
  actor_role?: string;
  timestamp: string;
  previous_state?: string;
  next_state?: string;
  metadata: Record<string, unknown>;
};
```

---

## 22. API Contract

### List Notifications

`GET /api/v1/marketplace/notifications`

Query parameters:

- `domain`
- `severity`
- `state`
- `workspace_id`
- `asset_id`
- `channel`
- `from`
- `to`

### Create Notification Event

`POST /api/v1/marketplace/notification-events`

```json
{
  "event_type": "marketplace.template.health.degraded",
  "organization_id": "org_123",
  "workspace_id": "ws_456",
  "asset_id": "asset_789",
  "severity": "warning",
  "context": {
    "health_score": 61,
    "previous_health_score": 88,
    "main_cause": "integration_disconnected"
  }
}
```

### Acknowledge Notification

`POST /api/v1/marketplace/notifications/{notification_id}/acknowledge`

```json
{
  "acknowledged_by": "user_123",
  "comment": "Security team reviewed and approved reconnect plan."
}
```

### Update Communication Preferences

`PATCH /api/v1/marketplace/communication-preferences`

```json
{
  "domains": ["trust_safety", "billing", "approval"],
  "channels": ["email", "in_app", "webhook"],
  "digest_frequency": "daily",
  "locale": "fa-IR",
  "timezone": "Asia/Tehran"
}
```

### Send Test Notification

`POST /api/v1/marketplace/notifications/test`

```json
{
  "template_id": "marketplace_install_approved",
  "channel": "email",
  "locale": "en-US",
  "recipient_user_id": "user_123"
}
```

---

## 23. Webhooks

Ariyo must emit webhooks for enterprise systems.

Events:

- `marketplace.notification.created`
- `marketplace.notification.sent`
- `marketplace.notification.delivered`
- `marketplace.notification.acknowledged`
- `marketplace.notification.failed`
- `marketplace.notification.escalated`
- `marketplace.notification.suppressed`
- `marketplace.communication.preference.updated`
- `marketplace.digest.generated`

Webhook payloads must include only permission-safe data.

---

## 24. Frontend Requirements

Frontend must include:

- Notification center.
- Inbox filters.
- Domain grouping.
- Severity indicators.
- Action buttons.
- Acknowledgment flow.
- Digest settings.
- Enterprise routing settings.
- Creator communication center.
- Customer support communication timeline.
- Trust/safety alert banners.
- Billing communication center.
- Localized notification rendering.
- RTL-safe notification UI.
- Admin audit view.

Frontend must clearly separate:

- Operational alerts.
- Marketing messages.
- Billing notices.
- Security notices.
- Support cases.
- Approval tasks.

---

## 25. Backend Requirements

Backend must include:

- Notification event ingestion.
- Template rendering service.
- Localization service.
- Recipient resolution service.
- Routing engine.
- Suppression engine.
- Delivery provider abstraction.
- Digest generator.
- Escalation engine.
- Audit logger.
- Preference store.
- Webhook delivery service.
- Notification analytics pipeline.

Backend must preserve notification template versions for auditability.

---

## 26. Basic / Pro / Smart Rules

### Basic

Basic must support:

- Essential in-app and email notifications.
- Install/update messages.
- Basic billing notices.
- Simple support case messages.
- Limited creator communication.
- Minimal digest settings.

Basic must avoid overwhelming users with advanced governance noise.

### Pro

Pro must support:

- Workspace-level routing.
- Approval notifications.
- Creator/customer communication.
- Support escalation.
- Health and dependency alerts.
- Team digests.
- Slack/Teams integration where enabled.

Pro must help operational teams manage Marketplace assets reliably.

### Smart

Smart must support:

- Enterprise routing policies.
- Advanced escalation.
- SIEM/ITSM webhooks.
- Security, compliance, and region alerts.
- Acknowledgment requirements.
- Custom digests.
- AI-generated summaries.
- Localization governance.
- Audit-grade communication evidence.

Smart must provide full communication governance for complex enterprise environments.

---

## 27. AI Notification Assistant

Ariyo may include an AI Notification Assistant to help:

- Summarize complex Marketplace events.
- Draft customer-safe messages.
- Draft creator instructions.
- Explain why a notification was sent.
- Recommend escalation paths.
- Suggest suppression rules.
- Translate/localize messages.
- Identify missing recipients.

AI Assistant must not:

- Send critical notifications without human/system authorization.
- Invent facts.
- Weaken legal, safety, or billing wording.
- Hide uncertainty.
- Override enterprise routing policies.
- Expose sensitive data to unauthorized users.

---

## 28. Observability Events

Track:

- `notification_event_created`
- `notification_recipient_resolved`
- `notification_template_rendered`
- `notification_sent`
- `notification_delivered`
- `notification_opened`
- `notification_acknowledged`
- `notification_action_clicked`
- `notification_suppressed`
- `notification_failed`
- `notification_escalated`
- `digest_generated`
- `communication_preference_updated`
- `critical_alert_acknowledgment_overdue`

---

## 29. KPIs

Ariyo must measure:

- Critical notification delivery rate.
- Critical acknowledgment rate.
- Time to acknowledgment.
- Time to action.
- Notification failure rate.
- Escalation success rate.
- Duplicate notification rate.
- Notification fatigue score.
- Unread critical alert count.
- Support response improvement from notifications.
- Dispute evidence response rate.
- Billing notice resolution rate.
- Creator response SLA.
- Enterprise routing accuracy.
- Localization quality score.
- Wrong-recipient incident count.
- Suppressed-critical-event count.

---

## 30. Security & Privacy Rules

Ariyo must:

- Permission-scope notification content.
- Avoid sensitive data in email subjects.
- Avoid exposing secret tokens or credentials.
- Redact customer data in creator notifications.
- Log delivery and access for critical notifications.
- Support enterprise retention policies.
- Encrypt sensitive communication records.
- Prevent cross-tenant notification leaks.
- Validate webhook endpoints.
- Rate-limit outbound notifications.

---

## 31. Compliance Rules

Notifications may be compliance evidence.

Ariyo must preserve:

- Critical security notices.
- Approval requests.
- Approval decisions.
- Billing notices.
- Dispute notices.
- Trust/safety notices.
- Vendor evidence requests.
- Data residency alerts.

Retention must follow enterprise policy and legal obligations.

---

## 32. Forbidden Patterns

Ariyo must not:

- Send sensitive customer data to creators without permission.
- Hide critical risk inside digest-only communication.
- Use sponsored language in operational notifications.
- Use false urgency to drive purchases.
- Suppress security notices for engagement reasons.
- Notify only the installer when admins must know.
- Notify admins without telling affected users when user action is required.
- Send untranslated legal-risk messages in unsupported locales without fallback.
- Let creators spam customers.
- Let marketing unsubscribe disable required billing/security/compliance notices.
- Use AI-generated messages without grounding in actual event data.
- Lose audit trail for critical notifications.
- Send different legal meaning across locales.
- Expose internal investigation details to unauthorized parties.

---

## 33. Golden Rule

Every Ariyo Marketplace notification must answer five questions:

1. What happened?
2. Why does it matter?
3. Who is responsible?
4. What should happen next?
5. Where is the evidence?

If a notification cannot answer those questions, it is not ready to send.
