"use client";

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
    <div className="p-4 flex justify-center items-center">
      <footer className="w-full max-w-7xl bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 rounded-2xl p-4 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 mb-8">
          {/* Logo */}
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

          {/* Email Signup */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Input
              placeholder="Write your email here..."
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 w-full sm:min-w-[280px]"
            />
            <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/20 w-full sm:w-auto whitespace-nowrap">
              Join the waitlist
            </Button>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-300 text-sm leading-relaxed max-w-md">
            Revo is a leading IT solutions provider, delivering tailored technology services, software development, and enterprise support to businesses worldwide. Whether you're a startup or a large-scale enterprise, we help you stay ahead with cutting-edge solutions.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* IT Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">IT Services</h3>
            <ul className="space-y-3">
              {["Software Development", "Cloud Solutions", "Cybersecurity", "Data Analytics", "Tech Support"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold mb-4">Industries</h3>
            <ul className="space-y-3">
              {["Healthcare", "Finance", "E-commerce", "Education", "Real Estate"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "Contact", "Privacy Policy", "Terms & Conditions"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Socials */}
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm mb-3">Follow us for tech updates</p>
              <div className="flex justify-center md:justify-start gap-4">
                {[Facebook, Linkedin, Youtube, Pinterest, Instagram].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-xs">
                © 2025 Revo IT Solutions. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-1">Empowering Digital Transformation</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
