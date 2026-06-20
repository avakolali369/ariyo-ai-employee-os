# Ariyo Frontend Forms & Validation Skill

Version: 1.0.0  
Product: Ariyo  
Purpose:  
Act as a Senior Frontend Form Architect, React Hook Form Specialist, Zod Validation Guardian, UX Form Reviewer, Accessibility Reviewer, and High-Trust Workflow Safety Engineer for Ariyo.

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

If conflicts exist:

- frontend-design.md wins for product philosophy and visual experience.
- frontend-components.md wins for component behavior and reusable UI contracts.
- frontend-responsive.md wins for responsive form layout and mobile behavior.
- frontend-motion.md wins for transition and feedback motion.
- frontend-copywriting.md wins for labels, helper text, validation messages, error copy, success copy, and CTA language.
- coding-standards.md wins for implementation quality, TypeScript, React, accessibility, testing, security, and guardrails.
- project-structure.md wins for file placement, naming, imports, exports, and feature boundaries.
- frontend-state-data.md wins for state ownership, TanStack Query, mutations, API boundaries, and cache behavior.
- frontend-forms-validation.md wins for practical form architecture, validation, field behavior, submit lifecycle, server-error mapping, form UX, and high-trust form safety.

Forms that submit successfully but confuse users, lose input, hide errors, bypass validation, fake success, or fail accessibility are not production-ready.

---

# Purpose

This skill defines Ariyo's official frontend form and validation architecture.

It governs:

```text
React Hook Form usage
Zod schemas
schema-derived types
default values
field components
form layout
validation timing
field-level errors
form-level errors
server validation mapping
submit lifecycle
TanStack Query mutation integration
cache invalidation after submit
high-risk confirmation flows
multi-step forms
file uploads
URL, email, number, date validation
dirty-state protection
reset behavior
mobile form behavior
RTL and Persian readiness
accessibility
testing expectations
security guardrails
```

Ariyo forms are product workflows.

They are not input collections.

Forms must help users understand what is needed, why it is needed, how to correct mistakes, what happens after submit, and whether their work is safe.

---

# Core Form Principle

Ariyo forms must be:

```text
typed
schema-driven
accessible
specific
recoverable
mobile-safe
server-aware
copy-safe
mutation-integrated
high-trust when needed
clear about consequences
safe under failure
```

Ariyo forms must not be:

```text
manual
untyped
placeholder-driven
generic
backend-jargon-heavy
toast-only
happy-path-only
state-duplicated
unsafe with sensitive data
unclear about success or failure
```

Every form must reduce uncertainty.

---

# Official Form Stack

Ariyo uses:

```text
React Hook Form:
form state, field lifecycle, dirty state, touched state, validation lifecycle, submit lifecycle

Zod:
runtime validation, schemas, schema-derived types, cross-field validation, parsing

@hookform/resolvers/zod:
React Hook Form and Zod integration

shadcn/ui Form primitives:
consistent field structure, accessible labels, descriptions, messages, and controls

TanStack Query mutations:
server submit actions, pending state, success state, error state, cache updates, invalidation

Ariyo shared form components:
reusable field wrappers, sections, form actions, error summaries, success banners, and high-trust confirmations
```

Do not introduce another form library or validation library without explicit approval.

Forbidden by default:

```text
Formik
Final Form
Yup
Joi
Vest
manual validation engines
DOM-only FormData extraction for production forms
custom form state framework
untyped submit handlers
```

---

# What Counts as a Production Form

Use React Hook Form + Zod for any UI that:

```text
submits data
saves settings
creates an entity
updates an entity
connects an integration
connects a knowledge source
uploads files
changes billing
changes permissions
invites members
publishes workflow behavior
deploys an employee
configures automatic replies
validates user input
has field errors
has server errors
must preserve user input
```

Production forms include:

```text
Deploy employee
Hire employee setup
Connect knowledge source
Sync source configuration
Create workflow
Edit workflow
Publish workflow
Invite member
Update role
Organization settings
Employee settings
Billing details
Integration connection
Permission configuration
Support/contact form
Account/profile settings
AI cost budget/settings
```

Local `useState` is acceptable only for tiny non-form UI:

```text
local search draft
filter drawer draft before applying
command palette query
single local toggle
small UI-only select that is not submitted or validated
```

If a value is submitted, saved, validated, or affects product behavior, treat it as form state.

---

# Form Responsibility Model

Use the correct layer for each responsibility.

```text
Zod schema:
field rules, runtime validation, cross-field validation, schema-derived type

Default values:
real initial form state, usually mapped from domain data

Form component:
useForm setup, field rendering, layout, submit handler, user feedback

Field components:
label, control, description, message, accessibility, repeated UI patterns

Mutation hook:
server submit, pending state, error state, success state, cache invalidation

Payload mapper:
form values → API payload

Server error mapper:
backend validation errors → field errors or form-level error

Copy maps:
state-specific labels, helper text, validation copy, high-risk copy when reused
```

Do not put schema, raw API call, payload mapping, server error handling, field UI, and cache invalidation into one giant component.

---

# Recommended Feature Form Structure

Use this structure by default:

```text
features/employees/
  forms/
    deploy-employee-schema.ts
    deploy-employee-default-values.ts
    to-deploy-employee-payload.ts

  components/
    deploy-employee-form.tsx
    deploy-employee-dialog.tsx
    deploy-employee-review.tsx

  mutations/
    use-deploy-employee-mutation.ts

  api/
    employee-api.ts

  types/
    employee-types.ts
```

For knowledge sources:

```text
features/knowledge-sources/
  forms/
    connect-knowledge-source-schema.ts
    connect-knowledge-source-default-values.ts
    to-connect-knowledge-source-payload.ts

  components/
    connect-knowledge-source-form.tsx
    knowledge-source-upload-field.tsx

  mutations/
    use-connect-knowledge-source-mutation.ts
    use-sync-knowledge-source-mutation.ts
```

For billing:

```text
features/billing/
  forms/
    update-billing-details-schema.ts
    update-billing-details-default-values.ts
    to-update-billing-details-payload.ts

  components/
    update-billing-details-form.tsx

  mutations/
    use-update-billing-details-mutation.ts
```

Follow `project-structure.md` for exact placement.

---

# Schema Rule

Every production form must have a Zod schema.

Good:

```ts
export const inviteMemberSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Enter email address.")
    .email("Enter a valid email address."),
  role: z.enum(["admin", "member", "viewer"]),
});

export type InviteMemberFormValues = z.infer<typeof inviteMemberSchema>;
```

Bad:

```ts
type InviteMemberFormValues = {
  email: string;
  role: string;
};
```

without runtime validation.

TypeScript is not runtime validation.

---

# Schema-Derived Type Rule

Form value types must be inferred from Zod schemas.

Good:

```ts
export type DeployEmployeeFormValues = z.infer<typeof deployEmployeeSchema>;
```

Bad:

```ts
export type DeployEmployeeFormValues = {
  channelId: string;
  replyMode: string;
  knowledgeSourceIds: string[];
};
```

Manual duplication creates schema/type drift.

The schema is the source of truth.

---

# Schema Naming Rule

Use product-action names.

Good:

```text
deployEmployeeSchema
connectKnowledgeSourceSchema
inviteMemberSchema
createWorkflowSchema
updateBillingDetailsSchema
organizationSettingsSchema
```

Avoid:

```text
schema
formSchema
validationSchema
dataSchema
rules
validator
```

unless the file is tiny and local context is unmistakable.

---

# Form Values Naming Rule

Use:

```text
[Action][Object]FormValues
```

Examples:

```text
DeployEmployeeFormValues
ConnectKnowledgeSourceFormValues
InviteMemberFormValues
CreateWorkflowFormValues
UpdateBillingDetailsFormValues
OrganizationSettingsFormValues
```

Avoid:

```text
FormData
Values
Data
Payload
Inputs
Fields
```

Generic names are hard to search and unsafe across features.

---

# Default Values Rule

Every form must define explicit default values.

Good:

```ts
export const deployEmployeeDefaultValues: DeployEmployeeFormValues = {
  channelId: "",
  replyMode: "require_review",
  knowledgeSourceIds: [],
};
```

Bad:

```ts
defaultValues: {} as DeployEmployeeFormValues
```

Default values are runtime state.

They must be real.

---

# Default Values From Domain Data

When editing existing data, map domain data to form values explicitly.

Good:

```ts
export function getEmployeeSettingsDefaultValues(
  employee: Employee
): EmployeeSettingsFormValues {
  return {
    displayName: employee.name,
    description: employee.description ?? "",
    replyMode: employee.replyMode,
    knowledgeSourceIds: employee.knowledgeSourceIds,
  };
}
```

Do not pass full API/domain objects directly into forms unless the shape intentionally matches the schema.

Forms should receive the values they actually edit.

---

# Empty String, Null, and Undefined Rule

Use absence consistently.

Guidance:

```text
empty string:
text input currently empty

null:
intentional no selection or no optional value

undefined:
property omitted or not provided
```

Good:

```ts
const employeeSettingsSchema = z.object({
  fallbackEmployeeId: z.string().nullable(),
});

const defaultValues: EmployeeSettingsFormValues = {
  fallbackEmployeeId: null,
};
```

Do not mix `""`, `null`, and `undefined` for the same field without a clear reason.

---

# Optional Field Rule

Optional fields must be optional in both schema and UI copy.

Good:

```ts
const employeeProfileSchema = z.object({
  displayName: z.string().trim().min(1, "Enter employee name."),
  description: z.string().trim().max(160, "Use 160 characters or fewer.").optional(),
});
```

Label:

```text
Description optional
```

Do not mark a field optional in the UI while requiring it in schema.

Do not make required fields optional to avoid validation work.

---

# Required Field Rule

Required validation messages must be specific.

Bad:

```text
Required.
This field is required.
Invalid.
```

Good:

```text
Enter employee name.
Select a channel.
Assign at least one knowledge source.
Enter a valid website URL.
```

Validation copy must follow `frontend-copywriting.md`.

---

# Validation Copy Rule

Validation messages must be user-facing.

Bad:

```ts
z.string().min(1, "required")
z.string().url("Invalid input")
```

Good:

```ts
z.string().min(1, "Enter employee name.")
z.string().url("Enter a valid website URL.")
```

Do not expose backend terms, schema terms, field keys, or technical jargon.

---

# Label Rule

Every production field must have a visible label.

Bad:

```tsx
<Input placeholder="Employee name" />
```

Good:

```tsx
<FormField
  control={form.control}
  name="employeeName"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Employee name</FormLabel>
      <FormControl>
        <Input placeholder="Customer Support Employee" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
```

Placeholder is not a label.

---

# Helper Text Rule

Use helper text when users need context.

Good helper text explains:

```text
why the field matters
what format is expected
what happens with the value
what consequence a choice has
how to choose safely
```

Good:

```tsx
<FormDescription>
  Employees use this source to answer with business context.
</FormDescription>
```

