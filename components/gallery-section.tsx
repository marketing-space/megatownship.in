"use client";

import { Section } from "@/components/ui/section";
import { getSiteConfig } from "@/lib/config";
import { useSite } from "@/lib/context/site-context";
import { useModal } from "@/lib/stores/use-modal-store";
import { Download } from "lucide-react";
import Image from "next/image";

export default function GallerySection() {
  const { onOpen } = useModal();
  const { site } = useSite();
  const { gallery } = getSiteConfig(site);

  return (
    <Section
      id="gallery"
      title={gallery.title}
      subtitle={gallery.description}
      button={{
        text: gallery.cta.title,
        icon: <Download className="mr-1 h-4 w-4" />,
        onClick: () =>
          onOpen("enquiry", {
            title: gallery.cta.title,
            description: gallery.cta.description,
          }),
      }}
    >
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.images.map((item, index) => (
          // <div
          //   key={index}
          //   className={`group relative overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all duration-500 hover:shadow-xl`}
          // >
          //   <div className="relative">
          //     <Image
          //       src={item.image}
          //       alt={item.title}
          //       fill
          //       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          //       className="object-contain transition-transform duration-700 group-hover:scale-110"
          //     />
          //     <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          //       <h3 className="text-white font-medium">{item.title}</h3>
          //     </div>
          //   </div>
          // </div>
          <div
            key={index}
            className={`group relative overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all duration-500 hover:shadow-xl`}
          >
            <div className={`relative aspect-[16/9]`}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <h3 className="text-white font-medium">{item.title}</h3>
         
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
