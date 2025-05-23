import Link from 'next/link';
import { Ticket } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <Ticket className="h-8 w-8" />
          <span>EventPulse</span>
        </Link>
        {/* <nav>
          <Link href="/events" className="hover:text-accent transition-colors">
            Events
          </Link>
        </nav> */}
      </div>
    </header>
  );
}
