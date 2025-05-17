"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Section } from "./ui/section";
import { useModal } from "@/lib/stores/use-modal-store";
import { getSiteConfig } from "@/lib/config";
import { useSite } from "@/lib/context/site-context";

export default function VirtualTourSection() {
  const [isHovered, setIsHovered] = useState(false);
  const { onOpen } = useModal();
  const { site } = useSite();
  const { virtualTour } = getSiteConfig(site);

  return (
    <Section
      id="sitevisit"
      title={virtualTour.title}
      subtitle={virtualTour.description}
    >
      <div
        className="mt-8 relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() =>
          onOpen("enquiry", {
            title: virtualTour.cta.title,
            description: virtualTour.cta.description,
          })
        }
      >
        {/* Main Image */}
        <Image
          src={virtualTour.image.src}
          alt={virtualTour.image.alt}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Play Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div
            className={`transform transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          >
            <div className="size-12 lg:size-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center mb-4">
              <Play className="size-4 lg:size-8 text-white fill-white" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              {virtualTour.videoTitle}
            </h3>
            <p className="text-sm sm:text-xl text-white/90 max-w-sm sm:max-w-lg">
              {virtualTour.videoDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {virtualTour.features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
} 