Bad:

```text
Employee name: Enter employee name.
```

Do not repeat the label.

---

# Placeholder Rule

Placeholders may show examples or format.

Good:

```text
https://example.com
name@company.com
Customer Support Employee
```

Bad:

```text
Enter value
Type here
Required
Employee name
```

Placeholders disappear when users type.

They must not contain critical instructions.

---

# Field Name Rule

Field names must use domain meaning.

Good:

```text
employeeName
websiteUrl
knowledgeSourceIds
replyMode
billingEmail
organizationName
workflowName
channelId
```

Bad:

```text
name
value
input1
selected
option
data
field
text
```

Generic names are acceptable only in tiny local utilities.

Production forms need domain clarity.

---

# shadcn Form Structure Rule

Use shadcn/ui Form primitives consistently.

Preferred:

```tsx
<FormField
  control={form.control}
  name="websiteUrl"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Website URL</FormLabel>
      <FormControl>
        <Input placeholder="https://example.com" {...field} />
      </FormControl>
      <FormDescription>
        Ariyo will use this website as a knowledge source.
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
```

Do not build custom field markup repeatedly unless creating an approved shared Ariyo field component.

---

# Shared Field Components Rule

Create shared field components when patterns repeat.

Good shared components:

```text
TextField
TextareaField
EmailField
UrlField
SelectField
ComboboxField
CheckboxField
SwitchField
RadioGroupField
FileUploadField
FormSection
FormActions
FormErrorSummary
FormSuccessBanner
```

Shared field components must preserve:

```text
visible label
helper text
error text
required state
disabled state
loading state when relevant
React Hook Form integration
aria associations
mobile behavior
RTL support
```

Do not create wrappers that hide errors or break accessibility.

---

# Controlled Component Rule

Use React Hook Form `Controller` or shadcn `FormField` for controlled components.

Controlled components include:

```text
Select
Combobox
RadioGroup
CheckboxGroup
Switch
DatePicker
FileUpload
custom multi-select
rich input components
```

Bad:

```tsx
const [replyMode, setReplyMode] = useState("");

<Select value={replyMode} onValueChange={setReplyMode} />
```

inside a production form.

Good:

```tsx
<FormField
  control={form.control}
  name="replyMode"
  render={({ field }) => (
    <RadioGroup value={field.value} onValueChange={field.onChange}>
      ...
    </RadioGroup>
  )}
/>
```

React Hook Form must own form values.

---

# Submit Handler Rule

Submit handlers must receive typed form values.

Good:

```tsx
async function onSubmit(values: DeployEmployeeFormValues) {
  await deployEmployeeMutation.mutateAsync(
    toDeployEmployeePayload(employeeId, values)
  );
}
```

Bad:

```tsx
function onSubmit(event: React.FormEvent) {
  const formData = new FormData(event.currentTarget);
}
```

for production forms.

DOM extraction bypasses typed form architecture.

---

# Form-To-Payload Mapping Rule

Form values are not always API payloads.

Map explicitly when names, types, or business rules differ.

Good:

```ts
export function toDeployEmployeePayload(
  employeeId: EmployeeId,
  values: DeployEmployeeFormValues
): DeployEmployeePayload {
  return {
    employeeId,
    channelId: toChannelId(values.channelId),
    replyMode: values.replyMode,
    knowledgeSourceIds: values.knowledgeSourceIds.map(toKnowledgeSourceId),
  };
}
```

Do not leak form-only fields into API payloads.

Do not build high-risk payloads inline in JSX.

---

# Mutation Integration Rule

Production forms that submit to the server must use TanStack Query mutation hooks.

Good:

```tsx
const deployEmployeeMutation = useDeployEmployeeMutation();

async function onSubmit(values: DeployEmployeeFormValues) {
  await deployEmployeeMutation.mutateAsync(
    toDeployEmployeePayload(employeeId, values)
  );
}
```

Bad:

```tsx
await fetch("/api/employees/deploy", {
  method: "POST",
  body: JSON.stringify(values),
});
```

inside a form component.

Mutations centralize API behavior, pending state, error handling, and cache invalidation.

---

# Submit Button Rule

Submit buttons must be specific.

Required:

```text
type="submit"
Verb + Object copy
pending copy
duplicate-submit prevention
accessible name
clear disabled reason when needed
```

Good:

```tsx
<Button type="submit" disabled={deployEmployeeMutation.isPending}>
  {deployEmployeeMutation.isPending
    ? "Deploying employee..."
    : "Deploy employee"}
</Button>
```

Bad:

```tsx
<Button>Submit</Button>
```

Generic submit buttons are forbidden.

---

# Button Type Rule

Every button inside a form must define type.

Good:

```tsx
<Button type="submit">Save changes</Button>
<Button type="button" variant="secondary">Cancel</Button>
```

Bad:

```tsx
<Button>Cancel</Button>
```

The default button type may submit the form.

---

# Pending State Rule

Use mutation pending state for server submissions.

Good:

```tsx
<Button disabled={updateSettingsMutation.isPending}>
  {updateSettingsMutation.isPending ? "Saving changes..." : "Save changes"}
</Button>
```

Do not create duplicate local pending state:

```tsx
const [isSaving, setSaving] = useState(false);
```

unless the async action is not managed by TanStack Query.

---

# Duplicate Submit Rule

Prevent duplicate submissions.

Required for all server forms:

```text
disable submit while pending
show pending label
avoid repeated mutation calls
preserve form state on failure
restore action after failure
```

High-risk actions must be especially strict.

