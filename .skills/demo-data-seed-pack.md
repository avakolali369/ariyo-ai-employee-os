# Ariyo Demo Data Seed Pack

## Core Contract

Ariyo Demo Data Seed Pack is not filler data, random mock content, lorem ipsum, or fake analytics decoration.

It is the governed source of realistic demo data that Codex, frontend engineers, product designers, founders, sales teams, customer success teams, and AI-assisted builders must use to make Ariyo's MVP demo feel coherent, enterprise-ready, outcome-oriented, and internally consistent across every product surface.

Every demo screen must use the same organization, users, AI Employees, workflows, templates, approvals, incidents, metrics, audit logs, plans, and trust signals unless a specific scenario requires a controlled variant.

Demo data must make Ariyo feel like a serious AI Employee Operating System, not a toy app, chatbot wrapper, generic automation dashboard, or placeholder UI.

---

## 1. Purpose

This seed pack defines the canonical demo dataset for Ariyo's MVP UI and mockups.

Codex must use this file whenever it needs:

- sample organizations
- sample users
- account roles
- AI Employee examples
- workflow examples
- Marketplace templates
- template detail data
- approval queues
- incidents
- audit logs
- health scores
- launch readiness data
- pricing and plan comparison data
- Trust Center data
- Customer Success data
- Internal Ops data
- Enterprise Admin data
- localized RTL/LTR examples
- demo metrics
- empty/loading/error state copy

This file should be read after:

1. `master-skill-index-map.md`
2. `product-surface-map.md`
3. `mockup-implementation-roadmap.md`
4. `codex-execution-master-prompt.md`
5. `mvp-build-scope-lock.md`
6. `mvp-demo-flow-script.md`

This file should be read before implementing any UI that requires displayed data.

---

## 2. Non-Negotiable Demo Data Rules

### 2.1 No Lorem Ipsum

Codex must never use lorem ipsum in Ariyo UI.

All visible content must support the product narrative.

### 2.2 One Coherent Demo World

All demo data must feel like it belongs to one product story.

The same company, people, AI Employees, workflows, templates, incidents, and metrics should appear across surfaces.

### 2.3 Enterprise Seriousness

Demo data must avoid childish names, joke content, fake vanity metrics, exaggerated claims, and unrealistic performance.

### 2.4 Outcome Orientation

Every AI Employee and workflow must tie to a measurable business outcome.

Bad:

- “AI Bot 1”
- “Test workflow”
- “Random automation”

Good:

- “Revenue Follow-up Analyst”
- “Invoice Exception Triage Workflow”
- “Reduce overdue response time by 42%”

### 2.5 Governance Visibility

Every meaningful demo object must expose governance where appropriate:

- owner
- status
- risk level
- approvals
- audit trail
- permissions
- version
- cost estimate
- last reviewed date

### 2.6 RTL/LTR Law

Persian/Farsi and Arabic demo data must render RTL and right-aligned.

English and European-language demo data must render LTR and left-aligned.

This applies to:

- names
- labels
- cards
- tables
- forms
- charts
- empty states
- nav items
- buttons
- modals
- audit logs
- notifications
- reports
- tooltips

---

## 3. Canonical Demo Organization

Use this organization across the MVP demo unless a page explicitly needs another sample.

```json
{
  "organization": {
    "id": "org_novara_group",
    "name": "Novara Group",
    "industry": "B2B SaaS & Professional Services",
    "region": "EU",
    "headquarters": "Berlin, Germany",
    "employee_count": 420,
    "plan": "Smart",
    "workspace_count": 4,
    "primary_workspace": "Revenue Operations",
    "status": "Enterprise Pilot",
    "data_residency": "EU-Central",
    "compliance_profile": ["GDPR-ready", "SOC 2 evidence in progress", "Enterprise audit logs enabled"],
    "demo_goal": "Show how Ariyo helps Novara deploy accountable AI Employees across revenue, support, finance, and operations."
  }
}
```

### 3.1 Organization Narrative

Novara Group is scaling revenue and support operations across Europe.

Before Ariyo:

- sales follow-up was inconsistent
- support escalations were delayed
- finance exceptions required manual triage
- customer success teams lacked account health visibility
- internal teams wanted AI automation but security required governance

After Ariyo:

- AI Employees handle repetitive operational work
- humans approve sensitive decisions
- workflows are simulated before launch
- Marketplace templates accelerate setup
- Enterprise Admin governs data, permissions, and policies
- Trust Center gives procurement and security evidence

---

## 4. Workspaces

