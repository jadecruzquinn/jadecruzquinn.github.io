# AI UX patterns

**Source:** https://contentdesign.intuit.com/ai/ux-patterns/

---

At Intuit, we use various patterns to establish trust and move our customers through conversations with AI in a way that feels natural. This guidance gives an overview of common patterns and offers examples of how they can be used.

---

## Trust, transparency, and control

Trust and accuracy are important to customers when it comes to AI experiences. Building customer trust hinges on being [clear and transparent](https://contentdesign.intuit.com/ai/foundations/#principles) about what the model is doing, when it's doing it, and how outputs are generated.

### Disclaimers

Disclaimers caution customers about the limits of what AI can do, and encourage them to review any generated content. These patterns help set consistent expectations and help protect Intuit as a brand.

**Disclaimers should be:**
- Calm and reassuring, not alarming or full of legal jargon
- Placed contextually near AI-generated content or actions
- Short and written in plain language

Make sure to work with a legal partner to ensure the right disclaimers are included near any AI-generated content you work on.

**Example:**
> *Intuit Intelligence can make mistakes. Intuit protects privacy and adheres to responsible AI principles. How we use AI [link to relevant policies and resources]*

### Processing

AI can sometimes take a minute to process a customer's request. Letting the customer know what's happening on the back-end during this time helps them understand the cause of the hold-up. It can also build a sense of value for the work being done on their behalf (this is called a [labor illusion](https://www.hbs.edu/ris/Publication%20Files/Norton_Michael_The%20labor%20illusion%20How%20operational_f4269b70-3732-4fc4-8113-72d0c47533e0.pdf)).

**Avoid fake progress indicators.** Only show steps that reflect real work being done using the "planning, doing, done" structure:

1. **Start** — Describe what AI is going to do. *(Example: "Creating your cash flow forecast")*
2. **During** — Indicate progression and that something is being done. *(Example: "Reviewing past income and expenses," "Identifying seasonal trends," "Generating projections")*
3. **Finish** — Reiterate the task AI is about to complete. *(Example: "Your forecast will be ready in a moment")*

### Review

Give customers explicit notice when work has been done by AI. Give them a chance to review before an action is taken by using the pattern "**Review before [action].**" This reminder should appear contextually near AI-generated content or calls to action.

**Example:**
> *I drafted your email using your past campaigns and brand settings. Review before sending.*

---

## Errors

At some point, something is going to go wrong. An API fails to get data, or the system fails to commit changes for an automation. The generative model is down. A plug-in is down. The model timed out. All of these situations should be handled with transparency and empathy.

**AI error responses should:**
- Offer a path to another solution, such as self-service with an article or escalation
- Be transparent that something went wrong
- Protect the Intuit brand

For more, see our guidance on [delivering bad news](https://contentdesign.intuit.com/talking-to-customers/bad-news/) and [writing errors](https://contentdesign.intuit.com/product-and-ui/errors/).

**Example:**
> *Import my W-2*
>
> I couldn't import your W-2 right now. Something didn't load correctly.
>
> You can try again, upload it manually, or I can help you find step-by-step instructions.

---

## Escalation

Escalation means connecting the customer to one of our human agents or experts. Address the customer's question and why the bot can't answer, then offer the path to escalation.

**Good escalation paths:**
- Are paired with an offer for self-service, unless the risk is high to the customer or company.
- Show up as an option when something is wrong, when the situation is complex and difficult to navigate, or when the customer asks for it.

**Example:** The bot recognizes a situation outside of its training and provides a quick path to human help:

> *I have stock options, foreign income, and a side business*
>
> That's a complex tax situation, and I don't want to give you incomplete guidance. I can:
>
> - Show you an overview article
> - Connect you with a TurboTax expert

---

## Fallback

We use fallback responses to get customers back on track when a model hasn't been trained on a good answer. Fallbacks use other technologies, like search, to:

- Connect the customer to other help, including human support
- Present FAQ search results
- Help customers rephrase their question

**Good fallbacks should:**
- Always provide options for customers to indicate whether their question has been answered.
- "Fall upwards" and suggest other things that might be close to the customer's query.
- Keep small talk to a minimum. The customer still needs help.
- Offer a way to self-serve or get help another way.
- Be empathetic. The customer may be disappointed that there's no answer.
- Be transparent and tell customers what happened, such as "I couldn't find anything about that."

**Example:**

> *Fix accrual mismatch for closed period*
>
> I couldn't find a clear answer to that. Here are a few topics that might be close. You can pick one, rephrase your question, or I can connect you with support.
>
> - Editing transactions in closed books
> - Understanding accrual vs. cash reports
> - Fixing reconciliation differences

---

## Front door responses and disambiguation

Front door and disambiguation responses are used to discover more about the customer's intent, especially when they use just a string of nouns for their request (for example, "taxes" or "address").

**Front door response** — asks an open-ended question about what the customer wants to do:

> *Payroll*
>
> Can you tell me a bit more about what you'd like to do with payroll?

**Disambiguation response** — gives the customer 2–3 action options. Used when the bot is confident the customer will choose one:

> *it's not working*
>
> Got it. Which of these issues are you running into?
>
> - Tax calculation looks wrong
> - Paycheck didn't go through
> - I can't run payroll at all

---

## How-to instructions

How-to instructions provide steps to achieve a goal.

**Good how-tos should:**
- Provide warnings that help the customer be successful, like "Once you start a transfer, it can't be canceled."
- Set expectations for how long this will take if it's a multi-response flow.
- Break things into manageable chunks when steps are lengthy.
- Be brief enough to cover the key info (additional info should be in a follow-up or a link).

**Example:** Being brief and clear, setting time expectations, and chunking tasks:

> *How do I send an email campaign?*
>
> I can walk you through it. This usually takes about 5 minutes.
>
> **Step 1:** Choose your campaign type: Go to Campaigns, select Email, choose Regular where it says Type
>
> Let me know when you're done and I'll give you the next set of instructions.

---

## Small talk

LLMs are generally pretty good at small talk out of the box. Small talk answers should respond to a customer's question, but get them back on track with what they need.

**Example:**
> *Are you actually smart?*
>
> Smart enough to help — not enough to replace your judgment.
>
> What are you working on today? Campaigns, audiences, or automations?

---

## Welcome

For conversational interfaces, a welcome message should break the ice and guide customers through the experience. It not only greets the customer, but sets the friendly, conversational tone for the entire interaction.

**A well-designed welcome should:**
- Contain a brief statement about what the bot can do
- Be personalized to the customer
- Have different first-time and return welcome messages to build trust
- Provide proactive support for the most common questions or issues

**First-time welcome example:**

> Hi James! Welcome to QuickBooks
>
> To begin, I can save you time by pulling details from your website—like your business name, services, and contact info—so your business is set up for accuracy from the start.
>
> What is your business website?

**Return welcome example:**

> *Welcome back Jen!*
>
> Last time you were reviewing invoices. Want to continue where you left off?
