import type { ApiFunctionsContext } from '@redocly/config';

export default function (request: Request, context: ApiFunctionsContext) {
  // Cookie management example
  const hasCookie = !!context.cookies.demo;

  // Set a cookie if it doesn't exist
  if (!hasCookie) {
    context.setCookie('demo', 'example-value', {
      httpOnly: true,
      maxAge: 3600, // 1 hour
      path: '/',
      sameSite: 'Strict',
    });
    return context.status(200).json({
      message: 'Cookie set successfully',
      action: 'set',
    });
  } else {
    // Delete the cookie if it exists
    context.deleteCookie('demo');
    return context.status(200).json({
      message: 'Cookie deleted successfully',
      action: 'delete',
    });
  }
}
