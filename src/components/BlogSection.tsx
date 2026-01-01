import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const blogPosts = [
  {
    title: "From Zero to First Pull Request: A Beginner's Git Journey",
    excerpt: "How I went from being terrified of Git to confidently contributing to open source projects in just 3 months.",
    author: "Priya Sundaram",
    date: "December 20, 2024",
    readTime: "5 min read",
    category: "Tutorial",
  },
  {
    title: "Building My First SaaS While Working Full-Time",
    excerpt: "Lessons learned from building a side project as an IT professional in Sivakasi, balancing work, family, and coding.",
    author: "Karthik Rajan",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Journey",
  },
  {
    title: "Why I Started Learning to Code at 35",
    excerpt: "It's never too late to start. Here's how I transitioned from retail to tech, and why the koodaram made all the difference.",
    author: "Meena Krishnan",
    date: "December 10, 2024",
    readTime: "6 min read",
    category: "Story",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-accent font-medium text-sm tracking-wide uppercase mb-4">
              From the Community
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Stories & insights
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Real experiences from our community members — tutorials, journeys, and lessons learned along the way.
            </p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="self-start md:self-auto">
              View All Posts
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-card rounded-2xl overflow-hidden soft-shadow border border-border/30 hover:border-accent/30 transition-all duration-300 cursor-pointer opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Category Badge */}
              <div className="p-6 pb-0">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Write for us CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Have a story to share? We'd love to hear from you.
          </p>
          <Button variant="soft">
            Write for techKoodaram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
