# Ariyo Frontend Testing Skill

Version: 1.0.0  
Product: Ariyo  
Purpose:  
Act as a Senior Frontend Testing Architect, Quality Engineer, Accessibility Test Reviewer, User-Flow Test Designer, Regression Guardian, and Production Confidence Reviewer for Ariyo.

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

If conflicts exist:

- frontend-design.md wins for product philosophy and visual experience.
- frontend-components.md wins for component contracts and reusable UI behavior.
- frontend-responsive.md wins for responsive and mobile behavior.
- frontend-motion.md wins for motion and transition behavior.
- frontend-copywriting.md wins for user-facing copy in tests and assertions.
- coding-standards.md wins for implementation quality, TypeScript, React, security, performance, accessibility, and Definition of Done.
- project-structure.md wins for test file placement, naming, imports, exports, and feature boundaries.
- frontend-state-data.md wins for query, mutation, API, URL state, Zustand, and cache behavior.
- frontend-forms-validation.md wins for form architecture, validation lifecycle, server error mapping, and high-trust form behavior.
- frontend-testing.md wins for practical testing strategy, test selection, test coverage expectations, test setup, mocking, fixtures, regression rules, and user-flow confidence.

Tests that pass but do not protect user behavior, failure recovery, accessibility, or high-risk product guarantees are not enough.

---

# Purpose

This skill defines Ariyo's official frontend testing architecture.

It governs:

```text
unit tests
component tests
feature integration tests
end-to-end tests
accessibility-oriented tests
schema tests
mapper tests
query and mutation tests
form tests
state tests
URL state tests
permission tests
high-risk flow tests
fixtures
mocking
MSW usage
React Testing Library usage
Vitest usage
Playwright expectations
regression tests
flaky test prevention
AI-agent testing behavior
```

Ariyo testing exists to protect product promises.

Testing must prove that users can understand, complete, recover from, and trust Ariyo workflows under real-world states.

---

# Core Testing Principle

Test product behavior.

Do not test implementation trivia.

A good Ariyo test answers at least one of these questions:

```text
Can the user complete the intended task?
Can the user recover from failure?
Can the user understand the state?
Can the user avoid unsafe actions?
Can the user use the UI with keyboard-accessible controls?
Can the form prevent invalid data?
Can the mutation show pending, success, and failure correctly?
Can the query show loading, empty, error, and success correctly?
Can permissions prevent or explain unavailable actions?
Can high-risk flows avoid fake success?
```

If a test only proves that a component renders, it is usually too weak.

---

# Testing Philosophy

Ariyo tests should be:

```text
user-centered
behavior-focused
stable
readable
typed
fast enough for regular use
specific about product outcomes
resistant to refactor noise
honest about failure states
useful to future humans and AI agents
```

Ariyo tests should not be:

```text
snapshot-heavy
implementation-coupled
CSS-selector-driven
mock-everything-by-default
happy-path-only
fragile with timing
based on unrealistic fixtures
silent about accessibility
silent about error recovery
written only to increase coverage numbers
```

Testing is part of product quality.

---

# Official Testing Stack

Use the project-approved testing stack.

Default recommended stack:

```text
Vitest:
unit tests, component tests, integration tests

React Testing Library:
rendering components and asserting user-visible behavior

@testing-library/user-event:
realistic user interactions

@testing-library/jest-dom:
DOM assertions

MSW:
network-level API mocking

axe or equivalent accessibility tooling:
automated accessibility checks where useful

Playwright or equivalent:
critical end-to-end flows when available
```

Do not introduce competing test tools without approval.

Forbidden by default:

```text
Enzyme
large snapshot-first strategy
custom DOM testing utilities when Testing Library works
custom mock server system when MSW exists
new E2E tool without approval
new assertion library without approval
```

---

# Testing Pyramid Rule

Use the smallest test level that gives confidence.

Ariyo testing layers:

```text
Unit tests:
pure functions, schemas, mappers, reducers, query keys, URL parsers

Component tests:
component behavior, accessible names, forms, state rendering, user actions

Feature integration tests:
feature screens with providers, routes, query/mutation behavior, MSW API mocks

End-to-end tests:
critical user journeys across real routes and app-level behavior

Visual tests:
only if tooling exists and product value is clear
```

Do not push every behavior into E2E.

Do not rely only on unit tests.

---

# Test Selection Rule

Add or update tests when code affects:

```text
form validation
server mutation behavior
query states
API response mapping
payload mapping
query keys
URL state parsing
permissions
billing
deployment
knowledge source sync
workflow publishing
destructive actions
shared component contracts
state reducers
Zustand behavior
storage wrappers
error handling
empty states
loading states
success confirmations
accessibility-critical controls
regression-prone logic
```

Tests may be omitted for trivial visual-only changes, but high-risk UI must not skip tests casually.

---

# Test File Placement Rule

Place tests close to what they protect.

Preferred:

```text
employee-card.tsx
employee-card.test.tsx

deploy-employee-schema.ts
deploy-employee-schema.test.ts

map-employee-dto.ts
map-employee-dto.test.ts

use-employee-filters-from-url.ts
use-employee-filters-from-url.test.ts
```

Feature-level integration tests may live in:

```text
features/employees/__tests__/
features/deployments/__tests__/
features/knowledge-sources/__tests__/
features/billing/__tests__/
```

Follow `project-structure.md` for naming and placement.

---

# Test Naming Rule

Test names must describe product behavior.

Good:

```ts
it("shows a retry action when employees fail to load", async () => {});
it("prevents deployment when no channel is selected", async () => {});
it("shows safe-state copy when billing update fails", async () => {});
it("maps sync_failed source status to retry sync copy", () => {});
```

Bad:

```ts
it("works", () => {});
it("renders", () => {});
it("handles click", () => {});
it("test 1", () => {});
```

Tests are documentation.

---

# Test Structure Rule

Use Arrange, Act, Assert.

Good:

```ts
it("shows filtered empty state when no employees match filters", async () => {
  renderEmployeesPage({
    employees: [],
    filters: {
      status: "active",
    },
  });

  expect(
    await screen.findByText("No employees match these filters.")
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", { name: "Clear filters" })
  ).toBeInTheDocument();
});
```

Avoid hiding the behavior being tested behind overly magical helpers.

---

# User-Centric Query Rule

Tests should query the DOM like users and assistive technologies do.

Prefer:

```text
getByRole
findByRole
queryByRole
getByLabelText
getByText
getByDisplayValue
getByPlaceholderText only when placeholder behavior matters
```

Avoid by default:

```text
querySelector
class selectors
data-testid
DOM traversal
snapshot assertions
```

Good:

```ts
screen.getByRole("button", { name: "Deploy employee" });
```

Bad:

```ts
container.querySelector(".deploy-btn");
```

Tests should reinforce accessibility.

---

# Test ID Rule

Use `data-testid` only when user-facing queries are not practical.

Allowed cases:

```text
canvas or chart internals
virtualized list containers
third-party component wrappers
non-visible structural elements
duplicate repeated elements where accessible names cannot disambiguate safely
```

If a component cannot be found by role, label, or text, that may indicate an accessibility issue.

---

# Snapshot Rule

Avoid large snapshots.

Allowed only for:

```text
small stable serialized output
static generated config
very small low-change presentational structures
```

Forbidden by default:

```text
page snapshots
large component tree snapshots
form snapshots
dashboard snapshots
dialog snapshots
Tailwind-heavy markup snapshots
```

Prefer explicit assertions.

---

# Unit Test Rule

Unit test pure logic.

Strong candidates:

```text
Zod schemas
DTO mappers
form-to-payload mappers
query key builders
URL param parsers
storage parsers
status copy maps
status variant maps
currency formatters
date range utilities
permission helpers
reducers
filter utilities
chart data transformers
```

Unit tests should be fast, typed, and deterministic.

---

# Schema Test Rule

Test Zod schemas when validation is product-significant.

Test:

```text
valid input
required fields
invalid formats
cross-field validation
conditional fields
empty values
null handling
server-aligned constraints
product-critical error messages
```

Example:

```ts
it("requires a knowledge source before automatic replies are enabled", () => {
  const result = deployEmployeeSchema.safeParse({
    channelId: "channel_1",
    replyMode: "reply_automatically",
    knowledgeSourceIds: [],
  });

  expect(result.success).toBe(false);
});
```

Schemas are product contracts.

---

# Mapper Test Rule

DTO-to-domain mappers must be tested when backend shape differs from UI shape.

Test:

```text
field mapping
status mapping
unknown status fallback
missing optional fields
ID conversion
date parsing
money parsing
backend jargon shielding
safe defaults
```

Example:

```ts
it("maps backend runtime status to product employee status", () => {
  expect(mapEmployeeStatus("agent_live")).toBe("active");
});
```

UI must not depend on backend terminology.

---

# Payload Mapper Test Rule