Duplicate deployment, billing, permission, or delete requests can create serious product risk.

---

# Server Validation Mapping Rule

Server validation errors must map to fields when possible.

Good:

```ts
function applyServerValidationErrors(
  form: UseFormReturn<InviteMemberFormValues>,
  error: AriyoError
) {
  if (error.code !== "validation_error") {
    return false;
  }

  for (const fieldError of error.fieldErrors) {
    const fieldName = mapServerFieldToInviteMemberField(fieldError.name);

    form.setError(fieldName, {
      type: "server",
      message: fieldError.message,
    });
  }

  return true;
}
```

If an error affects the whole form, show a form-level error.

Do not show all server validation failures as generic toasts.

---

# Backend Field Name Shield Rule

Backend field names must not leak into UI.

Backend may return:

```text
display_name
tenant_id
agent_runtime_status
embedding_job_id
```

Frontend form fields should use:

```text
employeeName
organizationId
employeeStatus
knowledgeSyncStatus
```

Use mappers for server field errors.

Never show backend field names to users.

---

# Form-Level Error Rule

Use form-level errors for problems affecting the whole form.

Examples:

```text
permission denied
network failure
server unavailable
billing update failed
deployment failed
integration connection failed
session expired
cross-field business rule failure
```

Good:

```tsx
{formError ? (
  <Alert variant="destructive">
    <AlertTitle>Could not save settings</AlertTitle>
    <AlertDescription>
      Your changes were not saved. Try again.
    </AlertDescription>
  </Alert>
) : null}
```

Form-level errors must include recovery and safe-state copy when relevant.

---

# Field Error Rule

Field errors belong near the field.

Good:

```text
Enter a valid email address.
Select a channel.
Upload a PDF, DOCX, or TXT file.
Enter a website URL that starts with https://.
```

Bad:

```text
Invalid.
Error.
Wrong value.
```

Field errors must be visible and programmatically associated.

---

# Error Summary Rule

Use an error summary for long or multi-section forms.

Good:

```text
Review 3 fields before continuing.
```

The summary should:

```text
be focusable when shown
point users toward invalid fields
not replace field-level errors
use calm copy
```

Short forms may focus the first invalid field instead.

---

# Cross-Field Validation Rule

Use Zod `superRefine` for cross-field rules.

Good:

```ts
export const deployEmployeeSchema = z
  .object({
    channelId: z.string().min(1, "Select a channel."),
    replyMode: z.enum(["require_review", "reply_automatically"]),
    knowledgeSourceIds: z.array(z.string()),
  })
  .superRefine((values, context) => {
    if (
      values.replyMode === "reply_automatically" &&
      values.knowledgeSourceIds.length === 0
    ) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["knowledgeSourceIds"],
        message:
          "Assign a knowledge source before enabling automatic replies.",
      });
    }
  });
```

Cross-field business rules must not be scattered across submit handlers.

---

# Conditional Field Rule

Conditional fields must be modeled in the schema.

Good:

```ts
export const connectKnowledgeSourceSchema = z.discriminatedUnion("sourceType", [
  z.object({
    sourceType: z.literal("website"),
    websiteUrl: z
      .string()
      .trim()
      .min(1, "Enter website URL.")
      .url("Enter a valid website URL."),
  }),
  z.object({
    sourceType: z.literal("document"),
    fileId: z.string().min(1, "Upload a document."),
  }),
]);
```

Do not validate hidden irrelevant fields unless required by product behavior.

Do not submit hidden fields that users cannot understand.

---

# Validation Timing Rule

Validation must feel helpful, not punitive.

Default:

```ts
useForm({
  resolver: zodResolver(schema),
  mode: "onSubmit",
  reValidateMode: "onChange",
});
```

Use `onBlur` for format fields where early validation helps:

```text
email
URL
phone
name availability
billing email
```

Use `onChange` only for lightweight validation or when immediate feedback clearly improves UX.

Avoid showing errors while the user is still typing unless useful.

---

# Dirty State Rule

Use dirty state to protect user work.

Good use cases:

```text
employee settings
organization settings
workflow builder
deployment setup
knowledge source configuration
billing settings
long forms
```

Good:

```ts
const hasUnsavedChanges = form.formState.isDirty;
```

If the user may lose meaningful edits, show confirmation or preserve the draft.

---

# Unsaved Changes Rule

High-value forms must warn before destructive navigation when dirty.

Copy:

```text
You have unsaved changes. Save or discard them before leaving.
```

Do not use only a browser prompt if a product-level flow exists.

Do not warn for every tiny low-risk input unless loss would matter.

---

# Reset Rule

Reset forms intentionally.

After successful create:

```text
reset form
or navigate to created entity
or close dialog and show created result
```

After successful edit:

```text
reset dirty state to saved values
show Changes saved.
```

After cancel:

```text
discard changes
or confirm if dirty
```

After entity changes:

```text
reset to the new entity values
```

Do not leave stale values from another employee, organization, source, or workflow.

---

# Entity Change Reset Rule

When editing an entity, reset only when the entity identity changes.

Good:

```tsx
useEffect(() => {
  form.reset(getEmployeeSettingsDefaultValues(employee));
}, [employee.id, form]);
```

Do not reset on every background refetch if the user is editing.

Protect dirty user input.

---

# Background Refetch and Dirty Form Rule

Background refetch must not overwrite user edits.

If form is dirty:

```text
do not automatically reset values
show updated-data notice if needed
let user choose to reload values
preserve current draft
```

Bad:

```tsx
useEffect(() => {
  form.reset(defaultValuesFromQuery);
}, [query.data]);
```

