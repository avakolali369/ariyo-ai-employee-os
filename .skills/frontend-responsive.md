# Ariyo Frontend Responsive Skill

Version: 1.0.0

Product: Ariyo

Purpose: Act as a Senior Frontend Engineer, Mobile UX Designer, and Responsive Architecture Guardian for Ariyo.

Audience: Codex Agents and AI-assisted development tools.

Priority: Non-negotiable.

Dependencies:

- frontend-design.md
- frontend-components.md

If conflicts exist:

- frontend-responsive.md wins for layout behavior.
- frontend-components.md wins for component behavior.
- frontend-design.md wins for product philosophy.

---

# 1. Responsive Philosophy

Ariyo must feel native and purpose-built across devices. Responsive design is not squeezing desktop into mobile. It is preserving user outcomes across screen sizes, input modes, reading directions, and network conditions.

Ariyo responsive design must be:

```text
mobile-first
content-prioritized
touch-safe
accessible
performance-aware
copy-aware
layout-stable
business-goal-driven
```

Ariyo responsive design must never be:

```text
desktop squeezed into mobile
horizontal-scroll dependent
hover-dependent
tiny-target based
table-first on mobile
CTA-hidden
content-truncated in risky flows
```

---

# 2. Responsive Principles

## 2.1 Preserve Outcomes

The user must be able to complete the same core outcomes on mobile:

```text
hire employee
deploy employee
connect knowledge source
sync source
review performance
recover from errors
save settings
search marketplace
```

## 2.2 Progressive Disclosure

Mobile shows the next most important action first. Secondary details move into sections, accordions, sheets, or detail screens.

## 2.3 Information Hierarchy Over Pixel Matching

Responsive design should preserve hierarchy, not exact desktop arrangement.

## 2.4 Touch and Mouse Are Different

Hover cannot carry critical meaning. Touch targets must be large enough and spacing must prevent accidental actions.

## 2.5 Mobile First Time To Value

Mobile first-time setup must remain fast. Do not make users complete desktop-style forms on a phone.

---

# 3. Breakpoint System

Official breakpoints:

```text
xs: 0px
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

Breakpoints are behavior thresholds, not design goals.

Default mental model:

```text
xs/sm: phone
md: tablet
lg: desktop
xl/2xl: wide desktop
```

Do not create arbitrary breakpoints unless a component genuinely requires one and the reason is documented.

---

# 4. Layout Architecture

## 4.1 App Shell

Desktop:

```text
persistent sidebar
topbar
content region
optional right panel
```

Tablet:

```text
collapsible sidebar or rail
topbar
content region
sheet-based secondary panels
```

Mobile:

```text
topbar or compact header
bottom navigation
content-first layout
bottom sheets or full-screen flows
drawer for secondary navigation
```

## 4.2 Dashboard

Desktop:

```text
summary row
KPI grid
charts
activity and insights
```

Mobile:

```text
one key summary
stacked KPI cards
primary insight first
charts simplified
activity list condensed
```

## 4.3 Marketplace

Desktop:

```text
search + filters
category/sidebar filters
employee grid
compare/detail actions
```

Mobile:

```text
search first
filter button opens sheet
single-column employee cards
sticky or visible primary CTA
```

## 4.4 Employee Profile

Desktop:

```text
hero + primary CTA
metrics/sidebar
sections/tabs
knowledge/channels/performance
```

Mobile:

```text
compact hero
status and CTA first
accordion sections
metrics as cards
high-risk actions explicit
```

## 4.5 Deploy Employee

Desktop:

```text
wizard or modal with review panel
requirements checklist
primary CTA
```

Mobile:

```text
full-screen guided flow
one step per screen
sticky CTA
clear progress
```

## 4.6 Knowledge

Desktop:

```text
source list/table
health panels
source details side panel
```

Mobile:

```text
source cards
status badges
bottom sheets for actions
sync status visible
```

## 4.7 Analytics

Desktop:

```text
filters
KPI cards
charts
tables
```

Mobile:

```text
primary metrics
one chart per section
cards instead of dense tables
filters in sheet
```

---

# 5. Grid System

Use:

```text
mobile: 4 columns
tablet: 8 columns
desktop: 12 columns
```

Containers:

```text
mobile: full width with safe padding
tablet: medium constrained
desktop: max-width where content benefits from reading comfort
wide: avoid stretching text-heavy content
```

Gutters follow token scale:

```text
16 mobile
24 tablet
32 desktop
```

---

# 6. Spacing Rules

Use official spacing scale:

```text
4
8
12
16
24
32
40
48
64
80
96
```

Mobile spacing should be tighter but readable. Do not use arbitrary margins/padding.

Safe areas must be respected on mobile.

---

# 7. Typography Responsiveness

Text must remain readable on all devices.

Rules:

```text
Do not shrink below accessible size.
Line length must remain comfortable.
Headings may reduce scale on mobile.
Descriptions should shorten on mobile, not disappear when needed.
Numbers must keep labels and units.
Persian and RTL typography must be tested.
```

---

# 8. Navigation Responsiveness

## 8.1 Desktop

Use persistent sidebar for primary app navigation.

## 8.2 Tablet

Use collapsible sidebar or rail.

## 8.3 Mobile

Use bottom navigation for primary destinations and drawer for secondary destinations.

Mobile bottom nav rules:

```text
max 5 items
labels required
icons support labels, not replace them
active state text-based
should not hide unpredictably
```

---

# 9. Component Responsiveness

Components adapt behavior, not just size.

Examples:

```text
Dropdown → bottom sheet on mobile when complex
Popover → bottom sheet on mobile
Table → cards on mobile
Sidebar → drawer or bottom nav on mobile
Dialog → full-screen or bottom sheet on mobile when complex
Command palette → full-screen search on mobile
```

---

# 10. Tables and Data Responsiveness

Tables must never become unusable on mobile.

Priority pattern:

```text
desktop table
tablet condensed table
mobile cards or summaries
```

Mobile cards must keep labels:

```text
Status: Active
Conversations: 42
AI cost: $12.40
Last active: Yesterday
```

Horizontal scroll is allowed only for truly dense admin data and must be usable.

---

# 11. Overlay Responsiveness

Desktop:

```text
dialogs
drawers
popovers
dropdowns
tooltips
```

Mobile:

```text
bottom sheets
full-screen flows
action sheets
full-screen search
inline hints instead of hover tooltips
```

Rules:

```text
No tiny centered modal on mobile.
No gesture-only dismissal.
Close action must be visible.
Focus and scroll lock must work.
Critical content must fit above keyboard.
```

---

# 12. Mobile Interaction Rules

Mobile design must support thumb use and one-handed interaction.

Required:

```text
minimum touch target 44px
preferred important targets 48–56px
primary CTA reachable
safe area respected
keyboard-aware forms
errors visible near fields
no hover-only controls
```

---

# 13. Empty States Responsiveness

Mobile empty states must be short and action-first.

Desktop:

```text
No knowledge sources yet.
Add a source so your employees can answer with business context.
```

Mobile:

```text
No knowledge sources yet.
Add one to improve employee answers.
```

Do not let illustrations push CTAs below the fold.

---

# 14. Loading States Responsiveness

Skeletons must mirror responsive layout.

Rules:

```text
Do not use desktop skeleton on mobile.
Use fewer skeleton blocks on mobile.
Avoid full-page spinners for content.
Long tasks need progress copy.
Reduced motion disables shimmer.
```

---

# 15. Image Responsiveness

Images must communicate value and remain optimized.

Rules:

```text
Use responsive sizes.
Avoid heavy hero images on mobile.
Crop intentionally.
Do not rely on image text.
Use alt text when meaningful.
```

---

# 16. Performance Rules

Responsive performance is part of UX.

Required:

```text
route splitting
component lazy loading where useful
optimized images
virtualized large lists
debounced search
preserve content during background refetch
avoid layout shift
avoid heavy animation on mobile
```

React Query rules:

```text
initial load uses skeleton
background refetch keeps existing content
mutation pending state local to action
errors recover in place
```

---

# 17. Accessibility Rules

Responsive UI must remain accessible.

Required:

```text
logical focus order
visible focus
semantic headings
screen reader labels
touch targets
text status labels
keyboard support
no color-only meaning
no motion-only meaning
reduced motion support
```

---

# 18. Ariyo-Specific Responsive Patterns

## Dashboard

Mobile first shows the most important business summary and next action.

## Marketplace

Search and filters must remain easy. Employee cards must keep CTA and status visible.

## Employee Profile

Status, primary CTA, and readiness must be visible before secondary details.

## Deploy Employee

Mobile uses full-screen guided steps. Missing requirements must be visible.

## Knowledge

Source cards show state, last synced, and recovery actions.

## Workflow

Desktop may use canvas. Mobile must use step setup: Trigger, Condition, Action, Review, Activate.

## Command/Search

Mobile command/search must focus input immediately and show results clearly.

## Pricing/Billing

Mobile pricing must be transparent and avoid pressure. Billing actions must remain explicit.

---

# 19. Definition of Done

Responsive implementation is production-ready only when:

```text
Mobile is purpose-built, not squeezed desktop.
Tablet layout is considered.
Desktop layout remains structured.
Primary CTA remains visible.
Touch targets meet minimum size.
Tables transform appropriately.
Overlays adapt to mobile.
Forms are keyboard-aware.
Errors remain visible.
Loading and empty states are responsive.
Performance is acceptable on low-end mobile.
Accessibility works across sizes.
Persian and RTL layout are tested when relevant.
No critical content is hidden by truncation.
```

---

# 20. Forbidden Patterns

Never ship:

```text
desktop UI squeezed into mobile
forced horizontal table scroll for core flows
tiny touch targets
hover-only actions
icon-only mobile nav
hidden primary CTA
sticky CTA covering content
tiny centered modals on mobile
desktop skeleton on mobile
full-page spinner for content
large decorative image pushing CTA below fold
truncated destructive CTA
errors hidden below keyboard
tooltip-only critical information
mobile layout that requires zooming
multiple competing CTAs
unreadable chart labels
```

---

# Final Rule

Ariyo responsive design is complete only when users can understand, act, recover, and trust the product on mobile, tablet, and desktop without losing meaning or momentum.
