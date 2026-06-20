# Ariyo Template Detail Mockup Specification

## Core Contract

Ariyo Template Detail Mockup Specification is not a product card expanded into a page.

It is the governed mockup specification for the decision surface where a customer evaluates whether a Marketplace template is safe, useful, compatible, trusted, affordable, installable, region-safe, permission-scoped, and worth deploying into their organization.

The Template Detail page must help customers answer five questions quickly:

1. What business outcome does this template create?
2. Can I trust it?
3. Can my plan, region, permissions, integrations, and governance model support it?
4. What will it cost, access, install, and change?
5. What happens if I preview, request approval, install, rollback, or uninstall it?

Ariyo must never make a Marketplace asset look easier, safer, cheaper, more certified, more compatible, or more enterprise-ready than it actually is.

---

## 1. Purpose

This skill defines the mockup requirements for the Ariyo Marketplace Template Detail page.

The page is used by:

- Customers evaluating Marketplace assets
- Enterprise admins reviewing install requests
- Procurement/security/legal reviewers checking trust evidence
- Team leads comparing solutions
- Creators presenting template value
- Partners supporting implementation
- Ariyo internal Marketplace operators auditing quality and trust

The page must work for:

- AI Employee Templates
- Agent Team Templates
- Workflow Templates
- Knowledge Packs
- GEO Templates
- Integration Bundles
- Marketplace Solutions
- Certified Templates
- Private Catalog Templates
- Partner Solutions
- Internal Organization Templates

---

## 2. Required Product Narrative

The page must communicate:

> “This is not a prompt you copy. This is an installable, governed AI Employee asset with defined outcomes, permissions, dependencies, costs, reviews, trust evidence, and lifecycle controls.”

The user should feel that Ariyo is helping them make a safe deployment decision, not pushing them through a fast install funnel.

---

## 3. Global RTL/LTR Layout Law

Persian/Farsi and Arabic interfaces must be fully RTL and right-aligned across all UI elements.

English and European-language interfaces must be fully LTR and left-aligned across all UI elements.

This applies to:

- Header navigation
- Breadcrumbs
- Template title and metadata
- Trust labels
- Pricing panels
- Install CTAs
- Tabs
- Review cards
- Dependency lists
- Permission explanations
- Sidebars
- Modals
- Drawers
- Tooltips
- Comparison tables
- Empty states
- Error messages
- Mobile layouts

For RTL locales:

- Primary navigation begins from the right
- Sidebar/drawer placement mirrors appropriately
- Cards align right
- Progress and timeline visuals mirror direction
- Icons that indicate direction must flip
- Charts and numbers remain readable and locale-aware

For LTR locales:

- Navigation and content follow left-to-right defaults
- Cards align left
- Directional icons follow LTR expectations

If this rule conflicts with any other layout instruction, this rule wins.

---

## 4. Page Goals

The Template Detail page must support these actions:

1. Understand the template purpose
2. Evaluate business value
3. Verify trust, certification, and evidence
4. Preview behavior before install
5. Check plan compatibility
6. Check region compatibility
7. Check permissions and data access
8. Check integration and model dependencies
9. Check pricing and billing impact
10. Read verified reviews and outcome evidence
11. Request approval when needed
12. Install when allowed
13. Add to private catalog
14. Compare with alternatives
15. Contact creator/partner/support when needed

---

## 5. Page Information Architecture

### Primary Areas

1. Marketplace breadcrumb
2. Template hero summary
3. Trust and eligibility panel
4. Primary CTA area
5. Tabbed detail content
6. Right/side decision rail
7. Related templates and alternatives
8. Footer support actions

### Recommended Tab Structure

- Overview
- Demo / Sandbox
- Outcomes
- Setup & Requirements
- Permissions
- Pricing
- Trust & Compliance
- Reviews
- Versions
- Support

On mobile, tabs may become a sticky horizontal scroll or section jump menu.

---

## 6. Above-the-Fold Layout

### Required Hero Content

The top area must include:

- Template name
- Asset type
- Category
- Creator/partner/vendor identity
- Certification/trust labels
- Short outcome statement
- Plan compatibility
- Region compatibility
- Install eligibility status
- Rating/reputation summary
- Pricing summary
- Primary CTA
- Secondary CTA

### Example Hero Copy

Title:

> AI Sales Follow-up Employee

Subtitle:

> Automatically qualifies inbound leads, drafts personalized follow-ups, updates CRM records, and escalates high-intent opportunities to your sales team.

Primary CTA states:

- Install Template
- Try in Sandbox
- Request Approval
- Upgrade to Install
- Contact Sales
- Add to Private Catalog
- Unavailable in Your Region
- Requires Admin Approval
- Requires Integration Setup

---

## 7. Trust Labels

Trust labels must be visible but not decorative.

### Label Types

- Certified by Ariyo
- Security Reviewed
- Enterprise Ready
- Low Cost Risk
- High Activation Rate
- Customer Favorite
- Region Compatible
- Private Catalog Approved
- Partner Supported
- Smart Ready
- Requires Admin Review
- Experimental
- Deprecated
- Suspended

### Label Rules

Each label must have:

- Plain-language explanation
- Evidence source
- Expiration date when relevant
- Confidence level when relevant
- Link to trust/compliance detail

Never show a badge without explaining what it means.

Never allow marketing labels to look like certification labels.

---

## 8. Install Eligibility Panel

The page must include a clear eligibility decision box.

### Eligibility States

- Ready to install
- Ready after integration setup
- Requires approval
- Requires plan upgrade
- Requires region exception
- Blocked by enterprise policy
- Blocked by missing dependency
- Blocked by vendor restriction
- Blocked due to safety review
- Not available in private catalog

### Required Fields

- Plan fit
- Permission fit
- Region fit
- Integration readiness
- Billing readiness
- Approval requirement
- Security/compliance status
- Data access summary
- Estimated setup time

### Example Microcopy

> This template can be installed on your current plan, but your admin must approve CRM write access before activation.

---

## 9. Pricing and Billing Section

The Pricing section must make commercial impact clear before install.

### Required Pricing Fields

- Price model
- Included usage
- Estimated monthly cost
- AI cost estimate
- Integration cost note if relevant
- Creator/vendor fee
- Ariyo platform fee when applicable
- Refund policy
- Trial/sandbox availability
- Plan limitations
- Upgrade prompts

### Pricing Models

- Free
- Included with plan
- One-time purchase
- Monthly subscription
- Usage-based
- Per-seat
- Per-workflow
- Per-successful-run
- Enterprise custom
- Partner service bundle

### Forbidden Pricing Patterns

- Hide AI usage cost
- Hide creator fee
- Hide plan upgrade requirement
- Show “free” if paid dependencies exist
- Show local currency without correct locale context
- Use confusing discount claims

---

## 10. Demo / Sandbox Section

This section must reduce risk before install.

### Demo Types

- Static preview
- Interactive demo
- Simulated workflow run
- Demo data sandbox
- Integration mock sandbox
- Enterprise proof-of-concept sandbox

### Required Demo Warnings

- Demo uses sample data
- Demo does not connect to production unless explicitly approved
- Demo cost limits are enforced
- Demo output may differ after real integrations are connected
- Demo actions are reversible or non-production

### Demo CTA Options

- Try Sandbox
- Run Sample Scenario
- Preview Workflow
- See Example Output
- Compare Before/After
- Request Enterprise POC

---

## 11. Outcomes Section

Outcomes must focus on business value, not generic features.

### Required Outcome Fields

- Primary outcome
- Secondary outcomes
- Success metrics
- Typical time to value
- Outcome confidence
- Customer-confirmed evidence where available
- Before/after example
- Negative outcome risks

### Example Outcomes

- Faster lead response
- Lower manual CRM entry
- Higher follow-up consistency
- Reduced support triage time
- Better knowledge retrieval accuracy
- Improved compliance review speed

---

## 12. Setup & Requirements Section

This section must explain what the customer needs before installing.

### Required Requirement Types

