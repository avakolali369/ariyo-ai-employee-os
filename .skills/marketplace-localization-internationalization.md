# Ariyo Marketplace Localization & Internationalization Skill

## Core Contract

Ariyo Marketplace Localization & Internationalization is not text translation.

It is the governed multilingual, multi-locale, multi-currency, multi-region, cultural, legal, accessibility, content-quality, trust-label, search, billing, support, creator, and enterprise-readiness system that allows Ariyo Marketplace to operate safely and clearly across languages, countries, regions, scripts, business customs, compliance expectations, and customer buying contexts.

Ariyo must make Marketplace experiences feel native, trustworthy, legally careful, and operationally accurate for every supported locale.

Ariyo must never let translation, locale formatting, currency display, regional marketing, or creator-provided localized content misrepresent product capability, pricing, legal terms, trust labels, risk, certification, data residency, support coverage, or compliance evidence.

---

## 1. Purpose

This skill defines how Ariyo should design, build, govern, test, operate, and improve localization and internationalization for Marketplace assets and enterprise Marketplace experiences.

It covers public Marketplace listings, private catalogs, search and recommendation, trust labels, certification labels, reviews, pricing, billing display, creator content, support content, compliance evidence, legal notices, onboarding, installation flows, admin controls, enterprise procurement, and customer-facing product surfaces.

The goal is to let customers in different locales understand Ariyo Marketplace assets accurately before they view, evaluate, install, buy, approve, configure, govern, support, renew, or expand them.

---

## 2. Scope

This skill applies to:

- Marketplace listing pages
- Marketplace search and discovery
- Recommendation surfaces
- Featured collections and promotions
- Trust labels and certification labels
- Customer reviews and reputation content
- Creator profiles
- Partner profiles
- Vendor profiles
- Private catalogs
- Enterprise procurement flows
- Install preview flows
- Sandbox/demo environments
- Billing and payout display
- Refund and dispute flows
- Support and help surfaces
- Evidence center exports
- Audit reports
- Compliance matrix explanations
- Data residency and region controls
- AI Employee template descriptions
- Workflow template descriptions
- Knowledge pack descriptions
- GEO template descriptions
- Integration bundle descriptions
- Internal template governance surfaces
- Admin and operator consoles

---

## 3. Dependencies

This skill should work with:

- `marketplace-search-recommendation-engine.md`
- `marketplace-search-quality-analytics.md`
- `marketplace-template-trust-labeling-system.md`
- `marketplace-template-certification-program.md`
- `marketplace-customer-review-reputation-system.md`
- `marketplace-merchandising-promotion-system.md`
- `marketplace-installation-entitlements.md`
- `marketplace-billing-payouts.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-enterprise-procurement.md`
- `marketplace-data-residency-region-controls.md`
- `marketplace-regulatory-compliance-matrix.md`
- `marketplace-compliance-evidence-center.md`
- `legal-pages-policy-system.md`
- `data-governance-privacy.md`
- `frontend-copywriting.md`
- `frontend-responsive.md`
- `frontend-design.md`
- `customer-success-playbooks.md`
- `enterprise-account-governance.md`
- `enterprise-sso-scim-directory-sync.md`

Localization must not override these systems. It must represent their decisions accurately in the customer locale.

---

## 4. Localization Principles

### 4.1 Accuracy before fluency

Localized content must be understandable, but it must never become more persuasive than the source truth.

### 4.2 Product truth before marketing tone

Localized Marketplace listings must not exaggerate value, safety, certification, region availability, compliance coverage, AI capabilities, or support promises.

### 4.3 Local context without false locality

Ariyo may adapt examples, formatting, terminology, and guidance for a locale, but must not imply local legal compliance, local hosting, local support, or local certification unless verified.

### 4.4 Locale is more than language

A locale includes:

- Language
- Script
- Directionality
- Number format
- Date/time format
- Currency
- Tax display expectations
- Legal terminology
- Business terminology
- Support expectations
- Region restrictions
- Accessibility expectations
- Compliance language
- Cultural expectations

### 4.5 Human review for high-risk content

High-risk localized content must be reviewed by qualified humans or trusted localization reviewers before publication.

---

## 5. Supported Locale Model

Ariyo should model localization through explicit locale profiles.