```json
{
  "workspaces": [
    {
      "id": "ws_revops",
      "name": "Revenue Operations",
      "owner": "Maya Schneider",
      "plan": "Smart",
      "active_ai_employees": 7,
      "active_workflows": 12,
      "risk_status": "Low",
      "monthly_ai_cost": 1840,
      "primary_outcome": "Improve lead response speed and pipeline hygiene"
    },
    {
      "id": "ws_customer_success",
      "name": "Customer Success",
      "owner": "Daniel Weber",
      "plan": "Smart",
      "active_ai_employees": 5,
      "active_workflows": 9,
      "risk_status": "Medium",
      "monthly_ai_cost": 1260,
      "primary_outcome": "Detect churn risk earlier and improve onboarding follow-through"
    },
    {
      "id": "ws_finance_ops",
      "name": "Finance Operations",
      "owner": "Elena Rossi",
      "plan": "Pro",
      "active_ai_employees": 3,
      "active_workflows": 6,
      "risk_status": "Medium",
      "monthly_ai_cost": 740,
      "primary_outcome": "Reduce invoice exception handling time"
    },
    {
      "id": "ws_it_security",
      "name": "IT & Security",
      "owner": "Jonas Müller",
      "plan": "Smart",
      "active_ai_employees": 2,
      "active_workflows": 4,
      "risk_status": "Low",
      "monthly_ai_cost": 520,
      "primary_outcome": "Govern AI access and review risky deployments"
    }
  ]
}
```

---

## 5. Canonical Users

```json
{
  "users": [
    {
      "id": "user_maya",
      "name": "Maya Schneider",
      "email": "maya.schneider@novaragroup.example",
      "role": "Workspace Owner",
      "team": "Revenue Operations",
      "permissions": ["Manage AI Employees", "Approve Workflows", "View Cost", "Install Marketplace Templates"],
      "locale": "en-DE",
      "direction": "ltr"
    },
    {
      "id": "user_jonas",
      "name": "Jonas Müller",
      "email": "jonas.mueller@novaragroup.example",
      "role": "Security Admin",
      "team": "IT & Security",
      "permissions": ["Manage Policies", "Review Permissions", "View Audit Logs", "Approve High Risk Deployments"],
      "locale": "en-DE",
      "direction": "ltr"
    },
    {
      "id": "user_sara",
      "name": "Sara Ahmadi",
      "email": "sara.ahmadi@novaragroup.example",
      "role": "Customer Success Manager",
      "team": "Customer Success",
      "permissions": ["View Accounts", "Run Playbooks", "Request AI Employee Changes"],
      "locale": "fa-IR",
      "direction": "rtl"
    },
    {
      "id": "user_elena",
      "name": "Elena Rossi",
      "email": "elena.rossi@novaragroup.example",
      "role": "Finance Operations Lead",
      "team": "Finance Operations",
      "permissions": ["Manage Finance Workflows", "Approve Finance Exceptions", "View Cost"],
      "locale": "en-IT",
      "direction": "ltr"
    },
    {
      "id": "user_omar",
      "name": "Omar Haddad",
      "email": "omar.haddad@novaragroup.example",
      "role": "Regional Partner Manager",
      "team": "Partner Operations",
      "permissions": ["View Partner Deployments", "Escalate Support", "Manage Private Catalog Requests"],
      "locale": "ar-AE",
      "direction": "rtl"
    }
  ]
}
```

### 5.1 User Role Display Rules

When showing user data:

- Use full names in profile cards.
- Use role + team in secondary text.
- Use permission badges only where relevant.
- Do not expose emails in public-facing mockups.
- Show locale/direction only in admin/localization/debug contexts.

---

## 6. AI Employees

