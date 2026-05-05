# Accessible content

**Source:** https://contentdesign.intuit.com/accessibility-and-inclusion/accessible-content/

---

Our guidelines for accessibility are driven by four principles. They spell out the acronym **POUR** (Perceivable, Operable, Understandable, Robust).

---

### Perceivable

All our users need to be able to process what’s on the screen. Is there anything in our product or on our site that a blind, deaf, low-vision, or color-blind user can’t perceive?

Write content with screen readers in mind. Some of our users can’t see. They use screen readers when doing things on the web. Someone can tell a screen reader to only read headings (H1, H2, and so forth), or to skip from section to section, or just from link to link.

#### Make content perceivable

| Do | Don't |
|----|-------|
| Make sure videos have captions. | Don’t refer to color, or where elements are on a screen. |
| When a label is used multiple times on the same screen (_Edit_, _Learn_, _More_), provide screen-reader-only text to clarify. | If the text is meant to be read, don’t put it in an image. |
| Create text alternatives for charts and graphs. A cool way to do this is to include a data table near the chart. | |

#### Be careful with color and contrast

Some of our users are color blind. Others have low vision and need lots of contrast between background and text. Some people use screen magnifiers, and others just prefer to zoom or enlarge text to make things easier to read.

| Do | Don't |
|----|-------|
| Check your contrast. Is there enough between foreground text and background color? | Don’t use color alone to indicate status (such as on/off or paid/unpaid). |
| Linked text should be meaningful and stand out from body text. Long text links can be partially hidden in the code for people using screen readers. | Don’t use images of text. It’s not screen-reader friendly and can’t be enlarged when someone zooms in on the screen |
| Include icons with text to make things clear and to indicate status changes. | |
| Focus indicators should be visible on fields and all interactions. | |

#### Use captions for audio content

Some of our users can’t hear. They need to be able to read text versions of voiceovers or recordings.

| Do | Don't |
|----|-------|
| Make sure videos have captions that indicate who is speaking. | Don’t rely on sound alone for notifications. |
| Keep captions in sync with what’s happening on the screen. | |

#### Think about typography

Font face, size, and weight are all elements to consider when designing for readability and legibility. Some low-vision people use screen magnifiers or zoom in to enlarge text and make things easier to read.

### Operable

Make sure interactions and targets are well separated and easy to hit. Keep screens feeling “light”—don’t make them overly dense. Be aware of how longer content can appear on a screen.

Touch targets should be visually identifiable, especially on mobile screens. Is it clear what to do next?

#### Make forms accessible

-   Make sure field labels persist and are visible when the focus is inside the field.
-   Labels, tooltips, and input fields should appear in a logical keyboarding tab order.
-   Be aware of when the system validates the fields and when and where error messages might appear.
-   Present errors clearly. Use an element in addition to color and guide users to the field that needs their attention. [See more guidance about error messages](https://contentdesign.intuit.com/content-patterns/errors/)

### Understandable

Some of our users have cognitive impairments or learning disabilities. These folks need content that is simple, clear, and direct to help focus their attention.

#### Make content readable

-   Keep content clear and easy to read—and listen to. Remember that when someone is using a screen reader, the content is spoken aloud.
-   Present only the info users need, and only when they need it.
-   Keep sentences simple. [Aim for 5th to 8th grade readability](https://contentdesign.intuit.com/accessibility-and-inclusion/aim-for-5th-to-8th-grade-readability/).
-   Use images to support copy. Illustrations and graphs can clarify complex concepts.

#### Consider information hierarchy and layout

-   Make page titles unique and informative.
-   Keep heading styles consistent. Use typography and styles to provide meaning and structure.
-   Make sure the correct HTML is used (H1, H2, etc.) so that screen readers can easily interact with the page structure. (Search engines also use these to analyze your content.)
-   Use headings, subheadings, and bullet points to make content easy to scan.

| Do | Don't |
|----|-------|
Give just the info our users need, right when they need it. | Try not to have lines longer than 80 characters, or sentences longer than 20 words. |
| Use images to support content. Illustrations and graphs can clarify complex concepts. | |
| Pair icons with text labels to provide contextual cues and help with comprehension. | |
| Keep user interface terms (menu, tabs, and so forth) consistent throughout the product or on a screen. | | 

### Robust

Make sure things work well across platforms, browsers, and devices—different assistive technologies work better in some areas than others.

| Do | Don't |
|----|-------|
| Try to be platform agnostic. Example: "Select all that apply." | Don’t dictate the technologies a customer has to use. Examples: "Tap all that apply" "Click all that apply" |

