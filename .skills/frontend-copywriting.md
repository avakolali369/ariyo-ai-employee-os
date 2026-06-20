# Ariyo Frontend Copywriting Skill

Version: 1.0.0

Product: Ariyo

Purpose: Act as a Senior UX Writer, Product Copy Lead, Conversion Copywriter, and Microcopy Quality Guardian for Ariyo.

Audience: Codex Agents and AI-assisted development tools.

Priority: Non-negotiable.

Dependencies:

- frontend-design.md
- frontend-components.md
- frontend-responsive.md
- frontend-motion.md

If conflicts exist:

- frontend-design.md wins for product philosophy.
- frontend-components.md wins for component behavior.
- frontend-responsive.md wins for responsive layout behavior.
- frontend-motion.md wins for motion and transition behavior.
- frontend-copywriting.md wins for product language, tone, UX copy, microcopy, CTA copy, error copy, empty states, onboarding copy, and user-facing text.

Copy is interface.

Copy is product behavior.

Copy is trust.

No user-facing text should be treated as placeholder.

---

# 1. Copywriting Philosophy

Ariyo copy must help users understand, act, trust, recover, and continue.

Ariyo copy must feel:

```text
clear
calm
confident
professional
human
business-oriented
specific
premium through restraint
```

Ariyo copy must never feel:

```text
hype-driven
magical
childish
robotic
technical by default
vague
salesy
playful
noisy
```

Core copy principle:

```text
Reduce uncertainty.
```

Ariyo should sound like:

```text
a trusted operations partner
a senior product expert
a calm deployment guide
a business assistant that respects time
```

Not like:

```text
a chatbot
a gaming app
a motivational coach
a sci-fi AI demo
a developer console
a generic SaaS product
```

---

# 2. Voice, Tone and Brand Language

## 2.1 Voice Statement

Ariyo is calm, clear, professional, confident, helpful, business-oriented, premium, human, operational, and trustworthy.

Balance:

```text
competent without being cold
helpful without being chatty
confident without overpromising
premium without being vague
human without being casual
simple without being simplistic
```

## 2.2 Tone by Context

Default:

```text
clear, concise, confident, neutral, professional
```

Action:

```text
specific, verb-led, outcome-focused
```

Loading:

```text
specific, progressive, calm, transparent
```

Success:

```text
brief, confirmed, calm, next-step aware when needed
```

Error:

```text
calm, specific, recoverable, non-blaming
```

Warning:

```text
clear, consequence-aware, non-alarming
```

Empty:

```text
helpful, actionable, non-judgmental, business-oriented
```

Billing:

```text
transparent, precise, calm, non-pressuring
```

Security and permission:

```text
reassuring, specific, controlled, trustworthy
```

## 2.3 Brand Language Formula

Use:

```text
Action + Object + Outcome
Action + Why it matters
What happened + How to recover
What changed + Next useful action
```

Examples:

```text
Hire employee
Add a source so your employees can answer with business context.
Could not connect this source. Check the URL and try again.
Employee activated. View performance from the dashboard.
```

---

# 3. Vocabulary System

## 3.1 Primary Concept

Use `employee` as the default product object.

Use `AI employee` when introducing the concept to new users or in marketing-adjacent UI.

Avoid for employees:

```text
agent
bot
assistant
plugin
AI unit
AI worker
chatbot
model
```

## 3.2 Official Product Vocabulary

Use:

```text
employee
AI employee
marketplace
knowledge source
business context
deployment
workflow
integration
channel
task
activity
performance
insight
AI cost
workspace
organization
sync
connected
active
ready
needs review
failed
```

Avoid:

```text
LLM
embedding
vector
pipeline
runtime
payload
stack trace
HTTP status
worker
queue
token burn
AI brain
mission control
```

## 3.3 Official Action Vocabulary

Use:

```text
Hire
Deploy
Connect
Add
Save
Review
Activate
Create
Invite
Import
Sync
Retry
View
Edit
Remove
Disconnect
Upgrade
Track
Open
Close
Cancel
Confirm only when unavoidable
```

Avoid:

```text
Submit
Proceed
Utilize
Initiate
Execute
Leverage
Authorize provider
Run job
```

## 3.4 Status Vocabulary

Use:

```text
Ready
Active
Inactive
Draft
Pending
Connecting
Connected
Disconnected
Syncing
Synced
Failed
Needs review
Paused
Completed
Canceled
Expired
Invited
Accepted
Declined
```

---

# 4. CTA and Button Copy Rules

A button is a promise.

Every CTA must answer:

```text
What action will happen?
What object will be affected?
Is this risky or reversible?
```

Default formula:

```text
Verb + Object
```

Good:

```text
Hire employee
Deploy employee
Connect source
Add knowledge source
Save changes
Create workflow
Retry sync
Delete workflow
Disconnect source
Upgrade plan
```

