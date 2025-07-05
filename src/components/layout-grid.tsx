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

            {/* Dotted Pattern - Hidden on mobile */}
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
              What&apos;s New Badge
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
            Content Powered by AI
          </motion.h1>

          {/* Subtext */}
          <motion.div
            className="space-y-1 sm:space-y-2 px-4"
            {...fadeUp}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
              Discover the transformative benefits of using AI
            </p>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
              Create to supercharge your content production.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Responsive Masonry Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6">
          {/* Card 1 - Large Left */}
          <motion.div
            {...fadeUp}
            className="sm:col-span-2 lg:col-span-7 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden"
          >
            <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-60 relative">
              <Image
                fill
                src="https://framerusercontent.com/images/enXLvngj2vcYFpe8CGqBMeBLm0.svg"
                alt="AI Insights"
                className="object-cover"
              />
            </div>
            <div className="p-3 sm:p-4 lg:p-6 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                AI-Powered Insights
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                Leverage data-driven insights to create impactful content.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Small Right */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="sm:col-span-2 lg:col-span-5 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden"
          >
            <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-60 relative">
              <Image
                fill
                src="/AI-Subject.png"
                alt="Automated Workflows"
                className="object-cover"
              />
            </div>
            <div className="p-3 sm:p-4 lg:p-6 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                Automated Workflows
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                Simplify your processes with intelligent automation.
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Small Left */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="sm:col-span-2 lg:col-span-5 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden"
          >
            <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-60 relative">
              <Image
                fill
                src="/Ai-project.png"
                alt="Content Pipeline"
                className="object-cover"
              />
            </div>
            <div className="p-3 sm:p-4 lg:p-6 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                Streamlined Content Pipeline
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                Organize your entire content production pipeline.
              </p>
            </div>
          </motion.div>

          {/* Card 4 - Large Right */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="sm:col-span-2 lg:col-span-7 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden"
          >
            <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-60 relative">
              <Image
                fill
                src="/ai-possition.png"
                alt="Collaborative Workspace"
                className="object-cover"
              />
            </div>
            <div className="p-3 sm:p-4 lg:p-6 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                Collaborative Workspace
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                Empower your team with intuitive collaboration tools.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
