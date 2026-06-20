# Ariyo Marketplace Search Quality Analytics Skill

## 1. Core Contract

Ariyo Marketplace Search Quality Analytics is not a dashboard of search counts.

It is the governed measurement, diagnosis, experimentation, feedback, relevance, merchandising-quality, recommendation-quality, and continuous-improvement system that determines whether Ariyo Marketplace search and discovery are helping customers find the safest, most relevant, most installable, most trusted, and most outcome-producing AI Employee assets.

Ariyo must know when search succeeds.

Ariyo must know when search fails.

Ariyo must improve discovery without allowing popularity, sponsorship, manipulation, creator influence, or short-term revenue to degrade relevance, trust, safety, plan fit, region compatibility, or customer outcomes.

---

## 2. Purpose

This skill defines how Ariyo measures and improves Marketplace search quality, recommendation quality, discovery quality, category browsing, promoted-result quality, semantic relevance, query understanding, no-result recovery, customer intent matching, and post-search outcomes.

It must be used when building or modifying:

- Marketplace search analytics
- Query understanding telemetry
- Semantic search quality measurement
- Search result relevance scoring
- No-result and low-result diagnostics
- Query reformulation flows
- Recommendation feedback loops
- Promotion and sponsored placement quality checks
- Marketplace search experiments
- Search-to-install funnels
- Search-to-activation funnels
- Customer-facing discovery improvements
- Internal search quality dashboards
- Creator-facing search insight reports
- Enterprise private catalog discovery analytics

---

## 3. Related Ariyo Skills

This skill depends on and must remain consistent with:

- `marketplace-search-recommendation-engine.md`
- `template-quality-ranking-system.md`
- `marketplace-merchandising-promotion-system.md`
- `marketplace-customer-review-reputation-system.md`
- `marketplace-template-trust-labeling-system.md`
- `marketplace-template-certification-program.md`
- `marketplace-template-outcome-intelligence.md`
- `marketplace-template-health-monitoring.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-installation-entitlements.md`
- `marketplace-data-residency-region-controls.md`
- `marketplace-regulatory-compliance-matrix.md`
- `product-analytics-growth.md`
- `observability-analytics-events.md`
- `quality-assurance-system.md`
- `ai-safety-evaluation.md`

Search quality analytics must not override governance, policy, trust, entitlement, region, billing, or safety constraints.

---

## 4. Search Quality Philosophy

Ariyo Marketplace search quality must be evaluated by customer usefulness, not by vanity metrics.

High search volume is not search success.

High click-through is not search success.

High install volume is not search success.

Search succeeds when the customer:

1. Expresses a real business need.
2. Receives relevant, safe, trustworthy results.
3. Understands why results are shown.
4. Can compare options clearly.
5. Can install or request approval without surprises.
6. Achieves activation.
7. Gets measurable business value.
8. Does not experience avoidable risk, cost, disappointment, or policy conflict.

---

## 5. Search Quality Measurement Layers

Ariyo must measure search quality across six layers.

### 5.1 Query Layer

Measures what the customer asked for.

Examples:

- Search query text
- Query language
- Query intent
- Query category
- Business function
- Industry context
- Plan context
- Region context
- Workspace/catalog scope
- Query ambiguity
- Query reformulation count

### 5.2 Retrieval Layer

Measures whether the system found plausible candidates.

Examples:

- Result count
- No-result rate
- Low-result rate
- Filter-exhausted rate
- Semantic match score
- Keyword match score
- Category match score
- Catalog availability
- Region compatibility
- Plan compatibility
- Entitlement availability

### 5.3 Ranking Layer

Measures whether the best results were placed correctly.

Examples:

- Result relevance by rank
- Trust score by rank
- Quality score by rank
- Outcome score by rank
- Sponsored result position
- Certified result position
- Private catalog result position
- Demoted risky asset visibility

### 5.4 Interaction Layer

Measures how customers interact with results.

Examples:

- Click-through rate
- Save rate
- Compare rate
- Detail-page open rate
- Install preview open rate
- Request approval rate
- Abandonment point
- Filter usage
- Sort changes
- Query refinement

### 5.5 Conversion Layer

Measures whether discovery produced useful adoption.

Examples:

- Search-to-install rate
- Search-to-request-approval rate
- Search-to-activation rate
- Search-to-paid-conversion rate
- Search-to-renewal contribution
- Search-to-successful-run rate
- Search-to-outcome rate

