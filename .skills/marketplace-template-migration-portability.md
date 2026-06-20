# Ariyo Marketplace Template Migration & Portability Skill

## Core Contract

Ariyo Marketplace Template Migration & Portability is not copy-paste export/import.

It is the governed portability system that allows Marketplace templates, AI Employee assets, Agent Team templates, Workflow templates, Knowledge packs, GEO templates, Integration bundles, and private catalog assets to be cloned, exported, imported, migrated, forked, promoted, downgraded, versioned, remapped, validated, simulated, rolled back, audited, and safely reused across customers, workspaces, tenants, regions, plans, catalogs, creators, partners, and enterprise governance boundaries.

Ariyo must make valuable templates portable without making unsafe permissions, private data, secret credentials, vendor obligations, billing entitlements, customer-specific knowledge, or compliance assumptions portable by accident.

Portability must preserve structure and intent.

Portability must never silently preserve unsafe access.

---

## 1. Purpose

This skill defines how Ariyo handles template migration and portability across the Marketplace ecosystem.

It exists so that Ariyo can support:

- exporting templates for backup, audit, offline review, marketplace submission, or customer handoff;
- importing templates from trusted packages, private catalogs, partner libraries, or enterprise migration flows;
- cloning templates inside the same workspace;
- migrating templates between workspaces, departments, organizations, tenants, or enterprise accounts;
- promoting internal templates into private catalogs;
- promoting private templates into public Marketplace submissions;
- forking public Marketplace assets into customer-specific variants;
- moving templates between Basic, Pro, and Smart plan constraints;
- remapping permissions, integrations, model providers, region policies, knowledge sources, variables, and billing states;
- simulating migrated templates before activation;
- rolling back failed or unsafe migrations;
- preserving auditability, evidence, ownership, and compliance history.

Ariyo must treat template portability as a controlled deployment workflow, not a convenience feature.

---

## 2. Dependencies

This skill depends on and must stay aligned with:

- `agent-marketplace-template-builder.md`
- `agent-team-templates.md`
- `ai-agent-template-review-governance.md`
- `template-quality-ranking-system.md`
- `marketplace-installation-entitlements.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-internal-template-governance.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-enterprise-vendor-management.md`
- `marketplace-compliance-evidence-center.md`
- `marketplace-regulatory-compliance-matrix.md`
- `marketplace-data-residency-region-controls.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-memory-context.md`
- `ai-agent-versioning-change-management.md`
- `ai-agent-simulation-sandbox.md`
- `ai-agent-evaluation-benchmarking.md`
- `security-threat-model.md`
- `data-governance-privacy.md`
- `admin-permissions.md`
- `feature-flags-rollout-system.md`
- `observability-analytics-events.md`
- `monetization-billing.md`
- `marketplace-billing-payouts.md`

Migration must never bypass these governance systems.

---

## 3. Migration Philosophy

Ariyo migration is based on five principles.

### 3.1 Intent is portable

The business goal, workflow logic, prompt structure, agent team topology, evaluation criteria, and documentation can be portable.

### 3.2 Access is not automatically portable

Permissions, credentials, secrets, integration tokens, user assignments, approval rights, billing entitlements, environment-specific endpoints, and customer data access must be revalidated and remapped.

### 3.3 Context is conditional

Knowledge bases, memories, data sources, analytics history, and previous run outputs are portable only when policy, ownership, consent, region, retention, privacy, and enterprise controls allow it.

### 3.4 Migration must be explainable

Admins must understand what will move, what will not move, what must be reconfigured, what risks exist, and what will happen after activation.

### 3.5 Activation must be gated

A migrated template must not become active until validation, compatibility checks, permission remapping, region checks, entitlement checks, simulation, and required approvals pass.

---

## 4. Migration Scenarios

Ariyo must support the following migration scenarios.

### 4.1 Same-workspace clone

Used when a customer wants a variant of a template inside the same workspace.

Common examples:

- clone a customer support AI Employee template for a second product line;
- clone a sales demo workflow for a new vertical;
- clone a GEO content template for a different language;
- clone a partner-created implementation template for a new client project.

Rules:

- permissions default to disabled or inherited only when explicitly safe;
- secrets are never duplicated;
- integrations require reauthorization unless policy allows same-workspace binding reuse;
- analytics history is not cloned by default;
- quality scores reset or fork from parent with clear lineage.

