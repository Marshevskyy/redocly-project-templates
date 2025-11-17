# Respect

Respect is the go-to tool for making sure your APIs match their OpenAPI descriptions. It checks your API responses match what the OpenAPI description says, and reports any mismatches. It also supports OpenAPI Arazzo format so it supports complex, linked API workflows.
[Redocly cli](https://github.com/Redocly/redocly-cli?tab=readme-ov-file#api-contract-testing-with-respect)

## Try it

1. Run server `npx @redocly/cli preview`
2. Run tests `npx @redocly/cli respect museum.arazzo.yaml --server openapi=http://localhost:4000/api`

## Docs

[Respect Community Edition](https://redocly.com/docs/respect)
