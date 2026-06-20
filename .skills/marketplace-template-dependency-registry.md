# Ariyo Marketplace Template Dependency Registry Skill

## 1. Core Contract

Ariyo Marketplace Template Dependency Registry is not a metadata table.

It is the governed dependency intelligence system that records, validates, versions, scores, explains, monitors, and protects every external and internal dependency required for a Marketplace asset to be installed, executed, updated, migrated, recommended, billed, audited, and safely operated.

Every Marketplace template, AI Employee asset, Agent Team template, Workflow template, Knowledge pack, GEO template, Integration bundle, private catalog asset, internal template, partner solution, and enterprise-approved package must have a complete dependency profile before it can be installed or promoted.

Ariyo must never allow a template to install, update, migrate, rank, or execute when its required dependencies are missing, incompatible, unsafe, unapproved, region-blocked, permission-mismatched, over-budget, deprecated, vendor-suspended, or unresolved.

---

## 2. Why This Skill Exists

Marketplace systems fail when a template looks installable but silently depends on unavailable tools, blocked regions, missing entitlements, deprecated models, unsupported integrations, private knowledge sources, unapproved subprocessors, incompatible plan features, or dangerous permissions.

Ariyo must make dependency reality visible before customer trust is damaged.

The Dependency Registry exists to answer questions such as:

- What does this template need in order to work?
- Which tools, integrations, models, permissions, data classes, regions, vendors, billing entitlements, knowledge sources, feature flags, runtime capabilities, and policy approvals are required?
- Which dependencies are optional, replaceable, plan-specific, region-specific, or enterprise-only?
- What will break if this dependency changes?
- Can this template be safely installed by this customer?
- Can this template be safely migrated to another workspace, region, plan, or tenant?
- Can this template be promoted from private to public marketplace?
- Can this template be updated without breaking existing installations?
- Which dependencies create legal, privacy, security, operational, financial, or AI safety risk?

---

## 3. Related Ariyo Skills

This skill must work with:

- `marketplace-installation-entitlements.md`
- `marketplace-template-migration-portability.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-internal-template-governance.md`
- `marketplace-data-residency-region-controls.md`
- `marketplace-enterprise-vendor-management.md`
- `marketplace-compliance-evidence-center.md`
- `marketplace-regulatory-compliance-matrix.md`
- `marketplace-policy-enforcement-rules.md`
- `marketplace-trust-safety-operations.md`
- `marketplace-template-review-governance.md`
- `template-quality-ranking-system.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-versioning-change-management.md`
- `ai-agent-observability-tracing.md`
- `knowledge-rag.md`
- `integration-ecosystem.md`
- `monetization-billing.md`
- `feature-flags-rollout-system.md`

The Dependency Registry is a source of truth for installability, update safety, migration readiness, ranking eligibility, procurement readiness, and enterprise auditability.

---

## 4. Dependency Philosophy

Ariyo must treat dependencies as product behavior, not engineering trivia.

A dependency is anything that a template requires, assumes, calls, reads, writes, bills against, routes through, stores in, displays from, executes with, delegates to, or is governed by.

Ariyo must distinguish between:

- **Required dependencies**: without them the asset cannot work.
- **Optional dependencies**: improve functionality but are not mandatory.
- **Alternative dependencies**: one of several acceptable options.
- **Plan-gated dependencies**: available only on Basic, Pro, Smart, or Enterprise variants.
- **Region-gated dependencies**: allowed only in specific regions.
- **Permission-gated dependencies**: require explicit admin approval.
- **Risk-gated dependencies**: require review before activation.
- **Vendor-gated dependencies**: require vendor approval or vendor status.
- **Entitlement-gated dependencies**: require billing, license, or marketplace purchase.
- **Runtime dependencies**: required only when the template runs.
- **Review dependencies**: required before publishing.
- **Audit dependencies**: required to prove compliance.

Dependency visibility must be customer-understandable, admin-actionable, developer-precise, and audit-ready.

---

## 5. Dependency Types

### 5.1 Integration Dependencies

Examples:

- CRM integration
- Email provider
- Calendar provider
- Helpdesk integration
- Accounting system
- Analytics tool
- CMS
- Webhook endpoint
- Payment provider
- File storage
- Database connection
- Internal API
- Partner system

Each integration dependency must record:

- provider name
- connector id
- required scopes
- optional scopes
- authentication method
- supported regions
- data categories accessed
- rate limits
- required plan
- installation owner
- failure behavior
- fallback behavior
- vendor/subprocessor linkage
- audit evidence

### 5.2 Tool Permission Dependencies

Examples:

- send email
- create calendar event
- update CRM deal
- write to spreadsheet
- call webhook
- create invoice
- refund customer
- update knowledge base
- modify workflow
- access private files
- trigger external automation

Each tool dependency must define:

- tool name
- action type
- read/write/delete/execute level
- approval requirement
- human review requirement
- runtime confirmation requirement
- reversible or irreversible action
- maximum allowed scope
- risk classification
- permission remapping behavior during migration

### 5.3 AI Model Dependencies

Examples:

- default reasoning model
- low-cost model
- high-accuracy model
- image model
- embedding model
- reranking model
- speech model
- translation model
- compliance classifier
- safety evaluator

Each model dependency must define:

- model profile id
- provider
- capability requirement
- cost class
- latency class
- data handling constraints
- region availability
- fallback model
- prohibited fallback models
- evaluation baseline
- deprecation status
- version constraints
- Basic/Pro/Smart availability

### 5.4 Knowledge Dependencies

Examples:

- uploaded documents
- customer knowledge base
- product catalog
- policy library
- sales playbook
- legal terms
- FAQ index
- RAG collection
- vector index
- memory namespace
- private data source

Each knowledge dependency must define:

- source type
- source owner
- access scope
- data classification
- freshness requirement
- embedding/index dependency
- retrieval policy
- citation requirement
- deletion behavior
- portability rule
- region rule
- privacy rule
- customer visibility rule

### 5.5 Workflow Dependencies

Examples:

- scheduled job
- approval workflow
- event trigger
- webhook listener
- background task
- automation sequence
- escalation workflow
- review queue
- notification rule

Each workflow dependency must define:

- trigger type
- schedule
- event source
- downstream actions
- required approvals
- failure retry policy
- rollback behavior
- concurrency limit
- run budget
- monitoring requirement

### 5.6 Feature Flag Dependencies

Examples:

- Smart plan agent orchestration
- private catalog beta
- advanced GEO tools
- external tool execution
- enterprise procurement workflow
- creator payout automation
- model fallback routing

Each feature flag dependency must define:

- flag key
- required state
- rollout cohort
- kill switch behavior
- owner
- risk classification
- dependency impact when disabled

### 5.7 Entitlement and Billing Dependencies

Examples:

- paid marketplace license
- usage-based add-on
- creator subscription
- enterprise private offer
- team seat requirement
- AI credit budget
- integration add-on
- Smart plan feature

Each billing dependency must define:

- entitlement id
- license model
- billing unit
- free trial availability
- install lock rule
- downgrade behavior
- refund behavior
- creator payout linkage
- renewal requirement
- cost forecast behavior

### 5.8 Region and Residency Dependencies

Examples:

- storage region
- processing region
- model provider region
- backup region
- support region
- vendor region
- telemetry region
- subprocessor region

Each region dependency must define:

- allowed regions
- blocked regions
- default region
- customer override behavior
- cross-border transfer requirement
- evidence requirement
- install-time block rule
- runtime block rule

### 5.9 Vendor and Subprocessor Dependencies

Examples:

- creator vendor
- integration vendor
- model provider
- hosting provider
- payment processor
- analytics subprocessor
- support provider
- implementation partner

Each vendor dependency must define:

- vendor id
- approval status
- risk tier
- security evidence status
- privacy evidence status
- subprocessor disclosure
- contract status
- incident history
- suspension status
- renewal evidence requirement

### 5.10 Policy and Compliance Dependencies

Examples:

- security review approval
- privacy review approval
- AI safety evaluation
- procurement approval
- legal approval
- data processing addendum
- customer-specific restriction
- regulated industry review

Each policy dependency must define:

- policy id
- required control
- evidence link
- approval owner
- expiry date
- exception status
- unresolved gap behavior

---

## 6. Core Data Objects

### 6.1 TemplateDependencyProfile

```ts
type TemplateDependencyProfile = {
  id: string;
  template_id: string;
  template_version_id: string;
  asset_type:
    | "ai_employee_template"
    | "agent_team_template"
    | "workflow_template"
    | "knowledge_pack"
    | "geo_template"
    | "integration_bundle"
    | "private_catalog_asset"
    | "internal_template"
    | "partner_solution";
  dependency_profile_version: string;
  dependencies: TemplateDependency[];
  dependency_graph_id: string;
  dependency_risk_score: number;
  installability_summary: InstallabilitySummary;
  migration_summary: MigrationDependencySummary;
  update_impact_summary: UpdateImpactSummary;
  region_summary: RegionDependencySummary;
  entitlement_summary: EntitlementDependencySummary;
  generated_at: string;
  generated_by: "system" | "creator" | "partner" | "admin" | "ai_assistant";
  review_status: "draft" | "validated" | "needs_review" | "approved" | "blocked";
};
```

### 6.2 TemplateDependency

```ts
type TemplateDependency = {
  id: string;
  dependency_type:
    | "integration"
    | "tool_permission"
    | "ai_model"
    | "knowledge_source"
    | "workflow"
    | "feature_flag"
    | "billing_entitlement"
    | "region"
    | "vendor"
    | "subprocessor"
    | "policy_control"
    | "runtime_capability"
    | "data_class"
    | "human_review"
    | "observability";
  name: string;
  description: string;
  requirement_level: "required" | "optional" | "alternative" | "recommended";
  scope: "install_time" | "runtime" | "update_time" | "migration_time" | "publish_time" | "audit_time";
  risk_level: "low" | "medium" | "high" | "critical";
  plan_availability: AriyoPlanAvailability;
  region_constraints: RegionConstraint[];
  permission_requirements: PermissionRequirement[];
  entitlement_requirements: EntitlementRequirement[];
  vendor_links: VendorDependencyLink[];
  evidence_links: EvidenceLink[];
  compatibility_rules: CompatibilityRule[];
  fallback_options: DependencyFallbackOption[];
  failure_behavior: DependencyFailureBehavior;
  customer_visible: boolean;
  admin_visible: boolean;
  created_at: string;
  updated_at: string;
};
```

### 6.3 DependencyGraph

```ts
type DependencyGraph = {
  id: string;
  template_id: string;
  version_id: string;
  nodes: DependencyGraphNode[];
  edges: DependencyGraphEdge[];
  critical_paths: string[];
  circular_dependencies: string[];
  unresolved_dependencies: string[];
  deprecated_dependencies: string[];
  blocked_dependencies: string[];
  generated_at: string;
};
```

### 6.4 DependencyCompatibilityDecision

```ts
type DependencyCompatibilityDecision = {
  template_id: string;
  template_version_id: string;
  customer_org_id: string;
  workspace_id?: string;
  decision:
    | "compatible"
    | "compatible_with_warnings"
    | "requires_admin_action"
    | "requires_upgrade"
    | "requires_vendor_approval"
    | "requires_region_change"
    | "requires_security_review"
    | "blocked";
  reasons: DependencyDecisionReason[];
  missing_dependencies: TemplateDependency[];
  incompatible_dependencies: TemplateDependency[];
  risky_dependencies: TemplateDependency[];
  required_actions: DependencyAction[];
  estimated_setup_effort: "low" | "medium" | "high";
  generated_at: string;
};
```

---

## 7. Dependency Risk Scoring

Ariyo must calculate dependency risk before:

- template review
- marketplace publication
- recommendation ranking
- install preview
- enterprise procurement
- private catalog approval
- migration
- version update
- region change
- model/provider change
- vendor status change

Example scoring model:

```txt
dependency_risk_score =
  tool_permission_risk * 0.20
+ data_access_risk * 0.20
+ vendor_risk * 0.15
+ region_risk * 0.15
+ billing_risk * 0.10
+ model_risk * 0.10
+ migration_complexity * 0.05
+ deprecation_risk * 0.05
```