```ts
export type LocaleDirection = 'ltr' | 'rtl';

export type LocaleStatus =
  | 'draft'
  | 'internal_beta'
  | 'public_beta'
  | 'supported'
  | 'restricted'
  | 'deprecated';

export interface MarketplaceLocaleProfile {
  localeCode: string;              // fa-IR, en-US, ar-SA, de-DE
  languageCode: string;            // fa, en, ar, de
  regionCode?: string;             // IR, US, SA, DE
  displayName: string;
  nativeDisplayName: string;
  direction: LocaleDirection;
  status: LocaleStatus;
  defaultCurrency?: string;
  defaultTimeZone?: string;
  dateFormat: string;
  numberFormat: string;
  decimalSeparator: string;
  thousandsSeparator: string;
  firstDayOfWeek?: 'saturday' | 'sunday' | 'monday';
  supportedSurfaces: string[];
  restrictedSurfaces: string[];
  requiresHumanReviewFor: string[];
  legalCopyMode: 'translated' | 'localized' | 'source_language_only' | 'not_available';
  supportMode: 'native' | 'translated' | 'english_only' | 'partner_supported';
  createdAt: string;
  updatedAt: string;
}
```

---

## 6. Supported Content Types

Ariyo localization must classify content by risk and required review level.

### 6.1 Low-risk content

Examples:

- Generic UI labels
- Empty states
- Button labels
- Filter names
- Navigation labels
- Basic onboarding labels

Allowed workflow:

- Translation memory
- Machine-assisted translation
- Automated checks
- Spot review

### 6.2 Medium-risk content

Examples:

- Marketplace category descriptions
- Template summaries
- Creator bios
- Help articles
- Setup instructions
- Pricing explanation copy
- Non-binding support text

Allowed workflow:

- Machine-assisted translation
- Glossary enforcement
- Human review for public release
- Version tracking

### 6.3 High-risk content

Examples:

- Trust labels
- Certification explanations
- Security claims
- Privacy claims
- Compliance evidence summaries
- Data residency statements
- Legal notices
- Refund explanations
- Enterprise procurement language
- AI risk disclosures
- Sponsored disclosure labels
- Permission warnings
- Cost warnings

Allowed workflow:

- Source-of-truth controlled copy
- Human legal/security/compliance review when needed
- No creator self-translation without approval
- Expiration and revalidation

---

## 7. Translation Source of Truth

Ariyo must maintain source keys rather than hardcoded localized text.

```ts
export interface LocalizationString {
  key: string;
  namespace: string;
  sourceLocale: string;
  sourceText: string;
  riskLevel: 'low' | 'medium' | 'high' | 'regulated';
  description?: string;
  context?: string;
  maxLength?: number;
  variables?: string[];
  forbiddenInterpretations?: string[];
  requiredTerms?: string[];
  lastSourceUpdatedAt: string;
}
```

Every translation must link back to the exact source version.

---

## 8. Translation Record Model

```ts
export type TranslationStatus =
  | 'missing'
  | 'machine_draft'
  | 'creator_draft'
  | 'review_required'
  | 'approved'
  | 'published'
  | 'stale'
  | 'rejected'
  | 'deprecated';

export interface LocalizationTranslation {
  id: string;
  sourceKey: string;
  localeCode: string;
  translatedText: string;
  status: TranslationStatus;
  translatedBy: 'machine' | 'creator' | 'ariyo_team' | 'partner' | 'certified_localizer';
  reviewedBy?: string;
  reviewNotes?: string;
  sourceVersionHash: string;
  translationVersionHash: string;
  qualityScore?: number;
  riskFlags: string[];
  publishedAt?: string;
  expiresAt?: string;
  updatedAt: string;
}
```

---

## 9. Marketplace Listing Localization

Localized Marketplace listing pages must support:

- Localized title
- Localized short summary
- Localized detailed description
- Localized setup instructions
- Localized supported use cases
- Localized limitations
- Localized screenshots or captions when needed
- Localized trust labels
- Localized certification explanation
- Localized pricing display
- Localized install warnings
- Localized support coverage
- Localized compliance evidence summary
- Localized customer reviews where permitted

### Listing localization must not change:

- Actual capabilities
- Actual pricing source of truth
- Actual data residency behavior
- Actual support SLA
- Actual certification status
- Actual approval state
- Actual risk score
- Actual dependency requirements
- Actual plan compatibility

