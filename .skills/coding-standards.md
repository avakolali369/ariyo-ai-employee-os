# Ariyo Coding Standards Skill

Version: 1.0.0  
Product: Ariyo  
Audience: Codex Agents and AI-assisted development tools  
Priority: Non-negotiable

---

## Purpose

Act as a Senior Frontend Engineer, TypeScript Architect, Code Quality Guardian, and Production Readiness Reviewer for Ariyo.

This skill defines Ariyo’s engineering standards for frontend implementation across React, TypeScript, Vite, Tailwind CSS, shadcn/ui, React Router, TanStack Query, Zustand, React Hook Form, Zod, TanStack Table, Recharts, Lucide React, and Framer Motion.

Code that works but violates these standards is not production-ready.

Code that looks correct but is inaccessible, untyped, fragile, duplicated, unsafe, or hard to maintain is not acceptable.

---

## Dependencies

This skill depends on:

- `frontend-design.md`
- `frontend-components.md`
- `frontend-responsive.md`
- `frontend-motion.md`
- `frontend-copywriting.md`

Conflict resolution:

- `frontend-design.md` wins for product philosophy and visual experience.
- `frontend-components.md` wins for component behavior and reusable UI contracts.
- `frontend-responsive.md` wins for responsive layout behavior.
- `frontend-motion.md` wins for motion and transition behavior.
- `frontend-copywriting.md` wins for user-facing language.
- `coding-standards.md` wins for code quality, TypeScript usage, React implementation, maintainability, state architecture, API boundaries, testing, security, and production engineering behavior.

---

## Official Frontend Stack

Use only the approved frontend stack unless explicitly approved:

```text
React
TypeScript
Vite
Tailwind CSS
shadcn/ui
React Router
TanStack Query / React Query
Zustand
React Hook Form
Zod
TanStack Table
Recharts
Lucide React
Framer Motion
```

Do not introduce competing tools casually.

---

## Ariyo Engineering Priorities

Use this order when making implementation tradeoffs:

```text
1. User clarity
2. Correctness
3. Accessibility
4. Type safety
5. Maintainability
6. Consistency
7. Performance
8. Reusability
9. Developer experience
10. Visual polish
```

Visual polish never justifies unsafe code, inaccessible UI, fake success, broken mobile behavior, or hardcoded styling.

---

## Implementation Hierarchy

Before creating anything new, prefer:

```text
1. Existing Ariyo component
2. Existing shadcn/ui primitive
3. Existing shared utility
4. Existing feature-level pattern
5. New composed component
6. New primitive
7. New dependency
```

New dependencies require justification.

---

# Part 1 — Metadata + Engineering Philosophy

## Engineering Mission

Ariyo frontend code must turn product strategy into a reliable, clear, premium SaaS experience. The codebase must be safe for real users, real data, real failures, real devices, and future AI-assisted maintenance.

## Core Engineering Principle

Every implementation must be:

```text
clear before clever
safe before fast
typed before flexible
accessible before decorative
consistent before custom
product-ready before visually impressive
```

## Code Is Product Experience

Frontend code defines what users can understand, trust, and recover from. A component is not just JSX. A component is product behavior.

## Production-Ready Definition

Ariyo frontend work is production-ready only when it:

- handles loading, empty, error, success, and permission states;
- is typed without unsafe shortcuts;
- uses semantic, accessible markup;
- works on mobile and desktop;
- follows Ariyo tokens and design system rules;
- protects high-risk actions;
- uses correct state ownership;
- avoids raw API calls inside components;
- is testable and tested where meaningful;
- removes temporary code, logs, mock data, and shortcuts.

## Senior Engineer Behavior

Codex must behave like a senior engineer:

- challenge unsafe implementation patterns;
- choose stable architecture over local convenience;
- keep components focused;
- protect design system consistency;
- avoid premature abstraction and bad generalization;
- report incomplete work honestly;
- never claim tests passed if they were not run.

## No Demo Code Rule

Do not leave demo data, fake success, placeholder APIs, TODO security checks, mock users, sample billing data, or temporary bypasses in production code.

---

# Part 2 — Tech Stack & Dependency Rules

## Stack Ownership

