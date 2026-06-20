# Ariyo Marketplace Search & Recommendation Engine Skill

## 1. Core Contract

Ariyo Marketplace Search & Recommendation Engine is not a search bar.

It is the governed discovery system that helps customers find the safest, most relevant, most valuable, most installable, and most outcome-producing AI Employee assets for their business context.

Marketplace discovery must combine semantic understanding, keyword precision, quality ranking, personalization, plan-aware filtering, risk controls, trust signals, creator reputation, business use case fit, and explainable recommendations.

Ariyo must not recommend templates only because they are popular, sponsored, profitable, or recently published.

Ariyo must recommend templates because they are relevant, safe, trustworthy, installable, measurable, and likely to help the customer achieve a real business outcome.

---

## 2. Purpose

This skill defines how Ariyo must design, build, evaluate, monitor, and govern Marketplace search and recommendation across:

- AI Employee templates
- Agent Team templates
- Workflow templates
- Knowledge packs
- Integration bundles
- GEO / AI SEO templates
- Industry solution bundles
- Partner service packages
- Marketplace collections
- Recommended next assets after onboarding
- Recommended upgrades from Basic to Pro or Smart
- Recommended templates for customer lifecycle stages
- Recommended templates for customer health recovery
- Recommended templates for marketplace expansion

The goal is to make discovery feel intelligent without becoming opaque, biased, manipulative, unsafe, or commercially distorted.

---

## 3. Dependencies

This skill depends on and must remain consistent with:

- `product-strategy.md`
- `brand-messaging-system.md`
- `content-marketing-engine.md`
- `pricing-packaging-strategy.md`
- `ecosystem-marketplace-economy.md`
- `agent-marketplace-template-builder.md`
- `ai-agent-template-review-governance.md`
- `template-quality-ranking-system.md`
- `agent-team-templates.md`
- `ai-agent-permissions-runtime.md`
- `ai-agent-memory-context.md`
- `ai-agent-evaluation-benchmarking.md`
- `ai-agent-observability-tracing.md`
- `customer-lifecycle-automation.md`
- `customer-success-playbooks.md`
- `data-governance-privacy.md`
- `security-threat-model.md`
- `observability-analytics-events.md`
- `admin-permissions.md`
- `integration-ecosystem.md`
- `feature-flags-rollout-system.md`

---

## 4. Discovery Philosophy

Marketplace discovery must answer:

1. What is the customer trying to accomplish?
2. What business context do we know?
3. What plan is the customer on?
4. What tools and integrations are available?
5. What risk level can the customer safely handle?
6. Which templates are approved, current, safe, and high quality?
7. Which templates have produced outcomes for similar customers?
8. Which templates are installable right now?
9. Which recommendations are helpful but require upgrade, setup, or approval?
10. Why is each result being shown?

Ariyo must optimize discovery for customer confidence and business value, not endless browsing.

---

## 5. Search Modes

Ariyo Marketplace must support multiple discovery modes.

### 5.1 Keyword Search

Use when the customer searches exact terms:

- "sales follow up"
- "support chatbot"
- "GEO audit"
- "invoice automation"
- "WhatsApp support"
- "customer success health score"

Keyword search must support:

- exact match
- fuzzy match
- synonym expansion
- typo tolerance
- phrase boosting
- title boosting
- category boosting
- integration name boosting
- industry boosting
- language-aware search

### 5.2 Semantic Search

Use when the customer expresses intent naturally:

- "I want an AI employee to reduce support tickets"
- "help me rank better in ChatGPT answers"
- "automate follow-up after sales calls"
- "summarize customer conversations and detect churn risk"

Semantic search must map natural language to:

- business goal
- role/function
- template category
- required integrations
- risk level
- likely plan fit
- expected outcome
- setup complexity

### 5.3 Hybrid Search

Hybrid search must combine:

- keyword relevance
- vector similarity
- quality score
- installability
- plan compatibility
- trust signals
- outcome performance
- user context
- recency and freshness
- creator reputation

Ariyo must not rely only on vector similarity. Vector similarity can surface plausible but unsafe or low-quality assets.

### 5.4 Guided Discovery

Use when the customer does not know what to search.

