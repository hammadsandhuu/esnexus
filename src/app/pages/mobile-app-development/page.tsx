"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Code,
  Wrench,
  MonitorPlay,
  ShieldCheck,
  Smartphone,
  LayoutTemplate,
  Sliders,
  Bug,
  Database,
  Cloud,
  GitBranch,
  UserCheck,
  Settings2,
} from "lucide-react";

const iconList = [
  { icon: UserCheck, label: "UX Design" },
  { icon: Database, label: "Backend" },
  { icon: GitBranch, label: "Versioning" },
  { icon: Bug, label: "Debugging" },
  { icon: Cloud, label: "Cloud" },
  { icon: Smartphone, label: "Deployment" },
  { icon: MonitorPlay, label: "Monitoring" },
];


const reasons = [
  "Expertise in both Android and iOS platforms with native and cross-platform development.",
  "User-focused app designs that prioritize performance, responsiveness, and usability.",
  "Agile methodology ensuring timely delivery and transparent process.",
  "Integration with backend systems, APIs, and third-party services.",
  "Strong post-launch support and app store optimization (ASO).",
  "Security-first development approach to protect user data and privacy.",
];

export default function AppDevelopmentPage() {
  return (
    <div className="text-white px-4 sm:px-6 md:px-12 pt-40">
      {/* Top Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
        App Development
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
          <section>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-md overflow-hidden">
              <Image
                src="/app-1.png" // Replace with your actual image path
                alt="App Development Process"
                fill
                className="object-cover opacity-70"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </section>
          <section className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Overview
            </h2>
            <p className="text-base leading-relaxed">
              At DITECH, we specialize in delivering high-performance mobile
              apps tailored for your business goals. Our team crafts secure,
              scalable, and intuitive applications that run seamlessly across
              iOS and Android platforms.
            </p>
            <p className="mt-4 text-base">
              Whether you&apos;re launching a startup app or a large enterprise
              solution, our developers bring years of experience in building
              feature-rich applications using modern technologies like Flutter,
              React Native, Kotlin, and Swift.
            </p>
          </section>

          {/* Replacing "Services We Offer" with an Image */}

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

          {/* Bottom Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg shadow-md overflow-hidden">
              <Image
                src="/app-2.png"
                alt="App Showcase 1"
                fill
                className="object-cover opacity-70"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg shadow-md overflow-hidden">
              <Image
                src="/app-3.png"
                alt="App Showcase 2"
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
              { label: "Cybersecurity", href: "/pages/cybersecurity" },
              {
                label: "Software Development",
                href: "/pages/software-development",
              },
              { label: "AI Services", href: "/pages/ai" },
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
