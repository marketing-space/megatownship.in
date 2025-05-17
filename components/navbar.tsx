"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getSiteConfig } from "@/lib/config";
import { useSite } from "@/lib/context/site-context";
import { useModal } from "@/lib/stores/use-modal-store";
import { motion } from "framer-motion";
import { Download, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const { onOpen } = useModal();
  const { site } = useSite();
  const { name, navbar, branding } = getSiteConfig(site);

  const siteRoute = site ? `/${site}` : "/";

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const targetId = href.replace(`${site}/#`, "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navbar.navItems.map((route) =>
        route.href.replace(`${siteRoute}/#`, "")
      );
      if (window.scrollY === 0) {
        setActiveSection("home");
        return;
      }

      let maxVisibleSection = "";
      let maxVisibleArea = 0;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const visibleHeight =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

          if (visibleHeight > maxVisibleArea) {
            maxVisibleArea = visibleHeight;
            maxVisibleSection = section;
          }
        }
      }

      if (maxVisibleSection) {
        setActiveSection(maxVisibleSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [siteRoute]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b shadow-sm">
      <div className="flex items-center h-14 p-2 sm:px-4 mx-auto">
        {/* Logo - reduced size */}
        <Link href={siteRoute} className="flex items-center">
          <Image
            src={branding.logo}
            alt={name}
            width={180}
            height={50}
            className="w-28 sm:w-36 lg:w-[160px] object-contain"
          />
        </Link>

        {/* Desktop Navigation - added indicator */}
        <div className="hidden lg:flex items-center justify-center space-x-4 lg:space-x-0 xl:space-x-4 mx-6">
          {navbar.navItems.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={(e) => handleClick(e, route.href)}
              className={`text-sm font-medium transition-colors flex items-center gap-x-1 py-1 px-2 rounded-md relative
                ${
                  activeSection === route.href.replace(`${siteRoute}/#`, "")
                    ? "text-primary bg-primary/5"
                    : "hover:text-primary hover:bg-primary/5"
                }`}
            >
              <route.icon className="h-4 w-4 flex-shrink-0" />
              {route.label}
              {activeSection === route.href.replace(`${siteRoute}/#`, "") && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center gap-x-2 ml-auto lg:hidden">
            {/* Brochure button - reduced size */}
            <Button
              className="h-8 text-sm relative overflow-hidden group"
              onClick={() =>
                onOpen("enquiry", {
                  title: navbar.cta.title,
                  description: navbar.cta.description,
                })
              }
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
              <Download className="mr-0.5 h-3.5 w-3.5" />
              <span className="hidden sm:inline">{navbar.cta.title}</span>
              <span className="sm:hidden">{navbar.cta.title}</span>
            </Button>

            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
          </div>

          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-white"
          >
            <nav className="flex flex-col gap-3 mt-8">
              {navbar.navItems.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={(e) => {
                    handleClick(e, route.href);
                    setIsOpen(false);
                  }}
                  className={`px-3 py-2 text-base transition-colors flex items-center gap-x-2 rounded-md
                    ${
                      activeSection === route.href.replace(`${siteRoute}/#`, "")
                        ? "text-primary bg-primary/5"
                        : "hover:text-primary hover:bg-primary/5"
                    }`}
                >
                  <route.icon className="h-4 w-4 flex-shrink-0" />
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Brochure button - reduced size */}
        <div className="hidden lg:flex items-center ml-auto">
          <Button
            className="h-8 text-sm relative overflow-hidden group"
            onClick={() =>
              onOpen("enquiry", {
                title: navbar.cta.title,
                description: navbar.cta.description,
              })
            }
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
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center"
            >
              <Download className="mr-1 h-3.5 w-3.5" />
              {navbar.cta.title}
            </motion.div>
          </Button>
        </div>
      </div>
    </nav>
  );
}