Form-to-API payload mappers must be tested when non-trivial.

Test:

```text
field name mapping
ID mapping
optional value normalization
null conversion
trimmed strings
removed form-only fields
high-risk payload correctness
```

Example:

```ts
it("maps deploy form values to deploy employee payload", () => {
  expect(
    toDeployEmployeePayload("employee_1" as EmployeeId, {
      channelId: "channel_1" as ChannelId,
      replyMode: "require_review",
      knowledgeSourceIds: ["source_1" as KnowledgeSourceId],
    })
  ).toEqual({
    employeeId: "employee_1",
    channelId: "channel_1",
    replyMode: "require_review",
    knowledgeSourceIds: ["source_1"],
  });
});
```

High-trust actions need payload confidence.

---

# Query Key Test Rule

Query key builders should be tested when they include filters, organization scope, or pagination.

Test:

```text
organization ID included when needed
filters included
pagination included
sort included
detail IDs included
stable shape
no missing parameters
```

Example:

```ts
expect(employeeQueryKeys.detail(organizationId, employeeId)).toEqual([
  "organizations",
  organizationId,
  "employees",
  "detail",
  employeeId,
]);
```

Query keys are cache contracts.

---

# URL State Test Rule

URL state parsers and hooks must be tested.

Test:

```text
valid params
invalid params
default fallback
clear filters
pagination reset
sort parsing
date range parsing
shareable state
query key integration when relevant
```

Example:

```ts
expect(parseEmployeeStatusParam("active")).toBe("active");
expect(parseEmployeeStatusParam("bad-value")).toBeNull();
```

URL params are user-editable and untrusted.

---

# Storage Test Rule

Storage wrappers must be tested.

Test:

```text
missing value
valid value
invalid JSON
invalid schema
version mismatch
safe fallback
write behavior
remove/reset behavior
sensitive value prevention when applicable
```

Do not test localStorage behavior through random components when storage wrapper tests are clearer.

---

# Reducer Test Rule

Reducers must be tested for all meaningful actions.

Test:

```text
each action
invalid transitions when modeled
reset behavior
entity change behavior
immutability
edge cases
```

Example:

```ts
it("removes workflow step by id", () => {
  const nextState = workflowBuilderReducer(initialState, {
    type: "remove_step",
    stepId: "step_1" as WorkflowStepId,
  });

  expect(nextState.steps).not.toContainEqual(
    expect.objectContaining({ id: "step_1" })
  );
});
```

Reducers define state transitions.

---

# Zustand Store Test Rule

Test Zustand stores when they contain behavior beyond trivial state.

Test:

```text
initial state
actions
toggle behavior
reset behavior
organization switch reset
persistence validation
selector-sensitive behavior when useful
```

Stores must be reset between tests.

Do not let global store state leak across tests.

---

# Component Test Rule

Component tests must verify user-visible behavior.

Test:

```text
visible text
accessible names
user actions
callbacks and payloads
loading state
empty state
error state
success state
disabled state
permission state
conditional rendering
form interactions
keyboard behavior when relevant
```

Avoid testing private state, private helper calls, or exact DOM structure unless it is the behavior contract.

---

# Shared Component Contract Test Rule

Shared components need stronger contract tests.

Examples:

```text
Button:
accessible name, disabled state, pending label, asChild safety when applicable

EmptyState:
title, description, primary action, secondary action

ErrorState:
message, recovery action, retry callback

StatusBadge:
status maps to readable text and semantic variant

ConfirmDialog:
explicit title, consequence copy, cancel and confirm actions

MetricCard:
label, value, unit, helper, trend state

DataState:
loading, empty, error, and success branches
```

A broken shared component can break the product broadly.

---

# Accessibility-Oriented Test Rule

Use accessible queries to verify accessible output.

Good:

```ts
expect(
  screen.getByRole("button", { name: "Retry source sync" })
).toBeEnabled();
```

This verifies both behavior and accessible naming.

Bad:

```ts
expect(screen.getByTestId("retry-button")).toBeEnabled();
```

unless a test ID is genuinely necessary.

---

# Automated Accessibility Test Rule

Use automated accessibility checks when available for critical shared components and flows.

Good candidates:

```text
dialogs
alert dialogs
forms
command palette
menus
tables
deployment flow
billing forms
knowledge source forms
dashboard sections
shared state components
```

Automated checks do not replace manual review.

They catch common regressions.

---

# Keyboard Test Rule

Keyboard behavior must be tested for complex interactions.

Test:

```text
dialog open and close
focus return when practical
menu open and item selection
combobox navigation
tabs navigation
command palette open and action
form submit with keyboard
Escape behavior
retry action reachability
```

Example:

```ts
await user.keyboard("{Escape}");

expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
```

Keyboard support is product functionality.

---

# Form Test Rule

Production forms must be tested when behavior is non-trivial.

Test:

```text
visible labels
default values
required validation
format validation
cross-field validation
conditional fields
submit behavior
pending state
server validation mapping
form-level error
successful submit
input preservation on failure
dirty-state behavior when relevant
cancel behavior when dirty if implemented
```

Do not test only successful submit.

---

# Form Validation Test Rule

Test user-visible validation copy.

Good:

```ts
it("shows a specific error when email is invalid", async () => {
  const user = userEvent.setup();

  render(<InviteMemberForm />);

  await user.type(screen.getByLabelText("Work email"), "not-an-email");
  await user.click(screen.getByRole("button", { name: "Send invite" }));

  expect(
    await screen.findByText("Enter a valid email address.")
  ).toBeInTheDocument();
});
```

Validation messages are product copy.

---

# Form Submit Test Rule

Test submit payloads through the correct boundary.

Good:

```ts
it("submits selected channel and knowledge sources", async () => {
  const user = userEvent.setup();
  const onDeploy = vi.fn();

  renderDeployEmployeeForm({ onDeploy });

  await user.click(screen.getByRole("combobox", { name: "Channel" }));
  await user.click(screen.getByRole("option", { name: "Support inbox" }));

  await user.click(screen.getByRole("button", { name: "Deploy employee" }));

  expect(onDeploy).toHaveBeenCalledWith({
    channelId: "channel_1",
    replyMode: "require_review",
    knowledgeSourceIds: ["source_1"],
  });
});
```

Do not inspect internal form state directly.

---

# Server Validation Mapping Test Rule

Server validation errors must be tested when supported.

Test:

```text
backend field name maps to frontend field name
field error appears near field
form-level error appears when non-field-specific
user input remains after failed submit
stale server error clears when corrected
```

Example:

```ts
expect(
  await screen.findByText("Enter a valid website URL.")
).toBeInTheDocument();
```

Do not show raw backend field names in tests or UI.

---

# Mutation Test Rule

Mutation-driven UI must test:

```text
pending label
disabled duplicate submit
success after confirmed response
error recovery
safe-state failure copy
cache invalidation when testing hook behavior
no fake success before response
```

Good:

```ts
expect(
  screen.getByRole("button", { name: "Deploying employee..." })
).toBeDisabled();
```

Actions must provide feedback.

---

# TanStack Query Test Rule

Tests involving TanStack Query must use isolated QueryClient instances.

Requirements:

```text
new QueryClient per test
retries disabled unless retry is being tested
cache cleared between tests
QueryClientProvider wrapper used
no shared global query state
```

Example:

```ts
export function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
      mutations: {
        retry: false,
      },
    },
  });
}
```

Shared query cache causes flaky tests.

---

# API Mocking Rule

Use MSW or approved network-level mocking for feature integration tests.

Mock at the API boundary.

Good:

```text
GET /employees returns employees
GET /employees returns empty list
GET /employees returns 500
POST /employees/:id/deploy returns success
POST /employees/:id/deploy returns validation error
```

Avoid over-mocking query hooks in integration tests.

Mocking hooks can hide API boundary bugs.

---

# Hook Mocking Rule

Mock query or mutation hooks only when:

```text
testing a pure presentational component
network behavior is not the subject
component receives already-shaped state
mocking improves clarity without hiding important behavior
```

Prefer MSW when testing feature-level behavior.

---

# Router Test Rule

Components using React Router must be tested with router context.

Test:

```text
route params
search params
navigation links
URL filter updates
not found behavior
page-level tabs in URL
back-navigation behavior when important
protected route fallback when supported
```

Do not repeatedly cast route params in test setup.

Use realistic router wrappers.

---

# State UX Test Rule

Data-driven UI must test core state branches.

Test:

```text
initial loading
success
empty
filtered empty
search empty
error
retry
permission denied
not found
background refresh when product-critical
stale data indicator when relevant
```

Do not test only success rendering.

---

# Loading Test Rule

Loading tests should verify meaningful loading behavior.

Good:

```ts
expect(screen.getByRole("status")).toHaveTextContent("Loading employees...");
```

or:

```ts
expect(screen.getByText("Loading employees...")).toBeInTheDocument();
```

