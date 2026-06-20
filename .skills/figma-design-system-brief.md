# Ariyo Figma Design System Brief

## Core Contract

Ariyo Figma Design System Brief is not a visual mood board, UI inspiration document, or generic component checklist.

It is the governed design-system brief that translates Ariyo's product strategy, Master Skill Index, Product Surface Map, Mockup Implementation Roadmap, Codex Execution Master Prompt, frontend skills, enterprise governance model, marketplace system, AI Employee operating model, and RTL/LTR layout law into a reusable Figma system that designers, frontend engineers, Codex, product owners, and AI-assisted builders can execute consistently.

Ariyo must not design pages one by one.

Ariyo must design a system first, then compose product surfaces from that system.

---

## 1. Purpose

This brief defines the first production-grade Figma Design System for Ariyo.

The design system must support:

- Public website and landing pages
- Pricing pages
- Customer app shell
- Dashboard surfaces
- AI Employee Builder
- AI Employee Detail
- Workflow Builder
- Marketplace discovery
- Template Detail
- Enterprise Admin
- Trust Center
- Creator Portal
- Partner Portal
- Customer Success Console
- Internal Ops Command Center
- Launch Readiness Command Center
- Responsive web experiences
- RTL Persian/Farsi and Arabic experiences
- LTR English and European-language experiences
- Codex/frontend implementation handoff

The purpose is to create one reusable UI language for Ariyo, not a collection of unrelated screens.

---

## 2. Required Inputs Before Figma Work Starts

Designers and Codex must read these files before producing the Figma system:

1. `master-skill-index-map.md`
2. `product-surface-map.md`
3. `ariyo-core-product-mockup-brief.md`
4. `mockup-implementation-roadmap.md`
5. `codex-execution-master-prompt.md`
6. `frontend-design.md`
7. `frontend-components.md`
8. `frontend-responsive.md`
9. `frontend-motion.md`
10. `frontend-copywriting.md`
11. `coding-standards.md`
12. `project-structure.md`
13. `frontend-state-data.md`
14. `frontend-forms-validation.md`
15. `frontend-testing.md`
16. `frontend-performance.md`
17. `marketplace-localization-internationalization.md`
18. `ariyo-landing-page-mockup-spec.md`
19. `ariyo-pricing-page-mockup-spec.md`
20. `ariyo-dashboard-mockup-spec.md`
21. `ariyo-ai-employee-builder-mockup-spec.md`
22. `ariyo-ai-employee-detail-mockup-spec.md`
23. `ariyo-workflow-builder-mockup-spec.md`
24. `ariyo-marketplace-homepage-mockup-spec.md`
25. `ariyo-template-detail-mockup-spec.md`
26. `ariyo-enterprise-admin-mockup-spec.md`
27. `ariyo-trust-center-mockup-spec.md`
28. `ariyo-creator-portal-mockup-spec.md`
29. `ariyo-partner-portal-mockup-spec.md`
30. `ariyo-customer-success-console-mockup-spec.md`
31. `ariyo-internal-ops-command-center-mockup-spec.md`
32. `ariyo-launch-readiness-command-center-mockup-spec.md`

Figma work must not start from visual taste alone.

---

## 3. Global RTL/LTR Design Law

This law is mandatory across every Ariyo Figma file, design token, layout component, screen, prototype, annotation, and frontend handoff.

### 3.1 Persian/Farsi and Arabic

Persian/Farsi and Arabic interfaces must be:

- RTL
- Right-aligned
- Mirrored at layout level
- Mirrored for navigation direction
- Mirrored for sidebars, drawers, breadcrumbs, progress indicators, timelines, tables, cards, forms, modals, empty states, filters, and data visualizations where direction matters
- Designed with localized typography and spacing
- Reviewed in actual RTL prototypes, not only inferred from LTR layouts

### 3.2 English and European LTR Languages

English and European-language interfaces must be:

- LTR
- Left-aligned
- Non-mirrored unless a specific locale requires otherwise
- Designed with Western-language typography and spacing
- Reviewed in LTR prototypes

