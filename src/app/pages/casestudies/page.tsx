"use client"

import { useState } from "react"
import {  Clock, Users, TrendingUp,  } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "security", name: "Cybersecurity" },
    { id: "cloud", name: "Cloud Solutions" },
    { id: "ai", name: "AI & Analytics" },
    { id: "automation", name: "Automation" },
  ]

  const caseStudies = [
    {
      id: 1,
      title: "Advanced Threat Detection System",
      description:
        "Implemented AI-powered threat detection reducing security incidents by 95% for a Fortune 500 company.",
      category: "security",
      image: "/case-1.png",
      duration: "6 months",
      team: "8 specialists",
      results: "95% threat reduction",
      tags: ["AI", "Security", "Real-time"],
      color: "text-red-400",
      bgColor: "bg-red-400/20",
    },
    {
      id: 2,
      title: "Customer Experience Platform",
      description:
        "Built a comprehensive customer service platform increasing satisfaction scores by 4.5 stars average.",
      category: "automation",
      image: "/case-2.png",
      duration: "4 months",
      team: "6 developers",
      results: "4.5★ satisfaction",
      tags: ["CRM", "Automation", "Analytics"],
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/20",
    },
    {
      id: 3,
      title: "Digital Security Infrastructure",
      description:
        "Comprehensive security overhaul protecting sensitive data with zero-trust architecture implementation.",
      category: "security",
      image: "/case-3.png",
      duration: "8 months",
      team: "12 experts",
      results: "100% compliance",
      tags: ["Zero-Trust", "Compliance", "Infrastructure"],
      color: "text-blue-400",
      bgColor: "bg-blue-400/20",
    },
    {
      id: 4,
      title: "Cloud Migration & Optimization",
      description:
        "Seamless cloud migration reducing operational costs by 60% while improving performance and scalability.",
      category: "cloud",
      image: "/case-4.png",
      duration: "5 months",
      team: "10 engineers",
      results: "60% cost reduction",
      tags: ["AWS", "Migration", "Optimization"],
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/20",
    },
    {
      id: 5,
      title: "Global Network Analytics",
      description:
        "Real-time network monitoring and analytics platform providing insights across 50+ global locations.",
      category: "ai",
      image: "/case-5.png",
      duration: "7 months",
      team: "15 specialists",
      results: "50+ locations",
      tags: ["Analytics", "Real-time", "Global"],
      color: "text-purple-400",
      bgColor: "bg-purple-400/20",
    },
    {
      id: 6,
      title: "AI-Powered Innovation Hub",
      description:
        "Developed an AI innovation platform accelerating product development cycles by 40% through automation.",
      category: "ai",
      image: "/case-6.png",
      duration: "9 months",
      team: "20 developers",
      results: "40% faster development",
      tags: ["AI", "Innovation", "Automation"],
      color: "text-green-400",
      bgColor: "bg-green-400/20",
    },
  ]

  const filteredStudies =
    selectedCategory === "all" ? caseStudies : caseStudies.filter((study) => study.category === selectedCategory)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-40">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
              <span className="text-cyan-400 font-bold uppercase tracking-wider text-lg">Case Studies</span>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Success{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Stories
              </span>{" "}
              & Results
            </h1>
            <p className="text-gray-300 text-xl max-w-4xl mx-auto mb-12">
              Discover how we&apos;ve helped businesses transform their operations, enhance security, and drive growth
              through innovative IT solutions
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full cursor-pointer font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg"
                      : "bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-purple-900/40 backdrop-blur-md border border-white/30 text-gray-300 hover:text-white hover:border-cyan-400/50"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 cursor-pointer md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-purple-900/40 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-500 hover:border-cyan-400/50 shadow-2xl hover:shadow-cyan-500/25"
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        className="bg-cyan-400/20 text-cyan-400 border-cyan-400/30 hover:bg-cyan-400/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {study.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">{study.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{study.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{study.team}</span>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-2xl p-4 ">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-400 font-semibold">Key Result</span>
                    </div>
                    <p className="text-white font-bold text-lg">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-purple-900/40 backdrop-blur-md border border-white/30 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-4xl font-bold text-white mb-6">
                Ready to Create Your{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Success Story?
                </span>
              </h3>
              <p className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto">
                Let&apos;s discuss how we can help transform your business with innovative IT solutions tailored to your
                specific needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                  Start Your Project
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-transparent font-bold px-8 py-4 rounded-xl text-lg"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
