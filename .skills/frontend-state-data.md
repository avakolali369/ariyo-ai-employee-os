# Ariyo Frontend State & Data Skill

Version: 1.0.0  
Product: Ariyo  
Purpose:  
Act as a Senior Frontend State Architect, TanStack Query Specialist, Zustand Guardian, API Boundary Reviewer, and Data Flow Reliability Engineer for Ariyo.

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

If conflicts exist:

- frontend-design.md wins for product philosophy and visual experience.
- frontend-components.md wins for component behavior and reusable UI contracts.
- frontend-responsive.md wins for responsive behavior.
- frontend-motion.md wins for motion and transition behavior.
- frontend-copywriting.md wins for user-facing language.
- coding-standards.md wins for implementation quality, TypeScript, React, state, data, forms, testing, and guardrails.
- project-structure.md wins for repository placement and module boundaries.
- frontend-state-data.md wins for practical state ownership, data fetching architecture, query/mutation design, API boundaries, cache behavior, URL state, and client-state decisions.

Code that fetches data correctly but stores it in the wrong place is not production-ready.

Code that appears fast but creates stale, duplicated, unsafe, or confusing state is not acceptable.

---

# Purpose

This skill defines Ariyo's official frontend state and data architecture.

It governs:

```text
server state
client state
local UI state
URL state
form-adjacent state
Zustand stores
TanStack Query queries
TanStack Query mutations
query keys
API services
DTO mapping
cache invalidation
optimistic updates
polling
background refresh
pagination
filters
search
permissions
organization boundaries
state reset
state persistence
error/loading/empty/success data states
```

Ariyo must have predictable data flow.

Users must never see stale, fake, cross-organization, or misleading state because frontend code used the wrong state owner.

---

# Core State & Data Principle

Every state value must have one correct owner.

Use:

```text
TanStack Query:
server state, API data, cache, refetch, polling, mutations

React local state:
small component-owned UI state

URL state:
shareable, bookmarkable, navigational state

React Hook Form:
form values, validation lifecycle, dirty/touched state

Zustand:
shared client-only state that cannot stay local and is not server, form, or URL state

Derived values:
computed values that should not be stored
```

Do not use one tool for every state problem.

Correct ownership is more important than convenience.

---

# State Ownership Decision Tree

Before creating state, ask:

```text
Does this value come from the backend?
→ TanStack Query

Does this value change backend data?
→ TanStack Query mutation

Is this a form field or form lifecycle state?
→ React Hook Form

Should this state survive refresh, support browser back, or be shareable?
→ URL state

Is this temporary and used by one component or close subtree?
→ local state

Is this shared across distant components and client-owned?
→ Zustand

Can this be calculated from existing state/data?
→ derived value, not stored state

Is this sensitive, organization-specific, or permission-related?
→ be conservative; validate, scope, or server-own it
```

If the correct owner is unclear, do not create global state.

Default to local, derived, URL, form, or query ownership before Zustand.

---

# State Categories

Ariyo recognizes these state categories:

```text
Server State:
Data owned by backend.

Local UI State:
Temporary state owned by one component or small subtree.

URL State:
State represented in route params or search params.

Form State:
Values, validation, dirty state, submit state.

Shared Client State:
Client-only state shared across distant components.

Derived State:
Values computed from existing state or data.

Persistent Client Preference:
Safe, non-sensitive UI preference stored locally.

High-Trust Process State:
Deployment, sync, billing, workflow publish, permission changes.
```

Each category has different rules.

---

# Server State Rule

Server state belongs to TanStack Query.

Server state includes:

```text
employees
marketplace employees
employee profiles
knowledge sources
knowledge sync status
workflows
workflow publish state
integrations
channels
organization settings
members
roles
permissions
billing plans
invoices
subscription state
AI cost data
analytics
activity feeds
deployment status
file processing status
```

Do not store server state in:

```text
useState
useReducer
Zustand
localStorage
sessionStorage
URL state
form state
```

unless the value is a temporary draft or explicit optimistic cache update managed through TanStack Query.

---

# Server State Anti-Pattern

Bad:

```tsx
const [employees, setEmployees] = useState<Employee[]>([]);
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  setIsLoading(true);

  fetch("/api/employees")
    .then((response) => response.json())
    .then(setEmployees)
    .finally(() => setIsLoading(false));
}, []);
```

Good:

```tsx
const employeesQuery = useEmployeesQuery(filters);
```

TanStack Query owns request lifecycle, cache, deduplication, cancellation, retry, refetch, and stale state.

