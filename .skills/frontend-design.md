# Ariyo Frontend Design Skill

Version: 1.0.0

Product: Ariyo

Purpose: Act as a Senior Product Designer, UX Lead, and Design System Guardian for Ariyo.

Audience: Codex Agents and AI-assisted development tools.

Priority: Non-negotiable.

If conflicts exist between implementation and this document, this document always wins.

---

> This document is the Frontend Design Constitution for Ariyo. Design decisions must support clarity, trust, speed, accessibility, responsiveness, and premium restraint.

---

# 1. Product Design Philosophy

Ariyo is a premium SaaS operating system for hiring, deploying, and managing AI employees. The interface must make AI feel operational, safe, and useful for business users.

Ariyo must feel:

```text
calm
premium
clear
trustworthy
business-oriented
fast
accessible
mobile-first
human
operational
```

Ariyo must never feel:

```text
magical
gimmicky
noisy
playful
technical-first
sci-fi
confusing
cheap
AI-hype-driven
decorative
```

Design is successful when users understand what Ariyo is, what an employee can do, what is active, what is missing, what is safe, and what to do next.

---

# 2. Ariyo Design Principles

## 2.1 Invisible Design

The interface should reduce cognitive load. Visual style must support comprehension and action. Do not add decoration that does not improve understanding.

Approved reasons for visual treatment:

```text
clarify hierarchy
signal status
guide action
reduce uncertainty
support scanning
protect trust
improve accessibility
```

Forbidden reasons:

```text
looks cool
adds energy
makes AI feel alive
fills space
adds delight without purpose
follows trend
```

## 2.2 Luxury Through Restraint

Ariyo premium quality comes from spacing, typography, contrast, rhythm, interaction quality, and copy precision. It does not come from visual noise.

Use restrained surfaces, clear composition, precise alignment, strong hierarchy, and subtle depth.

Avoid:

```text
neon AI gradients
glowing cards
floating orbs
animated particles
busy shadows
excessive borders
random illustrations
cheap dashboard chrome
```

## 2.3 First Time To Value Under 5 Minutes

Every first-time experience must move users toward value quickly.

Priority path:

```text
Choose employee
Hire employee
Add knowledge source
Connect channel
Review setup
Deploy employee
View dashboard
```

Do not delay primary setup with long tours, feature dumps, decorative hero animation, unnecessary personalization, or optional advanced settings.

## 2.4 Mobile First

Ariyo must be excellent on mobile, not merely responsive. Mobile screens require purpose-built hierarchy, short copy, visible CTAs, accessible touch targets, and clear recovery.

## 2.5 One Primary CTA Per Page

Every page and major state must have one dominant primary action.

Examples:

```text
Hire employee
Deploy employee
Connect knowledge source
Create workflow
Save changes
Review setup
Retry sync
```

Multiple primary buttons in one viewport are forbidden unless they are repeated instances of the same action in repeated list items.

## 2.6 Typography and Spacing Create Hierarchy

Do not rely on color alone for hierarchy. Use type scale, spacing, grouping, alignment, and content order first.

## 2.7 Colors Serve Meaning

Color must communicate semantic meaning, brand identity, focus, or hierarchy. It must not be used as decoration without purpose.

## 2.8 Motion Guides Focus

Motion is allowed only when it improves clarity, continuity, feedback, orientation, or perceived performance. Decorative motion is forbidden.

## 2.9 High-Quality Imagery Only

Images must communicate trust, product context, business value, or employee identity. Avoid low-quality, generic, cartoonish, or AI-cliché imagery.

## 2.10 Token-Driven Design

All colors, spacing, radius, shadows, typography, motion, and layout primitives must use design tokens. Hardcoded magic values are forbidden.

---

# 3. Visual System

## 3.1 Layout

Ariyo layouts must be calm, spacious, and structured.

Use:

```text
clear page header
stable shell
predictable navigation
one dominant content area
structured cards
consistent grid
scannable sections
visible primary CTA
```

Avoid:

```text
floating unrelated widgets
dense dashboard walls
unstructured cards
random card sizes
multiple competing CTAs
unclear section grouping
```

## 3.2 Page Anatomy

Production pages should follow this order:

```text
Page title
Short contextual description when needed
Primary action
Key status or summary
Primary content
Secondary content
Recovery or help when needed
```

## 3.3 Density

Default density should feel premium and readable. Dense views are allowed only for tables, advanced dashboards, and admin workflows. Mobile density must be lower than desktop density.

## 3.4 Surfaces

Use surfaces to group meaning. A card must represent a coherent object or decision.

Good card objects:

```text
Employee
Knowledge source
Workflow
Integration
KPI
Activity item
Plan
Setting group
```

Bad cards:

```text
decorative wrapper
single icon with vague copy
random stats without relationship
nested cards inside cards without hierarchy
```

## 3.5 Empty Space

Empty space is part of premium design. Do not fill whitespace with decorative content.

---

# 4. Design Tokens

Codex must use tokens for every repeated design decision.

## 4.1 Spacing Scale

Use this spacing scale:

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

Do not invent arbitrary spacing.

## 4.2 Radius

Use radius tokens for component types:

```text
radius-sm: small controls and tags
radius-md: inputs and buttons
radius-lg: cards and panels
radius-xl: major surfaces
radius-full: pills, avatars, toggles
```

## 4.3 Shadows

Shadows must be subtle and functional. Heavy shadows are forbidden.

Use elevation only to communicate layering or interactivity.

## 4.4 Color Tokens

Use semantic tokens:

```text
background
foreground
muted
muted-foreground
surface
surface-elevated
border
primary
primary-foreground
secondary
accent
success
warning
destructive
info
focus
```

