"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

function Header() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`flex justify-between items-center w-full fixed z-40 top-4 px-36 transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"
      }`}
    >
      <div
        className="flex justify-between items-center w-full px-6 py-4 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-800 ease-out delay-200 ">
        {/* Logo */}
        <div
          className="flex items-center gap-2 transition-all duration-600 ease-out delay-400
          "
        >
          <Image width={50} height={50} src="https://framerusercontent.com/images/zwQHAxHH7zmQIuOxNaVLTq7oHk.svg" alt="Revo Logo" className="w-8 h-8" />
          <span className="text-white font-semibold text-xl">Revo</span>
        </div>

        {/* Navigation */}
        <nav
          className="flex gap-8 transition-all duration-600 ease-out delay-600 "
        >
          <Link href="#about" className="text-white/80 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#features" className="text-white/80 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#integrations" className="text-white/80 hover:text-white transition-colors">
            Integrations
          </Link>
          <Link href="#pricing" className="text-white/80 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#blog" className="text-white/80 hover:text-white transition-colors">
            Blog
          </Link>
        </nav>

        {/* Get Started Button with Glassmorphism */}
        <Link
          href="#get-started"
          className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default Header
