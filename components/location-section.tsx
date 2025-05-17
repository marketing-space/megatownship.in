"use client";

import { useModal } from "@/lib/stores/use-modal-store";
import { MapPin, Navigation } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Section } from "./ui/section";
import { getSiteConfig } from "@/lib/config";
import { useSite } from "@/lib/context/site-context";

export default function LocationSection() {
  const { onOpen } = useModal();
  const { site } = useSite();
  const { map } = getSiteConfig(site);
  return (
    <Section
      id="location"
      title={map.title}
      subtitle={map.description}
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Map View */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Map View</h3>
          <div className="relative aspect-[4/3] sm:aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={map.googleMapIframe}
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <Button
              className="absolute bottom-4 right-4 bg-white text-gray-900 hover:bg-gray-100"
              onClick={() => window.open(map.googleMapIframe, "_blank")}
            >
              <Navigation className="mr-2 h-4 w-4" />
              Get Directions
            </Button>
          </div>
        </div>

        {/* Location Map */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">
            {map.location.title}
          </h3>
          <div className="relative aspect-[4/3] sm:aspect-[16/9] rounded-lg overflow-hidden shadow-lg group">
            <Image
              src={map.image.src}
              alt={map.image.alt}
              fill
              className="object-cover blur-[2px] group-hover:blur-[3px] group-hover:scale-110 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="sm"
                className="bg-white text-gray-900 hover:bg-gray-100"
                onClick={() =>
                  onOpen("enquiry", {
                    title: map.location.cta.title,
                    description: map.location.cta.description,
                  })
                }
              >
                <MapPin className="mr-0.5 h-3.5 w-3.5 hidden sm:block" />
                {map.location.cta.title}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Locations */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Nearby Landmarks
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
          {map.landmarks.map((location, index) => (
            <div key={index} className="flex items-center gap-3 group">
              <div className="flex-shrink-0 p-1.5 bg-primary-50 rounded-full group-hover:bg-primary-100 transition-colors">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 transition-colors">
                  {location.title}
                </h4>
                <p className="text-sm text-gray-500">{location.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
