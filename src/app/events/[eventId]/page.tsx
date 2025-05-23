import { getEventById } from '@/lib/mock-data';
import { EventDetailsClient } from '@/components/event/EventDetailsClient';
import { notFound } from 'next/navigation';

interface EventPageProps {
  params: {
    eventId: string;
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const event = getEventById(params.eventId);

  if (!event) {
    notFound();
  }

  return <EventDetailsClient event={event} />;
}

export async function generateStaticParams() {
  // In a real app, fetch event IDs from a database
  const { mockEvents } = await import('@/lib/mock-data');
  return mockEvents.map(event => ({
    eventId: event.id,
  }));
}
