# Ariyo Marketplace Template Health Monitoring Skill

## Core Contract

Ariyo Marketplace Template Health Monitoring is not a passive uptime dashboard.

It is the governed post-install health, reliability, dependency, cost, safety, quality, customer-impact, incident-correlation, and remediation system that continuously determines whether installed Marketplace templates are still safe, valuable, compatible, affordable, compliant, and operational inside each customer environment.

Ariyo must not treat a template as healthy simply because it was approved, installed, or recently executed.

Ariyo must continuously prove that every installed template remains healthy after dependencies change, integrations break, model behavior shifts, customer data changes, costs drift, permissions mutate, policies update, vendors degrade, incidents occur, and customer outcomes evolve.

---

## 1. Purpose

This skill defines how Ariyo monitors the health of Marketplace assets after installation.

It applies to:

- Public Marketplace templates
- Private catalog templates
- Internal organization templates
- AI Employee templates
- Agent Team templates
- Workflow templates
- Knowledge packs
- GEO templates
- Integration bundles
- Partner implementation templates
- Enterprise-approved marketplace assets
- Migrated or cloned templates
- Sponsored marketplace assets
- Deprecated templates still installed by customers

The system must answer:

1. Is this installed template working?
2. Is it still compatible with its dependencies?
3. Is it producing customer value?
4. Is it failing silently?
5. Is it costing more than expected?
6. Is it producing unsafe, low-quality, or non-compliant outputs?
7. Is the problem caused by the template, creator, dependency, customer environment, model provider, integration provider, region policy, permission change, or product regression?
8. Should Ariyo notify the customer, creator, partner, admin, customer success, trust team, or engineering?
9. Should Ariyo auto-remediate, pause, rollback, downgrade, quarantine, reroute, or escalate?

---

## 2. Strategic Positioning

Marketplace health monitoring connects the following Ariyo systems:

- Marketplace Template Dependency Registry
- Marketplace Installation & Entitlements
- Marketplace Quality Ranking System
- Marketplace Trust & Safety Operations
- Marketplace Policy Enforcement Rules
- Marketplace Compliance Evidence Center
- Marketplace Data Residency & Region Controls
- Marketplace Internal Template Governance
- AI Agent Incident Response
- AI Agent Observability & Tracing
- AI Agent Versioning & Change Management
- AI Agent Evaluation & Benchmarking
- Reliability & SLA
- Observability, Analytics & Events
- Customer Success Playbooks
- Operations Command Center
- Feature Flags & Rollout System
- AI Cost Control
- Revenue Operations
- Enterprise Audit Reports

Template health is not isolated from business health.

A template that runs without technical errors but fails to create outcomes is unhealthy.

A template that creates outcomes but causes unsafe behavior is unhealthy.

A template that performs well but violates region policy is unhealthy.

A template that works only because the customer overpays for AI execution is unhealthy.

---

## 3. Health Monitoring Principles

### 3.1 Health is continuous

Approval and installation are point-in-time decisions.

Health is a continuous operational state.

### 3.2 Health is customer-contextual

A template can be healthy for one customer and unhealthy for another due to:

- Plan level
- Region policy
- Enabled integrations
- Permission scope
- Data source freshness
- AI model routing
- Cost budget
- Industry risk
- Compliance requirements
- Workflow volume
- Admin settings
- User maturity

### 3.3 Health is multi-dimensional

Ariyo must not use a single uptime metric.

Template health must include:

- Runtime health
- Dependency health
- Integration health
- Model health
- Knowledge health
- Safety health
- Cost health
- Outcome health
- Compliance health
- Permission health
- Version health
- Creator support health
- Customer impact health

### 3.4 Health must be explainable

When Ariyo marks a template as degraded, unhealthy, paused, quarantined, or recovered, the reason must be visible to authorized stakeholders.

### 3.5 Health must drive action

Health monitoring must trigger:

- Alerts
- Customer notifications
- Creator notifications
- Partner tasks
- Admin review
- Auto-remediation
- Rollback
- Dependency refresh
- Policy enforcement
- Ranking penalties
- Marketplace visibility changes
- Customer success playbooks
- Incident response

---

## 4. Health Scope

Ariyo must monitor health at several levels.

### 4.1 Global template health

Health across all installed instances of a Marketplace asset.

Examples:

- A creator ships a broken update.
- A model provider change degrades template output.
- A vendor API outage breaks all installations.
- A policy violation appears across many customers.