This can erase user input during background refresh.

---

# Watch Rule

Use `useWatch` only for specific fields.

Good:

```tsx
const replyMode = useWatch({
  control: form.control,
  name: "replyMode",
});
```

Use for:

```text
conditional fields
live review summary
helper text changes
step availability
warning display
```

Avoid:

```tsx
const values = form.watch();
```

inside large forms.

Watching the whole form can cause broad re-renders.

---

# Field Array Rule

Use React Hook Form `useFieldArray` for dynamic fields.

Good use cases:

```text
workflow steps
routing rules
FAQ pairs
business hours
integration mappings
allowed domains
fallback messages
```

Good:

```tsx
const { fields, append, remove, move } = useFieldArray({
  control: form.control,
  name: "steps",
});
```

Do not manage dynamic form arrays with separate local state unless the UI is not a form.

---

# Field Array Accessibility Rule

Dynamic fields must include:

```text
clear labels
item numbers when helpful
remove buttons with object-specific labels
keyboard-accessible reorder controls
error messages per item
empty state when no items exist
specific add button copy
```

Good:

```text
Remove step 2
Add workflow step
```

Bad:

```text
Remove
Add
```

Repeated controls need context.

---

# Multi-Step Form Rule

Multi-step forms must preserve progress and validate intentionally.

Required:

```text
typed step state
step labels
clear progress
step-level validation
full validation before final submit
back behavior
review step for high-risk actions
mobile-safe actions
recoverable errors
safe cancel behavior
```

Good step labels:

```text
Choose employee
Connect channel
Assign knowledge
Review setup
Deploy employee
```

Bad:

```text
Step 1
Step 2
Final
```

unless paired with meaningful labels.

---

# Step Validation Rule

Validate only relevant fields for the current step unless full validation is intentional.

Do not block users with errors from hidden future steps.

On final review/submit, validate the full schema.

---

# Review Step Rule

High-risk flows need a review step.

Good review items:

```text
Employee selected
Channel connected
Knowledge sources assigned
Reply mode selected
Permissions confirmed
Billing change summary
Workflow publish summary
```

Review CTA must be explicit:

```text
Deploy employee
Publish workflow
Update billing details
```

Review is a safety mechanism.

Not decoration.

---

# High-Risk Form Rule

High-risk forms require stricter UX and validation.

High-risk forms include:

```text
deploy employee
enable automatic replies
connect sensitive integration
change billing
change permissions
remove member
delete workflow
disconnect source
publish workflow
delete organization data
```

Requirements:

```text
explicit title
clear consequence
specific CTA
safe secondary action
pending state
duplicate-submit prevention
server-confirmed success
safe-state failure copy
permission handling
accessible confirmation when needed
```

---

# Destructive Form Rule

Destructive actions must name the object and consequence.

Good:

```text
Delete workflow

This permanently removes the workflow.

Delete workflow
```

Bad:

```text
Are you sure?

OK
Cancel
```

Never use vague destructive confirmations.

---

# Confirmation Input Rule

Use confirmation typing only for very high-risk actions.

Examples:

```text
delete organization
delete all knowledge sources
cancel enterprise workspace
remove large data set
```

Do not overuse confirmation typing.

If used, it must be accessible, exact, and clearly explained.

---

# Disabled Submit Rule

Disabled submit must not create mystery.

Good:

```tsx
<Button disabled={!canDeploy}>Deploy employee</Button>
{!canDeploy ? (
  <p className="text-sm text-muted-foreground">
    Connect a channel before deploying this employee.
  </p>
) : null}
```

Bad:

```tsx
<Button disabled>Deploy employee</Button>
```

with no explanation.

If disabling hides validation feedback, allow submit and show validation errors instead.

---

# Cancel Action Rule

Cancel must have clear behavior.

Cancel may:

```text
close dialog
return to previous page
discard changes
ask before discarding dirty changes
reset draft
```

Do not add Cancel if behavior is unclear.

For dirty forms, protect unsaved changes.

---

# Success Rule

Success must confirm what changed.

Good:

```text
Changes saved.
Employee activated.
Knowledge source connected.
Invite sent.
Workflow created.
```

Bad:

```text
Success!
Done!
Great!
Completed.
```

Success must appear only after confirmed success.

Never show success before server confirmation for high-trust forms.

---

# Form Submission Outcome Rule

After successful submit, the UI must intentionally do one of these:

```text
show inline success
close dialog
navigate to created entity
advance to next step
reset form
show created object
refresh affected data
remain with saved state
```

Do not leave the user uncertain about whether anything happened.

---

# Cache Invalidation After Submit Rule

Form mutations must invalidate or update relevant queries.

Examples:

```text
Invite member:
invalidate members list

Update employee settings:
invalidate employee detail and employee lists if needed

Connect knowledge source:
invalidate knowledge source list and related readiness queries

Deploy employee:
invalidate employee detail, employee list, dashboard, activity feed

Update billing:
invalidate billing summary, plan, invoices
```

Do not submit successfully while stale data remains visible.

---

# Input Type Standards

Use correct input attributes.

```tsx
<Input type="email" autoComplete="email" />
<Input type="url" inputMode="url" />
<Input type="tel" autoComplete="tel" />
<Input inputMode="decimal" />
```

Correct input attributes improve mobile usability and accessibility.

---

# Email Field Rule

Email fields must validate with clear copy.

Good:

```ts
z
  .string()
  .trim()
  .min(1, "Enter email address.")
  .email("Enter a valid email address.")
```

Bad:

```text
Invalid email.
```