---

## 10. Creator Localization Governance

Creators may propose localized content, but Ariyo must govern publication.

Creator-provided localization must be checked for:

- Capability exaggeration
- Missing limitations
- Hidden pricing implications
- Unverified compliance claims
- Unverified local support claims
- Misleading legal terminology
- Cultural inappropriateness
- Keyword spam
- Review manipulation
- Overuse of urgency or fear-based copy
- Mismatch with source listing

High-risk creator localization must require review before publication.

---

## 11. Localized Trust Labels

Trust labels must be translated using controlled terminology.

Examples:

- Certified
- Security Reviewed
- Enterprise Ready
- Low Cost
- Smart Ready
- Region Restricted
- Evidence Available
- Human Review Required
- Sponsored
- Deprecated
- Suspended

Trust label localization must include:

- Label text
- Plain-language explanation
- Evidence summary
- Expiration if relevant
- Limitation if relevant
- Source of verification

A localized label must not imply stronger trust than the original label.

---

## 12. Certification Localization

Certification pages must explain:

- What was certified
- What was not certified
- When certification happened
- When renewal is required
- What evidence supports it
- Whether certification applies globally or regionally
- Whether certification applies to a version, creator, vendor, template, or enterprise package

Certification localization must be reviewed for legal and trust accuracy.

---

## 13. Localized Search & Discovery

Marketplace search must support multilingual discovery.

Search should handle:

- Exact localized keyword match
- Source-language keyword match
- Synonyms
- Business intent mapping
- Cross-language semantic matching
- Transliteration
- Locale-specific terminology
- RTL queries
- Mixed-language queries
- Localized category names
- Localized industry terms
- Localized pain points

Example:

A Persian customer searching for `اتوماسیون فروش` should be able to discover assets tagged as sales automation, CRM workflow, lead routing, follow-up automation, and pipeline operations.

---

## 14. Search Localization Decision Model

```ts
export interface LocalizedSearchContext {
  query: string;
  localeCode: string;
  detectedLanguage?: string;
  userPreferredLocales: string[];
  organizationRegion?: string;
  plan: 'basic' | 'pro' | 'smart' | 'enterprise';
  privateCatalogId?: string;
  includeSourceLanguageFallback: boolean;
  includeMachineTranslatedResults: boolean;
}

export interface LocalizedSearchDecision {
  normalizedQuery: string;
  translatedQueryCandidates: string[];
  semanticIntent?: string;
  appliedLocaleBoosts: string[];
  appliedRegionFilters: string[];
  sourceLanguageFallbackUsed: boolean;
  hiddenResultsReason?: string[];
  explanation: string;
}
```

---

## 15. Currency & Pricing Localization

Ariyo must distinguish between:

- Billing currency
- Display currency
- Estimated converted currency
- Tax-inclusive display
- Tax-exclusive display
- Marketplace asset price
- Subscription price
- Usage-based AI cost
- Partner service cost
- Marketplace commission
- Refund amount
- Creator payout currency

Localized pricing must clearly disclose if conversion is estimated.

Never show localized currency in a way that implies billing occurs in that currency unless true.

---

## 16. Tax & Invoice Localization

Marketplace localization should support:

- Localized tax labels
- VAT/GST/sales tax display where applicable
- Invoice language preference
- Billing entity display
- Localized refund statements
- Procurement-ready purchase summaries
- Currency conversion notes
- Tax ID fields where supported

Tax messaging must be governed by finance/legal rules.

---

## 17. Region-Aware Listings

Localized listings must reflect regional availability.

A Marketplace asset may be:

- Available globally
- Available only in selected regions
- Hidden in selected regions
- Installable but with warnings
- Viewable but not installable
- Available only through private catalog
- Available only with enterprise approval
- Available only with region-specific configuration

Region-aware listing output must be driven by region controls, not marketing content.

---

## 18. Data Residency Localization

Data residency explanations must be localized carefully.

Ariyo should show:

- Where data is stored
- Where data may be processed
- Where AI model providers may process data
- Where backups may exist
- Which subprocessors may be involved
- Whether customer policy blocks installation
- Whether region-specific alternatives exist

Never translate data residency language loosely.

---

