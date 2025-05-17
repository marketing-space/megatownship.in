import { useSite } from "@/lib/context/site-context";
import { getSiteConfig } from "@/lib/config";

export function useSiteConfig() {
  const { site } = useSite();
  return getSiteConfig(site);
}