Do not assert every skeleton block unless layout contract matters.

---

# Empty State Test Rule

Empty states must be tested when product behavior depends on them.

Test:

```text
first-use empty
filtered empty
search empty
empty table
empty chart
not-enough-data state
primary action presence
clear filter action
```

Example:

```ts
expect(screen.getByText("No employees yet")).toBeInTheDocument();
expect(
  screen.getByRole("button", { name: "Hire employee" })
).toBeInTheDocument();
```

---

# Error State Test Rule

Error states must be tested.

Test:

```text
specific title
safe-state description
retry action
permission-specific copy
not-found copy
raw backend error not displayed
field-level error mapping
form-level error preservation
```

Good:

```ts
expect(
  screen.getByText("Could not sync source. The source remains connected.")
).toBeInTheDocument();
```

Error states are product behavior.

---

# Success State Test Rule

Success states must be tested for high-value actions.

Test:

```text
success appears after confirmed response
success copy is specific
next action exists when relevant
form resets dirty state when expected
dialog closes only after success when intended
fake success does not appear before response
```

High-trust success must be truthful.

---

# Permission Test Rule

Permission-sensitive UI must be tested.

Test:

```text
allowed user can act
disallowed user sees explanation
disabled reason appears
permission denied is not treated as empty state
server permission error is handled
hidden action is intentional for low-value actions
```

Permission behavior protects product trust.

---

# Security-Oriented Frontend Test Rule

Security-sensitive frontend behavior should have tests.

Test:

```text
unsafe URL rejected
URL params validated
storage values validated
file upload constraints enforced
raw backend errors not displayed
permission denied copy shown
billing failure safe-state copy shown
deployment failure safe-state copy shown
knowledge sync failure safe-state copy shown
no fake success before server response
```

Frontend tests do not replace backend security tests.

They protect user-facing safety.

---

# High-Risk Flow Test Rule

High-risk Ariyo flows require stronger coverage.

High-risk flows include:

```text
deploy employee
enable automatic replies
connect knowledge source
sync knowledge source
delete workflow
disconnect integration
remove member
change billing
change permissions
publish workflow
```

Test:

```text
required setup
explicit CTA
review or confirmation
permission behavior
pending state
success after confirmation
failure safe-state copy
retry or recovery
no duplicate submit
cache update/invalidation when relevant
```

High-risk flows cannot be happy-path-only.

---

# Deployment Flow Test Rule

Deployment tests should cover:

```text
cannot deploy without channel
cannot deploy without required knowledge source
reply mode is explicit
review step shows selected setup
deploy mutation receives correct payload
button shows Deploying employee...
success shows Employee activated
failure shows setup saved copy
deployment status comes from server state
retry or review setup action exists
```

Do not fake deployment success locally in tests.

---

# Knowledge Source Test Rule

Knowledge source tests should cover:

```text
connect source form validation
supported file type validation
source connect pending state
source connected state
sync pending state
source ready state
sync failed state
retry sync action
last synced display
technical backend terms not shown
empty knowledge source state
```

Knowledge readiness is high-trust.

---

# Billing Test Rule

Billing tests should cover:

```text
billing loading state
billing permission denied state
plan display
billing update pending state
billing update success after server response
billing failure safe-state copy
no optimistic billing success
invoice empty state
invoice download error
payment SDK not required outside billing tests when architecture supports it
```

Billing UI must be trustworthy.

---

# Workflow Test Rule

Workflow tests should cover:

```text
workflow name validation
step creation
step deletion confirmation when destructive
reducer transitions
invalid workflow cannot publish
publish pending state
publish success after server response
publish failure recovery
workflow builder draft reset when appropriate
```

Workflow automation affects business behavior.

---

# Dashboard Test Rule

Dashboard tests should cover:

```text
KPI loading
KPI success
section-level error
chart empty state
not-enough-data state
AI cost units
date range filter
background refresh behavior when implemented
chart accessible summary
one section failure does not break whole dashboard when intended
```

Dashboards must degrade gracefully.

---

# Marketplace Test Rule

Marketplace tests should cover:

```text
employee cards render
filters update results
filtered empty state
search empty state
hire action pending
hire success
hire failure
card accessible names
mobile filter drawer if critical
```

Marketplace affects activation and conversion.

---

# Table Test Rule

Table tests should verify:

```text
headers render
rows render
empty state
sort behavior
pagination behavior
row actions include row context
loading state
error state
mobile card fallback if implemented
```

Use role queries where possible.

