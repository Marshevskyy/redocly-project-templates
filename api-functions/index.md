# API functions

With Realm you can create API functions to add dynamic and interactive content.

Define API endpoints by creating files in the @api directory. These endpoints can interact with other APIs, implement custom authentication, or connect to databases.

## Deploy your own

Launch the sample project with [Reunite](https://auth.cloud.redocly.com/registration).
Want to learn more about deploying with Realm? Check out our step-by-step [guide](https://redocly.com/docs/realm/get-started/start-reunite-editor).

## Docs

- [api-functions-reference](https://redocly.com/docs/realm/extend/api-functions/api-functions-reference)
- [create-api-functions](https://redocly.com/docs/realm/extend/api-functions/create-api-functions)
- [api-functions](https://redocly.com/docs/realm/config/api-functions)

## Method routing

1. Catch-all routes. API endpoint to match any path inside the folder
   `@api/docs/[...path].ts` -> `/api/docs/any`

2. Path parameters: `@api/users/[id].ts` -> `/api/users/001`

3. Return a custom Redocly [Context](https://redocly.com/docs/realm/extend/api-functions/api-functions-reference#context) object.
   `@api/context.ts` -> `/api/context"`

4. Method-specific: `@api/login.post.ts` -> POST `/api/login`

5. Fetch museum data from external mock server API `@api/museum-hours.ts` -> `/api/museum-hours?startDate=2023-02-23`

6. Custom control the path where Redocly detects and hosts API functions.

- Check `redocly.yaml` -> `apiFunctions`
- `custom-api/example.ts` -> `/custom-api/example`

## Try it

Run project `npx @redocly/cli preview`

Run `curl "http://127.0.0.1:4000/api/museum-hours?startDate=2023-02-23"`

Or try our other examples:

- `curl "http://127.0.0.1:4000/api/hello"`
-

```
curl -X POST "http://localhost:4000/api/login" \
  -H "Content-Type: application/json" \
  -d '{"username":"redocly","password":"test"}'
```

## RBAC

See rbac settings in `redocly.yaml`