### 3.3 Bidirectional Component Rule

Every reusable Figma component must define:

- LTR behavior
- RTL behavior
- Text alignment behavior
- Icon mirroring behavior
- Layout mirroring behavior
- Table alignment behavior
- Numeric/data alignment behavior
- Form-label alignment behavior
- Error-message alignment behavior
- Tooltip/popover placement behavior

If a component cannot behave correctly in both RTL and LTR, it is not approved for Ariyo.

---

## 4. Figma File Structure

The Figma design system should be organized as a product operating system, not a flat file.

Recommended Figma pages:

1. `00 - Design System Overview`
2. `01 - Brand Foundations`
3. `02 - Tokens`
4. `03 - Typography`
5. `04 - Grid & Layout`
6. `05 - Color & Status System`
7. `06 - Iconography`
8. `07 - Core Components`
9. `08 - Data Display Components`
10. `09 - Forms & Inputs`
11. `10 - Navigation & App Shell`
12. `11 - AI Employee Components`
13. `12 - Workflow Components`
14. `13 - Marketplace Components`
15. `14 - Enterprise Governance Components`
16. `15 - Trust & Compliance Components`
17. `16 - Customer Success & Ops Components`
18. `17 - Page Templates`
19. `18 - Responsive Variants`
20. `19 - RTL Variants`
21. `20 - Prototype Flows`
22. `21 - Frontend Handoff Notes`
23. `22 - Deprecated / Do Not Use`

---

## 5. Brand Direction

Ariyo must feel:

- Premium
- Enterprise-ready
- Calm
- Trustworthy
- Operational
- Governed
- Intelligent
- Measurable
- Human-in-control
- Marketplace-capable
- Global and localization-aware

Ariyo must not feel:

- Toy-like
- Chatbot-first
- Prompt-library-like
- Crypto-like
- Consumer social
- Overly playful
- Overly dark and hacker-like
- Generic SaaS
- Plugin store only
- Automation clone
- AI wrapper

---

## 6. Design Principles

### 6.1 Operating-System First

Ariyo is an AI Employee Operating System. UI must communicate operating control, not passive content.

Every core screen should answer:

- What is running?
- Who owns it?
- What outcome is it producing?
- What is risky?
- What needs approval?
- What changed recently?
- What should the user do next?

### 6.2 Trust Before Speed

Ariyo must not push users into unsafe AI deployment.

Important actions should show:

- Permissions
- Cost impact
- Data access
- Risk level
- Approval status
- Rollback option
- Auditability

### 6.3 Human Control

The design must make human review visible.

Humans must be clearly represented in:

- Approval queues
- Risk decisions
- Policy exceptions
- Launch gates
- Incident ownership
- Enterprise governance
- Marketplace review

### 6.4 Measurable Outcomes

Ariyo UI should show outcomes, not only activity.

Use outcome cards, scorecards, timelines, deltas, and performance summaries to connect AI work to business value.

### 6.5 Enterprise Calm

Avoid excessive animations, neon gradients, chaotic dashboards, decorative AI blobs, and over-promising copy.

The design should feel controlled and operational.

---

## 7. Token System

The Figma system must define design tokens in a way that can map to frontend implementation.

### 7.1 Required Token Families

- Color tokens
- Semantic color tokens
- Typography tokens
- Spacing tokens
- Radius tokens
- Shadow/elevation tokens
- Border tokens
- Motion tokens
- Icon size tokens
- Layout/grid tokens
- Z-index/layer tokens
- Density tokens
- Breakpoint tokens
- RTL/LTR direction tokens

### 7.2 Token Naming Pattern

Use stable, implementation-friendly naming:

```text
color.bg.default
color.bg.subtle
color.bg.elevated
color.text.primary
color.text.secondary
color.text.muted
color.border.default
color.status.success
color.status.warning
color.status.danger
color.status.info
space.1
space.2
space.3
radius.sm
radius.md
shadow.card
motion.fast
layout.sidebar.width
```

