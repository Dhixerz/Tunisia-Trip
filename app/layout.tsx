import type { Metadata, Viewport } from "next";
import GallerySevenCards from "./components/GallerySevenCards";
import "./globals.css";
import "./overrides.css";
import "./mobile.css";
import "./mobile-polish.css";
import "./motto-mobile.css";
import "./motto-mobile-spacing.css";
import "./gallery-seven.css";
import "./menu-navigation-fix.css";
import "./day2.css";
import "./day3/day3.css";

const siteTitle = "TUNI — Multidisciplinary Creative Studio";
const siteDescription =
  "A multidisciplinary creative studio crafting visual narratives across brand, fashion, product, editorial, and digital design.";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "TUNI — Stories you can feel, moments you can keep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Inter:wght@300;400;500&display=swap"
        />
      </head>
      <body>
        {children}
        <GallerySevenCards />
      </body>
    </html>
  );
}
