"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IndianRupee } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { useModal } from "@/lib/stores/use-modal-store";
import { getSiteConfig } from "@/lib/config";
import { useSite } from "@/lib/context/site-context";

export default function PriceSection() {
  const { site } = useSite();
  const { pricing } = getSiteConfig(site);
  const { onOpen } = useModal();

  return (
    <Section id="pricing" title={pricing.title} subtitle={pricing.description}>
      {/* Price Table - Desktop */}
      <div className="hidden sm:block bg-white rounded-lg shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold">Type</TableHead>
              <TableHead className="font-semibold">Carpet Area</TableHead>
              <TableHead className="font-semibold">Price</TableHead>
              <TableHead className="font-semibold">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pricing.prices.map((item, index) => (
              <TableRow
                key={index}
                className="hover:bg-gray-50 transition-colors"
              >
                <TableCell className="font-medium">{item.type}</TableCell>
                <TableCell>{item.carpetArea}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <IndianRupee className="h-4 w-4" />
                    <span>{item.price}</span>
                    <span className="text-sm text-gray-500">{item.suffix}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    className="h-8"
                    onClick={() =>
                      onOpen("enquiry", {
                        title: pricing.cta.title,
                        description: pricing.cta.description,
                      })
                    }
                  >
                    {pricing.cta.title}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Price Cards - Mobile */}
      <div className="grid gap-4 sm:hidden">
        {pricing.prices.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-900">{item.type}</h3>
              <div className="flex items-center gap-1 text-gray-900">
                <IndianRupee className="h-4 w-4" />
                <span>{item.price}</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>{item.carpetArea}</span>
              <span>{item.suffix}</span>
            </div>
            <div className="mt-2 self-end">
              <Button
                variant="default"
                size="sm"
                onClick={() =>
                  onOpen("enquiry", {
                    title: pricing.cta.title,
                    description: pricing.cta.description,
                  })
                }
              >
                {pricing.cta.title}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Complete Costing Details Card */}
      <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 md:max-w-[280px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group">
                <Image
                  src={pricing.detailPricing.image.src}
                  alt={pricing.detailPricing.image.alt}
                  fill
                  className="object-cover blur-[1px] transition-all duration-500 group-hover:scale-105 group-hover:blur-0"
                />
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {pricing.detailPricing.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {pricing.detailPricing.description}
              </p>
              <Button
                onClick={() =>
                  onOpen("enquiry", {
                    title: pricing.detailPricing.cta.title,
                    description: pricing.detailPricing.cta.description,
                  })
                }
              >
                {pricing.detailPricing.cta.title}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