Avoid names based on subjective intent like:

- `beautifulBlue`
- `niceGray`
- `specialCardShadow`
- `mainGradientMaybe`

### 7.3 Semantic Status Tokens

Ariyo needs consistent operational statuses:

- Healthy
- Warning
- Critical
- Blocked
- Pending approval
- In review
- Draft
- Simulation passed
- Simulation failed
- Live
- Paused
- Deprecated
- Certified
- Unverified
- Region restricted
- Policy restricted
- Cost risk
- Data risk
- Security risk

These statuses must map to tokens, badges, iconography, tooltips, and table states.

---

## 8. Typography System

### 8.1 LTR Typography

For English and European-language UI:

- Use a clean enterprise SaaS type scale
- Prioritize readability over character
- Avoid playful display fonts
- Ensure strong table readability
- Provide compact, default, and spacious density variants

### 8.2 RTL Typography

For Persian/Farsi and Arabic UI:

- Use typography that is actually suitable for RTL scripts
- Do not force Latin metrics onto Persian or Arabic layouts
- Increase line height where needed
- Test button labels, cards, tables, sidebars, modals, and form labels in real RTL text
- Do not rely on placeholder Latin text to validate RTL layouts

### 8.3 Required Type Styles

Define at minimum:

- Display / hero title
- Page title
- Section title
- Card title
- Body default
- Body compact
- Caption
- Label
- Form helper
- Error text
- Table header
- Table cell
- KPI number
- Status label
- Code/monospace
- Legal/disclaimer

---

## 9. Layout, Grid, and Spacing

### 9.1 Layout System

Ariyo must support:

- Public marketing layout
- App shell layout
- Dashboard layout
- Admin console layout
- Marketplace layout
- Detail page layout
- Builder/canvas layout
- Evidence/report layout
- Mobile stacked layout
- Tablet split layout
- Desktop multi-column layout

### 9.2 App Shell Layout

The main app shell must support:

- Sidebar navigation
- Topbar actions
- Workspace switcher
- Search/command entry
- Notifications
- User profile
- Plan indicator
- Help/support entry
- RTL/LTR mirrored layout

### 9.3 Density Modes

Define density modes for:

- Executive view
- Operational view
- Data-heavy table view
- Builder/canvas view
- Mobile view

Density should never destroy readability.

---

## 10. Core Component Inventory

Figma must include these reusable components before page mockups are expanded.

### 10.1 Foundation Components

- Button
- Icon button
- Link button
- Badge
- Tag
- Tooltip
- Popover
- Modal
- Drawer
- Toast
- Alert banner
- Empty state
- Loading skeleton
- Error state
- Confirmation dialog
- Stepper
- Tabs
- Accordion
- Breadcrumbs
- Divider
- Avatar
- Avatar group
- Logo lockup
- Language/locale switcher

### 10.2 Navigation Components

- Public header
- Public footer
- App sidebar
- App topbar
- Workspace switcher
- Command/search bar
- Mobile navigation
- Breadcrumb trail
- Page action bar
- Settings navigation
- Marketplace navigation
- Enterprise admin navigation

### 10.3 Data Display Components

- KPI card
- Outcome card
- Health card
- Risk card
- Cost card
- Status card
- Table
- Data grid
- List row
- Timeline
- Activity feed
- Audit log row
- Progress indicator
- Score ring
- Score bar
- Chart container
- Evidence item
- Report export block

### 10.4 Form Components

- Text input
- Textarea
- Select
- Multi-select
- Checkbox
- Radio
- Toggle
- Segmented control
- Search input
- Date picker
- Time picker
- File upload
- Integration selector
- Permission selector
- Policy selector
- Cost limit input
- Region selector
- Validation summary
- Inline error
- Field helper

### 10.5 Builder Components

- Builder stepper
- Canvas node
- Canvas edge
- Trigger block
- Action block
- AI Employee assignment block
- Human approval block
- Condition block
- Error handling block
- Simulation drawer
- Launch checklist
- Version compare card
- Runtime preview card

