# Ariyo Project Structure Skill

Version: 1.0.0  
Product: Ariyo  
Purpose:  
Act as a Senior Frontend Architect, Repository Structure Guardian, Feature Boundary Reviewer, and AI-Agent Code Organization Supervisor for Ariyo.

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

If conflicts exist:

- frontend-design.md wins for product philosophy and visual experience.
- frontend-components.md wins for component behavior and reusable UI contracts.
- frontend-responsive.md wins for responsive behavior.
- frontend-motion.md wins for motion and transition behavior.
- frontend-copywriting.md wins for user-facing language.
- coding-standards.md wins for implementation quality and code-level rules.
- project-structure.md wins for repository organization, file placement, module boundaries, feature ownership, import direction, and project scalability.

Code that works but is placed in the wrong layer is not production-ready.

Code that is locally convenient but weakens architecture is not acceptable.

---

# Purpose

This skill defines the official frontend project structure for Ariyo.

It governs:

```text
repository layout
src folder ownership
feature folder structure
shared component placement
app shell boundaries
API boundary placement
query and mutation organization
form and schema placement
state and store placement
utility placement
asset placement
test placement
import boundaries
public vs private modules
new feature creation
refactoring structure
forbidden architecture patterns
```

Ariyo must remain understandable as the product grows.

The folder structure must help both human engineers and AI agents safely add, modify, and remove code.

---

# Core Project Structure Principle

Structure must express ownership.

Every file must answer:

```text
Who owns this?
What layer does this belong to?
Can other features import this?
Is this shared or feature-specific?
Is this UI, data, state, schema, API, or utility logic?
What would break if this moved?
```

If ownership is unclear, the structure is wrong.

Do not create files based only on convenience.

---

# Architectural Mission

Ariyo’s frontend structure must support:

```text
fast feature development
safe AI-assisted edits
clear feature boundaries
strong TypeScript contracts
predictable imports
minimal circular dependencies
scalable routing
shared design system usage
isolated API boundaries
clean data fetching
safe forms
accessible UI
production security
future backend integration
future localization and RTL support
```

The project must not become a flat collection of components, utilities, and random hooks.

---

# Official High-Level Repository Structure

Ariyo frontend should use this default structure:

```text
ariyo-frontend/
  .skills/
    frontend-design.md
    frontend-components.md
    frontend-responsive.md
    frontend-motion.md
    frontend-copywriting.md
    coding-standards.md
    project-structure.md

  public/

  src/
    app/
    assets/
    components/
      ui/
      ariyo/
    features/
    hooks/
    lib/
    stores/
    styles/
    test/
    types/

  package.json
  tsconfig.json
  vite.config.ts
  tailwind.config.ts
  components.json
  postcss.config.js
  eslint.config.js
  prettier.config.js
  README.md
```

Adapt only when the existing project already has a strong convention.

Do not invent a new structure casually.

---

# `.skills` Folder Rule

The `.skills` folder contains AI-agent instructions.

It is not runtime application code.

It should include:

```text
.skills/
  frontend-design.md
  frontend-components.md
  frontend-responsive.md
  frontend-motion.md
  frontend-copywriting.md
  coding-standards.md
  project-structure.md
```

Rules:

```text
Do not import .skills files into application code.
Do not place runtime config in .skills.
Do not place project source files in .skills.
Do not place temporary notes in .skills.
Keep skill files explicit, versioned, and readable.
```

These files guide Codex and AI-assisted development.

They are architectural standards.

---

# `src` Folder Rule

All application source code belongs in `src`.

`src` must be organized by architecture layer:

```text
src/
  app/          App shell, providers, routing, layout orchestration
  components/   Shared UI primitives and shared Ariyo product components
  features/     Product feature modules
  hooks/        Shared generic hooks
  lib/          Shared infrastructure and pure utilities
  stores/       Shared app-level client stores
  styles/       Global styles and design token CSS
  types/        Shared global types only
  test/         Test utilities, providers, mocks, fixtures
  assets/       Static imported assets
```

Do not put all code directly under `src/components`, `src/hooks`, or `src/utils`.

Feature-specific code belongs in `src/features`.

---

# `src/app` Rule

`src/app` owns application composition.

It may contain:

```text
src/app/
  app.tsx
  providers.tsx
  router.tsx
  routes.tsx
  app-shell.tsx
  protected-route.tsx
  route-error-boundary.tsx
  not-found-page.tsx
  app-error-boundary.tsx
```

`src/app` may compose features.

`src/app` should not contain feature business logic.

Allowed in `src/app`:

```text
router setup
route hierarchy
provider composition
global shell
global error boundary
protected route wrapper
app-wide loading fallback
app-wide layout composition
```

