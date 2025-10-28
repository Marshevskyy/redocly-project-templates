import type { ApiFunctionsContext } from '@redocly/config';

export default function (request: Request, context: ApiFunctionsContext) {
  // Path parameter example
  const { id } = context.params;

  return context.status(200).json({
    message: 'User details',
    userId: id,
    method: request.method,
  });
}
