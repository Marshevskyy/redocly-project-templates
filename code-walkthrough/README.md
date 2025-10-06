# Code walkthrough template

This template demonstrates Redocly's **code walkthrough** feature, an interactive way to guide readers through complex code examples with step-by-step explanations and dynamic code highlighting.

## What is a code walkthrough?

Code walkthroughs combine explanatory content with interactive code samples in a two-panel interface:

- **Left panel**: Step-by-step instructions and explanations
- **Right panel**: Downloadable code files with synchronized highlighting

As readers progress through the steps, the corresponding code sections are automatically highlighted, making it easier to follow along with complex examples.

## Template example

This template showcases an **Input Validation Guide** that teaches users how to implement robust input validation in JavaScript or TypeScript applications. The walkthrough includes:

### Interactive features

- **Language filter**: Switch between JavaScript and TypeScript implementations
- **Library filter**: Compare Zod vs Yup validation libraries
- **Input fields**: Customize validation parameters (username length, test values)
- **Toggle sections**: Reveal advanced validation features on demand
- **Code highlighting**: Automatic highlighting of relevant code sections

### Project structure

```treeview
├── index.md               # Main walkthrough content with steps and configuration
├── redocly.yaml           # Redocly configuration file
└── code-samples/
    ├── js/                # JavaScript examples
    │   ├── package.json
    │   ├── index.js
    │   ├── validator.js
    │   ├── schema-zod.js
    │   └── schema-yup.js
    └── ts/                # TypeScript examples
        ├── package.json
        ├── index.ts
        ├── validator.ts
        ├── schema-zod.ts
        └── schema-yup.ts
```

## Key features demonstrated

- **Filters**: Multiple filter categories for organizing content
- **Conditional content**: Show/hide code and content based on user selections
- **Input customization**: Allow users to modify code examples in real-time
- **Toggleable sections**: Expandable content for advanced topics
- **Multi-file examples**: Present complete, downloadable code samples
- **Chunk annotations**: Precise code highlighting synchronized with explanations

## Documentation

For complete documentation on creating code walkthroughs, visit:
**[Code walkthrough documentation](https://redocly.com/docs/realm/author/reference/tags/code-walkthrough)**

## Use cases

Code walkthroughs are perfect for:

- Tutorial documentation with hands-on examples
- API integration guides
- Complex configuration explanations
- Multi-step implementation guides
- Comparative code examples (like different libraries or languages)
