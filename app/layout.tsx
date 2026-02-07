import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://astrale.ca";
const siteDescription =
  "Transformez le chaos du terrain en conformité bancaire. Accélérez votre cycle de facturation avec Astrale.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Astrale — Automatisation pour le transport",
    template: "%s | Astrale",
  },
  description: siteDescription,
  applicationName: "Astrale",
  authors: [{ name: "Astrale", url: siteUrl }],
  creator: "Astrale",
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: siteUrl,
    siteName: "Astrale",
    title: "Astrale — Automatisation pour le transport",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Astrale — Automatisation pour le transport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astrale — Automatisation pour le transport",
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Astrale",
        url: siteUrl,
        logo: `${siteUrl}/logo.svg`,
        contactPoint: {
          "@type": "ContactPoint",
          email: "contact@astrale.ca",
          contactType: "customer service",
          availableLanguage: ["French", "English"],
        },
      },
      {
        "@type": "WebSite",
        name: "Astrale",
        url: siteUrl,
      },
    ],
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
