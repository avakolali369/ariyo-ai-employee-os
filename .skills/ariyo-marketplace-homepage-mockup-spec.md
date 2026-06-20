# Ariyo Marketplace Homepage Mockup Specification

## Core Contract

Ariyo Marketplace Homepage Mockup Specification is not a generic app marketplace grid.

It is the governed mockup specification for the Marketplace discovery surface where customers find, compare, trust, preview, install, request, and manage AI Employee templates, Agent Team templates, Workflow templates, Knowledge packs, GEO templates, Integration bundles, certified templates, partner solutions, and private catalog recommendations.

The Marketplace Homepage must make Ariyo feel like a trusted operating ecosystem for AI Employees, not a prompt library, plugin store, automation catalog, or template gallery.

Ariyo must help customers discover useful assets quickly while making trust, plan fit, governance, region compatibility, certification, pricing, and risk visible before installation.

---

## 1. Purpose

The Marketplace Homepage is the primary discovery surface for reusable AI Employee assets. It must support:

- Fast discovery for new customers.
- Plan-aware recommendations for Basic, Pro, and Smart users.
- Enterprise-safe discovery with private catalog constraints.
- Trust-first browsing through labels, certifications, reviews, and evidence.
- Search and category exploration.
- Featured collections and promoted listings without pay-to-win distortion.
- Clear progression from discovery to template detail, sandbox/demo, install, request approval, or upgrade.

---

## 2. Source Skill Dependencies

This mockup must be informed by:

- `marketplace-search-recommendation-engine.md`
- `marketplace-private-catalog-controls.md`
- `marketplace-template-trust-labeling-system.md`
- `marketplace-template-certification-program.md`
- `marketplace-customer-review-reputation-system.md`
- `marketplace-merchandising-promotion-system.md`
- `marketplace-search-quality-analytics.md`
- `marketplace-sandbox-demo-environments.md`
- `marketplace-installation-entitlements.md`
- `marketplace-template-quality-ranking-system.md`
- `marketplace-data-residency-region-controls.md`
- `marketplace-compliance-evidence-center.md`
- `product-surface-map.md`
- `ariyo-core-product-mockup-brief.md`
- `frontend-design.md`
- `frontend-components.md`
- `frontend-responsive.md`
- `frontend-copywriting.md`

---

## 3. Primary User Roles

### 3.1 Customer Admin

Needs to find trusted templates, approve install eligibility, see governance status, and understand risk.

### 3.2 AI Employee Manager

Needs to discover templates that improve team workflows and outcomes.

### 3.3 Business User

Needs simple, understandable recommendations without governance overload.

### 3.4 Enterprise Procurement / Security Viewer

Needs trust labels, vendor status, data residency, evidence, and approval requirements.

### 3.5 Creator / Partner Viewer

May view their listed assets, promotion status, review health, and certification labels.

---

## 4. Page-Level Design Goal

The page must answer these questions within seconds:

1. What can I install or try?
2. Which templates are safe and relevant for my organization?
3. Which templates match my plan?
4. Which templates are trusted, certified, reviewed, and outcome-proven?
5. Which templates are blocked, restricted, sponsored, or require approval?
6. What should I do next?

---

## 5. Global RTL/LTR Layout Law

Persian/Farsi and Arabic interfaces must be RTL and right-aligned across all UI elements.

English and European LTR interfaces must be LTR and left-aligned across all UI elements.

This applies to:

- Header navigation.
- Sidebar direction.
- Search input alignment.
- Category chips.
- Template cards.
- Trust labels.
- CTA placement.
- Filter drawers.
- Empty states.
- Modals.
- Tooltips.
- Notification banners.
- Analytics labels.
- Footer links.

No Marketplace homepage mockup may mix RTL text with LTR layout unless explicitly showing bilingual content in a controlled localization preview.

---

## 6. Information Architecture

### 6.1 Top-Level Page Areas

