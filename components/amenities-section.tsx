"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Section } from "@/components/ui/section";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";
import { useModal } from "@/lib/stores/use-modal-store";
import { Download } from "lucide-react";
import { getSiteConfig } from "@/lib/config";
import { useSite } from "@/lib/context/site-context";

export default function AmenitiesSection() {
  const { site } = useSite();
  const { amenities } = getSiteConfig(site);
  const plugin = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
    })
  );

  const { onOpen } = useModal();

  return (
    <Section
      id="amenities"
      title={amenities.title}
      subtitle={amenities.description}
      button={{
        text: amenities.cta.title,
        icon: <Download className="mr-1 h-4 w-4" />,
        onClick: () =>
          onOpen("enquiry", {
            title: amenities.cta.title,
            description: amenities.cta.description,
          }),
      }}
    >
      {/* Amenities Count */}
      <div className="mb-8 text-center">
        <p className="text-2xl font-bold text-gray-900">
          <span className="text-primary">
            {amenities.stats.title.split(" ")[0]}
          </span>{" "}
          {amenities.stats.title.split(" ")[1]}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          {amenities.stats.description}
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {/* Split amenities into chunks of 6 for each slide */}
          {Array.from({
            length: Math.ceil(amenities.amenities.length / 6),
          }).map((_, slideIndex) => (
            <CarouselItem key={slideIndex} className="pl-2 md:pl-4 basis-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {amenities.amenities
                  .slice(slideIndex * 6, (slideIndex + 1) * 6)
                  .map((amenity, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={amenity.image}
                          alt={amenity.title}
                          width={500}
                          height={100}
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay with gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        {/* Title */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-lg font-bold text-white mb-1">
                            {amenity.title}
                          </h3>
                          <p className="text-sm text-white/90">
                            {amenity.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </div>
      </Carousel>
    </Section>
  );
}