Forbidden in `src/app`:

```text
employee card internals
billing plan calculations
knowledge source sync mapping
workflow builder reducer
deployment form schema
feature-specific query keys
feature API calls
large feature components
```

App code orchestrates.

Feature code owns product behavior.

---

# `src/app/providers.tsx` Rule

Global providers must be centralized.

Typical providers:

```tsx
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
```

Allowed providers:

```text
QueryClientProvider
RouterProvider when applicable
ThemeProvider
DirectionProvider when applicable
TooltipProvider
ToastProvider or Toaster
AuthProvider if approved
FeatureFlagProvider if approved
```

Do not scatter global providers across pages or features.

---

# `src/app/router.tsx` Rule

Routing belongs in app layer.

Routes should be thin.

Routes may:

```text
define path hierarchy
lazy-load pages
attach layouts
attach route error boundaries
protect authenticated areas
handle not-found pages
```

Routes should not:

```text
fetch feature data directly
contain large JSX screens
contain feature forms
contain feature business logic
map backend DTOs
manage feature state
```

Good:

```tsx
const EmployeeProfilePage = lazy(() =>
  import("@/features/employees/pages/employee-profile-page")
);
```

Route modules should point to feature pages, not implement them inline.

---

# `src/components` Rule

`src/components` is for shared components only.

It has two main branches:

```text
src/components/
  ui/       Low-level shadcn/ui primitives
  ariyo/    Reusable Ariyo product components
```

Do not place feature-specific components directly in `src/components`.

Bad:

```text
src/components/employee-card.tsx
src/components/billing-plan-card.tsx
src/components/knowledge-source-card.tsx
```

Good:

```text
src/features/employees/components/employee-card.tsx
src/features/billing/components/billing-plan-card.tsx
src/features/knowledge-sources/components/knowledge-source-card.tsx
```

A component should move to shared only after real reuse and stable API exist.

---

# `src/components/ui` Rule

`components/ui` contains low-level UI primitives, usually based on shadcn/ui.

Examples:

```text
src/components/ui/
  button.tsx
  input.tsx
  textarea.tsx
  dialog.tsx
  alert-dialog.tsx
  dropdown-menu.tsx
  popover.tsx
  tooltip.tsx
  tabs.tsx
  badge.tsx
  card.tsx
  table.tsx
  form.tsx
  select.tsx
  checkbox.tsx
  switch.tsx
  radio-group.tsx
  skeleton.tsx
```

Rules:

```text
Must be generic.
Must preserve shadcn/Radix accessibility.
Must use tokens.
Must not contain Ariyo feature logic.
Must not import from features.
Must not know employee, billing, workflow, or knowledge-source domains.
Must not contain product-specific copy except generic labels where unavoidable.
```

Forbidden:

```tsx
// components/ui/button.tsx
import type { EmployeeStatus } from "@/features/employees";
```

UI primitives are foundation.

They must stay clean.

---

# `src/components/ariyo` Rule

`components/ariyo` contains reusable Ariyo product-level components.

Examples:

```text
src/components/ariyo/
  page-header.tsx
  section-header.tsx
  empty-state.tsx
  error-state.tsx
  retry-error-state.tsx
  data-state.tsx
  metric-card.tsx
  status-badge.tsx
  confirm-dialog.tsx
  page-container.tsx
  section-card.tsx
  loading-label.tsx
  form-error-summary.tsx
```

These components may encode Ariyo UX standards.

They must not encode feature-specific business rules.

Allowed:

```text
common empty state layout
common error state layout
common page header pattern
common metric card structure
common status badge primitive
common confirmation dialog contract
```

Forbidden:

```text
Employee-specific deployment rules
Billing plan behavior
Knowledge source sync mapping
Workflow publish logic
Marketplace hiring logic
```

If a component needs feature data, it probably belongs in the feature.

---

# `src/features` Rule

`src/features` owns product features.

Each major product domain should have a feature folder.

Recommended Ariyo feature folders:

```text
src/features/
  auth/
  onboarding/
  dashboard/
  marketplace/
  employees/
  deployments/
  knowledge-sources/
  integrations/
  workflows/
  activity/
  ai-cost/
  billing/
  organization/
  members/
  settings/
  support/
```

Use product language.

Avoid backend terms:

```text
agents
bots
embeddings
vectors
tenants
celery-tasks
llm-runs
```

Feature names should match Ariyo’s product vocabulary.

---

# Standard Feature Folder Structure

Use this default structure for substantial features:

```text
features/[feature-name]/
  api/
  components/
  forms/
  hooks/
  mutations/
  pages/
  queries/
  schemas/
  stores/
  types/
  utils/
  __tests__/
  index.ts
```

