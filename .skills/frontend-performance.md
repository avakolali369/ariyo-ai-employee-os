# Ariyo Frontend Performance Skill

Version: 1.0.0  
Product: Ariyo  
Purpose:  
Act as a Senior Frontend Performance Engineer, Rendering Architect, Bundle Reviewer, React Performance Guardian, and Production Experience Optimizer for Ariyo.

Audience:  
Codex Agents and AI-assisted development tools.

Priority:  
Non-negotiable.

Dependencies:

- frontend-design.md
- frontend-components.md
- frontend-responsive.md
- frontend-motion.md
- frontend-copywriting.md
- coding-standards.md
- project-structure.md
- frontend-state-data.md
- frontend-forms-validation.md
- frontend-testing.md

If conflicts exist:

- frontend-design.md wins for visual hierarchy, premium restraint, product experience, and design philosophy.
- frontend-components.md wins for component behavior and reusable UI contracts.
- frontend-responsive.md wins for mobile-first layout, breakpoints, and responsive behavior.
- frontend-motion.md wins for motion purpose, timing, easing, and reduced motion behavior.
- frontend-copywriting.md wins for user-facing performance, loading, empty, error, and success copy.
- coding-standards.md wins for general TypeScript, React, security, accessibility, performance, and Definition of Done.
- project-structure.md wins for file placement, import boundaries, lazy module organization, and feature ownership.
- frontend-state-data.md wins for TanStack Query, API boundaries, cache ownership, mutations, URL state, and Zustand boundaries.
- frontend-forms-validation.md wins for form lifecycle and form state performance.
- frontend-testing.md wins for test strategy and regression coverage of performance-sensitive behavior.
- frontend-performance.md wins for rendering strategy, bundle control, large-data UI, asset performance, interaction responsiveness, and real-world frontend performance review.

Performance that improves benchmark numbers while making Ariyo less clear, less accessible, less safe, or less trustworthy is not acceptable.

---

# Purpose

This skill defines Ariyo's frontend performance architecture.

It governs:

```text
initial load
route-level code splitting
bundle size
rendering boundaries
React re-render control
large lists
tables
charts
forms
TanStack Query performance
Zustand selector performance
context performance
images
icons
fonts
animations
mobile performance
layout stability
network resilience
perceived performance
memory cleanup
polling
background refresh
performance testing expectations
production review
```

Ariyo performance exists to make the product feel fast, stable, trustworthy, and calm under real production conditions.

Performance is not a final cleanup pass.

Performance is part of architecture.

---

# Core Performance Principle

Ariyo must optimize for real user experience, not isolated micro-benchmarks.

Prioritize:

```text
fast first meaningful render
clear loading states
stable layout
responsive interactions
small initial bundle
bounded rendering
predictable server-state caching
low mobile CPU cost
low memory pressure
accessible feedback
honest data freshness
safe high-risk actions
```

Do not optimize in ways that remove clarity, accessibility, safety, or product trust.

---

# Ariyo Performance Definition

Ariyo feels performant when users can:

```text
open core pages quickly
understand what is loading
interact without delay
search without typing lag
submit forms without duplicate actions
view dashboards without flicker
browse marketplace cards smoothly
open dialogs instantly
recover from slow network states
continue working during background refresh
trust that success states are server-confirmed
```

Performance is not only speed.

Performance is clarity under delay.

---

# Performance Quality Bar

Every implementation must consider:

```text
initial bundle impact
route chunk cost
third-party dependency cost
render frequency
render cost
query frequency
API request count
cache invalidation scope
large data handling
image size
font cost
icon cost
chart complexity
animation cost
mobile CPU
memory cleanup
layout shift
keyboard responsiveness
loading state quality
error recovery
```

If a feature works only with mock data and a fast local machine, it is not production-ready.

---

# User-Perceived Performance Rule

Perceived performance is a product requirement.

Use:

```text
structured skeletons
section-level loading
specific loading copy
preserved previous data during refresh
button pending labels
stable layout containers
progressive rendering
clear retry actions
background refresh indicators
not-enough-data states
```

Avoid:

```text
blank screens
full-page spinner by default
flickering pages
empty state before load completes
background refresh replacing content
buttons with no pending feedback
fake progress percentages
heavy decorative animation
late layout jumps
```

Users should never wonder whether Ariyo is broken.

---

# Performance Priority Order

When making performance decisions, prefer this order:

```text
1. Correctness
2. Security and safety
3. Accessibility
4. User clarity
5. Interaction responsiveness
6. Layout stability
7. Data freshness correctness
8. Bundle efficiency
9. Render efficiency
10. Micro-optimizations
```

Do not sacrifice high-priority concerns for low-priority optimizations.

---

# Initial Load Rule

The initial app load must stay lean.

Do not import heavy product surfaces into the root app shell.

The app shell may include:

```text
router
providers
layout shell
auth boundary
query client
theme/direction provider
toast provider
core navigation
minimal loading/error boundaries
```

The app shell must not include:

```text
workflow builder
full dashboard chart system
billing payment SDK
large report components
large table screens
rare integration setup flows
rich editors
heavy file previewers
large icon maps
mock data
```

The first load should prepare the product, not load every product feature.

---

# Route-Level Code Splitting Rule

Major pages should be route-split.

Good candidates:

```text
dashboard
marketplace
employee profile
workflow builder
knowledge sources
billing
settings
admin/member management
integration setup
reports
```

Good:

```tsx
const DashboardPage = lazy(() =>
  import("@/features/dashboard/pages/dashboard-page")
);

const WorkflowBuilderPage = lazy(() =>
  import("@/features/workflows/pages/workflow-builder-page")
);
```

Use product-specific fallbacks.

Good:

```tsx
<Suspense fallback={<DashboardPageSkeleton />}>
  <DashboardPage />
</Suspense>
```

Bad:

```tsx
<Suspense fallback={<Spinner />}>
  <DashboardPage />
</Suspense>
```

A lazy route still needs good loading UX.

---

# Component-Level Lazy Loading Rule

Component-level lazy loading is useful only for heavy or rare modules.

Good candidates:

```text
large chart package wrapper
workflow canvas
file previewer
advanced report builder
payment form area
large integration configuration
rare admin tool
```

Bad candidates:

```text
Button
Input
Badge
small cards
simple empty states
basic forms
small hooks
common layout sections
```

Do not lazy-load tiny components.

Lazy loading has complexity and loading cost.

---

# Bundle Budget Rule

Ariyo should support performance budgets.

Until exact budgets are defined, Codex must behave as if budgets exist for:

```text
initial JavaScript
route chunk size
CSS size
image weight
font weight
third-party dependencies
chart/dashboard chunks
payment/integration SDK chunks
```

If a change adds a heavy dependency or route chunk, it must be justified.

---

# Dependency Cost Rule

Every dependency has cost.

Before adding any dependency, verify:

```text
approved stack does not already solve it
bundle size is acceptable
tree-shaking is supported
runtime cost is acceptable
accessibility is strong
maintenance is active
security risk is acceptable
transitive dependencies are reasonable
CSS footprint is controlled
mobile impact is considered
```

Do not add dependencies for small utilities.

Use the official stack first.

---

# Heavy Dependency Rule

Heavy dependencies must not be loaded globally unless absolutely required.

Examples requiring caution:

```text
payment SDKs
large chart libraries
rich text editors
map libraries
PDF viewers
spreadsheet viewers
drag-and-drop frameworks
syntax highlighters
AI visualization packages
animation libraries beyond Framer Motion
```

Load heavy modules only where needed.

---

# Import Discipline Rule

Import only what is needed.

Good:

```ts
import { SearchIcon } from "lucide-react";
```

Avoid broad imports:

```ts
import * as Icons from "lucide-react";
```

Be careful with:

```text
icons
charts
date utilities
validators
table utilities
animation modules
payment SDKs
file preview modules
```

Imports affect bundle shape.

---

# Barrel Export Performance Rule

Large barrel files can hurt tree-shaking and hide heavy imports.

Avoid:

```ts
export * from "./charts";
export * from "./workflow-builder";
export * from "./billing";
export * from "./reports";
```

Good:

```ts
export { MetricCard } from "./metric-card";
export type { MetricCardProps } from "./metric-card";
```

Do not hide performance cost behind convenience exports.

---

# Route Prefetch Rule

Route prefetching may improve perceived performance when intentional.

Good candidates:

```text
next step in deployment flow
employee profile after card hover/focus if inexpensive
billing details after opening billing page
marketplace detail after user intent
```

Avoid aggressive prefetching for:

```text
large dashboards
workflow builder
payment SDKs
large charts
admin reports
rare integration setup
```

Prefetch only when user intent is likely and network cost is justified.

---

# React Rendering Principle

React components must have bounded render cost.

A component should re-render only when its relevant inputs change.

Use:

```text
small components
clear state ownership
local state close to usage
stable query data selection
Zustand selectors
memoization where meaningful
virtualization for large lists
server pagination for large data
```

Avoid:

```text
giant components
broad context values
full Zustand store reads
large inline transforms
rendering thousands of rows
new object props for expensive children
useEffect for derived calculations
```

---

# Re-render Awareness Rule

Codex must consider what causes re-renders.

Common causes:

```text
parent render
local state update
context value update
Zustand selector update
TanStack Query result update
URL search param update
form state update
new object prop
new function prop
animation state
```

Do not let unrelated state re-render expensive UI.

---

# Render Boundary Rule

Create render boundaries around expensive UI.

Good boundaries:

```text
dashboard metric section
dashboard chart card
AI cost chart
data table
activity feed
employee grid
workflow canvas
command palette results
large form section
integration list
knowledge source list
```

Bad:

```text
one dashboard page component rendering all queries, filters, charts, tables, modals, and forms
```

Architecture is the first performance optimization.

---

# Large Component Rule

Large mixed components cause performance and maintenance problems.

Refactor when a component has:

```text
multiple queries
multiple mutations
multiple forms
large table logic
chart transformation logic
many unrelated local states
large conditional rendering
multiple overlays
deep JSX
repeated transformations
more than one major product responsibility
```

Smaller components make render cost easier to isolate.

---

# Local State Placement Rule

Keep state near where it is used.

Bad:

```tsx
function DashboardPage() {
  const [isTooltipOpen, setTooltipOpen] = useState(false);

  return (
    <>
      <DashboardHeader />
      <DashboardKpis />
      <AiCostChart isTooltipOpen={isTooltipOpen} onTooltipOpenChange={setTooltipOpen} />
      <ActivityFeed />
    </>
  );
}
```

Good:

```tsx
function AiCostChartCard() {
  const [isTooltipOpen, setTooltipOpen] = useState(false);

  return (
    <AiCostChart
      isTooltipOpen={isTooltipOpen}
      onTooltipOpenChange={setTooltipOpen}
    />
  );
}
```

Do not lift state unless another owner truly needs it.

---

# Derived State Performance Rule

Do not store derived state.

Bad:

```tsx
const [activeEmployees, setActiveEmployees] = useState<Employee[]>([]);

useEffect(() => {
  setActiveEmployees(
    employees.filter((employee) => employee.status === "active")
  );
}, [employees]);
```

Good:

```tsx
const activeEmployees = useMemo(
  () => employees.filter((employee) => employee.status === "active"),
  [employees]
);
```

Use `useMemo` when the calculation is meaningful.

For tiny calculations, compute directly.

---

# useMemo Rule

Use `useMemo` for meaningful expensive work.

Good use cases:

```text
large filtered lists
large sorted lists
chart data transformation
table column definitions
grouping analytics by date
building command palette result groups
large option lists
permission-derived menus
```

Avoid for:

```text
simple booleans
static strings
small arrays
trivial formatting
hiding bad architecture
making code look optimized
```

Memoization has mental cost.

Use it when it protects real work.

---

# useCallback Rule

Use `useCallback` when stable function identity matters.

Good use cases:

```text
callback passed to memoized expensive child
callback used in effect dependency
callback passed to many list rows
callback used by virtualized item renderer
```

Avoid decorating every handler with `useCallback`.

Bad:

```tsx
const handleOpen = useCallback(() => setOpen(true), []);
```

inside a tiny component with no expensive children.

Clarity wins unless stability matters.

---

# React.memo Rule

Use `React.memo` for expensive pure components with stable props.

Good candidates:

```text
large table rows
employee cards in large grids
workflow nodes
chart cards
expensive list items
static metric cards
```

Bad candidates:

```text
small text wrappers
components that always receive new props
components reading broad changing context
components with children recreated every render
```

Memo without stable props does not help.

---

# Stable Props Rule

Avoid passing new objects/functions to expensive memoized children unless memoized.

Bad:

```tsx
<EmployeeGrid
  employees={employees}
  actions={{ onDeploy: handleDeployEmployee }}
/>
```

Good when `EmployeeGrid` is expensive:

```tsx
const employeeActions = useMemo(
  () => ({ onDeploy: handleDeployEmployee }),
  [handleDeployEmployee]
);

<EmployeeGrid employees={employees} actions={employeeActions} />
```

Do not do this everywhere.

Use it for meaningful render boundaries.

---

# Inline Transformation Rule

Do not perform heavy transformations inside JSX.

Bad:

```tsx
<AiCostChart
  data={report.items
    .filter((item) => item.cost > 0)
    .sort((a, b) => a.date.localeCompare(b.date))
    .map(mapCostPoint)}
/>
```

Good:

```tsx
const chartData = useMemo(
  () => buildAiCostChartData(report.items),
  [report.items]
);

<AiCostChart data={chartData} />
```

Complex transformation deserves a named function.

---

# useEffect Performance Rule

Do not use effects for pure calculations.

Bad:

```tsx
useEffect(() => {
  setChartData(buildAiCostChartData(report));
}, [report]);
```

Good:

```tsx
const chartData = useMemo(
  () => buildAiCostChartData(report),
  [report]
);
```

Effects are for side effects.

Derived data is not a side effect.

---

# Context Performance Rule

Context updates all consumers.

Do not put broad frequently changing state in global context.

Avoid context for:

```text
search input value
scroll position
mouse position
drag state
form field values
large dashboard data
query results
frequently changing filters
```

Context is acceptable for:

```text
theme
direction
stable workspace shell info
scoped compound component state
React Hook Form provider
scoped table provider
approved auth provider
```

Keep context values stable and scoped.

---

# Zustand Performance Rule

Use selectors for Zustand.

Good:

```tsx
const isCollapsed = useSidebarStore((state) => state.isCollapsed);
```

Bad:

```tsx
const sidebarStore = useSidebarStore();
```

Full-store reads cause unnecessary re-renders.

Selectors must be specific.

---

# Zustand Shallow Selector Rule

Use shallow comparison when selecting multiple stable values.

Good:

```tsx
const { isOpen, close } = useCommandPaletteStore(
  (state) => ({
    isOpen: state.isOpen,
    close: state.close,
  }),
  shallow
);
```

Use only when project setup supports it.

Do not select large objects unnecessarily.

---

# Server State Performance Rule

Server state belongs to TanStack Query.

Performance requires:

```text
stable query keys
complete query keys
scoped invalidation
reasonable stale time
enabled conditions
request cancellation
select for query-level transformation
pagination for large data
polling with stop condition
background refresh without flicker
```

Manual fetch logic usually reduces performance and reliability.

---

# Query Key Performance Rule

Query keys must include every server-state dependency.

Good:

```ts
employeeQueryKeys.list({
  organizationId,
  status,
  search,
  page,
  sort,
});
```

Bad:

```ts
["employees"]
```

for filtered organization-specific employee data.

Incomplete query keys cause stale, incorrect, or cross-context data.

---

# Query Enabled Rule

Dependent queries must use `enabled`.

Good:

```tsx
const employeeQuery = useEmployeeProfileQuery(employeeId, {
  enabled: Boolean(employeeId),
});
```

Do not fire requests with invalid IDs or missing context.

Invalid requests waste network and create confusing errors.

---

# Query Select Rule

Use `select` when a transformation belongs to server-state consumption.

Good:

```tsx
const activeEmployeesQuery = useQuery({
  queryKey: employeeQueryKeys.list(filters),
  queryFn: ({ signal }) => employeeApi.listEmployees(filters, { signal }),
  select: (employees) =>
    employees.filter((employee) => employee.status === "active"),
});
```

Do not use `select` for view-only formatting that belongs near presentation.

---

# Stale Time Rule

Choose stale time by product meaning.

Guidance:

```text
marketplace catalog:
medium stale time

employee profile:
short to medium stale time

deployment status:
short stale time or active polling during deployment

knowledge sync status:
short stale time or active polling during sync

billing:
short stale time

permissions:
short stale time

static settings/options:
longer stale time

AI cost analytics:
depends on date range and report freshness
```

Do not refetch constantly without reason.

Do not keep high-trust data stale indefinitely.

---

# Background Refresh Rule

Background refresh must preserve current content.

Good:

```tsx
const isRefreshing = query.isFetching && !query.isLoading;
```

Render current data and show subtle refresh state.

Bad:

```tsx
if (query.isFetching) {
  return <DashboardSkeleton />;
}
```

This causes flicker and context loss.

---

# Keep Previous Data Rule

When changing page, filter, or date range, preserve previous data only when it improves clarity.

Good use cases:

```text
paginated tables
date range charts
search results during debounced update
AI cost report by period
marketplace filters
```

But do not show stale data as if fresh.

Use loading or refreshing indicators when needed.

---

# Query Invalidation Rule

Invalidate the smallest correct scope.

Bad:

```ts
queryClient.invalidateQueries();
```

Good:

```ts
queryClient.invalidateQueries({
  queryKey: employeeQueryKeys.detail(employeeId),
});
```

Over-invalidation causes unnecessary network requests and UI instability.

Under-invalidation causes stale state.

---

# Polling Rule

Polling must have a product reason and a stop condition.

Allowed:

```text
deployment status while deploying
knowledge source sync while syncing
file processing while processing
integration connection verification while pending
```

Required:

```text
stop on final success
stop on final failure
stop when entity changes
stop when dialog/page unmounts
stop when user loses access
avoid aggressive intervals
```

Forbidden:

```text
polling forever
polling all entities aggressively
polling billing by default
polling permissions without reason
```

---

# Request Cancellation Rule

API services should support request cancellation where applicable.

Good:

```ts
queryFn: ({ signal }) => employeeApi.listEmployees(filters, { signal })
```

Cancellation protects against stale responses and wasted work.

Use the shared API client pattern.

---

# Search Performance Rule

Remote search must be debounced or submit-based.

Good:

```tsx
const debouncedSearch = useDebouncedValue(searchDraft, 300);
```

Rules:

```text
avoid request per keystroke
reset pagination on search change
include search in query key
show filtered empty state
preserve input responsiveness
use server search for large datasets
```

Search must feel instant even when results are remote.

---

# URL State Performance Rule

Do not update URL state on every keystroke if it causes route/query churn.

Use draft state + debounce for search where appropriate.

Good:

```text
user types in local draft
value debounces
URL updates
query updates
results refresh
```

Avoid constant URL writes that make typing laggy.

---

# Large List Rule

Do not render unbounded large lists.

Use one of:

```text
server pagination
load more
infinite query with accessible fallback
virtualization
server-side filtering
server-side sorting
progressive rendering
```

Examples requiring care:

```text
employees
activity feed
workflow logs
knowledge source files
members
integrations
AI cost events
command palette results
```

Mock lists are not production lists.

---

# Virtualization Rule

Virtualization is useful for large visible lists.

Requirements:

```text
keyboard accessibility considered
screen reader impact considered
stable row identity
reasonable row heights
empty/loading/error states
mobile behavior reviewed
scroll restoration if needed
```