---

## 11. Ariyo-Specific Component Systems

### 11.1 AI Employee Components

Required components:

- AI Employee card
- AI Employee status badge
- AI Employee avatar/identity block
- Role definition panel
- Outcome target panel
- Tool access panel
- Knowledge source panel
- Memory/context panel
- Permission risk panel
- Cost estimate panel
- Simulation result card
- Governance checklist
- Approval status block
- Version history item
- Incident status block

### 11.2 Marketplace Components

Required components:

- Template card
- Template trust label
- Certified badge
- Compatibility badge
- Region availability badge
- Plan compatibility label
- Install CTA block
- Pricing/usage block
- Review summary
- Dependency list
- Permission summary
- Private catalog label
- Promoted/sponsored label
- Creator profile card
- Partner profile card

### 11.3 Enterprise Components

Required components:

- Workspace card
- Role/permission matrix
- Policy rule row
- Approval queue item
- Audit evidence item
- Compliance framework card
- SSO/SCIM status block
- Data residency selector
- Exception request card
- Enterprise readiness score
- Procurement evidence request block

### 11.4 Trust and Safety Components

Required components:

- Security posture card
- Compliance evidence card
- Incident status row
- Uptime/status indicator
- Marketplace risk label
- AI governance status card
- Policy violation item
- Review queue item
- Trust report export button

### 11.5 Customer Success and Ops Components

Required components:

- Account health card
- Adoption score card
- Renewal risk card
- Expansion opportunity card
- Playbook step card
- Escalation item
- Internal incident item
- Launch gate item
- Readiness scorecard
- Owner/accountability row

---

## 12. Required Page Templates

The Figma Design System must include page templates for the first Ariyo mockups.

### 12.1 Public Surface Templates

- Landing page
- Pricing page
- Trust Center
- Public status page
- Legal/policy page
- Contact/sales page

### 12.2 Product App Templates

- Main dashboard
- AI Employee Builder
- AI Employee Detail
- Workflow Builder
- Marketplace homepage
- Template detail
- Enterprise Admin
- Creator Portal
- Partner Portal
- Customer Success Console
- Internal Ops Command Center
- Launch Readiness Command Center

### 12.3 Utility Templates

- Empty state page
- Permission denied page
- Billing required page
- Region restricted page
- Policy blocked page
- Loading state
- Error state
- Mobile fallback state

---

## 13. Responsive System

### 13.1 Breakpoints

Define design variants for:

- Mobile compact
- Mobile wide
- Tablet
- Small desktop
- Standard desktop
- Large desktop
- Wide command-center display

### 13.2 Responsive Rules

- Dashboards must collapse cards predictably.
- Tables must support responsive alternatives.
- Builders must remain usable on tablet but may restrict full editing on mobile.
- Enterprise admin must not hide critical governance controls.
- Marketplace cards must remain scannable.
- Trust Center must remain readable for procurement/security users.

### 13.3 Mobile Reality Rule

Not every Ariyo surface needs full mobile parity.

Define mobile behavior as one of:

- Full use
- Review only
- Approve only
- Read-only
- Not supported; redirect to desktop

---

## 14. Motion and Interaction System

Motion must be functional, not decorative.

Required motion patterns:

- Page transition
- Drawer open/close
- Modal reveal
- Toast entry/exit
- Step completion
- Simulation progress
- Approval state change
- Risk escalation
- Status update
- Table row expansion
- Marketplace card hover
- Command palette opening

Forbidden motion patterns:

- Excessive AI glow
- Animated background noise
- Distracting dashboard loops
- Gamified celebration for serious governance actions
- Slow transitions that harm productivity

---

## 15. Copywriting System in Figma

The Figma file must include copy guidance, not only components.

### 15.1 Voice

Ariyo voice must be:

- Clear
- Confident
- Enterprise-safe
- Outcome-focused
- Specific
- Trustworthy
- Calm

