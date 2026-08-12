import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.canonical),
  title: {
    default: "Jon-jon Basilan — Engineer, Builder, Technologist",
    template: "%s · Jon-jon Basilan",
  },
  description: site.description,
  keywords: [
    "Jon-jon Basilan",
    "software engineer",
    "systems engineer",
    "trading platform",
    "classic games",
    "AI automation",
    "cloud infrastructure",
  ],
  authors: [{ name: "Jon-jon Basilan" }],
  creator: "Jon-jon Basilan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.canonical,
    siteName: "Jon-jon Basilan",
    title: "Jon-jon Basilan — Engineer, Builder, Technologist",
    description: site.description,
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Jon-jon Basilan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jon-jon Basilan — Engineer, Builder, Technologist",
    description: site.description,
    images: ["/og/home.png"],
  },
  alternates: { canonical: site.canonical },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jon-jon Basilan",
    url: site.canonical,
    author: {
      "@type": "Person",
      name: "Jon-jon Basilan",
      email: site.email,
      url: site.canonical,
      sameAs: [site.social.github, site.social.kofi].filter(Boolean),
    },
    description: site.description,
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain min-h-screen antialiased">
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
