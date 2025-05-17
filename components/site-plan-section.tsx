"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Section } from "@/components/ui/section";
import { Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { useModal } from "@/lib/stores/use-modal-store";
import { getSiteConfig } from "@/lib/config";
import { useSite } from "@/lib/context/site-context";
export default function SitePlanSection() {
  const { site } = useSite();
  const { siteAndFloorPlan } = getSiteConfig(site);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { onOpen } = useModal();

  const filteredPlans =
    selectedCategory === "All"
      ? siteAndFloorPlan.floorPlans.plans
      : siteAndFloorPlan.floorPlans.plans.filter(
          (plan) => plan.category === selectedCategory
        );

  return (
    <Section
      id="sitefloorplan"
      title={siteAndFloorPlan.title}
      subtitle={siteAndFloorPlan.description}
    >
      {/* Master Plan Section */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {siteAndFloorPlan.masterPlan.title}
        </h3>
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative aspect-video max-w-2xl mx-auto bg-gray-100 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src={siteAndFloorPlan.masterPlan.image.src}
                alt={siteAndFloorPlan.masterPlan.image.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-100 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <Button
                  className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
                  size="lg"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  {siteAndFloorPlan.masterPlan.cta.title}
                </Button>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{siteAndFloorPlan.masterPlan.title}</DialogTitle>
            </DialogHeader>
            <div className="relative aspect-video mt-2">
              <Image
                src={siteAndFloorPlan.masterPlan.image.src}
                alt={siteAndFloorPlan.masterPlan.image.alt}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Floor Plans Section */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-xl font-bold text-gray-900">
            {siteAndFloorPlan.floorPlans.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {siteAndFloorPlan.floorPlans.categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-primary "
                    : "hover:text-primary hover:border-primary"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Floor Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {filteredPlans.map((plan, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] bg-gray-100 rounded-md overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={plan.image}
                alt={`Floor Plan ${plan.type}`}
                fill
                className={`object-cover blur-[1px] transition-all duration-500 ${
                  hoveredIndex === index ? "scale-105 blur-0" : "scale-100"
                }`}
              />
              {/* Type Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-primary text-white py-1.5 px-2">
                <p className="text-xs text-center font-medium">{plan.type}</p>
              </div>
              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-all duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Button
                  size="sm"
                  className="bg-white text-gray-900 hover:bg-gray-100"
                  onClick={() =>
                    onOpen("enquiry", {
                      title: `Enquire About ${plan.type}`,
                      description: siteAndFloorPlan.floorPlans.cta.description,
                    })
                  }
                >
                  <Eye className="mr-0.5 h-3.5 w-3.5 hidden sm:block" />
                  {siteAndFloorPlan.floorPlans.cta.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
