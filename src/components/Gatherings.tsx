import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    title: "Weekend Workshop: Git & GitHub for Beginners",
    date: "January 11, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Online",
    type: "Workshop",
  },
  {
    title: "Monthly Meetup: Building in Public",
    date: "January 18, 2025",
    time: "4:00 PM - 6:00 PM",
    location: "Sivakasi, Tamil Nadu",
    type: "Meetup",
  },
  {
    title: "Lightning Talks: Side Projects Showcase",
    date: "January 25, 2025",
    time: "5:00 PM - 7:00 PM",
    location: "Tenkasi, Tamil Nadu",
    type: "Talk",
  },
];

const Gatherings = () => {
  return (
    <section id="gatherings" className="py-20 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-warmGlow/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-accent font-medium text-sm tracking-wide uppercase mb-4">
              Gatherings
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Come, sit with us
            </h2>
            <p className="text-muted-foreground mt-4">
              From Sivakasi to Tenkasi — building South Tamil Nadu's tech community together.
            </p>
          </div>
          <Button variant="outline" className="self-start md:self-auto">
            View All Events
            <ArrowRight size={16} />
          </Button>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 soft-shadow border border-border/30 hover:border-accent/30 transition-all duration-300 cursor-pointer opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                {/* Event Type Badge */}
                <div className="flex-shrink-0">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                    {event.type}
                  </span>
                </div>

                {/* Event Title */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                    {event.title}
                  </h3>
                </div>

                {/* Event Meta */}
                <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-accent/70" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-accent/70" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-accent/70" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight 
                  size={20} 
                  className="hidden lg:block text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200" 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Empty state hint */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          Can't make these dates? More gatherings are announced every week on our community channels.
        </p>
      </div>
    </section>
  );
};

export default Gatherings;
