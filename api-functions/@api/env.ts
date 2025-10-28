import type { ApiFunctionsContext } from '@redocly/config';

export default function (request: Request, context: ApiFunctionsContext) {
  // Environment variables example (safe to show which ones are used, not their values)
  const apiKey = process.env.API_KEY;
  const environment = process.env.NODE_ENV;

  return context.status(200).json({
    message: 'Environment variables example',
    usingApiKey: !!apiKey,
    environment: environment || 'development',
  });
}
