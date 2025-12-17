"use client";

import { Heart, Zap, MapPin, Car, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHY_CHOOSE_US, getWhatsAppLink } from "@/lib/config";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

// Map icon names to Lucide components
const iconMap = {
  "user-heart": Heart,
  "zap": Zap,
  "map-pin": MapPin,
  "parking-circle": Car,
  "clock": Clock,
};

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mengapa Pilih Kami?
          </h2>
          <p className="text-lg text-gray-600">
            Komitmen kami untuk memberikan perkhidmatan kesihatan terbaik
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-12">
          {/* First row - 3 items */}
          <div className="mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.slice(0, 3).map((benefit) => {
              const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];

              return (
                <div
                  key={benefit.id}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon */}
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {IconComponent && (
                      <IconComponent className="h-8 w-8 text-primary" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Second row - 2 items centered */}
          <div className="flex flex-wrap justify-center gap-8">
            {WHY_CHOOSE_US.slice(3, 5).map((benefit) => {
              const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];

              return (
                <div
                  key={benefit.id}
                  className="flex w-full flex-col items-center text-center sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
                >
                  {/* Icon */}
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {IconComponent && (
                      <IconComponent className="h-8 w-8 text-primary" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex justify-center">
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
              Hubungi Kami Sekarang
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