### 4.2 Customer installation health

Health of one template installed in one organization or workspace.

Examples:

- Customer revoked an integration token.
- Customer region policy blocks a model provider.
- Customer knowledge source is stale.
- Customer budget threshold was exceeded.

### 4.3 Version-specific health

Health of a specific template version.

Examples:

- Version 2.4.0 has high failure rate.
- Version 2.3.2 remains stable.
- New version increases cost by 40%.

### 4.4 Dependency-specific health

Health of dependencies used by templates.

Examples:

- Google Sheets connector broke.
- HubSpot permissions changed.
- Claude model profile deprecated.
- Knowledge index is not refreshing.

### 4.5 Creator portfolio health

Health across all templates from one creator or partner.

Examples:

- Creator templates show high support burden.
- Partner templates have repeated setup failures.
- Agency-authored templates perform well for Pro customers but poorly for Basic.

---

## 5. Core Objects

### 5.1 TemplateHealthProfile

```ts
export type TemplateHealthProfile = {
  templateId: string;
  templateVersionId?: string;
  scope: 'global_template' | 'customer_installation' | 'version' | 'dependency' | 'creator_portfolio';
  customerId?: string;
  workspaceId?: string;
  creatorId?: string;
  healthStatus: TemplateHealthStatus;
  healthScore: number;
  healthGrade: 'excellent' | 'good' | 'watch' | 'degraded' | 'unhealthy' | 'critical' | 'paused' | 'quarantined';
  dimensions: TemplateHealthDimensions;
  activeIncidents: string[];
  activeWarnings: TemplateHealthWarning[];
  recommendedActions: TemplateHealthAction[];
  lastEvaluatedAt: string;
  nextEvaluationAt?: string;
  evidence: TemplateHealthEvidence[];
};
```

### 5.2 TemplateHealthStatus

```ts
export type TemplateHealthStatus =
  | 'healthy'
  | 'watching'
  | 'degraded'
  | 'unhealthy'
  | 'critical'
  | 'paused'
  | 'quarantined'
  | 'recovering'
  | 'unknown';
```

### 5.3 TemplateHealthDimensions

```ts
export type TemplateHealthDimensions = {
  runtime: DimensionScore;
  dependencies: DimensionScore;
  integrations: DimensionScore;
  aiModels: DimensionScore;
  knowledge: DimensionScore;
  safety: DimensionScore;
  cost: DimensionScore;
  outcomes: DimensionScore;
  compliance: DimensionScore;
  permissions: DimensionScore;
  versioning: DimensionScore;
  customerImpact: DimensionScore;
  creatorSupport: DimensionScore;
};

export type DimensionScore = {
  score: number;
  status: 'healthy' | 'watch' | 'degraded' | 'unhealthy' | 'critical' | 'unknown';
  reasonCodes: string[];
  lastSignalAt?: string;
};
```

### 5.4 TemplateHealthWarning

```ts
export type TemplateHealthWarning = {
  warningId: string;
  severity: 'info' | 'low' | 'medium' | 'high' | 'critical';
  category:
    | 'runtime_failure'
    | 'dependency_drift'
    | 'broken_integration'
    | 'model_degradation'
    | 'knowledge_staleness'
    | 'cost_anomaly'
    | 'safety_risk'
    | 'compliance_gap'
    | 'permission_mismatch'
    | 'customer_impact'
    | 'creator_support_gap'
    | 'version_risk';
  message: string;
  affectedCustomers?: number;
  affectedInstallations?: number;
  firstSeenAt: string;
  lastSeenAt: string;
  suggestedAction: string;
};
```

### 5.5 TemplateHealthAction

```ts
export type TemplateHealthAction = {
  actionId: string;
  actionType:
    | 'notify_customer'
    | 'notify_creator'
    | 'notify_partner'
    | 'open_incident'
    | 'pause_template'
    | 'quarantine_template'
    | 'rollback_version'
    | 'reroute_model'
    | 'refresh_knowledge_index'
    | 'reconnect_integration'
    | 'reduce_rate_limit'
    | 'disable_high_risk_capability'
    | 'trigger_review'
    | 'apply_ranking_penalty'
    | 'remove_from_recommendations'
    | 'request_creator_fix'
    | 'customer_success_outreach';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  ownerType: 'system' | 'customer_admin' | 'creator' | 'partner' | 'ariyo_ops' | 'trust_safety' | 'engineering' | 'customer_success';
  autoExecutable: boolean;
  requiresApproval: boolean;
  dueAt?: string;
};
```

