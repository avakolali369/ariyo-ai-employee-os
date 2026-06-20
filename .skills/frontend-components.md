# Ariyo Frontend Components Skill

Version: 1.0.0

Product: Ariyo

Purpose: Act as a Senior Frontend Engineer and Component System Guardian
for Ariyo.

Audience: Codex Agents and AI-assisted development tools.

Priority: Non-negotiable.

Dependencies: - frontend-design.md

If conflicts exist between implementation and this document, this
document always wins.

------------------------------------------------------------------------

# Part 1 --- Component Philosophy

-   Composition over complexity
-   Reusability over duplication
-   Accessibility is mandatory
-   Consistency over creativity
-   Predictability reduces cognitive load
-   Use shadcn/ui whenever possible

------------------------------------------------------------------------

# Part 2 --- Shared Component Standards

All components must support:

-   Default
-   Hover
-   Active
-   Focus
-   Disabled
-   Loading

Rules:

-   Use design tokens only
-   Support dark mode
-   Respect 44px touch targets
-   Use semantic HTML

------------------------------------------------------------------------

# Part 3 --- Base Components

## Button

Variants:

-   Primary
-   Secondary
-   Ghost
-   Destructive

Rules:

-   Minimum height 44px
-   One primary CTA per page

## Input

Required:

-   Label
-   Error state
-   Helper text

## Textarea

Used for long content only.

## Select

Must support keyboard navigation.

## Checkbox

Never use color alone to communicate state.

## Badge

Purpose:

Status communication.

------------------------------------------------------------------------

# Part 4 --- Overlay Components

Components:

-   Dialog
-   Drawer
-   Dropdown
-   Popover
-   Command Palette

Requirements:

-   Escape closes overlays
-   Focus trap required
-   Restore focus after close

------------------------------------------------------------------------

# Part 5 --- Navigation Components

Components:

-   Sidebar
-   Topbar
-   Tabs
-   Breadcrumbs
-   Pagination

Rules:

-   Predictable behavior
-   Visible active state
-   Accessible keyboard support

------------------------------------------------------------------------

# Part 6 --- Data Components

Components:

-   Table
-   Data Grid
-   Skeleton
-   Empty State
-   KPI Card
-   Charts

Rules:

-   Prefer readability
-   Avoid visual noise
-   Responsive behavior required

------------------------------------------------------------------------

# Part 7 --- Ariyo Custom Components

Official components:

-   EmployeeCard
-   EmployeeHero
-   EmployeeChannels
-   EmployeeTasks
-   EmployeeTools
-   ROIBlock
-   KnowledgeHealthCard
-   ActivityCard
-   AICostCard
-   PerformanceCard
-   StatCard
-   EmptyState
-   SectionHeader
-   PageHeader
-   SearchBar
-   CommandSearch
-   PricingCard
-   BundleCard
-   DeployEmployeeModal

DeployEmployeeModal flow:

1.  Select
2.  Connect
3.  Activate

------------------------------------------------------------------------

# Part 8 --- Definition of Done

A component is complete only if:

-   Accessible
-   Responsive
-   Supports dark mode
-   Supports loading state
-   Uses design tokens
-   Reusable

------------------------------------------------------------------------

# Forbidden Patterns

Never:

-   Use inline styles
-   Duplicate components
-   Hardcode colors
-   Hardcode spacing
-   Ignore accessibility
-   Create custom patterns when shadcn already provides one