---

# Local UI State Rule

Use local state for state that is:

```text
temporary
component-owned
small in scope
not shareable
not server-owned
not form-owned
not route-owned
not needed after navigation
```

Good local state examples:

```text
dialog open state
popover open state
dropdown open state
local accordion expanded item
small card tab state
local preview toggle
copied-to-clipboard state
local filter draft before applying to URL
local mobile drawer state when owned by one layout
selected row state for a small table
```

Local state should remain local until real sharing pressure exists.

---

# Local UI State Example

Good:

```tsx
function KnowledgeSourceActions({ source }: KnowledgeSourceActionsProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={setMenuOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={`Open actions for ${source.name}`}
        >
          <MoreHorizontalIcon aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>Retry sync</DropdownMenuItem>
        <DropdownMenuItem>View details</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

This does not need Zustand.

---

# URL State Rule

Use URL state for state that should be:

```text
shareable
bookmarkable
restorable after refresh
browser-history aware
visible in navigation
meaningful to page content
safe to expose in URL
```

Use URL state for:

```text
page-level filters
search query
sort order
pagination
page size when user-controlled
dashboard date range
analytics period
page-level tabs
view mode
selected detail in master-detail route
safe entity IDs in route params
```

Do not put sensitive values in URL.

---

# URL State Examples

Good:

```text
/employees?status=active&sort=last_active&page=2

/marketplace?category=sales&query=lead

/analytics?range=last_30_days

/knowledge-sources?status=sync_failed

/workflows?view=grid
```

Bad:

```text
?token=...
?payload={...}
?billingData=...
?knowledgeContent=...
?permissions=admin
```

URLs are shareable, logged, and user-editable.

---

# URL Parsing Rule

URL params are untrusted.

Bad:

```tsx
const status = searchParams.get("status") as EmployeeStatus;
```

Good:

```tsx
const status = parseEmployeeStatusParam(searchParams.get("status"));
```

Example:

```ts
function parseEmployeeStatusParam(value: string | null): EmployeeStatus | null {
  const result = employeeStatusSchema.safeParse(value);
  return result.success ? result.data : null;
}
```

Invalid URL values must fall back safely.

---

# URL Hook Rule

Feature URL state must be centralized in hooks.

Good files:

```text
features/employees/hooks/use-employee-filters-from-url.ts
features/marketplace/hooks/use-marketplace-filters-from-url.ts
features/dashboard/hooks/use-dashboard-date-range-from-url.ts
features/workflows/hooks/use-workflow-view-from-url.ts
```

Avoid scattering this across components:

```tsx
searchParams.get("status") as EmployeeStatus;
searchParams.get("page") as unknown as number;
```

URL parsing is product logic and must be reusable.

---

# URL Update Rule

Updating one URL param must preserve unrelated params unless intentionally reset.

Good:

```ts
function setEmployeeStatusFilter(nextStatus: EmployeeStatus | null) {
  setSearchParams((currentParams) => {
    const nextParams = new URLSearchParams(currentParams);

    if (nextStatus) {
      nextParams.set("status", nextStatus);
    } else {
      nextParams.delete("status");
    }

    nextParams.set("page", "1");

    return nextParams;
  });
}
```

When filters change, reset pagination when appropriate.

Do not accidentally clear search, sort, tab, or date range.

---

# Form State Rule

Form values belong to React Hook Form.

Do not store real form state in Zustand or general local state.

Bad:

```ts
type DeployEmployeeStore = {
  channelId: string;
  replyMode: string;
  knowledgeSourceIds: string[];
};
```

Good:

```tsx
const form = useForm<DeployEmployeeFormValues>({
  resolver: zodResolver(deployEmployeeSchema),
  defaultValues: deployEmployeeDefaultValues,
});
```

Zustand may hold form-like drafts only when the flow spans distant components and has a clear reset lifecycle.

---

# Derived State Rule

Do not store values that can be calculated.

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
const activeEmployees = employees.filter(
  (employee) => employee.status === "active"
);
```

Use `useMemo` only when the calculation is meaningfully expensive or needed for stable props.

---

# Zustand Role

Zustand is for shared client-owned state.

Use Zustand only when state is:

```text
client-owned
shared across distant components
not server data
not form state
not URL state
not derived
not temporary enough to stay local
```

Approved examples:

```text
command palette open/query state
sidebar collapsed state
workspace switcher UI state
safe UI preferences
client-only onboarding hint dismissal
workflow builder draft when spanning distant components
app shell drawer state when multiple distant triggers exist
```

