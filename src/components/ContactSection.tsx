"use client";

import { Mail, Mic, Handshake, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const opportunities = [
    {
      icon: <Mic className="w-6 h-6 text-accent" />,
      title: "Give a Talk",
      description: "Share your knowledge and experience with the community."
    },
    {
      icon: <Handshake className="w-6 h-6 text-accent" />,
      title: "Collaborate",
      description: "Partner with us for college events and workshops."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-accent" />,
      title: "Contribute",
      description: "Help us build the tech ecosystem in our region."
    },
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "Contact Us",
      description: "Reach out for any other queries or suggestions."
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Involved
          </h2>
          <p className="text-lg text-muted-foreground">
            We are always looking for passionate individuals to join our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-sm border border-border/50 hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <div className="p-3 bg-accent/10 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg mb-6">
            Write to us at
          </p>
          <a
            href="mailto:contact@techkoodaram.in"
            className="inline-flex items-center text-2xl md:text-3xl font-bold text-accent hover:underline mb-8"
          >
            contact@techkoodaram.in
          </a>
          <div>
            <Button
              onClick={() => window.location.href = 'mailto:contact@techkoodaram.in'}
              size="lg"
            >
              Send us an email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
