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
    <div id="hero-section" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-32 overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:-top-20  md:left-60"
        fill="white"
      />
      {/* Heading */}
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
      <div className="relative w-full max-w-6xl">
        <div
          className={`p-3.5 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-3xl border border-white/10 relative transition-all duration-1200 ease-out delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <Image
            width={600}
            height={600}
            src="/dashboard.png"
            alt="Dashboard Interface"
            className="w-full h-auto rounded-3xl shadow-2xl"
          />
        </div>

        {/* Twitter Post - Responsive */}
        <div
          className={`absolute bottom-4 sm:bottom-10 md:bottom-20 left-2 sm:left-6 md:left-10 lg:-left-24 w-40 sm:w-48 md:w-56 lg:w-64 transition-all duration-1000 ease-out delay-700 z-10 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl ${
            isVisible
              ? "translate-x-0 translate-y-0 opacity-100"
              : "-translate-x-10 translate-y-10 opacity-0"
          }`}
        >
          <Image
            width={200}
            height={200}
            src="/tweeter.png"
            alt="Twitter Post"
            className="rounded-2xl w-full h-auto"
          />
        </div>

        {/* Todo List - Responsive */}
        <div
          className={`absolute top-28 sm:top-40 md:top-52 right-2 sm:right-6 md:right-10 lg:-right-24 w-40 sm:w-48 md:w-56 lg:w-64 transition-all duration-1000 ease-out delay-500 z-10 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >
          <Image
            width={200}
            height={200}
            src="/todolist.png"
            alt="To-do List"
            className="rounded-2xl w-full h-auto"
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