Zustand is not a server cache.

---

# Zustand Store Rule

Zustand stores must be focused.

Good:

```ts
type CommandPaletteStore = {
  isOpen: boolean;
  query: string;
  open: () => void;
  close: () => void;
  setQuery: (query: string) => void;
  reset: () => void;
};

export const useCommandPaletteStore = create<CommandPaletteStore>((set) => ({
  isOpen: false,
  query: "",
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false, query: "" }),
  setQuery: (query) => set({ query }),
  reset: () => set({ isOpen: false, query: "" }),
}));
```

Bad:

```ts
type AppStore = {
  employees: Employee[];
  billingPlan: BillingPlan | null;
  filters: EmployeeFilters;
  formValues: Record<string, unknown>;
  token: string;
  sidebarOpen: boolean;
};
```

Giant global stores are forbidden.

---

# Zustand Selector Rule

Always use selectors.

Good:

```tsx
const isCommandPaletteOpen = useCommandPaletteStore(
  (state) => state.isOpen
);

const closeCommandPalette = useCommandPaletteStore(
  (state) => state.close
);
```

Bad:

```tsx
const commandPaletteStore = useCommandPaletteStore();
```

Full-store reads cause unnecessary re-renders.

---

# Zustand Persistence Rule

Do not persist Zustand state by default.

Persistence is allowed only for safe UI preferences:

```text
sidebar collapsed
theme preference if client-owned
dismissed non-critical hints
dashboard density preference if safe
```

Never persist:

```text
auth tokens
billing data
permissions
employee data
knowledge source content
customer messages
integration secrets
deployment payloads
sync status
server data
```

Persisted data must be validated and resettable.

---

# State Reset Rule

Client state must reset when context changes.

Reset or rescope state on:

```text
logout
organization switch
workspace switch
permission change
entity ID change
flow completion
flow cancellation
successful create/edit when appropriate
```

Examples:

```text
clear selected employee on organization switch
reset workflow builder draft after publish
clear command palette query on close
reset form after successful create
reset page number after filter change
clear selected rows after bulk action
```

Stale client state creates trust issues.

---

# Organization Boundary Rule

Organization-specific state must be scoped by organization or reset when organization changes.

Server query keys must include organization ownership when needed.

Bad:

```ts
queryKey: ["employees", filters]
```

if employees are organization-specific and the active organization can change.

Good:

```ts
queryKey: ["organizations", organizationId, "employees", filters]
```

or equivalent feature query keys:

```ts
employeeQueryKeys.list({ organizationId, filters })
```

Never show previous organization data after switching organizations.

---

# TanStack Query Role

TanStack Query owns:

```text
server-state cache
request deduplication
loading state
error state
success state
background refresh
stale time
retry
request cancellation
polling
mutation lifecycle
cache invalidation
optimistic updates when safe
```

Do not manually recreate these features with `useState` and `useEffect`.

---

# Query Hook Rule

Every reusable data fetch must have a typed query hook.

Good:

```ts
export function useEmployeesQuery(filters: EmployeeFilters) {
  return useQuery({
    queryKey: employeeQueryKeys.list(filters),
    queryFn: ({ signal }) => employeeApi.listEmployees(filters, signal),
  });
}
```

Components should consume query hooks, not raw API calls.

---

# Query Hook Naming Rule

Query hooks must end with `Query`.

Good:

```text
useEmployeesQuery
useEmployeeProfileQuery
useKnowledgeSourcesQuery
useKnowledgeSourceHealthQuery
useWorkflowsQuery
useAiCostQuery
useBillingSummaryQuery
useOrganizationPermissionsQuery
```

Avoid:

```text
useData
useFetch
useApi
useEmployees
getEmployees
loadEmployees
```

The name must reveal server-state ownership.

---

# Query Key Rule

Query keys must be centralized and typed.

Good:

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

Bad:

```ts
["data"]
["employee"]
["employees"]
["employee-list"]
```

Unstructured keys create stale data and invalidation bugs.

---

# Query Key Completeness Rule

Every value that affects request data must be in the query key.

Include:

```text
organization ID
entity ID
filters
search query
sort
pagination
date range
view mode if it changes backend response
permission-sensitive scope when applicable
```

Bad:

```ts
queryKey: ["employees"]
```

while filters affect the request.

Good:

```ts
queryKey: employeeQueryKeys.list({ organizationId, filters })
```

Missing key inputs cause stale and incorrect data.

---

# Query Key Stability Rule

