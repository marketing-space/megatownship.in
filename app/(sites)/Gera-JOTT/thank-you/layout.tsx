import { getSiteConfig } from "@/lib/config";
import { routes } from "@/lib/config/routes";
import { Metadata } from "next";

const route = routes.default;

export const metadata: Metadata = {
  title: getSiteConfig(route).thankYou.seo.title,
  description: getSiteConfig(route).thankYou.seo.description,
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