The guided flow should ask:

- What team do you want to improve?
- What is the painful workflow?
- What tools do you already use?
- Do you want help drafting, answering, analyzing, automating, or reporting?
- Do you need human approval before actions?
- Do you want a single AI employee or a team of agents?

### 5.5 Contextual Recommendations

Recommendations may appear inside:

- onboarding
- dashboard
- AI employee setup
- workflow builder
- integration setup
- knowledge base setup
- pricing page
- marketplace homepage
- template detail page
- customer success dashboard
- admin command center

Contextual recommendations must always explain why they appear.

---

## 6. Marketplace Asset Index

Every marketplace asset must be indexed using structured metadata.

### 6.1 Core Asset Fields

```ts
type MarketplaceAsset = {
  id: string;
  slug: string;
  type: MarketplaceAssetType;
  title: string;
  subtitle: string;
  description: string;
  creatorId: string;
  creatorType: "ariyo" | "partner" | "agency" | "consultant" | "developer" | "customer";
  status: MarketplaceAssetStatus;
  visibility: MarketplaceVisibility;
  version: string;
  category: string;
  subcategory?: string;
  industries: string[];
  useCases: string[];
  targetRoles: string[];
  businessOutcomes: string[];
  requiredPlan: "basic" | "pro" | "smart" | "enterprise";
  recommendedPlan: "basic" | "pro" | "smart" | "enterprise";
  requiredIntegrations: string[];
  optionalIntegrations: string[];
  requiredPermissions: string[];
  riskLevel: "low" | "medium" | "high" | "critical";
  setupComplexity: "low" | "medium" | "high";
  automationLevel: "assistive" | "semi_automated" | "review_gated" | "autonomous_with_controls";
  humanReviewRequired: boolean;
  averageSetupMinutes?: number;
  estimatedCostTier: "low" | "medium" | "high";
  localeSupport: string[];
  pricingModel: MarketplacePricingModel;
  tags: string[];
  trustBadges: string[];
  qualityScore: number;
  creatorTrustScore: number;
  installCount: number;
  activationRate?: number;
  outcomeCompletionRate?: number;
  incidentRate?: number;
  refundRate?: number;
  createdAt: string;
  updatedAt: string;
  lastReviewedAt?: string;
  deprecatedAt?: string;
};
```

### 6.2 Asset Types

```ts
type MarketplaceAssetType =
  | "ai_employee_template"
  | "agent_team_template"
  | "workflow_template"
  | "knowledge_pack"
  | "integration_bundle"
  | "geo_template"
  | "industry_solution_bundle"
  | "partner_service_package"
  | "training_course"
  | "dashboard_template";
```

### 6.3 Searchable Text Fields

Search indexing must include:

- title
- subtitle
- description
- outcome statements
- use cases
- industries
- required tools
- integration names
- target role names
- FAQs
- setup instructions
- limitations
- customer reviews
- changelog summary
- evaluation summary

Sensitive internal review notes must not be indexed into customer-facing search.

---

## 7. Query Understanding System

Marketplace search must parse intent before ranking.

### 7.1 Query Intent Classes

```ts
type MarketplaceQueryIntent =
  | "find_template"
  | "solve_business_problem"
  | "compare_templates"
  | "find_integration_solution"
  | "find_industry_solution"
  | "find_role_based_solution"
  | "find_geo_solution"
  | "find_low_cost_solution"
  | "find_smart_automation"
  | "find_safe_review_gated_solution"
  | "upgrade_discovery"
  | "troubleshooting_template"
  | "creator_discovery";
```

### 7.2 Extracted Query Signals

```ts
type MarketplaceQueryUnderstanding = {
  rawQuery: string;
  normalizedQuery: string;
  language: string;
  intent: MarketplaceQueryIntent;
  businessGoal?: string;
  functionArea?: "sales" | "support" | "marketing" | "operations" | "finance" | "security" | "customer_success" | "product" | "geo";
  industry?: string;
  targetRole?: string;
  requiredIntegration?: string[];
  desiredOutcome?: string[];
  riskPreference?: "safe" | "balanced" | "advanced";
  costPreference?: "low" | "balanced" | "premium";
  automationPreference?: "assistive" | "reviewed" | "automated";
  planIntent?: "basic" | "pro" | "smart" | "upgrade";
  mustHaveTerms: string[];
  excludeTerms: string[];
};
```