Query key values must be serializable and stable.

Good:

```ts
employeeQueryKeys.list({
  status,
  query,
  sort,
  page,
});
```

Avoid:

```ts
employeeQueryKeys.list({
  date: new Date(),
  callback: handleClick,
  element: <div />,
});
```

Normalize query key inputs before use.

---

# API Boundary Rule

All API calls must go through typed service boundaries.

Allowed:

```text
features/*/api/*
features/*/queries/*
features/*/mutations/*
lib/api-client.ts
```

Forbidden in UI components:

```text
raw fetch
raw endpoint strings
manual headers
response parsing
DTO mapping
auth handling
backend error handling
retry logic
cache invalidation
```

Components render product state.

They do not manage transport.

---

# API Service Rule

Feature API services own endpoint knowledge.

Good:

```ts
export async function listEmployees(
  filters: EmployeeFilters,
  signal?: AbortSignal
): Promise<Employee[]> {
  const response = await apiClient<unknown>(
    buildEmployeeListPath(filters),
    { signal }
  );

  return employeeListSchema.parse(response);
}
```

Bad:

```tsx
const employees = await fetch(`/api/employees?status=${status}`)
  .then((response) => response.json());
```

inside a component.

---

# DTO Mapping Rule

Backend DTOs must be mapped to product domain types at the boundary.

Allowed in API boundary:

```text
agent_runtime_status
tenant_id
embedding_job_status
celery_task_id
```

Forbidden in UI components:

```text
agent_runtime_status
tenant_id
embedding_job_status
celery_task_id
vector_index_status
```

Good:

```ts
function mapEmployeeDto(dto: EmployeeDto): Employee {
  return {
    id: toEmployeeId(dto.id),
    organizationId: toOrganizationId(dto.tenant_id),
    name: dto.display_name,
    status: mapEmployeeStatus(dto.agent_runtime_status),
  };
}
```

UI uses Ariyo product language.

---

# Runtime Validation Rule

API responses are untrusted.

Use Zod parsing for important responses:

```text
permissions
billing
deployment
knowledge source status
organization settings
member roles
workflow definitions
integration status
AI cost data
analytics
```

Bad:

```ts
return response as BillingSummary;
```

Good:

```ts
return billingSummarySchema.parse(response);
```

Invalid critical data should fail safely with recoverable UI.

---

# Query Enabled Rule

Use `enabled` when a required input is missing.

Good:

```ts
export function useEmployeeProfileQuery(employeeId: EmployeeId | null) {
  return useQuery({
    queryKey: employeeId
      ? employeeQueryKeys.detail(employeeId)
      : employeeQueryKeys.detailPlaceholder(),
    queryFn: ({ signal }) => {
      if (!employeeId) {
        throw new Error("Missing employee ID");
      }

      return employeeApi.getEmployee(employeeId, signal);
    },
    enabled: Boolean(employeeId),
  });
}
```

Better: validate route params before calling the hook.

Do not fetch with empty strings or fake IDs.

---

# Dependent Query Rule

Dependent queries must wait for required data.

Good:

```tsx
const employeeQuery = useEmployeeProfileQuery(employeeId);

const employeeActivityQuery = useEmployeeActivityQuery(employeeId, {
  enabled: Boolean(employeeId),
});
```

Do not fire requests with invalid or missing IDs.

---

# Parallel Query Rule

Independent data should load in parallel.

Good:

```tsx
const summaryQuery = useDashboardSummaryQuery(filters);
const aiCostQuery = useAiCostQuery(filters);
const activityQuery = useActivityFeedQuery(filters);
```

Avoid unnecessary waterfalls when data does not depend on previous responses.

---

# Query Composition Rule

When a surface uses multiple queries, create a composition hook if it clarifies orchestration.

Good:

```ts
export function useDashboardData(filters: DashboardFilters) {
  const summaryQuery = useDashboardSummaryQuery(filters);
  const aiCostQuery = useAiCostQuery(filters);
  const activityQuery = useActivityFeedQuery(filters);

  return {
    summaryQuery,
    aiCostQuery,
    activityQuery,
    isInitialLoading:
      summaryQuery.isLoading ||
      aiCostQuery.isLoading ||
      activityQuery.isLoading,
    hasAnyError:
      summaryQuery.isError ||
      aiCostQuery.isError ||
      activityQuery.isError,
  };
}
```

Do not hide all failures behind one vague state if sections can recover independently.

---

# Query Select Rule

Use `select` for lightweight query-level derivation.

