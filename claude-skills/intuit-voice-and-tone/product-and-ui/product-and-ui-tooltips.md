# Tooltips

**Source:** https://contentdesign.intuit.com/product-and-ui/tooltips/

---

Tooltips are brief, informative messages that appear when a user interacts with an interface. They're triggered by a mouse or keyboard hover.

We show users in-product messaging, like tooltips, to give them additional information and guidance. They might be used to:

- Help the customer complete a task
- Help explain why the system needs to collect their data
- Guide the customer through a new experience, such as a setup flow or some part of the product they haven't used before
- Point out a new feature

Guidance for content design is similar for mobile and larger display applications.

- When introducing a new function, lead with a verb. For example, *Use this dropdown menu to select a payment method.*
- **Restrict content to 3 lines** within each tooltip. Header = 60 characters max, body = 130 characters max.

---

## Best practices

| Do | Don't |
|----|-------|
| Be concise. | Don't include links. You're already interrupting a customer's workflow—don't take them away from the task they're trying to complete. And links in tooltips are often inaccessible to keyboard or screen-reader users. |
| Be relevant. | Don't obscure other useful info. |
| Be highly contextual and specific. Example: *Posts from transactions only show data from linked bank accounts.* | Don't explain an overview or entire task flow. Example: *Sets the default delivery method. The Delivery method default determines the way you'll deliver sales forms to newly created customers. You can change the default delivery method for a customer by editing the customer on the Customer List.* |
| Make sure tooltips have a limited lifespan. Examples: *Sign out has moved / Kick off the new year with a final look at 2021.* | Don't include rich content, like images. |
| Use a period at the end of a tooltip only if it's a complete sentence. Similarly, if any tooltip has a second sentence, all sentences require a period. | Don't use tooltips as a band-aid for poor design. A clunky tooltip could signal a bigger issue: that the team didn’t step back and align on what type of problem (content, interaction, or PD) they’re trying to solve.|
| Write in sentence case (yes, even headers). | Don't use for marketing efforts, selling additional services, or conveying value props. |

---

## Be intentional about tooltips

Tooltips should be the exception, not the rule. Adding tooltips doesn't create engaged users. Each tooltip creates friction—it has a cost. If the tooltip isn't exactly what the customer needs at that moment, it becomes an annoyance, and a rapid succession of tooltips is a turnoff.

Not every feature change requires a message. Before you start writing, ask yourself:

- Would the message point to obvious UI or define a field?
- Is the design apparent enough that customers will know what it is?
- Is the change immediately visible?
- Will the tooltip raise more questions than answers?
- Is it burying essential information?

If you answered yes to any of the above, you probably don't need a tooltip.

Tooltips shouldn't be essential to completing a task. If what we're really saying is, "To work around our broken experience, complete the following counterintuitive steps," then a tooltip isn't the best route to take.

---

## Guided tours

A guided tour is a set of ordered tooltips that demonstrate a new function or how to do a task. Users move through the content at their own pace.

Guided tours build on contextual help design patterns.

### Best practices for guided tours

| Do | Don't |
|----|-------|
| Limit the number of guidance tooltips per screen. Too many can clutter the experience and make the product seem harder than it is. |  |
| Limit the series of tooltips to 3 or 4 (and only 1 for mobile). | Don't use more than 6 tooltips for a tour. Instead, consider other ways of delivering the content, like a video tutorial or help article. |
| Once the customer dismisses the tour, let them know where they can find the help content later. | Don't include important info that can never be retrieved after the tour is dismissed. |

**Accessibility note:** Be sure the experience works for customers who use screen readers. Avoid directional language, like "at the top of the screen" or "Select here."