### 5.6 Trust & Outcome Layer

Measures whether search led to safe and durable value.

Examples:

- Installed result health
- Unsafe output rate after search install
- Refund/dispute rate by query
- Incident rate by result source
- Uninstall rate after search install
- Outcome completion rate
- ROI signal
- Customer-confirmed value
- Support burden after search install

---

## 6. Core Data Objects

### 6.1 MarketplaceSearchQualityEvent

```ts
export interface MarketplaceSearchQualityEvent {
  id: string;
  organizationId: string;
  workspaceId?: string;
  userIdHash: string;
  sessionId: string;
  queryId: string;
  queryTextRedacted: string;
  queryLanguage?: string;
  queryIntent?: SearchIntent;
  catalogScope: CatalogScope;
  plan: 'basic' | 'pro' | 'smart' | 'enterprise';
  region?: string;
  filtersApplied: SearchFilterSnapshot[];
  resultCount: number;
  topResultIds: string[];
  noResult: boolean;
  lowConfidence: boolean;
  timestamp: string;
}
```

### 6.2 SearchQualityScore

```ts
export interface SearchQualityScore {
  queryId: string;
  retrievalScore: number;
  relevanceScore: number;
  rankingQualityScore: number;
  trustSafetyScore: number;
  planFitScore: number;
  regionFitScore: number;
  outcomeScore?: number;
  customerSatisfactionScore?: number;
  overallScore: number;
  confidence: 'low' | 'medium' | 'high';
  calculatedAt: string;
}
```

### 6.3 QueryIntent

```ts
export type SearchIntent =
  | 'find_template'
  | 'solve_business_problem'
  | 'compare_templates'
  | 'find_integration'
  | 'find_agent_team'
  | 'find_workflow'
  | 'find_geo_template'
  | 'find_knowledge_pack'
  | 'find_certified_asset'
  | 'find_enterprise_ready_asset'
  | 'request_private_catalog_asset'
  | 'unknown';
```

### 6.4 SearchResultQualitySnapshot

```ts
export interface SearchResultQualitySnapshot {
  queryId: string;
  assetId: string;
  rank: number;
  resultType: 'organic' | 'sponsored' | 'promoted' | 'editorial' | 'recommended' | 'private_catalog';
  relevanceScore: number;
  qualityScore: number;
  trustScore: number;
  outcomeScore?: number;
  certificationLevel?: string;
  planCompatible: boolean;
  regionCompatible: boolean;
  entitlementCompatible: boolean;
  riskFlags: string[];
  explanationShown: boolean;
}
```

### 6.5 NoResultAnalysis

```ts
export interface NoResultAnalysis {
  queryId: string;
  normalizedQuery: string;
  suspectedIntent?: SearchIntent;
  noResultReason:
    | 'no_matching_assets'
    | 'filters_too_strict'
    | 'region_blocked'
    | 'plan_blocked'
    | 'private_catalog_restricted'
    | 'policy_restricted'
    | 'language_gap'
    | 'synonym_gap'
    | 'taxonomy_gap'
    | 'ranking_index_gap'
    | 'unknown';
  suggestedRecoveryActions: SearchRecoveryAction[];
}
```

---

## 7. Required KPIs

### 7.1 Search Success Rate

Percentage of searches that lead to a useful downstream action.

Useful actions include:

- Opening a relevant template detail page
- Saving a template
- Comparing templates
- Starting install preview
- Requesting approval
- Installing
- Activating
- Achieving a measurable outcome

### 7.2 No-Result Rate

Percentage of searches returning zero visible results.

Must be segmented by:

- Query language
- Plan
- Category
- Catalog scope
- Region
- Filters applied
- User role
- Private/public marketplace

### 7.3 Low-Relevance Result Rate

Percentage of searches where top results are weakly related to the query.

Must include human-reviewed and AI-assisted sampled judgments.

### 7.4 Query Reformulation Rate

Percentage of sessions where users rewrite their query because initial results were poor.

High reformulation may indicate:

- Poor synonym handling
- Weak semantic index
- Category mismatch
- Missing template supply
- Misleading result titles
- Poor filter defaults

### 7.5 Search Abandonment Rate

Percentage of search sessions that end without useful interaction.

Must not be interpreted alone. Some users may search for research, comparison, or validation.

### 7.6 Search-to-Activation Rate

Percentage of search sessions that lead to an activated template.

This is stronger than search-to-install.

### 7.7 Search-to-Outcome Rate