### 4.2 Workspace-to-workspace migration

Used when moving a template between workspaces under the same organization.

Rules:

- department policies must be evaluated;
- private catalog rules must be checked;
- cost center and budget rules must be remapped;
- user roles must be remapped;
- integration access must be checked against the target workspace;
- audit lineage must show both source and destination.

### 4.3 Tenant-to-tenant migration

Used during enterprise restructuring, agency handoff, customer migration, acquisition, region move, or environment consolidation.

Rules:

- tenant ownership must be verified;
- export authorization must be explicit;
- data export scope must be reviewed;
- region, privacy, and legal policies must be checked;
- target tenant admin approval must be required;
- imported asset must enter a suspended or draft state until validated;
- sensitive data must be excluded unless specifically allowed.

### 4.4 Public-to-private fork

Used when a customer installs a Marketplace asset and customizes it into an internal version.

Rules:

- original creator attribution must be preserved where required;
- license constraints must be enforced;
- customer changes must not be sent back to creator unless allowed;
- updates from the public template must be treated as merge candidates, not forced replacements;
- fork lineage must be visible to admins.

### 4.5 Private-to-public promotion

Used when a customer, partner, or internal Ariyo team wants to publish an internal template to the public Marketplace.

Rules:

- private data must be stripped;
- customer-specific claims must be removed;
- confidential knowledge sources must be detached;
- creator ownership must be verified;
- public Marketplace review must be required;
- security, safety, compliance, documentation, pricing, and support readiness must pass review.

### 4.6 Private catalog promotion

Used when an internal template is approved for an enterprise private catalog.

Rules:

- organization policies apply;
- catalog visibility scope must be defined;
- department restrictions must be respected;
- approved users and installers must be explicit;
- procurement/security/legal evidence may be required.

### 4.7 Sandbox-to-production promotion

Used when a template is developed or tested in a sandbox and promoted into production.

Rules:

- environment variables must be remapped;
- test integrations must be replaced with production integrations;
- test knowledge must be stripped;
- simulation results must be attached;
- approval chain must be completed;
- rollout must be staged when risk is moderate or high.

### 4.8 Version-to-version migration

Used when migrating installed templates to newer template versions.

Rules:

- breaking changes must be identified;
- permission changes must be explicitly approved;
- evaluation deltas must be shown;
- rollback must be available;
- customer customizations must be protected.

---

## 5. Portability Object Model

### 5.1 TemplatePortablePackage

A portable package is the signed export unit for a template or template bundle.

Required fields:

```json
{
  "package_id": "pkg_123",
  "package_version": "1.0.0",
  "source_asset_id": "asset_abc",
  "source_asset_version": "2.4.1",
  "asset_type": "agent_team_template",
  "exported_at": "2026-06-19T00:00:00Z",
  "exported_by": "user_123",
  "source_org_id": "org_123",
  "source_workspace_id": "ws_123",
  "package_scope": "structure_only",
  "signature": "sig_...",
  "manifest_hash": "sha256:..."
}
```

Package scopes:

- `structure_only`
- `structure_and_config`
- `structure_config_and_docs`
- `internal_migration`
- `marketplace_submission`
- `enterprise_handoff`
- `backup_export`
- `audit_export`

### 5.2 TemplateMigrationManifest

The manifest declares what is inside the package and what must be revalidated.

Required sections:

- identity
- lineage
- prompts
- agent definitions
- workflow graph
- tool requirements
- integration requirements
- variable schema
- knowledge requirements
- memory requirements
- model provider requirements
- permission requirements
- region requirements
- billing requirements
- compliance requirements
- evaluation requirements
- documentation
- review history references
- known limitations
- excluded items

### 5.3 MigrationPlan

A migration plan describes how the package will be imported into a target environment.

Required fields:

```json
{
  "migration_id": "mig_123",
  "source_package_id": "pkg_123",
  "target_org_id": "org_target",
  "target_workspace_id": "ws_target",
  "migration_type": "tenant_to_tenant",
  "requested_by": "user_456",
  "status": "draft",
  "requires_approval": true,
  "risk_level": "medium",
  "activation_mode": "manual_after_simulation"
}
```

### 5.4 DependencyGraph

The dependency graph must identify every dependency that affects safe portability.

Dependency types:

