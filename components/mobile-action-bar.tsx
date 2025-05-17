"use client";

import { Button } from "@/components/ui/button";
import { useModal } from "@/lib/stores/use-modal-store";
import { MessageSquare, Phone } from "lucide-react";
import { getSiteConfig } from "@/lib/config";
import { useSite } from "@/lib/context/site-context";

export default function MobileActionBar() {
  const { onOpen } = useModal();
  const { site } = useSite();
  const { contact, name } = getSiteConfig(site);

  return (
    <div className="fixed bottom-4 left-4 right-4 max-w-md mx-auto lg:hidden z-50">
      <div className="grid grid-cols-3">
        {/* Call Button */}
        <Button
          variant="ghost"
          className="flex gap-2 items-center justify-center h-14 rounded-none bg-primary text-white hover:bg-gray-50 rounded-l-full border-r border-gray-200"
          onClick={() => window.open(`tel:${contact.phone}`)}
        >
          <Phone className="size-8 mb-0.5" />
          <span className="text-lg font-medium">Call</span>
        </Button>

        {/* Enquire Button */}
        <Button
          variant="ghost"
          className="flex gap-2 items-center justify-center h-14 rounded-none bg-primary text-white hover:bg-gray-50 border-r border-gray-200"
          onClick={() =>
            onOpen("enquiry", {
              title: "Get The Best Quote",
              description: "Get the best quote for your dream home",
            })
          }
        >
          <MessageSquare className="size-8  mb-0.5" />
          <span className="text-lg font-medium">Enquire</span>
        </Button>

        {/* What's App Button */}
        <Button
          variant="ghost"
          className="flex gap-2 items-center justify-center h-14 rounded-none bg-primary text-white hover:bg-gray-50 rounded-r-full"
          onClick={() =>
            window.open(
              `https://api.whatsapp.com/send?phone=${contact.whatsapp}&text=I am Interested in ${name} at ${contact.address}. Please Send me details.`
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
          </svg>
          <span className="text-lg font-medium">WhatsApp</span>
        </Button>
      </div>
    </div>
  );
}
