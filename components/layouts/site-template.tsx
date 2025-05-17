"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ModalProvider } from "@/components/providers/modal-provider";
import { SiteProvider } from "@/lib/context/site-context";
import { usePathname } from "next/navigation";
import MobileActionBar from "../mobile-action-bar";
import EnquireSection from "../enquire-section";

export default function SiteTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const site = pathname.split("/")[1];
  console.log(site);
  return (
    <SiteProvider site={site}>
      <ModalProvider />
      <Navbar />
      <main className="flex flex-col w-full min-h-[calc(100vh-var(--navbar-height))] mt-[var(--navbar-height)] pb-[56px] lg:pb-0">
        <div className="flex-1 flex flex-col justify-between lg:w-3/4">
          {children}
          <Footer />
        </div>
        <div className="lg:w-1/4 lg:flex-shrink-0 hidden lg:block">
          <div className="lg:fixed lg:right-0 lg:top-[var(--navbar-height)] lg:h-[calc(100vh-var(--navbar-height))] lg:w-1/4">
            <EnquireSection />
          </div>
        </div>
      </main>
      <MobileActionBar />
    </SiteProvider>
  );
}
