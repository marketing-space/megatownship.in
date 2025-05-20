import { Metadata } from "next";
import "./globals.css";
import { getSiteConfig } from "@/lib/config";
import { routes } from "@/lib/config/routes";

const route = routes.GeraJOTT;

export const metadata: Metadata = {
  title: getSiteConfig(route).seo.title,
  description: getSiteConfig(route).seo.description,
};
export default function GardenCityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
