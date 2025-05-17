import { useEffect, useRef } from "react";
import { useModal } from "@/lib/stores/use-modal-store";
import { usePathname } from "next/navigation";

export const useAutoModal = (delay: number = 5000) => {
  const { onOpen, isOpen } = useModal();
  const hasShownRef = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    // Don't show modal on thank you page
    if (pathname.includes("/thank-you")) {
      return;
    }

    if (!isOpen && !hasShownRef.current) {
      const timer = setTimeout(() => {
        onOpen("enquiry", {
          title: "Get The Best Quote",
          description: "Get the best quote for your dream home",
        });
        hasShownRef.current = true;
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay, onOpen, isOpen, pathname]);
};
