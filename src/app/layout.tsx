
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import QueryProvider from "@/components/QueryProvider"; // We'll create this wrapper
import "@/index.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL("https://techkoodaram.in"),
    title: "TechKoodaram",
    description: "TechKoodaram Website",
    alternates: {
        canonical: "/",
    },
    verification: {
        google: "search_console_verification_code_here", // Placeholder for actual code if provided later
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-ZJ6MQWNN6W"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZJ6MQWNN6W');
          `}
                </Script>

                {/* Schema Markup */}
                <Script id="schema-org" type="application/ld+json">
                    {JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "TechKoodaram",
                            url: "https://techkoodaram.in",
                            logo: "https://techkoodaram.in/logo.png",
                            sameAs: [
                                "https://www.instagram.com/techkoodaram/",
                                "https://www.linkedin.com/company/techkoodaram/",
                            ],
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: "TechKoodaram",
                            url: "https://techkoodaram.in",
                            potentialAction: {
                                "@type": "SearchAction",
                                target: "https://techkoodaram.in/search?q={search_term_string}",
                                "query-input": "required name=search_term_string",
                            },
                        },
                    ])}
                </Script>

                <QueryProvider>
                    <TooltipProvider>
                        {children}
                        <Toaster />
                        <Sonner />
                    </TooltipProvider>
                </QueryProvider>
            </body>
        </html>
    );
}