Not every feature needs every folder.

Create folders only when needed.

Do not create empty architecture folders just for symmetry.

---

# Feature Folder Responsibilities

```text
api/
Endpoint services, DTOs, API path builders, response mapping.

components/
Feature-specific UI components.

forms/
Feature-specific form components, default values, field groups.

hooks/
Feature-specific hooks, URL state hooks, orchestration hooks.

mutations/
TanStack Query mutation hooks.

pages/
Route-level feature pages.

queries/
TanStack Query query hooks and query keys.

schemas/
Zod schemas for forms, API responses, URL params, storage values.

stores/
Feature-scoped Zustand stores when justified.

types/
Feature domain types shared across multiple files.

utils/
Pure feature utilities, mappers, formatters, payload builders.

__tests__/
Feature integration tests when colocated tests are not enough.

index.ts
Optional public API for other features.
```

Every folder has a role.

Do not mix responsibilities.

---

# Feature Public API Rule

A feature may expose a controlled public API through `index.ts`.

Good:

```ts
export { EmployeeStatusBadge } from "./components/employee-status-badge";
export { useEmployeeProfileQuery } from "./queries/use-employee-profile-query";
export type { EmployeeId, EmployeeSummary } from "./types/employee-types";
```

Forbidden:

```ts
export * from "./api/employee-api";
export * from "./utils/map-employee-dto";
export * from "./components/private-employee-card-header";
export * from "./stores/workflow-builder-store";
```

Public feature exports are contracts.

Export only stable things other features are allowed to use.

---

# Feature Privacy Rule

Feature internals are private by default.

Other features must not deep-import private files.

Bad:

```ts
import { mapEmployeeDto } from "@/features/employees/utils/map-employee-dto";
```

Good:

```ts
import type { EmployeeId } from "@/features/employees";
```

If multiple features need the same logic, extract it to a shared lower-level module.

Do not cross-import private implementation details.

---

# Employees Feature Example

Recommended structure:

```text
features/employees/
  api/
    employee-api.ts
    employee-dto.ts

  components/
    employee-card.tsx
    employee-status-badge.tsx
    employee-profile-hero.tsx
    employee-actions-menu.tsx
    employee-activity-feed.tsx

  forms/
    employee-settings-form.tsx
    employee-settings-default-values.ts

  hooks/
    use-employee-id-param.ts
    use-employee-filters-from-url.ts

  mutations/
    use-pause-employee-mutation.ts
    use-resume-employee-mutation.ts

  pages/
    employees-page.tsx
    employee-profile-page.tsx

  queries/
    employee-query-keys.ts
    use-employees-query.ts
    use-employee-profile-query.ts

  schemas/
    employee-schema.ts
    employee-settings-schema.ts

  types/
    employee-types.ts

  utils/
    map-employee-dto.ts
    parse-employee-filters.ts
    employee-status-copy.ts
    employee-status-variants.ts

  index.ts
```

Employee feature owns employee-specific UI, status, pages, queries, and mappings.

---

# Marketplace Feature Example

Recommended structure:

```text
features/marketplace/
  api/
    marketplace-api.ts
    marketplace-employee-dto.ts

  components/
    marketplace-employee-card.tsx
    marketplace-filter-drawer.tsx
    marketplace-employee-grid.tsx
    hire-employee-dialog.tsx

  hooks/
    use-marketplace-filters-from-url.ts

  mutations/
    use-hire-employee-mutation.ts

  pages/
    marketplace-page.tsx

  queries/
    marketplace-query-keys.ts
    use-marketplace-employees-query.ts

  schemas/
    marketplace-employee-schema.ts
    marketplace-filters-schema.ts

  utils/
    map-marketplace-employee-dto.ts
    parse-marketplace-filters.ts
```

Marketplace must feel like hiring business roles, not installing plugins.

Do not use app-store style structure or naming.

---

# Deployments Feature Example

Recommended structure:

```text
features/deployments/
  api/
    deployment-api.ts
    deployment-dto.ts

  components/
    deploy-employee-dialog.tsx
    deployment-stepper.tsx
    deployment-review-card.tsx
    deployment-status-panel.tsx

  forms/
    deploy-employee-form.tsx
    deploy-employee-default-values.ts

  mutations/
    use-deploy-employee-mutation.ts

  queries/
    deployment-query-keys.ts
    use-deployment-status-query.ts

  schemas/
    deploy-employee-schema.ts
    deployment-status-schema.ts

  types/
    deployment-types.ts

  utils/
    deployment-status-copy.ts
    to-deploy-employee-payload.ts
    map-deployment-dto.ts
```

