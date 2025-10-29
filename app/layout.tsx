import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "KKPL - Karnataka Kabaddi Pro League",
  description: "Where Strength Meets Spirit - Karnataka's Premier Kabaddi Tournament",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
