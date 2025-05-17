"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { IndianRupee, ChevronDown, ChevronUp, Download } from "lucide-react";
import { useModal } from "@/lib/stores/use-modal-store";
import { motion } from "framer-motion";
import { getSiteConfig } from "@/lib/config";
import EnquireSection from "./enquire-section";
import { useSite } from "@/lib/context/site-context";

export default function HeroSection() {
  const { site } = useSite();
  const { name, hero } = getSiteConfig(site);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const { onOpen } = useModal();
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <section className="grid grid-cols-1" id="home">
      <div className="relative w-full h-auto lg:h-full">
        <Carousel className="overflow-hidden" plugins={[plugin.current]}>
          <CarouselContent className="h-full">
            {hero.banners.map((banner, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full">
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="object-fill object-center w-full"
                    priority={index === 0}
                    quality={90}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute hidden lg:block top-4 left-4 z-10 max-w-sm bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
          <div className="bg-primary text-white px-4 py-2 text-sm font-semibold">
            {hero.offer.title}
          </div>
          <div className="px-4 py-3 space-y-2">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
              <p className="text-sm text-gray-600">{hero.offer.location}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              {hero.offer.features.map((feature, index) => (
                <div key={index}>
                  <p className="font-semibold">{feature.title}</p>
                  <p className="text-gray-600 w-full">{feature.value}</p>
                </div>
              ))}
            </div>

            <motion.div
              className="border-t border-gray-200 p-3 rounded-xl bg-gradient-to-r from-primary/20 to-primary/60 relative overflow-hidden"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                backgroundPosition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <motion.div
                className="absolute -inset-full w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/30 to-transparent -rotate-45"
                animate={{
                  transform: [
                    "translateX(-100%) rotate(-45deg)",
                    "translateX(50%) rotate(-45deg)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="space-y-2">
                {hero.offer.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-primary"
                  >
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2" />
                    <span>{point.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="border-t border-gray-200 pt-3">
              <p className="text-sm text-gray-600 text-center">
                {hero.offer.price.title}
              </p>
              <div className="flex items-center justify-center gap-1 text-xl font-bold text-gray-900">
                <IndianRupee className="h-5 w-5" />
                <span>{hero.offer.price.value}</span>
                <span className="text-xs font-normal text-gray-600">
                  {hero.offer.price.suffix}
                </span>
              </div>
            </div>
            <Button
              onClick={() =>
                onOpen("enquiry", {
                  title: hero.offer.cta.title,
                  description: hero.offer.cta.description,
                })
              }
              className="w-full"
            >
              {hero.offer.cta.title}
            </Button>
          </div>
        </div>
        <div className="lg:hidden flex flex-col w-full bg-white/95 overflow-hidden">
          <div className="bg-primary text-white px-4 py-2 text-sm font-semibold">
            {hero.offer.title}
          </div>
          <div className="p-4 space-y-3">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
              <p className="text-sm text-gray-600">{hero.offer.location}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              {hero.offer.features.map((feature, index) => (
                <div key={index}>
                  <p className="font-semibold">{feature.title}</p>
                  <p className="text-gray-600 w-full">{feature.value}</p>
                </div>
              ))}
            </div>

            <motion.div
              className="border-t border-gray-200 p-3 rounded-xl bg-gradient-to-r from-primary/20 to-primary/60 relative overflow-hidden"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                backgroundPosition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <motion.div
                className="absolute -inset-full w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/30 to-transparent -rotate-45"
                animate={{
                  transform: [
                    "translateX(-100%) rotate(-45deg)",
                    "translateX(50%) rotate(-45deg)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="space-y-2">
                {hero.offer.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-primary"
                  >
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2" />
                    <span>{point.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="border-t border-gray-200 pt-3">
              <p className="text-sm text-gray-600 text-center">
                {hero.offer.price.title}
              </p>
              <div className="flex items-center justify-center gap-1 text-xl font-bold text-gray-900">
                <IndianRupee className="h-5 w-5" />
                <span>{hero.offer.price.value}</span>
                <span className="text-sm font-normal text-gray-600">
                  {hero.offer.price.suffix}
                </span>
              </div>
            </div>
            <Button
              onClick={() =>
                onOpen("enquiry", {
                  title: hero.offer.cta.title,
                  description: hero.offer.cta.description,
                })
              }
              className="w-full"
            >
              {hero.offer.cta.title}
            </Button>
          </div>
        </div>
      </div>

      <EnquireSection
        showFreeVisitButton={false}
        showCallUsButton={false}
        className="lg:hidden max-w-md w-full mx-auto space-y-4"
      />

      {/* Content Section */}
      <div className="flex items-start lg:items-center p-6 lg:p-12 bg-white overflow-y-auto">
        <div className="mx-auto lg:mx-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            {hero.welcome.title}
          </h1>
          <div className="my-1 w-32 h-1 rounded-full bg-primary mb-4"></div>
          <div className="space-y-4 flex flex-col">
            <div className="relative">
              <p
                className={`text-sm sm:text-base text-gray-600 ${
                  !isExpanded && "line-clamp-4"
                }`}
              >
                {hero.welcome.description}
              </p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary hover:text-primary/90 text-sm font-medium flex items-center gap-1 mt-2 transition-colors select-none"
              >
                {isExpanded ? (
                  <>
                    Read Less
                    <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Read More
                    <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
            <div className="pt-2 self-end">
              <Button
                onClick={() =>
                  onOpen("enquiry", {
                    title: hero.welcome.cta.title,
                    description: hero.welcome.cta.description,
                  })
                }
              >
                <Download className="mr-1 h-3.5 w-3.5" />
                {hero.welcome.cta.title}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