Good:

```ts
export function useActiveEmployeesQuery(filters: EmployeeFilters) {
  return useQuery({
    queryKey: employeeQueryKeys.list(filters),
    queryFn: ({ signal }) => employeeApi.listEmployees(filters, signal),
    select: (employees) =>
      employees.filter((employee) => employee.status === "active"),
  });
}
```

Use API mappers for backend-to-domain mapping.

Use `select` for product/UI derivation tied to query data.

Do not mutate query data inside `select`.

---

# Stale Time Rule

Stale time must match product meaning.

Suggested guidance:

```text
marketplace employees:
medium stale time

employee profile:
short to medium stale time

permissions:
short stale time

deployment status:
short stale time or polling while deploying

knowledge source sync:
short stale time or polling while syncing

billing:
short stale time

analytics / AI cost:
medium stale time with freshness context when useful

static reference data:
long stale time
```

Do not set `staleTime: Infinity` for dynamic business data unless explicitly safe.

---

# Background Refresh Rule

Background refresh must not erase visible content.

Bad:

```tsx
if (query.isFetching) {
  return <EmployeeListSkeleton />;
}
```

Good:

```tsx
if (query.isLoading) {
  return <EmployeeListSkeleton />;
}

return (
  <section>
    {query.isFetching ? (
      <p className="text-sm text-muted-foreground">
        Refreshing employees...
      </p>
    ) : null}

    <EmployeeList employees={query.data ?? []} />
  </section>
);
```

Initial loading and background refresh are different states.

---

# Mutation Hook Rule

Every reusable server-changing action must have a mutation hook.

Good:

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

Bad:

```tsx
await fetch("/api/employees/deploy", {
  method: "POST",
  body: JSON.stringify(payload),
});
```

inside a button handler.

---

# Mutation Naming Rule

Mutation hooks must end with `Mutation`.

Good:

```text
useDeployEmployeeMutation
usePauseEmployeeMutation
useSyncKnowledgeSourceMutation
useInviteMemberMutation
useCreateWorkflowMutation
usePublishWorkflowMutation
useUpdateBillingDetailsMutation
```

Avoid:

```text
useSave
useSubmit
useAction
usePostData
useApiMutation
```

Mutation names must reveal product behavior.

---

# Mutation Payload Rule

Mutation payloads must be typed and product-specific.

Good:

```ts
type DeployEmployeePayload = {
  employeeId: EmployeeId;
  channelId: ChannelId;
  replyMode: ReplyMode;
  knowledgeSourceIds: KnowledgeSourceId[];
};
```

Bad:

```ts
type Payload = Record<string, unknown>;
```

High-trust mutations require explicit contracts.

---

# Mutation Pending Rule

Use mutation state for pending behavior.

Good:

```tsx
<Button disabled={deployEmployeeMutation.isPending}>
  {deployEmployeeMutation.isPending
    ? "Deploying employee..."
    : "Deploy employee"}
</Button>
```

Do not duplicate mutation pending state locally.

Bad:

```tsx
const [isDeploying, setDeploying] = useState(false);
```

when a mutation already owns pending state.

---

# Mutation Success Rule

Success must wait for server confirmation.

Bad:

```tsx
toast.success("Employee activated.");
deployEmployeeMutation.mutate(payload);
```

Good:

```tsx
deployEmployeeMutation.mutate(payload, {
  onSuccess: () => {
    toast.success("Employee activated.");
  },
});
```

Do not fake deployment, sync, billing, publish, or permission success.

---

# Mutation Error Rule

Mutation errors must be recoverable and product-specific.

Good:

```tsx
deployEmployeeMutation.mutate(payload, {
  onError: (error) => {
    setFormError(toAriyoError(error));
  },
});
```

High-risk errors require safe-state copy.

Examples:

```text
Deployment failed. Your setup was saved.

Could not sync source. The source remains connected.

Could not update billing details. No billing changes were made.
```

Do not show raw backend errors.

---

# Cache Invalidation Rule

Mutations must invalidate or update affected queries.

Examples:

```text
Hire employee:
invalidate marketplace list, employee list, employee detail if returned

Deploy employee:
invalidate employee detail, employee lists, dashboard, activity feed

Sync knowledge source:
invalidate source detail, source list, employee readiness if affected

Invite member:
invalidate members list and permissions if relevant

Update billing:
invalidate billing summary, plan, invoices if relevant

Publish workflow:
invalidate workflow detail, workflow list, activity feed
```

Do not leave stale UI after successful mutation.

