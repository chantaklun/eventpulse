import type { Event } from '@/types';

export const mockEvents: Event[] = [
  {
    id: 'tech-conference-2024',
    name: 'Global Tech Innovators Conference 2024',
    date: '2024-10-26',
    time: '09:00 AM - 06:00 PM',
    location: 'Metropolis Convention Center',
    description: 'Join leading tech visionaries and innovators from around the world. Explore the future of technology, AI, and sustainable development.',
    longDescription: 'The Global Tech Innovators Conference is a premier event for professionals, researchers, and enthusiasts in the technology sector. This year, we focus on breakthroughs in artificial intelligence, quantum computing, and green tech solutions. Network with industry leaders, attend insightful keynotes, and participate in hands-on workshops.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'technology conference',
    organizer: 'TechConnect Global',
    category: 'Technology',
    sessions: [
      { id: 's1-1', name: 'The Future of AI', description: 'Exploring advancements in AI and machine learning.', schedule: '10:00 AM - 11:00 AM', speaker: 'Dr. Eva Core' },
      { id: 's1-2', name: 'Quantum Computing Explained', description: 'A deep dive into the principles of quantum computing.', schedule: '11:30 AM - 12:30 PM', speaker: 'Prof. Quantum Leap' },
      { id: 's1-3', name: 'Sustainable Tech Solutions', description: 'Innovations in green technology.', schedule: '02:00 PM - 03:00 PM', speaker: 'Mr. Eco Friendly' },
    ],
  },
  {
    id: 'creative-writing-workshop',
    name: 'Art of Storytelling: Creative Writing Workshop',
    date: '2024-11-12',
    time: '10:00 AM - 04:00 PM',
    location: 'City Central Library, Austen Hall',
    description: 'Unleash your creativity and master the art of storytelling in this immersive workshop. Suitable for all levels.',
    longDescription: 'Whether you are an aspiring novelist or a hobbyist writer, this workshop will equip you with the tools to craft compelling narratives. Learn about character development, plot structuring, and finding your unique voice from published authors. Interactive exercises and feedback sessions included.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'writing workshop',
    organizer: 'Writers Guild Association',
    category: 'Arts & Culture',
    sessions: [
      { id: 's2-1', name: 'Character Archetypes', description: 'Understanding and creating memorable characters.', schedule: '10:30 AM - 11:30 AM', speaker: 'Jane Story' },
      { id: 's2-2', name: 'Plotting Your Masterpiece', description: 'Techniques for effective plot development.', schedule: '01:00 PM - 02:00 PM', speaker: 'Leo Script' },
    ],
  },
  {
    id: 'startup-pitch-night',
    name: 'Innovate & Elevate: Startup Pitch Night',
    date: '2024-12-05',
    time: '06:00 PM - 09:00 PM',
    location: 'The Entrepreneur Hub',
    description: 'Watch aspiring entrepreneurs pitch their groundbreaking ideas to a panel of investors and industry experts.',
    longDescription: 'Innovate & Elevate is the ultimate platform for startups to gain visibility and funding. Each participant gets 5 minutes to pitch, followed by Q&A. Network with founders, investors, and mentors. An exciting evening of innovation and opportunity.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'startup pitch',
    organizer: 'Venture Catalyst Network',
    category: 'Business',
    sessions: [
      { id: 's3-1', name: 'Investor Insights Panel', description: 'What VCs look for in a pitch.', schedule: '06:15 PM - 07:00 PM', speaker: 'Panel of Investors' },
      { id: 's3-2', name: 'Networking Mixer', description: 'Connect with founders and investors.', schedule: '08:30 PM - 09:00 PM' },
    ],
  },
];

export const getEventById = (id: string): Event | undefined => {
  return mockEvents.find(event => event.id === id);
};