```json
{
  "ai_employees": [
    {
      "id": "ae_revenue_followup",
      "name": "Revenue Follow-up Analyst",
      "workspace": "Revenue Operations",
      "owner": "Maya Schneider",
      "status": "Active",
      "plan_required": "Pro",
      "health": 92,
      "risk_level": "Low",
      "monthly_cost": 420,
      "version": "v1.8.2",
      "primary_outcome": "Reduce lead follow-up delay",
      "outcome_metric": "Median follow-up time reduced from 18h to 3.4h",
      "tools": ["CRM", "Email", "Calendar", "Lead Enrichment"],
      "knowledge_sources": ["Sales playbook", "ICP rules", "Objection library"],
      "memory_scope": "Workspace-level sales context",
      "last_reviewed": "2026-06-14",
      "next_review_due": "2026-07-14"
    },
    {
      "id": "ae_support_triage",
      "name": "Support Triage Coordinator",
      "workspace": "Customer Success",
      "owner": "Daniel Weber",
      "status": "Needs Review",
      "plan_required": "Pro",
      "health": 78,
      "risk_level": "Medium",
      "monthly_cost": 360,
      "version": "v1.3.0",
      "primary_outcome": "Classify and route support escalations faster",
      "outcome_metric": "Escalation response SLA improved by 31%",
      "tools": ["Helpdesk", "Slack", "Customer Health", "Knowledge Base"],
      "knowledge_sources": ["Support policies", "Escalation matrix", "Product FAQ"],
      "memory_scope": "Customer-support interaction summary",
      "last_reviewed": "2026-06-06",
      "next_review_due": "2026-06-21"
    },
    {
      "id": "ae_finance_exception",
      "name": "Invoice Exception Reviewer",
      "workspace": "Finance Operations",
      "owner": "Elena Rossi",
      "status": "Simulation Only",
      "plan_required": "Smart",
      "health": 84,
      "risk_level": "Medium",
      "monthly_cost": 280,
      "version": "v0.9.4",
      "primary_outcome": "Reduce manual invoice exception triage",
      "outcome_metric": "Projected 22h/month saved after approval",
      "tools": ["ERP", "Invoice Queue", "Vendor Records"],
      "knowledge_sources": ["Finance policy", "Vendor terms", "Exception rules"],
      "memory_scope": "No persistent memory until production approval",
      "last_reviewed": "2026-06-12",
      "next_review_due": "2026-06-19"
    },
    {
      "id": "ae_customer_health",
      "name": "Customer Health Analyst",
      "workspace": "Customer Success",
      "owner": "Sara Ahmadi",
      "status": "Active",
      "plan_required": "Smart",
      "health": 88,
      "risk_level": "Low",
      "monthly_cost": 510,
      "version": "v2.1.1",
      "primary_outcome": "Surface churn risk before renewal windows",
      "outcome_metric": "12 high-risk accounts identified this month",
      "tools": ["CRM", "Usage Analytics", "Support Tickets", "Billing"],
      "knowledge_sources": ["Success playbooks", "Renewal criteria", "Expansion signals"],
      "memory_scope": "Account-level success summaries",
      "last_reviewed": "2026-06-15",
      "next_review_due": "2026-07-15"
    },
    {
      "id": "ae_policy_guardian",
      "name": "AI Policy Guardian",
      "workspace": "IT & Security",
      "owner": "Jonas Müller",
      "status": "Active",
      "plan_required": "Smart",
      "health": 95,
      "risk_level": "Low",
      "monthly_cost": 300,
      "version": "v1.5.7",
      "primary_outcome": "Review risky AI Employee changes before launch",
      "outcome_metric": "18 high-risk changes blocked or routed this quarter",
      "tools": ["Policy Engine", "Audit Logs", "Approval Queue"],
      "knowledge_sources": ["Security policy", "Data residency rules", "Marketplace policy"],
      "memory_scope": "Policy review history only",
      "last_reviewed": "2026-06-17",
      "next_review_due": "2026-07-17"
    }
  ]
}
```

### 6.1 AI Employee Card Rules

AI Employee cards must show:

- name
- role/workspace
- health/status
- risk level
- owner
- outcome metric
- monthly cost if relevant
- version if relevant
- next required action

Do not show generic bot avatars without role context.

---

## 7. Workflows

```json
{
  "workflows": [
    {
      "id": "wf_lead_response",
      "name": "Qualified Lead Response Workflow",
      "workspace": "Revenue Operations",
      "status": "Active",
      "owner": "Maya Schneider",
      "assigned_ai_employees": ["Revenue Follow-up Analyst"],
      "trigger": "New qualified lead enters CRM",
      "steps": 6,
      "human_approval_required": false,
      "risk_level": "Low",
      "last_run": "2026-06-19T09:12:00+02:00",
      "success_rate": 94,
      "monthly_runs": 1280,
      "avg_runtime": "2m 14s",
      "business_outcome": "Faster lead response and cleaner pipeline data"
    },
    {
      "id": "wf_invoice_exception",
      "name": "Invoice Exception Triage Workflow",
      "workspace": "Finance Operations",
      "status": "Pending Approval",
      "owner": "Elena Rossi",
      "assigned_ai_employees": ["Invoice Exception Reviewer", "AI Policy Guardian"],
      "trigger": "Invoice flagged with payment mismatch",
      "steps": 8,
      "human_approval_required": true,
      "risk_level": "Medium",
      "last_run": "Simulation only",
      "success_rate": 87,
      "monthly_runs": 0,
      "avg_runtime": "Projected 4m 40s",
      "business_outcome": "Reduce manual finance triage without auto-approving payment changes"
    },
    {
      "id": "wf_customer_risk",
      "name": "Customer Churn Risk Review Workflow",
      "workspace": "Customer Success",
      "status": "Active",
      "owner": "Sara Ahmadi",
      "assigned_ai_employees": ["Customer Health Analyst", "Support Triage Coordinator"],
      "trigger": "Account health score drops below 70",
      "steps": 7,
      "human_approval_required": true,
      "risk_level": "Medium",
      "last_run": "2026-06-19T08:42:00+02:00",
      "success_rate": 91,
      "monthly_runs": 136,
      "avg_runtime": "6m 05s",
      "business_outcome": "Start human success playbooks earlier for high-risk accounts"
    },
    {
      "id": "wf_marketplace_install_review",
      "name": "Marketplace Template Install Review",
      "workspace": "IT & Security",
      "status": "Active",
      "owner": "Jonas Müller",
      "assigned_ai_employees": ["AI Policy Guardian"],
      "trigger": "User requests installation of a high-permission template",
      "steps": 5,
      "human_approval_required": true,
      "risk_level": "High",
      "last_run": "2026-06-18T16:20:00+02:00",
      "success_rate": 96,
      "monthly_runs": 42,
      "avg_runtime": "3m 22s",
      "business_outcome": "Prevent unreviewed Marketplace deployments with sensitive permissions"
    }
  ]
}
```

