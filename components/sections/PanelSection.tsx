"use client";

import Image from "next/image";
import { PANELS } from "@/lib/config";

export function PanelSection() {
  return (
    <section id="panels" className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Panel Kami
          </h2>
          <p className="text-lg text-gray-600">
            Kami menerima panel insurans dan syarikat berikut
          </p>
        </div>

        {/* Panels Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {PANELS.map((panel) => (
            <div
              key={panel.id}
              className="group flex items-center justify-center rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:scale-105"
            >
              <div className="relative h-20 w-full">
                <Image
                  src={panel.logo}
                  alt={panel.name}
                  fill
                  className="object-contain transition-opacity group-hover:opacity-80"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
