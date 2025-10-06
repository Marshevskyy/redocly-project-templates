{% code-walkthrough 
  filters={
    "language": {
      "label": "Language",
      "items": [
        { "value": "JavaScript" },
        { "value": "TypeScript" }
      ]
    },
    "validation": {
      "label": "Validation Library",
      "items": [
        { "value": "Zod" },
        { "value": "Yup" }
      ]
    }
  }
  
  filesets=[
    { 
      "files": [
        "./code-samples/js/validator.js",
        "./code-samples/js/package.json",
        "./code-samples/js/index.js",
      ],
      "when": { "language": "JavaScript" }
    },
    {
      "files": [
        "./code-samples/js/schema-yup.js"
      ],
      "when": { "language": "JavaScript", "validation": "Yup" }
    },
    {
      "files": [
        "./code-samples/js/schema-zod.js",
      ],
      "when": { "language": "JavaScript", "validation": "Zod" }
    },

    { 
      "files": [
        "./code-samples/ts/validator.ts",
        "./code-samples/ts/package.json",
        "./code-samples/ts/index.ts"
      ],
      "when": { "language": "TypeScript" }
    },
    {
      "files": [
        "./code-samples/ts/schema-yup.ts",
      ],
      "when": { "language": "TypeScript", "validation": "Yup" }
    },
    {
      "files": [
        "./code-samples/ts/schema-zod.ts",
      ],
      "when": { "language": "TypeScript", "validation": "Zod" }
    }
  ]
%}
# Input Validation Guide

Learn how to implement robust input validation in your JavaScript or TypeScript application. This guide will walk you through creating a validation function that validates user input against a schema using either Zod or Yup.

## Setup

{% step id="create-package-json" heading="Create package.json" %}

Create a package.json file for your project and run the following command to install the required dependencies.

```sh
npm install
```

{% /step %}

{% step id="create-schema" heading="Create the validation schema" %}

Create a schema file that defines the validation rules for your input. The schema will be different depending on your chosen validation library.

{% /step %}

{% step id="adjust-validation-conditions" heading="Adjust validation conditions" %}

Adjust the validation conditions to meet your specific requirements.

{% input id="min-length" value="2" label="Minimum username length" /%}
{% input id="max-length" value="50" label="Maximum username length" /%}

{% /step %}

{% step id="create-validator" heading="Create the validator function" %}

Create a function that uses your schema to validate a user object. The function will return validation results and any error messages.

{% /step %}

{% step id="test-validation" heading="Test the validation function" %}

Create a file that uses your validation function to validate a user object. Depending on your validation rules, the user object will either be valid or invalid.

Try the validation function with different inputs to see how it works.

{% input id="username" value="John" label="Username" /%}
{% input id="email" value="john@example.com" label="Email" /%}

{% /step %}

{% toggle id="advanced-validation" label="Advanced validation features" %}
{% slot "description" %}
Add more sophisticated validation rules and custom error messages to enhance the validation logic.
{% /slot %}

{% step id="custom-rules" heading="Add custom validation rules" %}
Implement a custom validation rules for username to ensure it only contains letters, numbers, and underscores.
{% /step %}

{% step id="error-messages" heading="Customize error messages" %}
Create user-friendly error messages that clearly explain validation requirements.
{% /step %}

{% /toggle %}

{% /code-walkthrough %}