Deployment is high-trust.

Its structure must keep form state, server state, status copy, and payload mapping explicit.

---

# Knowledge Sources Feature Example

Recommended structure:

```text
features/knowledge-sources/
  api/
    knowledge-source-api.ts
    knowledge-source-dto.ts

  components/
    knowledge-source-card.tsx
    knowledge-source-status-badge.tsx
    knowledge-source-health-panel.tsx
    source-sync-status.tsx
    file-source-upload.tsx

  forms/
    connect-knowledge-source-form.tsx
    connect-knowledge-source-default-values.ts

  hooks/
    use-knowledge-source-filters-from-url.ts

  mutations/
    use-connect-knowledge-source-mutation.ts
    use-sync-knowledge-source-mutation.ts
    use-delete-knowledge-source-mutation.ts

  pages/
    knowledge-sources-page.tsx
    knowledge-source-detail-page.tsx

  queries/
    knowledge-source-query-keys.ts
    use-knowledge-sources-query.ts
    use-knowledge-source-detail-query.ts

  schemas/
    knowledge-source-schema.ts
    connect-knowledge-source-schema.ts

  types/
    knowledge-source-types.ts

  utils/
    map-knowledge-source-dto.ts
    knowledge-source-status-copy.ts
    knowledge-source-status-variants.ts
```

Do not expose backend terms like embeddings, vectors, ingestion, or indexing in UI file names.

---

# Workflows Feature Example

Recommended structure:

```text
features/workflows/
  api/
    workflow-api.ts
    workflow-dto.ts

  components/
    workflow-card.tsx
    workflow-builder-canvas.tsx
    workflow-step-card.tsx
    workflow-publish-dialog.tsx

  forms/
    create-workflow-form.tsx
    workflow-step-form.tsx

  hooks/
    use-workflow-id-param.ts

  mutations/
    use-create-workflow-mutation.ts
    use-update-workflow-mutation.ts
    use-publish-workflow-mutation.ts
    use-delete-workflow-mutation.ts

  pages/
    workflows-page.tsx
    workflow-builder-page.tsx

  queries/
    workflow-query-keys.ts
    use-workflows-query.ts
    use-workflow-detail-query.ts

  schemas/
    workflow-schema.ts
    workflow-step-schema.ts

  stores/
    workflow-builder-store.ts

  types/
    workflow-types.ts

  utils/
    workflow-builder-reducer.ts
    to-workflow-payload.ts
    map-workflow-dto.ts
```

Workflow builder may need feature-local state, reducer, or Zustand.

Saved server workflow state must remain separate from unsaved draft state.

---

# Dashboard Feature Example

Recommended structure:

```text
features/dashboard/
  api/
    dashboard-api.ts

  components/
    dashboard-kpi-section.tsx
    dashboard-overview-card.tsx
    recent-activity-card.tsx
    dashboard-section-error.tsx

  pages/
    dashboard-page.tsx

  queries/
    dashboard-query-keys.ts
    use-dashboard-summary-query.ts
    use-dashboard-activity-query.ts

  schemas/
    dashboard-summary-schema.ts

  types/
    dashboard-types.ts

  utils/
    map-dashboard-summary-dto.ts
```

Dashboard should support section-level loading and error states.

Do not make one failed chart break the entire dashboard.

---

# AI Cost Feature Example

Recommended structure:

```text
features/ai-cost/
  api/
    ai-cost-api.ts

  components/
    ai-cost-chart-card.tsx
    ai-cost-breakdown-table.tsx
    ai-cost-empty-state.tsx

  hooks/
    use-ai-cost-date-range-from-url.ts

  pages/
    ai-cost-page.tsx

  queries/
    ai-cost-query-keys.ts
    use-ai-cost-query.ts

  schemas/
    ai-cost-schema.ts

  types/
    ai-cost-types.ts

  utils/
    build-ai-cost-chart-data.ts
    format-ai-cost.ts
    map-ai-cost-dto.ts
```

AI cost data must be honest, typed, and period-aware.

Do not fabricate trends or savings.

---

# Billing Feature Example

Recommended structure:

```text
features/billing/
  api/
    billing-api.ts
    billing-dto.ts

  components/
    billing-summary-card.tsx
    billing-plan-card.tsx
    invoice-table.tsx
    payment-method-panel.tsx

  forms/
    billing-details-form.tsx
    billing-details-default-values.ts

  mutations/
    use-update-billing-details-mutation.ts
    use-change-plan-mutation.ts

  pages/
    billing-page.tsx

  queries/
    billing-query-keys.ts
    use-billing-summary-query.ts
    use-invoices-query.ts

  schemas/
    billing-schema.ts
    billing-details-schema.ts

  types/
    billing-types.ts

  utils/
    map-billing-dto.ts
    billing-error-copy.ts
```

