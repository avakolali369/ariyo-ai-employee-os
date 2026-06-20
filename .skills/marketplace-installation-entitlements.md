# Ariyo Marketplace Installation & Entitlements Skill

## 1. Core Contract

Ariyo Marketplace installation is not a download button.

Ariyo Marketplace installation is a governed deployment transaction that decides whether a customer may install, configure, pay for, enable, use, rollback, update, pause, or uninstall an AI Employee asset inside a specific organization, workspace, plan, permission boundary, cost policy, and safety state.

Every Marketplace asset installation must be plan-aware, entitlement-aware, permission-scoped, billing-safe, simulation-ready, reversible, auditable, privacy-safe, customer-understandable, and compatible with the customer's actual Ariyo environment.

Ariyo must never let a customer install an asset that cannot safely run in their plan, workspace, integrations, permissions, budget, or compliance context.

---

## 2. Purpose

This skill defines the official installation, entitlement, upgrade, rollback, uninstall, and lifecycle rules for Ariyo Marketplace assets.

It ensures that AI Employee templates, Agent Team templates, workflow templates, GEO templates, knowledge packs, integration bundles, industry solutions, and partner services can be installed safely without creating hidden costs, broken configurations, unsupported plan states, unsafe permissions, or trust failures.

Marketplace installation must answer these questions before anything becomes active:

- Is this customer allowed to install this asset?
- Does the customer's plan support this asset?
- What will this asset create, modify, connect, or enable?
- What permissions and integrations does it require?
- What costs may it generate?
- What approval gates are required?
- What data will it access?
- What can be rolled back?
- What happens if installation fails halfway?
- What happens if the customer downgrades later?
- What must be shown clearly to the customer before confirmation?

---

## 3. Dependencies

This skill depends on and must remain consistent with:

- `product-strategy.md`
- `monetization-billing.md`
- `pricing-packaging-strategy.md`
- `ecosystem-marketplace-economy.md`
- `agent-marketplace-template-builder.md`
- `ai-agent-template-review-governance.md`
- `template-quality-ranking-system.md`
- `marketplace-search-recommendation-engine.md`
- `ai-agent-permissions-runtime.md`
- `admin-permissions.md`
- `feature-flags-rollout-system.md`
- `ai-cost-control.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `integration-ecosystem.md`
- `workflow-automation.md`
- `knowledge-rag.md`
- `ai-agent-simulation-sandbox.md`
- `observability-analytics-events.md`
- `finance-accounting-controls.md`
- `operations-command-center.md`

---

## 4. Marketplace Installation Philosophy

Ariyo Marketplace installation must be treated like deploying operational capability, not adding UI content.

A Marketplace asset may introduce:

- AI employee roles
- Multi-agent teams
- Prompts
- Model profiles
- Memory policies
- Knowledge sources
- Workflow automations
- Tool permissions
- Integration requirements
- Billing entitlements
- Creator payout obligations
- Human review policies
- Customer-facing behavior
- Security risks
- Cost behavior
- Support expectations

Therefore, installation must be explicit, previewable, validated, staged, observable, and reversible.

Ariyo must optimize for safe adoption, not frictionless unsafe activation.

---

## 5. Marketplace Asset Types

The installation system must support these asset types:

```text
ai_employee_template
agent_team_template
workflow_template
knowledge_pack
integration_bundle
geo_template
support_playbook
sales_playbook
customer_success_playbook
industry_solution
marketplace_solution_bundle
partner_service
api_extension
```

Each asset type must declare:

```ts
type MarketplaceAssetInstallSpec = {
  asset_id: string;
  asset_type: string;
  version_id: string;
  publisher_id: string;
  supported_plans: Array<'basic' | 'pro' | 'smart' | 'enterprise'>;
  minimum_plan: 'basic' | 'pro' | 'smart' | 'enterprise';
  required_features: string[];
  required_permissions: string[];
  required_integrations: IntegrationRequirement[];
  required_scopes: string[];
  required_approvals: ApprovalRequirement[];
  required_budget_policy: BudgetPolicyRequirement;
  data_access_profile: DataAccessProfile;
  risk_level: 'low' | 'medium' | 'high' | 'critical';
  installation_mode: 'instant' | 'guided' | 'review_required' | 'enterprise_review';
  rollback_supported: boolean;
  uninstall_behavior: UninstallBehavior;
};
```

---

## 6. Plan-Based Installation Rules

### 6.1 Basic

Basic should make Marketplace adoption simple, safe, and low-risk.

Basic may install:

- Simple AI Employee templates
- Basic support/sales/content templates
- Limited knowledge packs
- Low-risk workflow templates without external write actions
- Read-only or no-integration assets
- Trial-friendly templates

Basic must not install by default:

- Multi-agent teams with complex delegation
- Autonomous external action workflows
- Advanced integration bundles
- Finance/security/legal automation templates
- High-cost GEO monitoring templates
- Advanced RAG pipelines
- Smart-only reasoning workflows
- Templates that require high-volume model usage

Basic installation experience must show:

- What is included
- What is limited
- What requires upgrade
- Estimated usage impact
- Safe next step

### 6.2 Pro

Pro should support operational teams and recurring business workflows.

Pro may install:

- Team-oriented AI Employee templates
- Workflow automations
- CRM/helpdesk/channel integration bundles
- Human-review-enabled automations
- Moderate RAG knowledge packs
- GEO starter/pro templates
- Role-based team templates
- Business reporting templates

Pro must apply stronger controls:

- Human review gates for risky actions
- Per-workflow cost limits
- Integration scope visibility
- Team permission mapping
- Install simulation for medium/high risk assets

### 6.3 Smart

Smart is the full-option, highest-intelligence plan.

Smart may install:

- Multi-agent teams
- Advanced workflow automation
- Complex GEO/API systems
- Deep RAG and knowledge packs
- Advanced integration bundles
- Predictive customer lifecycle templates
- Security/finance/ops templates with governance
- Marketplace bundles with multiple assets
- Advanced observability and simulation templates

Smart must still enforce:

- Budget controls
- Human approval gates
- Risk scoring
- Permission boundaries
- Security review requirements
- Tenant isolation
- Rollback support
- Incident monitoring

Smart is more powerful, not unrestricted.

---

## 7. Entitlement Model

Entitlements define what a customer has the right to use.

Ariyo must separate:

```text
plan_entitlement
feature_entitlement
asset_entitlement
usage_entitlement
integration_entitlement
creator_license_entitlement
marketplace_purchase_entitlement
trial_entitlement
addon_entitlement
enterprise_contract_entitlement
```

### 7.1 Entitlement States

```text
available
eligible
requires_upgrade
requires_addon
requires_purchase
requires_admin_approval
requires_billing_setup
requires_integration
requires_permission
active
paused
expired
revoked
cancelled
refunded
archived
```

### 7.2 Entitlement Source of Truth

The backend must be the entitlement source of truth.

The frontend may show availability, but it must never decide entitlement independently.

Every install request must pass backend entitlement verification.

---

## 8. Installation Lifecycle

Ariyo Marketplace installation must follow this lifecycle:

```text
view_asset
check_eligibility
show_install_preview
collect_configuration
validate_requirements
simulate_installation
request_approvals
confirm_billing_or_entitlement
install_staged_assets
activate_asset
monitor_first_run
confirm_success
```

### 8.1 Installation Status Model

```text
not_started
eligibility_checking
ineligible
eligible
preview_required
configuration_required
validation_required
validation_failed
simulation_required
simulation_running
simulation_failed
approval_required
approval_pending
billing_required
payment_pending
ready_to_install
installing
partially_installed
installed_inactive
installed_active
first_run_monitoring
installation_failed
rollback_required
rolled_back
uninstall_requested
uninstalling
uninstalled
paused
archived
```

### 8.2 Installation Must Be Idempotent

If an installation request is retried, Ariyo must not duplicate:

- AI employees
- workflows
- knowledge packs
- billing records
- integration grants
- permissions
- creator payout records

Every installation must use idempotency keys.

---

## 9. Install Preview Requirements

Before confirmation, Ariyo must show a clear install preview.

Install preview must include:

- Asset name and version
- Publisher
- Plan compatibility
- Price or included status
- Required upgrade or add-on
- Required permissions
- Required integrations
- Required knowledge access
- Estimated AI cost impact
- Estimated workflow usage
- Human approval requirements
- Data accessed
- Actions this asset may perform
- What will be created
- What will be changed
- What can be rolled back
- What cannot be undone
- Support level
- Risk label

Install preview must not hide dangerous details behind vague wording.

Bad:

```text
This template needs access to your workspace.
```

Good:

```text
This template can read selected support articles, draft replies, and request approval before sending customer-facing messages. It cannot send messages automatically unless an admin enables auto-send later.
```

---

## 10. Permission Grants

Every installation must define permission grants explicitly.

Permission grants must include:

```ts
type PermissionGrant = {
  grant_id: string;
  asset_id: string;
  organization_id: string;
  workspace_id?: string;
  granted_to: 'ai_employee' | 'agent_team' | 'workflow' | 'integration' | 'user_group';
  permission: string;
  scope: string;
  risk_level: 'low' | 'medium' | 'high' | 'critical';
  granted_by_user_id: string;
  approval_policy_id?: string;
  expires_at?: string;
  revocable: boolean;
};
```

Ariyo must never grant broad permissions when narrower permissions are sufficient.

---

## 11. Integration Requirements

Marketplace assets that depend on integrations must declare requirements clearly.

Examples:

```json
{
  "provider": "hubspot",
  "required": true,
  "access_type": "read_write",
  "scopes": ["contacts.read", "deals.read", "notes.write"],
  "purpose": "Read CRM context and draft sales follow-up notes",
  "user_visible_reason": "Needed to personalize sales follow-up and update deal notes after approval"
}
```

Integration requirements must be evaluated before activation.

If an integration is missing, Ariyo must offer:

- Connect now
- Install without activation
- Save as draft
- Choose alternative asset
- Upgrade plan if required

---

## 12. Billing & Purchase Locks

Marketplace installation must not activate paid assets until billing is resolved.

Billing states:

```text
included_in_plan
free
free_trial
requires_purchase
requires_subscription
requires_addon
requires_usage_budget
requires_payment_method
payment_authorized
payment_failed
purchase_completed
refund_pending
refunded
```

Ariyo must prevent:

- Silent charges
- Double billing
- Creator payout before eligible revenue is confirmed
- Activation after failed payment
- Hidden recurring charges
- Confusing plan/add-on overlap

---

## 13. Upgrade Gates

If an asset requires a higher plan, Ariyo must show an upgrade gate.

Upgrade gate must explain:

- Why the asset is unavailable
- Which plan unlocks it
- What exact capabilities are added
- Whether the asset requires add-ons
- Estimated cost impact
- Whether the current configuration will be preserved after upgrade

Example:

```text
This Agent Team requires Smart because it uses multi-agent orchestration, advanced RAG, higher reasoning budgets, and workflow simulation. Your current Basic plan supports single AI Employee templates only.
```

Upgrade gates must be helpful, not manipulative.

---

## 14. Installation Configuration

Some assets must be configured before activation.

Configuration may include:

- Workspace selection
- AI employee name
- Role customization
- Knowledge source selection
- Integration connection
- Allowed channels
- Human reviewer assignment
- Budget limit
- Auto-run vs review-only mode
- Notification preferences
- Customer segment
- Workflow triggers

Configuration must support:

- Save draft
- Preview changes
- Validate before install
- Resume later
- Copy from existing configuration

---

## 15. Simulation Before Activation

For medium, high, and critical risk assets, simulation is required before activation.

Simulation must test:

- Happy path
- Missing data
- Permission denied
- Integration disconnected
- Prompt injection attempt
- Cost limit reached
- Approval rejected
- Tool failure
- Model fallback
- Sensitive data retrieval
- Unsafe request

Simulation output must include:

```text
pass/fail
warnings
required changes
estimated cost
expected outputs
blocked actions
approval path
risk explanation
```

---

## 16. Partial Installation Rules

Some installations may create multiple resources.

Example:

- AI Employee
- Workflow
- Knowledge Pack
- Integration grant
- Dashboard
- Notification rule

If installation fails halfway, Ariyo must either:

1. Roll back everything, or
2. Mark installation as `partially_installed` with clear recovery actions.

Partial installation must never leave hidden active permissions or billable resources.

---

## 17. Rollback Rules

Rollback must be supported when possible.

Rollback may remove or revert:

- Created AI employees
- Workflows
- Tool grants
- Integration scopes
- Knowledge pack references
- Automation triggers
- Dashboards
- Notification rules
- Trial entitlements

Rollback must not silently delete customer-created data unless explicitly confirmed.

Rollback must log:

- Who triggered rollback
- Why rollback happened
- What was reverted
- What could not be reverted
- Whether billing changed
- Whether customers were notified

---

## 18. Uninstall Rules

Uninstall must be safe, explicit, and reversible where possible.

Uninstall preview must show:

- What will stop working
- What will be deleted
- What will be retained
- What will be disconnected
- What billing changes will happen
- Whether historical data remains
- Whether workflows will pause
- Whether creator license ends

Uninstall statuses:

```text
uninstall_requested
uninstall_previewed
uninstall_confirmed
uninstalling
uninstalled
uninstall_failed
restore_available
restore_expired
```

Uninstall must revoke permissions and stop recurring costs unless retention or contract rules require otherwise.

---

## 19. Downgrade Behavior

If a customer downgrades from Smart to Pro or Basic, Marketplace entitlements must be recalculated.

Ariyo must classify installed assets as:

```text
still_supported
requires_feature_reduction
paused_until_upgrade
read_only
requires_uninstall
requires_admin_decision
```

Downgrade must not create security gaps.

If an asset is no longer supported after downgrade:

- It must not continue advanced automation silently.
- It may enter read-only or paused mode.
- The customer must receive clear explanation.
- Admin must see remediation steps.

---

## 20. Marketplace License Model

Marketplace assets may have license models:

```text
free
included_in_plan
one_time_purchase
monthly_subscription
usage_based
revenue_share
seat_based
organization_based
workspace_based
per_ai_employee
per_workflow
enterprise_contract
```

License enforcement must be backend-driven.

Ariyo must not rely on frontend hidden UI to enforce licenses.

---

## 21. Creator Revenue & Entitlement Linkage

Creator payout eligibility depends on correct installation entitlement tracking.

Payout must be linked to:

- Asset ID
- Version ID
- Organization ID
- License type
- Purchase event
- Refund window
- Activation status
- Usage eligibility
- Fraud/risk status

Creator payout must not occur for:

- Failed installations
- Refunded purchases
- Fraudulent installs
- Suspended assets
- Trial installs not eligible for payout
- Internal test installs

---

## 22. Plan Compatibility Matrix

| Capability | Basic | Pro | Smart |
|---|---:|---:|---:|
| Simple AI Employee templates | Yes | Yes | Yes |
| Single workflow templates | Limited | Yes | Yes |
| Multi-agent team templates | No | Limited / reviewed | Yes |
| Advanced GEO templates | No | Limited | Yes |
| Deep RAG knowledge packs | No | Limited | Yes |
| External write-action automations | No | Review required | Governed allowed |
| High-risk finance/security/legal templates | No | Restricted | Review required |
| Marketplace bundles | Limited | Yes | Yes |
| Advanced install simulation | No | Yes | Yes |
| Custom entitlement overrides | No | Limited | Yes |
| Enterprise approval routing | No | Optional | Yes |

---

## 23. Frontend Requirements

Marketplace installation UI must include:

- Asset detail page
- Plan compatibility badge
- Install preview
- Upgrade gate
- Permission summary
- Integration checklist
- Cost estimate
- Risk label
- Configuration wizard
- Simulation result view
- Approval status
- Installation progress
- Rollback option
- Uninstall preview
- Entitlement status
- Admin decision panel

Frontend must not show raw backend errors.

User-facing messages must be clear, calm, and specific.

---

## 24. Backend Requirements

Backend must provide:

- Entitlement engine
- Install transaction manager
- Idempotency protection
- Permission grant service
- Billing lock service
- Integration requirement validator
- Simulation requirement service
- Rollback manager
- Uninstall manager
- Downgrade recalculation service
- Marketplace license service
- Audit log service
- Webhook dispatcher

Backend must enforce every install decision.

---

## 25. API Contract

### 25.1 Check Installation Eligibility

```http
POST /api/marketplace/assets/{asset_id}/installation/eligibility
```

Request:

```json
{
  "organization_id": "org_123",
  "workspace_id": "ws_456",
  "asset_version_id": "ver_789"
}
```

Response:

```json
{
  "eligible": false,
  "status": "requires_upgrade",
  "current_plan": "basic",
  "required_plan": "smart",
  "missing_entitlements": ["multi_agent_orchestration", "advanced_rag"],
  "required_actions": [
    {
      "type": "upgrade_plan",
      "target_plan": "smart",
      "reason": "This template uses multi-agent orchestration and advanced RAG."
    }
  ]
}
```

### 25.2 Create Install Preview

```http
POST /api/marketplace/assets/{asset_id}/installation/preview
```

Response:

```json
{
  "preview_id": "prev_123",
  "asset": {
    "id": "asset_123",
    "name": "Smart Support Team",
    "version": "1.4.0"
  },
  "creates": ["ai_employee", "workflow", "dashboard"],
  "requires_permissions": ["knowledge.read", "ticket.draft", "human_review.request"],
  "requires_integrations": ["zendesk"],
  "estimated_monthly_cost": {
    "min": 15,
    "max": 120,
    "currency": "USD"
  },
  "risk_level": "medium",
  "rollback_supported": true
}
```

### 25.3 Start Installation

```http
POST /api/marketplace/installations
```

Request:

```json
{
  "preview_id": "prev_123",
  "organization_id": "org_123",
  "workspace_id": "ws_456",
  "configuration": {
    "mode": "review_only",
    "reviewer_user_id": "usr_789",
    "monthly_budget_limit": 100
  },
  "idempotency_key": "install_2026_001"
}
```

Response:

```json
{
  "installation_id": "inst_123",
  "status": "simulation_required",
  "next_action": "run_simulation"
}
```

### 25.4 Rollback Installation

```http
POST /api/marketplace/installations/{installation_id}/rollback
```

Response:

```json
{
  "installation_id": "inst_123",
  "status": "rolled_back",
  "reverted": ["workflow", "permission_grants", "dashboard"],
  "retained": ["historical_logs"],
  "billing_adjusted": true
}
```

### 25.5 Uninstall Asset

```http
POST /api/marketplace/installations/{installation_id}/uninstall
```

Response:

```json
{
  "installation_id": "inst_123",
  "status": "uninstall_preview_required",
  "preview_url": "/marketplace/installations/inst_123/uninstall-preview"
}
```

---

## 26. Webhooks

Ariyo must support webhooks for:

```text
marketplace.installation.started
marketplace.installation.failed
marketplace.installation.completed
marketplace.installation.rolled_back
marketplace.installation.uninstalled
marketplace.entitlement.activated
marketplace.entitlement.revoked
marketplace.asset.paused_due_to_downgrade
marketplace.asset.requires_admin_action
marketplace.billing_lock.failed
```

Webhook payloads must not expose secrets or sensitive customer data.

---

## 27. Observability Events

Ariyo must track:

```text
marketplace_asset_viewed
marketplace_install_eligibility_checked
marketplace_install_preview_opened
marketplace_upgrade_gate_shown
marketplace_permission_summary_viewed
marketplace_install_configuration_started
marketplace_install_simulation_started
marketplace_install_simulation_passed
marketplace_install_simulation_failed
marketplace_install_approval_requested
marketplace_install_started
marketplace_install_completed
marketplace_install_failed
marketplace_install_rolled_back
marketplace_asset_uninstalled
marketplace_entitlement_revoked
```

Events must include:

- organization_id
- workspace_id
- user_id when allowed
- asset_id
- asset_version_id
- plan
- eligibility_status
- risk_level
- install_status
- failure_reason where applicable

---

## 28. Advanced KPI System

### 28.1 Marketplace Install Conversion Rate

Measures how many asset views convert to successful installs.

### 28.2 Eligibility Failure Rate

Measures how often customers cannot install due to plan, permission, billing, or integration gaps.

### 28.3 Upgrade Gate Conversion Rate

Measures whether install-driven upgrade gates convert without harming trust.

### 28.4 Installation Completion Rate

Measures successful installs divided by started installs.

### 28.5 Installation Failure Rate by Asset

Identifies assets causing installation friction or broken setup.

### 28.6 Simulation Pass Rate

Measures whether assets are installable safely before activation.

### 28.7 Permission Grant Risk Distribution

Tracks the risk level of permissions granted through Marketplace installs.

### 28.8 Entitlement Drift Rate

Measures cases where installed assets no longer match the customer's actual plan or contract.

### 28.9 Downgrade Impact Rate

Measures how many assets become paused, read-only, or unsupported after downgrade.

### 28.10 Rollback Rate

Measures install rollbacks and identifies risky or confusing assets.

### 28.11 Uninstall Rate

Measures uninstall rate by asset, plan, creator, category, and reason.

### 28.12 Time to First Successful Run

Measures how quickly an installed asset produces usable value.

### 28.13 Cost Surprise Rate

Measures cases where customers experience unexpected cost after installing an asset.

### 28.14 Creator Revenue Eligibility Rate

Measures how many installs become payout-eligible.

### 28.15 Marketplace Trust Impact Score

Combines install success, uninstall rate, incident rate, support tickets, and customer satisfaction.

---

## 29. Security & Privacy Rules

Marketplace installation must follow these rules:

- No broad access by default.
- No hidden integration grants.
- No silent customer data movement.
- No activation before permission confirmation.
- No billing before clear confirmation.
- No paid asset activation after payment failure.
- No install into wrong organization or workspace.
- No cross-tenant asset leakage.
- No creator access to customer data unless explicitly allowed and governed.
- No template execution before entitlement verification.

---

## 30. AI Assistant Rules

AI assistants may help customers choose and install assets, but must not bypass governance.

AI assistant may:

- Recommend compatible assets
- Explain plan limitations
- Summarize install requirements
- Guide setup
- Explain upgrade benefits
- Generate safe configuration suggestions

AI assistant must not:

- Approve permissions without admin confirmation
- Hide costs
- Promise outcomes
- Install restricted assets without entitlement
- Bypass simulation or approval
- Encourage unsafe integrations

---

## 31. Forbidden Patterns

Never implement:

```text
Install button that bypasses entitlement check
Frontend-only plan gating
Hidden permission grants
Silent billing activation
No install preview
No rollback path for multi-resource installs
No uninstall preview
No downgrade recalculation
No integration scope explanation
No cost estimate
No idempotency key
Creator payout before install eligibility is confirmed
Install success before resources are actually active
Plan upgrade gate with vague copy
Smart assets installed on Basic through UI bug
Uninstall that leaves active tool permissions
Template activation before simulation when simulation is required
Marketplace asset with unknown data access
Entitlement cache without backend verification
```

---

## 32. Golden Rule

Marketplace installation must turn discovery into safe adoption.

Ariyo should make the right asset easy to install, the wrong asset impossible to activate, and every installed asset understandable, measurable, governable, and reversible.

