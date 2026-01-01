import { Tent, Heart, Lightbulb, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-cream relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-accent/10 rounded-full" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-medium text-sm tracking-wide uppercase mb-4">
              What is techKoodaram?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              An open tent for <span className="text-accent">curious minds</span>
            </h2>
          </div>

          {/* Story Block */}
          <div className="bg-card rounded-2xl p-8 md:p-12 soft-shadow mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Tent className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">The Koodaram Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In Tamil, <em className="text-foreground font-medium">koodaram</em> means "tent" — 
                  a temporary shelter where travelers find rest, where communities gather for festivals, 
                  where stories are shared under the stars.
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6 pl-16">
              techKoodaram carries this spirit into the world of technology. We're not a corporation 
              or a formal institution. We're a gathering of developers, designers, students, and 
              self-learners who believe that <span className="text-foreground font-medium">knowledge grows 
              when shared freely</span>.
            </p>

            <p className="text-muted-foreground leading-relaxed pl-16">
              Whether you're writing your first line of code or building your tenth product, 
              there's a place for you under this tent. Come as you are. Learn at your pace. 
              Share what you know. Grow together.
            </p>
          </div>

          {/* Who We Serve */}
          <div className="bg-card rounded-2xl p-8 md:p-12 soft-shadow mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Target className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Who We Serve</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Based in the vibrant region from <span className="text-foreground font-medium">Sivakasi to Tenkasi</span>, 
                  we're building a tech ecosystem for South Tamil Nadu.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 pl-16">
              <div className="bg-secondary/50 rounded-xl p-4 text-center">
                <p className="font-medium text-foreground">Students</p>
                <p className="text-sm text-muted-foreground mt-1">Building foundations for the future</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4 text-center">
                <p className="font-medium text-foreground">IT Professionals</p>
                <p className="text-sm text-muted-foreground mt-1">Growing skills & connections</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4 text-center">
                <p className="font-medium text-foreground">Aspiring Entrepreneurs</p>
                <p className="text-sm text-muted-foreground mt-1">Turning ideas into reality</p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 soft-shadow group hover:bg-secondary/30 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <Heart className="text-accent" size={20} />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">People First</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We prioritize human connection over metrics. Every member matters, 
                every question is valid, every contribution is valued.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 soft-shadow group hover:bg-secondary/30 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <Lightbulb className="text-accent" size={20} />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Learning Together</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Beginners teach experts patience. Experts share hard-won wisdom. 
                In the koodaram, everyone is both teacher and student.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