Billing structure must prevent optimistic success, sensitive data persistence, and casual SDK loading.

---

# `src/lib` Rule

`src/lib` contains shared infrastructure and pure utilities.

Recommended:

```text
src/lib/
  api/
    api-client.ts
    api-error.ts
    create-api-error.ts

  auth/
    auth-client.ts
    auth-types.ts

  config/
    app-config.ts
    env-schema.ts

  errors/
    ariyo-error.ts
    to-ariyo-error.ts

  query/
    query-client.ts
    query-options.ts

  storage/
    safe-json-storage.ts
    sidebar-preference-storage.ts

  utils/
    cn.ts
    assert-never.ts
    format-date.ts
    format-currency.ts
```

Rules:

```text
lib code must be shared and infrastructure-level.
lib must not import feature components.
lib must not contain product feature screens.
lib utilities should be pure unless explicitly infrastructure-specific.
lib/api owns low-level transport only.
```

Do not put feature-specific utilities in `lib/utils`.

---

# `src/lib/api` Rule

Low-level API infrastructure belongs here.

Allowed:

```text
api client
base URL handling
headers
credentials
HTTP error creation
request cancellation
JSON serialization/parsing
shared API error type
```

Forbidden:

```text
employee endpoint logic
billing endpoint logic
workflow endpoint logic
feature-specific copy
toasts
navigation
React components
feature-specific cache invalidation
```

Feature endpoints belong inside feature `api/` folders.

---

# `src/lib/config` Rule

Runtime/build config access must be centralized.

Good:

```ts
export const appConfig = envSchema.parse({
  apiUrl: import.meta.env.VITE_API_URL,
  appEnv: import.meta.env.VITE_APP_ENV,
});
```

Rules:

```text
Do not access import.meta.env randomly in features.
Validate required config.
Do not expose secrets in frontend env.
Frontend env variables are public.
```

---

# `src/lib/errors` Rule

Error normalization belongs in shared error utilities or feature-specific error mappers.

Recommended:

```text
src/lib/errors/
  ariyo-error.ts
  to-ariyo-error.ts
  is-api-error.ts
```

Feature-specific error copy can live in feature utils:

```text
features/billing/utils/billing-error-copy.ts
features/deployments/utils/deployment-error-copy.ts
```

Do not display raw backend errors directly.

---

# `src/hooks` Rule

`src/hooks` contains shared generic hooks only.

Allowed:

```text
use-debounced-value.ts
use-media-query.ts
use-previous.ts
use-is-mounted.ts
use-event-listener.ts
use-copy-to-clipboard.ts
```

Forbidden:

```text
use-employees-query.ts
use-deploy-employee-mutation.ts
use-billing-summary-query.ts
use-workflow-builder.ts
```

Feature-specific hooks belong inside their feature.

---

# `src/stores` Rule

`src/stores` contains shared app-level client stores only.

Allowed:

```text
command-palette-store.ts
sidebar-store.ts
workspace-switcher-store.ts
app-shell-store.ts
```

Feature-specific stores belong in feature folders:

```text
features/workflows/stores/workflow-builder-store.ts
```

Rules:

```text
Stores must not hold server state.
Stores must not hold form state by default.
Stores must not hold permissions or billing data.
Stores must not import query hooks or components.
Stores must be focused and resettable when needed.
```

---

# `src/types` Rule

`src/types` is for shared global types only.

Allowed:

```text
brand types
shared utility types
app-wide primitive types
safe generic API types if truly global
```

Feature domain types should live inside features.

Bad:

```text
src/types/employee-types.ts
src/types/billing-types.ts
src/types/workflow-types.ts
```

Good:

```text
src/features/employees/types/employee-types.ts
src/features/billing/types/billing-types.ts
src/features/workflows/types/workflow-types.ts
```

Do not create one giant `types.ts`.

---

# `src/styles` Rule

`src/styles` owns global CSS and design token CSS.

Recommended:

```text
src/styles/
  globals.css
  tokens.css
```

Rules:

```text
Global CSS must be minimal.
Tailwind and tokens are default.
Do not place feature-specific CSS here.
Do not add broad global overrides casually.
Do not use CSS files to bypass component variants.
```

Feature styling should usually live in component class names and variants.

---

# `src/assets` Rule

`src/assets` contains imported static assets.

Allowed:

```text
logos
illustrations
icons not from Lucide when custom
static images
```

Rules:

```text
Assets must be optimized.
Avoid large decorative images.
Use meaningful names.
Do not store sensitive files.
Do not place uploaded user content here.
Do not put mock documents here unless test/dev-only.
```

Product app screens should not depend on heavy decorative assets.

---

# `public` Rule

`public` contains static files served directly.

Allowed:

```text
favicon
robots.txt
static public images
manifest files
public metadata assets
```

Forbidden:

```text
secrets
private documents
mock customer data
unreviewed scripts
large unused assets
API config with secrets
```

Anything in `public` is publicly accessible.

---

# `src/test` Rule

`src/test` contains shared test infrastructure.

Recommended:

```text
src/test/
  render-with-providers.tsx
  create-test-query-client.ts
  test-router.tsx
  server.ts
  handlers/
  fixtures/
  mocks/
```

Rules:

```text
Test utilities must not be imported by production code.
Fixtures must be synthetic.
No real customer data.
No real tokens.
No production secrets.
```

Feature tests may be colocated with feature code.

---

# Test Placement Rule

Colocate tests near the unit when practical:

```text
employee-card.tsx
employee-card.test.tsx

map-employee-dto.ts
map-employee-dto.test.ts
```

Use feature `__tests__` for integration tests:

```text
features/deployments/__tests__/deploy-employee-flow.test.tsx
```

Do not put all tests in one unrelated global tests folder unless the project convention requires it.

---

# Forms Structure Rule

Feature forms should separate:

```text
schema
default values
form component
field groups
payload mapper
mutation hook
server error mapper
```

Recommended:

```text
features/deployments/
  forms/
    deploy-employee-form.tsx
    deploy-employee-default-values.ts
    deployment-review-section.tsx

  schemas/
    deploy-employee-schema.ts

  utils/
    to-deploy-employee-payload.ts

  mutations/
    use-deploy-employee-mutation.ts
```

Do not put schema, submit mutation, API call, and all field JSX in one giant file.

---

# Query Structure Rule

TanStack Query structure should be explicit:

```text
features/employees/queries/
  employee-query-keys.ts
  use-employees-query.ts
  use-employee-profile-query.ts
```

Rules:

```text
Query keys are centralized.
Query hooks are named with Query suffix.
Filters are included in keys.
Query hooks call feature API services.
Query hooks do not render UI.
```

Do not define query keys inside components.

---

# Mutation Structure Rule

Mutations should live in feature `mutations/`:

```text
features/deployments/mutations/
  use-deploy-employee-mutation.ts

features/knowledge-sources/mutations/
  use-sync-knowledge-source-mutation.ts
```

Rules:

```text
Mutation hooks call feature API services.
Mutation hooks invalidate/update relevant query caches.
Mutation payloads are typed.
High-risk mutations avoid optimistic success.
UI decides visible success/error handling unless architecture centralizes it.
```

Do not put raw mutation fetches inside components.

---

# API Boundary Structure Rule

Feature API services own endpoint knowledge.

Recommended:

```text
features/employees/api/
  employee-api.ts
  employee-dto.ts
```

`employee-api.ts` may export:

```ts
export async function listEmployees(filters: EmployeeFilters, signal?: AbortSignal): Promise<Employee[]>;
export async function getEmployee(employeeId: EmployeeId, signal?: AbortSignal): Promise<Employee>;
```

It may use:

```text
lib/api/api-client
schemas
DTO mappers
path builders
```

It must not use:

```text
React components
UI toasts
navigation
Zustand stores
form components
```

---

# DTO and Mapper Structure Rule

Backend DTOs and mappers belong near API boundaries.

Good:

```text
features/employees/api/employee-dto.ts
features/employees/utils/map-employee-dto.ts
```

or:

```text
features/employees/api/map-employee-dto.ts
```

if mapper is API-only.

Rules:

```text
DTO names may use backend terms only inside API boundary.
UI domain types must use Ariyo product terms.
Mappers prevent backend terms from leaking into components.
```

Forbidden in UI components:

```text
agent_runtime_status
tenant_id
embedding_job_status
celery_task_id
vector_index_status
```

---

# URL State Structure Rule

Feature URL state parsing should be centralized.

Good:

```text
features/employees/hooks/use-employee-filters-from-url.ts
features/marketplace/hooks/use-marketplace-filters-from-url.ts
features/ai-cost/hooks/use-ai-cost-date-range-from-url.ts
```

Rules:

```text
Search params must be parsed and validated.
Invalid params fall back safely.
URL state should not be copied into Zustand.
Query keys should use parsed URL state.
```

Do not scatter `searchParams.get(...) as Type` across components.

---

# Layout Structure Rule

App-level layouts belong in `src/app` or route-specific app folders.

Feature-specific page sections belong in feature components.