- Plan requirements
- Role/admin requirements
- Integration requirements
- Data/knowledge requirements
- Region requirements
- Model/provider requirements
- Permission requirements
- Approval requirements
- Training requirements
- Support requirements

### Dependency Display

Each dependency must show:

- Name
- Type
- Required/optional
- Status
- Risk level
- Setup action
- Owner

---

## 13. Permissions Section

Permissions must be plain-language and risk-aware.

### Required Permission Groups

- Data read access
- Data write access
- Tool execution access
- External integration access
- Memory/context access
- Knowledge source access
- Workflow trigger access
- Human approval bypass status
- Admin-only actions

### Permission Explanation Format

For each permission:

- What it can access
- Why it needs access
- What it can change
- Whether it requires approval
- Whether it can be limited
- How to revoke it

### Example

> CRM Write Access: Allows this template to update lead status and add follow-up notes. Requires Sales Admin approval. Can be revoked from Workspace Policy Settings.

---

## 14. Trust & Compliance Section

This section must summarize evidence, not overwhelm users.

### Required Trust Content

- Certification status
- Security review status
- Privacy summary
- Data residency compatibility
- Vendor/subprocessor summary
- AI safety evaluation summary
- Incident history
- Policy enforcement history
- Evidence package link
- Compliance matrix link when available

### Enterprise View

Enterprise users should see:

- Procurement evidence
- Vendor approval state
- Security questionnaire status
- Legal/compliance review status
- Subprocessor report
- Data flow summary
- Audit export option

---

## 15. Reviews Section

Reviews must be verified and abuse-resistant.

### Review Types

- Verified install review
- Verified outcome review
- Enterprise governance review
- Implementation review
- Support review
- Creator response

### Review Fields

- Reviewer role label, not private identity
- Organization size bracket when allowed
- Plan context
- Use case context
- Outcome rating
- Setup difficulty
- Support quality
- Cost predictability
- Trust confidence
- Date
- Verification status

### Forbidden Review Patterns

- Fake reviews
- Anonymous unverifiable star manipulation
- Creator self-review
- Incentivized reviews without disclosure
- Review bombing
- Ranking manipulation through reviews

---

## 16. Versions Section

The user must understand whether the template is maintained.

### Required Version Fields

- Current version
- Release date
- Changelog
- Compatibility notes
- Deprecation status
- Migration requirements
- Rollback support
- Last health check
- Last certification review

---

## 17. Support Section

Support must be clear before install.

### Support Fields

- Support owner
- Creator support availability
- Partner support availability
- Ariyo support coverage
- SLA level
- Support channels
- Known limitations
- Documentation links
- Escalation path

---

## 18. Decision Rail

The page should have a sticky decision rail on desktop.

### Decision Rail Content

- Price summary
- Plan compatibility
- Install eligibility
- Required approvals
- Required integrations
- Region compatibility
- Primary CTA
- Secondary CTA
- Save/compare action
- Contact support/creator action

### Mobile Behavior

On mobile, decision rail becomes a bottom sticky action bar with expandable details.

---

## 19. CTA Rules

### Primary CTA Priority

1. Install Template
2. Request Approval
3. Try Sandbox
4. Upgrade to Install
5. Add to Private Catalog
6. Contact Sales
7. Unavailable / Blocked

### CTA Safety Rules

Do not show “Install” as primary if:

- Required approval is missing
- Region is incompatible
- Plan does not support template
- Required integration is missing
- Security review blocks install
- Vendor is suspended
- Template is deprecated
- Customer policy blocks install

---

## 20. Basic / Pro / Smart Behavior

### Basic

- Simpler detail page
- Clear plan limits
- Strong “try sandbox” emphasis
- Low-cost templates prioritized
- Reduced enterprise compliance detail
- Upgrade messaging when needed

### Pro

- Full setup requirements
- Integration readiness
- Team workflow detail
- Approval flow visibility
- Moderate compliance detail
- Operational outcome evidence

### Smart

- Full enterprise-grade detail
- Advanced governance
- Model/provider profile
- AI safety evidence
- Cost forecast
- Dependency impact analysis
- Private catalog controls
- Enterprise procurement links

---

## 21. Empty, Loading, Error, and Blocked States