Percentage of search sessions that lead to a measured business outcome.

This is the most important long-term search quality metric.

### 7.8 Promoted Result Quality Ratio

Measures whether promoted and sponsored results perform safely and usefully compared with organic results.

Promoted assets must not have worse safety, trust, refund, incident, or uninstall performance than comparable organic assets.

### 7.9 Recommendation Feedback Score

Measures whether customers find recommendations useful.

Signals include:

- Helpful / not helpful feedback
- Dismissal reason
- Save rate
- Install preview rate
- Activation rate
- Outcome rate
- Negative feedback rate

### 7.10 Search Integrity Score

Measures search resistance to manipulation.

Signals include:

- Suspicious clicks
- Creator self-clicking
- Fake installs
- Incentivized review/search behavior
- Abnormal click-through spikes
- Ranking abuse attempts
- Sponsored disclosure violations

---

## 8. Query Understanding Analytics

Ariyo must analyze search queries to understand intent and supply gaps.

### 8.1 Query Normalization

Normalize:

- Casing
- Plurals
- Typos
- Synonyms
- Industry phrases
- Product naming variants
- Integration names
- Role terms
- Business outcome phrases
- Persian/English mixed queries where applicable

### 8.2 Intent Detection

Search quality analytics must classify whether a query is asking for:

- A known template
- A business problem solution
- A workflow automation
- An integration
- An AI Employee role
- A GEO/SEO asset
- A knowledge pack
- A certified template
- A low-cost option
- An enterprise-ready solution
- A private catalog asset

### 8.3 Query Gap Detection

Ariyo must identify recurring searches with weak results.

Examples:

- High search volume but no assets
- Assets exist but not surfaced
- Results exist but low activation
- Customers search for terms creators do not use
- Customers search in one language but assets are described in another
- Enterprise users search for compliance terms missing from metadata

---

## 9. No-Result Recovery

No-result experiences must be actively repaired.

### 9.1 Customer-Facing Recovery

When no results appear, Ariyo should offer:

- Relax filters
- Show adjacent categories
- Suggest query reformulations
- Suggest request-template flow
- Suggest private catalog request
- Suggest creator/partner solution request
- Suggest related certified templates
- Explain if region, plan, policy, or entitlement constraints caused the result gap

### 9.2 Internal Recovery

Ariyo operators should see:

- Top no-result queries
- No-result reasons
- Missing categories
- Taxonomy gaps
- Metadata gaps
- Translation gaps
- Catalog restriction gaps
- Creator supply opportunities

### 9.3 Creator Supply Feedback

High-quality creators may receive anonymized demand signals, such as:

- “Customers are searching for invoice automation for construction companies.”
- “There is demand for German-language HR onboarding templates.”
- “Smart customers are searching for advanced GEO monitoring workflows.”

Demand signals must not expose private customer data.

---

## 10. Semantic Relevance Analytics

Ariyo must evaluate semantic search relevance beyond keyword matching.

### 10.1 Relevance Dimensions

- Business intent match
- Category match
- Problem-solution match
- Industry fit
- Plan fit
- Complexity fit
- Language fit
- Trust fit
- Outcome fit
- Integration fit
- Compliance fit

### 10.2 Relevance Judgments

Ariyo may use three sources of relevance judgments:

1. Customer behavior signals
2. AI-assisted relevance reviews
3. Human sampled review

AI judgments must not be treated as final truth for sensitive, high-impact, or enterprise procurement contexts.

### 10.3 Relevance Drift

Search relevance may degrade when:

- Template metadata changes
- New templates flood a category
- Sponsored placement increases
- Customer language evolves
- Business trends shift
- Models or embeddings change
- Taxonomy changes

Ariyo must monitor relevance drift over time.

---

## 11. Promoted & Sponsored Result Quality

Ariyo must measure whether sponsored and promoted placements harm discovery trust.

### 11.1 Required Checks

Promoted results must be checked for:

- Relevance to query
- Trust label accuracy
- Certification accuracy
- Plan compatibility
- Region compatibility
- Review quality
- Outcome performance
- Refund/dispute rate
- Incident history
- Support burden
- Customer complaints

### 11.2 Sponsored Result Limits

Sponsored results must never:

- Bypass policy restrictions
- Appear as certified unless certified
- Appear as organic without disclosure
- Override customer private catalog restrictions
- Override enterprise procurement settings
- Override region restrictions
- Promote assets with active severe incidents
- Promote suspended creators or vendors

