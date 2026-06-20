# Ariyo Executive Dashboard Demo Data Pack

## Core Contract

Ariyo Executive Dashboard Demo Data Pack is not random dashboard filler, fake KPI decoration, vanity metrics, or placeholder executive content.

It is the governed seed-data package that gives Codex, frontend engineers, product designers, founders, operators, board members, investor-relations owners, and AI-assisted builders a coherent, board-ready, investor-ready, and demo-ready data model for the Ariyo Executive Dashboard.

The Executive Dashboard must show Ariyo's operating truth with realistic signals, not optimistic decoration.

If the dashboard data does not connect to decisions, owners, risks, milestones, and evidence, the dashboard is not executive-ready.

---

## 1. Purpose

This skill defines the official demo data required to implement and demonstrate the Ariyo Executive Dashboard.

It connects:

- `executive-kpi-scorecard-system.md`
- `executive-dashboard-mockup-spec.md`
- `demo-data-seed-pack.md`
- `frontend-demo-data-implementation-guide.md`
- `frontend-api-mock-layer-plan.md`
- `board-investor-governance-rhythm.md`
- `post-funding-operating-plan.md`
- `production-release-gate-checklist.md`
- `production-readiness-gap-audit.md`
- `investor-crm-pipeline-system.md`
- `post-pilot-investor-proof-pack.md`

This file tells Codex what executive data to seed, how to structure it, how to localize it, how to map it to UI components, and which states must be implemented.

---

## 2. Non-Negotiable Demo Data Rules

Codex must not invent executive dashboard numbers at component level.

All executive dashboard metrics must come from a typed demo-data layer.

Every KPI must include:

- ID
- domain
- label
- value
- unit
- previous value
- trend
- status
- target
- owner
- evidence reference
- confidence level
- last updated timestamp
- decision implication

Every risk must include:

- severity
- owner
- due date
- mitigation
- blocking status
- affected surfaces
- evidence
- escalation path

Every investor or board-ready metric must be explainable.

The demo data must never imply real revenue, real customers, real certifications, real compliance status, or real uptime unless explicitly marked as sample/demo.

---

## 3. Global RTL/LTR Layout Law

Persian/Farsi and Arabic interfaces must be RTL and right-aligned across all UI elements.

English and European LTR interfaces must be LTR and left-aligned across all UI elements.

This rule applies to:

- KPI cards
- risk panels
- tables
- timeline entries
- owner actions
- board export reports
- investor snapshot panels
- chart labels
- filters
- tabs
- sidebars
- breadcrumbs
- tooltips
- empty states
- export previews
- notification copy

If a language is Persian or Arabic, Codex must render `dir="rtl"` and right-align text, table headers, value labels, captions, and action descriptions.

If a language is English or European LTR, Codex must render `dir="ltr"` and left-align all UI content.

---

## 4. Demo Organization Seed

Use this sample organization consistently across the Executive Dashboard.

```ts
export const executiveDemoOrg = {
  id: 'org_ariyo_demo',
  name: 'Ariyo Demo Operating Company',
  industry: 'AI Employee Operating System',
  stage: 'MVP to Private Pilot',
  plan: 'Smart',
  region: 'EU-West Demo Region',
  currency: 'USD',
  reportingPeriod: 'Q3 Pilot Readiness Window',
  dashboardMode: 'board_review',
  localizationMode: 'en-US',
  dataClassification: 'demo_only',
};
```

Persian localized display:

```ts
export const executiveDemoOrgFa = {
  name: 'شرکت نمونه عملیاتی آریو',
  stage: 'از MVP تا پایلوت خصوصی',
  reportingPeriod: 'پنجره آمادگی پایلوت فصل سوم',
  localizationMode: 'fa-IR',
  direction: 'rtl',
};
```

---

## 5. Executive Dashboard Modes

Codex must support these dashboard modes:

```ts
export type ExecutiveDashboardMode =
  | 'founder_operating_review'
  | 'board_review'
  | 'investor_snapshot'
  | 'enterprise_readiness_review'
  | 'release_readiness_review'
  | 'post_funding_90_day_review';
```

Mode behavior:

| Mode | Primary Audience | Emphasis | Redaction Level |
|---|---|---|---|
| founder_operating_review | Founders/operators | detailed risks, owners, blockers | low |
| board_review | Board/advisors | KPI scorecard, milestones, capital use | medium |
| investor_snapshot | Investors | traction, proof, runway, milestones | high |
| enterprise_readiness_review | Enterprise sponsor | trust, governance, reliability, pilot readiness | medium |
| release_readiness_review | Product/ops/security | gates, blockers, launch health | low |
| post_funding_90_day_review | Investors/board | capital-to-progress accountability | medium |

---

## 6. Top-Level Executive Score Seed

```ts
export const executiveOperatingScore = {
  id: 'score_exec_operating_health',
  label: 'Ariyo Operating Health',
  value: 78,
  unit: 'score',
  status: 'watch',
  target: 85,
  previousValue: 71,
  trend: 'up',
  confidence: 'medium',
  owner: 'CEO / Product Lead',
  evidenceRef: 'evidence_exec_001',
  decisionImplication: 'MVP demo readiness is improving, but enterprise pilot readiness still depends on governance and backend contract closure.',
  lastUpdated: '2026-06-19T09:00:00Z',
};
```

Display rules:

- Use a prominent score card.
- Do not use celebratory language when status is `watch`.
- Show both improvement and unresolved blockers.
- Provide a link or drawer to evidence.

---

## 7. Product Execution KPI Seed

```ts
export const productExecutionKpis = [
  {
    id: 'kpi_product_surface_completion',
    domain: 'product_execution',
    label: 'MVP Product Surface Completion',
    value: 72,
    unit: '%',
    previousValue: 54,
    trend: 'up',
    target: 90,
    status: 'watch',
    owner: 'Product Lead',
    evidenceRef: 'evidence_product_surface_map',
    confidence: 'medium',
    decisionImplication: 'Continue dashboard, builder, workflow, marketplace, and admin surface implementation before expanding scope.',
  },
  {
    id: 'kpi_design_system_readiness',
    domain: 'product_execution',
    label: 'Design System Readiness',
    value: 68,
    unit: '%',
    previousValue: 42,
    trend: 'up',
    target: 85,
    status: 'watch',
    owner: 'Design Systems Owner',
    evidenceRef: 'evidence_figma_design_system_brief',
    confidence: 'medium',
    decisionImplication: 'Build reusable components before adding more screens.',
  },
  {
    id: 'kpi_codex_execution_alignment',
    domain: 'product_execution',
    label: 'Codex Execution Alignment',
    value: 81,
    unit: '%',
    previousValue: 60,
    trend: 'up',
    target: 90,
    status: 'healthy',
    owner: 'AI Build Lead',
    evidenceRef: 'evidence_codex_master_prompt',
    confidence: 'high',
    decisionImplication: 'Codex can proceed with Sprint 0 and Sprint 1 if scope lock is respected.',
  }
];
```

---

## 8. AI Employee KPI Seed

```ts
export const aiEmployeeKpis = [
  {
    id: 'kpi_ai_employee_configured',
    domain: 'ai_employee',
    label: 'Configured AI Employees',
    value: 5,
    unit: 'employees',
    previousValue: 2,
    trend: 'up',
    target: 8,
    status: 'watch',
    owner: 'AI Product Lead',
    evidenceRef: 'evidence_ai_employee_builder',
    confidence: 'medium',
    decisionImplication: 'Demo can show multiple AI Employees, but production runtime must remain gated.',
  },
  {
    id: 'kpi_ai_employee_governance_coverage',
    domain: 'ai_employee',
    label: 'AI Employee Governance Coverage',
    value: 64,
    unit: '%',
    previousValue: 46,
    trend: 'up',
    target: 90,
    status: 'risk',
    owner: 'Trust & Governance Lead',
    evidenceRef: 'evidence_ai_permissions_runtime',
    confidence: 'medium',
    decisionImplication: 'Do not expand autonomous actions before permission gates and audit trails are complete.',
  },
  {
    id: 'kpi_simulation_pass_rate',
    domain: 'ai_employee',
    label: 'Simulation Pass Rate',
    value: 76,
    unit: '%',
    previousValue: 62,
    trend: 'up',
    target: 88,
    status: 'watch',
    owner: 'AI Evaluation Lead',
    evidenceRef: 'evidence_simulation_sandbox',
    confidence: 'medium',
    decisionImplication: 'Use simulation results in pilot readiness, but do not claim production autonomy.',
  }
];
```