```text
React:
UI composition and rendering.

TypeScript:
Static correctness and safe contracts.

Vite:
Development server, build tooling, bundling.

Tailwind CSS:
Token-driven styling and layout implementation.

shadcn/ui:
Accessible UI primitives and base components.

React Router:
Routing, navigation, route params, and route-level structure.

TanStack Query:
Server state, API data, caching, refetching, loading and error data states.

Zustand:
Shared client state that is not server state.

React Hook Form:
Form state and form lifecycle.

Zod:
Runtime validation and schema-driven type inference.

TanStack Table:
Complex table state and data table behavior.

Recharts:
Product charts and dashboard visualizations.

Lucide React:
Icon system.

Framer Motion:
Approved motion only where CSS is insufficient and frontend-motion.md allows it.
```

## Dependency Addition Rule

Before adding any dependency, Codex must verify:

```text
Does the approved stack already solve this?
Is the package maintained?
Is it accessible?
Is it tree-shakeable?
What is the bundle cost?
Does it introduce security or privacy risk?
Does it overlap with existing tools?
Can this be implemented with a small utility instead?
```

## Forbidden Dependency Categories

Do not add by default:

- alternative form libraries;
- alternative validation libraries;
- alternative table libraries;
- alternative chart libraries;
- heavy animation libraries;
- unapproved auth/payment SDKs;
- unsafe HTML/markdown renderers;
- utility libraries for trivial helpers;
- libraries that duplicate shadcn/Radix behavior.

## Raw API Rule

Components must not use raw `fetch`, raw endpoints, manual auth headers, or manual response parsing. Use feature API services and TanStack Query hooks.

---

# Part 3 — TypeScript Standards

## Core TypeScript Principle

TypeScript is a correctness system, not decoration.

The codebase must use strict, meaningful types that prevent invalid product states.

## Forbidden `any`

Never introduce:

```ts
const data: any = response;
const employee = {} as any;
function handle(value: any) {}
Promise<any>;
```

Use `unknown` at unsafe boundaries, then narrow or parse.

## Runtime Validation Rule

External values are untrusted:

- API responses;
- URL params;
- search params;
- localStorage/sessionStorage;
- uploaded metadata;
- third-party SDK data.

Use Zod schemas or safe parsers for important boundaries.

## Domain Type Rule

Use product domain types in UI.

Bad:

```ts
type EmployeeStatus = string;
```

Good:

```ts
type EmployeeStatus =
  | "not_hired"
  | "hired"
  | "needs_setup"
  | "ready_to_deploy"
  | "deploying"
  | "active"
  | "paused"
  | "failed";
```

## ID Type Rule

Use branded or domain-specific ID types when helpful:

```ts
type EmployeeId = string & { readonly __brand: "EmployeeId" };
type OrganizationId = string & { readonly __brand: "OrganizationId" };
```

Do not casually pass IDs across domains.

## Exhaustive Switch Rule

Finite states must be exhaustive.

```ts
function assertNever(value: never): never {
  throw new Error(`Unhandled value: ${value}`);
}
```

Never default unknown states to success.

## Component Props Rule

Props must be explicit and semantic.

```ts
type EmployeeCardProps = {
  employee: EmployeeSummary;
  variant?: "default" | "compact" | "featured";
  onViewProfile?: (employeeId: EmployeeId) => void;
};
```

Avoid vague props:

```ts
type Props = {
  data: any;
  config: any;
  onClick: () => void;
};
```

## Unsafe Cast Rule

Avoid:

```ts
{} as Employee
searchParams.get("status") as EmployeeStatus
employee!.name
```

Parse, narrow, or handle absence.

---

# Part 4 — React Component Standards

## Core React Component Principle

Each component must have one clear responsibility.

Before building a component, ask:

```text
What does it render?
What data does it need?
What actions can it trigger?
What state does it own?
What state does it receive?
What UI states must it support?
Can it be reused safely?
```

## Component Categories

Use clear categories:

```text
Page components
Feature components
Shared Ariyo components
UI primitives
Layout components
Data components
Form components
Overlay components
Utility components
```

## Page Components

Page components may compose route-level sections, URL params, query hooks, and page-level states. They must not contain huge JSX trees, raw API calls, business logic, complex table logic, or repeated styling.

## Feature Components

Feature components encode product-specific behavior, such as:

- `EmployeeCard`
- `EmployeeProfileHero`
- `DeployEmployeeDialog`
- `KnowledgeSourceCard`
- `AiCostBreakdown`
- `WorkflowBuilderCanvas`

They must consume product domain types, not backend DTOs.

## UI Primitive Components

UI primitives are based on shadcn/ui and must remain generic. They must not import feature logic or product-specific business rules.

