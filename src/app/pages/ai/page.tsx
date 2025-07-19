"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  BrainCircuit,
  Cpu,
  Bot,
  ScanEye,
  Network,
  DatabaseZap,
  Activity,
} from "lucide-react";

const iconList = [
  { icon: BrainCircuit, label: "AI LOGIC" }, // Represents neural networks / ML
  { icon: Cpu, label: "ML MODELS" }, // CPU / processing intelligence
  { icon: Bot, label: "AUTOMATION" }, // AI bots, assistants
  { icon: ScanEye, label: "VISION" }, // Computer vision
  { icon: Network, label: "DATA FLOW" }, // AI pipelines / connected systems
  { icon: DatabaseZap, label: "BIG DATA" }, // Training data / fast queries
  { icon: Activity, label: "PREDICT" }, // Predictive analytics / decision making
];

const reasons = [
  "Customized AI models tailored to your business goals and industry needs.",
  "Integration of machine learning, natural language processing, and computer vision.",
  "Data-driven insights that improve customer experience and operational efficiency.",
  "Deployment of scalable, secure, and ethical AI systems.",
  "End-to-end support from data collection to model training and post-launch optimization.",
  "Experienced team with strong background in TensorFlow, PyTorch, and cloud AI tools.",
];

export default function AIPage() {
  return (
    <div className="text-white px-4 sm:px-6 md:px-12 pt-40">
      {/* Top Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
        AI Services
      </h1>

      {/* Icons Top Row */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 text-center max-w-6xl mx-auto mb-16">
        {iconList.map(({ icon: Icon, label }, i) => (
          <div key={i} className="text-sm">
            <Icon className="w-8 h-8 mx-auto mb-2 " />
            <span className="font-medium bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="md:col-span-3 space-y-12">
          <section>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-md overflow-hidden">
              <Image
                src="/ai-1.png"
                alt="AI Solutions"
                fill
                className="object-cover opacity-70  "
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </section>
          {/* Overview */}
          <section className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Overview
            </h2>
            <p className="text-base leading-relaxed">
              DITECH delivers cutting-edge AI solutions that empower businesses
              to automate processes, make smarter decisions, and uncover hidden
              insights. From predictive analytics to intelligent chatbots, we
              build AI that delivers real-world impact.
            </p>
            <p className="mt-4 text-base">
              Our AI specialists help you leverage your data, design the right
              models, and integrate them into your digital systems. Whether you
              need recommendation engines, computer vision apps, or natural
              language tools, we deliver AI that works.
            </p>
          </section>

          {/* Image Section */}

          {/* Why Choose Us */}
          <section className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Why Choose Us
            </h2>
            <ul className="space-y-4">
              {reasons.map((point, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="text-blue-300 w-5 h-5 mt-1 mr-3" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Showcase Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg shadow-md overflow-hidden">
              <Image
                src="/ai-2.jpg"
                alt="AI Project 1"
                fill
                className="object-cover opacity-70"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg shadow-md overflow-hidden">
              <Image
                src="/ai-3.jpg"
                alt="AI Project 2"
                fill
                className="object-cover opacity-70"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="md:sticky top-28 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg space-y-6 h-fit w-full md:w-80">
          <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Other Services
          </h3>

          <ul className="space-y-3">
            {[
              {
                label: "App Development",
                href: "/pages/mobile-app-development",
              },
              { label: "Cybersecurity", href: "/pages/cybersecurity" },
              {
                label: "Software Development",
                href: "/pages/software-development",
              },
            ].map(({ label, href }, idx) => (
              <li key={idx}>
                <Link href={href}>
                  <div
                    className="text-white bg-gradient-to-r from-purple-800/30 via-blue-800/30 to-purple-800/30 
                    backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 font-medium 
                    hover:scale-[1.02] transition-all duration-200 cursor-pointer"
                  >
                    {label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <input
              type="text"
              placeholder="Search services..."
              className="w-full bg-white/10 text-white placeholder-white/70 border border-white/20 
                rounded-lg px-4 py-2 text-sm backdrop-blur focus:outline-none 
                focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
