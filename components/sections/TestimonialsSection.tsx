"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "@/lib/config";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Testimoni Pesakit
          </h2>
          <p className="text-lg text-gray-600">
            Apa kata pesakit kami tentang perkhidmatan kami
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-primary/5 to-white p-8 shadow-lg md:p-12">
              {/* Quote Icon */}
              <div className="mb-6 flex justify-center">
                <Quote className="h-12 w-12 text-primary/20" />
              </div>

              {/* Rating Stars */}
              <div className="mb-6 flex justify-center gap-1">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="mb-6 text-center text-lg italic text-gray-700 md:text-xl">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author Name */}
              <p className="text-center font-semibold text-gray-900">
                {currentTestimonial.name}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                aria-label="Testimoni sebelumnya"
                className="h-10 w-10 rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Pergi ke testimoni ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                aria-label="Testimoni seterusnya"
                className="h-10 w-10 rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
