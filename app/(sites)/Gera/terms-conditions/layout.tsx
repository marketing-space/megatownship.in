import { getSiteConfig } from "@/lib/config";
import { routes } from "@/lib/config/routes";
import { Metadata } from "next";

const route = routes.Gardencity;

export const metadata: Metadata = {
  title: getSiteConfig(route).termsAndConditions.seo.title,
  description: getSiteConfig(route).termsAndConditions.seo.description,
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
