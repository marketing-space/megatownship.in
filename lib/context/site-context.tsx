"use client";

import { createContext, useContext } from "react";

type SiteContextType = {
  site?: string;
};

const SiteContext = createContext<SiteContextType>({ site: undefined });

export function SiteProvider({
  children,
  site,
}: {
  children: React.ReactNode;
  site?: string;
}) {
  return (
    <SiteContext.Provider value={{ site }}>{children}</SiteContext.Provider>
  );
}

export function useSite() {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error("useSite must be used within a SiteProvider");
  }
  return context;
}
