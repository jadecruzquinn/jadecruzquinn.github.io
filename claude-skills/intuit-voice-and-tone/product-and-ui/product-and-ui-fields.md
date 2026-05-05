# Fields

**Source:** https://contentdesign.intuit.com/product-and-ui/fields/

---

Fields make up a large part of our ecosystem. Customers are asked to fill them out in multiple flows and products. Because of this, consistency throughout the ecosystem helps set expectations and makes for an easier, quicker, and accessible experience.

---

## Labels

Field labels are names given to fields, like "First name" or "Bank account." They provide clear context and can include instruction and formatting (like Full name or mm/dd/yyyy). Labels typically appear outside the field itself. Some labels appear in the field and pop outside when a user types—this is fine, as long as it's accessible.

| Do | Don't |
|----|-------|
| Have a label. A label anchors the field and the form. | Don't use labels inside fields if they disappear when a customer starts typing. |
| Keep the label short. | Don't use all caps—they're hard to read. |
| Be clear and jargon-free. | Don't be vague or use jargon (it's confusing and increases cognitive effort). |

Use question labels sparingly—they increase cognitive load but are helpful in step flows.

- *Why would you like a loan?* — Question form (appropriate in step flows)
- *How much would you like to borrow?* — Question form (appropriate in step flows)
- *Loan amount* — Simple label (preferred for shorter forms)

**Show fields** if you have fewer than 6 inputs.

---

## Placeholder text

Placeholder text (also called ghost text) is text inside a field that provides additional guidance, clarity, or examples. It should **never** be the only context for customers. Field labels should be descriptive enough to guide users.

### Rules

| Do | Don't |
|----|-------|
| Use placeholder text in some, but not all, form fields. | Don't use placeholder text in place of a field label or to echo the field label. |
| Add formatting to the label or under the field, where it's persistent. | Don't use placeholder text to show formatting—it disappears when a customer starts typing, which taxes working memory. |
| Keep placeholder text guidance minimal. The default is no content. | Don't add placeholder text to every field—this trains users to ignore content. |

> **Research note**: Studies show that the more placeholder text in a field (like a review field), the more likely users are to include a lot of content. Use this intentionally.

### Further reading

- [Form instructions (W3 Web Accessibility Initiative)](https://www.w3.org/WAI/tutorials/forms/instructions/)
- [Placeholders in form fields are harmful (Nielsen Norman Group)](https://www.nngroup.com/articles/form-design-placeholders/)

---

## Required info

### How to indicate required info

When possible, only ask for info you need. The exception is forms where customers need flexibility (for example, a contact form with multiple address fields).

In cases where there's a mix of required and optional fields, clearly indicate what's required and what's optional. Set expectations at the start of an experience.

#### If most info is required

If all fields are required, you don't need to label individual fields. Indicate at the start of the form:

- All fields are required.
- Complete all fields.

When some fields are optional, indicate at the start:

- All fields are required unless marked optional.

At the field level, use a text label:

- Company name (optional)
- Middle name (optional)

When there are multiple steps or screens, use **Skip**, **Not now**, or **Maybe later** to indicate optional fields.

#### If most info is optional

Call attention to what's required. At the start of an experience, describe how required fields are marked:

- \* Required info
- \* indicates required info

Use an asterisk after the field label to indicate required info:

- Display name*
- Social Security number*

> According to the Nielsen Norman Group, customers recognize the asterisk as meaning "required," regardless of whether they use assistive technology.

#### Avoid conflicting uses of asterisks

Be mindful that the asterisk symbolizes different things depending on context. While we use it to mark required fields, we also use it to point to comments at the bottom of a page (like disclaimers). Avoid using the asterisk for both purposes in the same experience.

If there's an overlapping use, use a text label instead:

- Display name (required)
- Social Security number (required)

Don't use **placeholder text or tooltips** to indicate required info. Assistive technologies don't universally support these as text labels—a screen reader might not read the message.

### Make an accessibility plan

Plan early on how your team will account for accessibility.

#### When designing

Work with your product design and developer partners to use [Intuit Design System components](https://designsystem.intuit.com/). These elements—including fields, checkboxes, radio buttons, and more—support indicating "required."

#### When developing

Request that your developer partners use a "required" attribute in HTML for required fields:

```html
<input type="text" id="firstName" name="firstName" required>
```

This way, the screen reader will announce that the field is required without needing a visual indicator.

### Give error feedback

If a customer skips a required field, provide an error message. Show the error after a customer:
- Tabs through a required field
- Attempts to save a page with incomplete required fields

Always retain the info in fields the customer has already filled out.

Highlight incomplete fields. If there are multiple missing fields in a long form, use a page-level message to call out specific fields:

**Example:**

> Enter required info:
> - State
> - City
> - First name

### Resources

- [Marking Required Fields in Forms (Nielsen Norman Group)](https://www.nngroup.com/articles/required-fields/)
- [U.S. Web Design System form guidelines](https://designsystem.digital.gov/components/form/)
- [ARIA-2: Identifying a required field with the aria-required property (W3.org)](https://www.w3.org/TR/WCAG20-TECHS/ARIA2.html)
- [Web accessibility criteria – required fields (California State University, Northridge)](https://www.csun.edu/universal-design-center/web-accessibility-criteria-required-fields)

---

## Field-level errors

Field-level errors appear beneath a form field component after a customer has attempted to submit info that doesn't quite fit the requirements.

### Common use cases

- Not enough characters
- Incorrect format (a number in a letter section)
- Leave blank (don't enter 0)
- Character entry required (can't leave blank, enter 0)
- Info might be wrong based on internal calculations (tax form entry)
- Too many characters
- Required field is empty

### Writing field-level errors

**Examples**
| Do | Don't |
|----|-------|
| Enter fewer than 20 characters. | Too many characters. |
| Enter an amount. | You experienced a login error. |
| Enter a phone number. | Oops, something went wrong. |
| Use numbers only. | Please enter a value for this required field |
| Enter an email with an @ symbol. | Hmm, looks like your email isn't right. |
| We couldn't process your payment. Double check your card info or try a different one. | Looks like something is wrong with your card. |
| Enter a five-digit ZIP code. | Enter a complete ZIP code. (Unclear—what's "complete"?) |

### Principles

- **Use command-oriented language.** Tell them what to do to keep moving. Don't just point out what's wrong.
- **Choose functionality over tone.** Be specific about what needs to happen.
- **Don't use filler words** like hmm or please. Keep it short.
- **Add details needed** to complete the task correctly.
- **Don't repeat the field name** in the error message if possible.
- **Put periods after full sentences.**
- **Keep labels short** to avoid line breaks.

### Names are never wrong

Names are important. Don't invalidate anyone by flagging their name as an error. 

| Don't say | Instead |
|-----------|---------|
| "Your name is invalid." | "Our system is unable to [/give rationale]/" |
| "Use your real name." | Refocus on the system, not the person. |
| "Enter your real info." | Describe what happened without blame. |
