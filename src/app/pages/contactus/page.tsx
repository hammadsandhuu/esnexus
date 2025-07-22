"use client";

import type React from "react";
import { useState } from "react";
import { MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState("address");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen p-40 px-4">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Contact Us
          </h2>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch using the form or details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Need Help?
              </h1>
              <p className="text-white text-lg">
                Reach out to the world's most reliable IT services.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="h-12 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-lg px-4 text-white placeholder:text-white focus:border-cyan-400 focus:ring-cyan-400"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-lg px-4 text-white placeholder:text-white focus:border-cyan-400 focus:ring-cyan-400"
                  required
                />
              </div>

              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="h-12 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-lg px-4 text-white placeholder:text-white focus:border-cyan-400 focus:ring-cyan-400"
              />

              <Textarea
                name="message"
                placeholder="Please describe what you need. *"
                value={formData.message}
                onChange={handleInputChange}
                className="min-h-[120px] bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-white placeholder:text-white focus:border-cyan-400 focus:ring-cyan-400 resize-none"
                required
              />

              <div className="pt-4">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm cursor-pointer border border-white/10 text-white font-medium px-8 py-3 h-12 rounded-lg transition-colors duration-200 shadow-sm"
                >
                  Get a free consultation
                </Button>
              </div>
            </form>
          </div>

          {/* Address Section Only */}
          <div className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="flex mb-8">
              <button
                className="px-6 py-3 font-medium text-lg text-cyan-400 border-b-2 border-cyan-400"
                disabled
              >
                Address
              </button>
            </div>

            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-2">
                    OUR LOCATION
                  </h3>
                  <p className="text-white">Stanford, VA</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-2">
                    SEND US MAIL
                  </h3>
                  <p className="text-white">info@esnexus.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
