"use client";

import { getSiteConfig } from "@/lib/config";
import Image from "next/image";
import { Section } from "./ui/section";
import { useSite } from "@/lib/context/site-context";

export default function DeveloperSection() {
  const { site } = useSite();
  const { legal, about, name, branding } = getSiteConfig(site);
  return (
    <Section id="developer" title="">
      <div className="flex flex-col gap-4">
        {/* About Content */}
        <div className="flex items-center justify-center mb-4">
          <Image src={branding.logo} alt={name} width={200} height={200} />
        </div>
        <div className="rounded-xl mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            About {name}
          </h2>
          <p className="text-gray-600 leading-relaxed">{about}</p>
        </div>

        {/* RERA Information */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            {legal.rera.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {legal.rera.details.map((item, index) => (
              <div key={index} className="p-4 rounded-lg">
                <div className="relative aspect-square w-28 mx-auto mb-2">
                  <Image
                    src={item.qrCode}
                    alt={`QR Code for ${item.title}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-gray-600">{item.reraNumber}</p>
                </div>
              </div>
            ))}
          </div>
          <p
            className="text-xs text-gray-600"
            dangerouslySetInnerHTML={{ __html: legal.rera.description }}
          />
        </div>

        {/* Legal Information */}
        <small>
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">
              Legal Information
            </h3>
            {legal.legalInfo?.length > 0 && (
              <div className="space-y-2">
                {legal.legalInfo?.map((info: any, index: number) => (
                  <li
                    key={index}
                    className="bg-white list-none flex items-start gap-2"
                  >
                    <div className="flex-shrink-0 mt-[4px]">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div className="flex flex-col gap-0">
                      <p className="text-[10px] text-gray-600">
                        {info.description}
                      </p>
                    </div>
                  </li>
                ))}
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="mt-4 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-900">Disclaimer</h3>
            <p className="text-[12px] text-gray-600">{legal.disclaimer}</p>
          </div>
        </small>
      </div>
    </Section>
  );
}
