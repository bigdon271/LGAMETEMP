import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.metadata.url),
  title: siteConfig.metadata.name,
  description: siteConfig.metadata.description,
  icons: { icon: siteConfig.images.favicon },
  robots: { index: siteConfig.indexable, follow: siteConfig.indexable },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={siteConfig.appearance === "dark" ? "dark" : undefined}
    >
      <body>{children}</body>
    </html>
  );
}