---

## 9. Workflow Operations KPI Seed

```ts
export const workflowKpis = [
  {
    id: 'kpi_workflow_mvp_coverage',
    domain: 'workflow',
    label: 'MVP Workflow Coverage',
    value: 6,
    unit: 'workflows',
    previousValue: 3,
    trend: 'up',
    target: 10,
    status: 'watch',
    owner: 'Workflow Product Lead',
    evidenceRef: 'evidence_workflow_builder',
    confidence: 'medium',
    decisionImplication: 'Prioritize workflows that demonstrate human approval, simulation, and measurable outcomes.',
  },
  {
    id: 'kpi_approval_gate_coverage',
    domain: 'workflow',
    label: 'Approval Gate Coverage',
    value: 58,
    unit: '%',
    previousValue: 31,
    trend: 'up',
    target: 80,
    status: 'risk',
    owner: 'Human Review Lead',
    evidenceRef: 'evidence_human_review_governance',
    confidence: 'medium',
    decisionImplication: 'Enterprise pilot must not launch without clear approval state handling.',
  }
];
```

---

## 10. Marketplace Health KPI Seed

```ts
export const marketplaceKpis = [
  {
    id: 'kpi_marketplace_demo_templates',
    domain: 'marketplace',
    label: 'Demo-Ready Marketplace Templates',
    value: 12,
    unit: 'templates',
    previousValue: 7,
    trend: 'up',
    target: 20,
    status: 'watch',
    owner: 'Marketplace Lead',
    evidenceRef: 'evidence_marketplace_homepage',
    confidence: 'medium',
    decisionImplication: 'Marketplace is demo-ready but not yet production marketplace-ready.',
  },
  {
    id: 'kpi_template_trust_label_coverage',
    domain: 'marketplace',
    label: 'Template Trust Label Coverage',
    value: 42,
    unit: '%',
    previousValue: 21,
    trend: 'up',
    target: 75,
    status: 'risk',
    owner: 'Marketplace Trust Lead',
    evidenceRef: 'evidence_template_trust_labeling',
    confidence: 'medium',
    decisionImplication: 'Do not permit public marketplace claims until trust labels are more complete.',
  },
  {
    id: 'kpi_install_decision_readiness',
    domain: 'marketplace',
    label: 'Install Decision Readiness',
    value: 69,
    unit: '%',
    previousValue: 50,
    trend: 'up',
    target: 85,
    status: 'watch',
    owner: 'Marketplace Product Lead',
    evidenceRef: 'evidence_template_detail',
    confidence: 'medium',
    decisionImplication: 'Template detail page can support demo installs with clear blocked/approval states.',
  }
];
```

---

## 11. Enterprise Readiness KPI Seed

```ts
export const enterpriseReadinessKpis = [
  {
    id: 'kpi_enterprise_admin_coverage',
    domain: 'enterprise',
    label: 'Enterprise Admin Coverage',
    value: 61,
    unit: '%',
    previousValue: 38,
    trend: 'up',
    target: 85,
    status: 'watch',
    owner: 'Enterprise Product Lead',
    evidenceRef: 'evidence_enterprise_admin_mockup',
    confidence: 'medium',
    decisionImplication: 'Use enterprise admin in sales demo as preview, not production-ready control plane.',
  },
  {
    id: 'kpi_policy_engine_readiness',
    domain: 'enterprise',
    label: 'Policy Engine Readiness',
    value: 47,
    unit: '%',
    previousValue: 30,
    trend: 'up',
    target: 80,
    status: 'risk',
    owner: 'Governance Engineering Lead',
    evidenceRef: 'evidence_workspace_policy_engine',
    confidence: 'medium',
    decisionImplication: 'Do not claim full policy enforcement before backend/API contract review is complete.',
  },
  {
    id: 'kpi_sso_scim_readiness',
    domain: 'enterprise',
    label: 'SSO/SCIM Readiness',
    value: 35,
    unit: '%',
    previousValue: 20,
    trend: 'up',
    target: 70,
    status: 'risk',
    owner: 'Enterprise Infrastructure Lead',
    evidenceRef: 'evidence_sso_scim_directory_sync',
    confidence: 'low',
    decisionImplication: 'Position SSO/SCIM as roadmap or pilot-gated capability unless implemented.',
  }
];
```

