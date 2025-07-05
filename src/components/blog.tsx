"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    date: "Apr 8, 2022",
    readTime: "6 min read",
    title: "Starting and Growing a Career in Web Design",
    description:
      "Web design careers offer growing demand, competitive salaries, and creative fulfillment in today's digital world.",
    imagePath: "/VR.png",
  },
  {
    id: 2,
    date: "Mar 15, 2022",
    readTime: "8 min read",
    title: "Create a Landing Page That Performs Great",
    description:
      "A landing page is a single-focus site with one clear goal to convert visitors into customers effectively.",
    imagePath: "/laptop.png",
  },
  {
    id: 3,
    date: "Feb 25, 2022",
    readTime: "6 min read",
    title: "How Can Designers Prepare for the Future?",
    description:
      "Designing for automation, AI, and the unknown future requires adaptability and continuous learning.",
    imagePath: "/drone.png",
  },
  {
    id: 4,
    date: "Jan 10, 2022",
    readTime: "5 min read",
    title: "Learn more about the content creation by reading our blogs",
    description:
      "Discover advanced techniques and strategies for creating engaging content that converts visitors.",
    imagePath: "/againVR.png",
    isSpecial: true,
  },
];

export default function GlassmorphismBlog() {
  return (
    <div id="blog" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://framerusercontent.com/images/QIhVF3tb6t4oIsU8Shz1ahqWk.svg"
                alt="Icon Image"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Blog Label */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-28 h-px bg-gray-600"></div>
            <div className="w-3 h-3 bg-white rotate-45 opacity-60"></div>
            <span className="text-gray-300 text-lg font-medium tracking-wider px-6">
              Blogs
            </span>
            <div className="w-3 h-3 bg-white rotate-45 opacity-60"></div>
            <div className="w-28 h-px bg-gray-600"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Insights and Updates
          </h1>

          {/* Subtitle */}
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
              Discover the transformative benefits of using AI
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Create to supercharge your content production.
            </p>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 cursor-pointer lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative rounded-2xl p-6 shadow-2xl group hover:scale-105 transition-transform duration-500 min-h-[400px] overflow-hidden"
              style={{
                backgroundImage: `url(${post.imagePath})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between rounded-2xl">
                <div className="flex items-center gap-2 text-sm text-white/80 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    {post.description}
                  </p>

                  {post.isSpecial ? (
                    <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/20 w-full group">
                      View all posts
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </Button>
                  ) : (
                    <button className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors text-sm font-medium">
                      Read more <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