### 7.1 Workflow Canvas Seed Steps

For Workflow Builder mockups, use this canonical workflow.

```json
{
  "workflow_canvas_example": {
    "name": "Qualified Lead Response Workflow",
    "nodes": [
      { "type": "trigger", "label": "New qualified lead", "system": "CRM" },
      { "type": "condition", "label": "ICP score above 75" },
      { "type": "ai_employee", "label": "Revenue Follow-up Analyst drafts response" },
      { "type": "tool", "label": "Check calendar availability" },
      { "type": "tool", "label": "Send personalized email" },
      { "type": "log", "label": "Update CRM activity" }
    ],
    "simulation_result": "Passed with low risk",
    "estimated_monthly_cost": 420,
    "expected_time_saved": "38h/month"
  }
}
```

---

## 8. Marketplace Templates

```json
{
  "marketplace_templates": [
    {
      "id": "tpl_revenue_followup_starter",
      "name": "Revenue Follow-up Starter Kit",
      "category": "Revenue Operations",
      "type": "AI Employee Template",
      "creator": "Ariyo Verified",
      "trust_label": "Certified",
      "rating": 4.8,
      "reviews": 126,
      "installs": 1840,
      "plan_required": "Pro",
      "region_compatibility": ["EU", "US"],
      "permission_risk": "Low",
      "pricing": "Included in Pro and Smart",
      "short_description": "Deploy a governed AI Employee for lead follow-up, CRM hygiene, and sales playbook adherence.",
      "outcomes": ["Faster lead response", "Cleaner CRM updates", "Consistent follow-up quality"]
    },
    {
      "id": "tpl_invoice_exception_triage",
      "name": "Invoice Exception Triage Pack",
      "category": "Finance Operations",
      "type": "Workflow Template",
      "creator": "Northline Ops Studio",
      "trust_label": "Partner Verified",
      "rating": 4.6,
      "reviews": 54,
      "installs": 420,
      "plan_required": "Smart",
      "region_compatibility": ["EU"],
      "permission_risk": "Medium",
      "pricing": "$240/month workspace add-on",
      "short_description": "Triage invoice exceptions with human approval gates and ERP permission boundaries.",
      "outcomes": ["Lower manual triage load", "Faster exception routing", "Safer finance approvals"]
    },
    {
      "id": "tpl_customer_health_risk",
      "name": "Customer Health Risk Monitor",
      "category": "Customer Success",
      "type": "Agent Team Template",
      "creator": "Ariyo Verified",
      "trust_label": "Certified",
      "rating": 4.9,
      "reviews": 210,
      "installs": 2310,
      "plan_required": "Smart",
      "region_compatibility": ["EU", "US", "UK"],
      "permission_risk": "Medium",
      "pricing": "Included in Smart",
      "short_description": "Detect account health declines, summarize risks, and trigger success playbooks before renewal windows.",
      "outcomes": ["Earlier churn detection", "Better renewal preparation", "More consistent success playbooks"]
    },
    {
      "id": "tpl_policy_review_guardrails",
      "name": "AI Policy Review Guardrails",
      "category": "Governance & Security",
      "type": "Policy Template",
      "creator": "Ariyo Trust Lab",
      "trust_label": "Enterprise Certified",
      "rating": 4.7,
      "reviews": 88,
      "installs": 970,
      "plan_required": "Smart",
      "region_compatibility": ["EU", "US"],
      "permission_risk": "Low",
      "pricing": "Included in Smart",
      "short_description": "Route high-risk AI Employee and Marketplace changes through security approval workflows.",
      "outcomes": ["Safer deployments", "More complete audit trails", "Less policy drift"]
    }
  ]
}
```

### 8.1 Marketplace Card Rules

Template cards must show:

- template name
- category
- creator
- trust label
- rating/reviews
- installs or adoption signal
- plan compatibility
- region compatibility
- permission risk
- short outcome-oriented description

Do not show template cards as generic app tiles.

---

## 9. Template Detail Seed

Use this for `ariyo-template-detail-mockup-spec.md`.

