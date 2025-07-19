"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
};

export default function ResponsiveAISection() {
  return (
    <div id="about" className="min-h-screen pb-8">
      <div className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {/* Glowing Orb */}
          <motion.div
            className="relative mb-6 sm:mb-8 flex justify-center"
            {...fadeUp}
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-48 lg:h-48">
              <Image
                src="https://framerusercontent.com/images/eFdCzowvaMtiH5jFCxXsXeJJpu4.svg"
                alt="AI Hero Image"
                fill
                className="object-cover rounded-full"
              />
            </div>

            {/* Dotted Pattern */}
            <div className="absolute top-8 sm:top-12 -z-10 opacity-30 hidden md:block">
              <div className="grid grid-cols-6 sm:grid-cols-8 gap-1 sm:gap-2">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-white rounded-full opacity-50"
                  ></div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            className="flex items-center justify-center mb-6 sm:mb-8 lg:mb-12 w-full"
            {...fadeUp}
            transition={{ delay: 0.1 }}
          >
            <div className="w-12 sm:w-20 lg:w-28 h-px bg-gray-600"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rotate-45 opacity-60 "></div>
            <span className="text-gray-300 text-sm sm:text-base lg:text-lg font-medium tracking-wider px-2 sm:px-4 lg:px-6 whitespace-nowrap">
              Our Core Services{" "}
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rotate-45 opacity-60 "></div>
            <div className="w-12 sm:w-20 lg:w-28 h-px bg-gray-600"></div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 px-2"
            {...fadeUp}
            transition={{ delay: 0.2 }}
          >
            Explore Our Specialized Offerings
          </motion.h1>

          {/* Subtext */}
          <motion.div
            className="space-y-1 sm:space-y-2 px-4"
            {...fadeUp}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-300 text-sm sm:text-base lg:text-md">
              We provide tailored IT solutions in AI, software engineering,
              cybersecurity, and mobile app development to empower your digital
              journey.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6">
          {/* Card 1 */}
          <motion.div
            {...fadeUp}
            className="sm:col-span-2 lg:col-span-7 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden"
          >
            <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-60 relative">
              <Image
                fill
                src="/AI Services.png"
                alt="AI in IT"
                className="object-cover"
              />
            </div>
            <div className="p-3 sm:p-4 lg:p-6 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                AI Services
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                Develop smart applications with NLP, ML, and predictive
                analytics to improve engagement and automate operations.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="sm:col-span-2 lg:col-span-5 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden"
          >
            <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-60 relative">
              <Image
                fill
                src="/Software Services.png"
                alt="Automated Workflows"
                className="object-cover"
              />
            </div>
            <div className="p-3 sm:p-4 lg:p-6 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                Software Services
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                From enterprise applications to tailored platforms, we deliver
                robust and scalable digital solutions.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="sm:col-span-2 lg:col-span-5 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden"
          >
            <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-60 relative">
              <Image
                fill
                src="/cyber security image.png"
                alt="IT Pipelines"
                className="object-cover"
              />
            </div>
            <div className="p-3 sm:p-4 lg:p-6 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                Cybersecurity Services
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                Shield your infrastructure from threats with proactive
                monitoring, audits, and encrypted systems.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="sm:col-span-2 lg:col-span-7 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden"
          >
            <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-60 relative">
              <Image
                fill
                src="/App Development.png"
                alt="Collaborative Tools"
                className="object-cover"
              />
            </div>
            <div className="p-3 sm:p-4 lg:p-6 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                App Development{" "}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                Build smooth, high-performance mobile apps for iOS & Android
                tailored to your brand and goals.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
