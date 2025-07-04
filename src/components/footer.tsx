import {
  Facebook,
  Linkedin,
  Youtube,
  PinIcon as Pinterest,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="p-4 justify-center items-center flex ">
      {/* Footer Container with Glassmorphism Effect */}
      <footer className="w-full max-w-7xl bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-2xl">
        {/* Top Section - Logo and Email Signup in same line */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 rounded-2xl p-4 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 mb-8">
          {/* Left Side - Brand Logo */}
          <div className="flex items-center gap-2">
            <Image
              width={200}
              height={200}
              src="https://framerusercontent.com/images/zwQHAxHH7zmQIuOxNaVLTq7oHk.svg"
              alt="Revo Logo"
              className="w-8 h-8"
            />
            <span className="text-white text-xl font-semibold">Revo</span>
          </div>

          {/* Right Side - Email Signup */}
          <div className="flex gap-2 w-full lg:w-auto">
            <Input
              placeholder="Write you email here..."
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 min-w-[280px]"
            />
            <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/20 whitespace-nowrap">
              Join the waitlist
            </Button>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-8">
          <p className="text-gray-300 text-sm leading-relaxed max-w-md">
            Revo is all you&apos;ll ever need in a template. It stands out from
            the crowd, fully customizable and with the power of CMS, you can
            achieve results in a matter of minutes.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Home Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Home</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* More Templates Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">More Templates</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Majrix
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Saved
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Ruya
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Nastira
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Bayt
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Get Template
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media Section */}
            <div>
              <p className="text-gray-300 text-sm mb-3">
                Get latest updates here
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Pinterest size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-right">
              <p className="text-gray-400 text-xs">
                Made by Template | Powered by Framer
              </p>
              <p className="text-gray-400 text-xs mt-1">Copyright 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
