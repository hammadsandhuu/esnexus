"use client"

import { useState } from "react"
import { Check, Server, Cloud, ShieldCheck, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Basic IT Support",
      price: isYearly ? "$0" : "$0",
      period: isYearly ? "/year" : "/month",
      description: "Perfect for startups and small teams",
      features: [
        "Remote troubleshooting",
        "Basic network setup",
        "Email support (business hours)"
      ],
      popular: false,
      buttonText: "Request Service",
    },
    {
      name: "Cloud & Infrastructure",
      price: isYearly ? "$290" : "$29",
      period: isYearly ? "/year" : "/month",
      description: "Ideal for growing businesses",
      features: [
        "Cloud migration & management",
        "Server maintenance",
        "24/7 system monitoring",
        "Data backup & recovery"
      ],
      popular: true,
      buttonText: "Request Service",
    },
    {
      name: "Enterprise Security",
      price: isYearly ? "$590" : "$59",
      period: isYearly ? "/year" : "/month",
      description: "Advanced protection for scaling enterprises",
      features: [
        "Firewall configuration",
        "Vulnerability scanning",
        "Incident response",
        "Security audits"
      ],
      popular: false,
      buttonText: "Request Service",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <DollarSign className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Professional IT Solutions</h1>
          <p id="pricing" className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Explore our tailored IT services designed to boost your business operations, ensure security, and provide reliable tech infrastructure.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isYearly ? "bg-white text-gray-900 shadow-lg" : "text-gray-300 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isYearly ? "bg-white text-gray-900 shadow-lg" : "text-gray-300 hover:text-white"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* IT Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative group ${plan.popular ? "lg:scale-105 lg:-mt-4" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`relative h-full p-8 rounded-2xl border transition-all duration-300 hover:-105 ${
                  plan.popular
                    ? "border-purple-400/50 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm shadow-2xl shadow-purple-500/25"
                    : "border-white/20 hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                  {plan.name.includes("Basic") && <Server className="w-6 h-6 text-white" />}
                  {plan.name.includes("Cloud") && <Cloud className="w-6 h-6 text-white" />}
                  {plan.name.includes("Security") && <ShieldCheck className="w-6 h-6 text-white" />}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>

                <div className="mb-2">
                  <span className="text-4xl lg:text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300 text-lg">{plan.period}</span>
                </div>

                <p className="text-gray-300 mb-8">{plan.description}</p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <Check className="w-6 h-6 text-white border rounded-sm p-1 border-white/15 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm hover:bg-bg-gradient-to-r cursor-pointer text-white shadow-lg "
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20 cursor-pointer hover:border-white/30 backdrop-blur-md"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-gray-400">Consultation available with all service tiers. No upfront payment required.</p>
        </div>
      </div>
    </div>
  )
}
