import { getSiteConfig } from "@/lib/config";
import { routes } from "@/lib/config/routes";
import { Metadata } from "next";

const route = routes.default;

export const metadata: Metadata = {
  title: getSiteConfig(route).cookiesPolicy.seo.title,
  description: getSiteConfig(route).cookiesPolicy.seo.description,
};

export default function CookiesPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
