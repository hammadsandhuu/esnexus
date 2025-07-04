"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-32 overflow-hidden">
      {/* Main Heading - Slides down from top */}
      <div
        className={`text-center mb-12 transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
        }`}
      >
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">Revolutionize Your</h1>
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Content Creation Process
        </h1>
      </div>

      {/* Main Dashboard Container */}
      <div className="relative w-full max-w-6xl">
        {/* Main Dashboard Image - Slides up from bottom */}
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

        {/* Twitter Post - Slides in from bottom-left */}
        <div
          className={`absolute bottom-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm -left-24 w-64 rounded-2xl transition-all duration-1000 ease-out delay-700 ${
            isVisible ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-20 translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <Image width={200} height={200} src="/tweeter.png" alt="" />
          </div>
        </div>

        {/* Todo List - Slides in from right */}
        <div
          className={`absolute top-52 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm -right-24 w-64 rounded-2xl transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <Image width={200} height={200} className="rounded-2xl" src="/todolist.png" alt="" />
          </div>
        </div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-float-fast"></div>
      </div>
    </div>
  )
}

export default HeroSection
