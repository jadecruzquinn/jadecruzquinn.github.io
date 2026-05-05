---
url: https://contentdesign.intuit.com/ai/using-ai/
title: "Using AI – Intuit Content Design"
date: 2026-03-11T14:52:59.498Z
lang: en-US
---
# Using AI

**Source**: https://contentdesign.intuit.com/ai/using-ai/

---


## When to use generated content

Creating generated content requires a bigger upfront investment than static content. When teams are trying to decide what to use, consider the relative returns on these factors:

*   Success metrics and business goals
*   Performance/quality
*   Data availability
*   Cost
*   Risks
*   Time/complexity to implement

Most experiences that involve AI contain a mixture of content types. Based on the above factors, define which elements of a design should use which type of content. Before committing to a generated content solution, be sure to evaluate the alternatives, like static or dynamic content.

*   Static: Written once by a human, never changes
*   Dynamic: Written by a human, with variables that are replaced (Good morning, George! / Good evening, George!)
*   Generated: Written by an LLM

---

## Prompting
Generated content should be at the same level of quality—or at least a consistent quality—as content written by humans. This includes meeting [Intuit voice and tone standards](https://contentdesign.intuit.com/voice-tone/). 

Voice strategies have traditionally been described and scaled through webpages and decks to teach humans how to write consistently. Now, as content experts, our toolkit includes prompts and evaluation rubrics. 

It’s important to know that—like much that surrounds AI—both the prompt and rubric are considered experimental. Please use them and report to [#ai-content-design](https://intuit.enterprise.slack.com/archives/C052A0FP1K2) on how it’s going. These are a starting place for all of us—if you find ways to make them better, share your learnings to help improve these assets for everyone.

---

### Universal voice prompt

Our goal is to create a consistent, cohesive, and high-quality voice across our generated experiences. To help achieve this, we designed a single, reusable prompt to encourage uniform LLM responses. 

This prompt is meant to be inserted into the wider system prompt to provide consistent voice directions to the LLM. It won’t solve for the tone needs of each use case, like specific formatting or vocabulary. You may need to add sections that cater to the needs of your customers. 

[View the universal voice prompt](https://docs.google.com/spreadsheets/d/1FOy6SohDc8xP8E_YvEtcLal8mAHfar8Hb6yJ9QYbJGQ/edit?usp=sharing)

### Writing prompts

AI is a content-first experience. Therefore, content experts can—and should!—be leading in this space. One place to put content expertise to use is prompt engineering. Prompting is more than just giving some instructions to an LLM—it’s strategic. By honing this skill, you can play a key role in ensuring that the content generated resonates with your audience.

There’s no one-size-fits-all approach, but here are some tips to get started:

#### **Use clear examples**

["Few-shot" prompting](https://www.promptingguide.ai/techniques/fewshot), where you provide examples of desired input-output pairs, is highly effective. This guides the model on the expected format, style, and content of its response.

#### **Give the LLM context and background**

Don't assume a model knows everything about your specific domain or request. Provide necessary background information or define specialized terms. 

> Context: The user is asking about tax implications for stock options. Assume they are a U.S. resident and the stock options are Non-Qualified Stock Options (NQSOs).

#### **Help the LLM find keywords and key phrases**

Use bold formatting or enclose important terms in specific characters (such as \`\`) to draw the model's attention to critical information.

#### **Tell the LLM what not to do**

Sometimes, telling the model what you \*don't\* want is as important as telling it what you do. This helps prevent undesirable outputs. 

> Explain the benefits of QuickBooks Online for small businesses. Do NOT include any pricing information or promotional offers.

Prompt engineering is an iterative process. If the initial output isn't ideal, refine your input based on the model's response. Experiment with different formatting techniques and levels of detail until you get the outcome you're looking for.

---
### Scale yourself and the system

Just like writing prompts, giving an LLM quality context is key to getting quality outputs. Using the tool [Notebook LM](https://notebooklm.google.com/), you can add the content design site (along with any project or team-specific resources) as a reference to ground the model’s knowledge. When you create a content design system notebook, it'll give context-specific outputs based only on what’s been uploaded, rather than the whole internet. 

Use it to:

*   Audit existing product flows or riff on new ones
*   Synthesize many sources and provide analysis based off them
*   Identify gaps and provide feedback based on the content system
*   Give you a head start on any strategy and drafts 

It’s not good for: 

*   Brainstorming and creative prompts
*   UI analysis—it can’t "see" screenshots

To add this site to a NotebookLM notebook, [follow these step-by-step instructions.](https://docs.google.com/document/d/1LXMX3rBsXsVhkKz8HObTSLFwyC4lAPW_J8JAPuwOwQs/edit?usp=sharing) Remember to always run your final strings through Writer for a final polish and terminology check.

### Prompting resources

For more introductory info on writing prompts, check out these resources:

*   [Prompt crafting basics](https://writer.com/guides/prompt-crafting/) (Writer)
*   [Advanced prompting techniques](https://dev.writer.com/home/prompting) (Writer)
*   [GenAI-boosted D4D prompting](https://degreed.com/pathway/1pnkeylnpn?orgsso=intuit&tltag=13e56702-26a9-48bc-8a1d-29a698f46038) (Degreed)
*   [CARE: Structure for Crafting AI Prompts](https://www.nngroup.com/articles/careful-prompts/) (Nielsen Norman Group)
*   [GenOS Secure Prompt Writing Handbook](https://docs.google.com/document/d/1lewpelPl09hsRwN_a22fVqYDd16KdILQTbqN8p7iLYI/edit?usp=sharing)
*   [Using the content site in NotebookLM](https://docs.google.com/document/d/1LXMX3rBsXsVhkKz8HObTSLFwyC4lAPW_J8JAPuwOwQs/edit?usp=sharing)

---

## Evaluation

After a prompt is given to an LLM and the model begins generating content, humans step in again to help evaluate the model’s output. This is another moment where content practitioners add significant value: They know what high-quality content looks like and can identify where responses succeed or fall short.

Evaluation isn't just about judging quality—it’s about improving future outputs. Evaluation rubrics provide a consistent way of measuring content quality, and create a shared language for what “good” looks like across teams. 

A developer or data science partner can provide generated responses in bulk. These responses (usually in a spreadsheet) can be graded on their adherence to our content quality standards. 

The results of this evaluation can then be used to:

*   Identify patterns in LLM response language
*   Refine prompts and system instructions to address those patterns
*   Provide concrete feedback to AI partners so improvements can be tested and re-evaluated

Evaluation is an iterative loop, not a final step. By reviewing outputs and feeding insights back into prompts teams can improve the quality, consistency, and usefulness of AI generated content over time. 

[View the voice evaluation rubric](https://docs.google.com/spreadsheets/d/1AIknLM9O_R4Vr4ntOgxZx632Pt0GsfGgRbBKrFe1pPY/edit?gid=0#gid=0)

Just like the prompt, this rubric is a work in progress. Share your feedback in [#ai-content-design](https://intuit.enterprise.slack.com/archives/C052A0FP1K2).

### Evaluation resources

*   [AI evaluation for UX content designers](https://uxcontent.com/ai-evaluation-content-design/) (UX Content Collective)
*   [Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) (Anthropic)
