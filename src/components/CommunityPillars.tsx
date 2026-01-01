"use client";

import { BookOpen, Share2, Wrench, Users } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Learn",
    description: "Workshops, study groups, and mentorship for every skill level. No question is too basic.",
    color: "bg-accent/10",
  },
  {
    icon: Share2,
    title: "Share",
    description: "Lightning talks, blog posts, and open discussions. Your unique perspective matters here.",
    color: "bg-warmGlow/20",
  },
  {
    icon: Wrench,
    title: "Build",
    description: "Hackathons, side projects, and collaborative experiments. Ideas become reality together.",
    color: "bg-sandLight",
  },
  {
    icon: Users,
    title: "Belong",
    description: "A safe, inclusive space where you're welcomed as you are. No gatekeeping, just growth.",
    color: "bg-secondary",
  },
];

const CommunityPillars = () => {
  return (
    <section id="community" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-medium text-sm tracking-wide uppercase mb-4">
            Our Community
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Four pillars of the <span className="text-accent">koodaram</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything we do revolves around these core values. They guide how we gather,
            how we grow, and how we lift each other up.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group relative rounded-2xl p-6 bg-card soft-shadow hover:shadow-lg transition-all duration-300 border border-border/30 hover:border-accent/30 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${pillar.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                <pillar.icon className="text-accent" size={26} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/10 rounded-tr-xl group-hover:border-accent/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityPillars;
