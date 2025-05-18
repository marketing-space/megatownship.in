"use client";

import { getSiteConfig } from "@/lib/config";
import { useSite } from "@/lib/context/site-context";

export default function CookiesPolicy() {
  const { site } = useSite();
  const { cookiesPolicy } = getSiteConfig(site);

  return (
    <div className="flex-1 flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-1 px-2 lg:px-8 border-b pb-2">
        <h1 className="text-xl font-bold text-center">{cookiesPolicy.title}</h1>
        <p className="text-sm text-center">{cookiesPolicy.description}</p>
      </div>
      {cookiesPolicy.paragraphs.map((paragraph, index) => (
        <div className="flex flex-col gap-2 px-2 lg:px-8" key={index}>
          <h3 className="text-lg font-bold">{paragraph.title}</h3>
          <p>{paragraph.description}</p>
        </div>
      ))}
    </div>
  );
}