---

## 12. Customer Success KPI Seed

```ts
export const customerSuccessKpis = [
  {
    id: 'kpi_pilot_accounts_ready',
    domain: 'customer_success',
    label: 'Pilot Accounts Ready',
    value: 3,
    unit: 'accounts',
    previousValue: 1,
    trend: 'up',
    target: 5,
    status: 'watch',
    owner: 'Customer Success Lead',
    evidenceRef: 'evidence_pilot_customer_onboarding',
    confidence: 'medium',
    decisionImplication: 'Start controlled pilot onboarding with narrow scope and weekly review.',
  },
  {
    id: 'kpi_success_playbook_readiness',
    domain: 'customer_success',
    label: 'Success Playbook Readiness',
    value: 66,
    unit: '%',
    previousValue: 44,
    trend: 'up',
    target: 85,
    status: 'watch',
    owner: 'CS Operations Lead',
    evidenceRef: 'evidence_customer_success_playbooks',
    confidence: 'medium',
    decisionImplication: 'Pilot customers can be managed if escalation path remains manual.',
  }
];
```

---

## 13. Revenue, Fundraising, and Pipeline KPI Seed

```ts
export const revenueFundraisingKpis = [
  {
    id: 'kpi_investor_pipeline_quality',
    domain: 'fundraising',
    label: 'Investor Pipeline Quality',
    value: 74,
    unit: 'score',
    previousValue: 58,
    trend: 'up',
    target: 85,
    status: 'watch',
    owner: 'Founder / Fundraising Lead',
    evidenceRef: 'evidence_investor_crm_pipeline',
    confidence: 'medium',
    decisionImplication: 'Improve warm-intro density before escalating to term discussions.',
  },
  {
    id: 'kpi_data_room_readiness',
    domain: 'fundraising',
    label: 'Investor Data Room Readiness',
    value: 82,
    unit: '%',
    previousValue: 55,
    trend: 'up',
    target: 90,
    status: 'healthy',
    owner: 'Founder / Ops Lead',
    evidenceRef: 'evidence_investor_data_room_index',
    confidence: 'high',
    decisionImplication: 'Data room is nearly ready for serious diligence with proof freshness checks.',
  },
  {
    id: 'kpi_weekly_update_cadence',
    domain: 'fundraising',
    label: 'Fundraising Update Cadence',
    value: 1,
    unit: 'updates/week',
    previousValue: 0,
    trend: 'up',
    target: 1,
    status: 'healthy',
    owner: 'Founder',
    evidenceRef: 'evidence_fundraising_weekly_update_template',
    confidence: 'high',
    decisionImplication: 'Maintain consistent investor update cadence without over-sharing sensitive data.',
  }
];
```

---

## 14. Runway and Finance KPI Seed

```ts
export const runwayFinanceKpis = [
  {
    id: 'kpi_demo_runway_months',
    domain: 'finance',
    label: 'Demo Runway Projection',
    value: 9,
    unit: 'months',
    previousValue: 8,
    trend: 'up',
    target: 12,
    status: 'watch',
    owner: 'Finance Owner',
    evidenceRef: 'evidence_finance_accounting_controls',
    confidence: 'low',
    decisionImplication: 'Use as demo planning placeholder, not official financial reporting.',
  },
  {
    id: 'kpi_use_of_funds_clarity',
    domain: 'finance',
    label: 'Use-of-Funds Clarity',
    value: 76,
    unit: '%',
    previousValue: 52,
    trend: 'up',
    target: 90,
    status: 'watch',
    owner: 'Founder / Finance Owner',
    evidenceRef: 'evidence_post_funding_operating_plan',
    confidence: 'medium',
    decisionImplication: 'Use-of-funds story is usable for investor meetings, but budget model must be reviewed before terms.',
  }
];
```

