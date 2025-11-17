import type { ApiFunctionsContext } from '@redocly/config';

// Helper function to generate a UUID-like string
function generateTicketId(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Helper function to generate confirmation code
function generateConfirmationCode(ticketType: string): string {
  const randomStr = Math.random().toString(36).substring(2, 8);
  const randomStr2 = Math.random().toString(36).substring(2, 7);
  return `ticket-${ticketType}-${randomStr}-${randomStr2}`;
}

// Hardcoded events data for validation
const events = {
  'f3e0e76e-e4a8-466e-ab9c-ae36c15b8e97': 'Sasquatch Ballet',
  '2f14374a-9c65-4ee5-94b7-fba66d893483': 'Solar Telescope Demonstration',
  '6aaa61ba-b2aa-4868-b803-603dbbf7bfdb': 'Cook like a Caveman',
  '602b75e1-5696-4ab8-8c7a-f9e13580f910': 'Underwater Basket Weaving',
  'dad4bce8-f5cb-4078-a211-995864315e39':
    'Mermaid Treasure Identification and Analysis',
  '6744a0da-4121-49cd-8479-f8cc20526495': 'Time Traveler Tea Party',
  '3be6453c-03eb-4357-ae5a-984a0e574a54': 'Pirate Coding Workshop',
  '9d90d29a-2af5-4206-97d9-9ea9ceadcb78': 'Llama Street Art Through the Ages',
  'a3c7b2c4-b5fb-4ef7-9322-00a919864957': 'The Great Parrot Debate',
  'b92d46b7-4c5d-422b-87a5-287767e26f29': 'Eat a Bunch of Corn',
};

export default async function buyMuseumTicketsHandler(
  request: Request,
  context: ApiFunctionsContext
) {
  try {
    // Get ticket details from request body
    const body = await request.json();
    const { ticketType, eventId, ticketDate, email, phone } = body || {};

    // Validate required fields
    if (!ticketType || !ticketDate || !email) {
      return context.status(400).json({
        type: 'object',
        title: 'Validation failed',
        detail: 'ticketType, ticketDate, and email are required',
      });
    }

    // Validate ticket type
    if (ticketType !== 'event' && ticketType !== 'general') {
      return context.status(400).json({
        type: 'object',
        title: 'Validation failed',
        detail: 'ticketType must be either "event" or "general"',
      });
    }

    // Validate eventId if ticket type is event
    if (ticketType === 'event' && !eventId) {
      return context.status(400).json({
        type: 'object',
        title: 'Validation failed',
        detail: 'eventId is required when ticketType is "event"',
      });
    }

    // Check if event exists when buying event ticket
    if (ticketType === 'event' && !events[eventId]) {
      return context.status(404).json({
        type: 'object',
        title: 'Not found',
        detail: `Event with ID ${eventId} not found`,
      });
    }

    // Generate ticket response
    const ticketId = generateTicketId();
    const confirmationCode = generateConfirmationCode(ticketType);

    const response: any = {
      message:
        ticketType === 'event'
          ? 'Museum special event ticket purchased'
          : 'Museum general entry ticket purchased',
      ticketId,
      ticketType,
      ticketDate,
      confirmationCode,
    };

    // Add event name if it's an event ticket
    if (ticketType === 'event' && eventId) {
      response.eventName = events[eventId];
    }

    return context.status(200).json(response);
  } catch (error) {
    console.error('Error purchasing ticket:', error);
    return context.status(500).json({
      type: 'object',
      title: 'Internal server error',
      detail: 'An error occurred while processing your ticket purchase',
    });
  }
}