1. App shell navigation.
2. Marketplace page header.
3. Search and intent bar.
4. Personalized recommendation strip.
5. Featured collections.
6. Category navigation.
7. Trust-certified templates.
8. Popular for your role / department.
9. New and noteworthy.
10. Private catalog / enterprise-approved section.
11. Sponsored or promoted placements.
12. Template grid.
13. Support / creator / request template CTA.

### 6.2 Navigation Positioning

Marketplace must be accessible from the main app shell as a primary surface, not buried under settings.

Suggested main nav item:

- Marketplace

Subnavigation inside Marketplace:

- Discover
- Categories
- Certified
- Private Catalog
- Installed
- Requests
- Creators

---

## 7. Header Specification

### 7.1 Header Content

Page title:

> Marketplace

Subtitle:

> Discover trusted AI Employee templates, workflows, knowledge packs, and integrations for your team.

For Enterprise accounts:

> Showing assets approved for your organization, plan, region, and governance policies.

### 7.2 Header Actions

Primary CTA:

- Browse templates

Secondary CTA:

- Request a template

Admin-only CTA:

- Manage private catalog

Creator-enabled CTA:

- Create marketplace asset

### 7.3 Header Status Chips

Possible chips:

- Basic Plan
- Pro Plan
- Smart Plan
- Private Catalog Enabled
- Approval Required
- Region: EU
- Security Review Enabled

---

## 8. Search & Intent Bar

### 8.1 Search Placeholder

Default:

> Search templates, AI employees, workflows, integrations, or outcomes...

Outcome-driven examples:

- “Summarize customer emails”
- “Qualify sales leads”
- “Generate Instagram content”
- “Monitor tax documents”
- “Customer support automation”

### 8.2 Search Features

Search bar must support:

- Keyword search.
- Semantic search.
- Outcome search.
- Integration search.
- Department search.
- Role-based search.
- Plan-aware filtering.
- Region-aware filtering.
- Trust/certification filters.

### 8.3 Search UI Components

- Large rounded search input.
- Filter button.
- Sort dropdown.
- Suggested queries.
- Recent searches.
- Saved searches for Enterprise users.

### 8.4 Filter Groups

Filters:

- Category.
- Plan compatibility.
- Certification level.
- Trust labels.
- Pricing model.
- Region compatibility.
- Data access level.
- Required integrations.
- Creator type.
- Rating/reputation.
- Outcome type.
- Installation status.
- Private catalog only.

---

## 9. Personalized Recommendation Strip

### 9.1 Purpose

Show the best next assets based on customer context without over-personalizing in unsafe ways.

### 9.2 Example Heading

> Recommended for your team

Subtext:

> Based on your plan, active workflows, connected tools, and governance settings.

### 9.3 Template Card Signals

Each recommendation must show why it is recommended:

- Works with your plan.
- Uses connected Gmail integration.
- Approved for your region.
- Similar teams installed this.
- Strong activation rate.
- Low cost profile.
- Certified template.

### 9.4 Forbidden Recommendation Behavior

Do not recommend templates using sensitive personal attributes.

Do not recommend blocked assets.

Do not hide approval requirements.

Do not let sponsorship override trust.

---

## 10. Featured Collections

### 10.1 Collection Types

- Starter AI Employees.
- Sales automation templates.
- Customer support templates.
- Finance & operations templates.
- Marketing & content templates.
- Enterprise governance templates.
- GEO / AI SEO templates.
- Certified for Smart Plan.
- Low-cost Basic templates.
- Private catalog picks.

### 10.2 Collection Card Structure

Each collection card should include:

- Collection title.
- Short description.
- Asset count.
- Trust status.
- Best-fit plan.
- Preview thumbnails/icons.
- CTA: View collection.

### 10.3 Editorial Rules

Featured collections must not imply certification unless certified.

Sponsored collections must be labeled.

Private catalog collections must be visibly marked.

---

## 11. Category Navigation

### 11.1 Category Chips

Suggested categories:

- Sales
- Marketing
- Support
- Finance
- Operations
- HR
- Legal
- Analytics
- Knowledge
- Workflow Automation
- GEO / AI SEO
- Enterprise Governance
- Integrations
- Creator Tools

### 11.2 Category Interaction

Clicking category should update the template grid without losing current plan/region/governance filters.

---

## 12. Template Card Specification

### 12.1 Required Card Fields

Each template card must show:

- Template name.
- Asset type.
- Short outcome description.
- Creator/vendor name.
- Trust label(s).
- Certification badge if applicable.
- Review/reputation summary.
- Plan compatibility.
- Pricing indicator.
- Region compatibility indicator.
- Installation state.
- Primary CTA.

### 12.2 Primary CTA States

CTA may be:

- View details.
- Try demo.
- Install.
- Request approval.
- Upgrade to Pro.
- Upgrade to Smart.
- Contact admin.
- Unavailable in your region.
- Blocked by policy.

### 12.3 Trust Labels

Examples:

- Certified
- Security Reviewed
- Enterprise Ready
- Low Cost
- Smart Ready
- Region Safe
- Private Catalog Approved
- Outcome Proven
- New Template
- Sponsored

### 12.4 Card Layout

Desktop:

- 3-column or 4-column grid depending on viewport.
- Cards must have consistent height.
- Trust labels visible without hover.

Tablet:

- 2-column grid.

Mobile:

- 1-column stacked cards.
- Filters move to drawer.

---

## 13. Sponsored & Promoted Templates

### 13.1 Labeling

Sponsored assets must be clearly labeled:

> Sponsored

### 13.2 Promotion Guardrails

Sponsored placement cannot override:

- Policy block.
- Region block.
- Security restrictions.
- Low trust score.
- Certification revocation.
- Incident penalties.
- Private catalog exclusions.

### 13.3 UI Treatment

Sponsored cards may appear in a promoted row but must not be visually confused with certified assets.

---

## 14. Private Catalog Section

### 14.1 Purpose

Enterprise customers need to see approved assets separately from the public marketplace.

Heading:

> Approved for your organization

Subtext:

> Curated by your admins based on procurement, security, region, and policy rules.

### 14.2 Required Controls

- View all approved assets.
- Request access to hidden asset.
- See approval status.
- Contact admin.

### 14.3 Visibility

Only show this section when private catalog controls are active.

---

## 15. Trust-Certified Templates Section

### 15.1 Purpose

Help buyers quickly find credible templates.

Heading:

> Certified and trust-reviewed templates

### 15.2 Required Signals

- Certification level.
- Last reviewed date.
- Evidence summary.
- Review score.
- Security status.
- Outcome confidence.

---

## 16. Empty States

### 16.1 No Search Results

Message:

> No matching templates found.

Support text:

> Try broadening your filters, searching by outcome, or requesting a custom template.

Actions:

- Clear filters.
- Request template.
- Browse categories.

### 16.2 Private Catalog Empty

Message:

> Your organization has not approved any Marketplace assets yet.

Actions:

- Request approval.
- Browse public marketplace.
- Contact admin.

### 16.3 Region Blocked

Message:

> Some templates are hidden because they are not available in your selected region.

Action:

- View region policy.

---

## 17. Loading & Skeleton States

Skeletons required for:

- Search bar suggestions.
- Recommendation row.
- Collection cards.
- Template grid.
- Filter counts.
- Trust label loading.

Loading must not shift layout excessively.

---

## 18. Error States

Error types:

- Search service unavailable.
- Recommendation service unavailable.
- Private catalog policy unavailable.
- Trust labels unavailable.
- Pricing unavailable.
- Region compatibility unavailable.

Fallback behavior:

- Show safe browsing mode.
- Hide install CTAs if eligibility cannot be verified.
- Keep details view accessible when safe.

---

## 19. Basic / Pro / Smart Behavior

### 19.1 Basic

Basic users should see:

- Simple, low-risk templates.
- Low-cost labels.
- Starter collections.
- Clear upgrade prompts for Pro/Smart-only assets.
- Minimal enterprise controls.

Do not overwhelm Basic users with advanced governance panels.

### 19.2 Pro

Pro users should see:

- Team workflow templates.
- Integrations.
- Approval-aware templates.
- Operational categories.
- More analytics and recommendation signals.

### 19.3 Smart

Smart users should see:

- Advanced AI Employee bundles.
- Multi-agent templates.
- GEO / AI SEO packs.
- Enterprise-ready templates.
- Advanced governance and simulation indicators.
- High-confidence trust/certification labels.

---

## 20. Responsive Requirements

### 20.1 Desktop

- Sidebar app navigation.
- Header + search bar.
- Horizontal category chips.
- Multi-column template grid.
- Filter panel or drawer.

### 20.2 Tablet

- Collapsible sidebar.
- Two-column cards.
- Filter drawer.
- Sticky search bar optional.

### 20.3 Mobile

- Bottom or hamburger navigation.
- Single-column cards.
- Search first.
- Filter drawer.
- Trust labels remain visible.
- CTAs are thumb-accessible.

---

## 21. Accessibility Requirements

- All cards keyboard navigable.
- Filters accessible by keyboard and screen readers.
- Trust labels must not rely on color alone.
- Sponsored labels must be readable by assistive technology.
- RTL/LTR direction must be programmatically correct using `dir` attributes.
- Search results count must be announced after search changes.

---

## 22. Copywriting Rules

Marketplace copy must be:

- Outcome-first.
- Trust-aware.
- Clear about limitations.
- Plan-aware.
- Non-hype.
- Enterprise-safe.

Avoid:

- “Fully automated success.”
- “Guaranteed ROI.”
- “No setup needed” unless true.
- “Certified” unless certified.
- “Enterprise ready” unless enterprise readiness is verified.

---

## 23. Analytics Events

Track:

- `marketplace_home_viewed`
- `marketplace_search_submitted`
- `marketplace_filter_applied`
- `marketplace_category_clicked`
- `marketplace_template_card_viewed`
- `marketplace_template_card_clicked`
- `marketplace_template_demo_clicked`
- `marketplace_template_install_clicked`
- `marketplace_template_approval_requested`
- `marketplace_sponsored_asset_viewed`
- `marketplace_private_catalog_viewed`
- `marketplace_no_results_viewed`
- `marketplace_trust_label_clicked`

---

## 24. Frontend Handoff Requirements

Design handoff must include:

- Desktop, tablet, and mobile layouts.
- RTL and LTR variants.
- Component inventory.
- Template card states.
- Filter drawer states.
- Empty/loading/error states.
- Trust label behavior.
- Plan-based CTA states.
- Private catalog states.
- Sponsored placement states.
- Accessibility notes.
- Analytics event annotations.

---

## 25. Mockup Acceptance Criteria

The mockup is acceptable only if:

- Marketplace value is clear without explanation.
- Search is prominent and outcome-oriented.
- Trust labels are visible and understandable.
- Sponsored assets are clearly labeled.
- Plan compatibility is obvious.
- Region and policy restrictions are not hidden.
- Private catalog behavior is represented.
- Empty and blocked states are designed.
- RTL/LTR behavior is explicitly represented.
- The page feels like Ariyo, not a generic app store.

---

## 26. Forbidden Patterns

Do not design:

- A generic card grid with no trust signals.
- Sponsored assets that look like certified assets.
- Install CTAs without entitlement verification.
- Hidden region or policy restrictions.
- Review scores without verification context.
- Popularity-first ranking.
- A prompt marketplace aesthetic.
- RTL text inside LTR layout.
- Arabic/Persian screens left-aligned.
- English/European screens right-aligned by default.

---

## Golden Rule

Ariyo Marketplace Homepage must help customers discover what they should trust, not merely what they can click.