---

## 15. Trust, Risk, and Compliance KPI Seed

```ts
export const trustRiskKpis = [
  {
    id: 'kpi_trust_center_readiness',
    domain: 'trust',
    label: 'Trust Center Readiness',
    value: 63,
    unit: '%',
    previousValue: 41,
    trend: 'up',
    target: 85,
    status: 'watch',
    owner: 'Trust Lead',
    evidenceRef: 'evidence_trust_center_mockup',
    confidence: 'medium',
    decisionImplication: 'Trust Center is demo-ready but requires evidence governance before enterprise diligence.',
  },
  {
    id: 'kpi_compliance_evidence_coverage',
    domain: 'trust',
    label: 'Compliance Evidence Coverage',
    value: 39,
    unit: '%',
    previousValue: 25,
    trend: 'up',
    target: 70,
    status: 'risk',
    owner: 'Compliance Owner',
    evidenceRef: 'evidence_compliance_evidence_center',
    confidence: 'low',
    decisionImplication: 'Do not overstate compliance readiness; position as structured evidence program.',
  },
  {
    id: 'kpi_security_review_completion',
    domain: 'security',
    label: 'Security Review Completion',
    value: 52,
    unit: '%',
    previousValue: 33,
    trend: 'up',
    target: 80,
    status: 'risk',
    owner: 'Security Owner',
    evidenceRef: 'evidence_security_threat_model',
    confidence: 'medium',
    decisionImplication: 'Resolve critical data access and permission review gaps before enterprise pilot.',
  }
];
```

---

## 16. Release Readiness Gate Seed

```ts
export const releaseReadinessGates = [
  {
    id: 'gate_mvp_demo',
    label: 'MVP Demo Readiness',
    score: 84,
    status: 'nearly_ready',
    owner: 'Product Lead',
    blockers: 2,
    evidenceRefs: ['evidence_mvp_demo_flow', 'evidence_demo_data_seed_pack'],
    nextDecision: 'Approve investor demo after design and mock API smoke test.',
  },
  {
    id: 'gate_private_pilot',
    label: 'Private Pilot Readiness',
    score: 61,
    status: 'blocked',
    owner: 'Customer Success Lead',
    blockers: 5,
    evidenceRefs: ['evidence_pilot_onboarding', 'evidence_release_gate_checklist'],
    nextDecision: 'Do not launch pilot until backend contract, governance states, and support path are ready.',
  },
  {
    id: 'gate_enterprise_pilot',
    label: 'Enterprise Pilot Readiness',
    score: 48,
    status: 'blocked',
    owner: 'Enterprise Product Lead',
    blockers: 7,
    evidenceRefs: ['evidence_enterprise_admin', 'evidence_policy_engine', 'evidence_trust_center'],
    nextDecision: 'Keep enterprise pilot in preview mode until SSO, audit, and policy controls are validated.',
  },
  {
    id: 'gate_marketplace_alpha',
    label: 'Marketplace Alpha Readiness',
    score: 58,
    status: 'blocked',
    owner: 'Marketplace Lead',
    blockers: 4,
    evidenceRefs: ['evidence_marketplace_homepage', 'evidence_template_detail', 'evidence_template_review_governance'],
    nextDecision: 'Restrict marketplace to curated demo templates until trust labels and install controls are ready.',
  }
];
```

---

## 17. Executive Risk Records Seed