For member invites, use product label:

```text
Work email
```

---

# URL Field Rule

URL fields must validate format and protocol when relevant.

Good:

```ts
const websiteUrlSchema = z
  .string()
  .trim()
  .min(1, "Enter website URL.")
  .url("Enter a valid website URL.")
  .refine((value) => value.startsWith("https://"), {
    message: "Enter a website URL that starts with https://.",
  });
```

Do not say only:

```text
Invalid URL.
```

---

# Number Field Rule

Number inputs often produce strings.

Handle parsing intentionally.

Good:

```ts
const aiBudgetSchema = z.object({
  monthlyLimit: z.coerce
    .number()
    .positive("Enter a monthly limit greater than 0."),
});
```

Do not assume number input values are already numbers.

---

# Date Field Rule

Date fields must validate:

```text
format
range
start before end
allowed period
timezone expectations
```

Date range errors must be specific:

```text
Select an end date after the start date.
```

Do not compare date strings casually unless format guarantees it.

---

# Textarea Rule

Textareas need clear limits when limits exist.

Good:

```text
Description optional
Use 160 characters or fewer.
```

If text is used by AI employees, explain consequence:

```text
Employees use this description to understand when to use this workflow.
```

Do not accept large free text without purpose, limits, or safety review.

---

# Select Rule

Select fields require:

```text
visible label
clear placeholder
loading state when options are fetched
empty state when no options exist
disabled reason when unavailable
keyboard support
mobile support
```

Good placeholder:

```text
Select a channel
```

Bad:

```text
Select...
```

---

# Combobox Rule

Use combobox for large searchable option sets.

Good use cases:

```text
large employee list
knowledge sources
members
organizations
integrations
workflow actions
```

Must support:

```text
keyboard navigation
screen reader labels
empty search state
loading state
clear selection
mobile behavior
```

Do not build inaccessible custom comboboxes.

---

# Checkbox Rule

Checkbox labels must describe the selected state.

Good:

```text
Require review
```

Helper:

```text
Your team can approve messages before they are sent.
```

Bad:

```text
Enable
```

unless the enabled behavior is obvious from surrounding context.

---

# Switch Rule

Switches are for simple binary settings.

Use for:

```text
Require review
Send email notifications
Pause employee
```

Do not use switches for destructive or complex changes without explanation or confirmation.

High-risk toggles require consequence copy.

---

# Radio Group Rule

Use radio groups for small mutually exclusive choices.

Good:

```text
Require review
Reply automatically
```

Each option should include helper text when consequence matters.

Bad:

```text
Manual
Auto
```

when consequences are unclear.

---

# File Upload Rule

File upload fields must validate:

```text
file type
file extension
MIME type when available
file size
file count
empty file
duplicate file when relevant
upload state
processing state
failure recovery
remove file behavior
```

Good copy:

```text
Upload a PDF, DOCX, or TXT file under 20 MB.
```

Do not rely only on backend validation.

Backend still enforces security.

---

# File Upload Accessibility Rule

File upload must include:

```text
visible label
supported formats
size limit
selected file name
remove file action
upload progress text
error text
retry action
keyboard support
mobile support
browse/select option
```

Do not rely only on drag-and-drop.

---

# File Preview Rule

File preview must be safe.

Rules:

```text
do not execute uploaded content
do not render uploaded HTML directly
revoke object URLs
show file name as text
validate preview type
handle preview failure
```

For unsupported previews:

```text
Preview is not available for this file type.
```

---

# Deployment Form Rule

Deploy employee forms are high-trust.

Required:

```text
channel selection
knowledge source assignment when required
reply mode selection
readiness validation
permission handling
review step when needed
specific submit copy
pending state
server-confirmed success
safe-state failure copy
cache invalidation
polling if deployment continues asynchronously
```

Good CTA:

```text
Deploy employee
```

Pending:

```text
Deploying employee...
```

Failure:

```text
Deployment failed. Your setup was saved. Review setup and try again.
```

Never show active state before server confirms activation.

---

# Automatic Reply Form Rule

Automatic reply configuration must make consequences clear.

Good option:

```text
Reply automatically
```

Description:

```text
This employee can reply without manual approval after deployment.
```

Default should be safe:

```text
Require review
```

unless product explicitly decides otherwise.

Avoid vague labels:

```text
Auto
Smart mode
Enable
```

---

# Knowledge Source Form Rule

Knowledge source forms must explain business context.

Required:

```text
source type
source name
URL or file input when relevant
supported formats
sync behavior
permissions when integration-based
source readiness
recoverable sync errors
```

Good CTA:

```text
Connect source
```

Pending:

```text
Connecting source...
```

Success:

```text
Source connected.
```

Avoid technical terms:

```text
embedding
vector
index
ingestion
worker
```

Use product terms:

```text
source
sync
ready
needs review
```

---

# Workflow Form Rule

Workflow forms must protect structure.

Required validation:

```text
workflow name
trigger
at least one step when required
valid actions
valid routing rules
required channel/integration
step-level errors
publish readiness
```

Workflow builder may use React Hook Form, `useFieldArray`, local reducer, or feature store depending on complexity.

Saved server state and unsaved draft state must be clearly separated.

---

# Invite Member Form Rule

Invite forms must validate:

```text
work email
role
permission to invite
self-invite if relevant
existing member if server returns validation
```

Good fields:

```text
Work email
Role
```

CTA:

```text
Send invite
```

Success:

```text
Invite sent.
```

Permission error:

```text
Only admins can invite members.
```

---

# Billing Form Rule