---

## 6. Template Health Score

Ariyo should compute a weighted health score for every relevant scope.

Example default formula:

```text
template_health_score =
  runtime_health_score * 0.16
+ dependency_health_score * 0.14
+ integration_health_score * 0.10
+ model_health_score * 0.10
+ knowledge_health_score * 0.08
+ safety_health_score * 0.14
+ cost_health_score * 0.08
+ outcome_health_score * 0.12
+ compliance_health_score * 0.08
- incident_penalty
- customer_impact_penalty
- repeated_failure_penalty
```

Weights may differ by asset type and customer plan.

Ariyo must version health score formulas.

```ts
export type TemplateHealthScoreFormula = {
  formulaId: string;
  version: string;
  assetType: string;
  plan?: 'basic' | 'pro' | 'smart' | 'enterprise';
  weights: Record<string, number>;
  penalties: Record<string, number>;
  createdAt: string;
  active: boolean;
};
```

---

## 7. Runtime Health

Runtime health measures whether the template executes successfully.

Signals:

- Successful run rate
- Failed run rate
- Timeout rate
- Retry rate
- Queue delay
- Execution duration
- Tool-call failure rate
- Partial completion rate
- Error recurrence
- Human escalation rate
- Step-level failure concentration
- Background job failure
- Webhook delivery failure

A template is runtime-unhealthy when:

- It repeatedly fails in normal usage.
- It times out beyond plan or SLA limits.
- It produces partial outputs without surfacing the issue.
- It repeatedly requires manual correction.
- It silently skips required steps.

Runtime failures must include trace IDs.

```ts
export type TemplateRuntimeHealthSignal = {
  templateId: string;
  installationId: string;
  runId: string;
  workflowStepId?: string;
  success: boolean;
  errorCode?: string;
  durationMs: number;
  retryCount: number;
  traceId: string;
  occurredAt: string;
};
```

---

## 8. Dependency Drift Monitoring

Dependency drift occurs when a template's assumptions no longer match its environment.

Examples:

- Required integration was disconnected.
- Permission scope changed.
- Model profile was deprecated.
- Knowledge source schema changed.
- API endpoint changed.
- Region policy changed.
- Vendor trust status changed.
- Billing entitlement expired.
- Feature flag changed behavior.
- Template version expects a newer runtime.

Ariyo must compare:

- Declared dependency manifest
- Current customer environment
- Current Ariyo platform capabilities
- Current vendor/provider status
- Current policy/region requirements
- Current entitlement state

```ts
export type DependencyDriftSignal = {
  dependencyId: string;
  templateId: string;
  installationId?: string;
  driftType:
    | 'missing_dependency'
    | 'version_mismatch'
    | 'permission_changed'
    | 'integration_disconnected'
    | 'model_deprecated'
    | 'region_policy_changed'
    | 'vendor_suspended'
    | 'billing_entitlement_missing'
    | 'schema_changed'
    | 'feature_flag_changed';
  severity: 'low' | 'medium' | 'high' | 'critical';
  detectedAt: string;
  remediation?: string;
};
```

Dependency drift must affect:

- Health score
- Install/update eligibility
- Migration eligibility
- Marketplace ranking
- Customer notification
- Creator dashboard
- Incident correlation

---

## 9. Broken Integration Monitoring

Ariyo must detect broken integrations before the customer discovers them through failure.

Integration health signals:

- OAuth token expired
- API authorization failure
- Webhook verification failure
- Rate limit exceeded
- API schema mismatch
- Missing account permissions
- Integration provider outage
- Customer disabled integration
- Admin revoked connector
- Integration app no longer approved
- Region or compliance block

Integration-specific health must be visible to:

- Customer admins
- Template owners
- Creator support teams
- Ariyo operations

Ariyo should avoid exposing sensitive customer data to creators.

Creator-visible message example:

> Several installations show CRM connector failures due to authorization changes. Customers must reconnect the integration. No customer data is exposed.

Customer-visible message example:

> This template cannot complete its CRM step because the HubSpot connection needs to be reauthorized by an admin.

---

## 10. AI Model Health & Degradation

Templates depend on model behavior.

Ariyo must monitor whether AI model routing, provider behavior, output quality, latency, cost, or safety behavior has changed.

Signals:

- Model latency increase
- Model error rate increase
- Tool-call accuracy drop
- Structured output failure
- Hallucination rate increase
- Refusal rate increase
- Safety policy intervention increase
- Token cost increase
- Context truncation increase
- Reasoning quality drop
- Evaluation benchmark regression
- Provider deprecation notice
- Provider region unavailability

```ts
export type TemplateModelHealthSignal = {
  templateId: string;
  modelProfileId: string;
  provider: 'openai' | 'anthropic' | 'google' | 'deepseek' | 'other';
  metric:
    | 'latency'
    | 'error_rate'
    | 'quality_score'
    | 'tool_call_success'
    | 'structured_output_success'
    | 'safety_intervention_rate'
    | 'cost_per_successful_run'
    | 'refusal_rate'
    | 'context_truncation_rate';
  value: number;
  baselineValue?: number;
  status: 'normal' | 'watch' | 'degraded' | 'critical';
  observedAt: string;
};
```

Model degradation may trigger:

- Reroute to backup model
- Reduce template visibility
- Require re-evaluation
- Notify creator
- Notify Smart/Enterprise admins
- Open AI agent incident
- Apply cost control policy

---

## 11. Knowledge Health

Templates using knowledge sources must monitor knowledge health.

Signals:

- Source disconnected
- Index stale
- Embedding job failed
- Document parsing failed
- Permission mismatch
- Data freshness below threshold
- Retrieval quality drop
- Low citation coverage
- Missing required source
- Source deleted
- Knowledge package version mismatch
- High answer-without-evidence rate

Knowledge-related templates must not be marked healthy if they rely on stale or missing knowledge.

```ts
export type KnowledgeHealthSignal = {
  knowledgeSourceId: string;
  templateId: string;
  installationId: string;
  freshnessStatus: 'fresh' | 'stale' | 'expired' | 'unknown';
  retrievalQualityScore?: number;
  citationCoverageRate?: number;
  lastIndexedAt?: string;
  lastFailureAt?: string;
  issueCodes: string[];
};
```

---

## 12. Safety Health

Safety health measures whether the template behaves safely.

Signals:

- Unsafe output rate
- Policy intervention rate
- Human review escalation rate
- Sensitive data exposure warning
- Tool action blocked by permission policy
- User complaint severity
- Security incident association
- Prompt injection detection
- Jailbreak attempts
- Data exfiltration risk
- High-risk autonomous action attempts
- Misleading recommendation detection
- Legal/financial/medical risk warnings

A template with high business value but unsafe behavior must be considered unhealthy.

Safety health must feed:

- Trust & Safety Operations
- Policy Enforcement Rules
- Ranking system
- Review governance
- Customer notifications
- Creator coaching
- Incident response

---

## 13. Cost Health

Ariyo must detect cost anomalies at template, installation, customer, creator, and model profile levels.

Signals:

- Cost per run
- Cost per successful run
- Cost per outcome
- Token usage drift
- Tool/API cost drift
- Unexpected model upgrade
- Excessive retries
- Background job cost spikes
- Customer budget threshold warnings
- Cost variance by version
- Sponsored asset cost quality

```ts
export type TemplateCostHealthSignal = {
  templateId: string;
  installationId: string;
  periodStart: string;
  periodEnd: string;
  costPerRun: number;
  costPerSuccessfulRun: number;
  baselineCostPerSuccessfulRun?: number;
  anomalyDetected: boolean;
  budgetPolicyStatus: 'within_budget' | 'near_limit' | 'exceeded' | 'blocked';
  topCostDrivers: string[];
};
```

Cost anomaly actions:

- Notify admin
- Suggest model downgrade
- Disable expensive optional step
- Increase batching
- Reduce background frequency
- Require approval for Smart execution
- Pause runaway workflow
- Trigger finance review

---

## 14. Outcome Health

Outcome health measures whether the template produces useful business results.

Signals:

- Outcome completion rate
- Time to first value
- Install-to-activation rate
- Customer acceptance rate
- Task completion rate
- Saved manual time estimate
- User correction rate
- Uninstall rate
- Refund/request rate
- Repeat usage
- Customer rating trend
- CSAT after template execution
- Business KPI impact if configured

A technically healthy template with poor outcomes should be ranked lower and flagged for creator improvement.

Outcome health must be segmented by:

- Customer plan
- Industry
- Template category
- Customer maturity
- Integration availability
- Installation path
- Version

