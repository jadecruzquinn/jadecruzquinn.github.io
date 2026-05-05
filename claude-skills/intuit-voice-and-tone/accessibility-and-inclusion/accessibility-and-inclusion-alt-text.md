# Alt text

**Source:** https://contentdesign.intuit.com/accessibility-and-inclusion/alt-text/

---

Alternative text (alt text) is used to describe images and adds context in association to the content. The lack of image alt text is one of the most common accessibility errors on the web. We're all responsible for adding alt text to images, icons, and other visual media, whether it's in a Word or Google doc, social media post, emails, or website.

---

### What is alt text?

Alt text is a short description of an image for people who use screen readers or other assistive technology, or who have slow internet access. Alt text makes images and their intent perceivable to a wider audience.

### When to use alt text

If an image is important enough to be included in your design, alt text is required to go along with it for accessibility. Think of it this way: If an image fails to load, what text makes sense in its place? What does that image represent? What is its specific purpose for being there? Use that for the alt text.

For example, alt text that says “Business owner drinking coffee while sorting receipts” conveys more purpose and emotion than “Woman with papers drinking coffee.”

You don’t need alt text for decorative images that aren’t associated with the content. Just define the image as decorative for developers or leave the alt blank (alt=“”). A screen reader will skip the blank tag. 

Captions are an alternative way to provide an image description. Captions are useful for everyone, can be reviewed by approvers, and can be easily translated if you’re using the same content across multiple countries.

---
### Best practices

| Do | Don't |
|----|-------|
| Be clear and concise so readers can visualize the content without seeing it. | Don’t be too minimal or too complex. |
| If the image has text, include that in the alt text. | Don’t include “picture of” or “image of.” This is already assumed. The screen reader will tell you it’s a graphic, so you don’t need to mention it unless it’s an important thing to note. |
| If the image represents an action, describe it. | Don’t stuff alt text with keywords—it can be seen as spam. But more importantly, it’s not kind for people who use screen readers. |
| Pair icon buttons with a visible text label, or include alt text that describes their functions such as “select” or “explore now” | Don’t neglect metadata and alt text for buttons, especially forms. |
| Start with a capital letter. Screen readers will emphasize it more, which may help separate it from the rest of the text. | Don’t add the component name (such as “button”) to the alt text, as the screen reader will automatically inform the user what they’re on. |
| If color is important for context or content, include it. Otherwise, just mention it in the body of the content. | |
| Keep below 125 characters, the standard cutoff for most screen readers. Short and succinct alt text is easier to understand and more pleasant for screen reader users. | |

---

## Resources

- [WCAG 2.2 standards for images](https://www.w3.org/WAI/tutorials/images/)
- [Writing alt text for images](https://spectrum.adobe.com/page/writing-with-visuals/#Writing-alt-text-for-images) (Adobe Spectrum)
- [18F Accessibility Guide](https://accessibility.18f.gov/images/)
- [Mailchimp: Writing for Accessibility](https://styleguide.mailchimp.com/writing-for-accessibility/)
- [Microsoft alt text guide](https://support.microsoft.com/en-us/office/everything-you-need-to-know-to-write-effective-alt-text-df98f884-ca3d-456c-807b-1a1fa82f5dc2)

**For Intuit employees:**
- [Alt = Fabulous: Making Images Accessible](https://sites.intuit.com/home/ls/community/accessibility-at-intuit/post/5175500442828800)
- [Intuit alt text requirements](https://docs.google.com/document/d/1_U-yGyC-LdpkCB138yqkzuy8MDT5SMXhZNLDJGteBfg/edit) (for developers)
- [What happens when we don't add alt attributes](https://drive.google.com/file/d/1K_30SfHMxJ2xCXqUIt-KcTmxUV1d3d8J/view?usp=sharing)
