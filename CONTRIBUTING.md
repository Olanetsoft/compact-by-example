# Contributing to Compact by Example

Thank you for your interest in contributing to **Compact by Example**! This project helps developers learn Midnight's Compact language through practical examples.

## Design Philosophy

**Compact by Example** follows a **concise, code-library style** inspired by [solidity-by-example.org](https://solidity-by-example.org):

- **Code is the primary teacher** - Examples speak for themselves with inline comments
- **Minimal prose** - Brief explanations only where needed
- **No tutorial fluff** - No "Try It Yourself", build instructions, or verbose introductions
- **Reference, not tutorial** - Developers can quickly scan and copy patterns
- **SEO-optimized** - Metadata in frontmatter for search engines, clean body content

**What we removed:**

- ❌ "What You'll Learn" info boxes
- ❌ "Introduction" and "Real-world use" sections
- ❌ "Common Use Cases" and "Why It Matters" explanations
- ❌ "Try It Yourself" build instructions
- ❌ Tutorial-style challenges and exercises
- ❌ Excessive tip/warning callouts

**What we keep:**

- ✅ Complete, compilable contract code
- ✅ Brief "How It Works" explanations
- ✅ Navigation to related examples
- ✅ SEO metadata for discoverability

## How to Contribute

### Adding a New Example

We're always looking for new examples that demonstrate Compact features and patterns. To add an example:

1. **Choose the right category** - Pick the appropriate directory (basics, applications, or other)
2. **Create the MDX file** - Follow the concise template structure below
3. **Write complete, working code** - All examples must compile with Compact v0.16+
4. **Keep it concise** - No verbose sections, just code and brief explanations
5. **Add to navigation** - Update `docs.json` to include your example
6. **Submit a Pull Request** - Include a clear description of what the example teaches

### Example Template

Use this template for all new examples. Our style is concise and code-focused, inspired by solidity-by-example.org:

````mdx
---
title: "Clear, Descriptive Title"
sidebarTitle: "Short Title"
description: "One-line description of what this example teaches"
"og:title": "Full Title - Compact by Example"
"og:description": "Expanded description for social sharing"
---

## The Contract

<Accordion title="View Contract Code">

```compact
pragma language_version 0.16;

import CompactStandardLibrary;

// Complete, runnable Compact code with comments
export ledger exampleState: Opaque<"example">;

export circuit exampleFunction(input: Opaque<"example">): [] {
  disclose(exampleState = input);
}
```

</Accordion>

## How It Works

### Concept 1 Name

```compact
export ledger exampleState: Opaque<"example">;
```

Brief explanation of what this part does (1-2 sentences).

### Concept 2 Name

```compact
export circuit exampleFunction(input: Opaque<"example">): [] {
  disclose(exampleState = input);
}
```

Concise breakdown of the circuit function.

## What's Next

<CardGroup cols={2}>
  <Card title="Related Example 1" icon="arrow-right" href="/path/to/example1">
    Brief description
  </Card>
  <Card title="Related Example 2" icon="shapes" href="/path/to/example2">
    Brief description
  </Card>
</CardGroup>
````

**Important Style Guidelines:**

- **No verbose introductions** - Start directly with the contract code
- **No tutorial sections** - Remove "Try It Yourself", "Build and Compile", etc.
- **No info boxes** - Remove "What You'll Learn", "Real-world use", etc.
- **Concise explanations** - Keep explanations brief and to the point
- **Code-focused** - Let the code speak for itself with inline comments
- **SEO metadata only** - Use frontmatter `description` and `og:*` fields for SEO; don't repeat in body

## Code Standards

### Compact Code Guidelines

All Compact code must follow these standards:

**1. Use Exact Version (Recommended)**

```compact
pragma language_version 0.16;
```

Or version range for stable contracts:

```compact
pragma language_version >= 0.16 && <= 0.18;
```

**2. Always Import Standard Library**

```compact
import CompactStandardLibrary;
```

**3. Use `disclose()` for Ledger Assignments**

```compact
// ✅ Correct
export circuit updateState(newValue: Opaque<"value">): [] {
  disclose(state = newValue);
}

// ❌ Wrong - Compiler will reject
export circuit updateState(newValue: Opaque<"value">): [] {
  state = newValue;  // Missing disclose()
}
```

**4. Naming Conventions**

- `camelCase` for variables and functions: `totalSupply`, `transferTokens`
- `PascalCase` for types: `TokenBalance`, `UserAccount`
- Descriptive names: `validateOwnership` not `check`

**5. Comments**

- Explain "why", not "what"
- Keep comments concise
- Add context for complex logic

**6. Code Structure**

```compact
// 1. Pragma and imports
pragma language_version 0.16;
import CompactStandardLibrary;

// 2. Ledger state variables
export ledger state: Opaque<"example">;

// 3. Circuits (functions)
export circuit updateState(input: Opaque<"example">): [] {
  disclose(state = input);
}
```

### Documentation Standards

Our documentation follows a **concise, code-library style** inspired by solidity-by-example.org:

- **Code first**: Start with the contract in an Accordion, not with explanations
- **Brief explanations**: Keep descriptions to 1-2 sentences per concept
- **No tutorial content**: Avoid "Try It Yourself", build instructions, or challenges
- **No verbose sections**: Remove "What You'll Learn", "Real-world use", "Common Use Cases", "Why It Matters"
- **SEO in frontmatter**: Use `description` and `og:*` fields for search engines, don't repeat in body
- **Inline comments**: Put explanations in code comments when possible
- **Navigation only**: End with "What's Next" cards linking to related examples

### MDX Component Usage

**Accordions** - Use ONLY for contract code:

````mdx
<Accordion title="View Contract Code">
```compact
// Full contract code here
````

</Accordion>
```

**Navigation Cards** - Link to related content at the end:

```mdx
<CardGroup cols={2}>
  <Card title="Example" icon="arrow-right" href="/path">
    Description
  </Card>
</CardGroup>
```

**Avoid these components** (they make the docs too verbose):

- ❌ `<Info>` boxes for "What You'll Learn"
- ❌ `<Note>` boxes for tips
- ❌ `<Warning>` boxes for cautions
- ❌ `<Accordion>` for "Build and Compile" or "Try It Yourself"
- ❌ `<Accordion>` for solutions or challenges

Keep it simple: contract code in accordion → brief explanations → navigation cards.

## Content Style Checklist

Before submitting your example, verify:

**Frontmatter:**

- ✅ Has `title`, `sidebarTitle`, `description`
- ✅ Has SEO fields: `"og:title"`, `"og:description"`
- ✅ Description is concise (one line)

**Structure:**

- ✅ Starts with `## The Contract` (not introduction text)
- ✅ Contract code is in `<Accordion title="View Contract Code">`
- ✅ Has `## How It Works` section with brief explanations
- ✅ Ends with `## What's Next` navigation cards
- ✅ No duplicate content between frontmatter and body

**Removed verbose content:**

- ❌ No "What You'll Learn" info boxes
- ❌ No "Introduction" or "Real-world use" sections
- ❌ No "Try It Yourself" build instructions
- ❌ No "Common Use Cases" or "Why It Matters" sections
- ❌ No tutorial-style challenges or exercises
- ❌ No tip/warning boxes (unless absolutely critical)

**Code quality:**

- ✅ Code must compile without errors using Compact v0.16+
- ✅ Uses correct `disclose()` syntax for ledger assignments
- ✅ Includes all necessary imports and declarations
- ✅ Has inline comments explaining key concepts

**Testing:**

- ✅ Run `mintlify dev` and verify page renders correctly
- ✅ Verify navigation cards link to correct pages
- ✅ Check no console errors or warnings

## Submitting Your Contribution

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b add-example-name`
3. **Make your changes** following the guidelines above
4. **Update docs.json** to include your example in navigation
5. **Test locally**: Run `mintlify dev` and verify everything works
6. **Commit with clear message**: `git commit -m "Add example: Token Vesting"`
7. **Push and create PR**: Include description of what you've added

### Pull Request Guidelines

Your PR description should include:

- **What**: Brief description of the example
- **Why**: What concept it teaches or problem it solves
- **Category**: basics, applications, or other category
- **Style compliance**: Confirm you followed the concise style guidelines
- **Testing**: Verified compilation and local rendering
- **Screenshots**: (Optional) Show the rendered page

**Example PR description:**

```
Add Allowance pattern to basics

Demonstrates ERC20-style allowance and transferFrom functionality.
Follows concise code-library style with no verbose sections.

- ✅ Compiles with Compact v0.16
- ✅ No tutorial content or info boxes
- ✅ SEO metadata in frontmatter only
- ✅ Tested with `mintlify dev`
```

## Questions or Issues?

- Questions about Compact: [Midnight Discord](https://discord.gg/midnight)
- Questions about this project: Open a GitHub issue
- Bugs or typos: Create an issue or submit a fix directly

## Code of Conduct

Please read our [Code of Conduct](./CODE_OF_CONDUCT.md) before contributing.

Thank you for helping make Compact more accessible to developers!
