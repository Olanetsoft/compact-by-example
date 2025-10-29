# Contributing to Compact by Example

Thank you for your interest in contributing to **Compact by Example**! This project helps developers learn Midnight's Compact language through practical examples.

## How to Contribute

### Adding a New Example

We're always looking for new examples that demonstrate Compact features and patterns. To add an example:

1. **Choose the right category** - Pick the appropriate directory (basics, utxo, privacy, contracts, advanced, defi, or hacks)
2. **Create the MDX file** - Follow the template structure below
3. **Write complete, working code** - All examples must compile with Compact v0.16+
4. **Test thoroughly** - Ensure your code runs correctly
5. **Add to navigation** - Update `docs.json` to include your example
6. **Submit a Pull Request** - Include a clear description of what the example teaches

### Example Template

Use this template for all new examples (following our established pattern):

````mdx
---
title: "Clear, Descriptive Title"
description: "One-line description of what this example teaches"
---

<Info>
  **What You'll Learn**: - Key concept 1 - Key concept 2 - Key concept 3 - Key
  concept 4
</Info>

## Introduction

Brief introduction (2-3 sentences) explaining what the contract does and why it matters.

**Real-world use**: Explain practical applications where this pattern is used (voting, tokens, NFTs, etc.)

## The Contract

```compact
pragma language_version 0.16;

import CompactStandardLibrary;

// Complete, runnable Compact code with comments
export ledger exampleState: Opaque<"example">;

export circuit exampleFunction(input: Opaque<"example">): [] {
  disclose(exampleState = input);
}
```

## How It Works

### Concept 1 Name

```compact
export ledger exampleState: Opaque<"example">;
```

Explain what this part does and why it's important.

<Note>**Helpful Tip**: Add context or best practices here.</Note>

### Concept 2 Name

```compact
export circuit exampleFunction(input: Opaque<"example">): [] {
  disclose(exampleState = input);
}
```

Break down the circuit function and explain key points.

<Warning>
  **Important**: Highlight common mistakes or security considerations.
</Warning>

## Try It Yourself

<Accordion title="Build and Compile">

**1. Create project structure:**

```bash
mkdir -p my-project/contracts
cd my-project
```

**2. Save the contract:**

Create `contracts/example.compact` with the code above.

**3. Compile:**

```bash
compact compile contracts/example.compact contracts/managed/example
```

</Accordion>

### Challenge: Extend the Functionality

<Accordion title="View Solution">

Provide a solution to the challenge with explanation:

```compact
// Solution code here
export circuit additionalFunction(): [] {
  // Implementation
}
```

</Accordion>

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

- **Clear explanations**: Write for developers new to Compact
- **Info boxes**: Use `<Info>` for "What You'll Learn" sections
- **Collapsible sections**: Use `<Accordion>` for build instructions and solutions
- **Callouts**: Use `<Note>` for tips, `<Warning>` for important cautions
- **Progressive disclosure**: Start simple, add complexity gradually
- **Practical focus**: Show real-world applications
- **Privacy awareness**: Explain when to use `disclose()` and privacy implications
- **Navigation**: Include "What's Next" cards linking to related examples

### MDX Component Usage

**Info Boxes** - List key learning points:

```mdx
<Info>**What You'll Learn**: - Concept 1 - Concept 2</Info>
```

**Accordions** - Collapse optional content:

```mdx
<Accordion title="Build and Compile">Steps and commands here</Accordion>
```

**Notes** - Helpful tips:

```mdx
<Note>**Privacy by Default**: Explain important concepts</Note>
```

**Warnings** - Critical information:

```mdx
<Warning>Highlight security concerns or common mistakes</Warning>
```

**Navigation Cards** - Link to related content:

```mdx
<CardGroup cols={2}>
  <Card title="Example" icon="arrow-right" href="/path">
    Description
  </Card>
</CardGroup>
```

## Testing Requirements

Before submitting your example:

1. **Compilation** - Code must compile without errors using Compact v0.16+
2. **Syntax accuracy** - Follow correct Compact syntax (use `disclose()`, exact pragma versions, etc.)
3. **Completeness** - Include all necessary imports and declarations
4. **Local testing** - Run `mintlify dev` and verify the page renders correctly
5. **Link verification** - Ensure all internal links and navigation cards work

No need for functional tests in the docs - focus on accurate, compilable code examples.

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
- **Learning level**: Beginner, Intermediate, or Advanced
- **Testing**: How you verified it works
- **Screenshots**: (Optional) Show the rendered page

## Questions or Issues?

- **Questions about Compact**: [Midnight Discord](https://discord.gg/midnight)
- **Questions about this project**: Open a GitHub issue
- **Bugs or typos**: Create an issue or submit a fix directly

## Code of Conduct

- Be respectful and welcoming to all contributors
- Focus on constructive feedback
- Help others learn and grow
- Keep discussions focused on improving the documentation

Thank you for helping make Compact more accessible to developers! 🚀

---

**Maintained by the Midnight community** | Learn more at [midnight.network](https://midnight.network)
