export interface Session {
  id: string;
  name: string;
  description: string;
  schedule: string; 
  speaker?: string;
}

export interface Event {
  id: string;
  name: string;
  date: string; 
  time: string; 
  location: string;
  description: string;
  longDescription?: string;
  sessions: Session[];
  image: string; 
  organizer?: string;
  category?: string;
}
