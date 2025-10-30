"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/news-events", label: "News & Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <style jsx>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-content {
          animation: marqueeScroll 50s linear infinite;
        }
      `}</style>
      <div className="sticky top-0 z-50">
        {/* Marquee Banner */}
        <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 h-10 flex items-center overflow-hidden border-b border-purple-700/30 relative">
          <div className="flex marquee-content">
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex gap-16 px-16">
                {[...Array(15)].map((_, i) => (
                  <span key={i} className="text-white font-semibold text-sm uppercase tracking-wider whitespace-nowrap">
                    KKPL Coming Soon
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      
      {/* Navigation */}
      <nav className="bg-[#001728] backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-14 h-14 relative">
              <Image
                src="/images/design-mode/0dd563_f73a8b6b1c3f4902bc5b1b670e3f2c94~mv2.png"
                alt="KKPL Logo"
                width={56}
                height={56}
                className="object-contain"
                priority
                unoptimized={true}
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-white">KKPL</div>
              <div className="text-xs text-secondary">Karnataka Kabaddi Pro League</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-secondary transition-colors font-semibold text-sm uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-white hover:text-secondary transition-colors font-semibold uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
    </div>
    </>
  )
}