Billing forms are high-trust.

Rules:

```text
do not collect card data unless approved payment architecture exists
do not store payment data in frontend state
do not log billing payloads
submit copy must be specific
billing changes must wait for server confirmation
errors must include safe state
payment provider errors must be mapped to product copy
payment SDK must not load globally
```

Good failure:

```text
Could not update billing details. No billing changes were made.
```

Never fake billing success.

---

# Permission Form Rule

Permission and role forms are high-trust.

Required:

```text
current role visible
role change consequence explained
self-lockout prevention when possible
permission denied state
server-confirmed success
cache invalidation for members and permissions
destructive member removal confirmation when needed
```

Do not optimistically remove or change sensitive access unless product and backend support it safely.

---

# Form Layout Rule

Forms must be structured and scannable.

Use:

```text
form title
short description
sections
field groups
visible labels
helper text
inline errors
form-level errors
clear action row
one primary CTA
secondary action when needed
```

Avoid:

```text
long ungrouped forms
too many fields in one section
hidden required fields
unclear submit location
multiple primary CTAs
desktop-only two-column forms
field errors far from fields
```

---

# Form Section Rule

Use sections for complex forms.

Good section titles:

```text
Employee details
Knowledge source
Reply mode
Permissions
Billing details
Workflow steps
Deployment review
```

Bad:

```text
Basic
Advanced
Misc
Other
Configuration
```

Section names must be user-facing and specific.

---

# Form Action Row Rule

Actions must have clear hierarchy.

Good:

```tsx
<div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
  <Button type="button" variant="secondary">
    Cancel
  </Button>
  <Button type="submit">
    Save changes
  </Button>
</div>
```

Rules:

```text
one primary action
secondary action visually secondary
destructive action explicit
mobile order safe
pending state disables repeated submit
```

---

# Mobile Form Rule

Mobile forms must be usable with touch and virtual keyboards.

Requirements:

```text
single-column by default
large touch targets
labels above fields
errors near fields
helper text visible
submit action reachable
secondary action less prominent
no horizontal overflow
keyboard type matches field
mobile selects/comboboxes work
bottom sheets do not hide submit actions
toasts do not cover form actions
```

Do not squeeze desktop forms into mobile.

Mobile forms need intentional design.

---

# Touch Target Rule

Interactive form controls must meet touch target requirements.

Minimum:

```text
44px
```

Preferred:

```text
48px to 56px
```

Small icon controls in forms still need sufficient hit area and accessible labels.

---

# RTL and Persian Form Rule

Forms must support Persian and RTL when localized.

Rules:

```text
labels align naturally
helper and error text align with fields
URLs and emails remain readable LTR
CTA order follows RTL design hierarchy
field groups remain scannable
mixed Persian-English values are handled safely
```

Persian examples:

```text
نام کارمند
آدرس وب‌سایت
ایمیل کاری
نقش عضو
نام جریان کاری
منبع دانش
```

Persian errors:

```text
نام کارمند را وارد کنید.
آدرس وب‌سایت معتبر وارد کنید.
یک کانال انتخاب کنید.
حداقل یک منبع دانش انتخاب کنید.
```

Avoid:

```text
سابمیت
اوکی
ورودی نامعتبر است
فیلد الزامی است
```

---

# Form Accessibility Rule

Every production form must support:

```text
visible labels
programmatic labels
helper text association
error association
keyboard navigation
screen reader error discovery
focus management
required indication
disabled explanation
fieldset/legend for grouped choices
semantic submit behavior
mobile assistive technology
```

Accessibility is part of form correctness.

---

# Focus First Error Rule

After failed submit, focus should move intentionally.

Guidance:

```text
short forms:
focus first invalid field

long forms:
focus error summary

dialog forms:
keep focus inside dialog

mobile forms:
avoid focus jumps that hide context
```

Use React Hook Form `shouldFocusError` intentionally.

---

# Required Indicator Rule

Required fields must be clear.

Good approaches:

```text
mark optional fields instead of every required field
use Required text when needed
use aria-required when appropriate
avoid relying on asterisk alone
```

Do not rely only on `*`.

---

# Fieldset Rule

Use fieldset/legend or accessible equivalent for grouped choices.

Good use cases:

```text
reply mode radio group
role selection
notification preferences
billing frequency
permissions group
workflow trigger options
```

Grouped controls need accessible context.

---

# Async Field Validation Rule

Async field validation must be debounced and clear.

Examples:

```text
Checking availability...
Name is available.
This name is already used.
```

Use sparingly.

Do not validate on every keystroke without debounce.

Do not block typing with network requests.

---

# Autosave Rule

Autosave requires explicit product support.

Requirements:

```text
clear Saving state
clear Saved state
recoverable save failure
no data loss
debounced writes
dirty state handling
conflict behavior
accessible announcements when meaningful
```

Copy:

```text
Saving...
Saved
Could not save changes.
```

Do not fake autosave.

---

# Form Security Rule

Forms must not:

```text
store secrets in localStorage
log sensitive values
send full payloads to analytics
trust hidden fields
trust frontend-only permissions
send unvalidated payloads
render unsanitized user input
include API keys in form values
submit duplicate high-risk requests
```

Security-sensitive fields include:

```text
payment details
API keys
integration secrets
private knowledge text
auth tokens
invite tokens
customer messages
```

---

# Hidden Field Rule

Do not rely on hidden fields for important product state.

Use typed props, route params, or payload mappers.

Hidden fields are acceptable only when they represent real safe form data.

Never store sensitive data in hidden fields.

---