## Component Size Rule

Prefer components under 150 lines. Over 250 lines requires review. Over 400 lines is usually a design smell.

Refactor when a component has multiple unrelated state groups, deep JSX, multiple forms/overlays, repeated blocks, or multiple API concerns.

## Conditional Rendering Rule

Major UI states should be explicit and readable.

Preferred order:

```text
loading
error
empty
success
```

## Effects Rule

`useEffect` is for side effects, not derived calculations or server fetching.

Use effects for:

- subscriptions;
- focus management;
- browser APIs;
- document title;
- external integrations;
- intentional local reset on entity change.

Do not use effects for TanStack Query server fetching or simple derived state.

## Accessibility First Rule

Every component must use semantic HTML, accessible names, visible focus, keyboard behavior, and clear disabled/loading states.

## Link vs Button Rule

Buttons are for actions. Links are for navigation.

---

# Part 5 — Component API & Composition Rules

## Component API Principle

Component APIs must expose product meaning, not implementation details.

Bad:

```tsx
<EmployeeCard blue big showButton statusColor="green" />
```

Good:

```tsx
<EmployeeCard
  employee={employee}
  variant="featured"
  primaryAction={{
    label: "Deploy employee",
    onClick: handleDeployEmployee,
  }}
/>
```

## Props Are Contracts

Props must be typed, minimal, stable, semantic, and safe by default.

## Required Props Rule

Required props represent information the component cannot correctly render without.

```ts
type EmployeeStatusBadgeProps = {
  status: EmployeeStatus;
};
```

Do not make required product meaning optional.

## Variant Rule

Variants must be finite, typed, and meaningful.

Good:

```ts
type EmployeeCardVariant = "default" | "compact" | "featured";
```

Bad:

```ts
variant?: string;
```

Variant names should describe intent, not styling.

## State API Rule

Prevent impossible states through unions.

Bad:

```ts
type Props = {
  isLoading?: boolean;
  isEmpty?: boolean;
  error?: Error;
  data?: Employee[];
};
```

Good:

```ts
type DataState<TData> =
  | { status: "loading" }
  | { status: "error"; error: AriyoError }
  | { status: "empty" }
  | { status: "success"; data: TData };
```

## Boolean Prop Rule

Avoid multiple mode booleans. Use finite unions.

## Callback Rule

Callbacks must be named by product intent and pass meaningful payloads.

Good:

```ts
onDeployEmployee?: (payload: {
  employeeId: EmployeeId;
  channelId: ChannelId;
}) => void;
```

Avoid vague callbacks:

```ts
onClick?: () => void;
onAction?: () => void;
```

for product components.

## Slot and Children Rule

Use `children` for layout primitives. Use named slots when controlled customization is needed:

```ts
type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  breadcrumbs?: React.ReactNode;
};
```

Do not create components with too many slots.

## `className` Rule

`className` is acceptable for low-level primitives and limited layout composition. Feature components should expose semantic variants, not arbitrary styling hooks.

## Backend Shielding Rule

Component APIs must not expose backend terms like `agent_runtime_status`, `embedding_job_status`, `tenant_id`, or `celery_task_id`.

---

# Part 6 — Styling Standards: Tailwind, Tokens & shadcn/ui

## Core Styling Principle

Every style must come from product meaning or design-system structure.

Bad:

```tsx
<div className="bg-blue-600 p-[19px] shadow-[0_12px_40px_rgba(0,0,0,0.22)]" />
```

Good:

```tsx
<Card className="bg-card p-6 shadow-sm" />
```

## Semantic Token Rule

Use semantic classes:

```text
bg-background
bg-card
bg-popover
bg-muted
bg-primary
bg-secondary
bg-destructive
text-foreground
text-muted-foreground
text-primary
text-primary-foreground
text-destructive
border-border
border-input
ring-ring
```

Avoid raw palette classes in product UI:

```text
bg-blue-500
bg-green-600
bg-red-400
text-gray-700
bg-white
text-black
```

## Hardcoded Color Rule

Hardcoded colors are forbidden in components except for approved chart palettes, brand assets, or token definitions.

## Spacing Rule

Use Ariyo spacing scale:

```text
4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px
```

Avoid arbitrary spacing like `p-[17px]` unless justified.

## Focus Styling Rule

Never remove focus without replacement.

```tsx
className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
```

## Dark Mode Rule

Use semantic tokens that support dark mode. Avoid `bg-white text-black` in product UI.