Do not virtualize small lists.

Virtualization adds complexity.

---

# Table Performance Rule

Large tables must be designed for real data.

Use:

```text
TanStack Table
server-side pagination when data is large
server-side sorting when data is large
server-side filtering when data is large
stable columns
stable row IDs
memoized cell renderers when expensive
row action labels with context
mobile table strategy
```

Avoid:

```text
client-side sorting thousands of rows casually
rendering huge table DOM
index keys
inline cell transformations
large buttons/menus in every row without need
hidden desktop table plus duplicated mobile table when both render heavy content
```

Tables are performance hotspots.

---

# Table Column Stability Rule

Column definitions should be stable.

Good:

```tsx
const columns = useMemo<ColumnDef<EmployeeSummary>[]>(
  () => [
    employeeNameColumn,
    employeeStatusColumn,
    employeeCostColumn,
  ],
  []
);
```

or define outside the component when no runtime values are needed.

Bad:

```tsx
const columns = [
  {
    accessorKey: "name",
    cell: ({ row }) => <EmployeeName employee={row.original} />,
  },
];
```

inside frequently re-rendering large table components.

---

# Row Key Rule

Use stable entity IDs.

Good:

```tsx
<EmployeeCard key={employee.id} employee={employee} />
```

Bad:

```tsx
<EmployeeCard key={index} employee={employee} />
```

Index keys break rendering correctness and performance when lists reorder.

---

# Chart Performance Rule

Charts are expensive and must be intentional.

Rules:

```text
render only decision-supporting charts
memoize chart data
aggregate server-side when possible
limit visible data points
avoid heavy animation
lazy-load heavy chart sections
avoid offscreen heavy charts
show empty/error/not-enough-data states
provide text summaries
```

Charts are not decoration.

---

# Recharts Rule

When using Recharts:

```text
prepare data outside JSX
memoize transformed data
avoid very large point sets
avoid unnecessary gradients/patterns
avoid complex custom labels for every point
avoid heavy animations on large data
use responsive container carefully
ensure chart container has stable dimensions
```

Bad:

```tsx
<LineChart data={report.items.map(transform).filter(Boolean)} />
```

Good:

```tsx
const chartData = useMemo(
  () => buildAiCostChartData(report.items),
  [report.items]
);

<AiCostChart data={chartData} />
```

---

# Chart Animation Rule

Disable or minimize chart animation for dense data.

Allowed:

```text
small transition on initial chart reveal
subtle tooltip interaction
small data update transition when useful
```

Avoid:

```text
long animated lines
animated every point
looping dashboard animation
animated gradients
decorative chart motion
```

Dashboard performance must stay calm.

---

# Form Performance Rule

Forms must remain responsive while typing.

Use:

```text
React Hook Form field registration
field-level components
schema outside component
stable default values
useWatch for specific fields
controlled components only when needed
memoized option lists
server validation on submit or debounced when needed
```

Avoid:

```text
manual useState for every field
watching entire form in large forms
updating Zustand on every keystroke
creating Zod schema inside component
large option arrays recreated every render
async validation on every keystroke without debounce
```

Typing must never feel laggy.

---

# React Hook Form Watch Rule

Watch only what is needed.

Good:

```tsx
const replyMode = useWatch({
  control: form.control,
  name: "replyMode",
});
```

Avoid:

```tsx
const values = form.watch();
```

inside large forms.

Watching the whole form can cause broad re-renders.

---

# Validation Performance Rule

Validation timing must be intentional.

Default:

```text
mode: onSubmit
reValidateMode: onChange
```

Use `onBlur` for fields where early validation helps.

Use `onChange` only for lightweight validation.

Debounce async validation.

Never block typing with expensive validation.

---

# Field Array Performance Rule

Field arrays can become expensive.

Rules:

```text
use stable field IDs
avoid index keys
avoid rendering heavy nested sections for every item
collapse advanced fields when possible
validate only relevant sections when possible
keep row components focused
```

Useful for workflow steps, conditions, and dynamic configuration.

---

# Image Performance Rule

Images must be optimized.

Required:

```text
correct dimensions
responsive sizes
lazy loading for non-critical images
priority only for critical above-fold images
reserved aspect ratio
compressed files
modern formats when available
meaningful alt or empty alt for decorative images
```

Bad:

```tsx
<img src="/large-hero.png" />
```

Good:

```tsx
<img
  src={employee.imageUrl}
  alt=""
  loading="lazy"
  className="aspect-[4/3] w-full rounded-xl object-cover"
/>
```

Images must not cause layout shift.

---

# App Imagery Rule

Ariyo is an operational SaaS product.

Do not use heavy decorative imagery in core workflows.

Avoid large images in:

```text
dashboards
forms
billing
settings
deployment flow
knowledge source management
workflow builder
```

Use imagery only when it improves understanding or decision-making.

---

# Icon Performance Rule

Lucide icons should be imported individually.

Good:

```ts
import { SearchIcon, RefreshCwIcon } from "lucide-react";
```

Avoid:

```ts
import * as Icons from "lucide-react";
```

