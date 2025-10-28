import type { ApiFunctionsContext } from '@redocly/config';

export default function (request: Request, context: ApiFunctionsContext) {
  // Catch-all route example
  const { path } = context.params;

  return context.status(200).json({
    message: 'Documentation path handler',
    path: path, // This will be an array of path segments
    fullPath: Array.isArray(path) ? path.join('/') : path,
  });
}
