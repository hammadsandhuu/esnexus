"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  PinIcon,
  Mail,
  Phone,
  Code,
  Smartphone,
  ShieldCheck,
  MonitorPlay,
  LayoutTemplate,
  Sliders,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <div className="p-4 flex justify-center items-center">
      <footer className="w-full max-w-7xl bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 rounded-2xl p-4 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/ESnexus_logo.png"
              alt="Revo Logo"
              width={120}
              height={120}
              className="h-12 sm:h-12 md:h-12 lg:h-12 xl:h-12 w-auto object-contain"
            />
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
            Creating better IT solutions to Grow Your Business
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {[
                { label: "Software Development", path: "/pages/software-development", icon: Code },
                { label: "Mobile App Development", path: "/pages/mobile-app-development", icon: Smartphone },
                { label: "Cybersecurity Services", path: "/pages/cybersecurity", icon: ShieldCheck },
                { label: "AI Services", path: "/pages/ai", icon: MonitorPlay },
              ].map(({ label, path, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href={path}
                    className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    <Icon size={16} /> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", path: "/pages/about", icon: LayoutTemplate },
                { label: "Contact Us", path: "/pages/contactus", icon: Sliders },
              ].map(({ label, path, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href={path}
                    className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    <Icon size={16} /> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              {[
                { label: "Stanford, VA", path: "/contactus", icon: PinIcon },
                { label: "info@esnexus.com", path: "mailto:info@esnexus.com", icon: Mail },
                { label: "2792545558", path: "tel:2792545558", icon: Phone },
              ].map(({ label, path, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href={path}
                    className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    <Icon size={16} /> {label}
                  </Link>
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
              <p className="text-gray-300 text-sm mb-3">
                Follow us for tech updates
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                {[
                  { icon: Facebook, link: "https://facebook.com", label: "Facebook" },
                  { icon: Linkedin, link: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Youtube, link: "https://youtube.com", label: "YouTube" },
                  { icon: Instagram, link: "https://instagram.com", label: "Instagram" },
                ].map(({ icon: Icon, link, label }, i) => (
                  <Link
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Icon size={24} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-xs">© Copyright 2023. Esnexus</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
