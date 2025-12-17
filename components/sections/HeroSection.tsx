"use client";

import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/config";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-background.jpg)',
        }}
      />

      {/* Overlay with low opacity */}
      <div className="absolute inset-0 bg-white opacity-70" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Kesihatan Anda,{" "}
            <span className="text-primary">Keutamaan Kami</span>
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg text-gray-600 sm:text-xl md:mb-10 md:text-2xl">
            Layanan mesra dan profesional untuk seluruh keluarga. Kami sedia membantu
            keperluan kesihatan anda di Serendah, Selangor.
          </p>

          {/* WhatsApp CTA Button */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 bg-[#25D366] px-8 text-base font-semibold text-white hover:bg-[#20BA5A] sm:h-14 sm:px-10 sm:text-lg"
            >
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hubungi kami melalui WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                WhatsApp Kami Sekarang
              </a>
            </Button>
          </div>

          {/* Additional Info */}
          <p className="mt-6 text-sm text-gray-500 sm:text-base">
            📍 Serendah, Selangor • ⏰ Buka 9 pagi - 9 malam (Sabtu tutup)
          </p>
        </div>
      </div>
    </section>
  );
}