### 7.3 Query Expansion Rules

Ariyo may expand terms, but must not change intent.

Examples:

- "support bot" -> support AI employee, helpdesk assistant, ticket deflection
- "rank in ChatGPT" -> GEO, AI SEO, generative engine visibility, answer engine optimization
- "sales follow up" -> CRM follow-up, email sequence, demo follow-up, pipeline nurturing
- "customer churn" -> health score, retention risk, renewal risk, CS automation

Query expansion must be auditable for debugging and ranking explanation.

---

## 8. Ranking Architecture

Search ranking must use a multi-stage architecture.

### 8.1 Stage 1: Candidate Retrieval

Retrieve candidates from:

- keyword index
- semantic vector index
- category graph
- integration graph
- plan-compatible inventory
- personalized context inventory
- promoted/curated collections

### 8.2 Stage 2: Hard Filters

Remove assets that are:

- unpublished
- suspended
- deprecated without replacement
- incompatible with organization plan
- incompatible with organization region if relevant
- requiring blocked integrations
- requiring unavailable permissions
- restricted by admin policy
- restricted by security policy
- hidden by feature flag
- failing minimum quality score
- failing minimum trust score

### 8.3 Stage 3: Scoring

Recommended ranking score:

```ts
type MarketplaceRankingScore = {
  keywordRelevance: number;
  semanticRelevance: number;
  businessGoalFit: number;
  planFit: number;
  installability: number;
  qualityScore: number;
  creatorTrustScore: number;
  outcomePerformance: number;
  safetyScore: number;
  costFit: number;
  freshnessScore: number;
  personalizationFit: number;
  diversityBoost: number;
  sponsoredBoost: number;
  penaltyScore: number;
  finalScore: number;
};
```

### 8.4 Ranking Formula Principle

Ariyo must not expose exact ranking formulas publicly.

Ariyo may expose explainable high-level factors:

- relevant to your search
- works with your current plan
- fits your connected tools
- high customer activation rate
- verified by Ariyo review
- low incident history
- recommended for your industry
- frequently used by similar teams

---

## 9. Recommendation Engine

### 9.1 Recommendation Types

```ts
type RecommendationSurface =
  | "marketplace_home"
  | "search_results"
  | "template_detail"
  | "onboarding"
  | "dashboard"
  | "ai_employee_setup"
  | "workflow_builder"
  | "integration_setup"
  | "knowledge_setup"
  | "pricing_upgrade"
  | "customer_success"
  | "admin_command_center";
```

### 9.2 Recommendation Reasons

Every recommendation must include a reason.

Examples:

- "Recommended because you connected HubSpot."
- "Recommended for support teams using Pro."
- "Recommended because your first AI employee is not deployed yet."
- "Recommended because similar companies use this to reduce ticket volume."
- "Recommended because this GEO template matches your content marketing workflow."
- "Requires Smart because it uses multi-agent automation and advanced GEO monitoring."

### 9.3 Recommendation Inputs

Recommendations may use:

- current plan
- industry
- organization size
- selected business goals
- activated integrations
- installed templates
- onboarding progress
- lifecycle stage
- health score
- usage signals
- marketplace browsing behavior
- support tickets
- customer success notes if permissioned
- admin preferences

Recommendations must not use sensitive data unless explicitly allowed by privacy and permission rules.

---

## 10. Personalization Rules

Personalization must improve usefulness without becoming invasive.

### 10.1 Allowed Personalization

Allowed signals:

- plan
- selected industry
- selected goal
- connected integrations
- installed assets
- completion status
- high-level usage patterns
- team role
- marketplace categories viewed
- explicit preferences

### 10.2 Restricted Personalization

Restricted signals require special care:

- customer conversation content
- imported knowledge content
- support ticket content
- sales pipeline data
- billing details
- security incident data
- internal admin notes

### 10.3 Prohibited Personalization

Ariyo must not personalize marketplace ranking using:

- raw sensitive customer data
- private customer files without permission
- personal attributes unrelated to business need
- hidden behavioral manipulation
- creator payment incentives alone
- confidential internal notes

