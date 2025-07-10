"use client"

import { Settings, Calendar, FileText, Rocket } from "lucide-react"

export default function ProcessSection() {
  const processSteps = [
    {
      icon: Settings,
      title: "Choose a Service",
      description: "Select from our comprehensive range of IT services tailored to your business needs",
      color: "text-purple-400",
      bgColor: "bg-purple-400/20",
      hoverShadow: "hover:shadow-purple-500/25",
    },
    {
      icon: Calendar,
      title: "Request a Meeting",
      description: "Schedule a consultation with our expert team to discuss your requirements",
      color: "text-blue-400",
      bgColor: "bg-blue-400/20",
      hoverShadow: "hover:shadow-blue-500/25",
    },
    {
      icon: FileText,
      title: "Receive Custom Plan",
      description: "Get a tailored solution designed specifically for your business objectives",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/20",
      hoverShadow: "hover:shadow-cyan-500/25",
    },
    {
      icon: Rocket,
      title: "Let's Make it Happen",
      description: "Implementation and ongoing support to ensure your success",
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
              <span className="text-cyan-400 font-bold uppercase tracking-wider text-lg">Process</span>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              How We{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Our streamlined process ensures efficient delivery and exceptional results for every project
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-purple-900/40 backdrop-blur-md border border-white/30 rounded-3xl p-8 text-center group hover:scale-105 transition-all duration-500 hover:border-cyan-400/50 shadow-2xl ${step.hoverShadow}`}
              >
                <div className="relative mb-8">
                  <div
                    className={`w-20 h-20 ${step.bgColor} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className={`w-10 h-10 ${step.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
