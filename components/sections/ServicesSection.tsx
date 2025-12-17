"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SERVICES } from "@/lib/config";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  const checkScrollButtons = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftStart(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    scrollContainerRef.current.scrollLeft = scrollLeftStart - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const cardWidth = scrollContainerRef.current.querySelector("div")?.offsetWidth || 0;
    const gap = 24; // gap-6 = 24px
    const scrollAmount = (cardWidth + gap) * 4; // Scroll 4 cards at a time

    const newScrollLeft = direction === "left"
      ? scrollContainerRef.current.scrollLeft - scrollAmount
      : scrollContainerRef.current.scrollLeft + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });

    setTimeout(checkScrollButtons, 300);
  };

  return (
    <section id="services" className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Perkhidmatan Kami
          </h2>
          <p className="text-lg text-gray-600">
            Kami menyediakan pelbagai perkhidmatan kesihatan untuk keluarga anda
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Scroll Left Button */}
          {canScrollLeft && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white shadow-lg hover:bg-gray-50 md:flex"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          )}

          {/* Services Carousel */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className={`flex gap-6 overflow-x-auto pb-4 scrollbar-hide md:overflow-x-scroll select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              scrollSnapType: isDragging ? "none" : "x mandatory",
              WebkitOverflowScrolling: "touch",
              touchAction: "pan-x",
            }}
          >
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="flex-shrink-0 w-[280px] md:w-[calc(25%-18px)]"
                style={{ scrollSnapAlign: "start" }}
              >
                <div
                  className="group h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg"
                >
                  {/* Service Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-primary/5">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 25vw, 280px"
                      draggable={false}
                    />
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-center text-base font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Right Button */}
          {canScrollRight && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white shadow-lg hover:bg-gray-50 md:flex"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          )}
        </div>

        {/* Mobile Swipe Hint */}
        <p className="mt-4 text-center text-sm text-gray-500 md:hidden">
          ← Swipe untuk lihat lebih banyak perkhidmatan →
        </p>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
