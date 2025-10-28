import type { ApiFunctionsContext } from '@redocly/config';

export default function (request: Request, context: ApiFunctionsContext) {
  // Demonstrate context properties
  return context.status(200).json({
    message: 'Context object demo',
    query: context.query,
    headers: context.headers,
    cookies: context.cookies,
    userInfo: context.user,
  });
}