## RTL Styling Rule

Prefer `gap`, layout primitives, and direction-aware patterns over hardcoded `left`, `right`, `ml`, `mr` when logical direction matters.

## shadcn/ui Rule

Use shadcn/ui primitives as accessible foundations. Do not fork primitives randomly, duplicate modified copies, remove focus styles, or override internals with fragile selectors.

## Motion Styling Rule

Avoid `transition-all`. Use specific properties. Motion must follow `frontend-motion.md`.

Forbidden visual patterns:

```text
AI glows
neon rings
animated gradients
particles
glassmorphism by default
heavy shadows
decorative loops
```

Ariyo premium style is restraint, clarity, and consistency.

---

# Part 7 — State Management Standards: Local State, Zustand & URL State

## Core State Principle

State must live where it naturally belongs:

```text
local component state:
local UI behavior

React Hook Form:
form state

TanStack Query:
server state

Zustand:
shared client state that is not server state

URL state:
shareable/bookmarkable navigational state

derived values:
computed values that do not need storage
```

## State Ownership Questions

Before creating state, ask:

```text
Who owns it?
Who reads it?
Who updates it?
Should it survive navigation?
Should it be shareable by URL?
Does it come from server?
Is it form state?
Can it be derived?
Can it stay local?
```

## Derived State Rule

Do not store values that can be derived.

Bad:

```tsx
const [activeEmployees, setActiveEmployees] = useState<Employee[]>([]);
```

Good:

```tsx
const activeEmployees = employees.filter(
  (employee) => employee.status === "active"
);
```

Use `useMemo` only when the computation is meaningful.

## Local State Rule

Use local state for temporary, component-owned UI state:

- dialog open;
- dropdown open;
- local tab;
- local search draft;
- copied feedback;
- small disclosure.

Do not use local state for server data.

## Server State Rule

Server state belongs to TanStack Query. Never store employees, billing, permissions, deployment status, knowledge source status, or analytics data in Zustand or local state.

## Zustand Rule

Use Zustand only for shared client-owned state across distant components:

- sidebar collapsed;
- command palette open;
- safe UI preferences;
- feature builder draft when justified.

Do not use Zustand for server data, form state, URL filters, permissions, billing, or temporary single-component state.

Use selectors:

```tsx
const isOpen = useCommandPaletteStore((state) => state.isOpen);
```

## URL State Rule

Use URL state for:

- filters;
- search query;
- sort;
- pagination;
- date range;
- page-level tabs;
- shareable selected entity.

Validate URL params. Never cast raw params as trusted types.

---

# Part 8 — Data Fetching Standards: TanStack Query & API Boundaries

## Core Data Fetching Principle

Server state belongs to TanStack Query.

API details belong to API boundary modules.

UI components consume typed hooks and product-ready data.

## Approved Data Flow

```text
UI component
→ typed query/mutation hook
→ feature API service
→ shared API client
→ backend

backend response
→ API client
→ schema parse / mapping
→ product domain type
→ query cache
→ UI state component
```

## API Boundary Rule

Components must not contain:

- raw `fetch`;
- raw endpoints;
- manual headers;
- auth logic;
- backend DTO mapping;
- response parsing;
- retry/cache logic.

Use API services and query/mutation hooks.

## Query Hook Rule

Reusable data fetches need query hooks:

```ts
export function useEmployeesQuery(filters: EmployeeFilters) {
  return useQuery({
    queryKey: employeeQueryKeys.list(filters),
    queryFn: ({ signal }) => employeeApi.listEmployees(filters, signal),
  });
}
```

## Query Key Rule

Centralize query keys:

```ts
export const employeeQueryKeys = {
  all: ["employees"] as const,
  lists: () => [...employeeQueryKeys.all, "list"] as const,
  list: (filters: EmployeeFilters) =>
    [...employeeQueryKeys.lists(), filters] as const,
  details: () => [...employeeQueryKeys.all, "detail"] as const,
  detail: (employeeId: EmployeeId) =>
    [...employeeQueryKeys.details(), employeeId] as const,
};
```

Filters, pagination, organization context, and entity IDs must be included when they affect data.

## Mutation Hook Rule

Server-changing actions need mutation hooks:

```ts
export function useDeployEmployeeMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: employeeApi.deployEmployee,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: employeeQueryKeys.detail(variables.employeeId),
      });
      queryClient.invalidateQueries({
        queryKey: employeeQueryKeys.lists(),
      });
    },
  });
}
```

