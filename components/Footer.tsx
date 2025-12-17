"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";
import { BRAND_CONFIG, CLINIC_INFO, SOCIAL_MEDIA } from "@/lib/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t text-gray-700" style={{ backgroundColor: '#caeaf3' }}>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo & About */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-flex items-center space-x-2">
              <div className="relative h-12 w-12">
                <Image
                  src={BRAND_CONFIG.logo}
                  alt={BRAND_CONFIG.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-gray-900">
                {BRAND_CONFIG.name}
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-gray-600">
              Klinik kesihatan yang mesra dan profesional di Serendah, Selangor.
              Kami komited untuk memberikan perkhidmatan kesihatan terbaik
              untuk anda dan keluarga.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Hubungi Kami
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>{CLINIC_INFO.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="hover:text-gray-900"
                >
                  {CLINIC_INFO.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0 text-primary" />
                <span>{CLINIC_INFO.operatingHours}</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Ikuti Kami
            </h3>
            <div className="flex gap-4">
              <a
                href={SOCIAL_MEDIA.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/50 transition-colors hover:bg-primary hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_MEDIA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/50 transition-colors hover:bg-primary hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-400 pt-8 text-center text-sm text-gray-600">
          <p>
            © {currentYear} {BRAND_CONFIG.name}. Hak Cipta Terpelihara.
          </p>
        </div>
      </div>
    </footer>
  );
}
