"use client";

import Image from "next/image";
import {
  CheckCircle,
  GitBranch,
  Database,
  BrainCircuit,
  Folders,
  Puzzle,
  ClipboardList,
  Laptop,
} from "lucide-react";
import Link from "next/link";

const iconList = [
  { icon: Laptop, label: "DEVELOP" }, // Core software dev
  { icon: GitBranch, label: "VERSIONING" }, // Git-based development
  { icon: Database, label: "DATABASE" }, // DB integration
  { icon: BrainCircuit, label: "AI LOGIC" }, // AI/ML powered logic
  { icon: Folders, label: "ARCHITECTURE" }, // Code/file structure
  { icon: Puzzle, label: "INTEGRATE" }, // APIs/modules
  { icon: ClipboardList, label: "QA TESTING" }, // Quality assurance
];

const services = [
  "Custom Software Development",
  "Software Product Development",
  "Outsourcing Desktop/Mobile Applications",
  "Software Consultancy",
  "Large-Scale Software Development",
  "Enterprise Software Development",
  "Software with AI Capabilities",
  "Software Maintenance & Support",
  "Developing Custom Database Structures",
  "Providing Security and Performance Optimization",
  "Quality Assurance Testing",
  "User Experience Design",
  "Training & Custom User Feedback",
];

const reasons = [
  "Dedicated support for your business goals, so we can focus on results.",
  "Original & user-focused solutions — not just templates.",
  "No guesswork: your input + our insight = smart results.",
  "Professional team who works transparently and collaboratively.",
  "Secure, scalable, and performance-optimized code.",
  "Long-term partnership mindset — even after launch.",
];

export default function SoftwareDevelopmentPage() {
  return (
    <div className="text-white px-4 sm:px-6 md:px-12 pt-40 ">
      {/* Top Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
        Software Development
      </h1>

      {/* Icons Top Row */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 text-center max-w-6xl mx-auto mb-16">
        {iconList.map(({ icon: Icon, label }, i) => (
          <div key={i} className="text-sm">
            <Icon className="w-8 h-8 mx-auto mb-2" />
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
          {/* Overview */}
          <section className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Overview
            </h2>
            <p className="text-base leading-relaxed">
              DITECH provides software development & consultancy services that
              help businesses to streamline processes, improve customer
              experience, and increase business performance.
            </p>
            <p className="mt-4 text-base">
              Our software engineers follow efficient processes to deliver on
              time, with modern tech and maintainable code. Whether you&apos; re
              building a custom CRM, ERP, or mobile product, we craft each
              solution to meet exact needs.
            </p>
          </section>

          {/* Services We Offer */}
          <section className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Services We Offer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle className="text-blue-300 w-5 h-5 mt-1 mr-3" />
                  <p>{service}</p>
                </div>
              ))}
            </div>
          </section>

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

          {/* Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg shadow-md overflow-hidden">
              <Image
                src="/software-1.png"
                alt="Illustration 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg shadow-md overflow-hidden">
              <Image
                src="/software-2.png"
                alt="Illustration 2"
                fill
                className="object-cover"
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
                label: "Mobile App Development",
                href: "/pages/mobile-app-development",
              },
              {
                label: "Cybersecurity Services",
                href: "/pages/cybersecurity",
              },
              {
                label: "AI Services & Consultancy",
                href: "/pages/ai",
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
