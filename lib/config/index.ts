import { geraConfig } from "@/lib/config/garden-city";
import { routes } from "./routes";
import { siteConfig } from "./site";

const configs = {
  [routes.default]: siteConfig,
  [routes.Gera]: geraConfig,
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
