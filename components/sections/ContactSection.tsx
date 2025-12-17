"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC_INFO, getWhatsAppLink } from "@/lib/config";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function ContactSection() {
  // Keyless Google Maps embed to avoid exposing API keys in the client
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.938965256423!2d101.6039984!3d3.3650952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc69939d4f6893%3A0xa2fd4280ac6eb8f4!2sKlinik%20Nur%20Aqila%20Serendah!5e0!3m2!1sen!2smy!4v1765276443677!5m2!1sen!2smy";

  return (
    <section id="contact" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hubungi Kami
          </h2>
          <p className="text-lg text-gray-600">
            Kami sedia membantu anda. Hubungi kami untuk sebarang pertanyaan.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Alamat
                </h3>
                <p className="text-gray-600">{CLINIC_INFO.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Telefon
                </h3>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="text-gray-600 hover:text-primary"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Waktu Operasi
                </h3>
                <p className="text-gray-600">{CLINIC_INFO.operatingHours}</p>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-[#25D366] text-white hover:bg-[#20BA5A] sm:w-auto"
              >
                <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hubungi kami melalui WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp Kami
              </a>
            </Button>
            </div>
          </div>

          {/* Google Map */}
          <div className="h-[400px] w-full overflow-hidden rounded-lg border border-gray-200 shadow-lg lg:h-[500px]">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Klinik Nur Aqila Serendah"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