```json
{
  "template_detail": {
    "id": "tpl_customer_health_risk",
    "name": "Customer Health Risk Monitor",
    "headline": "Detect churn risk earlier and trigger governed success playbooks.",
    "creator": "Ariyo Verified",
    "trust_label": "Certified",
    "rating": 4.9,
    "reviews": 210,
    "installs": 2310,
    "plan_required": "Smart",
    "permission_summary": "Requires read access to CRM, usage analytics, support tickets, and billing status. No write access enabled by default.",
    "region_status": "Compatible with EU-Central data residency",
    "approval_required": true,
    "approval_reason": "Reads customer health and billing signals",
    "estimated_monthly_cost": "$510 workspace AI usage estimate",
    "setup_time": "18 minutes",
    "dependencies": ["CRM integration", "Usage analytics events", "Support ticket connector"],
    "included_assets": ["Customer Health Analyst", "Risk Review Workflow", "Renewal Prep Playbook", "Executive Summary Report"],
    "demo_available": true,
    "sandbox_available": true,
    "install_cta_state": "Request admin approval"
  }
}
```

---

## 10. Approvals

```json
{
  "approvals": [
    {
      "id": "appr_1001",
      "title": "Approve Invoice Exception Triage Workflow",
      "requester": "Elena Rossi",
      "approver": "Jonas Müller",
      "risk_level": "Medium",
      "status": "Pending",
      "requested_at": "2026-06-18T14:30:00+02:00",
      "due_at": "2026-06-20T17:00:00+02:00",
      "reason": "Workflow requires ERP read access and finance exception classification.",
      "decision_options": ["Approve", "Approve with limits", "Request changes", "Reject"]
    },
    {
      "id": "appr_1002",
      "title": "Install Customer Health Risk Monitor",
      "requester": "Sara Ahmadi",
      "approver": "Maya Schneider",
      "risk_level": "Medium",
      "status": "Needs more evidence",
      "requested_at": "2026-06-17T10:45:00+02:00",
      "due_at": "2026-06-21T12:00:00+02:00",
      "reason": "Template reads usage analytics and billing indicators.",
      "decision_options": ["Approve", "Request security review", "Limit data access", "Reject"]
    },
    {
      "id": "appr_1003",
      "title": "Promote Revenue Follow-up Analyst v1.9.0",
      "requester": "Maya Schneider",
      "approver": "AI Policy Guardian",
      "risk_level": "Low",
      "status": "Approved",
      "requested_at": "2026-06-16T11:10:00+02:00",
      "due_at": "2026-06-18T12:00:00+02:00",
      "reason": "Minor prompt and CRM field mapping update.",
      "decision_options": ["Approved"]
    }
  ]
}
```

---

## 11. Incidents And Risks

```json
{
  "incidents": [
    {
      "id": "inc_2401",
      "title": "Support Triage Coordinator routed 14 tickets to delayed queue",
      "severity": "Medium",
      "status": "Investigating",
      "owner": "Daniel Weber",
      "affected_surface": "Customer Success",
      "affected_ai_employee": "Support Triage Coordinator",
      "detected_at": "2026-06-19T07:55:00+02:00",
      "customer_impact": "Delayed escalation response for 3 accounts",
      "next_action": "Review routing rule and re-run simulation",
      "audit_available": true
    },
    {
      "id": "inc_2402",
      "title": "Marketplace template install blocked by EU residency policy",
      "severity": "Low",
      "status": "Resolved",
      "owner": "Jonas Müller",
      "affected_surface": "Marketplace",
      "affected_ai_employee": "AI Policy Guardian",
      "detected_at": "2026-06-18T15:40:00+02:00",
      "customer_impact": "No production impact; install prevented before activation",
      "next_action": "Notify requester with compliant alternatives",
      "audit_available": true
    },
    {
      "id": "inc_2403",
      "title": "Workflow cost forecast exceeded Smart workspace threshold",
      "severity": "Medium",
      "status": "Open",
      "owner": "Maya Schneider",
      "affected_surface": "Workflow Builder",
      "affected_ai_employee": "Revenue Follow-up Analyst",
      "detected_at": "2026-06-17T18:05:00+02:00",
      "customer_impact": "Workflow launch paused pending cost review",
      "next_action": "Reduce enrichment calls and update monthly cap",
      "audit_available": true
    }
  ]
}
```

---

## 12. Dashboard Metrics

```json
{
  "dashboard_metrics": {
    "active_ai_employees": 17,
    "active_workflows": 31,
    "pending_approvals": 6,
    "open_incidents": 2,
    "monthly_ai_cost": 4360,
    "cost_change_month_over_month": "+8.4%",
    "time_saved_this_month": "412h",
    "workflow_success_rate": "92.7%",
    "high_risk_changes_blocked": 18,
    "marketplace_templates_installed": 14,
    "accounts_with_improved_health": 23,
    "readiness_score": 84
  }
}
```

### 12.1 Metric Display Rules

Metrics must include context.

Bad:

- “92%”
- “412”

Good:

- “92.7% workflow success rate across 31 active workflows”
- “412h saved this month across Revenue, Support, and Finance teams”

---

## 13. Customer Success Accounts

