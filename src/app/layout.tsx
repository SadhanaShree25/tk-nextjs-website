
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import QueryProvider from "@/components/QueryProvider"; // We'll create this wrapper
import "@/index.css";
import { Inter, Roboto } from "next/font/google";
import Script from "next/script";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});
const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    variable: "--font-roboto",
});

export const metadata = {
    metadataBase: new URL("https://techkoodaram.in"),
    title: {
        default: "TechKoodaram | Grassroots Tech Community in South Tamil Nadu",
        template: "%s | TechKoodaram",
    },
    description: "TechKoodaram is a grassroots tech community bridging the gap between talent and access. Based in South Tamil Nadu (Sivakasi to Tenkasi), we focus on Learning, Building, and Sharing.",
    keywords: ["TechKoodaram", "Tamil Nadu Tech Community", "Sivakasi Tech", "Tenkasi Tech", "Developer Community India", "Grassroots Tech", "Open Source Tamil Nadu", "Tech Events Tamil Nadu"],
    authors: [{ name: "TechKoodaram Team" }],
    creator: "TechKoodaram",
    publisher: "TechKoodaram",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "TechKoodaram | Grassroots Tech Community",
        description: "Talent exists everywhere. Access doesn’t. Join the grassroots tech community of South Tamil Nadu.",
        url: "https://techkoodaram.in",
        siteName: "TechKoodaram",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "TechKoodaram Community",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "TechKoodaram | Grassroots Tech Community",
        description: "Bridging the gap between talent and access in South Tamil Nadu.",
        images: ["/og-image.png"],
    },
    verification: {
        google: "search_console_verification_code_here",
    },
    category: "technology",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
            <body className={`${inter.className} font-sans`}>
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
