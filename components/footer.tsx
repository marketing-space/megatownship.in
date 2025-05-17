"use client";

import { getSiteConfig } from "@/lib/config";
import { useSite } from "@/lib/context/site-context";
import Link from "next/link";

export default function Footer() {
  const { site } = useSite();
  const { footer } = getSiteConfig(site);

  return (
    <footer className="bg-gray-100 flex-grow-0 flex justify-center items-center h-14 lg:mb-0 mb-4">
      <p className="text-center text-sm text-gray-500">
        Copyright © 2024 |{" "}
        <Link href={footer.termsConditions.href} className="text-primary">
          Terms & Conditions
        </Link>{" "}
        |{" "}
        <Link href={footer.privacyPolicy.href} className="text-primary">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href={footer.cookiesPolicy.href} className="text-primary">
          Cookies Policy
        </Link>
      </p>
    </footer>
  );
}
