"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getSiteConfig } from "@/lib/config";
import { useModal } from "@/lib/stores/use-modal-store";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import EnquireSection from "../enquire-section";
import { Button } from "../ui/button";
import { useSite } from "@/lib/context/site-context";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { isOpen, onClose, type, data } = useModal();
  const { site } = useSite();
  const { branding, enquire, hero } = getSiteConfig(site);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleFormSubmit = () => {
    onClose();
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        {/* Universal Close Button */}
        {isOpen && (
          <div className="absolute right-3 top-3 z-50">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        )}

        {type === "enquiry" && (
          <>
            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-2">
              {/* Features Section */}
              <div className="relative">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={hero.banners[0].src}
                    alt={hero.banners[0].alt}
                    fill
                    className="object-cover brightness-[0.2]"
                  />
                </div>

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between text-white">
                  {/* Logo */}
                  <div className="mb-8">
                    <Image
                      src={branding.logo}
                      alt="Logo"
                      width={180}
                      height={50}
                      className="brightness bg-white p-2 rounded-md"
                    />
                  </div>

                  {/* Features */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">We Promise</h3>
                    {enquire.enquiryFeatures.length > 0 && (
                      <div className="space-y-4">
                        {enquire.enquiryFeatures.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 group"
                          >
                            <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                              <feature.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-medium">{feature.title}</h4>
                              <p className="text-sm text-white/70">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Contact */}
                  <div className="mt-auto pt-6">
                    <div className="text-sm text-white/70">
                      {enquire.callUs.title}
                    </div>
                    <div className="text-lg font-semibold">
                      {enquire.callUs.phone}
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold">
                    {data.title || ""}
                  </DialogTitle>
                  {data.description && (
                    <DialogDescription className="text-sm text-muted-foreground">
                      {data.description}
                    </DialogDescription>
                  )}
                </DialogHeader>
                <div className="mt-4">
                  <EnquireSection
                    showFreeVisitButton={false}
                    isModal
                    onSubmit={handleFormSubmit}
                  />
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="flex flex-col md:hidden">
              {/* Image Section */}
              {/* <div className="relative">
                    <div className="relative aspect-video">
                      <Image
                        src="/images/banner-1.webp"
                        alt="Background"
                        fill
                        className="object-cover brightness-50"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60">
                        <div className="relative h-full p-6 pt-12">
                          <Image
                            src="/images/logo.svg"
                            alt="Logo"
                            width={140}
                            height={40}
                            className="brightness-0 invert"
                          />
                        </div>
                      </div>
                    </div>
                  </div> */}

              {/* Form Section */}
              <div className="flex-1 p-6 bg-background">
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold">
                    {data.title || ""}
                  </DialogTitle>
                  {data.description && (
                    <DialogDescription className="text-sm text-muted-foreground">
                      {data.description}
                    </DialogDescription>
                  )}
                </DialogHeader>

                {/* Quick Features */}
                {enquire.enquiryFeatures.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 my-4">
                    {enquire.enquiryFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center p-2 rounded-lg bg-muted/50"
                      >
                        <div className="p-2 rounded-full bg-primary/10 mb-2">
                          <feature.icon className="h-5 w-5" />
                        </div>
                        <p className="text-xs font-medium">{feature.title}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-4">
                  <EnquireSection
                    showFreeVisitButton={false}
                    isModal
                    onSubmit={handleFormSubmit}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