```ts
export const executiveRiskRecords = [
  {
    id: 'risk_backend_contract_drift',
    title: 'Frontend mock API may drift from production backend contract',
    severity: 'high',
    status: 'active',
    owner: 'Backend/API Owner',
    dueDate: '2026-07-05',
    affectedSurfaces: ['Dashboard', 'AI Employee Builder', 'Workflow Builder', 'Marketplace Install', 'Enterprise Admin'],
    mitigation: 'Run backend-api-contract-review before production API work and generate contract tests.',
    evidenceRef: 'evidence_backend_api_contract_review',
    escalationPath: 'Product Lead -> Backend Lead -> Founder',
    decisionNeeded: 'Freeze mock API response envelope and endpoint family naming.',
  },
  {
    id: 'risk_enterprise_governance_gap',
    title: 'Enterprise governance preview may appear more complete than implementation',
    severity: 'high',
    status: 'active',
    owner: 'Governance Lead',
    dueDate: '2026-07-12',
    affectedSurfaces: ['Enterprise Admin', 'Trust Center', 'AI Employee Detail'],
    mitigation: 'Clearly label preview controls and block claims of production enforcement.',
    evidenceRef: 'evidence_production_readiness_gap_audit',
    escalationPath: 'Trust Lead -> Founder',
    decisionNeeded: 'Define which controls are demo-only vs production-enforced.',
  },
  {
    id: 'risk_demo_data_overclaim',
    title: 'Demo data may be mistaken for real traction or compliance proof',
    severity: 'medium',
    status: 'active',
    owner: 'Founder / Investor Relations Owner',
    dueDate: '2026-06-30',
    affectedSurfaces: ['Executive Dashboard', 'Investor Snapshot', 'Trust Center'],
    mitigation: 'Label sample data clearly and separate pilot proof from demo-only seed data.',
    evidenceRef: 'evidence_demo_data_seed_pack',
    escalationPath: 'Founder -> Legal/Advisor',
    decisionNeeded: 'Approve demo-only labeling and investor redaction rules.',
  }
];
```

---

## 18. Owner Action Center Seed

```ts
export const ownerActions = [
  {
    id: 'action_freeze_api_envelope',
    title: 'Freeze standard API response envelope',
    owner: 'Backend/API Owner',
    priority: 'high',
    dueDate: '2026-06-25',
    linkedRisk: 'risk_backend_contract_drift',
    linkedGate: 'gate_private_pilot',
    status: 'open',
    expectedOutput: 'Approved response envelope and error model in backend-api-contract-review.md',
  },
  {
    id: 'action_label_enterprise_preview_controls',
    title: 'Label enterprise admin controls by implementation status',
    owner: 'Enterprise Product Lead',
    priority: 'high',
    dueDate: '2026-06-27',
    linkedRisk: 'risk_enterprise_governance_gap',
    linkedGate: 'gate_enterprise_pilot',
    status: 'open',
    expectedOutput: 'Preview vs enforced state labels in Enterprise Admin mockup and demo script',
  },
  {
    id: 'action_prepare_investor_snapshot_export',
    title: 'Prepare investor-safe executive snapshot export',
    owner: 'Founder / Investor Relations Owner',
    priority: 'medium',
    dueDate: '2026-06-29',
    linkedRisk: 'risk_demo_data_overclaim',
    linkedGate: 'gate_mvp_demo',
    status: 'in_progress',
    expectedOutput: 'Redacted board/investor export using demo labels and proof references',
  }
];
```

---

## 19. Investor Snapshot Seed

```ts
export const investorSnapshot = {
  id: 'snapshot_investor_q3_demo',
  title: 'Ariyo Investor Snapshot — MVP to Pilot Readiness',
  reportingPeriod: 'Q3 Pilot Readiness Window',
  status: 'promising_with_governance_watch_items',
  headline: 'Ariyo has moved from concept architecture to a governed MVP execution system with demo-ready product surfaces, Codex-ready implementation order, and pilot onboarding infrastructure.',
  highlights: [
    '143+ core skill system expanded into execution, mockup, demo, pilot, and fundraising readiness layers.',
    'MVP scope locked across 12 product surfaces.',
    'Executive dashboard and release gates provide board-ready operating visibility.',
    'Pilot onboarding and feedback-to-roadmap systems are defined before pilot launch.'
  ],
  watchItems: [
    'Production backend contract review is still required.',
    'Enterprise governance must remain clearly labeled as preview until enforcement is implemented.',
    'Marketplace trust labels need stronger evidence coverage before public marketplace launch.'
  ],
  asks: [
    'Advisor review of enterprise pilot scope.',
    'Investor feedback on category narrative and use-of-funds clarity.',
    'Design partner introductions for controlled pilot validation.'
  ],
  redactionLevel: 'investor_safe',
};
```