```json
{
  "customer_success_accounts": [
    {
      "id": "acct_helion",
      "name": "Helion Cloud",
      "plan": "Smart",
      "health_score": 82,
      "renewal_date": "2026-09-30",
      "risk_level": "Low",
      "active_ai_employees": 9,
      "workflow_adoption": "High",
      "primary_outcome": "Support response automation",
      "next_playbook": "Expansion discovery"
    },
    {
      "id": "acct_meridian",
      "name": "Meridian LegalOps",
      "plan": "Pro",
      "health_score": 64,
      "renewal_date": "2026-08-15",
      "risk_level": "High",
      "active_ai_employees": 3,
      "workflow_adoption": "Medium",
      "primary_outcome": "Matter intake triage",
      "next_playbook": "Churn risk recovery"
    },
    {
      "id": "acct_novara",
      "name": "Novara Group",
      "plan": "Smart",
      "health_score": 88,
      "renewal_date": "2027-01-01",
      "risk_level": "Low",
      "active_ai_employees": 17,
      "workflow_adoption": "High",
      "primary_outcome": "AI Employee operating system pilot",
      "next_playbook": "Executive business review"
    }
  ]
}
```

---

## 14. Trust Center Seed Data

```json
{
  "trust_center": {
    "security_posture": "Enterprise-ready controls in active pilot",
    "uptime_30_days": "99.94%",
    "active_incidents": 0,
    "resolved_incidents_30_days": 2,
    "data_residency_options": ["EU-Central", "US-East"],
    "audit_logs": "Enabled for Smart and Enterprise workspaces",
    "compliance_evidence": [
      { "name": "Security Overview", "status": "Available" },
      { "name": "Data Processing Addendum", "status": "Available" },
      { "name": "SOC 2 Evidence Pack", "status": "In progress" },
      { "name": "Subprocessor List", "status": "Available" },
      { "name": "AI Governance Controls", "status": "Available" }
    ],
    "evidence_request_cta": "Request enterprise evidence access"
  }
}
```

---

## 15. Launch Readiness Seed Data

```json
{
  "launch_readiness": {
    "overall_score": 84,
    "mode": "Enterprise Pilot",
    "status": "Conditionally ready",
    "open_blockers": 4,
    "critical_blockers": 0,
    "gates": [
      { "name": "Product MVP", "score": 88, "status": "Ready" },
      { "name": "Design System", "score": 82, "status": "Ready with follow-ups" },
      { "name": "AI Employee Builder", "score": 86, "status": "Ready" },
      { "name": "Marketplace Alpha", "score": 74, "status": "Needs review" },
      { "name": "Enterprise Admin", "score": 81, "status": "Ready with constraints" },
      { "name": "Trust & Compliance", "score": 79, "status": "Needs evidence updates" },
      { "name": "Demo Flow", "score": 91, "status": "Ready" },
      { "name": "RTL/LTR Localization", "score": 83, "status": "Ready with visual QA" }
    ]
  }
}
```

---

## 16. Pricing Seed Data

```json
{
  "pricing_plans": [
    {
      "name": "Basic",
      "audience": "Small teams starting with governed AI work",
      "price_label": "$29/user/month",
      "ai_employees": "Up to 3",
      "workflows": "Basic workflows",
      "marketplace": "Starter templates",
      "governance": "Basic approvals",
      "support": "Standard support",
      "best_for": "Low-risk internal productivity"
    },
    {
      "name": "Pro",
      "audience": "Operational teams deploying AI Employees across workflows",
      "price_label": "$79/user/month",
      "ai_employees": "Up to 15",
      "workflows": "Advanced workflow builder",
      "marketplace": "Pro templates",
      "governance": "Role-based approvals",
      "support": "Priority support",
      "best_for": "Revenue, Support, and Finance operations"
    },
    {
      "name": "Smart",
      "audience": "Enterprise-ready teams needing governance, Marketplace, and intelligence",
      "price_label": "$149/user/month",
      "ai_employees": "Unlimited governed AI Employees",
      "workflows": "Simulation, versioning, and advanced controls",
      "marketplace": "Certified templates and private catalog",
      "governance": "Policy engine, audit logs, data residency controls",
      "support": "Premium success support",
      "best_for": "Accountable AI Employee operations at scale"
    },
    {
      "name": "Enterprise",
      "audience": "Large organizations with procurement, security, SSO, and compliance requirements",
      "price_label": "Custom",
      "ai_employees": "Custom operating limits",
      "workflows": "Enterprise implementation support",
      "marketplace": "Private catalog and vendor controls",
      "governance": "SSO/SCIM, advanced policy, evidence center",
      "support": "Dedicated success and implementation",
      "best_for": "Cross-functional AI operating systems"
    }
  ]
}
```

---

## 17. Audit Logs

