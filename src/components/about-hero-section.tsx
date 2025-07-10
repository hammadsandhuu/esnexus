"use client"

import { Award, Users, Target, Zap } from "lucide-react"

export default function AboutHeroSection() {
  return (
    <div className="min-h-screen  relative overflow-hidden flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Icons/Graphics */}
            <div className="flex">
              <div className="relative">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30 backdrop-blur-md border border-white/30 rounded-3xl flex items-center justify-center group hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25">
                    <Award className="w-10 h-10 text-purple-400" />
                  </div>
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30 backdrop-blur-md border border-white/30 rounded-3xl flex items-center justify-center group hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 mt-8">
                    <Users className="w-10 h-10 text-blue-400" />
                  </div>
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30 backdrop-blur-md border border-white/30 rounded-3xl flex items-center justify-center group hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/25 -mt-8">
                    <Target className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30 backdrop-blur-md border border-white/30 rounded-3xl flex items-center justify-center group hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-yellow-500/25">
                    <Zap className="w-10 h-10 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-purple-900/40 backdrop-blur-md border border-cyan-400/50 rounded-full mb-8 shadow-lg">
                <span className="text-cyan-400 font-bold text-lg">15 Years Of Experience</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Unlock Your Business&apos;s{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Potential
                </span>{" "}
                with Our Advanced IT Solutions
              </h1>

              <p className="text-gray-300 text-xl leading-relaxed mb-8 max-w-2xl">
                At Revo, we are a team of passionate IT professionals who are dedicated to helping businesses of all
                sizes get the most out of their technology investments. Our team of certified IT professionals has years
                of experience in providing comprehensive IT solutions.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                We understand that technology is constantly evolving, and we stay up-to-date with the latest trends and
                best practices to ensure that our clients receive the most effective and efficient solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