---

## 20. Board Export Sample Seed

```ts
export const boardExportSample = {
  id: 'board_export_001',
  title: 'Board Review Export — Executive Dashboard Summary',
  sections: [
    'Operating Health',
    'Product Execution',
    'AI Employee Readiness',
    'Marketplace Health',
    'Enterprise Readiness',
    'Customer/Pilot Readiness',
    'Revenue/Fundraising',
    'Runway & Use of Funds',
    'Risks & Decisions',
    'Owner Actions'
  ],
  format: ['pdf', 'markdown', 'dashboard_snapshot'],
  includesSensitiveData: true,
  allowedAudience: ['founders', 'board', 'approved_advisors'],
  notAllowedAudience: ['public', 'unqualified_investors', 'customers_without_nda'],
  generatedFrom: ['executiveOperatingScore', 'executiveKpis', 'releaseReadinessGates', 'executiveRiskRecords', 'ownerActions'],
};
```

---

## 21. Evidence Reference Seed

```ts
export const executiveEvidenceRefs = [
  {
    id: 'evidence_product_surface_map',
    sourceSkill: 'product-surface-map.md',
    type: 'planning_evidence',
    confidence: 'high',
    freshness: 'current',
    summary: 'Defines product surfaces and implementation priority for MVP and demo readiness.',
  },
  {
    id: 'evidence_codex_master_prompt',
    sourceSkill: 'codex-execution-master-prompt.md',
    type: 'execution_evidence',
    confidence: 'high',
    freshness: 'current',
    summary: 'Defines Codex boot order, stop rules, and dependency-based execution sequence.',
  },
  {
    id: 'evidence_release_gate_checklist',
    sourceSkill: 'production-release-gate-checklist.md',
    type: 'release_evidence',
    confidence: 'high',
    freshness: 'current',
    summary: 'Defines release gate requirements across demo, pilot, enterprise pilot, marketplace alpha, and production launch.',
  },
  {
    id: 'evidence_demo_data_seed_pack',
    sourceSkill: 'demo-data-seed-pack.md',
    type: 'demo_evidence',
    confidence: 'medium',
    freshness: 'current',
    summary: 'Defines coherent demo data across product surfaces, but must be labeled demo-only.',
  }
];
```

---

## 22. API Contract for Executive Dashboard Data

Codex must expose the executive dashboard seed through the mock API layer.

Recommended mock endpoints:

```ts
GET /api/executive/dashboard-summary
GET /api/executive/kpis
GET /api/executive/release-gates
GET /api/executive/risks
GET /api/executive/owner-actions
GET /api/executive/investor-snapshot
GET /api/executive/board-export-preview
```

Standard response shape:

```ts
type AriyoApiResponse<T> = {
  data: T;
  meta: {
    requestId: string;
    generatedAt: string;
    dataClassification: 'demo_only' | 'pilot_evidence' | 'production';
    locale: string;
    direction: 'ltr' | 'rtl';
  };
  warnings?: Array<{
    code: string;
    message: string;
    severity: 'info' | 'warning' | 'risk';
  }>;
};
```

---

## 23. Required UI State Scenarios

Codex must implement these executive dashboard scenarios:

```ts
export const executiveDashboardScenarios = [
  'healthy_board_review',
  'pilot_blocked_by_governance',
  'investor_safe_redacted_view',
  'release_readiness_blocked',
  'high_risk_backend_contract_drift',
  'rtl_persian_board_review',
  'loading_kpis',
  'empty_no_pilot_evidence',
  'error_kpi_fetch_failed',
  'permission_blocked_investor_view'
];
```

Scenario behavior:

| Scenario | Purpose |
|---|---|
| healthy_board_review | Shows normal executive review state |
| pilot_blocked_by_governance | Demonstrates responsible risk handling |
| investor_safe_redacted_view | Shows investor-safe version |
| release_readiness_blocked | Shows launch gate failure |
| high_risk_backend_contract_drift | Shows major technical risk |
| rtl_persian_board_review | Validates RTL layout |
| loading_kpis | Tests loading skeletons |
| empty_no_pilot_evidence | Prevents fake pilot proof |
| error_kpi_fetch_failed | Tests error state |
| permission_blocked_investor_view | Tests data access governance |