```json
{
  "audit_logs": [
    {
      "id": "log_9001",
      "timestamp": "2026-06-19T09:14:00+02:00",
      "actor": "Maya Schneider",
      "action": "Updated monthly cost cap",
      "object": "Revenue Follow-up Analyst",
      "risk_level": "Low",
      "result": "Applied",
      "evidence": "Change request CR-1842"
    },
    {
      "id": "log_9002",
      "timestamp": "2026-06-18T16:22:00+02:00",
      "actor": "AI Policy Guardian",
      "action": "Blocked template install",
      "object": "Unverified Outreach Enrichment Pack",
      "risk_level": "High",
      "result": "Blocked",
      "evidence": "EU data residency mismatch"
    },
    {
      "id": "log_9003",
      "timestamp": "2026-06-18T11:04:00+02:00",
      "actor": "Jonas Müller",
      "action": "Approved with limits",
      "object": "Customer Health Risk Monitor",
      "risk_level": "Medium",
      "result": "Approved with read-only billing access",
      "evidence": "Approval APPR-1002"
    }
  ]
}
```

---

## 18. Notifications

```json
{
  "notifications": [
    {
      "type": "approval_required",
      "title": "Template install needs security approval",
      "body": "Customer Health Risk Monitor requires read access to billing indicators.",
      "severity": "medium",
      "cta": "Review request"
    },
    {
      "type": "cost_warning",
      "title": "Workflow forecast exceeds monthly cap",
      "body": "Qualified Lead Response Workflow is projected to exceed the workspace AI cost cap by 8%.",
      "severity": "medium",
      "cta": "Adjust limits"
    },
    {
      "type": "success",
      "title": "Simulation passed",
      "body": "Invoice Exception Triage Workflow passed 42 test cases with medium risk controls active.",
      "severity": "low",
      "cta": "Request approval"
    }
  ]
}
```

---

## 19. Localized Demo Data

### 19.1 Persian/Farsi RTL Example

```json
{
  "fa_ir_example": {
    "locale": "fa-IR",
    "direction": "rtl",
    "alignment": "right",
    "company_name": "گروه نووارا",
    "dashboard_title": "داشبورد کارکنان هوش مصنوعی",
    "primary_cta": "ساخت کارمند هوش مصنوعی",
    "secondary_cta": "مشاهده بازارچه",
    "status_label": "نیازمند بررسی",
    "empty_state": "هنوز هیچ گردش‌کاری فعال نشده است.",
    "approval_message": "این تغییر برای اجرا نیاز به تأیید مدیر امنیت دارد."
  }
}
```

### 19.2 Arabic RTL Example

```json
{
  "ar_ae_example": {
    "locale": "ar-AE",
    "direction": "rtl",
    "alignment": "right",
    "company_name": "مجموعة نوفارا",
    "dashboard_title": "لوحة موظفي الذكاء الاصطناعي",
    "primary_cta": "إنشاء موظف ذكاء اصطناعي",
    "secondary_cta": "استعراض السوق",
    "status_label": "بحاجة إلى مراجعة",
    "empty_state": "لم يتم تفعيل أي سير عمل بعد.",
    "approval_message": "يتطلب هذا التغيير موافقة مسؤول الأمان قبل التشغيل."
  }
}
```

### 19.3 English LTR Example

```json
{
  "en_us_example": {
    "locale": "en-US",
    "direction": "ltr",
    "alignment": "left",
    "company_name": "Novara Group",
    "dashboard_title": "AI Employee Dashboard",
    "primary_cta": "Create AI Employee",
    "secondary_cta": "Browse Marketplace",
    "status_label": "Needs Review",
    "empty_state": "No workflows have been activated yet.",
    "approval_message": "This change requires security admin approval before launch."
  }
}
```

---

## 20. Empty States

```json
{
  "empty_states": {
    "ai_employees": {
      "title": "No AI Employees yet",
      "body": "Create your first governed AI Employee or start from a certified Marketplace template.",
      "primary_cta": "Create AI Employee",
      "secondary_cta": "Browse templates"
    },
    "workflows": {
      "title": "No workflows active",
      "body": "Connect an AI Employee to a workflow and run a simulation before launching.",
      "primary_cta": "Build workflow",
      "secondary_cta": "View examples"
    },
    "approvals": {
      "title": "No approvals pending",
      "body": "Sensitive changes and Marketplace installs will appear here when review is required.",
      "primary_cta": "Review policy settings"
    },
    "marketplace": {
      "title": "No matching templates",
      "body": "Try another category, lower the permission filter, or request a private catalog template.",
      "primary_cta": "Request template"
    }
  }
}
```

---

## 21. Loading States

Use loading states that reinforce enterprise trust.

Examples:

- “Checking policy compatibility...”
- “Loading audit evidence...”
- “Calculating estimated AI usage...”
- “Running workflow simulation...”
- “Checking region compatibility...”
- “Preparing launch readiness report...”

Do not use playful loading copy.

---

## 22. Error States