### Empty States

- No reviews yet
- No sandbox available
- No certification yet
- No enterprise evidence yet
- No compatible integrations connected

### Loading States

- Eligibility checking
- Pricing loading
- Dependency scanning
- Region compatibility checking
- Approval policy resolving

### Error States

- Dependency service unavailable
- Pricing unavailable
- Trust evidence unavailable
- Reviews unavailable
- Sandbox failed to load

### Blocked States

Blocked states must explain:

- Why blocked
- Who can resolve it
- What action is needed
- Whether there is an alternative

---

## 22. Responsive Requirements

### Desktop

- Full hero + sticky decision rail
- Tabbed detail content
- Comparison widgets
- Rich evidence panels

### Tablet

- Decision rail may collapse into a right drawer
- Tabs remain accessible
- Cards use two-column layout where possible

### Mobile

- One-column layout
- Sticky bottom CTA
- Section jump menu
- Condensed trust labels
- Expandable permission/dependency blocks

---

## 23. Component Requirements

Required components:

- TemplateHero
- TrustLabelCluster
- InstallEligibilityPanel
- PricingSummaryCard
- SandboxPreviewCard
- OutcomeEvidenceBlock
- RequirementChecklist
- PermissionExplainer
- DependencyList
- RegionCompatibilityStatus
- ApprovalFlowPreview
- VerifiedReviewCard
- VersionTimeline
- SupportOwnershipCard
- StickyDecisionRail
- RelatedTemplateCard
- BlockedInstallNotice

---

## 24. Analytics Events

Track:

- template_detail_viewed
- template_cta_clicked
- install_eligibility_checked
- sandbox_started
- sandbox_completed
- approval_requested
- install_started
- install_blocked
- trust_label_expanded
- pricing_expanded
- permission_expanded
- dependency_expanded
- review_filtered
- creator_contact_clicked
- support_clicked
- compare_clicked
- private_catalog_add_requested

Each event must include:

- template_id
- asset_type
- plan
- locale
- directionality
- source_surface
- eligibility_state
- region_state
- trust_label_count
- user_role

---

## 25. Accessibility Requirements

The page must support:

- Keyboard navigation
- Screen readers
- High contrast mode
- Accessible badge labels
- Clear focus states
- Descriptive CTAs
- Non-color-only status indicators
- Reduced motion preference
- RTL/LTR accessibility consistency

---

## 26. Frontend Handoff Requirements

Design handoff must include:

- Desktop, tablet, mobile frames
- RTL and LTR variants
- Hero states
- Eligibility states
- Pricing states
- Trust label states
- Approval states
- Blocked install states
- Sandbox states
- Empty/loading/error states
- Component naming
- Interaction notes
- Analytics event map
- Copy variants

---

## 27. Forbidden Patterns

Ariyo must not:

- Hide permission risks below the fold
- Show install before compatibility checks finish
- Make paid placement look like trust
- Show certification without evidence
- Hide region incompatibility
- Hide plan upgrade requirement
- Hide billing impact
- Hide vendor/subprocessor involvement
- Use fake urgency
- Use misleading reviews
- Auto-install from detail page without approval when needed
- Make demo look like production
- Use LTR layout for Persian or Arabic
- Use RTL layout for English or European-language interfaces

---

## 28. Mockup Acceptance Criteria

The mockup is acceptable only if:

- A user understands the template value in under 10 seconds
- Trust and eligibility are visible above the fold
- Pricing and permissions are understandable before install
- Region and plan compatibility are clear
- Approval requirements are explicit
- Sandbox/demo is easy to find
- Reviews are verified and contextual
- Enterprise evidence is accessible
- CTA state reflects real eligibility
- RTL/LTR variants are fully mirrored and aligned
- Mobile interaction is usable
- The page feels like a governed AI Employee Marketplace, not a template gallery

---

## 29. Golden Rule

Ariyo Template Detail must help customers make a safe deployment decision.

If the page increases installs by hiding risk, it has failed.

If the page increases trust by explaining value, risk, evidence, compatibility, and next action clearly, it has succeeded.
