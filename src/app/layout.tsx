import type { Metadata } from "next";
import { marcellus, dmSans } from "@/lib/fonts";
import "./globals.css";
import ConvexClientProvider from "@/components/ConvexClientProvider";

import { ThemeProvider } from "@/components/theme-provider";
import { ResidentAssistant } from "@/components/ui/ResidentAssistant";
import { Toaster } from "sonner";

import { Navbar } from "@/components/brand/navigation/Navbar";
import { Footer } from "@/components/brand/layout/Footer";
import { CommunityBar } from "@/components/brand/layout/CommunityBar";


export const metadata: Metadata = {
  metadataBase: new URL('https://jokatemwegelo.com'),
  title: {
    default: "Jokate Mwegelo | Leadership, Impact & Vision",
    template: "%s | Jokate Mwegelo",
  },
  description: "Official platform of Jokate Mwegelo — Secretary General of UWT & UVCCM, former District Commissioner, Forbes 30 Under 30 Africa. Shaping the future of women's leadership in Tanzania.",
  keywords: ["Jokate Mwegelo", "Tanzania Leader", "Women Leadership", "UWT", "UVCCM", "CCM", "Kidoti", "Forbes 30 Under 30"],
  authors: [{ name: "Jokate Mwegelo" }],
  creator: "Jokate Mwegelo",
  publisher: "Jokate Mwegelo Official Platform",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "Jokate Mwegelo | Official Platform",
    description: "Secretary General · UWT & UVCCM · Forbes 30 Under 30 Africa. Building leaders. One girl at a time.",
    url: "https://jokatemwegelo.com",
    siteName: "Jokate Mwegelo",
    locale: "en_US",
    type: "website",
    images: [{
      url: "/images/social-share.png",
      width: 1200,
      height: 630,
      alt: "Jokate Mwegelo — Official Platform",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jokate Mwegelo | Official Platform",
    description: "Secretary General · UWT & UVCCM · Forbes 30 Under 30 Africa. Building leaders. One girl at a time.",
    images: ["/images/social-share.png"],
  },
  alternates: {
    canonical: "https://jokatemwegelo.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${marcellus.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jokate Mwegelo",
              "jobTitle": "Secretary General, UWT & UVCCM",
              "nationality": "Tanzanian",
              "url": "https://jokatemwegelo.com",
              "sameAs": [
                "https://www.instagram.com/jokatemwegelo",
                "https://twitter.com/jokatemwegelo"
              ],
              "image": "https://jokatemwegelo.com/images/social-share.png",
              "description": "Shaping the next generation of women leaders in Tanzania."
            })
          }}
        />
      </head>
      <body className="antialiased selection:bg-brand-gold/30 selection:text-brand-black">

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConvexClientProvider>
            <Navbar />
            <main className="min-h-screen pt-24 flex flex-col">
              {children}
            </main>
            <CommunityBar />
            <Footer />
            <ResidentAssistant />
            <Toaster position="top-center" richColors />
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