Do not inspect table implementation details unless necessary.

---

# Chart Test Rule

Chart tests should focus on accessible and product behavior.

Test:

```text
chart title
description
summary
units
empty state
not-enough-data state
error state
legend labels when meaningful
```

Do not test every SVG path.

Protect the user-facing chart contract.

---

# Command Palette Test Rule

Command palette tests should cover:

```text
opens by trigger or shortcut when implemented
input receives focus
search filters results
empty search state
keyboard navigation
command execution
Escape closes
focus returns when practical
loading state for remote commands when used
```

Command palette is a speed feature.

It must be reliable and accessible.

---

# Responsive and Mobile Test Expectation

Most responsive behavior is reviewed through implementation and visual/manual review.

Automated tests may cover:

```text
mobile-specific component branch
mobile filter drawer open/close
mobile sheet actions
conditional rendering based on media hook when mocked
touch-target-critical actions when component API exposes size
```

Do not pretend unit tests fully verify responsive design.

Still implement and review mobile behavior.

---

# RTL and Persian Test Rule

When Persian/RTL support is implemented, test:

```text
dir attribute
Persian labels
Persian validation errors
Persian CTA copy
mixed LTR values like URLs and emails
RTL-specific navigation if critical
form behavior under RTL when relevant
```

Ariyo must remain future-ready for Persian and RTL.

---

# Performance-Sensitive Test Rule

Unit tests are not full performance tests.

But tests should protect performance-sensitive logic.

Test:

```text
large data transformers
pagination query keys
virtualized list fallback behavior
debounced search behavior
polling stop conditions
reducer transitions
chart aggregation utilities
```

Performance must also be reviewed through code structure.

---

# Debounce Test Rule

Debounced behavior must be tested with controlled timers.

Test:

```text
does not call search immediately
calls search after delay
clears previous pending call
handles empty query
cleans up timers
```

Avoid arbitrary sleep waits.

Use fake timers when appropriate.

---

# Polling Test Rule

Polling behavior must be tested when critical.

Examples:

```text
deployment status polling stops when active
knowledge sync polling stops when ready
polling stops on failure when required
retry remains available
```

Do not let polling run forever in tests.

---

# Async Test Rule

Async tests must wait for user-visible outcomes.

Good:

```ts
expect(
  await screen.findByText("Employee activated.")
).toBeInTheDocument();
```

Bad:

```ts
await new Promise((resolve) => setTimeout(resolve, 1000));
```

Use Testing Library async utilities.

---

# User Event Rule

Use `userEvent` for realistic interactions.

Good:

```ts
const user = userEvent.setup();

await user.click(screen.getByRole("button", { name: "Deploy employee" }));
await user.type(screen.getByLabelText("Work email"), "user@example.com");
```

Avoid `fireEvent` unless lower-level behavior is specifically needed.

---

# Test Fixture Rule

Use realistic typed fixtures.

Good fixtures include:

```text
realistic IDs
realistic statuses
long names
empty arrays
failed states
permission states
missing optional fields
Persian text when relevant
large lists for performance-sensitive UI
```

Bad fixtures:

```text
foo
bar
test
lorem everywhere
only perfect happy-path data
objects cast as any
```

Bad mocks hide bugs.

---

# Fixture Factory Rule

Use fixture factories instead of repeated object literals.

Good:

```ts
export function createEmployeeFixture(
  overrides: Partial<Employee> = {}
): Employee {
  return {
    id: "employee_1" as EmployeeId,
    name: "Customer Support Employee",
    status: "active",
    description: "Handles customer questions across connected channels.",
    ...overrides,
  };
}
```

Factories must produce valid domain objects by default.

---

# No Any in Tests Rule

Tests must avoid `any`.

Bad:

```ts
const employee = {} as any;
```

Good:

```ts
const employee = createEmployeeFixture({
  status: "failed",
});
```

Tests should reinforce type safety.

---

# Mock Data Boundary Rule

Mock data must not be imported into production UI.

Allowed:

```text
test files
fixture files
MSW handlers
Storybook/demo files when clearly scoped
```

Forbidden:

```text
production page components
production feature components
production API services
production query hooks
```

Mock data must stay outside production paths.

---

# Test Helper Rule

Use shared helpers for repeated setup.

Good helpers:

```text
renderWithProviders
createTestQueryClient
createTestRouter
setupUser
createEmployeeFixture
mockServer handlers
renderDeployEmployeeForm
```

Helpers must remain understandable.

Do not hide the behavior under test.