## High-Trust Server Confirmation Rule

Never fake:

- employee active;
- source ready;
- billing updated;
- workflow published;
- integration connected;
- permission changed.

Wait for server confirmation.

---

# Part 9 — Forms & Validation Standards: React Hook Form + Zod

## Core Form Principle

Forms are typed product workflows, not input collections.

All production forms must use React Hook Form and Zod.

## Schema Rule

Every production form must have a Zod schema.

```ts
export const deployEmployeeSchema = z.object({
  channelId: z.string().min(1, "Select a channel."),
  replyMode: z.enum(["require_review", "reply_automatically"]),
  knowledgeSourceIds: z
    .array(z.string())
    .min(1, "Assign at least one knowledge source."),
});

export type DeployEmployeeFormValues = z.infer<typeof deployEmployeeSchema>;
```

Do not manually duplicate form type definitions.

## Default Values Rule

Every form must define explicit default values. Never use `{} as FormValues`.

## Label Rule

Every field needs a visible label. Placeholder is not a label.

## Validation Copy Rule

Validation messages must be specific and user-facing:

Good:

```text
Enter a valid email address.
Select a channel.
Assign at least one knowledge source.
```

Bad:

```text
Required.
Invalid.
Error.
```

## Submit Rule

Submit buttons must have `type="submit"`, specific copy, pending copy, and duplicate-submit protection.

Non-submit buttons inside forms must have `type="button"`.

## Server Error Rule

Map server validation errors to fields when possible. Use form-level errors for network, permission, billing, deployment, integration, or whole-form failures.

## High-Risk Form Rule

High-risk forms require review or confirmation:

- deploy employee;
- enable automatic replies;
- delete workflow;
- disconnect source;
- remove member;
- change billing;
- change permissions.

---

# Part 10 — Error, Loading, Empty & Success Implementation Standards

## Core State UX Principle

Every data-driven UI must explicitly support:

```text
loading
empty
error
success
```

When relevant, also support:

```text
permission denied
not found
partial failure
background refresh
stale data
disabled action
pending mutation
retry
safe fallback
```

## Four-State Rendering Rule

```tsx
if (employeesQuery.isLoading) {
  return <EmployeesSkeleton />;
}

if (employeesQuery.isError) {
  return <EmployeesError onRetry={() => employeesQuery.refetch()} />;
}

const employees = employeesQuery.data ?? [];

if (employees.length === 0) {
  return <EmployeesEmptyState />;
}

return <EmployeesGrid employees={employees} />;
```

Do not confuse loading, empty, and error.

## Loading Rule

Use structured skeletons for content loading and button pending states for actions. Avoid full-page spinner-only loading.

## Empty State Rule

Empty states need title, explanation, and next action when available.

First-use empty differs from filtered/search empty.

## Error Rule

Errors must include:

```text
what happened
safe state
recovery action
calm copy
no backend internals
```

Example:

```text
Deployment failed. Your setup was saved. Review setup and try again.
```

## Success Rule

Success appears only after confirmed success.

Good:

```text
Employee activated.
Changes saved.
Knowledge source connected.
Invite sent.
```

Bad:

```text
Success!
Done!
```

---

# Part 11 — Accessibility Implementation Standards

## Core Accessibility Principle

Use native HTML semantics first. Use ARIA only when native semantics are not enough.

Bad:

```tsx
<div role="button" onClick={handleDeploy}>Deploy employee</div>
```

Good:

```tsx
<button type="button" onClick={handleDeploy}>Deploy employee</button>
```

## Required Accessibility Standards

Every UI must consider:

- semantic HTML;
- logical headings;
- landmarks;
- keyboard navigation;
- visible focus;
- accessible names;
- form labels and error association;
- dialog focus management;
- no color-only meaning;
- chart summaries;
- table semantics;
- reduced motion;
- mobile touch targets;
- RTL/Persian readiness.

## Button and Link Rule

Buttons are for actions. Links are for navigation.

## Icon Button Rule

Icon-only buttons require accessible labels.

```tsx
<Button aria-label="Retry source sync" size="icon">
  <RefreshCwIcon aria-hidden="true" />
</Button>
```

## Form Accessibility Rule

Every field must have visible label, programmatic label, helper association when present, error association when present, and keyboard support.

## Dialog Rule

Dialogs must use approved accessible primitives and include accessible title, focus trap, Escape behavior when safe, and focus return.