---

# Invalidation Scope Rule

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

Over-invalidation causes flicker and network waste.

Under-invalidation causes stale product state.

---

# Optimistic Update Rule

Optimistic updates are forbidden by default for high-trust actions.

Do not optimistically update:

```text
billing changes
deployment activation
knowledge source ready state
permission changes
destructive actions
integration connection
workflow publish
member removal
subscription changes
```

Optimistic updates are allowed only for safe, reversible, low-risk actions:

```text
dismiss banner
collapse sidebar
safe UI preference
toggle local favorite when reversible
```

If optimistic update is used, implement rollback.

---

# Polling Rule

Polling is allowed for real backend processes.

Good polling cases:

```text
deployment status
knowledge source sync
file processing
integration connection verification
report generation
```

Polling must:

```text
have a stop condition
use reasonable interval
stop on final status
stop on unmount
handle error
avoid backend overload
show honest user-facing status
```

Do not poll forever.

---

# Request Cancellation Rule

Pass `signal` through query functions and API services when possible.

Good:

```ts
export function useEmployeesQuery(filters: EmployeeFilters) {
  return useQuery({
    queryKey: employeeQueryKeys.list(filters),
    queryFn: ({ signal }) => employeeApi.listEmployees(filters, signal),
  });
}
```

Service:

```ts
export function listEmployees(
  filters: EmployeeFilters,
  signal?: AbortSignal
) {
  return apiClient(buildEmployeeListPath(filters), { signal });
}
```

Cancellation prevents stale work and improves performance.

---

# Loading State Rule

Use query and mutation states correctly.

```text
query.isLoading:
first load without cached data

query.isFetching:
any fetch, including background refresh

query.isError:
fetch failed

mutation.isPending:
server-changing action in progress
```

Do not treat every fetching state as full loading.

Do not create manual loading flags for query-owned data.

---

# Empty State Rule

Empty state appears only after successful load with no results.

Good:

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

Empty is not loading.

Empty is not error.

---

# Filtered Empty State Rule

Filtered empty state must differ from first-use empty state.

First-use:

```text
No employees yet.
Hire your first employee from the marketplace to start automating customer work.
```

Filtered:

```text
No employees match these filters.
Clear filters or adjust your search.
```

The state must match the cause.

---

# Error State Rule

Query and mutation errors must use normalized Ariyo errors.

Recommended shape:

```ts
type AriyoErrorCode =
  | "network_error"
  | "permission_denied"
  | "validation_error"
  | "not_found"
  | "rate_limited"
  | "server_error"
  | "unknown";

type AriyoError = {
  code: AriyoErrorCode;
  message: string;
  recoveryAction?:
    | "retry"
    | "review_setup"
    | "check_permissions"
    | "contact_support";
};
```

UI must not render raw `Error` objects or backend response bodies.

---

# Permission Data Rule

Permissions are server state.

Use query hooks:

```tsx
const permissionsQuery = useOrganizationPermissionsQuery(organizationId);
```

Do not store permissions in Zustand.

Do not assume permission data remains valid forever.

Permission-denied UI must be explicit:

```text
Only admins can deploy employees.
```

Permission denied is not empty state.

---

# Billing Data Rule

Billing data is high-trust server state.

Rules:

```text
billing queries must be typed
billing mutations must not be optimistic by default
success must wait for server confirmation
billing errors must include safe-state copy
billing data must not be stored in localStorage or Zustand
payment SDKs must not load globally
```

Good failure:

```text
Could not update billing details. No billing changes were made.
```

Billing must preserve trust.

---

# Deployment Data Rule

Deployment status is high-trust server state.

Rules:

```text
deploy mutation must be typed
pending state comes from mutation
actual deployment status comes from server query
active state must be server-confirmed
poll while deploying if needed
polling must stop on final state
failure must show safe-state copy
```

Forbidden:

```tsx
setEmployeeStatus("active");
```

before server confirms activation.

---

# Knowledge Source Data Rule

Knowledge source readiness is high-trust server state.

Rules:

```text
sync mutation must be typed
syncing state may come from mutation or server process status
ready state must come from server
last synced must come from server
sync failure must be recoverable
technical terms must be hidden
```

Forbidden UI terms:

```text
embedding
vector index
ingestion
Celery task
```

Use product language:

```text
Syncing source...
Source ready.
Sync failed. Retry sync.
```

---

# Workflow Data Rule

Workflow saved state is server state.

Workflow draft state may be:

```text
React Hook Form:
form-like workflow settings

useReducer:
complex local builder transitions

Zustand:
client-only draft spanning distant builder components, when justified

TanStack Query:
saved workflow detail, list, publish status
```

Saved workflow data and unsaved draft state must be clearly separated.

Do not mix them casually.

---

# Analytics and AI Cost Data Rule

Analytics and AI cost data must be honest.

Rules:

```text
date range belongs in URL state
query key includes date range
server should aggregate when possible
chart data transformation is memoized
empty state differs from zero value
not-enough-data state exists
stale/freshness context appears when useful
estimated values are labeled as estimates when applicable
```

Do not fabricate trends.

Do not show stale data as fresh.

---

# Pagination Rule

Pagination state should usually be URL state.

Good:

```text
?page=2&pageSize=25
```

Rules:

```text
invalid page falls back to 1
changing filters resets page to 1
page size is validated
query key includes page and page size
server-side pagination preferred for large datasets
```

Do not store page in Zustand for route-level tables.

---

# Search Rule

Search that affects page results should usually be URL state.

Use local draft state for typing and debounce.

Good:

```tsx
const [draftQuery, setDraftQuery] = useState(queryFromUrl);
const debouncedQuery = useDebouncedValue(draftQuery, 300);
```

Then update URL state.

Do not request on every keystroke without debounce or submit behavior.

---

# Table State Rule

For route-level tables:

```text
filters:
URL state

sort:
URL state

pagination:
URL state

row selection:
local state unless shareable

column visibility:
local or safe persisted preference if product-approved
```

Use TanStack Table for complex table state.

Do not invent ad hoc table state systems.

---

# Data Transformation Rule

Data transformation location must match purpose.

```text
DTO to domain:
API boundary mapper

API response validation:
API service/schema

query-level filtering/selection:
TanStack Query select

view-specific formatting:
component utility or display component

large chart/table data transform:
memoized feature utility

form values to payload:
payload mapper
```

Do not hide heavy transformations inside JSX.

---

# Cache as Source of Truth Rule

TanStack Query cache is the source of truth for server data.

Do not mirror query data into Zustand or local state.

Bad:

```tsx
const employeesQuery = useEmployeesQuery(filters);
const setEmployees = useEmployeeStore((state) => state.setEmployees);

useEffect(() => {
  if (employeesQuery.data) {
    setEmployees(employeesQuery.data);
  }
}, [employeesQuery.data, setEmployees]);
```

Good:

```tsx
const employeesQuery = useEmployeesQuery(filters);
```

Use IDs or local selection state when needed.

---

# State Synchronization Rule

Avoid syncing state between systems.

Forbidden patterns:

```text
query data copied to Zustand
URL params copied to Zustand
props copied to state without draft lifecycle
form values copied to local state
mutation state copied to local loading state
server data copied to localStorage
```

Synchronization creates stale data and race conditions.

Prefer one source of truth.

---

# Race Condition Guardrail

High-risk flows must guard against race conditions.

Risks:

```text
organization switch during mutation
entity ID changes while query is loading
background refetch overwrites dirty form
double submit
out-of-order response
stale permission data
polling updates wrong entity
sync status shown for wrong source
```

Guard with:

```text
scoped query keys
entity IDs in payloads
pending disabled states
AbortSignal
organization reset
server confirmation
form dirty protection
safe error states
```

---

# State Persistence Guardrail

Persistent state must be safe.

Before persisting, ask:

```text
Is this sensitive?
Is this organization-specific?
Can it become stale?
Can it leak across users?
Can it break after schema change?
Is there a reset path?
Is it validated on read?
```

If uncertain, do not persist.

---

# Loading, Empty, Error, Success Contract

Every data-driven component must explicitly handle:

```text
loading
error
empty
success
```

When relevant:

```text
permission denied
not found
filtered empty
background refresh
partial failure
stale data
pending mutation
success confirmation
```

Do not build only the success path.

---

# Ariyo Feature Patterns

## Marketplace

State ownership:

```text
filters/search/sort/page:
URL state

employee catalog:
TanStack Query

hire mutation:
TanStack Mutation

hire pending:
mutation state

card hover/open state:
local state

hired/active state:
server-confirmed query data
```

Forbidden:

```text
local fake hired state as final truth
marketplace filters in Zustand
catalog data in localStorage
```

---

## Employee Profile

State ownership:

```text
employee ID:
route param, validated

profile data:
TanStack Query

tabs:
URL state if page-level

deployment dialog open:
local state

deployment status:
server query / mutation lifecycle

metrics and AI cost:
TanStack Query

activity feed:
TanStack Query / infinite query if needed
```

