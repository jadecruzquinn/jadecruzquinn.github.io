# Confirmations

**Source:** https://contentdesign.intuit.com/product-and-ui/confirmations/

---

Confirmations help customers steer clear of committing errors or actions they might regret. We use them sparingly, to avoid them becoming a redundant message to get past.

---

## When to use

Confirmations are intentional friction points if an action is going to have significant or unintended consequences, such as:

### An action the customer can't easily undo
- Disconnecting a third-party app
- Deleting an item like a tax document, invoice, or email campaign

### Loss of the customer's data, time, or work
- Restoring an older version of data
- Closing a page or item with unsaved changes
- Deleting an account

### Unexpected changes to the customer's experience
- Making a change that affects other people on the customer's team
- Deleting a tag that affects past transactions as well as future ones
- Making a client inactive when they have an unpaid balance

---

## Toast messages (success messages)

Toasts are a type of confirmation that confirm an action a customer initiated. They're short-lived, pop up when the action is complete, and sometimes include an option to cancel or undo the action. Users might read the message the first time it appears, but usually they'll just scan over it.

**Examples:**
- `{#} expenses categorized`
- `Invoice sent to {Name}`
- `Changes saved`
- `Link copied`
- `{Thing} archived`
- `{Thing} updated`
- `{Thing} saved`
- `{Thing} deleted`
- `{Thing} added`

| Do | Don't |
|----|-------|
| Have only one action per notification. | Don't include punctuation or unnecessary articles and connecting words like the, an, or a. |
| Passive voice is OK. Something (noun) happened (verb). | Don't put links in the descriptive text. Because the message is ephemeral, a link can be hard to click and easily missed. If your message really needs to link to something else, use another component. |
| Keep the tone neutral. | Don't use exclamation points! |
| Keep it brief—no more than a few words—and straightforward.  | Don't add filler words like "successfully," as in "Invoice sent successfully." The message itself implies success. |

---

## When not to use

If someone can easily undo an action, there's no need for them to confirm their choice.

For example, you don't need this: "Are you sure you want to add this account? You can undo it if you change your mind."

---

## What to include

Confirmations usually have three parts: a title, body, and call to action (CTA).

### Title

| Do | Don't |
|----|-------|
| Frame the title as a question to get the customer's attention. | Don't use phrases like "Are you sure…?" "Do you want to…?" and "Warning." These can be confusing and imply we don't trust customers. |
| If the action includes a person, say "Delete Toby's files?" or "Delete Toby as a user?"  | Don't imply the action is happening _to_ a person, like "Delete Toby." Poor Toby. |
| Be specific when possible. Instead of "Delete invoice?" say "Delete invoice #4839?" | |
| Start with a verb. Match what the customer selected before the confirmation appears. For example, if they selected "Delete," use "Delete" and not "Remove."  | |
| Be concise. The title should be clear enough without forcing the user to read the rest. | |

**Examples:**

| Do | Don't |
|----|-------|
| Disconnect the DocuSign app? | Do you want to disconnect the DocuSign app? |
| Make vendor inactive? | Are you sure you want to make this vendor inactive? |
| Save changes? | You're going to save changes. |
| Delete invoice #2466? | Delete this invoice? |
| Clear your tax return? | Do you really want to clear your tax return? |

### Body

Body copy gives further valuable information, including the consequences of the action. Consider:
- Will it affect other things the customer might not be aware of?
- Will changes be lost?
- Can it be undone?

**Examples:**
- This item will disappear from your planner. Your books won't be affected.
- We'll remove these tags from any rules and transactions.
- You'll need to create the form from scratch if you delete this template.
- These transactions will be permanently deleted from your books.
- If you skip, your crypto taxes may not be accurate. We recommend reviewing before moving on.
- Clearing your return erases all of your information and lets you start over.
- This can't be undone.

Make sure body copy doesn't just repeat the title info. If it does, skip the body and just use a title and CTA.

Passive voice is OK in body content for confirmation messages, even though active voice is one of our core style principles. Passive voice can help bring attention to the thing being acted upon and may reduce anxiety. "This file will be deleted" is less scary than "You will delete this forever." [Learn more about active voice](https://contentdesign.intuit.com/style/principles/#use-active-voice)

### Call to action (CTA)

- The call to action is usually a button or link.
- The CTA should correspond to the question in the title.
- The customer can confirm they want to go forward or change their mind and go back. Always include both options.
- The **primary CTA** is on the right. The **secondary CTA** is on the left.

**Examples:**

| Confirmation | CTAs |
|---|---|
| Delete this goal? | [Keep goal] [Delete goal] |
| Save changes? | [Don't save] [Save] |
| Restore backup? | [Cancel] [Restore backup] |
| Change template? | [Cancel] [Change template] |

**Avoid** simple Yes/No labels—they're confusing and force customers to re-read the title. **Watch out for double negatives**—avoid pairing Cancel with Delete, Undo, or Remove, which can create confusion about which CTA confirms the intended action.

[Learn more about calls to action](https://contentdesign.intuit.com/product-and-ui/actions/)

---

## Putting it all together

**Delete file?**
"NewComputerSetupMac.pdf" will be permanently deleted.
[Keep file] [Delete file]

---

**Delete this tag?**
"Marketing" tag will be removed from rules and transactions.
[Keep] [Delete]

---

**Clear your tax return?**
Clearing your return erases all of your information and lets you start over.
[Don't clear] [Clear tax return]

---

**Make customer inactive?**
Marisa Hernandez will be hidden from your lists and menus. Their transactions will remain in reports.
[Keep active] [Make inactive]
