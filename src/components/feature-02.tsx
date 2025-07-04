"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Features02() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Automated Content Generation Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-white/10 pt-10 px-6"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Automated Content Generation
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  Generate high-quality blogs, social media posts, and more in
                  seconds with our powerful AI algorithms, saving you time and
                  effort.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden h-96">
                <Image
                width={200}
                height={200}
                  src="/x.png"
                  alt="Automated Content Generation Interface"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Smart Content Creation Tools Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#8772F4] border border-purple-500/30 backdrop-blur-sm rounded-2xl pt-10 px-6"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Smart Content Creation Tools
                </h3>
                <p className="text-purple-100 text-base leading-relaxed">
                  Streamline your content workflow with AI-driven tools designed
                  to simplify and enhance your content creation process.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden h-96">
                <Image
                  width={200}
                  height={200}
                  src="/apps.png"
                  alt="Smart Content Creation Tools Interface"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Real-Time Collaboration Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-white/10 pt-10 px-6"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Real-Time Collaboration
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  Create, edit and refine content with your team in real-time.
                  Share ideas, give feedback, and work together seamlessly.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden h-96">
                <Image
                  width={200}
                  height={200}
                  src="/x2.png"
                  alt="Real-Time Collaboration Interface"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Get Started Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link
            href="#get-started"
            className="px-7 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
