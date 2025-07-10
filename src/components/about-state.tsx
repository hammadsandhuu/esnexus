"use client"

import { CheckCircle, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutStatsSection() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                <span className="text-cyan-400 font-bold uppercase tracking-wider text-lg">Working About</span>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Trusted by a{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Large Number
                </span>{" "}
                of Happy Customers
              </h2>

              <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
                Leading companies use highly skilled IT consultants, service and support to help them achieve their
                business objectives. We have been providing quality IT services and solutions to businesses for many
                years.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-white font-semibold text-lg">100% Client Satisfaction</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-white font-semibold text-lg">World Class Service</span>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-purple-900/40 backdrop-blur-md border border-white/15 cursor-pointer text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                Talk to a Consultant
              </Button>
            </div>

            {/* Right Side - Stats */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-8">
                <div className="bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-purple-900/40 backdrop-blur-md border border-white/30 rounded-3xl p-10 text-center group hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/25">
                  <div className="w-20 h-20 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="text-6xl font-bold text-white mb-3">50 +</div>
                  <div className="text-gray-300 font-semibold text-lg">Satisfied Clients</div>
                </div>

                <div className="bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-purple-900/40 backdrop-blur-md border border-white/30 rounded-3xl p-10 text-center group hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25">
                  <div className="w-20 h-20 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-10 h-10 text-purple-400" />
                  </div>
                  <div className="text-6xl font-bold text-white mb-3">15 +</div>
                  <div className="text-gray-300 font-semibold text-lg">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
