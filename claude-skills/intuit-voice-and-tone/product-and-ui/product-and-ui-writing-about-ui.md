# Writing about UI

**Source:** https://contentdesign.intuit.com/product-and-ui/writing-about-ui/

---

Customers come to our products to get things done, not to read about menus and buttons. Language about links, navigation, and other UI elements might not always be accessible. But sometimes—especially in help content or conversation design—we need to talk about the interface to keep things clear. Here's how to do it in ways that are conversational and simple.

---

## Capitalization

When referring to a term in the UI, match the capitalization of the term as it appears there. If you're making a general reference, there's no need to capitalize.

| Type | Example |
|------|---------|
| Direct, instructional reference (match the UI) | Select **Chart of Accounts** |
| General reference (no need to capitalize) | Your chart of accounts has all of your transactions… |

Always capitalize branded terms to match their official style (usually product names). Look at Intuit's website for the most updated info.

Never use shouty caps (LIKE THIS) for emphasis. Use a visual callout box if truly necessary.

For long UI messages with mixed capitalization, put the message in quotes to make it clear what's from the UI:

> If you see the message "QuickBooks has encountered Error 6001: Your bank connection is not available," here's what to do.

---

## When to use bold

In help content, use **bold only for things the user selects**. Don't bold:

- Areas or column headers that organize info (not clickable)
- Things for general emphasis

Bold can make a screen look cluttered, intimidating, and difficult to scan. It can also draw attention to content that doesn't need to be the customer's focus. For example, sometimes UI instructions appear on a screen, but they’re not the primary purpose of that screen. In those cases, bolding UI elements can be a distraction that keeps the customer from moving forward.

Don't use italics or quotations to distinguish UI elements (except for long verbatim UI messages with mixed capitalization).

Note: It's OK not to bold the word note.

**Examples**
| Do | Notes |
|----|-------|
| In the Actions column, select **More** next to the user ID. | Bold the clickable element |
| From the **Edit** menu, select **Delete**. | Bold the clickable elements |

---

## Actions

| Term | When to use |
|------|-------------|
| **choose** | Customer decisions that are not UI-related |
| **select** | Anything a user clicks or taps |
| **tap** | Only if your sole use case is native mobile |
| **clear** | Instead of "deselect" (sounds like jargon and is difficult to translate) |
| **go to** or **from** | Top-level navigation |

**Examples**
| Do | Don't |
|----|-------|
| Choose the best partners for your business. | Click the Vendors button |
| Select **Vendors** and then **Bill**. | Deselect the checkbox for any items you don't want. |
| Go to **Banking** and select the **Receipts** tab. | Go to Banking > Receipts (angle brackets) |

---

## Directing someone through the UI

There are many ways to direct customers to files, folders, websites, or pages. Be as clear as possible so customers can find their way.

| Word | When to use |
|------|-------------|
| **find** | Simple, friendly alternative to "search"—implies success and feels empowering. Use in the UI: *Find customers* is better than *Search customers*. |
| **go to** | When directing the customer away from their current workflow or location in the product to a specific page. |
| **browse** | When directing customers to files, folders, or drives on their desktop. The common Windows button name—using it helps associate the action with the button. |
| **locate** | When the customer has actively saved or stored a file themselves and you don't need to be specific about the location. |

| Do | Don't |
|----|-------|
| Find the customer you want to send the invoice to. | Search for the customer |
| Go to **Banking** and select the **Receipts** tab. | Go to Banking > Receipts |
| Locate the mylogo.gif file. | — |
| Browse to the folder where you stored the backup file. | — |
| Go to **Banking** and select the **Receipts** tab. | Go to the Banking tab above the arrow on the left side of your screen. (Don't use location/direction cues—not accessible) |

---

## Specific UI elements

It's OK to refer to an element by name without specifically calling out what it is (icon, button, tab, etc.). But you can be more specific if it adds clarity, especially if there are many items on a page.

**Examples**
| Less specific | Preferred |
|--------------|-----------|
| Select the Receipts tab | Select Receipts |

### Icons

For accessibility, check the Aria label for any icon you're mentioning.

**In help content**: Refer to the icon by the label name with a representative emoji so all users can recognize it.

**In conversation design and push notifications**: It's OK to use just an emoji for the icon. For icons that have a close but not perfect emoji equivalent, use a descriptive word and emoji together (don’t capitalize or bold the descriptive word, and use the word "icon" after the emoji).

#### Screen reader reference list for common icons

| Emoji | Reads as |
|-------|----------|
| ✎ | edit |
| ⨁ | create |
| ≡ | navigation |
| ⚙ | settings |

#### Help content examples

- Go to Create ⨁ and select Estimate.
- Select Edit ✎ next to the user ID.
- Go to Settings ⚙ and select Account.

#### Conversational bot and notification examples

- Go to ⚙ and select Account.
- Tap the ✎.

### Arrows

Arrows are no longer labeled. For clarity, you can add "back" and "forward." Better still, rewrite to avoid talking about the arrows directly.

**Examples**
| OK | Preferred |
|----|-----------|
| Select the forward arrow to move to the next transaction | Go to the next transaction |
| Select the arrow to go back | Go back |

### Dropdown menus

Be specific about how to identify the dropdown menu (don't just say "from the dropdown menu"). Use the small arrow emoji ▼ with the name of the menu if it's present.

| Example |
|---------|
| Select the small arrow ▼ icon next to the username. |
| From the Edit ▼ dropdown menu, select Delete. |

### Left navigation or menus

You can use "menu" to make it clear that we're talking about the options in the left navigation or menu bar. Or just say "Go to Banking," for example.

Use "go to" when navigating the customer to a menu.

| Example |
|---------|
| Go to the **Expenses** menu and select **Vendors**. |
| (If already on the Expenses page): Select the Vendors tab |
| Go to **Taxes**, then **Payroll tax**. |

### Container or area (screen, page, window, section)

We usually prefer **screen** to "page," but try to avoid using either word.

| Term | When to use |
|------|-------------|
| **screen** | General preference over "page" |
| **page** | Interview, installation experience, website pages, homepage, or embedded browser windows. Use "[page name] page" to refer to web pages that come up in embedded browser windows. |
| **window** | A card or container that appears on top of the UI and presents info or requests a response. (But try to avoid referring to the container at all—focus on its content.) |
| **area** | Informal alternative when you don't need to specify a container type |

When referring to a page, use the text that is most visible, recognizable, and unique to the customer. You can mention the title bar name or the header on the screen.

### Tabs

Set the name of the tab in sentence case.

**Example**: If you're already on the Expenses page, write: *Select the Vendors tab.*
