import type { ApiFunctionsContext } from '@redocly/config';

export default function (request: Request, context: ApiFunctionsContext) {
  // Example from a custom API folder
  return context.status(200).json({
    message: 'This API function is from a custom folder',
    path: '/custom-api/example',
  });
}
