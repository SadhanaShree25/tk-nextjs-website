"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Users, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
    {
        name: "LocalBiz Connect",
        description: "A platform connecting local businesses in Sivakasi with customers, featuring online ordering and delivery tracking.",
        status: "Live",
        tech: ["React", "Node.js", "PostgreSQL"],
        teamSize: 4,
        link: "#",
        github: "#",
        image: "🏪",
    },
    {
        name: "StudyBuddy TN",
        description: "A peer-to-peer learning platform for Tamil Nadu engineering students to share notes and collaborate on projects.",
        status: "Beta",
        tech: ["Next.js", "Supabase", "Tailwind"],
        teamSize: 3,
        link: "#",
        github: "#",
        image: "📚",
    },
    {
        name: "Fireworks Safety App",
        description: "Safety guidelines and emergency contacts app for Sivakasi's fireworks industry workers, available offline.",
        status: "Live",
        tech: ["React Native", "Firebase"],
        teamSize: 2,
        link: "#",
        github: "#",
        image: "🎆",
    },
    {
        name: "AgriPrice Tracker",
        description: "Real-time agricultural commodity prices for farmers in the Tenkasi region, with price trend analysis.",
        status: "In Development",
        tech: ["Flutter", "Python", "FastAPI"],
        teamSize: 5,
        link: null,
        github: "#",
        image: "🌾",
    },
    {
        name: "Temple Visit Planner",
        description: "Plan visits to temples in South Tamil Nadu with crowd predictions, timings, and festival calendars.",
        status: "Live",
        tech: ["React", "Express", "MongoDB"],
        teamSize: 3,
        link: "#",
        github: null,
        image: "🛕",
    },
    {
        name: "Code Koodaram Bot",
        description: "Our community Discord bot that helps with code reviews, learning resources, and event reminders.",
        status: "Live",
        tech: ["Python", "Discord.py"],
        teamSize: 2,
        link: null,
        github: "#",
        image: "🤖",
    },
];

const statusColors: Record<string, string> = {
    "Live": "bg-green-100 text-green-700",
    "Beta": "bg-amber-100 text-amber-700",
    "In Development": "bg-blue-100 text-blue-700",
};

const Products = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-16 md:py-24 bg-cream relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-warmGlow/15 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

                    <div className="container mx-auto relative z-10">
                        <div className="max-w-3xl">
                            <span className="inline-block text-accent font-medium text-sm tracking-wide uppercase mb-4">
                                Built by the Community
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                                Products from the <span className="text-accent">koodaram</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Real solutions built by our community members. From side projects to startups,
                                these are the fruits of collaboration, learning, and building together.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="py-16 md:py-24 bg-background">
                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product, index) => (
                                <article
                                    key={index}
                                    className="group bg-card rounded-2xl p-6 soft-shadow border border-border/30 hover:border-accent/30 transition-all duration-300 flex flex-col opacity-0 animate-fade-up"
                                    style={{ animationDelay: `${0.05 + index * 0.05}s` }}
                                >
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="text-4xl">{product.image}</div>
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[product.status]}`}>
                                            {product.status}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                                        {product.name}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                                        {product.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {product.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-xs bg-secondary rounded-md text-secondary-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                            <Users size={14} />
                                            <span>{product.teamSize} builders</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {product.github && (
                                                <a
                                                    href={product.github}
                                                    className="p-2 rounded-lg hover:bg-secondary transition-colors duration-200"
                                                    aria-label="View on GitHub"
                                                >
                                                    <Github size={16} className="text-muted-foreground" />
                                                </a>
                                            )}
                                            {product.link && (
                                                <a
                                                    href={product.link}
                                                    className="p-2 rounded-lg hover:bg-secondary transition-colors duration-200"
                                                    aria-label="Visit website"
                                                >
                                                    <ExternalLink size={16} className="text-muted-foreground" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 md:py-24 bg-cream">
                    <div className="container mx-auto">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                                <Rocket className="text-accent" size={32} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Have a project idea?
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                Whether you're looking for collaborators, feedback, or just want to build something
                                cool with the community — we're here to help you ship.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button variant="hero" size="lg">
                                    Share Your Project
                                    <ArrowRight size={18} />
                                </Button>
                                <Link href="/">
                                    <Button variant="soft" size="lg">
                                        Back to Home
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Products;