- AI model provider
- model profile
- prompt policy
- tool permission
- integration connector
- OAuth scope
- API key requirement
- webhook endpoint
- knowledge source
- vector index
- memory store
- data schema
- workflow trigger
- approval policy
- cost policy
- region policy
- billing entitlement
- feature flag
- customer role
- internal catalog policy
- vendor/subprocessor
- evidence document
- evaluation suite
- simulation scenario

### 5.5 RemappingPlan

A remapping plan describes how environment-specific dependencies will be replaced.

Examples:

```json
{
  "integration_remaps": [
    {
      "source_integration": "hubspot_source",
      "target_integration": "hubspot_target",
      "status": "requires_authorization"
    }
  ],
  "permission_remaps": [
    {
      "source_permission": "crm.contacts.write",
      "target_permission": "crm.contacts.read",
      "reason": "target workspace policy disallows write access"
    }
  ],
  "model_remaps": [
    {
      "source_model_profile": "smart_default_reasoning",
      "target_model_profile": "pro_safe_balanced",
      "reason": "target plan is Pro, not Smart"
    }
  ]
}
```

---

## 6. What Can Be Portable

The following can usually be portable after validation:

- template name and description;
- high-level purpose;
- business process structure;
- agent role definitions;
- prompt templates without private data;
- workflow graph;
- event trigger definitions without live credentials;
- tool requirement declarations;
- integration requirement declarations;
- variable schemas;
- output schemas;
- evaluation rubrics;
- simulation scenarios;
- safety policies;
- documentation;
- onboarding instructions;
- setup checklist;
- non-sensitive example data;
- asset metadata;
- version lineage;
- creator attribution;
- Marketplace review status references;
- public compliance evidence references.

---

## 7. What Must Not Be Portable by Default

The following must never be silently portable:

- live API keys;
- OAuth tokens;
- customer secrets;
- personal data;
- customer files;
- private knowledge base content;
- vector embeddings derived from private content;
- customer memory records;
- user assignments;
- role grants;
- admin permissions;
- billing payment methods;
- payout configuration;
- cost center authorization;
- procurement approvals;
- signed contracts;
- support channel credentials;
- production webhook secrets;
- integration instance identifiers that expose private infrastructure;
- incident evidence containing sensitive data;
- audit logs not authorized for export;
- restricted compliance evidence;
- region-restricted data.

If a user asks to include these in a migration, Ariyo must require explicit policy approval and show clear risk warnings.

---

## 8. Migration Lifecycle

### 8.1 Request

A migration begins with a request.

Required request attributes:

- requester identity;
- source asset;
- source environment;
- target environment;
- migration type;
- requested scope;
- reason;
- desired activation mode;
- deadline, if any;
- business owner;
- technical owner;
- compliance owner, if required.

### 8.2 Authorization

Ariyo must verify that the requester is allowed to export, import, clone, fork, promote, or migrate the asset.

Authorization checks:

- source ownership;
- target admin permission;
- template license;
- creator agreement;
- customer policy;
- private catalog policy;
- vendor restrictions;
- partner access;
- procurement state;
- security policy;
- data residency policy.

### 8.3 Export Build

Ariyo builds a portable package.

Export must:

- compute a manifest hash;
- sign the package;
- list excluded items;
- classify risk;
- record source metadata;
- attach lineage;
- include dependency graph;
- mark placeholders for remapping;
- exclude secrets;
- redact private data;
- include evidence references when allowed.

### 8.4 Import Intake

Ariyo validates the package before accepting it.

Validation checks:

- signature valid;
- package not tampered;
- package version supported;
- asset type supported;
- source trust status acceptable;
- creator/vendor status acceptable;
- policy flags acceptable;
- manifest complete;
- dependencies declared;
- no hidden credentials;
- no disallowed data;
- no prohibited asset type.

### 8.5 Compatibility Analysis

Ariyo compares source requirements with target environment capabilities.

Compatibility dimensions:

- plan compatibility;
- feature flag availability;
- integration availability;
- permission compatibility;
- model provider compatibility;
- region compatibility;
- data classification compatibility;
- workflow trigger compatibility;
- approval policy compatibility;
- billing entitlement compatibility;
- procurement compatibility;
- catalog visibility compatibility;
- compliance evidence compatibility.

### 8.6 Remapping

The user or admin resolves environment-specific dependencies.

Remapping may include:

- integration replacement;
- role mapping;
- permission reduction;
- model profile replacement;
- knowledge source attachment;
- variable configuration;
- region selection;
- cost policy selection;
- approval workflow selection;
- billing entitlement selection;
- catalog target selection.

### 8.7 Simulation

Before activation, the migrated template must be tested.

Simulation must validate:

- prompt behavior;
- tool calls;
- permission boundaries;
- workflow triggers;
- error handling;
- cost estimates;
- output quality;
- unsafe output resistance;
- region and data policy;
- integration behavior;
- rollback behavior.

### 8.8 Approval

Moderate and high-risk migrations require approval.

Possible approvers:

- workspace admin;
- org admin;
- department owner;
- security reviewer;
- compliance reviewer;
- procurement reviewer;
- finance reviewer;
- AI governance reviewer;
- Marketplace Trust & Safety reviewer.

### 8.9 Activation

Activation must be explicit.

Activation modes:

- `draft_only`
- `manual_activation`
- `staged_rollout`
- `shadow_mode`
- `test_mode_first`
- `production_activation`

High-risk migrations must not activate automatically.

### 8.10 Monitoring

After activation, Ariyo must monitor migrated assets for:

- failed runs;
- permission errors;
- unexpected tool calls;
- integration failures;
- cost spikes;
- unsafe output;
- user complaints;
- rollback requests;
- region policy violations;
- quality degradation;
- incident signals.

### 8.11 Rollback

Rollback must be available when migration fails or creates risk.

Rollback must preserve:

- pre-migration template version;
- pre-migration permission state;
- previous integration bindings;
- previous activation state;
- audit trail;
- customer-facing status.

---

## 9. Export Rules

Ariyo must support exports for different purposes.

### 9.1 Backup export

Used for disaster recovery or internal archival.

Rules:

- secrets excluded;
- private data excluded unless explicitly encrypted and allowed;
- package signed;
- retention policy applied;
- restore compatibility checked.

### 9.2 Audit export

Used for review by auditors or enterprise teams.

Rules:

- runtime secrets excluded;
- sensitive values redacted;
- evidence links included when permitted;
- report generated with timestamp;
- export access logged.

### 9.3 Marketplace submission export

Used to submit a private/internal template to Marketplace review.

Rules:

- customer identifiers removed;
- confidential knowledge removed;
- private examples replaced;
- public documentation required;
- pricing/support fields required;
- creator ownership verified.

### 9.4 Enterprise handoff export

Used when a partner or agency delivers a template to a customer.

Rules:

- partner access removed;
- ownership transferred or licensed according to agreement;
- customer receives setup checklist;
- hidden dependencies disclosed;
- support responsibility clarified.

---

## 10. Import Rules

Ariyo must reject imports that cannot be safely understood.

Import must fail when:

- manifest is missing;
- signature is invalid;
- package is from blocked creator/vendor;
- package includes secrets;
- package hides dependencies;
- package requires unavailable plan features;
- package violates region policy;
- package includes prohibited automation;
- package references unavailable model providers;
- package cannot be simulated;
- package license forbids import;
- target admin does not approve.

Import may be allowed in draft-only state when compatibility is incomplete but remediable.

---

## 11. Dependency Mapping

Every migration must produce a dependency map.

### 11.1 Integration dependencies

Examples:

- CRM connector;
- email provider;
- calendar provider;
- billing provider;
- helpdesk provider;
- CMS;
- analytics platform;
- database;
- internal API;
- webhook endpoint.

For each integration, Ariyo must track:

- connector name;
- required scopes;
- required plan;
- required credentials;
- region behavior;
- data classes accessed;
- write permissions;
- rate limits;
- failure behavior;
- remapping requirement.

### 11.2 AI model dependencies

For each model dependency, Ariyo must track:

- provider;
- model profile;
- fallback model;
- region availability;
- cost profile;
- safety profile;
- reasoning capability;
- tool calling capability;
- data handling policy;
- plan availability.

### 11.3 Knowledge dependencies

For each knowledge dependency, Ariyo must track:

- source type;
- owner;
- data classification;
- region;
- retention policy;
- embedding store;
- refresh schedule;
- exportability;
- target mapping;
- redaction requirement.

### 11.4 Permission dependencies

For each permission, Ariyo must track:

- action;
- target resource;
- scope;
- risk level;
- source binding;
- target binding;
- approval requirement;
- least-privilege alternative.