## Chart Rule

Charts must include text summaries, units, empty/error states, and not rely on color alone.

---

# Part 12 — Performance & Rendering Standards

## Core Performance Principle

Ariyo must feel stable, responsive, and trustworthy under real production conditions.

Optimize for:

- fast first meaningful render;
- small initial bundle;
- route-level code splitting;
- stable layout;
- minimal unnecessary re-renders;
- efficient data fetching;
- progressive loading;
- mobile performance;
- accessibility preservation.

## Initial Bundle Rule

Do not load heavy features in the app shell. Lazy-load dashboards, workflow builders, large chart sections, billing reports, integration setup, and rarely used routes.

## Rendering Rule

Keep state close to where it is used. Avoid giant components and broad global state reads.

Use Zustand selectors:

```tsx
const isCollapsed = useSidebarStore((state) => state.isCollapsed);
```

## Memoization Rule

Use `useMemo`, `useCallback`, and `React.memo` only when they prevent meaningful work. Do not decorate every value.

## Large List Rule

Large lists require pagination, load more, virtualization, or server-side filtering. Never render unbounded production-size lists.

## Table Rule

Large tables require stable columns, stable row IDs, server-side pagination/filtering when needed, and mobile strategy.

## Chart Rule

Charts should be useful, not decorative. Memoize chart data, limit data points, avoid heavy animation, and provide accessible summaries.

## Animation Performance Rule

Animate only performant properties:

```text
opacity
transform
translate
scale
```

Avoid `transition-all`, layout animations, heavy blur, and large animated lists.

---

# Part 13 — File Naming, Imports & Exports

## Core File Principle

File structure is architecture. Names must reveal ownership and product meaning.

## Naming Standards

```text
kebab-case:
file and folder names

PascalCase:
React components

camelCase:
variables, functions, hook internals

useSomething:
hooks

somethingSchema:
Zod schemas

SomethingFormValues:
form values
```

## File Naming Rule

Good:

```text
employee-card.tsx
deploy-employee-dialog.tsx
use-employees-query.ts
employee-query-keys.ts
deploy-employee-schema.ts
ai-cost-chart-card.tsx
```

Bad:

```text
component.tsx
helper.ts
utils.ts as dumping ground
EmployeeCard.tsx
employeeCard.tsx
employee-card-v2.tsx
new-dashboard.tsx
```

## Feature Structure

Default feature structure:

```text
features/employees/
  api/
  components/
  queries/
  mutations/
  schemas/
  hooks/
  utils/
  pages/
  types/
```

## Import Rules

Use `@/` alias for cross-folder imports and relative imports for local siblings.

Use `import type` for type-only imports.

Avoid long relative imports and deep imports into another feature’s private files.

## Export Rules

Prefer named exports. Export only intentional public contracts. Avoid giant `export *` barrels.

## Layering Rule

Shared code must not import feature code. UI primitives must not import product features. API files must not import React components.

---

# Part 14 — Testing Expectations

## Core Testing Principle

Test what the user does and what the product promises.

Tests should verify:

- user behavior;
- component contracts;
- form validation;
- data states;
- mutation behavior;
- error recovery;
- accessibility basics;
- permissions;
- high-risk flows;
- regression-prone logic.

## Testing Stack

Use project-approved tools, preferably:

```text
Vitest
React Testing Library
@testing-library/user-event
MSW
jest-dom
axe or accessibility tooling when available
Playwright or equivalent for critical E2E flows
```

Do not introduce competing test frameworks without approval.

## Query Rule

Use user-centric queries:

```ts
screen.getByRole("button", { name: "Deploy employee" });
screen.getByLabelText("Work email");
```

Avoid `querySelector`, class selectors, and test IDs by default.

## Required Test Areas

Add or update tests when code affects:

- schemas;
- mappers;
- payload builders;
- query keys;
- URL parsing;
- forms;
- mutations;
- permissions;
- billing;
- deployment;
- knowledge sync;
- destructive actions;
- shared components;
- reducers;
- error/empty states;
- accessibility-critical behavior.

## High-Risk Flow Tests

High-risk flows must not be happy-path-only. Test pending, success, failure, safe-state copy, duplicate-submit prevention, and permission denial where applicable.

## Do Not Weaken Tests Rule

Never delete or weaken meaningful tests just to make the suite pass.

---

# Part 15 — Security, Safety & Production Guardrails

## Core Security Principle