---

## 15. Compliance Health

Compliance health verifies that installed templates remain aligned with customer policies and marketplace compliance rules.

Signals:

- Region compatibility drift
- Data residency violation risk
- Retention mismatch
- Vendor approval expired
- Evidence expired
- Subprocessor changed
- Policy attestation expired
- Legal restriction added
- Enterprise procurement approval expired
- Customer private catalog policy changed
- Restricted action attempted

Compliance drift must be visible in audit reports and evidence center.

A template may be functionally healthy but compliance-unhealthy.

---

## 16. Permission Health

Permission health monitors whether granted permissions still match the template's declared need and current behavior.

Signals:

- Permission missing
- Permission overbroad
- Permission unused
- Permission changed
- Tool tries to access undeclared capability
- Customer revoked permission
- Role no longer authorized
- Admin policy changed
- Agent attempts restricted action
- Permission scope incompatible with plan

Permission health must enforce least privilege.

A template should be flagged when it requests or uses permissions beyond its declared purpose.

---

## 17. Version Health

Version health monitors the installed version lifecycle.

Signals:

- Version deprecated
- Version security-patched
- Version rollback recommended
- Version no longer supported by creator
- Version incompatible with dependency changes
- Version evaluation score degraded
- Version has high incident association
- New version available
- Auto-update blocked by enterprise policy
- Customer stuck on old version

Version health must integrate with versioning and change management.

---

## 18. Customer Impact Model

Ariyo must estimate customer impact when a template degrades.

```ts
export type TemplateCustomerImpact = {
  impactId: string;
  templateId: string;
  installationId?: string;
  customerId?: string;
  affectedUsers: number;
  affectedWorkflows: number;
  affectedBusinessProcesses: string[];
  severity: 'none' | 'minor' | 'moderate' | 'major' | 'critical';
  customerVisible: boolean;
  revenueImpactEstimate?: number;
  complianceImpact?: boolean;
  safetyImpact?: boolean;
  detectedAt: string;
};
```

Impact scoring must consider:

- Business-critical workflows
- Number of affected users
- Customer tier
- Plan level
- SLA commitments
- Enterprise deployment scope
- Safety/compliance relevance
- Financial impact
- Manual workaround availability

---

## 19. Health States

### 19.1 Healthy

Template is operating within expected thresholds.

### 19.2 Watching

Minor drift or early warning exists, but no customer-impacting degradation is confirmed.

### 19.3 Degraded

Template is working partially or below expected quality, but not unsafe.

### 19.4 Unhealthy

Template repeatedly fails, produces poor outcomes, or requires intervention.

### 19.5 Critical

Template is causing serious customer impact, safety risk, compliance risk, or widespread failure.

### 19.6 Paused

Template execution is temporarily disabled for selected installations or globally.

### 19.7 Quarantined

Template is isolated due to safety, security, compliance, or severe trust risk.

### 19.8 Recovering

Remediation was applied and the system is validating stability.

### 19.9 Unknown

Insufficient signals exist. Unknown must not be treated as healthy for high-risk assets.

---

## 20. Auto-Remediation

Ariyo should support safe auto-remediation for low-risk and well-understood failures.

Allowed examples:

- Retry transient failures
- Refresh stale index
- Rotate to backup model profile
- Disable optional non-critical step
- Reduce background job frequency
- Notify customer to reconnect integration
- Re-run validation after dependency update
- Apply feature flag rollback
- Pause only affected installation

Restricted remediation requiring approval:

- Granting new permissions
- Changing data region
- Switching to higher-risk model provider
- Increasing budget limit
- Enabling autonomous tool execution
- Updating enterprise-approved template version
- Re-enabling quarantined template
- Changing retention policy

```ts
export type AutoRemediationPolicy = {
  policyId: string;
  issueCategory: string;
  allowedActions: string[];
  requiresApprovalFor: string[];
  maxAttempts: number;
  cooldownMinutes: number;
  customerNotificationRequired: boolean;
  auditRequired: boolean;
};
```

---

## 21. Incident Correlation

Health monitoring must correlate template issues with incidents.

Correlation sources:

- AI agent incident response
- Integration provider status
- Model provider failures
- Ariyo platform incidents
- Customer-specific configuration changes
- Vendor enforcement actions
- Region policy changes
- Template version release
- Feature flag rollout
- Security alerts
- Cost anomaly alerts

