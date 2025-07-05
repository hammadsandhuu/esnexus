"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function FAQ() {
  return (
    <div id="integrations" className="min-h-screen py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* FAQ Icon with Dotted Pattern */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative w-40 h-28">
            <Image
              
              src="/FAQ.png"
              alt="FAQ"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
        {/* FAQs Badge */}
        <div className="flex items-center justify-center mb-12 w-full ">
          <div className="w-28 h-px bg-gray-600"></div>
          <div className="w-3 h-3 bg-white rotate-45 opacity-60 "></div>
          <span className="text-gray-300 text-lg font-medium tracking-wider px-6">
            FAQs
          </span>
          <div className="w-3 h-3 bg-white rotate-45 opacity-60 "></div>
          <div className="w-28 h-px bg-gray-600"></div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Answers to All Your Questions
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Get answers to the most common questions and learn how to make the
          most of our powerful content creation tools.
        </p>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto text-left">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-2"
            >
              <AccordionTrigger className="text-white cursor-pointer text-lg font-medium hover:no-underline">
                Is the template free to use?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
                Yes, our template is completely free to use for personal and
                commercial projects. You can download it, customize it, and use
                it without any licensing fees or restrictions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-2"
            >
              <AccordionTrigger className="text-white text-lg font-medium cursor-pointer hover:no-underline">
                Can I customize the template to fit my needs?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
                The template is built with modern technologies and follows best
                practices, making it easy to customize. You can modify colors,
                layouts, content, and functionality to match your specific
                requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-2"
            >
              <AccordionTrigger className="text-white cursor-pointer text-lg font-medium hover:no-underline">
                Do I need any coding knowledge to use this template?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
                Basic HTML/CSS knowledge is helpful for customization, but the
                template comes with comprehensive documentation and examples.
                Many customizations can be done through simple configuration
                changes without deep coding knowledge.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-2"
            >
              <AccordionTrigger className="text-white cursor-pointer text-lg font-medium hover:no-underline">
                Is the template optimized for mobile devices?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
                Yes, the template is fully responsive and optimized for all
                device sizes. It uses modern CSS techniques and frameworks to
                ensure a seamless experience across desktop, tablet, and mobile
                devices.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-2"
            >
              <AccordionTrigger className="text-white cursor-pointer text-lg font-medium hover:no-underline">
                How do I get started with the template?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
                Getting started is easy! Simply download the template files,
                follow the setup instructions in the README file, and
                you&apos;ll have a working website in minutes. We also provide
                video tutorials and documentation to help you along the way.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-2"
            >
              <AccordionTrigger className="text-white text-lg cursor-pointer font-medium hover:no-underline">
                Can I use this template for commercial projects?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
                Yes, you can use this template for commercial projects without
                any restrictions. Whether you&apos;re building a website for
                your business, client work, or selling products/services,
                you&apos;re free to use and modify the template as needed.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