### 15.2 Avoid

Do not use copy that says:

- Magical AI
- Fully autonomous with no oversight
- Replace your entire team instantly
- Guaranteed revenue
- Zero risk
- No human review needed
- One-click enterprise transformation

### 15.3 Required Microcopy Patterns

Define copy examples for:

- Empty states
- Error states
- Permission warnings
- Cost warnings
- Approval required
- Region restriction
- Data access warning
- Marketplace install decision
- Simulation failed
- Launch blocked
- Trust evidence request

---

## 16. Accessibility Requirements

The design system must include accessibility annotations for:

- Color contrast
- Focus states
- Keyboard navigation
- Screen-reader labeling
- Form errors
- Status announcements
- Modal focus trapping
- Table navigation
- RTL screen-reader assumptions
- Reduced motion
- Touch targets

No core component is approved without accessibility notes.

---

## 17. Figma-to-Frontend Handoff

Every component and page template must include handoff notes.

### 17.1 Required Handoff Fields

For each component:

- Component name
- Purpose
- Variants
- States
- Props
- Responsive behavior
- RTL behavior
- Accessibility notes
- Related frontend component
- Related skill file
- Acceptance criteria

### 17.2 Suggested Component Naming

Use names that frontend can map easily:

```text
Button/Primary/Default
Button/Primary/Loading
Card/AIEmployee/Default
Card/AIEmployee/Risk
Badge/Status/Healthy
Badge/Status/Blocked
Table/EnterpriseAudit/Default
Drawer/SimulationResult/Default
Modal/ApprovalRequired/Default
```

### 17.3 Codex Handoff Rule

Codex must be able to inspect a design component and understand:

- What it is
- Where it appears
- Which props it needs
- Which states exist
- Which data it requires
- Which permission rules apply
- How it behaves in RTL and LTR

---

## 18. Design Tokens to Code Mapping

Figma tokens should be exportable or manually mappable to code.

Suggested mapping:

- Figma color styles → CSS variables / Tailwind config
- Figma spacing tokens → spacing scale
- Figma typography styles → text classes
- Figma radius tokens → radius scale
- Figma shadow tokens → elevation classes
- Figma breakpoint tokens → responsive utilities
- Figma motion tokens → transition utilities
- Direction tokens → `dir="rtl"` / `dir="ltr"` layout behavior

Do not create visual decisions that cannot be represented in frontend code.

---

## 19. State Matrix

Every Ariyo product surface must define these states when applicable:

- Default
- Empty
- Loading
- Error
- Partial data
- Permission denied
- Plan restricted
- Region restricted
- Policy blocked
- Pending approval
- Draft
- In review
- Live
- Paused
- Archived
- Deprecated
- Critical incident
- Read-only
- Mobile limited

---

## 20. Mock Data Requirements

Figma mockups must use realistic data.

Mock data should include:

- AI Employee names
- Role names
- Workspace names
- Enterprise account examples
- Workflow names
- Marketplace template names
- Cost/usage examples
- Risk examples
- Approval examples
- Compliance examples
- Region/data residency examples
- Persian/Farsi and Arabic examples for RTL validation
- English examples for LTR validation

Do not use lorem ipsum in final mockup specs.

---

## 21. First Figma Build Order

The design system must be built in this order:

### Wave 1 — Foundations

1. Brand foundations
2. Color tokens
3. Typography tokens
4. Spacing/radius/elevation tokens
5. Layout grid
6. RTL/LTR rules
7. Iconography rules

### Wave 2 — Core Components

1. Buttons
2. Inputs
3. Badges
4. Cards
5. Modals
6. Drawers
7. Tables
8. Tabs
9. Empty/loading/error states
10. Navigation primitives

### Wave 3 — App Shell

1. Sidebar
2. Topbar
3. Workspace switcher
4. Command/search
5. Notifications
6. User menu
7. Responsive shell
8. RTL mirrored shell

### Wave 4 — Product Components