```json
{
  "error_states": {
    "permission_denied": {
      "title": "You do not have permission to view this surface",
      "body": "Ask a workspace admin to grant access or request temporary review permission.",
      "cta": "Request access"
    },
    "region_blocked": {
      "title": "Template blocked by data residency policy",
      "body": "This template is not currently compatible with the workspace's EU-Central residency rule.",
      "cta": "View compliant alternatives"
    },
    "cost_cap_exceeded": {
      "title": "Estimated AI usage exceeds workspace limit",
      "body": "Adjust workflow frequency, reduce enrichment calls, or request a higher monthly cap.",
      "cta": "Adjust cost controls"
    },
    "simulation_failed": {
      "title": "Simulation found unresolved risks",
      "body": "Review failed test cases before requesting production approval.",
      "cta": "Review simulation"
    }
  }
}
```

---

## 23. Surface-To-Data Mapping

### Landing Page

Use:

- organization narrative
- outcome metrics
- plan names
- trust signals
- Marketplace examples

### Pricing Page

Use:

- pricing plans
- plan capability matrix
- usage/cost messaging
- trust cues

### Dashboard

Use:

- dashboard metrics
- AI Employees
- workflows
- approvals
- incidents
- Marketplace recommendations

### AI Employee Builder

Use:

- role options
- tools
- knowledge sources
- policy options
- simulation examples
- cost estimate data

### AI Employee Detail

Use:

- AI Employee records
- outcomes
- audit logs
- incidents
- versions
- tools
- memory scope

### Workflow Builder

Use:

- workflows
- workflow canvas example
- simulation result
- approvals
- cost forecast

### Marketplace Homepage

Use:

- Marketplace templates
- categories
- trust labels
- plan compatibility
- region compatibility

### Template Detail

Use:

- template detail seed
- permissions
- dependencies
- approval required state

### Enterprise Admin

Use:

- users
- workspaces
- policies
- approvals
- audit logs
- data residency

### Trust Center

Use:

- trust center seed data
- uptime
- incidents
- compliance evidence

### Customer Success Console

Use:

- customer success accounts
- health scores
- playbook labels
- AI Employee adoption

### Internal Ops Command Center

Use:

- incidents
- launch readiness
- support escalations
- marketplace health
- runtime health

### Launch Readiness Command Center

Use:

- launch readiness seed data
- blockers
- gates
- owner accountability

---

## 24. Codex Implementation Rules

Codex must:

1. Create a single `demoData` module before building UI surfaces.
2. Avoid hardcoding repeated demo data inside components.
3. Use stable IDs from this file.
4. Keep object names consistent across pages.
5. Use realistic dates and time zones.
6. Render locale and direction correctly.
7. Use the same AI Employee names everywhere.
8. Never invent random metrics when a metric exists in this pack.
9. Flag missing data requirements before creating new seed data.
10. Keep demo data separate from production API contracts.

---

## 25. Suggested Frontend File Structure

```txt
/src
  /data
    demoData.ts
    demoOrganizations.ts
    demoUsers.ts
    demoAiEmployees.ts
    demoWorkflows.ts
    demoMarketplace.ts
    demoApprovals.ts
    demoIncidents.ts
    demoMetrics.ts
    demoLocalization.ts
  /lib
    demoDataSelectors.ts
```

### 25.1 Selector Examples

Codex should create selectors like:

```ts
getActiveAiEmployees(workspaceId)
getPendingApprovals(userId)
getMarketplaceRecommendations(plan, region)
getLaunchReadiness(mode)
getLocalizedDemoCopy(locale)
getIncidentsBySeverity(severity)
```

Do not make UI components manually filter raw arrays unless the component is trivial.

---

## 26. Demo Data Acceptance Checklist

Before a surface is considered ready:

- No lorem ipsum appears.
- All names match the canonical demo world.
- Metrics have context.
- AI Employees have owners and outcomes.
- Workflows have triggers and risk levels.
- Marketplace templates have trust labels.
- Template detail has permission and install state.
- Enterprise surfaces have users, roles, policies, audit logs.
- Customer Success surfaces have health scores and next actions.
- Ops surfaces have owners, evidence, and severity.
- Pricing surfaces use Basic/Pro/Smart/Enterprise consistently.
- Persian and Arabic examples are RTL and right-aligned.
- English and European-language examples are LTR and left-aligned.
- No demo data implies unsupported legal, security, medical, or financial guarantees.

---

## 27. Forbidden Demo Data Patterns

Codex must not use:

- lorem ipsum
- test user 1
- bot 1
- random fake companies with no narrative
- exaggerated claims like “100% automated”
- fake certifications not represented as “in progress” where appropriate
- unrealistic revenue guarantees
- ungoverned AI actions in enterprise contexts
- sensitive real personal data
- celebrity/company names from real external entities unless provided by the user
- Western-only layout assumptions
- RTL text inside left-aligned containers
- Arabic/Farsi pages with LTR sidebar assumptions

---

## 28. Golden Rule

Demo data is part of the product story.

If the data feels fake, the product feels fake.

If the data is coherent, governed, outcome-oriented, localized, and reusable, Ariyo feels like a real enterprise AI Employee Operating System.
