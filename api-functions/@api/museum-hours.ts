import type { ApiFunctionsContext } from '@redocly/config';

export default async function (request: Request, context: ApiFunctionsContext) {
  const { startDate } = context.query;

  if (!startDate) {
    return context.status(400).json({
      error: 'Missing startDate parameter',
      message: 'Please provide a startDate using the museum parameter',
    });
  }

  try {
    let targetDate = new Date(startDate);

    const formattedDate = targetDate.toISOString().split('T')[0]; // YYYY-MM-DD format

    // Fetch museum data from mock server API
    const apiUrl = `https://redocly.com/_mock/demo/openapi/museum-api/museum-hours?startDate=${formattedDate}`;
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: 'Basic Dummy',
      },
    });

    if (!response.ok) {
      return context.status(response.status).json({
        error: 'External API error',
        message: `Failed to fetch museum data: ${response.statusText}`,
      });
    }

    const museumData = await response.json();

    return context.status(200).json({
      museum: {
        todayHours: {
          date: formattedDate,
          isSpecialHours: !!(
            museumData.specialHours &&
            museumData.specialHours.find((sh) => sh.date === formattedDate)
          ),
        },
        admissionFee: museumData.admissionFee,
      },
    });
  } catch (error) {
    console.error('Error fetching museum hours:', error);
    return context.status(500).json({
      error: 'Internal server error',
      message: 'Failed to retrieve museum hours information',
    });
  }
}