### 11.3 Promotion Quality Score

```ts
export interface PromotionQualityScore {
  campaignId: string;
  assetId: string;
  relevanceScore: number;
  trustScore: number;
  outcomeScore: number;
  complaintRate: number;
  refundRate: number;
  incidentRate: number;
  disclosureCompliant: boolean;
  safeToContinuePromotion: boolean;
}
```

---

## 12. Recommendation Quality Analytics

Ariyo must evaluate recommendations separately from search.

### 12.1 Recommendation Surfaces

Measure quality on:

- Marketplace homepage
- Template detail page recommendations
- Post-install suggestions
- Onboarding recommendations
- Private catalog recommendations
- Smart plan advanced recommendations
- Enterprise procurement suggestions
- Creator collection recommendations
- Partner solution recommendations

### 12.2 Recommendation Feedback Signals

- Click
- Save
- Dismiss
- Hide similar
- Not relevant
- Too expensive
- Too advanced
- Not trusted enough
- Region incompatible
- Already have solution
- Install preview started
- Activated
- Outcome achieved

### 12.3 Recommendation Anti-Loop Rule

Ariyo must avoid repeatedly recommending the same dismissed or incompatible asset.

---

## 13. Plan-Aware Search Quality

### 13.1 Basic Plan

For Basic customers, search quality must prioritize:

- Simple templates
- Low-cost templates
- Low-risk templates
- Easy setup
- Clear outcomes
- Minimal permissions
- Low support burden

Basic search must avoid pushing advanced Smart templates as the default path.

### 13.2 Pro Plan

For Pro customers, search quality must prioritize:

- Operational workflows
- Team templates
- Integrations
- Reliable activation
- Department-level outcomes
- Collaboration readiness
- Moderate automation depth

### 13.3 Smart Plan

For Smart customers, search quality may prioritize:

- Advanced AI Employee bundles
- Multi-agent systems
- GEO monitoring packs
- Knowledge/RAG-heavy templates
- Automation-rich templates
- Enterprise analytics
- Strong governance and controls

Smart search must still respect cost, risk, and compliance boundaries.

---

## 14. Private Catalog Search Analytics

Enterprise private catalogs require separate search quality measurement.

Ariyo must measure:

- Searches hidden by private catalog policy
- Searches blocked by vendor allowlists
- Searches blocked by asset allowlists
- Searches blocked by department scope
- Searches blocked by region policy
- Searches blocked by procurement approval
- Internal template discoverability
- Private catalog request flow success

Private catalog search must never leak the existence of restricted assets to unauthorized users.

---

## 15. Creator-Facing Search Insights

Creators may receive search insights only when privacy-safe.

Allowed creator insights:

- Search impressions for their assets
- Click-through rate
- Install preview starts
- Conversion gaps
- Metadata improvement suggestions
- Missing keywords
- Category mismatch warnings
- Localization opportunities
- Trust label improvement suggestions

Forbidden creator insights:

- Customer-identifying search logs
- Private enterprise query text
- Competitor confidential analytics
- Sensitive organization intent
- Security or procurement search details
- Data that enables manipulation

---

## 16. Search Quality Experimentation

Search experiments must follow marketplace experimentation governance.

Examples:

- Ranking formula changes
- Semantic model changes
- Query expansion changes
- Filter defaults
- Sponsored placement layouts
- No-result recovery UI
- Recommendation algorithms
- Trust label display changes
- Category taxonomy updates

Every experiment must include:

- Hypothesis
- Target cohort
- Safety guardrails
- Relevance guardrails
- Trust guardrails
- Cost guardrails
- Stop rules
- Rollback plan
- Post-experiment review

---

## 17. Search Quality API

### 17.1 Get Search Quality Summary

```http
GET /api/v1/marketplace/search-quality/summary
```

Response:

```json
{
  "timeRange": "30d",
  "searches": 184230,
  "searchSuccessRate": 0.61,
  "noResultRate": 0.08,
  "lowRelevanceRate": 0.11,
  "searchToInstallRate": 0.14,
  "searchToActivationRate": 0.09,
  "searchToOutcomeRate": 0.04,
  "promotedResultQualityRatio": 0.92,
  "searchIntegrityScore": 88
}
```

### 17.2 Get Query Diagnostics

```http
GET /api/v1/marketplace/search-quality/queries/{queryId}/diagnostics
```

### 17.3 Submit Search Feedback