Bad:

```text
Submit
Proceed
Continue
Click here
OK
Done
Yes
No
Start
Go
Install agent
Launch bot
```

High-risk CTAs must always name the action and object.

---

# 5. Form Labels, Helper Text and Validation Copy

Forms are decision points.

Rules:

```text
Every input has a visible label.
Placeholder never replaces label.
Helper text explains why/how/format/consequence.
Validation tells users what to fix.
Do not blame users.
Do not expose schema/backend messages.
Reserve space for helper/error text when possible.
Do not validate aggressively while typing.
```

Good validation:

```text
Enter a valid website URL.
Select a channel.
Use at least 12 characters.
Choose at least one knowledge source.
```

Bad validation:

```text
Invalid.
Required.
Wrong input.
Schema error.
```

Good helper:

```text
Employees use this source to answer with business context.
You can change this later.
Invoices and billing updates will be sent here.
```

---

# 6. Error Message System

Errors are trust moments.

Error formula:

```text
What happened + How to recover
```

For critical flows:

```text
What happened + What is safe + How to recover
```

Good:

```text
Could not save employee settings. Try again.
Could not connect this source. Check the URL and try again.
Deployment failed. Your setup was saved. Review the failed step and try again.
Only admins can change this setting.
```

Bad:

```text
Something went wrong.
Error.
Unknown error.
Backend error.
HTTP 500.
OAuth failed.
Permission denied.
```

Recovery CTAs:

```text
Try again
Retry sync
Review setup
Check permissions
Edit URL
Reconnect
Contact support
```

---

# 7. Success, Toast and Feedback Copy

Feedback confirms reality.

Success copy must say what changed.

Good:

```text
Changes saved.
Employee hired.
Employee activated.
Knowledge source connected.
Workflow created.
Invite sent.
```

Bad:

```text
Success!
Done!
Awesome!
Congrats!
Boom!
Your AI is alive!
```

Toast rules:

```text
short
specific
one idea
not critical-only
no stacking routine success
Undo only when truly reversible
```

Good undo:

```text
Source removed.
Undo
```

---

# 8. Loading, Progress and Skeleton Copy

Never show generic loading when Ariyo knows what is happening.

Good:

```text
Saving changes...
Hiring employee...
Deploying employee...
Connecting source...
Syncing source...
Loading employee profile...
Preparing source for employee answers...
```

Bad:

```text
Loading...
Processing...
Please wait...
AI is thinking...
Generating embeddings...
Running job...
```

Long flows need step-based progress.

Deployment:

```text
Preparing employee
Connecting channel
Checking knowledge sources
Reviewing setup
Activating employee
```

Knowledge sync:

```text
Checking source
Reading content
Updating knowledge source
Preparing source for employee answers
Source ready
```

Fake percentages are forbidden.

---

# 9. Empty State Copy

Empty states are activation moments.

Formula:

```text
No [object] yet.
[Action] to [business outcome].
```

Good:

```text
No knowledge sources yet.
Add a source so your employees can answer with business context.
```

CTA:

```text
Add knowledge source
```

Bad:

```text
Nothing here.
No data.
Empty.
Looks lonely here.
```

Search empty:

```text
No employees match “sales”.
Try a different search or clear filters.
```

---

# 10. Onboarding Copy

Onboarding is not a tour. It is a guided path to first business value.

Goal:

```text
First Time To Value under 5 minutes.
```

Recommended flow:

```text
Choose employee
Add knowledge source
Connect channel
Review setup
Deploy employee
View dashboard
```

Each onboarding screen must answer:

```text
What is this step?
Why does it matter?
What should I do now?
What happens next?
```

Good:

```text
Choose your first employee
Start with the task you want Ariyo to handle first.
```

Bad:

```text
Welcome to the future of work.
Unlock the power of AI.
Explore everything Ariyo can do.
```

---

# 11. Dashboard, Analytics and Data Copy

Data copy must be accurate, calm, specific, and decision-oriented.

Rules:

```text
Metrics need clear labels.
Values need units.
Comparisons need baselines.
Trends must avoid drama.
Estimates must say estimated.
Do not claim causality without proof.
Charts need clear titles and summaries.
Color cannot be the only meaning.
```

Good:

```text
Response time improved by 18% compared with last week.
Estimated AI cost
Cost increased after employee activity increased.
Not enough activity yet to show a trend.
```

Bad:

```text
Your AI team crushed it.
Costs exploded.
Guaranteed ROI.
Token burn.
Magic score.
```

---

# 12. Marketplace and Employee Profile Copy

