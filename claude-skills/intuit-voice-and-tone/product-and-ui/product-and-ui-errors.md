# Errors

**Source:** https://contentdesign.intuit.com/product-and-ui/errors/

---

Despite our best efforts, some errors are inevitable. Clear error messages that tell people what happened and what they can do about it are essential. Embrace errors and the messages that explain them as make-or-break moments to build trust and salvage experiences.

Work with your product designer to understand if there are visual or interaction design patterns you can use to prevent errors, like warning messages or helper text.

---

## How to think about writing error messages

Designing error messages shouldn't be a last-minute project. At the beginning of the design process, think about possible errors that could occur in the experience. Always account for common problems like:

- Data sync failures
- Lack of internet connection
- Insufficient permissions
- Back-end failures

### Are there alternatives?

Error messages won't fix a broken experience. Before drafting an error message, consider how you could improve other elements of the experience to prevent the error in the first place.

Sometimes, page-level error messages aren't necessary. Use [field-level errors](https://contentdesign.intuit.com/product-and-ui/fields/#field-level-errors) so people know which info to change before moving forward.

| Do | Don't |
|----|-------|
| "Address not found" (field-level error) | "Something's not right. Please make sure your address information is correct." (page-level when field-level would do) |
| Design for the least amount of errors. Give people flexibility to make an informed decision before being blocked. | Don't provide an error message after-the-fact when we know they'll be blocked. |

### 1. Investigate

Ask engineers, product designers, and product managers on your team for more context: requirements, edge cases, solutions, and possible causes. If there are multiple causes that could trigger an error, make sure you have a good grasp of each.

### 2. Gather

If you can reproduce the error in product or staging, find screenshots or video references for what's going on in the context of the full flow.

### 3. Write for the error, not the container

Decide on the message before choosing a component for it.

### 4. Collect

Over time, build out your own collection of error messages for your projects. A shareable doc that's easy to update can be a valuable resource for you and your partners.

---

## Principles

### Be clear

Use simple language to explain what happened (the error) and what people can do about it (the resolution). Only communicate the cause of the error if people need to know it, and you can explain it in plain language at a 5th- to 8th-grade reading level.

**Examples**
| Do | Don't |
|----|-------|
| Check your internet connection. You're not connected to the internet right now. Check your connection and refresh. [Refresh] | Network connection error. This operation could not be completed because the server connection has failed. Please check your network settings. |
| Try reducing this file to 30 MB or less. | Your file's too big. |
| Having trouble with your password? We can help you reset it. [Reset password] | Sign-in failed. Your credentials are invalid. Please try again. |
| Try exporting or saving this as a .pdf, .jpg or .png file. | We don't support this type of file. |
| We couldn't undo one or more transactions. We need to fix some things on our end. Give us a moment, then try again. | We couldn't undo the transaction(s) due to an invalid resolved entity. Try again later. |

### Avoid error codes

Don't include error codes in messages. They're clunky technical jargon that often fails to provide meaningful information.

Error codes can cause confusion and frustration, and most of the time the solution is just "try again later." You can work with your engineer to make sure error codes are logged on the back-end for debugging—but customers don't have to see them.

**Examples**
| Do | Don't |
|----|-------|
| Your account is connected, but your forms aren't ready yet. | Forms not ready (902). |

### Keep it brief

