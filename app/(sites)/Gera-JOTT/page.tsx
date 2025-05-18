"use client";

import AmenitiesSection from "@/components/amenities-section";
import DeveloperSection from "@/components/developer-section";
import GallerySection from "@/components/gallery-section";
import HeroSection from "@/components/hero-section";
import LocationSection from "@/components/location-section";
import PriceSection from "@/components/price-section";
import SitePlanSection from "@/components/site-plan-section";
import VirtualTourSection from "@/components/virtual-tour-section";
import { getSiteConfig } from "@/lib/config";
import { useSite } from "@/lib/context/site-context";
import { useAutoModal } from "@/lib/hooks/use-auto-modal";
import { GoogleTagManager } from "@next/third-parties/google";

export default function GardenCityPage() {
  useAutoModal(3000);
  const { site } = useSite();
  const { gtmId } = getSiteConfig(site);
  return (
    <div>
      <HeroSection />
      <PriceSection />
      <SitePlanSection />
      <AmenitiesSection />
      <GallerySection />
      <LocationSection />
      <VirtualTourSection />
      <DeveloperSection />
      <GoogleTagManager gtmId={gtmId} />
    </div>
  );
}
