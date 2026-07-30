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
      <body>
        {children}
        <GallerySevenCards />
      </body>
    </html>
  );
}