Multiple lines of text are hard to scan—especially when someone is frustrated or stressed. [Write a brief message](https://contentdesign.intuit.com/foundations/writing-small/). However, clarity trumps brevity. A short message that confuses people is still a bad message.

**Examples**
| Do | Don't |
|----|-------|
| Update your billing profile before adding or editing data. [Update billing profile] | You cannot add or edit data until you update your billing profile which can be accessed from the settings menu in your client list. |
| We couldn't use this file to auto-fill your return. | Our extraction capability failed and we couldn't get any data from your file. |
| Resubscribe to make changes. If you want to make changes to your account info, resubscribe to QuickBooks Online. | For your information: Sorry, you can't add data because your QuickBooks subscription isn't active. Please update your subscription or contact your administrator. |
| You already added a Form 1040. | You already added a Form 1040, and our system only allows you to upload one. |
| Select a different type of account. Go to App settings to select a different type of account for this transaction. Then try again. | Error: We couldn't add the transaction(s) because you need to check your account details before you continue. |

### Be helpful

When possible, error messages should help people resolve errors quickly. Give them a one-click solution (a button or link) so they can resolve the error themselves. If not possible, link to a support article.

Feeling empowered to resolve most errors themselves gives people more confidence and spares them from calling customer support.

Avoid humor or cleverness in error messages. Even for low-stakes errors, people won't feel like laughing in already-tense situations. Humor can also seem condescending or make light of their problem.

**Examples**
| Do | Don't |
|----|-------|
| Your subscription payment didn't go through. Update your billing info to e-file 1099s. | Your subscription is restricted due to a payment failure. Update your billing info to avoid suspension of your account. While your account is restricted, you can't e-file 1099s. |
| This form isn't from 2024, but we can help you type it in. | We can't upload your file right now. |
| Sign in to continue. | You have not been logged in. |
| This looks like a 1099. Let's jump to that section. | This form seems to have a lost identity. |
| We don't currently offer upgrades for annual subscriptions. Your current subscription is on annual billing. [Cancel] [Switch to monthly billing] | Oops! You don't meet the eligibility requirements for upgrading. [OK] |

### Be specific

If you have precise info on when someone should check back, include it. Being specific reassures people that the situation is controlled and manageable. If you can’t provide exact info, try to be transparent about that. 

There will be times when we just don’t know what’s happening. In these cases, it's OK to keep it generic with something like "Something isn't working. We're fixing some things on our end. Try again later." But it's still worth checking with engineers so you have a good grasp on potential error causes.

Giving people the option to "try again" is always better than leaving them at a dead end—but limit the "try agains" when a more specific action is available.

| Do | Don't |
|----|-------|
| Your role doesn't have access to this. To view this, ask your account admin to change your permissions. | We're sorry! You don't have access rights to view this data. |
| Rename this file using 250 characters or less. | This file name is too long. |
| It's time to update your browser. To keep using QuickBooks, update or switch to a browser we support by Feb 1, 2021. [Find a supported browser] | Hmm…something isn't right. QuickBooks is no longer supported on this browser. |
| We couldn't use this file to auto-fill your return. Try adding it again. | Thanks for hanging in there with us. We're still having trouble. |
| Update your billing info. We couldn't process your payment. Update your billing info by 3/22/2022 to resume your subscriptions and keep the same pricing. | Your subscriptions were suspended because we couldn't process your payment. Want to keep your pricing and resume your plans? |

---

## Voice and tone

### Use passive voice sparingly

We use active voice most of the time. However, passive voice can:
- Be used when the person performing the action isn't important
- Help with brevity
- Soften the blow
- Avoid blame when the error was caused by the user

**Examples**
| Do | Don't |
|----|-------|
| Your role changed. You were signed out because your QuickBooks admin changed your role. Sign in again to keep using QuickBooks. | You don't have sufficient permissions. Your account administrator changed your role and caused you to be signed out. Sign in again to proceed. |

### Avoid blame and judgment

Even if the user caused the error, avoid blaming or judging them. Don't emphasize their mistake—focus on how to fix the problem. When the error is our fault, we can communicate that as long as it's relevant. However,  use "sorry" sparingly.

**Examples**
| Do | Don't |
|----|-------|
| Update your payment method. Your card on file has expired. To keep using QuickBooks Online, update your payment method. [Cancel] [Update payment method] | Your subscription is delinquent. Your credit card on file has expired. Update this immediately to avoid suspension of your account. |

### Match tone to severity
Error messages can trigger a lot of negative feelings. We can make the situation even worse if we use the wrong tone. 

| Level | Description | Tone |
|-------|-------------|------|
| **Minor** | People can usually fix this themselves with minimal time and inconvenience. Examples: expired credit card, no internet connection, wrong password. | Casual and conversational |
| **Moderate** | People can fix this but it may require more time or effort (more steps, or needing to ask someone else). Examples: data sync wait, call credit card company, permissions error. | Neutral, gets straight to the point, offers one-click solution |
| **Severe** | People can't fix this themselves, and it may result in significant inconvenience. Examples: payment failure due to suspected fraud, app failure with data loss. Be careful what you say. For example, never communicate that we suspect fraud in the event of payment failure because a) the system could have a bug and b) we don’t want to give out sensitive info that could end up in the wrong hands. If it’s a serious issue resulting in data loss or other consequences that could negatively impact someone, we can link to detailed instructions and suggest people call customer support. | Neutral, to avoid escalating an already-tense situation |

#### Minor error examples

| Example |
|---------|
| You're already subscribed. No need to subscribe again—you're all set. |
| We couldn't turn off this setting. Give us a moment to catch up when turning settings on and off. Then try again. |

#### Moderate error examples

| Example |
|---------|
| Our info is out of sync. We need to fix some things on our end. Sign out and try again later. |
| Something isn't working. We ran into an issue on our end and need to reload your data. It could take a minute or two. |

#### Severe error examples

| Example |
|---------|
| Your payment didn't go through. Try a different payment method, or contact your bank or card issuer for more information. |
| We experienced an issue. Please contact us at 1-800-555-5555 so we can walk you through next steps. |

### Words to handle with care

Avoid these words in error messages:

| Word | Why |
|------|-----|
| invalid, prohibited, restricted, fail, failure, declined, denied, forbidden, fraud, suspended | Overly technical, negative, or non-inclusive |
| Wrong | Overly negative, could imply blame or judgment |
| Whoops, oops | Can give the impression we're making light of the error |
| Hmm, yikes | May imply we don't know what's happening |
| Sorry | Use sparingly—only when we've actually failed |
| Please | Avoid unless asking the customer for extraordinary effort, or if a major error or defect occurs. |
| Error | States the obvious—people know when they've encountered an error |

---

## What to include

Error messages usually consist of 2 or 3 things:

1. **Headline** — What happened or what they can do to fix the problem
2. **More info (optional)** — Additional context people need to know
3. **Call to action** — What to do to solve the problem

### Headline

Tell people what happened or what they can do to fix the problem.

- If it's our issue, be transparent so people know they didn't do anything wrong.
- If it's a user error, avoid blame—focus on the effect and how to fix it.
- Try to keep headlines to one line.

### More info (optional)

Include body content only if there's more info people need to know. Keep error messages brief.

### Calls to action

Tell people what to do to solve the problem. If the solution is easy to understand and guaranteed to work, you can put the CTA in the headline to keep the message brief.

Use your best judgment when deciding whether to have one primary CTA or a primary and a secondary CTA.

#### Example

> **This sales channel is already connected**
>
> This channel is already up and running. Connect another channel, or return to Overview.
>
> [Connect another channel] [Return to overview]

> **Call your card issuer**
>
> For your security, call your card issuer to authorize this purchase.

### Error messages from third parties

Occasionally we need to show error messages from third parties (like financial institutions). To make this less jarring, craft a brief error message and follow it with the third-party content in a callout box.

**Example:**

> Wells Fargo sent you this message about the info you tried to import:
> [The content from Wells Fargo appears here.]

---

## Related guidance

- [Exclamation points](https://contentdesign.intuit.com/style/punctuation/#exclamation-points)
- [Keep it conversational](https://contentdesign.intuit.com/style/principles/#talk-to-your-friends)
- [How we talk about bad news](https://contentdesign.intuit.com/content-patterns/bad-news/)
- [Field-level errors](https://contentdesign.intuit.com/product-and-ui/fields/#field-level-errors)
