"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      id="hero-section"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-32 overflow-hidden"
    >
      {/* Spotlight background effect */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      {/* Heading Text */}
      <div
        className={`text-center mb-12 transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
        }`}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          IT Software & Design
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Creating better IT solutions
        </h1>
      </div>

      {/* Dashboard Image */}
      <div className="relative w-full max-w-2xl px-4 sm:px-8 mx-auto">
        <div
          className={` overflow-hidden transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <Image
            src="/laptop-1.png"
            alt="Dashboard Interface"
            width={600}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-float-fast"></div>
      </div>
    </div>
  );
}

export default HeroSection;
