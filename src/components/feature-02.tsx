"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Features02() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Network Infrastructure Setup Card */}
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
                  Network Infrastructure Setup
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  We design and implement secure, scalable network infrastructures
                  to support your business operations and future growth.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden h-96">
                <Image
                  width={200}
                  height={200}
                  src="/x.png"
                  alt="Network Infrastructure Interface"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Cloud Migration Services Card */}
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
                  Cloud Migration Services
                </h3>
                <p className="text-purple-100 text-base leading-relaxed">
                  Seamlessly migrate your data and applications to the cloud with
                  minimal downtime using secure and efficient methodologies.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden h-96">
                <Image
                  width={200}
                  height={200}
                  src="/apps.png"
                  alt="Cloud Migration Services Interface"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Cybersecurity & Threat Monitoring Card */}
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
                  Cybersecurity & Threat Monitoring
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  Protect your IT environment with real-time monitoring,
                  vulnerability assessments, and advanced threat detection systems.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden h-96">
                <Image
                  width={200}
                  height={200}
                  src="/x2.png"
                  alt="Cybersecurity Monitoring Interface"
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
