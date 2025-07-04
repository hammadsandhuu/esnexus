"use client";

import React from "react";
import { useState } from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Mark L.",
    role: "Social Media Manager",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "The integration with AI tools is seamless and makes managing my content pipeline so much easier. I couldn't ask for a better starting point!",
  },
  {
    id: 2,
    name: "Sarah K.",
    role: "Content Creator",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "This platform has revolutionized how I create and manage content. The AI features save me hours every week!",
  },
  {
    id: 3,
    name: "David M.",
    role: "Marketing Director",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "Outstanding results! Our team's productivity has increased dramatically since we started using this platform.",
  },
  {
    id: 4,
    name: "Emily R.",
    role: "Digital Strategist",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "The user experience is incredible. Everything flows naturally and the AI suggestions are spot-on every time.",
  },
  {
    id: 5,
    name: "Alex T.",
    role: "Brand Manager",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "Game-changer for our content strategy. The quality and efficiency improvements are beyond our expectations.",
  },
];

export default function GlassmorphismTestimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="min-h-screen  py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* 3D Glassmorphic Heart Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Image
                width={200}
                height={200}
                src="https://framerusercontent.com/images/NlwVunhuEfyN5DjaTrQr5ki0.svg"
                alt="Heart Icon"
                className=" w-20 drop-shadow-2xl"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))",
                }}
              />
            </div>
          </div>

          {/* Testimonials Label */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-2 h-2 bg-white rotate-45"></div>
            <span className="text-white text-lg font-medium">Testimonials</span>
            <div className="w-2 h-2 bg-white rotate-45"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            They Love What We Do
          </h1>

          {/* Subtitle */}
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
              See how our platform has transformed content creation for teams
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              and businesses, delivering efficiency, quality, and results they
              love.
            </p>
          </div>
        </div>

        {/* Testimonials Carousel using shadcn */}
        <div className="max-w-7xl mx-auto relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => {
                const isCenter = index === current - 1;
                return (
                  <CarouselItem
                    key={testimonial.id}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-/3"
                  >
                    <div className="flex justify-center px-2">
                      <div
                        className={`w-full max-w-lg transition-all duration-500 ${
                          isCenter ? " z-10" : " opacity-40 blur-sm"
                        }`}
                      >
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl min-h-[320px]">
                          {/* User Info */}
                          <div className="flex items-center gap-4 mb-6">
                            <Image
                              fill
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full border-2 border-white/20"
                            />
                            <div>
                              <h3 className="text-white font-semibold text-lg">
                                {testimonial.name}
                              </h3>
                              <p className="text-gray-300 text-sm">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>

                          {/* Quote Icon */}
                          <div className="mb-4">
                            <Quote
                              width={32}
                              height={32}
                              className="text-white/30"
                            />
                          </div>

                          {/* Testimonial Text */}
                          <p className="text-white text-base leading-relaxed mb-4">
                            {testimonial.text}
                          </p>

                          {/* Rating */}
                          <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                width={16}
                                height={16}
                                className="text-yellow-400 fill-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Navigation arrows - keeping them inside Carousel */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="bg-white/10 hover:bg-white/20 border-white/20 text-white relative left-0 translate-y-0" />

              {/* Dots Navigation */}
              <div className="flex gap-2 mx-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === current - 1
                        ? "bg-white scale-125"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              <CarouselNext className="bg-white/10 hover:bg-white/20 border-white/20 text-white relative right-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
