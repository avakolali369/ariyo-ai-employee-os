# Ariyo Frontend Motion Skill

Version: 1.0.0

Product: Ariyo

Purpose: Act as a Senior Interaction Designer, Motion System Architect, and Frontend Experience Guardian for Ariyo.

Audience: Codex Agents and AI-assisted development tools.

Priority: Non-negotiable.

Dependencies:

- frontend-design.md
- frontend-components.md
- frontend-responsive.md

If conflicts exist:

- frontend-design.md wins for product philosophy.
- frontend-components.md wins for component behavior.
- frontend-responsive.md wins for responsive layout behavior.
- frontend-motion.md wins for motion, transition, animation, and micro-interaction behavior.

Motion is allowed only when it improves clarity, continuity, feedback, orientation, or perceived performance.

Decorative motion is forbidden.

---

# 1. Motion Philosophy

Ariyo motion must feel calm, fast, premium, responsive, intentional, and almost invisible.

Motion exists to answer:

```text
Did Ariyo respond?
What changed?
Where did this layer come from?
What is active?
What is loading?
What failed?
What completed?
```

Motion must never exist because:

```text
it looks cool
AI should feel alive
it adds delight
it fills blank space
it makes the brand dynamic
```

---

# 2. Motion Principles

## 2.1 Motion Explains Change

Use motion to explain state changes, hierarchy, spatial origin, and feedback.

## 2.2 Motion Must Be Invisible

The user should feel clarity, not notice animation.

## 2.3 Motion Must Not Slow First Time To Value

Onboarding, hiring, deployment, source connection, and command search must remain fast.

## 2.4 Motion Must Respect Accessibility

`prefers-reduced-motion` must be supported. Motion must never be the only signal.

## 2.5 Motion Must Be Token-Driven

No arbitrary duration, easing, distance, or animation library behavior.

---

# 3. Approved Motion Categories

Allowed:

```text
state feedback motion
transition motion
progressive disclosure motion
loading motion
success motion
error motion
spatial orientation motion
```

Forbidden:

```text
decorative loops
particles
parallax
scroll-jacking
neon glows
bouncy UI
elastic sheets
confetti
AI thinking effects
robot animations
scanner effects
```

---

# 4. Timing System

Official duration tokens:

```text
duration-instant = 75ms
duration-fast = 150ms
duration-base = 200ms
duration-medium = 250ms
duration-slow = 300ms
duration-extra-slow = 400ms
```

Usage:

```text
75ms: direct press/toggle/focus feedback
150ms: hover, tooltip, small visual response
200ms: standard component transitions
250ms: overlays and medium state changes
300ms: page/guided/mobile sheet transitions
400ms: rare complex guided transitions only
```

Forbidden:

```text
arbitrary 187ms
slow 800ms UI transitions
page transition over 400ms
button feedback over 100ms
```

---

# 5. Easing System

Official easing tokens:

```text
ease-standard    = cubic-bezier(0.2, 0.0, 0.0, 1.0)
ease-out         = cubic-bezier(0.16, 1.0, 0.3, 1.0)
ease-in          = cubic-bezier(0.4, 0.0, 1.0, 1.0)
ease-in-out      = cubic-bezier(0.4, 0.0, 0.2, 1.0)
ease-emphasized  = cubic-bezier(0.2, 0.8, 0.2, 1.0)
ease-linear      = linear
```

Default mapping:

```text
ease-standard: component state changes
ease-out: entrance
ease-in: exit
ease-in-out: stable state transition
ease-emphasized: important guided motion, used sparingly
ease-linear: continuous progress or shimmer
```

Forbidden:

```text
bounce
elastic
overshoot
spring with bounce
random cubic-bezier
```

---

# 6. Approved Properties

Prefer:

```text
opacity
transform
translate
scale
```

Use carefully:

```text
color
background-color
border-color
```

Avoid animating:

```text
width
height
top
left
right
bottom
margin
padding
box-shadow
filter
blur
clip-path
grid-template
```

---

# 7. Component Motion Rules

## Button

```text
hover: 150ms ease-standard
press: 75ms, subtle scale 0.98 allowed
loading: immediate, preserve width
success: brief calm confirmation
error: recoverable state, no dramatic shake
```

## Input

```text
focus: 150ms
error: 200ms, no layout jump
helper/error space reserved
no validation motion while typing
```

## Card

Subtle hover only on desktop. No large lift, glow, image zoom, or floating AI card.

## Badge

Status change may fade 150–200ms. No pulsing badges for active/failed states.

## Tooltip

Show 150ms, hide 100ms. Tooltip cannot contain required information.

## Skeleton

Shimmer 1200–1800ms linear when motion allowed. Reduced motion disables shimmer.

## Chart

Use restrained reveals. Avoid dramatic line drawing and animated counters.

---

# 8. Overlay Motion Rules

## Dialog

Open:

```text
250ms ease-out or ease-emphasized
opacity + scale 0.98 → 1
```

Close:

```text
150–200ms ease-in
```

No bounce, elastic, overshoot, or dramatic blur.

## Drawer

Desktop drawer: 250ms open, 200ms close from spatial side.

RTL direction must be respected when direction is meaningful.

## Bottom Sheet

Mobile sheet: 250–300ms open, 200–250ms close.

No elastic bounce. Handle and close action required.

## Dropdown

