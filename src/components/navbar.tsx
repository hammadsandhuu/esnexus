"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

function Header() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div
      className={`flex justify-center items-center w-full fixed z-40 top-4 px-4 sm:px-8 lg:px-36 transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-7xl px-4 sm:px-6 py-4 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-800 ease-out delay-200">
        {/* Logo */}
        <Link href={"#hero-section"} className="flex items-center gap-2 transition-all duration-600 ease-out delay-400">
          <Image
            width={32}
            height={32}
            src="https://framerusercontent.com/images/zwQHAxHH7zmQIuOxNaVLTq7oHk.svg"
            alt="Revo Logo"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <span className="text-white font-semibold text-lg sm:text-xl">Revo</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 xl:gap-8 transition-all duration-600 ease-out delay-600">
          <Link href="#about" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
            About
          </Link>
          <Link href="#features" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
            Features
          </Link>
          <Link href="#integrations" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
            Integrations
          </Link>
          <Link href="#pricing" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
            Pricing
          </Link>
          <Link href="#blog" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
            Blog
          </Link>
        </nav>

        {/* Desktop Get Started Button */}
        <Link
          href="#get-started"
          className="hidden lg:block px-4 xl:px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl text-sm xl:text-base"
        >
          Start Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-white hover:text-white/80 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl">
          <nav className="flex flex-col p-6 space-y-4">
            <Link
              href="#about"
              className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#features"
              className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#integrations"
              className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Integrations
            </Link>
            <Link
              href="#pricing"
              className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#blog"
              className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="#get-started"
              className="mt-4 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Now
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

export default Header
