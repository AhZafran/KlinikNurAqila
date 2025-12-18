"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/lib/config";

export function TeamSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set(prev).add(index));
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "50px",
        }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section id="team" className="w-full bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Team Kami
          </h2>
          <p className="text-lg text-gray-600">
            Pasukan profesional yang berdedikasi untuk kesihatan anda
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`group transform transition-all duration-700 ${
                visibleCards.has(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* Gradient Background Accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative flex flex-col items-center">
                  {/* Profile Image Container */}
                  <div className="relative overflow-hidden rounded-full border-4 border-white shadow-lg transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-xl">
                    <div className="relative h-40 w-40 overflow-hidden rounded-full bg-gradient-to-br from-primary/10 to-primary/5">
                      <Image
                        src={member.image}
                        alt={member.role}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        sizes="160px"
                        style={{ objectPosition: 'center 20%' }}
                      />
                    </div>

                    {/* Animated Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-50" />
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-primary/5 transition-transform duration-500 group-hover:translate-x-6 group-hover:-translate-y-6" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-16 flex justify-center">
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}