Do not block whole profile on secondary section failure when section-level recovery is possible.

---

## Deploy Employee

State ownership:

```text
form values:
React Hook Form

validation:
Zod

step state:
local state, reducer, or URL if shareable/recoverable

submit pending:
mutation state

actual deployment status:
server query

readiness requirements:
server query + derived state
```

Do not show active until server confirms.

---

## Knowledge Sources

State ownership:

```text
source list:
TanStack Query

source detail:
TanStack Query

source filters:
URL state

connect form:
React Hook Form + Zod

sync action:
mutation

sync status:
server query / polling

upload progress:
upload service or mutation state when available
```

Never fake `ready` state.

---

## Dashboard

State ownership:

```text
date range:
URL state

KPI data:
TanStack Query

AI cost data:
TanStack Query

chart local tooltip/hover:
local state

refreshing:
query.isFetching

not enough data:
derived from query data
```

Dashboards should degrade section by section.

---

## Billing

State ownership:

```text
billing plan:
TanStack Query

invoices:
TanStack Query

payment update:
mutation

billing tabs:
URL state if page-level

monthly/yearly UI toggle:
local or URL depending shareability
```

Never optimistic-update billing success by default.

---

# File Placement Contract

State and data files should follow project structure:

```text
features/<feature>/api/<feature>-api.ts
features/<feature>/queries/<feature>-query-keys.ts
features/<feature>/queries/use-<resource>-query.ts
features/<feature>/mutations/use-<action>-mutation.ts
features/<feature>/hooks/use-<feature>-filters-from-url.ts
features/<feature>/schemas/<resource>-schema.ts
features/<feature>/utils/map-<resource>-dto.ts
features/<feature>/utils/to-<action>-payload.ts
features/<feature>/stores/<feature>-store.ts
```

Shared infrastructure:

```text
lib/api-client.ts
lib/errors/to-ariyo-error.ts
lib/storage/*
lib/query/*
```

Do not place API calls, query keys, URL parsing, or DTO mapping inside UI components.

---

# Review Checklist

Before shipping state/data code, verify:

```text
Is every state value owned by the correct layer?
Is server state in TanStack Query?
Is form state in React Hook Form?
Is shareable state in URL?
Is Zustand only used for justified shared client state?
Are derived values not stored?
Are query keys centralized and complete?
Are organization boundaries included when needed?
Are URL params validated?
Are storage values validated?
Are API calls behind service boundaries?
Are API responses typed or parsed?
Are DTOs mapped before UI?
Are mutations typed?
Are mutation pending states used directly?
Are cache invalidations scoped correctly?
Are high-trust optimistic updates avoided?
Does polling have a stop condition?
Does background refresh preserve content?
Are loading, empty, error, and success handled?
Are permission states explicit?
Are billing/deployment/sync states server-confirmed?
Is sensitive data not stored or exposed?
```

If any answer is no, refactor.

---

# Forbidden State & Data Patterns

Never ship:

```text
server data stored in useState
server data stored in Zustand
query data copied into Zustand
URL state copied into Zustand
form values stored in Zustand by default
derived values stored as state
manual useEffect fetching for server data
raw fetch inside UI components
raw endpoints inside JSX files
untyped API responses
backend DTOs rendered directly
query keys scattered in components
query keys missing filters or organization scope
mutation payloads typed as Record<string, unknown>
duplicate local loading flags for query/mutation state
permission data in client global state
billing data in client storage
auth tokens in Zustand or localStorage
organization-specific state leaking across orgs
polling without stop condition
optimistic billing updates
optimistic deployment success
optimistic knowledge source ready state
invalid URL params cast as valid
storage values trusted without validation
large JSON blobs in URL
fake analytics data as real state
mock data mixed with production data
```

---

# Ariyo State & Data Golden Rule

State must have one truthful owner.

Server-confirmed product state must come from the server.

---

# Senior State & Data Rule

Do not make the UI feel fast by lying about data.

Make it feel fast by using correct ownership, caching, progressive loading, and honest feedback.

---

# Final Rule

Ariyo frontend state and data architecture is production-ready only when server state is owned by TanStack Query, API details are isolated behind typed boundaries, URL state is validated and shareable, local state stays local, Zustand is used sparingly for client-only shared state, cache invalidation is precise, high-trust states are server-confirmed, and users always see honest loading, empty, error, and success states without stale, duplicated, or unsafe data.