---

## 24. Localization Seed

English label:

```ts
{
  operatingHealth: 'Operating Health',
  releaseReadiness: 'Release Readiness',
  ownerActions: 'Owner Actions',
  risksAndDecisions: 'Risks & Decisions',
  investorSnapshot: 'Investor Snapshot'
}
```

Persian label:

```ts
{
  operatingHealth: 'سلامت عملیاتی',
  releaseReadiness: 'آمادگی انتشار',
  ownerActions: 'اقدام‌های مسئول‌دار',
  risksAndDecisions: 'ریسک‌ها و تصمیم‌ها',
  investorSnapshot: 'خلاصه سرمایه‌گذار',
  direction: 'rtl'
}
```

Arabic label:

```ts
{
  operatingHealth: 'الصحة التشغيلية',
  releaseReadiness: 'جاهزية الإطلاق',
  ownerActions: 'إجراءات المالكين',
  risksAndDecisions: 'المخاطر والقرارات',
  investorSnapshot: 'ملخص المستثمر',
  direction: 'rtl'
}
```

---

## 25. Chart and Visualization Rules

Executive Dashboard visualizations must be conservative and decision-oriented.

Allowed visuals:

- KPI cards
- trend arrows
- small sparklines
- readiness bars
- risk severity chips
- owner action table
- board export preview
- milestone progress strip
- domain health matrix

Forbidden visuals:

- decorative pie charts
- inflated growth curves
- fake revenue charts without evidence
- untraceable investor traction graphs
- unlabelled compliance progress
- gamified executive metrics
- vague “AI productivity” meters

---

## 26. Codex Implementation Order

Codex must implement this data pack in this order:

1. Define TypeScript types for executive KPI objects.
2. Add `executiveDashboardData.ts` under the demo-data layer.
3. Add selector functions for dashboard modes.
4. Add mock API endpoints for executive dashboard data.
5. Add scenario fixtures for loading, empty, error, blocked, investor-safe, and RTL states.
6. Wire KPI cards to data layer.
7. Wire risk panels to data layer.
8. Wire owner action center to data layer.
9. Wire release readiness strip to data layer.
10. Wire investor snapshot and board export preview.
11. Validate RTL/LTR rendering.
12. Validate redaction and permission views.
13. Generate Work Unit Report.

Codex must not hardcode dashboard numbers directly in components.

---

## 27. Acceptance Criteria

The Executive Dashboard Demo Data Pack is implemented correctly when:

- all KPI values come from typed seed data;
- all cards include owner, trend, status, target, and evidence;
- all risks include severity, owner, mitigation, due date, and decision needed;
- investor mode redacts sensitive internal data;
- board mode exposes enough detail for governance review;
- Persian and Arabic modes are fully RTL and right-aligned;
- English and European modes are fully LTR and left-aligned;
- launch gates display blocked states responsibly;
- demo-only data is clearly labeled;
- Codex does not invent unsupported traction;
- all data can be replaced by backend API responses later.

---

## 28. Work Unit Report Format

After implementing this data pack, Codex must report:

```md
# Executive Dashboard Demo Data Work Unit Report

## Implemented Files
- ...

## Data Objects Added
- ...

## API Mock Endpoints Added
- ...

## UI Surfaces Wired
- ...

## RTL/LTR Validation
- English/European LTR: Pass/Fail
- Persian RTL: Pass/Fail
- Arabic RTL: Pass/Fail

## Redaction Validation
- Investor-safe mode: Pass/Fail
- Board mode: Pass/Fail
- Internal mode: Pass/Fail

## Risks / Open Questions
- ...

## Next Recommended Work Unit
- ...
```

---

## 29. Golden Rule

The Executive Dashboard must not make Ariyo look bigger than it is.

It must make Ariyo look disciplined, honest, governed, investor-ready, and capable of turning capital, pilots, product execution, and enterprise readiness into measurable progress.