Rules:

```text
avoid large icon maps
avoid decorative icon overload
avoid animated icons in large lists
hide decorative icons from screen readers
use icons to support meaning, not decoration
```

---

# Font Performance Rule

Fonts must be controlled.

Rules:

```text
use limited families
use limited weights
avoid decorative fonts
ensure Persian support when needed
avoid loading unnecessary subsets
use font-display strategy when configured
prevent major layout shift
```

Typography is central to Ariyo's premium feel.

But font loading must be efficient.

---

# CSS Performance Rule

Use Tailwind and tokens.

Avoid:

```text
large global CSS
third-party CSS themes
unused CSS files
feature-specific global selectors
animation CSS libraries
duplicated custom CSS systems
```

Keep CSS predictable and token-driven.

---

# Tailwind Runtime Class Rule

Do not generate Tailwind class names dynamically.

Bad:

```tsx
<div className={`bg-${statusColor}-500`} />
```

Good:

```tsx
const statusClassName = {
  active: "bg-success text-success-foreground",
  failed: "bg-destructive text-destructive-foreground",
  paused: "bg-muted text-muted-foreground",
} satisfies Record<EmployeeStatus, string>;
```

Better: use semantic components and variants.

Dynamic class strings can break builds and bypass design tokens.

---

# Motion Performance Rule

Motion must be lightweight.

Animate only:

```text
opacity
transform
translate
scale
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
backdrop-filter
blur
```

Expensive animations create jank, especially on mobile.

---

# transition-all Rule

Do not use `transition-all` by default.

Bad:

```tsx
className="transition-all"
```

Good:

```tsx
className="transition-colors"
```

or:

```tsx
className="transition-opacity"
```

Only transition properties that should change.

---

# Framer Motion Performance Rule

Use Framer Motion only when CSS transitions are insufficient.

Good:

```text
overlay enter/exit
step transitions
presence animation
command palette open/close
small guided flow transitions
```

Avoid:

```text
every button hover
every card hover
large animated lists
chart animation
decorative loops
parallax
AI magic effects
```

Framer Motion is powerful but not free.

---

# Reduced Motion Performance Rule

Respect reduced motion.

Use:

```text
motion-reduce:transition-none
motion-reduce:animate-none
useReducedMotion for Framer Motion
```

Reduced motion improves accessibility and performance.

Do not require motion for state comprehension.

---

# Layout Stability Rule

Prevent layout shift.

Use:

```text
reserved image aspect ratios
skeletons matching final layout
stable chart container heights
stable button widths when pending causes jump
consistent table column widths
reserved error message space only when useful
stable page headers
```

Avoid:

```text
images loading without dimensions
chart cards collapsing before data
button text causing major layout jump
late-loaded content pushing primary CTA
background refresh replacing content
```

Stable UI feels faster and safer.

---

# Skeleton Rule

Skeletons must resemble final layout.

Good skeletons:

```text
preserve card size
preserve table row structure
preserve chart container
preserve form field rhythm
avoid full-screen blankness
include accessible loading text when needed
```

Bad skeletons:

```text
random gray bars
spinner-only pages
skeletons that shift to final layout
animated skeletons during reduced motion
```

Loading must be calm and structured.

---

# Loading Copy Rule

Loading copy must be specific.

Good:

```text
Loading employees...
Loading AI cost data...
Syncing source...
Deploying employee...
Saving changes...
Loading invoices...
```

Bad:

```text
Loading...
Please wait...
Thinking...
Generating embeddings...
Running worker job...
```

Use product language, not backend language.

---

# Mobile Performance Rule

Mobile performance is mandatory.

Mobile constraints:

```text
slower CPU
less memory
unstable network
virtual keyboard
small viewport
touch input
battery constraints
```

Avoid on mobile:

```text
heavy dashboards by default
large tables without transformation
constant animations
large shadows and blur
large images
unbounded lists
expensive sticky layers
hover-dependent UI
```

Mobile-first is a performance strategy.

---

# Touch Performance Rule

Interactions must feel immediate.

Rules:

```text
show button pending state immediately
avoid blocking event handlers
avoid heavy synchronous work on click
avoid duplicate submit
keep tap targets large enough
avoid destructive buttons too close to safe actions
```

A slow high-risk action feels unsafe.

---

# Network Performance Rule

Design for slow and unstable networks.

Required:

```text
clear loading states
retry actions
preserved form input
request cancellation
scoped invalidation
reasonable stale time
no duplicate submits
safe error states
background refresh without flicker
```

Do not assume perfect connectivity.

---

# Offline and Failure Rule

Ariyo does not need full offline-first behavior unless product decides it.

But network failure must not destroy user work.

Good:

```text
Could not save changes. Your edits are still here.
```

Bad:

```text
Failed.
```

Preserve user input on failure.

---

# Memory Cleanup Rule

Clean up side effects.

Must clean up:

```text
event listeners
timers
intervals
ResizeObserver
IntersectionObserver
subscriptions
websocket connections
object URLs
manual animation subscriptions
```

