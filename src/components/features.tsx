"use client"

import { motion } from "framer-motion"

export default function Features() {
  return (
    <div id="features" className="relative min-h-screen overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-32 right-1/3 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-48 left-1/2 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse delay-500"></div>
        <div className="absolute top-64 right-1/4 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse delay-700"></div>
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse delay-300"></div>
        <div className="absolute bottom-48 right-1/2 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse delay-900"></div>
      </div>

      {/* Content with scroll animation */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center"
      >
        {/* Central light beam */}
        <div className="relative mb-16">
          <div className="relative w-32 h-80 mx-auto">
            {/* Beam layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/40 to-transparent blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent blur-md"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/35 to-transparent blur-lg"></div>
            {/* Core */}
            <div className="absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 bg-gradient-to-b from-transparent via-purple-300/50 to-transparent blur-xs"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-4 -translate-x-1/2 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-2 -translate-x-1/2 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
            {/* Falling particles */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={`absolute rounded-full blur-sm animate-fall-${i + 1} ${
                  i % 2 === 0 ? "w-2 h-2" : "w-1 h-1"
                } left-1/2`}
                style={{
                  top: `${8 + i * 4}px`,
                  transform: `translateX(${i % 2 === 0 ? "-" : ""}${(i + 1) * 4}px)`,
                  backgroundColor: i % 2 === 0 ? "rgb(216 180 254)" : "rgb(221 214 254)",
                  opacity: `${60 + i * 3}%`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Features label */}
        <div className="flex items-center justify-center mb-12 w-full max-w-2xl">
          <div className="w-28 h-px bg-gray-600"></div>
          <div className="w-3 h-3 bg-white rotate-45 opacity-60 "></div>
          <span className="text-gray-300 text-lg font-medium tracking-wider px-6">Features</span>
          <div className="w-3 h-3 bg-white rotate-45 opacity-60 "></div>
          <div className="w-28 h-px bg-gray-600"></div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 max-w-6xl leading-tight">
          Content Creation Made Easy
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
          Streamline your content workflow with AI-driven tools designed to simplify and enhance your content creation
          process.
        </p>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32"></div>

      <style jsx>{`
        @keyframes fallDown1 {
          0% { transform: translateY(-20px) translateX(-50%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(400px) translateX(-50%); opacity: 0; }
        }
        @keyframes fallDown2 {
          0% { transform: translateY(-30px) translateX(16px); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(420px) translateX(16px); opacity: 0; }
        }
        @keyframes fallDown3 {
          0% { transform: translateY(-25px) translateX(-24px); opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { transform: translateY(410px) translateX(-24px); opacity: 0; }
        }
        @keyframes fallDown4 {
          0% { transform: translateY(-35px) translateX(32px); opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { transform: translateY(430px) translateX(32px); opacity: 0; }
        }
        @keyframes fallDown5 {
          0% { transform: translateY(-40px) translateX(-40px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(440px) translateX(-40px); opacity: 0; }
        }
        @keyframes fallDown6 {
          0% { transform: translateY(-15px) translateX(24px); opacity: 0; }
          18% { opacity: 1; }
          82% { opacity: 1; }
          100% { transform: translateY(390px) translateX(24px); opacity: 0; }
        }
        @keyframes fallDown7 {
          0% { transform: translateY(-28px) translateX(-16px); opacity: 0; }
          14% { opacity: 1; }
          86% { opacity: 1; }
          100% { transform: translateY(415px) translateX(-16px); opacity: 0; }
        }
        @keyframes fallDown8 {
          0% { transform: translateY(-45px) translateX(48px); opacity: 0; }
          22% { opacity: 1; }
          78% { opacity: 1; }
          100% { transform: translateY(450px) translateX(48px); opacity: 0; }
        }
        @keyframes fallDown9 {
          0% { transform: translateY(-32px) translateX(-32px); opacity: 0; }
          16% { opacity: 1; }
          84% { opacity: 1; }
          100% { transform: translateY(425px) translateX(-32px); opacity: 0; }
        }
        @keyframes fallDown10 {
          0% { transform: translateY(-18px) translateX(8px); opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translateY(380px) translateX(8px); opacity: 0; }
        }
        @keyframes fallDown11 {
          0% { transform: translateY(-22px) translateX(-12px); opacity: 0; }
          13% { opacity: 1; }
          87% { opacity: 1; }
          100% { transform: translateY(395px) translateX(-12px); opacity: 0; }
        }
        @keyframes fallDown12 {
          0% { transform: translateY(-38px) translateX(28px); opacity: 0; }
          19% { opacity: 1; }
          81% { opacity: 1; }
          100% { transform: translateY(435px) translateX(28px); opacity: 0; }
        }

        .animate-fall-1 { animation: fallDown1 7s infinite linear; }
        .animate-fall-2 { animation: fallDown2 6.5s infinite linear 0.5s; }
        .animate-fall-3 { animation: fallDown3 7.2s infinite linear 1s; }
        .animate-fall-4 { animation: fallDown4 6.8s infinite linear 0.3s; }
        .animate-fall-5 { animation: fallDown5 8s infinite linear 1.2s; }
        .animate-fall-6 { animation: fallDown6 6.2s infinite linear 0.8s; }
        .animate-fall-7 { animation: fallDown7 7.1s infinite linear 0.6s; }
        .animate-fall-8 { animation: fallDown8 6.9s infinite linear 1.5s; }
        .animate-fall-9 { animation: fallDown9 7.3s infinite linear 0.2s; }
        .animate-fall-10 { animation: fallDown10 6.6s infinite linear 1.8s; }
        .animate-fall-11 { animation: fallDown11 7.4s infinite linear 0.9s; }
        .animate-fall-12 { animation: fallDown12 6.7s infinite linear 1.1s; }
      `}</style>
    </div>
  )
}
