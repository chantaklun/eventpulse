'use client';

import type { Event, Session } from '@/types';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import { CalendarDays, Clock, MapPin, User, Mail, Users, Tag, Info, Briefcase } from 'lucide-react';
import Link from 'next/link';

const registrationSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  selectedSessions: z.array(z.string()).optional(),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

interface EventDetailsClientProps {
  event: Event;
}

export function EventDetailsClient({ event }: EventDetailsClientProps) {
  const { toast } = useToast();
  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: '',
      email: '',
      selectedSessions: [],
    },
  });

  function onSubmit(data: RegistrationFormData) {
    console.log('Registration Data:', data);
    toast({
      title: 'Registration Successful!',
      description: `Thank you, ${data.name}, for registering for ${event.name}. Selected sessions: ${data.selectedSessions?.join(', ') || 'None'}. A confirmation email has been (not actually) sent to ${data.email}.`,
      variant: 'default',
    });
    form.reset();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="overflow-hidden shadow-xl">
        <div className="relative h-64 md:h-96 w-full">
          <Image 
            src={event.image} 
            alt={event.name} 
            layout="fill" 
            objectFit="cover"
            priority
            data-ai-hint={event.dataAiHint || "event banner"}
          />
        </div>
        <CardHeader className="border-b">
          <CardTitle className="text-3xl font-bold text-primary">{event.name}</CardTitle>
          <CardDescription className="text-md text-muted-foreground pt-2">
            {event.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Event Details</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CalendarDays className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Date</p>
                  <p className="text-muted-foreground">{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Time</p>
                  <p className="text-muted-foreground">{event.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">{event.location}</p>
                </div>
              </div>
              {event.organizer && (
                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Organizer</p>
                    <p className="text-muted-foreground">{event.organizer}</p>
                  </div>
                </div>
              )}
              {event.category && (
                <div className="flex items-start gap-3">
                  <Tag className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Category</p>
                    <p className="text-muted-foreground">{event.category}</p>
                  </div>
                </div>
              )}
              {event.longDescription && (
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">About this event</p>
                    <p className="text-muted-foreground whitespace-pre-wrap">{event.longDescription}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            {event.sessions && event.sessions.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Available Sessions</h2>
                <Accordion type="single" collapsible className="w-full">
                  {event.sessions.map((session, index) => (
                    <AccordionItem value={`item-${index}`} key={session.id}>
                      <AccordionTrigger className="text-left hover:no-underline">
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id={`session-${session.id}`}
                            checked={form.watch('selectedSessions')?.includes(session.id)}
                            onCheckedChange={(checked) => {
                              const currentSelected = form.getValues('selectedSessions') || [];
                              if (checked) {
                                form.setValue('selectedSessions', [...currentSelected, session.id]);
                              } else {
                                form.setValue('selectedSessions', currentSelected.filter(id => id !== session.id));
                              }
                            }}
                            onClick={(e) => e.stopPropagation()} // Prevent accordion toggle when clicking checkbox
                            className="mr-2 border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                          />
                          {session.name} ({session.schedule})
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p>{session.description}</p>
                        {session.speaker && <p className="mt-2 text-sm"><strong>Speaker:</strong> {session.speaker}</p>}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Register for this Event</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="e.g. Jane Doe" {...field} className="pl-10" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                           <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input type="email" placeholder="e.g. jane.doe@example.com" {...field} className="pl-10" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {event.sessions && event.sessions.length > 0 && (
                     <FormDescription>
                        You can select preferred sessions from the list above.
                      </FormDescription>
                  )}
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Users className="mr-2 h-4 w-4" /> Register Now
                  </Button>
                </form>
              </Form>
            </section>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6">
           <Button variant="outline" asChild>
             <Link href="/">Back to All Events</Link>
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
