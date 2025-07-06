"use client"

import { Lock, Zap, Target, Palette, BarChart3, Grid3X3 } from "lucide-react"
import Image from "next/image"

export default function IntegrationsSection() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-blue-600/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-32">
          {/* Logo/Icon */}
          <div className="w-24 h-24 mb-12 rounded-full overflow-hidden border border-purple-400/20 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl">
            <Image
              src="https://framerusercontent.com/images/8MkwasRBy3HRzvABiTvWpfB8Wx4.svg"
              alt="Integration Logo"
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Badge */}
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center space-x-4">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
              <span className="text-white text-base font-medium tracking-wider">Integrations</span>
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Integrates with Your Favourite Tools
          </h1>

          {/* Description with IT content */}
          
          <p className="text-gray-400 text-base max-w-3xl mx-auto leading-relaxed">
            you&apos;re working in software development, cybersecurity, data analytics, or cloud infrastructure,
            our integrations ensure your IT operations stay streamlined and efficient. Equip your tech teams with
            the tools they rely on — without compromise.
          </p>
        </div>

        {/* Integration Hub */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[600px] h-[400px] mx-auto">
            {/* Connection Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 600 400"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="connectionLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
                  <stop offset="30%" stopColor="rgba(139, 92, 246, 0.3)" />
                  <stop offset="70%" stopColor="rgba(139, 92, 246, 0.3)" />
                  <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
                </linearGradient>
              </defs>

              {/* Lines from center to each integration */}
              <line x1="300" y1="200" x2="120" y2="80" stroke="url(#connectionLine)" strokeWidth="1" />
              <line x1="300" y1="200" x2="480" y2="80" stroke="url(#connectionLine)" strokeWidth="1" />
              <line x1="300" y1="200" x2="80" y2="200" stroke="url(#connectionLine)" strokeWidth="1" />
              <line x1="300" y1="200" x2="520" y2="200" stroke="url(#connectionLine)" strokeWidth="1" />
              <line x1="300" y1="200" x2="120" y2="320" stroke="url(#connectionLine)" strokeWidth="1" />
              <line x1="300" y1="200" x2="480" y2="320" stroke="url(#connectionLine)" strokeWidth="1" />
            </svg>

            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 w-36 h-36 bg-purple-500/20 rounded-3xl blur-xl"></div>
                <div className="relative w-36 h-36 rounded-3xl cursor-pointer overflow-hidden shadow-2xl border border-purple-400/30 bg-white/5 backdrop-blur-2xl flex items-center justify-center">
                  <Image
                    src="https://framerusercontent.com/images/zwQHAxHH7zmQIuOxNaVLTq7oHk.svg"
                    alt="Feature Icon"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Integration Cards */}
            <div className="absolute top-0 left-4 sm:left-20">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
              </div>
            </div>

            <div className="absolute top-0 right-4 sm:right-20">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
              </div>
            </div>

            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
              </div>
            </div>

            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
              </div>
            </div>

            <div className="absolute bottom-0 left-4 sm:left-20">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
              </div>
            </div>

            <div className="absolute bottom-0 right-4 sm:right-20">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                <Grid3X3 className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