---

## 11. Plan-Aware Discovery: Basic / Pro / Smart

Marketplace discovery must be transparent about plan compatibility.

### 11.1 Basic Discovery

Basic customers should see:

- simple AI employee templates
- low-risk templates
- assistive workflows
- limited knowledge packs
- no risky external automation
- clear upgrade previews
- safe recommendations

Basic must not feel empty. It should show useful starter templates.

### 11.2 Pro Discovery

Pro customers should see:

- workflow templates
- integration bundles
- team collaboration templates
- human-review-enabled automation
- operational dashboards
- customer success and sales templates
- moderate GEO templates

Pro recommendations must emphasize daily operational value.

### 11.3 Smart Discovery

Smart customers should see:

- multi-agent teams
- advanced GEO / AI SEO templates
- advanced automation
- deep RAG templates
- predictive recommendations
- command center dashboards
- high-value partner solutions
- advanced marketplace bundles

Smart discovery may surface more powerful assets, but must also show:

- setup complexity
- cost expectations
- approval requirements
- risk level
- governance status

Smart is full-option, not uncontrolled.

### 11.4 Upgrade-Aware Results

If a result requires a higher plan:

- show it as locked or previewable
- explain why it requires the plan
- show the business value
- show a non-invasive upgrade CTA
- never hide all better options without explanation

Example copy:

> This template requires Smart because it uses multi-agent automation, advanced GEO monitoring, and higher AI cost controls.

---

## 12. GEO Template Discovery

Ariyo Marketplace must treat GEO / AI SEO templates as a first-class discovery category.

### 12.1 GEO Search Queries

Examples:

- "rank in ChatGPT answers"
- "AI SEO audit"
- "track Gemini citations"
- "Claude visibility monitoring"
- "optimize blog for AI answers"
- "DeepSeek content visibility"
- "answer engine optimization"

### 12.2 GEO Asset Types

- GEO audit template
- AI visibility tracker
- content optimization workflow
- competitor citation monitor
- query monitoring dashboard
- CMS content assistant
- GEO reporting template
- authority signal improvement checklist

### 12.3 GEO Ranking Signals

GEO templates must be ranked using:

- provider coverage
- query monitoring accuracy
- content optimization quality
- historical tracking support
- citation/paraphrase detection quality
- CMS integration support
- reporting clarity
- false claim avoidance
- customer outcome quality

Ariyo must not rank GEO templates higher for promising guaranteed AI citations.

---

## 13. Explainable Recommendations

Ariyo must make recommendations explainable without revealing exploitable ranking formulas.

### 13.1 Customer-Facing Explanation

Each result may include:

- why this matches your query
- why this works with your plan
- which integrations it uses
- what outcome it targets
- what setup is required
- what risk level it has
- what approval it requires
- whether it is Ariyo-reviewed

### 13.2 Internal Explanation

Internal admin views may include:

- ranking score breakdown
- applied boosts
- applied penalties
- personalization inputs
- hidden filters
- quality score inputs
- trust score inputs
- sponsored status
- abuse detection notes

Internal explanation must be permission-gated.

---

## 14. Sponsored Listings

Sponsored listings may exist only if trust is protected.

Rules:

- sponsored status must be visible
- sponsored templates must pass review
- sponsored templates must meet minimum quality score
- sponsored boost must never override critical safety penalties
- sponsored placement must be capped
- sponsored templates must not dominate results
- sponsored results must remain relevant to the query

Forbidden:

- paid ranking for suspended assets
- hiding sponsored label
- promoting low-quality assets
- promoting risky templates to Basic users without explanation

---

## 15. Abuse Prevention

Marketplace search is vulnerable to manipulation.

Ariyo must detect:

- keyword stuffing
- fake installs
- fake reviews
- review farms
- creator self-install loops
- spam templates
- misleading tags
- duplicate templates
- overclaiming descriptions
- sponsored manipulation
- competitor sabotage
- generated review abuse
- prompt injection in listing metadata

Abuse signals must feed into:

- ranking penalties
- creator trust score
- marketplace review queue
- suspension workflows
- internal admin alerts

