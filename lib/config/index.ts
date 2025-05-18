import { geraConfig } from "@/lib/config/gera-jott";
import { routes } from "./routes";
import { siteConfig } from "./site";
import { geraKharadiConfig } from "@/lib/config/gera-kharadi";

const configs = {
  [routes.default]: siteConfig,
  [routes.GeraJOTT]: geraConfig,
  [routes.GeraKharadi]: geraKharadiConfig,
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