## 19. Legal & Compliance Localization

Legal and compliance content may require special handling.

Supported modes:

- Source language only
- Translation for convenience only
- Localized legal copy reviewed by counsel
- Region-specific policy page
- Enterprise-only legal evidence package

Ariyo must clearly state when translated legal text is informational rather than legally controlling, if applicable.

---

## 20. Localized Reviews

Customer reviews should support:

- Original review language
- Translated review view
- Verified translation label
- Machine translation disclosure
- Locale-specific moderation rules
- Abuse detection across languages
- Offensive language detection by locale
- Review quality scoring across languages

Reviews must not be auto-translated in a way that changes sentiment, safety claims, or outcome claims.

---

## 21. RTL/LTR Frontend Requirements

Ariyo frontend must support:

- RTL layouts for Persian and Arabic
- Direction-aware icons
- Direction-aware breadcrumbs
- Direction-aware carousels
- Direction-aware tables
- Mirrored spacing where appropriate
- Non-mirrored technical tokens where needed
- Mixed LTR/RTL text safety
- Correct truncation
- Correct line breaking
- Correct numeral display rules
- Accessible screen-reader behavior

Do not assume all RTL locales use identical tone, terminology, or formatting.

---

## 22. Localized UX Requirements

Localized UI must support:

- Longer translated strings
- Shorter translated strings
- Variable sentence structure
- Pluralization
- Gender-neutral language where possible
- Formal/informal tone settings where relevant
- Locale-specific date/time formatting
- Locale-specific sorting
- Locale-specific name formatting
- Localized empty states
- Localized error messages
- Localized support handoff

---

## 23. Translation Quality Scoring

Ariyo should score translations using:

- Source fidelity
- Terminology compliance
- Risk accuracy
- Tone fit
- UI fit
- Legal/compliance safety
- Cultural appropriateness
- Completeness
- Variable preservation
- Formatting validity
- Accessibility clarity

```ts
export interface TranslationQualityScore {
  translationId: string;
  score: number;
  sourceFidelity: number;
  terminologyCompliance: number;
  riskAccuracy: number;
  uiFit: number;
  culturalFit: number;
  accessibilityClarity: number;
  issues: string[];
  requiresHumanReview: boolean;
}
```

---

## 24. Glossary Governance

Ariyo must maintain locale-specific glossaries.

Glossaries should include:

- Product terms
- AI Employee terminology
- Marketplace terms
- Trust and safety terms
- Legal terms
- Billing terms
- Support terms
- Enterprise governance terms
- Certification terms
- Data residency terms
- Security terms

Glossary violations must block high-risk publication.

---

## 25. Non-Translatable Terms

Some terms should remain unchanged or partially localized.

Examples:

- Ariyo
- API
- OAuth
- SAML
- SCIM
- SOC 2
- GDPR
- AI Employee
- Marketplace
- Basic / Pro / Smart plan names if brand-fixed
- Vendor-specific product names
- Integration names
- Model provider names

Rules must be documented per locale.

---

## 26. Locale-Aware AI Assistant Behavior

Ariyo AI assistants that help customers in Marketplace must:

- Respond in the user's selected language when supported
- Preserve legal/compliance terms accurately
- Avoid inventing local availability
- Avoid inventing local support coverage
- Avoid translating vendor names incorrectly
- Show source-language fallback when confidence is low
- Ask for clarification when language ambiguity affects install or billing
- Use locale-specific examples only when safe

---

## 27. Basic / Pro / Smart Localization Rules

### Basic

Basic localization should prioritize:

- Simple UI copy
- Clear setup instructions
- Low-risk Marketplace descriptions
- Simple pricing display
- Basic support content
- Minimal jargon

Basic should not expose complex localized enterprise compliance claims by default.

### Pro

Pro localization should support:

- Team workflows
- Integration setup instructions
- Department-level terminology
- Operational support documentation
- More complete Marketplace listing localization
- Localized adoption content

### Smart

Smart localization should support:

- Advanced AI Employee workflows
- Compliance evidence summaries
- Trust labels
- AI risk explanations
- Enterprise procurement content
- Multi-region controls
- Advanced admin UX
- Executive reporting language
- Localization quality gates

Smart must require higher review for high-risk localized content.

---

## 28. Enterprise Localization Controls