---

## 16. Search API Contract

### 16.1 Search Marketplace

`POST /api/marketplace/search`

Request:

```json
{
  "query": "AI SEO tracker for ChatGPT and Gemini",
  "filters": {
    "asset_types": ["geo_template", "workflow_template"],
    "plan": "smart",
    "industries": ["saas", "agency"],
    "required_integrations": ["wordpress"],
    "risk_levels": ["low", "medium"],
    "max_setup_complexity": "medium"
  },
  "context": {
    "organization_id": "org_123",
    "workspace_id": "ws_456",
    "surface": "marketplace_home"
  },
  "pagination": {
    "limit": 20,
    "cursor": null
  }
}
```

Response:

```json
{
  "query_id": "mq_123",
  "understanding": {
    "intent": "find_geo_solution",
    "business_goal": "improve_ai_answer_visibility",
    "function_area": "geo",
    "required_integrations": ["wordpress"],
    "plan_intent": "smart"
  },
  "results": [
    {
      "asset_id": "asset_geo_001",
      "title": "GEO Visibility Tracker for AI Answers",
      "type": "geo_template",
      "creator": "Ariyo",
      "required_plan": "smart",
      "quality_score": 94,
      "risk_level": "medium",
      "setup_complexity": "medium",
      "explanation": [
        "Matches your GEO search intent",
        "Supports AI visibility monitoring workflows",
        "Recommended for Smart because it uses advanced monitoring and reporting"
      ],
      "badges": ["Ariyo Reviewed", "Smart Recommended", "GEO Ready"],
      "cta": {
        "label": "View template",
        "action": "open_asset_detail"
      }
    }
  ],
  "pagination": {
    "next_cursor": "cursor_abc"
  }
}
```

### 16.2 Get Recommendations

`POST /api/marketplace/recommendations`

Request:

```json
{
  "organization_id": "org_123",
  "workspace_id": "ws_456",
  "surface": "dashboard",
  "goal": "increase_sales_follow_up",
  "limit": 6
}
```

Response:

```json
{
  "recommendation_id": "rec_123",
  "surface": "dashboard",
  "items": [
    {
      "asset_id": "asset_sales_101",
      "title": "Sales Follow-Up AI Employee",
      "reason": "Recommended because your team selected sales pipeline growth as a goal.",
      "required_plan": "pro",
      "installability": "ready",
      "expected_outcome": "Faster follow-up after demos"
    }
  ]
}
```

### 16.3 Explain Result

`GET /api/marketplace/search-results/{query_id}/assets/{asset_id}/explanation`

Response:

```json
{
  "asset_id": "asset_sales_101",
  "customer_explanation": [
    "This template matches your sales follow-up query.",
    "It works with your current Pro plan.",
    "It can connect to your CRM integration."
  ],
  "internal_explanation": {
    "keyword_relevance": 0.82,
    "semantic_relevance": 0.91,
    "quality_score": 0.88,
    "creator_trust_score": 0.93,
    "penalties": []
  }
}
```

### 16.4 Track Search Feedback

`POST /api/marketplace/search-feedback`

Request:

```json
{
  "query_id": "mq_123",
  "asset_id": "asset_geo_001",
  "feedback_type": "useful",
  "comment": "This was exactly what I needed"
}
```

---

## 17. Recommendation Events

Track events:

```text
marketplace_search_submitted
marketplace_query_understood
marketplace_search_results_returned
marketplace_result_clicked
marketplace_result_explanation_viewed
marketplace_filter_applied
marketplace_recommendation_shown
marketplace_recommendation_clicked
marketplace_recommendation_dismissed
marketplace_asset_installed_from_search
marketplace_asset_installed_from_recommendation
marketplace_no_results_shown
marketplace_upgrade_result_clicked
marketplace_sponsored_result_shown
marketplace_abuse_signal_detected
```

All events must include:

- organization ID
- workspace ID
- user role
- surface
- plan
- query ID
- asset ID when applicable
- privacy-safe metadata
- correlation ID

---

## 18. Advanced KPI System

### 18.1 Search Quality KPIs

