import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0A0E3F] text-white border-t border-[#FF1E56]/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/design-mode/0dd563_f73a8b6b1c3f4902bc5b1b670e3f2c94~mv2.png"
                  alt="KKPL Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                  unoptimized={true}
                />
              </div>
              <div>
                <div className="text-xl font-bold">KKPL</div>
                <div className="text-xs text-[#39FF14]">Karnataka Kabaddi Pro League</div>
              </div>
            </div>
            <p className="text-[#A0A0C0] text-sm leading-relaxed">
              Where Strength Meets Spirit. Karnataka's premier kabaddi tournament promoting youth talent and
              sportsmanship across the state.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#39FF14]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#A0A0C0] hover:text-[#FF1E56] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="text-[#A0A0C0] hover:text-[#FF1E56] transition-colors text-sm">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#A0A0C0] hover:text-[#FF1E56] transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#A0A0C0] hover:text-[#FF1E56] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#A0A0C0] hover:text-[#FF1E56] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#39FF14]">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61583282259791"
                className="w-10 h-10 bg-[#FF1E56]/20 hover:bg-[#FF1E56] rounded-lg flex items-center justify-center transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/kkpl.kabaddi/"
                className="w-10 h-10 bg-[#39FF14]/20 hover:bg-[#39FF14] rounded-lg flex items-center justify-center transition-colors text-[#0A0E3F]"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@kkplkabaddi?si=fCe4QxOgvHW4o_l_"
                className="w-10 h-10 bg-[#FF1E56]/20 hover:bg-[#FF1E56] rounded-lg flex items-center justify-center transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/KkplKabaddi"
                className="w-10 h-10 bg-[#39FF14]/20 hover:bg-[#39FF14] rounded-lg flex items-center justify-center transition-colors text-[#0A0E3F]"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#FF1E56]/20 mt-8 pt-8 text-center text-sm text-[#A0A0C0]">
          <p>© 2025 KKPL – Karnataka Kabaddi Pro League. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