```ts
export type TemplateIncidentCorrelation = {
  correlationId: string;
  templateId: string;
  incidentId: string;
  confidence: number;
  correlationType:
    | 'same_error_signature'
    | 'same_dependency'
    | 'same_version'
    | 'same_model_profile'
    | 'same_integration'
    | 'same_region'
    | 'same_creator'
    | 'same_feature_flag'
    | 'same_customer_policy_change';
  evidence: string[];
  createdAt: string;
};
```

---

## 22. Notification Rules

Ariyo must avoid both silence and alert fatigue.

### 22.1 Customer notifications

Notify customer admins when:

- Template is customer-impacting
- Admin action is required
- Cost budget is at risk
- Compliance status changed
- Integration reconnection is needed
- Template was paused or quarantined
- Version update is required

### 22.2 Creator notifications

Notify creators when:

- Global template health degrades
- Multiple installations fail
- Version is associated with incidents
- Support burden increases
- Required fix is requested
- Ranking penalty is applied due to health

### 22.3 Partner notifications

Notify partners when:

- Partner-installed asset fails
- Customer implementation needs intervention
- SLA is at risk
- Partner support task is assigned

### 22.4 Internal notifications

Notify Ariyo teams when:

- Widespread degradation occurs
- Safety/compliance risk appears
- Enterprise customer impact is high
- Auto-remediation fails
- Health signals indicate platform regression

---

## 23. Dashboards

### 23.1 Customer admin dashboard

Must show:

- Installed template health status
- Warnings requiring action
- Broken integrations
- Cost alerts
- Compliance alerts
- Version update requirements
- Impacted workflows
- Suggested remediation
- Audit trail

### 23.2 Creator dashboard

Must show:

- Global template health
- Version health
- Failure patterns
- Support burden
- Outcome health
- Cost health summary
- Improvement suggestions
- Incident associations
- Ranking impact

Do not expose customer-sensitive details.

### 23.3 Ariyo operations dashboard

Must show:

- Global marketplace health
- Top unhealthy templates
- Incident clusters
- Creator risk clusters
- Dependency outage map
- Model degradation map
- Customer impact heatmap
- Auto-remediation status
- SLA risk
- Trust & Safety escalations

### 23.4 Enterprise audit dashboard

Must show:

- Health history
- Compliance health
- Region health
- Vendor health impact
- Permission drift
- Evidence links
- Exportable reports

---

## 24. Basic / Pro / Smart Rules

### 24.1 Basic

Basic customers need simple, low-noise health monitoring.

Rules:

- Show only actionable warnings.
- Avoid complex diagnostics.
- Prefer safe templates with low dependency complexity.
- Auto-pause runaway cost risks.
- Notify when reconnection or upgrade is needed.
- Do not expose advanced remediation unless required.

Basic health priorities:

- Is it working?
- Is it safe?
- Is it affordable?
- Does it need admin action?

### 24.2 Pro

Pro customers need operational health monitoring.

Rules:

- Show workflow-level and integration-level health.
- Support team notifications.
- Provide retry/remediation controls.
- Integrate with customer success and operations dashboard.
- Track outcome health and support burden.

Pro health priorities:

- Are workflows reliable?
- Are integrations healthy?
- Is the template driving team outcomes?
- Are incidents contained quickly?

### 24.3 Smart

Smart customers need advanced AI, automation, compliance, and cost health.

Rules:

- Show full AI model health.
- Show dependency graph health.
- Show cost per outcome.
- Support region/compliance health.
- Support advanced auto-remediation with approval gates.
- Correlate with incidents and audit evidence.
- Provide predictive degradation warnings.

Smart health priorities:

- Is the template safe at scale?
- Is model behavior still acceptable?
- Are costs and compliance controlled?
- Can the system remediate without introducing risk?

---

## 25. Marketplace Ranking Integration

Health must affect ranking.

Healthy templates may gain ranking confidence.

Unhealthy templates may receive:

- Search demotion
- Recommendation removal
- Sponsored listing disablement
- Marketplace warning label
- Install blocking
- Version-specific warning
- Creator quality score penalty

Ranking must not hide health risk.

Sponsored templates must never bypass health demotion.

---

## 26. Installation & Update Gates

Ariyo must use health monitoring as a gate.

Block install when:

- Template is quarantined
- Required dependency is unhealthy
- Region compatibility is broken
- Vendor is suspended
- Version has critical incidents
- Required evidence expired for enterprise customer
- Model profile is unavailable
- Cost risk exceeds customer policy