# Form Performance Rule

Large forms must avoid unnecessary re-renders.

Use:

```text
schemas outside components
default values outside components or memoized
field-level components
useWatch for specific fields
memoized option lists
controlled components only when needed
React Hook Form field arrays
```

Avoid:

```text
watching entire form
schema creation inside render
large option arrays recreated every render
global state updates on every keystroke
manual useState for every field
expensive validation on every change
```

Forms must remain responsive while typing.

---

# Option List Rule

Option lists must be typed and product-copy safe.

Good:

```ts
const replyModeOptions = [
  {
    value: "require_review",
    label: "Require review",
    description: "Your team can approve messages before they are sent.",
  },
  {
    value: "reply_automatically",
    label: "Reply automatically",
    description:
      "This employee can reply without manual approval after deployment.",
  },
] satisfies Array<{
  value: ReplyMode;
  label: string;
  description: string;
}>;
```

Avoid:

```text
Manual
Auto
Mode 1
Mode 2
Enabled
Disabled
```

when consequences are unclear.

---

# Schema Transform Rule

Use Zod transforms carefully.

Allowed:

```text
trim strings
normalize empty string to null when domain requires it
coerce numbers intentionally
normalize URL when safe
```

Avoid transforms that:

```text
hide business logic
change user intent unexpectedly
mix API payload mapping into schema
make errors hard to understand
```

Payload mapping often belongs outside the schema.

---

# String Trim Rule

Trim user text fields where appropriate.

Good:

```ts
z.string().trim().min(1, "Enter employee name.")
```

Use carefully for fields where spaces may be meaningful.

Most names, emails, URLs, and organization names should be trimmed.

---

# Validation Severity Rule

Not every issue is an error.

Use:

```text
helper text:
guidance before input

warning:
possible consequence

error:
blocking invalid input

success:
use sparingly for useful confirmation
```

Example warning:

```text
This employee can be deployed, but answers may be limited without a knowledge source.
```

If deployment is blocked:

```text
Assign at least one knowledge source before deploying.
```

Be precise.

---

# Testing Rule

Production forms must be tested when behavior is meaningful.

Test:

```text
visible labels
default values
required validation
format validation
cross-field validation
conditional fields
submit payload
pending state
server field errors
form-level errors
success state
dirty reset
cancel behavior
high-risk confirmation
permission denied
safe-state failure copy
```

Do not test only that the form renders.

---

# Form Test Examples

Good validation test:

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

Good pending test:

```ts
expect(
  screen.getByRole("button", { name: "Deploying employee..." })
).toBeDisabled();
```

Tests should protect product behavior.

---

# Form Review Checklist

Before shipping a form, verify:

```text
Does it use React Hook Form?
Does it use Zod?
Are form values inferred from schema?
Are default values explicit?
Are labels visible?
Are placeholders only examples?
Is helper text useful?
Are validation messages specific?
Are cross-field rules in schema?
Are conditional fields modeled safely?
Are server errors mapped to fields or form-level errors?
Is submit copy specific?
Is pending copy specific?
Are duplicate submits prevented?
Are dirty states handled where needed?
Does success confirm what changed?
Does failure preserve user input?
Are high-risk actions reviewed or confirmed?
Does it work on mobile?
Is it accessible?
Are API payloads typed and mapped?
Is cache invalidation handled after submit?
Does it avoid backend jargon?
Does it protect sensitive data?
Are meaningful tests added when needed?
Does Persian/RTL copy remain natural when localized?
```

If any applicable answer is no, refactor before shipping.

---

# Form Decision Tree

Ask:

### Is this a real form?

Use React Hook Form.

### Does it need validation?

Use Zod.

### Is the form submitted to the server?

Use a mutation hook.

### Is this just a local search input?

Local state may be enough.

### Does the field have a required format?

Validate it and show helper text.

### Does validation depend on multiple fields?

Use Zod `superRefine`.

### Does the form change billing, permissions, deployment, automation, or deletion?

Add explicit review or confirmation.

### Does server return field errors?

Map them to fields.

### Could the user lose work?

Use dirty-state protection.

### Is the form long or complex?

Use sections and error summary.

### Is this mobile?

Use one-column layout and visible guidance.

---

# Forbidden Form Patterns

Never ship:

```text
production forms without React Hook Form
production validation without Zod
manual form state for complex forms
placeholder-only labels
generic Required errors
generic Submit buttons
buttons without explicit type inside forms
defaultValues as empty cast
schema and type duplicated manually
raw API calls inside submit handlers
untyped submit values
server errors shown raw
toast-only critical form errors
field errors far from fields
hidden required guidance in tooltips
disabled submit without explanation
background refetch overwriting dirty form
billing success before server confirmation
deployment active before server confirmation
knowledge source ready before server confirmation
unvalidated URL/email/file inputs
high-risk Yes/No confirmation dialogs
form data persisted with sensitive values
form payloads logged to console
form payloads sent wholesale to analytics
forms that work only on desktop
forms without accessible labels and errors
```

---

# Ariyo Forms Golden Rule

A form is not complete when it submits.

A form is complete when users can understand, complete, correct, submit, recover, and trust it.

---

# Senior Forms Rule

Do not build forms as input collections.

Build forms as typed product workflows.

---

# Final Rule

Ariyo forms and validation are production-ready only when React Hook Form owns form state, Zod owns validation, labels and errors are accessible, copy is specific, server errors are recoverable, mutations are typed, high-risk actions are safe, user input is protected, mobile behavior is intentional, and every form supports real-world success, failure, permissions, and recovery.