Never use raw colors in components.

## 4.5 Typography Tokens

Use type tokens for roles, not visual preference.

```text
display
page-title
section-title
card-title
body
body-small
caption
label
button
metric
```

## 4.6 Motion Tokens

Motion uses approved duration and easing from `frontend-motion.md`.

---

# 5. Typography Rules

Typography must support scanning and comprehension.

## 5.1 Hierarchy

Use headings to orient users, not to decorate sections.

Good headings:

```text
Employee performance
Knowledge sources
Deploy employee
AI cost
Recent activity
```

Bad headings:

```text
Power center
AI brain
Magic dashboard
Boost zone
```

## 5.2 Readability

Body copy should be short, direct, and readable. Avoid long paragraphs in UI.

Line length should remain comfortable. Use narrower content width for explanations and wider width for data tables.

## 5.3 Numeric Data

Metrics must have labels and units. Do not show unexplained numbers.

Good:

```text
Average response time
2m 14s
```

Bad:

```text
Response
2.14
```

---

# 6. Color and Status

Status must be communicated by text plus visual treatment.

Approved status labels:

```text
Ready
Active
Inactive
Needs setup
Needs review
Failed
Syncing
Synced
Connected
Disconnected
Paused
Draft
Pending
```

Color must never be the only signal.

Good:

```text
Badge text: Active
```

Bad:

```text
green dot only
```

---

# 7. Component Design Rules

Components must be predictable, accessible, reusable, and token-driven.

All components must support:

```text
default
hover
focus
active
disabled
loading
error
success
empty when relevant
mobile
keyboard
screen reader
dark mode
RTL when applicable
```

## 7.1 Buttons

Buttons must communicate action clearly.

Use one primary CTA per page. Destructive buttons must name the destructive object.

## 7.2 Cards

Cards must represent meaningful objects. Employee cards should feel like business profiles, not plugin tiles.

## 7.3 Forms

Labels are mandatory. Placeholder-only inputs are forbidden.

## 7.4 Tables

Tables are for comparison and management. On mobile, tables must transform into readable cards or prioritized summaries.

## 7.5 Overlays

Dialogs and drawers must be used intentionally. Nested overlays are forbidden unless explicitly justified.

---

# 8. Ariyo-Specific Experience Rules

## 8.1 Employee Marketplace

The marketplace must feel like hiring business roles.

Use:

```text
Employee marketplace
Hire employee
View profile
Ready to deploy
Needs setup
```

Avoid:

```text
Agent store
Bot marketplace
Install plugin
Launch agent
AI worker shop
```

## 8.2 Employee Profile

Employee profiles must explain role, tasks, channels, knowledge, requirements, performance, AI cost, and next action.

## 8.3 Deploy Employee

Deployment is high trust. The UI must clearly show:

```text
what is ready
what is missing
whether the employee can respond
what happens after deployment
how to recover from failure
```

## 8.4 Knowledge Source

Knowledge sources must feel like business context, not technical data stores.

Use clear readiness states and last synced information.

## 8.5 Dashboard and Analytics

Dashboards must show business-relevant performance and cost with calm, credible language.

Do not gamify data.

## 8.6 AI Cost

AI cost must be transparent and non-alarming. Explain cost in relation to activity.

---

# 9. Accessibility Rules

Ariyo must meet WCAG AA expectations.

Required:

```text
visible focus states
keyboard navigation
semantic headings
meaningful labels
screen reader text for icon buttons
text status labels
accessible errors
accessible loading states
reduced motion support
sufficient contrast
large touch targets
no color-only meaning
no motion-only meaning
```

Minimum touch target: 44px.

Preferred critical action target: 48–56px.

---

# 10. Responsive Design Requirements

Ariyo must be mobile-first.

Design must adapt:

```text
navigation
cards
tables
forms
overlays
charts
empty states
loading states
CTA placement
copy length
```

Never shrink desktop UI into mobile.

---

# 11. RTL and Persian Design Requirements

Persian and RTL experiences must feel native.

Required:

```text
natural Persian alignment
RTL-aware layout
readable mixed LTR values
localized accessible names
natural CTA order
Persian typography readability
no literal translation artifacts
```

---

# 12. Performance and Perceived Quality

Design must not require heavy visuals to feel premium.

Avoid:

```text
large decorative animations
heavy blur
expensive background graphics
unoptimized images
layout shifts
full page spinners
```

Use skeletons and progressive reveal for content-heavy views.

---

# 13. Definition of Done

Ariyo design is production-ready only when:

```text
The page has one clear purpose.
The primary action is obvious.
Hierarchy is clear through type, spacing, and structure.
All components use tokens.
All states are designed.
Mobile is purpose-built.
Accessibility is handled.
Dark mode is supported.
RTL and Persian are considered when relevant.
Loading, empty, error, and success states exist.
Data has labels, units, and context.
No AI hype visuals are used.
No hardcoded styling is used.
The experience protects First Time To Value.
```

---

# 14. Forbidden Patterns

Never ship:

```text
magic numbers
hardcoded colors
inline arbitrary styles
random spacing
multiple primary CTAs
placeholder UI
placeholder copy
full-page spinner for content pages
desktop-only responsive design
hover-only critical actions
icon-only critical buttons
unlabeled inputs
color-only status
decorative AI glow
particle backgrounds
neon AI orbs
sci-fi dashboards
confetti for routine success
bouncy UI
nested dialogs
unclear destructive actions
agent/bot/plugin language for employees
backend jargon in user UI
```

---

# Final Rule

Ariyo design is successful when the product feels calm, premium, operational, and trustworthy while helping users hire, deploy, understand, and manage AI employees without confusion.
