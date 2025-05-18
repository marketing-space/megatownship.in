import { geraConfig } from "@/lib/config/gera-jott";
import { routes } from "./routes";
import { siteConfig } from "./site";

const configs = {
  [routes.default]: siteConfig,
  [routes.GeraJOTT]: geraConfig,
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