---

# Render With Providers Rule

Use a shared render helper for provider-heavy components.

It may include:

```text
QueryClientProvider
Router provider
Theme provider
Toast provider
Direction provider
Auth or permission provider when approved
```

Each test must receive isolated provider state.

---

# Test Isolation Rule

Every test must be isolated.

Reset:

```text
MSW handlers
QueryClient
Zustand stores
localStorage
sessionStorage
fake timers
router state
mock functions
document body changes
Date/time mocks
```

Tests must not depend on run order.

---

# Network Test Rule

Unexpected real network requests are forbidden.

Tests should fail when an unhandled request occurs.

Unhandled requests indicate:

```text
missing MSW handler
wrong API boundary
unexpected endpoint
raw fetch in component
incomplete test setup
```

No test should silently call real production services.

---

# Console Error Rule

Tests should not silently allow console errors.

Unexpected console errors often indicate:

```text
React warnings
invalid DOM nesting
missing provider
unhandled promise rejection
act warning
accessibility issue
raw API failure not handled
```

If a console error is expected, assert and silence it intentionally in that test only.

Do not globally ignore console noise.

---

# Flaky Test Rule

Flaky tests are bugs.

Common causes:

```text
shared QueryClient
shared Zustand state
real timers where fake timers are needed
unawaited user events
unmocked network requests
test order dependency
random data without stable seed
animation timing
polling not stopped
asserting implementation details
```

Fix flakes immediately.

Do not ignore them.

---

# Time and Date Test Rule

Date-dependent tests must be deterministic.

Use fixed dates or fake timers.

Test:

```text
date range parsing
last updated copy
billing periods
AI cost reporting periods
sync timestamps
relative date formatting when product-critical
```

Do not rely on the current real date in tests unless intentionally testing that behavior.

---

# Animation Test Rule

Do not test animation implementation details by default.

Test:

```text
content appears
content disappears
reduced motion branch when important
focus behavior after animation
state transition result
```

Avoid asserting exact animation duration or classes unless part of the contract.

---

# Error Boundary Test Rule

Error boundaries should be tested.

Test:

```text
fallback renders
safe recovery action exists
raw stack trace is not shown
section failure does not crash whole page when section boundary exists
route-level failure shows navigation recovery
```

Unexpected runtime failures need safe UI.

---

# Route Test Rule

Route-level tests should verify:

```text
page heading
route params parsed
invalid params handled
not found state
protected route behavior
layout renders
route-level loading or error fallback
navigation links
```

Do not test router internals.

Test route behavior.

---

# Visual Styling Test Rule

Do not test Tailwind classes unless the class is a behavior contract.

Avoid:

```ts
expect(button).toHaveClass("bg-primary");
```

Prefer:

```ts
expect(
  screen.getByRole("button", { name: "Deploy employee" })
).toBeEnabled();
```

Class assertions are allowed only when:

```text
state variant styling is the component contract
visually hidden behavior matters
responsive branch cannot be tested otherwise
```

Do not over-test styling.

---

# Copy Test Rule

Test copy when copy is product behavior.

Good cases:

```text
error safe-state copy
empty state onboarding copy
CTA labels
pending labels
success confirmations
permission explanations
destructive action copy
validation messages
```

Do not test every paragraph.

Test copy that protects user understanding or safety.

---

# E2E Test Rule

End-to-end tests should cover critical journeys only.

Good candidates:

```text
sign in and reach dashboard when auth architecture exists
hire employee from marketplace
deploy employee with required setup
connect knowledge source
sync source and retry failure if test environment supports it
create and publish workflow
invite member
change billing plan in safe test mode
permission denial flow
```

E2E tests should not duplicate every component test.

They should protect cross-route product confidence.

---

# E2E Data Rule

E2E tests require controlled data.

Use:

```text
test organizations
test users
test-safe billing mode
seeded data
API setup helpers
cleanup hooks
stable IDs only when seeded
```

Do not use real customer data.

Do not use production billing or integration credentials.

---

# E2E Reliability Rule

E2E tests must avoid flakiness.

Avoid:

```text
arbitrary sleeps
real third-party dependencies when not needed
order-dependent data
shared mutable accounts without reset
visual timing assumptions
uncontrolled network dependencies
```

Prefer waiting for user-visible states.

---

# Test Data Privacy Rule

Tests must not contain real user data.

Forbidden:

```text
real customer emails
real billing data
real API tokens
real organization names unless approved demo data
private knowledge source text
production IDs copied from logs
support transcripts
real uploaded documents
```

