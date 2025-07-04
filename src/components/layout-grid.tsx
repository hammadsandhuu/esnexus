"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
};

export default function Component() {
  return (
    <div className="min-h-screen pb-8">
      <div className="relative py-20  px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {/* Glowing Orb */}
          <motion.div className="relative mb-8 flex justify-center" {...fadeUp}>
            <div className="relative w-48 h-48">
              <Image
                src="https://framerusercontent.com/images/eFdCzowvaMtiH5jFCxXsXeJJpu4.svg"
                alt="AI Hero Image"
                width={192}
                height={192}
                className="object-cover rounded-full"
              />
            </div>

            {/* Dotted Pattern */}
            <div className="absolute top-16 -z-10 opacity-30">
              <div className="grid grid-cols-8 gap-2">
                {Array.from({ length: 64 }).map((_, i) => (
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
            className="flex items-center justify-center mb-12 w-full"
            {...fadeUp}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="w-28 h-px bg-gray-600"></div>
            <div className="w-3 h-3 bg-white rotate-45 opacity-60"></div>
            <span className="text-gray-300 text-lg font-medium tracking-wider px-6">
              What&apos;s New Badge
            </span>
            <div className="w-3 h-3 bg-white rotate-45 opacity-60"></div>
            <div className="w-28 h-px bg-gray-600"></div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            {...fadeUp}
            transition={{ delay: 0.2 }}
          >
            Content Powered by AI
          </motion.h1>

          {/* Subtext */}
          <motion.div
            className="space-y-2"
            {...fadeUp}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-300 text-lg">
              Discover the transformative benefits of using AI
            </p>
            <p className="text-gray-300 text-lg">
              Create to supercharge your content production.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Masonry Grid Layout */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 grid-rows-8 gap-4 h-[700px]">
          {/* 1 - Large Left Card */}
          <motion.div
            {...fadeUp}
            className="col-span-7 row-span-4 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="h-3/4 relative">
              <Image
                width={200}
                height={200}
                src="https://framerusercontent.com/images/enXLvngj2vcYFpe8CGqBMeBLm0.svg"
                alt="AI Insights"
                
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center h-1/4 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-2">
                AI-Powered Insights
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Leverage data-driven insights to create impactful content.
              </p>
            </div>
          </motion.div>

          {/* 2 - Medium Right Top Card */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="col-span-5 row-span-4 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="h-3/4 relative">
              <Image
                width={200}
                height={200}
                src="/AI-Subject.png"
                alt="Automated Workflows"
                
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center h-1/4 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-white mb-2">
                Automated Workflows
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Simplify your processes with intelligent automation.
              </p>
            </div>
          </motion.div>

          {/* 3 - Medium Left Bottom Card */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="col-span-5 row-span-4 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="h-3/4 relative">
              <Image
                width={200}
                height={200}
                src="/Ai-project.png"
                alt="Content Pipeline"
                
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center h-1/4 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-white mb-2">
                Streamlined Content Pipeline
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Organize your entire content production pipeline.
              </p>
            </div>
          </motion.div>

          {/* 4 - Large Right Bottom Card */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="col-span-7 row-span-4 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="h-3/4 relative">
              <Image
                width={200}
                height={200}
                src="/ai-possition.png"
                alt="Collaborative Workspace"
                
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center h-1/4 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-2">
                Collaborative Workspace
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Empower your team with intuitive collaboration tools.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
