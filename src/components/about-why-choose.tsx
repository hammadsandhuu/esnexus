"use client"

import { Headphones, Lightbulb, Shield, Clock } from "lucide-react"

export default function WhyChooseSection() {
  const features = [
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description:
        "Round-the-clock assistance whenever you need help with our comprehensive support system and dedicated team.",
      color: "text-purple-400",
      bgColor: "bg-purple-400/20",
      hoverShadow: "hover:shadow-purple-500/25",
    },
    {
      icon: Lightbulb,
      title: "Smart Solutions",
      description:
        "Innovative and intelligent IT solutions designed to optimize your business operations and drive growth.",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/20",
      hoverShadow: "hover:shadow-cyan-500/25",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security measures and reliable infrastructure to protect your business data and operations.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/20",
      hoverShadow: "hover:shadow-blue-500/25",
    },
    {
      icon: Clock,
      title: "Fast Implementation",
      description: "Quick deployment and implementation processes to get your systems up and running in minimal time.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/20",
      hoverShadow: "hover:shadow-yellow-500/25",
    },
  ]

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
          {/* Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
              <span className="text-cyan-400 font-bold uppercase tracking-wider text-lg">Why Choose Us</span>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              We Provide{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                IT Services
              </span>{" "}
              & Consultancy
            </h2>
            <h3 className="text-3xl lg:text-4xl font-semibold text-gray-300 mb-6">To Help Your Business Grow</h3>
            <p className="text-gray-400 text-xl max-w-4xl mx-auto">
              Discover why businesses trust us with their technology needs and digital transformation journey
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-purple-900/40 backdrop-blur-md border border-white/30 rounded-3xl p-10 group hover:scale-105 transition-all duration-500 hover:border-cyan-400/50 shadow-2xl ${feature.hoverShadow}`}
              >
                <div className="flex items-start gap-8">
                  <div
                    className={`w-20 h-20 ${feature.bgColor} rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`w-10 h-10 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