Use synthetic fixtures.

---

# Coverage Rule

Coverage is useful but not the goal.

Ariyo values meaningful coverage over numeric vanity.

Prioritize coverage for:

```text
critical flows
schemas
mappers
reducers
query and mutation boundaries
forms
shared components
high-risk actions
permissions
billing
deployment
knowledge sync
URL state parsing
error states
```

Do not write low-value tests only to raise coverage numbers.

---

# Regression Test Rule

When fixing a bug, add a regression test when practical.

Good regression targets:

```text
wrong empty state
lost form values
duplicate submit
incorrect query invalidation
permission action visible to wrong role
deployment success shown too early
knowledge sync ready state faked
billing success before server confirmation
URL filter parsing bug
unhandled invalid route param
RTL/Persian copy regression when supported
```

A fixed bug without a regression test may return.

---

# Do Not Weaken Tests Rule

Never make tests pass by weakening product guarantees.

Forbidden:

```text
removing assertions without replacement
changing exact safety copy assertions to vague assertions when exact copy matters
mocking away the behavior under test
skipping tests without reason
deleting failing tests
replacing behavior tests with snapshots
casting invalid data as any
```

Fix the code or update the test to the correct new behavior.

---

# AI Agent Testing Rule

When Codex modifies production code, it must consider tests.

Codex should:

```text
add relevant tests
update affected tests
remove obsolete tests
update fixtures when domain changes
prefer user behavior tests
not weaken tests to pass
not delete failing tests without reason
not claim tests passed if they were not run
summarize what was tested and what was not
```

Tests are part of the task.

---

# Honest Test Reporting Rule

Codex must be honest about test execution.

Acceptable:

```text
Added tests but did not run them.
Ran unit tests for employee feature.
Could not run E2E tests because Playwright is not configured.
```

Forbidden:

```text
All tests passed.
```

when tests were not run.

Do not fabricate test results.

---

# Test Review Checklist

Before shipping tests, verify:

```text
Do tests protect user behavior?
Are test names specific?
Are accessible queries used?
Are forms tested for validation and submit?
Are loading, empty, error, and success states covered?
Are high-risk flows covered?
Are permission states covered when relevant?
Are query and mutation boundaries tested or mocked correctly?
Are schemas and mappers tested?
Are tests isolated?
Are fixtures realistic and typed?
Are no tests using any?
Are no large snapshots added?
Are no tests weakened just to pass?
Are async tests stable?
Are accessibility basics covered?
Would a future refactor preserve these tests?
```

If any answer is no, improve the tests.

---

# Testing Decision Tree

Ask:

### Is this pure logic?

Write a unit test.

### Is this a component with user interaction?

Write a component behavior test.

### Is this a form?

Test validation, submit, pending, error, and success.

### Is this server data?

Use QueryClient setup and MSW when appropriate.

### Is this a mutation?

Test pending, success, failure, and cache effect when relevant.

### Is this a critical flow?

Consider feature integration or E2E coverage.

### Is this high-risk?

Test confirmation, pending, server-confirmed success, and safe failure.

### Is this a bug fix?

Add a regression test when practical.

### Is this accessibility-critical?

Use role/label queries and keyboard tests.

### Is the test brittle?

Rewrite it around user behavior.

---

# Forbidden Testing Patterns

Never ship:

```text
tests that only say renders
large page snapshots
snapshot-first testing strategy
implementation selector tests by default
CSS class assertions for behavior
fixtures using any
invalid domain objects cast into shape
shared QueryClient across tests
Zustand state leaking between tests
unmocked real network requests
arbitrary sleep waits
tests dependent on order
globally ignored console errors
tests that mock away the behavior under test
deleted failing tests without replacement
skipped tests without reason
high-risk flows without failure tests
forms without validation tests
mutation flows without pending/error tests
permission UI without permission tests
chart tests that inspect only SVG paths
accessibility-critical components without role/label assertions
mock data imported into production code
real customer data in tests
fake success tests that do not wait for server confirmation
```

---

# Ariyo Testing Golden Rule

A test should protect a product promise.

---

# Senior Testing Rule

Do not test how the component is built.

Test what the user can do, see, recover from, and trust.

---

# Final Rule

Ariyo frontend testing is production-ready only when critical logic, forms, data states, mutations, permissions, high-risk flows, accessibility contracts, security-sensitive behavior, and regression-prone paths are covered by stable, user-focused, typed tests that make future human and AI-assisted changes safer.