Enterprise customers should be able to configure:

- Allowed UI locales
- Default organization locale
- Workspace locale
- User locale
- Invoice language preference
- Marketplace listing language preference
- Source-language fallback behavior
- Machine translation visibility
- Legal-copy language preference
- Admin-only language settings
- Support language preference
- Localized private catalog labels

---

## 29. Private Catalog Localization

Private catalogs may require localized:

- Catalog title
- Catalog description
- Department names
- Internal template names
- Approval instructions
- Procurement notes
- Internal policy warnings
- Internal support handoff
- Private trust labels
- Internal-only disclaimers

Enterprise admins must control whether internal template translations are allowed, reviewed, or blocked.

---

## 30. Localization Workflow

Recommended workflow:

1. Source content created
2. Source risk classified
3. Source key generated
4. Translation requested
5. Glossary applied
6. Machine or human draft created
7. Automated validation
8. Human review if required
9. Legal/security/compliance review if required
10. Preview in UI
11. Publish
12. Monitor user feedback
13. Revalidate after source change
14. Expire stale translations

---

## 31. Automated Validation Rules

Ariyo should automatically detect:

- Missing variables
- Broken placeholders
- Incorrect links
- Missing warnings
- Overlong UI strings
- Unsupported characters
- Directionality issues
- Glossary violations
- Untranslated source text
- Risky added claims
- Removed disclaimers
- Pricing mismatch
- Certification mismatch
- Region mismatch
- HTML/Markdown errors
- Offensive terms

---

## 32. Localized Content Versioning

Localized content must version independently but remain linked to source.

```ts
export interface LocalizedContentVersion {
  id: string;
  sourceContentId: string;
  localeCode: string;
  sourceVersion: string;
  localizedVersion: string;
  status: TranslationStatus;
  changedFields: string[];
  staleBecause?: string;
  reviewer?: string;
  publishedAt?: string;
}
```

If source content changes materially, translations must become stale until reviewed.

---

## 33. Localization API Contract

### Get supported locales

`GET /api/v1/localization/locales`

Response:

```json
{
  "locales": [
    {
      "localeCode": "fa-IR",
      "displayName": "Persian (Iran)",
      "nativeDisplayName": "فارسی",
      "direction": "rtl",
      "status": "supported"
    }
  ]
}
```

### Get localized Marketplace asset

`GET /api/v1/marketplace/assets/{assetId}/localized?locale=fa-IR`

Response:

```json
{
  "assetId": "asset_123",
  "locale": "fa-IR",
  "localizedFields": {
    "title": "دستیار فروش هوشمند",
    "summary": "قالبی برای خودکارسازی پیگیری سرنخ‌های فروش"
  },
  "fallbackFields": ["technicalLimitations"],
  "sourceLanguageFallbackUsed": true,
  "translationStatus": "published",
  "warnings": []
}
```

### Submit creator localization draft

`POST /api/v1/marketplace/assets/{assetId}/localizations`

Request:

```json
{
  "locale": "ar-SA",
  "fields": {
    "title": "...",
    "summary": "...",
    "setupInstructions": "..."
  }
}
```

### Review localization

`POST /api/v1/localization/reviews/{translationId}`

Request:

```json
{
  "decision": "approved",
  "notes": "Terminology and compliance claims verified."
}
```

### Get translation quality report

`GET /api/v1/localization/translations/{translationId}/quality`

---

## 34. Localization Webhooks

Ariyo should emit:

- `localization.translation.created`
- `localization.translation.review_required`
- `localization.translation.approved`
- `localization.translation.rejected`
- `localization.translation.published`
- `localization.translation.stale`
- `localization.translation.expired`
- `localization.glossary.violation_detected`
- `localization.high_risk_claim.detected`
- `marketplace.asset.localized_published`
- `marketplace.asset.localized_hidden`

---

## 35. Observability Events

Track:

- `localized_listing_viewed`
- `source_language_fallback_viewed`
- `localized_search_performed`
- `localized_result_clicked`
- `locale_changed`
- `translation_feedback_submitted`
- `localized_install_warning_viewed`
- `localized_trust_label_expanded`
- `localized_pricing_disclaimer_viewed`
- `localized_support_article_used`
- `translation_quality_issue_reported`

---

## 36. Advanced KPIs