Bad:

```tsx
useEffect(() => {
  window.addEventListener("resize", handleResize);
}, []);
```

Good:

```tsx
useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, [handleResize]);
```

Memory leaks are production bugs.

---

# Timer Cleanup Rule

Timers must be cleaned up.

Good:

```tsx
useEffect(() => {
  const timeoutId = window.setTimeout(() => {
    setCopied(false);
  }, 1500);

  return () => {
    window.clearTimeout(timeoutId);
  };
}, []);
```

Avoid timers for server state polling.

Use TanStack Query polling when appropriate.

---

# Object URL Rule

Object URLs must be revoked.

Good:

```tsx
useEffect(() => {
  const objectUrl = URL.createObjectURL(file);
  setPreviewUrl(objectUrl);

  return () => {
    URL.revokeObjectURL(objectUrl);
  };
}, [file]);
```

Important for file upload and preview surfaces.

---

# Browser Storage Performance Rule

Do not read storage during render.

Bad:

```tsx
const isCollapsed = localStorage.getItem("sidebar-collapsed") === "true";
```

Good:

```tsx
const isCollapsed = useSidebarStore((state) => state.isCollapsed);
```

Storage access should be centralized, validated, and minimal.

---

# Main Thread Rule

Avoid blocking the main thread.

Heavy work should be:

```text
server-side
precomputed
memoized
chunked
lazy-loaded
moved to a Web Worker only if approved
```

Avoid heavy synchronous work in:

```text
render
event handlers
input change handlers
scroll handlers
resize handlers
```

---

# Scroll Performance Rule

Avoid expensive scroll behavior.

Forbidden by default:

```text
state update on every scroll pixel
layout measurement during scroll
heavy parallax
decorative scroll animation
large sticky blurred layers
```

If needed:

```text
use passive listeners when appropriate
throttle or requestAnimationFrame
use IntersectionObserver
avoid global state updates
cleanup listeners
```

---

# Resize Performance Rule

Use CSS responsiveness first.

Only use JS measurement when necessary.

Prefer:

```text
CSS grid
flex
responsive classes
container sizing
aspect ratio
```

Use ResizeObserver carefully and clean it up.

---

# Command Palette Performance Rule

Command palette must feel instant.

Rules:

```text
open quickly
focus input immediately
limit rendered results
debounce remote search
group results efficiently
avoid heavy icons per row
virtualize when result set is large
show loading and empty states
avoid blocking typing
```

A slow command palette fails its purpose.

---

# Dashboard Performance Rule

Dashboards must load progressively.

Rules:

```text
load critical KPIs first when possible
use section-level loading
use section-level errors
lazy-load heavy charts
memoize chart data
avoid one failed section breaking whole dashboard
preserve data during background refresh
show freshness when useful
avoid decorative animations
```

Dashboards are performance-sensitive product surfaces.

---

# Marketplace Performance Rule

Marketplace must support browsing many employees.

Rules:

```text
server filtering when needed
pagination or load more
lazy-loaded images
stable card layout
responsive grid
memoized expensive card data
no heavy hover effects
filter drawer lightweight on mobile
filtered empty state
```

Marketplace should feel fast during exploration.

---

# Employee Profile Performance Rule

Employee profile should load primary context first.

Priority:

```text
employee name
status
primary CTA
summary
```

Secondary sections may load independently:

```text
performance metrics
activity feed
AI cost
knowledge sources
workflow history
```

Do not block the whole profile on secondary analytics.

---

# Deploy Employee Performance Rule

Deployment flow must feel controlled.

Rules:

```text
form interactions instant
readiness checks debounced or cached
pending state immediate
duplicate submit prevented
polling stops after final status
review step does not recompute heavy data repeatedly
no fake progress
no fake active state
```

Performance here is tied to trust.

---

# Knowledge Source Performance Rule

Knowledge source flows may involve slow processing.

Rules:

```text
show upload progress when available
show processing state after upload
poll only active processing sources
stop polling on final state
retry failed sync
avoid backend jargon
show last synced when useful
preserve connected source state on sync failure
```

Do not aggressively poll all sources.

---

# AI Cost Performance Rule

AI cost analytics may be data-heavy.

Rules:

```text
date range in query key
server-side aggregation where possible
memoized chart transformation
not-enough-data state
preserve previous data during range transition when helpful
avoid huge point sets
lazy-load detailed breakdowns
label estimates honestly
```

Do not repeatedly compute large analytics in render.

---

# Billing Performance Rule

Billing must be safe and efficient.

Rules:

```text
billing data server-owned
short stale time
no optimistic billing success
payment SDK loaded only where needed
section-level loading
safe failure state
no sensitive data in cache beyond necessary query state
```

Performance must never compromise billing trust.

---

# Workflow Builder Performance Rule

Workflow builder can become heavy.

Rules:

```text
lazy-load builder route
keep draft state scoped
memoize nodes and edges
avoid global re-render on every drag
use stable IDs
virtualize large side panels when needed
avoid saving on every keystroke without debounce
test reducer/critical transitions
```