Good:

```text
src/app/app-shell.tsx
src/app/dashboard-layout.tsx
features/employees/components/employee-profile-layout.tsx
```

Rules:

```text
AppShell owns global navigation and frame.
Feature layouts own feature page composition.
Layouts should not fetch unrelated data.
Layouts should not contain feature business rules unless feature-owned.
```

---

# Naming Rule Summary

Use these naming conventions:

```text
Files and folders:
kebab-case

React components:
PascalCase

Hooks:
useSomething

Query hooks:
useSomethingQuery

Mutation hooks:
useSomethingMutation

Stores:
something-store.ts and useSomethingStore

Schemas:
something-schema.ts and somethingSchema

API files:
something-api.ts

Query keys:
something-query-keys.ts

Types:
something-types.ts

Utilities:
verb-object.ts or specific purpose name
```

Avoid vague names:

```text
component.tsx
helper.ts
utils.ts
data.ts
new.tsx
old.tsx
final.tsx
misc.ts
```

---

# Import Direction Rule

Imports must flow from higher-level modules to lower-level modules.

Recommended direction:

```text
app
→ features
→ components/ariyo
→ components/ui
→ lib
```

Allowed:

```text
features import shared components and lib utilities
app imports feature pages
components/ariyo imports components/ui
components/ui imports lib/utils
```

Forbidden:

```text
components/ui imports features
lib imports features
shared hooks import feature queries
stores import components
API services import React components
schemas import UI
```

Import direction defines architecture.

---

# Absolute Import Rule

Use `@/` alias for cross-folder imports.

Good:

```ts
import { Button } from "@/components/ui/button";
import { useEmployeesQuery } from "@/features/employees/queries/use-employees-query";
```

Avoid:

```ts
import { Button } from "../../../../components/ui/button";
```

Relative imports are acceptable for local siblings:

```ts
import { employeeSchema } from "./employee-schema";
```

Do not use inconsistent aliases.

---

# Barrel File Rule

Barrel files are allowed only when controlled.

Good small public API:

```ts
export { EmployeeStatusBadge } from "./components/employee-status-badge";
export type { EmployeeId } from "./types/employee-types";
```

Bad:

```ts
export * from "./api";
export * from "./components";
export * from "./queries";
export * from "./utils";
```

Large barrels hide dependencies and create circular imports.

Use them sparingly.

---

# Cross-Feature Dependency Rule

Features should be mostly independent.

Cross-feature imports are allowed only when:

```text
the imported item is part of the source feature public API
the dependency represents a real product relationship
the shared code cannot belong in a lower-level shared module
```

Bad:

```ts
import { billingErrorCopy } from "@/features/billing/utils/billing-error-copy";
```

from employees feature.

Good:

```ts
import type { OrganizationId } from "@/features/organization";
```

if exposed publicly.

Avoid feature spaghetti.

---

# Shared Code Promotion Rule

Do not move code to shared too early.

Move to shared only when:

```text
real reuse exists
API is stable
component is product-generic
business rules are not feature-specific
accessibility contract is clear
styling variants are semantic
```

Premature sharing creates weak abstractions.

Duplication is acceptable temporarily when product meaning is still changing.

---

# New Feature Creation Checklist

When Codex creates a new feature, it must define:

```text
feature folder name using product language
page file if route-backed
API boundary if server-backed
query keys if data is fetched
query hooks if data is read
mutation hooks if server state changes
schemas for forms/API/URL params when needed
types owned by feature
components owned by feature
forms owned by feature
utils/mappers when needed
tests for critical logic
public index exports only if needed
```

Do not create a feature as one giant page component.

---

# New File Creation Checklist

Before creating a new file, ask:

```text
Does this responsibility already exist?
Is this file feature-specific or shared?
Does the name reveal product meaning?
Is the file in the correct layer?
Will this file stay focused?
Will other files need to import it?
Should it be public or private?
Is this abstraction justified?
```

Do not create files with vague names.

Do not dump new logic into the closest existing file.

---

# Refactoring Structure Rule

Refactor structure when you see:

```text
giant components
feature logic in shared folders
shared components importing feature code
API calls in UI components
schemas inside components
query keys in pages
stores with server data
utils.ts dumping grounds
cross-feature deep imports
circular dependencies
mock data in production paths
```

Refactoring is required when structure hides ownership.

---

# Generated Code Rule

AI-generated code must be placed correctly on first attempt.

Codex must not:

```text
create component.tsx
create helpers.ts dumping grounds
put everything in a page
put feature code in shared components
put API calls in components
create default exports randomly
create unowned global types
create temporary files and leave them
```

AI-generated code should improve architecture, not bypass it.