150–200ms open, 100–150ms close. Origin from trigger.

## Command Palette

Open 150–200ms. Input must be ready immediately. No slow zoom or AI search theatrics.

---

# 9. Navigation Motion Rules

Navigation motion preserves orientation.

Route transitions:

```text
150–200ms
opacity + subtle translateY 0–4px
```

Stable shell must not reanimate.

Forbidden:

```text
page flips
large slides
3D rotations
parallax
scroll-jacking
staggered full-page sections
cinematic transitions
```

Sidebar collapse: 200–250ms. Labels fade before width change. Icons stay stable.

Bottom nav active state: 150–200ms. No bouncy icons.

---

# 10. Loading and Skeleton Motion

Loading must communicate progress.

Use skeletons for content. Use spinners only for short localized actions.

Rules:

```text
skeleton mirrors final layout
fade in 150ms
fade out 150–200ms
content appears without layout shift
background refetch preserves content
long tasks use step labels
```

Forbidden:

```text
full-page spinner for dashboards
blank route during load
infinite spinner without recovery
aggressive shimmer
AI loader animations
```

---

# 11. Success, Error and Feedback Motion

Success:

```text
calm
brief
confirmed
no confetti
no fireworks
no celebration burst
```

Error:

```text
calm
clear
recoverable
no flashing red
no dramatic shake
no looping failure motion
```

Toast:

```text
enter 200ms
exit 150ms
must not cover mobile CTA
```

---

# 12. Page Transition Motion

Page transitions should help users arrive, not entertain them.

Rules:

```text
stable shell
page content transition only
header appears quickly
skeleton if data is loading
focus and scroll handled intentionally
```

Reduced motion removes translate and uses opacity/instant transitions.

---

# 13. Mobile Motion Rules

Mobile motion must be lighter than desktop.

Required:

```text
touch response within 75ms
reduced distance
no hover motion
no parallax
no scroll-jacking
no heavy blur
safe area respected
keyboard-aware transitions
```

Mobile overlays use bottom sheets or full-screen flows. Tiny centered modals are forbidden.

---

# 14. Reduced Motion and Accessibility

When `prefers-reduced-motion` is enabled:

```text
remove translate and scale
remove parallax
remove shimmer
remove shared element motion
remove smooth scroll
use opacity-only or instant 0–100ms transitions
preserve text state changes
preserve focus and semantics
```

Motion may disappear. Meaning must remain.

---

# 15. Performance Rules

Motion must target 60fps and never block input.

Rules:

```text
avoid layout thrash
avoid transition-all
avoid animating large lists
avoid heavy Framer Motion use for simple hover
avoid Lottie/video in product UI by default
keep motion constants stable
use AnimatePresence only when exit is needed
```

Budgets:

```text
input feedback: perceived <100ms
command palette open: <200ms
route transition: <200ms
mobile overlay: <300ms
major guided step: <=300ms
```

---

# 16. Ariyo-Specific Motion Patterns

## Hire Employee

Button loading: `Hiring employee...`

Success: calm state change to `Employee hired.`

No confetti, no character animation.

## Deploy Employee

Use step progress:

```text
Preparing employee
Connecting channel
Checking knowledge sources
Reviewing setup
Activating employee
Ready
```

No AI thinking, glowing tunnel, robot, or fake progress.

## Knowledge Sync

Use operational progress:

```text
Checking source
Reading content
Updating knowledge source
Preparing source for employee answers
Source ready
```

No embeddings/vector/index animation.

## Dashboard

Skeleton to content. No animated counters by default. Charts reveal subtly.

## Marketplace

Employee card hover subtle. No glowing cards or staggered grid choreography.

## Command Palette

Fast open, immediate input, minimal result motion.

## AI Cost

No dramatic cost animation, red pulse, or money counter.

---

# 17. Implementation Guidance

Use CSS transitions for simple state changes.

Use Framer Motion for:

```text
overlays
route presence
guided flows
complex enter/exit states
```

Avoid Framer Motion for:

```text
simple hover
large lists
large tables
always-running effects
```

Tailwind example:

```tsx
className="transition-opacity duration-200 ease-standard"
```

Avoid:

```tsx
className="transition-all duration-[187ms] ease-[cubic-bezier(.68,-0.55,.27,1.55)]"
```

---

# 18. Definition of Done

Motion is production-ready only when:

```text
It has a clear purpose.
It uses official duration tokens.
It uses official easing tokens.
It uses approved properties.
It does not delay primary actions.
It preserves layout stability.
It supports reduced motion.
It remains accessible without motion.
It performs on mobile.
It does not use decorative AI effects.
It does not use bounce/elastic/overshoot.
It does not use transition-all by default.
It is consistent with component and responsive rules.
```

---

# 19. Forbidden Patterns

Never ship:

```text
bounce
elastic motion
confetti
fireworks
neon AI glow
AI thinking animation
particles
scroll-jacking
parallax
page flips
large zooms
3D rotations
full app shell reanimation
transition-all everywhere
full-page spinner for content
infinite loading without recovery
animated counters for business metrics by default
large list stagger
heavy chart animation
desktop motion copied to mobile
motion-only error or success
ignoring reduced motion
```

---

# Final Rule

Ariyo motion is successful when users feel the interface is responsive, stable, clear, and premium without noticing animation as decoration.