- Search Result Click-Through Rate
- Search-to-Install Rate
- Search-to-Activation Rate
- No Result Rate
- Zero Useful Result Rate
- Query Reformulation Rate
- Search Abandonment Rate
- Median Time to Find Asset
- Search Relevance Feedback Score

### 18.2 Recommendation KPIs

- Recommendation Click-Through Rate
- Recommendation Install Rate
- Recommendation Activation Rate
- Recommendation Dismissal Rate
- Recommendation Outcome Completion Rate
- Recommendation Revenue Assisted
- Recommendation Churn Reduction Impact

### 18.3 Marketplace Quality KPIs

- High Quality Result Exposure Rate
- Low Quality Result Exposure Rate
- Incident-Prone Result Exposure Rate
- Sponsored Listing Quality Ratio
- Template Quality Score Weighted Exposure
- Creator Trust Weighted Exposure

### 18.4 Business KPIs

- Marketplace Revenue from Search
- Marketplace Revenue from Recommendations
- Upgrade Revenue Assisted by Locked Results
- Partner Revenue Assisted
- Smart Plan Assisted Conversion
- GEO Template Discovery Conversion

### 18.5 Safety KPIs

- Risky Template Exposure Rate
- Policy-Violating Result Exposure Rate
- Abuse Manipulation Attempt Rate
- Search-Induced Incident Rate
- Recommendation-Induced Incident Rate

---

## 19. Frontend Requirements

Marketplace UI must include:

- search bar with intent-friendly placeholder
- category navigation
- guided discovery entry point
- filters for plan, category, industry, integration, risk, setup complexity
- clear plan badges
- quality/trust badges
- explanation drawer
- locked preview cards
- sponsored labels
- no-results recovery
- related searches
- recommended collections
- mobile-first layout
- accessible keyboard navigation
- loading, empty, error, and degraded states

Search cards must show:

- title
- creator
- asset type
- outcome
- plan required
- risk level
- setup complexity
- review badge
- install CTA or upgrade CTA

---

## 20. Backend Requirements

Backend must provide:

- search index pipeline
- vector embedding pipeline
- metadata normalization
- query understanding service
- ranking service
- recommendation service
- personalization policy layer
- plan compatibility service
- trust and quality score integration
- sponsored listing service
- abuse detection service
- analytics event service
- feedback loop service

Search ranking must be versioned.

Every search result should store:

- query ID
- ranking version
- candidate set version
- personalization version
- filters applied
- final result order

---

## 21. Index Freshness

Search index must update when:

- asset is published
- asset is suspended
- asset is updated
- quality score changes
- creator trust score changes
- plan compatibility changes
- integration requirements change
- incident penalty changes
- sponsored campaign changes
- marketplace category changes

Stale search results can damage trust.

---

## 22. Privacy & Security Rules

Ariyo must not leak:

- private customer data in recommendations
- internal review notes
- creator private revenue data
- confidential ranking formulas
- security investigation details
- other organizations' installation data

Personalization must be organization-scoped.

Search logs must not store raw sensitive content unnecessarily.

---

## 23. Quality Guardrails

A result must be demoted or hidden if:

- template is suspended
- template has active incident
- template has high unsafe output rate
- template has high refund rate
- template has low activation rate
- template is stale
- creator trust score dropped
- listing overclaims outcomes
- required integration is broken
- template no longer passes review policy

---

## 24. Forbidden Patterns

Never:

- rank by raw installs only
- rank sponsored assets above unsafe penalties
- hide sponsored labels
- recommend Smart assets without explaining cost/risk
- recommend templates incompatible with customer plan without clarity
- personalize using sensitive data without permission
- expose exact ranking formulas publicly
- surface suspended templates
- allow keyword stuffing to improve ranking
- treat marketplace search as simple SQL text search only
- return no results without recovery suggestions
- recommend templates with unresolved critical incidents
- show unsafe automation templates to Basic customers as normal results
- use creator influence as a trust substitute
- recommend templates that have not passed review

---

## 25. Golden Rule

Ariyo Marketplace Search must make the right solution easier to find, the wrong solution harder to install, and the safest valuable option easiest to trust.

---

## 26. Final Rule

When search and recommendation conflict with safety, privacy, plan truth, quality governance, or customer trust, trust wins.