---

## 12. Permission Remapping Rules

Permission remapping must be conservative.

Default behavior:

- read permissions may be suggested but must still be confirmed;
- write permissions require explicit approval;
- delete permissions require high-friction approval;
- external-send permissions require simulation and approval;
- financial permissions require finance approval;
- admin permissions must not auto-map;
- cross-workspace permissions must not auto-map;
- customer-facing communication permissions must not auto-map.

If the target environment lacks a permission, Ariyo must propose one of:

- reduce permission;
- disable feature;
- require approval flow;
- keep template in draft;
- block migration.

---

## 13. Integration Remapping Rules

Integration remapping must never reuse credentials without authorization.

Rules:

- OAuth tokens must not be exported;
- API keys must not be exported;
- webhook secrets must not be exported;
- target workspace must authorize connector;
- integration scopes must be shown;
- missing integration must block activation if required;
- optional integration may be disabled;
- integration test must run before activation.

---

## 14. Knowledge and Memory Portability

Knowledge and memory portability is high risk.

### 14.1 Knowledge source portability

Allowed only when:

- source owner permits export;
- target owner accepts import;
- data residency policy allows movement;
- privacy policy allows transfer;
- retention policy allows copy;
- confidential data is allowed or redacted;
- audit trail is created.

### 14.2 Memory portability

Agent memory should generally not migrate by default.

Allowed memory migration scenarios:

- same tenant, same workspace, same data boundary;
- explicit admin-approved business continuity case;
- anonymized learning signals;
- evaluation artifacts without private content.

Blocked memory migration scenarios:

- customer-to-customer movement;
- public Marketplace submission;
- partner-to-customer transfer without explicit contract;
- cross-region transfer where policy blocks it;
- migration containing user-level sensitive data.

---

## 15. Version Compatibility

Every portable template must declare compatibility.

Compatibility dimensions:

- Ariyo platform version;
- template schema version;
- agent runtime version;
- workflow engine version;
- permission model version;
- tool contract version;
- evaluation suite version;
- model profile version;
- API contract version;
- billing entitlement version;
- catalog policy version.

Ariyo must show breaking changes before migration.

Breaking changes include:

- new permission requirement;
- changed integration scope;
- changed model behavior;
- changed workflow trigger;
- changed output schema;
- changed data retention behavior;
- changed billing model;
- changed vendor/subprocessor involvement;
- changed region behavior;
- changed public claims or compliance status.

---

## 16. Private-to-Public Promotion Rules

When promoting a private/internal template to public Marketplace, Ariyo must require:

- ownership verification;
- creator identity verification;
- customer data scrub;
- private knowledge removal;
- secret scan;
- prompt injection scan;
- prohibited content scan;
- compliance claim review;
- pricing readiness;
- support readiness;
- documentation completeness;
- simulation pass;
- evaluation pass;
- Trust & Safety review;
- Marketplace approval board decision.

A private template must never become public simply because an admin clicks publish.

---

## 17. Public-to-Private Fork Rules

When a customer forks a public Marketplace template into a private version:

- original lineage must be preserved;
- creator license must be enforced;
- update channel must be declared;
- customer modifications must be isolated;
- creator cannot access customer changes unless explicitly allowed;
- forked template ranking must not affect original public ranking unless policy allows aggregated safe signals;
- forked template must follow internal governance rules.

---

## 18. Tenant-to-Tenant Migration Rules

Tenant-to-tenant migration requires the highest governance.

Required checks:

- source admin approval;
- target admin approval;
- legal basis for transfer;
- region compatibility;
- vendor/subprocessor compatibility;
- data classification review;
- private data removal or explicit transfer authorization;
- billing reset;
- entitlement reset;
- permission reset;
- integration reauthorization;
- audit package creation.

Tenant migration should default to structure and configuration, not live data.

---

## 19. Plan-Aware Portability

### 19.1 Basic

Basic migrations should be simple and low risk.

Allowed by default:

- structure-only clone;
- simple prompt template clone;
- low-risk workflow template import;
- public-to-private fork without advanced automation.

Restricted:

- multi-agent teams;
- advanced integrations;
- high-risk tool actions;
- complex billing entitlements;
- cross-tenant migration;
- custom model routing;
- advanced private catalog controls.

### 19.2 Pro

Pro supports operational template migration.

Allowed with controls:

- workspace-to-workspace migration;
- integration remapping;
- workflow migration;
- department catalog migration;
- partner handoff;
- simulation-gated activation;
- version upgrade migration.

Requires approval:

- write permissions;
- external communications;
- finance-related actions;
- customer-facing workflows;
- sensitive knowledge sources.

### 19.3 Smart

Smart supports advanced enterprise-grade portability.

Allowed with governance:

- tenant-to-tenant migration;
- multi-agent team migration;
- GEO pack migration;
- RAG/knowledge package migration;
- private-to-public promotion;
- region-aware migration;
- policy-driven remapping;
- staged rollout;
- advanced rollback;
- compliance evidence packaging.

Smart must apply stricter audit, simulation, and approval controls, not weaker controls.

---

## 20. Migration Risk Scoring

Ariyo must compute a migration risk score.

Risk factors:

- cross-tenant movement;
- private data included;
- knowledge/memory included;
- write permissions required;
- external communication enabled;
- financial actions enabled;
- customer-facing automation;
- region mismatch;
- vendor/subprocessor change;
- model provider change;
- missing evidence;
- missing simulation;
- unsupported feature;
- high-cost template;
- incident history;
- low creator trust;
- public promotion request;
- poor documentation;
- hidden dependencies.

Risk levels:

- `low`
- `medium`
- `high`
- `critical`

Critical migrations must require human review and cannot activate automatically.

---

## 21. Migration Preview

Ariyo must show a clear migration preview before execution.

Preview must include:

- source template;
- target environment;
- migration type;
- what will move;
- what will not move;
- required remaps;
- missing dependencies;
- permission changes;
- integration changes;
- region warnings;
- billing implications;
- approval requirements;
- simulation requirements;
- rollback plan;
- estimated cost impact;
- risk level;
- activation mode.

Preview language must be understandable by admins who are not developers.

---

## 22. Rollback and Recovery

Ariyo must support rollback for migrations that fail or degrade safety.

Rollback types:

- pre-activation discard;
- activation rollback;
- version rollback;
- permission rollback;
- integration binding rollback;
- catalog visibility rollback;
- workflow trigger rollback;
- model profile rollback;
- staged rollout rollback.

Rollback must not delete audit evidence.

Failed migration states:

- `failed_validation`
- `failed_compatibility`
- `failed_remap`
- `failed_simulation`
- `failed_approval`
- `failed_activation`
- `rolled_back`
- `partially_restored`

Partial failure must be visible and actionable.

---

## 23. Security Requirements

Migration must enforce:

- signed export packages;
- tamper-evident manifests;
- secret scanning;
- malware scanning where file artifacts exist;
- prompt injection scanning;
- dependency disclosure;
- least-privilege remapping;
- no credential export;
- import source allowlisting for enterprise customers;
- package expiration;
- export access logging;
- import access logging;
- admin approval for sensitive migrations;
- encryption at rest and in transit;
- redaction of sensitive fields.

---

## 24. Privacy Requirements

Migration must enforce:

- data minimization;
- purpose limitation;
- user data exclusion by default;
- region policy enforcement;
- retention policy enforcement;
- customer consent where needed;
- privacy-safe evidence packages;
- privacy-safe logs;
- redaction of personal data;
- deletion of temporary migration artifacts after retention window.

---

## 25. Compliance Requirements

Migration must integrate with compliance controls.

Compliance checks:

- data residency;
- vendor/subprocessor disclosure;
- AI risk classification;
- legal basis for data transfer;
- procurement approval;
- security review;
- retention/deletion rules;
- audit evidence;
- contract/license restrictions;
- export controls where relevant;
- customer policy exceptions.

Ariyo must never claim that migration is compliant just because it completed technically.

---

## 26. Billing and Entitlement Portability

Billing entitlements must not blindly migrate.

Rules:

- paid license does not automatically transfer across tenants;
- creator payout attribution must be preserved when required;
- private fork license must be checked;
- subscription state must be verified;
- trial state must not be duplicated improperly;
- refunds/disputes must be checked before migration;
- procurement approvals may be required in target environment;
- plan downgrade must disable unsupported features.

Migration must show billing impact before activation.

---

## 27. Catalog Portability

Catalog membership is policy-specific.

When a template migrates:

- public visibility must not automatically carry into private catalogs;
- private catalog visibility must be re-evaluated;
- department catalogs must apply target department policy;
- allowlists/blocklists must be checked;
- sponsored listing status must not migrate by default;
- featured status must not migrate by default;
- internal-only state must be preserved unless explicitly promoted.

---

## 28. API Contract

### 28.1 Create export

`POST /api/v1/marketplace/templates/{template_id}/exports`

Request:

```json
{
  "scope": "structure_and_config",
  "purpose": "enterprise_handoff",
  "include_documentation": true,
  "include_evidence_references": true,
  "include_private_data": false
}
```

Response:

```json
{
  "export_id": "exp_123",
  "package_id": "pkg_123",
  "status": "building",
  "estimated_ready_at": "2026-06-19T00:05:00Z"
}
```

### 28.2 Get export package

`GET /api/v1/marketplace/template-exports/{export_id}`

Response:

```json
{
  "export_id": "exp_123",
  "package_id": "pkg_123",
  "status": "ready",
  "scope": "structure_and_config",
  "download_url": "https://...",
  "expires_at": "2026-06-20T00:00:00Z",
  "manifest_hash": "sha256:...",
  "signature_status": "valid"
}
```

### 28.3 Create migration plan

`POST /api/v1/marketplace/template-migrations`

Request:

```json
{
  "package_id": "pkg_123",
  "target_org_id": "org_target",
  "target_workspace_id": "ws_target",
  "migration_type": "workspace_to_workspace",
  "activation_mode": "manual_after_simulation"
}
```

Response:

```json
{
  "migration_id": "mig_123",
  "status": "draft",
  "risk_level": "medium",
  "requires_remapping": true,
  "requires_approval": true
}
```

### 28.4 Analyze migration compatibility

`POST /api/v1/marketplace/template-migrations/{migration_id}/analyze`

Response:

```json
{
  "migration_id": "mig_123",
  "compatibility_status": "needs_remap",
  "blocking_issues": [
    {
      "code": "MISSING_INTEGRATION",
      "message": "Target workspace has not authorized HubSpot."
    }
  ],
  "warnings": [
    {
      "code": "MODEL_PROFILE_CHANGED",
      "message": "Smart reasoning profile will be remapped to Pro balanced profile."
    }
  ]
}
```

### 28.5 Submit remapping

`POST /api/v1/marketplace/template-migrations/{migration_id}/remaps`

Request:

```json
{
  "integration_remaps": [],
  "permission_remaps": [],
  "model_remaps": [],
  "knowledge_remaps": [],
  "region_remaps": []
}
```

### 28.6 Run migration simulation

`POST /api/v1/marketplace/template-migrations/{migration_id}/simulate`

Response:

```json
{
  "simulation_id": "sim_123",
  "status": "running"
}
```

### 28.7 Approve migration

`POST /api/v1/marketplace/template-migrations/{migration_id}/approvals`

Request:

```json
{
  "decision": "approved",
  "comment": "Approved after integration remapping and simulation pass."
}
```

### 28.8 Activate migration

`POST /api/v1/marketplace/template-migrations/{migration_id}/activate`

Response:

```json
{
  "migration_id": "mig_123",
  "status": "activated",
  "installed_asset_id": "asset_new"
}
```

### 28.9 Rollback migration

`POST /api/v1/marketplace/template-migrations/{migration_id}/rollback`

Request:

```json
{
  "reason": "Unexpected permission behavior after activation.",
  "rollback_scope": "activation_and_permissions"
}
```

---

## 29. Webhooks

Ariyo should emit webhooks for:

- `template_export.requested`
- `template_export.ready`
- `template_export.failed`
- `template_import.received`
- `template_migration.created`
- `template_migration.compatibility_analyzed`
- `template_migration.remap_required`
- `template_migration.simulation_started`
- `template_migration.simulation_passed`
- `template_migration.simulation_failed`
- `template_migration.approval_required`
- `template_migration.approved`
- `template_migration.rejected`
- `template_migration.activated`
- `template_migration.rollback_started`
- `template_migration.rolled_back`
- `template_migration.failed`
- `template_promotion.submitted`
- `template_promotion.approved`
- `template_promotion.rejected`

---

## 30. Observability Events

Required events:

- `template_export_started`
- `template_export_completed`
- `template_export_failed`
- `template_import_started`
- `template_import_rejected`
- `template_migration_plan_created`
- `template_migration_dependency_graph_created`
- `template_migration_compatibility_checked`
- `template_migration_permission_remap_created`
- `template_migration_integration_remap_created`
- `template_migration_region_check_failed`
- `template_migration_entitlement_check_failed`
- `template_migration_simulation_started`
- `template_migration_simulation_passed`
- `template_migration_simulation_failed`
- `template_migration_approval_requested`
- `template_migration_approved`
- `template_migration_rejected`
- `template_migration_activated`
- `template_migration_rolled_back`
- `template_private_to_public_promotion_started`
- `template_public_to_private_fork_created`
- `template_migration_sensitive_data_blocked`
- `template_migration_secret_detected`

Each event must include:

- org ID;
- workspace ID;
- actor ID;
- migration ID;
- source asset ID;
- target asset ID when available;
- migration type;
- risk level;
- result;
- timestamp;
- correlation ID.

---

## 31. Frontend Requirements

The frontend must provide:

- migration wizard;
- export scope selector;
- import package uploader;
- signed package validation status;
- migration preview screen;
- dependency graph viewer;
- permission remapping UI;
- integration remapping UI;
- model remapping UI;
- knowledge remapping UI;
- region compatibility view;
- billing impact warning;
- approval status timeline;
- simulation result viewer;
- activation confirmation screen;
- rollback button with impact preview;
- migration history page;
- private-to-public promotion flow;
- public-to-private fork flow;
- human-readable warnings;
- admin-only controls.

The UI must never make migration look like a simple upload when risk exists.

---

## 32. Backend Requirements

The backend must provide:

- package builder;
- manifest generator;
- signature service;
- secret scanner;
- sensitive data scanner;
- dependency graph builder;
- compatibility engine;
- remapping engine;
- simulation orchestrator;
- approval engine;
- activation engine;
- rollback engine;
- catalog policy integration;
- entitlement integration;
- region policy integration;
- audit log writer;
- migration artifact storage;
- retention and cleanup jobs;
- migration event stream;
- webhook dispatcher;
- admin override controls.

---

## 33. AI Migration Assistant Rules

Ariyo may provide an AI Migration Assistant.

The assistant may:

- summarize migration impact;
- identify missing dependencies;
- suggest permission reductions;
- propose model remaps;
- explain region conflicts;
- generate setup checklists;
- draft promotion documentation;
- summarize simulation failures;
- recommend rollback when risk is high.

The assistant must not:

- approve its own migration;
- hide risk warnings;
- export secrets;
- decide legal basis for data transfer;
- override enterprise policy;
- activate high-risk migrations without human approval;
- fabricate compliance evidence;
- claim migration succeeded before validation completes.

---

## 34. Advanced KPIs

Track:

- Migration Success Rate
- Migration Rollback Rate
- Average Time to Successful Migration
- Compatibility Failure Rate
- Remapping Completion Rate
- Simulation Pass Rate
- Permission Reduction Rate
- Secret Detection Rate
- Sensitive Data Block Rate
- Region Policy Block Rate
- Tenant-to-Tenant Migration Failure Rate
- Private-to-Public Promotion Approval Rate
- Public-to-Private Fork Activation Rate
- Migration Incident Rate
- Post-Migration Cost Spike Rate
- Post-Migration Support Ticket Rate
- Migration Approval Cycle Time
- Migration Audit Completeness
- Migration Package Tamper Detection Rate

---

## 35. Forbidden Patterns

Ariyo must never:

- export live credentials by default;
- silently migrate private customer data;
- auto-map admin permissions;
- auto-activate high-risk imported templates;
- skip simulation for production migration;
- import unsigned packages from unknown sources;
- hide missing dependencies;
- preserve billing entitlements across tenants without validation;
- promote internal templates to public Marketplace without review;
- migrate memory across customers without explicit authorization;
- bypass data residency controls;
- treat public-to-private forks as creator-visible;
- overwrite customer customizations during version migration without preview;
- delete rollback state prematurely;
- fabricate evidence for portability;
- present migration as successful when activation is blocked;
- allow partner handoff without ownership and access cleanup;
- let AI assistants approve or execute risky migrations without human governance.

---

## 36. Golden Rule

Ariyo template portability must move useful structure, not unsafe assumptions.

When in doubt, preserve intent, reset access, remap dependencies, simulate behavior, require approval, and make rollback obvious.
