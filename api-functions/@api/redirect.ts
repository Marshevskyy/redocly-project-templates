import type { ApiFunctionsContext } from '@redocly/config';

export default function (request: Request, context: ApiFunctionsContext) {
  // Redirect example
  const { target } = context.query;

  if (target) {
    return context.redirect(target.toString(), 302);
  }

  return context.status(400).json({
    message: 'Missing target parameter',
    example: '/api/redirect-demo?target=/api/hello',
  });
}