Risk score must increase when:

- dependency writes or deletes customer data
- dependency triggers external communication
- dependency handles sensitive data
- dependency uses unapproved vendor
- dependency crosses customer region policy
- dependency requires high-cost model
- dependency lacks fallback
- dependency is deprecated
- dependency has active incident history
- dependency is not portable
- dependency requires manual setup
- dependency has weak evidence

---

## 8. Install-Time Dependency Checks

Before installation, Ariyo must check:

1. Customer plan supports all required dependencies.
2. Workspace has required integrations connected.
3. Required scopes are approved.
4. Required entitlements are active.
5. Required model profiles are available.
6. Knowledge sources exist or can be mapped.
7. Data class rules are compatible.
8. Region rules are compatible.
9. Vendor and subprocessors are approved.
10. Policy controls are satisfied.
11. Feature flags are enabled.
12. Billing gates are clear.
13. Runtime permissions are grantable.
14. Required human review workflows exist.
15. Monitoring dependencies are configured.

If any critical dependency is missing, install must be blocked or routed to an approval/setup flow.

---

## 9. Update-Time Impact Analysis

When a template update changes dependencies, Ariyo must classify impact:

- no dependency change
- optional dependency added
- required dependency added
- permission scope expanded
- model provider changed
- data class changed
- vendor added
- region behavior changed
- billing entitlement changed
- integration scope changed
- knowledge source behavior changed
- workflow side effects changed
- safety review requirement changed

High-impact changes must require review and customer/admin notification before rollout.

### Required update behavior

Ariyo must:

- compare old dependency profile vs new dependency profile
- identify breaking changes
- identify new approvals required
- identify customers affected
- block automatic update if unsafe
- support staged rollout
- support rollback
- record evidence
- update private catalog eligibility
- update ranking eligibility

---

## 10. Migration and Portability Dependency Rules

During migration, Ariyo must not assume that source dependencies exist in the target environment.

Migration must check:

- target workspace integrations
- target permissions
- target plan
- target billing entitlements
- target region policy
- target model availability
- target vendor approvals
- target knowledge source mappings
- target feature flags
- target internal catalog rules
- target procurement state
- target compliance controls

### Dependency remapping examples

- CRM connector from source workspace to target workspace
- Slack channel to Microsoft Teams channel
- private knowledge collection to equivalent target collection
- internal webhook to target environment webhook
- model profile from Smart-only provider to Pro-compatible provider
- EU processing dependency to customer-approved EU region dependency

Migration must fail safely when dependency mapping is ambiguous.

---

## 11. Private-to-Public Promotion Rules

When a private or internal template is promoted to public Marketplace, Ariyo must re-evaluate dependencies as if the template were new.

Promotion must check:

- no customer-specific private dependency remains
- no internal-only secret remains
- no organization-specific API endpoint remains
- no private knowledge source remains
- no hidden customer policy assumption remains
- all vendors and subprocessors are disclosed
- region and model behavior is public-safe
- entitlements are marketplace-compatible
- documentation explains setup requirements
- fallback and failure behavior are customer-safe
- reviews and simulations pass public standards

Promotion must be blocked when dependency assumptions cannot be generalized.

---

## 12. Dependency Visibility UX

### Customer-facing install preview

Show:

- required integrations
- permissions requested
- data accessed
- AI models used
- estimated cost drivers
- region behavior
- vendor/subprocessor names
- setup steps
- missing dependencies
- risk warnings
- upgrade requirements

Do not show:

- internal secret keys
- security implementation details
- private vendor notes
- hidden fraud signals
- other customers' dependency metadata

### Admin-facing dependency view

Show:

- full dependency graph
- unresolved dependencies
- scope details
- permission mapping
- policy and evidence status
- affected users/workspaces
- risk score
- impact analysis
- required approvals
- audit trail

### Creator-facing dependency builder

Show:

- dependency checklist
- missing disclosures
- dependency risk warnings
- recommended fallbacks
- portability issues
- region issues
- review blockers
- documentation gaps
- quality improvement suggestions

