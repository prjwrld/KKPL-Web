import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
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
                <div className="text-xs text-secondary">Karnataka Kabaddi Pro League</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Where Strength Meets Spirit. Karnataka's premier kabaddi tournament promoting youth talent and
              sportsmanship across the state.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/news-events"
                  className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 KKPL – Karnataka Kabaddi Pro League. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