1. AI Employee components
2. Workflow components
3. Marketplace components
4. Enterprise governance components
5. Trust/compliance components
6. Ops/readiness components

### Wave 5 — Page Templates

1. Landing page
2. Pricing page
3. Main dashboard
4. AI Employee Builder
5. AI Employee Detail
6. Workflow Builder
7. Marketplace homepage
8. Template detail
9. Enterprise Admin
10. Trust Center
11. Creator Portal
12. Partner Portal
13. Customer Success Console
14. Internal Ops Command Center
15. Launch Readiness Command Center

---

## 22. Codex Execution Order for Design System Implementation

When Codex turns this design system into frontend, it must execute in this order:

1. Read `codex-execution-master-prompt.md`
2. Read `mockup-implementation-roadmap.md`
3. Read `figma-design-system-brief.md`
4. Read frontend foundation skills
5. Build project structure
6. Build design tokens
7. Build app shell
8. Build core components
9. Build data-display components
10. Build form components
11. Build marketplace components
12. Build enterprise governance components
13. Build trust/compliance components
14. Build page templates
15. Build public surfaces
16. Build dashboard surfaces
17. Build AI Employee surfaces
18. Build workflow surfaces
19. Build marketplace surfaces
20. Build enterprise surfaces
21. Build internal ops surfaces
22. Run responsive validation
23. Run RTL/LTR validation
24. Run accessibility validation
25. Run frontend acceptance tests

Codex must not start from `ariyo-dashboard-mockup-spec.md` before components and tokens exist.

---

## 23. Figma Review Gates

Ariyo Figma work is not approved until these gates pass:

### Gate 1 — Foundation Gate

- Tokens exist
- Typography exists
- RTL/LTR law is represented
- Layout grid exists
- Status colors are semantic

### Gate 2 — Component Gate

- Core components exist
- Variants exist
- States exist
- RTL/LTR variants exist
- Accessibility notes exist

### Gate 3 — Product Surface Gate

- Page templates use reusable components
- No page-specific hacks dominate
- Design aligns with mockup specs
- Trust/governance states are visible

### Gate 4 — Frontend Handoff Gate

- Component names map to code
- Props/states are documented
- Responsive behavior is documented
- RTL/LTR behavior is documented
- Acceptance criteria are clear

### Gate 5 — Enterprise Readiness Gate

- Enterprise Admin is credible
- Trust Center is credible
- Data/residency controls are visible
- Audit/evidence patterns exist
- Approvals and policies are visible

---

## 24. Forbidden Figma Patterns

Do not create:

- One-off dashboard cards that cannot be reused
- RTL mockups that are only text-aligned but not structurally mirrored
- Marketplace cards without trust and compatibility signals
- Enterprise admin screens without auditability
- AI Employee screens without governance, cost, permissions, and human control
- Pricing screens that hide AI usage/cost realities
- Command center screens with unactionable alerts
- Status colors with no semantic system
- Components without states
- Components without mobile behavior
- Components without accessibility notes
- Figma-only visuals that frontend cannot reasonably implement

---

## 25. Acceptance Criteria

The Figma Design System is acceptable only if:

- It supports all first-wave Ariyo mockup specs.
- It has reusable tokens and components.
- It has documented RTL and LTR behavior.
- It supports enterprise-grade tables, dashboards, forms, modals, and governance flows.
- It includes realistic data examples.
- It supports frontend handoff without guessing.
- It avoids generic SaaS UI patterns where Ariyo needs operating-system semantics.
- It supports public, product, marketplace, enterprise, trust, ops, and success surfaces.
- It can be implemented by Codex in the order defined by `codex-execution-master-prompt.md` and `mockup-implementation-roadmap.md`.

---

## 26. Golden Rule

Ariyo's Figma Design System must make the product easier to build, easier to trust, easier to govern, easier to localize, easier to sell, and easier to scale.

If a visual decision looks good but makes Ariyo harder to implement, govern, localize, or explain, it must be rejected.