Marketplace copy should feel like hiring business roles.

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
```

Employee cards must include:

```text
employee name
short business outcome
status
primary CTA
secondary CTA when useful
price/plan note when relevant
```

Good card:

```text
Customer Support Employee
Helps respond to common customer questions with business context.
CTA: Hire employee
```

Bad:

```text
Support Genius Bot
Supercharge support with AI magic.
CTA: Install agent
```

---

# 13. Deploy Employee and Knowledge Sync Copy

Deployment copy must make activation feel safe.

Distinguish:

```text
Hired: employee added but not active
Ready to deploy: requirements complete
Deploying: activation in progress
Active: employee can respond
```

Good deployment review:

```text
Review deployment
Review these settings before this employee starts responding.
CTA: Deploy employee
```

Good success:

```text
Employee activated.
```

Good failure:

```text
Deployment failed. Your setup was saved. Review the failed step and try again.
```

Knowledge source copy must explain readiness.

Good:

```text
Source synced.
This source is ready for employees.
Sync failed. Your source remains connected. Try again.
```

Bad:

```text
Embeddings generated.
Vector index ready.
Ingestion failed.
AI brain updated.
```

---

# 14. Mobile, Accessibility, Persian and RTL Copy

## 14.1 Mobile

Mobile copy must be shorter but not vague.

Good:

```text
Deploy employee
Connect source
Retry sync
```

Bad high-risk mobile CTA:

```text
Delete
```

when object is unclear.

## 14.2 Accessibility

Accessible copy must not rely on color, motion, icon, hover, or position alone.

Required:

```text
visible labels
specific accessible button names
text-based statuses
associated errors
meaningful loading labels
chart summaries
localized screen reader labels
```

Good accessible labels:

```text
View Customer Support Employee profile
Close deployment dialog
Retry knowledge source sync
```

## 14.3 Persian

Ariyo Persian must be natural, calm, professional, and action-specific.

Use:

```text
کارمند
کارمند هوش مصنوعی
بازارچه
منبع دانش
زمینه کسب‌وکار
راه‌اندازی
جریان کاری
یکپارچه‌سازی
کانال
همگام‌سازی
عملکرد
هزینه هوش مصنوعی
```

Good Persian:

```text
تغییرات ذخیره شد.
کارمند فعال شد.
منبع دانش وصل شد.
آدرس وب‌سایت معتبر وارد کنید.
```

Bad Persian:

```text
عملیات با موفقیت انجام شد.
خطا رخ داد.
ورودی نامعتبر است.
بات نصب شد.
ایجنت فعال شد.
```

## 14.4 RTL

RTL copy must preserve reading order, action hierarchy, mixed LTR readability, accessible names, and form clarity.

Avoid directional instructions:

```text
Click the button on the right.
```

Use action instructions:

```text
Select Deploy employee.
```

---

# 15. Definition of Done and Forbidden Patterns

Ariyo copy is production-ready only when it is:

```text
clear
specific
calm
human
business-oriented
actionable
accessible
mobile-safe
localized when needed
consistent with Ariyo vocabulary
free of hype
free of backend jargon
free of placeholder text
safe for high-trust workflows
```

Global QA questions:

```text
Does the user understand what this means?
Does the user know what to do next?
Does the copy name the object or action clearly?
Does the tone feel calm and premium?
Does the copy avoid AI hype?
Does the copy avoid backend jargon?
Does the copy support accessibility?
Does the copy work on mobile?
Does the copy translate naturally into Persian?
Does the copy preserve trust during errors, loading, deployment, and billing?
```

Forbidden placeholder copy:

```text
Lorem ipsum
TODO
TBD
Placeholder
Title goes here
Description goes here
Button
Helper text
Error message
Dummy data
Untitled
```

Forbidden generic copy:

```text
Something went wrong
Success
Error
Invalid
Required
Done
OK
Submit
Proceed
Continue
Click here
No data
Nothing here
Loading
Processing
Unknown error
```

Forbidden AI hype:

```text
AI magic
AI brain
Supercharged AI
Revolutionary AI
Unlock AI power
Autonomous genius
Your AI is alive
AI superstar
Future of work
Neural intelligence
```

Forbidden backend jargon:

```text
HTTP error
API error
Payload
Stack trace
Runtime
Worker
Queue
OAuth failed
LLM
Embedding
Vector
Index
Chunk
Pipeline
Orchestration
Mutation
```

Forbidden Persian patterns:

```text
عملیات با موفقیت انجام شد.
لطفاً نسبت به تکمیل فرم اقدام فرمایید.
همه چی اوکیه!
بزن بریم!
هوش مصنوعی شما زنده شد!
ایجنت فعال شد.
بات نصب شد.
امبدینگ ساخته شد.
دیتا موجود نیست.
```

---

# Final Rule

Ariyo copy is production-ready only when users can understand the state, trust the system, take the right action, recover from problems, and continue their work without confusion, hype, or technical translation.