---

# Backend Integration Readiness Rule

Ariyo backend will use:

```text
Python
Django
FastAPI
Celery
Redis
PostgreSQL
```

Frontend structure must keep backend details behind API boundaries.

Backend terms may exist in:

```text
feature api DTO files
feature API mapper files
low-level API error handling
```

Backend terms must not appear in:

```text
UI component names
user-facing copy
frontend route names
shared product components
status badges visible to users
```

Map backend language to Ariyo product language.

---

# Environment and Config Structure Rule

Config belongs in `src/lib/config`.

Recommended:

```text
src/lib/config/
  app-config.ts
  env-schema.ts
```

Rules:

```text
Validate env variables.
Do not access import.meta.env in feature files.
Do not put secrets in frontend env.
Do not hardcode API URLs in feature services.
```

Frontend config is public.

---

# Security Structure Rule

Security-sensitive code must be centralized.

Examples:

```text
auth client → lib/auth
API auth behavior → lib/api
permission queries → feature/organization or feature/members
safe storage wrappers → lib/storage
URL validation → feature hooks/schemas
error normalization → lib/errors or feature error mappers
```

Do not scatter security logic across components.

---

# Production Cleanup Rule

Before finalizing structure, remove:

```text
temporary files
unused folders
unused exports
old versions
backup files
mock data imports
debug routes
console-only utilities
prototype components
empty architecture folders
```

Version control is for history.

The codebase should not contain abandoned drafts.

---

# Project Structure Review Checklist

Before shipping, verify:

```text
Is app-level code in src/app?
Are shared primitives in components/ui?
Are reusable Ariyo components in components/ariyo?
Is feature-specific code inside features?
Are feature folders named with product language?
Are API calls behind feature API boundaries?
Are query hooks in feature queries?
Are mutation hooks in feature mutations?
Are schemas outside components?
Are forms organized separately when complex?
Are URL params parsed in feature hooks?
Are stores scoped correctly?
Are global stores only for shared client UI?
Are utilities specific and pure?
Are test utilities separated from production code?
Are imports flowing in the correct direction?
Are feature internals private?
Are public exports intentional?
Are barrels controlled?
Are circular dependencies avoided?
Are mock data and temporary files absent?
```

If any answer is no, refactor before shipping.

---

# Project Structure Decision Tree

Ask:

### Is this global app composition?

Put it in `src/app`.

### Is this a low-level shadcn/Radix primitive?

Put it in `src/components/ui`.

### Is this reusable Ariyo product UI?

Put it in `src/components/ariyo`.

### Is this specific to employees, billing, workflows, knowledge sources, marketplace, or another domain?

Put it in that feature.

### Does this talk to backend endpoints?

Put it in feature `api/` and use `lib/api`.

### Does this fetch server data?

Put it in feature `queries/`.

### Does this change server data?

Put it in feature `mutations/`.

### Is this validation?

Put it in feature `schemas/`.

### Is this a production form?

Put form component in feature `forms/` or feature `components/` depending on complexity, and schema in `schemas/`.

### Is this shared pure infrastructure?

Put it in `src/lib`.

### Is this shared generic hook?

Put it in `src/hooks`.

### Is this feature-specific hook?

Put it in feature `hooks/`.

### Is this test-only?

Put it near tests or in `src/test`.

---

# Forbidden Project Structure Patterns

Never ship:

```text
src/components/employee-card.tsx
src/components/billing-plan-card.tsx
src/components/workflow-builder.tsx
src/utils.ts
src/helpers.ts
src/types.ts with unrelated global types
src/api.ts with all endpoints
src/hooks/use-employees-query.ts for feature query
feature API calls inside pages
schemas inside components
query keys inside components
Zustand stores with server state
shared components importing feature modules
components/ui importing product types
lib importing features
feature internals imported by another feature
large export * barrels
component.tsx
new-component.tsx
old-dashboard.tsx
backup files
mock data in production folders
backend jargon in UI file names
empty folders created for symmetry
one giant feature page with all logic
```

---

# Ariyo Project Structure Golden Rule

The correct location of code should be obvious from its product responsibility.

---

# Senior Project Structure Rule

Do not organize Ariyo for the first implementation.

Organize Ariyo for the tenth feature, the third refactor, the next engineer, and the next AI agent.

---

# Final Rule

Ariyo project structure is production-ready only when app composition, shared UI, feature ownership, API boundaries, state, forms, schemas, queries, mutations, utilities, tests, assets, imports, and exports are organized by clear responsibility; feature boundaries are respected; shared code is truly shared; backend details are isolated; and future humans and AI agents can safely extend the product without guessing where code belongs.
