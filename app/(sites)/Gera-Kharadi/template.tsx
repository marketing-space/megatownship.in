import SiteTemplate from "@/components/layouts/site-template";

export default function Template({ children }: { children: React.ReactNode }) {
  return <SiteTemplate>{children}</SiteTemplate>;
}