Interactive builders need render discipline.

---

# Accessibility and Performance Rule

Do not remove accessibility to improve performance.

Never remove:

```text
labels
focus states
field errors
screen reader summaries
semantic tables
chart summaries
visible disabled reasons
keyboard support
```

Performance and accessibility are both production requirements.

---

# Security and Performance Rule

Do not weaken safety for speed.

Forbidden performance shortcuts:

```text
fake server success
skip validation
skip permission check
cache sensitive data in storage
render unsafe HTML directly
load payment SDK globally for convenience
optimistically change billing/deployment/sync readiness
```

Fast unsafe UI is not acceptable.

---

# Performance Testing Expectations

Performance-sensitive logic should have targeted tests.

Test:

```text
pagination query keys
URL filter parsing
large data transformers
chart data builders
polling stop conditions
mutation duplicate prevention
debounced search behavior
reducer transitions
empty/error/loading states
```

Unit tests do not replace profiling.

But they prevent performance-sensitive regressions.

---

# Profiling Rule

When a performance issue is suspected, profile before applying complex optimization.

Use profiling to identify:

```text
expensive components
unnecessary re-renders
large bundles
slow API calls
heavy chart rendering
large table rendering
input lag
layout shift
animation jank
```

Do not guess and add memoization everywhere.

---

# Performance Review Checklist

Before shipping, verify:

```text
Is the initial bundle protected?
Are heavy routes lazy-loaded?
Are heavy dependencies justified?
Are imports narrow?
Are large lists paginated or virtualized?
Are tables designed for real data?
Are table columns stable?
Are row keys stable?
Are chart data transformations memoized?
Are charts not over-animated?
Are images sized, optimized, and lazy when appropriate?
Are fonts limited?
Are icons imported individually?
Are animations limited to opacity/transform?
Is transition-all avoided?
Is local state placed near usage?
Are Zustand selectors focused?
Is context not used for broad changing state?
Are expensive calculations outside JSX?
Is search debounced?
Does background refresh preserve content?
Do forms remain responsive while typing?
Are timers/listeners/observers cleaned up?
Are object URLs revoked?
Does mobile performance work?
Does performance preserve accessibility?
Does performance preserve security and server confirmation?
```

If any answer is no, refactor before shipping.

---

# Performance Decision Tree

Ask:

### Is this code loaded on first app load?

Keep it small or lazy-load it.

### Is this route heavy?

Use route-level code splitting.

### Is this dependency heavy?

Avoid it, replace it, or lazy-load it.

### Is this list large?

Paginate, load more, or virtualize.

### Is this table complex?

Use TanStack Table with stable columns and real data strategy.

### Is this chart expensive?

Memoize data, reduce points, and avoid heavy animation.

### Is this calculation repeated during render?

Move it outside JSX and memoize when meaningful.

### Is this state causing broad re-renders?

Move it down, use selectors, or split boundaries.

### Is this search remote or expensive?

Debounce it.

### Is this animation necessary?

Use opacity/transform and respect reduced motion.

### Is this image large?

Resize, lazy-load, and reserve aspect ratio.

### Is this background refresh?

Preserve current content.

---

# Forbidden Performance Patterns

Never ship:

```text
heavy route imported into app shell
large dependency for small task
payment SDK loaded globally
chart-heavy dashboard loaded in initial shell
giant component rendering every section
manual server fetching in useEffect
server data stored in useState
server data stored in Zustand
full Zustand store reads
context with frequently changing broad state
expensive transformations inside JSX
chart data map/filter/sort inside JSX
table columns recreated unnecessarily in large tables
unbounded large list rendering
large table without pagination or virtualization strategy
index keys for dynamic lists
remote search on every keystroke without debounce
forms updating global state on every keystroke
watching entire large form unnecessarily
background refresh replacing visible content
spinner-only full-page loading by default
layout shift from images, charts, skeletons, or pending buttons
transition-all everywhere
animated large lists
heavy blur/backdrop-filter effects
decorative dashboard animation
large images without dimensions or aspect ratio
entire icon library import
large global CSS themes
dynamic Tailwind class strings
timers without cleanup
listeners without cleanup
observers without cleanup
object URLs without revoke
localStorage reads during render
polling without stop condition
fake progress percentages
fake success to feel faster
performance optimization that removes accessibility
performance shortcut that weakens security
```

---

# Ariyo Performance Golden Rule

Ariyo must feel fast because it is architected clearly, not because it hides real work, fakes success, or removes important states.

---

# Senior Performance Rule

Do not wait for performance problems to appear.

Design routing, state, queries, components, tables, charts, forms, images, and motion so performance problems are less likely to exist.

---

# Final Rule

Ariyo frontend performance is production-ready only when the initial bundle is controlled, heavy routes are split, rendering is bounded, server state is cached and scoped, large lists and tables have real data strategies, charts are efficient, assets are optimized, animations are restrained, mobile devices are respected, memory is cleaned up, loading states are clear, and performance never compromises accessibility, security, product clarity, or server-confirmed trust.