Ariyo should track:

- Locale Coverage Rate
- Marketplace Localization Coverage Rate
- High-Risk Translation Review Completion Rate
- Translation Staleness Rate
- Source-Language Fallback Rate
- Localized Search Success Rate
- Localized Install Conversion Rate
- Localized Support Deflection Rate
- Translation Quality Score
- Glossary Compliance Rate
- Locale-Specific Trust Label Expansion Rate
- Locale-Specific Refund/Dispute Rate
- Localized Listing Accuracy Incident Rate
- RTL Layout Defect Rate
- Localized Pricing Confusion Rate
- Region-Locale Mismatch Rate

---

## 37. Frontend Requirements

Frontend must:

- Use localization keys, not hardcoded strings
- Support RTL/LTR switching
- Support variable-safe rendering
- Support locale-aware formatting
- Show fallback language indicators
- Show machine translation indicators when applicable
- Show trust label explanations clearly
- Preserve technical identifiers
- Prevent layout breakage from long strings
- Support localized search input
- Support localized filters
- Support localized pricing disclaimers
- Support localized support routes

---

## 38. Backend Requirements

Backend must:

- Store source strings and localized versions
- Track translation status
- Track source version hashes
- Mark translations stale after source changes
- Enforce review requirements
- Enforce glossary rules
- Serve fallback fields safely
- Support locale-aware search indexing
- Support locale-aware analytics
- Support region and locale compatibility checks
- Enforce permission-scoped translation management

---

## 39. Security & Privacy Rules

Localization systems must not expose:

- Private customer data to translators without permission
- Internal notes in public localized text
- Vendor documents outside approved scope
- Sensitive audit evidence in public localized summaries
- Legal evidence to unauthorized viewers
- Creator drafts before approval
- Admin-only policy labels to end users

Translation workflows must support redaction for sensitive screenshots, logs, and examples.

---

## 40. Compliance Rules

Ariyo must ensure localized content does not:

- Claim unsupported regulatory compliance
- Misstate customer rights
- Misstate data processing location
- Misstate refund rights
- Misstate vendor obligations
- Misstate certification status
- Misstate legal terms
- Hide sponsorship disclosures
- Hide risk warnings
- Remove required disclaimers

---

## 41. AI Localization Assistant

Ariyo may provide an AI Localization Assistant to help:

- Draft translations
- Detect terminology issues
- Identify high-risk claims
- Compare source and localized meaning
- Suggest glossary-compliant phrasing
- Detect cultural tone issues
- Detect RTL layout risks
- Generate localization QA summaries

The assistant must not autonomously publish high-risk localized content.

---

## 42. Localization Feedback Loop

Customers, creators, partners, and internal reviewers should be able to report:

- Incorrect translation
- Confusing copy
- Missing locale support
- Incorrect pricing display
- Incorrect legal language
- Incorrect support language
- Misleading localized trust label
- Region availability mismatch
- Offensive or culturally inappropriate wording

Feedback must feed into localization quality scoring.

---

## 43. Forbidden Patterns

Ariyo must never:

- Treat machine translation as final for high-risk content
- Translate legal/compliance claims without controls
- Let creators self-publish risky localized claims
- Hide source-language fallback
- Misrepresent billing currency
- Imply local support where none exists
- Imply local hosting where none exists
- Translate trust labels into stronger claims
- Remove warnings in localized versions
- Ignore RTL layout testing
- Use localized marketing copy to bypass policy rules
- Rank localized listings higher solely because they keyword-stuff local terms
- Use customer private data as localization examples without permission
- Publish stale translations after source content changes materially

---

## 44. Done Criteria

This system is ready when:

- Supported locales are explicitly defined
- Locale profiles are available
- Source strings are keyed and versioned
- High-risk content is classified
- Translation workflow exists
- Human review paths exist
- Glossary rules exist
- Marketplace listing localization works
- Search supports multilingual queries
- RTL/LTR UI is tested
- Pricing localization is safe
- Trust labels are controlled
- Legal/compliance localization is governed
- Enterprise locale controls exist
- Observability events exist
- Quality metrics exist
- Stale translations are detected
- Forbidden patterns are blocked

---

## Golden Rule

Localization in Ariyo Marketplace must make the truth understandable in the customer's language, not make the product sound better than the truth.
