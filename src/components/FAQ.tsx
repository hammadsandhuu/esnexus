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
    <div className="min-h-screen py-20 px-8">
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
        <div className="flex items-center justify-center mb-12 w-full">
          <div className="w-28 h-px bg-gray-600"></div>
          <div className="w-3 h-3 bg-white rotate-45 opacity-60"></div>
          <span className="text-gray-300 text-lg font-medium tracking-wider px-6">
            FAQs
          </span>
          <div className="w-3 h-3 bg-white rotate-45 opacity-60"></div>
          <div className="w-28 h-px bg-gray-600"></div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Answers to All Your Questions
        </h1>

        {/* Subtext */}
        <p  id="integrations" className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Find answers to common IT solutions questions and learn how we help
          businesses grow through technology.
        </p>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto text-left">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-2"
            >
              <AccordionTrigger className="text-white cursor-pointer text-lg font-medium hover:no-underline">
                What types of IT solutions do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
                We provide a wide range of IT services including cloud computing,
                cybersecurity, network setup, software development, IT consulting,
                and infrastructure management tailored to business needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-2"
            >
              <AccordionTrigger className="text-white text-lg font-medium cursor-pointer hover:no-underline">
                Is your support available 24/7?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
                Yes, our dedicated support team is available 24/7 to assist with any
                technical issues or emergencies. We ensure minimal downtime for your
                business operations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-2"
            >
              <AccordionTrigger className="text-white cursor-pointer text-lg font-medium hover:no-underline">
                Can you help with migrating to the cloud?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
                Absolutely! We specialize in cloud migration services including
                assessment, planning, execution, and ongoing management using
                platforms like AWS, Azure, and Google Cloud.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-2"
            >
              <AccordionTrigger className="text-white cursor-pointer text-lg font-medium hover:no-underline">
                How do you ensure data security?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
                We implement industry-standard security protocols, end-to-end
                encryption, regular vulnerability assessments, and compliance with
                GDPR, HIPAA, and other regulations to keep your data secure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-2"
            >
              <AccordionTrigger className="text-white cursor-pointer text-lg font-medium hover:no-underline">
                Do you offer custom software development?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
                Yes, we design and develop custom software tailored to your
                business needs — from enterprise apps to mobile and web platforms
                using modern, scalable technologies.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-2"
            >
              <AccordionTrigger className="text-white text-lg cursor-pointer font-medium hover:no-underline">
                What industries do you serve?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
                We serve multiple industries including healthcare, finance,
                e-commerce, education, logistics, and government. Our solutions are
                tailored for industry-specific challenges.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Optional slow spin animation keyframes */}
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
