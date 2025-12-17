"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BRAND_CONFIG, getWhatsAppLink } from "@/lib/config";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full" style={{ backgroundColor: '#caeaf3' }}>
      <div className="container mx-auto flex h-20 md:h-24 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 md:gap-4">
          <div className="relative h-[50px] w-[103px] md:h-[60px] md:w-[124px]">
            <Image
              src={BRAND_CONFIG.logo}
              alt={BRAND_CONFIG.name}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-lg md:text-xl font-semibold font-[family-name:var(--font-poppins)]" style={{ color: BRAND_CONFIG.primaryColor }}>
              KLINIK NUR AQILA
            </span>
            <span className="text-sm md:text-base font-normal font-[family-name:var(--font-inter)]" style={{ color: BRAND_CONFIG.primaryColor }}>
              SERENDAH
            </span>
          </div>
        </Link>

        {/* WhatsApp CTA Button */}
        <Button
          asChild
          size="lg"
          className="bg-[#25D366] text-white hover:bg-[#20BA5A]"
        >
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi kami di WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span className="hidden sm:inline">WhatsApp Kami</span>
            <span className="sm:hidden">Chat</span>
          </a>
        </Button>
      </div>
    </header>
  );
}
