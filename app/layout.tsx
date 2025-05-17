import type { Metadata } from "next";
import { getSiteConfig } from "@/lib/config";
import { geistSans, geistMono } from "./fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: getSiteConfig("/").seo.title,
  description: getSiteConfig("/").seo.description,
  keywords: getSiteConfig("/").seo.keywords,
  openGraph: {
    images: [getSiteConfig("/").branding.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white`}>
        {children}
      </body>
    </html>
  );
}
