import { EventCard } from '@/components/event/EventCard';
import { mockEvents } from '@/lib/mock-data';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold tracking-tight text-primary">Upcoming Events</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          Discover exciting events and workshops. Register today and be part of something amazing!
        </p>
      </section>

      <section>
        {mockEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No upcoming events at the moment. Please check back later!</p>
          </div>
        )}
      </section>
    </div>
  );
}
