import { getSiteConfig } from "@/lib/config";
import { routes } from "@/lib/config/routes";
import { Metadata } from "next";

const route = routes.default;

export const metadata: Metadata = {
  title: getSiteConfig(route).privacyPolicy.seo.title,
  description: getSiteConfig(route).privacyPolicy.seo.description,
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