Warn before install when:

- Health is watching or degraded
- Creator support is slow
- Minor dependency drift exists
- Version update is pending
- Customer environment lacks optional dependencies

Block update when:

- New version has poor health
- Migration simulation fails
- Enterprise approval is required
- Dependency remapping fails

---

## 27. API Contract

### 27.1 Get template health

`GET /api/v1/marketplace/templates/{templateId}/health`

Response:

```json
{
  "templateId": "tpl_123",
  "healthStatus": "degraded",
  "healthScore": 72,
  "healthGrade": "watch",
  "dimensions": {
    "runtime": { "score": 91, "status": "healthy", "reasonCodes": [] },
    "dependencies": { "score": 62, "status": "degraded", "reasonCodes": ["integration_disconnected"] },
    "cost": { "score": 80, "status": "watch", "reasonCodes": ["cost_per_successful_run_increased"] }
  },
  "activeWarnings": [
    {
      "warningId": "warn_123",
      "severity": "medium",
      "category": "broken_integration",
      "message": "Some installations require CRM reconnection.",
      "suggestedAction": "Notify affected customer admins."
    }
  ],
  "lastEvaluatedAt": "2026-06-19T00:00:00Z"
}
```

### 27.2 Get installation health

`GET /api/v1/marketplace/installations/{installationId}/health`

Must be permission-scoped to the customer environment.

### 27.3 List unhealthy templates

`GET /api/v1/marketplace/health/unhealthy`

Query params:

- `severity`
- `category`
- `creator_id`
- `customer_id`
- `plan`
- `region`
- `dependency_id`
- `version_id`

### 27.4 Trigger health evaluation

`POST /api/v1/marketplace/templates/{templateId}/health/evaluate`

Used by admins, system jobs, and post-update checks.

### 27.5 Apply remediation

`POST /api/v1/marketplace/health/actions/{actionId}/execute`

Must enforce approval and permission rules.

### 27.6 Acknowledge warning

`POST /api/v1/marketplace/health/warnings/{warningId}/acknowledge`

Must record actor, timestamp, and scope.

### 27.7 Export health report

`POST /api/v1/marketplace/health/reports/export`

Supports enterprise audit and compliance reporting.

---

## 28. Webhooks

Ariyo should emit webhooks for:

- `template.health.changed`
- `template.health.degraded`
- `template.health.recovered`
- `template.health.critical`
- `template.health.paused`
- `template.health.quarantined`
- `template.dependency.drift.detected`
- `template.integration.broken`
- `template.model.degradation.detected`
- `template.cost.anomaly.detected`
- `template.compliance.drift.detected`
- `template.remediation.started`
- `template.remediation.completed`
- `template.remediation.failed`

Webhook payloads must not leak customer-sensitive data to creators or partners.

---

## 29. Observability Events

Ariyo must track:

- `marketplace_template_health_evaluated`
- `marketplace_template_health_status_changed`
- `marketplace_template_runtime_failure_detected`
- `marketplace_template_dependency_drift_detected`
- `marketplace_template_integration_broken_detected`
- `marketplace_template_model_degradation_detected`
- `marketplace_template_knowledge_staleness_detected`
- `marketplace_template_cost_anomaly_detected`
- `marketplace_template_safety_risk_detected`
- `marketplace_template_compliance_drift_detected`
- `marketplace_template_permission_drift_detected`
- `marketplace_template_customer_impact_estimated`
- `marketplace_template_auto_remediation_started`
- `marketplace_template_auto_remediation_completed`
- `marketplace_template_auto_remediation_failed`
- `marketplace_template_paused_due_to_health`
- `marketplace_template_quarantined_due_to_health`
- `marketplace_template_health_recovered`

Each event should include:

- `event_id`
- `template_id`
- `installation_id` when applicable
- `customer_id` when authorized
- `creator_id` when applicable
- `health_dimension`
- `severity`
- `reason_codes`
- `trace_id`
- `actor_type`
- `occurred_at`

---

## 30. KPIs

### 30.1 Marketplace Template Health Score

Average health across active installations.

### 30.2 Critical Template Incident Rate

Critical health incidents per 1,000 template installations.

### 30.3 Mean Time to Detect Template Degradation

Time from first signal to health degradation detection.

### 30.4 Mean Time to Remediate Template Health Issue

Time from detection to recovery.