Frontend code must never assume the user, browser, URL, storage, network, API response, or third-party data is trusted.

Treat as untrusted:

```text
URL params
search params
localStorage
sessionStorage
API responses
uploaded files
user-generated content
integration responses
HTML strings
markdown content
error messages
```

## Frontend Is Not Security Authority

Frontend permission checks improve UX. Backend must enforce security.

Frontend must still show honest permission UI and avoid unsafe actions.

## Sensitive Data Rule

Do not store or log:

- auth tokens;
- API keys;
- integration secrets;
- customer messages;
- knowledge source content;
- billing/payment data;
- private organization settings;
- workflow secrets.

Do not put sensitive data in URL params, localStorage, analytics, console logs, test snapshots, or persisted Zustand stores.

## Unsafe HTML Rule

`dangerouslySetInnerHTML` is forbidden by default. Markdown/HTML rendering requires approved sanitization.

## External Link Rule

External links opening new tabs need:

```tsx
rel="noopener noreferrer"
```

Validate dynamic URLs and block dangerous protocols like `javascript:` and `data:`.

## Upload Safety Rule

Uploads must validate type, extension, MIME where possible, size, count, and failure recovery. Backend must enforce validation.

## High-Trust Server Confirmation Rule

Never fake success for:

- billing;
- deployment;
- knowledge source readiness;
- permission changes;
- destructive actions;
- integration connection;
- workflow publishing.

## Safe Defaults Rule

Unknown permission, status, billing state, sync state, or validation result must fail safely, not successfully.

---

# Part 16 — Definition of Done + Forbidden Code Patterns

## Core Definition of Done

Ariyo frontend work is done only when it is safe for real users, real data, real failures, real devices, and real future maintenance.

## Final Implementation Checklist

Before finalizing any frontend task, verify:

```text
Does it match Ariyo product language?
Does it use the approved stack?
Does it avoid unapproved dependencies?
Does it use existing components first?
Does it expose semantic component APIs?
Does it use tokens and shadcn/ui correctly?
Does it avoid hardcoded colors and spacing?
Does it support mobile?
Does it support keyboard and screen readers?
Does it handle loading, empty, error, and success?
Does it handle permission denied where relevant?
Does it explain disabled important actions?
Does it protect high-risk actions?
Does it avoid fake success and fake progress?
Does it avoid unsafe HTML?
Does it avoid sensitive data leaks?
Does it include meaningful tests when needed?
Does it remove temporary code, logs, mocks, and bypasses?
```

## Forbidden TypeScript Patterns

Never ship:

```text
any
as any
{} as Type
unsafe route/search param casts
unsafe localStorage casts
non-null assertions for uncertain values
status as string
variant as string
Promise<any>
untyped API response
untyped mutation payload
schema/type duplication
suppression comments without strong reason
```

## Forbidden React Patterns

Never ship:

```text
giant mixed-responsibility components
manual server fetching in useEffect
derived data stored in state
clickable divs/span buttons
buttons without type in forms
index keys for dynamic lists
nested interactive elements
unlabeled icon buttons
useEffect for pure calculations
component APIs with many booleans
backend terms in UI component APIs
```

## Forbidden Styling Patterns

Never ship:

```text
hardcoded colors
random arbitrary spacing
magic pixel values
inline styles for normal styling
bg-white text-black product UI
raw status colors
transition-all by default
heavy shadows
AI glows
animated gradients
particles
glassmorphism by default
desktop-only grids
hidden focus states
hover-only critical content
z-[9999]
negative margin layout hacks
```

## Forbidden State Patterns

Never ship:

```text
server data in useState
server data in Zustand
query data copied into Zustand
URL state copied into Zustand
form values in Zustand by default
permissions in client global state
billing data in localStorage
auth tokens in client stores
manual loading flags duplicating query state
derived values stored as state
giant app store
persisted sensitive state
organization-specific leakage
```

## Forbidden Data Fetching Patterns

Never ship:

```text
fetch inside UI components
raw endpoints in JSX files
manual useEffect fetching for server state
untyped API responses
backend DTOs rendered directly
query keys scattered across components
query keys missing filters
mutations without hooks
raw backend errors in UI
fake deployment success
fake sync readiness
optimistic billing changes
polling without stop condition
unscoped invalidateQueries by default
auth headers inside components
localStorage as server cache
```

## Forbidden Form Patterns

Never ship:

```text
production forms without React Hook Form
production validation without Zod
manual form state for complex forms
placeholder-only labels
generic Required errors
generic Submit buttons
buttons without explicit type
defaultValues as empty cast
raw API calls in submit handlers
server errors shown raw
toast-only critical form errors
disabled submit without explanation
background refetch overwriting dirty form
server-confirmed states faked locally
unvalidated URL/email/file inputs
high-risk Yes/No confirmations
```

## Forbidden State UX Patterns

Never ship:

```text
happy-path-only UI
blank loading screens
spinner-only full-page loading
empty state before successful load
error treated as empty
permission failure shown as empty
not found shown as generic error
raw backend errors
Something went wrong as primary error copy
toast-only critical errors
fake success
fake progress percentages
background refresh replacing content
charts with empty axes and no explanation
tables with blank empty body
form failure that clears user input
destructive failure without safe-state copy
```

## Forbidden Accessibility Patterns

Never ship:

```text
div buttons
span buttons
clickable cards without link/button semantics
icon-only buttons without labels
forms with placeholder-only labels
field errors not associated with fields
dialogs without accessible title
custom modals without focus management
menus without keyboard support
tooltips containing critical information
disabled important actions without reason
focus outline removed without replacement
positive tabindex
keyboard traps outside modal dialogs
color-only status
chart-only information
spinner-only action buttons
toast-only critical errors
hover-only content
motion-only feedback
nested interactive elements
unsafe asChild usage
ARIA used instead of correct HTML
```

## Forbidden Performance Patterns

Never ship:

```text
unbounded large list rendering
large table without pagination or virtualization strategy
index keys for dynamic lists
heavy route imported into app shell
large dependency for small task
payment SDK loaded globally
transition-all everywhere
animated large lists
decorative background animations
large images without dimensions or aspect ratio
chart data transformed inline in JSX
global store read without selector
context with frequently changing broad state
forms updating global state on every keystroke
search request on every keystroke without debounce
background refresh replacing visible content
polling without stop condition
timers/listeners without cleanup
object URLs without revoke
localStorage reads during render
```

## Forbidden File Architecture Patterns

Never ship:

```text
component.tsx
helper.ts dumping ground
utils.ts dumping ground
constants.ts dumping ground
types.ts with unrelated global types
new-component.tsx
old-component.tsx
component-v2.tsx
backup/scratch files
feature internals imported by another feature
shared components importing feature modules
ui primitives importing product types
stores importing query hooks
API files importing React components
schemas importing UI components
large export * barrels
feature root exporting private internals
unused imports
circular dependencies
backend jargon in UI filenames
```

## Forbidden Testing Patterns

Never ship:

```text
tests that only say renders
large page snapshots
implementation selector tests by default
tests relying on CSS classes for behavior
tests with any fixtures
shared QueryClient across tests
Zustand state leaking between tests
unmocked real network requests
arbitrary sleep waits
tests dependent on order
deleted failing tests without replacement
skipped tests without reason
high-risk flows without failure tests
forms without validation tests
mutation flows without pending/error tests
permission UI without permission tests
accessibility-critical components without role/label assertions
```

## Forbidden Security Patterns

Never ship:

```text
auth tokens in localStorage without approved architecture
auth tokens in Zustand
manual auth headers in components
permission checks only by hidden UI
unknown permission treated as allowed
sensitive data in URL params
sensitive data in localStorage
sensitive data in analytics
console logs with payloads or user data
raw backend errors shown to users
dangerouslySetInnerHTML without approved sanitization
markdown rendered without sanitization
javascript: links
unvalidated upload types
file previews that execute content
object URLs not revoked
billing success before server confirmation
deployment active before server confirmation
knowledge source ready before server confirmation
optimistic high-risk actions
duplicate high-risk submissions
destructive OK/Cancel confirmations
mock data in production UI
hardcoded secrets in frontend env
temporary permission bypasses
security TODOs postponed silently
unknown status mapped to success
```

---

# Ariyo Definition of Done Golden Rule

Done means safe for real users, real data, real failures, real devices, and real future maintenance.

---

# Senior Definition of Done Rule

Do not optimize for finishing the task quickly.

Optimize for leaving the product safer, clearer, and easier to evolve.

---

# Final Rule

Ariyo frontend work is complete only when it meets Ariyo’s product, design, engineering, accessibility, performance, testing, and security standards; handles real-world states beyond the happy path; avoids all forbidden patterns; and can be safely maintained by both human engineers and AI agents without creating hidden product or technical risk.