---

## 13. Basic / Pro / Smart Rules

### Basic

Basic dependency rules must prioritize simplicity and low risk.

Basic templates should:

- use minimal dependencies
- avoid advanced tools
- avoid high-cost model dependencies
- avoid complex integration requirements
- avoid multi-vendor dependency chains
- provide safe defaults
- support guided setup
- fail gracefully

Basic templates must not require:

- complex approval chains
- private catalog governance
- advanced orchestration
- high-risk write permissions
- enterprise procurement dependencies
- advanced custom model routing

### Pro

Pro templates may depend on operational integrations and team workflows.

Pro templates may require:

- CRM/helpdesk/accounting integrations
- team approval workflows
- moderate write permissions
- scheduled automations
- Pro-level analytics
- operational knowledge sources
- workflow monitoring

Pro dependency registry must expose setup readiness and admin action items.

### Smart

Smart templates may depend on advanced capabilities but must have stronger controls.

Smart templates may require:

- multi-agent orchestration
- advanced model routing
- RAG and memory dependencies
- high-impact tool execution
- region-aware routing
- enterprise approval chains
- cost center allocation
- advanced observability
- simulation gates
- policy automation

Smart dependencies must be fully explainable, auditable, reversible where possible, and evaluation-backed.

---

## 14. API Contract

### 14.1 Get Dependency Profile

`GET /api/v1/marketplace/templates/{template_id}/dependency-profile`

Response:

```json
{
  "template_id": "tpl_123",
  "version_id": "ver_7",
  "dependency_profile_version": "1.4.0",
  "review_status": "validated",
  "dependency_risk_score": 42,
  "dependencies": [
    {
      "id": "dep_crm_hubspot",
      "dependency_type": "integration",
      "name": "CRM Connector",
      "requirement_level": "required",
      "risk_level": "medium",
      "scope": "install_time",
      "customer_visible": true,
      "admin_visible": true
    }
  ]
}
```

### 14.2 Evaluate Compatibility

`POST /api/v1/marketplace/templates/{template_id}/dependency-compatibility/evaluate`

Request:

```json
{
  "org_id": "org_123",
  "workspace_id": "ws_456",
  "plan": "pro",
  "region": "eu",
  "intended_action": "install"
}
```

Response:

```json
{
  "decision": "requires_admin_action",
  "missing_dependencies": ["dep_crm_hubspot"],
  "incompatible_dependencies": [],
  "required_actions": [
    {
      "action_type": "connect_integration",
      "label": "Connect approved CRM integration",
      "required_role": "workspace_admin"
    }
  ],
  "estimated_setup_effort": "medium"
}
```

### 14.3 Generate Dependency Graph

`POST /api/v1/marketplace/templates/{template_id}/dependency-graph/generate`

### 14.4 Compare Dependency Versions

`POST /api/v1/marketplace/templates/{template_id}/dependency-profile/compare`

### 14.5 Register Dependency

`POST /api/v1/marketplace/templates/{template_id}/dependencies`

### 14.6 Resolve Dependency

`POST /api/v1/marketplace/dependencies/{dependency_id}/resolve`

### 14.7 Get Impact Analysis

`GET /api/v1/marketplace/dependencies/{dependency_id}/impact-analysis`

### 14.8 Export Dependency Evidence

`GET /api/v1/marketplace/templates/{template_id}/dependency-evidence/export`

---

## 15. Webhook Events

Ariyo must emit events for:

- `dependency.profile.created`
- `dependency.profile.updated`
- `dependency.profile.validated`
- `dependency.profile.blocked`
- `dependency.added`
- `dependency.removed`
- `dependency.scope_changed`
- `dependency.permission_expanded`
- `dependency.model_changed`
- `dependency.vendor_changed`
- `dependency.region_changed`
- `dependency.entitlement_changed`
- `dependency.deprecated`
- `dependency.unavailable`
- `dependency.compatibility.evaluated`
- `dependency.install.blocked`
- `dependency.migration.blocked`
- `dependency.update.requires_review`
- `dependency.impact_analysis.generated`

---

## 16. Observability Events

Track:

- dependency check started
- dependency check completed
- dependency check failed
- missing dependency detected
- unsafe dependency detected
- unsupported region dependency detected
- unsupported plan dependency detected
- unresolved vendor dependency detected
- permission expansion detected
- model fallback used
- migration dependency remapped
- dependency rollback executed
- dependency evidence expired
- dependency graph generated

Each event must include:

- org id
- workspace id
- template id
- version id
- dependency id
- dependency type
- action type
- decision
- risk level
- actor
- timestamp
- correlation id

---

## 17. Frontend Requirements

Frontend must include:

- dependency summary cards
- install readiness indicator
- missing dependency checklist
- permission impact display
- integration setup flow
- region compatibility warning
- billing entitlement warning
- vendor/subprocessor disclosure
- dependency graph visualization for admins
- creator dependency builder
- dependency change diff viewer
- migration mapping UI
- private catalog dependency approval UI
- evidence and audit links
- plan upgrade prompts only when justified

The UI must not hide dependency risk behind a generic “Continue” button.

---

## 18. Backend Requirements

Backend must provide:

- dependency registry service
- dependency graph service
- compatibility evaluator
- impact analysis engine
- install-time dependency gate
- update-time dependency diff engine
- migration remapping engine
- vendor and evidence linkage
- region policy evaluator
- entitlement checker
- permission checker
- model availability checker
- dependency event pipeline
- dependency audit log
- caching with invalidation on dependency changes

The backend must treat unresolved critical dependencies as blockers, not warnings.

---

## 19. AI Dependency Assistant

Ariyo may use an AI assistant to help creators, admins, and operators understand dependencies.

The assistant may:

- detect missing dependencies
- explain dependency risk
- suggest safer fallback dependencies
- draft setup instructions
- summarize dependency changes
- identify portability blockers
- identify private-to-public promotion risks
- map migration dependencies
- recommend review escalation

The assistant must not:

- approve high-risk dependencies alone
- invent compliance evidence
- hide missing dependencies
- downgrade severity without policy support
- grant permissions
- bypass region restrictions
- bypass entitlement gates
- create vendor approval
- claim dependency compatibility without evaluator output

---

## 20. Advanced KPIs

Track:

- Dependency Completeness Rate
- Install Blocked by Missing Dependency Rate
- Install Success After Dependency Resolution Rate
- Dependency-Related Support Ticket Rate
- Dependency-Related Incident Rate
- Dependency Update Review Rate
- Dependency Migration Failure Rate
- Permission Expansion Detection Rate
- Region Dependency Block Rate
- Deprecated Dependency Exposure
- Vendor Dependency Risk Distribution
- Average Setup Effort by Template Category
- Dependency Evidence Freshness Rate
- Time to Resolve Critical Dependency
- Smart Template Dependency Complexity Index

---

## 21. Security and Privacy Rules

Ariyo must:

- never expose secrets in dependency metadata
- redact sensitive configuration values
- separate customer-specific mappings from public template profiles
- enforce role-based access to dependency details
- log dependency approvals
- preserve dependency history
- require explicit approval for permission expansion
- enforce least-privilege tool scopes
- block region-incompatible dependencies
- prevent dependency metadata leakage between tenants
- validate vendor and subprocessor links

---

## 22. Forbidden Patterns

Ariyo must never:

- install a template with unresolved critical dependencies
- hide required permissions until after install
- silently expand permissions during update
- silently change AI model provider
- silently add a new vendor or subprocessor
- silently change region behavior
- treat missing integrations as runtime surprises
- allow creator-declared dependencies without validation
- allow private customer data sources in public templates
- migrate a template without dependency remapping
- promote a private template to public with customer-specific dependencies
- rank a template highly when dependencies are incomplete
- sell a template that cannot be installed by the advertised plan
- mark a template enterprise-ready without dependency evidence
- treat deprecation warnings as cosmetic

---

## 23. Golden Rule

Ariyo must make dependency truth visible before installation, enforce dependency safety during execution, and preserve dependency history after every change.

If a template depends on something, Ariyo must know it.

If Ariyo does not know it, Ariyo must not trust it.