```http
POST /api/v1/marketplace/search-quality/feedback
```

Request:

```json
{
  "queryId": "query_123",
  "assetId": "asset_456",
  "feedback": "not_relevant",
  "reason": "too_advanced",
  "freeText": "I needed a simpler onboarding workflow"
}
```

### 17.4 Get No-Result Opportunities

```http
GET /api/v1/marketplace/search-quality/no-result-opportunities
```

### 17.5 Get Creator Search Insights

```http
GET /api/v1/creators/{creatorId}/search-insights
```

---

## 18. Webhooks

Ariyo should emit webhooks for major search quality events.

```ts
export type SearchQualityWebhookEvent =
  | 'search.no_result_spike_detected'
  | 'search.low_relevance_spike_detected'
  | 'search.promoted_result_quality_failed'
  | 'search.query_gap_detected'
  | 'search.recommendation_quality_degraded'
  | 'search.private_catalog_discovery_blocked'
  | 'search.ranking_experiment_guardrail_triggered'
  | 'search.manipulation_pattern_detected';
```

---

## 19. Frontend Requirements

Marketplace UI must support:

- Search analytics instrumentation
- Feedback capture
- Result relevance feedback
- No-result recovery UI
- Query suggestion UI
- Filter exhaustion explanation
- Private catalog restriction explanations where allowed
- Sponsored disclosure telemetry
- Recommendation dismissal reasons
- Search quality dashboard for admins
- Creator search insights dashboard
- Internal search diagnostics console

Frontend must never show restricted asset details to unauthorized users.

---

## 20. Backend Requirements

Backend must support:

- Event collection
- Query normalization
- Intent classification
- Search result snapshots
- Ranking snapshots
- Relevance scoring
- No-result diagnostics
- Feedback ingestion
- Experiment assignment
- Search quality scoring jobs
- Creator insight aggregation
- Privacy-safe analytics exports
- Integrity anomaly detection
- Dashboard APIs

---

## 21. AI Search Quality Assistant

Ariyo may provide an AI assistant for search quality operations.

It may help:

- Explain no-result spikes
- Detect taxonomy gaps
- Suggest synonym improvements
- Suggest creator supply opportunities
- Diagnose promoted-result quality issues
- Summarize search quality experiments
- Draft metadata improvement suggestions
- Identify likely manipulation patterns

It must not:

- Expose private query data
- Make final enforcement decisions
- Override policy controls
- Reveal competitor-sensitive analytics
- Recommend unsafe ranking changes
- Treat AI relevance judgment as final truth

---

## 22. Security & Privacy Rules

Search analytics may contain sensitive intent.

Ariyo must:

- Redact query text where needed
- Hash user identifiers
- Aggregate creator-facing data
- Limit raw query access
- Respect enterprise privacy controls
- Avoid exposing private catalog searches
- Avoid using sensitive personal attributes for personalization
- Retain search logs according to policy
- Support deletion where required
- Audit internal access to search logs

---

## 23. Forbidden Patterns

Ariyo must never:

- Treat click-through rate as the only search quality metric
- Let sponsored listings dominate relevant organic results
- Hide sponsored disclosure
- Recommend region-blocked assets
- Recommend plan-incompatible assets without explaining upgrade requirements
- Leak restricted private catalog assets
- Expose customer search queries to creators
- Use sensitive personal attributes for search personalization
- Ignore no-result query clusters
- Ignore search-to-outcome performance
- Optimize search for short-term revenue at the expense of trust
- Allow creators to manipulate search analytics
- Use fake installs, fake clicks, or fake reviews as ranking signals

---

## 24. Acceptance Criteria

Ariyo Marketplace Search Quality Analytics is acceptable only if:

- Search success is measured beyond clicks.
- No-result causes are diagnosable.
- Semantic relevance is monitored.
- Sponsored result quality is governed.
- Recommendation quality is measured separately.
- Search-to-activation and search-to-outcome are tracked.
- Creator insights are privacy-safe.
- Enterprise private catalog search is protected.
- Search experiments include guardrails and rollback.
- Search manipulation can be detected.
- Ranking/search improvements remain governed by trust, safety, and compliance.

---

## 25. Golden Rule

Ariyo Marketplace search quality is not proven when customers click results.

It is proven when customers find trustworthy assets that fit their intent, plan, region, permissions, budget, compliance posture, and business outcome — and when Ariyo can measure, explain, improve, and govern that discovery loop over time.