### 30.5 Auto-Remediation Success Rate

Percentage of health issues safely resolved automatically.

### 30.6 Dependency Drift Rate

Share of installations with dependency drift over time.

### 30.7 Broken Integration Recovery Rate

Percentage of broken integrations restored within SLA.

### 30.8 Cost Anomaly Rate

Cost anomalies per 1,000 successful template runs.

### 30.9 Safety Degradation Rate

Unsafe output or safety issue rate by template category.

### 30.10 Health-Adjusted Ranking Accuracy

Whether healthier templates produce better install-to-outcome performance.

### 30.11 Customer Impact Avoidance

Estimated customer impact prevented by early detection.

### 30.12 Creator Fix SLA

Time taken by creators to resolve template health issues.

---

## 31. Frontend Requirements

Customer-facing UI must include:

- Clear template health badge
- Health explanation chips
- Required admin action panel
- Integration reconnection CTA
- Cost anomaly warning
- Compliance warning
- Version update warning
- Health history timeline
- Remediation status
- Exportable report link for enterprise customers

Creator-facing UI must include:

- Global template health dashboard
- Version health comparison
- Failure pattern insights
- Outcome degradation insights
- Fix recommendations
- Creator support SLA view
- Health impact on ranking

Internal UI must include:

- Operations health command center
- Incident correlation view
- Dependency health map
- Customer impact heatmap
- Remediation queue
- Quarantine controls
- Audit-ready event history

---

## 32. Backend Requirements

Backend must provide:

- Health evaluation jobs
- Streaming health signal ingestion
- Dependency registry integration
- Incident correlation service
- Cost anomaly detection
- Safety signal ingestion
- Model health monitoring integration
- Knowledge freshness monitoring
- Permission drift detection
- Policy decision integration
- Remediation orchestration
- Notification routing
- Audit logging
- Health score versioning
- Rollback-safe action execution

Health evaluation jobs must be idempotent.

Remediation jobs must be auditable.

Critical actions must be approval-gated.

---

## 33. Security and Privacy Rules

Ariyo must:

- Scope health visibility by role.
- Hide customer-sensitive details from creators.
- Avoid leaking integration payloads.
- Avoid exposing knowledge content in health reports.
- Redact sensitive traces.
- Log all remediation actions.
- Require approval for risky remediation.
- Preserve incident evidence.
- Apply region policies to monitoring data.
- Avoid using health telemetry for unrelated profiling.

---

## 34. AI Health Assistant

Ariyo may include an AI Health Assistant.

It may:

- Summarize health issues
- Explain likely root causes
- Suggest remediation steps
- Generate customer-safe messages
- Generate creator-safe messages
- Compare versions
- Correlate incidents
- Identify likely dependency drift
- Recommend rollback or reroute options

It must not:

- Execute high-risk remediation without approval
- Grant permissions
- Hide unsafe behavior
- Blame customers without evidence
- Expose sensitive customer data to creators
- Override policy enforcement
- Declare health recovered without signals

---

## 35. Testing Requirements

Ariyo must test:

- Runtime failure detection
- Integration broken detection
- Dependency drift detection
- Model degradation detection
- Knowledge staleness detection
- Cost anomaly detection
- Safety signal routing
- Compliance drift detection
- Permission drift detection
- Incident correlation
- Auto-remediation success/failure
- Notification routing
- Ranking penalty integration
- Install/update gate integration
- Enterprise report export
- Role-based visibility

---

## 36. Forbidden Patterns

Ariyo must never:

- Treat installed templates as healthy by default.
- Hide template health problems to protect marketplace revenue.
- Allow sponsored templates to bypass health rules.
- Expose customer-sensitive health traces to creators.
- Auto-grant permissions during remediation.
- Auto-increase AI budget to fix failures.
- Mark a template healthy when outcomes are failing.
- Ignore dependency drift.
- Ignore model degradation.
- Ignore cost anomalies.
- Ignore compliance drift.
- Continue recommending quarantined templates.
- Allow repeated unhealthy templates to stay highly ranked.
- Make customers debug creator-owned failures without explanation.
- Allow creators to delete health history.
- Allow health dashboards to become vanity metrics.

---

## 37. Golden Rule

Ariyo Marketplace Template Health Monitoring must protect customers after installation.

A template is only healthy when it remains useful, safe, compatible, affordable, compliant, observable, and recoverable in the customer environment where it actually runs.
